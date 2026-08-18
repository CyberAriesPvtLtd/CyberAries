import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/shield-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, Users, Award, FileCheck, Eye, Database, Globe, Target, ArrowRight, Landmark } from 'lucide-react';
import './PCIDSS.css';

const challenges = [
    { icon: <Target size={24} />, title: 'Cardholder Data Environment Scoping', desc: 'Accurately defining the CDE scope — all systems that store, process, or transmit cardholder data plus connected systems — is critical. Over-scoping drives excessive cost; under-scoping creates compliance gaps.' },
    { icon: <Lock size={24} />, title: 'Network Segmentation & Isolation', desc: 'Implementing effective network segmentation that genuinely isolates the CDE from out-of-scope networks — reducing PCI DSS scope and protecting cardholder data from lateral movement.' },
    { icon: <Settings size={24} />, title: 'PCI DSS v4.0 Transition', desc: 'PCI DSS v4.0 introduced significant changes including customized implementation approaches, enhanced authentication requirements, and targeted risk analysis. Organizations need structured transition roadmaps.' },
    { icon: <Eye size={24} />, title: 'Continuous Compliance Monitoring', desc: 'PCI DSS requires continuous monitoring log review, change detection, file integrity monitoring, and vulnerability scanning not just annual point in time assessments.' },
    { icon: <Users size={24} />, title: 'Third Party & Service Provider Risk', desc: 'Managing PCI DSS compliance obligations across payment processors, service providers, and vendors including maintaining a compliant service provider list and managing their compliance status.' },
    { icon: <AlertTriangle size={24} />, title: 'QSA Assessment Preparation', desc: 'Preparing for a Qualified Security Assessor (QSA) audit requires rigorous evidence collection, control testing, and documentation readiness across all 12 PCI DSS requirement domains.' },
];

