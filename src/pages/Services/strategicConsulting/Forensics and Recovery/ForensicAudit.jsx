import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/forensic-recovery-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Database,
  Eye,
  FileCheck,
  FileText,
  Globe,
  Landmark,
  Lock,
  Search,
  Shield
} from 'lucide-react';
import './ForensicAudit.css';

const challenges = [
    { icon: <Clock size={40} />, title: 'Preserving Evidence Integrity', desc: 'Digital evidence must be collected using forensically sound methods write blockers, chain of custody documentation, and hash verification to ensure admissibility in legal proceedings or regulatory investigations.' },
    { icon: <Database size={40} />, title: 'Multi-System Data Acquisition', desc: 'Modern incidents span endpoints, servers, cloud environments, SaaS platforms, and network devices. Acquiring forensic images across heterogeneous environments without contamination requires specialized expertise and tooling.' },
    { icon: <Search size={40} />, title: 'Volatile Data Capture', desc: 'RAM, running processes, network connections, and logged-in users vanish on shutdown. Capturing volatile data before system imaging is critical — and time-sensitive — in any forensic investigation.' },
    { icon: <Lock size={40} />, title: 'Anti Forensics & Evidence Tampering', desc: 'Sophisticated threat actors use log deletion, timestamp manipulation, encryption, and fileless malware techniques to obstruct forensic investigations. Detecting and overcoming anti forensics requires advanced tooling.' },
    { icon: <Globe size={40} />, title: 'Cross Jurisdiction Legal Complexity', desc: 'Incidents involving cloud providers, international threat actors, or multinational organizations raise complex questions of jurisdiction, legal process, data sovereignty, and admissibility of evidence across legal systems.' },
    { icon: <AlertTriangle size={40} />, title: 'Root Cause Attribution Under Pressure', desc: 'Organizations under regulatory scrutiny or litigation need accurate, defensible root cause findings — often under extreme time pressure — without compromising the thoroughness of the forensic analysis.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'Digital Evidence Acquisition', desc: 'Forensically sound acquisition of disk images, memory captures, log exports, and cloud artefacts using industry-standard tools — with hash verification and chain-of-custody documentation.' },
    { icon: <Database size={40} />, title: 'Malware Analysis', desc: 'Static and dynamic analysis of malicious code reverse engineering, sandbox detonation, IOC extraction, and MITRE ATT&CK mapping to attribute TTPs to known threat actors.' },
    { icon: <Eye size={40} />, title: 'Timeline Reconstruction', desc: 'Forensic timeline analysis across system logs, file system artefacts, registry hives, browser history, and cloud audit trails to reconstruct the complete attack path and dwell time.' },
    { icon: <FileText size={40} />, title: 'Network Forensics', desc: 'PCAP analysis, NetFlow review, proxy log examination, and DNS query investigation to identify C2 communications, lateral movement, and data exfiltration pathways.' },
    { icon: <Lock size={40} />, title: 'Cloud & SaaS Forensics', desc: 'Acquisition and analysis of cloud artefacts AWS CloudTrail, Azure Activity Logs, GCP Audit Logs, Microsoft 365 Unified Audit Log mapping attacker activity across cloud environments.' },
    { icon: <Award size={40} />, title: 'Expert Witness & Litigation Support', desc: 'Court-ready forensic reports and expert witness testimony meeting legal standards of admissibility — supporting regulatory investigations, civil litigation, and law enforcement cooperation.' },
];

const approach = [
    { icon: <Clock size={40} />, title: 'Incident Scoping & Preservation Order', desc: 'Initial scoping call to understand the incident, identify evidence sources, issue a legal hold notice, and plan acquisition strategy minimizing evidence contamination from the outset.' },
    { icon: <Database size={40} />, title: 'Forensic Acquisition', desc: 'Acquire forensic images of all in-scope systems — endpoints, servers, cloud instances — with simultaneous volatile data capture, using write-blocked imaging and hash verification.' },
    { icon: <Search size={40} />, title: 'Triage Analysis', desc: 'Rapid triage of acquired images to identify key artefacts — recently accessed files, deleted items, installed programmes, logon events, and prefetch data — prioritising the most impactful evidence.' },
    { icon: <Eye size={40} />, title: 'Malware & Artefact Analysis', desc: 'Static and dynamic malware analysis, registry artefact examination, browser forensics, and email analysis to identify attack delivery vectors and persistence mechanisms.' },
    { icon: <FileText size={40} />, title: 'Timeline Construction', desc: 'Build a comprehensive forensic timeline integrating artefacts from all systems — file system, event logs, registry, network — creating a chronological attack narrative from initial access to remediation.' },
    { icon: <Globe size={40} />, title: 'Network & Cloud Forensics', desc: 'Analyse network captures, proxy logs, and cloud audit trails to track lateral movement, identify compromised accounts, and determine data access and exfiltration scope.' },
    { icon: <Lock size={40} />, title: 'Attribution & Threat Intelligence', desc: 'Map identified TTPs to MITRE ATT&CK, correlate IOCs with threat intelligence feeds, and provide attribution assessment with confidence rating based on available evidence.' },
    { icon: <AlertTriangle size={40} />, title: 'Root Cause Determination', desc: 'Document the definitive root cause initial access vector, exploitation method, and enabling security control failure with evidence citations from the forensic record.' },
    { icon: <FileCheck size={40} />, title: 'Forensic Report Preparation', desc: 'Prepare a comprehensive forensic report executive summary, technical findings, timeline, root cause analysis, and recommendations meeting legal admissibility standards.' },
    { icon: <Award size={40} />, title: 'Regulatory & Legal Support', desc: 'Support regulatory notifications, law enforcement cooperation, and litigation proceedings — including expert witness affidavits and testimony where required.' },
];

const checklist = [
    'Legal hold notice and evidence preservation order',
    'Forensically sound disk imaging with hash verification and chain of custody',
    'Volatile data capture RAM, running processes, network connections',
    'Malware static and dynamic analysis with MITRE ATT&CK mapping',
    'Forensic timeline reconstruction across all affected systems',
    'Registry, event log, browser, and email forensic artefact analysis',
    'Network forensics PCAP, NetFlow, proxy, and DNS log analysis',
    'Cloud and SaaS audit log acquisition and forensic analysis',
    'Threat intelligence correlation and attribution assessment',
    'Root cause determination with evidential citations',
    'Court ready forensic report meeting legal admissibility standards',
    'Regulatory notification and litigation expert witness support',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: ' Partnered CERT In Empanelled Forensic Investigators', desc: 'CyberAries is recognized by CERT In for forensic investigation services providing credibility with regulators, insurers, and courts in Indian and international proceedings.' },
    { icon: <Clock size={48} strokeWidth={1.5} />, title: '24/7 Rapid Response', desc: 'Our forensic response team is available around the clock deploying within hours to preserve volatile evidence and begin acquisition before critical data is lost or tampered with.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Legal Grade Evidence Standards', desc: 'Every acquisition follows documented forensic protocols write block verification, dual hash signing, chain of custody logs ensuring findings are defensible in any legal or regulatory forum.' },
];

