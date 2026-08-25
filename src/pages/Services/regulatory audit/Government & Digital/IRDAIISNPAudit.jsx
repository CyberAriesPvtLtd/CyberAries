import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/government-digital.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import {
  Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
  Settings, BarChart3, Users, Award, RefreshCw, FileCheck,
  Eye, Database, Globe, UserCheck, Bell, ArrowRight, Landmark,
} from 'lucide-react';
import './IRDAIISNPAudit.css';

const IRDAIISNPAudit = () => {
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
    { title: 'ISNP Technology and Security Standards', description: 'ISNPs must comply with IRDAI\'s strict technology and cybersecurity standards governing platform architecture, data protection, and operational resilience.', icon: <Settings size={28} /> },
    { title: 'Third Party Aggregator Control', description: 'ISNPs rely on multiple insurance aggregators, brokers, and technology service providers whose security posture directly affects the ISNP\'s regulatory compliance standing.', icon: <Users size={28} /> },
    { title: 'Customer Data Protection', description: 'Policyholders\' sensitive financial and health data flowing through ISNP platforms requires robust encryption, access control, and data minimization controls under IRDAI guidelines.', icon: <Lock size={28} /> },
    { title: 'Incident Reporting and Response', description: 'IRDAI mandates timely cyber incident reporting with defined response timelines. Organizations without mature incident response capabilities face regulatory non compliance risk.', icon: <AlertTriangle size={28} /> },
    { title: 'Continuity and Recovery Obligations', description: 'ISNPs must maintain defined RTO/RPO targets to ensure policyholders can access insurance services without disruption, requiring robust DR and BCP frameworks.', icon: <RefreshCw size={28} /> },
    { title: 'Periodic Audit and Reporting', description: 'Maintaining the continuous evidence and audit trails required for IRDAI periodic security audits and on-site inspections is operationally demanding without structured processes.', icon: <BarChart3 size={28} /> },
  ];

  const frameworkComponents = [
    { title: 'ISNP Security Architecture Review', description: 'Comprehensive assessment of ISNP platform architecture against IRDAI technical security standards, including API security, encryption, and network design.', icon: <Shield size={28} /> },
    { title: 'Data Protection and Classification', description: 'Classification of all policyholder and operational data by sensitivity, with controls assessment against IRDAI data protection and privacy requirements.', icon: <Database size={28} /> },
    { title: 'Access Control and Identity Management', description: 'Evaluation and implementation of IAM, MFA, privileged access management, and role-based access controls across ISNP platform components.', icon: <UserCheck size={28} /> },
    { title: 'Third Party and Aggregator Risk', description: 'Systematic risk assessment of all insurance aggregators, brokers, and technology vendors connected to the ISNP, with security attestation requirements.', icon: <Globe size={28} /> },
    { title: 'Incident Response Framework', description: 'Design and testing of incident response procedures, cyber incident reporting workflows, and crisis communication protocols aligned with IRDAI timelines.', icon: <Bell size={28} /> },
    { title: 'Business Continuity and DR', description: 'Assessment and implementation of BCP/DR frameworks meeting IRDAI-mandated RTO/RPO requirements with documented testing and annual review cycles.', icon: <RefreshCw size={28} /> },
  ];

  const approachSteps = [
    { title: 'Regulatory Requirement Mapping', description: 'Detailed mapping of all IRDAI ISNP cybersecurity circulars, guidelines, and inspection checklists to your platform\'s architecture and operations.', icon: <FileText size={28} /> },
    { title: 'ISNP Platform Architecture Assessment', description: 'In depth technical review of the ISNP platform covering API layers, web applications, databases, and integration points against IRDAI security standards.', icon: <Search size={28} /> },
    { title: 'Data Flow and Classification Mapping', description: 'Discovery and mapping of all policyholder data flows within and external to the ISNP, identifying data protection gaps and compliance risks.', icon: <Database size={28} /> },
    { title: 'Access Control and IAM Review', description: 'Assessment of identity and access management controls, privileged access policies, and authentication mechanisms across all ISNP components.', icon: <UserCheck size={28} /> },
    { title: 'Third Party Risk Assessment', description: 'Security evaluation of all aggregators, brokers, and technology vendors with security questionnaires, contract reviews, and attestation management.', icon: <Globe size={28} /> },
    { title: 'Vulnerability Assessment and VAPT', description: 'Comprehensive VAPT of ISNP web applications, APIs, mobile apps, and infrastructure components to identify and remediate exploitable vulnerabilities.', icon: <Eye size={28} /> },
    { title: 'Incident Response Plan Development', description: 'Design, document, and test an IRDAI compliant incident response plan including defined roles, escalation paths, and regulatory notification timelines.', icon: <Bell size={28} /> },
    { title: 'BCP and DR Framework Implementation', description: 'Develop and test BCP/DR procedures with defined RTO/RPO targets, failover testing, and annual review cycles meeting IRDAI continuity requirements.', icon: <RefreshCw size={28} /> },
    { title: 'Policy and Governance Documentation', description: 'Develop IRDAI aligned cybersecurity policies, vendor security standards, and governance frameworks with board level oversight structures.', icon: <FileCheck size={28} /> },
    { title: 'Compliance Evidence and Inspection Readiness', description: 'Compile structured evidence repository, compliance dashboards, and inspection ready documentation for IRDAI security audits and on site inspections.', icon: <BarChart3 size={28} /> },
  ];

  const whyChooseItems = [
    { title: 'IRDAI Regulatory Expertise', description: 'Deep knowledge of IRDAI ISNP cybersecurity circulars, inspection frameworks, and compliance expectations across insurance platform categories.', icon: <Award size={28} /> },
    { title: 'CERT In Empanelled', description: 'Government recognized cybersecurity firm with proven audit credentials across Indian financial sector, insurance, and government organizations.', icon: <Shield size={28} /> },
    { title: 'End-to-End Implementation', description: 'From platform architecture assessment through policy development, VAPT, incident response planning, and inspection ready evidence compilation.', icon: <CheckCircle size={28} /> },
  ];

  const complianceChecklist = [
    'IRDAI Information and Cyber Security Guidelines compliance assessment',
    'ISNP platform architecture review against IRDAI technical standards',
    'Policyholder data protection and encryption controls evaluation',
    'Identity and access management and MFA implementation review',
    'API security and integration point vulnerability assessment',
    'Third party aggregator and broker security assessment',
    'Vendor security attestation and contract review',
    'Incident response plan development and tabletop testing',
    'Cyber incident reporting procedure and IRDAI notification workflow',
    'Business continuity and disaster recovery framework with RTO/RPO validation',
    'VAPT of web application, mobile app, and infrastructure components',
    'Compliance evidence repository and annual audit readiness',
  ];

  const difference = {
    traditional: [
      'Generic IT audit frameworks not calibrated to IRDAI ISNP-specific requirements.',
      'Compliance reviews limited to documentation without technical platform assessment.',
      'Third party risk ignored or treated as entirely a contractual and legal matter.',
      'Incident response plans developed on paper but never tested or validated.',
      'BCP/DR frameworks documented but never tested against IRDAI RTO/RPO requirements.',
      'No structured evidence repository, leaving organizations unprepared for inspections.',
    ],
    cyberaries: [
      'IRDAI ISNP specific assessment framework calibrated to the exact inspection checklist.',
      'Combined documentation and deep technical platform and API security assessment.',
      'Third party risk assessed both contractually and through technical security questionnaires.',
      'Incident response plans tested through tabletop exercises and simulation scenarios.',
      'BCP/DR frameworks tested with documented results and remediation evidence.',
      'Structured compliance evidence repository delivered as part of every engagement.',
    ],
  };

  const deliverables = [
    {
      icon: <Search size={28} />,
      title: 'Assessment Reports',
      items: [
        'ISNP Platform Architecture Security Assessment',
        'VAPT Report (Web, API, Mobile, Infrastructure)',
        'Data Protection and Classification Assessment',
        'Third Party Risk Assessment Report',
      ],
    },
    {
      icon: <Settings size={28} />,
      title: 'Technical Remediation',
      items: [
        'IAM and MFA Implementation Support',
        'API Security Controls Implementation',
        'Encryption and Data Protection Controls',
        'Network Security Architecture Recommendations',
      ],
    },
    {
      icon: <FileText size={28} />,
      title: 'Governance and Policy',
      items: [
        'IRDAI Aligned Cybersecurity Policy Suite',
        'Incident Response Plan and Playbooks',
        'BCP/DR Framework Documentation',
        'Vendor Security Standards and Attestation Templates',
      ],
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Compliance Documentation',
      items: [
        'Gap Analysis Against IRDAI ISNP Requirements',
        'Compliance Status Dashboard',
        'Inspection Ready Evidence Repository',
        'Annual Compliance Review Plan',
      ],
    },
  ];

  return (
    <div className="ini-page">

      {/* HERO */}
      <section className="ini-hero-section" ref={heroRef}>
        <motion.div
          className="ini-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})`, y: isDesktop ? parallaxY : 0 }}
        />
        <div className="ini-hero-overlay" />
        <div className="ini-hero-glow" />
        <div className="ini-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="ini-hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="ini-container">
          <div className="ini-hero-inner">
            <div className="ini-hero-content">
              <ScrollReveal animation="fade-down" delay={0}>
                <div className="ini-hero-badge">
                  <Landmark size={14} className="ini-badge-icon" />
                  <span className="ini-badge-text">
                    GOVERNMENT & DIGITAL <span className="ini-badge-divider">/</span> COMPLIANCE
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="ini-hero-title">
                  <span className="ini-text-gradient">IRDAI ISNP Security Audit</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="ini-hero-description">
                  The <strong>Insurance Regulatory and Development Authority of India (IRDAI)</strong> mandates
                  rigorous cybersecurity standards for <strong>Insurance Self Network Platforms (ISNPs)</strong> covering
                  platform architecture, data protection, incident response, and business continuity. Our audit
                  delivers complete coverage from regulatory mapping through VAPT, third party risk assessment,
                  and full inspection ready evidence compilation.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="ini-hero-actions">
                  <Link to="/contact" className="ini-btn ini-btn-primary ini-btn-large">
                    Schedule an IRDAI Compliance Assessment
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="ini-section ini-section--offwhite">
        <div className="ini-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="ini-section-header">
              <p className="ini-eyebrow">Key Challenges</p>
              <h2 className="ini-section-title">IRDAI ISNP Compliance Challenges</h2>
              <p className="ini-section-description">
                Insurance self network platforms face complex, multi dimensional cybersecurity compliance
                requirements under IRDAI's evolving regulatory framework.
              </p>
            </div>
          </ScrollReveal>
          <div className="ini-num-grid ini-num-grid--2col">
            {challengesData.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 90} triggerOnce={false}>
                <div className="ini-num-card">
                  <span className="ini-num-badge">{padNum(i + 1)}</span>
                  <div className="ini-num-icon">{item.icon}</div>
                  <div className="ini-num-body">
                    <h3 className="ini-num-title">{item.title}</h3>
                    <p className="ini-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="ini-section ini-section--white">
        <div className="ini-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="ini-section-header">
              <p className="ini-eyebrow">Our Framework</p>
              <h2 className="ini-section-title">Our IRDAI ISNP Audit Framework</h2>
              <p className="ini-section-description">
                A comprehensive security assessment framework covering all technical, operational,
                and governance dimensions of IRDAI ISNP compliance.
              </p>
            </div>
          </ScrollReveal>
          <div className="ini-components-strip">
            {frameworkComponents.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80} triggerOnce={false}>
                <div className="ini-comp-item">
                  {i < frameworkComponents.length - 1 && <span className="ini-comp-line" aria-hidden="true" />}
                  <div className="ini-comp-circle">{item.icon}</div>
                  <p className="ini-comp-title">{item.title}</p>
                  <p className="ini-comp-desc">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="ini-section ini-section--offwhite">
        <div className="ini-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="ini-section-header">
              <p className="ini-eyebrow">Methodology</p>
              <h2 className="ini-section-title">Our Audit Methodology</h2>
              <p className="ini-section-description">
                A structured 10-step methodology covering every dimension of IRDAI ISNP cybersecurity compliance.
              </p>
            </div>
          </ScrollReveal>
          <div className="ini-num-grid ini-num-grid--3col">
            {approachSteps.map((step, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 70} triggerOnce={false}>
                <div className="ini-num-card">
                  <span className="ini-num-badge">{padNum(i + 1)}</span>
                  <div className="ini-num-icon">{step.icon}</div>
                  <div className="ini-num-body">
                    <h3 className="ini-num-title">{step.title}</h3>
                    <p className="ini-num-desc">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="ini-section ini-section--white">
        <div className="ini-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="ini-section-header">
              <p className="ini-eyebrow">Regulatory Coverage</p>
              <h2 className="ini-section-title">IRDAI Compliance Coverage Checklist</h2>
              <p className="ini-section-description">
                Comprehensive coverage of IRDAI ISNP cybersecurity requirements across all audit domains.
              </p>
            </div>
          </ScrollReveal>
          <div className="ini-checklist-grid">
            {complianceChecklist.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 50} triggerOnce={false}>
                <div className="ini-checklist-item">
                  <div className="ini-check-icon"><CheckCircle size={22} /></div>
                  <span className="ini-check-text">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — offwhite light theme */}
      <section className="ini-section ini-section--offwhite">
        <div className="ini-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="ini-section-header">
              <p className="ini-eyebrow">Why CyberAries</p>
              <h2 className="ini-section-title">Why Choose CyberAries?</h2>
            </div>
          </ScrollReveal>
          <div className="ini-why-grid">
            {whyChooseItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150} triggerOnce={false}>
                <div className="ini-why-card">
                  <div className="ini-why-icon">{item.icon}</div>
                  <h3 className="ini-why-title">{item.title}</h3>
                  <p className="ini-why-desc">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="ini-section ini-section--white">
        <div className="ini-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <h2 className="ini-difference-title">
              THE <span className="ini-diff-highlight">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>
          <div className="ini-diff-grid">
            <ScrollReveal direction="left" delay={100} triggerOnce={false}>
              <div className="ini-diff-card ini-diff-card--traditional">
                <h3 className="ini-diff-heading">Traditional Compliance Consulting</h3>
                <ul className="ini-diff-list">
                  {difference.traditional.map((item, i) => (
                    <li key={i} className="ini-diff-item">
                      <span className="ini-diff-bullet">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200} triggerOnce={false}>
              <div className="ini-diff-card ini-diff-card--featured">
                <h3 className="ini-diff-heading ini-diff-heading--ca">
                  CyberAries IRDAI ISNP Security Audit
                </h3>
                <ul className="ini-diff-list">
                  {difference.cyberaries.map((item, i) => (
                    <li key={i} className="ini-diff-item">
                      <CheckCircle size={18} className="ini-check-bullet" style={{ flexShrink: 0, marginTop: 3 }} />
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
      <section className="ini-section ini-section--offwhite">
        <div className="ini-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="ini-section-header">
              <p className="ini-eyebrow">Deliverables</p>
              <h2 className="ini-section-title">Comprehensive Deliverables</h2>
              <p className="ini-section-description">
                End to end documentation, controls, and reporting to ensure IRDAI ISNP compliance
                and strengthen your insurance platform security posture.
              </p>
            </div>
          </ScrollReveal>
          <div className="ini-pillar-grid">
            {deliverables.map((d, i) => (
              <ScrollReveal key={i} direction="up" delay={(i + 1) * 100} triggerOnce={false}>
                <div className="ini-pillar-card">
                  <span className="ini-pillar-bg-num" aria-hidden="true">{padNum(i + 1)}</span>
                  <div className="ini-pillar-top">
                    <div className="ini-pillar-icon-wrap">{d.icon}</div>
                    <div>
                      <span className="ini-pillar-num">{padNum(i + 1)}</span>
                      <h4 className="ini-pillar-title">{d.title}</h4>
                    </div>
                  </div>
                  <div className="ini-pillar-divider" />
                  <ul className="ini-pillar-list">
                    {d.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ini-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="ini-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="ini-cta-content">
              <h2 className="ini-cta-title">
                <span className="ini-text-gradient">Ensure IRDAI ISNP Security Compliance</span>
              </h2>
              <p className="ini-cta-description">
                Partner with our insurance cybersecurity experts to achieve and maintain full IRDAI
                ISNP compliance with confidence and inspection ready evidence.
              </p>
              <div className="ini-cta-buttons">
                <Link to="/contact" className="ini-btn ini-btn-primary ini-btn-large ini-cta-btn">
                  <span>Request an IRDAI Assessment</span>
                  <ArrowRight size={18} className="ini-btn-icon" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default IRDAIISNPAudit;
