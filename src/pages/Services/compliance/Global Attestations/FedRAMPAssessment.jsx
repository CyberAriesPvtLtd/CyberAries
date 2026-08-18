import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/shield-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, Award, FileCheck, Eye, Database, Globe, Target, ArrowRight, Landmark } from 'lucide-react';
import './FedRAMPAssessment.css';

const challenges = [
    { icon: <Target size={24} />, title: 'Authorization Path Selection', desc: 'Choosing between Agency ATO, Joint Authorization Board (JAB) P ATO, or FedRAMP Ready designation and selecting the appropriate NIST SP 800-53 baseline (Low, Moderate, or High) is foundational to the FedRAMP journey.' },
    { icon: <Settings size={24} />, title: 'NIST SP 800-53 Control Complexity', desc: 'FedRAMP Moderate requires 323 controls; High requires 421 controls. Implementing and documenting all applicable controls with sufficient rigor for a 3PAO assessment is a significant organizational undertaking.' },
    { icon: <FileText size={24} />, title: 'System Security Plan Complexity', desc: 'The FedRAMP SSP is a comprehensive document — often hundreds of pages — describing every control implementation, system boundary, architecture, and responsibility in clear, auditable detail.' },
    { icon: <Eye size={24} />, title: 'Continuous Monitoring Obligations', desc: 'FedRAMP Authorization requires ongoing ConMon — monthly vulnerability scanning, annual penetration testing, change management reporting, and incident response integration with FISMA obligations.' },
    { icon: <AlertTriangle size={24} />, title: '3PAO Assessment Preparation', desc: 'A Third Party Assessment Organization (3PAO) conducts a rigorous security assessment. Preparing evidence, control test results, and documentation for the SAR requires detailed pre assessment readiness work.' },
    { icon: <Globe size={24} />, title: 'Cloud-Specific Control Implementation', desc: 'FedRAMP controls must be implemented in cloud environments (AWS GovCloud, Azure Government, Google Cloud) — requiring specialized cloud security engineering alongside compliance expertise.' },
];

