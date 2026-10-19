import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Appointment from "./appointment";

// Mock react-router-dom for Jest / CRA environment
jest.mock("react-router-dom", () => ({
  Link: ({ to, children, className, onClick }) => (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  ),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/appointment" })
}));

// Mock fetch globally for booking API calls
beforeEach(() => {
  global.fetch = jest.fn((url, options) => {
    if (typeof url === "string" && url.includes("/api/booking/slots")) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            success: true,
            date: "2026-09-15",
            timezone: "Asia/Kolkata",
            slots: ["9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am"]
          })
      });
    }

    if (typeof url === "string" && url.includes("/api/booking/create")) {
      const body = options && options.body ? JSON.parse(options.body) : {};
      
      // Simulate double-booking error when note is "simulate_conflict"
      if (body.note === "simulate_conflict") {
        return Promise.resolve({
          status: 409,
          ok: false,
          json: () =>
            Promise.resolve({
              success: false,
              code: "SLOT_UNAVAILABLE",
              error: "The selected time slot is already booked. Please choose another time."
            })
        });
      }

      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            success: true,
            bookingId: "TEST-BK-12345",
            eventTitle: `Free Cybersecurity Consultation - ${body.name}`,
            date: body.date,
            time: body.time,
            timezone: body.timezone,
            meetingType: body.meetingType,
            name: body.name,
            email: body.email,
            meetLink: body.meetingType === "Video call" ? "https://meet.google.com/test-abc-xyz" : "",
            status: "confirmed"
          })
      });
    }

    return Promise.reject(new Error("Unknown URL"));
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

const renderAppointment = () => {
  return render(<Appointment />);
};