const trad = [
    'Evidence collected without write blockers or chain of custody documentation.',
    'Volatile memory not captured — critical in-memory artefacts lost permanently.',
    'Timeline analysis limited to a single system rather than the full environment.',
    'Cloud and SaaS audit logs not collected significant evidence gaps.',
    'Report focused on conclusions without evidential citations or reproducible findings.',
    'No expert witness capability investigation findings cannot support litigation.',
];

const ca = [
    'All evidence acquired forensically sound write blocked, hash verified, chain of custody documented.',
    'Volatile memory captured immediately as priority — RAM, processes, connections preserved.',
    'Full environment timeline integrating endpoints, servers, network, cloud, and SaaS.',
    'Cloud audit log acquisition as standard CloudTrail, M365 UAL, Azure Activity Logs.',
    'Court ready report with full evidential citations, reproducible methodology, and findings.',
    'Expert witness testimony available supporting regulatory, civil, and criminal proceedings.',
];

const deliverables = [
    { icon: <Database size={36} />, title: 'Acquisition & Evidence', items: ['Forensic Disk Images with Hash Verification', 'Memory Captures & Volatile Data', 'Chain of Custody Documentation', 'Evidence Register & Preservation Log'] },
    { icon: <Search size={36} />, title: 'Analysis', items: ['Malware Analysis Report', 'Forensic Timeline Reconstruction', 'Network & Cloud Forensic Analysis', 'Threat Intelligence & Attribution Assessment'] },
    { icon: <FileText size={36} />, title: 'Reporting', items: ['Executive Summary', 'Technical Forensic Findings Report', 'Root Cause Analysis', 'MITRE ATT&CK Incident Mapping'] },
    { icon: <Award size={36} />, title: 'Legal & Regulatory', items: ['Court Ready Expert Report', 'Expert Witness Affidavit & Testimony', 'Regulatory Notification Support', 'Law Enforcement Liaison Package'] },
];

