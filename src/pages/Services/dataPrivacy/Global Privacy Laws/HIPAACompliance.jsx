import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/global-privacy-laws-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, Users, Award, Database, Eye, FileCheck, Target, ArrowRight, Landmark } from 'lucide-react';
import './HIPAACompliance.css';

const challenges = [
    { icon: <Target size={24} />, title: 'PHI Identification & Scoping', desc: 'Identifying all Protected Health Information (PHI) — in electronic, paper, and oral forms — across clinical, administrative, and business systems to accurately scope HIPAA compliance obligations.' },
    { icon: <Settings size={24} />, title: 'Security Rule Technical Safeguards', desc: 'Implementing the Security Rule\'s required and addressable technical safeguards — access controls, audit controls, integrity controls, and transmission security — across all electronic PHI environments.' },
    { icon: <Users size={24} />, title: 'Business Associate Management', desc: 'Identifying all Business Associates with access to PHI, executing compliant Business Associate Agreements (BAAs), and managing their downstream compliance obligations effectively.' },
    { icon: <Eye size={24} />, title: 'Risk Analysis & Risk Management', desc: 'Conducting a thorough, documented HIPAA Security Rule risk analysis of all ePHI threats and vulnerabilities — the foundational compliance requirement OCR examines first in any audit.' },
    { icon: <Lock size={24} />, title: 'Privacy Rule Compliance', desc: 'Implementing the HIPAA Privacy Rule — minimum necessary standard, patient rights, notice of privacy practices, treatment/payment/operations exceptions, and valid authorizations.' },
    { icon: <AlertTriangle size={24} />, title: 'Breach Notification Compliance', desc: 'Managing HIPAA Breach Notification Rule obligations breach risk assessment, notification to affected individuals within 60 days, HHS reporting, and media notice for large breaches.' },
];

