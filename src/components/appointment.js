import React, { useEffect } from "react";
import "./appointment.css"; // create this file (CSS given earlier)

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, CheckCircle2, UserCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


function Appointment() {

  const handleSubmit = (e) => {
    // honeypot check
    if (e.target.website.value !== "") {
      e.preventDefault();
      return;
    }

    sessionStorage.setItem("cyber_recent_submit", "1");

    const btn = document.getElementById("send_message");
    btn.value = "Submitting...";
    btn.style.cursor = "not-allowed";
    btn.style.opacity = "0.6";
    btn.disabled = true;
  };

  useEffect(() => {
    const waNumber = "918828495202";

    const modal = document.getElementById("cy_modal");
    const modalWa = document.getElementById("cy_modal_wa");
    const modalClose = document.getElementById("cy_modal_close");
    const iframe = document.getElementById("gform-target");

    if (!modal || !modalWa || !modalClose || !iframe) return;

    const showModal = (name, service, phone) => {
      const waText = encodeURIComponent(
        `Hello CyberAries, I submitted a ${service || "consultation"} request. Name: ${name}, Phone: ${phone || ""}`
      );

      modalWa.href = `https://wa.me/${waNumber}?text=${waText}`;
      modal.style.display = "flex";
    };

    modalClose.onclick = () => {
      modal.style.display = "none";

      const btn = document.getElementById("send_message");
      btn.value = "Schedule Consultation";
      btn.style.cursor = "pointer";
      btn.style.opacity = "1";
      btn.disabled = false;
    };

    iframe.onload = () => {
      if (!sessionStorage.getItem("cyber_recent_submit")) return;
      sessionStorage.removeItem("cyber_recent_submit");

      document.getElementById("booking_form")?.reset();

      const name = document.getElementById("name")?.value;
      const service = document.getElementById("service")?.value;
      const phone = document.getElementById("phone")?.value;

      showModal(name, service, phone);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);
  useEffect(() => {
  // Clean old triggers (VERY IMPORTANT for React)
  ScrollTrigger.getAll().forEach(t => t.kill());

  /* ============================
     HERO TEXT (LOAD ONLY)
     ============================ */
  gsap.fromTo(
    ".appointment-hero-text > *",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      clearProps: "all", 
    }
  );

  /* ============================
     FORM CARD (LOAD)
     ============================ */
  gsap.fromTo(
    ".appointment-form-wrapper",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: 0.2,
      ease: "power3.out",
      clearProps: "all",
    }
  );

  /* ============================
     TRUST INDICATORS (STAGGER)
     ============================ */
  gsap.fromTo(
    ".trust-indicators li",
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.18,
      delay: 0.6,
      ease: "back.out(1.7)",
      clearProps: "all",
    }
  );

  /* ============================
     INPUT STAGGER (SUBTLE)
     ============================ */
  gsap.fromTo(
    ".appointment-form-wrapper .form-control, .btn-primary1",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      delay: 0.5,
      ease: "power2.out",
      clearProps: "all",
    }
  );

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);


  return (
    <>
      {/* HERO SECTION */}
      <section className="appointment-hero">
        <div className="appointment-container">

          {/* LEFT CONTENT */}
          <div className="appointment-hero-text">
            <span className="hero-tag">BOOK CONSULTATION</span>
            <h1>Schedule Your Free Cybersecurity Consultation</h1>
            <p>
              Meet with our cybersecurity specialists to discuss your current
              security challenges, evaluate potential risks, and receive
              practical recommendations tailored to your organization.
            </p>
            <p>
              Whether you're strengthening your security posture, preparing
              for compliance, or planning future security initiatives, our
              team is here to help you move forward with confidence.
            </p>

            <ul className="trust-indicators">
              <li>
                <Clock size={18} strokeWidth={2} />
                <span>Free Consultation</span>
              </li>
              <li>
                <CheckCircle2 size={18} strokeWidth={2} />
                <span>No Obligation</span>
              </li>
              <li>
                <UserCheck size={18} strokeWidth={2} />
                <span>Personalized Security Guidance</span>
              </li>
            </ul>

            <div className="hero-quote">
              “Strong cybersecurity begins with informed decisions.”
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="appointment-form-wrapper">
            <form
              id="booking_form"
              method="post"
              target="gform-target"
              action="https://docs.google.com/forms/d/e/1FAIpQLSdCFuDARkRQbPWw-7RnDEhLW5uUz11Ncx4QbAPxak3nS-TA-Q/formResponse"
              onSubmit={handleSubmit}
            >
              <h3 className="form-title">Schedule Your Consultation</h3>

              <select name="entry.2100516128" id="service" className="form-control">
                <option value="">Select Cybersecurity Service</option>
                <option value="Network Vulnerability Assessment">Network Vulnerability Assessment</option>
                <option value="Penetration Testing">Penetration Testing</option>
                <option value="Managed Security Services">Managed Security Services</option>
                <option value="Incident Response Planning">Incident Response Planning</option>
                <option value="Security Awareness Training">Security Awareness Training</option>
                <option value="Compliance & Risk Assessment">Compliance & Risk Assessment</option>
              </select>

              <div className="form-row">
                <input type="date" name="entry.1947016194" className="form-control" />
                <select name="entry.355360033" className="form-control">
                  <option value="">Select Time</option>
                  {["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"].map(t =>
                    <option key={t} value={t}>{t}</option>
                )}
                </select>
              </div>

              <div className="form-row">
                <input type="text" name="entry.1783163467" id="name" placeholder="Name" required className="form-control" />
                <input type="tel" name="entry.1429787953" id="phone" placeholder="Phone" inputmode="numeric"
                    pattern="[0-9]{10}"
                    title="Enter a valid 10 digit phone number" required className="form-control" />
             </div>

              <input type="email" name="entry.913903228" placeholder="Email" required className="form-control" />

              <textarea
                name="entry.1035017623"
                placeholder="Tell us about your security concerns"
                className="form-control"
              />

              {/* Honeypot */}
              <input type="text" name="entry.2139951012" id="website" style={{ display: "none" }} />

              <input
                type="submit"
                id="send_message"
                className="btn-primary1"
                value="Schedule Consultation"
              />
            </form>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      <div id="cy_modal" style={{ display: "none" }} className="success-modal">
        <div className="success-box">
          <h3>Request Submitted</h3>
          <p>Your consultation request has been received.</p>
          <div className="modal-actions">
            <a id="cy_modal_wa" href="/" target="_blank" rel="noreferrer">Confirm on WhatsApp</a>
            <button id="cy_modal_close">Close</button>
          </div>
        </div>
      </div>

      <iframe name="gform-target" id="gform-target" title="gform-target" style={{ display: "none" }} />
    </>
  );
}

export default Appointment;