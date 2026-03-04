import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, Users, Award, FileCheck, Eye, Database, Globe, Target } from 'lucide-react';
import './PCIDSS.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Cardholder Data Environment Scoping', desc: 'Accurately defining the CDE scope — all systems that store, process, or transmit cardholder data plus connected systems — is critical. Over-scoping drives excessive cost; under-scoping creates compliance gaps.' },
    { icon: <Lock size={40} />, title: 'Network Segmentation & Isolation', desc: 'Implementing effective network segmentation that genuinely isolates the CDE from out-of-scope networks — reducing PCI DSS scope and protecting cardholder data from lateral movement.' },
    { icon: <Settings size={40} />, title: 'PCI DSS v4.0 Transition', desc: 'PCI DSS v4.0 introduced significant changes including customized implementation approaches, enhanced authentication requirements, and targeted risk analysis. Organizations need structured transition roadmaps.' },
    { icon: <Eye size={40} />, title: 'Continuous Compliance Monitoring', desc: 'PCI DSS requires continuous monitoring — log review, change detection, file integrity monitoring, and vulnerability scanning — not just annual point-in-time assessments.' },
    { icon: <Users size={40} />, title: 'Third-Party & Service Provider Risk', desc: 'Managing PCI DSS compliance obligations across payment processors, service providers, and vendors — including maintaining a compliant service provider list and managing their compliance status.' },
    { icon: <AlertTriangle size={40} />, title: 'QSA Assessment Preparation', desc: 'Preparing for a Qualified Security Assessor (QSA) audit requires rigorous evidence collection, control testing, and documentation readiness across all 12 PCI DSS requirement domains.' },
];

