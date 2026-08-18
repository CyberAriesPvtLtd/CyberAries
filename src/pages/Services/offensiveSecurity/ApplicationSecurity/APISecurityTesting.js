import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/application-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/apiSecurity-overview.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Search,
  Target,
  Shield,
  Code,
  AlertTriangle,
  FileCheck,
  CheckCircle,
  Award,
  Users,
  Headphones,
  KeyRound,
  Lock,
  Terminal,
  Settings,
  Database,
  Wifi,
  Network, Landmark } from 'lucide-react';
import './APISecurityTesting.css';

/**
 * API Security Testing Service Page
 * Ensuring Secure and Reliable Data Exchange
 *
 * Mirrors the Web App Security master template:
 * Hero -> What We Test (diagram) -> Our Approach (methodology journey)
 * -> Why Choose -> CyberAries Difference -> CTA
 */

const APISecurityTesting = () => {
  const navigate = useNavigate();

  const scrollToApproach = () => {
    const el = document.getElementById('our-approach');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // What We Test Data (OWASP API Security Top 10 surfaces)
  const whatWeTestItems = [
    {
      title: "Broken Object Level Authorization",
      description: "Object references tested to ensure users cannot access data belonging to others (BOLA/IDOR).",
      icon: <Lock size={32} strokeWidth={1.75} />
    },
    {
      title: "Broken Authentication",
      description: "Token issuance, validation, and refresh flows checked for weaknesses attackers exploit.",
      icon: <KeyRound size={32} strokeWidth={1.75} />
    },
    {
      title: "Injection & Input Validation",
      description: "SQL, NoSQL, and command injection points identified across every API parameter.",
      icon: <Terminal size={32} strokeWidth={1.75} />
    },
    {
      title: "Security Misconfiguration",
      description: "Headers, CORS, verbose errors, and default settings reviewed against secure baselines.",
      icon: <Settings size={32} strokeWidth={1.75} />
    },
    {
      title: "Rate Limiting & Resources",
      description: "Endpoints assessed for protection against brute force, replay, and denial of service abuse.",
      icon: <Wifi size={32} strokeWidth={1.75} />
    },
    {
      title: "Excessive Data Exposure",
      description: "Responses and error handling checked for over sharing of sensitive or internal data.",
      icon: <Database size={32} strokeWidth={1.75} />
    }
  ];

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Define API endpoints, environments, and protocols to establish clear testing boundaries.",
      icon: <FileText size={36} />
    },
    {
      title: "Information Gathering",
      description: "Collect documentation, tokens, and request response samples for detailed analysis.",
      icon: <Search size={36} />
    },
    {
      title: "Threat Modeling",
      description: "Map endpoints and prioritize critical authorization and data exchange paths for testing.",
      icon: <Target size={36} />
    },
    {
      title: "Authentication & Authorization",
      description: "Verify token management, role-based access, and object-level privilege enforcement.",
      icon: <Lock size={36} />
    },
    {
      title: "Input Validation & Fuzzing",
      description: "Test input handling for injection, mass assignment, and improper validation.",
      icon: <Shield size={36} />
    },
    {
      title: "Business Logic Testing",
      description: "Evaluate workflows, request sequencing, and transaction integrity for logic flaws.",
      icon: <Code size={36} />
    },
    {
      title: "Rate Limiting & Errors",
      description: "Assess throttling, session control, and error responses for abuse and data leakage.",
      icon: <AlertTriangle size={36} />
    },
    {
      title: "Reporting & Recommendations",
      description: "Deliver a detailed report outlining vulnerabilities, impact, and remediation guidance.",
      icon: <FileCheck size={36} />
    },
    {
      title: "Re Testing & Verification",
      description: "Confirm that all identified API vulnerabilities have been effectively mitigated.",
      icon: <CheckCircle size={36} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Certified Expertise",
      description: "Government recognized and experienced API security professionals.",
      icon: <Award size={44} strokeWidth={1.5} />
    },
    {
      title: "Manual + Automated Testing",
      description: "Technology assisted testing combined with human led security analysis.",
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
      'Relies heavily on automated scanning tools with limited manual validation.',
      'Misses complex authorization logic and business workflow vulnerabilities.',
      'Generic testing without coverage of OWASP API Security Top 10.',
      'Limited testing of authentication, session management, and rate limiting.',
      'Superficial analysis of error handling and data exposure risks.',
      'Reports lack context-specific remediation guidance for API architectures.'
    ],
    cyberaries: [
      'Comprehensive manual testing combined with advanced automated tools.',
      'Deep analysis of authentication, authorization, and access control mechanisms.',
      'Complete OWASP API Security Top 10 coverage across REST, SOAP, and GraphQL.',
      'Thorough testing of rate limiting, session management, and token validation.',
      'Detailed examination of error handling, data exposure, and injection vulnerabilities.',
      'Actionable, API-specific remediation guidance with security best practices.'
    ]
  };

  return (
    <div className="api-security-page sast-style-page">
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
            <div className="apisecuritytesting-hero-badge">
                  <Landmark size={14} className="apisecuritytesting-badge-icon" />
                  <span className="apisecuritytesting-badge-text">
                    OFFENSIVE SECURITY <span className="apisecuritytesting-badge-divider">/</span> APPLICATION SECURITY
                  </span>
                </div>
            <h1 className="hero-title">
              <span className="text-gradient">API SECURITY<br />TESTING</span>
            </h1>
            <p className="hero-description">
              Protect the APIs that power your data exchange before attackers abuse them. Our manual and
              automated testing combines OWASP API Top 10 coverage, authorization testing, and controlled
              exploitation across REST, SOAP, and GraphQL to uncover vulnerabilities scanners miss.
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
                <p className="section-eyebrow">API Security Testing</p>
                <h2 className="section-title">Securing every integration endpoint</h2>
                <p className="overview-text">
                  We deliver <strong>manual and automated API testing</strong> across REST, SOAP, and
                  GraphQL covering the full OWASP API Security Top 10 that automated tools overlook.
                </p>
                <p className="overview-text">
                  From <strong>broken object level authorization to excessive data exposure</strong>,
                  we simulate real world attacks and return actionable, API specific remediation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="API Security Testing"
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
              <h2 className="section-title">Six API security surfaces. One complete interface assessment.</h2>
            </div>
          </ScrollReveal>

          <div className="security-diagram-container">
            {/* Central Node */}
            <div className="diagram-central-node-wrapper">
              <ScrollReveal direction="up" delay={100}>
                <div className="diagram-central-node">
                  <div className="central-node-icon">
                    <Network size={36} strokeWidth={1.5} />
                  </div>
                  <div className="central-node-text">
                    <span className="node-text-sub">API</span>
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
              {/* CATEGORY 01: ACCESS */}
              <ScrollReveal direction="up" delay={150} className="category-reveal-wrapper">
                <div className="diagram-category-column">
                  <div className="category-header">
                    <div className="category-meta">
                      <span className="category-number">01</span>
                      <span className="category-label">ACCESS</span>
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

              {/* CATEGORY 03: DATA */}
              <ScrollReveal direction="up" delay={250} className="category-reveal-wrapper">
                <div className="diagram-category-column">
                  <div className="category-header">
                    <div className="category-meta">
                      <span className="category-number">03</span>
                      <span className="category-label">DATA</span>
                    </div>
                    <div className="category-icon">
                      <Database size={18} />
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
                We help organizations strengthen <strong>API security posture</strong>, prevent data breaches,
                and maintain <strong>confidentiality, integrity, and availability</strong> across every integration endpoint.
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
              <h2 className="section-title">Our API Audit Methodology Is Built Around Accountability, Precision, and Achieving Compliance Excellence</h2>
            </div>
          </ScrollReveal>

          <div className="methodology-journey">
            {[
              {
                id: "01",
                name: "DISCOVER",
                flow: "Scoping → Recon → Modeling",
                steps: [approachSteps[0], approachSteps[1], approachSteps[2]]
              },
              {
                id: "02",
                name: "TEST",
                flow: "Access → Fuzzing → Logic",
                steps: [approachSteps[3], approachSteps[4], approachSteps[5]]
              },
              {
                id: "03",
                name: "VALIDATE",
                flow: "Limits → Reporting → Verifying",
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
                Our approach ensures complete visibility into your API security posture and helps you build secure, compliant, and resilient integration ecosystems.
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
                <h3 className="comparison-heading">Traditional API Testing</h3>
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
                  CyberAries API Security Testing
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
                Get a structured assessment of your API ecosystem's security posture, vulnerabilities, and remediation priorities.
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

export default APISecurityTesting;