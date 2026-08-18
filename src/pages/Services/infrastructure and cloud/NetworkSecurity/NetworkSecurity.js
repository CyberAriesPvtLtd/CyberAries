import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/network-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/network-overview.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Search,
  Target,
  Shield,
  Scan,
  AlertTriangle,
  FileCheck,
  RefreshCw,
  CheckCircle,
  Award,
  Cloud,
  Settings,
  ArrowRight, Landmark } from 'lucide-react';
import './NetworkSecurity.css';

/**
 * Network Security Testing Service Page
 * Evaluating Infrastructure Resilience Against Cyber Threats
 */

/* Decorative CTA icon: shield + lock with radial rings */
// eslint-disable-next-line no-unused-vars
const CtaIconGraphic = () => (
  <svg
    className="cta-icon-svg"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Secure network config shield illustration"
  >
    <defs>
      <radialGradient id="netsecCtaGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#netsecCtaGlow)" />
    <circle cx="100" cy="100" r="85" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.35" />
    <circle cx="100" cy="100" r="65" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.45" />
    <circle cx="100" cy="100" r="45" fill="none" stroke="#C1121F" strokeWidth="1.2" opacity="0.6" />
    <g transform="translate(100,100)">
      <path
        d="M0 -26 l22 8 v20 c0 15 -11 24 -22 29 c-11 -5 -22 -14 -22 -29 v-20z"
        fill="none"
        stroke="#ff5555"
        strokeWidth="2"
      />
      <rect x="-8" y="-2" width="16" height="13" rx="2" fill="none" stroke="#ff5555" strokeWidth="2" />
      <path d="M-5 -2 v-4 a5 5 0 0 1 10 0 v4" fill="none" stroke="#ff5555" strokeWidth="2" />
      <circle cx="0" cy="4" r="1.6" fill="#ff5555" />
    </g>
  </svg>
);

