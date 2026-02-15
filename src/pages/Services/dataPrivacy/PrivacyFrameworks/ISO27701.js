import React from 'react';
import ApproachCard from '../../../../components/common/ApproachCard';
import ScrollReveal from '../../../../components/common/ScrollReveal';
import { 
  FileSearch,
  Users,
  Shield,
  UserCheck,
  BookOpen,
  AlertTriangle,
  FileText,
  CheckSquare,
  Award,
  Headphones
} from 'lucide-react';
import './ISO27701.css';

/**
 * ISO 27701 Compliance Page
 * Privacy Information Management System Compliance
 */

const ISO27701 = () => {
  // Approach Methodology Data
  const approachSteps = [
    {
      number: "1",
      title: "Privacy Gap Assessment",
      description: "Evaluating the organization's current privacy posture and identifying gaps from ISO 27701 and applicable data protection requirements.",
      icon: <FileSearch size={40} />
    },
    {
      number: "2",
      title: "Roles and Organization",
      description: "Creating a defined inventory of personal data and sensitive data processing activities, and roles/parties to ensure lawful processing.",
      icon: <Users size={40} />
    },
    {
      number: "3",
      title: "Data Protection and Privacy Impact Assessment (DPIA)",
      description: "Conducting privacy risk evaluations and DPIAs to assess potential data protection when processing high-risk data.",
      icon: <Shield size={40} />
    },
    {
      number: "4",
      title: "Third-Party Risk Assessment",
      description: "Reviewing vendor contracts, cloud service providers, and data sharing arrangements to validate privacy compliance obligations.",
      icon: <UserCheck size={40} />
    },
    {
      number: "5",
      title: "Privacy Training and Awareness",
      description: "Designing and delivering targeted awareness programs for managers, employees on data protection principles and responsibilities.",
      icon: <BookOpen size={40} />
    },
    {
      number: "6",
      title: "Incident Response and Breach Management",
      description: "Enhancing breach response readiness and notification procedures, including internal reporting, investigation, and mitigation.",
      icon: <AlertTriangle size={40} />
    },
    {
      number: "7",
      title: "Documentation and Record-Keeping",
      description: "Developing privacy policies, consent management procedures, and data subject requests and maintaining legal records.",
      icon: <FileText size={40} />
    },
    {
      number: "8",
      title: "Internal Audit and Corrective Actions",
      description: "Performing internal audits to verify privacy controls and assisting with corrective action plans.",
      icon: <CheckSquare size={40} />
    },
    {
      number: "9",
      title: "Audit and Certification Support",
      description: "Preparing organizations for external pre-certification audits and ensuring readiness for surveillance and recertification monitoring.",
      icon: <Award size={40} />
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

  return (
    <div className="iso-27701-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge__icon">🎓</span>
              <span className="hero-badge__text">ISO Compliance</span>
            </div>
            <h1 className="hero-title">
              ISO 27701 - <span className="text-gradient">PRIVACY INFORMATION MANAGEMENT SYSTEM COMPLIANCE</span>
            </h1>
            <p className="hero-description">
              The <strong>ISO 27701:2019 standard</strong> extends ISO 27001 to include privacy-specific requirements, enabling 
              organizations to implement, maintain, and continuously improve a <strong>Privacy Information Management 
              System (PIMS)</strong>. It provides a comprehensive framework for demonstrating compliance with global privacy 
              standards with global privacy laws, such as the <strong>GDPR, India's DPDPA</strong>, and other relevant data 
              protection regulations.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Start Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image__card">
              <div className="privacy-visual">
                <div className="certification-badge">
                  <div className="badge-circle">
                    <Shield size={60} strokeWidth={2} />
                  </div>
                  <div className="badge-steps">
                    <div className="step-item step-1">
                      <span className="step-number">1</span>
                      <span className="step-label">Personal Data Inventory</span>
                    </div>
                    <div className="step-item step-2">
                      <span className="step-number">2</span>
                      <span className="step-label">Data Mapping</span>
                    </div>
                    <div className="step-item step-3">
                      <span className="step-number">3</span>
                      <span className="step-label">Risk Assessment</span>
                    </div>
                    <div className="step-item step-4">
                      <span className="step-number">4</span>
                      <span className="step-label">Privacy Controls</span>
                    </div>
                    <div className="step-item step-5">
                      <span className="step-number">5</span>
                      <span className="step-label">Incident Response</span>
                    </div>
                    <div className="step-item step-6">
                      <span className="step-number">6</span>
                      <span className="step-label">Record Management</span>
                    </div>
                  </div>
                </div>
              </div>
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
                <h2 className="section-title">
                  ISO 27701 - PRIVACY INFORMATION MANAGEMENT SYSTEM COMPLIANCE
                </h2>
                <p className="overview-text">
                  At <strong>Cyberaries</strong>, we help organizations integrate privacy governance into their existing ISO 
                  27001 frameworks, ensuring responsible data handling, regulatory compliance, and enhanced stakeholder trust. Our <strong>ISO 
                  27701 consulting and audit services</strong> focus on building a structured privacy framework that safeguards 
                  personal information throughout its lifecycle. Our team of <strong>certified ISO 27701 and ISO 27001 lead 
                  auditors</strong> uses a risk-driven methodology tailored to your business requirements, from privacy gap 
                  assessments, data mapping, and readiness for certification audits.
                </p>
                <p className="overview-text">
                  Our approach ensures seamless integration with <strong>information security and privacy management</strong>, 
                  empowering organizations to build trust, reduce compliance risks, and achieve sustainable privacy 
                  assurance.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <div className="privacy-badge">
                  <div className="privacy-badge__content">
                    <div className="certification-logo">
                      <div className="logo-circle">
                        <Shield size={80} strokeWidth={2} />
                      </div>
                      <h3 className="cert-title">ISO 27701</h3>
                      <p className="cert-subtitle">CERTIFICATION</p>
                      <p className="cert-description">Privacy Information Management System</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="integration-title">
              Our approach integrates privacy and information security, helping organizations build a resilient PIMS that is aligned with global privacy laws
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
            </div>
          </ScrollReveal>
          
          <div className="approach-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={index * 100}
              >
                <ApproachCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-clean">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="section-title-clean">Why Choose Cyberaries?</h2>
          </ScrollReveal>
          
          <div className="why-choose-clean-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={index * 150}
              >
                <div className="why-choose-clean-card">
                  <div className="why-choose-clean-divider"></div>
                  <div className="why-choose-clean-icon">
                    {item.icon}
                  </div>
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
          <ScrollReveal direction="up" delay={0}>
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

export default ISO27701;