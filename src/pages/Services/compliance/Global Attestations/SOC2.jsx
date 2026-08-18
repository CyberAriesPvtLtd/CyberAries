import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/shield-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import { Shield, FileText, Search, AlertTriangle, CheckCircle, Settings, Users, Award, RefreshCw, FileCheck, Eye, Database, Globe, Target, ArrowRight, Landmark } from 'lucide-react';
import './SOC2.css';

const challenges = [
    { icon: <Target size={24} />, title: 'Trust Services Criteria Scoping', desc: 'Selecting the right combination of Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy) for your SOC 2 report and scoping the systems appropriately.' },
    { icon: <Shield size={24} />, title: 'Security Control Breadth', desc: 'The Security TSC covers logical access, threat detection, incident response, change management, risk assessment, and monitoring — requiring mature controls across all these domains.' },
    { icon: <Database size={24} />, title: 'Evidence Management Over 12 Months', desc: 'For a Type II report, evidence of control operation must be captured continuously across the entire 12-month audit period requiring automated evidence collection workflows.' },
    { icon: <AlertTriangle size={24} />, title: 'Vendor & Subprocessor Risk', desc: 'SOC 2 requires managing risks from all subprocessors and vendors — your SOC 2 report must address third-party risks and complementary subservice organization controls (CSOCs).' },
    { icon: <Eye size={24} />, title: 'Continuous Monitoring Requirements', desc: 'The Security TSC demands continuous threat monitoring, vulnerability management, and anomaly detection — going beyond point-in-time security assessments.' },
    { icon: <RefreshCw size={24} />, title: 'Annual Renewal & Control Evolution', desc: 'Managing control environment evolution, cloud infrastructure changes, and new product features while maintaining continuous SOC 2 compliance across annual renewals.' },
];

const components = [
    { icon: <Target size={22} />, title: 'TSC Scope & System Description', desc: 'Selecting appropriate Trust Services Criteria, defining system boundaries, and developing the SOC 2 service description covering all in-scope components.' },
    { icon: <Shield size={22} />, title: 'CC Series Controls Security TSC', desc: 'Implementation of all Common Criteria (CC) controls across risk management, communication, logical access, system operations, change management, and risk mitigation.' },
    { icon: <Eye size={22} />, title: 'Continuous Monitoring Programme', desc: 'Automated threat detection, vulnerability scanning, log monitoring, and anomaly detection capabilities meeting SOC 2 continuous monitoring requirements.' },
    { icon: <Globe size={22} />, title: 'Vendor & Subprocessor Management', desc: 'Third party risk assessment programme and CSOC documentation ensuring all subprocessor risks are addressed within the SOC 2 report.' },
    { icon: <Database size={22} />, title: 'Evidence Collection & GRC Tooling', desc: 'Implementation of GRC/evidence management tooling to automate evidence collection across all controls throughout the 12-month audit period.' },
    { icon: <Award size={22} />, title: 'CPA Audit Management', desc: 'Readiness assessment, CPA firm selection, Type I/Type II audit coordination, and management response to identified exceptions.' },
];

const approach = [
    { icon: <Search size={22} />, title: 'SOC 2 Readiness Assessment', desc: 'Comprehensive baseline assessment against all selected Trust Services Criteria identifying control gaps, evidence deficiencies, and scope boundary issues.' },
    { icon: <Target size={22} />, title: 'TSC Selection & System Scoping', desc: 'Define which Trust Services Criteria (Security + optional Availability, Confidentiality, PI, Privacy) apply and establish precise system and infrastructure scope boundaries.' },
    { icon: <FileText size={22} />, title: 'System Description Development', desc: 'Develop the SOC 2 system description narrative covering infrastructure, software, data flows, people, procedures, and controls across all in-scope components.' },
    { icon: <Settings size={22} />, title: 'Control Gap Remediation', desc: 'Implement and harden controls identified as gaps — logical access, change management, incident response, monitoring, encryption, backup, and vendor management.' },
    { icon: <Eye size={22} />, title: 'Continuous Monitoring Implementation', desc: 'Deploy threat detection, SIEM correlation, vulnerability scanning, and log monitoring capabilities meeting SOC 2 continuous monitoring expectations.' },
    { icon: <Database size={22} />, title: 'Evidence Automation & GRC Setup', desc: 'Configure GRC platform or evidence management tooling to automate control evidence collection, reducing manual burden during the 12-month audit period.' },
    { icon: <Globe size={22} />, title: 'Subprocessor Management', desc: 'Assess all subprocessors and document complementary subservice organization controls (CSOCs) and user entity controls (UECs).' },
    { icon: <Users size={22} />, title: 'Policy & Procedure Documentation', desc: 'Develop or update all SOC 2-required policies — Information Security, Incident Response, Change Management, Access Control, Vendor Risk, and Backup.' },
    { icon: <FileCheck size={22} />, title: 'Pre Audit Readiness Testing', desc: 'Simulate CPA auditor testing across all selected TSC domains, identifying and remediating remaining weaknesses before the formal examination.' },
    { icon: <Award size={22} />, title: 'CPA Audit Support & Report Management', desc: 'CPA firm selection and management, Type I/Type II audit coordination, auditor request fulfilment, and management response support.' },
];

