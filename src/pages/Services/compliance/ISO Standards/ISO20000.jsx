import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/iso-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Globe, Target, ArrowRight, Landmark } from 'lucide-react';
import './ISO20000.css';

const challenges = [
    { icon: <Settings size={24} />, title: 'Service Management Maturity', desc: 'Most organizations have informal IT service management practices. ISO 20000-1 requires formalizing these into a structured, documented SMS across all 7 service management system clauses.' },
    { icon: <FileText size={24} />, title: 'Process Integration & Alignment', desc: 'Aligning ITSM processes — incident, change, capacity, availability, supplier management — into a coherent SMS while maintaining operational continuity.' },
    { icon: <Users size={24} />, title: 'Supplier Management Obligations', desc: 'ISO 20000-1 mandates systematic management of all IT service supply chains — including cloud providers, outsourced services, and software vendors — through formal supplier agreements.' },
    { icon: <BarChart3 size={24} />, title: 'Service Reporting & Metrics', desc: 'Establishing meaningful service performance measurement, reporting against agreed SLAs, and triggering improvement actions when targets are missed.' },
    { icon: <AlertTriangle size={24} />, title: 'Change & Release Management', desc: 'Implementing formal change management controls that reduce service disruption risk while enabling the business to move at speed.' },
    { icon: <RefreshCw size={24} />, title: 'Continual Service Improvement', desc: 'Embedding a genuine CSI culture with structured improvement initiatives, not just annual reviews — ensuring the SMS continues to deliver value post-certification.' },
];

