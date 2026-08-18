import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/privacy-frameworks-hero.webp';
import overviewImage from '../../../../images/services/vapt/mobileSecurity-overview.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileSearch,
  Shield,
  Database,
  Lock,
  FileText,
  AlertTriangle,
  CheckCircle,
  Award,
  Users,
  Headphones,
  UserCheck,
  Settings,
  ShieldCheck, Landmark } from 'lucide-react';
import './ISO27701.css';

/**
 * ISO 27701 Compliance Page
 * Privacy Information Management System (PIMS)
 */
const ISO27701 = () => {
  const navigate = useNavigate();

  const approachSteps = [
    {
      title: "Gap Assessment and PIMS Readiness",
      description: "Evaluating existing ISMS and privacy frameworks to identify gaps against ISO 27701 requirements and applicable data protection regulations.",
      icon: <FileSearch size={40} />
    },
    {
      title: "Privacy Policy and Governance Setup",
      description: "Establishing a Privacy Information Management System (PIMS), defining privacy roles, responsibilities, and accountability structures across the organization.",
      icon: <Shield size={40} />
    },
    {
      title: "Personal Data Inventory and Mapping",
      description: "Documenting personal data flows, identifying categories of data subjects, and mapping data lifecycle across all processing activities.",
      icon: <Database size={40} />
    },
    {
      title: "Privacy Risk Assessment and DPIA",
      description: "Conducting privacy risk assessments and Data Protection Impact Assessments (DPIA) to identify and mitigate privacy risks across operations.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Data Subject Rights Management",
      description: "Implementing processes for managing data subject rights including access, rectification, erasure, and portability requests.",
      icon: <UserCheck size={40} />
    },
    {
      title: "Consent and Lawful Basis Framework",
      description: "Establishing mechanisms for obtaining, recording, and managing consent and ensuring lawful basis for all data processing activities.",
      icon: <FileText size={40} />
    },
    {
      title: "Access Controls and Data Security",
      description: "Implementing access management, encryption, and technical controls to protect personal data from unauthorized access or disclosure.",
      icon: <Lock size={40} />
    },
    {
      title: "Third-Party and Processor Management",
      description: "Assessing data processors and third party vendors to ensure contractual and operational compliance with privacy obligations.",
      icon: <Settings size={40} />
    },
    {
      title: "Certification and Continuous Improvement",
      description: "Preparing for third-party ISO 27701 certification audits and enabling continual improvement of the PIMS.",
      icon: <CheckCircle size={40} />
    }
  ];

  const whyChooseItems = [
    {
      title: "Partnered with CERT In Empanelled",
      description: "Recognized by the Government of India for security audits, compliance, and risk management services.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Proven Expertise",
      description: "150+ clients across banking, IT, insurance, healthcare, and manufacturing sectors successfully certified.",
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      title: "End to End Support",
      description: "From scoping to remediation and final certification, we provide full support throughout your compliance journey.",
      icon: <Headphones size={48} strokeWidth={1.5} />
    }
  ];

  const difference = {
    traditional: [
      'Generic privacy consulting without structured PIMS implementation or governance.',
      'Limited alignment with ISO 27701 as an extension of ISO 27001 and ISO 27002.',
      'Overlooks data subject rights management and consent framework requirements.',
      'Superficial review of data processor agreements and third-party obligations.',
      'No formal DPIA or privacy risk assessment integrated into the compliance process.',
      'Generic reports without actionable, regulation-specific privacy remediation steps.'
    ],
    cyberaries: [
      'Full ISO 27701 PIMS implementation built on your existing ISMS foundation.',
      'Comprehensive personal data mapping, classification, and lifecycle documentation.',
      'Structured DPIA and privacy risk assessments aligned with GDPR and DPDPA.',
      'Robust data subject rights framework with tested workflows and escalation paths.',
      'Detailed vendor and processor assessments with contractual compliance reviews.',
      'End to end support from initial gap analysis through certification and beyond.'
    ]
  };

  return (
    <div className="iso-27701-page">
      {/* Hero */}
      <section className="iso71-hero-section">
        <div
          className="iso71-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="iso71-hero-overlay" />
        <div className="iso71-hero-grid-pattern" />
        {/* Floating particles */}
        <div className="iso71-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="iso71-hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="iso71-container">
          <div className="iso71-hero-content">
            <div className="iso-27701-hero-badge">
                  <Landmark size={14} className="iso-27701-badge-icon" />
                  <span className="iso-27701-badge-text">
                    DATA PRIVACY <span className="iso-27701-badge-divider">/</span> PRIVACY FRAMEWORKS
                  </span>
                </div>
            <h1 className="iso71-hero-title">
              <span className="iso71-text-gradient">
                BUILD A TRUSTED <br />
                PRIVACY SYSTEM
              </span>
            </h1>
            <p className="iso71-hero-description">
              <strong>ISO 27701:2019</strong> is an international privacy extension to ISO 27001 that specifies requirements
              for establishing, implementing, maintaining, and continually improving a <strong>Privacy Information Management
              System (PIMS)</strong>. It provides a structured framework for managing personal data in compliance with global
              regulations such as GDPR and DPDPA.
            </p>
            <p className="iso71-hero-description">
              Our compliance services cover <strong>privacy governance, personal data mapping, DPIA, data subject rights
              management, consent frameworks, and third party assessments</strong>—helping organizations demonstrate
              accountability and build lasting trust with customers and regulators alike.
            </p>
            <div className="iso71-hero-actions">
              <button
                className="iso71-btn iso71-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Start Now &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="iso71-service-overview">
        <div className="iso71-container">
          <div className="iso71-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="iso71-overview-content">
                <p className="iso71-overview-text">
                  At <strong>Cyberaries</strong>, we help organizations implement a <strong>Privacy Information Management
                  System (PIMS)</strong> aligned with ISO 27701, strengthening your privacy governance and ensuring compliance
                  with applicable data protection legislation. Our approach integrates seamlessly with your existing
                  ISO 27001 ISMS to extend privacy controls across your entire organization.
                </p>
                <p className="iso71-overview-text">
                  Our team of <strong>certified ISO 27701 privacy and information security specialists</strong> guides
                  clients through gap analysis, data mapping, risk assessments, and control implementation—delivering
                  a privacy framework that is <strong>audit ready, regulation aligned, and operationally resilient</strong>.
                  ISO 27701 certification signals your commitment to responsible data stewardship and regulatory trust.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="iso71-overview-visual">
                <img
                  src={overviewImage}
                  alt="ISO 27701 Privacy Information Management"
                  className="iso71-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="iso71-approach-section">
        <div className="iso71-grid-pattern" />
        <div className="iso71-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="iso71-section-header iso71-text-center">
              <p className="iso71-approach-eyebrow">Our Approach</p>
              <h2 className="iso71-approach-title">A Security First Privacy Delivery Methodology</h2>
              <p className="iso71-approach-subtitle">
                Our ISO 27701 methodology is built around privacy governance, accountability, and regulatory confidence.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="iso71-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="iso71-method-card" key={index}>
                  <div className="iso71-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="iso71-method-connector" />}
                  <div className="iso71-method-icon">{step.icon}</div>
                  <h3 className="iso71-method-title">{step.title}</h3>
                  <p className="iso71-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–9 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="iso71-method-row">
              {approachSteps.slice(5, 9).map((step, index) => (
                <div className="iso71-method-card" key={index + 5}>
                  <div className="iso71-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 3 && <span className="iso71-method-connector" />}
                  <div className="iso71-method-icon">{step.icon}</div>
                  <h3 className="iso71-method-title">{step.title}</h3>
                  <p className="iso71-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="iso71-method-footer">
              <div className="iso71-method-footer-icon">
                <ShieldCheck size={22} />
              </div>
              <p className="iso71-method-footer-text">
                Every PIMS control we implement and audit is fully integrated with your existing ISMS to build a unified privacy program.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose */}
      <section className="iso71-why-choose">
        <div className="iso71-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="iso71-section-header iso71-text-center">
              <p className="iso71-why-eyebrow">Why CyberAries</p>
              <h2 className="iso71-section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>
          <div className="iso71-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="iso71-why-choose-card">
                  <div className="iso71-why-choose-card-header">
                    <div className="iso71-why-choose-icon-box">{item.icon}</div>
                    <h3 className="iso71-why-choose-title">{item.title}</h3>
                  </div>
                  <p className="iso71-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="iso71-cyberaries-difference">
        <div className="iso71-container">
          <ScrollReveal animation="fade-up">
            <h2 className="iso71-difference-title">
              THE <span className="iso71-highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>
          <div className="iso71-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="iso71-comparison-column iso71-traditional">
                <h3 className="iso71-comparison-heading">Traditional Privacy Consulting</h3>
                <ul className="iso71-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="iso71-comparison-item" key={idx}>
                      <span className="iso71-bullet iso71-bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="iso71-comparison-column iso71-cyberaries-col">
                <h3 className="iso71-comparison-heading iso71-cyberaries-heading">
                  Cyberaries ISO 27701 Compliance
                </h3>
                <ul className="iso71-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="iso71-comparison-item" key={idx}>
                      <span className="iso71-bullet iso71-bullet-check">
                        <CheckCircle size={18} className="iso71-check-icon" />
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

      {/* CTA */}
      <section
        className="iso71-cta-section"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        <div className="iso71-cta-grid-pattern" />
        <div className="iso71-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="iso71-cta-content">
              <h2 className="iso71-cta-title">
                <span className="iso71-cta-text-gradient">Ready to Protect PII in Your Cloud Environment?</span>
              </h2>
              <p className="iso71-cta-description">
                Enhance protection, reduce risk, and support your growth objectives with our expert guidance.
              </p>
              <button
                className="iso71-btn iso71-btn-primary iso71-btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Contact With Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ISO27701;