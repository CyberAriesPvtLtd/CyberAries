import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/iso-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Globe, Target, ArrowRight, Landmark } from 'lucide-react';
import './ISO22301.css';

const challenges = [
    { icon: <AlertTriangle size={24} />, title: 'Business Impact Analysis Complexity', desc: 'Conducting a thorough BIA to identify critical processes, their dependencies, recovery time objectives, and recovery point objectives requires structured engagement across all business functions.' },
    { icon: <Settings size={24} />, title: 'Recovery Strategy Design', desc: 'Designing cost effective continuity and recovery strategies that genuinely meet defined RTO/RPO targets not just theoretical plans but operationally tested solutions.' },
    { icon: <Users size={24} />, title: 'Organizational Commitment', desc: 'Securing genuine top management commitment and cross-departmental ownership of continuity responsibilities across IT, operations, HR, communications, and facilities.' },
    { icon: <FileText size={24} />, title: 'Plan Documentation & Maintenance', desc: 'Developing comprehensive, actionable BCP and DR plans and maintaining them through organizational changes, technology updates, and operational evolution.' },
    { icon: <Eye size={24} />, title: 'Testing & Exercising', desc: 'Designing progressive exercises from tabletop simulations to full failover tests that genuinely validate recovery capability without disrupting live operations.' },
    { icon: <RefreshCw size={24} />, title: 'Supply Chain & Third Party Resilience', desc: 'Extending business continuity requirements to critical suppliers and partners, ensuring third-party disruptions do not cascade into your own business continuity failures.' },
];

