const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const https = require("https");
const { URL } = require("url");

dotenv.config({ path: "./server/.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// Multer stores uploaded files temporarily in memory.
// They will NOT be permanently stored on this server.
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
// and follow redirects correctly while avoiding undici body timeouts.
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

// --------------------------------------------------
// HEALTH CHECK
// --------------------------------------------------

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "CyberAries HR backend is running"
    });
});

// --------------------------------------------------
// HR SUBMISSION
// --------------------------------------------------

app.post(
    "/api/hr/submit",
    upload.any(),
    async (req, res) => {
        try {
            const data = req.body;

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
            const registrationResult = await requestAppsScript(process.env.APPS_SCRIPT_URL, {
                ...data,
                action: "register",
                apiSecret: process.env.APPS_SCRIPT_SECRET
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

            // Return success response to the React frontend immediately so the UI stops showing "Submitting..."
            res.json({
                success: true,
                recordId,
                folderUrl
            });

            // Phase 2: Process file uploads asynchronously in the background
            if (uploadedFiles.length > 0 && folderId) {
                (async () => {
                    console.log(`[Background] Starting upload of ${uploadedFiles.length} files for Record ID: ${recordId}`);
                    for (let i = 0; i < uploadedFiles.length; i++) {
                        const file = uploadedFiles[i];
                        try {
                            console.log(`[Background] Uploading file ${i + 1}/${uploadedFiles.length}: ${file.originalName} (${file.fieldName})`);
                            const uploadResult = await requestAppsScript(process.env.APPS_SCRIPT_URL, {
                                action: "uploadFile",
                                folderId: folderId,
                                file: {
                                    fieldName: file.fieldName,
                                    originalName: file.originalName,
                                    mimeType: file.mimeType,
                                    base64: file.base64
                                },
                                apiSecret: process.env.APPS_SCRIPT_SECRET
                            });
                            if (uploadResult.success) {
                                console.log(`[Background] Successfully uploaded: ${file.originalName}`);
                            } else {
                                console.error(`[Background] Failed to upload ${file.originalName}:`, uploadResult.error);
                            }
                        } catch (uploadError) {
                            console.error(`[Background] Error uploading file ${file.originalName}:`, uploadError);
                        }
                    }
                    console.log(`[Background] Finished background uploads for Record ID: ${recordId}`);
                })();
            }

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

app.get("/api/test-google", async (req, res) => {
    try {
        const testData = {
            recordType: "Intern",
            fullName: "Node Test Intern",
            personalEmail: "node-test@example.com",
            phoneNumber: "9999999999",
            confirmation: "Yes"
        };

        const result = await requestAppsScript(process.env.APPS_SCRIPT_URL, {
            ...testData,
            apiSecret: process.env.APPS_SCRIPT_SECRET
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

// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, () => {
    console.log(
        `CyberAries HR backend running on port ${PORT}`
    );
});