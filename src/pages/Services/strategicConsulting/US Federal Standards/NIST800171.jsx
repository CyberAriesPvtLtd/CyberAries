import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/us-federal-standards-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle,
  Database,
  Eye,
  FileCheck,
  FileText,
  Globe,
  Landmark,
  Lock,
  Search,
  Settings,
  Shield,
  Target
} from 'lucide-react';
import './NIST800171.css';

const challenges = [
    { icon: <Target size={40} />, title: 'CUI Identification & Scoping', desc: 'Identifying all Controlled Unclassified Information (CUI) in your environment is the critical first step — and the most frequently underestimated. CUI may exist in systems, applications, email, file shares, and cloud storage across the enterprise.' },
    { icon: <Database size={40} />, title: '110 Controls Across 14 Families', desc: 'NIST 800-171 requires 110 security controls across 14 practice families — derived from NIST 800-53 moderate baseline. Implementing and evidencing all 110 controls across complex IT environments requires systematic project management.' },
    { icon: <Settings size={40} />, title: 'System Security Plan Requirement', desc: 'DoD contracts — through DFARS clause 252.204-7012 — require a System Security Plan documenting the implementation status of all 110 controls and a Plan of Action for any non-compliant controls.' },
    { icon: <Lock size={40} />, title: 'CMMC 2.0 Alignment', desc: 'The Cybersecurity Maturity Model Certification (CMMC) Level 2 requires full implementation of all 110 NIST 800-171 controls. Contractors handling CUI must achieve CMMC Level 2 certification through a third-party C3PAO assessment.' },
    { icon: <Globe size={40} />, title: 'Multi Enclave & Cloud Environments', desc: 'Most defence contractors process CUI across on-premises, cloud, and remote environments — requiring NIST 800-171 controls implemented consistently across a complex multi-enclave architecture.' },
    { icon: <AlertTriangle size={40} />, title: 'Incident Reporting Obligations', desc: 'DFARS 252.204-7012 requires reporting of cyber incidents to DoD within 72 hours with mandatory malware submission and preservation of images for potential DoD forensic investigation.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'CUI Scoping & System Boundary', desc: 'Identify all CUI across the enterprise — systems, applications, file storage, email, cloud — and define the CUI system boundary for 800-171 control applicability.' },
    { icon: <Settings size={40} />, title: '110 Control Gap Assessment', desc: 'Systematic gap assessment against all 110 NIST 800-171 controls across 14 practice families — documenting not-implemented, partially implemented, and fully implemented controls.' },
    { icon: <FileText size={40} />, title: 'System Security Plan Development', desc: 'Develop the NIST 800-171 SSP — documenting control implementations, system boundary, CUI categories, responsible roles, and interconnections as required by DFARS 252.204-7012.' },
    { icon: <Lock size={40} />, title: 'Control Implementation & Remediation', desc: 'Technical implementation and remediation of all 110 controls — with priority on access control, audit, identification & authentication, system & communications protection, and configuration management.' },
    { icon: <Eye size={40} />, title: 'CMMC 2.0 Level 2 Preparation', desc: 'Prepare for CMMC Level 2 C3PAO assessment — evidence compilation, practice implementation documentation, and pre-assessment readiness testing across all 110 practices.' },
    { icon: <Award size={40} />, title: 'Incident Response & DFARS Compliance', desc: 'DFARS-compliant incident response programme — 72-hour DoD incident reporting, malware submission procedures, forensic image preservation, and media protection for CUI systems.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'CUI Discovery & Scoping', desc: 'Identify all CUI across the organisation — performing data discovery in file systems, databases, email, and cloud storage to define the accurate CUI system boundary.' },
    { icon: <Target size={40} />, title: '800-171 Gap Assessment', desc: 'Systematic gap assessment against all 110 NIST 800-171 rev 2 controls — scoring each as Met, Partially Met, or Not Met, with evidence review and gap prioritisation.' },
    { icon: <FileText size={40} />, title: 'System Security Plan Development', desc: 'Develop the DFARS-required SSP — accurately describing CUI system boundary, all 110 control implementation statuses, and system architecture.' },
    { icon: <Globe size={40} />, title: 'Plan of Action & Milestones', desc: 'Develop a POA&M for all non-compliant controls — with remediation priorities, resource assignments, cost estimates, and milestone dates for achieving full compliance.' },
    { icon: <Settings size={40} />, title: 'Access Control & IAM Implementation', desc: 'Implement AC and IA practice family controls — role-based access, least privilege, multi-factor authentication, account management, and session control across all CUI systems.' },
    { icon: <Lock size={40} />, title: 'Audit & Configuration Controls', desc: 'Configure audit logging across all CUI systems, implement log aggregation, establish configuration baselines, and deploy vulnerability scanning and patch management processes.' },
    { icon: <Database size={40} />, title: 'Encryption & Communications Protection', desc: 'Implement encryption at rest and in transit for CUI — FIPS 140-2 validated encryption, TLS for data in transit, full-disk encryption for endpoints accessing CUI.' },
    { icon: <Eye size={40} />, title: 'Incident Response Programme', desc: 'Develop DFARS compliant incident response capabilities detection, 72-hour DoD reporting procedure, malware submission process, and forensic image preservation.' },
    { icon: <FileCheck size={40} />, title: 'CMMC Evidence Compilation', desc: 'Compile practice-by-practice implementation evidence for CMMC Level 2 assessment — artefact organisation, evidence quality review, and pre-assessment gap testing.' },
    { icon: <Award size={40} />, title: 'C3PAO Assessment Support', desc: 'Support the CMMC Level 2 C3PAO assessment — assessor coordination, evidence provision, findings response, and POA&M submission management for any assessment findings.' },
];

const checklist = [
    'CUI identification and system boundary scoping',
    'NIST 800-171 Rev 2 gap assessment against all 110 controls',
    'System Security Plan (SSP) development per DFARS 252.204-7012',
    'Plan of Action & Milestones (POA&M) with remediation tracking',
    'Access control (AC) — RBAC, least privilege, account management',
    'Identification & Authentication (IA) — MFA, password management',
    'Audit & Accountability (AU) log collection, review, and retention',
    'Configuration Management (CM) — baselines, change control, vulnerability scanning',
    'System & Communications Protection (SC) — encryption, network segmentation',
    'Media Protection (MP) CUI media sanitization and disposal',
    'DFARS 72-hour incident reporting and DoD malware submission procedures',
    'CMMC Level 2 evidence compilation and C3PAO assessment readiness',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Defence Contractor Compliance Specialists', desc: 'Our team has guided defence contractors through NIST 800-171 implementation and CMMC Level 2 readiness — with practical knowledge of DFARS requirements, DoD incident reporting, and C3PAO assessment processes.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'CMMC 2.0 Level 2 Ready', desc: 'We prepare organisations for CMMC Level 2 certification — building the SSP, evidence library, and practice implementations required to succeed in a C3PAO third-party assessment.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'CUI-Focused Technical Implementation', desc: 'We implement controls at the CUI data flow level — encryption, access controls, logging — not just policy documentation, ensuring your technical posture matches your SSP assertions.' },
];

const trad = [
    'SSP developed from generic templates without actual CUI scoping or system discovery.',
    'Controls documented as "Met" without technical validation of implementation.',
    'Multi factor authentication not fully deployed IA control family partially compliant.',
    'Audit logging configured inconsistently — not covering all CUI system access events.',
    'POA&M items tracked informally without DoD-required milestone dates and cost estimates.',
    'DFARS 72-hour incident reporting procedure not tested before incident occurs.',
];

const ca = [
    'CUI discovered and scoped through technical data discovery before SSP development.',
    'All "Met" control assertions backed by implementation evidence in the evidence library.',
    'MFA deployed across all CUI system access points — IA controls fully validated.',
    'Audit logging configured consistently across all CUI environments with SIEM integration.',
    'POA&M formally managed with prioritised milestones, cost estimates, and owner accountability.',
    'Incident response programme including 72-hour reporting tested via tabletop exercise.',
];

const deliverables = [
    { icon: <Search size={36} />, title: 'Assessment & Planning', items: ['CUI Scoping & Discovery Report', 'NIST 800-171 Gap Assessment', 'System Security Plan (SSP)', 'Plan of Action & Milestones (POA&M)'] },
    { icon: <Settings size={36} />, title: 'Control Implementation', items: ['Access & Identity Controls (AC, IA)', 'Audit & Configuration Management (AU, CM)', 'Encryption & Communications Protection (SC)', 'Media & Physical Protection (MP, PE)'] },
    { icon: <FileText size={36} />, title: 'Documentation', items: ['Control Implementation Evidence Library', 'DFARS Compliance Documentation', 'CUI Handling Policies & Procedures', 'Configuration Baselines & Standards'] },
    { icon: <Award size={36} />, title: 'CMMC & Audit Support', items: ['CMMC Level 2 Evidence Package', 'C3PAO Assessment Coordination', 'Assessment Finding Response', 'Incident Response & DFARS Reporting Procedure'] },
];

const NIST800171 = () => {
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    // Parallax effect
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

    return (
        <div className="nist171-page">
            {/* HERO SECTION */}
            <section className="nist171-hero" ref={heroRef}>
                <motion.div
                    className="nist171-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="nist171-hero-overlay" />
                <div className="nist171-hero-glow" />

                {/* Floating particles */}
                <div className="nist171-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="nist171-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="nist171-container">
                    <div className="nist171-hero-inner">
                        <div className="nist171-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="nist171-hero-badge">
                  <Landmark size={14} className="nist171-badge-icon" />
                  <span className="nist171-badge-text">
                    STRATEGIC CONSULTING <span className="nist171-badge-divider">/</span> US FEDERAL STANDARDS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="nist171-hero-title">
                                    <span className="nist171-grad">NIST SP 800-171 <br /> COMPLIANCE &amp; CMMC</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="nist171-hero-description">
                                    Secure your federal supply chain opportunities. We deliver end to end readiness, gap analysis, and control implementation support for NIST SP 800-171 and Cybersecurity Maturity Model Certification (CMMC). Our certified consultants help you safeguard Controlled Unclassified Information (CUI) in non federal systems.
                                </p>
                                <p className="nist171-hero-description">
                                    By generating your System Security Plan (SSP) and Plan of Action and Milestones (POA&M), we ensure you meet Department of Defense (DoD) procurement mandates.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="nist171-hero-actions">
                                    <button className="nist171-btn nist171-btn-primary" onClick={() => navigate('/contact')}>
                                        Start Your Readiness Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="nist171-sec nist171-bg-offwhite">
                <div className="nist171-container">
                    <ScrollReveal direction="up">
                        <div className="nist171-hdr">
                            <p className="nist171-eyebrow-red">Challenges</p>
                            <h2 className="nist171-title">NIST 800-171 Compliance Challenges</h2>
                            <p className="nist171-desc">Meeting the rigorous 110 security requirements across 14 families required to handle CUI and qualify for DoD contracts</p>
                        </div>
                    </ScrollReveal>
                    <div className="nist171-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="nist171-challenge-card">
                                    <div className="nist171-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="nist171-ch-content">
                                        <div className="nist171-ch-header">
                                            <div className="nist171-ch-icon-box">{c.icon}</div>
                                            <h3 className="nist171-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="nist171-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="nist171-sec nist171-bg-white-grid">
                <div className="nist171-grid-overlay" />
                <div className="nist171-container">
                    <ScrollReveal direction="up">
                        <div className="nist171-hdr">
                            <p className="nist171-eyebrow-red">Our Framework</p>
                            <h2 className="nist171-title">Our NIST 800-171 Framework</h2>
                            <p className="nist171-desc">Comprehensive compliance mapping covering all 110 requirements, CUI boundaries, and CMMC readiness</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1-3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="nist171-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="nist171-fw-card" key={index}>
                                    <div className="nist171-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="nist171-fw-connector" />}
                                    <div className="nist171-fw-icon">{step.icon}</div>
                                    <h3 className="nist171-fw-title">{step.title}</h3>
                                    <p className="nist171-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4-6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="nist171-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="nist171-fw-card" key={index + 3}>
                                    <div className="nist171-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="nist171-fw-connector" />}
                                    <div className="nist171-fw-icon">{step.icon}</div>
                                    <h3 className="nist171-fw-title">{step.title}</h3>
                                    <p className="nist171-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="nist171-sec nist171-bg-offwhite">
                <div className="nist171-container">
                    <ScrollReveal direction="up">
                        <div className="nist171-hdr">
                            <p className="nist171-eyebrow-red">Our Approach</p>
                            <h2 className="nist171-title">Our Readiness Methodology</h2>
                            <p className="nist171-desc">A disciplined, step by step readiness methodology from initial gap analysis to SPRS score submission</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="nist171-methodology-timeline">
                        <div className="nist171-methodology-line" />
                        <div className="nist171-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`nist171-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="nist171-methodology-card">
                                            <div className="nist171-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="nist171-methodology-card-header">
                                                <div className="nist171-methodology-card-icon">{a.icon}</div>
                                                <h3 className="nist171-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="nist171-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="nist171-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="nist171-sec nist171-bg-white-grid">
                <div className="nist171-grid-overlay" />
                <div className="nist171-container">
                    <ScrollReveal direction="up">
                        <div className="nist171-hdr">
                            <p className="nist171-eyebrow-red">Our Checklist</p>
                            <h2 className="nist171-title">NIST 800-171 Coverage Checklist</h2>
                            <p className="nist171-desc">Complete requirement coverage from access control to system and information integrity</p>
                        </div>
                    </ScrollReveal>
                    <div className="nist171-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="nist171-checklist-item">
                                    <div className="nist171-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="nist171-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="nist171-sec nist171-bg-offwhite">
                <div className="nist171-container">
                    <ScrollReveal direction="up">
                        <div className="nist171-hdr">
                            <p className="nist171-eyebrow-red">Why CyberAries</p>
                            <h2 className="nist171-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="nist171-why-grid-3">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="nist171-why-clean-card">
                                    <div className="nist171-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="nist171-why-clean-title">{w.title}</h3>
                                    <p className="nist171-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="nist171-diff nist171-bg-white-grid">
                <div className="nist171-grid-overlay" />
                <div className="nist171-container">
                    <ScrollReveal direction="up">
                        <div className="nist171-hdr">
                            <p className="nist171-eyebrow-red">Our Difference</p>
                            <h2 className="nist171-diff-title">THE <span className="nist171-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="nist171-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="nist171-diff-card nist171-diff-card--traditional">
                                <h3 className="nist171-diff-heading">Generic Compliance Consultants</h3>
                                <ul className="nist171-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="nist171-diff-item">
                                            <span className="nist171-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="nist171-diff-card nist171-diff-card--featured">
                                <h3 className="nist171-diff-heading nist171-diff-heading--ca">
                                    CyberAries NIST Practice
                                </h3>
                                <ul className="nist171-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="nist171-diff-item">
                                            <span className="nist171-diff-bullet">
                                                <CheckCircle size={18} className="nist171-check-icon" />
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

            {/* DELIVERABLES SECTION */}
            <section className="nist171-sec nist171-bg-white-grid">
                <div className="nist171-grid-overlay" />
                <div className="nist171-container">
                    <ScrollReveal direction="up">
                        <div className="nist171-hdr">
                            <p className="nist171-eyebrow-red">Our Deliverables</p>
                            <h2 className="nist171-title">Comprehensive Deliverables</h2>
                            <p className="nist171-desc">System Security Plan (SSP), Plan of Action and Milestones (POA&M), SPRS assessment scorecard, and evidence files.</p>
                        </div>
                    </ScrollReveal>
                    <div className="nist171-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="nist171-pillar-card">
                                    <span className="nist171-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="nist171-pillar-top">
                                        <div className="nist171-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="nist171-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="nist171-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="nist171-pillar-divider" />
                                    <ul className="nist171-pillar-list">
                                        {d.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="nist171-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="nist171-container">
                    <ScrollReveal direction="up">
                        <div className="nist171-cta-content">
                            <h2 className="nist171-cta-title">
                                <span className="nist171-grad">Ready to Qualify for Federal Contracts?</span>
                            </h2>
                            <p className="nist171-cta-description">
                                Partner with NIST experts to implement controls, build your SSP, and achieve compliance with confidence.
                            </p>
                            <div className="nist171-cta-buttons">
                                <Link to="/contact" className="nist171-btn nist171-cta-btn">
                                    <span>Request NIST Assessment</span>
                                    <ArrowRight size={18} className="nist171-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default NIST800171;
