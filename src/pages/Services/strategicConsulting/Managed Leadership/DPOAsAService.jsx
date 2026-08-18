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
  FileText,
  Globe,
  Landmark,
  Lock,
  Settings,
  Shield,
  Target,
  Users
} from 'lucide-react';
import './DPOAsAService.css';

const challenges = [
    { icon: <Target size={40} />, title: 'DPO Appointment Obligation', desc: 'GDPR Article 37 mandates DPO appointment for public authorities, organisations conducting large-scale systematic monitoring, or large-scale processing of special category data — yet many organisations struggle to identify whether they are obligated or to find qualified candidates.' },
    { icon: <Users size={40} />, title: 'DPO Independence Requirement', desc: 'The DPO must operate with full independence — reporting directly to the highest management level and not being instructed on how to perform DPO tasks. Internal appointments often create conflicts of interest.' },
    { icon: <Globe size={40} />, title: 'Multi Jurisdictional Privacy Expertise', desc: 'A DPO must maintain expert knowledge of data protection law GDPR, applicable national derogations, sector specific rules across the jurisdictions where the organisation operates, including the rapidly evolving DPDP Act in India.' },
    { icon: <AlertTriangle size={40} />, title: 'Supervisory Authority Contact Point', desc: 'The DPO is the formal contact point for the supervisory authority — managing inquiries, investigation responses, DPIA consultations, and prior consultation procedures. Inadequate DPO engagement increases regulatory risk.' },
    { icon: <Settings size={40} />, title: 'Operationalising Privacy Governance', desc: 'The DPO must monitor compliance, provide advice, and cooperate with supervisory authorities — requiring active operational engagement with processing activities, not merely a titular appointment.' },
    { icon: <Database size={40} />, title: 'DPDP Act DPO/Grievance Officer Requirements', desc: 'India\'s DPDP Act requires Significant Data Fiduciaries to appoint a DPO — and all Data Fiduciaries to designate a grievance officer. Operationalising these Indian requirements requires combined GDPR and DPDP Act expertise.' },
];

const framework = [
    { icon: <Users size={40} />, title: 'DPO Role & Regulatory Compliance', desc: 'Fulfil the legal DPO role formal appointment documentation, supervisory authority registration, and GDPR/DPDP Act DPO obligation compliance assessment across your entire processing estate.' },
    { icon: <Eye size={40} />, title: 'Compliance Monitoring', desc: 'Ongoing monitoring of data processing activities for compliance with GDPR, DPDP Act, and applicable sector regulations reviewing processing operations, policies, and procedures.' },
    { icon: <FileText size={40} />, title: 'Privacy Governance Advisory', desc: 'DPO advisory on all matters relating to personal data processing reviewing new projects, advising on lawful basis, consent design, data retention, and privacy impact assessments.' },
    { icon: <Globe size={40} />, title: 'Supervisory Authority Liaison', desc: 'Management of all supervisory authority communications — inquiry responses, investigation management, prior consultation submissions, and breach notifications to the relevant DPA or Data Protection Board.' },
    { icon: <Lock size={40} />, title: 'Data Subject Rights & DPIA Support', desc: 'Overseeing Data Subject/Data Principal rights request handling and leading or reviewing DPIAs ensuring DPO consultation is documented in the DPIA record as required by GDPR Article 35.' },
    { icon: <Award size={40} />, title: 'Training & Awareness', desc: 'Conducting or coordinating GDPR/DPDP Act training for all staff involved in processing personal data ensuring the organisation has documented awareness across the workforce.' },
];

