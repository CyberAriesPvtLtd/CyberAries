import React from 'react';
import ApproachCard from '../../../../components/ApproachCard';
import ScrollReveal from '../../../../components/ScrollReveal';
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
  // Approach Methodology Data
  const approachSteps = [
    {
      number: "1",
      title: "Gap Assessment and Privacy Readiness",
      description: "Evaluating cloud infrastructures and identifying gaps against ISO 27018 requirements and applicable privacy frameworks.",
      icon: <FileSearch size={48} />
    },
    {
      number: "2",
      title: "Data Inventory and Classification",
      description: "Documenting personal data flows across cloud systems, identifying PII types, and classifying them based on sensitivity and processing requirements.",
      icon: <Database size={48} />
    },
    {
      number: "3",
      title: "Governance and Accountability Framework",
      description: "Establishing privacy roles, responsibilities, data processing mechanisms for managing data lifecycle within cloud environments.",
      icon: <Shield size={48} />
    },
    {
      number: "4",
      title: "Privacy Risk Assessment and Impact",
      description: "Conducting privacy risk assessments and DPIA to assess potential risks or misuse in cloud environments.",
      icon: <AlertTriangle size={48} />
    },
    {
      number: "5",
      title: "Access and Encryption Controls",
      description: "Implementing access management, encryption, and key management practices to ensure secure PII processing and cloud provider controls.",
      icon: <Lock size={48} />
    },
    {
      number: "6",
      title: "Vendor and Third-Party Assessment",
      description: "Evaluating CSPs and third-party partners to ensure adherence to ISO 27018 contractual, operational and legal obligations.",
      icon: <Cloud size={48} />
    },
    {
      number: "7",
      title: "Documentation and Policy Framework",
      description: "Developing privacy policies, data management procedures, and data processing records aligned with ISO 27018 controls.",
      icon: <FileText size={48} />
    },
    {
      number: "8",
      title: "Internal Audit and Continuous Monitoring",
      description: "Implementing continuous monitoring and auditing performance, and maintaining evidence for ongoing compliance assurance.",
      icon: <FileText size={48} />
    },
    {
      number: "9",
      title: "Certification and Continuous Improvement",
      description: "Preparing for third-party certification audits and enabling continual improvement of privacy controls and governance.",
      icon: <CheckCircle size={48} />
    }
  ];

  // Why Choose Data
  const whyChooseData = [
    {
      icon: <Award size={48} />,
      title: "CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits, compliance, and risk management services."
    },
    {
      icon: <Users size={48} />,
      title: "Proven Expertise",
      description: "150+ clients across banking, IT, insurance, healthcare, and manufacturing sectors successfully certified."
    },
    {
      icon: <Headphones size={48} />,
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification, we provide full support throughout your compliance journey."
    }
  ];

  return (
    <div className="iso-27018-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <ScrollReveal animation="fade-up">
              <div className="hero-badge">
                <span className="hero-badge__icon">🎓</span>
                <span className="hero-badge__text">ISO 27018:2019 COMPLIANCE</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <h1 className="hero-title">
                <span className="text-gradient">SECURE PII ON PUBLIC CLOUDS WITH EXPERTS IN ISO 27018 COMPLIANCE</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <p className="hero-description">
                The <strong>ISO 27018:2019 standard</strong> provides guidelines for protecting personally identifiable information (PII) in public cloud environments. It extends ISO 27001 and ISO 27002 by focusing on privacy-specific controls, ensuring cloud service providers and customers meet their contractual responsibilities in handling sensitive personal data in compliance with global data protection laws.
              </p>
            </ScrollReveal>
          </div>

          {/* Hero Visual Card */}
          <ScrollReveal animation="fade-left" delay={0.4}>
            <div className="hero-image">
              <div className="hero-image__card">
                <div className="pii-visual">
                  <div className="pii-badge">
                    <div className="pii-circle-diagram">
                      <div className="center-circle">
                        <div className="circle-number">01</div>
                        <div className="circle-label">DATA<br/>PROTECTION</div>
                      </div>
                      <div className="orbit-item orbit-1">
                        <div className="orbit-number">02</div>
                        <div className="orbit-label">ENCRYPTION</div>
                      </div>
                      <div className="orbit-item orbit-2">
                        <div className="orbit-number">03</div>
                        <div className="orbit-label">ISO 27018<br/>PII & CLOUD<br/>PRIVACY</div>
                      </div>
                      <div className="orbit-item orbit-3">
                        <div className="orbit-number">04</div>
                        <div className="orbit-label">DATA<br/>GOVERNANCE</div>
                      </div>
                      <div className="orbit-item orbit-4">
                        <div className="orbit-number">06</div>
                        <div className="orbit-label">VENDOR<br/>MGMT</div>
                      </div>
                      <div className="orbit-item orbit-5">
                        <div className="orbit-number">05</div>
                        <div className="orbit-label">COMPLIANCE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-grid">
            <ScrollReveal animation="fade-right">
              <div className="overview-content">
                <h2 className="section-title">
                  Cloud Privacy Protection
                </h2>
                <p className="overview-text">
                  At <strong>Cyberaries</strong>, we assist organizations in implementing privacy and security measures that meet ISO 27018 requirements, safeguarding sensitive customer information stored, processed, or transferred through cloud services.
                </p>
                <p className="overview-text">
                  Our approach strengthens privacy governance, contractual transparency, and accountability across cloud operations. Our team of <strong>certified ISO 27018 and cloud security auditors</strong> helps clients identify privacy risk exposures through cloud vendor contracts, and implement necessary technical and organizational controls.
                </p>
                <p className="overview-text">
                  Adopting ISO 27018 demonstrates your organization's commitment to <strong>data privacy, regulatory compliance, and cloud trustworthiness</strong>, enhancing customer confidence and business reputation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={0.2}>
              <div className="pii-badge-overview">
                <div className="pii-badge-overview__content">
                  <div className="certification-logo">
                    <div className="logo-circle-pii">
                      <Lock size={60} />
                      <Cloud size={40} className="cloud-overlay-icon" />
                    </div>
                    <h3 className="cert-title-pii">ISO 27018</h3>
                    <p className="cert-subtitle">PII Protection</p>
                    <p className="cert-description">Public Cloud Privacy</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Integration Statement */}
      <section className="integration-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="integration-title">
              We focus on safeguarding personally identifiable information (PII) in compliance with global regulations, such as the GDPR and DPDPA, as well as contractual cloud requirements
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="our-approach">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <h2 className="section-title">Our Approach</h2>
            </div>
          </ScrollReveal>

          <div className="approach-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 0.1}>
                <ApproachCard {...step} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-clean">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="section-title-clean">Why Choose Cyberaries?</h2>
          </ScrollReveal>

          <div className="why-choose-clean-grid">
            {whyChooseData.map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 0.15}>
                <div className="why-choose-clean-card">
                  <div className="why-choose-clean-divider"></div>
                  <div className="why-choose-clean-icon">{item.icon}</div>
                  <h3 className="why-choose-clean-title">{item.title}</h3>
                  <p className="why-choose-clean-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-clean">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="cta-clean-content">
              <h2 className="cta-clean-title">Let's Strengthen Your Cyber Defenses</h2>
              <p className="cta-clean-subtitle">
                Enhance protection, reduce risk, and support your growth objectives
              </p>
              <button className="btn-cta-clean">Start Now</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ISO27018;