const NetworkSecurity = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Identify the target environment (LANs, WANs, devices), and objectives for a precise assessment boundary.",
      icon: <FileText size={30} />
    },
    {
      title: "Information Gathering",
      description: "Collect details on network topology, IP structure, and active devices.",
      icon: <Search size={30} />
    },
    {
      title: "Threat Modeling",
      description: "Identify potential entry points and prioritize high-risk systems for evaluation.",
      icon: <Target size={30} />
    },
    {
      title: "Vulnerability Scanning",
      description: "Use advanced tools to detect open ports, weak configurations, and outdated protocols.",
      icon: <Scan size={30} />
    },
    {
      title: "Manual Validation",
      description: "Verify auto results manually to eliminate false positives and confirm real risks.",
      icon: <Shield size={30} />
    },
    {
      title: "Exploitation Testing",
      description: "Perform controlled exploitation to assess the impact of discovered weaknesses.",
      icon: <AlertTriangle size={30} />
    },
    {
      title: "Privilege Escalation Review",
      description: "Evaluate internal pathways and potential misuse of privileges within the network.",
      icon: <FileCheck size={30} />
    },
    {
      title: "Reporting & Remediation",
      description: "Provide comprehensive reports with severity-based and actionable remediation steps.",
      icon: <RefreshCw size={30} />
    },
    {
      title: "Re Testing & Verification",
      description: "Validate that vulnerabilities have been effectively reduced post-remediation.",
      icon: <CheckCircle size={30} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Multi Cloud Expertise",
      description: "Deep experience across AWS, Azure, Google Cloud, and hybrid cloud environments.",
      icon: <Cloud size={30} strokeWidth={1.75} />
    },
    {
      title: "Partnered with CERT In Empanelled",
      description: "Government recognized security audit firm with proven track record.",
      icon: <Award size={30} strokeWidth={1.75} />
    },
    {
      title: "Comprehensive Support",
      description: "End-to-end assistance from discovery through remediation validation.",
      icon: <Settings size={30} strokeWidth={1.75} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Relies primarily on automated vulnerability scanners without manual verification.',
      'High rate of false positives and missed critical vulnerabilities.',
      'Generic scanning without customization for specific network architectures.',
      'Limited testing of privilege escalation and lateral movement scenarios.',
      'Superficial analysis of network segmentation and access controls.',
      'Reports lack context-specific remediation guidance for infrastructure.'
    ],
    cyberaries: [
      'Comprehensive manual testing combined with advanced automated scanning tools.',
      'Manual validation eliminates false positives and confirms exploitable vulnerabilities.',
      'Customized testing approach for LANs, WANs, routers, switches, and firewalls.',
      'Thorough evaluation of privilege escalation, lateral movement, and attack paths.',
      'Deep analysis of network segmentation, access controls, and defense layers.',
      'Detailed, infrastructure-specific remediation guidance with security best practices.'
    ]
  };

  return (
    <div className="network-security-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="hero-overlay" />
        <div className="hero-grid-pattern" />
        {/* Floating particles */}
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="network-security-hero-badge">
                  <Landmark size={14} className="network-security-badge-icon" />
                  <span className="network-security-badge-text">
                    INFRASTRUCTURE & CLOUD <span className="network-security-badge-divider">/</span> NETWORK SECURITY
                  </span>
                </div>
            <h1 className="hero-title">
              <span className="text-gradient">
                NETWORK SECURITY TESTING <br />
                &amp; INFRASTRUCTURE RESILIENCE
              </span>
            </h1>
            <p className="hero-description">
              <strong>Network Security Testing</strong> evaluates the resilience of your IT infrastructure by identifying
              <strong> misconfigurations, vulnerabilities, and weaknesses</strong> in internal and external network components. It
              ensures that your organization's critical assets remain protected against unauthorized access and
              network breaches.
            </p>
            <p className="hero-description">
              Our comprehensive testing covers <strong>routers, switches, firewalls, servers, and connected devices</strong>,
              combining automated scanning with manual validation to deliver accurate, prioritized, risk based results
              across your entire network infrastructure.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button" onClick={() => navigate('/contact')}>Start Now &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="overview-content">
                <p className="overview-text">
                  At <strong>Cyberaries</strong>, we conduct comprehensive <strong>network vulnerability assessments and penetration
                  tests</strong> to identify and remediate security gaps across routers, switches, firewalls, servers, and connected
                  devices. Our approach combines automated scanning with manual validation to deliver accurate,
                  prioritized, risk based results.
                </p>
                <p className="overview-text">
                  We help organizations build <strong>reliable, defense in depth security posture</strong> ensuring that every layer of
                  their network architecture meets the highest cybersecurity standards. <strong>Cyberaries</strong> delivers
                  detailed reporting, practical remediation guidance, and advisory support to build resilient,
                  threat resilient networks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Network Security Testing"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Modern Horizontal Timeline */}
      <section className="netsec-approach-section">
        <div className="grid-pattern" />
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="netsec-section-header text-center">
              <p className="netsec-eyebrow">Our Approach</p>
              <h2 className="netsec-approach-title">A Security First Infrastructure Methodology</h2>
              <p className="netsec-approach-subtitle">
                Our audit methodology is built around trust, adaptability, and reinforcing your security posture.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="netsec-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="netsec-method-card" key={index}>
                  <div className="netsec-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="netsec-method-connector" />}
                  <div className="netsec-method-icon">{step.icon}</div>
                  <h3 className="netsec-method-title">{step.title}</h3>
                  <p className="netsec-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–9 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="netsec-method-row">
              {approachSteps.slice(5, 9).map((step, index) => (
                <div className="netsec-method-card" key={index + 5}>
                  <div className="netsec-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 3 && <span className="netsec-method-connector" />}
                  <div className="netsec-method-icon">{step.icon}</div>
                  <h3 className="netsec-method-title">{step.title}</h3>
                  <p className="netsec-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="why-eyebrow">Why CyberAries</p>
              <h2 className="section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="why-choose-card">
                  <div className="why-choose-card-header">
                    <div className="why-choose-icon-box">{item.icon}</div>
                    <h3 className="why-choose-title">{item.title}</h3>
                  </div>
                  <p className="why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="cyberaries-difference">
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
                <h3 className="comparison-heading">Traditional Network Testing</h3>
                <ul className="comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="comparison-column cyberaries-col">
                <h3 className="comparison-heading cyberaries-heading">
                  Cyberaries Network Security Testing
                </h3>
                <ul className="comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet bullet-check">
                        <CheckCircle size={18} className="check-icon" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="netsec-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="netsec-cta-grid-pattern" />
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="netsec-cta-content">
              <h2 className="netsec-cta-title">
                <span className="netsec-cta-text-gradient">Ready to Secure Your Network Infrastructure?</span>
              </h2>
              <p className="netsec-cta-description">
                Enhance protection, reduce risk, and support your growth objectives.
              </p>
              <button
                className="netsec-btn netsec-btn-primary netsec-btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Contact Us Today
                <ArrowRight size={18} className="netsec-btn-arrow" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default NetworkSecurity;