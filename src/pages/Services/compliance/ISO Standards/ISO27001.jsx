import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/iso-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Globe, Target, BookOpen, ArrowRight, Landmark } from 'lucide-react';
import './ISO27001.css';

const challenges = [
    { icon: <Shield size={24} />, title: 'Scope Definition Complexity', desc: 'Defining the ISMS scope accurately covering assets, processes, and locations without over scoping or under scoping is a foundational challenge that affects every downstream control.' },
    { icon: <AlertTriangle size={24} />, title: 'Risk Assessment & Treatment', desc: 'Conducting a systematic, evidence-based risk assessment covering all in-scope information assets and documenting treatment decisions to meet Annex A control requirements.' },
    { icon: <Users size={24} />, title: 'Stakeholder Buy In & Culture', desc: 'Achieving genuine top management commitment and embedding a security-conscious culture across all departments, not just the IT function.' },
    { icon: <FileText size={24} />, title: 'Documentation Overhead', desc: 'ISO 27001:2022 requires a structured documentation hierarchy — policies, procedures, records — that organizations often struggle to develop and maintain coherently.' },
    { icon: <Settings size={24} />, title: 'Control Implementation Gaps', desc: 'Mapping 93 Annex A controls to existing practices, identifying gaps, and implementing missing controls without disrupting ongoing business operations.' },
    { icon: <RefreshCw size={24} />, title: 'Continual Improvement', desc: 'Maintaining the ISMS post-certification through internal audits, management reviews, nonconformity management, and continual improvement cycles.' },
];

const components = [
    { icon: <Target size={22} />, title: 'ISMS Scope & Context', desc: 'Define organizational context, interested parties, ISMS scope, and security objectives.' },
    { icon: <AlertTriangle size={22} />, title: 'Risk Assessment Framework', desc: 'Establish systematic risk identification, scoring criteria, and treatment methodology.' },
    { icon: <Shield size={22} />, title: '93 Annex A Controls', desc: 'Assess and implement applicable controls across organizational, people, physical, and technological themes.' },
    { icon: <FileText size={22} />, title: 'Policy & Documentation Suite', desc: 'Develop the mandatory ISMS policy framework, procedures, and records.' },
    { icon: <Eye size={22} />, title: 'Internal Audit Programme', desc: 'Conduct formal internal audits to verify compliance and operational effectiveness.' },
    { icon: <Settings size={22} />, title: 'Control Implementation', desc: 'Deploy technical and administrative security controls identified in risk treatment.' },
    { icon: <Users size={22} />, title: 'Awareness & Training', desc: 'Deliver role based security training and build an organizational security culture.' },
    { icon: <BarChart3 size={22} />, title: 'Management Review', desc: 'Facilitate leadership reviews of ISMS metrics, audits, and improvement plans.' },
    { icon: <Award size={22} />, title: 'Certification Audit Support', desc: 'Provide full support during Stage 1 and Stage 2 certification assessments.' }
];

const approach = [
    { icon: <Search size={22} />, title: 'Gap Analysis', desc: 'Comprehensive baseline assessment of your current information security posture against ISO 27001:2022 requirements, identifying gaps across all clauses and Annex A controls.' },
    { icon: <Target size={22} />, title: 'ISMS Scope & Context', desc: 'Define organizational context, interested parties, ISMS boundaries, and information security objectives with documented scope statement.' },
    { icon: <AlertTriangle size={22} />, title: 'Risk Assessment', desc: 'Systematic risk assessment of all in-scope information assets with risk owner assignment, likelihood/impact scoring, and risk register development.' },
    { icon: <FileCheck size={22} />, title: 'Statement of Applicability', desc: 'Develop the SoA documenting applicability and implementation status of all 93 Annex A controls with justifications for exclusions.' },
    { icon: <BookOpen size={22} />, title: 'Policy & Procedure Development', desc: 'Create the complete ISMS documentation suite — Information Security Policy, Annex A control procedures, and all mandatory ISO 27001:2022 documented information.' },
    { icon: <Settings size={22} />, title: 'Control Implementation', desc: 'Hands-on implementation of technical, organizational, people, and physical controls identified in the risk treatment plan and SoA.' },
    { icon: <Users size={22} />, title: 'Awareness & Training', desc: 'Role-based security awareness training for all staff and specialized training for ISMS owners, internal auditors, and top management.' },
    { icon: <Eye size={22} />, title: 'Internal Audit', desc: 'Systematic internal audit of the entire ISMS with documented findings, nonconformity reports, and corrective action tracking.' },
    { icon: <BarChart3 size={22} />, title: 'Management Review', desc: 'Facilitate management review meetings with structured inputs, decisions, and documented outputs meeting ISO 27001:2022 Clause 9.3 requirements.' },
    { icon: <Award size={22} />, title: 'Certification Audit Support', desc: 'Stage 1 and Stage 2 certification audit support document review preparation, audit logistics, and on site auditor liaison.' },
];