const approach = [
    { icon: <Target size={40} />, title: 'DPO Obligation Assessment', desc: 'Determine whether GDPR DPO appointment is mandatory or voluntary for your organisation, and whether Indian DPDP Act Significant Data Fiduciary DPO or grievance officer obligations apply.' },
    { icon: <FileText size={40} />, title: 'DPO Appointment Documentation', desc: 'Prepare and publish DPO appointment documentation role description, independence declaration, supervisory authority registration, and internal communication of DPO contact details.' },
    { icon: <Eye size={40} />, title: 'Processing Activity Orientation', desc: 'Orient the DPO to all personal data processing activities reviewing the ROPA, existing policies, consent mechanisms, and DSR procedures to establish the required expert knowledge base.' },
    { icon: <Settings size={40} />, title: 'Compliance Monitoring Programme', desc: 'Establish a structured compliance monitoring programme — periodic review of processing activities, policy updates, new system assessments, and GDPR/DPDP Act compliance calendar.' },
    { icon: <Globe size={40} />, title: 'Supervisory Authority Registration', desc: 'Register the DPO with all relevant supervisory authorities as required and establish a protocol for managing inquiries, investigations, and prior consultation requests.' },
    { icon: <FileCheck size={40} />, title: 'DPIA Programme Oversight', desc: 'Review and approve DPIAs for all high risk processing activities, ensuring DPO consultation is documented and mitigation measures are adequate before processing begins.' },
    { icon: <Users size={40} />, title: 'DSR & Grievance Redressal Oversight', desc: 'Oversee Data Subject/Data Principal rights request fulfilment reviewing DSR procedures, monitoring response timelines, and escalating edge cases where DPO guidance is required.' },
    { icon: <Lock size={40} />, title: 'Training & Awareness Delivery', desc: 'Conduct or coordinate GDPR/DPDP Act training for all processing role staff awareness training, role specific modules for privacy, legal, HR, and IT teams, with training completion records.' },
    { icon: <AlertTriangle size={40} />, title: 'Breach Notification Management', desc: 'Lead the DPO\'s role in breach response advising on the four factor risk assessment, supervisory authority notification content and timing, and Data Subject communication decisions.' },
    { icon: <Award size={40} />, title: 'Ongoing DPO Advisory & Representation', desc: 'Continuous DPO advisory for all new processing activities, system changes, contracts, and business decisions involving personal data — representing the DPO role at leadership meetings.' },
];

const checklist = [
    'GDPR DPO obligation assessment mandatory vs. voluntary appointment',
    'DPDP Act DPO and grievance officer obligation review (Significant Data Fiduciaries)',
    'DPO appointment documentation and supervisory authority registration',
    'Personal data processing activity orientation and ROPA review',
    'Compliance monitoring programme periodic reviews and compliance calendar',
    'Advisory on all new projects, systems, and business changes involving personal data',
    'DPIA oversight DPO consultation documented and mitigation reviewed',
    'Data Subject/Data Principal rights oversight DSR procedure review and monitoring',
    'Grievance redressal mechanism operation (DPDP Act)',
    'Supervisory authority inquiry and investigation management',
    'Breach notification DPO advisory on assessment, notification, and communication',
    'Workforce GDPR/DPDP Act training programme with completion records',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Qualified, Experienced DPOs', desc: 'Our DPOs hold recognised privacy qualifications (CIPP/E, CIPM) and have served as DPO for organisations across financial services, healthcare, technology, and media bringing genuine expertise, not nominal compliance.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Dual GDPR & DPDP Act Expertise', desc: 'We provide DPO services covering both GDPR (for EU operations) and DPDP Act (for Indian operations) serving organisations with dual regulatory exposure through a single service relationship.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'True DPO Independence', desc: 'As an external DPO, CyberAries operates with the full independence required by GDPR Article 38 without the conflicts of interest that frequently compromise internal DPO appointments.' },
];

const trad = [
    'DPO appointed in name only no active compliance monitoring or processing activity review.',
    'DPO not consulted on new projects data protection risks materialise without early input.',
    'DSR procedures exist but DPO not involved in oversight response timelines missed.',
    'DPIAs conducted without documented DPO consultation — GDPR Article 35 requirement missed.',
    'Breach notifications drafted by legal team without DPO \'s risk assessment involvement.',
    'Training delivered annually without DPO oversight training records not maintained.',
];

const ca = [
    'DPO actively monitors processing activities — reviewing new systems, policies, and data flows.',
    'All new projects assessed for data protection risk before launch DPO input formally documented.',
    'DSR programme overseen by DPO with response audit logs and escalation protocol.',
    'DPIA DPO consultation formally documented for every high risk processing assessment.',
    'Breach notification led by DPO four factor assessment, supervisory authority draft, decision record.',
    'Training programme designed and overseen by DPO completion records maintained.',
];