const framework = [
    { icon: <Search size={22} />, title: 'HIPAA Security Risk Analysis', desc: 'Comprehensive, documented risk analysis of all ePHI across the organization identifying threats, vulnerabilities, likelihood, and impact as required by 45 CFR §164.308(a)(1).' },
    { icon: <Lock size={22} />, title: 'Security Rule Safeguards Implementation', desc: 'Administrative, physical, and technical safeguards across all required and addressable Security Rule specifications, with documented implementation decisions for addressable specs.' },
    { icon: <FileText size={22} />, title: 'Privacy Rule Compliance Programme', desc: 'Notice of Privacy Practices, minimum necessary policies, patient rights procedures, workforce training, and Privacy Officer designation meeting Privacy Rule requirements.' },
    { icon: <Users size={22} />, title: 'Business Associate Programme', desc: 'BA identification, risk assessment, BAA execution, and ongoing management — plus sub-contractor BAAs — creating a compliant BA management programme.' },
    { icon: <AlertTriangle size={22} />, title: 'Breach Notification Programme', desc: 'Breach detection, risk assessment using the four-factor test, notification procedures for individuals, HHS, media (where applicable), and post-breach remediation.' },
    { icon: <Award size={22} />, title: 'OCR Audit Readiness', desc: 'Preparation for OCR desk audits and on site investigations building the documentation portfolio, policies, risk analysis, and workforce records OCR requests.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'HIPAA Gap Assessment', desc: 'Baseline assessment against all HIPAA Security, Privacy, and Breach Notification Rule requirements — identifying gaps in safeguards, documentation, policies, and workforce training.' },
    { icon: <Database size={22} />, title: 'ePHI Discovery & Data Inventory', desc: 'Technical discovery of all ePHI across servers, workstations, cloud storage, SaaS applications, backup media, and mobile devices scoping ePHI environments accurately.' },
    { icon: <Eye size={22} />, title: 'Security Risk Analysis', desc: 'Conduct and document the HIPAA required Security Risk Analysis cataloguing all ePHI threats and vulnerabilities, assess likelihood and impact, and document risk scoring.' },
    { icon: <Settings size={22} />, title: 'Risk Management Plan', desc: 'Develop a documented Risk Management Plan with prioritised remediation of identified risks, responsible owners, target completion dates, and residual risk acceptance.' },
    { icon: <Lock size={22} />, title: 'Security Rule Safeguards', desc: 'Implement all required Security Rule safeguards and document implementation decisions for addressable specifications — across administrative, physical, and technical safeguard categories.' },
    { icon: <FileText size={22} />, title: 'Privacy Rule Implementation', desc: 'Develop Notice of Privacy Practices, minimum necessary policies, patient rights request procedures, with Privacy Officer designation and workforce privacy training.' },
    { icon: <Users size={22} />, title: 'Business Associate Management', desc: 'Identify all BAs, execute BAAs with required elements, assess BA security posture, and establish BA monitoring procedures and incident escalation paths.' },
    { icon: <AlertTriangle size={22} />, title: 'Breach Notification Programme', desc: 'Develop breach identification, four-factor risk assessment, and notification procedures — templates for individual notification, HHS annual report, and media notice for breaches >500.' },
    { icon: <FileCheck size={22} />, title: 'Policy & Procedure Suite', desc: 'Comprehensive HIPAA policy and procedure library covering all Privacy and Security Rule topics, workforce code of conduct, and sanctions policy.' },
    { icon: <Award size={22} />, title: 'OCR Audit Documentation & Training', desc: 'Build the OCR audit documentation portfolio and conduct workforce HIPAA training creating a compliance ready evidence base for desk audits or on site investigations.' },
];

const checklist = [
    'HIPAA gap assessment covering Security, Privacy, and Breach Notification Rules',
    'ePHI discovery and accurate scoping of covered electronic PHI environments',
    'Documented Security Risk Analysis (SRA) per 45 CFR §164.308(a)(1)',
    'Risk Management Plan with remediation tracking and residual risk documentation',
    'Administrative safeguards — workforce training, access management, security officer',
    'Physical safeguards facility access controls, workstation controls, device disposal',
    'Technical safeguards access controls, audit logs, encryption, transmission security',
    'HIPAA Privacy Rule Notice of Privacy Practices, minimum necessary, patient rights',
    'Business Associate Agreements with all BAs and BA sub-contractors',
    'Breach Notification programme detection, four factor assessment, notification timeline',
    'HIPAA policy and procedure suite with sanctions policy',
    'Annual HIPAA workforce training and HIPAA Security Risk Analysis update',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'HIPAA Compliance Veterans', desc: 'Our team has guided covered entities and business associates through HIPAA Security Rule risk analyses, OCR investigations, and comprehensive compliance programmes across healthcare verticals.' },
    { icon: <Eye size={36} strokeWidth={1.5} />, title: 'OCR Audit Ready Documentation', desc: 'We build the documentation portfolio OCR expects — risk analysis, risk management plan, policy suite, training records — so you\'re prepared for any OCR desk audit or investigation.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Technical HIPAA Security Expertise', desc: 'We implement technical safeguards at the infrastructure level — encryption, access controls, audit logging, and transmission security — not just policy documentation.' },
];

const trad = [
    'Risk analysis conducted as a checklist exercise without documented threat and vulnerability analysis.',
    'Security safeguards implemented generically without addressable specification documentation.',
    'BAAs executed from templates without reviewing actual BA security postures.',
    'Breach notification procedure defined without testing the four factor risk assessment process.',
    'Workforce training limited to annual videos without role specific HIPAA responsibilities.',
    'OCR audit readiness never assessed documentation gaps discovered only during investigation.',
];
const ca = [
    'Comprehensive SRA with documented threats, vulnerabilities, likelihood, impact, and risk scores.',
    'All Security Rule safeguards implemented with documented decisions for addressable specs.',
    'BAAs reviewed for required elements and BA security posture assessed before execution.',
    'Breach notification programme tested with tabletop exercises and four factor assessment practice.',
    'Role specific HIPAA training for clinical staff, IT, privacy officers, and business teams.',
    'OCR audit documentation portfolio built proactively ready for any investigation.',
];

