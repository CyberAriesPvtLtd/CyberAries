import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Database, Eye, Award, Globe, Settings, FileCheck, Target
} from 'lucide-react';
import './NIST80053.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Control Baseline Selection & Scoping', desc: 'NIST SP 800-53 Rev 5 provides 20 control families and over 1,000 controls. Selecting the correct control baseline (Low, Moderate, High), scoping applicable controls, and applying overlays for specific environments requires deep framework knowledge.' },
    { icon: <Database size={40} />, title: 'Control Implementation Complexity', desc: 'NIST 800-53 controls span technical, operational, and management disciplines — access control, audit, incident response, supply chain risk management, privacy controls — requiring coordinated implementation across IT, security, and operations teams.' },
    { icon: <Settings size={40} />, title: 'Privacy Control Integration', desc: 'NIST SP 800-53 Rev 5 fully integrates privacy controls — the Privacy (PT) control family and privacy-related controls across all other families — requiring organisations to address privacy alongside security in a unified framework.' },
    { icon: <Globe size={40} />, title: 'Assessment & Authorisation Alignment', desc: 'NIST 800-53 is the baseline for FISMA compliance, FedRAMP authorization, and RMF assessment. Aligning control implementation to the assessment procedures in NIST SP 800-53A is essential for authorisation success.' },
    { icon: <Lock size={40} />, title: 'Supply Chain Risk Management Controls', desc: 'Rev 5 significantly expanded Supply Chain Risk Management (SR) controls — requiring organisations to assess and manage cybersecurity risk in technology suppliers, software vendors, and external service providers.' },
    { icon: <AlertTriangle size={40} />, title: 'Continuous Monitoring Obligations', desc: 'Authorization to Operate under RMF requires ongoing continuous monitoring — control assessment updates, POA&M management, security status reporting, and change management integration — not point-in-time compliance.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'Control Baseline & Scoping', desc: 'Impact level determination (Low/Moderate/High), control baseline selection, overlay application, and tailoring decisions — establishing the exact control set applicable to your system or organisation.' },
    { icon: <Database size={40} />, title: 'Control Implementation', desc: 'Technical and operational implementation of all required NIST 800-53 controls across access control, audit, configuration management, incident response, media protection, and all applicable control families.' },
    { icon: <FileText size={40} />, title: 'System Security Plan (SSP)', desc: 'Development of the System Security Plan documenting control implementations, responsible roles, implementation status, and system description — the core authorisation document for RMF and FedRAMP.' },
    { icon: <Eye size={40} />, title: 'Security Assessment Support', desc: 'Preparation for NIST SP 800-53A assessment — evidence collation, assessor coordination, SAR response, and POA&M development for identified weaknesses.' },
    { icon: <Lock size={40} />, title: 'Privacy Control Implementation', desc: 'Implementation of NIST 800-53 Rev 5 privacy controls — data quality (DQ), individual participation (IP), privacy authorization (PA), privacy maintenance (PM), and privacy controls integrated across all families.' },
    { icon: <Award size={40} />, title: 'Continuous Monitoring Programme', desc: 'Design and implementation of a NIST RMF-aligned continuous monitoring programme — ongoing control assessment, POA&M management, and security status reporting to Authorizing Officials.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'System Categorization', desc: 'FIPS 199 system categorization — determining the impact level (Low, Moderate, High) for confidentiality, integrity, and availability — establishing the baseline for control selection.' },
    { icon: <Target size={40} />, title: 'Control Selection & Tailoring', desc: 'Select the appropriate NIST 800-53 baseline, apply applicable overlays (privacy, classified, cloud, IoT), and document tailoring decisions — establishing the precise control set.' },
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
    'Overlay application — privacy, cloud, IoT, or environment-specific',
    'Control gap assessment against all selected control families',
    'Technical controls — access control, audit, cryptography, system communications',
    'Operational controls — physical protection, media protection, maintenance',
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
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Assessment-Ready Evidence', desc: 'We build control implementation libraries with assessment-grade evidence — so your controls satisfy NIST SP 800-53A assessment procedures and assessor scrutiny without last-minute remediation.' },
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
    return (
        <div className="n53-page">
            <section className="n53-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="n53-hero-bg" />
                <div className="n53-container">
                    <p className="n53-eyebrow">Strategic Consulting — US Federal Standards</p>
                    <h1 className="n53-hero-title">NIST SP 800-53 <span className="n53-grad">COMPLIANCE</span></h1>
                    <p className="n53-hero-desc"><strong>NIST SP 800-53 Rev 5</strong> is the foundational security and privacy control catalogue for US federal information systems and organisations. It provides 20 control families covering the full spectrum of security and privacy controls — and serves as the baseline for FISMA compliance, FedRAMP authorization, DoD RMF programmes, and a growing number of enterprise security frameworks adopted beyond the federal sector.</p>
                    <p className="n53-hero-desc">Our <strong>NIST 800-53 compliance practice</strong> covers the complete implementation lifecycle — FIPS 199 categorization, control baseline selection, gap assessment, full technical and management control implementation, privacy and SCRM controls, SSP development, assessment preparation, POA&M management, and continuous monitoring programme design.</p>
                    <div className="n53-actions">
                        <button className="n53-btn n53-btn-p" onClick={() => navigate('/contact')}>Request NIST 800-53 Assessment</button>
                        <button className="n53-btn n53-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="n53-sec n53-bg-w"><div className="n53-container"><ScrollReveal direction="up"><div className="n53-hdr"><h2 className="n53-title">NIST 800-53 Compliance Challenges</h2><p className="n53-desc">Organisations implementing NIST 800-53 face significant complexity across control selection, implementation, assessment, and ongoing monitoring obligations</p></div></ScrollReveal><div className="n53-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="n53-ch-card"><div className="n53-ic">{c.icon}</div><h3 className="n53-ct">{c.title}</h3><p className="n53-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="n53-sec n53-bg-p"><div className="n53-container"><ScrollReveal direction="up"><div className="n53-hdr"><h2 className="n53-title">Our NIST 800-53 Service Framework</h2><p className="n53-desc">End-to-end NIST 800-53 implementation — from categorization and control selection through SSP development, assessment, and continuous monitoring</p></div></ScrollReveal><div className="n53-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="n53-cmp-card"><div className="n53-ic">{c.icon}</div><h3 className="n53-ct">{c.title}</h3><p className="n53-cd">{c.desc}</p><div className="n53-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="n53-sec n53-bg-w"><div className="n53-container"><ScrollReveal direction="up"><div className="n53-hdr"><h2 className="n53-title">Our Implementation Methodology</h2><p className="n53-desc">A 10-step NIST 800-53 implementation methodology — from FIPS 199 categorization through continuous monitoring programme launch</p></div></ScrollReveal><div className="n53-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="n53-ap-card"><div className="n53-sn">{String(i + 1).padStart(2, '0')}</div><div className="n53-ic">{a.icon}</div><h3 className="n53-ct">{a.title}</h3><p className="n53-cd">{a.desc}</p><div className="n53-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="n53-sec n53-bg-p"><div className="n53-container"><ScrollReveal direction="up"><div className="n53-hdr"><h2 className="n53-title">NIST 800-53 Coverage Checklist</h2><p className="n53-desc">Complete NIST 800-53 Rev 5 coverage across all 20 control families</p></div></ScrollReveal><div className="n53-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="n53-chk-item"><div className="n53-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="n53-sec n53-bg-w"><div className="n53-container"><ScrollReveal direction="up"><div className="n53-hdr"><h2 className="n53-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="n53-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="n53-why-card"><div className="n53-why-ic">{w.icon}</div><h3 className="n53-wt">{w.title}</h3><p className="n53-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="n53-diff"><div className="n53-container"><ScrollReveal direction="up"><h2 className="n53-diff-t">THE <span className="n53-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="n53-cmp-g"><ScrollReveal direction="left" delay={100}><div className="n53-col n53-col-t"><h3 className="n53-col-h">Generic Compliance Providers</h3><ul>{trad.map((t, i) => <li key={i}><span className="n53-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="n53-col n53-col-c"><h3 className="n53-col-h n53-col-ch">CyberAries NIST 800-53 Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="n53-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="n53-sec n53-bg-w"><div className="n53-container"><ScrollReveal direction="up"><div className="n53-hdr"><h2 className="n53-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="n53-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="n53-del-card"><div className="n53-del-ic">{d.icon}</div><h4 className="n53-dt">{d.title}</h4><ul className="n53-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="n53-cta"><div className="n53-container"><ScrollReveal direction="up"><div className="n53-cta-c"><h2 className="n53-cta-t">Achieve NIST 800-53 Compliance</h2><p className="n53-cta-d">Implement the complete NIST 800-53 Rev 5 control catalogue with assessment-grade evidence and a defensible compliance posture for RMF, FISMA, and FedRAMP.</p><button className="n53-btn n53-btn-p n53-btn-lg" onClick={() => navigate('/contact')}>Request NIST Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default NIST80053;
