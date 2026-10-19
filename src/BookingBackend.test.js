const app = require("../server/server");
const http = require("http");

describe("Backend Booking API Endpoints", () => {
  let server;
  let baseUrl;

  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  test("GET /api/booking/config returns consultation configuration", async () => {
    const res = await fetch(`${baseUrl}/api/booking/config`);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.serviceName).toBe("Free Cybersecurity Consultation");
    expect(data.durationMinutes).toBe(30);
    expect(data.defaultTimezone).toBe("Asia/Kolkata");
    expect(Array.isArray(data.timezones)).toBe(true);
    expect(Array.isArray(data.meetingTypes)).toBe(true);
  });

  test("GET /api/booking/slots validates date parameter", async () => {
    // Missing date
    const res1 = await fetch(`${baseUrl}/api/booking/slots`);
    expect(res1.status).toBe(400);

    // Invalid format
    const res2 = await fetch(`${baseUrl}/api/booking/slots?date=invalid-date`);
    expect(res2.status).toBe(400);

    // Valid date
    const res3 = await fetch(`${baseUrl}/api/booking/slots?date=2026-09-15&timezone=Asia/Kolkata`);
    expect(res3.status).toBe(200);
    const data3 = await res3.json();
    expect(data3.success).toBe(true);
    expect(Array.isArray(data3.slots)).toBe(true);
    expect(data3.slots.length).toBeGreaterThan(0);
  });

  test("POST /api/booking/create validates input data", async () => {
    // Missing name
    const res1 = await fetch(`${baseUrl}/api/booking/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com", date: "2026-09-15", time: "10:00 am" })
    });
    expect(res1.status).toBe(400);

    // Invalid email
    const res2 = await fetch(`${baseUrl}/api/booking/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Tester", email: "bad-email", date: "2026-09-15", time: "10:00 am" })
    });
    expect(res2.status).toBe(400);

    // Missing date/time
    const res3 = await fetch(`${baseUrl}/api/booking/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Tester", email: "tester@example.com" })
    });
    expect(res3.status).toBe(400);
  });

  test("POST /api/booking/create successfully books and prevents double-booking collision", async () => {
    const bookingPayload = {
      name: "Unique Customer",
      email: "customer@example.com",
      date: "2026-11-20",
      time: "2:00 pm",
      meetingType: "Video call",
      note: "Audit discussion",
      timezone: "Asia/Kolkata"
    };

    // First booking attempt should succeed
    const res1 = await fetch(`${baseUrl}/api/booking/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingPayload)
    });

    expect(res1.status).toBe(200);
    const data1 = await res1.json();
    expect(data1.success).toBe(true);
    expect(data1.status).toBe("confirmed");
    expect(data1.name).toBe("Unique Customer");
    expect(data1.email).toBe("customer@example.com");
    expect(data1.meetingType).toBe("Video call");
    expect(data1.meetLink).toContain("meet.google.com");

    // Second booking attempt for the exact same slot MUST fail with 409 (Double-booking protection)
    const res2 = await fetch(`${baseUrl}/api/booking/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...bookingPayload,
        name: "Second Person",
        email: "second@example.com"
      })
    });

    expect(res2.status).toBe(409);
    const data2 = await res2.json();
    expect(data2.success).toBe(false);
    expect(data2.code).toBe("SLOT_UNAVAILABLE");
    expect(data2.error).toMatch(/no longer available/i);

    // Subsequent slot query for that date must now exclude the booked slot
    const slotsRes = await fetch(`${baseUrl}/api/booking/slots?date=2026-11-20`);
    const slotsData = await slotsRes.json();
    expect(slotsData.slots).not.toContain("2:00 pm");
  });
  test("GET /api/health reports discrete status for HR and Booking integrations", async () => {
    const res = await fetch(`${baseUrl}/api/health`);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.hr).toBeDefined();
    expect(data.booking).toBeDefined();
    expect(typeof data.hr.hasGoogleScriptUrl).toBe("boolean");
    expect(typeof data.hr.hasApiSecret).toBe("boolean");
    expect(typeof data.booking.hasGoogleScriptUrl).toBe("boolean");
    expect(typeof data.booking.hasApiSecret).toBe("boolean");
  });

  test("Environment config isolation: getHREnvConfig and getBookingEnvConfig read distinct keys", () => {
    const origEnv = { ...process.env };

    try {
      // Set only HR credentials
      process.env.HR_GOOGLE_SCRIPT_URL = "https://script.google.com/hr";
      process.env.HR_API_SECRET = "hr-secret-12345";
      delete process.env.BOOKING_GOOGLE_SCRIPT_URL;
      delete process.env.BOOKING_API_SECRET;

      const hrOnlyBookingConfig = app.getBookingEnvConfig();
      expect(hrOnlyBookingConfig.scriptUrl).toBeUndefined();
      expect(hrOnlyBookingConfig.apiSecret).toBeUndefined();

      const hrOnlyHRConfig = app.getHREnvConfig();
      expect(hrOnlyHRConfig.scriptUrl).toBe("https://script.google.com/hr");
      expect(hrOnlyHRConfig.apiSecret).toBe("hr-secret-12345");

      // Set only Booking credentials
      delete process.env.HR_GOOGLE_SCRIPT_URL;
      delete process.env.HR_API_SECRET;
      process.env.BOOKING_GOOGLE_SCRIPT_URL = "https://script.google.com/booking";
      process.env.BOOKING_API_SECRET = "booking-secret-67890";
      process.env.GOOGLE_CALENDAR_ID = "primary-cal";

      const bookingOnlyHRConfig = app.getHREnvConfig();
      expect(bookingOnlyHRConfig.scriptUrl).toBeUndefined();
      expect(bookingOnlyHRConfig.apiSecret).toBeUndefined();

      const bookingOnlyConfig = app.getBookingEnvConfig();
      expect(bookingOnlyConfig.scriptUrl).toBe("https://script.google.com/booking");
      expect(bookingOnlyConfig.apiSecret).toBe("booking-secret-67890");
      expect(bookingOnlyConfig.calendarId).toBe("primary-cal");
    } finally {
      process.env = origEnv;
    }
  });

  test("HR submissions fail if HR credentials are missing, even if Booking credentials exist", async () => {
    const origEnv = { ...process.env };

    try {
      delete process.env.HR_GOOGLE_SCRIPT_URL;
      delete process.env.HR_API_SECRET;
      delete process.env.HR_APPS_SCRIPT_URL;
      delete process.env.HR_SCRIPT_URL;
      delete process.env.HR_SECRET;
      process.env.BOOKING_GOOGLE_SCRIPT_URL = "https://script.google.com/booking";
      process.env.BOOKING_API_SECRET = "booking-secret-only";

      const res = await fetch(`${baseUrl}/api/hr/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recordType: "Employee",
          fullName: "Test Person",
          personalEmail: "test@example.com",
          codeOfConductAccepted: true
        })
      });

      expect(res.status).toBe(500);
      const data = await res.json();
      expect(data.success).toBe(false);
      expect(data.error).toMatch(/HR_GOOGLE_SCRIPT_URL|HR_API_SECRET/i);
    } finally {
      process.env = origEnv;
    }
  });
});

