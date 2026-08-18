import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/us-federal-standards-hero.webp';
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
  Search,
  Settings,
  Shield,
  Target
} from 'lucide-react';
import './NIST80053.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Control Baseline Selection & Scoping', desc: 'NIST SP 800-53 Rev 5 provides 20 control families and over 1,000 controls. Selecting the correct control baseline (Low, Moderate, High), scoping applicable controls, and applying overlays for specific environments requires deep framework knowledge.' },
    { icon: <Database size={40} />, title: 'Control Implementation Complexity', desc: 'NIST 800-53 controls span technical, operational, and management disciplines — access control, audit, incident response, supply chain risk management, privacy controls — requiring coordinated implementation across IT, security, and operations teams.' },
    { icon: <Settings size={40} />, title: 'Privacy Control Integration', desc: 'NIST SP 800-53 Rev 5 fully integrates privacy controls the Privacy (PT) control family and privacy related controls across all other families requiring organisations to address privacy alongside security in a unified framework.' },
    { icon: <Globe size={40} />, title: 'Assessment & Authorisation Alignment', desc: 'NIST 800-53 is the baseline for FISMA compliance, FedRAMP authorization, and RMF assessment. Aligning control implementation to the assessment procedures in NIST SP 800-53A is essential for authorisation success.' },
    { icon: <Lock size={40} />, title: 'Supply Chain Risk Management Controls', desc: 'Rev 5 significantly expanded Supply Chain Risk Management (SR) controls — requiring organisations to assess and manage cybersecurity risk in technology suppliers, software vendors, and external service providers.' },
    { icon: <AlertTriangle size={40} />, title: 'Continuous Monitoring Obligations', desc: 'Authorization to Operate under RMF requires ongoing continuous monitoring — control assessment updates, POA&M management, security status reporting, and change management integration — not point-in-time compliance.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'Control Baseline & Scoping', desc: 'Impact level determination (Low/Moderate/High), control baseline selection, overlay application, and tailoring decisions — establishing the exact control set applicable to your system or organisation.' },
    { icon: <Database size={40} />, title: 'Control Implementation', desc: 'Technical and operational implementation of all required NIST 800-53 controls across access control, audit, configuration management, incident response, media protection, and all applicable control families.' },
    { icon: <FileText size={40} />, title: 'System Security Plan (SSP)', desc: 'Development of the System Security Plan documenting control implementations, responsible roles, implementation status, and system description — the core authorisation document for RMF and FedRAMP.' },
    { icon: <Eye size={40} />, title: 'Security Assessment Support', desc: 'Preparation for NIST SP 800-53A assessment evidence collation, assessor coordination, SAR response, and POA&M development for identified weaknesses.' },
    { icon: <Lock size={40} />, title: 'Privacy Control Implementation', desc: 'Implementation of NIST 800-53 Rev 5 privacy controls — data quality (DQ), individual participation (IP), privacy authorization (PA), privacy maintenance (PM), and privacy controls integrated across all families.' },
    { icon: <Award size={40} />, title: 'Continuous Monitoring Programme', desc: 'Design and implementation of a NIST RMF-aligned continuous monitoring programme — ongoing control assessment, POA&M management, and security status reporting to Authorizing Officials.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'System Categorization', desc: 'FIPS 199 system categorization — determining the impact level (Low, Moderate, High) for confidentiality, integrity, and availability — establishing the baseline for control selection.' },
    { icon: <Target size={40} />, title: 'Control Selection & Tailoring', desc: 'Select the appropriate NIST 800-53 baseline, apply applicable overlays (privacy, classified, cloud, IoT), and document tailoring decisions establishing the precise control set.' },
    { icon: <Database size={40} />, title: 'Control Gap Assessment', desc: 'Assess current control implementations against all selected NIST 800-53 controls — documenting implemented, partially implemented, and not-implemented controls with gap analysis.' },
    { icon: <Settings size={40} />, title: 'Control Implementation', desc: 'Implement all required controls across technical (access control, audit logging, encryption), operational (media protection, physical security), and management (risk assessment, planning) families.' },
    { icon: <Eye size={40} />, title: 'Privacy Controls Implementation', desc: 'Implement NIST 800-53 Rev 5 privacy controls — data quality, individual participation, privacy authorisation, and privacy controls mapped across all applicable control families.' },
    { icon: <Lock size={40} />, title: 'Supply Chain Risk Management', desc: 'Implement SR control family — supply chain risk plans, supplier assessments, ICT SCRM policies, and contractual controls for technology suppliers and external service providers.' },
    { icon: <FileText size={40} />, title: 'System Security Plan Development', desc: 'Develop the SSP documenting all control implementations, inherited controls, system description, and authorization boundary — meeting NIST SP 800-18 SSP guidelines.' },
    { icon: <Globe size={40} />, title: 'Evidence Collection & Assessment Preparation', desc: 'Compile implementation evidence for all controls and prepare for NIST SP 800-53A security assessment — organizing artefacts by control family for assessor review.' },
    { icon: <FileCheck size={40} />, title: 'POA&M Development & Tracking', desc: 'Develop a Plan of Action & Milestones for all identified control weaknesses — with remediation priorities, milestones, estimated completion dates, and responsible owners.' },
    { icon: <Award size={40} />, title: 'Continuous Monitoring Programme', desc: 'Design and implement the RMF-aligned ConMon programme — ongoing control assessment schedule, security impact analysis for changes, POA&M management, and AO reporting.' },
];

const checklist = [
    'FIPS 199 system categorization (Low, Moderate, High)',
    'NIST 800-53 Rev 5 control baseline selection and tailoring',
    'Overlay application privacy, cloud, IoT, or environment specific',
    'Control gap assessment against all selected control families',
    'Technical controls — access control, audit, cryptography, system communications',
    'Operational controls physical protection, media protection, maintenance',
    'Management controls — risk assessment, planning, program management',
    'Privacy control family (PT) and cross-family privacy control implementation',
    'Supply Chain Risk Management (SR) control family implementation',
    'System Security Plan (SSP) development per NIST SP 800-18',
    'Assessment evidence collection and NIST SP 800-53A readiness',
    'POA&M development and continuous monitoring programme design',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'NIST 800-53 Veterans', desc: 'Our team has implemented NIST 800-53 across federal agency environments, FedRAMP cloud authorizations, and DoD RMF programmes — with deep knowledge of all 20 control families and their assessment procedures.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Full Rev 5 Coverage', desc: 'We implement the complete NIST 800-53 Rev 5 framework — including the expanded privacy controls and significantly enhanced supply chain risk management controls that many implementations overlook.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Assessment Ready Evidence', desc: 'We build control implementation libraries with assessment-grade evidence — so your controls satisfy NIST SP 800-53A assessment procedures and assessor scrutiny without last-minute remediation.' },
];

