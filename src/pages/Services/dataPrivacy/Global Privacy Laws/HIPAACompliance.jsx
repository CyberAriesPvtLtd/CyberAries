import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Settings, Users, Award, Database, Eye, FileCheck, Target
} from 'lucide-react';
import './HIPAACompliance.css';

const challenges = [
    { icon: <Target size={40} />, title: 'PHI Identification & Scoping', desc: 'Identifying all Protected Health Information (PHI) — in electronic, paper, and oral forms — across clinical, administrative, and business systems to accurately scope HIPAA compliance obligations.' },
    { icon: <Settings size={40} />, title: 'Security Rule Technical Safeguards', desc: 'Implementing the Security Rule\'s required and addressable technical safeguards — access controls, audit controls, integrity controls, and transmission security — across all electronic PHI environments.' },
    { icon: <Users size={40} />, title: 'Business Associate Management', desc: 'Identifying all Business Associates with access to PHI, executing compliant Business Associate Agreements (BAAs), and managing their downstream compliance obligations effectively.' },
    { icon: <Eye size={40} />, title: 'Risk Analysis & Risk Management', desc: 'Conducting a thorough, documented HIPAA Security Rule risk analysis of all ePHI threats and vulnerabilities — the foundational compliance requirement OCR examines first in any audit.' },
    { icon: <Lock size={40} />, title: 'Privacy Rule Compliance', desc: 'Implementing the HIPAA Privacy Rule — minimum necessary standard, patient rights, notice of privacy practices, treatment/payment/operations exceptions, and valid authorizations.' },
    { icon: <AlertTriangle size={40} />, title: 'Breach Notification Compliance', desc: 'Managing HIPAA Breach Notification Rule obligations — breach risk assessment, notification to affected individuals within 60 days, HHS reporting, and media notice for large breaches.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'HIPAA Security Risk Analysis', desc: 'Comprehensive, documented risk analysis of all ePHI across the organization — identifying threats, vulnerabilities, likelihood, and impact as required by 45 CFR §164.308(a)(1).' },
    { icon: <Lock size={40} />, title: 'Security Rule Safeguards Implementation', desc: 'Administrative, physical, and technical safeguards across all required and addressable Security Rule specifications, with documented implementation decisions for addressable specs.' },
    { icon: <FileText size={40} />, title: 'Privacy Rule Compliance Programme', desc: 'Notice of Privacy Practices, minimum necessary policies, patient rights procedures, workforce training, and Privacy Officer designation meeting Privacy Rule requirements.' },
    { icon: <Users size={40} />, title: 'Business Associate Programme', desc: 'BA identification, risk assessment, BAA execution, and ongoing management — plus sub-contractor BAAs — creating a compliant BA management programme.' },
    { icon: <AlertTriangle size={40} />, title: 'Breach Notification Programme', desc: 'Breach detection, risk assessment using the four-factor test, notification procedures for individuals, HHS, media (where applicable), and post-breach remediation.' },
    { icon: <Award size={40} />, title: 'OCR Audit Readiness', desc: 'Preparation for OCR desk audits and on-site investigations — building the documentation portfolio, policies, risk analysis, and workforce records OCR requests.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'HIPAA Gap Assessment', desc: 'Baseline assessment against all HIPAA Security, Privacy, and Breach Notification Rule requirements — identifying gaps in safeguards, documentation, policies, and workforce training.' },
    { icon: <Database size={40} />, title: 'ePHI Discovery & Data Inventory', desc: 'Technical discovery of all ePHI across servers, workstations, cloud storage, SaaS applications, backup media, and mobile devices — scoping ePHI environments accurately.' },
    { icon: <Eye size={40} />, title: 'Security Risk Analysis', desc: 'Conduct and document the HIPAA-required Security Risk Analysis — cataloguing all ePHI threats and vulnerabilities, assess likelihood and impact, and document risk scoring.' },
    { icon: <Settings size={40} />, title: 'Risk Management Plan', desc: 'Develop a documented Risk Management Plan with prioritised remediation of identified risks, responsible owners, target completion dates, and residual risk acceptance.' },
    { icon: <Lock size={40} />, title: 'Security Rule Safeguards', desc: 'Implement all required Security Rule safeguards and document implementation decisions for addressable specifications — across administrative, physical, and technical safeguard categories.' },
    { icon: <FileText size={40} />, title: 'Privacy Rule Implementation', desc: 'Develop Notice of Privacy Practices, minimum necessary policies, patient rights request procedures, with Privacy Officer designation and workforce privacy training.' },
    { icon: <Users size={40} />, title: 'Business Associate Management', desc: 'Identify all BAs, execute BAAs with required elements, assess BA security posture, and establish BA monitoring procedures and incident escalation paths.' },
    { icon: <AlertTriangle size={40} />, title: 'Breach Notification Programme', desc: 'Develop breach identification, four-factor risk assessment, and notification procedures — templates for individual notification, HHS annual report, and media notice for breaches >500.' },
    { icon: <FileCheck size={40} />, title: 'Policy & Procedure Suite', desc: 'Comprehensive HIPAA policy and procedure library covering all Privacy and Security Rule topics, workforce code of conduct, and sanctions policy.' },
    { icon: <Award size={40} />, title: 'OCR Audit Documentation & Training', desc: 'Build the OCR audit documentation portfolio and conduct workforce HIPAA training — creating a compliance-ready evidence base for desk audits or on-site investigations.' },
];

const checklist = [
    'HIPAA gap assessment covering Security, Privacy, and Breach Notification Rules',
    'ePHI discovery and accurate scoping of covered electronic PHI environments',
    'Documented Security Risk Analysis (SRA) per 45 CFR §164.308(a)(1)',
    'Risk Management Plan with remediation tracking and residual risk documentation',
    'Administrative safeguards — workforce training, access management, security officer',
    'Physical safeguards — facility access controls, workstation controls, device disposal',
    'Technical safeguards — access controls, audit logs, encryption, transmission security',
    'HIPAA Privacy Rule — Notice of Privacy Practices, minimum necessary, patient rights',
    'Business Associate Agreements with all BAs and BA sub-contractors',
    'Breach Notification programme — detection, four-factor assessment, notification timeline',
    'HIPAA policy and procedure suite with sanctions policy',
    'Annual HIPAA workforce training and HIPAA Security Risk Analysis update',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'HIPAA Compliance Veterans', desc: 'Our team has guided covered entities and business associates through HIPAA Security Rule risk analyses, OCR investigations, and comprehensive compliance programmes across healthcare verticals.' },
    { icon: <Eye size={48} strokeWidth={1.5} />, title: 'OCR Audit-Ready Documentation', desc: 'We build the documentation portfolio OCR expects — risk analysis, risk management plan, policy suite, training records — so you\'re prepared for any OCR desk audit or investigation.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Technical HIPAA Security Expertise', desc: 'We implement technical safeguards at the infrastructure level — encryption, access controls, audit logging, and transmission security — not just policy documentation.' },
];

const trad = [
    'Risk analysis conducted as a checklist exercise without documented threat and vulnerability analysis.',
    'Security safeguards implemented generically without addressable specification documentation.',
    'BAAs executed from templates without reviewing actual BA security postures.',
    'Breach notification procedure defined without testing the four-factor risk assessment process.',
    'Workforce training limited to annual videos without role-specific HIPAA responsibilities.',
    'OCR audit readiness never assessed — documentation gaps discovered only during investigation.',
];
const ca = [
    'Comprehensive SRA with documented threats, vulnerabilities, likelihood, impact, and risk scores.',
    'All Security Rule safeguards implemented with documented decisions for addressable specs.',
    'BAAs reviewed for required elements and BA security posture assessed before execution.',
    'Breach notification programme tested with tabletop exercises and four-factor assessment practice.',
    'Role-specific HIPAA training for clinical staff, IT, privacy officers, and business teams.',
    'OCR audit documentation portfolio built proactively — ready for any investigation.',
];

const deliverables = [
    { icon: <Search size={36} />, title: 'Risk Analysis & Assessment', items: ['HIPAA Security Risk Analysis (SRA) Report', 'ePHI Discovery & Environment Mapping', 'Risk Management Plan & Remediation Tracker', 'HIPAA Gap Assessment Report'] },
    { icon: <Lock size={36} />, title: 'Security Safeguards', items: ['Administrative Safeguards Implementation', 'Physical Safeguards Review & Controls', 'Technical Safeguards Configuration Evidence', 'Encryption & Access Control Documentation'] },
    { icon: <FileText size={36} />, title: 'Privacy & Policies', items: ['Notice of Privacy Practices (NPP)', 'HIPAA Policy & Procedure Suite', 'Minimum Necessary & Patient Rights Procedures', 'Sanctions Policy & Workforce Code of Conduct'] },
    { icon: <Award size={36} />, title: 'Compliance Programme', items: ['Business Associate Agreement Programme', 'Breach Notification Playbook & Templates', 'Annual Workforce HIPAA Training Programme', 'OCR Audit Documentation Portfolio'] },
];

const HIPAACompliance = () => {
    const navigate = useNavigate();
    return (
        <div className="hpa-page">
            <section className="hpa-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="hpa-hero-bg" />
                <div className="hpa-container">
                    <p className="hpa-eyebrow">Data Privacy — Global Privacy Laws</p>
                    <h1 className="hpa-hero-title">HIPAA <span className="hpa-grad">COMPLIANCE PROGRAMME</span></h1>
                    <p className="hpa-hero-desc">Ensure total protection for sensitive health data. We provide end-to-end support for covered entities and business associates to navigate complex HIPAA mandates and avoid costly OCR settlements. By conducting thorough Security Risk Analyses and implementing robust Privacy Rule safeguards, we help you manage Business Associate agreements and breach notification protocols with precision. Our expert-led approach delivers an audit-ready documentation portfolio, ensuring your organization maintains regulatory adherence while building patient and partner trust.</p>
                    <div className="hpa-actions">
                        <button className="hpa-btn hpa-btn-p" onClick={() => navigate('/contact')}>Schedule a HIPAA Assessment</button>
                        <button className="hpa-btn hpa-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="hpa-sec hpa-bg-w"><div className="hpa-container"><ScrollReveal direction="up"><div className="hpa-hdr"><h2 className="hpa-title">HIPAA Compliance Challenges</h2><p className="hpa-desc">Covered entities and business associates face significant challenges across the Security, Privacy, and Breach Notification Rules</p></div></ScrollReveal><div className="hpa-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="hpa-ch-card"><div className="hpa-ic">{c.icon}</div><h3 className="hpa-ct">{c.title}</h3><p className="hpa-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="hpa-sec hpa-bg-p"><div className="hpa-container"><ScrollReveal direction="up"><div className="hpa-hdr"><h2 className="hpa-title">Our HIPAA Compliance Framework</h2><p className="hpa-desc">Comprehensive HIPAA compliance covering the Security, Privacy, and Breach Notification Rules with OCR audit-ready documentation</p></div></ScrollReveal><div className="hpa-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="hpa-cmp-card"><div className="hpa-ic">{c.icon}</div><h3 className="hpa-ct">{c.title}</h3><p className="hpa-cd">{c.desc}</p><div className="hpa-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="hpa-sec hpa-bg-w"><div className="hpa-container"><ScrollReveal direction="up"><div className="hpa-hdr"><h2 className="hpa-title">Our HIPAA Methodology</h2><p className="hpa-desc">A 10-step HIPAA compliance methodology from risk analysis through OCR audit documentation and annual programme maintenance</p></div></ScrollReveal><div className="hpa-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="hpa-ap-card"><div className="hpa-sn">{String(i + 1).padStart(2, '0')}</div><div className="hpa-ic">{a.icon}</div><h3 className="hpa-ct">{a.title}</h3><p className="hpa-cd">{a.desc}</p><div className="hpa-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="hpa-sec hpa-bg-p"><div className="hpa-container"><ScrollReveal direction="up"><div className="hpa-hdr"><h2 className="hpa-title">HIPAA Coverage Checklist</h2><p className="hpa-desc">Complete coverage of all HIPAA Security, Privacy, and Breach Notification Rule obligations</p></div></ScrollReveal><div className="hpa-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="hpa-chk-item"><div className="hpa-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="hpa-sec hpa-bg-w"><div className="hpa-container"><ScrollReveal direction="up"><div className="hpa-hdr"><h2 className="hpa-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="hpa-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="hpa-why-card"><div className="hpa-why-ic">{w.icon}</div><h3 className="hpa-wt">{w.title}</h3><p className="hpa-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="hpa-diff"><div className="hpa-container"><ScrollReveal direction="up"><h2 className="hpa-diff-t">THE <span className="hpa-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="hpa-cmp-g"><ScrollReveal direction="left" delay={100}><div className="hpa-col hpa-col-t"><h3 className="hpa-col-h">Generic HIPAA Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="hpa-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="hpa-col hpa-col-c"><h3 className="hpa-col-h hpa-col-ch">CyberAries HIPAA Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="hpa-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="hpa-sec hpa-bg-w"><div className="hpa-container"><ScrollReveal direction="up"><div className="hpa-hdr"><h2 className="hpa-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="hpa-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="hpa-del-card"><div className="hpa-del-ic">{d.icon}</div><h4 className="hpa-dt">{d.title}</h4><ul className="hpa-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="hpa-cta"><div className="hpa-container"><ScrollReveal direction="up"><div className="hpa-cta-c"><h2 className="hpa-cta-t">Achieve HIPAA Compliance & OCR Readiness</h2><p className="hpa-cta-d">Protect patient health information, satisfy OCR requirements, and build a defensible HIPAA compliance programme with our healthcare privacy specialists.</p><button className="hpa-btn hpa-btn-p hpa-btn-lg" onClick={() => navigate('/contact')}>Request HIPAA Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default HIPAACompliance;