const checklist = [
    'SOC 2 readiness assessment against all selected Trust Services Criteria',
    'TSC selection and in-scope system and infrastructure boundary definition',
    'SOC 2 system description narrative development',
    'Common Criteria (CC) Security controls implementation across all CC domains',
    'Availability, Confidentiality, Processing Integrity, or Privacy controls (as in scope)',
    'Continuous vulnerability scanning and threat monitoring implementation',
    'SIEM and log monitoring for anomaly detection and alerting',
    'Incident response plan and security operations procedures',
    'Logical access controls, MFA, and privileged access management',
    'Change management controls for infrastructure and application changes',
    'Vendor and subprocessor risk management and CSOC documentation',
    'Evidence collection automation and 12-month audit period management',
];

const why = [
    { icon: <Award size={36} strokeWidth={1.5} />, title: 'SOC 2 Examination Veterans', desc: 'Our team has guided SaaS, cloud, and technology companies through SOC 2 Type I and Type II examinations across multiple CPA firms and audit methodologies.' },
    { icon: <Shield size={36} strokeWidth={1.5} />, title: 'Technical Security Depth', desc: 'We implement the technical controls underpinning SOC 2 — SIEM, vulnerability management, MFA, encryption, and access controls — not just the documentation.' },
    { icon: <Globe size={36} strokeWidth={1.5} />, title: 'GRC Automation Expertise', desc: 'We configure GRC platforms (Vanta, Drata, Secureframe, or custom) to automate evidence collection and reduce the annual audit overhead for your team.' },
];

const trad = [
    'SOC 2 scope defined too broadly, creating unnecessary control complexity.',
    'Control documentation developed without underlying technical implementation.',
    'Evidence collection left to manual processes, creating gaps in Type II coverage.',
    'Subprocessors and CSOCs not adequately addressed in the system description.',
    'No continuous monitoring beyond point in time vulnerability scans.',
    'Annual renewal surprises from controls that drifted post Type I certification.',
];
const ca = [
    'Precise scope definition minimizing audit complexity while meeting customer needs.',
    'Technical controls implemented and validated alongside documentation development.',
    'Automated evidence collection ensuring continuous Type II coverage.',
    'Comprehensive subprocessor assessment and CSOC documentation.',
    'Continuous monitoring programme with SIEM, alerts, and scheduled reporting.',
    'Annual renewal readiness maintained through ongoing control health monitoring.',
];

const deliverables = [
    { icon: <FileText size={28} />, title: 'Core SOC 2 Documentation', items: ['System Description & TSC Mapping', 'SOC 2 Policy Suite (10+ policies)', 'Control Test Plans & Evidence Templates', 'CSOC & UEC Documentation'] },
    { icon: <Settings size={28} />, title: 'Technical Controls', items: ['IAM, MFA & Privileged Access Implementation', 'SIEM & Continuous Monitoring Setup', 'Encryption & Data Protection Controls', 'Change Management & SDLC Controls'] },
    { icon: <Eye size={28} />, title: 'Audit Evidence Management', items: ['GRC Platform Configuration', 'Automated Evidence Collection Workflows', 'Pre Audit Readiness Testing Report', 'Policy Acknowledgment & Training Records'] },
    { icon: <Award size={28} />, title: 'Examination Support', items: ['CPA Firm Selection & Engagement Management', 'Type I & Type II Audit Coordination', 'Auditor Request Fulfilment Support', 'Annual Renewal Management Plan'] },
];

