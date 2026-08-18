import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/managed-leadership-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle,
  Database,
  Eye,
  FileCheck,
  Globe,
  Landmark,
  Lock,
  Search,
  Settings,
  Shield,
  Target,
  Users
} from 'lucide-react';
import './VirtualCISO.css';

const challenges = [
    { icon: <Target size={40} />, title: 'The Security Leadership Gap', desc: 'Most mid-market organizations lack the budget for a full-time CISO — yet face board-level accountability, regulatory expectations, cyber insurance requirements, and enterprise customer security questionnaires demanding senior security leadership.' },
    { icon: <Settings size={40} />, title: 'Translating Security into Business Language', desc: 'Technical security teams struggle to communicate risk, investment priorities, and programme maturity to boards, audit committees, and C suite stakeholders in business terms that drive informed decision making.' },
    { icon: <Globe size={40} />, title: 'Regulatory Landscape Complexity', desc: 'Organizations face an expanding patchwork of regulatory requirements — DPDP Act, CERT-In directions, RBI cybersecurity frameworks, SEBI CSCRF, ISO 27001, SOC 2 — requiring coordinated compliance governance.' },
    { icon: <AlertTriangle size={40} />, title: 'Security Programme Governance', desc: 'Without strategic leadership, security programmes become a collection of tactical tools rather than a coherent risk management function aligned to business objectives and risk appetite.' },
    { icon: <Database size={40} />, title: 'Vendor & Third-Party Risk Management', desc: 'Managing the security risk of a growing supplier and technology vendor ecosystem requires a structured third-party risk programme under strategic leadership — not ad-hoc questionnaire reviews.' },
    { icon: <Users size={40} />, title: 'Security Culture & Board Engagement', desc: 'Building a security culture and maintaining board-level engagement requires leadership that can connect cybersecurity to business risk, governance obligations, and strategic objectives.' },
];

