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
  Cloud,
  AlertTriangle,
  CheckCircle,
  Award,
  Users,
  Headphones,
  ShieldCheck, Landmark } from 'lucide-react';
import './ISO27018.css';

/**
 * ISO 27018 Compliance Page
 * Personally Identifiable Information (PII) Protection in Public Clouds
 */
const ISO27018 = () => {
  const navigate = useNavigate();

  const approachSteps = [
    {
      title: "Gap Assessment and Privacy Readiness",
      description: "Evaluating cloud infrastructures and identifying gaps against ISO 27018 requirements and applicable privacy frameworks.",
      icon: <FileSearch size={40} />
    },
    {
      title: "Data Inventory and Classification",
      description: "Documenting personal data flows across cloud systems, identifying PII types, and classifying them based on sensitivity and processing requirements.",
      icon: <Database size={40} />
    },
    {
      title: "Governance and Accountability Framework",
      description: "Establishing privacy roles, responsibilities, and data processing mechanisms for managing data lifecycle within cloud environments.",
      icon: <Shield size={40} />
    },
    {
      title: "Privacy Risk Assessment and Impact",
      description: "Conducting privacy risk assessments and DPIA to assess potential risks or misuse in cloud environments.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Access and Encryption Controls",
      description: "Implementing access management, encryption, and key management practices to ensure secure PII processing and cloud provider controls.",
      icon: <Lock size={40} />
    },
    {
      title: "Vendor and Third Party Assessment",
      description: "Evaluating CSPs and third party partners to ensure adherence to ISO 27018 contractual, operational and legal obligations.",
      icon: <Cloud size={40} />
    },
    {
      title: "Documentation and Policy Framework",
      description: "Developing privacy policies, data management procedures, and data processing records aligned with ISO 27018 controls.",
      icon: <FileText size={40} />
    },
    {
      title: "Internal Audit and Continuous Monitoring",
      description: "Implementing continuous monitoring and auditing performance, and maintaining evidence for ongoing compliance assurance.",
      icon: <FileSearch size={40} />
    },
    {
      title: "Certification and Continuous Improvement",
      description: "Preparing for third-party certification audits and enabling continual improvement of privacy controls and governance.",
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
      'Generic cloud audits without specific PII protection controls or focus areas.',
      'Limited alignment with ISO 27018 privacy-specific requirements and principles.',
      'Overlooks cross border data transfer risks and cloud vendor accountability.',
      'Superficial review of data subject rights, consent, and retention policies.',
      'No formal DPIA or privacy risk assessment integrated into the audit process.',
      'Lack of contractual review between cloud customers and service providers.'
    ],
    cyberaries: [
      'Comprehensive ISO 27018-aligned PII assessments across all cloud environments.',
      'Full mapping of data flows, PII classification, and sensitivity levels in the cloud.',
      'In depth DPIA and privacy risk assessments tailored to your cloud operations.',
      'Thorough vendor and CSP contract reviews for regulatory and legal compliance.',
      'Detailed, actionable remediation plans with cloud-specific privacy controls.',
      'End to end support from gap analysis through certification and continuous monitoring.'
    ]
  };

  return (
    <div className="iso-27018-page">
      {/* Hero */}
      <section className="iso18-hero-section">
        <div
          className="iso18-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="iso18-hero-overlay" />
        <div className="iso18-hero-grid-pattern" />
        {/* Floating particles */}
        <div className="iso18-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="iso18-hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="iso18-container">
          <div className="iso18-hero-content">
            <div className="iso-27018-hero-badge">
                  <Landmark size={14} className="iso-27018-badge-icon" />
                  <span className="iso-27018-badge-text">
                    DATA PRIVACY <span className="iso-27018-badge-divider">/</span> PRIVACY FRAMEWORKS
                  </span>
                </div>
            <h1 className="iso18-hero-title">
              <span className="iso18-text-gradient">
                SECURE PII ON <br />
                PUBLIC CLOUDS
              </span>
            </h1>
            <p className="iso18-hero-description">
              The <strong>ISO 27018:2019 standard</strong> provides guidelines for protecting personally identifiable
              information (PII) in public cloud environments. It extends ISO 27001 and ISO 27002 by focusing on
              privacy specific controls, ensuring cloud service providers and customers meet their contractual
              responsibilities in handling sensitive personal data in compliance with global data protection laws.
            </p>
            <p className="iso18-hero-description">
              Our compliance framework covers <strong>data inventory and classification, privacy risk assessments,
              access and encryption controls, vendor assessments, and continuous monitoring</strong>—ensuring your
              cloud operations align with regulations including GDPR and DPDPA.
            </p>
            <div className="iso18-hero-actions">
              <button
                className="iso18-btn iso18-btn-primary"
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
      <section className="iso18-service-overview">
        <div className="iso18-container">
          <div className="iso18-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="iso18-overview-content">
                <p className="iso18-overview-text">
                  At <strong>Cyberaries</strong>, we assist organizations in implementing privacy and security measures
                  that meet <strong>ISO 27018 requirements</strong>, safeguarding sensitive customer information stored,
                  processed, or transferred through cloud services. Our approach strengthens privacy governance,
                  contractual transparency, and accountability across cloud operations.
                </p>
                <p className="iso18-overview-text">
                  Our team of <strong>certified ISO 27018 and cloud security auditors</strong> helps clients identify
                  privacy risk exposures through cloud vendor contracts, and implement necessary technical and
                  organizational controls. Adopting ISO 27018 demonstrates your organization's commitment to
                  <strong> data privacy, regulatory compliance, and cloud trustworthiness</strong>—enhancing customer
                  confidence and business reputation.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="iso18-overview-visual">
                <img
                  src={overviewImage}
                  alt="ISO 27018 PII Cloud Compliance"
                  className="iso18-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="iso18-approach-section">
        <div className="iso18-grid-pattern" />
        <div className="iso18-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="iso18-section-header iso18-text-center">
              <p className="iso18-approach-eyebrow">Our Approach</p>
              <h2 className="iso18-approach-title">A Structured Privacy Governance Methodology</h2>
              <p className="iso18-approach-subtitle">
                Our ISO 27018 methodology is built around privacy governance, cloud accountability, and continual improvement.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="iso18-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="iso18-method-card" key={index}>
                  <div className="iso18-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="iso18-method-connector" />}
                  <div className="iso18-method-icon">{step.icon}</div>
                  <h3 className="iso18-method-title">{step.title}</h3>
                  <p className="iso18-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–9 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="iso18-method-row">
              {approachSteps.slice(5, 9).map((step, index) => (
                <div className="iso18-method-card" key={index + 5}>
                  <div className="iso18-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 3 && <span className="iso18-method-connector" />}
                  <div className="iso18-method-icon">{step.icon}</div>
                  <h3 className="iso18-method-title">{step.title}</h3>
                  <p className="iso18-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="iso18-method-footer">
              <div className="iso18-method-footer-icon">
                <ShieldCheck size={22} />
              </div>
              <p className="iso18-method-footer-text">
                Every public cloud control we implement and audit is fully aligned with ISO 27018 privacy standards to safeguard customer PII.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose */}
      <section className="iso18-why-choose">
        <div className="iso18-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="iso18-section-header iso18-text-center">
              <p className="iso18-why-eyebrow">Why CyberAries</p>
              <h2 className="iso18-section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>
          <div className="iso18-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="iso18-why-choose-card">
                  <div className="iso18-why-choose-card-header">
                    <div className="iso18-why-choose-icon-box">{item.icon}</div>
                    <h3 className="iso18-why-choose-title">{item.title}</h3>
                  </div>
                  <p className="iso18-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="iso18-cyberaries-difference">
        <div className="iso18-container">
          <ScrollReveal animation="fade-up">
            <h2 className="iso18-difference-title">
              THE <span className="iso18-highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>
          <div className="iso18-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="iso18-comparison-column iso18-traditional">
                <h3 className="iso18-comparison-heading">Traditional ISO 27018 Audits</h3>
                <ul className="iso18-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="iso18-comparison-item" key={idx}>
                      <span className="iso18-bullet iso18-bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="iso18-comparison-column iso18-cyberaries-col">
                <h3 className="iso18-comparison-heading iso18-cyberaries-heading">
                  Cyberaries ISO 27018 Compliance
                </h3>
                <ul className="iso18-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="iso18-comparison-item" key={idx}>
                      <span className="iso18-bullet iso18-bullet-check">
                        <CheckCircle size={18} className="iso18-check-icon" />
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
        className="iso18-cta-section"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        <div className="iso18-cta-grid-pattern" />
        <div className="iso18-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="iso18-cta-content">
              <h2 className="iso18-cta-title">
                <span className="iso18-cta-text-gradient">Ready to Protect PII in Your Cloud Environment?</span>
              </h2>
              <p className="iso18-cta-description">
                Enhance protection, reduce risk, and support your growth objectives with our expert guidance.
              </p>
              <button
                className="iso18-btn iso18-btn-primary iso18-btn-large"
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

export default ISO27018;