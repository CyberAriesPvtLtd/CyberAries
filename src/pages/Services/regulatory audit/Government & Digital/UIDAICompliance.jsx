import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/government-digital.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import {
  Shield, FileText, Search, Lock, CheckCircle,
  Settings, BarChart3, Award, RefreshCw, FileCheck,
  Eye, Database, Globe, UserCheck, Fingerprint, Key, ArrowRight, Landmark,
} from 'lucide-react';
import './UIDAICompliance.css';

const UIDAICompliance = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const heroRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const padNum = (n) => String(n).padStart(2, '0');

  const challengesData = [
    { title: 'AUA/KUA Certification Requirements', description: 'Authentication User Agencies (AUAs) and KYC User Agencies (KUAs) must meet UIDAI\'s strict technical and organizational security requirements for Aadhaar authentication platform integration.', icon: <Fingerprint size={28} /> },
    { title: 'Aadhaar Data Security and Protection', description: 'All Aadhaar and biometric data handled by AUAs/KUAs must be protected under UIDAI\'s data security standards, with strict controls on storage, access, and transmission.', icon: <Lock size={28} /> },
    { title: 'API Integration Security', description: 'Secure integration with UIDAI\'s authentication APIs requires rigorous security controls, certificate management, and conformance with UIDAI\'s technical specifications.', icon: <Key size={28} /> },
    { title: 'Audit Log and Traceability Obligations', description: 'UIDAI mandates comprehensive audit logging of all authentication transactions and access to Aadhaar data with immutable records for regulatory inspections.', icon: <Eye size={28} /> },
    { title: 'Data Residency and Localization', description: 'All Aadhaar-related data must be stored within India\'s geographic boundaries under UIDAI regulations and the Aadhaar Act, with no cross-border data transfer permitted.', icon: <Globe size={28} /> },
    { title: 'Periodic Compliance and Recertification', description: 'AUAs/KUAs must undergo periodic security audits and recertification cycles, requiring ongoing compliance management rather than one-time assessment.', icon: <RefreshCw size={28} /> },
  ];

  const frameworkComponents = [
    { title: 'AUA/KUA Architecture Assessment', description: 'Comprehensive technical review of AUA/KUA platform architecture against UIDAI\'s security requirements, authentication API integration, and Aadhaar data handling.', icon: <Settings size={28} /> },
    { title: 'Aadhaar Data Protection Controls', description: 'Assessment and implementation of encryption, access control, data minimization, and retention controls protecting all Aadhaar and biometric data handled by the AUA/KUA.', icon: <Lock size={28} /> },
    { title: 'Authentication API Security Review', description: 'Security review of UIDAI authentication API integration, certificate management, request signing, and response handling for conformance and security gap coverage.', icon: <Key size={28} /> },
    { title: 'Audit Logging and Traceability', description: 'Design and implementation of immutable audit logging for all Aadhaar authentication transactions and sensitive data access events meeting UIDAI traceability requirements.', icon: <Database size={28} /> },
    { title: 'Access Control and Privileged Access', description: 'Implementation of role-based access controls, privileged access management, and MFA for all personnel and systems handling Aadhaar authentication data.', icon: <UserCheck size={28} /> },
    { title: 'Certification and Recertification Support', description: 'End-to-end support for UIDAI AUA/KUA certification and periodic recertification cycles, including evidence compilation and compliance reporting.', icon: <FileCheck size={28} /> },
  ];

  const approachSteps = [
    { title: 'Regulatory and Certification Requirement Analysis', description: 'Deep review of UIDAI\'s AUA/KUA certification requirements, technical specifications, and security standards applicable to your organization\'s authentication use case.', icon: <FileText size={28} /> },
    { title: 'Platform Architecture Review', description: 'Assessment of existing or planned AUA/KUA platform architecture covering authentication servers, API gateway, and databases against UIDAI technical security standards.', icon: <Search size={28} /> },
    { title: 'Aadhaar Data Flow Mapping', description: 'Complete mapping of how Aadhaar and biometric data flows through the organization\'s systems from collection through authentication, storage, and disposal.', icon: <Database size={28} /> },
    { title: 'Gap Analysis and Risk Assessment', description: 'Structured gap analysis comparing current AUA/KUA security posture against all applicable UIDAI requirements, with risk-scored findings and prioritized remediation roadmap.', icon: <BarChart3 size={28} /> },
    { title: 'Aadhaar Data Security Controls Implementation', description: 'Deploy encryption at rest and in transit, key management, data masking, and access control mechanisms for all Aadhaar-related data handled by the AUA/KUA platform.', icon: <Lock size={28} /> },
    { title: 'API Security and Certificate Management', description: 'Secure UIDAI API integration with proper certificate management, request signing and encryption, and response validation aligned with UIDAI technical specifications.', icon: <Key size={28} /> },
    { title: 'Audit Logging Framework Implementation', description: 'Deploy immutable audit logging for all authentication transactions covering log completeness, integrity, retention, and rapid retrieval for regulatory inspections.', icon: <Eye size={28} /> },
    { title: 'Access Control and IAM Hardening', description: 'Implement and harden RBAC, privileged access management, and MFA policies for all personnel and systems with access to Aadhaar authentication data and systems.', icon: <Shield size={28} /> },
    { title: 'Policy and Procedure Development', description: 'Develop UIDAI-compliant security policies, Aadhaar data handling procedures, incident response workflows, and employee authorization documentation.', icon: <FileCheck size={28} /> },
    { title: 'Certification Evidence and Audit Readiness', description: 'Compile structured certification evidence repository including security assessment reports, control test results, audit logs, and policy documentation for UIDAI submission.', icon: <Award size={28} /> },
  ];

  const whyChooseItems = [
    { title: 'UIDAI Compliance Expertise', description: 'Hands-on experience with UIDAI AUA/KUA certification requirements, technical specifications, and security standards across BFSI, government, and enterprise AUAs.', icon: <Award size={28} /> },
    { title: 'CERT-In Empanelled', description: 'Government-recognized cybersecurity firm with proven regulatory audit credentials, a mandatory requirement for UIDAI AUA/KUA security audits.', icon: <Shield size={28} /> },
    { title: 'Technical and Regulatory Alignment', description: 'We align technical implementation covering API security, encryption, and audit logging precisely with UIDAI\'s regulatory evidence requirements for certification.', icon: <CheckCircle size={28} /> },
  ];

  const complianceChecklist = [
    'UIDAI AUA/KUA certification security requirements assessment',
    'Aadhaar authentication platform architecture security review',
    'UIDAI authentication API security and certificate management review',
    'Aadhaar and biometric data encryption at rest and in transit controls',
    'Data minimization and retention policy compliance review',
    'Role-based access control and privileged access management implementation',
    'Multi-factor authentication for personnel accessing Aadhaar systems',
    'Immutable audit logging for all authentication transactions',
    'Data residency compliance with confirmed India-only Aadhaar data storage',
    'Vulnerability assessment and penetration testing of AUA/KUA platform',
    'Incident response plan and breach reporting procedure development',
    'Certification evidence repository and UIDAI submission package preparation',
  ];

  const difference = {
    traditional: [
      'Generic IT security assessments not calibrated to UIDAI\'s AUA/KUA certification requirements.',
      'Compliance focused on documentation without technical platform and API security assessment.',
      'Audit logging implemented superficially without UIDAI traceability requirement compliance.',
      'Data residency compliance assumed rather than technically verified and documented.',
      'No structured evidence package for UIDAI certification submission.',
      'Certificate management handled informally with no documentation or renewal tracking.',
    ],
    cyberaries: [
      'UIDAI AUA/KUA certification-specific assessment framework calibrated to the exact requirements.',
      'Deep technical assessment of authentication platform, APIs, database, and infrastructure security.',
      'Audit logging implemented to meet UIDAI\'s full traceability, completeness, and retrieval requirements.',
      'Data residency compliance technically verified with documented controls and evidence.',
      'Structured certification evidence package ready for UIDAI submission.',
      'Certificate lifecycle management with documented procedures and renewal alerting.',
    ],
  };

  const deliverables = [
    {
      icon: <Search size={28} />,
      title: 'Assessment Reports',
      items: [
        'AUA/KUA Platform Security Assessment Report',
        'Authentication API Security Review Report',
        'Aadhaar Data Protection Gap Analysis',
        'VAPT Report of AUA/KUA Systems',
      ],
    },
    {
      icon: <Settings size={28} />,
      title: 'Technical Controls',
      items: [
        'Aadhaar Data Encryption Implementation',
        'API Security and Certificate Management',
        'Audit Logging Framework Deployment',
        'IAM and Access Control Hardening',
      ],
    },
    {
      icon: <FileText size={28} />,
      title: 'Governance and Policy',
      items: [
        'UIDAI-Aligned Security Policy Suite',
        'Aadhaar Data Handling Procedures',
        'Incident Response and Breach Reporting Plan',
        'Employee Authorization and Training Documentation',
      ],
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Compliance and Certification',
      items: [
        'Certification Evidence Repository (UIDAI Submission Ready)',
        'Gap Analysis Against UIDAI Requirements',
        'Compliance Status Dashboard',
        'Recertification Planning and Monitoring Framework',
      ],
    },
  ];

  return (
    <div className="uak-page">

      {/* HERO */}
      <section className="uak-hero-section" ref={heroRef}>
        <motion.div
          className="uak-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})`, y: isDesktop ? parallaxY : 0 }}
        />
        <div className="uak-hero-overlay" />
        <div className="uak-hero-glow" />
        <div className="uak-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="uak-hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="uak-container">
          <div className="uak-hero-inner">
            <div className="uak-hero-content">
              <ScrollReveal animation="fade-down" delay={0}>
                <div className="uak-hero-badge">
                  <Landmark size={14} className="uak-badge-icon" />
                  <span className="uak-badge-text">
                    GOVERNMENT &amp; DIGITAL <span className="uak-badge-divider">/</span> COMPLIANCE
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="uak-hero-title">
                  <span className="uak-text-gradient">UIDAI AUA/KUA Compliance</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="uak-hero-description">
                  Organizations using <strong>Aadhaar-based authentication</strong> as Authentication User Agencies
                  (AUA) or KYC User Agencies (KUA) must meet <strong>UIDAI's strict security certification
                  requirements</strong> covering platform architecture, Aadhaar data protection, API security, audit
                  logging, and data residency. Our service provides end-to-end coverage from certification
                  requirement analysis through technical implementation and ongoing recertification support.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="uak-hero-actions">
                  <Link to="/contact" className="uak-btn uak-btn-primary uak-btn-large">
                    Schedule an AUA/KUA Compliance Assessment
                  </Link>
                  <button className="uak-btn uak-btn-ghost uak-btn-large">Learn More</button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="uak-section uak-section--offwhite">
        <div className="uak-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="uak-section-header">
              <p className="uak-eyebrow">Key Challenges</p>
              <h2 className="uak-section-title">UIDAI AUA/KUA Compliance Challenges</h2>
              <p className="uak-section-description">
                AUAs and KUAs face significant technical and regulatory challenges achieving and
                maintaining UIDAI certification compliance.
              </p>
            </div>
          </ScrollReveal>
          <div className="uak-num-grid uak-num-grid--2col">
            {challengesData.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 90} triggerOnce={false}>
                <div className="uak-num-card">
                  <span className="uak-num-badge">{padNum(i + 1)}</span>
                  <div className="uak-num-icon">{item.icon}</div>
                  <div className="uak-num-body">
                    <h3 className="uak-num-title">{item.title}</h3>
                    <p className="uak-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="uak-section uak-section--white">
        <div className="uak-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="uak-section-header">
              <p className="uak-eyebrow">Our Framework</p>
              <h2 className="uak-section-title">Our UIDAI Compliance Framework</h2>
              <p className="uak-section-description">
                A structured compliance framework covering all technical, operational, and governance
                requirements for UIDAI AUA/KUA certification.
              </p>
            </div>
          </ScrollReveal>
          <div className="uak-components-strip">
            {frameworkComponents.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80} triggerOnce={false}>
                <div className="uak-comp-item">
                  {i < frameworkComponents.length - 1 && <span className="uak-comp-line" aria-hidden="true" />}
                  <div className="uak-comp-circle">{item.icon}</div>
                  <p className="uak-comp-title">{item.title}</p>
                  <p className="uak-comp-desc">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="uak-section uak-section--offwhite">
        <div className="uak-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="uak-section-header">
              <p className="uak-eyebrow">Methodology</p>
              <h2 className="uak-section-title">Our Compliance Methodology</h2>
              <p className="uak-section-description">
                A structured 10-step methodology from certification requirement analysis through
                full AUA/KUA compliance implementation and audit readiness.
              </p>
            </div>
          </ScrollReveal>
          <div className="uak-num-grid uak-num-grid--3col">
            {approachSteps.map((step, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 70} triggerOnce={false}>
                <div className="uak-num-card">
                  <span className="uak-num-badge">{padNum(i + 1)}</span>
                  <div className="uak-num-icon">{step.icon}</div>
                  <div className="uak-num-body">
                    <h3 className="uak-num-title">{step.title}</h3>
                    <p className="uak-num-desc">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="uak-section uak-section--white">
        <div className="uak-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="uak-section-header">
              <p className="uak-eyebrow">Regulatory Coverage</p>
              <h2 className="uak-section-title">UIDAI Compliance Coverage Checklist</h2>
              <p className="uak-section-description">
                Complete coverage of UIDAI AUA/KUA security requirements across all compliance domains.
              </p>
            </div>
          </ScrollReveal>
          <div className="uak-checklist-grid">
            {complianceChecklist.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 50} triggerOnce={false}>
                <div className="uak-checklist-item">
                  <div className="uak-check-icon"><CheckCircle size={22} /></div>
                  <span className="uak-check-text">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — offwhite light theme */}
      <section className="uak-section uak-section--offwhite">
        <div className="uak-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="uak-section-header">
              <p className="uak-eyebrow">Why CyberAries</p>
              <h2 className="uak-section-title">Why Choose CyberAries?</h2>
            </div>
          </ScrollReveal>
          <div className="uak-why-grid">
            {whyChooseItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150} triggerOnce={false}>
                <div className="uak-why-card">
                  <div className="uak-why-icon">{item.icon}</div>
                  <h3 className="uak-why-title">{item.title}</h3>
                  <p className="uak-why-desc">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="uak-section uak-section--white">
        <div className="uak-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <h2 className="uak-difference-title">
              THE <span className="uak-diff-highlight">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>
          <div className="uak-diff-grid">
            <ScrollReveal direction="left" delay={100} triggerOnce={false}>
              <div className="uak-diff-card uak-diff-card--traditional">
                <h3 className="uak-diff-heading">Traditional Compliance Approach</h3>
                <ul className="uak-diff-list">
                  {difference.traditional.map((item, i) => (
                    <li key={i} className="uak-diff-item">
                      <span className="uak-diff-bullet">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200} triggerOnce={false}>
              <div className="uak-diff-card uak-diff-card--featured">
                <h3 className="uak-diff-heading uak-diff-heading--ca">
                  CyberAries UIDAI AUA/KUA Compliance
                </h3>
                <ul className="uak-diff-list">
                  {difference.cyberaries.map((item, i) => (
                    <li key={i} className="uak-diff-item">
                      <CheckCircle size={18} className="uak-check-bullet" style={{ flexShrink: 0, marginTop: 3 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="uak-section uak-section--offwhite">
        <div className="uak-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="uak-section-header">
              <p className="uak-eyebrow">Deliverables</p>
              <h2 className="uak-section-title">Comprehensive Deliverables</h2>
              <p className="uak-section-description">
                End-to-end documentation, controls, and certification-ready evidence to achieve
                and maintain UIDAI AUA/KUA compliance.
              </p>
            </div>
          </ScrollReveal>
          <div className="uak-pillar-grid">
            {deliverables.map((d, i) => (
              <ScrollReveal key={i} direction="up" delay={(i + 1) * 100} triggerOnce={false}>
                <div className="uak-pillar-card">
                  <span className="uak-pillar-bg-num" aria-hidden="true">{padNum(i + 1)}</span>
                  <div className="uak-pillar-top">
                    <div className="uak-pillar-icon-wrap">{d.icon}</div>
                    <div>
                      <span className="uak-pillar-num">{padNum(i + 1)}</span>
                      <h4 className="uak-pillar-title">{d.title}</h4>
                    </div>
                  </div>
                  <div className="uak-pillar-divider" />
                  <ul className="uak-pillar-list">
                    {d.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="uak-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="uak-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="uak-cta-content">
              <h2 className="uak-cta-title">
                <span className="uak-text-gradient">Achieve UIDAI AUA/KUA Certification Compliance</span>
              </h2>
              <p className="uak-cta-description">
                Our experts will guide your organization through every step of UIDAI AUA/KUA compliance,
                from initial assessment through certification and ongoing recertification.
              </p>
              <div className="uak-cta-buttons">
                <Link to="/contact" className="uak-btn uak-btn-primary uak-btn-large uak-cta-btn">
                  <span>Request an AUA/KUA Assessment</span>
                  <ArrowRight size={18} className="uak-btn-icon" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default UIDAICompliance;
