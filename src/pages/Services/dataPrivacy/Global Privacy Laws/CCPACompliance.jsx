import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/global-privacy-laws-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, Users, Award, Globe, Database, Eye, Target, ArrowRight, Landmark } from 'lucide-react';
import './CCPACompliance.css';

const challenges = [
    { icon: <Target size={24} />, title: 'Consumer Rights at Scale', desc: 'Managing CCPA/CPRA consumer rights — opt-out of sale, deletion, correction, portability, and access — at scale across digital channels, CRM systems, and third-party data brokers.' },
    { icon: <Database size={24} />, title: 'Personal Information Inventory', desc: 'Cataloguing all personal information collected across web properties, apps, and services; mapping disclosures to third parties, service providers, and contractors.' },
    { icon: <Globe size={24} />, title: '"Do Not Sell or Share" Implementation', desc: 'Implementing "Do Not Sell or Share My Personal Information" links, Global Privacy Control (GPC) signal recognition, opt-out preference propagation to all downstream recipients.' },
    { icon: <Lock size={24} />, title: 'Sensitive Personal Information Controls', desc: 'CPRA introduced a special category of Sensitive Personal Information (SPI) with additional use limitation and disclosure rights requiring distinct technical and policy controls.' },
    { icon: <Eye size={24} />, title: 'Contractor & Service Provider Management', desc: 'Ensuring all service providers, contractors and third parties operate under appropriate CCPA/CPRA contracts with data use limitations and no sale or sharing of personal information.' },
    { icon: <AlertTriangle size={24} />, title: 'Security & Breach Liability', desc: 'CCPA creates a private right of action for data breaches resulting from failure to implement reasonable security. Demonstrating reasonable security practices is both a compliance and litigation risk management priority.' },
];

