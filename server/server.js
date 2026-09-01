const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const https = require("https");
const { URL } = require("url");

// Load local environment files if present
dotenv.config({ path: "./server/.env" });
dotenv.config();

const app = express();

// Helper to retrieve environment configuration supporting existing HR_* variables
function getEnvConfig() {
    return {
        scriptUrl: process.env.HR_GOOGLE_SCRIPT_URL || process.env.APPS_SCRIPT_URL,
        apiSecret: process.env.HR_API_SECRET || process.env.APPS_SCRIPT_SECRET,
        sheetId: process.env.HR_GOOGLE_SHEET_ID || process.env.SPREADSHEET_ID,
        submissionsFolderId: process.env.HR_SUBMISSIONS_FOLDER_ID || process.env.SUBMISSIONS_FOLDER_ID
    };
}

// Multer stores uploaded files temporarily in memory
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB per file
        files: 20
    }
});

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Helper function to send requests to Google Apps Script Web App
// and follow redirects correctly while avoiding body timeouts.
function requestAppsScript(urlStr, postData) {
    return new Promise((resolve, reject) => {
        const executeReq = (targetUrl, method, dataToSend) => {
            console.log(`[AppsScript Request] Sending ${method} request to: ${targetUrl.substring(0, 100)}...`);
            const parsedUrl = new URL(targetUrl);
            const options = {
                hostname: parsedUrl.hostname,
                path: parsedUrl.pathname + parsedUrl.search,
                method: method,
                headers: {},
                timeout: 300000 // 5 minutes timeout
            };

            if (method === "POST" && dataToSend) {
                options.headers["Content-Type"] = "application/json";
                options.headers["Content-Length"] = Buffer.byteLength(dataToSend);
                console.log(`[AppsScript Request] Payload size: ${options.headers["Content-Length"]} bytes`);
            }

            const req = https.request(options, (res) => {
                console.log(`[AppsScript Response] Received status: ${res.statusCode} from ${method} request`);
                
                // Apps Script returns 302 redirects, follow them using GET
                if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
                    const redirectUrl = res.headers.location;
                    if (redirectUrl) {
                        console.log(`[AppsScript Redirect] Following redirect to: ${redirectUrl.substring(0, 100)}...`);
                        executeReq(redirectUrl, "GET", null);
                        return;
                    }
                }

                let responseData = "";
                res.on("data", (chunk) => {
                    responseData += chunk;
                });
                res.on("end", () => {
                    console.log(`[AppsScript Response] Finished reading response. Length: ${responseData.length}`);
                    try {
                        resolve(JSON.parse(responseData));
                    } catch (e) {
                        console.error("[AppsScript Response] JSON parse failed for response data:", responseData.substring(0, 500));
                        reject(new Error(`Failed to parse JSON response: ${responseData}`));
                    }
                });
            });

            req.on("error", (err) => {
                console.error("[AppsScript Request] Connection error:", err);
                reject(err);
            });

            req.on("timeout", () => {
                console.error("[AppsScript Request] Connection timeout reached");
                req.destroy();
                reject(new Error("Request timed out"));
            });

            if (method === "POST" && dataToSend) {
                req.write(dataToSend);
            }
            req.end();
        };

        const jsonBody = JSON.stringify(postData);
        executeReq(urlStr, "POST", jsonBody);
    });
}

// Router to handle both prefixed (/api/...) and non-prefixed routes
const router = express.Router();

// --------------------------------------------------
// HEALTH CHECK
// --------------------------------------------------
router.get("/health", (req, res) => {
    const config = getEnvConfig();
    res.json({
        success: true,
        message: "CyberAries HR backend is running",
        environment: {
            hasGoogleScriptUrl: Boolean(config.scriptUrl),
            hasApiSecret: Boolean(config.apiSecret),
            hasSheetId: Boolean(config.sheetId),
            hasSubmissionsFolderId: Boolean(config.submissionsFolderId)
        }
    });
});