const trad = [
    'Control baseline selected without formal FIPS 199 impact analysis.',
    'Privacy controls treated as optional rather than integrated throughout the framework.',
    'Supply chain risk controls not implemented — SR family overlooked in Rev 5.',
    'SSP documents describe intended controls rather than actual implementations.',
    'Evidence prepared reactively during assessment — not compiled throughout implementation.',
    'POA&M items tracked in a spreadsheet without formal remediation governance.',
];

const ca = [
    'Formal FIPS 199 categorization before control selection with documented rationale.',
    'Privacy controls fully integrated — PT family plus cross-family privacy controls implemented.',
    'SR control family fully implemented — supplier assessments, ICT SCRM, contractual controls.',
    'SSP accurately reflects actual control implementations with evidence references.',
    'Assessment-grade evidence compiled for every control throughout implementation.',
    'POA&M formally managed with milestones, owners, and AO reporting integration.',
];

const deliverables = [
    { icon: <Search size={36} />, title: 'Assessment & Scoping', items: ['FIPS 199 System Categorization', 'Control Baseline Selection & Tailoring', 'Control Gap Assessment Report', 'Privacy & SCRM Overlay Analysis'] },
    { icon: <Settings size={36} />, title: 'Control Implementation', items: ['Technical Controls Implementation', 'Operational Controls Implementation', 'Privacy Control Family Implementation', 'Supply Chain Risk Controls (SR Family)'] },
    { icon: <FileText size={36} />, title: 'Documentation', items: ['System Security Plan (SSP)', 'Control Implementation Evidence Library', 'Continuous Monitoring Strategy', 'Plan of Action & Milestones (POA&M)'] },
    { icon: <Award size={36} />, title: 'Assessment Support', items: ['NIST SP 800-53A Assessment Preparation', 'Assessor Liaison & Evidence Provision', 'Security Assessment Report (SAR) Response', 'Authorization Package Support'] },
];