const checklist = [
    'Gap analysis against all ISO 27001:2022 clauses and Annex A controls',
    'ISMS scope definition aligned with organizational and regulatory context',
    'Information asset register and asset classification scheme',
    'Risk assessment methodology and risk register with treatment decisions',
    'Statement of Applicability covering all 93 Annex A controls',
    'Complete ISMS documentation suite policies, procedures, records',
    'All 93 Annex A controls assessed and implementation gaps remediated',
    '11 new ISO 27001:2022 controls implementation (threat intelligence, cloud security, ICT readiness, etc.)',
    'Internal audit programme design and execution',
    'Nonconformity and corrective action management process',
    'Management review facilitation with documented outputs',
    'Certification body selection support and Stage 1/Stage 2 audit preparation',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'ISO 27001 Certified Practitioners', desc: 'Our team includes ISO 27001 Lead Implementers and Lead Auditors with hands-on certification experience across enterprise, BFSI, and government organizations.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'CERT In Empanelled', desc: 'Government-recognized cybersecurity firm delivering ISO 27001 implementations with proven regulatory and certification audit credentials.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'End-to-End Implementation', desc: 'From gap analysis through risk assessment, control implementation, internal audit, and certification audit support — we handle the entire ISMS journey.' },
    { icon: <FileText size={36} strokeWidth={1.5} />, title: 'Audit Ready Documentation', desc: 'We create structured, compliant, and audit ready policies, procedures, and evidence packs tailored to your organization.' },
];

const trad = [
    'Template-based ISMS documentation not calibrated to your business context.',
    'Risk assessment conducted as a paper exercise without operational input.',
    'Controls implemented on paper without technical verification or testing.',
    'Internal audits conducted by staff not trained as ISO 27001 auditors.',
    'Certification audit surprises due to inadequate Stage 1 preparation.',
    'ISMS abandoned post-certification with no continual improvement process.',
];
const ca = [
    'ISMS documentation tailored to your specific business, sector, and risk landscape.',
    'Risk assessments grounded in operational reality with asset owner involvement.',
    'Controls technically implemented and tested with documented evidence.',
    'Internal audits conducted by qualified ISO 27001 Lead Auditors.',
    'Structured pre audit readiness review eliminating certification surprises.',
    'Post-certification continual improvement programme keeping your ISMS alive.',
];

const deliverables = [
    { icon: <FileText size={28} />, title: 'ISMS Documentation', items: ['Information Security Policy & ISMS Manual', 'Risk Assessment Report & Risk Register', 'Statement of Applicability (SoA)', 'Complete Annex A Procedure Suite'] },
    { icon: <Settings size={28} />, title: 'Technical Controls', items: ['Access Control & IAM Implementation', 'Asset Classification & Handling', 'Cryptography & Key Management Controls', 'Network & Endpoint Security Controls'] },
    { icon: <Eye size={28} />, title: 'Audit & Review', items: ['Internal Audit Programme & Reports', 'Nonconformity & Corrective Action Register', 'Management Review Documentation', 'KPI & Metrics Dashboard'] },
    { icon: <Award size={28} />, title: 'Certification Support', items: ['Certification Body Selection Guidance', 'Stage 1 Audit Preparation Package', 'Stage 2 Audit Support & Liaison', 'Surveillance Audit Readiness Plan'] },
];

