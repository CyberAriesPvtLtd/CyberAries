import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Database, Eye, Award, Globe, Settings, FileCheck, Target, Clock, RefreshCw
} from 'lucide-react';
import './RansomwareRecovery.css';

const challenges = [
    { icon: <Clock size={40} />, title: 'Recovery Time vs. Data Integrity', desc: 'Organizations face a critical tension between restoring operations as quickly as possible and ensuring recovered data is clean, uncompromised, and free of persistent attacker access or dormant malware.' },
    { icon: <AlertTriangle size={40} />, title: 'Backup Encryption & Destruction', desc: 'Sophisticated ransomware operators now specifically target backup systems, NAS shares, cloud snapshots, and tape libraries before triggering encryption — leaving organizations with no viable restore point.' },
    { icon: <Database size={40} />, title: 'Double Extortion & Data Leak Threats', desc: 'Modern ransomware gangs exfiltrate data before encrypting — threatening public release to pressure payment. Organizations must assess actual exfiltration scope before deciding on recovery and notification strategy.' },
    { icon: <Search size={40} />, title: 'Identifying the Initial Access Vector', desc: 'Recovering without identifying and remediating the initial access vector — phishing, exposed RDP, unpatched VPN, supply chain — inevitably leads to reinfection, often within days of recovery.' },
    { icon: <Lock size={40} />, title: 'Negotiation & Cryptocurrency Complexity', desc: 'Ransom negotiations require specialist knowledge of threat actor credibility, decryptor reliability, OFAC sanctions compliance, and cryptocurrency transaction management — areas well beyond typical IT capabilities.' },
    { icon: <Globe size={40} />, title: 'Regulatory Notification Under Incident Pressure', desc: 'CERT-In 6-hour notification, GDPR 72-hour notification, RBI/SEBI requirements, and state breach laws must be managed simultaneously with active recovery operations — requiring legal and compliance coordination.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'Forensic Investigation & Root Cause', desc: 'Parallel forensic investigation to identify the initial access vector, lateral movement path, and persistence mechanisms — essential to prevent reinfection during or after recovery.' },
    { icon: <Database size={40} />, title: 'Backup Assessment & Recovery Planning', desc: 'Assessment of all backup and recovery options — on-premises, cloud, offsite tape — evaluating integrity, contamination risk, and completeness to develop an optimal recovery strategy.' },
    { icon: <RefreshCw size={40} />, title: 'System Restoration & Rebuild', desc: 'Structured restoration from clean backups or system rebuilds where backups are compromised — prioritising critical business systems while ensuring no reintroduction of attacker persistence.' },
    { icon: <Lock size={40} />, title: 'Ransom Negotiation Support', desc: 'Expert negotiation support if payment is considered — threat actor credibility assessment, decryptor testing, OFAC sanctions compliance verification, and cryptocurrency transaction management.' },
    { icon: <Shield size={40} />, title: 'Data Exfiltration Assessment', desc: 'Assessment of data exfiltration scope — identifying affected data categories, regulatory notification obligations, and data subjects — to support breach notification and legal strategy.' },
    { icon: <Award size={40} />, title: 'Post-Recovery Security Hardening', desc: 'Remediation of the vulnerabilities that enabled the attack — access control strengthening, patch management, network segmentation, EDR deployment — preventing reinfection.' },
];

const approach = [
    { icon: <Clock size={40} />, title: 'Immediate Crisis Triage', desc: 'Emergency scoping call and environment assessment — establishing the scope of encryption, identifying affected systems, and advising on immediate containment actions including network isolation.' },
    { icon: <Search size={40} />, title: 'Forensic Evidence Preservation', desc: 'Preserve forensic evidence before remediation begins — acquiring memory images, system logs, and initial artefacts to support root cause investigation without impeding recovery.' },
    { icon: <AlertTriangle size={40} />, title: 'Threat Actor Intelligence', desc: 'Identify the ransomware variant and threat actor group — assessing negotiation viability, decryptor reliability from prior victims, known data leak practices, and OFAC sanctions status.' },
    { icon: <Database size={40} />, title: 'Backup & Recovery Options Assessment', desc: 'Comprehensive assessment of all recovery options — backup integrity testing, cloud snapshot evaluation, shadow copy review — with contamination risk scoring and timeline modelling for each path.' },
    { icon: <Lock size={40} />, title: 'Negotiation (if required)', desc: 'If payment is being considered, manage negotiation with the threat actor — reducing demand, verifying decryptor capability, ensuring OFAC compliance, and managing cryptocurrency payment logistics.' },
    { icon: <RefreshCw size={40} />, title: 'System Rebuild & Recovery Execution', desc: 'Structured recovery from clean backups or forensic rebuilds — prioritised by business criticality. Decryption testing before full-scale restoration where applicable.' },
    { icon: <Globe size={40} />, title: 'Data Exfiltration Impact Assessment', desc: 'Assess the scope of exfiltrated data — categories, volumes, data subjects — to determine regulatory notification timelines and manage dark web monitoring for leaked data.' },
    { icon: <Shield size={40} />, title: 'Regulatory Notification Management', desc: 'Coordinate CERT-In, GDPR, RBI, SEBI, and applicable state breach notifications — drafting notification content, managing supervisory authority communications, and meeting statutory deadlines.' },
    { icon: <Settings size={40} />, title: 'Root Cause Remediation', desc: 'Remediate the initial access vector and all identified attacker footholds — closing the vulnerability that enabled the attack and eliminating all persistence mechanisms before bringing systems online.' },
    { icon: <FileCheck size={40} />, title: 'Post-Recovery Security Hardening', desc: 'Deploy enhanced security controls — MFA, PAM, EDR, network segmentation, backup isolation — and conduct a post-incident security review to prevent recurrence.' },
];

const checklist = [
    'Emergency triage — scope assessment, containment advisory, and crisis team activation',
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
    'Post-recovery security hardening — MFA, EDR, segmentation, backup isolation',
];

const why = [
    { icon: <Clock size={48} strokeWidth={1.5} />, title: '24/7 Emergency Response', desc: 'Our ransomware response team is available around the clock — engaging within hours to contain the incident, preserve evidence, and begin the recovery process at any time, any day.' },
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Negotiation & Decryptor Expertise', desc: 'We have managed ransomware negotiations across major threat actor groups — with OFAC sanctions compliance, cryptocurrency management, and decryptor capability verification before any payment.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Recovery Without Reinfection', desc: 'Our process always includes root cause identification and full persistence clearance before systems are restored — protecting you from the reinfection that derails up to 30% of ransomware recoveries.' },
];

const trad = [
    'Recovery begins immediately without forensic evidence preservation or root cause investigation.',
    'Backup integrity not tested before restoration — reinfected backups restore attacker access.',
    'All attacker persistence mechanisms not identified — reinfection within days of recovery.',
    'Data exfiltration scope not assessed — regulatory notification obligations missed.',
    'Ransom negotiation handled without OFAC compliance check — potential sanctions exposure.',
    'Security hardening recommendations generic — root cause vulnerability left unpatched.',
];
const ca = [
    'Forensic evidence preserved in parallel with recovery — root cause investigated from day one.',
    'All backups integrity-tested before restoration — contaminated backups isolated.',
    'Complete persistence sweep before going live — zero residual attacker access.',
    'Data exfiltration assessed for all categories — breach notifications managed within deadlines.',
    'All negotiations with full OFAC compliance review and cryptocurrency transaction management.',
    'Root cause vulnerability patched before recovery — specific hardening, not generic advice.',
];

const deliverables = [
    { icon: <Clock size={36} />, title: 'Emergency Response', items: ['Incident Scoping & Triage Report', 'Containment Advisory & Execution', 'Threat Actor Intelligence Brief', 'Ransomware Variant & TTPs Identification'] },
    { icon: <Database size={36} />, title: 'Recovery', items: ['Backup Integrity Assessment Report', 'Recovery Strategy & Timeline Plan', 'System Restoration & Rebuild Execution', 'Decryptor Testing & Validation'] },
    { icon: <Globe size={36} />, title: 'Legal & Regulatory', items: ['Data Exfiltration Impact Assessment', 'CERT-In & Regulatory Notification Drafts', 'Dark Web Monitoring Report', 'Post-Incident Legal Support'] },
    { icon: <Shield size={36} />, title: 'Post-Recovery', items: ['Root Cause & Forensic Investigation Report', 'Persistence Clearance Verification', 'Security Hardening Implementation', 'Post-Incident Security Review Report'] },
];

const RansomwareRecovery = () => {
    const navigate = useNavigate();
    return (
        <div className="rrec-page">
            <section className="rrec-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="rrec-hero-bg" />
                <div className="rrec-container">
                    <p className="rrec-eyebrow">Strategic Consulting — Forensics &amp; Recovery</p>
                    <h1 className="rrec-hero-title">RANSOMWARE <span className="rrec-grad">RECOVERY SERVICES</span></h1>
                    <p className="rrec-hero-desc"><strong>Ransomware</strong> is now the most financially damaging form of cybercrime — with double extortion, backup destruction, and regulatory notification obligations making response complexity far exceed a simple restore operation. The average cost of a ransomware incident globally exceeded $4.9 million in 2024, with downtime accounting for the majority of losses.</p>
                    <p className="rrec-hero-desc">Our <strong>ransomware recovery practice</strong> provides integrated crisis response — forensic investigation and root cause identification, backup assessment, system recovery, ransom negotiation support, data exfiltration impact assessment, regulatory breach notification management, and post-recovery security hardening.</p>
                    <div className="rrec-actions">
                        <button className="rrec-btn rrec-btn-p" onClick={() => navigate('/contact')}>Request Emergency Response</button>
                        <button className="rrec-btn rrec-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="rrec-sec rrec-bg-w"><div className="rrec-container"><ScrollReveal direction="up"><div className="rrec-hdr"><h2 className="rrec-title">Ransomware Recovery Challenges</h2><p className="rrec-desc">Modern ransomware incidents are complex multi-dimensional crises requiring integrated forensic, technical, legal, and negotiation capabilities</p></div></ScrollReveal><div className="rrec-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="rrec-ch-card"><div className="rrec-ic">{c.icon}</div><h3 className="rrec-ct">{c.title}</h3><p className="rrec-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="rrec-sec rrec-bg-p"><div className="rrec-container"><ScrollReveal direction="up"><div className="rrec-hdr"><h2 className="rrec-title">Our Ransomware Recovery Services</h2><p className="rrec-desc">Integrated ransomware response — forensics, backup recovery, negotiation, regulatory notification, and post-recovery hardening</p></div></ScrollReveal><div className="rrec-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="rrec-cmp-card"><div className="rrec-ic">{c.icon}</div><h3 className="rrec-ct">{c.title}</h3><p className="rrec-cd">{c.desc}</p><div className="rrec-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="rrec-sec rrec-bg-w"><div className="rrec-container"><ScrollReveal direction="up"><div className="rrec-hdr"><h2 className="rrec-title">Our Recovery Methodology</h2><p className="rrec-desc">A proven 10-step ransomware recovery methodology — from emergency triage through post-recovery security hardening</p></div></ScrollReveal><div className="rrec-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="rrec-ap-card"><div className="rrec-sn">{String(i + 1).padStart(2, '0')}</div><div className="rrec-ic">{a.icon}</div><h3 className="rrec-ct">{a.title}</h3><p className="rrec-cd">{a.desc}</p><div className="rrec-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="rrec-sec rrec-bg-p"><div className="rrec-container"><ScrollReveal direction="up"><div className="rrec-hdr"><h2 className="rrec-title">Ransomware Recovery Checklist</h2><p className="rrec-desc">Complete ransomware incident response coverage — from emergency containment through post-recovery hardening</p></div></ScrollReveal><div className="rrec-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="rrec-chk-item"><div className="rrec-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="rrec-sec rrec-bg-w"><div className="rrec-container"><ScrollReveal direction="up"><div className="rrec-hdr"><h2 className="rrec-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="rrec-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="rrec-why-card"><div className="rrec-why-ic">{w.icon}</div><h3 className="rrec-wt">{w.title}</h3><p className="rrec-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="rrec-diff"><div className="rrec-container"><ScrollReveal direction="up"><h2 className="rrec-diff-t">THE <span className="rrec-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="rrec-cmp-g"><ScrollReveal direction="left" delay={100}><div className="rrec-col rrec-col-t"><h3 className="rrec-col-h">Generic IT Recovery Teams</h3><ul>{trad.map((t, i) => <li key={i}><span className="rrec-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="rrec-col rrec-col-c"><h3 className="rrec-col-h rrec-col-ch">CyberAries Ransomware Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="rrec-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="rrec-sec rrec-bg-w"><div className="rrec-container"><ScrollReveal direction="up"><div className="rrec-hdr"><h2 className="rrec-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="rrec-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="rrec-del-card"><div className="rrec-del-ic">{d.icon}</div><h4 className="rrec-dt">{d.title}</h4><ul className="rrec-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="rrec-cta"><div className="rrec-container"><ScrollReveal direction="up"><div className="rrec-cta-c"><h2 className="rrec-cta-t">Under Ransomware Attack? We Respond Now.</h2><p className="rrec-cta-d">Time is critical. Our emergency ransomware response team is available 24/7 — call us immediately to begin containment and recovery.</p><button className="rrec-btn rrec-btn-p rrec-btn-lg" onClick={() => navigate('/contact')}>Get Emergency Help Now</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default RansomwareRecovery;