// --------------------------------------------------
// HR SUBMISSION
// --------------------------------------------------
router.post(
    "/hr/submit",
    upload.any(),
    async (req, res) => {
        try {
            const data = req.body;
            const config = getEnvConfig();

            // Environment variable validation
            if (!config.scriptUrl || !config.apiSecret) {
                console.error("[Backend Error] HR_GOOGLE_SCRIPT_URL or HR_API_SECRET is missing from environment variables.");
                return res.status(500).json({
                    success: false,
                    error: "Server configuration error: Google Apps Script credentials (HR_GOOGLE_SCRIPT_URL, HR_API_SECRET) not configured in environment variables."
                });
            }

            // Basic validation
            if (
                !data.recordType ||
                !data.fullName ||
                !data.personalEmail
            ) {
                return res.status(400).json({
                    success: false,
                    error:
                        "Record type, full name and personal email are required."
                });
            }

            // Code of Conduct validation
            if (
                data.codeOfConductAccepted !== "true" &&
                data.codeOfConductAccepted !== true
            ) {
                return res.status(400).json({
                    success: false,
                    error:
                        "Please read and accept the Code of Conduct before submitting the form."
                });
            }

            // Convert uploaded files to a format Apps Script can receive.
            const uploadedFiles = (req.files || []).map((file) => ({
                fieldName: file.fieldname,
                originalName: file.originalname,
                mimeType: file.mimetype,
                size: file.size,
                base64: file.buffer.toString("base64")
            }));

            console.log(
                `HR submission received: ${data.fullName} | Files: ${uploadedFiles.length}`
            );

            // Phase 1: Register Candidate & Create Main Folders (instant, returns Record ID and Folder URL)
            console.log(`[Backend] Registering candidate: ${data.fullName}`);
            const registrationResult = await requestAppsScript(config.scriptUrl, {
                ...data,
                action: "register",
                apiSecret: config.apiSecret,
                spreadsheetId: config.sheetId,
                submissionsFolderId: config.submissionsFolderId
            });

            if (!registrationResult.success) {
                console.error("Apps Script registration error:", registrationResult);
                return res.status(500).json(registrationResult);
            }

            const { recordId, folderUrl } = registrationResult;
            
            // Extract folder ID from folderUrl as a fallback
            let folderId = registrationResult.folderId;
            if (!folderId && folderUrl) {
                const matches = folderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
                if (matches && matches[1]) {
                    folderId = matches[1];
                }
            }

            console.log(`[Backend] Candidate registered successfully. Record ID: ${recordId}. Folder ID: ${folderId}`);

            // Phase 2: Process file uploads concurrently before finishing the response
            // (Ensures serverless functions do not terminate before file uploads reach Google Drive)
            let uploadCount = 0;
            if (uploadedFiles.length > 0 && folderId) {
                console.log(`[Backend] Uploading ${uploadedFiles.length} files in parallel for Record ID: ${recordId}...`);
                const uploadPromises = uploadedFiles.map(async (file, idx) => {
                    try {
                        console.log(`[Backend] Uploading file ${idx + 1}/${uploadedFiles.length}: ${file.originalName} (${file.fieldName})`);
                        const uploadResult = await requestAppsScript(config.scriptUrl, {
                            action: "uploadFile",
                            folderId: folderId,
                            file: {
                                fieldName: file.fieldName,
                                originalName: file.originalName,
                                mimeType: file.mimeType,
                                base64: file.base64
                            },
                            apiSecret: config.apiSecret
                        });
                        if (uploadResult.success) {
                            console.log(`[Backend] Successfully uploaded: ${file.originalName}`);
                            return true;
                        } else {
                            console.error(`[Backend] Failed to upload ${file.originalName}:`, uploadResult.error);
                            return false;
                        }
                    } catch (uploadError) {
                        console.error(`[Backend] Error uploading file ${file.originalName}:`, uploadError);
                        return false;
                    }
                });

                const uploadResults = await Promise.allSettled(uploadPromises);
                uploadCount = uploadResults.filter((r) => r.status === "fulfilled" && r.value === true).length;
                console.log(`[Backend] Uploaded ${uploadCount}/${uploadedFiles.length} files successfully for Record ID: ${recordId}`);
            }

            res.json({
                success: true,
                recordId,
                folderUrl,
                uploadCount
            });

        } catch (error) {
            console.error(
                "HR submission error:",
                error
            );

            res.status(500).json({
                success: false,
                error:
                    error.message || "Unable to process HR submission."
            });
        }
    }
);

// --------------------------------------------------
// GOOGLE CONNECTION TEST
// --------------------------------------------------
router.get("/test-google", async (req, res) => {
    try {
        const config = getEnvConfig();
        if (!config.scriptUrl || !config.apiSecret) {
            return res.status(500).json({
                success: false,
                error: "HR_GOOGLE_SCRIPT_URL or HR_API_SECRET is missing from environment variables."
            });
        }

        const testData = {
            recordType: "Intern",
            fullName: "Node Test Intern",
            personalEmail: "node-test@example.com",
            phoneNumber: "9999999999",
            confirmation: "Yes"
        };

        const result = await requestAppsScript(config.scriptUrl, {
            ...testData,
            apiSecret: config.apiSecret,
            spreadsheetId: config.sheetId,
            submissionsFolderId: config.submissionsFolderId
        });

        res.json(result);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Mount router under both /api and root / to support direct and rewritten calls
app.use("/api", router);
app.use("/", router);

// Start server when run directly (local development)
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`CyberAries HR backend running on port ${PORT}`);
    });
}

module.exports = app;