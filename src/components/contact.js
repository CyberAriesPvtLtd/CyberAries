import React, { useRef, useState, useEffect } from "react";
import "./contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Mail,
  Clock,
  Phone,
  ChevronDown,
  ShieldCheck,
  FileSignature,
  MessageSquare,
  Handshake,
  Navigation,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ==================================================================
   BUSINESS CONSTANTS
   ------------------------------------------------------------------
   Every publishable business fact lives here, stated ONCE.

   The previous version repeated "response within one business day"
   in four separate places and the office address in three. Anything
   repeated is a fact that has to be updated in four places later —
   and reads to the visitor as padding. Single source of truth.

   >> REVIEW BEFORE SHIPPING: RESPONSE_SLA and CREDENTIALS are the
   only two claims on this page that promise something publicly.
   Confirm you can honour both.
================================================================== */

const PHONE_DISPLAY = "+91 88284 95202";
const PHONE_HREF = "tel:+918828495202";
const EMAIL_SALES = "info@cyberaries.com";

const OFFICE_LINE =
  "WeWork Lightbridge, 6th Floor, Hiranandani Business Park, Saki Vihar Road, Chandivali, Powai, Mumbai, Maharashtra 400072";
const OFFICE_HOURS = "Monday – Friday, 9:00 AM – 6:00 PM IST";
const MAPS_QUERY = encodeURIComponent(
  "WeWork Lightbridge, Hiranandani Business Park, Saki Vihar Road, Powai, Mumbai 400072"
);
const MAPS_LINK = `https://www.google.com/maps?q=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mreezzyw";

// The single place the response promise is stated on this page.
const RESPONSE_SLA = "one business day";

// Replaces the old "Trusted by enterprises for audits, VAPT & compliance"
// badge. That was an adjective with no evidence anywhere on the page —
// unbacked trust claims read as filler. These are checkable facts.
const CREDENTIALS = [
  "SEBI CSCRF",
  "ISO 27001",
  "DPDP Act",
  "VAPT signed off by a CERT-In empanelled partner",
];


/* ------------------------------------------------------------------
   SECTION 3 (aside) — What to include
   Sits where the duplicated map used to sit. A map beside a form is
   an outbound escape hatch at the exact moment of conversion; this
   is the opposite — it raises the quality of what gets submitted.
------------------------------------------------------------------- */
const briefPrompts = [
  "Vulnerability Assessment & Penetration Testing (VAPT)",
  "ISO 27001, SEBI CSCRF & DPDP Compliance",
  "Governance, Risk & Compliance (GRC)",
  "vCISO & Cybersecurity Advisory",
];


/* ------------------------------------------------------------------
   SECTION 3 — Service selector
   Replaces the old free-text "Subject" field, which added friction
   and qualified nothing. Options mirror the service lines in the
   CyberAries MSA so an enquiry maps straight onto a scope of work.
------------------------------------------------------------------- */
const serviceOptions = [
  "SEBI CSCRF implementation",
  "VAPT / penetration testing",
  "ISO 27001 implementation or audit",
  "DPDP Act compliance",
  "vCISO / managed GRC",
  "SOC services",
  "Security awareness training",
  "Not sure yet — need guidance",
];

const timelineOptions = [
  "Immediate — there's a deadline",
  "This quarter",
  "Next six months",
  "Exploring options",
];

/* ------------------------------------------------------------------
   SECTION 4 — What happens after you submit
   NEW. The biggest gap on the previous page: it never said what a
   visitor was committing to. This is a genuine sequence, so the
   numbering carries real information rather than decorating.
------------------------------------------------------------------- */
const processSteps = [
  {
    icon: MessageSquare,
    title: "A CyberAries Specialist Reviews Your Request",
    body: "Every inquiry is reviewed by a cybersecurity specialist who understands your requirements, business context, and security objectives. You'll receive a thoughtful response—not an automated reply.",
  },
  {
    icon: ShieldCheck,
    title: "Scope Identification",
    body: "We schedule a consultation to understand your environment, compliance goals, business priorities, and project requirements so we can define the right scope for your organization.",
  },
  {
    icon: FileSignature,
    title: "Tailored Proposal",
    body: "Based on our discussion, we prepare a detailed proposal outlining the project scope, deliverables, implementation approach, estimated timeline, and commercial terms for your review.",
  },
  {
    icon: Handshake,
    title: "Beginning of Engagement",
    body: "Once the proposal is approved, we finalize the engagement, align the project schedule, and begin delivering the agreed scope of work. If required, an NDA can be executed before project commencement.",
  },
];

function Contact() {
  /* ---------------- state ---------------- */
  const [status, setStatus] = useState("idle"); // idle | sending | error | success

  /* ---------------- refs ---------------- */
  const pageRef = useRef(null);
  const formSectionRef = useRef(null);
  const successHeadingRef = useRef(null);

  /* ------------------------------------------------------------------
     Reduced motion is read once and reused. Anyone who has asked their
     OS for less movement gets a static page rather than a degraded one.
  ------------------------------------------------------------------- */
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     FORM SUBMIT
     Error state now lives in React rather than being written straight
     onto the DOM via a ref. The previous version mutated
     errorRef.current.style.display, which bypassed React entirely and
     meant the message was never announced to assistive tech.
  ------------------------------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Send focus to the confirmation heading so keyboard and screen
  // reader users land on the outcome instead of being stranded.
  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

  /* ------------------------------------------------------------------
     SCROLL REVEALS
     Two deliberate changes from the previous implementation:

     1. Everything runs inside a gsap.context() scoped to this page.
        The old code called ScrollTrigger.getAll().forEach(t => t.kill())
        on mount, which destroyed triggers belonging to the navbar and
        every other mounted component.

     2. Opacity is set to 0 by GSAP at runtime, not in CSS. If the
        bundle fails, or motion is reduced, the content is simply
        visible — it can never end up stuck at opacity 0.
  ------------------------------------------------------------------- */
  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero — plays on load, no trigger.
      gsap.from(".contact-hero-inner > *", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Sections below the fold. Only leaf groups are animated —
      // the old version animated a parent section AND its child cards,
      // which double-transformed and caused visible jank.
      const groups = [
        ".consultation-aside",
        ".consultation-box",
        ".process-step",
        ".office-card",
      ];

      groups.forEach((selector) => {
        const targets = gsap.utils.toArray(selector);
        if (!targets.length) return;

        gsap.from(targets, {
          opacity: 0,
          y: 36,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: targets[0],
            start: "top 88%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert(); // kills only what this page created
  }, [prefersReducedMotion]);

  return (
    <main className="contact-page" ref={pageRef}>
      {/* ============================================================
          1. HERO
          Question answered: am I in the right place, and what can I
          do right now?

          Changes: the unsubstantiated "trusted by enterprises" badge
          is replaced with checkable credentials, and the pull-quote
          ("prevention is cheaper than a breach") is gone — an
          aphorism on the page where someone is judging whether
          you're serious works against you.

          Deliberately no buttons here. The hero states the offer and
          hands off immediately to the three routes below, so the
          first decision a visitor makes is WHICH conversation to
          start, not whether to scroll.
      ============================================================ */}
      <section className="contact-hero">
        {/* Tech Grid Background */}
        <div className="contact-hero-grid" aria-hidden="true" />

        {/* Glowing Cyber Scanner Radar */}
        <div className="cyber-scanner" aria-hidden="true" />

        {/* Floating particles */}
        <div className="contact-hero-particles" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="contact-hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="contact-hero-inner">
          <p className="hero-eyebrow">Contact CyberAries</p>

          <h1>
            Start the <span className="text-accent-red">Conversation</span>
          </h1>

          <p className="hero-lede">
            Most of the work we do starts with a short, unpriced conversation
            about what a regulator, an auditor, or a client is asking of you.
            Tell us where you are and we'll tell you what's actually required.
          </p>

          <ul className="hero-credentials">
            {CREDENTIALS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>


      {/* ============================================================
          3. THE CONSULTATION REQUEST
          Question answered: how do I actually start?

          The conversion moment, with nothing competing beside it.
          The map that used to sit in this rail has been removed —
          it was a duplicate of the office map further down, and an
          outbound link placed next to the fields someone is filling
          in. In its place: guidance that improves what gets
          submitted, and the confidentiality commitment.
      ============================================================ */}
      <section
        className="consultation-section"
        ref={formSectionRef}
        id="consultation-form"
      >
        <div className="consultation-container">
          <aside className="consultation-aside">
            <span className="section-eyebrow">Request a consultation</span>
            <h2>Tell us what you're solving</h2>
            <p className="consultation-lede">
              Whether you're evaluating your security posture, planning a compliance initiative, or seeking expert guidance, our team will help you understand the right next steps.
            </p>

            <div className="aside-block">
              <h3 className="aside-heading">What we can help you with</h3>
              <ul className="aside-list">
                {briefPrompts.map((prompt) => (
                  <li key={prompt}>
                    <CheckCircle2
                      size={17}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

          <div className="consultation-box">
            {status === "success" ? (
              /* Inline confirmation replaces the old modal overlay.
                 The modal's only action was "Close", which returned
                 the visitor to a page they had already converted on
                 with nothing left to do. This confirms, then points
                 forward. */
              <div className="form-success" role="status">
                <span className="form-success-icon" aria-hidden="true">
                  <CheckCircle2 size={30} strokeWidth={1.75} />
                </span>
                <h3 tabIndex={-1} ref={successHeadingRef}>
                  Request received
                </h3>
                <p>
                  A CyberAries specialist has it and will respond within{" "}
                  {RESPONSE_SLA}. Everything in the four steps below applies
                  from here — starting with the NDA, if you'd like that first.
                </p>
                <p className="form-success-alt">
                  Working to a deadline? Call{" "}
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> and mention your
                  request.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Gives the inbox a usable subject line instead of
                    every enquiry arriving identical. */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New consultation request — cyberaries.com"
                />
                {/* Honeypot. Bots fill it, people never see it. */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="form-honeypot"
                  aria-hidden="true"
                />

                <div className="form-grid">
                  <label className="form-field">
                    <span className="form-field-label">Full name</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="form-field">
                    <span className="form-field-label">Work email</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </label>

                  {/* Added. For a B2B security engagement the
                      organisation is worth more than a phone number. */}
                  <label className="form-field">
                    <span className="form-field-label">Organisation</span>
                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                      required
                    />
                  </label>

                  {/* Now optional, and no longer restricted to ten
                      digits — the old pattern rejected every
                      international number outright. */}
                  <label className="form-field">
                    <span className="form-field-label">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </label>

                  {/* Replaces free-text "Subject" — routes and
                      qualifies in a single control. */}
                  <label className="form-field">
                    <span className="form-field-label">What do you need</span>
                    <div className="form-select-wrapper">
                      <select name="service" defaultValue="" required>
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={17}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="form-select-chevron"
                      />
                    </div>
                  </label>

                  <label className="form-field">
                    <span className="form-field-label">Timeline</span>
                    <div className="form-select-wrapper">
                      <select name="timeline" defaultValue="">
                        <option value="">Not sure yet</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={17}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="form-select-chevron"
                      />
                    </div>
                  </label>

                  <label className="form-field form-field-full">
                    <span className="form-field-label">
                      What are you working on
                    </span>
                    <textarea
                      name="message"
                      required
                    />
                  </label>

                  <div className="submit-wrapper">
                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={status === "sending"}
                    >
                      {status === "sending"
                        ? "Sending…"
                        : "Request a consultation"}
                    </button>
                    <p className="form-footnote">
                      No obligation, and no sales sequence. Your details aren't
                      shared outside CyberAries.
                    </p>
                  </div>
                </div>

                {/* aria-live means a screen reader hears the failure
                    instead of it appearing silently. */}
                {status === "error" && (
                  <div className="error" role="alert">
                    That didn't send. Try again, or email us directly at{" "}
                    <a href={`mailto:${EMAIL_SALES}`}>{EMAIL_SALES}</a>.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. WHAT HAPPENS NEXT
          Question answered: what am I committing to?

          NEW SECTION — and the most important addition. The previous
          page never told anyone what followed a submission; the
          confirmation modal said "a specialist will reach out
          shortly" and stopped there. This is where the response
          promise is stated, once, for the whole page.
      ============================================================ */}
      <section className="process-section">
        <div className="process-container">
          <div className="section-heading">
            <span className="section-eyebrow">After you send it</span>
            <h2>What happens next</h2>
            <p>
              Four steps, in this order. Nothing is billed and nothing is
              committed until the fourth one.
            </p>
          </div>

          <ol className="process-grid">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li className="process-step" key={step.title}>
                  <span className="process-step-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="process-step-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ============================================================
          5. THE OFFICE
          Question answered: are you a real company with a real address?

          One instance, one map, placed well away from the form. The
          previous page carried this iframe twice with an identical
          src, plus the address a third time in a channel card.
      ============================================================ */}
      <section className="office-section">
        <div className="office-container">
          <div className="office-card">
            <div className="office-info">
              <span className="section-eyebrow">Our office</span>
              <h2>Powai, Mumbai</h2>
              <p>
                We're happy to meet in person. Arrange it in advance so the
                specialist you need is in the building rather than at a client
                site.
              </p>

              <div className="office-detail">
                <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />
                <span>{OFFICE_LINE}</span>
              </div>
              <div className="office-detail">
                <Clock size={18} strokeWidth={1.75} aria-hidden="true" />
                <span>{OFFICE_HOURS}</span>
              </div>
              <div className="office-detail">
                <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
                <a href={`mailto:${EMAIL_SALES}`}>{EMAIL_SALES}</a>
              </div>
              <div className="office-detail">
                <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </div>

              <a
                className="office-directions-btn"
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={17} strokeWidth={2} aria-hidden="true" />
                Get directions
              </a>
            </div>

            <div className="office-map-container">
              <iframe
                title="CyberAries office location on Google Maps"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Contact;
