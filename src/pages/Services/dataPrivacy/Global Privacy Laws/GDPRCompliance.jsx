import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/global-privacy-laws-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Users, Award, Globe, Database, Eye, Target, ArrowRight, Landmark, FileCheck } from 'lucide-react';
import './GDPRCompliance.css';

const challenges = [
    { icon: <Target size={24} />, title: 'Establishing Lawful Basis for Processing', desc: 'Identifying and documenting a valid lawful basis consent, legitimate interest, contract, legal obligation for every personal data processing activity across the organization.' },
    { icon: <Database size={24} />, title: 'Personal Data Mapping & Article 30 Records', desc: 'Building and maintaining a comprehensive Record of Processing Activities (ROPA) covering all data flows, retention periods, and third party transfers as mandated by Article 30.' },
    { icon: <Users size={24} />, title: 'Data Subject Rights Fulfilment', desc: 'Operationalizing the eight GDPR rights — access, rectification, erasure, restriction, portability, objection — within statutory response timelines across complex organizational systems.' },
    { icon: <Globe size={24} />, title: 'International Data Transfers', desc: 'Ensuring lawful cross-border data transfers via SCCs, adequacy decisions, BCRs, or derogations — a complex area post-Schrems II with ongoing regulatory developments.' },
    { icon: <AlertTriangle size={24} />, title: 'Data Breach Management & 72-Hour Notification', desc: 'Implementing breach detection, internal escalation, supervisory authority notification within 72 hours, and data subject communication processes meeting GDPR requirements.' },
    { icon: <Eye size={24} />, title: 'Data Protection Impact Assessments (DPIAs)', desc: 'Conducting mandatory DPIAs for high-risk processing activities — systematic profiling, large-scale sensitive data, public monitoring — with documented risk mitigation outcomes.' },
];