const components = [
    { icon: <Target size={22} />, title: 'Authorization Path & Baseline Selection', desc: 'Guidance on FedRAMP authorization path (Agency ATO, JAB, Ready), impact level selection (Low/Moderate/High), and boundary scoping for your cloud service offering.' },
    { icon: <FileText size={22} />, title: 'System Security Plan (SSP)', desc: 'Development of the comprehensive FedRAMP SSP — including system description, authorization boundary, all control implementations, and data flow diagrams.' },
    { icon: <Shield size={22} />, title: 'NIST SP 800-53 Control Implementation', desc: 'Technical implementation and documentation of all applicable FedRAMP controls across your cloud environment, with evidence collection procedures for 3PAO assessment.' },
    { icon: <Eye size={22} />, title: 'Continuous Monitoring (ConMon)', desc: 'Design and implementation of the FedRAMP ConMon programme — vulnerability scanning, SIEM, change management reporting, and POA&M management.' },
    { icon: <Lock size={22} />, title: 'Supply Chain & Third Party Controls', desc: 'SCRM controls assessment and documentation covering all third party services, CSPs, and external service providers integrated into the FedRAMP boundary.' },
    { icon: <Award size={22} />, title: '3PAO Assessment Support', desc: 'Selection of accredited 3PAO, assessment coordination, SAR response, POA&M development, and Agency AO or JAB authorization package support.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'FedRAMP Readiness Assessment', desc: 'Comprehensive baseline assessment against the appropriate NIST SP 800-53 control baseline identifying control gaps, documentation deficiencies, and authorization boundary issues.' },
    { icon: <Target size={22} />, title: 'Authorization Path & Boundary Definition', desc: 'Define FedRAMP authorization path, impact level, and system authorization boundary — including all components, APIs, interconnections, and third-party services.' },
    { icon: <Database size={22} />, title: 'System Inventory & Architecture Documentation', desc: 'Develop comprehensive inventory of all system components within the authorization boundary with data flows, network diagrams, and system categorization documentation.' },
    { icon: <FileText size={22} />, title: 'System Security Plan Development', desc: 'Develop the FedRAMP SSP — the authoritative document describing system purpose, boundary, users, architecture, and all control implementations.' },
    { icon: <Settings size={22} />, title: 'Control Implementation & Remediation', desc: 'Implement and remediate all required FedRAMP controls across your cloud environment — access control, audit logging, encryption, incident response, and all applicable families.' },
    { icon: <Eye size={22} />, title: 'ConMon Programme Design', desc: 'Design and implement the FedRAMP Continuous Monitoring programme — vulnerability scanning schedule, SIEM and alerting, change management reporting, and POA&M process.' },
    { icon: <Lock size={22} />, title: 'Supply Chain Risk Management', desc: 'Document and implement SCRM controls covering all third-party services and CSPs within the authorization boundary.' },
    { icon: <Shield size={22} />, title: 'Penetration Testing Coordination', desc: 'Coordinate and support the annual FedRAMP penetration test — scope definition, rules of engagement, remediation tracking, and evidence management.' },
    { icon: <FileCheck size={22} />, title: '3PAO Readiness & Assessment Support', desc: 'Conduct pre assessment readiness testing, select an accredited 3PAO, and provide full assessment support through evidence provision and assessor liaison.' },
    { icon: <Award size={22} />, title: 'Authorization Package & ATO Support', desc: 'Compile the complete FedRAMP authorization package SSP, SAR, POA&M and support the Agency AO or JAB authorization decision process.' },
];

const checklist = [
    'FedRAMP authorization path selection (Agency ATO, JAB P ATO, FedRAMP Ready)',
    'NIST SP 800-53 impact baseline determination (Low, Moderate, or High)',
    'Authorization boundary definition with all components and interconnections',
    'System Security Plan (SSP) development covering all control families',
    'All applicable NIST SP 800-53 controls implemented and documented',
    'Access control, identity management, and MFA implementation',
    'Audit logging, SIEM, and continuous monitoring capabilities',
    'Encryption at rest and in transit for all federal data',
    'Supply chain risk management controls for all third-party services',
    'Annual penetration testing coordinated with accredited 3PAO',
    'FedRAMP ConMon programme — monthly scans, POA&M management, change reporting',
    'Authorization package (SSP, SAR, POA&M) and ATO support',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'FedRAMP Authorization Veterans', desc: 'Our team has guided cloud service providers through FedRAMP authorization at Moderate and High impact levels, with experience across Agency ATO and JAB P ATO pathways.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Cloud Security Engineering Depth', desc: 'We implement FedRAMP controls at the technical level in AWS GovCloud, Azure Government, and Google Cloud — not just documentation of controls that aren\'t actually deployed.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'End to End Authorization Support', desc: 'From readiness assessment through SSP development, control implementation, 3PAO coordination, and ATO — we support your entire FedRAMP authorization journey.' },
];

const trad = [
    'SSP developed using generic templates that don\'t reflect actual control implementations.',
    'Authorization boundary defined too broadly, creating unnecessary assessment burden.',
    'Controls documented as implemented without underlying technical validation.',
    'ConMon programme designed on paper but not operationally implemented.',
    '3PAO assessment discovers control gaps that could have been resolved pre assessment.',
    'POA&M items left unresolved, jeopardizing annual authorization continuance.',
];
const ca = [
    'SSP developed based on actual system architecture, reflecting real control implementations.',
    'Precise boundary definition scoping the assessment appropriately for your service offering.',
    'Technical validation of all controls before 3PAO assessment begins.',
    'ConMon programme operationally implemented with automated scanning and alerting.',
    'Pre-3PAO readiness testing eliminating surprises in the formal assessment.',
    'Active POA&M management tracking remediation progress and authorization continuance.',
];

const deliverables = [
    { icon: <FileText size={28} />, title: 'Authorization Documentation', items: ['System Security Plan (SSP)', 'Authorization Boundary & Data Flow Diagrams', 'System Component Inventory', 'FedRAMP Control Implementation Summary'] },
    { icon: <Settings size={28} />, title: 'Technical Controls', items: ['Cloud Security Control Implementation', 'IAM, MFA & Access Control Deployment', 'SIEM & Continuous Monitoring Configuration', 'Encryption & Key Management Implementation'] },
    { icon: <Eye size={28} />, title: 'ConMon & Testing', items: ['FedRAMP ConMon Programme Design', 'Monthly Vulnerability Scan Reports', 'Annual Penetration Test Coordination', 'POA&M Management & Tracking'] },
    { icon: <Award size={28} />, title: 'Authorization Support', items: ['3PAO Selection & Assessment Coordination', 'SAR Review & Management Response', 'Authorization Package Compilation', 'Agency ATO or JAB P ATO Support'] },
];

const FedRAMPAssessment = () => {
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
        <div className="frp-page">
            {/* HERO SECTION */}
            <section className="frp-hero" ref={heroRef}>
                <motion.div
                    className="frp-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="frp-hero-overlay" />
                <div className="frp-hero-glow" />

                {/* Floating particles */}
                <div className="frp-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="frp-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="frp-container">
                    <div className="frp-hero-inner">
                        <div className="frp-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="frp-hero-badge">
                  <Landmark size={14} className="frp-badge-icon" />
                  <span className="frp-badge-text">
                    COMPLIANCE <span className="frp-badge-divider">/</span> GLOBAL ATTESTATIONS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="frp-hero-title">
                                    <span className="frp-grad">FedRAMP AUTHORIZATION ASSESSMENT</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="frp-hero-description">
                                    The <strong>Federal Risk and Authorization Management Program (FedRAMP)</strong> is the US federal government's standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. Cloud service providers seeking US federal agency customers must achieve FedRAMP Authorization a rigorous, multi phase process.
                                </p>
                                <p className="frp-hero-description">
                                    Our <strong>FedRAMP Assessment practice</strong> provides comprehensive support from authorization path selection and SSP development through NIST SP 800-53 control implementation, continuous monitoring programme design, 3PAO coordination, and Agency ATO or JAB P ATO support.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="frp-hero-actions">
                                    <button className="frp-btn frp-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a FedRAMP Readiness Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="frp-sec frp-bg-offwhite">
                <div className="frp-container">
                    <ScrollReveal direction="up">
                        <div className="frp-hdr">
                            <p className="frp-eyebrow-red">Our Challenges</p>
                            <h2 className="frp-title">FedRAMP Authorization Challenges</h2>
                            <p className="frp-desc">Cloud service providers face complex technical and process challenges navigating the FedRAMP authorization journey</p>
                        </div>
                    </ScrollReveal>
                    <div className="frp-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="frp-challenge-card">
                                    <div className="frp-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="frp-ch-content">
                                        <div className="frp-ch-header">
                                            <div className="frp-ch-icon-box">{c.icon}</div>
                                            <h3 className="frp-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="frp-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="frp-sec frp-bg-white-grid">
                <div className="frp-grid-overlay" />
                <div className="frp-container">
                    <ScrollReveal direction="up">
                        <div className="frp-hdr">
                            <p className="frp-eyebrow-red">Our Framework</p>
                            <h2 className="frp-title">Our FedRAMP Assessment Framework</h2>
                            <p className="frp-desc">Comprehensive FedRAMP authorization support from boundary definition through 3PAO assessment and ATO</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="frp-fw-row">
                            {components.slice(0, 3).map((step, index) => (
                                <div className="frp-fw-card" key={index}>
                                    <div className="frp-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="frp-fw-connector" />}
                                    <div className="frp-fw-icon">{step.icon}</div>
                                    <h3 className="frp-fw-title">{step.title}</h3>
                                    <p className="frp-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="frp-fw-row-2">
                            {components.slice(3, 6).map((step, index) => (
                                <div className="frp-fw-card" key={index + 3}>
                                    <div className="frp-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="frp-fw-connector" />}
                                    <div className="frp-fw-icon">{step.icon}</div>
                                    <h3 className="frp-fw-title">{step.title}</h3>
                                    <p className="frp-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="frp-sec frp-bg-offwhite">
                <div className="frp-container">
                    <ScrollReveal direction="up">
                        <div className="frp-hdr">
                            <p className="frp-eyebrow-red">Our Approach</p>
                            <h2 className="frp-title">Our Authorization Methodology</h2>
                            <p className="frp-desc">A proven 10-step methodology from FedRAMP readiness through authorization package delivery and ATO</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="frp-methodology-timeline">
                        <div className="frp-methodology-line" />
                        <div className="frp-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`frp-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="frp-methodology-card">
                                            <div className="frp-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="frp-methodology-card-header">
                                                <div className="frp-methodology-card-icon">{a.icon}</div>
                                                <h3 className="frp-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="frp-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="frp-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="frp-sec frp-bg-white-grid">
                <div className="frp-grid-overlay" />
                <div className="frp-container">
                    <ScrollReveal direction="up">
                        <div className="frp-hdr">
                            <p className="frp-eyebrow-red">Our Checklist</p>
                            <h2 className="frp-title">FedRAMP Coverage Checklist</h2>
                            <p className="frp-desc">Complete coverage of FedRAMP authorization requirements from readiness through ATO</p>
                        </div>
                    </ScrollReveal>
                    <div className="frp-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="frp-checklist-item">
                                    <div className="frp-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="frp-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="frp-sec frp-bg-offwhite">
                <div className="frp-container">
                    <ScrollReveal direction="up">
                        <div className="frp-hdr">
                            <p className="frp-eyebrow-red">Why CyberAries</p>
                            <h2 className="frp-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="frp-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="frp-why-clean-card">
                                    <div className="frp-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="frp-why-clean-title">{w.title}</h3>
                                    <p className="frp-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="frp-diff frp-bg-white-grid">
                <div className="frp-grid-overlay" />
                <div className="frp-container">
                    <ScrollReveal direction="up">
                        <div className="frp-hdr">
                            <p className="frp-eyebrow-red">Our Difference</p>
                            <h2 className="frp-diff-title">THE <span className="frp-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="frp-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="frp-diff-card frp-diff-card--traditional">
                                <h3 className="frp-diff-heading">Generic Compliance Consultants</h3>
                                <ul className="frp-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="frp-diff-item">
                                            <span className="frp-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="frp-diff-card frp-diff-card--featured">
                                <h3 className="frp-diff-heading frp-diff-heading--ca">
                                    CyberAries FedRAMP Practice
                                </h3>
                                <ul className="frp-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="frp-diff-item">
                                            <span className="frp-diff-bullet">
                                                <CheckCircle size={18} className="frp-check-icon" />
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
            <section className="frp-sec frp-bg-white-grid">
                <div className="frp-grid-overlay" />
                <div className="frp-container">
                    <ScrollReveal direction="up">
                        <div className="frp-hdr">
                            <p className="frp-eyebrow-red">Our Deliverables</p>
                            <h2 className="frp-title">Comprehensive Deliverables</h2>
                            <p className="frp-desc">End to end documentation, controls, and reporting to ensure FedRAMP compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="frp-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="frp-pillar-card">
                                    <span className="frp-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="frp-pillar-top">
                                        <div className="frp-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="frp-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="frp-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="frp-pillar-divider" />
                                    <ul className="frp-pillar-list">
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
            <section className="frp-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="frp-container">
                    <ScrollReveal direction="up">
                        <div className="frp-cta-content">
                            <h2 className="frp-cta-title">
                                <span className="frp-grad">Ready to Achieve FedRAMP Authorization?</span>
                            </h2>
                            <p className="frp-cta-description">
                                Open the US federal market for your cloud services with a FedRAMP Authorization guided by our experienced advisors and cloud engineers.
                            </p>
                            <div className="frp-cta-buttons">
                                <Link to="/contact" className="frp-btn frp-cta-btn">
                                    <span>Request FedRAMP Assessment</span>
                                    <ArrowRight size={18} className="frp-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default FedRAMPAssessment;
