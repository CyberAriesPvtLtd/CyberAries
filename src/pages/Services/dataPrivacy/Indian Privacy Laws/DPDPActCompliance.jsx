import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/indian-privacy-laws-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Users, Award, Globe, Database, Eye, Target, ArrowRight, Landmark, FileCheck } from 'lucide-react';
import './DPDPActCompliance.css';

const challenges = [
    { icon: <Target size={24} />, title: 'Data Fiduciary Obligations Under DPDP Act 2023', desc: 'Understanding and operationalizing the full range of Data Fiduciary obligations — lawful basis, consent management, purpose limitation, data minimisation, accuracy, and storage limitation under the new Indian framework.' },
    { icon: <Database size={24} />, title: 'Consent Manager & Consent Mechanism', desc: 'Implementing a valid consent framework meeting DPDP Act requirements — free, specific, informed, unconditional, and unambiguous — plus consent notice requirements before data collection.' },
    { icon: <Users size={24} />, title: 'Data Principal Rights Management', desc: 'Enabling Data Principal rights access, correction, erasure, grievance redressal, and nominee rights through operational procedures and accessible request mechanisms.' },
    { icon: <Globe size={24} />, title: 'Cross Border Data Transfers', desc: 'Navigating DPDP Act\'s provisions on cross border data transfers awaiting government notification of permissible jurisdictions and maintaining transfer documentation for regulatory readiness.' },
    { icon: <Lock size={24} />, title: 'Significant Data Fiduciary Compliance', desc: 'Meeting additional obligations for Significant Data Fiduciaries (SDFs) notified by the government Data Protection Officer appointment, data protection impact assessments, and periodic audits.' },
    { icon: <AlertTriangle size={24} />, title: 'Data Protection Board Preparedness', desc: 'Preparing for complaints before the Data Protection Board of India building a documented compliance posture, grievance redressal mechanism, and breach notification capability.' },
];