const SOC2 = () => {
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
        <div className="soc2-page">
            {/* HERO SECTION */}
            <section className="soc2-hero" ref={heroRef}>
                <motion.div
                    className="soc2-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="soc2-hero-overlay" />
                <div className="soc2-hero-glow" />

                {/* Floating particles */}
                <div className="soc2-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="soc2-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="soc2-container">
                    <div className="soc2-hero-inner">
                        <div className="soc2-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="soc2-hero-badge">
                  <Landmark size={14} className="soc2-badge-icon" />
                  <span className="soc2-badge-text">
                    COMPLIANCE <span className="soc2-badge-divider">/</span> GLOBAL ATTESTATIONS
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="soc2-hero-title">
                                    <span className="soc2-grad">SOC 2 TYPE I & TYPE II REPORT</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="soc2-hero-description">
                                    A <strong>SOC 2 report</strong> provides independent assurance that your organization's security, availability, processing integrity, confidentiality, and privacy controls are designed and operating effectively. It is the gold standard trust attestation for SaaS companies, cloud providers, and technology service organizations.
                                </p>
                                <p className="soc2-hero-description">
                                    Our SOC 2 practice delivers <strong>end to end examination readiness</strong> from TSC scoping and control implementation through continuous monitoring, evidence automation, pre audit testing, and CPA firm management for both Type I and Type II reports.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="soc2-hero-actions">
                                    <button className="soc2-btn soc2-btn-primary" onClick={() => navigate('/contact')}>
                                        Schedule a SOC 2 Readiness Assessment
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="soc2-sec soc2-bg-offwhite">
                <div className="soc2-container">
                    <ScrollReveal direction="up">
                        <div className="soc2-hdr">
                            <p className="soc2-eyebrow-red">Our Challenges</p>
                            <h2 className="soc2-title">SOC 2 Examination Challenges</h2>
                            <p className="soc2-desc">Technology and SaaS companies face significant challenges achieving a clean SOC 2 Type II opinion across all selected Trust Services Criteria</p>
                        </div>
                    </ScrollReveal>
                    <div className="soc2-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="soc2-challenge-card">
                                    <div className="soc2-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="soc2-ch-content">
                                        <div className="soc2-ch-header">
                                            <div className="soc2-ch-icon-box">{c.icon}</div>
                                            <h3 className="soc2-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="soc2-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="soc2-sec soc2-bg-white-grid">
                <div className="soc2-grid-overlay" />
                <div className="soc2-container">
                    <ScrollReveal direction="up">
                        <div className="soc2-hdr">
                            <p className="soc2-eyebrow-red">Our Framework</p>
                            <h2 className="soc2-title">Our SOC 2 Examination Framework</h2>
                            <p className="soc2-desc">A comprehensive SOC 2 examination preparation framework covering all Trust Services Criteria and Common Criteria domains</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1–3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="soc2-fw-row">
                            {components.slice(0, 3).map((step, index) => (
                                <div className="soc2-fw-card" key={index}>
                                    <div className="soc2-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="soc2-fw-connector" />}
                                    <div className="soc2-fw-icon">{step.icon}</div>
                                    <h3 className="soc2-fw-title">{step.title}</h3>
                                    <p className="soc2-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4–6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="soc2-fw-row-2">
                            {components.slice(3, 6).map((step, index) => (
                                <div className="soc2-fw-card" key={index + 3}>
                                    <div className="soc2-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="soc2-fw-connector" />}
                                    <div className="soc2-fw-icon">{step.icon}</div>
                                    <h3 className="soc2-fw-title">{step.title}</h3>
                                    <p className="soc2-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="soc2-sec soc2-bg-offwhite">
                <div className="soc2-container">
                    <ScrollReveal direction="up">
                        <div className="soc2-hdr">
                            <p className="soc2-eyebrow-red">Our Approach</p>
                            <h2 className="soc2-title">Our Examination Methodology</h2>
                            <p className="soc2-desc">A proven 10-step methodology from readiness assessment through SOC 2 Type I and Type II report issuance</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="soc2-methodology-timeline">
                        <div className="soc2-methodology-line" />
                        <div className="soc2-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`soc2-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="soc2-methodology-card">
                                            <div className="soc2-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="soc2-methodology-card-header">
                                                <div className="soc2-methodology-card-icon">{a.icon}</div>
                                                <h3 className="soc2-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="soc2-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="soc2-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="soc2-sec soc2-bg-white-grid">
                <div className="soc2-grid-overlay" />
                <div className="soc2-container">
                    <ScrollReveal direction="up">
                        <div className="soc2-hdr">
                            <p className="soc2-eyebrow-red">Our Checklist</p>
                            <h2 className="soc2-title">SOC 2 Coverage Checklist</h2>
                            <p className="soc2-desc">Complete coverage of SOC 2 examination requirements across all Trust Services Criteria domains</p>
                        </div>
                    </ScrollReveal>
                    <div className="soc2-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="soc2-checklist-item">
                                    <div className="soc2-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="soc2-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="soc2-sec soc2-bg-offwhite">
                <div className="soc2-container">
                    <ScrollReveal direction="up">
                        <div className="soc2-hdr">
                            <p className="soc2-eyebrow-red">Why CyberAries</p>
                            <h2 className="soc2-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="soc2-why-grid-4">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="soc2-why-clean-card">
                                    <div className="soc2-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="soc2-why-clean-title">{w.title}</h3>
                                    <p className="soc2-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="soc2-diff soc2-bg-white-grid">
                <div className="soc2-grid-overlay" />
                <div className="soc2-container">
                    <ScrollReveal direction="up">
                        <div className="soc2-hdr">
                            <p className="soc2-eyebrow-red">Our Difference</p>
                            <h2 className="soc2-diff-title">THE <span className="soc2-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="soc2-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="soc2-diff-card soc2-diff-card--traditional">
                                <h3 className="soc2-diff-heading">Generic SOC 2 Consultants</h3>
                                <ul className="soc2-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="soc2-diff-item">
                                            <span className="soc2-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="soc2-diff-card soc2-diff-card--featured">
                                <h3 className="soc2-diff-heading soc2-diff-heading--ca">
                                    CyberAries SOC 2 Practice
                                </h3>
                                <ul className="soc2-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="soc2-diff-item">
                                            <span className="soc2-diff-bullet">
                                                <CheckCircle size={18} className="soc2-check-icon" />
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
            <section className="soc2-sec soc2-bg-white-grid">
                <div className="soc2-grid-overlay" />
                <div className="soc2-container">
                    <ScrollReveal direction="up">
                        <div className="soc2-hdr">
                            <p className="soc2-eyebrow-red">Our Deliverables</p>
                            <h2 className="soc2-title">Comprehensive Deliverables</h2>
                            <p className="soc2-desc">End to end documentation, controls, and reporting to ensure SOC 2 compliance and strengthen your security posture.</p>
                        </div>
                    </ScrollReveal>
                    <div className="soc2-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="soc2-pillar-card">
                                    <span className="soc2-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="soc2-pillar-top">
                                        <div className="soc2-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="soc2-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="soc2-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="soc2-pillar-divider" />
                                    <ul className="soc2-pillar-list">
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
            <section className="soc2-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="soc2-container">
                    <ScrollReveal direction="up">
                        <div className="soc2-cta-content">
                            <h2 className="soc2-cta-title">
                                <span className="soc2-grad">Ready to Achieve Your SOC 2 Type I & Type II Report?</span>
                            </h2>
                            <p className="soc2-cta-description">
                                Build a clean SOC 2 attestation demonstrating industry leading trust to your customers, enterprise prospects, and partners.
                            </p>
                            <div className="soc2-cta-buttons">
                                <Link to="/contact" className="soc2-btn soc2-cta-btn">
                                    <span>Request SOC 2 Assessment</span>
                                    <ArrowRight size={18} className="soc2-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default SOC2;
