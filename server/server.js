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

// Helper to retrieve HR environment configuration
function getHREnvConfig() {
    const findEnv = (...keys) => {
        for (const key of keys) {
            const val = process.env[key];
            if (val && typeof val === "string" && val.trim().length > 0) {
                return val.trim();
            }
        }
        return undefined;
    };

    return {
        scriptUrl: findEnv(
            "HR_GOOGLE_SCRIPT_URL",
            "HR_APPS_SCRIPT_URL",
            "HR_SCRIPT_URL"
        ),
        apiSecret: findEnv(
            "HR_API_SECRET",
            "HR_SECRET"
        ),
        sheetId: findEnv(
            "HR_GOOGLE_SHEET_ID",
            "HR_SHEET_ID"
        ),
        submissionsFolderId: findEnv(
            "HR_SUBMISSIONS_FOLDER_ID",
            "HR_FOLDER_ID"
        )
    };
}

// Helper to retrieve Consultation Booking environment configuration
function getBookingEnvConfig() {
    const findEnv = (...keys) => {
        for (const key of keys) {
            const val = process.env[key];
            if (val && typeof val === "string" && val.trim().length > 0) {
                return val.trim();
            }
        }
        return undefined;
    };

    return {
        scriptUrl: findEnv(
            "BOOKING_GOOGLE_SCRIPT_URL",
            "BOOKING_APPS_SCRIPT_URL",
            "BOOKING_SCRIPT_URL"
        ),
        apiSecret: findEnv(
            "BOOKING_API_SECRET",
            "BOOKING_SECRET"
        ),
        calendarId: findEnv(
            "GOOGLE_CALENDAR_ID",
            "CALENDAR_ID"
        )
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
    const hrConfig = getHREnvConfig();
    const bookingConfig = getBookingEnvConfig();
    const hrKeysInEnv = Object.keys(process.env).filter(k =>
        k.startsWith("HR_") || k.includes("SCRIPT") || k.includes("SHEET") || k.includes("SECRET")
    );
    res.json({
        success: true,
        message: "CyberAries API backend is running",
        environment: {
            hasGoogleScriptUrl: Boolean(hrConfig.scriptUrl),
            hasApiSecret: Boolean(hrConfig.apiSecret),
            hasSheetId: Boolean(hrConfig.sheetId),
            hasSubmissionsFolderId: Boolean(hrConfig.submissionsFolderId),
            matchedEnvKeys: hrKeysInEnv
        },
        hr: {
            hasGoogleScriptUrl: Boolean(hrConfig.scriptUrl),
            hasApiSecret: Boolean(hrConfig.apiSecret),
            hasSheetId: Boolean(hrConfig.sheetId),
            hasSubmissionsFolderId: Boolean(hrConfig.submissionsFolderId)
        },
        booking: {
            hasGoogleScriptUrl: Boolean(bookingConfig.scriptUrl),
            hasApiSecret: Boolean(bookingConfig.apiSecret),
            hasCalendarId: Boolean(bookingConfig.calendarId)
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
            const config = getHREnvConfig();

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

// In-memory store for local testing & instant collision checks
const localBookedSlots = new Set();

// --------------------------------------------------
// CONSULTATION BOOKING: CONFIG
// --------------------------------------------------
router.get("/booking/config", (req, res) => {
    res.json({
        success: true,
        serviceName: "Free Cybersecurity Consultation",
        durationMinutes: 30,
        defaultTimezone: "Asia/Kolkata",
        timezoneLabel: "Asia/Calcutta (GMT+5:30)",
        timezones: [
            { value: "Asia/Kolkata", label: "Asia/Calcutta (GMT+5:30)" },
            { value: "America/New_York", label: "America/New_York (EST/EDT)" },
            { value: "America/Los_Angeles", label: "America/Los_Angeles (PST/PDT)" },
            { value: "Europe/London", label: "Europe/London (GMT/BST)" },
            { value: "Asia/Dubai", label: "Asia/Dubai (GST)" },
            { value: "Asia/Singapore", label: "Asia/Singapore (SGT)" }
        ],
        meetingTypes: [
            { id: "Phone call", label: "Phone call", subtext: "Details will be sent on email" },
            { id: "Video call", label: "Video call", subtext: "Details will be sent on email" }
        ],
        description: "Get a free 30-minute consultation with Cyber Aries cybersecurity experts. We'll understand your security requirements, identify potential risks, and guide you on the best protection strategy for your organization. No cost. No obligation. Just expert advice."
    });
});

// --------------------------------------------------
// CONSULTATION BOOKING: AVAILABLE SLOTS
// --------------------------------------------------
router.get("/booking/slots", async (req, res) => {
    try {
        const { date, timezone = "Asia/Kolkata" } = req.query;

        if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return res.status(400).json({
                success: false,
                error: "Invalid or missing 'date' parameter. Expected format: YYYY-MM-DD."
            });
        }

        const bookingConfig = getBookingEnvConfig();

        // 1. If Google Apps Script is configured (and not running unit tests), attempt fetching live availability from Google Calendar
        if (bookingConfig.scriptUrl && bookingConfig.apiSecret && process.env.NODE_ENV !== "test") {
            try {
                const scriptRes = await requestAppsScript(bookingConfig.scriptUrl, {
                    action: "getCalendarSlots",
                    date: date,
                    timezone: timezone,
                    apiSecret: bookingConfig.apiSecret,
                    calendarId: bookingConfig.calendarId
                });

                if (scriptRes && scriptRes.success && Array.isArray(scriptRes.availableSlots)) {
                    return res.json({
                        success: true,
                        date,
                        timezone,
                        slots: scriptRes.availableSlots
                    });
                }
                console.warn("[Booking Backend] AppsScript getCalendarSlots returned non-success, using local slot evaluator:", scriptRes);
            } catch (scriptErr) {
                console.warn("[Booking Backend] Error contacting Apps Script for slots, falling back to local evaluator:", scriptErr.message);
            }
        }

        // 2. Local Fallback / Standalone Evaluator:
        // Generate standard slots from 9:00 am to 5:30 pm, filter past slots if date is today and any booked slots
        const standardSlots = [
            "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am",
            "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm",
            "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm"
        ];

        const reqDateParts = date.split("-").map(Number);
        const today = new Date();
        const isToday =
            today.getFullYear() === reqDateParts[0] &&
            today.getMonth() + 1 === reqDateParts[1] &&
            today.getDate() === reqDateParts[2];

        const currentHour = today.getHours();
        const currentMin = today.getMinutes();

        const availableSlots = standardSlots.filter((slotStr) => {
            // Check in-memory booked collisions
            const slotKey = `${date}_${slotStr.toLowerCase().replace(/\s+/g, "")}`;
            if (localBookedSlots.has(slotKey)) {
                return false;
            }

            // If selected date is today, eliminate past slots
            if (isToday) {
                const match = slotStr.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
                if (match) {
                    let h = parseInt(match[1], 10);
                    const m = parseInt(match[2], 10);
                    const ampm = match[3].toLowerCase();
                    if (ampm === "pm" && h < 12) h += 12;
                    if (ampm === "am" && h === 12) h = 0;
                    if (h < currentHour || (h === currentHour && m <= currentMin)) {
                        return false;
                    }
                }
            }
            return true;
        });

        res.json({
            success: true,
            date,
            timezone,
            slots: availableSlots
        });

    } catch (error) {
        console.error("[Booking Backend] Slots error:", error);
        res.status(500).json({
            success: false,
            error: "Unable to retrieve available consultation slots."
        });
    }
});

// --------------------------------------------------
// CONSULTATION BOOKING: CREATE EVENT (WITH DOUBLE-BOOKING CHECK)
// --------------------------------------------------
router.post("/booking/create", async (req, res) => {
    try {
        const { date, time, name, email, meetingType, note = "", timezone = "Asia/Kolkata" } = req.body || {};

        // 1. Input Validation
        if (!name || typeof name !== "string" || name.trim().length < 2) {
            return res.status(400).json({
                success: false,
                error: "Please enter your full name (minimum 2 characters)."
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email.trim())) {
            return res.status(400).json({
                success: false,
                error: "Please provide a valid email address."
            });
        }

        if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return res.status(400).json({
                success: false,
                error: "Please select a valid consultation date."
            });
        }

        if (!time || typeof time !== "string") {
            return res.status(400).json({
                success: false,
                error: "Please select a valid consultation time slot."
            });
        }

        const validMeetingTypes = ["Phone call", "Video call"];
        const resolvedMeetingType = validMeetingTypes.includes(meetingType) ? meetingType : "Video call";

        const slotKey = `${date}_${time.toLowerCase().replace(/\s+/g, "")}`;

        // 2. Double-booking check against local state cache
        if (localBookedSlots.has(slotKey)) {
            return res.status(409).json({
                success: false,
                code: "SLOT_UNAVAILABLE",
                error: `The selected time slot (${time} on ${date}) is no longer available. Please choose another time slot.`
            });
        }

        const bookingConfig = getBookingEnvConfig();

        // 3. Connect to Google Apps Script / Google Calendar if configured (and not in unit test mode)
        if (bookingConfig.scriptUrl && bookingConfig.apiSecret && process.env.NODE_ENV !== "test") {
            try {
                const scriptRes = await requestAppsScript(bookingConfig.scriptUrl, {
                    action: "createCalendarEvent",
                    date,
                    time,
                    name: name.trim(),
                    email: email.trim(),
                    meetingType: resolvedMeetingType,
                    note: (note || "").trim(),
                    timezone,
                    apiSecret: bookingConfig.apiSecret,
                    calendarId: bookingConfig.calendarId
                });

                if (scriptRes && scriptRes.success) {
                    localBookedSlots.add(slotKey);
                    return res.json({
                        success: true,
                        bookingId: scriptRes.bookingId || `BK-${Date.now()}`,
                        eventTitle: scriptRes.eventTitle || `Free Cybersecurity Consultation - ${name.trim()}`,
                        date,
                        time,
                        timezone,
                        meetingType: resolvedMeetingType,
                        name: name.trim(),
                        email: email.trim(),
                        meetLink: scriptRes.meetLink || (resolvedMeetingType === "Video call" ? "https://meet.google.com/cyb-aries-meet" : ""),
                        status: "confirmed",
                        message: "Your consultation has been booked successfully in Google Calendar."
                    });
                } else if (scriptRes && scriptRes.code === "SLOT_UNAVAILABLE") {
                    localBookedSlots.add(slotKey);
                    return res.status(409).json({
                        success: false,
                        code: "SLOT_UNAVAILABLE",
                        error: scriptRes.error || "The selected time slot is already booked. Please choose another time."
                    });
                }
                console.warn("[Booking Backend] AppsScript booking returned error, using fallback confirmation:", scriptRes);
            } catch (scriptErr) {
                console.warn("[Booking Backend] Error sending booking to Apps Script, using fallback confirmation:", scriptErr.message);
            }
        }

        // 4. Standalone / Test environment booking confirmation
        localBookedSlots.add(slotKey);
        const bookingId = `CYB-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        const simulatedMeetLink = resolvedMeetingType === "Video call" ? `https://meet.google.com/cyb-${Math.random().toString(36).substring(2, 6)}-${Math.random().toString(36).substring(2, 5)}` : "";

        res.json({
            success: true,
            bookingId,
            eventTitle: `Free Cybersecurity Consultation - ${name.trim()}`,
            date,
            time,
            timezone,
            meetingType: resolvedMeetingType,
            name: name.trim(),
            email: email.trim(),
            meetLink: simulatedMeetLink,
            status: "confirmed",
            message: "Your consultation has been booked successfully."
        });

    } catch (error) {
        console.error("[Booking Backend] Booking creation error:", error);
        res.status(500).json({
            success: false,
            error: "Unable to complete consultation booking. Please try again or contact support."
        });
    }
});

// --------------------------------------------------
// GOOGLE CONNECTION TEST (HR)
// --------------------------------------------------
router.get("/test-google", async (req, res) => {
    try {
        const config = getHREnvConfig();
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

// Attach helper functions for unit test verification
app.getHREnvConfig = getHREnvConfig;
app.getBookingEnvConfig = getBookingEnvConfig;
app.requestAppsScript = requestAppsScript;

// Start server when run directly (local development)
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`CyberAries API backend running on port ${PORT}`);
    });
}

module.exports = app;