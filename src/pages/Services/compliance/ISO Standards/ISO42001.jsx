import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/iso-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, AlertTriangle, CheckCircle, Users, Award, RefreshCw, FileCheck, Eye, Database, Globe, Target, BookOpen, ArrowRight, Landmark } from 'lucide-react';
import './ISO42001.css';

const challenges = [
    { icon: <Target size={24} />, title: 'AI System Scope & Inventory', desc: 'Identifying and inventorying all AI systems across the organization — including third-party AI, ML pipelines, and embedded AI features — is foundational but deeply complex in modern enterprises.' },
    { icon: <AlertTriangle size={24} />, title: 'AI Risk Assessment Methodology', desc: 'Applying a structured risk assessment tailored to AI specific risks model bias, explainability failures, data poisoning, adversarial attacks, and unintended outcomes requires specialized AI governance expertise.' },
    { icon: <FileText size={24} />, title: 'AI Policy & Governance Framework', desc: 'Developing board-level AI policies, ethical AI principles, and governance structures that satisfy ISO 42001 requirements while remaining practical for AI development and deployment teams.' },
    { icon: <Shield size={24} />, title: 'Responsible AI Controls', desc: 'Implementing controls for fairness, transparency, explainability, human oversight, accountability, and data quality across diverse AI use cases — from predictive models to generative AI deployments.' },
    { icon: <Users size={24} />, title: 'Third-Party AI Risk Management', desc: 'Managing AI risks introduced through third party models, foundation models, APIs, and AI enabled SaaS assessing their trustworthiness, data handling, and bias mitigation measures.' },
    { icon: <RefreshCw size={24} />, title: 'Continual AI Risk Monitoring', desc: 'Establishing ongoing AI performance monitoring, fairness audits, and model drift detection processes to maintain responsible AI operations post certification.' },
];