const NIST80053 = () => {
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
        <div className="nist53-page">
            {/* HERO SECTION */}
            <section className="nist53-hero" ref={heroRef}>
                <motion.div
                    className="nist53-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="nist53-hero-overlay" />
                <div className="nist53-hero-glow" />

                {/* Floating particles */}
                <div className="nist53-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="nist53-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="nist53-container">
                    <div className="nist53-hero-inner">
                        <div className="nist53-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="nist53-hero-badge">
                  <Landmark size={14} className="nist53-badge-icon" />
                  <span className="nist53-badge-text">
                    STRATEGIC CONSULTING <span className="nist53-badge-divider">/</span> US FEDERAL STANDARDS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="nist53-hero-title">
                                    <span className="nist53-grad">NIST SP 800-53 <br /> FISMA COMPLIANCE</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="nist53-hero-description">
                                    Achieve robust federal information security compliance. We provide comprehensive gap assessments, control tailoring, and documentation suites aligned with NIST SP 800-53 security controls. Our team helps federal agencies, contractors, and cloud providers (FedRAMP candidates) implement the Risk Management Framework (RMF).
                                </p>
                                <p className="nist53-hero-description">
                                    By designing security control baselines, implementing technical audits, and supporting Authorization to Operate (ATO) assessments, we secure your federal information systems.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="nist53-hero-actions">
                                    <button className="nist53-btn nist53-btn-primary" onClick={() => navigate('/contact')}>
                                        Start Your RMF Journey
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="nist53-sec nist53-bg-offwhite">
                <div className="nist53-container">
                    <ScrollReveal direction="up">
                        <div className="nist53-hdr">
                            <p className="nist53-eyebrow-red">Challenges</p>
                            <h2 className="nist53-title">NIST 800-53 Compliance Challenges</h2>
                            <p className="nist53-desc">Navigating hundreds of complex security and privacy controls, tailoring baselines, and maintaining continuous ATO readiness</p>
                        </div>
                    </ScrollReveal>
                    <div className="nist53-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="nist53-challenge-card">
                                    <div className="nist53-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="nist53-ch-content">
                                        <div className="nist53-ch-header">
                                            <div className="nist53-ch-icon-box">{c.icon}</div>
                                            <h3 className="nist53-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="nist53-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="nist53-sec nist53-bg-white-grid">
                <div className="nist53-grid-overlay" />
                <div className="nist53-container">
                    <ScrollReveal direction="up">
                        <div className="nist53-hdr">
                            <p className="nist53-eyebrow-red">Our Framework</p>
                            <h2 className="nist53-title">Our NIST 800-53 RMF Framework</h2>
                            <p className="nist53-desc">End to end alignment with the 7 steps of the NIST Risk Management Framework and control families</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1-3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="nist53-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="nist53-fw-card" key={index}>
                                    <div className="nist53-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="nist53-fw-connector" />}
                                    <div className="nist53-fw-icon">{step.icon}</div>
                                    <h3 className="nist53-fw-title">{step.title}</h3>
                                    <p className="nist53-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4-6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="nist53-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="nist53-fw-card" key={index + 3}>
                                    <div className="nist53-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="nist53-fw-connector" />}
                                    <div className="nist53-fw-icon">{step.icon}</div>
                                    <h3 className="nist53-fw-title">{step.title}</h3>
                                    <p className="nist53-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="nist53-sec nist53-bg-offwhite">
                <div className="nist53-container">
                    <ScrollReveal direction="up">
                        <div className="nist53-hdr">
                            <p className="nist53-eyebrow-red">Our Approach</p>
                            <h2 className="nist53-title">Our FISMA RMF Methodology</h2>
                            <p className="nist53-desc">A structured, evidence based methodology guiding your system from categorization through ATO support</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="nist53-methodology-timeline">
                        <div className="nist53-methodology-line" />
                        <div className="nist53-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`nist53-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="nist53-methodology-card">
                                            <div className="nist53-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="nist53-methodology-card-header">
                                                <div className="nist53-methodology-card-icon">{a.icon}</div>
                                                <h3 className="nist53-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="nist53-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="nist53-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="nist53-sec nist53-bg-white-grid">
                <div className="nist53-grid-overlay" />
                <div className="nist53-container">
                    <ScrollReveal direction="up">
                        <div className="nist53-hdr">
                            <p className="nist53-eyebrow-red">Our Checklist</p>
                            <h2 className="nist53-title">NIST 800-53 Coverage Checklist</h2>
                            <p className="nist53-desc">Complete coverage of NIST 800-53 control families from access control to program management</p>
                        </div>
                    </ScrollReveal>
                    <div className="nist53-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="nist53-checklist-item">
                                    <div className="nist53-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="nist53-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="nist53-sec nist53-bg-offwhite">
                <div className="nist53-container">
                    <ScrollReveal direction="up">
                        <div className="nist53-hdr">
                            <p className="nist53-eyebrow-red">Why CyberAries</p>
                            <h2 className="nist53-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="nist53-why-grid-3">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="nist53-why-clean-card">
                                    <div className="nist53-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="nist53-why-clean-title">{w.title}</h3>
                                    <p className="nist53-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="nist53-diff nist53-bg-white-grid">
                <div className="nist53-grid-overlay" />
                <div className="nist53-container">
                    <ScrollReveal direction="up">
                        <div className="nist53-hdr">
                            <p className="nist53-eyebrow-red">Our Difference</p>
                            <h2 className="nist53-diff-title">THE <span className="nist53-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="nist53-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="nist53-diff-card nist53-diff-card--traditional">
                                <h3 className="nist53-diff-heading">Generic Compliance Checklists</h3>
                                <ul className="nist53-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="nist53-diff-item">
                                            <span className="nist53-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="nist53-diff-card nist53-diff-card--featured">
                                <h3 className="nist53-diff-heading nist53-diff-heading--ca">
                                    CyberAries NIST 800-53 Practice
                                </h3>
                                <ul className="nist53-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="nist53-diff-item">
                                            <span className="nist53-diff-bullet">
                                                <CheckCircle size={18} className="nist53-check-icon" />
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
            <section className="nist53-sec nist53-bg-white-grid">
                <div className="nist53-grid-overlay" />
                <div className="nist53-container">
                    <ScrollReveal direction="up">
                        <div className="nist53-hdr">
                            <p className="nist53-eyebrow-red">Our Deliverables</p>
                            <h2 className="nist53-title">Comprehensive Deliverables</h2>
                            <p className="nist53-desc">System Security Plan (SSP), Security Assessment Plan (SAP), Security Assessment Report (SAR), and POAM.</p>
                        </div>
                    </ScrollReveal>
                    <div className="nist53-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="nist53-pillar-card">
                                    <span className="nist53-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="nist53-pillar-top">
                                        <div className="nist53-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="nist53-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="nist53-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="nist53-pillar-divider" />
                                    <ul className="nist53-pillar-list">
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
            <section className="nist53-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="nist53-container">
                    <ScrollReveal direction="up">
                        <div className="nist53-cta-content">
                            <h2 className="nist53-cta-title">
                                <span className="nist53-grad">Ready to Achieve Your ATO?</span>
                            </h2>
                            <p className="nist53-cta-description">
                                Accelerate your RMF lifecycle and satisfy federal audit demands with certified security consultants.
                            </p>
                            <div className="nist53-cta-buttons">
                                <Link to="/contact" className="nist53-btn nist53-cta-btn">
                                    <span>Talk to an RMF Expert</span>
                                    <ArrowRight size={18} className="nist53-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default NIST80053;
