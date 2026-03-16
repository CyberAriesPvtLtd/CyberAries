import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Users, Award, Globe, Database, Eye, FileCheck, Target
} from 'lucide-react';
import './DPDPActCompliance.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Data Fiduciary Obligations Under DPDP Act 2023', desc: 'Understanding and operationalizing the full range of Data Fiduciary obligations — lawful basis, consent management, purpose limitation, data minimisation, accuracy, and storage limitation under the new Indian framework.' },
    { icon: <Database size={40} />, title: 'Consent Manager & Consent Mechanism', desc: 'Implementing a valid consent framework meeting DPDP Act requirements — free, specific, informed, unconditional, and unambiguous — plus consent notice requirements before data collection.' },
    { icon: <Users size={40} />, title: 'Data Principal Rights Management', desc: 'Enabling Data Principal rights — access, correction, erasure, grievance redressal, and nominee rights — through operational procedures and accessible request mechanisms.' },
    { icon: <Globe size={40} />, title: 'Cross-Border Data Transfers', desc: 'Navigating DPDP Act\'s provisions on cross-border data transfers — awaiting government notification of permissible jurisdictions — and maintaining transfer documentation for regulatory readiness.' },
    { icon: <Lock size={40} />, title: 'Significant Data Fiduciary Compliance', desc: 'Meeting additional obligations for Significant Data Fiduciaries (SDFs) notified by the government — Data Protection Officer appointment, data protection impact assessments, and periodic audits.' },
    { icon: <AlertTriangle size={40} />, title: 'Data Protection Board Preparedness', desc: 'Preparing for complaints before the Data Protection Board of India — building a documented compliance posture, grievance redressal mechanism, and breach notification capability.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'DPDP Act Readiness Assessment', desc: 'Structured gap assessment against all DPDP Act 2023 obligations — data processing inventory, consent framework, Data Principal rights procedures, and cross-border transfer review.' },
    { icon: <Database size={40} />, title: 'Personal Data Inventory & Processing Activities', desc: 'Comprehensive catalogue of all personal data processing — categories, purposes, lawful basis (consent or legitimate use), retention, and data flows across systems and third parties.' },
    { icon: <FileText size={40} />, title: 'Consent Notice & Mechanism Design', desc: 'Design of DPDP Act-compliant consent notices and consent collection mechanisms — clear, plain-language notices covering purpose, rights, and withdrawal before any data collection.' },
    { icon: <Users size={40} />, title: 'Data Principal Rights Programme', desc: 'Operational procedures for all DPDP Act Data Principal rights — access, correction, erasure, withdrawal of consent, nomination, and grievance redressal within prescribed timelines.' },
    { icon: <Lock size={40} />, title: 'Security Safeguards & Breach Response', desc: 'Implementing reasonable security safeguards for personal data and breach notification procedures — intimating the Data Protection Board and affected Data Principals of personal data breaches.' },
    { icon: <Award size={40} />, title: 'Significant Data Fiduciary Compliance', desc: 'Preparing organizations notified as SDFs — DPO appointment support, Data Protection Impact Assessments, periodic audits, and additional compliance obligations.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'DPDP Act Gap Assessment', desc: 'Baseline review against all applicable DPDP Act 2023 obligations — confirming Data Fiduciary status, identifying personal data processing without valid consent or legitimate use, and documentation gaps.' },
    { icon: <Database size={40} />, title: 'Personal Data Inventory & Purpose Mapping', desc: 'Build a complete personal data processing inventory — all personal data categories, processing purposes, lawful basis, retention periods, and third-party data sharing arrangements.' },
    { icon: <FileText size={40} />, title: 'Consent Notice Design', desc: 'Draft DPDP Act-compliant consent notices — clear, plain-language, purpose-specific — and implement consent collection mechanisms before or at the point of data collection.' },
    { icon: <Globe size={40} />, title: 'Consent Management Implementation', desc: 'Deploy or integrate with an approved Consent Manager; implement consent tracking, preference management, and withdrawal mechanisms across all touchpoints.' },
    { icon: <Users size={40} />, title: 'Data Principal Rights Procedures', desc: 'Design and implement request intake, identity verification, fulfilment workflows and response mechanisms for all DPDP Act Data Principal rights within legally prescribed timelines.' },
    { icon: <Lock size={40} />, title: 'Security Safeguards Implementation', desc: 'Implement reasonable technical and organisational security safeguards for personal data — access controls, encryption, incident detection — meeting DPDP Act security obligations.' },
    { icon: <AlertTriangle size={40} />, title: 'Breach Notification Programme', desc: 'Develop a personal data breach response plan — detection, initial assessment, Data Protection Board notification procedures, and Data Principal communication where required.' },
    { icon: <Eye size={40} />, title: 'Cross-Border Transfer Preparedness', desc: 'Document all cross-border personal data transfers, monitor government notification of permissible jurisdictions, and prepare transfer impact assessments and safeguards.' },
    { icon: <FileCheck size={40} />, title: 'Grievance Redressal Mechanism', desc: 'Establish an accessible grievance redressal mechanism and designate a grievance officer as required by DPDP Act — with documented response SLAs and escalation procedures.' },
    { icon: <Award size={40} />, title: 'SDF Programme & Ongoing Compliance', desc: 'For Significant Data Fiduciaries — DPO appointment support, DPIA programme, periodic audit coordination, and ongoing DPDP Act regulatory monitoring as Rules are notified.' },
];

const checklist = [
    'DPDP Act 2023 gap assessment — Data Fiduciary obligations review',
    'Personal data processing inventory and purpose mapping',
    'DPDP Act-compliant consent notice design and implementation',
    'Consent Manager integration or implementation for consent tracking',
    'Data Principal rights procedures — access, correction, erasure, withdrawal, nomination',
    'Grievance redressal mechanism and designated grievance officer',
    'Security safeguards for personal data — technical and organisational measures',
    'Personal data breach notification plan — Data Protection Board and Data Principals',
    'Cross-border data transfer documentation and permissible jurisdiction monitoring',
    'Processing agreements with Data Processors including DPDP Act obligations',
    'Significant Data Fiduciary compliance (if notified) — DPO, DPIA, periodic audit',
    'Ongoing DPDP Act regulatory update monitoring as Rules are notified',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Indian Privacy Law Specialists', desc: 'Our team has deep expertise in Indian data protection law — from SPDI Rules through CERT-In directions to the DPDP Act 2023 — with direct CERT-In empanelment and regulatory experience.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Practical DPDP Act Compliance', desc: 'We translate DPDP Act 2023 obligations into operational procedures — consent notices, Data Principal rights workflows, grievance mechanisms — designed to work within Indian business contexts.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Regulatory-Ready Compliance Posture', desc: 'We build compliance programmes designed for the Data Protection Board of India — documented, auditable, and responsive to the evolving DPDP Act rulebook as government notifications are issued.' },
];

const trad = [
    'DPDP Act obligations conflated with GDPR requirements without India-specific analysis.',
    'Privacy policies updated without DPDP Act-compliant consent notice implementation.',
    'Data Principal rights acknowledged without operational fulfilment procedures.',
    'Security safeguards generic — not aligned to DPDP Act\'s reasonable security standard.',
    'Cross-border transfers not reviewed against DPDP Act permissible jurisdiction requirements.',
    'Grievance redressal mechanism exists on paper without a designated grievance officer or SLA.',
];
const ca = [
    'DPDP Act 2023 obligations assessed specifically — not adapted from GDPR frameworks.',
    'DPDP Act-compliant consent notices implemented at all personal data collection points.',
    'All Data Principal rights operationally enabled with tested workflows and response audit trails.',
    'Reasonable security safeguards implemented and documented against DPDP Act security obligations.',
    'Cross-border transfers documented with permissible jurisdiction monitoring as Rules are notified.',
    'Grievance redressal mechanism operational with designated officer, response SLA, and escalation.',
];

const deliverables = [
    { icon: <Database size={36} />, title: 'Assessment & Inventory', items: ['DPDP Act Gap Assessment Report', 'Personal Data Processing Inventory', 'Data Flow Diagrams & Third-Party Register', 'Cross-Border Transfer Documentation'] },
    { icon: <FileText size={36} />, title: 'Consent & Notices', items: ['DPDP Act-Compliant Consent Notice Suite', 'Consent Management Implementation', 'Consent Withdrawal Mechanism', 'Privacy Notice & Data Fiduciary Policy'] },
    { icon: <Users size={36} />, title: 'Data Principal Rights', items: ['Data Principal Rights Request Procedures', 'Grievance Redressal Mechanism & SLA', 'Grievance Officer Designation Documentation', 'Rights Fulfilment Audit Log'] },
    { icon: <Award size={36} />, title: 'Security & Compliance', items: ['Reasonable Security Safeguards Documentation', 'Data Breach Notification Playbook', 'Data Processor Agreement Template', 'SDF Compliance Programme (if applicable)'] },
];

const DPDPActCompliance = () => {
    const navigate = useNavigate();
    return (
        <div className="dpdp-page">
            <section className="dpdp-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="dpdp-hero-bg" />
                <div className="dpdp-container">
                    <p className="dpdp-eyebrow">Data Privacy — Indian Privacy Laws</p>
                    <h1 className="dpdp-hero-title">DPDP ACT <span className="dpdp-grad">COMPLIANCE PROGRAMME</span></h1>
                    <p className="dpdp-hero-desc">Align with India’s new data privacy landscape. We provide a comprehensive framework to help Data Fiduciaries meet their legal obligations and avoid penalties of up to ₹250 crore. Our programme streamlines personal data inventory, DPDP-compliant consent management, and Data Principal rights procedures. By implementing robust security safeguards, grievance redressal mechanisms, and breach notification protocols, we ensure your organization achieves full compliance while building digital trust in the Indian economy.</p>
                    <div className="dpdp-actions">
                        <button className="dpdp-btn dpdp-btn-p" onClick={() => navigate('/contact')}>Schedule a DPDP Act Assessment</button>
                        <button className="dpdp-btn dpdp-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="dpdp-sec dpdp-bg-w"><div className="dpdp-container"><ScrollReveal direction="up"><div className="dpdp-hdr"><h2 className="dpdp-title">DPDP Act Compliance Challenges</h2><p className="dpdp-desc">Data Fiduciaries face complex challenges operationalizing new DPDP Act obligations across consent, rights, security, and cross-border data transfer requirements</p></div></ScrollReveal><div className="dpdp-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="dpdp-ch-card"><div className="dpdp-ic">{c.icon}</div><h3 className="dpdp-ct">{c.title}</h3><p className="dpdp-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="dpdp-sec dpdp-bg-p"><div className="dpdp-container"><ScrollReveal direction="up"><div className="dpdp-hdr"><h2 className="dpdp-title">Our DPDP Act Compliance Framework</h2><p className="dpdp-desc">Comprehensive DPDP Act 2023 compliance from data inventory and consent notices through Data Principal rights, security safeguards, and Data Protection Board readiness</p></div></ScrollReveal><div className="dpdp-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="dpdp-cmp-card"><div className="dpdp-ic">{c.icon}</div><h3 className="dpdp-ct">{c.title}</h3><p className="dpdp-cd">{c.desc}</p><div className="dpdp-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="dpdp-sec dpdp-bg-w"><div className="dpdp-container"><ScrollReveal direction="up"><div className="dpdp-hdr"><h2 className="dpdp-title">Our DPDP Act Methodology</h2><p className="dpdp-desc">A 10-step methodology from DPDP Act gap assessment through ongoing compliance as government rules and notifications are issued</p></div></ScrollReveal><div className="dpdp-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="dpdp-ap-card"><div className="dpdp-sn">{String(i + 1).padStart(2, '0')}</div><div className="dpdp-ic">{a.icon}</div><h3 className="dpdp-ct">{a.title}</h3><p className="dpdp-cd">{a.desc}</p><div className="dpdp-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="dpdp-sec dpdp-bg-p"><div className="dpdp-container"><ScrollReveal direction="up"><div className="dpdp-hdr"><h2 className="dpdp-title">DPDP Act Coverage Checklist</h2><p className="dpdp-desc">Complete coverage of DPDP Act 2023 Data Fiduciary obligations</p></div></ScrollReveal><div className="dpdp-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="dpdp-chk-item"><div className="dpdp-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="dpdp-sec dpdp-bg-w"><div className="dpdp-container"><ScrollReveal direction="up"><div className="dpdp-hdr"><h2 className="dpdp-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="dpdp-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="dpdp-why-card"><div className="dpdp-why-ic">{w.icon}</div><h3 className="dpdp-wt">{w.title}</h3><p className="dpdp-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="dpdp-diff"><div className="dpdp-container"><ScrollReveal direction="up"><h2 className="dpdp-diff-t">THE <span className="dpdp-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="dpdp-cmp-g"><ScrollReveal direction="left" delay={100}><div className="dpdp-col dpdp-col-t"><h3 className="dpdp-col-h">Generic Privacy Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="dpdp-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="dpdp-col dpdp-col-c"><h3 className="dpdp-col-h dpdp-col-ch">CyberAries DPDP Act Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="dpdp-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="dpdp-sec dpdp-bg-w"><div className="dpdp-container"><ScrollReveal direction="up"><div className="dpdp-hdr"><h2 className="dpdp-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="dpdp-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="dpdp-del-card"><div className="dpdp-del-ic">{d.icon}</div><h4 className="dpdp-dt">{d.title}</h4><ul className="dpdp-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="dpdp-cta"><div className="dpdp-container"><ScrollReveal direction="up"><div className="dpdp-cta-c"><h2 className="dpdp-cta-t">Achieve DPDP Act Compliance</h2><p className="dpdp-cta-d">Build a robust, Data Protection Board-ready DPDP Act compliance programme with India's leading data protection specialists.</p><button className="dpdp-btn dpdp-btn-p dpdp-btn-lg" onClick={() => navigate('/contact')}>Request DPDP Act Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default DPDPActCompliance;