const framework = [
    { icon: <Search size={22} />, title: 'CCPA/CPRA Gap Assessment', desc: 'Systematic gap assessment against CCPA as amended by CPRA — data inventory, privacy policy, consumer rights procedures, service provider contracts, and sensitive PI controls.' },
    { icon: <Database size={22} />, title: 'Personal Information Mapping', desc: 'Discovery and mapping of all personal information — including sensitive PI — collected, used, retained, disclosed, and sold or shared, across all business functions and systems.' },
    { icon: <Globe size={22} />, title: 'Consumer Privacy Rights Programme', desc: 'Design and implementation of all CCPA/CPRA consumer rights workflows — access, deletion, correction, portability, opt-out of sale/sharing, and limit SPI use requests.' },
    { icon: <Lock size={22} />, title: 'Privacy Notice & Policy Compliance', desc: 'Privacy policy, collection notices, and "Do Not Sell or Share" infrastructure aligned to CPRA\'s updated disclosure requirements.' },
    { icon: <Settings size={22} />, title: 'Service Provider Contract Programme', desc: 'Review and update of all vendor, service provider, and contractor agreements to include CCPA/CPRA required terms, data use limitations, and audit rights.' },
    { icon: <Shield size={22} />, title: 'Reasonable Security Implementation', desc: 'Implementing and documenting reasonable security practices — reducing CCPA private right of action exposure through a defensible, documented security posture.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'CCPA/CPRA Gap Assessment', desc: 'Baseline gap assessment against all CCPA and CPRA obligations including consumer rights, privacy notices, opt-out infrastructure, service provider management, and data retention.' },
    { icon: <Database size={22} />, title: 'Personal Information Inventory & Data Mapping', desc: 'Structured discovery of all PI collection points web, app, offline, CRM including sensitive PI categories, mapped to business purposes, retention, and disclosure recipients.' },
    { icon: <Globe size={22} />, title: '"Do Not Sell or Share" Infrastructure', desc: 'Implement DNSSS links, Global Privacy Control signal recognition, consent management platform configuration, and preference propagation to downstream service providers.' },
    { icon: <Users size={22} />, title: 'Consumer Rights Workflow Design', desc: 'Design and operationalize all consumer rights intake procedures — identity verification, verification exemptions for opt-out, fulfilment timelines, and exception handling.' },
    { icon: <FileText size={22} />, title: 'Privacy Notice & Policy Update', desc: 'Update privacy policy and collection notices to meet CPRA\'s enhanced disclosure requirements for categories, purposes, retention periods, and consumer rights.' },
    { icon: <Lock size={22} />, title: 'Sensitive Personal Information Controls', desc: 'Identify all SPI processing, implement use limitation controls, deploy a "Limit Use of My Sensitive Personal Information" link where required, and update privacy notices.' },
    { icon: <Settings size={22} />, title: 'Service Provider & Contractor Agreements', desc: 'Audit all third party relationships, classify as service providers, contractors, third parties, or data brokers, and update contracts with required CCPA/CPRA provisions.' },
    { icon: <Shield size={22} />, title: 'Reasonable Security Programme', desc: 'Implement reasonable security measures mapped to applicable frameworks, documented as a defensible security programme reducing CCPA data breach private right of action risk.' },
    { icon: <Eye size={22} />, title: 'Employee & Training Programme', desc: 'CCPA/CPRA awareness training for all staff handling consumer requests, and functional training for privacy, legal, and compliance teams.' },
    { icon: <Award size={22} />, title: 'Ongoing CPRA Compliance Management', desc: 'Annual privacy notice review, consumer rights audit, service provider register update, and CPPA regulatory monitoring for new rules and enforcement guidance.' },
];

const checklist = [
    'CCPA/CPRA gap assessment across all statutory obligations',
    'Personal information inventory and data mapping (all categories and SPI)',
    '"Do Not Sell or Share" links and Global Privacy Control signal recognition',
    'Privacy policy and collection notice update meeting CPRA requirements',
    'Consumer rights workflows access, deletion, correction, portability, opt out',
    'Sensitive Personal Information use limitation controls and notice',
    'Service provider, contractor, and third-party agreement review and update',
    'Employee consumer rights request handling training programme',
    'Reasonable security practices documentation and implementation',
    'Data broker registration review (if applicable)',
    'Automated preference signal propagation to downstream recipients',
    'Annual CPPA regulatory update monitoring and compliance review',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'CCPA/CPRA Specialists', desc: 'Our team has deep experience with CCPA as amended by CPRA — including CPPA rulemaking, GPC signal implementation, SPI controls, and enforcement-informed compliance priorities.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'Technical & Legal Integration', desc: 'We bridge legal CCPA/CPRA obligations with technical implementation — consent management platforms, preference propagation, and security controls — delivering end-to-end compliance.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Litigation Risk Management', desc: 'Our reasonable security programme is designed to reduce CCPA private right of action exposure giving you a documented, defensible security posture against breach litigation.' },
];

const trad = [
    'Privacy policy updated without reviewing actual data collection and disclosure practices.',
    '"Do Not Sell" links implemented without GPC signal recognition or preference propagation.',
    'Consumer rights procedures exist on paper but not operationally tested with real requests.',
    'Service provider agreements reviewed only for CCPA terms without functional data use review.',
    'Sensitive Personal Information controls not distinguished from general PI controls.',
    'Security practices not documented, leaving organizations exposed to CCPA breach litigation.',
];
const ca = [
    'Privacy policy derived from documented PI inventory with all categories and purposes.',
    'DNSSS and GPC configured with verified preference propagation to all service providers.',
    'Consumer rights workflows operationally tested with timing, verification, and exception handling.',
    'All service provider and contractor relationships classified and contracts updated.',
    'Separate SPI inventory, use limitation controls, and opt out infrastructure deployed.',
    'Reasonable security programme fully documented defensible against CCPA private right of action.',
];

const deliverables = [
    { icon: <Database size={28} />, title: 'Assessment & Discovery', items: ['CCPA/CPRA Gap Assessment Report', 'Personal Information Inventory & Data Map', 'Sensitive PI Registry & Use Limitation Plan', 'Third Party & Data Broker Classification Register'] },
    { icon: <FileText size={28} />, title: 'Notices & Policy', items: ['Updated Privacy Policy & Collection Notices', '"Do Not Sell or Share" Infrastructure', 'Limit SPI Use Notice & Controls', 'GPC Signal Recognition Implementation'] },
    { icon: <Users size={28} />, title: 'Consumer Rights', items: ['Consumer Rights Request Intake Procedures', 'Identity Verification & Verification Exemption Rules', 'Opt Out Preference Propagation Workflow', 'Consumer Rights Fulfilment Audit Log'] },
    { icon: <Shield size={28} />, title: 'Security & Ongoing', items: ['Reasonable Security Programme Documentation', 'Service Provider Agreement Review & Update', 'Employee Training Programme', 'Annual CPPA Regulatory Update Review'] },
];

const CCPACompliance = () => {
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
        <div className="ccpa-page">
            {/* HERO SECTION */}
            <section className="ccpa-hero" ref={heroRef}>
                <motion.div
                    className="ccpa-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="ccpa-hero-overlay" />
                <div className="ccpa-hero-glow" />

                {/* Floating particles */}
                <div className="ccpa-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="ccpa-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="ccpa-container">
                    <div className="ccpa-hero-inner">
                        <div className="ccpa-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="ccpa-hero-badge">
                  <Landmark size={14} className="ccpa-badge-icon" />
                  <span className="ccpa-badge-text">
                    DATA PRIVACY <span className="ccpa-badge-divider">/</span> GLOBAL PRIVACY LAWS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="ccpa-hero-title">
                                    <span className="ccpa-grad">CCPA/CPRA COMPLIANCE PROGRAMME</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="ccpa-hero-description">
                                    Master California’s privacy standards with confidence. We manage your end to end compliance obligations to protect your business from significant regulatory fines. By integrating PI inventory management, "Do Not Sell or Share" infrastructure, and automated consumer rights workflows, we ensure your organization meets every CPPA requirement.
                                </p>
                                <p className="ccpa-hero-description">
                                    Our programme provides the technical controls and ongoing monitoring needed to safeguard sensitive data, maintain consumer trust, and navigate evolving privacy thresholds seamlessly.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="ccpa-hero-actions">
                                    <button className="ccpa-btn ccpa-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a CCPA Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="ccpa-sec ccpa-bg-offwhite">
                <div className="ccpa-container">
                    <ScrollReveal direction="up">
                        <div className="ccpa-hdr">
                            <p className="ccpa-eyebrow-red">Our Challenges</p>
                            <h2 className="ccpa-title">CCPA/CPRA Compliance Challenges</h2>
                            <p className="ccpa-desc">Businesses subject to CCPA/CPRA face complex technical and operational challenges across consumer rights, data governance, and vendor management</p>
                        </div>
                    </ScrollReveal>
                    <div className="ccpa-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="ccpa-challenge-card">
                                    <div className="ccpa-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="ccpa-ch-content">
                                        <div className="ccpa-ch-header">
                                            <div className="ccpa-ch-icon-box">{c.icon}</div>
                                            <h3 className="ccpa-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="ccpa-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="ccpa-sec ccpa-bg-white-grid">
                <div className="ccpa-grid-overlay" />
                <div className="ccpa-container">
                    <ScrollReveal direction="up">
                        <div className="ccpa-hdr">
                            <p className="ccpa-eyebrow-red">Our Framework</p>
                            <h2 className="ccpa-title">Our CCPA/CPRA Framework</h2>
                            <p className="ccpa-desc">Comprehensive CCPA/CPRA compliance from PI inventory and opt out infrastructure through consumer rights, SPI controls, and reasonable security</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="ccpa-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="ccpa-fw-card" key={index}>
                                    <div className="ccpa-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="ccpa-fw-connector" />}
                                    <div className="ccpa-fw-icon">{step.icon}</div>
                                    <h3 className="ccpa-fw-title">{step.title}</h3>
                                    <p className="ccpa-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="ccpa-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="ccpa-fw-card" key={index + 3}>
                                    <div className="ccpa-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="ccpa-fw-connector" />}
                                    <div className="ccpa-fw-icon">{step.icon}</div>
                                    <h3 className="ccpa-fw-title">{step.title}</h3>
                                    <p className="ccpa-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="ccpa-sec ccpa-bg-offwhite">
                <div className="ccpa-container">
                    <ScrollReveal direction="up">
                        <div className="ccpa-hdr">
                            <p className="ccpa-eyebrow-red">Our Approach</p>
                            <h2 className="ccpa-title">Our Compliance Methodology</h2>
                            <p className="ccpa-desc">A 10-step CCPA/CPRA compliance methodology from gap assessment through annual CPPA regulatory monitoring</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="ccpa-methodology-timeline">
                        <div className="ccpa-methodology-line" />
                        <div className="ccpa-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`ccpa-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="ccpa-methodology-card">
                                            <div className="ccpa-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="ccpa-methodology-card-header">
                                                <div className="ccpa-methodology-card-icon">{a.icon}</div>
                                                <h3 className="ccpa-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="ccpa-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="ccpa-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="ccpa-sec ccpa-bg-white-grid">
                <div className="ccpa-grid-overlay" />
                <div className="ccpa-container">
                    <ScrollReveal direction="up">
                        <div className="ccpa-hdr">
                            <p className="ccpa-eyebrow-red">Our Checklist</p>
                            <h2 className="ccpa-title">CCPA/CPRA Coverage Checklist</h2>
                            <p className="ccpa-desc">Complete coverage of CCPA/CPRA compliance obligations for qualifying businesses</p>
                        </div>
                    </ScrollReveal>
                    <div className="ccpa-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="ccpa-checklist-item">
                                    <div className="ccpa-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="ccpa-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="ccpa-sec ccpa-bg-offwhite">
                <div className="ccpa-container">
                    <ScrollReveal direction="up">
                        <div className="ccpa-hdr">
                            <p className="ccpa-eyebrow-red">Why CyberAries</p>
                            <h2 className="ccpa-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="ccpa-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="ccpa-why-clean-card">
                                    <div className="ccpa-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="ccpa-why-clean-title">{w.title}</h3>
                                    <p className="ccpa-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="ccpa-diff ccpa-bg-white-grid">
                <div className="ccpa-grid-overlay" />
                <div className="ccpa-container">
                    <ScrollReveal direction="up">
                        <div className="ccpa-hdr">
                            <p className="ccpa-eyebrow-red">Our Difference</p>
                            <h2 className="ccpa-diff-title">THE <span className="ccpa-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="ccpa-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="ccpa-diff-card ccpa-diff-card--traditional">
                                <h3 className="ccpa-diff-heading">Generic Privacy Consultants</h3>
                                <ul className="ccpa-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="ccpa-diff-item">
                                            <span className="ccpa-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="ccpa-diff-card ccpa-diff-card--featured">
                                <h3 className="ccpa-diff-heading ccpa-diff-heading--ca">
                                    CyberAries CCPA/CPRA Practice
                                </h3>
                                <ul className="ccpa-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="ccpa-diff-item">
                                            <span className="ccpa-diff-bullet">
                                                <CheckCircle size={18} className="ccpa-check-icon" />
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
            <section className="ccpa-sec ccpa-bg-white-grid">
                <div className="ccpa-grid-overlay" />
                <div className="ccpa-container">
                    <ScrollReveal direction="up">
                        <div className="ccpa-hdr">
                            <p className="ccpa-eyebrow-red">Our Deliverables</p>
                            <h2 className="ccpa-title">Comprehensive Deliverables</h2>
                            <p className="ccpa-desc">End to end documentation, controls, and reporting to ensure CCPA compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="ccpa-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="ccpa-pillar-card">
                                    <span className="ccpa-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="ccpa-pillar-top">
                                        <div className="ccpa-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="ccpa-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="ccpa-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="ccpa-pillar-divider" />
                                    <ul className="ccpa-pillar-list">
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
            <section className="ccpa-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="ccpa-container">
                    <ScrollReveal direction="up">
                        <div className="ccpa-cta-content">
                            <h2 className="ccpa-cta-title">
                                <span className="ccpa-grad">Ready to Achieve CCPA/CPRA Compliance?</span>
                            </h2>
                            <p className="ccpa-cta-description">
                                Build a defensible CCPA/CPRA compliance programme that respects consumer rights, manages vendor obligations, and reduces regulatory and litigation exposure.
                            </p>
                            <div className="ccpa-cta-buttons">
                                <Link to="/contact" className="ccpa-btn ccpa-cta-btn">
                                    <span>Request CCPA Assessment</span>
                                    <ArrowRight size={18} className="ccpa-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default CCPACompliance;
