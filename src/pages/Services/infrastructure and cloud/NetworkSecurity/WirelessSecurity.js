import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/network-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/wireless-image.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Wifi,
  Target,
  Shield,
  Lock,
  AlertTriangle,
  Activity,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones,
  ArrowRight, Landmark } from 'lucide-react';
import './WirelessSecurity.css';

/**
 * Wireless Security Testing Service Page
 * Securing Your Wireless Infrastructure Against Unauthorized Access
 */

const WirelessSecurity = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Define testing boundaries, target network segments, and wireless devices to be evaluated.",
      icon: <FileText size={30} />
    },
    {
      title: "Reconnaissance",
      description: "Identify active SSIDs, access points, and wireless devices within the target environment.",
      icon: <Wifi size={30} />
    },
    {
      title: "Network Mapping",
      description: "Analyze signal coverage, configurations, and device interconnections for vulnerabilities.",
      icon: <Target size={30} />
    },
    {
      title: "Encryption & Authentication Testing",
      description: "Evaluate encryption strength (WEP/WPA/WPA2/WPA3), and authentication mechanisms.",
      icon: <Lock size={30} />
    },
    {
      title: "Rogue Access Point Detection",
      description: "Identify unauthorized or malicious access points within the wireless network.",
      icon: <Shield size={30} />
    },
    {
      title: "Vulnerability Assessment",
      description: "Detect misconfigurations, weak passwords, and insecure network settings.",
      icon: <AlertTriangle size={30} />
    },
    {
      title: "Exploitation Simulation",
      description: "Conduct controlled attacks to test for credentials theft, sniffing, or session hijacking.",
      icon: <Activity size={30} />
    },
    {
      title: "Reporting & Recommendations",
      description: "Provide detailed findings with prioritized remediation steps.",
      icon: <RefreshCw size={30} />
    },
    {
      title: "Re Testing & Verification",
      description: "Validate corrective actions and confirm all wireless configurations post fix.",
      icon: <CheckCircle size={30} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Partnered with CERT In Empanelled",
      description: "Recognized by the Government of India for security audits.",
      icon: <Award size={30} strokeWidth={1.75} />
    },
    {
      title: "Proven Expertise",
      description: "350+ clients across banking, IT, insurance, healthcare, and manufacturing.",
      icon: <Users size={30} strokeWidth={1.75} />
    },
    {
      title: "End to End Support",
      description: "From scoping to remediation and final certification.",
      icon: <Headphones size={30} strokeWidth={1.75} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Basic wireless scanning with limited coverage and detection capabilities.',
      'Generic testing without customization for specific wireless environments.',
      'Misses sophisticated attacks like evil twin, rogue APs, and WPS vulnerabilities.',
      'Limited assessment of encryption protocols and authentication mechanisms.',
      'Superficial analysis of wireless segmentation and access controls.',
      'Reports lack actionable guidance for wireless infrastructure hardening.'
    ],
    cyberaries: [
      'Comprehensive wireless penetration testing with advanced reconnaissance tools.',
      'Customized testing for Wi Fi networks, controllers, and connected IoT devices.',
      'Detection of sophisticated attacks including evil twin, rogue APs, and WPS flaws.',
      'Thorough evaluation of WEP/WPA/WPA2/WPA3 encryption and authentication strength.',
      'Deep analysis of wireless segmentation, guest networks, and access policies.',
      'Detailed, infrastructure-specific remediation with wireless security best practices.'
    ]
  };

  return (
    <div className="wireless-security-page">
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
            <div className="wireless-security-hero-badge">
                  <Landmark size={14} className="wireless-security-badge-icon" />
                  <span className="wireless-security-badge-text">
                    INFRASTRUCTURE & CLOUD <span className="wireless-security-badge-divider">/</span> NETWORK SECURITY
                  </span>
                </div>
            <h1 className="hero-title">
              <span className="text-gradient">
                WIRELESS SECURITY TESTING <br />
                &amp; ROGUE ACCESS PROTECTION
              </span>
            </h1>
            <p className="hero-description">
              <strong>Wireless Security Testing</strong> identifies vulnerabilities, misconfigurations, and weak encryption
              protocols in wireless networks that could allow attackers to <strong>intercept or manipulate sensitive data</strong>.
              It ensures your wireless infrastructure remains protected against rogue access points, credential theft,
              and signal based attacks.
            </p>
            <p className="hero-description">
              Our comprehensive testing covers <strong>Wi Fi networks, access points, wireless controllers, encryption
              protocols (WEP/WPA/WPA2/WPA3), authentication mechanisms, and rogue device detection</strong>&mdash;securing your
              wireless environment against unauthorized access and data breaches.
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
                  At <strong>Cyberaries</strong>, we perform detailed <strong>wireless penetration testing and configuration
                  assessments</strong> to detect security flaws in Wi Fi networks, controllers, and connected devices. Our experts
                  combine manual testing with advanced tools to uncover risks that automated scans often overlook.
                </p>
                <p className="overview-text">
                  We ensure robust <strong>authentication, encryption, and access control mechanisms</strong> are in place to
                  safeguard your wireless environment from external threats and insider misuse. <strong>Cyberaries</strong> helps
                  organizations build secure, resilient wireless ecosystems that maintain business continuity and your trust.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Wireless Security Testing"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Modern Horizontal Timeline */}
      <section className="wsec-approach-section">
        <div className="grid-pattern" />
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="wsec-section-header text-center">
              <p className="wsec-eyebrow">Our Approach</p>
              <h2 className="wsec-approach-title">A Security First Wireless Audit Methodology</h2>
              <p className="wsec-approach-subtitle">
                Our audit methodology is built around consistency, insight, and detecting vulnerabilities before they escalate.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="wsec-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="wsec-method-card" key={index}>
                  <div className="wsec-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="wsec-method-connector" />}
                  <div className="wsec-method-icon">{step.icon}</div>
                  <h3 className="wsec-method-title">{step.title}</h3>
                  <p className="wsec-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–9 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="wsec-method-row">
              {approachSteps.slice(5, 9).map((step, index) => (
                <div className="wsec-method-card" key={index + 5}>
                  <div className="wsec-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 3 && <span className="wsec-method-connector" />}
                  <div className="wsec-method-icon">{step.icon}</div>
                  <h3 className="wsec-method-title">{step.title}</h3>
                  <p className="wsec-method-description">{step.description}</p>
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
                <h3 className="comparison-heading">Traditional Wireless Testing</h3>
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
                  Cyberaries Wireless Security Testing
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
      <section className="wsec-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="wsec-cta-grid-pattern" />
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="wsec-cta-content">
              <h2 className="wsec-cta-title">
                <span className="wsec-cta-text-gradient">Ready to Secure Your Wireless Infrastructure?</span>
              </h2>
              <p className="wsec-cta-description">
                Enhance protection, reduce risk, and support your growth objectives.
              </p>
              <button
                className="wsec-btn wsec-btn-primary wsec-btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Contact Us Today
                <ArrowRight size={18} className="wsec-btn-arrow" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default WirelessSecurity;
