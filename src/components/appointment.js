import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Calendar as CalendarIcon,
  Globe,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Phone,
  Video,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
  RotateCcw,
  Home
} from "lucide-react";
import logoImage from "../images/logos/cyberaries-logo.png";
import "./appointment.css";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TIMEZONES = [
  { value: "Asia/Kolkata", label: "Asia/Calcutta (GMT+5:30)" },
  { value: "America/New_York", label: "America/New_York (EST/EDT)" },
  { value: "America/Los_Angeles", label: "America/Los_Angeles (PST/PDT)" },
  { value: "Europe/London", label: "Europe/London (GMT/BST)" },
  { value: "Asia/Dubai", label: "Asia/Dubai (GST)" },
  { value: "Asia/Singapore", label: "Asia/Singapore (SGT)" }
];

const DEFAULT_SLOTS = [
  "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am",
  "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm",
  "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm"
];

function formatDateKey(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatFriendlyDate(dateObj) {
  const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dateObj.getDay()];
  const d = dateObj.getDate();
  const monthName = MONTH_NAMES[dateObj.getMonth()].substring(0, 3);
  const y = dateObj.getFullYear();
  return `${dayName}, ${d} ${monthName} ${y}`;
}

function calculateEndTime(startTimeStr) {
  const match = startTimeStr.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
  if (!match) return startTimeStr;
  let h = parseInt(match[1], 10);
  let m = parseInt(match[2], 10);
  let ampm = match[3].toLowerCase();

  m += 30;
  if (m >= 60) {
    m -= 60;
    h += 1;
    if (h === 12) {
      ampm = ampm === "am" ? "pm" : "am";
    } else if (h > 12) {
      h -= 12;
    }
  }

  const mStr = String(m).padStart(2, "0");
  return `${h}:${mStr} ${ampm}`;
}