const components = [
    { icon: <Target size={22} />, title: 'BCMS Scope & Context', desc: 'Defining the BCMS scope, organizational context, interested parties, and business continuity policy aligned with ISO 22301:2019 Clause 4 requirements.' },
    { icon: <BarChart3 size={22} />, title: 'Business Impact Analysis', desc: 'Structured BIA identifying critical business functions, dependencies, minimum business continuity objectives, and prioritized recovery requirements.' },
    { icon: <AlertTriangle size={22} />, title: 'Risk Assessment', desc: 'Identification and assessment of threats that could disrupt critical business activities, leading to a risk treatment plan and residual risk acceptance.' },
    { icon: <Shield size={22} />, title: 'Continuity Strategies', desc: 'Design and implementation of resilience, continuity, and recovery strategies that meet defined RTO/RPO objectives for critical business functions.' },
    { icon: <FileText size={22} />, title: 'BCP & DR Plans', desc: 'Development of comprehensive, actionable Business Continuity Plans, IT Disaster Recovery Plans, and Crisis Communication Plans.' },
    { icon: <Eye size={22} />, title: 'Exercise & Testing Programme', desc: 'Structured exercise programme progressing from tabletop simulations through walkthroughs to full failover tests with documented results.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'Gap Analysis', desc: 'Comprehensive assessment of your current business continuity posture against ISO 22301:2019, identifying gaps across all clauses and continuity capabilities.' },
    { icon: <Target size={22} />, title: 'BCMS Scope & Policy', desc: 'Define BCMS organizational context, stakeholder requirements, BCMS scope, and business continuity policy meeting ISO 22301 Clause 4-5 requirements.' },
    { icon: <BarChart3 size={22} />, title: 'Business Impact Analysis', desc: 'Facilitated BIA across all business functions — identifying critical processes, dependencies, RTO/RPO requirements, and minimum business continuity objectives.' },
    { icon: <AlertTriangle size={22} />, title: 'Threat & Risk Assessment', desc: 'Assessment of threats to critical business activities with likelihood and impact scoring, risk treatment decisions, and residual risk documentation.' },
    { icon: <Settings size={22} />, title: 'Continuity Strategy Design', desc: 'Design cost effective continuity strategies backup facilities, cloud DR, manual workarounds genuinely meeting your defined RTO/RPO targets.' },
    { icon: <FileCheck size={22} />, title: 'BCP/DR Plan Development', desc: 'Develop comprehensive, actionable BCP, IT DR plans, and crisis communication plans with clear roles, escalation paths, and step by step procedures.' },
    { icon: <Users size={22} />, title: 'Training & Awareness', desc: 'Role-specific training for Crisis Management Team, BCP coordinators, IT recovery teams, and organization-wide business continuity awareness.' },
    { icon: <Eye size={22} />, title: 'Exercise & Testing', desc: 'Progressive exercise programme from tabletop simulations through technical failover tests with documented results, lessons learned, and plan updates.' },
    { icon: <FileText size={22} />, title: 'Internal Audit', desc: 'BCMS internal audit against ISO 22301:2019 requirements with findings, nonconformity reports, and corrective action tracking.' },
    { icon: <Award size={22} />, title: 'Certification Audit Support', desc: 'Stage 1 and Stage 2 certification audit support with pre audit readiness review, document preparation, and on site auditor liaison.' },
];

const checklist = [
    'Gap analysis against all ISO 22301:2019 clauses and continuity requirements',
    'BCMS scope definition and organizational context analysis',
    'Business Impact Analysis covering all critical business functions',
    'RTO and RPO definition for all critical processes and IT systems',
    'Threat and risk assessment for all identified critical activities',
    'Continuity strategy design meeting defined RTO/RPO objectives',
    'Business Continuity Plans with step by step recovery procedures',
    'IT Disaster Recovery Plans with technical failover procedures',
    'Crisis Communication Plan with stakeholder notification procedures',
    'Exercise programme including tabletop simulations and failover tests',
    'Internal BCMS audit with corrective action management',
    'ISO 22301:2019 certification audit Stage 1 & Stage 2 support',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'ISO 22301 Certified Practitioners', desc: 'Our team includes ISO 22301 Lead Implementers and Lead Auditors with proven certification experience across enterprise, BFSI, and critical infrastructure organizations.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Operational Resilience Focus', desc: 'We build business continuity programmes that genuinely work not just certification tick boxes with tested plans and validated recovery capabilities.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'End-to-End Implementation', desc: 'Complete BIA through strategy design, BCP/DR development, exercise programme, internal audit, and certification audit support in one engagement.' },
];

const trad = [
    'BIA conducted as a documentation exercise without operational validation.',
    'Recovery strategies designed without testing against real RTO/RPO targets.',
    'BCP documents developed but never exercised or tested in practice.',
    'Crisis Management Team trained once without periodic rehearsal.',
    'BCMS abandoned post certification with outdated plans and untested strategies.',
    'Certification audit surprises due to inadequate preparation and mock audits.',
];
const ca = [
    'BIA conducted through structured workshops producing operationally valid results.',
    'Recovery strategies tested against defined RTO/RPO targets before certification.',
    'Progressive exercise programme from tabletop to full failover tests with results.',
    'Crisis Management Team rehearsed through realistic multi-scenario simulations.',
    'Post-certification continual improvement programme keeping BCMS current and tested.',
    'Pre audit readiness review eliminating certification surprises and NCRs.',
];

const deliverables = [
    { icon: <FileText size={28} />, title: 'BCMS Documentation', items: ['Business Continuity Policy & BCMS Manual', 'Business Impact Analysis Report', 'Threat & Risk Assessment Report', 'Complete BCP/DR Plan Suite'] },
    { icon: <Settings size={28} />, title: 'Recovery Strategies', items: ['Continuity Strategy Document', 'IT Disaster Recovery Architecture', 'Crisis Communication Plan', 'Supply Chain Continuity Framework'] },
    { icon: <Eye size={28} />, title: 'Testing & Validation', items: ['Exercise Programme Design & Schedule', 'Tabletop Exercise Results & Lessons', 'Technical Failover Test Reports', 'Plan Update Register'] },
    { icon: <Award size={28} />, title: 'Certification Support', items: ['Internal BCMS Audit Reports', 'Nonconformity & Corrective Actions Register', 'Stage 1 & Stage 2 Audit Preparation', 'Surveillance Audit Readiness Plan'] },
];

const ISO22301 = () => {
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
        <div className="i223-page">
            {/* HERO SECTION */}
            <section className="i223-hero" ref={heroRef}>
                <motion.div
                    className="i223-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="i223-hero-overlay" />
                <div className="i223-hero-glow" />

                {/* Floating particles */}
                <div className="i223-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="i223-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="i223-container">
                    <div className="i223-hero-inner">
                        <div className="i223-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="i223-hero-badge">
                  <Landmark size={14} className="i223-badge-icon" />
                  <span className="i223-badge-text">
                    COMPLIANCE <span className="i223-badge-divider">/</span> ISO STANDARDS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="i223-hero-title">
                                    <span className="i223-grad">ISO 22301 BUSINESS CONTINUITY</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="i223-hero-description">
                                    ISO 22301:2019 is the <strong>international standard for Business Continuity Management Systems (BCMS)</strong>. Certification demonstrates that your organization can maintain critical operations, protect staff, and serve customers through disruptions from cyberattacks and power outages to pandemics and natural disasters.
                                </p>
                                <p className="i223-hero-description">
                                    Our ISO 22301 practice delivers <strong>end to end BCMS implementation</strong> from Business Impact Analysis and continuity strategy design through BCP/DR plan development, exercise programmes, and certification audit support.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="i223-hero-actions">
                                    <button className="i223-btn i223-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a BCMS Gap Analysis
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i223-sec i223-bg-offwhite">
                <div className="i223-container">
                    <ScrollReveal direction="up">
                        <div className="i223-hdr">
                            <p className="i223-eyebrow-red">Our Challenges</p>
                            <h2 className="i223-title">ISO 22301 Implementation Challenges</h2>
                            <p className="i223-desc">Organizations face significant practical challenges building genuine business continuity capability aligned with ISO 22301:2019</p>
                        </div>
                    </ScrollReveal>
                    <div className="i223-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="i223-challenge-card">
                                    <div className="i223-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="i223-ch-content">
                                        <div className="i223-ch-header">
                                            <div className="i223-ch-icon-box">{c.icon}</div>
                                            <h3 className="i223-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="i223-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="i223-sec i223-bg-white-grid">
                <div className="i223-grid-overlay" />
                <div className="i223-container">
                    <ScrollReveal direction="up">
                        <div className="i223-hdr">
                            <p className="i223-eyebrow-red">Our Framework</p>
                            <h2 className="i223-title">Our ISO 22301 Implementation Framework</h2>
                            <p className="i223-desc">A comprehensive BCMS implementation approach covering all clauses of ISO 22301:2019 from strategy through certification</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="i223-fw-row">
                            {components.slice(0, 3).map((step, index) => (
                                <div className="i223-fw-card" key={index}>
                                    <div className="i223-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="i223-fw-connector" />}
                                    <div className="i223-fw-icon">{step.icon}</div>
                                    <h3 className="i223-fw-title">{step.title}</h3>
                                    <p className="i223-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="i223-fw-row-2">
                            {components.slice(3, 6).map((step, index) => (
                                <div className="i223-fw-card" key={index + 3}>
                                    <div className="i223-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="i223-fw-connector" />}
                                    <div className="i223-fw-icon">{step.icon}</div>
                                    <h3 className="i223-fw-title">{step.title}</h3>
                                    <p className="i223-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i223-sec i223-bg-offwhite">
                <div className="i223-container">
                    <ScrollReveal direction="up">
                        <div className="i223-hdr">
                            <p className="i223-eyebrow-red">Our Approach</p>
                            <h2 className="i223-title">Our Implementation Methodology</h2>
                            <p className="i223-desc">A proven 10-step methodology from baseline gap analysis through ISO 22301 certification success</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="i223-methodology-timeline">
                        <div className="i223-methodology-line" />
                        <div className="i223-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`i223-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="i223-methodology-card">
                                            <div className="i223-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="i223-methodology-card-header">
                                                <div className="i223-methodology-card-icon">{a.icon}</div>
                                                <h3 className="i223-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="i223-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="i223-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="i223-sec i223-bg-white-grid">
                <div className="i223-grid-overlay" />
                <div className="i223-container">
                    <ScrollReveal direction="up">
                        <div className="i223-hdr">
                            <p className="i223-eyebrow-red">Our Checklist</p>
                            <h2 className="i223-title">ISO 22301 Coverage Checklist</h2>
                            <p className="i223-desc">Complete coverage of ISO 22301:2019 requirements across all BCMS implementation domains</p>
                        </div>
                    </ScrollReveal>
                    <div className="i223-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="i223-checklist-item">
                                    <div className="i223-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="i223-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i223-sec i223-bg-offwhite">
                <div className="i223-container">
                    <ScrollReveal direction="up">
                        <div className="i223-hdr">
                            <p className="i223-eyebrow-red">Why CyberAries</p>
                            <h2 className="i223-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="i223-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="i223-why-clean-card">
                                    <div className="i223-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="i223-why-clean-title">{w.title}</h3>
                                    <p className="i223-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="i223-diff i223-bg-white-grid">
                <div className="i223-grid-overlay" />
                <div className="i223-container">
                    <ScrollReveal direction="up">
                        <div className="i223-hdr">
                            <p className="i223-eyebrow-red">Our Difference</p>
                            <h2 className="i223-diff-title">THE <span className="i223-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="i223-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="i223-diff-card i223-diff-card--traditional">
                                <h3 className="i223-diff-heading">Traditional BCP Consultants</h3>
                                <ul className="i223-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="i223-diff-item">
                                            <span className="i223-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="i223-diff-card i223-diff-card--featured">
                                <h3 className="i223-diff-heading i223-diff-heading--ca">
                                    CyberAries ISO 22301 Practice
                                </h3>
                                <ul className="i223-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="i223-diff-item">
                                            <span className="i223-diff-bullet">
                                                <CheckCircle size={18} className="i223-check-icon" />
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
            <section className="i223-sec i223-bg-white-grid">
                <div className="i223-grid-overlay" />
                <div className="i223-container">
                    <ScrollReveal direction="up">
                        <div className="i223-hdr">
                            <p className="i223-eyebrow-red">Our Deliverables</p>
                            <h2 className="i223-title">Comprehensive Deliverables</h2>
                            <p className="i223-desc">End to end documentation, controls, and reporting to ensure ISO 22301 compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="i223-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="i223-pillar-card">
                                    <span className="i223-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="i223-pillar-top">
                                        <div className="i223-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="i223-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="i223-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="i223-pillar-divider" />
                                    <ul className="i223-pillar-list">
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
            <section className="i223-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="i223-container">
                    <ScrollReveal direction="up">
                        <div className="i223-cta-content">
                            <h2 className="i223-cta-title">
                                <span className="i223-grad">Ready to Achieve ISO 22301:2019 BCMS Certification?</span>
                            </h2>
                            <p className="i223-cta-description">
                                Build genuine business continuity capability and achieve ISO 22301 certification with our certified BCMS implementers.
                            </p>
                            <div className="i223-cta-buttons">
                                <Link to="/contact" className="i223-btn i223-cta-btn">
                                    <span>Request ISO 22301 Assessment</span>
                                    <ArrowRight size={18} className="i223-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ISO22301;
