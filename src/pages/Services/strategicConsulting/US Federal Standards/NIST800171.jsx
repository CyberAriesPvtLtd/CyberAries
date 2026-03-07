import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Database, Eye, Award, Globe, Settings, FileCheck, Target
} from 'lucide-react';
import './NIST800171.css';

const challenges = [
    { icon: <Target size={40} />, title: 'CUI Identification & Scoping', desc: 'Identifying all Controlled Unclassified Information (CUI) in your environment is the critical first step — and the most frequently underestimated. CUI may exist in systems, applications, email, file shares, and cloud storage across the enterprise.' },
    { icon: <Database size={40} />, title: '110 Controls Across 14 Families', desc: 'NIST 800-171 requires 110 security controls across 14 practice families — derived from NIST 800-53 moderate baseline. Implementing and evidencing all 110 controls across complex IT environments requires systematic project management.' },
    { icon: <Settings size={40} />, title: 'System Security Plan Requirement', desc: 'DoD contracts — through DFARS clause 252.204-7012 — require a System Security Plan documenting the implementation status of all 110 controls and a Plan of Action for any non-compliant controls.' },
    { icon: <Lock size={40} />, title: 'CMMC 2.0 Alignment', desc: 'The Cybersecurity Maturity Model Certification (CMMC) Level 2 requires full implementation of all 110 NIST 800-171 controls. Contractors handling CUI must achieve CMMC Level 2 certification through a third-party C3PAO assessment.' },
    { icon: <Globe size={40} />, title: 'Multi-Enclave & Cloud Environments', desc: 'Most defence contractors process CUI across on-premises, cloud, and remote environments — requiring NIST 800-171 controls implemented consistently across a complex multi-enclave architecture.' },
    { icon: <AlertTriangle size={40} />, title: 'Incident Reporting Obligations', desc: 'DFARS 252.204-7012 requires reporting of cyber incidents to DoD within 72 hours — with mandatory malware submission and preservation of images for potential DoD forensic investigation.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'CUI Scoping & System Boundary', desc: 'Identify all CUI across the enterprise — systems, applications, file storage, email, cloud — and define the CUI system boundary for 800-171 control applicability.' },
    { icon: <Settings size={40} />, title: '110 Control Gap Assessment', desc: 'Systematic gap assessment against all 110 NIST 800-171 controls across 14 practice families — documenting not-implemented, partially implemented, and fully implemented controls.' },
    { icon: <FileText size={40} />, title: 'System Security Plan Development', desc: 'Develop the NIST 800-171 SSP — documenting control implementations, system boundary, CUI categories, responsible roles, and interconnections as required by DFARS 252.204-7012.' },
    { icon: <Lock size={40} />, title: 'Control Implementation & Remediation', desc: 'Technical implementation and remediation of all 110 controls — with priority on access control, audit, identification & authentication, system & communications protection, and configuration management.' },
    { icon: <Eye size={40} />, title: 'CMMC 2.0 Level 2 Preparation', desc: 'Prepare for CMMC Level 2 C3PAO assessment — evidence compilation, practice implementation documentation, and pre-assessment readiness testing across all 110 practices.' },
    { icon: <Award size={40} />, title: 'Incident Response & DFARS Compliance', desc: 'DFARS-compliant incident response programme — 72-hour DoD incident reporting, malware submission procedures, forensic image preservation, and media protection for CUI systems.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'CUI Discovery & Scoping', desc: 'Identify all CUI across the organisation — performing data discovery in file systems, databases, email, and cloud storage to define the accurate CUI system boundary.' },
    { icon: <Target size={40} />, title: '800-171 Gap Assessment', desc: 'Systematic gap assessment against all 110 NIST 800-171 rev 2 controls — scoring each as Met, Partially Met, or Not Met, with evidence review and gap prioritisation.' },
    { icon: <FileText size={40} />, title: 'System Security Plan Development', desc: 'Develop the DFARS-required SSP — accurately describing CUI system boundary, all 110 control implementation statuses, and system architecture.' },
    { icon: <Globe size={40} />, title: 'Plan of Action & Milestones', desc: 'Develop a POA&M for all non-compliant controls — with remediation priorities, resource assignments, cost estimates, and milestone dates for achieving full compliance.' },
    { icon: <Settings size={40} />, title: 'Access Control & IAM Implementation', desc: 'Implement AC and IA practice family controls — role-based access, least privilege, multi-factor authentication, account management, and session control across all CUI systems.' },
    { icon: <Lock size={40} />, title: 'Audit & Configuration Controls', desc: 'Configure audit logging across all CUI systems, implement log aggregation, establish configuration baselines, and deploy vulnerability scanning and patch management processes.' },
    { icon: <Database size={40} />, title: 'Encryption & Communications Protection', desc: 'Implement encryption at rest and in transit for CUI — FIPS 140-2 validated encryption, TLS for data in transit, full-disk encryption for endpoints accessing CUI.' },
    { icon: <Eye size={40} />, title: 'Incident Response Programme', desc: 'Develop DFARS-compliant incident response capabilities — detection, 72-hour DoD reporting procedure, malware submission process, and forensic image preservation.' },
    { icon: <FileCheck size={40} />, title: 'CMMC Evidence Compilation', desc: 'Compile practice-by-practice implementation evidence for CMMC Level 2 assessment — artefact organisation, evidence quality review, and pre-assessment gap testing.' },
    { icon: <Award size={40} />, title: 'C3PAO Assessment Support', desc: 'Support the CMMC Level 2 C3PAO assessment — assessor coordination, evidence provision, findings response, and POA&M submission management for any assessment findings.' },
];

const checklist = [
    'CUI identification and system boundary scoping',
    'NIST 800-171 Rev 2 gap assessment against all 110 controls',
    'System Security Plan (SSP) development per DFARS 252.204-7012',
    'Plan of Action & Milestones (POA&M) with remediation tracking',
    'Access control (AC) — RBAC, least privilege, account management',
    'Identification & Authentication (IA) — MFA, password management',
    'Audit & Accountability (AU) — log collection, review, and retention',
    'Configuration Management (CM) — baselines, change control, vulnerability scanning',
    'System & Communications Protection (SC) — encryption, network segmentation',
    'Media Protection (MP) — CUI media sanitization and disposal',
    'DFARS 72-hour incident reporting and DoD malware submission procedures',
    'CMMC Level 2 evidence compilation and C3PAO assessment readiness',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Defence Contractor Compliance Specialists', desc: 'Our team has guided defence contractors through NIST 800-171 implementation and CMMC Level 2 readiness — with practical knowledge of DFARS requirements, DoD incident reporting, and C3PAO assessment processes.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'CMMC 2.0 Level 2 Ready', desc: 'We prepare organisations for CMMC Level 2 certification — building the SSP, evidence library, and practice implementations required to succeed in a C3PAO third-party assessment.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'CUI-Focused Technical Implementation', desc: 'We implement controls at the CUI data flow level — encryption, access controls, logging — not just policy documentation, ensuring your technical posture matches your SSP assertions.' },
];

const trad = [
    'SSP developed from generic templates without actual CUI scoping or system discovery.',
    'Controls documented as "Met" without technical validation of implementation.',
    'Multi-factor authentication not fully deployed — IA control family partially compliant.',
    'Audit logging configured inconsistently — not covering all CUI system access events.',
    'POA&M items tracked informally without DoD-required milestone dates and cost estimates.',
    'DFARS 72-hour incident reporting procedure not tested before incident occurs.',
];
const ca = [
    'CUI discovered and scoped through technical data discovery before SSP development.',
    'All "Met" control assertions backed by implementation evidence in the evidence library.',
    'MFA deployed across all CUI system access points — IA controls fully validated.',
    'Audit logging configured consistently across all CUI environments with SIEM integration.',
    'POA&M formally managed with prioritised milestones, cost estimates, and owner accountability.',
    'Incident response programme including 72-hour reporting tested via tabletop exercise.',
];

const deliverables = [
    { icon: <Search size={36} />, title: 'Assessment & Planning', items: ['CUI Scoping & Discovery Report', 'NIST 800-171 Gap Assessment', 'System Security Plan (SSP)', 'Plan of Action & Milestones (POA&M)'] },
    { icon: <Settings size={36} />, title: 'Control Implementation', items: ['Access & Identity Controls (AC, IA)', 'Audit & Configuration Management (AU, CM)', 'Encryption & Communications Protection (SC)', 'Media & Physical Protection (MP, PE)'] },
    { icon: <FileText size={36} />, title: 'Documentation', items: ['Control Implementation Evidence Library', 'DFARS Compliance Documentation', 'CUI Handling Policies & Procedures', 'Configuration Baselines & Standards'] },
    { icon: <Award size={36} />, title: 'CMMC & Audit Support', items: ['CMMC Level 2 Evidence Package', 'C3PAO Assessment Coordination', 'Assessment Finding Response', 'Incident Response & DFARS Reporting Procedure'] },
];

const NIST800171 = () => {
    const navigate = useNavigate();
    return (
        <div className="n171-page">
            <section className="n171-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="n171-hero-bg" />
                <div className="n171-container">
                    <p className="n171-eyebrow">Strategic Consulting — US Federal Standards</p>
                    <h1 className="n171-hero-title">NIST SP 800-171 <span className="n171-grad">&amp; CMMC COMPLIANCE</span></h1>
                    <p className="n171-hero-desc"><strong>NIST SP 800-171</strong> defines 110 security requirements across 14 practice families for protecting Controlled Unclassified Information (CUI) in non-federal systems. Compliance is mandatory for all defence contractors under DFARS clause 252.204-7012 — and full implementation of all 110 controls is required for <strong>CMMC Level 2 certification</strong>, increasingly mandated by DoD contracts.</p>
                    <p className="n171-hero-desc">Our <strong>NIST 800-171 and CMMC practice</strong> provides complete compliance support — CUI scoping and discovery, gap assessment against all 110 controls, SSP and POA&M development, technical control implementation, DFARS incident reporting programme, and C3PAO assessment readiness for CMMC Level 2 certification.</p>
                    <div className="n171-actions">
                        <button className="n171-btn n171-btn-p" onClick={() => navigate('/contact')}>Request 800-171 Assessment</button>
                        <button className="n171-btn n171-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="n171-sec n171-bg-w"><div className="n171-container"><ScrollReveal direction="up"><div className="n171-hdr"><h2 className="n171-title">NIST 800-171 Compliance Challenges</h2><p className="n171-desc">Defence contractors face significant challenges scoping CUI, implementing all 110 controls, and preparing for CMMC Level 2 C3PAO assessment</p></div></ScrollReveal><div className="n171-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="n171-ch-card"><div className="n171-ic">{c.icon}</div><h3 className="n171-ct">{c.title}</h3><p className="n171-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="n171-sec n171-bg-p"><div className="n171-container"><ScrollReveal direction="up"><div className="n171-hdr"><h2 className="n171-title">Our NIST 800-171 Service Framework</h2><p className="n171-desc">Comprehensive 800-171 and CMMC compliance — from CUI scoping through SSP, control implementation, and C3PAO assessment readiness</p></div></ScrollReveal><div className="n171-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="n171-cmp-card"><div className="n171-ic">{c.icon}</div><h3 className="n171-ct">{c.title}</h3><p className="n171-cd">{c.desc}</p><div className="n171-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="n171-sec n171-bg-w"><div className="n171-container"><ScrollReveal direction="up"><div className="n171-hdr"><h2 className="n171-title">Our Compliance Methodology</h2><p className="n171-desc">A structured 10-step methodology — from CUI discovery through CMMC Level 2 C3PAO assessment support</p></div></ScrollReveal><div className="n171-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="n171-ap-card"><div className="n171-sn">{String(i + 1).padStart(2, '0')}</div><div className="n171-ic">{a.icon}</div><h3 className="n171-ct">{a.title}</h3><p className="n171-cd">{a.desc}</p><div className="n171-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="n171-sec n171-bg-p"><div className="n171-container"><ScrollReveal direction="up"><div className="n171-hdr"><h2 className="n171-title">NIST 800-171 Coverage Checklist</h2><p className="n171-desc">Complete coverage of all 110 NIST 800-171 controls across 14 practice families</p></div></ScrollReveal><div className="n171-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="n171-chk-item"><div className="n171-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="n171-sec n171-bg-w"><div className="n171-container"><ScrollReveal direction="up"><div className="n171-hdr"><h2 className="n171-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="n171-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="n171-why-card"><div className="n171-why-ic">{w.icon}</div><h3 className="n171-wt">{w.title}</h3><p className="n171-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="n171-diff"><div className="n171-container"><ScrollReveal direction="up"><h2 className="n171-diff-t">THE <span className="n171-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="n171-cmp-g"><ScrollReveal direction="left" delay={100}><div className="n171-col n171-col-t"><h3 className="n171-col-h">Generic Compliance Providers</h3><ul>{trad.map((t, i) => <li key={i}><span className="n171-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="n171-col n171-col-c"><h3 className="n171-col-h n171-col-ch">CyberAries NIST 800-171 Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="n171-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="n171-sec n171-bg-w"><div className="n171-container"><ScrollReveal direction="up"><div className="n171-hdr"><h2 className="n171-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="n171-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="n171-del-card"><div className="n171-del-ic">{d.icon}</div><h4 className="n171-dt">{d.title}</h4><ul className="n171-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="n171-cta"><div className="n171-container"><ScrollReveal direction="up"><div className="n171-cta-c"><h2 className="n171-cta-t">Achieve NIST 800-171 &amp; CMMC Level 2</h2><p className="n171-cta-d">Protect your CUI, win and retain DoD contracts, and achieve CMMC Level 2 certification with our defence contractor compliance specialists.</p><button className="n171-btn n171-btn-p n171-btn-lg" onClick={() => navigate('/contact')}>Request 800-171 Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default NIST800171;