const components = [
    { icon: <Target size={22} />, title: 'SMS Scope & Governance', desc: 'Defining the SMS scope, organizational context, stakeholder requirements, and service management policy aligned with ISO 20000-1:2018 Clause 4-5.' },
    { icon: <Shield size={22} />, title: 'Service Planning & Design', desc: 'Service catalogue management, SLA definition, capacity and availability planning, and service continuity aligned with business requirements.' },
    { icon: <RefreshCw size={22} />, title: 'Incident & Problem Management', desc: 'Formalized incident and problem management processes with defined priority, escalation, resolution, and root cause analysis procedures.' },
    { icon: <Settings size={22} />, title: 'Change & Release Management', desc: 'Risk-based change management controls and formal release management processes with testing, rollback, and documentation requirements.' },
    { icon: <Globe size={22} />, title: 'Supplier Management', desc: 'Systematic supplier identification, evaluation, agreement management, and performance monitoring across all IT service supply chain partners.' },
    { icon: <BarChart3 size={22} />, title: 'Service Reporting & Improvement', desc: 'Service performance measurement framework, SLA compliance reporting, and structured continual service improvement programme.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'Gap Analysis', desc: 'Comprehensive baseline assessment of current ITSM practices and processes against ISO 20000-1:2018, identifying gaps across all service management clauses.' },
    { icon: <Target size={22} />, title: 'SMS Scope & Policy', desc: 'Define SMS organizational context, stakeholder requirements, SMS scope statement, and service management policy aligned with ISO 20000-1:2018.' },
    { icon: <FileText size={22} />, title: 'Service Catalogue Development', desc: 'Develop formal service catalogue documenting all in scope services with attributes, service owners, and agreed service levels.' },
    { icon: <AlertTriangle size={22} />, title: 'Process Design & Documentation', desc: 'Design and document all required SMS processes — incident, problem, change, release, supplier, capacity, availability, and continuity management.' },
    { icon: <BarChart3 size={22} />, title: 'SLA & OLA Development', desc: 'Develop Service Level Agreements with customers and Operational Level Agreements with internal teams, establishing measurable service targets.' },
    { icon: <Globe size={22} />, title: 'Supplier Management Framework', desc: 'Implement formal supplier management — classification, agreement review, performance monitoring — covering all IT service supply chain partners.' },
    { icon: <Settings size={22} />, title: 'Change & Release Controls', desc: 'Implement change advisory board, risk-based change classification, emergency change procedures, and formal release management processes.' },
    { icon: <Eye size={22} />, title: 'Tooling & Automation', desc: 'Configure ITSM tooling to support ISO 20000-1 process requirements — ticket management, change records, knowledge base, and reporting dashboards.' },
    { icon: <FileCheck size={22} />, title: 'Internal Audit', desc: 'SMS internal audit against all ISO 20000-1:2018 clauses with documented findings, nonconformity reports, and corrective action tracking.' },
    { icon: <Award size={22} />, title: 'Certification Audit Support', desc: 'Stage 1 and Stage 2 certification audit support including pre audit readiness review, documentation preparation, and on site auditor liaison.' },
];

const checklist = [
    'Gap analysis against all ISO 20000-1:2018 clauses and process requirements',
    'SMS scope definition and organizational context analysis',
    'Service catalogue with all in scope services and service levels defined',
    'Incident management process with priority, escalation, and resolution procedures',
    'Problem management process with root cause analysis and known error management',
    'Change management process with CAB, risk-based classification, and emergency changes',
    'Release and deployment management procedures with testing and rollback controls',
    'Capacity and availability management plans and monitoring',
    'Service continuity plan aligned with business continuity requirements',
    'Supplier management framework with agreements and performance monitoring',
    'Service reporting against SLAs with continual improvement programme',
    'ISO 20000-1:2018 certification audit Stage 1 & Stage 2 support',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'ISO 20000 Lead Implementers', desc: 'Our team includes ISO 20000-1 certified practitioners with practical ITSM implementation experience across enterprise IT service providers and BFSI organizations.' },
    { icon: <Settings size={36} strokeWidth={1.5} />, title: 'ITSM & Process Expertise', desc: 'Deep ITSM process expertise — from incident and change management through supplier and capacity management — ensuring compliant and operationally effective processes.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'End to End SMS Delivery', desc: 'Complete gap analysis through process design, tooling configuration, internal audit, and certification audit support — delivered by certified SMS implementers.' },
];

const trad = [
    'Generic ITSM process templates not calibrated to your service delivery model.',
    'SMS documentation developed without operational process owner involvement.',
    'SLAs defined without underlying capacity or performance baseline data.',
    'Supplier management limited to contract review without ongoing monitoring.',
    'Change management delivers documentation but no tooling or workflow changes.',
    'ITSM tools not configured to support actual ISO 20000-1 process requirements.',
];
const ca = [
    'SMS processes designed around your actual service delivery architecture.',
    'Process documentation co developed with service owners and operations teams.',
    'SLAs grounded in capacity analysis and historical performance baselines.',
    'Supplier management framework with automated performance monitoring.',
    'Change management implemented end-to-end — CAB, tooling, procedures, training.',
    'ITSM tooling fully configured to support every ISO 20000-1 process requirement.',
];

const deliverables = [
    { icon: <FileText size={28} />, title: 'SMS Documentation', items: ['Service Management Policy & SMS Manual', 'Service Catalogue with SLAs', 'Complete Process Suite Documentation', 'Supplier Register & Agreement Templates'] },
    { icon: <Settings size={28} />, title: 'Process Implementations', items: ['Incident & Problem Management Workflows', 'Change & Release Management Procedures', 'Capacity & Availability Management Plans', 'Service Continuity Plan'] },
    { icon: <BarChart3 size={28} />, title: 'Reporting & Metrics', items: ['SLA Performance Dashboard', 'Service Reporting Templates', 'KPI Metrics Framework', 'Supplier Performance Scorecard'] },
    { icon: <Award size={28} />, title: 'Certification Support', items: ['Internal SMS Audit Reports', 'Nonconformity & Corrective Actions Register', 'Stage 1 & Stage 2 Audit Preparation', 'Continual Improvement Programme'] },
];

const ISO20000 = () => {
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
        <div className="i200-page">
            {/* HERO SECTION */}
            <section className="i200-hero" ref={heroRef}>
                <motion.div
                    className="i200-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="i200-hero-overlay" />
                <div className="i200-hero-glow" />

                {/* Floating particles */}
                <div className="i200-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="i200-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="i200-container">
                    <div className="i200-hero-inner">
                        <div className="i200-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="i200-hero-badge">
                  <Landmark size={14} className="i200-badge-icon" />
                  <span className="i200-badge-text">
                    COMPLIANCE <span className="i200-badge-divider">/</span> ISO STANDARDS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="i200-hero-title">
                                    <span className="i200-grad">ISO 20000 IT SERVICE MANAGEMENT</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="i200-hero-description">
                                    ISO/IEC 20000-1:2018 is the <strong>international standard for IT Service Management Systems (SMS)</strong>. Certification demonstrates that your IT service delivery is systematically managed with formal processes, defined SLAs, supplier management, and continual improvement reassuring customers, regulators, and partners.
                                </p>
                                <p className="i200-hero-description">
                                    Our ISO 20000 practice delivers <strong>end to end SMS implementation</strong> from gap analysis through process design, SLA development, supplier management, tooling configuration, internal audit, and certification audit support.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="i200-hero-actions">
                                    <button className="i200-btn i200-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule an SMS Gap Analysis
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i200-sec i200-bg-offwhite">
                <div className="i200-container">
                    <ScrollReveal direction="up">
                        <div className="i200-hdr">
                            <p className="i200-eyebrow-red">Our Challenges</p>
                            <h2 className="i200-title">ISO 20000 Implementation Challenges</h2>
                            <p className="i200-desc">IT service providers face significant challenges formalizing service management practices to meet ISO 20000-1:2018 requirements</p>
                        </div>
                    </ScrollReveal>
                    <div className="i200-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="i200-challenge-card">
                                    <div className="i200-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="i200-ch-content">
                                        <div className="i200-ch-header">
                                            <div className="i200-ch-icon-box">{c.icon}</div>
                                            <h3 className="i200-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="i200-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="i200-sec i200-bg-white-grid">
                <div className="i200-grid-overlay" />
                <div className="i200-container">
                    <ScrollReveal direction="up">
                        <div className="i200-hdr">
                            <p className="i200-eyebrow-red">Our Framework</p>
                            <h2 className="i200-title">Our ISO 20000 Implementation Framework</h2>
                            <p className="i200-desc">Comprehensive SMS implementation covering all ISO 20000-1:2018 service management clauses and process domains</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="i200-fw-row">
                            {components.slice(0, 3).map((step, index) => (
                                <div className="i200-fw-card" key={index}>
                                    <div className="i200-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="i200-fw-connector" />}
                                    <div className="i200-fw-icon">{step.icon}</div>
                                    <h3 className="i200-fw-title">{step.title}</h3>
                                    <p className="i200-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="i200-fw-row-2">
                            {components.slice(3, 6).map((step, index) => (
                                <div className="i200-fw-card" key={index + 3}>
                                    <div className="i200-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="i200-fw-connector" />}
                                    <div className="i200-fw-icon">{step.icon}</div>
                                    <h3 className="i200-fw-title">{step.title}</h3>
                                    <p className="i200-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i200-sec i200-bg-offwhite">
                <div className="i200-container">
                    <ScrollReveal direction="up">
                        <div className="i200-hdr">
                            <p className="i200-eyebrow-red">Our Approach</p>
                            <h2 className="i200-title">Our Implementation Methodology</h2>
                            <p className="i200-desc">A proven 10-step methodology from baseline gap analysis through ISO 20000-1 certification success</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="i200-methodology-timeline">
                        <div className="i200-methodology-line" />
                        <div className="i200-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`i200-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="i200-methodology-card">
                                            <div className="i200-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="i200-methodology-card-header">
                                                <div className="i200-methodology-card-icon">{a.icon}</div>
                                                <h3 className="i200-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="i200-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="i200-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="i200-sec i200-bg-white-grid">
                <div className="i200-grid-overlay" />
                <div className="i200-container">
                    <ScrollReveal direction="up">
                        <div className="i200-hdr">
                            <p className="i200-eyebrow-red">Our Checklist</p>
                            <h2 className="i200-title">ISO 20000 Coverage Checklist</h2>
                            <p className="i200-desc">Complete coverage of ISO 20000-1:2018 requirements across all SMS process domains</p>
                        </div>
                    </ScrollReveal>
                    <div className="i200-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="i200-checklist-item">
                                    <div className="i200-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="i200-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="i200-sec i200-bg-offwhite">
                <div className="i200-container">
                    <ScrollReveal direction="up">
                        <div className="i200-hdr">
                            <p className="i200-eyebrow-red">Why CyberAries</p>
                            <h2 className="i200-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="i200-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="i200-why-clean-card">
                                    <div className="i200-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="i200-why-clean-title">{w.title}</h3>
                                    <p className="i200-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="i200-diff i200-bg-white-grid">
                <div className="i200-grid-overlay" />
                <div className="i200-container">
                    <ScrollReveal direction="up">
                        <div className="i200-hdr">
                            <p className="i200-eyebrow-red">Our Difference</p>
                            <h2 className="i200-diff-title">THE <span className="i200-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="i200-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="i200-diff-card i200-diff-card--traditional">
                                <h3 className="i200-diff-heading">Traditional ITSM Consultants</h3>
                                <ul className="i200-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="i200-diff-item">
                                            <span className="i200-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="i200-diff-card i200-diff-card--featured">
                                <h3 className="i200-diff-heading i200-diff-heading--ca">
                                    CyberAries ISO 20000 Practice
                                </h3>
                                <ul className="i200-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="i200-diff-item">
                                            <span className="i200-diff-bullet">
                                                <CheckCircle size={18} className="i200-check-icon" />
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
            <section className="i200-sec i200-bg-white-grid">
                <div className="i200-grid-overlay" />
                <div className="i200-container">
                    <ScrollReveal direction="up">
                        <div className="i200-hdr">
                            <p className="i200-eyebrow-red">Our Deliverables</p>
                            <h2 className="i200-title">Comprehensive Deliverables</h2>
                            <p className="i200-desc">End to end documentation, controls, and reporting to ensure ISO 20000 compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="i200-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="i200-pillar-card">
                                    <span className="i200-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="i200-pillar-top">
                                        <div className="i200-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="i200-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="i200-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="i200-pillar-divider" />
                                    <ul className="i200-pillar-list">
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
            <section className="i200-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="i200-container">
                    <ScrollReveal direction="up">
                        <div className="i200-cta-content">
                            <h2 className="i200-cta-title">
                                <span className="i200-grad">Ready to Achieve ISO 20000-1:2018 SMS Certification?</span>
                            </h2>
                            <p className="i200-cta-description">
                                Build a genuinely effective IT service management system and achieve ISO 20000-1 certification with our certified SMS implementers.
                            </p>
                            <div className="i200-cta-buttons">
                                <Link to="/contact" className="i200-btn i200-cta-btn">
                                    <span>Request ISO 20000 Assessment</span>
                                    <ArrowRight size={18} className="i200-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ISO20000;