const framework = [
    { icon: <Settings size={40} />, title: 'Security Strategy & Roadmap', desc: 'Development of a multi year cybersecurity strategy and roadmap aligned to business objectives, risk appetite, and regulatory obligations with prioritised investment recommendations.' },
    { icon: <Eye size={40} />, title: 'Risk Governance & Reporting', desc: 'Risk-based cybersecurity governance — risk register management, KRI/KPI dashboards, board and executive reporting, and audit committee presentations in business language.' },
    { icon: <Globe size={40} />, title: 'Regulatory Compliance Oversight', desc: 'Strategic oversight of all regulatory compliance obligations — DPDP Act, CERT-In, RBI, SEBI, ISO 27001 — ensuring coordinated programme management and regulatory engagement.' },
    { icon: <Users size={40} />, title: 'Security Programme Management', desc: 'Ownership of the full security programme — security architecture review, policy governance, awareness training programme, incident response preparedness, and budget management.' },
    { icon: <Database size={40} />, title: 'Third-Party Risk Management', desc: 'Structured TPRM programme — vendor risk assessment, security questionnaire management, contractual controls review, and ongoing vendor security monitoring.' },
    { icon: <Award size={40} />, title: 'Board & C-Suite Engagement', desc: 'Regular board briefings, audit committee reporting, and executive leadership engagement — translating technical security risk into business impact and governance accountability.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'Security Baseline Assessment', desc: 'Comprehensive assessment of your current security posture — reviewing existing controls, policies, compliance status, risk management maturity, and governance structure.' },
    { icon: <Target size={40} />, title: 'Strategy & Roadmap Development', desc: 'Develop a prioritised multi year security strategy aligned to business objectives, risk appetite, and the regulatory framework obligations applicable to your organisation.' },
    { icon: <Settings size={40} />, title: 'Security Programme Architecture', desc: 'Design or restructure the security programme covering policies, standards, procedures, security architecture, awareness training, and incident response capabilities.' },
    { icon: <Globe size={40} />, title: 'Regulatory Compliance Programme', desc: 'Map all applicable regulatory obligations, develop a compliance programme calendar, coordinate audit preparation, and manage regulatory submissions and supervisory authority engagement.' },
    { icon: <Database size={40} />, title: 'Risk Management Framework', desc: 'Implement a risk-based security governance framework — risk register, risk appetite statement, KRIs, and a risk reporting cycle aligned to board and executive requirements.' },
    { icon: <Users size={40} />, title: 'Third Party Risk Programme', desc: 'Design and operate a structured TPRM programme — vendor risk tiering, assessment questionnaires, contractual security requirements, and continuous monitoring.' },
    { icon: <Eye size={40} />, title: 'Security Awareness Programme', desc: 'Design and oversee a security awareness and training programme phishing simulations, role specific training, and executive security briefings.' },
    { icon: <Lock size={40} />, title: 'Incident Response Governance', desc: 'Establish or mature the incident response programme playbooks, tabletop exercises, escalation paths, regulatory notification procedures, and cyber insurance alignment.' },
    { icon: <FileCheck size={40} />, title: 'Board & Executive Reporting', desc: 'Develop and deliver regular board security reports, audit committee briefings, and C suite dashboards communicating risk in business impact terms.' },
    { icon: <Award size={40} />, title: 'Continuous Advisory & Programme Evolution', desc: 'Ongoing vCISO advisory attending leadership meetings, responding to incident escalations, managing the security programme, and evolving strategy as the threat and regulatory landscape changes.' },
];

const checklist = [
    'Current security posture baseline assessment',
    'Multi year cybersecurity strategy and roadmap development',
    'Security policy and standards governance framework',
    'Risk register, risk appetite definition, and KRI reporting',
    'Regulatory compliance programme DPDP Act, CERT In, RBI, SEBI, ISO 27001',
    'Security architecture review and technology roadmap alignment',
    'Third-party risk management programme design and operation',
    'Security awareness and phishing simulation programme',
    'Incident response programme playbooks, tabletop exercises, regulatory notifications',
    'Board and audit committee security reporting',
    'Cyber insurance alignment and security questionnaire support',
    'Ongoing strategic advisory and programme evolution',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Seasoned CISO Leadership', desc: 'Our vCISOs are experienced practitioners with CISO level backgrounds across financial services, healthcare, technology, and critical infrastructure bringing genuine strategic leadership, not junior advisory.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Deep Indian Regulatory Expertise', desc: 'We bring specialist knowledge of CERT In, DPDP Act, RBI cybersecurity frameworks, SEBI CSCRF, and IRDAI guidelines navigating India\'s complex regulatory landscape as a core vCISO capability.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Flexible Engagement Models', desc: 'We offer fractional vCISO engagements at the hours and intensity your organisation needs — from board-level strategy advisory to active programme management and day-to-day security leadership.' },
];

const trad = [
    'Security strategy based on technology preferences rather than business risk alignment.',
    'Board reporting consists of vulnerability counts without business risk context.',
    'Compliance obligations tracked in a spreadsheet without strategic programme governance.',
    'Third party risk managed through ad hoc questionnaires without tiering or ongoing monitoring.',
    'Security awareness limited to mandatory annual training without phishing simulation.',
    'Incident response plan exists on paper but leadership escalation paths not tested.',
];

const ca = [
    'Security strategy explicitly aligned to business objectives and board approved risk appetite.',
    'Board reporting in business risk language financial impact, regulatory exposure, probability.',
    'All regulatory obligations mapped to a governed compliance programme with clear ownership.',
    'Structured TPRM vendor tiering, risk weighted assessments, contractual controls, monitoring.',
    'Security awareness programme with phishing simulation, role specific training, and metrics.',
    'Incident response governance tested via tabletops with regulatory notification procedures validated.',
];

