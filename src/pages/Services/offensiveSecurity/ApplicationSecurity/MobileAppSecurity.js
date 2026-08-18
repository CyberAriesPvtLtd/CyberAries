import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/application-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/mobileSecurity-overview.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Search,
  Shield,
  Code,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones,
  KeyRound,
  Lock,
  Database,
  Smartphone,
  Wifi,
  Cpu, Landmark } from 'lucide-react';
import './MobileAppSecurity.css';

/**
 * Mobile Application Security Testing Service Page
 * Securing Android and iOS Apps from Emerging Threats
 *
 * Mirrors the Web App Security master template:
 * Hero -> What We Test (diagram) -> Our Approach (methodology journey)
 * -> Why Choose -> CyberAries Difference -> CTA
 */

const MobileAppSecurity = () => {
  const navigate = useNavigate();

  const scrollToApproach = () => {
    const el = document.getElementById('our-approach');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // What We Test Data (mobile attack surfaces)
  const whatWeTestItems = [
    {
      title: "Authentication & Session Security",
      description: "Login flows, biometric checks, and token handling tested for weaknesses attackers exploit.",
      icon: <KeyRound size={32} strokeWidth={1.75} />
    },
    {
      title: "Insecure Cryptography",
      description: "Encryption of stored and in transit data reviewed for weak algorithms and key handling.",
      icon: <Lock size={32} strokeWidth={1.75} />
    },
    {
      title: "Reverse Engineering & Tampering",
      description: "APK and IPA binaries decompiled to expose hardcoded secrets and missing anti tampering.",
      icon: <Cpu size={32} strokeWidth={1.75} />
    },
    {
      title: "Insecure Data Storage",
      description: "Local databases, caches, and files checked for sensitive data left unprotected on device.",
      icon: <Database size={32} strokeWidth={1.75} />
    },
    {
      title: "Platform & IPC Misuse",
      description: "Deep links, exported components, and inter process interfaces tested for unsafe exposure.",
      icon: <Smartphone size={32} strokeWidth={1.75} />
    },
    {
      title: "Insecure Communication",
      description: "App-to-backend traffic validated for TLS enforcement, pinning, and interception risks.",
      icon: <Wifi size={32} strokeWidth={1.75} />
    }
  ];

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Identify target platforms, app versions, and environments to ensure complete coverage.",
      icon: <FileText size={36} />
    },
    {
      title: "Information Gathering",
      description: "Collect app binaries, API details, and backend endpoints for in depth review.",
      icon: <Search size={36} />
    },
    {
      title: "Static Analysis (SAST)",
      description: "Examine code and binaries for hardcoded credentials, API keys, and insecure functions.",
      icon: <Smartphone size={36} />
    },
    {
      title: "Dynamic Analysis (DAST)",
      description: "Run the app in a controlled environment to surface runtime and behavioural flaws.",
      icon: <Shield size={36} />
    },
    {
      title: "Data Storage & Encryption",
      description: "Assess how sensitive information is stored, encrypted, and handled on the device.",
      icon: <Database size={36} />
    },
    {
      title: "Authentication & Sessions",
      description: "Test login mechanisms, token management, and session handling for weaknesses.",
      icon: <Lock size={36} />
    },
    {
      title: "API & Network Testing",
      description: "Validate secure transmission between the mobile app and backend services.",
      icon: <Wifi size={36} />
    },
    {
      title: "Reporting & Recommendations",
      description: "Deliver detailed findings with risk severity and actionable remediation steps.",
      icon: <RefreshCw size={36} />
    },
    {
      title: "Re Testing & Verification",
      description: "Validate fixes through follow up testing to confirm complete resolution.",
      icon: <CheckCircle size={36} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Certified Expertise",
      description: "Government recognized and experienced mobile security professionals.",
      icon: <Award size={44} strokeWidth={1.5} />
    },
    {
      title: "Manual + Automated Testing",
      description: "Tool assisted analysis combined with human led reverse engineering.",
      icon: <Users size={44} strokeWidth={1.5} />
    },
    {
      title: "Remediation to Re-Test",
      description: "We don't stop at reporting vulnerabilities. We help validate the fix.",
      icon: <Headphones size={44} strokeWidth={1.5} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Relies primarily on automated scanning tools without manual verification.',
      'Limited coverage of OWASP Mobile Top 10 vulnerabilities and attack vectors.',
      'Misses complex business logic flaws and platform specific security issues.',
      'Superficial testing of authentication, session management, and encryption.',
      'Generic reports without actionable, platform-specific remediation guidance.',
      'No reverse engineering or in depth analysis of APK/IPA binaries.'
    ],
    cyberaries: [
      'Comprehensive manual testing combined with advanced automated tools.',
      'Complete OWASP Mobile Security Testing Guide (MSTG) compliance coverage.',
      'Deep analysis of business logic, authentication, and data handling mechanisms.',
      'Thorough reverse engineering of APKs and IPAs to identify hidden vulnerabilities.',
      'Detailed, actionable reports with platform-specific remediation strategies.',
      'Testing across multiple OS versions, devices, and real world attack scenarios.'
    ]
  };

  return (
    <div className="mobile-app-security-page sast-style-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="hero-overlay" />
        <div className="hero-glow" />

        {/* Floating particles */}
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="mobileappsecurity-hero-badge">
                  <Landmark size={14} className="mobileappsecurity-badge-icon" />
                  <span className="mobileappsecurity-badge-text">
                    OFFENSIVE SECURITY <span className="mobileappsecurity-badge-divider">/</span> APPLICATION SECURITY
                  </span>
                </div>
            <h1 className="hero-title">
              <span className="text-gradient">MOBILE APPLICATION<br />SECURITY TESTING</span>
            </h1>
            <p className="hero-description">
              Secure your Android and iOS applications before attackers reach your users. Our manual and
              automated testing combines MSTG aligned assessment, binary reverse engineering, and controlled
              exploitation to uncover vulnerabilities scanners miss.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Start Security Assessment &rarr;
              </button>
              <button className="btn btn-secondary" onClick={scrollToApproach}>
                View Methodology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section (text left, image right) */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="overview-content">
                <p className="section-eyebrow">Mobile Application Security</p>
                <h2 className="section-title">Deep testing for Android and iOS apps</h2>
                <p className="overview-text">
                  We run <strong>manual and automated testing</strong> aligned with the OWASP MSTG reverse engineering APKs and IPAs and simulating real attacks to surface flaws
                  that scanners can't reach.
                </p>
                <p className="overview-text">
                  From <strong>insecure storage to weak encryption and broken authentication</strong>,
                  every finding is validated by hand and returned with clear, platform specific remediation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Mobile Application Security Testing"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Test Section */}
      <section className="what-we-test section-offwhite-nogrid">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-eyebrow">WHAT WE TEST</p>
              <h2 className="section-title">Six mobile security surfaces. One complete application assessment.</h2>
            </div>
          </ScrollReveal>

          <div className="security-diagram-container">
            {/* Central Node */}
            <div className="diagram-central-node-wrapper">
              <ScrollReveal direction="up" delay={100}>
                <div className="diagram-central-node">
                  <div className="central-node-icon">
                    <Smartphone size={36} strokeWidth={1.5} />
                  </div>
                  <div className="central-node-text">
                    <span className="node-text-sub">MOBILE APPLICATION</span>
                    <span className="node-text-main">SECURITY TESTING</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Connection Lines */}
            <div className="diagram-connectors">
              <div className="connector-vertical-main"></div>
              <div className="connector-horizontal-branch"></div>
              <div className="connector-branches">
                <div className="connector-branch-left"></div>
                <div className="connector-branch-center"></div>
                <div className="connector-branch-right"></div>
              </div>
            </div>

            {/* Category Columns */}
            <div className="diagram-categories">
              {/* CATEGORY 01: IDENTITY */}
              <ScrollReveal direction="up" delay={150} className="category-reveal-wrapper">
                <div className="diagram-category-column">
                  <div className="category-header">
                    <div className="category-meta">
                      <span className="category-number">01</span>
                      <span className="category-label">IDENTITY</span>
                    </div>
                    <div className="category-icon">
                      <Lock size={18} />
                    </div>
                  </div>

                  <div className="category-surface-list">
                    {[whatWeTestItems[0], whatWeTestItems[1]].map((item, idx) => (
                      <div className="surface-pill-node" key={idx}>
                        <div className="surface-pill-header">
                          <span className="surface-pill-icon">{item.icon}</span>
                          <h4 className="surface-pill-title">{item.title}</h4>
                        </div>
                        <p className="surface-pill-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* CATEGORY 02: APPLICATION */}
              <ScrollReveal direction="up" delay={200} className="category-reveal-wrapper">
                <div className="diagram-category-column">
                  <div className="category-header">
                    <div className="category-meta">
                      <span className="category-number">02</span>
                      <span className="category-label">APPLICATION</span>
                    </div>
                    <div className="category-icon">
                      <Code size={18} />
                    </div>
                  </div>

                  <div className="category-surface-list">
                    {[whatWeTestItems[2], whatWeTestItems[3], whatWeTestItems[4]].map((item, idx) => (
                      <div className="surface-pill-node" key={idx}>
                        <div className="surface-pill-header">
                          <span className="surface-pill-icon">{item.icon}</span>
                          <h4 className="surface-pill-title">{item.title}</h4>
                        </div>
                        <p className="surface-pill-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* CATEGORY 03: NETWORK */}
              <ScrollReveal direction="up" delay={250} className="category-reveal-wrapper">
                <div className="diagram-category-column">
                  <div className="category-header">
                    <div className="category-meta">
                      <span className="category-number">03</span>
                      <span className="category-label">NETWORK</span>
                    </div>
                    <div className="category-icon">
                      <Wifi size={18} />
                    </div>
                  </div>

                  <div className="category-surface-list">
                    {[whatWeTestItems[5]].map((item, idx) => (
                      <div className="surface-pill-node" key={idx}>
                        <div className="surface-pill-header">
                          <span className="surface-pill-icon">{item.icon}</span>
                          <h4 className="surface-pill-title">{item.title}</h4>
                        </div>
                        <p className="surface-pill-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal direction="up" delay={300}>
            <div className="diagram-overview-text">
              <p className="overview-text">
                We help organizations strengthen <strong>mobile application security posture</strong>, prevent data leakage,
                and maintain <strong>confidentiality, integrity, and availability</strong> across Android and iOS.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="solutions-section our-approach section-white-grid" id="our-approach">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-eyebrow">Our Approach</p>
              <h2 className="section-title">Our Mobile Audit Methodology Is Built Around Expertise, Innovation, and Enhancing Threat Visibility</h2>
            </div>
          </ScrollReveal>

          <div className="methodology-journey">
            {[
              {
                id: "01",
                name: "DISCOVER",
                flow: "Scoping → Recon → Static",
                steps: [approachSteps[0], approachSteps[1], approachSteps[2]]
              },
              {
                id: "02",
                name: "TEST",
                flow: "Runtime → Storage → Access",
                steps: [approachSteps[3], approachSteps[4], approachSteps[5]]
              },
              {
                id: "03",
                name: "VALIDATE",
                flow: "Network → Reporting → Verifying",
                steps: [approachSteps[6], approachSteps[7], approachSteps[8]]
              }
            ].map((phase, phaseIndex) => (
              <div className="methodology-phase" key={phaseIndex}>
                <div className="phase-label-column">
                  <div className="phase-label-sticky">
                    <span className="phase-number">{phase.id}</span>
                    <h4 className="phase-name">{phase.name}</h4>
                    <p className="phase-subtitle-flow">{phase.flow}</p>
                  </div>
                </div>

                <div className="phase-nodes-row">
                  {phase.steps.map((step, stepIdx) => {
                    const absoluteIndex = phaseIndex * 3 + stepIdx;
                    const stepNumber = String(absoluteIndex + 1).padStart(2, '0');
                    return (
                      <React.Fragment key={stepIdx}>
                        <ScrollReveal direction="up" delay={absoluteIndex * 50} className="node-reveal-wrapper">
                          <div className="methodology-node">
                            <div className="node-header">
                              <span className="node-marker">{stepNumber}</span>
                              <div className="node-icon-wrapper">{step.icon}</div>
                            </div>
                            <h5 className="node-title">{step.title}</h5>
                            <p className="node-description">{step.description}</p>
                          </div>
                        </ScrollReveal>

                        {/* Horizontal Connector between nodes */}
                        {stepIdx < 2 && (
                          <div className="node-connector-horizontal">
                            <svg viewBox="0 0 40 10" preserveAspectRatio="none" className="connector-svg">
                              <line x1="0" y1="5" x2="32" y2="5" stroke="var(--accent corporate red)" strokeWidth="1.5" />
                              <polygon points="32,2 40,5 32,8" fill="var(--accent corporate red)" />
                            </svg>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Transition connector line to next phase (visual continuity) */}
                {phaseIndex < 2 && (
                  <div className="phase-transition-connector-line"></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <ScrollReveal direction="up" delay={200}>
            <div className="methodology-callout">
              <div className="callout-icon">
                <Shield size={20} />
              </div>
              <p className="callout-text">
                Our approach ensures complete visibility into your mobile application security posture and helps you ship resilient, secure, and compliant apps across Android and iOS.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose section-offwhite-nogrid">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-eyebrow">Why CyberAries</p>
              <h2 className="section-title">Why Security Teams Choose CyberAries</h2>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="why-choose-card">
                  <div className="why-choose-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="why-choose-icon">{item.icon}</div>
                  <div className="why-choose-body">
                    <h3 className="why-choose-title">{item.title}</h3>
                    <p className="why-choose-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="cyberaries-difference grid-bg">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span>{' '}
              DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional Mobile App Testing</h3>
                <ul className="comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet">&bull;</span>
                      <span className="item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">
                  CyberAries Mobile Application Security
                </h3>
                <ul className="comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="check-icon-wrapper">
                        <CheckCircle size={18} strokeWidth={2.5} />
                      </span>
                      <span className="item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">
                <span className="text-gradient">Find Out What Attackers Could Find</span>
              </h2>
              <p className="cta-description">
                Get a structured assessment of your mobile application's security posture, vulnerabilities, and remediation priorities.
              </p>
              <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>
                Request a Security Assessment &rarr;
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default MobileAppSecurity;