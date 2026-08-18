import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/application-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/thinkClient-overview.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Search,
  Code,
  AlertTriangle,
  CheckCircle,
  Award,
  Users,
  Headphones,
  Monitor,
  Lock,
  Eye,
  Cpu,
  Database,
  Network,
  Shield, Landmark } from 'lucide-react';
import './ThickClientSecurity.css';

/**
 * Thick Client Security Testing Service Page
 * Securing Desktop & Rich Client Applications
 *
 * Mirrors the Web App Security master template:
 * Hero -> What We Test (diagram) -> Our Approach (methodology journey)
 * -> Why Choose -> CyberAries Difference -> CTA
 */

const ThickClientSecurity = () => {
  const navigate = useNavigate();

  const scrollToApproach = () => {
    const el = document.getElementById('our-approach');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // What We Test Data (thick client attack surfaces)
  const whatWeTestItems = [
    {
      title: "Client Side Logic",
      description: "Business logic, input validation, and error handling examined for exploitable flaws.",
      icon: <Monitor size={32} strokeWidth={1.75} />
    },
    {
      title: "Local Data Storage",
      description: "Registry keys, config files, and local databases checked for exposed secrets and artifacts.",
      icon: <Database size={32} strokeWidth={1.75} />
    },
    {
      title: "Authentication & Sessions",
      description: "Credential storage, session tokens, and privilege boundaries tested for bypass and escalation.",
      icon: <Lock size={32} strokeWidth={1.75} />
    },
    {
      title: "Binary & Memory",
      description: "Application binaries reverse engineered and runtime memory inspected for hardcoded secrets.",
      icon: <Cpu size={32} strokeWidth={1.75} />
    },
    {
      title: "Third Party Components",
      description: "Bundled libraries, dependencies, and update mechanisms assessed for supply chain risk.",
      icon: <Eye size={32} strokeWidth={1.75} />
    },
    {
      title: "Network Communication",
      description: "Client to server traffic and proprietary protocols analysed for insecure transmission.",
      icon: <Network size={32} strokeWidth={1.75} />
    }
  ];

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope & Architecture Review",
      description: "Map client side logic, server communication, and local data storage to define coverage.",
      icon: <FileText size={36} />
    },
    {
      title: "Environment Setup & Recon",
      description: "Configure proxies, interceptors, and debuggers to analyse application traffic and behaviour.",
      icon: <Search size={36} />
    },
    {
      title: "Traffic Analysis & Interception",
      description: "Intercept client to server communication to identify insecure or unencrypted data transmission.",
      icon: <Network size={36} />
    },
    {
      title: "Binary & Memory Analysis",
      description: "Reverse engineer binaries and inspect runtime memory for credentials, keys, and secrets.",
      icon: <Cpu size={36} />
    },
    {
      title: "Authentication & Authorization",
      description: "Test login, session management, privilege escalation, and improper access controls.",
      icon: <Lock size={36} />
    },
    {
      title: "Business Logic Testing",
      description: "Identify flaws in workflows, validation, and process logic attackers can abuse.",
      icon: <Code size={36} />
    },
    {
      title: "Local Storage & Registry",
      description: "Examine sensitive data stored in files, databases, registry keys, and caches.",
      icon: <Database size={36} />
    },
    {
      title: "Exploitation & Impact",
      description: "Validate findings through controlled exploitation to demonstrate real-world business impact.",
      icon: <AlertTriangle size={36} />
    },
    {
      title: "Reporting & Re Testing",
      description: "Deliver prioritized findings and validate fixes through follow up verification testing.",
      icon: <CheckCircle size={36} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Certified Expertise",
      description: "Government recognized and experienced thick client security professionals.",
      icon: <Award size={44} strokeWidth={1.5} />
    },
    {
      title: "Manual + Automated Testing",
      description: "Binary reverse engineering and memory analysis combined with tool-assisted testing.",
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
      'Limited to web based scanning tools not suited for thick client assessment.',
      'Misses client-side logic flaws, memory leaks, and hardcoded credentials.',
      'No binary analysis or runtime memory inspection capabilities.',
      'Lacks expertise in proprietary protocols used by desktop applications.',
      'Generic reports missing context specific thick client vulnerabilities.',
      'One-time assessments without post-remediation validation support.'
    ],
    cyberaries: [
      'Specialized thick client testing with advanced binary reverse engineering.',
      'Deep analysis of client-side logic, local storage, and memory artifacts.',
      'Full traffic interception and proprietary protocol analysis.',
      'Expert coverage of desktop, Java based, .NET, and Electron applications.',
      'Detailed reports with thick client specific exploitation evidence.',
      'Continuous support with re-testing and security enhancement recommendations.'
    ]
  };

  return (
    <div className="thick-client-security-page sast-style-page">
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
            <div className="thickclientsecurity-hero-badge">
                  <Landmark size={14} className="thickclientsecurity-badge-icon" />
                  <span className="thickclientsecurity-badge-text">
                    OFFENSIVE SECURITY <span className="thickclientsecurity-badge-divider">/</span> APPLICATION SECURITY
                  </span>
                </div>
            <h1 className="hero-title">
              <span className="text-gradient">THICK CLIENT<br />SECURITY TESTING</span>
            </h1>
            <p className="hero-description">
              Secure the desktop and rich client applications that web scanners can't reach. Our manual and
              automated testing combines binary reverse engineering, traffic interception, and controlled
              exploitation to uncover vulnerabilities across ERP, trading, and enterprise software.
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
                <p className="section-eyebrow">Thick Client Security</p>
                <h2 className="section-title">Specialized testing for desktop applications</h2>
                <p className="overview-text">
                  Thick clients expose a <strong>unique attack surface</strong> client side logic,
                  local storage, memory artifacts, and proprietary protocols that web scanners
                  simply can't assess.
                </p>
                <p className="overview-text">
                  We combine <strong>binary reverse engineering and traffic interception</strong> across
                  Java, .NET, and Electron apps to find and prove real, exploitable weaknesses.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Thick Client Security Testing"
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
              <h2 className="section-title">Six thick client surfaces. One complete application assessment.</h2>
            </div>
          </ScrollReveal>

          <div className="security-diagram-container">
            {/* Central Node */}
            <div className="diagram-central-node-wrapper">
              <ScrollReveal direction="up" delay={100}>
                <div className="diagram-central-node">
                  <div className="central-node-icon">
                    <Monitor size={36} strokeWidth={1.5} />
                  </div>
                  <div className="central-node-text">
                    <span className="node-text-sub">THICK CLIENT</span>
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
              {/* CATEGORY 01: CLIENT */}
              <ScrollReveal direction="up" delay={150} className="category-reveal-wrapper">
                <div className="diagram-category-column">
                  <div className="category-header">
                    <div className="category-meta">
                      <span className="category-number">01</span>
                      <span className="category-label">CLIENT</span>
                    </div>
                    <div className="category-icon">
                      <Monitor size={18} />
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

              {/* CATEGORY 02: RUNTIME */}
              <ScrollReveal direction="up" delay={200} className="category-reveal-wrapper">
                <div className="diagram-category-column">
                  <div className="category-header">
                    <div className="category-meta">
                      <span className="category-number">02</span>
                      <span className="category-label">RUNTIME</span>
                    </div>
                    <div className="category-icon">
                      <Cpu size={18} />
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
                      <Network size={18} />
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
                We help organizations strengthen <strong>thick client security posture</strong>, prevent data compromise,
                and maintain <strong>confidentiality, integrity, and availability</strong> across desktop and enterprise software.
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
              <h2 className="section-title">Our Thick Client Methodology Is Built on Deep Technical Expertise and a Structured, Proven Testing Framework</h2>
            </div>
          </ScrollReveal>

          <div className="methodology-journey">
            {[
              {
                id: "01",
                name: "DISCOVER",
                flow: "Scoping → Recon → Intercept",
                steps: [approachSteps[0], approachSteps[1], approachSteps[2]]
              },
              {
                id: "02",
                name: "TEST",
                flow: "Binary → Access → Logic",
                steps: [approachSteps[3], approachSteps[4], approachSteps[5]]
              },
              {
                id: "03",
                name: "VALIDATE",
                flow: "Storage → Exploit → Reporting",
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
                Our approach ensures complete visibility into your thick client security posture and helps you build resilient, secure, and compliant desktop platforms.
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
                <h3 className="comparison-heading">Traditional Thick Client Testing</h3>
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
                  CyberAries Thick Client Security
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
                Get a structured assessment of your thick client application's security posture, vulnerabilities, and remediation priorities.
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

export default ThickClientSecurity;