const framework = [
    { icon: <Search size={22} />, title: 'GDPR Readiness Assessment', desc: 'Comprehensive gap assessment against all GDPR obligations — lawful basis, data subject rights, controller/processor obligations, DPO requirements, and third-country transfer mechanisms.' },
    { icon: <Database size={22} />, title: 'Data Mapping & ROPA Development', desc: 'Personal data inventory and Article 30 Record of Processing Activities covering all processing purposes, data categories, retention schedules, and cross border transfer safeguards.' },
    { icon: <FileText size={22} />, title: 'Privacy Governance & Policy Suite', desc: 'Privacy policy architecture, consent mechanisms, privacy notices, data subject request procedures, and internal governance documentation meeting GDPR accountability requirements.' },
    { icon: <Lock size={22} />, title: 'Technical & Organisational Measures', desc: 'Data minimization, pseudonymisation, encryption, access control, and storage limitation controls the technical and organisational measures required by GDPR Article 32.' },
    { icon: <Eye size={22} />, title: 'DPIA & Privacy Risk Management', desc: 'Data Protection Impact Assessments for high-risk processing, privacy risk registers, and risk-based prioritisation of remediation aligned with the Article 35 DPIA framework.' },
    { icon: <Globe size={22} />, title: 'Third-Party & Transfer Management', desc: 'Data Processing Agreements, international transfer impact assessments, Standard Contractual Clauses, and ongoing vendor privacy compliance monitoring.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'GDPR Gap Assessment', desc: 'Baseline review against all GDPR obligations identifying processing activities without lawful basis, missing data subject rights procedures, and documentation deficiencies.' },
    { icon: <Database size={22} />, title: 'Personal Data Discovery & Mapping', desc: 'Technical and process-based discovery of all personal data — in databases, files, SaaS platforms, and on-premises systems — mapped to processing purposes and data flows.' },
    { icon: <FileText size={22} />, title: 'Article 30 ROPA Construction', desc: 'Build the Record of Processing Activities covering all processing operations, controller/processor roles, data categories, retention periods, and transfer safeguards.' },
    { icon: <Globe size={22} />, title: 'Lawful Basis & Consent Framework', desc: 'Document and validate lawful basis for all processing activities; design consent management, preference centres, and withdrawal mechanisms where consent is the basis.' },
    { icon: <Users size={22} />, title: 'Data Subject Rights Operationalization', desc: 'Design and implement DSR intake processes, identity verification, fulfilment workflows, and response tracking meeting Article 12-22 timelines.' },
    { icon: <Lock size={22} />, title: 'Technical Controls Implementation', desc: 'Implement privacy-by-design controls — encryption, pseudonymisation, data minimization, access restrictions, and retention enforcement — throughout IT systems.' },
    { icon: <AlertTriangle size={22} />, title: 'DPIA Execution', desc: 'Conduct DPIAs for high risk processing activities with documented risk assessments, mitigation measures, and DPO/supervisory authority consultation where required.' },
    { icon: <Globe size={22} />, title: 'International Transfer Mechanisms', desc: 'Review and implement appropriate safeguards for cross-border data transfers — SCCs, transfer impact assessments, BCRs, adequacy reliance, or derogations.' },
    { icon: <FileCheck size={22} />, title: 'Breach Response Programme', desc: 'Develop data breach response playbook — detection, classification, 72-hour notification decision tree, Data Subject communication templates, and post-incident review.' },
    { icon: <Award size={22} />, title: 'DPO Support & Ongoing Compliance', desc: 'DPO as a Service or DPO advisory, supervisory authority liaison support, and annual GDPR compliance review to maintain accountability documentation.' },
];

const checklist = [
    'GDPR gap assessment against all 11 chapters and 99 articles',
    'Personal data inventory and Article 30 Record of Processing Activities',
    'Lawful basis documentation for all processing activities',
    'Privacy notices and consent management implementation',
    'Data subject rights procedures access, erasure, portability, rectification',
    'Technical controls — encryption, pseudonymisation, access management',
    'Data Protection Impact Assessments for high risk processing',
    'Data Processing Agreements with all processors and sub-processors',
    'International data transfer safeguards SCCs, transfer impact assessments',
    '72-hour breach notification procedure and data subject communication plan',
    'Data Protection Officer appointment or advisory where required',
    'Annual GDPR compliance review and accountability programme',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'GDPR Specialists with DPA Experience', desc: 'Our GDPR advisors have supported organizations across EU/EEA and third country operations, with direct experience responding to supervisory authority inquiries.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'End to End Accountability Programme', desc: 'From data mapping and ROPA through technical controls, DPIAs, DSR workflows, and DPO support we deliver a complete, documented GDPR accountability framework.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Practical, Business Aligned Compliance', desc: 'We balance regulatory rigour with business pragmatism — risk-based prioritisation, scalable processes, and privacy-by-design embedded into your operations.' },
];

const trad = [
    'Privacy policies drafted without reviewing actual data processing activities.',
    'Lawful basis documented for some processing but not systematically across the organisation.',
    'Data subject rights procedures exist on paper but not operationally tested.',
    'DPIAs conducted as a formality without genuine risk assessment or mitigation.',
    'International transfers not reviewed post-Schrems II with no transfer impact assessment.',
    'Breach response relies on improvisation rather than a tested documented procedure.',
];
const ca = [
    'Privacy policies derived directly from documented processing activities and ROPA.',
    'Lawful basis systematically identified, documented, and validated across all processing.',
    'DSR workflows operationally tested end to end with identity verification and audit trails.',
    'DPIAs reflecting genuine risk analysis with documented mitigation and DPO review.',
    'All international transfers reviewed with SCCs or alternative safeguards implemented.',
    'Breach response programme tested via tabletop exercises with a 72-hour notification checklist.',
];

const deliverables = [
    { icon: <Database size={28} />, title: 'Assessment & Mapping', items: ['GDPR Gap Assessment Report', 'Personal Data Inventory & Discovery', 'Article 30 Record of Processing Activities', 'Data Flow Diagrams & Third Party Register'] },
    { icon: <FileText size={28} />, title: 'Governance & Documentation', items: ['Privacy Policy & Notice Framework', 'Lawful Basis & Consent Management', 'Data Subject Rights Procedures', 'Data Processing Agreement Templates'] },
    { icon: <Lock size={28} />, title: 'Technical Controls', items: ['Privacy-by-Design Control Implementation', 'Encryption & Pseudonymisation Controls', 'Retention Management & Data Minimization', 'Access Control & Privileged Data Review'] },
    { icon: <Award size={28} />, title: 'Ongoing Compliance', items: ['DPIA Reports & Risk Register', 'Breach Response Playbook & Templates', 'DPO as a Service or DPO Advisory', 'Annual GDPR Compliance Review Programme'] },
];

const GDPRCompliance = () => {
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
        <div className="gdpr-page">
            {/* HERO SECTION */}
            <section className="gdpr-hero" ref={heroRef}>
                <motion.div
                    className="gdpr-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="gdpr-hero-overlay" />
                <div className="gdpr-hero-glow" />

                {/* Floating particles */}
                <div className="gdpr-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="gdpr-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="gdpr-container">
                    <div className="gdpr-hero-inner">
                        <div className="gdpr-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="gdpr-hero-badge">
                  <Landmark size={14} className="gdpr-badge-icon" />
                  <span className="gdpr-badge-text">
                    DATA PRIVACY <span className="gdpr-badge-divider">/</span> GLOBAL PRIVACY LAWS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="gdpr-hero-title">
                                    <span className="gdpr-grad">GDPR COMPLIANCE & DATA PROTECTION</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="gdpr-hero-description">
                                    Navigate the world’s strictest data laws with ease. We manage your end to end compliance journey to safeguard your organization and your customers. By implementing streamlined DSR workflows, secure international transfer mechanisms, and robust technical controls, we ensure your business stays ahead of complex regulatory shifts.
                                </p>
                                <p className="gdpr-hero-description">
                                    Our expert led approach builds a foundation of digital trust, protecting your global reputation while maintaining operational efficiency and mitigating the risk of heavy non compliance penalties.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="gdpr-hero-actions">
                                    <button className="gdpr-btn gdpr-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a GDPR Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="gdpr-sec gdpr-bg-offwhite">
                <div className="gdpr-container">
                    <ScrollReveal direction="up">
                        <div className="gdpr-hdr">
                            <p className="gdpr-eyebrow-red">Our Challenges</p>
                            <h2 className="gdpr-title">GDPR Compliance Challenges</h2>
                            <p className="gdpr-desc">Organizations handling personal data face complex technical and operational challenges achieving and maintaining GDPR compliance</p>
                        </div>
                    </ScrollReveal>
                    <div className="gdpr-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="gdpr-challenge-card">
                                    <div className="gdpr-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="gdpr-ch-content">
                                        <div className="gdpr-ch-header">
                                            <div className="gdpr-ch-icon-box">{c.icon}</div>
                                            <h3 className="gdpr-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="gdpr-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="gdpr-sec gdpr-bg-white-grid">
                <div className="gdpr-grid-overlay" />
                <div className="gdpr-container">
                    <ScrollReveal direction="up">
                        <div className="gdpr-hdr">
                            <p className="gdpr-eyebrow-red">Our Framework</p>
                            <h2 className="gdpr-title">Our GDPR Compliance Framework</h2>
                            <p className="gdpr-desc">Comprehensive GDPR compliance framework covering lawful basis, data subject rights, accountability, and security measures</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="gdpr-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="gdpr-fw-card" key={index}>
                                    <div className="gdpr-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="gdpr-fw-connector" />}
                                    <div className="gdpr-fw-icon">{step.icon}</div>
                                    <h3 className="gdpr-fw-title">{step.title}</h3>
                                    <p className="gdpr-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="gdpr-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="gdpr-fw-card" key={index + 3}>
                                    <div className="gdpr-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="gdpr-fw-connector" />}
                                    <div className="gdpr-fw-icon">{step.icon}</div>
                                    <h3 className="gdpr-fw-title">{step.title}</h3>
                                    <p className="gdpr-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="gdpr-sec gdpr-bg-offwhite">
                <div className="gdpr-container">
                    <ScrollReveal direction="up">
                        <div className="gdpr-hdr">
                            <p className="gdpr-eyebrow-red">Our Approach</p>
                            <h2 className="gdpr-title">Our Compliance Methodology</h2>
                            <p className="gdpr-desc">A proven 10-step GDPR compliance methodology from baseline gap assessment through ongoing advisory and renewals</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="gdpr-methodology-timeline">
                        <div className="gdpr-methodology-line" />
                        <div className="gdpr-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`gdpr-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="gdpr-methodology-card">
                                            <div className="gdpr-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="gdpr-methodology-card-header">
                                                <div className="gdpr-methodology-card-icon">{a.icon}</div>
                                                <h3 className="gdpr-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="gdpr-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="gdpr-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="gdpr-sec gdpr-bg-white-grid">
                <div className="gdpr-grid-overlay" />
                <div className="gdpr-container">
                    <ScrollReveal direction="up">
                        <div className="gdpr-hdr">
                            <p className="gdpr-eyebrow-red">Our Checklist</p>
                            <h2 className="gdpr-title">GDPR Coverage Checklist</h2>
                            <p className="gdpr-desc">Complete coverage of GDPR requirements to establish a compliant data processing environment</p>
                        </div>
                    </ScrollReveal>
                    <div className="gdpr-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="gdpr-checklist-item">
                                    <div className="gdpr-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="gdpr-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="gdpr-sec gdpr-bg-offwhite">
                <div className="gdpr-container">
                    <ScrollReveal direction="up">
                        <div className="gdpr-hdr">
                            <p className="gdpr-eyebrow-red">Why CyberAries</p>
                            <h2 className="gdpr-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="gdpr-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="gdpr-why-clean-card">
                                    <div className="gdpr-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="gdpr-why-clean-title">{w.title}</h3>
                                    <p className="gdpr-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="gdpr-diff gdpr-bg-white-grid">
                <div className="gdpr-grid-overlay" />
                <div className="gdpr-container">
                    <ScrollReveal direction="up">
                        <div className="gdpr-hdr">
                            <p className="gdpr-eyebrow-red">Our Difference</p>
                            <h2 className="gdpr-diff-title">THE <span className="gdpr-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="gdpr-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="gdpr-diff-card gdpr-diff-card--traditional">
                                <h3 className="gdpr-diff-heading">Traditional Privacy Consulting</h3>
                                <ul className="gdpr-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="gdpr-diff-item">
                                            <span className="gdpr-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="gdpr-diff-card gdpr-diff-card--featured">
                                <h3 className="gdpr-diff-heading gdpr-diff-heading--ca">
                                    CyberAries GDPR Practice
                                </h3>
                                <ul className="gdpr-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="gdpr-diff-item">
                                            <span className="gdpr-diff-bullet">
                                                <CheckCircle size={18} className="gdpr-check-icon" />
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
            <section className="gdpr-sec gdpr-bg-white-grid">
                <div className="gdpr-grid-overlay" />
                <div className="gdpr-container">
                    <ScrollReveal direction="up">
                        <div className="gdpr-hdr">
                            <p className="gdpr-eyebrow-red">Our Deliverables</p>
                            <h2 className="gdpr-title">Comprehensive Deliverables</h2>
                            <p className="gdpr-desc">End to end documentation, controls, and reporting to ensure GDPR compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="gdpr-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="gdpr-pillar-card">
                                    <span className="gdpr-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="gdpr-pillar-top">
                                        <div className="gdpr-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="gdpr-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="gdpr-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="gdpr-pillar-divider" />
                                    <ul className="gdpr-pillar-list">
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
            <section className="gdpr-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="gdpr-container">
                    <ScrollReveal direction="up">
                        <div className="gdpr-cta-content">
                            <h2 className="gdpr-cta-title">
                                <span className="gdpr-grad">Ready to Achieve GDPR Compliance & Data Protection?</span>
                            </h2>
                            <p className="gdpr-cta-description">
                                Build a defensible GDPR compliance programme that respects data subject rights, manages vendor obligations, and reduces regulatory exposure.
                            </p>
                            <div className="gdpr-cta-buttons">
                                <Link to="/contact" className="gdpr-btn gdpr-cta-btn">
                                    <span>Request GDPR Assessment</span>
                                    <ArrowRight size={18} className="gdpr-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default GDPRCompliance;