const components = [
    { icon: <Target size={22} />, title: 'AIMS Scope & AI Inventory', desc: 'Defining the AI Management System scope and building a comprehensive AI system inventory — covering all AI systems, their purposes, data inputs, and stakeholder impact.' },
    { icon: <AlertTriangle size={22} />, title: 'AI Risk Assessment', desc: 'Structured risk assessment methodology addressing AI-specific risks: bias, explainability, data poisoning, privacy, safety, and unintended outcomes.' },
    { icon: <FileText size={22} />, title: 'AI Policy & Ethical Framework', desc: 'Board-approved AI Policy, AI Ethics Principles, AI Use Case Approval Process, and Responsible AI Guidelines aligned with ISO 42001 requirements.' },
    { icon: <Shield size={22} />, title: 'Responsible AI Controls', desc: 'Implementation of controls for transparency, fairness, human oversight, accountability, data quality, and AI output validation across all in-scope AI systems.' },
    { icon: <Globe size={22} />, title: 'Third Party AI Governance', desc: 'Framework for assessing, governing, and monitoring third party AI models, APIs, and AI enabled vendors including foundation model usage policies.' },
    { icon: <RefreshCw size={22} />, title: 'AI Performance & Continual Improvement', desc: 'AI monitoring programme covering model performance, fairness metrics, bias detection, and structured improvement processes for ongoing AIMS effectiveness.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'AI Landscape Discovery & Gap Analysis', desc: 'Complete AI system discovery across the organization, followed by a structured gap assessment against ISO 42001:2023 AIMS requirements.' },
    { icon: <Target size={22} />, title: 'AIMS Scope & Context Definition', desc: 'Define organizational context, AI-specific interested parties, AIMS scope boundaries, and AI management objectives.' },
    { icon: <Database size={22} />, title: 'AI System Inventory & Classification', desc: 'Build comprehensive AI inventory with classification by risk level, use case, data sensitivity, operational impact, and regulatory exposure.' },
    { icon: <AlertTriangle size={22} />, title: 'AI Risk Assessment', desc: 'Conduct structured AI risk assessments for all in-scope systems — covering model bias, explainability, data quality, security, safety, and misuse risks.' },
    { icon: <BookOpen size={22} />, title: 'AI Policy & Ethics Framework', desc: 'Develop board approved AI Policy, AI Ethics Principles, Use Case Approval Framework, and Generative AI Usage Guidelines.' },
    { icon: <Shield size={22} />, title: 'Responsible AI Controls Implementation', desc: 'Implement controls for fairness, transparency, human oversight, accountability, and data quality across all in-scope AI systems and pipelines.' },
    { icon: <Globe size={22} />, title: 'Third-Party AI Risk Management', desc: 'Establish third party AI assessment framework, foundation model governance policies, and vendor AI risk attestation processes.' },
    { icon: <Eye size={22} />, title: 'AI Monitoring & Performance Management', desc: 'Deploy AI monitoring for model drift, performance degradation, fairness metrics, and unexpected output detection with alert and review processes.' },
    { icon: <FileCheck size={22} />, title: 'Internal Audit', desc: 'AIMS internal audit against all ISO 42001:2023 clauses and Annex A controls with nonconformity reporting and corrective action management.' },
    { icon: <Award size={22} />, title: 'Certification Audit Support', desc: 'Stage 1 and Stage 2 certification audit support with pre audit readiness review, document preparation, and on site auditor liaison.' },
];

const checklist = [
    'AI system discovery and comprehensive AI inventory across all business functions',
    'Gap analysis against ISO 42001:2023 AIMS clauses and Annex A controls',
    'AIMS scope definition covering all organizational AI use cases',
    'AI specific risk assessment covering bias, explainability, safety, and data risks',
    'Board approved AI Policy and AI Ethics Principles documentation',
    'AI Use Case Approval and Review Process implementation',
    'Responsible AI controls fairness, transparency, human oversight, accountability',
    'Generative AI governance framework and acceptable use policy',
    'Third party AI and foundation model risk assessment process',
    'AI monitoring programme performance, fairness, model drift detection',
    'Internal AIMS audit against all ISO 42001:2023 requirements',
    'ISO 42001:2023 certification Stage 1 & Stage 2 audit support',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'AI Governance Specialists', desc: 'Our team combines ISO 42001 implementation expertise with practical AI/ML engineering knowledge — delivering governance that works in real AI development and deployment environments.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Responsible AI by Design', desc: 'We embed responsible AI principles — fairness, transparency, human oversight — into your AI development lifecycle rather than bolting compliance onto existing systems.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'Future Proof AI Compliance', desc: 'Our AIMS framework is designed to accommodate emerging AI regulations — EU AI Act, India\'s AI regulatory landscape — building governance that scales with AI adoption.' },
];

const trad = [
    'AI governance policies written without input from AI development teams.',
    'AI risk assessment applied using generic IT risk frameworks unsuited to AI.',
    'AI inventory limited to known production systems, missing embedded and third-party AI.',
    'Responsible AI controls defined on paper without technical integration into ML pipelines.',
    'Foundation model and third party AI risks not addressed in the governance framework.',
    'AIMS abandoned post-certification as AI systems evolve without governance updates.',
];
const ca = [
    'AI policies co developed with data science, engineering, and governance stakeholders.',
    'AI specific risk assessment methodology addressing bias, explainability, and safety risks.',
    'Comprehensive AI discovery including embedded features, APIs, and third-party models.',
    'Responsible AI controls technically integrated into ML pipelines and deployment workflows.',
    'Foundation model governance and third party AI risk assessment included as standard.',
    'Post certification AI monitoring and governance update process keeping AIMS current.',
];