const deliverables = [
    { icon: <Search size={28} />, title: 'Risk Analysis & Assessment', items: ['HIPAA Security Risk Analysis (SRA) Report', 'ePHI Discovery & Environment Mapping', 'Risk Management Plan & Remediation Tracker', 'HIPAA Gap Assessment Report'] },
    { icon: <Lock size={28} />, title: 'Security Safeguards', items: ['Administrative Safeguards Implementation', 'Physical Safeguards Review & Controls', 'Technical Safeguards Configuration Evidence', 'Encryption & Access Control Documentation'] },
    { icon: <FileText size={28} />, title: 'Privacy & Policies', items: ['Notice of Privacy Practices (NPP)', 'HIPAA Policy & Procedure Suite', 'Minimum Necessary & Patient Rights Procedures', 'Sanctions Policy & Workforce Code of Conduct'] },
    { icon: <Award size={28} />, title: 'Compliance Programme', items: ['Business Associate Agreement Programme', 'Breach Notification Playbook & Templates', 'Annual Workforce HIPAA Training Programme', 'OCR Audit Documentation Portfolio'] },
];

const HIPAACompliance = () => {
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
        <div className="hpa-page">
            {/* HERO SECTION */}
            <section className="hpa-hero" ref={heroRef}>
                <motion.div
                    className="hpa-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="hpa-hero-overlay" />
                <div className="hpa-hero-glow" />

                {/* Floating particles */}
                <div className="hpa-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="hpa-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="hpa-container">
                    <div className="hpa-hero-inner">
                        <div className="hpa-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="hpa-hero-badge">
                  <Landmark size={14} className="hpa-badge-icon" />
                  <span className="hpa-badge-text">
                    DATA PRIVACY <span className="hpa-badge-divider">/</span> GLOBAL PRIVACY LAWS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="hpa-hero-title">
                                    <span className="hpa-grad">HIPAA COMPLIANCE PROGRAMME</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="hpa-hero-description">
                                    Ensure total protection for sensitive health data. We provide end to end support for covered entities and business associates to navigate complex HIPAA mandates and avoid costly OCR settlements. By conducting thorough Security Risk Analyses and implementing robust Privacy Rule safeguards, we help you manage Business Associate agreements and breach notification protocols with precision.
                                </p>
                                <p className="hpa-hero-description">
                                    Our expert led approach delivers an audit ready documentation portfolio, ensuring your organization maintains regulatory adherence while building patient and partner trust.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="hpa-hero-actions">
                                    <button className="hpa-btn hpa-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a HIPAA Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="hpa-sec hpa-bg-offwhite">
                <div className="hpa-container">
                    <ScrollReveal direction="up">
                        <div className="hpa-hdr">
                            <p className="hpa-eyebrow-red">Our Challenges</p>
                            <h2 className="hpa-title">HIPAA Compliance Challenges</h2>
                            <p className="hpa-desc">Covered entities and business associates face significant challenges across the Security, Privacy, and Breach Notification Rules</p>
                        </div>
                    </ScrollReveal>
                    <div className="hpa-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="hpa-challenge-card">
                                    <div className="hpa-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="hpa-ch-content">
                                        <div className="hpa-ch-header">
                                            <div className="hpa-ch-icon-box">{c.icon}</div>
                                            <h3 className="hpa-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="hpa-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="hpa-sec hpa-bg-white-grid">
                <div className="hpa-grid-overlay" />
                <div className="hpa-container">
                    <ScrollReveal direction="up">
                        <div className="hpa-hdr">
                            <p className="hpa-eyebrow-red">Our Framework</p>
                            <h2 className="hpa-title">Our HIPAA Compliance Framework</h2>
                            <p className="hpa-desc">Comprehensive HIPAA compliance covering the Security, Privacy, and Breach Notification Rules with OCR audit ready documentation</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="hpa-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="hpa-fw-card" key={index}>
                                    <div className="hpa-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="hpa-fw-connector" />}
                                    <div className="hpa-fw-icon">{step.icon}</div>
                                    <h3 className="hpa-fw-title">{step.title}</h3>
                                    <p className="hpa-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="hpa-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="hpa-fw-card" key={index + 3}>
                                    <div className="hpa-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="hpa-fw-connector" />}
                                    <div className="hpa-fw-icon">{step.icon}</div>
                                    <h3 className="hpa-fw-title">{step.title}</h3>
                                    <p className="hpa-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="hpa-sec hpa-bg-offwhite">
                <div className="hpa-container">
                    <ScrollReveal direction="up">
                        <div className="hpa-hdr">
                            <p className="hpa-eyebrow-red">Our Approach</p>
                            <h2 className="hpa-title">Our HIPAA Methodology</h2>
                            <p className="hpa-desc">A 10-step HIPAA compliance methodology from risk analysis through OCR audit documentation and annual programme maintenance</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="hpa-methodology-timeline">
                        <div className="hpa-methodology-line" />
                        <div className="hpa-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`hpa-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="hpa-methodology-card">
                                            <div className="hpa-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="hpa-methodology-card-header">
                                                <div className="hpa-methodology-card-icon">{a.icon}</div>
                                                <h3 className="hpa-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="hpa-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="hpa-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="hpa-sec hpa-bg-white-grid">
                <div className="hpa-grid-overlay" />
                <div className="hpa-container">
                    <ScrollReveal direction="up">
                        <div className="hpa-hdr">
                            <p className="hpa-eyebrow-red">Our Checklist</p>
                            <h2 className="hpa-title">HIPAA Coverage Checklist</h2>
                            <p className="hpa-desc">Complete coverage of all HIPAA Security, Privacy, and Breach Notification Rule obligations</p>
                        </div>
                    </ScrollReveal>
                    <div className="hpa-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="hpa-checklist-item">
                                    <div className="hpa-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="hpa-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="hpa-sec hpa-bg-offwhite">
                <div className="hpa-container">
                    <ScrollReveal direction="up">
                        <div className="hpa-hdr">
                            <p className="hpa-eyebrow-red">Why CyberAries</p>
                            <h2 className="hpa-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="hpa-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="hpa-why-clean-card">
                                    <div className="hpa-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="hpa-why-clean-title">{w.title}</h3>
                                    <p className="hpa-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="hpa-diff hpa-bg-white-grid">
                <div className="hpa-grid-overlay" />
                <div className="hpa-container">
                    <ScrollReveal direction="up">
                        <div className="hpa-hdr">
                            <p className="hpa-eyebrow-red">Our Difference</p>
                            <h2 className="hpa-diff-title">THE <span className="hpa-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="hpa-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="hpa-diff-card hpa-diff-card--traditional">
                                <h3 className="hpa-diff-heading">Generic HIPAA Consultants</h3>
                                <ul className="hpa-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="hpa-diff-item">
                                            <span className="hpa-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="hpa-diff-card hpa-diff-card--featured">
                                <h3 className="hpa-diff-heading hpa-diff-heading--ca">
                                    CyberAries HIPAA Practice
                                </h3>
                                <ul className="hpa-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="hpa-diff-item">
                                            <span className="hpa-diff-bullet">
                                                <CheckCircle size={18} className="hpa-check-icon" />
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
            <section className="hpa-sec hpa-bg-white-grid">
                <div className="hpa-grid-overlay" />
                <div className="hpa-container">
                    <ScrollReveal direction="up">
                        <div className="hpa-hdr">
                            <p className="hpa-eyebrow-red">Our Deliverables</p>
                            <h2 className="hpa-title">Comprehensive Deliverables</h2>
                            <p className="hpa-desc">End to end documentation, controls, and reporting to ensure HIPAA compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="hpa-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="hpa-pillar-card">
                                    <span className="hpa-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="hpa-pillar-top">
                                        <div className="hpa-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="hpa-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="hpa-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="hpa-pillar-divider" />
                                    <ul className="hpa-pillar-list">
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
            <section className="hpa-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="hpa-container">
                    <ScrollReveal direction="up">
                        <div className="hpa-cta-content">
                            <h2 className="hpa-cta-title">
                                <span className="hpa-grad">Ready to Achieve HIPAA Compliance & OCR Readiness?</span>
                            </h2>
                            <p className="hpa-cta-description">
                                Protect patient health information, satisfy OCR requirements, and build a defensible HIPAA compliance programme with our healthcare privacy specialists.
                            </p>
                            <div className="hpa-cta-buttons">
                                <Link to="/contact" className="hpa-btn hpa-cta-btn">
                                    <span>Request HIPAA Assessment</span>
                                    <ArrowRight size={18} className="hpa-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default HIPAACompliance;
