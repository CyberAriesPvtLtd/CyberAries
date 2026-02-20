import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/wast-image.jpg';

import {
  FileText,
  Search,
  Target,
  Shield,
  Code,
  AlertTriangle,
  FileCheck,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones
} from 'lucide-react';
import './WebAppSecurity.css';

/**
 * Web Application Security Testing Service Page
 * Proactive Security Assessment for Modern Web Applications
 */

const WebAppSecurity = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Define testing objectives, modules, and user roles to ensure complete and clear coverage.",
      icon: <FileText size={40} />
    },
    {
      title: "Information Gathering",
      description: "Collect backend insights on application architecture, inputs, and technologies used.",
      icon: <Search size={40} />
    },
    {
      title: "Threat Modeling",
      description: "Identify potential attack paths and prioritize critical areas for in-depth testing.",
      icon: <Target size={40} />
    },
    {
      title: "Vulnerability Detection",
      description: "Detect flaws such as SQL Injection, XSS, CSRF, and authentication bypass vulnerabilities.",
      icon: <Shield size={40} />
    },
    {
      title: "Business Logic Testing",
      description: "Examine workflows and controls to uncover logic flaws that privilege escalation risks.",
      icon: <Code size={40} />
    },
    {
      title: "Exploitation",
      description: "Perform controlled testing to validate high-severity vulnerabilities and assess real-world impact.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Risk Evaluation",
      description: "Prioritize identified issues by severity and provide clear remediation guidance.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Reporting & Recommendations",
      description: "Deliver comprehensive reports with actionable fixes and best practices.",
      icon: <RefreshCw size={40} />
    },
    {
      title: "Re-Testing & Verification",
      description: "Validate fixes through follow-up testing to ensure complete resolution.",
      icon: <CheckCircle size={40} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Partnered with CERT-In Empanelled Experts",
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
      'Relies solely on automated scanning tools with minimal manual validation.',
      'Misses complex business logic flaws and authentication bypass vulnerabilities.',
      'Generates high volumes of false positives requiring extensive review.',
      'Limited coverage of OWASP Top 10 and emerging attack vectors.',
      'Generic reports without context-specific remediation guidance.',
      'One-time assessments without continuous security improvement.'
    ],
    cyberaries: [
      'Combines advanced automated tools with expert manual testing techniques.',
      'Deep analysis of business logic, authentication, and authorization mechanisms.',
      'Thorough validation eliminates false positives and confirms real threats.',
      'Comprehensive coverage including OWASP Top 10 and custom vulnerabilities.',
      'Detailed, actionable reports with tailored remediation recommendations.',
      'Continuous support with re-testing and ongoing security enhancement.'
    ]
  };

  return (
    <div className="web-app-security-page sast-style-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Application Security Testing</p>
            <h1 className="hero-title">
              WEB APPLICATION SECURITY TESTING{' '}
              <span className="text-gradient">
                PROTECTING YOUR DIGITAL PLATFORMS
              </span>
            </h1>
            <p className="hero-description">
              <strong>Web Application Security Testing (WAST)</strong> is a proactive process that identifies vulnerabilities,
              misconfigurations, and security loopholes in web applications before attackers can exploit them. It
              ensures your digital platforms remain <strong>secure, resilient, and compliant</strong> with global standards.
            </p>
            <p className="hero-description">
              At <strong>Cyberaries</strong>, we specialize in conducting comprehensive <strong>manual and automated web
                application assessments</strong> to detect OWASP Top 10 and business logic vulnerabilities. Our team of
              certified experts blends advanced tools with real-world attack simulations to uncover weaknesses that
              traditional scanners often miss.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Start Now</button>
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
                  We help organizations strengthen <strong>application security posture</strong>, prevent data breaches, and maintain
                  <strong> confidentiality, integrity, and availability</strong> across all web assets. <strong>Cyberaries</strong> delivers detailed risk
                  analyses, actionable remediation guidance, and continued security improvement—empowering
                  businesses to operate safely in an evolving digital landscape.
                </p>
                <p className="overview-text">
                  Our comprehensive testing methodology covers <strong>injection flaws, broken authentication, sensitive data exposure,
                    XML external entities (XXE), broken access control, security misconfigurations, cross-site scripting (XSS),
                    insecure deserialization, and components with known vulnerabilities</strong>—ensuring complete protection across
                  your entire web application infrastructure.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Web Application Security Testing"
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
                Our audit methodology is built around expertise, innovation, and enhancing threat visibility
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
                <h3 className="comparison-heading">Traditional Web App Testing</h3>
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
                  Cyberaries Web Application Security
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
                Ready to Secure Your Web Applications?
              </h2>
              <p className="cta-description">
                Enhance protection, reduce risk, and support your growth objectives.
              </p>
              <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>
                Contact With Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
    </div>
  );
};

export default WebAppSecurity;