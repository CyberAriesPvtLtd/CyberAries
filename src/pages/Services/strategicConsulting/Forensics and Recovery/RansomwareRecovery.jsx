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
  FileCheck,
  Globe,
  Landmark,
  Lock,
  RefreshCw,
  Search,
  Settings,
  Shield
} from 'lucide-react';
import './RansomwareRecovery.css';

const challenges = [
    { icon: <Clock size={40} />, title: 'Recovery Time vs. Data Integrity', desc: 'Organizations face a critical tension between restoring operations as quickly as possible and ensuring recovered data is clean, uncompromised, and free of persistent attacker access or dormant malware.' },
    { icon: <AlertTriangle size={40} />, title: 'Backup Encryption & Destruction', desc: 'Sophisticated ransomware operators now specifically target backup systems, NAS shares, cloud snapshots, and tape libraries before triggering encryption — leaving organizations with no viable restore point.' },
    { icon: <Database size={40} />, title: 'Double Extortion & Data Leak Threats', desc: 'Modern ransomware gangs exfiltrate data before encrypting threatening public release to pressure payment. Organizations must assess actual exfiltration scope before deciding on recovery and notification strategy.' },
    { icon: <Search size={40} />, title: 'Identifying the Initial Access Vector', desc: 'Recovering without identifying and remediating the initial access vector — phishing, exposed RDP, unpatched VPN, supply chain — inevitably leads to reinfection, often within days of recovery.' },
    { icon: <Lock size={40} />, title: 'Negotiation & Cryptocurrency Complexity', desc: 'Ransom negotiations require specialist knowledge of threat actor credibility, decryptor reliability, OFAC sanctions compliance, and cryptocurrency transaction management — areas well beyond typical IT capabilities.' },
    { icon: <Globe size={40} />, title: 'Regulatory Notification Under Incident Pressure', desc: 'CERT-In 6-hour notification, GDPR 72-hour notification, RBI/SEBI requirements, and state breach laws must be managed simultaneously with active recovery operations — requiring legal and compliance coordination.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'Forensic Investigation & Root Cause', desc: 'Parallel forensic investigation to identify the initial access vector, lateral movement path, and persistence mechanisms — essential to prevent reinfection during or after recovery.' },
    { icon: <Database size={40} />, title: 'Backup Assessment & Recovery Planning', desc: 'Assessment of all backup and recovery options — on-premises, cloud, offsite tape — evaluating integrity, contamination risk, and completeness to develop an optimal recovery strategy.' },
    { icon: <RefreshCw size={40} />, title: 'System Restoration & Rebuild', desc: 'Structured restoration from clean backups or system rebuilds where backups are compromised — prioritising critical business systems while ensuring no reintroduction of attacker persistence.' },
    { icon: <Lock size={40} />, title: 'Ransom Negotiation Support', desc: 'Expert negotiation support if payment is considered — threat actor credibility assessment, decryptor testing, OFAC sanctions compliance verification, and cryptocurrency transaction management.' },
    { icon: <Shield size={40} />, title: 'Data Exfiltration Assessment', desc: 'Assessment of data exfiltration scope identifying affected data categories, regulatory notification obligations, and data subjects to support breach notification and legal strategy.' },
    { icon: <Award size={40} />, title: 'Post Recovery Security Hardening', desc: 'Remediation of the vulnerabilities that enabled the attack — access control strengthening, patch management, network segmentation, EDR deployment — preventing reinfection.' },
];

const approach = [
    { icon: <Clock size={40} />, title: 'Immediate Crisis Triage', desc: 'Emergency scoping call and environment assessment — establishing the scope of encryption, identifying affected systems, and advising on immediate containment actions including network isolation.' },
    { icon: <Search size={40} />, title: 'Forensic Evidence Preservation', desc: 'Preserve forensic evidence before remediation begins — acquiring memory images, system logs, and initial artefacts to support root cause investigation without impeding recovery.' },
    { icon: <AlertTriangle size={40} />, title: 'Threat Actor Intelligence', desc: 'Identify the ransomware variant and threat actor group assessing negotiation viability, decryptor reliability from prior victims, known data leak practices, and OFAC sanctions status.' },
    { icon: <Database size={40} />, title: 'Backup & Recovery Options Assessment', desc: 'Comprehensive assessment of all recovery options backup integrity testing, cloud snapshot evaluation, shadow copy review with contamination risk scoring and timeline modelling for each path.' },
    { icon: <Lock size={40} />, title: 'Negotiation (if required)', desc: 'If payment is being considered, manage negotiation with the threat actor — reducing demand, verifying decryptor capability, ensuring OFAC compliance, and managing cryptocurrency payment logistics.' },
    { icon: <RefreshCw size={40} />, title: 'System Rebuild & Recovery Execution', desc: 'Structured recovery from clean backups or forensic rebuilds prioritised by business criticality. Decryption testing before full scale restoration where applicable.' },
    { icon: <Globe size={40} />, title: 'Data Exfiltration Impact Assessment', desc: 'Assess the scope of exfiltrated data categories, volumes, data subjects to determine regulatory notification timelines and manage dark web monitoring for leaked data.' },
    { icon: <Shield size={40} />, title: 'Regulatory Notification Management', desc: 'Coordinate CERT In, GDPR, RBI, SEBI, and applicable state breach notifications drafting notification content, managing supervisory authority communications, and meeting statutory deadlines.' },
    { icon: <Settings size={40} />, title: 'Root Cause Remediation', desc: 'Remediate the initial access vector and all identified attacker footholds — closing the vulnerability that enabled the attack and eliminating all persistence mechanisms before bringing systems online.' },
    { icon: <FileCheck size={40} />, title: 'Post Recovery Security Hardening', desc: 'Deploy enhanced security controls MFA, PAM, EDR, network segmentation, backup isolation and conduct a post incident security review to prevent recurrence.' },
];

const checklist = [
    'Emergency triage scope assessment, containment advisory, and crisis team activation',
    'Forensic evidence preservation before remediation begins',
    'Ransomware variant and threat actor group identification',
    'Backup integrity assessment and recovery option modelling',
    'Ransom negotiation support with OFAC compliance verification',
    'System recovery from clean backups or forensic rebuild',
    'Decryptor testing and validation where applicable',
    'Data exfiltration scope assessment and dark web monitoring',
    'CERT-In 6-hour notification and regulatory breach notification management',
    'Root cause identification and initial access vector remediation',
    'All attacker persistence mechanisms identified and eliminated',
    'Post recovery security hardening MFA, EDR, segmentation, backup isolation',
];

const why = [
    { icon: <Clock size={48} strokeWidth={1.5} />, title: '24/7 Emergency Response', desc: 'Our ransomware response team is available around the clock engaging within hours to contain the incident, preserve evidence, and begin the recovery process at any time, any day.' },
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Negotiation & Decryptor Expertise', desc: 'We have managed ransomware negotiations across major threat actor groups — with OFAC sanctions compliance, cryptocurrency management, and decryptor capability verification before any payment.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Recovery Without Reinfection', desc: 'Our process always includes root cause identification and full persistence clearance before systems are restored — protecting you from the reinfection that derails up to 30% of ransomware recoveries.' },
];

const trad = [
    'Recovery begins immediately without forensic evidence preservation or root cause investigation.',
    'Backup integrity not tested before restoration reinfected backups restore attacker access.',
    'All attacker persistence mechanisms not identified reinfection within days of recovery.',
    'Data exfiltration scope not assessed regulatory notification obligations missed.',
    'Ransom negotiation handled without OFAC compliance check potential sanctions exposure.',
    'Security hardening recommendations generic root cause vulnerability left unpatched.',
];

const ca = [
    'Forensic evidence preserved in parallel with recovery root cause investigated from day one.',
    'All backups integrity tested before restoration contaminated backups isolated.',
    'Complete persistence sweep before going live zero residual attacker access.',
    'Data exfiltration assessed for all categories breach notifications managed within deadlines.',
    'All negotiations with full OFAC compliance review and cryptocurrency transaction management.',
    'Root cause vulnerability patched before recovery specific hardening, not generic advice.',
];

const deliverables = [
    { icon: <Clock size={36} />, title: 'Emergency Response', items: ['Incident Scoping & Triage Report', 'Containment Advisory & Execution', 'Threat Actor Intelligence Brief', 'Ransomware Variant & TTPs Identification'] },
    { icon: <Database size={36} />, title: 'Recovery', items: ['Backup Integrity Assessment Report', 'Recovery Strategy & Timeline Plan', 'System Restoration & Rebuild Execution', 'Decryptor Testing & Validation'] },
    { icon: <Globe size={36} />, title: 'Legal & Regulatory', items: ['Data Exfiltration Impact Assessment', 'CERT In & Regulatory Notification Drafts', 'Dark Web Monitoring Report', 'Post Incident Legal Support'] },
    { icon: <Shield size={36} />, title: 'Post Recovery', items: ['Root Cause & Forensic Investigation Report', 'Persistence Clearance Verification', 'Security Hardening Implementation', 'Post Incident Security Review Report'] },
];

const RansomwareRecovery = () => {
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
        <div className="rr-page">
            {/* HERO SECTION */}
            <section className="rr-hero" ref={heroRef}>
                <motion.div
                    className="rr-hero-bg-layer"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                        y: isDesktop ? parallaxY : 0
                    }}
                />
                <div className="rr-hero-overlay" />
                <div className="rr-hero-glow" />

                {/* Floating particles */}
                <div className="rr-hero-particles" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className="rr-hero-particle" style={{ '--i': i }} />
                    ))}
                </div>

                <div className="rr-container">
                    <div className="rr-hero-inner">
                        <div className="rr-hero-content">
                            <ScrollReveal animation="fade-down" delay={0}>
                                <div className="rr-hero-badge">
                  <Landmark size={14} className="rr-badge-icon" />
                  <span className="rr-badge-text">
                    STRATEGIC CONSULTING <span className="rr-badge-divider">/</span> FORENSICS & RECOVERY
                  </span>
                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={100}>
                                <h1 className="rr-hero-title">
                                    <span className="rr-grad">RANSOMWARE RECOVERY <br /> &amp; INCIDENT RESPONSE</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="rr-hero-description">
                                    Recover from ransomware attacks with speed, security, and confidence. We provide end to end crisis containment and systems restoration, ensuring no dormant threat actor persistence or malware remains. Our rapid response team deploys instantly to isolate affected hosts, assess backup integrity, and secure critical data environments.
                                </p>
                                <p className="rr-hero-description">
                                    By combining clean backup restoration or forensic rebuilds with negotiation support and regulatory breach notifications (such as CERT In compliance), we help you minimize business downtime and return to safe operations.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={300}>
                                <div className="rr-hero-actions">
                                    <button className="rr-btn rr-btn-primary" onClick={() => navigate('/contact')}>
                                        Request Emergency Recovery
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="rr-sec rr-bg-offwhite">
                <div className="rr-container">
                    <ScrollReveal direction="up">
                        <div className="rr-hdr">
                            <p className="rr-eyebrow-red">Challenges</p>
                            <h2 className="rr-title">Ransomware Recovery Challenges</h2>
                            <p className="rr-desc">Ransomware attacks present high stakes operational, financial, and legal challenges under extreme time pressure</p>
                        </div>
                    </ScrollReveal>
                    <div className="rr-challenges-grid">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="rr-challenge-card">
                                    <div className="rr-ch-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="rr-ch-content">
                                        <div className="rr-ch-header">
                                            <div className="rr-ch-icon-box">{c.icon}</div>
                                            <h3 className="rr-ch-title">{c.title}</h3>
                                        </div>
                                        <p className="rr-ch-desc">{c.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="rr-sec rr-bg-white-grid">
                <div className="rr-grid-overlay" />
                <div className="rr-container">
                    <ScrollReveal direction="up">
                        <div className="rr-hdr">
                            <p className="rr-eyebrow-red">Our Framework</p>
                            <h2 className="rr-title">Our Ransomware Recovery Services</h2>
                            <p className="rr-desc">Comprehensive crisis containment, backup verification, structured restoration, and negotiation advisory</p>
                        </div>
                    </ScrollReveal>
                    
                    {/* Row 1: Steps 1-3 */}
                    <ScrollReveal direction="up" delay={100}>
                        <div className="rr-fw-row">
                            {framework.slice(0, 3).map((step, index) => (
                                <div className="rr-fw-card" key={index}>
                                    <div className="rr-fw-badge">{String(index + 1).padStart(2, '0')}</div>
                                    {index < 2 && <span className="rr-fw-connector" />}
                                    <div className="rr-fw-icon">{step.icon}</div>
                                    <h3 className="rr-fw-title">{step.title}</h3>
                                    <p className="rr-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Steps 4-6 */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="rr-fw-row-2">
                            {framework.slice(3, 6).map((step, index) => (
                                <div className="rr-fw-card" key={index + 3}>
                                    <div className="rr-fw-badge">{String(index + 4).padStart(2, '0')}</div>
                                    {index < 2 && <span className="rr-fw-connector" />}
                                    <div className="rr-fw-icon">{step.icon}</div>
                                    <h3 className="rr-fw-title">{step.title}</h3>
                                    <p className="rr-fw-description">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="rr-sec rr-bg-offwhite">
                <div className="rr-container">
                    <ScrollReveal direction="up">
                        <div className="rr-hdr">
                            <p className="rr-eyebrow-red">Our Approach</p>
                            <h2 className="rr-title">Our Recovery Methodology</h2>
                            <p className="rr-desc">A disciplined, step by step methodology focused on clean, secure restoration and preventing reinfection</p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="rr-methodology-timeline">
                        <div className="rr-methodology-line" />
                        <div className="rr-methodology-items">
                            {approach.map((a, i) => (
                                <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={100}>
                                    <div className={`rr-methodology-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="rr-methodology-card">
                                            <div className="rr-methodology-card-num">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="rr-methodology-card-header">
                                                <div className="rr-methodology-card-icon">{a.icon}</div>
                                                <h3 className="rr-methodology-card-title">{a.title}</h3>
                                            </div>
                                            <p className="rr-methodology-card-desc">{a.desc}</p>
                                        </div>
                                        <div className="rr-methodology-dot-connector" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: WHITE + SUBTLE GRID */}
            <section className="rr-sec rr-bg-white-grid">
                <div className="rr-grid-overlay" />
                <div className="rr-container">
                    <ScrollReveal direction="up">
                        <div className="rr-hdr">
                            <p className="rr-eyebrow-red">Our Checklist</p>
                            <h2 className="rr-title">Ransomware Recovery Checklist</h2>
                            <p className="rr-desc">Complete operational coverage from containment through negotiation, restoration, and security hardening</p>
                        </div>
                    </ScrollReveal>
                    <div className="rr-checklist-grid">
                        {checklist.map((it, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 45}>
                                <div className="rr-checklist-item">
                                    <div className="rr-checklist-icon"><CheckCircle size={18} /></div>
                                    <span className="rr-checklist-text">{it}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION A: OFF-WHITE */}
            <section className="rr-sec rr-bg-offwhite">
                <div className="rr-container">
                    <ScrollReveal direction="up">
                        <div className="rr-hdr">
                            <p className="rr-eyebrow-red">Why CyberAries</p>
                            <h2 className="rr-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="rr-why-grid-3">
                        {why.map((w, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="rr-why-clean-card">
                                    <div className="rr-why-clean-icon-box">{w.icon}</div>
                                    <h3 className="rr-why-clean-title">{w.title}</h3>
                                    <p className="rr-why-clean-desc">{w.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CYBERARIES DIFFERENCE SECTION */}
            <section className="rr-diff rr-bg-white-grid">
                <div className="rr-grid-overlay" />
                <div className="rr-container">
                    <ScrollReveal direction="up">
                        <div className="rr-hdr">
                            <p className="rr-eyebrow-red">Our Difference</p>
                            <h2 className="rr-diff-title">THE <span className="rr-diff-highlight">CYBERARIES</span> DIFFERENCE</h2>
                        </div>
                    </ScrollReveal>
                    <div className="rr-diff-grid">
                        <ScrollReveal animation="fade-right" delay={100}>
                            <div className="rr-diff-card rr-diff-card--traditional">
                                <h3 className="rr-diff-heading">Standard Incident Response Teams</h3>
                                <ul className="rr-diff-list">
                                    {trad.map((item, i) => (
                                        <li key={i} className="rr-diff-item">
                                            <span className="rr-diff-bullet">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={200}>
                            <div className="rr-diff-card rr-diff-card--featured">
                                <h3 className="rr-diff-heading rr-diff-heading--ca">
                                    CyberAries Ransomware Practice
                                </h3>
                                <ul className="rr-diff-list">
                                    {ca.map((item, i) => (
                                        <li key={i} className="rr-diff-item">
                                            <span className="rr-diff-bullet">
                                                <CheckCircle size={18} className="rr-check-icon" />
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
            <section className="rr-sec rr-bg-white-grid">
                <div className="rr-grid-overlay" />
                <div className="rr-container">
                    <ScrollReveal direction="up">
                        <div className="rr-hdr">
                            <p className="rr-eyebrow-red">Our Deliverables</p>
                            <h2 className="rr-title">Comprehensive Deliverables</h2>
                            <p className="rr-desc">Structured reports, indicators of compromise, negotiation briefs, and post incident security roadmap.</p>
                        </div>
                    </ScrollReveal>
                    <div className="rr-pillar-grid">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="rr-pillar-card">
                                    <span className="rr-pillar-bg-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="rr-pillar-top">
                                        <div className="rr-pillar-icon-wrap">
                                            {d.icon}
                                        </div>
                                        <div>
                                            <span className="rr-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                                            <h4 className="rr-pillar-title">{d.title}</h4>
                                        </div>
                                    </div>
                                    <div className="rr-pillar-divider" />
                                    <ul className="rr-pillar-list">
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
            <section className="rr-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
                <div className="rr-container">
                    <ScrollReveal direction="up">
                        <div className="rr-cta-content">
                            <h2 className="rr-cta-title">
                                <span className="rr-grad">Under an Active Ransomware Attack?</span>
                            </h2>
                            <p className="rr-cta-description">
                                Our ransomware response team is available 24/7. Contact us immediately to isolate affected hosts and begin the recovery process.
                            </p>
                            <div className="rr-cta-buttons">
                                <Link to="/contact" className="rr-btn rr-cta-btn">
                                    <span>Request Emergency Recovery</span>
                                    <ArrowRight size={18} className="rr-btn-icon" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default RansomwareRecovery;