const ISO27001 = () => {
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
        <div className="iso27-page">
            {/* HERO SECTION */}
            <section className="iso27-hero" ref={heroRef}>
                <motion.div
                    className="iso27-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="iso27-hero-overlay" />
                <div className="iso27-hero-glow" />

                {/* Floating particles */}
                <div className="iso27-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="iso27-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="iso27-container">
                    <div className="iso27-hero-inner">
                        <div className="iso27-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="iso27-hero-badge">
                  <Landmark size={14} className="iso27-badge-icon" />
                  <span className="iso27-badge-text">
                    COMPLIANCE <span className="iso27-badge-divider">/</span> ISO STANDARDS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="iso27-hero-title">
                                    <span className="iso27-grad">ISO 27001 ISMS CERTIFICATION</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="iso27-hero-description">
                                    ISO/IEC 27001:2022 is the <strong>global benchmark for Information Security Management Systems</strong>. Achieving certification demonstrates to customers, regulators, and partners that your organization systematically manages information security risks covering people, processes, and technology.
                                </p>
                                <p className="iso27-hero-description">
                                    Our ISO 27001 practice delivers <strong>end to end implementation and certification support</strong> from gap analysis through ISMS design, risk assessment, control implementation, internal audit, and Stage 1/Stage 2 certification audit preparation.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="iso27-hero-actions">
                                    <button className="iso27-btn iso27-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a Gap Analysis
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="iso27-sec iso27-bg-offwhite">
                <div className="iso27-container">
                    <ScrollReveal direction="up">
                        <div className="iso27-hdr">
                            <p className="iso27-eyebrow-red">Our Challenges</p>
                            <h2 className="iso27-title">ISO 27001 Implementation Challenges</h2>
                            <p className="iso27-desc">Organizations across industries face common challenges when implementing and certifying their ISMS against ISO 27001:2022</p>
                        </div>
                    </ScrollReveal>
                    <div className="iso27-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="iso27-challenge-card">
                                    <div className="iso27-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="iso27-ch-content">
                                        <div className="iso27-ch-header">
                                            <div className="iso27-ch-icon-box">{c.icon}</div>
                                            <h3 className="iso27-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="iso27-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="iso27-sec iso27-bg-white-grid">
                <div className="iso27-grid-overlay" />
                <div className="iso27-container">
                    <ScrollReveal direction="up">
                        <div className="iso27-hdr">
                            <p className="iso27-eyebrow-red">Our Framework</p>
                            <h2 className="iso27-title">Our ISO 27001 Implementation Framework</h2>
                            <p className="iso27-desc">A comprehensive 9-step approach covering all clauses and Annex A control domains.</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–5 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="iso27-fw-row">
                            {components.slice(0, 5).map((step, index) => (
                                <div className="iso27-fw-card" key={index}>
                                    <div className="iso27-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 4 && <span className="iso27-fw-connector" />}
                                    <div className="iso27-fw-icon">{step.icon}</div>
                                    <h3 className="iso27-fw-title">{step.title}</h3>
                                    <p className="iso27-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 6–9 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="iso27-fw-row-2">
                            {components.slice(5, 9).map((step, index) => (
                                <div className="iso27-fw-card" key={index + 5}>
                                    <div className="iso27-fw-badge">{String(index + 6).padStart(2, '0')}</div>
                                    {index < 3 && <span className="iso27-fw-connector" />}
                                    <div className="iso27-fw-icon">{step.icon}</div>
                                    <h3 className="iso27-fw-title">{step.title}</h3>
                                    <p className="iso27-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="iso27-sec iso27-bg-offwhite">
                <div className="iso27-container">
                    <ScrollReveal direction="up">
                        <div className="iso27-hdr">
                            <p className="iso27-eyebrow-red">Our Approach</p>
                            <h2 className="iso27-title">Our Implementation Methodology</h2>
                            <p className="iso27-desc">A proven 10-step methodology from baseline gap analysis through certification audit success</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="iso27-methodology-timeline">
                        <div className="iso27-methodology-line" />
                        <div className="iso27-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`iso27-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="iso27-methodology-card">
                                            <div className="iso27-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="iso27-methodology-card-header">
                                                <div className="iso27-methodology-card-icon">{a.icon}</div>
                                                <h3 className="iso27-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="iso27-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="iso27-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="iso27-sec iso27-bg-white-grid">
                <div className="iso27-grid-overlay" />
                <div className="iso27-container">
                    <ScrollReveal direction="up">
                        <div className="iso27-hdr">
                            <p className="iso27-eyebrow-red">Our Checklist</p>
                            <h2 className="iso27-title">ISO 27001 Coverage Checklist</h2>
                            <p className="iso27-desc">Complete coverage of ISO 27001:2022 requirements across all clauses and Annex A control domains.</p>
                        </div>
                    </ScrollReveal>
                    <div className="iso27-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="iso27-checklist-item">
                                    <div className="iso27-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="iso27-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="iso27-sec iso27-bg-offwhite">
                <div className="iso27-container">
                    <ScrollReveal direction="up">
                        <div className="iso27-hdr">
                            <p className="iso27-eyebrow-red">Why CyberAries</p>
                            <h2 className="iso27-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="iso27-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="iso27-why-clean-card">
                                    <div className="iso27-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="iso27-why-clean-title">{w.title}</h3>
                                    <p className="iso27-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="iso27-diff iso27-bg-white-grid">
                <div className="iso27-grid-overlay" />
                <div className="iso27-container">
                    <ScrollReveal direction="up">
                        <div className="iso27-hdr">
                            <p className="iso27-eyebrow-red">Our Difference</p>
                            <h2 className="iso27-diff-title">THE <span className="iso27-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="iso27-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="iso27-diff-card iso27-diff-card--traditional">
                                <h3 className="iso27-diff-heading">Traditional Compliance Consulting</h3>
                                <ul className="iso27-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="iso27-diff-item">
                                            <span className="iso27-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="iso27-diff-card iso27-diff-card--featured">
                                <h3 className="iso27-diff-heading iso27-diff-heading--ca">
                                    CYBERARIES ISO 27001 Practice
                                </h3>
                                <ul className="iso27-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="iso27-diff-item">
                                            <span className="iso27-diff-bullet">
                                                <CheckCircle size={18} className="iso27-check-icon" />
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
            <section className="iso27-sec iso27-bg-white-grid">
                <div className="iso27-grid-overlay" />
                <div className="iso27-container">
                    <ScrollReveal direction="up">
                        <div className="iso27-hdr">
                            <p className="iso27-eyebrow-red">Our Deliverables</p>
                            <h2 className="iso27-title">Comprehensive Deliverables</h2>
                            <p className="iso27-desc">End to end documentation, controls, and reporting to ensure ISO 27001 compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="iso27-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="iso27-pillar-card">
                                    <span className="iso27-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="iso27-pillar-top">
                                        <div className="iso27-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="iso27-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="iso27-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="iso27-pillar-divider" />
                                    <ul className="iso27-pillar-list">
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
            <section className="iso27-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="iso27-container">
                    <ScrollReveal direction="up">
                        <div className="iso27-cta-content">
                            <h2 className="iso27-cta-title">
                                <span className="iso27-grad">Ready to Achieve ISO 27001 Compliance?</span>
                            </h2>
                            <p className="iso27-cta-description">
                                Partner with certified ISO 27001 implementers to build a compliant, effective ISMS and achieve certification with confidence. Let's prepare your organization for certification success.
                            </p>
                            <div className="iso27-cta-buttons">
                                <Link to="/contact" className="iso27-btn iso27-cta-btn">
                                    <span>Request ISO 27001 Assessment</span>
                                    <ArrowRight size={18} className="iso27-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};
export default ISO27001;