const components = [
    { icon: <Target size={22} />, title: 'CDE Scoping & Network Segmentation', desc: 'Precise CDE scope definition and implementation of network segmentation controls — VLANs, firewalls, micro-segmentation — genuinely isolating cardholder data environments.' },
    { icon: <Shield size={22} />, title: '12 Requirement Domain Controls', desc: 'Implementation of controls across all 12 PCI DSS v4.0 requirement domains — from network security and access control through monitoring, testing, and information security policies.' },
    { icon: <Lock size={22} />, title: 'Encryption & Tokenization', desc: 'End-to-end encryption of cardholder data at rest and in transit, including point-to-point encryption (P2PE) assessment and tokenization implementation recommendations.' },
    { icon: <Eye size={22} />, title: 'Continuous Monitoring Programme', desc: 'Automated log management, file integrity monitoring, network intrusion detection, and vulnerability scanning meeting PCI DSS continuous monitoring requirements.' },
    { icon: <Globe size={22} />, title: 'Service Provider Management', desc: 'PCI-compliant service provider assessment programme, compliant service provider register maintenance, and contractual PCI DSS obligation enforcement.' },
    { icon: <Award size={22} />, title: 'QSA Assessment Support', desc: 'SAQ selection guidance, QSA coordination, evidence preparation, and management response to findings for ROC and AOC delivery.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'PCI DSS Gap Assessment', desc: 'Comprehensive baseline assessment against all PCI DSS v4.0 requirements — identifying CDE scope issues, control gaps, and documentation deficiencies.' },
    { icon: <Target size={22} />, title: 'CDE Scope Definition', desc: 'Define the cardholder data environment scope — all CHD/SAD storage, processing, and transmission systems plus connected components — with scoping diagrams.' },
    { icon: <Database size={22} />, title: 'Cardholder Data Discovery', desc: 'Technical discovery of all cardholder data across storage systems, databases, logs, and file shares — eliminating uncontrolled CHD outside the defined CDE.' },
    { icon: <Lock size={22} />, title: 'Network Segmentation Implementation', desc: 'Design and implement CDE segmentation using firewalls, VLANs, and micro-segmentation to genuinely isolate cardholder data from out-of-scope networks.' },
    { icon: <Settings size={22} />, title: 'Control Remediation Across 12 Domains', desc: 'Systematic remediation of all identified control gaps across PCI DSS v4.0\'s 12 requirement domains — from access control and cryptography to monitoring and policy.' },
    { icon: <Shield size={22} />, title: 'Encryption & Key Management', desc: 'Implement strong cryptography for CHD at rest and in transit, with documented key management procedures meeting PCI DSS cryptographic requirements.' },
    { icon: <Eye size={22} />, title: 'Continuous Monitoring & Logging', desc: 'Deploy centralized log management, FIM, IDS/IPS, and automated vulnerability scanning meeting PCI DSS continuous monitoring and testing requirements.' },
    { icon: <Globe size={22} />, title: 'Service Provider Programme', desc: 'Establish compliant service provider list, review TSPs\' AOCs, and implement contractual PCI compliance obligations for all in-scope vendors.' },
    { icon: <FileCheck size={22} />, title: 'Evidence Documentation', desc: 'Compile comprehensive PCI DSS compliance evidence policies, control test results, network diagrams, scan reports, and penetration test reports.' },
    { icon: <Award size={22} />, title: 'QSA/SAQ Assessment Support', desc: 'SAQ self-assessment or QSA ROC assessment coordination with evidence preparation, on-site assessment support, and AOC/ROC delivery management.' },
];

const checklist = [
    'PCI DSS v4.0 gap assessment across all 12 requirement domains',
    'CDE scope definition with network and data flow diagrams',
    'Cardholder data discovery and uncontrolled CHD elimination',
    'Network segmentation implementation and penetration test validation',
    'Firewall and network security control implementation (Req. 1-2)',
    'Cardholder data protection encryption at rest and in transit (Req. 3-4)',
    'Access control least privilege, MFA, unique IDs (Req. 7-8)',
    'Physical access controls for CDE locations (Req. 9)',
    'Log management, FIM, and network monitoring (Req. 10-11)',
    'Quarterly vulnerability scanning and annual penetration testing (Req. 11)',
    'Information security policy and awareness programme (Req. 12)',
    'QSA assessment coordination and AOC/ROC delivery support',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'PCI DSS v4.0 Specialists', desc: 'Our assessors are current on PCI DSS v4.0 changes — customized implementation, targeted risk analysis, and enhanced multi-factor authentication requirements.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Technical CDE Expertise', desc: 'We implement network segmentation, encryption, FIM, and monitoring controls — not just compliance documentation — to reduce both scope and residual risk.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'End to End QSA Readiness', desc: 'From CHD discovery and CDE scoping through all 12 requirement domains and QSA coordination — we guide your entire PCI DSS compliance journey.' },
];

const trad = [
    'CDE scope defined too broadly, creating excessive compliance burden and cost.',
    'Network segmentation documented but not technically validated through testing.',
    'Cardholder data discovery skipped, leaving uncontrolled CHD outside the CDE.',
    'Continuous monitoring limited to quarterly scans rather than ongoing detection.',
    'Service provider compliance managed through contracts alone without technical review.',
    'QSA assessment surprises from evidence gaps discovered during on site review.',
];
const ca = [
    'Precise CDE scoping minimizing compliance burden while ensuring full coverage.',
    'Network segmentation technically validated through penetration testing evidence.',
    'Comprehensive CHD discovery eliminating uncontrolled card data before assessment.',
    'Continuous monitoring programme with daily log review, FIM, and anomaly alerts.',
    'Service provider compliance monitored through AOC reviews and technical attestation.',
    'Pre QSA readiness testing eliminating on site assessment surprises and findings.',
];

const deliverables = [
    { icon: <Target size={28} />, title: 'Scoping & Architecture', items: ['CDE Scope Definition & Documentation', 'Network Segmentation Architecture', 'Data Flow & Network Diagrams', 'Cardholder Data Discovery Report'] },
    { icon: <Settings size={28} />, title: 'Technical Controls', items: ['Network Security & Firewall Controls', 'Encryption & Key Management Implementation', 'Access Control & MFA Implementation', 'FIM, IDS, and Log Management Deployment'] },
    { icon: <FileText size={28} />, title: 'Documentation & Policies', items: ['PCI DSS Policy Suite (12 domains)', 'Service Provider Register & AOC Tracking', 'Quarterly Scan & Annual Pentest Reports', 'Evidence Repository for QSA Assessment'] },
    { icon: <Award size={28} />, title: 'Assessment Support', items: ['SAQ Selection & Self Assessment Support', 'QSA Engagement Management', 'AOC and ROC Delivery Coordination', 'Annual Assessment Readiness Plan'] },
];

const PCIDSS = () => {
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
        <div className="pci-page">
            {/* HERO SECTION */}
            <section className="pci-hero" ref={heroRef}>
                <motion.div
                    className="pci-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="pci-hero-overlay" />
                <div className="pci-hero-glow" />

                {/* Floating particles */}
                <div className="pci-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="pci-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="pci-container">
                    <div className="pci-hero-inner">
                        <div className="pci-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="pci-hero-badge">
                  <Landmark size={14} className="pci-badge-icon" />
                  <span className="pci-badge-text">
                    COMPLIANCE <span className="pci-badge-divider">/</span> GLOBAL ATTESTATIONS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="pci-hero-title">
                                    <span className="pci-grad">PCI DSS COMPLIANCE & ASSESSMENT</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="pci-hero-description">
                                    The <strong>Payment Card Industry Data Security Standard (PCI DSS v4.0)</strong> mandates robust security controls for all organizations that store, process, or transmit cardholder data. Non compliance exposes organizations to card brand fines, processor termination, data breach liability, and reputational harm.
                                </p>
                                <p className="pci-hero-description">
                                    Our PCI DSS practice provides <strong>end to end compliance support</strong> from CDE scoping and cardholder data discovery through all 12 requirement domains, network segmentation, continuous monitoring, and QSA assessment coordination.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="pci-hero-actions">
                                    <button className="pci-btn pci-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a PCI DSS Gap Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="pci-sec pci-bg-offwhite">
                <div className="pci-container">
                    <ScrollReveal direction="up">
                        <div className="pci-hdr">
                            <p className="pci-eyebrow-red">Our Challenges</p>
                            <h2 className="pci-title">PCI DSS Compliance Challenges</h2>
                            <p className="pci-desc">Organizations handling cardholder data face complex technical and operational challenges achieving and maintaining PCI DSS v4.0 compliance</p>
                        </div>
                    </ScrollReveal>
                    <div className="pci-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="pci-challenge-card">
                                    <div className="pci-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="pci-ch-content">
                                        <div className="pci-ch-header">
                                            <div className="pci-ch-icon-box">{c.icon}</div>
                                            <h3 className="pci-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="pci-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="pci-sec pci-bg-white-grid">
                <div className="pci-grid-overlay" />
                <div className="pci-container">
                    <ScrollReveal direction="up">
                        <div className="pci-hdr">
                            <p className="pci-eyebrow-red">Our Framework</p>
                            <h2 className="pci-title">Our PCI DSS Compliance Framework</h2>
                            <p className="pci-desc">Comprehensive PCI DSS v4.0 compliance covering all 12 requirement domains from CDE scoping through QSA assessment</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="pci-fw-row">
                            {components.slice(0, 3).map((step, index) => (
                                <div className="pci-fw-card" key={index}>
                                    <div className="pci-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="pci-fw-connector" />}
                                    <div className="pci-fw-icon">{step.icon}</div>
                                    <h3 className="pci-fw-title">{step.title}</h3>
                                    <p className="pci-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="pci-fw-row-2">
                            {components.slice(3, 6).map((step, index) => (
                                <div className="pci-fw-card" key={index + 3}>
                                    <div className="pci-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="pci-fw-connector" />}
                                    <div className="pci-fw-icon">{step.icon}</div>
                                    <h3 className="pci-fw-title">{step.title}</h3>
                                    <p className="pci-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="pci-sec pci-bg-offwhite">
                <div className="pci-container">
                    <ScrollReveal direction="up">
                        <div className="pci-hdr">
                            <p className="pci-eyebrow-red">Our Approach</p>
                            <h2 className="pci-title">Our Compliance Methodology</h2>
                            <p className="pci-desc">A proven 10-step PCI DSS compliance methodology from baseline gap assessment through QSA assessment and AOC delivery</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="pci-methodology-timeline">
                        <div className="pci-methodology-line" />
                        <div className="pci-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`pci-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="pci-methodology-card">
                                            <div className="pci-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="pci-methodology-card-header">
                                                <div className="pci-methodology-card-icon">{a.icon}</div>
                                                <h3 className="pci-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="pci-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="pci-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="pci-sec pci-bg-white-grid">
                <div className="pci-grid-overlay" />
                <div className="pci-container">
                    <ScrollReveal direction="up">
                        <div className="pci-hdr">
                            <p className="pci-eyebrow-red">Our Checklist</p>
                            <h2 className="pci-title">PCI DSS Coverage Checklist</h2>
                            <p className="pci-desc">Complete coverage of PCI DSS v4.0 requirements across all 12 requirement domains</p>
                        </div>
                    </ScrollReveal>
                    <div className="pci-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="pci-checklist-item">
                                    <div className="pci-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="pci-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="pci-sec pci-bg-offwhite">
                <div className="pci-container">
                    <ScrollReveal direction="up">
                        <div className="pci-hdr">
                            <p className="pci-eyebrow-red">Why CyberAries</p>
                            <h2 className="pci-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="pci-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="pci-why-clean-card">
                                    <div className="pci-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="pci-why-clean-title">{w.title}</h3>
                                    <p className="pci-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="pci-diff pci-bg-white-grid">
                <div className="pci-grid-overlay" />
                <div className="pci-container">
                    <ScrollReveal direction="up">
                        <div className="pci-hdr">
                            <p className="pci-eyebrow-red">Our Difference</p>
                            <h2 className="pci-diff-title">THE <span className="pci-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="pci-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="pci-diff-card pci-diff-card--traditional">
                                <h3 className="pci-diff-heading">Standard PCI Consultants</h3>
                                <ul className="pci-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="pci-diff-item">
                                            <span className="pci-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="pci-diff-card pci-diff-card--featured">
                                <h3 className="pci-diff-heading pci-diff-heading--ca">
                                    CyberAries PCI DSS Practice
                                </h3>
                                <ul className="pci-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="pci-diff-item">
                                            <span className="pci-diff-bullet">
                                                <CheckCircle size={18} className="pci-check-icon" />
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
            <section className="pci-sec pci-bg-white-grid">
                <div className="pci-grid-overlay" />
                <div className="pci-container">
                    <ScrollReveal direction="up">
                        <div className="pci-hdr">
                            <p className="pci-eyebrow-red">Our Deliverables</p>
                            <h2 className="pci-title">Comprehensive Deliverables</h2>
                            <p className="pci-desc">End to end documentation, controls, and reporting to ensure PCI DSS compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="pci-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="pci-pillar-card">
                                    <span className="pci-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="pci-pillar-top">
                                        <div className="pci-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="pci-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="pci-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="pci-pillar-divider" />
                                    <ul className="pci-pillar-list">
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
            <section className="pci-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="pci-container">
                    <ScrollReveal direction="up">
                        <div className="pci-cta-content">
                            <h2 className="pci-cta-title">
                                <span className="pci-grad">Ready to Achieve PCI DSS v4.0 Compliance?</span>
                            </h2>
                            <p className="pci-cta-description">
                                Protect cardholder data and achieve PCI DSS compliance with our certified assessors and end to end compliance programme.
                            </p>
                            <div className="pci-cta-buttons">
                                <Link to="/contact" className="pci-btn pci-cta-btn">
                                    <span>Request PCI DSS Assessment</span>
                                    <ArrowRight size={18} className="pci-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default PCIDSS;