const framework = [
    { icon: <Search size={22} />, title: 'DPDP Act Readiness Assessment', desc: 'Structured gap assessment against all DPDP Act 2023 obligations data processing inventory, consent framework, Data Principal rights procedures, and cross border transfer review.' },
    { icon: <Database size={22} />, title: 'Personal Data Inventory & Processing Activities', desc: 'Comprehensive catalogue of all personal data processing — categories, purposes, lawful basis (consent or legitimate use), retention, and data flows across systems and third parties.' },
    { icon: <FileText size={22} />, title: 'Consent Notice & Mechanism Design', desc: 'Design of DPDP Act compliant consent notices and consent collection mechanisms clear, plain language notices covering purpose, rights, and withdrawal before any data collection.' },
    { icon: <Users size={22} />, title: 'Data Principal Rights Programme', desc: 'Operational procedures for all DPDP Act Data Principal rights access, correction, erasure, withdrawal of consent, nomination, and grievance redressal within prescribed timelines.' },
    { icon: <Lock size={22} />, title: 'Security Safeguards & Breach Response', desc: 'Implementing reasonable security safeguards for personal data and breach notification procedures — intimating the Data Protection Board and affected Data Principals of personal data breaches.' },
    { icon: <Award size={22} />, title: 'Significant Data Fiduciary Compliance', desc: 'Preparing organizations notified as SDFs DPO appointment support, Data Protection Impact Assessments, periodic audits, and additional compliance obligations.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'DPDP Act Gap Assessment', desc: 'Baseline review against all applicable DPDP Act 2023 obligations confirming Data Fiduciary status, identifying personal data processing without valid consent or legitimate use, and documentation gaps.' },
    { icon: <Database size={22} />, title: 'Personal Data Inventory & Purpose Mapping', desc: 'Build a complete personal data processing inventory — all personal data categories, processing purposes, lawful basis, retention periods, and third-party data sharing arrangements.' },
    { icon: <FileText size={22} />, title: 'Consent Notice Design', desc: 'Draft DPDP Act-compliant consent notices — clear, plain-language, purpose-specific — and implement consent collection mechanisms before or at the point of data collection.' },
    { icon: <Globe size={22} />, title: 'Consent Management Implementation', desc: 'Deploy or integrate with an approved Consent Manager; implement consent tracking, preference management, and withdrawal mechanisms across all touchpoints.' },
    { icon: <Users size={22} />, title: 'Data Principal Rights Procedures', desc: 'Design and implement request intake, identity verification, fulfilment workflows and response mechanisms for all DPDP Act Data Principal rights within legally prescribed timelines.' },
    { icon: <Lock size={22} />, title: 'Security Safeguards Implementation', desc: 'Implement reasonable technical and organisational security safeguards for personal data — access controls, encryption, incident detection — meeting DPDP Act security obligations.' },
    { icon: <AlertTriangle size={22} />, title: 'Breach Notification Programme', desc: 'Develop a personal data breach response plan detection, initial assessment, Data Protection Board notification procedures, and Data Principal communication where required.' },
    { icon: <Eye size={22} />, title: 'Cross Border Transfer Preparedness', desc: 'Document all cross border personal data transfers, monitor government notification of permissible jurisdictions, and prepare transfer impact assessments and safeguards.' },
    { icon: <FileCheck size={22} />, title: 'Grievance Redressal Mechanism', desc: 'Establish an accessible grievance redressal mechanism and designate a grievance officer as required by DPDP Act with documented response SLAs and escalation procedures.' },
    { icon: <Award size={22} />, title: 'SDF Programme & Ongoing Compliance', desc: 'For Significant Data Fiduciaries DPO appointment support, DPIA programme, periodic audit coordination, and ongoing DPDP Act regulatory monitoring as Rules are notified.' },
];

const checklist = [
    'DPDP Act 2023 gap assessment Data Fiduciary obligations review',
    'Personal data processing inventory and purpose mapping',
    'DPDP Act-compliant consent notice design and implementation',
    'Consent Manager integration or implementation for consent tracking',
    'Data Principal rights procedures access, correction, erasure, withdrawal, nomination',
    'Grievance redressal mechanism and designated grievance officer',
    'Security safeguards for personal data technical and organisational measures',
    'Personal data breach notification plan Data Protection Board and Data Principals',
    'Cross border data transfer documentation and permissible jurisdiction monitoring',
    'Processing agreements with Data Processors including DPDP Act obligations',
    'Significant Data Fiduciary compliance (if notified) DPO, DPIA, periodic audit',
    'Ongoing DPDP Act regulatory update monitoring as Rules are notified',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'Indian Privacy Law Specialists', desc: 'Our team has deep expertise in Indian data protection law — from SPDI Rules through CERT-In directions to the DPDP Act 2023 — with direct CERT-In empanelment and regulatory experience.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'Practical DPDP Act Compliance', desc: 'We translate DPDP Act 2023 obligations into operational procedures consent notices, Data Principal rights workflows, grievance mechanisms designed to work within Indian business contexts.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Regulatory Ready Compliance Posture', desc: 'We build compliance programmes designed for the Data Protection Board of India documented, auditable, and responsive to the evolving DPDP Act rulebook as government notifications are issued.' },
];

const trad = [
    'DPDP Act obligations conflated with GDPR requirements without India-specific analysis.',
    'Privacy policies updated without DPDP Act-compliant consent notice implementation.',
    'Data Principal rights acknowledged without operational fulfilment procedures.',
    'Security safeguards generic not aligned to DPDP Act\'s reasonable security standard.',
    'Cross-border transfers not reviewed against DPDP Act permissible jurisdiction requirements.',
    'Grievance redressal mechanism exists on paper without a designated grievance officer or SLA.',
];
const ca = [
    'DPDP Act 2023 obligations assessed specifically not adapted from GDPR frameworks.',
    'DPDP Act-compliant consent notices implemented at all personal data collection points.',
    'All Data Principal rights operationally enabled with tested workflows and response audit trails.',
    'Reasonable security safeguards implemented and documented against DPDP Act security obligations.',
    'Cross border transfers documented with permissible jurisdiction monitoring as Rules are notified.',
    'Grievance redressal mechanism operational with designated officer, response SLA, and escalation.',
];

const deliverables = [
    { icon: <Database size={28} />, title: 'Assessment & Inventory', items: ['DPDP Act Gap Assessment Report', 'Personal Data Processing Inventory', 'Data Flow Diagrams & Third Party Register', 'Cross Border Transfer Documentation'] },
    { icon: <FileText size={28} />, title: 'Consent & Notices', items: ['DPDP Act Compliant Consent Notice Suite', 'Consent Management Implementation', 'Consent Withdrawal Mechanism', 'Privacy Notice & Data Fiduciary Policy'] },
    { icon: <Users size={28} />, title: 'Data Principal Rights', items: ['Data Principal Rights Request Procedures', 'Grievance Redressal Mechanism & SLA', 'Grievance Officer Designation Documentation', 'Rights Fulfilment Audit Log'] },
    { icon: <Award size={28} />, title: 'Security & Compliance', items: ['Reasonable Security Safeguards Documentation', 'Data Breach Notification Playbook', 'Data Processor Agreement Template', 'SDF Compliance Programme (if applicable)'] },
];

const DPDPActCompliance = () => {
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
        <div className="dpdp-page">
            {/* HERO SECTION */}
            <section className="dpdp-hero" ref={heroRef}>
                <motion.div
                    className="dpdp-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="dpdp-hero-overlay" />
                <div className="dpdp-hero-glow" />

                {/* Floating particles */}
                <div className="dpdp-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="dpdp-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="dpdp-container">
                    <div className="dpdp-hero-inner">
                        <div className="dpdp-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="dpdp-hero-badge">
                  <Landmark size={14} className="dpdp-badge-icon" />
                  <span className="dpdp-badge-text">
                    DATA PRIVACY <span className="dpdp-badge-divider">/</span> INDIAN PRIVACY LAWS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="dpdp-hero-title">
                                    <span className="dpdp-grad">DPDP ACT COMPLIANCE PROGRAMME</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="dpdp-hero-description">
                                    Align with India’s new data privacy landscape. We provide a comprehensive framework to help Data Fiduciaries meet their legal obligations and avoid penalties of up to ₹250 crore. Our programme streamlines personal data inventory, DPDP compliant consent management, and Data Principal rights procedures.
                                </p>
                                <p className="dpdp-hero-description">
                                    By implementing robust security safeguards, grievance redressal mechanisms, and breach notification protocols, we ensure your organization achieves full compliance while building digital trust in the Indian economy.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="dpdp-hero-actions">
                                    <button className="dpdp-btn dpdp-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a DPDP Act Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpdp-sec dpdp-bg-offwhite">
                <div className="dpdp-container">
                    <ScrollReveal direction="up">
                        <div className="dpdp-hdr">
                            <p className="dpdp-eyebrow-red">Our Challenges</p>
                            <h2 className="dpdp-title">DPDP Act Compliance Challenges</h2>
                            <p className="dpdp-desc">Data Fiduciaries face complex challenges operationalizing new DPDP Act obligations across consent, rights, security, and cross border data transfer requirements</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpdp-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="dpdp-challenge-card">
                                    <div className="dpdp-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="dpdp-ch-content">
                                        <div className="dpdp-ch-header">
                                            <div className="dpdp-ch-icon-box">{c.icon}</div>
                                            <h3 className="dpdp-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="dpdp-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="dpdp-sec dpdp-bg-white-grid">
                <div className="dpdp-grid-overlay" />
                <div className="dpdp-container">
                    <ScrollReveal direction="up">
                        <div className="dpdp-hdr">
                            <p className="dpdp-eyebrow-red">Our Framework</p>
                            <h2 className="dpdp-title">Our DPDP Act Compliance Framework</h2>
                            <p className="dpdp-desc">Comprehensive DPDP Act 2023 compliance from data inventory and consent notices through Data Principal rights, security safeguards, and Data Protection Board readiness</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="dpdp-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="dpdp-fw-card" key={index}>
                                    <div className="dpdp-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="dpdp-fw-connector" />}
                                    <div className="dpdp-fw-icon">{step.icon}</div>
                                    <h3 className="dpdp-fw-title">{step.title}</h3>
                                    <p className="dpdp-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="dpdp-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="dpdp-fw-card" key={index + 3}>
                                    <div className="dpdp-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="dpdp-fw-connector" />}
                                    <div className="dpdp-fw-icon">{step.icon}</div>
                                    <h3 className="dpdp-fw-title">{step.title}</h3>
                                    <p className="dpdp-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpdp-sec dpdp-bg-offwhite">
                <div className="dpdp-container">
                    <ScrollReveal direction="up">
                        <div className="dpdp-hdr">
                            <p className="dpdp-eyebrow-red">Our Approach</p>
                            <h2 className="dpdp-title">Our DPDP Act Methodology</h2>
                            <p className="dpdp-desc">A 10-step methodology from DPDP Act gap assessment through ongoing compliance as government rules and notifications are issued</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="dpdp-methodology-timeline">
                        <div className="dpdp-methodology-line" />
                        <div className="dpdp-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`dpdp-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="dpdp-methodology-card">
                                            <div className="dpdp-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="dpdp-methodology-card-header">
                                                <div className="dpdp-methodology-card-icon">{a.icon}</div>
                                                <h3 className="dpdp-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="dpdp-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="dpdp-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="dpdp-sec dpdp-bg-white-grid">
                <div className="dpdp-grid-overlay" />
                <div className="dpdp-container">
                    <ScrollReveal direction="up">
                        <div className="dpdp-hdr">
                            <p className="dpdp-eyebrow-red">Our Checklist</p>
                            <h2 className="dpdp-title">DPDP Act Coverage Checklist</h2>
                            <p className="dpdp-desc">Complete coverage of DPDP Act 2023 Data Fiduciary obligations</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpdp-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="dpdp-checklist-item">
                                    <div className="dpdp-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="dpdp-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpdp-sec dpdp-bg-offwhite">
                <div className="dpdp-container">
                    <ScrollReveal direction="up">
                        <div className="dpdp-hdr">
                            <p className="dpdp-eyebrow-red">Why CyberAries</p>
                            <h2 className="dpdp-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="dpdp-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="dpdp-why-clean-card">
                                    <div className="dpdp-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="dpdp-why-clean-title">{w.title}</h3>
                                    <p className="dpdp-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="dpdp-diff dpdp-bg-white-grid">
                <div className="dpdp-grid-overlay" />
                <div className="dpdp-container">
                    <ScrollReveal direction="up">
                        <div className="dpdp-hdr">
                            <p className="dpdp-eyebrow-red">Our Difference</p>
                            <h2 className="dpdp-diff-title">THE <span className="dpdp-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="dpdp-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="dpdp-diff-card dpdp-diff-card--traditional">
                                <h3 className="dpdp-diff-heading">Generic Privacy Consultants</h3>
                                <ul className="dpdp-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="dpdp-diff-item">
                                            <span className="dpdp-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="dpdp-diff-card dpdp-diff-card--featured">
                                <h3 className="dpdp-diff-heading dpdp-diff-heading--ca">
                                    CyberAries DPDP Act Practice
                                </h3>
                                <ul className="dpdp-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="dpdp-diff-item">
                                            <span className="dpdp-diff-bullet">
                                                <CheckCircle size={18} className="dpdp-check-icon" />
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
            <section className="dpdp-sec dpdp-bg-white-grid">
                <div className="dpdp-grid-overlay" />
                <div className="dpdp-container">
                    <ScrollReveal direction="up">
                        <div className="dpdp-hdr">
                            <p className="dpdp-eyebrow-red">Our Deliverables</p>
                            <h2 className="dpdp-title">Comprehensive Deliverables</h2>
                            <p className="dpdp-desc">End to end documentation, controls, and reporting to ensure DPDP Act compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpdp-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="dpdp-pillar-card">
                                    <span className="dpdp-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="dpdp-pillar-top">
                                        <div className="dpdp-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="dpdp-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="dpdp-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="dpdp-pillar-divider" />
                                    <ul className="dpdp-pillar-list">
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
            <section className="dpdp-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="dpdp-container">
                    <ScrollReveal direction="up">
                        <div className="dpdp-cta-content">
                            <h2 className="dpdp-cta-title">
                                <span className="dpdp-grad">Ready to Achieve DPDP Act Compliance?</span>
                            </h2>
                            <p className="dpdp-cta-description">
                                Build a robust, Data Protection Board ready DPDP Act compliance programme with India's leading data protection specialists.
                            </p>
                            <div className="dpdp-cta-buttons">
                                <Link to="/contact" className="dpdp-btn dpdp-cta-btn">
                                    <span>Request DPDP Act Assessment</span>
                                    <ArrowRight size={18} className="dpdp-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default DPDPActCompliance;
