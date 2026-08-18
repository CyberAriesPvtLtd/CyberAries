import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/shield-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, FileCheck, Eye, Database, Globe, Target, ArrowRight, Landmark } from 'lucide-react';
import './SWIFTAssessment.css';

const challenges = [
    { icon: <Target size={24} />, title: 'User Category Determination', desc: 'Correctly determining your SWIFT user category (A1, A2, A3, B, C) based on your messaging infrastructure and connectivity model is foundational for applying the correct mandatory controls.' },
    { icon: <Shield size={24} />, title: 'Mandatory Control Breadth', desc: 'SWIFT CSP mandates 22 mandatory controls across 3 objectives — securing the environment, knowing and limiting access, and detecting and responding. Each requires technical evidence of implementation.' },
    { icon: <Lock size={24} />, title: 'Local SWIFT Infrastructure Hardening', desc: 'Hardening SWIFT local infrastructure — Alliance Access, Alliance Entry, Alliance Gateway, Alliance Lite2 — against SWIFT\'s specific security configuration requirements.' },
    { icon: <Eye size={24} />, title: 'Anomalous Transaction Detection', desc: 'Implementing or integrating with effective payment anomaly detection systems meeting SWIFT\'s mandatory requirements for detecting unusual transaction patterns in real-time.' },
    { icon: <Database size={24} />, title: 'Annual Attestation Evidence', desc: 'Annually compiling and submitting accurate CSCF attestation evidence through the KYC Security Attestation (KYC SA) application with documentation meeting SWIFT\'s evidentiary standards.' },
    { icon: <AlertTriangle size={24} />, title: 'CSCF Version Updates', desc: 'SWIFT updates the Customer Security Controls Framework (CSCF) annually. Tracking changes, assessing impact on your control environment, and meeting new mandatory requirements each year.' },
];