describe("Appointment Consultation Booking Flow", () => {
  test("renders Step 1: Service Overview with CyberAries branding", () => {
    renderAppointment();

    expect(screen.getByTestId("booking-step-1")).toBeInTheDocument();
    expect(screen.getByText(/CyberAries Pvt Ltd – Free Cybersecurity Consultation/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Free Cybersecurity Consultation/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/30 mins/i)).toBeInTheDocument();
    expect(screen.getByTestId("select-consultation-btn")).toBeInTheDocument();
  });

  test("transitions from Step 1 to Step 2 (Calendar & Slots) and back", () => {
    renderAppointment();

    // Click to select service
    fireEvent.click(screen.getByTestId("select-consultation-btn"));

    // Step 2 visible
    expect(screen.getByTestId("booking-step-2")).toBeInTheDocument();
    expect(screen.getByText(/Timezone/i)).toBeInTheDocument();

    // Click Back to return to Step 1
    fireEvent.click(screen.getByTestId("calendar-back-btn"));
    expect(screen.getByTestId("booking-step-1")).toBeInTheDocument();
  });

  test("allows selecting a date and displaying available time slots", async () => {
    renderAppointment();
    fireEvent.click(screen.getByTestId("select-consultation-btn"));

    // Find all active date buttons
    const activeDates = screen.getAllByRole("button").filter(btn =>
      btn.className.includes("calendar-date-cell") && !btn.disabled
    );

    expect(activeDates.length).toBeGreaterThan(0);

    // Click the first active date
    fireEvent.click(activeDates[0]);

    // Slots column should appear and slot buttons should be present
    expect(await screen.findByTestId("slots-column")).toBeInTheDocument();
    expect(await screen.findByTestId("slot-900am")).toBeInTheDocument();
    expect(await screen.findByTestId("slot-930am")).toBeInTheDocument();
  });

  test("clicking a slot shows Confirm button and advances to Step 3", async () => {
    renderAppointment();
    fireEvent.click(screen.getByTestId("select-consultation-btn"));

    const activeDates = screen.getAllByRole("button").filter(btn =>
      btn.className.includes("calendar-date-cell") && !btn.disabled
    );
    fireEvent.click(activeDates[0]);

    await waitFor(() => {
      expect(screen.getByTestId("slot-900am")).toBeInTheDocument();
    });

    // Click slot
    fireEvent.click(screen.getByTestId("slot-900am"));

    // Confirm button appears
    expect(screen.getByTestId("confirm-slot-btn")).toBeInTheDocument();

    // Click Confirm button
    fireEvent.click(screen.getByTestId("confirm-slot-btn"));

    // Now on Step 3
    expect(screen.getByTestId("booking-step-3")).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
  });

  test("validates required fields in Step 3 form", async () => {
    renderAppointment();
    fireEvent.click(screen.getByTestId("select-consultation-btn"));

    const activeDates = screen.getAllByRole("button").filter(btn =>
      btn.className.includes("calendar-date-cell") && !btn.disabled
    );
    fireEvent.click(activeDates[0]);

    await waitFor(() => {
      expect(screen.getByTestId("slot-900am")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("slot-900am"));
    fireEvent.click(screen.getByTestId("confirm-slot-btn"));

    // Try submitting empty form
    fireEvent.click(screen.getByTestId("submit-booking-btn"));
    expect(screen.getByText(/Please enter your full name/i)).toBeInTheDocument();

    // Enter name only
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "Jane Doe" } });
    fireEvent.click(screen.getByTestId("submit-booking-btn"));
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();

    // Enter invalid email
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "invalid-email" } });
    fireEvent.click(screen.getByTestId("submit-booking-btn"));
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  test("completes end-to-end booking for Video call and shows Google Meet link on Step 4", async () => {
    renderAppointment();
    fireEvent.click(screen.getByTestId("select-consultation-btn"));

    const activeDates = screen.getAllByRole("button").filter(btn =>
      btn.className.includes("calendar-date-cell") && !btn.disabled
    );
    fireEvent.click(activeDates[0]);

    await waitFor(() => {
      expect(screen.getByTestId("slot-900am")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("slot-900am"));
    fireEvent.click(screen.getByTestId("confirm-slot-btn"));

    // Fill form
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "Alice Smith" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "alice@example.com" } });
    fireEvent.change(screen.getByLabelText(/Note/i), { target: { value: "Looking for ISO 27001 audit." } });

    // Submit
    fireEvent.click(screen.getByTestId("submit-booking-btn"));

    // Verify Step 4 Confirmation
    await waitFor(() => {
      expect(screen.getByTestId("booking-step-4")).toBeInTheDocument();
    });

    expect(screen.getByText(/Consultation Confirmed!/i)).toBeInTheDocument();
    expect(screen.getByText(/alice@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Video call/i)).toBeInTheDocument();
    expect(screen.getByText("https://meet.google.com/test-abc-xyz")).toBeInTheDocument();
    expect(screen.getByText(/Add to Google Calendar/i)).toBeInTheDocument();

    // Click "Book Another Consultation"
    fireEvent.click(screen.getByRole("button", { name: /Book Another Consultation/i }));
    expect(screen.getByTestId("booking-step-1")).toBeInTheDocument();
  });

  test("handles double-booking conflict error with retry action", async () => {
    renderAppointment();
    fireEvent.click(screen.getByTestId("select-consultation-btn"));

    const activeDates = screen.getAllByRole("button").filter(btn =>
      btn.className.includes("calendar-date-cell") && !btn.disabled
    );
    fireEvent.click(activeDates[0]);

    await waitFor(() => {
      expect(screen.getByTestId("slot-900am")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("slot-900am"));
    fireEvent.click(screen.getByTestId("confirm-slot-btn"));

    // Fill form with conflict trigger note
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "Bob Conflict" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "bob@example.com" } });
    fireEvent.change(screen.getByLabelText(/Note/i), { target: { value: "simulate_conflict" } });

    fireEvent.click(screen.getByTestId("submit-booking-btn"));

    await waitFor(() => {
      expect(screen.getByText(/The selected time slot is already booked/i)).toBeInTheDocument();
    });

    expect(screen.getByRole("button", { name: /Choose another time/i })).toBeInTheDocument();

    // Click retry to go back to calendar
    fireEvent.click(screen.getByRole("button", { name: /Choose another time/i }));
    expect(screen.getByTestId("booking-step-2")).toBeInTheDocument();
  });
});