const components = [
    { icon: <Target size={40} />, title: 'CDE Scoping & Network Segmentation', desc: 'Precise CDE scope definition and implementation of network segmentation controls — VLANs, firewalls, micro-segmentation — genuinely isolating cardholder data environments.' },
    { icon: <Shield size={40} />, title: '12 Requirement Domain Controls', desc: 'Implementation of controls across all 12 PCI DSS v4.0 requirement domains — from network security and access control through monitoring, testing, and information security policies.' },
    { icon: <Lock size={40} />, title: 'Encryption & Tokenization', desc: 'End-to-end encryption of cardholder data at rest and in transit, including point-to-point encryption (P2PE) assessment and tokenization implementation recommendations.' },
    { icon: <Eye size={40} />, title: 'Continuous Monitoring Programme', desc: 'Automated log management, file integrity monitoring, network intrusion detection, and vulnerability scanning meeting PCI DSS continuous monitoring requirements.' },
    { icon: <Globe size={40} />, title: 'Service Provider Management', desc: 'PCI-compliant service provider assessment programme, compliant service provider register maintenance, and contractual PCI DSS obligation enforcement.' },
    { icon: <Award size={40} />, title: 'QSA Assessment Support', desc: 'SAQ selection guidance, QSA coordination, evidence preparation, and management response to findings for ROC and AOC delivery.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'PCI DSS Gap Assessment', desc: 'Comprehensive baseline assessment against all PCI DSS v4.0 requirements — identifying CDE scope issues, control gaps, and documentation deficiencies.' },
    { icon: <Target size={40} />, title: 'CDE Scope Definition', desc: 'Define the cardholder data environment scope — all CHD/SAD storage, processing, and transmission systems plus connected components — with scoping diagrams.' },
    { icon: <Database size={40} />, title: 'Cardholder Data Discovery', desc: 'Technical discovery of all cardholder data across storage systems, databases, logs, and file shares — eliminating uncontrolled CHD outside the defined CDE.' },
    { icon: <Lock size={40} />, title: 'Network Segmentation Implementation', desc: 'Design and implement CDE segmentation using firewalls, VLANs, and micro-segmentation to genuinely isolate cardholder data from out-of-scope networks.' },
    { icon: <Settings size={40} />, title: 'Control Remediation Across 12 Domains', desc: 'Systematic remediation of all identified control gaps across PCI DSS v4.0\'s 12 requirement domains — from access control and cryptography to monitoring and policy.' },
    { icon: <Shield size={40} />, title: 'Encryption & Key Management', desc: 'Implement strong cryptography for CHD at rest and in transit, with documented key management procedures meeting PCI DSS cryptographic requirements.' },
    { icon: <Eye size={40} />, title: 'Continuous Monitoring & Logging', desc: 'Deploy centralized log management, FIM, IDS/IPS, and automated vulnerability scanning meeting PCI DSS continuous monitoring and testing requirements.' },
    { icon: <Globe size={40} />, title: 'Service Provider Programme', desc: 'Establish compliant service provider list, review TSPs\' AOCs, and implement contractual PCI compliance obligations for all in-scope vendors.' },
    { icon: <FileCheck size={40} />, title: 'Evidence Documentation', desc: 'Compile comprehensive PCI DSS compliance evidence — policies, control test results, network diagrams, scan reports, and penetration test reports.' },
    { icon: <Award size={40} />, title: 'QSA/SAQ Assessment Support', desc: 'SAQ self-assessment or QSA ROC assessment coordination with evidence preparation, on-site assessment support, and AOC/ROC delivery management.' },
];

const checklist = [
    'PCI DSS v4.0 gap assessment across all 12 requirement domains',
    'CDE scope definition with network and data flow diagrams',
    'Cardholder data discovery and uncontrolled CHD elimination',
    'Network segmentation implementation and penetration test validation',
    'Firewall and network security control implementation (Req. 1-2)',
    'Cardholder data protection — encryption at rest and in transit (Req. 3-4)',
    'Access control — least privilege, MFA, unique IDs (Req. 7-8)',
    'Physical access controls for CDE locations (Req. 9)',
    'Log management, FIM, and network monitoring (Req. 10-11)',
    'Quarterly vulnerability scanning and annual penetration testing (Req. 11)',
    'Information security policy and awareness programme (Req. 12)',
    'QSA assessment coordination and AOC/ROC delivery support',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'PCI DSS v4.0 Specialists', desc: 'Our assessors are current on PCI DSS v4.0 changes — customized implementation, targeted risk analysis, and enhanced multi-factor authentication requirements.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Technical CDE Expertise', desc: 'We implement network segmentation, encryption, FIM, and monitoring controls — not just compliance documentation — to reduce both scope and residual risk.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'End-to-End QSA Readiness', desc: 'From CHD discovery and CDE scoping through all 12 requirement domains and QSA coordination — we guide your entire PCI DSS compliance journey.' },
];

const trad = [
    'CDE scope defined too broadly, creating excessive compliance burden and cost.',
    'Network segmentation documented but not technically validated through testing.',
    'Cardholder data discovery skipped, leaving uncontrolled CHD outside the CDE.',
    'Continuous monitoring limited to quarterly scans rather than ongoing detection.',
    'Service provider compliance managed through contracts alone without technical review.',
    'QSA assessment surprises from evidence gaps discovered during on-site review.',
];
const ca = [
    'Precise CDE scoping minimizing compliance burden while ensuring full coverage.',
    'Network segmentation technically validated through penetration testing evidence.',
    'Comprehensive CHD discovery eliminating uncontrolled card data before assessment.',
    'Continuous monitoring programme with daily log review, FIM, and anomaly alerts.',
    'Service provider compliance monitored through AOC reviews and technical attestation.',
    'Pre-QSA readiness testing eliminating on-site assessment surprises and findings.',
];

const deliverables = [
    { icon: <Target size={36} />, title: 'Scoping & Architecture', items: ['CDE Scope Definition & Documentation', 'Network Segmentation Architecture', 'Data Flow & Network Diagrams', 'Cardholder Data Discovery Report'] },
    { icon: <Settings size={36} />, title: 'Technical Controls', items: ['Network Security & Firewall Controls', 'Encryption & Key Management Implementation', 'Access Control & MFA Implementation', 'FIM, IDS, and Log Management Deployment'] },
    { icon: <FileText size={36} />, title: 'Documentation & Policies', items: ['PCI DSS Policy Suite (12 domains)', 'Service Provider Register & AOC Tracking', 'Quarterly Scan & Annual Pentest Reports', 'Evidence Repository for QSA Assessment'] },
    { icon: <Award size={36} />, title: 'Assessment Support', items: ['SAQ Selection & Self-Assessment Support', 'QSA Engagement Management', 'AOC and ROC Delivery Coordination', 'Annual Assessment Readiness Plan'] },
];

const PCIDSS = () => {
    const navigate = useNavigate();
    return (
        <div className="pci-page">
            <section className="pci-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="pci-hero-bg" />
                <div className="pci-container">
                    <p className="pci-eyebrow">Compliance — Global Attestations</p>
                    <h1 className="pci-hero-title">PCI DSS <span className="pci-grad">COMPLIANCE & ASSESSMENT</span></h1>
                    <p className="pci-hero-desc">The <strong>Payment Card Industry Data Security Standard (PCI DSS v4.0)</strong> mandates robust security controls for all organizations that store, process, or transmit cardholder data. Non-compliance exposes organizations to card brand fines, processor termination, data breach liability, and reputational harm.</p>
                    <p className="pci-hero-desc">Our PCI DSS practice provides <strong>end-to-end compliance support</strong> — from CDE scoping and cardholder data discovery through all 12 requirement domains, network segmentation, continuous monitoring, and QSA assessment coordination.</p>
                    <div className="pci-actions">
                        <button className="pci-btn pci-btn-p" onClick={() => navigate('/contact')}>Schedule a PCI DSS Gap Assessment</button>
                        <button className="pci-btn pci-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="pci-sec pci-bg-w"><div className="pci-container"><ScrollReveal direction="up"><div className="pci-hdr"><h2 className="pci-title">PCI DSS Compliance Challenges</h2><p className="pci-desc">Organizations handling cardholder data face complex technical and operational challenges achieving and maintaining PCI DSS v4.0 compliance</p></div></ScrollReveal><div className="pci-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="pci-ch-card"><div className="pci-ic">{c.icon}</div><h3 className="pci-ct">{c.title}</h3><p className="pci-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="pci-sec pci-bg-p"><div className="pci-container"><ScrollReveal direction="up"><div className="pci-hdr"><h2 className="pci-title">Our PCI DSS Compliance Framework</h2><p className="pci-desc">Comprehensive PCI DSS v4.0 compliance covering all 12 requirement domains from CDE scoping through QSA assessment</p></div></ScrollReveal><div className="pci-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="pci-cmp-card"><div className="pci-ic">{c.icon}</div><h3 className="pci-ct">{c.title}</h3><p className="pci-cd">{c.desc}</p><div className="pci-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="pci-sec pci-bg-w"><div className="pci-container"><ScrollReveal direction="up"><div className="pci-hdr"><h2 className="pci-title">Our Compliance Methodology</h2><p className="pci-desc">A proven 10-step PCI DSS compliance methodology from baseline gap assessment through QSA assessment and AOC delivery</p></div></ScrollReveal><div className="pci-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="pci-ap-card"><div className="pci-sn">{String(i + 1).padStart(2, '0')}</div><div className="pci-ic">{a.icon}</div><h3 className="pci-ct">{a.title}</h3><p className="pci-cd">{a.desc}</p><div className="pci-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="pci-sec pci-bg-p"><div className="pci-container"><ScrollReveal direction="up"><div className="pci-hdr"><h2 className="pci-title">PCI DSS v4.0 Coverage Checklist</h2><p className="pci-desc">Complete coverage of PCI DSS v4.0 requirements across all 12 requirement domains</p></div></ScrollReveal><div className="pci-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="pci-chk-item"><div className="pci-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="pci-sec pci-bg-w"><div className="pci-container"><ScrollReveal direction="up"><div className="pci-hdr"><h2 className="pci-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="pci-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="pci-why-card"><div className="pci-why-ic">{w.icon}</div><h3 className="pci-wt">{w.title}</h3><p className="pci-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="pci-diff"><div className="pci-container"><ScrollReveal direction="up"><h2 className="pci-diff-t">THE <span className="pci-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="pci-cmp-g"><ScrollReveal direction="left" delay={100}><div className="pci-col pci-col-t"><h3 className="pci-col-h">Standard PCI Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="pci-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="pci-col pci-col-c"><h3 className="pci-col-h pci-col-ch">CyberAries PCI DSS Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="pci-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="pci-sec pci-bg-w"><div className="pci-container"><ScrollReveal direction="up"><div className="pci-hdr"><h2 className="pci-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="pci-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="pci-del-card"><div className="pci-del-ic">{d.icon}</div><h4 className="pci-dt">{d.title}</h4><ul className="pci-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="pci-cta"><div className="pci-container"><ScrollReveal direction="up"><div className="pci-cta-c"><h2 className="pci-cta-t">Achieve PCI DSS v4.0 Compliance</h2><p className="pci-cta-d">Protect cardholder data and achieve PCI DSS compliance with our certified assessors and end-to-end compliance programme.</p><button className="pci-btn pci-btn-p pci-btn-lg" onClick={() => navigate('/contact')}>Request PCI DSS Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default PCIDSS;