const deliverables = [
    { icon: <Users size={36} />, title: 'DPO Role & Documentation', items: ['DPO Appointment Documentation', 'Supervisory Authority Registration', 'DPO Independence Declaration', 'DPDP Act Grievance Officer Designation'] },
    { icon: <Eye size={36} />, title: 'Compliance & Advisory', items: ['Compliance Monitoring Programme', 'New Project Privacy Assessment', 'DPIA Review & DPO Consultation Record', 'Annual GDPR/DPDP Act Compliance Review'] },
    { icon: <FileText size={36} />, title: 'Rights & Governance', items: ['DSR/Data Principal Rights Oversight', 'Grievance Redressal Programme', 'Supervisory Authority Correspondence', 'Breach Notification Management'] },
    { icon: <Award size={36} />, title: 'Training & Reporting', items: ['GDPR/DPDP Act Training Programme', 'Training Completion Records', 'DPO Activity Report', 'Board Privacy Governance Summary'] },
];

const DPOAsAService = () => {
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
        <div className="dpo-page">
            {/* HERO SECTION */}
            <section className="dpo-hero" ref={heroRef}>
                <motion.div
                    className="dpo-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="dpo-hero-overlay" />
                <div className="dpo-hero-glow" />

                {/* Floating particles */}
                <div className="dpo-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="dpo-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="dpo-container">
                    <div className="dpo-hero-inner">
                        <div className="dpo-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="dpo-hero-badge">
                  <Landmark size={14} className="dpo-badge-icon" />
                  <span className="dpo-badge-text">
                    STRATEGIC CONSULTING <span className="dpo-badge-divider">/</span> MANAGED LEADERSHIP
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="dpo-hero-title">
                                    <span className="dpo-grad">DATA PROTECTION OFFICER <br /> AS A SERVICE (DPOaaS)</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="dpo-hero-description">
                                    Bridge the gap between regulatory mandates and business realities. We provide dedicated, expert led data privacy oversight, ensuring continuous compliance with global frameworks like GDPR, CCPA, and India's DPDPA. Our virtual DPO teams integrate seamlessly with your operations to establish privacy by design baselines, handle data subject requests, and oversee privacy impact assessments.
                                </p>
                                <p className="dpo-hero-description">
                                    By offering independent compliance reviews, employee training, and direct regulatory liaison support, we protect your organization from costly penalties while building trust with customers and partners.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="dpo-hero-actions">
                                    <button className="dpo-btn dpo-btn-primary" onClick={() => navigate('/contact')}>
                                        Hire a Virtual DPO
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpo-sec dpo-bg-offwhite">
                <div className="dpo-container">
                    <ScrollReveal direction="up">
                        <div className="dpo-hdr">
                            <p className="dpo-eyebrow-red">Challenges</p>
                            <h2 className="dpo-title">Data Privacy Governance Challenges</h2>
                            <p className="dpo-desc">Navigating shifting global privacy regulations, compliance deadlines, and organizational data processing risks</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpo-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="dpo-challenge-card">
                                    <div className="dpo-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="dpo-ch-content">
                                        <div className="dpo-ch-header">
                                            <div className="dpo-ch-icon-box">{c.icon}</div>
                                            <h3 className="dpo-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="dpo-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="dpo-sec dpo-bg-white-grid">
                <div className="dpo-grid-overlay" />
                <div className="dpo-container">
                    <ScrollReveal direction="up">
                        <div className="dpo-hdr">
                            <p className="dpo-eyebrow-red">Our Framework</p>
                            <h2 className="dpo-title">Our DPOaaS Framework</h2>
                            <p className="dpo-desc">Comprehensive privacy governance covering policy development, data mapping, risk assessment, and regulatory liaison</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1-3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="dpo-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="dpo-fw-card" key={index}>
                                    <div className="dpo-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="dpo-fw-connector" />}
                                    <div className="dpo-fw-icon">{step.icon}</div>
                                    <h3 className="dpo-fw-title">{step.title}</h3>
                                    <p className="dpo-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4-6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="dpo-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="dpo-fw-card" key={index + 3}>
                                    <div className="dpo-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="dpo-fw-connector" />}
                                    <div className="dpo-fw-icon">{step.icon}</div>
                                    <h3 className="dpo-fw-title">{step.title}</h3>
                                    <p className="dpo-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpo-sec dpo-bg-offwhite">
                <div className="dpo-container">
                    <ScrollReveal direction="up">
                        <div className="dpo-hdr">
                            <p className="dpo-eyebrow-red">Our Approach</p>
                            <h2 className="dpo-title">Our DPOaaS Methodology</h2>
                            <p className="dpo-desc">A structured, continuous privacy lifecycle management methodology tailored to your business operations</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="dpo-methodology-timeline">
                        <div className="dpo-methodology-line" />
                        <div className="dpo-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`dpo-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="dpo-methodology-card">
                                            <div className="dpo-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="dpo-methodology-card-header">
                                                <div className="dpo-methodology-card-icon">{a.icon}</div>
                                                <h3 className="dpo-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="dpo-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="dpo-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="dpo-sec dpo-bg-white-grid">
                <div className="dpo-grid-overlay" />
                <div className="dpo-container">
                    <ScrollReveal direction="up">
                        <div className="dpo-hdr">
                            <p className="dpo-eyebrow-red">Our Checklist</p>
                            <h2 className="dpo-title">Data Privacy Coverage Checklist</h2>
                            <p className="dpo-desc">Full lifecycle privacy compliance coverage from gap assessment through data protection audits</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpo-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="dpo-checklist-item">
                                    <div className="dpo-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="dpo-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="dpo-sec dpo-bg-offwhite">
                <div className="dpo-container">
                    <ScrollReveal direction="up">
                        <div className="dpo-hdr">
                            <p className="dpo-eyebrow-red">Why CyberAries</p>
                            <h2 className="dpo-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="dpo-why-grid-3">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="dpo-why-clean-card">
                                    <div className="dpo-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="dpo-why-clean-title">{w.title}</h3>
                                    <p className="dpo-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="dpo-diff dpo-bg-white-grid">
                <div className="dpo-grid-overlay" />
                <div className="dpo-container">
                    <ScrollReveal direction="up">
                        <div className="dpo-hdr">
                            <p className="dpo-eyebrow-red">Our Difference</p>
                            <h2 className="dpo-diff-title">THE <span className="dpo-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="dpo-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="dpo-diff-card dpo-diff-card--traditional">
                                <h3 className="dpo-diff-heading">Traditional Legal & IT Advisors</h3>
                                <ul className="dpo-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="dpo-diff-item">
                                            <span className="dpo-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="dpo-diff-card dpo-diff-card--featured">
                                <h3 className="dpo-diff-heading dpo-diff-heading--ca">
                                    CyberAries DPOaaS Practice
                                </h3>
                                <ul className="dpo-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="dpo-diff-item">
                                            <span className="dpo-diff-bullet">
                                                <CheckCircle size={18} className="dpo-check-icon" />
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
            <section className="dpo-sec dpo-bg-white-grid">
                <div className="dpo-grid-overlay" />
                <div className="dpo-container">
                    <ScrollReveal direction="up">
                        <div className="dpo-hdr">
                            <p className="dpo-eyebrow-red">Our Deliverables</p>
                            <h2 className="dpo-title">Comprehensive Deliverables</h2>
                            <p className="dpo-desc">Data mapping registers, DPIA templates, privacy policy suites, and regular compliance reports.</p>
                        </div>
                    </ScrollReveal>
                    <div className="dpo-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="dpo-pillar-card">
                                    <span className="dpo-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="dpo-pillar-top">
                                        <div className="dpo-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="dpo-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="dpo-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="dpo-pillar-divider" />
                                    <ul className="dpo-pillar-list">
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
            <section className="dpo-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="dpo-container">
                    <ScrollReveal direction="up">
                        <div className="dpo-cta-content">
                            <h2 className="dpo-cta-title">
                                <span className="dpo-grad">Ready to Appoint Your Data Protection Officer?</span>
                            </h2>
                            <p className="dpo-cta-description">
                                Ensure compliance, reduce data privacy risks, and build trust with dedicated virtual DPO services.
                            </p>
                            <div className="dpo-cta-buttons">
                                <Link to="/contact" className="dpo-btn dpo-cta-btn">
                                    <span>Talk to a Privacy Expert</span>
                                    <ArrowRight size={18} className="dpo-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default DPOAsAService;
