import React from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/api-image.jpg';
import Footer from '../../../../components/Footer';

import {
  FileText,
  Search,
  Shield,
  Lock,
  FileCheck,
  Code,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones
} from 'lucide-react';
import './APISecurityTesting.css';

/**
 * API Security Testing Service Page
 * Ensuring Secure and Reliable Data Exchange
 */

const APISecurityTesting = () => {
  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Define API endpoints, environments, and align them to establish clear testing boundaries.",
      icon: <FileText size={40} />
    },
    {
      title: "Information Gathering",
      description: "Collect documentation, tokens, and request-response samples for detailed analysis.",
      icon: <Search size={40} />
    },
    {
      title: "Authentication & Authorization Testing",
      description: "Verify token management, role-based access, and privilege enforcement.",
      icon: <Lock size={40} />
    },
    {
      title: "Input Validation & Fuzzing",
      description: "Test input handling for SQL injection, injection points and improper application.",
      icon: <Shield size={40} />
    },
    {
      title: "Business Logic Testing",
      description: "Evaluate workflows, integrity, and secure request sequencing and transaction flow.",
      icon: <Code size={40} />
    },
    {
      title: "Error & Exception Handling Review",
      description: "Analyze responses for sensitive information disclosure or improper error messages.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Rate Limiting & Session Control",
      description: "Assess protection against brute-force, replay, and denial-of-service attempts.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Reporting & Recommendations",
      description: "Provide a detailed report outlining vulnerabilities, impact, and remediation guidance.",
      icon: <RefreshCw size={40} />
    },
    {
      title: "Re-Testing & Validation",
      description: "Confirm that all identified API vulnerabilities have been effectively mitigated.",
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
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">API Security Assessment</p>
            <h1 className="hero-title">
              API SECURITY TESTING{' '}
              <span className="text-gradient">
                ENSURING SECURE DATA EXCHANGE
              </span>
            </h1>
            <p className="hero-description">
              <strong>API Security Testing</strong> focuses on identifying vulnerabilities and misconfigurations in Application
              Programming Interfaces (APIs) that could lead to <strong>unauthorized access, data loss, or service disruptions</strong>.
              It ensures that APIs handling sensitive data remain secure, available, and resilient to modern attack
              vectors.
            </p>
            <p className="hero-description">
              Our comprehensive testing covers <strong>broken object-level authorization, broken authentication, excessive data
                exposure, lack of resources and rate limiting, broken function-level authorization, mass assignment, security
                misconfigurations, injection vulnerabilities, and improper asset management</strong>—protecting your API ecosystem
              across all protocols and deployment models.
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
                  At <strong>Cyberaries</strong>, we deliver comprehensive <strong>manual and automated API testing</strong> to evaluate
                  authentication, authorization, input validation, rate limiting, and error handling mechanisms. Our
                  specialists simulate real-world attacks to uncover weaknesses that automated tools often miss.
                </p>
                <p className="overview-text">
                  We help organizations safeguard their APIs from threats such as <strong>Broken Object-Level Authorization,
                    Broken Authentication, and Excessive Data Exposure</strong>, along with compliance across REST, SOAP, and
                  GraphQL interfaces. <strong>Cyberaries</strong> enables businesses to build <strong>secure integration ecosystems</strong>,
                  maintain compliance, and protect critical data streams in internal and third-party APIs.
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

      {/* Our Approach Section */}
      <section className="solutions-section our-approach">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-subtitle">
                Our audit methodology is built around accountability, precision, and achieving compliance excellence
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
                <h3 className="comparison-heading">Traditional API Testing</h3>
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
                  Cyberaries API Security Testing
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
                Ready to Secure Your APIs?
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

export default APISecurityTesting;
