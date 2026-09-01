// =========================================================================
// GOOGLE APPS SCRIPT FOR CYBERARIES HR ONBOARDING
// Deploy this code as a Web App in Google Apps Script editor.
// Make sure to configure API_SECRET in Project Settings -> Script Properties.
// =========================================================================

var SPREADSHEET_ID = "1yewhmscXYYOobNR76TCTjSqE-wgn5aONMxK9Gbf6E5s";
var SUBMISSIONS_FOLDER_ID = "1TnVQ6IRwpewbEb7yBnD-kZPjLZ6tplAJ";
var SHEET_NAME = "Sheet1";

function doGet(e) {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var lastRow = sheet.getLastRow();
    var rows = [];
    if (lastRow > 1) {
      rows = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
    }
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      headers: headers,
      rows: rows
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return makeJsonResponse({ success: false, error: "Empty request body." });
    }

    var data = JSON.parse(e.postData.contents);

    // 1. Security / API Secret Authentication
    var scriptProperties = PropertiesService.getScriptProperties();
    var API_SECRET = scriptProperties.getProperty("HR_API_SECRET") || scriptProperties.getProperty("API_SECRET");
    
    if (!data.apiSecret || data.apiSecret !== API_SECRET) {
      return makeJsonResponse({ success: false, error: "Unauthorized: Invalid API secret." });
    }

    // ==========================================
    // ACTION: uploadFile (Upload single file)
    // ==========================================
    if (data.action === "uploadFile") {
      if (!data.folderId || !data.file || !data.file.base64) {
        return makeJsonResponse({ success: false, error: "Missing folderId or file details." });
      }

      var folder = DriveApp.getFolderById(data.folderId);
      var file = data.file;

      var subfolderMapping = {
        "profilePhoto": "Profile Photo",
        "resume": "Resume",
        "panCard": "Identity Documents",
        "identityProof": "Identity Documents",
        "addressProof": "Address Documents",
        "educationalCertificates": "Education Documents",
        "previousEmploymentDocuments": "Employment Documents",
        "bankProof": "Bank Documents",
        "otherDocuments": "Other Documents"
      };

      var targetSubfolderName = subfolderMapping[file.fieldName] || "Other Documents";
      var subfolders = folder.getFoldersByName(targetSubfolderName);
      var targetSubfolder;

      if (subfolders.hasNext()) {
        targetSubfolder = subfolders.next();
      } else {
        targetSubfolder = folder.createFolder(targetSubfolderName);
      }

      var fileData = Utilities.base64Decode(file.base64);
      var blob = Utilities.newBlob(fileData, file.mimeType, file.originalName);
      var createdFile = targetSubfolder.createFile(blob);

      return makeJsonResponse({
        success: true,
        fileUrl: createdFile.getUrl()
      });
    }

    // ==========================================
    // ACTION: register (Metadata & Folder creation)
    // ==========================================
    // Open Spreadsheet and Sheet
    var targetSpreadsheetId = (data && data.spreadsheetId) || scriptProperties.getProperty("HR_GOOGLE_SHEET_ID") || scriptProperties.getProperty("SPREADSHEET_ID") || SPREADSHEET_ID;
    var ss = SpreadsheetApp.openById(targetSpreadsheetId);
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      return makeJsonResponse({ success: false, error: "Sheet '" + SHEET_NAME + "' not found." });
    }

    var lastRow = sheet.getLastRow();
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // Normalize headers for mapping
    var headerMap = {};
    for (var i = 0; i < headers.length; i++) {
      headerMap[normalizeKey(headers[i])] = i;
    }

    // 2. Prevent Duplicate Submissions (Check by Personal Email)
    var targetEmail = data.personalEmail || "";
    if (targetEmail && lastRow > 1) {
      var emailNorm = normalizeKey("Personal Email Address");
      var emailNormAlt = normalizeKey("personalEmail");
      var emailColIdx = -1;
      
      if (headerMap.hasOwnProperty(emailNorm)) {
        emailColIdx = headerMap[emailNorm];
      } else if (headerMap.hasOwnProperty(emailNormAlt)) {
        emailColIdx = headerMap[emailNormAlt];
      }

      if (emailColIdx !== -1) {
        var existingRows = sheet.getRange(2, 1, lastRow - 1, headers.length).getValues();
        for (var r = 0; r < existingRows.length; r++) {
          var rowEmail = String(existingRows[r][emailColIdx]).trim();
          if (rowEmail.toLowerCase() === targetEmail.trim().toLowerCase()) {
            var existingRecordId = "";
            var existingFolderUrl = "";
            
            var idColIdx = headerMap[normalizeKey("Record ID")] || headerMap[normalizeKey("id")];
            if (idColIdx !== undefined && idColIdx !== -1) {
              existingRecordId = existingRows[r][idColIdx];
            }
            var folderColIdx = headerMap[normalizeKey("Folder URL")];
            if (folderColIdx !== undefined && folderColIdx !== -1) {
              existingFolderUrl = existingRows[r][folderColIdx];
            }

            // Extract folder ID from folder URL to allow background uploads even for duplicate submissions
            var folderId = "";
            if (existingFolderUrl) {
              var matches = existingFolderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
              if (matches && matches[1]) {
                folderId = matches[1];
              }
            }

            return makeJsonResponse({
              success: true,
              recordId: existingRecordId,
              folderUrl: existingFolderUrl,
              folderId: folderId,
              uploadCount: 0,
              message: "Record already submitted."
            });
          }
        }
      }
    }

    // 3. Generate Sequential Record ID (EMP-YYYY-XXX or INT-YYYY-XXX)
    var recordType = data.recordType || "Intern";
    var prefix = recordType === "Employee" ? "EMP" : "INT";
    var currentYear = new Date().getFullYear();
    var searchPrefix = prefix + "-" + currentYear + "-";
    var maxSerial = 0;

    if (lastRow > 1) {
      var idColIdx = headerMap[normalizeKey("Record ID")] || headerMap[normalizeKey("id")];
      if (idColIdx !== undefined && idColIdx !== -1) {
        var existingIds = sheet.getRange(2, idColIdx + 1, lastRow - 1, 1).getValues();
        for (var j = 0; j < existingIds.length; j++) {
          var cellVal = String(existingIds[j][0]).trim();
          if (cellVal.indexOf(searchPrefix) === 0) {
            var serialStr = cellVal.substring(searchPrefix.length);
            var serialNum = parseInt(serialStr, 10);
            if (!isNaN(serialNum) && serialNum > maxSerial) {
              maxSerial = serialNum;
            }
          }
        }
      }
    }
    
    var nextSerial = maxSerial + 1;
    var serialPadded = ("000" + nextSerial).slice(-3);
    var recordId = searchPrefix + serialPadded;

    // 4. Create Main Google Drive Folder and Subfolders
    var targetFolderId = (data && data.submissionsFolderId) || scriptProperties.getProperty("HR_SUBMISSIONS_FOLDER_ID") || scriptProperties.getProperty("SUBMISSIONS_FOLDER_ID") || SUBMISSIONS_FOLDER_ID;
    var parentFolder = DriveApp.getFolderById(targetFolderId);
    var candidateFolderName = data.fullName + " (" + recordId + ")";
    var candidateFolder = parentFolder.createFolder(candidateFolderName);
    var folderUrl = candidateFolder.getUrl();
    var folderId = candidateFolder.getId();

    // Create standard subfolders
    var subfolderNames = [
      "Profile Photo",
      "Resume",
      "Identity Documents",
      "Address Documents",
      "Education Documents",
      "Employment Documents",
      "Bank Documents",
      "Other Documents"
    ];
    
    for (var k = 0; k < subfolderNames.length; k++) {
      candidateFolder.createFolder(subfolderNames[k]);
    }

    // 5. Write Row to Google Sheet Dynamically
    var newRow = new Array(headers.length);
    for (var key in data) {
      if (data.hasOwnProperty(key) && key !== "files" && key !== "apiSecret" && key !== "action") {
        var normKey = normalizeKey(key);
        if (headerMap.hasOwnProperty(normKey)) {
          var val = data[key];
          if (val === true || String(val).toLowerCase() === "true") {
            val = "Yes";
          } else if (val === false || String(val).toLowerCase() === "false") {
            val = "No";
          }
          newRow[headerMap[normKey]] = val;
        }
      }
    }

    // Explicitly set special fields if headers exist
    var recordIdNorm = normalizeKey("Record ID");
    var idNorm = normalizeKey("id");
    if (headerMap.hasOwnProperty(recordIdNorm)) {
      newRow[headerMap[recordIdNorm]] = recordId;
    } else if (headerMap.hasOwnProperty(idNorm)) {
      newRow[headerMap[idNorm]] = recordId;
    }

    var folderUrlNorm = normalizeKey("Folder URL");
    if (headerMap.hasOwnProperty(folderUrlNorm)) {
      newRow[headerMap[folderUrlNorm]] = folderUrl;
    }

    var timestampNorm = normalizeKey("Timestamp");
    if (headerMap.hasOwnProperty(timestampNorm)) {
      newRow[headerMap[timestampNorm]] = new Date();
    }

    sheet.appendRow(newRow);

    // Return the successfully created record details
    return makeJsonResponse({
      success: true,
      recordId: recordId,
      folderUrl: folderUrl,
      folderId: folderId,
      uploadCount: 0
    });

  } catch (err) {
    return makeJsonResponse({
      success: false,
      error: "Apps Script processing error: " + err.toString()
    });
  }
}

// Helper to normalize keys (camelCase, Title Case, spacing to lowercase alphanumeric)
function normalizeKey(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Helper to return JSON response properly in Apps Script
function makeJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
