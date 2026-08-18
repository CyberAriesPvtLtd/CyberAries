import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/indian-privacy-laws-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, Users, Award, Globe, Database, Eye, Target, ArrowRight, Landmark, FileCheck } from 'lucide-react';
import './DPIAServices.css';

const challenges = [
    { icon: <Target size={24} />, title: 'Identifying High Risk Processing for Mandatory DPIA', desc: 'Determining which processing activities trigger mandatory Data Protection Impact Assessments under GDPR Article 35 — systematic profiling, large-scale sensitive data, public area monitoring — without a structured risk screening process.' },
    { icon: <Database size={24} />, title: 'Scoping the DPIA Accurately', desc: 'Defining the DPIA scope too narrowly misses risks; too broadly consumes disproportionate resources. Accurate processing description, necessity assessment, and proportionality review require specialised privacy expertise.' },
    { icon: <Eye size={24} />, title: 'Meaningful Risk Assessment', desc: 'Conducting a genuine DPIA risk assessment — identifying likelihood and severity of risks to Data Subjects\' rights and freedoms — beyond surface-level checklists that satisfy the form but not the substance of GDPR requirements.' },
    { icon: <Settings size={24} />, title: 'Integrating DPIAs into SDLC', desc: 'Embedding DPIA screening and execution into project delivery, product development, and change management lifecycles so privacy risk is assessed before new processing starts, not after deployment.' },
    { icon: <Users size={24} />, title: 'DPO Consultation & Supervisory Authority Prior Consultation', desc: 'Managing DPO consultation in the DPIA process, and determining when residual high risk requires prior consultation with the supervisory authority before processing begins a step many organizations overlook.' },
    { icon: <Lock size={24} />, title: 'DPIA Under Indian DPDP Act for Significant Data Fiduciaries', desc: 'Significant Data Fiduciaries under India\'s DPDP Act are required to conduct Data Protection Impact Assessments. Understanding DPDP Act DPIA requirements and scoping these assessments for Indian regulatory compliance.' },
];

