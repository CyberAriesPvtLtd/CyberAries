import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/mobile-image.jpg';

import {
  FileSearch,
  Shield,
  Database,
  Lock,
  FileText,
  Cloud,
  AlertTriangle,
  CheckCircle,
  Award,
  Users,
  Headphones
} from 'lucide-react';
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
      title: "Vendor and Third-Party Assessment",
      description: "Evaluating CSPs and third-party partners to ensure adherence to ISO 27018 contractual, operational and legal obligations.",
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
      title: "Partnered with CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits, compliance, and risk management services.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Proven Expertise",
      description: "150+ clients across banking, IT, insurance, healthcare, and manufacturing sectors successfully certified.",
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification, we provide full support throughout your compliance journey.",
      icon: <Headphones size={48} strokeWidth={1.5} />
    }
  ];

  const difference = {
    traditional: [
      'Generic cloud audits without specific PII protection controls or focus areas.',
      'Limited alignment with ISO 27018 privacy-specific requirements and principles.',
      'Overlooks cross-border data transfer risks and cloud vendor accountability.',
      'Superficial review of data subject rights, consent, and retention policies.',
      'No formal DPIA or privacy risk assessment integrated into the audit process.',
      'Lack of contractual review between cloud customers and service providers.'
    ],
    cyberaries: [
      'Comprehensive ISO 27018-aligned PII assessments across all cloud environments.',
      'Full mapping of data flows, PII classification, and sensitivity levels in the cloud.',
      'In-depth DPIA and privacy risk assessments tailored to your cloud operations.',
      'Thorough vendor and CSP contract reviews for regulatory and legal compliance.',
      'Detailed, actionable remediation plans with cloud-specific privacy controls.',
      'End-to-end support from gap analysis through certification and continuous monitoring.'
    ]
  };

  return (
    <div className="iso-27018-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">ISO 27018:2019 Compliance</p>
            <h1 className="hero-title">
              SECURE PII ON PUBLIC CLOUDS{' '}
              <span className="text-gradient">
                WITH EXPERTS IN ISO 27018 COMPLIANCE
              </span>
            </h1>
            <p className="hero-description">
              The <strong>ISO 27018:2019 standard</strong> provides guidelines for protecting personally identifiable
              information (PII) in public cloud environments. It extends ISO 27001 and ISO 27002 by focusing on
              privacy-specific controls, ensuring cloud service providers and customers meet their contractual
              responsibilities in handling sensitive personal data in compliance with global data protection laws.
            </p>
            <p className="hero-description">
              Our compliance framework covers <strong>data inventory and classification, privacy risk assessments,
              access and encryption controls, vendor assessments, and continuous monitoring</strong>—ensuring your
              cloud operations align with regulations including GDPR and DPDPA.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Start Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="overview-content">
                <p className="overview-text">
                  At <strong>Cyberaries</strong>, we assist organizations in implementing privacy and security measures
                  that meet <strong>ISO 27018 requirements</strong>, safeguarding sensitive customer information stored,
                  processed, or transferred through cloud services. Our approach strengthens privacy governance,
                  contractual transparency, and accountability across cloud operations.
                </p>
                <p className="overview-text">
                  Our team of <strong>certified ISO 27018 and cloud security auditors</strong> helps clients identify
                  privacy risk exposures through cloud vendor contracts, and implement necessary technical and
                  organizational controls. Adopting ISO 27018 demonstrates your organization's commitment to
                  <strong> data privacy, regulatory compliance, and cloud trustworthiness</strong>—enhancing customer
                  confidence and business reputation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="ISO 27018 PII Cloud Compliance"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="solutions-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-subtitle">
                Our ISO 27018 methodology is built around privacy governance, cloud accountability, and continual improvement
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

      {/* Why Choose */}
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
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional ISO 27018 Audits</h3>
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
                  Cyberaries ISO 27018 Compliance
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
                Ready to Protect PII in Your Cloud Environment?
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

export default ISO27018;