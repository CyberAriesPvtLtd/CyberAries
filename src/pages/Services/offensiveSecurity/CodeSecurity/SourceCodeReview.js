import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/code-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/code-image.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileSearch,
  Database,
  Settings,
  Code,
  Shield,
  AlertTriangle,
  FileText,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones,
  ArrowRight, Landmark } from 'lucide-react';
import './SourceCodeReview.css';

/**
 * Source Code Review Service Page
 * Securing Applications at the Code Level
 */

const SourceCodeReview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Approach Methodology Data
  const approachSteps = [
    {
      title: 'Scope Definition',
      description: 'Determine the application modules, technologies, and programming languages in scope.',
      icon: <FileSearch size={30} />
    },
    {
      title: 'Codebase Collection',
      description: 'Obtain the latest source code version and necessary build dependencies for review.',
      icon: <Database size={30} />
    },
    {
      title: 'Static Analysis Setup',
      description: 'Use automated tools to perform an initial scan for security flaws and coding issues.',
      icon: <Settings size={30} />
    },
    {
      title: 'Manual Code Review',
      description: 'Conduct in depth line by line analysis to identify complex logical and architectural vulnerabilities.',
      icon: <Code size={30} />
    },
    {
      title: 'Security Control Validation',
      description: 'Verify implementation of authentication, authorization, and input validation mechanisms.',
      icon: <Shield size={30} />
    },
    {
      title: 'Cryptography & Data Handling Review',
      description: 'Assess the proper use of encryption, hashing, and sensitive data storage methods.',
      icon: <AlertTriangle size={30} />
    },
    {
      title: 'Error & Exception Management',
      description: 'Evaluate logging, error handling, and debugging functions for potential data leakage.',
      icon: <FileText size={30} />
    },
    {
      title: 'Reporting & Remediation',
      description: 'Deliver a detailed report highlighting vulnerabilities, their impact, and mitigation methods.',
      icon: <RefreshCw size={30} />
    },
    {
      title: 'Re Testing & CI Integration',
      description: 'Validate fixes and integrate secure coding checks into CI/CD pipelines for ongoing assurance.',
      icon: <CheckCircle size={30} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: 'CERT In Empanelled Experts',
      description: 'Audit services delivered in partnership with government-recognized security empanelled firms.',
      icon: <Award size={30} strokeWidth={1.75} />
    },
    {
      title: 'Proven Enterprise Expertise',
      description: 'Over 350+ clients successfully audited across banking, fintech, healthcare, and IT sectors.',
      icon: <Users size={30} strokeWidth={1.75} />
    },
    {
      title: 'Comprehensive Guidance',
      description: 'End to end support that guides your developers from vulnerability discovery to code patch validation.',
      icon: <Headphones size={30} strokeWidth={1.75} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Focuses mainly on surface level testing and functional defects.',
      'Relies heavily on automated tools without deep contextual analysis.',
      'Findings are often delivered as static reports with limited guidance.',
      'Security is treated as a one time activity after development.',
      'Limited collaboration with developers on secure coding practices.',
      'Minimal emphasis on integrating checks into CI/CD pipelines.'
    ],
    cyberaries: [
      'Performs deep manual review of business logic and architecture.',
      'Combines advanced tooling with expert security engineering insight.',
      'Delivers actionable remediation guidance with prioritized fixes.',
      'Embeds security early into the SDLC and development workflows.',
      'Works closely with developers to uplift secure coding maturity.',
      'Integrates repeatable checks into CI/CD for continuous assurance.'
    ]
  };

  return (
    <div className="scr-page">
      {/* Hero Section */}
      <section className="scr-hero-section">
        <div
          className="scr-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="scr-hero-overlay" />
        <div className="scr-hero-grid-pattern" />
        {/* Floating particles */}
        <div className="scr-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="scr-hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="scr-container">
          <div className="scr-hero-content">
            <div className="scr-hero-badge">
                  <Landmark size={14} className="scr-badge-icon" />
                  <span className="scr-badge-text">
                    OFFENSIVE SECURITY <span className="scr-badge-divider">/</span> CODE SECURITY
                  </span>
                </div>
            <h1 className="scr-hero-title">
              <span className="scr-text-gradient">
                SECURE APPLICATION CODE <br />
                &amp; SOURCE CODE REVIEW
              </span>
            </h1>
            <p className="scr-hero-description">
              <strong>Source Code Review</strong> is a systematic, security first examination of your codebase.
              We identify logic flaws, security vulnerabilities, and compliance gaps at the code level before they reach production.
            </p>
            <p className="scr-hero-description">
              Our analysis covers <strong>authentication, access control, input validation, encryption standards,
              and error handling</strong>, delivering developer friendly guidance to resolve security issues permanently.
            </p>
            <div className="scr-hero-actions">
              <button
                className="scr-btn scr-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Request a Code Audit
                <ArrowRight size={16} className="scr-btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="scr-service-overview">
        <div className="scr-container">
          <div className="scr-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="scr-overview-content">
                <p className="scr-overview-text">
                  At <strong>CyberAries</strong>, we conduct thorough <strong>source code security assessments</strong>{' '}
                  to identify vulnerabilities, insecure API usages, logical flaws, and cryptographic weaknesses. Our approach
                  combines industry-leading static analysis tools (SAST) with extensive manual expert code review.
                </p>
                <p className="scr-overview-text">
                  We work closely with your development team to embed <strong>secure coding standards</strong> into your
                  software development lifecycle (SDLC), ensuring your products are secure by design while maintaining velocity, performance, and scalability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="scr-overview-visual">
                <img
                  src={overviewImage}
                  alt="Source Code Review"
                  className="scr-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Modern Horizontal Timeline */}
      <section className="scr-approach-section">
        <div className="scr-grid-pattern" />
        <div className="scr-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="scr-section-header scr-text-center">
              <p className="scr-eyebrow">Our Approach</p>
              <h2 className="scr-approach-title">A Secure by Design Review Methodology</h2>
              <p className="scr-approach-subtitle">
                A structured, security first process to analyze code logic, validate access controls,
                and eliminate vulnerabilities before deployment.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="scr-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="scr-method-card" key={index}>
                  <div className="scr-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="scr-method-connector" />}
                  <div className="scr-method-icon">{step.icon}</div>
                  <h3 className="scr-method-title">{step.title}</h3>
                  <p className="scr-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–9 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="scr-method-row">
              {approachSteps.slice(5, 9).map((step, index) => (
                <div className="scr-method-card" key={index + 5}>
                  <div className="scr-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 3 && <span className="scr-method-connector" />}
                  <div className="scr-method-icon">{step.icon}</div>
                  <h3 className="scr-method-title">{step.title}</h3>
                  <p className="scr-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="scr-method-footer">
              <div className="scr-method-footer-icon">
                <Shield size={22} />
              </div>
              <p className="scr-method-footer-text">
                Our code audit methodology aligns with industry secure coding benchmarks including OWASP Top 10, CERT Secure Coding Standards, SANS/CWE Top 25, and regulatory compliance standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="scr-why-choose">
        <div className="scr-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="scr-section-header scr-text-center">
              <p className="scr-why-eyebrow">Why CyberAries</p>
              <h2 className="scr-section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="scr-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="scr-why-choose-card">
                  <div className="scr-why-choose-card-header">
                    <div className="scr-why-choose-icon-box">{item.icon}</div>
                    <h3 className="scr-why-choose-title">{item.title}</h3>
                  </div>
                  <p className="scr-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="scr-cyberaries-difference">
        <div className="scr-container">
          <ScrollReveal animation="fade-up">
            <h2 className="scr-difference-title">
              THE <span className="scr-highlight-red">CYBERARIES</span>{' '}
              DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="scr-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="scr-comparison-column scr-traditional">
                <h3 className="scr-comparison-heading">Traditional Code Reviews</h3>
                <ul className="scr-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="scr-comparison-item" key={idx}>
                      <span className="scr-bullet scr-bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="scr-comparison-column scr-cyberaries-col">
                <h3 className="scr-comparison-heading scr-cyberaries-heading">
                  Cyberaries Source Code Review
                </h3>
                <ul className="scr-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="scr-comparison-item" key={idx}>
                      <span className="scr-bullet scr-bullet-check">
                        <CheckCircle size={18} className="scr-check-icon" />
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
      <section className="scr-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="scr-cta-grid-pattern" />
        <div className="scr-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="scr-cta-grid">
              <div className="scr-cta-content">
                <h2 className="scr-cta-title">
                  <span className="scr-cta-text-gradient">Ready to Strengthen Your Source Code Security?</span>
                </h2>
                <p className="scr-cta-description">
                  Identify logic flaws, fix insecure patterns, and secure your software products.
                </p>
                <button
                  className="scr-btn scr-btn-primary scr-btn-large"
                  type="button"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us Today
                  <ArrowRight size={18} className="scr-btn-arrow" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SourceCodeReview;