const deliverables = [
    { icon: <FileText size={28} />, title: 'AIMS Documentation', items: ['AI Management System Policy & Manual', 'AI System Inventory & Classification Register', 'AI Risk Assessment Report', 'Statement of Applicability — Annex A Controls'] },
    { icon: <Shield size={28} />, title: 'AI Governance Framework', items: ['AI Ethics Principles & Guidelines', 'AI Use Case Approval Framework', 'Generative AI Usage Policy', 'Third Party AI Risk Assessment Framework'] },
    { icon: <Eye size={28} />, title: 'Monitoring & Controls', items: ['AI Performance & Fairness Monitoring Framework', 'Model Drift Detection & Alert Programme', 'Human Oversight & Escalation Procedures', 'AI Incident Response Process'] },
    { icon: <Award size={28} />, title: 'Certification Support', items: ['Internal AIMS Audit Reports', 'Nonconformity & Corrective Actions Register', 'Stage 1 & Stage 2 Audit Preparation', 'Continual AI Governance Improvement Plan'] },
];

const ISO42001 = () => {
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
        <div className="i420-page">
            {/* HERO SECTION */}
            <section className="i420-hero" ref={heroRef}>
                <motion.div
                    className="i420-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="i420-hero-overlay" />
                <div className="i420-hero-glow" />

                {/* Floating particles */}
                <div className="i420-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="i420-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="i420-container">
                    <div className="i420-hero-inner">
                        <div className="i420-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="i420-hero-badge">
                  <Landmark size={14} className="i420-badge-icon" />
                  <span className="i420-badge-text">
                    COMPLIANCE <span className="i420-badge-divider">/</span> ISO STANDARDS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="i420-hero-title">
                                    <span className="i420-grad">ISO 42001 AI GOVERNANCE CERTIFICATION</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="i420-hero-description">
                                    ISO/IEC 42001:2023 is the <strong>world's first international standard for Artificial Intelligence Management Systems (AIMS)</strong>. Certification demonstrates that your organization systematically governs AI development and deployment ensuring responsible, transparent, and accountable AI across the enterprise.
                                </p>
                                <p className="i420-hero-description">
                                    Our ISO 42001 practice delivers <strong>end to end AIMS implementation</strong> from AI discovery and risk assessment through policy development, responsible AI controls, third party AI governance, and certification audit support purpose built for the AI era.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="i420-hero-actions">
                                    <button className="i420-btn i420-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule an AI Governance Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i420-sec i420-bg-offwhite">
                <div className="i420-container">
                    <ScrollReveal direction="up">
                        <div className="i420-hdr">
                            <p className="i420-eyebrow-red">Our Challenges</p>
                            <h2 className="i420-title">ISO 42001 AI Governance Challenges</h2>
                            <p className="i420-desc">Organizations deploying AI systems face complex governance challenges addressed by ISO 42001:2023</p>
                        </div>
                    </ScrollReveal>
                    <div className="i420-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="i420-challenge-card">
                                    <div className="i420-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="i420-ch-content">
                                        <div className="i420-ch-header">
                                            <div className="i420-ch-icon-box">{c.icon}</div>
                                            <h3 className="i420-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="i420-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="i420-sec i420-bg-white-grid">
                <div className="i420-grid-overlay" />
                <div className="i420-container">
                    <ScrollReveal direction="up">
                        <div className="i420-hdr">
                            <p className="i420-eyebrow-red">Our Framework</p>
                            <h2 className="i420-title">Our ISO 42001 AIMS Framework</h2>
                            <p className="i420-desc">A comprehensive AI Management System framework covering all ISO 42001:2023 clauses and Annex A responsible AI controls</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="i420-fw-row">
                            {components.slice(0, 3).map((step, index) => (
                                <div className="i420-fw-card" key={index}>
                                    <div className="i420-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="i420-fw-connector" />}
                                    <div className="i420-fw-icon">{step.icon}</div>
                                    <h3 className="i420-fw-title">{step.title}</h3>
                                    <p className="i420-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="i420-fw-row-2">
                            {components.slice(3, 6).map((step, index) => (
                                <div className="i420-fw-card" key={index + 3}>
                                    <div className="i420-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="i420-fw-connector" />}
                                    <div className="i420-fw-icon">{step.icon}</div>
                                    <h3 className="i420-fw-title">{step.title}</h3>
                                    <p className="i420-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i420-sec i420-bg-offwhite">
                <div className="i420-container">
                    <ScrollReveal direction="up">
                        <div className="i420-hdr">
                            <p className="i420-eyebrow-red">Our Approach</p>
                            <h2 className="i420-title">Our Implementation Methodology</h2>
                            <p className="i420-desc">A proven 10-step methodology from AI discovery through ISO 42001 certification success</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="i420-methodology-timeline">
                        <div className="i420-methodology-line" />
                        <div className="i420-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`i420-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="i420-methodology-card">
                                            <div className="i420-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="i420-methodology-card-header">
                                                <div className="i420-methodology-card-icon">{a.icon}</div>
                                                <h3 className="i420-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="i420-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="i420-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="i420-sec i420-bg-white-grid">
                <div className="i420-grid-overlay" />
                <div className="i420-container">
                    <ScrollReveal direction="up">
                        <div className="i420-hdr">
                            <p className="i420-eyebrow-red">Our Checklist</p>
                            <h2 className="i420-title">ISO 42001 Coverage Checklist</h2>
                            <p className="i420-desc">Complete coverage of ISO 42001:2023 AIMS requirements across all clauses and Annex A responsible AI controls</p>
                        </div>
                    </ScrollReveal>
                    <div className="i420-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="i420-checklist-item">
                                    <div className="i420-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="i420-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i420-sec i420-bg-offwhite">
                <div className="i420-container">
                    <ScrollReveal direction="up">
                        <div className="i420-hdr">
                            <p className="i420-eyebrow-red">Why CyberAries</p>
                            <h2 className="i420-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="i420-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="i420-why-clean-card">
                                    <div className="i420-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="i420-why-clean-title">{w.title}</h3>
                                    <p className="i420-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="i420-diff i420-bg-white-grid">
                <div className="i420-grid-overlay" />
                <div className="i420-container">
                    <ScrollReveal direction="up">
                        <div className="i420-hdr">
                            <p className="i420-eyebrow-red">Our Difference</p>
                            <h2 className="i420-diff-title">THE <span className="i420-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="i420-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="i420-diff-card i420-diff-card--traditional">
                                <h3 className="i420-diff-heading">Generic Compliance Consultants</h3>
                                <ul className="i420-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="i420-diff-item">
                                            <span className="i420-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="i420-diff-card i420-diff-card--featured">
                                <h3 className="i420-diff-heading i420-diff-heading--ca">
                                    CyberAries ISO 42001 AIMS Practice
                                </h3>
                                <ul className="i420-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="i420-diff-item">
                                            <span className="i420-diff-bullet">
                                                <CheckCircle size={18} className="i420-check-icon" />
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
            <section className="i420-sec i420-bg-white-grid">
                <div className="i420-grid-overlay" />
                <div className="i420-container">
                    <ScrollReveal direction="up">
                        <div className="i420-hdr">
                            <p className="i420-eyebrow-red">Our Deliverables</p>
                            <h2 className="i420-title">Comprehensive Deliverables</h2>
                            <p className="i420-desc">End to end documentation, controls, and reporting to ensure ISO 42001 compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="i420-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="i420-pillar-card">
                                    <span className="i420-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="i420-pillar-top">
                                        <div className="i420-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="i420-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="i420-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="i420-pillar-divider" />
                                    <ul className="i420-pillar-list">
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
            <section className="i420-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="i420-container">
                    <ScrollReveal direction="up">
                        <div className="i420-cta-content">
                            <h2 className="i420-cta-title">
                                <span className="i420-grad">Ready to Achieve ISO 42001:2023 AI Governance Certification?</span>
                            </h2>
                            <p className="i420-cta-description">
                                Build responsible AI governance and achieve world's first AI management standard certification with our AI governance specialists.
                            </p>
                            <div className="i420-cta-buttons">
                                <Link to="/contact" className="i420-btn i420-cta-btn">
                                    <span>Request AI Governance Assessment</span>
                                    <ArrowRight size={18} className="i420-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ISO42001;