describe("Apps Script Authentication Logic & Discrete Secret Boundaries", () => {
  // Simulates the exact doPost authentication logic from AppsScript.gs
  function simulateAppsScriptAuth(requestBody, scriptProperties) {
    const data = typeof requestBody === "string" ? JSON.parse(requestBody) : requestBody;
    const action = data.action;

    const hrSecret = scriptProperties["HR_API_SECRET"] || scriptProperties["API_SECRET"];
    const bookingSecret = scriptProperties["BOOKING_API_SECRET"];

    if (action === "getCalendarSlots" || action === "createCalendarEvent") {
      if (!bookingSecret || !data.apiSecret || data.apiSecret !== bookingSecret) {
        return {
          success: false,
          status: 401,
          error: "Unauthorized: Invalid or missing BOOKING_API_SECRET for consultation booking."
        };
      }
      return { success: true, authorizedAs: "BOOKING" };
    } else if (action === "register" || action === "uploadFile") {
      if (!hrSecret || !data.apiSecret || data.apiSecret !== hrSecret) {
        return {
          success: false,
          status: 401,
          error: "Unauthorized: Invalid or missing HR_API_SECRET for HR onboarding."
        };
      }
      return { success: true, authorizedAs: "HR" };
    } else {
      return {
        success: false,
        status: 400,
        error: "Invalid or unsupported action requested: " + (action || "none")
      };
    }
  }

  const SCRIPT_PROPERTIES = {
    HR_API_SECRET: "hr_secret_alpha_9999",
    BOOKING_API_SECRET: "booking_secret_beta_8888",
    HR_GOOGLE_SHEET_ID: "sheet-12345",
    GOOGLE_CALENDAR_ID: "cal-67890"
  };

  test("Booking actions succeed when BOOKING_API_SECRET is provided", () => {
    const slotsAuth = simulateAppsScriptAuth(
      { action: "getCalendarSlots", date: "2026-10-15", apiSecret: "booking_secret_beta_8888" },
      SCRIPT_PROPERTIES
    );
    expect(slotsAuth.success).toBe(true);
    expect(slotsAuth.authorizedAs).toBe("BOOKING");

    const createAuth = simulateAppsScriptAuth(
      { action: "createCalendarEvent", date: "2026-10-15", time: "10:00 am", apiSecret: "booking_secret_beta_8888" },
      SCRIPT_PROPERTIES
    );
    expect(createAuth.success).toBe(true);
    expect(createAuth.authorizedAs).toBe("BOOKING");
  });

  test("Booking actions FAIL when HR_API_SECRET is supplied (Strict No Fallback)", () => {
    const slotsAuthWithHRSecret = simulateAppsScriptAuth(
      { action: "getCalendarSlots", date: "2026-10-15", apiSecret: "hr_secret_alpha_9999" },
      SCRIPT_PROPERTIES
    );
    expect(slotsAuthWithHRSecret.success).toBe(false);
    expect(slotsAuthWithHRSecret.error).toContain("BOOKING_API_SECRET");

    const createAuthWithHRSecret = simulateAppsScriptAuth(
      { action: "createCalendarEvent", date: "2026-10-15", time: "10:00 am", apiSecret: "hr_secret_alpha_9999" },
      SCRIPT_PROPERTIES
    );
    expect(createAuthWithHRSecret.success).toBe(false);
    expect(createAuthWithHRSecret.error).toContain("BOOKING_API_SECRET");
  });

  test("HR actions succeed when HR_API_SECRET is provided", () => {
    const registerAuth = simulateAppsScriptAuth(
      { action: "register", fullName: "Alice", apiSecret: "hr_secret_alpha_9999" },
      SCRIPT_PROPERTIES
    );
    expect(registerAuth.success).toBe(true);
    expect(registerAuth.authorizedAs).toBe("HR");

    const uploadAuth = simulateAppsScriptAuth(
      { action: "uploadFile", folderId: "folder_1", apiSecret: "hr_secret_alpha_9999" },
      SCRIPT_PROPERTIES
    );
    expect(uploadAuth.success).toBe(true);
    expect(uploadAuth.authorizedAs).toBe("HR");
  });

  test("HR actions FAIL when BOOKING_API_SECRET is supplied", () => {
    const registerAuthWithBookingSecret = simulateAppsScriptAuth(
      { action: "register", fullName: "Alice", apiSecret: "booking_secret_beta_8888" },
      SCRIPT_PROPERTIES
    );
    expect(registerAuthWithBookingSecret.success).toBe(false);
    expect(registerAuthWithBookingSecret.error).toContain("HR_API_SECRET");

    const uploadAuthWithBookingSecret = simulateAppsScriptAuth(
      { action: "uploadFile", folderId: "folder_1", apiSecret: "booking_secret_beta_8888" },
      SCRIPT_PROPERTIES
    );
    expect(uploadAuthWithBookingSecret.success).toBe(false);
    expect(uploadAuthWithBookingSecret.error).toContain("HR_API_SECRET");
  });

  test("All actions fail when apiSecret is missing or empty", () => {
    expect(simulateAppsScriptAuth({ action: "getCalendarSlots" }, SCRIPT_PROPERTIES).success).toBe(false);
    expect(simulateAppsScriptAuth({ action: "createCalendarEvent" }, SCRIPT_PROPERTIES).success).toBe(false);
    expect(simulateAppsScriptAuth({ action: "register" }, SCRIPT_PROPERTIES).success).toBe(false);
    expect(simulateAppsScriptAuth({ action: "uploadFile" }, SCRIPT_PROPERTIES).success).toBe(false);
  });
});
