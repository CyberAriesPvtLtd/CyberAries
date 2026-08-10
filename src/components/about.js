import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./about.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, Lock, BadgeCheck, ShieldCheck, Users, Handshake, Settings2, Target, Compass, ArrowRight } from "lucide-react";

// import about_image from "../../public/about_image.png";
const About = () => {
const heroTextRef = useRef(null);
const heroTrustRef = useRef(null);
const expTextRef = useRef(null);
const expImgRef = useRef(null);
const expertiseRef = useRef(null);
const overviewRef = useRef(null);
const teamRef = useRef(null);
const ctaRef = useRef(null);
const heroTitleRef = useRef(null);
const heroDescRef = useRef(null);
const expertiseTagRef = useRef(null);
const expertiseTitleRef = useRef(null);

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {

    /* ----------------------------------
       HERO TEXT (About Us)
    ---------------------------------- */
    if (heroTextRef.current?.children) {
      gsap.fromTo(
        heroTextRef.current.children,
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       HERO TRUST LIST (Enterprise Security,
       Risk & Compliance, Continuous Protection)
    ---------------------------------- */
    if (heroTrustRef.current?.children) {
      gsap.fromTo(
        heroTrustRef.current.children,
        { opacity: 0, y: 20, scale: 0.85 },
        {
          scrollTrigger: {
            trigger: heroTrustRef.current,
            start: "top 85%",
            once: true,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.7,
          delay: 0.5,
          ease: "back.out(1.7)",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       HERO IMAGE FLOAT — removed.
       No hero <img> currently exists in this component
       (see commented-out import at the top of the file).
       If a hero image is reintroduced, re-add a dedicated
       ref (e.g. heroImgRef) and this float animation.
    ---------------------------------- */

    /* ----------------------------------
       EXPERIENCE IMAGE
    ---------------------------------- */
    if (expImgRef.current) {
      gsap.fromTo(
        expImgRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: expImgRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       EXPERIENCE TEXT (EXCLUDES BUTTON)
    ---------------------------------- */
    if (expTextRef.current?.children) {
      const expTextItems = Array.from(expTextRef.current.children).filter(
        el => !el.classList.contains("about-exp-cta-btn")
      );

      gsap.fromTo(
        expTextItems,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: expTextRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 1,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       EXPERTISE LIST
    ---------------------------------- */
    if (expertiseRef.current?.children) {
      gsap.fromTo(
        expertiseRef.current.children,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       OVERVIEW TEXT
    ---------------------------------- */
    if (overviewRef.current?.children) {
      gsap.fromTo(
        overviewRef.current.children,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: overviewRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       TEAM CARDS
    ---------------------------------- */
    if (teamRef.current?.children) {
      gsap.fromTo(
        teamRef.current.children,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       CTA SECTION (TEXT ONLY — BUTTON SAFE)
    ---------------------------------- */
    if (ctaRef.current?.children) {
      const ctaTextItems = Array.from(ctaRef.current.children).filter(
        el => !el.classList.contains("about-cta-actions")
      );

      gsap.fromTo(
        ctaTextItems,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

  });

  return () => ctx.revert();
}, []);


  

  return (
      <>
    <section className="about-hero">
      <div className="about-hero-bg" aria-hidden="true">
        <div className="about-hero-grid"></div>
        <div className="about-hero-glow"></div>
        <div className="about-hero-scanline"></div>
      </div>

      <div className="about-hero-container">
        <div className="about-hero-text" ref={heroTextRef}>
          <span className="about-hero-badge">Trusted Cybersecurity Partner</span>

          <h1 ref={heroTitleRef} className="about-hero-heading">
            Building Trust Through
            <br />
            Proactive Cybersecurity
          </h1>

          <p ref={heroDescRef} className="about-hero-description">
            CyberAries exists to help organizations stay ahead of threats,
            not react to them. We pair deep technical expertise with
            continuous monitoring and risk-led strategy, so security becomes
            a foundation your business can grow on.
          </p>

          <ul className="about-hero-trust" ref={heroTrustRef}>
            <li>
              <ShieldAlert size={18} strokeWidth={2} />
              <span>Enterprise Security</span>
            </li>
            <li>
              <BadgeCheck size={18} strokeWidth={2} />
              <span>Risk &amp; Compliance</span>
            </li>
            <li>
              <Lock size={18} strokeWidth={2} />
              <span>Continuous Protection</span>
            </li>
          </ul>

          <div className="about-hero-cta">
            <a href="/contact" className="about-hero-btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      </section>
      <section className="about-experience">

      <div className="about-exp">
        <div className="about-exp-container">
          <div className="about-exp-visual">
            <div className="about-exp-card">
              <span className="about-exp-number">10+</span>
              <span className="about-exp-label">Years of Experience</span>
            </div>

            <img
                ref={expImgRef}
                src="/assets/experience.webp"
                alt="Cybersecurity expertise"
                className="experience-img"
                />
          </div>
          
          {/* LEFT CONTENT */}
          <div className="about-exp-text" ref={expTextRef}>
            <span className="about-exp-tag" >OUR STORY</span>

            <h2>
              Driven by Trust. <br /> Built for Security.
            </h2>

            <p>
              CyberAries was founded on a simple belief: businesses shouldn't
              have to choose between growth and security. Too many
              organizations only think about cybersecurity after a breach
              has already happened, so we built our company around getting
              ahead of that moment instead of responding to it. Every
              engagement is guided by the same principle &mdash; understand the
              real risk first, then build defenses that hold up under
              pressure, not just on paper. That commitment has shaped how we
              work with every client, and it's the same standard we hold
              ourselves to as threats continue to evolve.
            </p>
            <a href="/contact" className="about-exp-cta-btn">
              Start For Free
            </a>
          </div>

          {/* RIGHT VISUAL */}
        </div>
      </div>
      </section>

      <section className="about-expertise">
        <div className="about-expertise-header">
          <span className="about-expertise-tag" ref={expertiseTagRef}>WHY CYBERARIES</span>
          <h2 ref={expertiseTitleRef}>Why Organizations Trust CyberAries</h2>
        </div>

        <div className="about-trust-grid" ref={expertiseRef}>
          <div className="about-trust-card">
            <div className="about-icon-circle"><ShieldCheck size={22} /></div>
            <h4>Proactive Security Approach</h4>
            <p>
              We identify and address risk before it becomes an incident,
              building defenses around what could happen, not just what
              already has.
            </p>
          </div>

          <div className="about-trust-card">
            <div className="about-icon-circle"><Users size={22} /></div>
            <h4>Experienced Security Professionals</h4>
            <p>
              Our team brings years of hands-on security expertise across
              industries, so every recommendation is grounded in real-world
              practice.
            </p>
          </div>

          <div className="about-trust-card">
            <div className="about-icon-circle"><Settings2 size={22} /></div>
            <h4>Tailored Business Solutions</h4>
            <p>
              We take time to understand your business before proposing a
              single solution, so every strategy fits how you actually
              operate.
            </p>
          </div>

          <div className="about-trust-card">
            <div className="about-icon-circle"><Handshake size={22} /></div>
            <h4>Long-Term Security Partnership</h4>
            <p>
              Security is never static. We stay engaged well beyond
              onboarding, adapting alongside your business as new threats
              emerge.
            </p>
          </div>
        </div>
      </section>
      <section className="about-overview">
        <div className="about-overview-header">
          <span className="about-overview-tag">MISSION &amp; VISION</span>
          <h2>Where We're Headed</h2>
        </div>

        <div className="about-mv-journey" ref={overviewRef}>
          {/* TODAY — MISSION */}
          <div className="about-mv-card about-mv-mission">
            <span className="about-mv-watermark" aria-hidden="true">Mission</span>
            <div className="about-mv-top">
              <span className="about-mv-eyebrow">Today</span>
              <div className="about-mv-icon"><Target size={20} /></div>
            </div>
            <h4>Our Mission</h4>
            <p>
              To help organizations operate with confidence by making
              strong security practical, not just theoretical. We focus on
              real risk, clear communication, and defenses that hold up
              under actual pressure, not just in a report.
            </p>
            <div className="about-mv-footer">
              <span className="about-mv-footer-line" aria-hidden="true"></span>
              <span className="about-mv-micro">Practical Security</span>
            </div>
          </div>

          {/* CONNECTOR */}
          <div className="about-mv-connector" aria-hidden="true">
            <span className="about-mv-connector-line"></span>
            <span className="about-mv-connector-node">
              <ArrowRight size={16} strokeWidth={2.5} />
            </span>
            <span className="about-mv-connector-line"></span>
          </div>

          {/* FUTURE — VISION */}
          <div className="about-mv-card about-mv-vision">
            <span className="about-mv-watermark" aria-hidden="true">Vision</span>
            <div className="about-mv-top">
              <span className="about-mv-eyebrow">Future</span>
              <div className="about-mv-icon"><Compass size={20} /></div>
            </div>
            <h4>Our Vision</h4>
            <p>
              To become the security partner organizations turn to first,
              not after something goes wrong. We're building toward a
              future where proactive protection is the standard, not the
              exception.
            </p>
            <div className="about-mv-footer">
              <span className="about-mv-footer-line" aria-hidden="true"></span>
              <span className="about-mv-micro">Future-Ready Protection</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-cta-section">
        <div className="about-cta-container">
          <div className="about-cta-content" ref={ctaRef}>
            <span className="about-cta-badge">LET'S BUILD A SECURE FUTURE</span>

            <h2>Ready to Strengthen Your Cybersecurity Strategy?</h2>
            <p>
              Whether you're looking to strengthen your security posture,
              improve compliance, or proactively defend your business
              against evolving cyber threats, CyberAries is here to help.
              Let's build a secure and resilient digital future together.
            </p>

            <div className="about-cta-actions">
              <a href="/appointment" className="about-btn-primary">Schedule Free Consultation</a>
             
            </div>
          </div>
        </div>
      </section>
</>
  );
};
export default About; 