const components = [
    { icon: <Target size={22} />, title: 'User Category & Scope Assessment', desc: 'Determining your SWIFT user category, identifying all applicable mandatory and advisory controls, and defining the scope of the SWIFT infrastructure assessment.' },
    { icon: <Shield size={22} />, title: 'Mandatory Control Assessment', desc: 'Assessment of all 22 mandatory CSCF controls across the three security objectives securing environment, knowing/limiting access, and detecting/responding.' },
    { icon: <Lock size={22} />, title: 'SWIFT Infrastructure Hardening', desc: 'Technical hardening of SWIFT local components — messaging interfaces, communication infrastructure, operator workstations — against SWIFT security configuration requirements.' },
    { icon: <Eye size={22} />, title: 'Transaction Anomaly Detection', desc: 'Assessment and implementation of payment anomaly detection capabilities meeting SWIFT\'s mandatory real-time monitoring requirements.' },
    { icon: <FileText size={22} />, title: 'Advisory Control Implementation', desc: 'Assessment and implementation of SWIFT advisory controls to improve overall security posture beyond mandatory requirements.' },
    { icon: <Award size={22} />, title: 'Annual Attestation Support', desc: 'Annual KYC-SA application completion, evidence compilation, and third-party assessment coordination for independent attestation requirement fulfillment.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'SWIFT Environment Discovery', desc: 'Comprehensive discovery of all SWIFT infrastructure components — messaging systems, communication interfaces, operator workstations, and back-office connections.' },
    { icon: <Target size={22} />, title: 'User Category Classification', desc: 'Determine SWIFT user category (A1, A2, A3, B, or C) based on messaging architecture and connectivity model, establishing the applicable control set.' },
    { icon: <BarChart3 size={22} />, title: 'CSCF Gap Assessment', desc: 'Systematic gap assessment against all mandatory CSCF controls applicable to your user category, with risk-scored findings and remediation prioritization.' },
    { icon: <Lock size={22} />, title: 'SWIFT Infrastructure Hardening', desc: 'Technical hardening of all SWIFT components — Alliance systems, communication infrastructure, operator endpoints — against SWIFT security baselines.' },
    { icon: <Shield size={22} />, title: 'Mandatory Control Remediation', desc: 'Systematic remediation across all 22 mandatory controls — network protection, privilege access, integrity of third-party software, anomaly detection, and more.' },
    { icon: <Eye size={22} />, title: 'Transaction Anomaly Detection Implementation', desc: 'Implement or integrate payment anomaly detection solution meeting SWIFT CSF mandatory requirements with real-time alerting and review procedures.' },
    { icon: <Users size={22} />, title: 'Privileged Access Hardening', desc: 'Restrict privileged access to SWIFT infrastructure, implement just-in-time access, MFA, and session recording meeting SWIFT access control requirements.' },
    { icon: <Database size={22} />, title: 'Back Office Connectivity Security', desc: 'Assess and harden all back-office connections to SWIFT infrastructure — internal APIs, payment systems, treasury platforms — reducing lateral attack surface.' },
    { icon: <FileCheck size={22} />, title: 'Evidence Compilation & Documentation', desc: 'Compile comprehensive evidence portfolio for each mandatory control, structured for KYC SA attestation submission and third party assessor review.' },
    { icon: <Award size={22} />, title: 'KYC SA Attestation Submission', desc: 'Support KYC Security Attestation application completion, arrange independent assessor engagement if required, and manage annual renewal cycle.' },
];

const checklist = [
    'SWIFT user category determination (A1, A2, A3, B, C)',
    'All applicable SWIFT CSCF mandatory controls gap assessment',
    'SWIFT local infrastructure security configuration assessment',
    'Operator workstation hardening and endpoint security controls',
    'Network protection SWIFT zone isolation and firewall controls',
    'Privileged access restriction and MFA for SWIFT administrators',
    'Third party software integrity and security assessment',
    'Payment transaction anomaly detection implementation and testing',
    'Cybersecurity awareness and training for SWIFT operators and administrators',
    'Vulnerability scanning and penetration testing of SWIFT environment',
    'Incident response and recovery plan for SWIFT related security incidents',
    'Annual KYC SA attestation evidence compilation and submission support',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'SWIFT CSCF Specialists', desc: 'Our team has direct experience with SWIFT CSCF assessments across banking, financial services, and fintech organizations using all user categories of SWIFT connectivity.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Technical SWIFT Expertise', desc: 'We assess and harden SWIFT infrastructure at the technical level — Alliance systems, network zones, operator workstations — not just documentation review.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'Annual Attestation Management', desc: 'From initial assessment through annual KYC-SA attestation renewals, we provide continuous SWIFT CSP compliance management and CSCF version tracking.' },
];

const trad = [
    'SWIFT user category incorrectly determined, applying wrong mandatory control set.',
    'Gap assessment conducted as documentation review without technical infrastructure testing.',
    'SWIFT components hardened against generic security standards, not SWIFT baselines.',
    'Transaction anomaly detection implemented as a paper requirement only.',
    'KYC SA attestation completed inaccurately due to inadequate evidence collection.',
    'No annual review process, allowing CSCF control drift between attestation cycles.',
];
const ca = [
    'Accurate user category determination based on messaging architecture analysis.',
    'Technical assessment of SWIFT infrastructure components against CSCF standards.',
    'SWIFT components hardened specifically against SWIFT security configuration baselines.',
    'Transaction anomaly detection technically implemented with testing and alert evidence.',
    'KYC SA attestation supported by comprehensive, structured evidence repository.',
    'Annual CSCF update tracking with impact assessment and remediation support.',
];

const deliverables = [
    { icon: <Search size={28} />, title: 'Assessment Reports', items: ['SWIFT Environment Discovery Report', 'CSCF Mandatory Controls Gap Assessment', 'SWIFT Infrastructure Security Report', 'Transaction Anomaly Detection Review'] },
    { icon: <Settings size={28} />, title: 'Technical Remediation', items: ['SWIFT Infrastructure Hardening Evidence', 'Network Zone & Firewall Configuration', 'Privileged Access & MFA Implementation', 'Endpoint Security Controls for Operators'] },
    { icon: <FileText size={28} />, title: 'Documentation & Policies', items: ['SWIFT Security Policy & Procedures', 'Incident Response Plan for SWIFT Environment', 'Third Party Software Registry & Review', 'Back Office Connectivity Security Assessment'] },
    { icon: <Award size={28} />, title: 'Attestation Support', items: ['KYC SA Evidence Portfolio', 'Annual Attestation Submission Support', 'Third Party Assessor Coordination', 'Annual CSCF Update Impact Assessment'] },
];

const SWIFTAssessment = () => {
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
        <div className="swf-page">
            {/* HERO SECTION */}
            <section className="swf-hero" ref={heroRef}>
                <motion.div
                    className="swf-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="swf-hero-overlay" />
                <div className="swf-hero-glow" />

                {/* Floating particles */}
                <div className="swf-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="swf-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="swf-container">
                    <div className="swf-hero-inner">
                        <div className="swf-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="swf-hero-badge">
                  <Landmark size={14} className="swf-badge-icon" />
                  <span className="swf-badge-text">
                    COMPLIANCE <span className="swf-badge-divider">/</span> GLOBAL ATTESTATIONS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="swf-hero-title">
                                    <span className="swf-grad">SWIFT CSP SECURITY ASSESSMENT</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="swf-hero-description">
                                    The <strong>SWIFT Customer Security Programme (CSP)</strong> and Customer Security Controls Framework (CSCF) mandate that all SWIFT users implement a defined set of security controls to protect their local SWIFT infrastructure and contribute to the security of the global financial messaging network.
                                </p>
                                <p className="swf-hero-description">
                                    Our <strong>SWIFT CSP Assessment</strong> covers all mandatory and advisory CSCF controls from SWIFT infrastructure hardening and privileged access controls through transaction anomaly detection, evidence compilation, and annual KYC SA attestation support.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="swf-hero-actions">
                                    <button className="swf-btn swf-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a SWIFT CSP Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="swf-sec swf-bg-offwhite">
                <div className="swf-container">
                    <ScrollReveal direction="up">
                        <div className="swf-hdr">
                            <p className="swf-eyebrow-red">Our Challenges</p>
                            <h2 className="swf-title">SWIFT CSP Compliance Challenges</h2>
                            <p className="swf-desc">SWIFT member institutions face significant challenges achieving and maintaining CSCF compliance across mandatory security control domains</p>
                        </div>
                    </ScrollReveal>
                    <div className="swf-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="swf-challenge-card">
                                    <div className="swf-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="swf-ch-content">
                                        <div className="swf-ch-header">
                                            <div className="swf-ch-icon-box">{c.icon}</div>
                                            <h3 className="swf-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="swf-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="swf-sec swf-bg-white-grid">
                <div className="swf-grid-overlay" />
                <div className="swf-container">
                    <ScrollReveal direction="up">
                        <div className="swf-hdr">
                            <p className="swf-eyebrow-red">Our Framework</p>
                            <h2 className="swf-title">Our SWIFT CSP Assessment Framework</h2>
                            <p className="swf-desc">Comprehensive SWIFT CSCF assessment covering all mandatory and advisory controls across all three security objectives</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="swf-fw-row">
                            {components.slice(0, 3).map((step, index) => (
                                <div className="swf-fw-card" key={index}>
                                    <div className="swf-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="swf-fw-connector" />}
                                    <div className="swf-fw-icon">{step.icon}</div>
                                    <h3 className="swf-fw-title">{step.title}</h3>
                                    <p className="swf-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="swf-fw-row-2">
                            {components.slice(3, 6).map((step, index) => (
                                <div className="swf-fw-card" key={index + 3}>
                                    <div className="swf-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="swf-fw-connector" />}
                                    <div className="swf-fw-icon">{step.icon}</div>
                                    <h3 className="swf-fw-title">{step.title}</h3>
                                    <p className="swf-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="swf-sec swf-bg-offwhite">
                <div className="swf-container">
                    <ScrollReveal direction="up">
                        <div className="swf-hdr">
                            <p className="swf-eyebrow-red">Our Approach</p>
                            <h2 className="swf-title">Our Assessment Methodology</h2>
                            <p className="swf-desc">A 10-step methodology from SWIFT environment discovery through KYC SA attestation submission</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="swf-methodology-timeline">
                        <div className="swf-methodology-line" />
                        <div className="swf-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`swf-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="swf-methodology-card">
                                            <div className="swf-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="swf-methodology-card-header">
                                                <div className="swf-methodology-card-icon">{a.icon}</div>
                                                <h3 className="swf-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="swf-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="swf-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="swf-sec swf-bg-white-grid">
                <div className="swf-grid-overlay" />
                <div className="swf-container">
                    <ScrollReveal direction="up">
                        <div className="swf-hdr">
                            <p className="swf-eyebrow-red">Our Checklist</p>
                            <h2 className="swf-title">SWIFT CSP Coverage Checklist</h2>
                            <p className="swf-desc">Complete coverage of SWIFT CSCF mandatory and key advisory controls</p>
                        </div>
                    </ScrollReveal>
                    <div className="swf-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="swf-checklist-item">
                                    <div className="swf-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="swf-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="swf-sec swf-bg-offwhite">
                <div className="swf-container">
                    <ScrollReveal direction="up">
                        <div className="swf-hdr">
                            <p className="swf-eyebrow-red">Why CyberAries</p>
                            <h2 className="swf-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="swf-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="swf-why-clean-card">
                                    <div className="swf-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="swf-why-clean-title">{w.title}</h3>
                                    <p className="swf-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="swf-diff swf-bg-white-grid">
                <div className="swf-grid-overlay" />
                <div className="swf-container">
                    <ScrollReveal direction="up">
                        <div className="swf-hdr">
                            <p className="swf-eyebrow-red">Our Difference</p>
                            <h2 className="swf-diff-title">THE <span className="swf-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="swf-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="swf-diff-card swf-diff-card--traditional">
                                <h3 className="swf-diff-heading">Generic Compliance Assessors</h3>
                                <ul className="swf-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="swf-diff-item">
                                            <span className="swf-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="swf-diff-card swf-diff-card--featured">
                                <h3 className="swf-diff-heading swf-diff-heading--ca">
                                    CyberAries SWIFT CSP Practice
                                </h3>
                                <ul className="swf-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="swf-diff-item">
                                            <span className="swf-diff-bullet">
                                                <CheckCircle size={18} className="swf-check-icon" />
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
            <section className="swf-sec swf-bg-white-grid">
                <div className="swf-grid-overlay" />
                <div className="swf-container">
                    <ScrollReveal direction="up">
                        <div className="swf-hdr">
                            <p className="swf-eyebrow-red">Our Deliverables</p>
                            <h2 className="swf-title">Comprehensive Deliverables</h2>
                            <p className="swf-desc">End to end documentation, controls, and reporting to ensure SWIFT compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="swf-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="swf-pillar-card">
                                    <span className="swf-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="swf-pillar-top">
                                        <div className="swf-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="swf-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="swf-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="swf-pillar-divider" />
                                    <ul className="swf-pillar-list">
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
            <section className="swf-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="swf-container">
                    <ScrollReveal direction="up">
                        <div className="swf-cta-content">
                            <h2 className="swf-cta-title">
                                <span className="swf-grad">Ready to Achieve SWIFT CSP CSCF Compliance?</span>
                            </h2>
                            <p className="swf-cta-description">
                                Protect your SWIFT infrastructure and maintain annual attestation compliance with our SWIFT CSP specialists.
                            </p>
                            <div className="swf-cta-buttons">
                                <Link to="/contact" className="swf-btn swf-cta-btn">
                                    <span>Request SWIFT Assessment</span>
                                    <ArrowRight size={18} className="swf-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default SWIFTAssessment;