const deliverables = [
    { icon: <Settings size={36} />, title: 'Strategy & Governance', items: ['Security Baseline Assessment Report', 'Multi Year Security Strategy & Roadmap', 'Security Policy & Standards Suite', 'Risk Register & Risk Appetite Statement'] },
    { icon: <Globe size={36} />, title: 'Compliance & Risk', items: ['Regulatory Compliance Programme Calendar', 'KRI/KPI Dashboard & Reporting Framework', 'Third Party Risk Assessment Programme', 'Vendor Security Questionnaire Toolkit'] },
    { icon: <Users size={36} />, title: 'People & Culture', items: ['Security Awareness Training Programme', 'Phishing Simulation Programme', 'Incident Response Playbooks & Tabletops', 'Security Champion Programme Design'] },
    { icon: <Award size={36} />, title: 'Leadership & Reporting', items: ['Board Security Report Templates', 'Audit Committee Briefing Packs', 'Executive Security Dashboard', 'Cyber Insurance Alignment Review'] },
];

const VirtualCISO = () => {
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
        <div className="vciso-page">
            {/* HERO SECTION */}
            <section className="vciso-hero" ref={heroRef}>
                <motion.div
                    className="vciso-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="vciso-hero-overlay" />
                <div className="vciso-hero-glow" />

                {/* Floating particles */}
                <div className="vciso-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="vciso-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="vciso-container">
                    <div className="vciso-hero-inner">
                        <div className="vciso-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="vciso-hero-badge">
                  <Landmark size={14} className="vciso-badge-icon" />
                  <span className="vciso-badge-text">
                    STRATEGIC CONSULTING <span className="vciso-badge-divider">/</span> MANAGED LEADERSHIP
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="vciso-hero-title">
                                    <span className="vciso-grad">VIRTUAL CISO <br /> (vCISO) SERVICES</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="vciso-hero-description">
                                    Get executive level cybersecurity leadership without the full time overhead. We provide strategic security oversight, risk management, and compliance alignment tailored to your business goals. Our virtual CISO team collaborates with your leadership to define security roadmaps, establish governance frameworks, and oversee security operations.
                                </p>
                                <p className="vciso-hero-description">
                                    By conducting risk assessments, managing security audits, and delivering incident response oversight, we strengthen your security posture and satisfy vendor risk reviews.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="vciso-hero-actions">
                                    <button className="vciso-btn vciso-btn-primary" onClick={() => navigate('/contact')}>
                                        Hire a Virtual CISO
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="vciso-sec vciso-bg-offwhite">
                <div className="vciso-container">
                    <ScrollReveal direction="up">
                        <div className="vciso-hdr">
                            <p className="vciso-eyebrow-red">Challenges</p>
                            <h2 className="vciso-title">Security Leadership Challenges</h2>
                            <p className="vciso-desc">Bridging the gap between corporate strategy and security engineering, under constrained budgets and talent shortages</p>
                        </div>
                    </ScrollReveal>
                    <div className="vciso-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="vciso-challenge-card">
                                    <div className="vciso-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="vciso-ch-content">
                                        <div className="vciso-ch-header">
                                            <div className="vciso-ch-icon-box">{c.icon}</div>
                                            <h3 className="vciso-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="vciso-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="vciso-sec vciso-bg-white-grid">
                <div className="vciso-grid-overlay" />
                <div className="vciso-container">
                    <ScrollReveal direction="up">
                        <div className="vciso-hdr">
                            <p className="vciso-eyebrow-red">Our Framework</p>
                            <h2 className="vciso-title">Our vCISO Framework</h2>
                            <p className="vciso-desc">Comprehensive cybersecurity leadership covering strategy, risk, compliance, security operations, and board reporting</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1-3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="vciso-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="vciso-fw-card" key={index}>
                                    <div className="vciso-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="vciso-fw-connector" />}
                                    <div className="vciso-fw-icon">{step.icon}</div>
                                    <h3 className="vciso-fw-title">{step.title}</h3>
                                    <p className="vciso-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4-6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="vciso-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="vciso-fw-card" key={index + 3}>
                                    <div className="vciso-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="vciso-fw-connector" />}
                                    <div className="vciso-fw-icon">{step.icon}</div>
                                    <h3 className="vciso-fw-title">{step.title}</h3>
                                    <p className="vciso-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="vciso-sec vciso-bg-offwhite">
                <div className="vciso-container">
                    <ScrollReveal direction="up">
                        <div className="vciso-hdr">
                            <p className="vciso-eyebrow-red">Our Approach</p>
                            <h2 className="vciso-title">Our vCISO Methodology</h2>
                            <p className="vciso-desc">A continuous strategy to execution methodology designed to align security posture with business risk</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="vciso-methodology-timeline">
                        <div className="vciso-methodology-line" />
                        <div className="vciso-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`vciso-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="vciso-methodology-card">
                                            <div className="vciso-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="vciso-methodology-card-header">
                                                <div className="vciso-methodology-card-icon">{a.icon}</div>
                                                <h3 className="vciso-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="vciso-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="vciso-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="vciso-sec vciso-bg-white-grid">
                <div className="vciso-grid-overlay" />
                <div className="vciso-container">
                    <ScrollReveal direction="up">
                        <div className="vciso-hdr">
                            <p className="vciso-eyebrow-red">Our Checklist</p>
                            <h2 className="vciso-title">vCISO Coverage Checklist</h2>
                            <p className="vciso-desc">Complete security governance coverage from initial risk profiling to board level reporting</p>
                        </div>
                    </ScrollReveal>
                    <div className="vciso-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="vciso-checklist-item">
                                    <div className="vciso-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="vciso-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="vciso-sec vciso-bg-offwhite">
                <div className="vciso-container">
                    <ScrollReveal direction="up">
                        <div className="vciso-hdr">
                            <p className="vciso-eyebrow-red">Why CyberAries</p>
                            <h2 className="vciso-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="vciso-why-grid-3">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="vciso-why-clean-card">
                                    <div className="vciso-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="vciso-why-clean-title">{w.title}</h3>
                                    <p className="vciso-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="vciso-diff vciso-bg-white-grid">
                <div className="vciso-grid-overlay" />
                <div className="vciso-container">
                    <ScrollReveal direction="up">
                        <div className="vciso-hdr">
                            <p className="vciso-eyebrow-red">Our Difference</p>
                            <h2 className="vciso-diff-title">THE <span className="vciso-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="vciso-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="vciso-diff-card vciso-diff-card--traditional">
                                <h3 className="vciso-diff-heading">Ad hoc IT Consultants</h3>
                                <ul className="vciso-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="vciso-diff-item">
                                            <span className="vciso-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="vciso-diff-card vciso-diff-card--featured">
                                <h3 className="vciso-diff-heading vciso-diff-heading--ca">
                                    CyberAries vCISO Practice
                                </h3>
                                <ul className="vciso-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="vciso-diff-item">
                                            <span className="vciso-diff-bullet">
                                                <CheckCircle size={18} className="vciso-check-icon" />
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
            <section className="vciso-sec vciso-bg-white-grid">
                <div className="vciso-grid-overlay" />
                <div className="vciso-container">
                    <ScrollReveal direction="up">
                        <div className="vciso-hdr">
                            <p className="vciso-eyebrow-red">Our Deliverables</p>
                            <h2 className="vciso-title">Comprehensive Deliverables</h2>
                            <p className="vciso-desc">Security strategic roadmaps, risk registers, policy suites, audit reports, and executive dashboards.</p>
                        </div>
                    </ScrollReveal>
                    <div className="vciso-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="vciso-pillar-card">
                                    <span className="vciso-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="vciso-pillar-top">
                                        <div className="vciso-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="vciso-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="vciso-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="vciso-pillar-divider" />
                                    <ul className="vciso-pillar-list">
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
            <section className="vciso-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="vciso-container">
                    <ScrollReveal direction="up">
                        <div className="vciso-cta-content">
                            <h2 className="vciso-cta-title">
                                <span className="vciso-grad">Need Strategic Security Leadership?</span>
                            </h2>
                            <p className="vciso-cta-description">
                                Partner with experienced security executives to design and manage your cybersecurity program.
                            </p>
                            <div className="vciso-cta-buttons">
                                <Link to="/contact" className="vciso-btn vciso-cta-btn">
                                    <span>Schedule a Consultation</span>
                                    <ArrowRight size={18} className="vciso-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default VirtualCISO;