const ForensicAudit = () => {
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
        <div className="faud-page">
            {/* HERO SECTION */}
            <section className="faud-hero" ref={heroRef}>
                <motion.div
                    className="faud-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="faud-hero-overlay" />
                <div className="faud-hero-glow" />

                {/* Floating particles */}
                <div className="faud-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="faud-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="faud-container">
                    <div className="faud-hero-inner">
                        <div className="faud-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="faud-hero-badge">
                  <Landmark size={14} className="faud-badge-icon" />
                  <span className="faud-badge-text">
                    STRATEGIC CONSULTING <span className="faud-badge-divider">/</span> FORENSICS & RECOVERY
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="faud-hero-title">
                                    <span className="faud-grad">FORENSIC AUDIT <br /> &amp; INVESTIGATION</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="faud-hero-description">
                                    Uncover the truth with disciplined digital forensics. We provide end to end investigation services to identify, preserve, and analyze evidence following cyber incidents, data breaches, or fraud events. Our forensic grade approach covers endpoints, cloud, and SaaS platforms, ensuring every acquisition is forensically sound for litigation and regulatory needs.
                                </p>
                                <p className="faud-hero-description">
                                    By combining deep malware analysis and timeline reconstruction with expert witness reporting, we help you determine the root cause of threats while providing the court ready documentation necessary for insurance claims and law enforcement cooperation.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="faud-hero-actions">
                                    <button className="faud-btn faud-btn-primary" onClick={() => navigate('/contact')}>
                                        Request Emergency Forensics
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="faud-sec faud-bg-offwhite">
                <div className="faud-container">
                    <ScrollReveal direction="up">
                        <div className="faud-hdr">
                            <p className="faud-eyebrow-red">Challenges</p>
                            <h2 className="faud-title">Forensic Investigation Challenges</h2>
                            <p className="faud-desc">Digital forensic investigations face complex technical, legal, and operational challenges that require specialist expertise and tools</p>
                        </div>
                    </ScrollReveal>
                    <div className="faud-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="faud-challenge-card">
                                    <div className="faud-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="faud-ch-content">
                                        <div className="faud-ch-header">
                                            <div className="faud-ch-icon-box">{c.icon}</div>
                                            <h3 className="faud-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="faud-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="faud-sec faud-bg-white-grid">
                <div className="faud-grid-overlay" />
                <div className="faud-container">
                    <ScrollReveal direction="up">
                        <div className="faud-hdr">
                            <p className="faud-eyebrow-red">Our Framework</p>
                            <h2 className="faud-title">Our Forensic Investigation Services</h2>
                            <p className="faud-desc">Comprehensive digital forensic services from evidence acquisition through legal grade reporting and expert witness support</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1-3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="faud-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="faud-fw-card" key={index}>
                                    <div className="faud-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="faud-fw-connector" />}
                                    <div className="faud-fw-icon">{step.icon}</div>
                                    <h3 className="faud-fw-title">{step.title}</h3>
                                    <p className="faud-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4-6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="faud-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="faud-fw-card" key={index + 3}>
                                    <div className="faud-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="faud-fw-connector" />}
                                    <div className="faud-fw-icon">{step.icon}</div>
                                    <h3 className="faud-fw-title">{step.title}</h3>
                                    <p className="faud-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="faud-sec faud-bg-offwhite">
                <div className="faud-container">
                    <ScrollReveal direction="up">
                        <div className="faud-hdr">
                            <p className="faud-eyebrow-red">Our Approach</p>
                            <h2 className="faud-title">Our Investigation Methodology</h2>
                            <p className="faud-desc">A rigorous 10-step forensic methodology from preservation order through expert witness support</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="faud-methodology-timeline">
                        <div className="faud-methodology-line" />
                        <div className="faud-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`faud-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="faud-methodology-card">
                                            <div className="faud-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="faud-methodology-card-header">
                                                <div className="faud-methodology-card-icon">{a.icon}</div>
                                                <h3 className="faud-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="faud-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="faud-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="faud-sec faud-bg-white-grid">
                <div className="faud-grid-overlay" />
                <div className="faud-container">
                    <ScrollReveal direction="up">
                        <div className="faud-hdr">
                            <p className="faud-eyebrow-red">Our Checklist</p>
                            <h2 className="faud-title">Forensic Investigation Checklist</h2>
                            <p className="faud-desc">Complete forensic investigation coverage from evidence preservation through legal proceedings</p>
                        </div>
                    </ScrollReveal>
                    <div className="faud-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="faud-checklist-item">
                                    <div className="faud-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="faud-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="faud-sec faud-bg-offwhite">
                <div className="faud-container">
                    <ScrollReveal direction="up">
                        <div className="faud-hdr">
                            <p className="faud-eyebrow-red">Why CyberAries</p>
                            <h2 className="faud-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="faud-why-grid-3">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="faud-why-clean-card">
                                    <div className="faud-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="faud-why-clean-title">{w.title}</h3>
                                    <p className="faud-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="faud-diff faud-bg-white-grid">
                <div className="faud-grid-overlay" />
                <div className="faud-container">
                    <ScrollReveal direction="up">
                        <div className="faud-hdr">
                            <p className="faud-eyebrow-red">Our Difference</p>
                            <h2 className="faud-diff-title">THE <span className="faud-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="faud-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="faud-diff-card faud-diff-card--traditional">
                                <h3 className="faud-diff-heading">Generic IT Incident Responders</h3>
                                <ul className="faud-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="faud-diff-item">
                                            <span className="faud-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="faud-diff-card faud-diff-card--featured">
                                <h3 className="faud-diff-heading faud-diff-heading--ca">
                                    CyberAries Forensic Practice
                                </h3>
                                <ul className="faud-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="faud-diff-item">
                                            <span className="faud-diff-bullet">
                                                <CheckCircle size={18} className="faud-check-icon" />
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
            <section className="faud-sec faud-bg-white-grid">
                <div className="faud-grid-overlay" />
                <div className="faud-container">
                    <ScrollReveal direction="up">
                        <div className="faud-hdr">
                            <p className="faud-eyebrow-red">Our Deliverables</p>
                            <h2 className="faud-title">Comprehensive Deliverables</h2>
                            <p className="faud-desc">End to end documentation, controls, and reporting to ensure forensic readiness and clear root cause attribution.</p>
                        </div>
                    </ScrollReveal>
                    <div className="faud-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="faud-pillar-card">
                                    <span className="faud-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="faud-pillar-top">
                                        <div className="faud-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="faud-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="faud-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="faud-pillar-divider" />
                                    <ul className="faud-pillar-list">
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
            <section className="faud-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="faud-container">
                    <ScrollReveal direction="up">
                        <div className="faud-cta-content">
                            <h2 className="faud-cta-title">
                                <span className="faud-grad">Need Forensic Investigation Now?</span>
                            </h2>
                            <p className="faud-cta-description">
                                Our forensic response team is available 24/7. Contact us immediately to preserve critical evidence and begin your investigation.
                            </p>
                            <div className="faud-cta-buttons">
                                <Link to="/contact" className="faud-btn faud-cta-btn">
                                    <span>Request Emergency Forensics</span>
                                    <ArrowRight size={18} className="faud-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ForensicAudit;