const framework = [
    { icon: <Search size={22} />, title: 'DPIA Screening & Necessity Assessment', desc: 'Structured pre DPIA screening of proposed processing activities against mandatory DPIA triggers (Article 35 list, supervisory authority lists) and high risk indicators to determine DPIA necessity.' },
    { icon: <FileText size={22} />, title: 'Processing Description & Necessity/Proportionality Review', desc: 'Systematic description of the processing operation — purposes, data categories, recipients, retention, technical controls — with documented necessity and proportionality assessment.' },
    { icon: <Eye size={22} />, title: 'Privacy Risk Assessment', desc: 'Identification of risks to Data Subjects\' rights and freedoms likelihood and severity assessment, risk matrix scoring, and documentation of residual risk after mitigation measures.' },
    { icon: <Lock size={22} />, title: 'Mitigation Measures & Risk Reduction', desc: 'Identification and implementation of technical and organisational controls — privacy-by-design, data minimisation, access controls, encryption — to reduce DPIA risks to acceptable levels.' },
    { icon: <Users size={22} />, title: 'DPO & Stakeholder Consultation', desc: 'Structured DPO consultation in the DPIA process, Data Subject views where appropriate, and prior consultation with supervisory authority where residual high risk cannot be mitigated.' },
    { icon: <Globe size={22} />, title: 'DPIA Programme & SDLC Integration', desc: 'Building an organisational DPIA programme — screening checklist, DPIA template, review governance, and integration into SDLC, change management, and procurement processes.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'Processing Activity Screening', desc: 'Screen proposed or existing processing activities against GDPR Article 35 mandatory triggers and WP248 high risk criteria to determine DPIA necessity.' },
    { icon: <FileText size={22} />, title: 'DPIA Scoping', desc: 'Define DPIA scope — processing operation boundaries, systems involved, data categories, data subjects, third parties, and jurisdictions — ensuring accurate and proportionate coverage.' },
    { icon: <Database size={22} />, title: 'Processing Description', desc: 'Document the processing operation systematically — purposes, legal basis, data flows, retention schedules, recipients, and cross-border transfer mechanisms.' },
    { icon: <Eye size={22} />, title: 'Necessity & Proportionality Assessment', desc: 'Assess whether processing is necessary and proportionate to the legitimate purpose identifying over collection, unnecessary retention, and disproportionate disclosure.' },
    { icon: <AlertTriangle size={22} />, title: 'Risk Identification', desc: 'Identify privacy risks to Data Subjects discrimination, identity theft, financial loss, reputational damage, loss of confidentiality linked to specific processing activities.' },
    { icon: <Settings size={22} />, title: 'Likelihood & Severity Scoring', desc: 'Score identified risks on likelihood and severity dimensions, applying residual risk assessment after existing controls producing a documented risk matrix.' },
    { icon: <Lock size={22} />, title: 'Mitigation Measures Design', desc: 'Design and document technical and organisational mitigation measures privacy by default, minimisation, access controls, encryption, anonymisation reducing risks to acceptable levels.' },
    { icon: <Users size={22} />, title: 'DPO Consultation & Review', desc: 'Conduct formal DPO consultation, document DPO opinion and recommendations, and integrate DPO input into final DPIA documentation.' },
    { icon: <FileCheck size={22} />, title: 'Prior Supervisory Authority Consultation', desc: 'Where residual high risk persists after mitigation, manage prior consultation with the supervisory authority — submission preparation, timeline management, and response handling.' },
    { icon: <Award size={22} />, title: 'DPIA Programme Institutionalization', desc: 'Deploy a DPIA screening checklist, standard DPIA template, review governance, and SDLC/change management integration for ongoing DPIA programme management.' },
];

const checklist = [
    'Processing activity screening against Article 35 mandatory triggers and WP248 criteria',
    'DPIA scoping and processing operation boundary definition',
    'Systematic processing description — purposes, data, recipients, retention, transfers',
    'Necessity and proportionality assessment for each processing activity',
    'Risk identification rights and freedoms of Data Subjects',
    'Likelihood and severity scoring with residual risk matrix',
    'Technical and organisational mitigation measure design and implementation',
    'DPO consultation with documented opinion and recommendations',
    'Data Subject views assessment (where appropriate)',
    'Prior supervisory authority consultation preparation (where required)',
    'DPIA report documentation and version control',
    'DPIA programme — screening checklist, template, SDLC integration, and annual review',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'DPIA Specialists with Regulatory Experience', desc: 'Our privacy team has conducted DPIAs for complex, high risk processing operations across AI/ML, biometrics, healthcare, financial services, and public authority contexts.' },
    { icon: <Eye size={36} strokeWidth={1.5} />, title: 'Substance Over Form', desc: 'We conduct DPIAs as genuine risk assessments not checkbox exercises. Our DPIA reports would satisfy supervisory authority scrutiny in any investigation or audit scenario.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'GDPR & DPDP Act Coverage', desc: 'We conduct DPIAs meeting both GDPR Article 35 requirements and DPDP Act obligations for Significant Data Fiduciaries — a single integrated assessment for organisations with dual regulatory exposure.' },
];

const trad = [
    'DPIA screening conducted informally — mandatory triggers not systematically checked.',
    'Processing descriptions incomplete data flows, recipients, and retention not fully documented.',
    'Risk assessment limited to a checklist of generic harms without likelihood/severity scoring.',
    'Mitigation measures suggested at a high level without implementation tracking.',
    'DPO consultation acknowledged formally without documented opinion or recommendations.',
    'No DPIA programme each DPIA isolated without recurring screening or review governance.',
];
const ca = [
    'Systematic DPIA screening against Article 35 mandatory triggers and WP248 high-risk criteria.',
    'Complete processing description with data flow diagrams, recipient list, and retention schedule.',
    'Genuine risk assessment with documented likelihood and severity scores and residual risk matrix.',
    'Mitigation measures specifically designed, documented, and tracked through to implementation.',
    'DPO consultation formally documented with DPO opinion recorded in the DPIA report.',
    'DPIA programme institutionalised — screening, template, SDLC integration, and annual review cycle.',
];

const deliverables = [
    { icon: <Search size={28} />, title: 'Assessment & Screening', items: ['Processing Activity DPIA Screening Report', 'DPIA Scoping Documentation', 'Processing Description & Data Flow Diagrams', 'Necessity & Proportionality Assessment'] },
    { icon: <Eye size={28} />, title: 'Risk Assessment', items: ['Privacy Risk Identification Report', 'Likelihood & Severity Risk Matrix', 'Residual Risk Assessment', 'Mitigation Measures Design & Tracking'] },
    { icon: <Users size={28} />, title: 'Consultation & Report', items: ['DPO Consultation Documentation', 'DPIA Final Report', 'Supervisory Authority Prior Consultation Submission', 'DPIA Version Control Register'] },
    { icon: <Award size={28} />, title: 'DPIA Programme', items: ['DPIA Screening Checklist', 'Standard DPIA Template', 'SDLC & Change Management Integration', 'Annual DPIA Review Programme'] },
];

const DPIAServices = () => {
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
        <div className="dpia-page">
            {/* HERO SECTION */}
            <section className="dpia-hero" ref={heroRef}>
                <motion.div
                    className="dpia-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="dpia-hero-overlay" />
                <div className="dpia-hero-glow" />

                {/* Floating particles */}
                <div className="dpia-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="dpia-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="dpia-container">
                    <div className="dpia-hero-inner">
                        <div className="dpia-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="dpia-hero-badge">
                  <Landmark size={14} className="dpia-badge-icon" />
                  <span className="dpia-badge-text">
                    DATA PRIVACY <span className="dpia-badge-divider">/</span> INDIAN PRIVACY LAWS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="dpia-hero-title">
                                    <span className="dpia-grad">DPIA SERVICES</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="dpia-hero-description">
                                    Identify and mitigate privacy risks before they impact your business. As a mandatory requirement under GDPR and India’s DPDP Act for high risk processing, a Data Protection Impact Assessment (DPIA) is essential for demonstrating "privacy by design." We manage the complete DPIA lifecycle—from initial screening and necessity determination to risk scoring and mitigation design.
                                </p>
                                <p className="dpia-hero-description">
                                    By facilitating expert DPO consultations and managing authority engagements, we help you satisfy regulatory demands, reduce the risk of enforcement action, and embed robust privacy practices directly into your organizational workflows.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="dpia-hero-actions">
                                    <button className="dpia-btn dpia-btn-primary" onClick={() => navigate('/contact')}>
                                        Request a DPIA
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpia-sec dpia-bg-offwhite">
                <div className="dpia-container">
                    <ScrollReveal direction="up">
                        <div className="dpia-hdr">
                            <p className="dpia-eyebrow-red">Our Challenges</p>
                            <h2 className="dpia-title">DPIA Challenges</h2>
                            <p className="dpia-desc">Organizations face significant challenges conducting DPIAs of genuine rigour that satisfy regulatory requirements and reduce processing risks</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpia-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="dpia-challenge-card">
                                    <div className="dpia-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="dpia-ch-content">
                                        <div className="dpia-ch-header">
                                            <div className="dpia-ch-icon-box">{c.icon}</div>
                                            <h3 className="dpia-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="dpia-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="dpia-sec dpia-bg-white-grid">
                <div className="dpia-grid-overlay" />
                <div className="dpia-container">
                    <ScrollReveal direction="up">
                        <div className="dpia-hdr">
                            <p className="dpia-eyebrow-red">Our Framework</p>
                            <h2 className="dpia-title">Our DPIA Service Framework</h2>
                            <p className="dpia-desc">End to end DPIA services from screening through risk assessment, mitigation, DPO consultation, and DPIA programme design</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="dpia-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="dpia-fw-card" key={index}>
                                    <div className="dpia-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="dpia-fw-connector" />}
                                    <div className="dpia-fw-icon">{step.icon}</div>
                                    <h3 className="dpia-fw-title">{step.title}</h3>
                                    <p className="dpia-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="dpia-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="dpia-fw-card" key={index + 3}>
                                    <div className="dpia-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="dpia-fw-connector" />}
                                    <div className="dpia-fw-icon">{step.icon}</div>
                                    <h3 className="dpia-fw-title">{step.title}</h3>
                                    <p className="dpia-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpia-sec dpia-bg-offwhite">
                <div className="dpia-container">
                    <ScrollReveal direction="up">
                        <div className="dpia-hdr">
                            <p className="dpia-eyebrow-red">Our Approach</p>
                            <h2 className="dpia-title">Our DPIA Methodology</h2>
                            <p className="dpia-desc">A rigorous 10-step DPIA methodology designed to produce defensible, supervisory authority standard assessments</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="dpia-methodology-timeline">
                        <div className="dpia-methodology-line" />
                        <div className="dpia-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`dpia-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="dpia-methodology-card">
                                            <div className="dpia-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="dpia-methodology-card-header">
                                                <div className="dpia-methodology-card-icon">{a.icon}</div>
                                                <h3 className="dpia-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="dpia-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="dpia-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="dpia-sec dpia-bg-white-grid">
                <div className="dpia-grid-overlay" />
                <div className="dpia-container">
                    <ScrollReveal direction="up">
                        <div className="dpia-hdr">
                            <p className="dpia-eyebrow-red">Our Checklist</p>
                            <h2 className="dpia-title">DPIA Coverage Checklist</h2>
                            <p className="dpia-desc">Complete DPIA lifecycle coverage from screening through supervisory authority consultation and programme institutionalisation</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpia-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="dpia-checklist-item">
                                    <div className="dpia-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="dpia-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpia-sec dpia-bg-offwhite">
                <div className="dpia-container">
                    <ScrollReveal direction="up">
                        <div className="dpia-hdr">
                            <p className="dpia-eyebrow-red">Why CyberAries</p>
                            <h2 className="dpia-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="dpia-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="dpia-why-clean-card">
                                    <div className="dpia-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="dpia-why-clean-title">{w.title}</h3>
                                    <p className="dpia-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="dpia-diff dpia-bg-white-grid">
                <div className="dpia-grid-overlay" />
                <div className="dpia-container">
                    <ScrollReveal direction="up">
                        <div className="dpia-hdr">
                            <p className="dpia-eyebrow-red">Our Difference</p>
                            <h2 className="dpia-diff-title">THE <span className="dpia-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="dpia-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="dpia-diff-card dpia-diff-card--traditional">
                                <h3 className="dpia-diff-heading">Generic Privacy Consultants</h3>
                                <ul className="dpia-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="dpia-diff-item">
                                            <span className="dpia-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="dpia-diff-card dpia-diff-card--featured">
                                <h3 className="dpia-diff-heading dpia-diff-heading--ca">
                                    CyberAries DPIA Practice
                                </h3>
                                <ul className="dpia-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="dpia-diff-item">
                                            <span className="dpia-diff-bullet">
                                                <CheckCircle size={18} className="dpia-check-icon" />
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
            <section className="dpia-sec dpia-bg-white-grid">
                <div className="dpia-grid-overlay" />
                <div className="dpia-container">
                    <ScrollReveal direction="up">
                        <div className="dpia-hdr">
                            <p className="dpia-eyebrow-red">Our Deliverables</p>
                            <h2 className="dpia-title">Comprehensive Deliverables</h2>
                            <p className="dpia-desc">End to end documentation, controls, and reporting to ensure DPIA compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpia-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="dpia-pillar-card">
                                    <span className="dpia-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="dpia-pillar-top">
                                        <div className="dpia-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="dpia-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="dpia-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="dpia-pillar-divider" />
                                    <ul className="dpia-pillar-list">
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
            <section className="dpia-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="dpia-container">
                    <ScrollReveal direction="up">
                        <div className="dpia-cta-content">
                            <h2 className="dpia-cta-title">
                                <span className="dpia-grad">Ready to Commission a Rigorous DPIA?</span>
                            </h2>
                            <p className="dpia-cta-description">
                                Ensure your high risk processing activities are covered by supervisory authority standard DPIAs conducted by privacy specialists with genuine regulatory experience.
                            </p>
                            <div className="dpia-cta-buttons">
                                <Link to="/contact" className="dpia-btn dpia-cta-btn">
                                    <span>Request DPIA Services</span>
                                    <ArrowRight size={18} className="dpia-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default DPIAServices;