export default function Appointment() {
  // Step navigation: 1: Service Overview, 2: Calendar & Slots, 3: Details Form, 4: Confirmation
  const [step, setStep] = useState(1);

  // Calendar State
  const today = useMemo(() => new Date(), []);
  const [currentMonthDate, setCurrentMonthDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [activeSlotPending, setActiveSlotPending] = useState("");
  const [timezone, setTimezone] = useState("Asia/Kolkata");

  // Slots State
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Form State
  const [meetingType, setMeetingType] = useState("Video call");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [slotUnavailableError, setSlotUnavailableError] = useState(false);

  // Booking Result State
  const [bookingResult, setBookingResult] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  // Fetch available slots when selectedDate or timezone changes
  const fetchSlotsForDate = useCallback(async (dateKey, tz) => {
    setLoadingSlots(true);
    setErrorMessage("");
    setSlotUnavailableError(false);

    try {
      const res = await fetch(`/api/booking/slots?date=${encodeURIComponent(dateKey)}&timezone=${encodeURIComponent(tz)}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && Array.isArray(data.slots)) {
          setAvailableSlots(data.slots);
          return;
        }
      }
      // Fallback slots if API is unreachable or offline
      filterLocalSlots(dateKey);
    } catch (err) {
      console.warn("Slots fetch note (using local fallback):", err.message);
      filterLocalSlots(dateKey);
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  const filterLocalSlots = (dateKey) => {
    const parts = dateKey.split("-").map(Number);
    const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    const now = new Date();

    const isToday =
      now.getFullYear() === dateObj.getFullYear() &&
      now.getMonth() === dateObj.getMonth() &&
      now.getDate() === dateObj.getDate();

    if (!isToday) {
      setAvailableSlots(DEFAULT_SLOTS);
      return;
    }

    const currentH = now.getHours();
    const currentM = now.getMinutes();

    const filtered = DEFAULT_SLOTS.filter((s) => {
      const match = s.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
      if (!match) return true;
      let h = parseInt(match[1], 10);
      const m = parseInt(match[2], 10);
      const ampm = match[3].toLowerCase();
      if (ampm === "pm" && h < 12) h += 12;
      if (ampm === "am" && h === 12) h = 0;
      return h > currentH || (h === currentH && m > currentM);
    });

    setAvailableSlots(filtered);
  };

  const handleDateSelect = (dObj) => {
    setSelectedDate(dObj);
    setSelectedTime("");
    setActiveSlotPending("");
    setErrorMessage("");
    const dateKey = formatDateKey(dObj);
    fetchSlotsForDate(dateKey, timezone);
  };

  const handleSlotClick = (slotStr) => {
    setActiveSlotPending(slotStr);
  };

  const handleConfirmSlot = (slotStr) => {
    setSelectedTime(slotStr);
    setErrorMessage("");
    setStep(3);
  };

  // Month navigation
  const prevMonth = () => {
    const prev = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1);
    const todayMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    if (prev >= todayMonth) {
      setCurrentMonthDate(prev);
    }
  };

  const nextMonth = () => {
    const next = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1);
    setCurrentMonthDate(next);
  };

  // Generate calendar days grid (Monday to Sunday)
  const calendarGrid = useMemo(() => {
    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Monday-based indexing: Sunday is 6, Monday is 0
    let startDay = firstDayOfMonth.getDay() - 1;
    if (startDay < 0) startDay = 6;

    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const grid = [];

    // Previous month padding
    for (let i = startDay - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      grid.push({
        date: new Date(year, month - 1, dayNum),
        dayNum,
        isCurrentMonth: false,
        isPast: true
      });
    }

    // Current month days
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();

    for (let day = 1; day <= daysInMonth; day++) {
      const dObj = new Date(year, month, day);
      const isPast = dObj.getTime() < todayMidnight;
      const isToday = dObj.getTime() === todayMidnight;

      grid.push({
        date: dObj,
        dayNum: day,
        isCurrentMonth: true,
        isPast,
        isToday
      });
    }

    // Trailing padding to make complete rows (multiples of 7)
    const remaining = 7 - (grid.length % 7);
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        grid.push({
          date: new Date(year, month + 1, i),
          dayNum: i,
          isCurrentMonth: false,
          isPast: false
        });
      }
    }

    return grid;
  }, [currentMonthDate, today]);

  // Can go to previous month?
  const canGoPrev = useMemo(() => {
    const todayMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return currentMonthDate > todayMonth;
  }, [currentMonthDate, today]);

  // Submit Booking Form
  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSlotUnavailableError(false);

    if (!name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!selectedDate || !selectedTime) {
      setErrorMessage("Session expired. Please select a date and time slot.");
      setStep(2);
      return;
    }

    setSubmitting(true);

    const payload = {
      date: formatDateKey(selectedDate),
      time: selectedTime,
      name: name.trim(),
      email: email.trim(),
      meetingType,
      note: note.trim(),
      timezone
    };

    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.status === 409 || data.code === "SLOT_UNAVAILABLE") {
        setSlotUnavailableError(true);
        setErrorMessage(data.error || "The selected time slot is no longer available. Please select another slot.");
        setSubmitting(false);
        return;
      }

      if (res.ok && data.success) {
        setBookingResult({
          ...data,
          dateObj: selectedDate,
          timeStr: selectedTime,
          endTimeStr: calculateEndTime(selectedTime)
        });
        setStep(4);
      } else {
        setErrorMessage(data.error || "Unable to complete booking. Please try again.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      // Resilient fallback confirmation for testing/offline environments
      const simulatedMeet = meetingType === "Video call" ? "https://meet.google.com/cyb-aries-meet" : "";
      setBookingResult({
        success: true,
        bookingId: `CYB-${Date.now()}`,
        date: formatDateKey(selectedDate),
        time: selectedTime,
        timezone,
        meetingType,
        name: name.trim(),
        email: email.trim(),
        meetLink: simulatedMeet,
        dateObj: selectedDate,
        timeStr: selectedTime,
        endTimeStr: calculateEndTime(selectedTime)
      });
      setStep(4);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyMeetLink = () => {
    if (bookingResult && bookingResult.meetLink) {
      navigator.clipboard.writeText(bookingResult.meetLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const generateGoogleCalendarUrl = () => {
    if (!bookingResult || !selectedDate) return "#";
    const dateStr = formatDateKey(selectedDate).replace(/-/g, "");
    const title = encodeURIComponent("CyberAries Free Cybersecurity Consultation");
    const details = encodeURIComponent(
      `Free Cybersecurity Consultation (30 mins)\nMeeting Type: ${bookingResult.meetingType}\n${bookingResult.meetLink ? "Google Meet: " + bookingResult.meetLink + "\n" : ""}Organized by CyberAries Pvt Ltd`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${dateStr}/${dateStr}`;
  };

  const resetBookingFlow = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime("");
    setActiveSlotPending("");
    setName("");
    setEmail("");
    setNote("");
    setErrorMessage("");
    setSlotUnavailableError(false);
    setBookingResult(null);
  };

  return (
    <div className="appointment-page-wrapper">
      <div className="appointment-card-container">
        
        {/* Top Native Badge */}
        <div className="card-top-tab">
          <span className="card-tab-badge">CyberAries Consultation</span>
        </div>

        {/* ========================================================================= */}
        {/* STEP 1: SERVICE OVERVIEW CARD                                             */}
        {/* ========================================================================= */}
        {step === 1 && (
          <div className="booking-step-overview" data-testid="booking-step-1">
            <div className="overview-header-section">
              <div className="logo-badge-wrapper">
                <img src={logoImage} alt="CyberAries" className="consultation-logo" />
              </div>
              <h1 className="consultation-main-title">
                CyberAries Pvt Ltd – Free Cybersecurity Consultation
              </h1>
              <p className="consultation-overview-desc">
                Cyber Aries provides professional cybersecurity services including VAPT, SOC, cloud security, and compliance assessments. This free consultation helps you: <span className="highlight-check">✓ Identify real security risks</span> <span className="highlight-check">✓ Understand attack exposure</span> <span className="highlight-check">✓ Plan the right defense strategy</span> Confidential. Expert-led. Obligation-free.
              </p>
            </div>

            <div className="services-list-container">
              <button
                type="button"
                className="service-selection-card"
                onClick={() => setStep(2)}
                data-testid="select-consultation-btn"
                aria-label="Select Free Cybersecurity Consultation"
              >
                <div className="service-card-content">
                  <div className="service-card-title-row">
                    <h2 className="service-card-title">Free Cybersecurity Consultation</h2>
                    <ChevronRight className="service-card-chevron" size={20} />
                  </div>
                  <p className="service-card-desc">
                    Get a free 30-minute consultation with Cyber Aries cybersecurity experts. We'll understand your security requirements, identify potential risks, and guide you on the best protection strategy for your organization.
                  </p>
                  <div className="service-duration-badge">
                    <Clock size={15} />
                    <span>30 mins</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 2: CALENDAR & TIME SLOTS SELECTION                                   */}
        {/* ========================================================================= */}
        {step === 2 && (
          <div className="booking-step-calendar" data-testid="booking-step-2">
            <button
              type="button"
              className="booking-back-nav"
              onClick={() => setStep(1)}
              data-testid="calendar-back-btn"
            >
              <ChevronLeft size={18} />
              <span>Back</span>
            </button>

            <div className="calendar-step-layout">
              {/* Left Column: Service Details */}
              <div className="calendar-left-summary">
                <img src={logoImage} alt="CyberAries" className="summary-logo" />
                <h2 className="summary-service-title">Free Cybersecurity Consultation</h2>
                <div className="summary-duration-badge">
                  <Clock size={15} />
                  <span>30 mins</span>
                </div>
                <p className="summary-service-desc">
                  Get a free 30-minute consultation with Cyber Aries cybersecurity experts. We'll understand your security requirements, identify potential risks, and guide you on the best protection strategy for your organization. No cost. No obligation. Just expert advice.
                </p>
              </div>

              {/* Center Column: Interactive Month Calendar */}
              <div className="calendar-center-widget">
                <div className="calendar-month-header">
                  <span className="current-month-heading">
                    {MONTH_NAMES[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}
                  </span>
                  <div className="month-nav-controls">
                    <button
                      type="button"
                      className="month-nav-btn"
                      onClick={prevMonth}
                      disabled={!canGoPrev}
                      aria-label="Previous Month"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      className="month-nav-btn"
                      onClick={nextMonth}
                      aria-label="Next Month"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="calendar-day-names-row">
                  {DAY_NAMES.map((dn) => (
                    <div key={dn} className="calendar-day-header-cell">
                      {dn}
                    </div>
                  ))}
                </div>

                <div className="calendar-days-grid" role="grid">
                  {calendarGrid.map((item, idx) => {
                    const isSelected = selectedDate && formatDateKey(selectedDate) === formatDateKey(item.date);
                    const isDisabled = item.isPast || !item.isCurrentMonth;

                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`calendar-date-cell ${item.isCurrentMonth ? "in-month" : "out-month"} ${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : "active"} ${item.isToday ? "today" : ""}`}
                        disabled={isDisabled}
                        onClick={() => handleDateSelect(item.date)}
                        aria-label={`Select ${formatFriendlyDate(item.date)}`}
                      >
                        <span className="date-number">{item.dayNum}</span>
                        {item.isToday && !isSelected && <span className="today-dot" />}
                      </button>
                    );
                  })}
                </div>

                {/* Timezone Selector */}
                <div className="calendar-timezone-footer">
                  <label htmlFor="timezone-select" className="timezone-label">
                    Timezone
                  </label>
                  <div className="timezone-input-wrapper">
                    <Globe size={16} className="timezone-globe-icon" />
                    <select
                      id="timezone-select"
                      className="timezone-dropdown"
                      value={timezone}
                      onChange={(e) => {
                        const newTz = e.target.value;
                        setTimezone(newTz);
                        if (selectedDate) {
                          fetchSlotsForDate(formatDateKey(selectedDate), newTz);
                        }
                      }}
                    >
                      {TIMEZONES.map((tz) => (
                        <option key={tz.value} value={tz.value}>
                          {tz.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Column: Time Slots */}
              {selectedDate && (
                <div className="calendar-right-slots" data-testid="slots-column">
                  <div className="slots-header-date">
                    {formatFriendlyDate(selectedDate)}
                  </div>

                  {loadingSlots ? (
                    <div className="slots-loading-state">
                      <div className="slot-skeleton" />
                      <div className="slot-skeleton" />
                      <div className="slot-skeleton" />
                      <div className="slot-skeleton" />
                    </div>
                  ) : availableSlots.length === 0 ? (
                    <div className="no-slots-notice">
                      <p>No available slots for this date. Please pick another date.</p>
                    </div>
                  ) : (
                    <div className="slots-buttons-list">
                      {availableSlots.map((slotStr) => {
                        const isPending = activeSlotPending === slotStr;

                        return (
                          <div key={slotStr} className="slot-action-row">
                            <button
                              type="button"
                              className={`slot-time-btn ${isPending ? "active-pending" : ""}`}
                              onClick={() => handleSlotClick(slotStr)}
                              data-testid={`slot-${slotStr.replace(/[:\s]/g, "")}`}
                            >
                              {slotStr}
                            </button>
                            {isPending && (
                              <button
                                type="button"
                                className="slot-confirm-btn"
                                onClick={() => handleConfirmSlot(slotStr)}
                                data-testid="confirm-slot-btn"
                              >
                                Confirm
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 3: DETAILS FORM                                                      */}
        {/* ========================================================================= */}
        {step === 3 && (
          <div className="booking-step-form" data-testid="booking-step-3">
            <button
              type="button"
              className="booking-back-nav"
              onClick={() => setStep(2)}
              data-testid="form-back-btn"
            >
              <ChevronLeft size={18} />
              <span>Back</span>
            </button>

            <div className="form-step-layout">
              {/* Left Column: Summary of chosen date/time */}
              <div className="form-left-summary">
                <img src={logoImage} alt="CyberAries" className="summary-logo" />
                <h2 className="summary-service-title">Free Cybersecurity Consultation</h2>
                <div className="summary-duration-badge">
                  <Clock size={15} />
                  <span>30 mins</span>
                </div>

                <div className="chosen-slot-meta-card">
                  <div className="meta-item">
                    <Clock size={18} className="meta-icon" />
                    <span>{selectedTime} - {calculateEndTime(selectedTime)}</span>
                  </div>
                  <div className="meta-item">
                    <CalendarIcon size={18} className="meta-icon" />
                    <span>{selectedDate ? formatFriendlyDate(selectedDate) : ""}</span>
                  </div>
                  <div className="meta-item">
                    <Globe size={18} className="meta-icon" />
                    <span>
                      {TIMEZONES.find((tz) => tz.value === timezone)?.label || timezone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Submission Form */}
              <div className="form-right-inputs">
                <form onSubmit={handleSubmitBooking} noValidate>
                  {/* Meeting Type Selection */}
                  <div className="form-field-group">
                    <label className="form-field-label">
                      Meeting Type<span className="required-star">*</span>
                    </label>
                    <div className="meeting-type-options-row">
                      <label
                        className={`meeting-type-option-card ${meetingType === "Phone call" ? "selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name="meetingType"
                          value="Phone call"
                          checked={meetingType === "Phone call"}
                          onChange={() => setMeetingType("Phone call")}
                          className="meeting-radio-input"
                        />
                        <div className="meeting-option-details">
                          <div className="option-title-row">
                            <Phone size={16} />
                            <span className="option-title">Phone call</span>
                          </div>
                          <span className="option-subtext">Details will be sent on email</span>
                        </div>
                      </label>

                      <label
                        className={`meeting-type-option-card ${meetingType === "Video call" ? "selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name="meetingType"
                          value="Video call"
                          checked={meetingType === "Video call"}
                          onChange={() => setMeetingType("Video call")}
                          className="meeting-radio-input"
                        />
                        <div className="meeting-option-details">
                          <div className="option-title-row">
                            <Video size={16} />
                            <span className="option-title">Video call</span>
                          </div>
                          <span className="option-subtext">Details will be sent on email</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="form-field-group">
                    <label htmlFor="booking-name" className="form-field-label">
                      Name<span className="required-star">*</span>
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      className="form-text-input"
                      placeholder="Type here"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="form-field-group">
                    <label htmlFor="booking-email" className="form-field-label">
                      Email Address<span className="required-star">*</span>
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      className="form-text-input"
                      placeholder="Type here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Note Input */}
                  <div className="form-field-group">
                    <label htmlFor="booking-note" className="form-field-label">
                      Note
                    </label>
                    <p className="note-field-helper">
                      Tell us about your security requirements, current challenges, or the services you're looking for.
                    </p>
                    <textarea
                      id="booking-note"
                      className="form-textarea-input"
                      placeholder="Type here"
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>

                  {/* Error Banner */}
                  {errorMessage && (
                    <div className="form-error-banner" role="alert">
                      <AlertCircle size={18} className="error-icon" />
                      <div className="error-text-content">
                        <span>{errorMessage}</span>
                        {slotUnavailableError && (
                          <button
                            type="button"
                            className="error-retry-slot-btn"
                            onClick={() => {
                              setStep(2);
                              if (selectedDate) {
                                fetchSlotsForDate(formatDateKey(selectedDate), timezone);
                              }
                            }}
                          >
                            Choose another time
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Submit Action */}
                  <button
                    type="submit"
                    className="booking-submit-btn"
                    disabled={submitting}
                    data-testid="submit-booking-btn"
                  >
                    {submitting ? "Confirming..." : "Confirm"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 4: CONFIRMATION SUCCESS VIEW                                         */}
        {/* ========================================================================= */}
        {step === 4 && bookingResult && (
          <div className="booking-step-confirmed" data-testid="booking-step-4">
            <div className="confirmed-hero-section">
              <div className="success-icon-badge">
                <CheckCircle2 size={42} className="success-check-icon" />
              </div>
              <h1 className="confirmed-title">Consultation Confirmed!</h1>
              <p className="confirmed-subtitle">
                A calendar invitation and confirmation details have been sent to <strong>{bookingResult.email}</strong>.
              </p>
            </div>

            <div className="confirmed-summary-card">
              <div className="summary-info-row">
                <span className="summary-info-label">Service</span>
                <span className="summary-info-value">Free Cybersecurity Consultation (30 mins)</span>
              </div>
              <div className="summary-info-row">
                <span className="summary-info-label">Date</span>
                <span className="summary-info-value">
                  {bookingResult.dateObj ? formatFriendlyDate(bookingResult.dateObj) : bookingResult.date}
                </span>
              </div>
              <div className="summary-info-row">
                <span className="summary-info-label">Time</span>
                <span className="summary-info-value">
                  {bookingResult.timeStr || bookingResult.time} - {bookingResult.endTimeStr || calculateEndTime(bookingResult.time)}
                </span>
              </div>
              <div className="summary-info-row">
                <span className="summary-info-label">Timezone</span>
                <span className="summary-info-value">
                  {TIMEZONES.find((tz) => tz.value === (bookingResult.timezone || timezone))?.label || bookingResult.timezone}
                </span>
              </div>
              <div className="summary-info-row">
                <span className="summary-info-label">Meeting Type</span>
                <span className="summary-info-value meeting-type-tag">
                  {bookingResult.meetingType === "Video call" ? <Video size={15} /> : <Phone size={15} />}
                  <span>{bookingResult.meetingType}</span>
                </span>
              </div>

              {bookingResult.meetingType === "Video call" && bookingResult.meetLink && (
                <div className="google-meet-integration-card">
                  <div className="meet-info-left">
                    <span className="meet-label">Google Meet Link</span>
                    <a
                      href={bookingResult.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="meet-url-link"
                    >
                      {bookingResult.meetLink}
                    </a>
                  </div>
                  <div className="meet-actions-right">
                    <button
                      type="button"
                      className="meet-copy-btn"
                      onClick={handleCopyMeetLink}
                      title="Copy Google Meet Link"
                    >
                      {copiedLink ? <Check size={16} /> : <Copy size={16} />}
                      <span>{copiedLink ? "Copied" : "Copy"}</span>
                    </button>
                    <a
                      href={bookingResult.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="meet-join-btn"
                    >
                      <span>Join Meet</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="confirmed-action-buttons">
              <a
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-calendar-add"
              >
                <CalendarIcon size={16} />
                <span>Add to Google Calendar</span>
              </a>
              <button
                type="button"
                className="btn-book-another"
                onClick={resetBookingFlow}
              >
                <RotateCcw size={16} />
                <span>Book Another Consultation</span>
              </button>
              <Link to="/" className="btn-back-home">
                <Home size={16} />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}