// =========================================================================
// GOOGLE APPS SCRIPT FOR CYBERARIES CONSULTATION BOOKING (STANDALONE)
// Deploy this script as an independent Web App in Google Apps Script.
//
// Integration: Consultation Booking
// Actions:
//   - "getCalendarSlots"    : Query available 30-min consultation slots
//   - "createCalendarEvent" : Book event, prevent collisions, create Google Meet
//
// Script Properties Required:
//   - BOOKING_API_SECRET    : Dedicated secret token for consultation booking
//   - GOOGLE_CALENDAR_ID    : Optional target calendar ID (defaults to "primary")
//
// Services:
//   - (Optional) Google Calendar API (v3) for native Google Meet link creation
// =========================================================================

function doGet(e) {
  return makeJsonResponse({
    success: true,
    service: "CyberAries Consultation Booking API",
    status: "active",
    actions: ["getCalendarSlots", "createCalendarEvent"]
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return makeJsonResponse({ success: false, error: "Empty request body." });
    }

    var data = JSON.parse(e.postData.contents);
    var action = data.action;
    var scriptProperties = PropertiesService.getScriptProperties();

    // 1. Strict Dedicated Booking Authentication (No HR secret fallback)
    var bookingSecret = scriptProperties.getProperty("BOOKING_API_SECRET");
    if (!bookingSecret || !data.apiSecret || data.apiSecret !== bookingSecret) {
      return makeJsonResponse({
        success: false,
        error: "Unauthorized: Invalid or missing BOOKING_API_SECRET for consultation booking."
      });
    }

    // Resolve Target Calendar
    var targetCalendarId = data.calendarId || scriptProperties.getProperty("GOOGLE_CALENDAR_ID") || scriptProperties.getProperty("CALENDAR_ID") || "primary";
    var calendar = (targetCalendarId && targetCalendarId !== "primary") ? CalendarApp.getCalendarById(targetCalendarId) : CalendarApp.getDefaultCalendar();

    if (!calendar) {
      calendar = CalendarApp.getDefaultCalendar();
    }

    if (!calendar) {
      return makeJsonResponse({ success: false, error: "Target Google Calendar could not be found or accessed." });
    }

    // ==========================================
    // ACTION: getCalendarSlots (Query availability)
    // ==========================================
    if (action === "getCalendarSlots") {
      var reqDateStr = data.date; // e.g. "2026-09-15"
      if (!reqDateStr) {
        return makeJsonResponse({ success: false, error: "Missing required 'date' parameter (YYYY-MM-DD)." });
      }

      var parts = reqDateStr.split("-");
      var year = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10) - 1;
      var day = parseInt(parts[2], 10);

      var dayStart = new Date(year, month, day, 0, 0, 0);
      var dayEnd = new Date(year, month, day, 23, 59, 59);

      // Fetch all existing events for this date
      var existingEvents = calendar.getEvents(dayStart, dayEnd);

      // Standard 30-minute business slots: 9:00 AM to 6:00 PM (09:00 to 18:00)
      var standardSlotTimes = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
      ];

      var now = new Date();
      var availableSlots = [];

      for (var s = 0; s < standardSlotTimes.length; s++) {
        var timeStr = standardSlotTimes[s];
        var tParts = timeStr.split(":");
        var sHour = parseInt(tParts[0], 10);
        var sMin = parseInt(tParts[1], 10);

        var slotStart = new Date(year, month, day, sHour, sMin, 0);
        var slotEnd = new Date(year, month, day, sHour, sMin + 30, 0);

        // Check if slot is in the past
        if (slotStart.getTime() <= now.getTime()) {
          continue;
        }

        // Check conflict with existing events
        var hasConflict = false;
        for (var ev = 0; ev < existingEvents.length; ev++) {
          var event = existingEvents[ev];
          if (event.isAllDayEvent()) {
            continue; // Ignore full-day background notes unless busy
          }
          var evStart = event.getStartTime().getTime();
          var evEnd = event.getEndTime().getTime();

          if (slotStart.getTime() < evEnd && slotEnd.getTime() > evStart) {
            hasConflict = true;
            break;
          }
        }

        if (!hasConflict) {
          // Format slot: e.g. "9:00 am", "9:30 am", "12:00 pm"
          var hour12 = sHour % 12 || 12;
          var ampm = sHour >= 12 ? "pm" : "am";
          var minStr = sMin < 10 ? "0" + sMin : sMin;
          var formattedTime = hour12 + ":" + minStr + " " + ampm;

          availableSlots.push({
            time24: timeStr,
            time: formattedTime,
            startTimeIso: slotStart.toISOString(),
            endTimeIso: slotEnd.toISOString()
          });
        }
      }

      return makeJsonResponse({
        success: true,
        date: reqDateStr,
        timezone: data.timezone || "Asia/Kolkata",
        availableSlots: availableSlots.map(function(s) { return s.time; }),
        slotDetails: availableSlots
      });
    }

    // ==========================================
    // ACTION: createCalendarEvent (Book consultation)
    // ==========================================
    if (action === "createCalendarEvent") {
      var bookingDateStr = data.date; // e.g. "2026-09-15"
      var bookingTimeStr = data.time; // e.g. "9:00 am" or "09:00"
      var clientName = (data.name || "").trim();
      var clientEmail = (data.email || "").trim();
      var meetingType = data.meetingType || "Video call";
      var clientNote = (data.note || "").trim();
      var timezone = data.timezone || "Asia/Kolkata";

      if (!bookingDateStr || !bookingTimeStr || !clientName || !clientEmail) {
        return makeJsonResponse({ success: false, error: "Missing required booking details (date, time, name, email)." });
      }

      // Parse start and end time
      var bParts = bookingDateStr.split("-");
      var bYear = parseInt(bParts[0], 10);
      var bMonth = parseInt(bParts[1], 10) - 1;
      var bDay = parseInt(bParts[2], 10);

      // Parse time string (supports "9:00 am", "09:30 PM", "14:00")
      var timeMatch = bookingTimeStr.match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);
      if (!timeMatch) {
        return makeJsonResponse({ success: false, error: "Invalid time format provided: " + bookingTimeStr });
      }

      var bHour = parseInt(timeMatch[1], 10);
      var bMin = parseInt(timeMatch[2], 10);
      var ampmModifier = timeMatch[3] ? timeMatch[3].toLowerCase() : null;

      if (ampmModifier === "pm" && bHour < 12) bHour += 12;
      if (ampmModifier === "am" && bHour === 12) bHour = 0;

      var eventStart = new Date(bYear, bMonth, bDay, bHour, bMin, 0);
      var eventEnd = new Date(bYear, bMonth, bDay, bHour, bMin + 30, 0);

      // 1. CRITICAL DOUBLE-BOOKING CHECK
      var conflictingEvents = calendar.getEvents(eventStart, eventEnd);
      var hasRealConflict = false;
      for (var c = 0; c < conflictingEvents.length; c++) {
        if (!conflictingEvents[c].isAllDayEvent()) {
          hasRealConflict = true;
          break;
        }
      }

      if (hasRealConflict) {
        return makeJsonResponse({
          success: false,
          code: "SLOT_UNAVAILABLE",
          error: "The selected time slot (" + bookingTimeStr + " on " + bookingDateStr + ") is no longer available. Please select another time slot."
        });
      }

      // 2. CREATE GOOGLE CALENDAR EVENT
      var eventTitle = "CyberAries Free Cybersecurity Consultation - " + clientName;
      var eventDescription = [
        "================================================",
        "CYBERARIES CYBERSECURITY CONSULTATION",
        "================================================",
        "Service: Free Cybersecurity Consultation (30 mins)",
        "Client Name: " + clientName,
        "Client Email: " + clientEmail,
        "Meeting Type: " + meetingType,
        "Timezone: " + timezone,
        "Date: " + bookingDateStr,
        "Time: " + bookingTimeStr,
        "Client Note: " + (clientNote || "No note provided"),
        "================================================",
        "CyberAries Pvt Ltd | Confidential. Expert-led. Obligation-free."
      ].join("\n");

      var eventOptions = {
        description: eventDescription,
        guests: clientEmail,
        sendInvites: true
      };

      var newEvent;
      var meetLink = "";

      // If Google Advanced Calendar Service is enabled, create Meet conference link
      try {
        if (typeof Calendar !== "undefined" && Calendar.Events && meetingType === "Video call") {
          var calResource = {
            summary: eventTitle,
            description: eventDescription,
            start: { dateTime: eventStart.toISOString() },
            end: { dateTime: eventEnd.toISOString() },
            attendees: [{ email: clientEmail, displayName: clientName }],
            conferenceData: {
              createRequest: {
                requestId: Utilities.getUuid(),
                conferenceSolutionKey: { type: "hangoutsMeet" }
              }
            }
          };
          var createdAdvanced = Calendar.Events.insert(calResource, targetCalendarId, {
            conferenceDataVersion: 1,
            sendUpdates: "all"
          });
          if (createdAdvanced && createdAdvanced.hangoutLink) {
            meetLink = createdAdvanced.hangoutLink;
          }
          newEvent = calendar.getEventById(createdAdvanced.id);
        }
      } catch (advancedErr) {
        console.log("Advanced Calendar meet generation note: " + advancedErr.toString());
      }

      // Standard fallback creation if not created via Advanced Calendar
      if (!newEvent) {
        newEvent = calendar.createEvent(eventTitle, eventStart, eventEnd, eventOptions);
        if (meetingType === "Video call") {
          try {
            meetLink = newEvent.getHangoutLink() || "";
          } catch (meetErr) {}
        }
      }

      return makeJsonResponse({
        success: true,
        bookingId: newEvent ? newEvent.getId() : Utilities.getUuid(),
        eventTitle: eventTitle,
        date: bookingDateStr,
        time: bookingTimeStr,
        timezone: timezone,
        meetingType: meetingType,
        clientName: clientName,
        clientEmail: clientEmail,
        meetLink: meetLink,
        status: "confirmed",
        message: "Your consultation has been booked successfully."
      });
    }

    return makeJsonResponse({
      success: false,
      error: "Invalid or unsupported action requested: " + (action || "none")
    });

  } catch (err) {
    return makeJsonResponse({
      success: false,
      error: "Apps Script processing error: " + err.toString()
    });
  }
}

// Helper to return JSON response properly in Apps Script
function makeJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
