import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import heroBgImage from '../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/mobile-image.jpg';
import Footer from '../../../../components/Footer';

import { 
  FileText,
  Search,
  Smartphone,
  Shield,
  Database,
  Lock,
  Wifi,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones
} from 'lucide-react';
import './MobileAppSecurity.css';

/**
 * Mobile Application Security Testing Service Page
 * Securing Android and iOS Apps from Emerging Threats
 */

const MobileAppSecurity = () => {
  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Identify mobile platforms, app versions, and environments to be tested.",
      icon: <FileText size={40} />
    },
    {
      title: "Information Gathering",
      description: "Collect app binaries, API details, and backend endpoints for review.",
      icon: <Search size={40} />
    },
    {
      title: "Static Analysis (SAST)",
      description: "Examine source code or binaries for hardcoded credentials, API keys, and insecure functions.",
      icon: <Smartphone size={40} />
    },
    {
      title: "Dynamic Analysis (DAST)",
      description: "Execute the app in controlled environment to identify runtime vulnerabilities.",
      icon: <Shield size={40} />
    },
    {
      title: "Data Storage & Encryption Review",
      description: "Assess how sensitive information is stored, encrypted, and handled locally.",
      icon: <Database size={40} />
    },
    {
      title: "Authentication & Session Management",
      description: "Test login mechanisms, token management, and session handling for weaknesses.",
      icon: <Lock size={40} />
    },
    {
      title: "API & Network Communication Testing",
      description: "Validate secure transmission between mobile apps and backend servers.",
      icon: <Wifi size={40} />
    },
    {
      title: "Reporting & Recommendations",
      description: "Provide detailed findings with risk severity and actionable remediation steps.",
      icon: <RefreshCw size={40} />
    },
    {
      title: "Re-Testing & Verification",
      description: "Verify that resolved vulnerabilities are isolated and confirm improved security posture post-remediation.",
      icon: <CheckCircle size={40} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Proven Expertise",
      description: "350+ clients across banking, IT, insurance, healthcare, and manufacturing.",
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification.",
      icon: <Headphones size={48} strokeWidth={1.5} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Relies primarily on automated scanning tools without manual verification.',
      'Limited coverage of OWASP Mobile Top 10 vulnerabilities and attack vectors.',
      'Misses complex business logic flaws and platform-specific security issues.',
      'Superficial testing of authentication, session management, and encryption.',
      'Generic reports without actionable, platform-specific remediation guidance.',
      'No reverse engineering or in-depth analysis of APK/IPA binaries.'
    ],
    cyberaries: [
      'Comprehensive manual testing combined with advanced automated tools.',
      'Complete OWASP Mobile Security Testing Guide (MSTG) compliance coverage.',
      'Deep analysis of business logic, authentication, and data handling mechanisms.',
      'Thorough reverse engineering of APKs and IPAs to identify hidden vulnerabilities.',
      'Detailed, actionable reports with platform-specific remediation strategies.',
      'Testing across multiple OS versions, devices, and real-world attack scenarios.'
    ]
  };

  return (
    <div className="mobile-app-security-page sast-style-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Mobile Security Testing</p>
            <h1 className="hero-title">
              MOBILE APPLICATION SECURITY TESTING{' '}
              <span className="text-gradient">
                SECURING ANDROID AND IOS APPS
              </span>
            </h1>
            <p className="hero-description">
              <strong>Mobile Application Security Testing (MAST)</strong> ensures your Android and iOS applications are protected 
              against vulnerabilities that could expose <strong>sensitive user data, enable unauthorized access, or compromise 
              device integrity</strong>. It validates both the apps' client-side logic and its interactions with backend systems.
            </p>
            <p className="hero-description">
              Our comprehensive testing covers <strong>insecure data storage, weak encryption, improper authentication, 
              insecure communication, code quality issues, and reverse engineering vulnerabilities</strong>—protecting your 
              mobile applications across all platforms and deployment scenarios.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Start Now</button>
              <button className="btn btn-secondary">Learn More</button>
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
                  At <strong>Cyberaries</strong>, we conduct <strong>in-depth manual and automated testing</strong> aligned with the <strong>OWASP 
                  Mobile Security Testing Guide (MSTG)</strong> to detect insecure data storage, weak encryption, improper 
                  authentication, and business logic flaws. Our specialists reverse-engineer APKs and IPAs, simulate attacks, 
                  and assess communication between mobile apps and backend APIs across various platforms, OS versions, and 
                  devices to ensure complete coverage.
                </p>
                <p className="overview-text">
                  We help organizations build <strong>security and resilience</strong> of their mobile ecosystems 
                  by identifying risks before deployment, improving app security posture, and ensuring compliance with 
                  global security standards. <strong>Cyberaries</strong> empowers businesses to deliver <strong>secure, high-performing 
                  mobile applications</strong> that inspire user confidence and protect digital assets across Android and iOS 
                  platforms.
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

      {/* Our Approach Section */}
      <section className="solutions-section our-approach">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-subtitle">
                Our audit methodology is built around analysis, foresight, and building cyber confidence
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="solution-card">
                  <div className="solution-icon">{step.icon}</div>
                  <h3 className="solution-title">{step.title}</h3>
                  <p className="solution-description">{step.description}</p>
                  <div className="solution-indicator"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - MOVED BEFORE DIFFERENCE */}
      <section className="why-choose">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="why-choose-card">
                  <div className="why-choose-icon">{item.icon}</div>
                  <h3 className="why-choose-title">{item.title}</h3>
                  <p className="why-choose-description">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section - MOVED AFTER WHY CHOOSE */}
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
                <h3 className="comparison-heading">Traditional Mobile Testing</h3>
                <ul className="comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">
                  Cyberaries Mobile App Security
                </h3>
                <ul className="comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Secure Your Mobile Applications?
              </h2>
              <p className="cta-description">
                Enhance protection, reduce risk, and support your growth objectives.
              </p>
              <button className="btn btn-primary btn-large">
                Contact With Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileAppSecurity;
