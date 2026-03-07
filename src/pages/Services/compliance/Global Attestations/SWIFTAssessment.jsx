import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, FileCheck, Eye, Database, Globe, Target } from 'lucide-react';
import './SWIFTAssessment.css';

const challenges = [
    { icon: <Target size={40} />, title: 'User Category Determination', desc: 'Correctly determining your SWIFT user category (A1, A2, A3, B, C) based on your messaging infrastructure and connectivity model is foundational for applying the correct mandatory controls.' },
    { icon: <Shield size={40} />, title: 'Mandatory Control Breadth', desc: 'SWIFT CSP mandates 22 mandatory controls across 3 objectives — securing the environment, knowing and limiting access, and detecting and responding. Each requires technical evidence of implementation.' },
    { icon: <Lock size={40} />, title: 'Local SWIFT Infrastructure Hardening', desc: 'Hardening SWIFT local infrastructure — Alliance Access, Alliance Entry, Alliance Gateway, Alliance Lite2 — against SWIFT\'s specific security configuration requirements.' },
    { icon: <Eye size={40} />, title: 'Anomalous Transaction Detection', desc: 'Implementing or integrating with effective payment anomaly detection systems meeting SWIFT\'s mandatory requirements for detecting unusual transaction patterns in real-time.' },
    { icon: <Database size={40} />, title: 'Annual Attestation Evidence', desc: 'Annually compiling and submitting accurate CSCF attestation evidence through the KYC Security Attestation (KYC-SA) application with documentation meeting SWIFT\'s evidentiary standards.' },
    { icon: <AlertTriangle size={40} />, title: 'CSCF Version Updates', desc: 'SWIFT updates the Customer Security Controls Framework (CSCF) annually. Tracking changes, assessing impact on your control environment, and meeting new mandatory requirements each year.' },
];

const components = [
    { icon: <Target size={40} />, title: 'User Category & Scope Assessment', desc: 'Determining your SWIFT user category, identifying all applicable mandatory and advisory controls, and defining the scope of the SWIFT infrastructure assessment.' },
    { icon: <Shield size={40} />, title: 'Mandatory Control Assessment', desc: 'Assessment of all 22 mandatory CSCF controls across the three security objectives — securing environment, knowing/limiting access, and detecting/responding.' },
    { icon: <Lock size={40} />, title: 'SWIFT Infrastructure Hardening', desc: 'Technical hardening of SWIFT local components — messaging interfaces, communication infrastructure, operator workstations — against SWIFT security configuration requirements.' },
    { icon: <Eye size={40} />, title: 'Transaction Anomaly Detection', desc: 'Assessment and implementation of payment anomaly detection capabilities meeting SWIFT\'s mandatory real-time monitoring requirements.' },
    { icon: <FileText size={40} />, title: 'Advisory Control Implementation', desc: 'Assessment and implementation of SWIFT advisory controls to improve overall security posture beyond mandatory requirements.' },
    { icon: <Award size={40} />, title: 'Annual Attestation Support', desc: 'Annual KYC-SA application completion, evidence compilation, and third-party assessment coordination for independent attestation requirement fulfillment.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'SWIFT Environment Discovery', desc: 'Comprehensive discovery of all SWIFT infrastructure components — messaging systems, communication interfaces, operator workstations, and back-office connections.' },
    { icon: <Target size={40} />, title: 'User Category Classification', desc: 'Determine SWIFT user category (A1, A2, A3, B, or C) based on messaging architecture and connectivity model, establishing the applicable control set.' },
    { icon: <BarChart3 size={40} />, title: 'CSCF Gap Assessment', desc: 'Systematic gap assessment against all mandatory CSCF controls applicable to your user category, with risk-scored findings and remediation prioritization.' },
    { icon: <Lock size={40} />, title: 'SWIFT Infrastructure Hardening', desc: 'Technical hardening of all SWIFT components — Alliance systems, communication infrastructure, operator endpoints — against SWIFT security baselines.' },
    { icon: <Shield size={40} />, title: 'Mandatory Control Remediation', desc: 'Systematic remediation across all 22 mandatory controls — network protection, privilege access, integrity of third-party software, anomaly detection, and more.' },
    { icon: <Eye size={40} />, title: 'Transaction Anomaly Detection Implementation', desc: 'Implement or integrate payment anomaly detection solution meeting SWIFT CSF mandatory requirements with real-time alerting and review procedures.' },
    { icon: <Users size={40} />, title: 'Privileged Access Hardening', desc: 'Restrict privileged access to SWIFT infrastructure, implement just-in-time access, MFA, and session recording meeting SWIFT access control requirements.' },
    { icon: <Database size={40} />, title: 'Back-Office Connectivity Security', desc: 'Assess and harden all back-office connections to SWIFT infrastructure — internal APIs, payment systems, treasury platforms — reducing lateral attack surface.' },
    { icon: <FileCheck size={40} />, title: 'Evidence Compilation & Documentation', desc: 'Compile comprehensive evidence portfolio for each mandatory control, structured for KYC-SA attestation submission and third-party assessor review.' },
    { icon: <Award size={40} />, title: 'KYC-SA Attestation Submission', desc: 'Support KYC Security Attestation application completion, arrange independent assessor engagement if required, and manage annual renewal cycle.' },
];

const checklist = [
    'SWIFT user category determination (A1, A2, A3, B, C)',
    'All applicable SWIFT CSCF mandatory controls gap assessment',
    'SWIFT local infrastructure security configuration assessment',
    'Operator workstation hardening and endpoint security controls',
    'Network protection — SWIFT zone isolation and firewall controls',
    'Privileged access restriction and MFA for SWIFT administrators',
    'Third-party software integrity and security assessment',
    'Payment transaction anomaly detection implementation and testing',
    'Cybersecurity awareness and training for SWIFT operators and administrators',
    'Vulnerability scanning and penetration testing of SWIFT environment',
    'Incident response and recovery plan for SWIFT-related security incidents',
    'Annual KYC-SA attestation evidence compilation and submission support',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'SWIFT CSCF Specialists', desc: 'Our team has direct experience with SWIFT CSCF assessments across banking, financial services, and fintech organizations using all user categories of SWIFT connectivity.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Technical SWIFT Expertise', desc: 'We assess and harden SWIFT infrastructure at the technical level — Alliance systems, network zones, operator workstations — not just documentation review.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Annual Attestation Management', desc: 'From initial assessment through annual KYC-SA attestation renewals, we provide continuous SWIFT CSP compliance management and CSCF version tracking.' },
];

const trad = [
    'SWIFT user category incorrectly determined, applying wrong mandatory control set.',
    'Gap assessment conducted as documentation review without technical infrastructure testing.',
    'SWIFT components hardened against generic security standards, not SWIFT baselines.',
    'Transaction anomaly detection implemented as a paper requirement only.',
    'KYC-SA attestation completed inaccurately due to inadequate evidence collection.',
    'No annual review process, allowing CSCF control drift between attestation cycles.',
];
const ca = [
    'Accurate user category determination based on messaging architecture analysis.',
    'Technical assessment of SWIFT infrastructure components against CSCF standards.',
    'SWIFT components hardened specifically against SWIFT security configuration baselines.',
    'Transaction anomaly detection technically implemented with testing and alert evidence.',
    'KYC-SA attestation supported by comprehensive, structured evidence repository.',
    'Annual CSCF update tracking with impact assessment and remediation support.',
];

const deliverables = [
    { icon: <Search size={36} />, title: 'Assessment Reports', items: ['SWIFT Environment Discovery Report', 'CSCF Mandatory Controls Gap Assessment', 'SWIFT Infrastructure Security Report', 'Transaction Anomaly Detection Review'] },
    { icon: <Settings size={36} />, title: 'Technical Remediation', items: ['SWIFT Infrastructure Hardening Evidence', 'Network Zone & Firewall Configuration', 'Privileged Access & MFA Implementation', 'Endpoint Security Controls for Operators'] },
    { icon: <FileText size={36} />, title: 'Documentation & Policies', items: ['SWIFT Security Policy & Procedures', 'Incident Response Plan for SWIFT Environment', 'Third-Party Software Registry & Review', 'Back-Office Connectivity Security Assessment'] },
    { icon: <Award size={36} />, title: 'Attestation Support', items: ['KYC-SA Evidence Portfolio', 'Annual Attestation Submission Support', 'Third-Party Assessor Coordination', 'Annual CSCF Update Impact Assessment'] },
];

const SWIFTAssessment = () => {
    const navigate = useNavigate();
    return (
        <div className="swf-page">
            <section className="swf-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="swf-hero-bg" />
                <div className="swf-container">
                    <p className="swf-eyebrow">Compliance — Global Attestations</p>
                    <h1 className="swf-hero-title">SWIFT CSP <span className="swf-grad">SECURITY ASSESSMENT</span></h1>
                    <p className="swf-hero-desc">The <strong>SWIFT Customer Security Programme (CSP)</strong> and Customer Security Controls Framework (CSCF) mandate that all SWIFT users implement a defined set of security controls to protect their local SWIFT infrastructure and contribute to the security of the global financial messaging network.</p>
                    <p className="swf-hero-desc">Our <strong>SWIFT CSP Assessment</strong> covers all mandatory and advisory CSCF controls — from SWIFT infrastructure hardening and privileged access controls through transaction anomaly detection, evidence compilation, and annual KYC-SA attestation support.</p>
                    <div className="swf-actions">
                        <button className="swf-btn swf-btn-p" onClick={() => navigate('/contact')}>Schedule a SWIFT CSP Assessment</button>
                        <button className="swf-btn swf-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="swf-sec swf-bg-w"><div className="swf-container"><ScrollReveal direction="up"><div className="swf-hdr"><h2 className="swf-title">SWIFT CSP Compliance Challenges</h2><p className="swf-desc">SWIFT member institutions face significant challenges achieving and maintaining CSCF compliance across mandatory security control domains</p></div></ScrollReveal><div className="swf-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="swf-ch-card"><div className="swf-ic">{c.icon}</div><h3 className="swf-ct">{c.title}</h3><p className="swf-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="swf-sec swf-bg-p"><div className="swf-container"><ScrollReveal direction="up"><div className="swf-hdr"><h2 className="swf-title">Our SWIFT CSP Assessment Framework</h2><p className="swf-desc">Comprehensive SWIFT CSCF assessment covering all mandatory and advisory controls across all three security objectives</p></div></ScrollReveal><div className="swf-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="swf-cmp-card"><div className="swf-ic">{c.icon}</div><h3 className="swf-ct">{c.title}</h3><p className="swf-cd">{c.desc}</p><div className="swf-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="swf-sec swf-bg-w"><div className="swf-container"><ScrollReveal direction="up"><div className="swf-hdr"><h2 className="swf-title">Our Assessment Methodology</h2><p className="swf-desc">A 10-step methodology from SWIFT environment discovery through KYC-SA attestation submission</p></div></ScrollReveal><div className="swf-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="swf-ap-card"><div className="swf-sn">{String(i + 1).padStart(2, '0')}</div><div className="swf-ic">{a.icon}</div><h3 className="swf-ct">{a.title}</h3><p className="swf-cd">{a.desc}</p><div className="swf-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="swf-sec swf-bg-p"><div className="swf-container"><ScrollReveal direction="up"><div className="swf-hdr"><h2 className="swf-title">SWIFT CSP Coverage Checklist</h2><p className="swf-desc">Complete coverage of SWIFT CSCF mandatory and key advisory controls</p></div></ScrollReveal><div className="swf-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="swf-chk-item"><div className="swf-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="swf-sec swf-bg-w"><div className="swf-container"><ScrollReveal direction="up"><div className="swf-hdr"><h2 className="swf-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="swf-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="swf-why-card"><div className="swf-why-ic">{w.icon}</div><h3 className="swf-wt">{w.title}</h3><p className="swf-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="swf-diff"><div className="swf-container"><ScrollReveal direction="up"><h2 className="swf-diff-t">THE <span className="swf-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="swf-cmp-g"><ScrollReveal direction="left" delay={100}><div className="swf-col swf-col-t"><h3 className="swf-col-h">Generic Compliance Assessors</h3><ul>{trad.map((t, i) => <li key={i}><span className="swf-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="swf-col swf-col-c"><h3 className="swf-col-h swf-col-ch">CyberAries SWIFT CSP Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="swf-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="swf-sec swf-bg-w"><div className="swf-container"><ScrollReveal direction="up"><div className="swf-hdr"><h2 className="swf-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="swf-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="swf-del-card"><div className="swf-del-ic">{d.icon}</div><h4 className="swf-dt">{d.title}</h4><ul className="swf-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="swf-cta"><div className="swf-container"><ScrollReveal direction="up"><div className="swf-cta-c"><h2 className="swf-cta-t">Achieve SWIFT CSP CSCF Compliance</h2><p className="swf-cta-d">Protect your SWIFT infrastructure and maintain annual attestation compliance with our SWIFT CSP specialists.</p><button className="swf-btn swf-btn-p swf-btn-lg" onClick={() => navigate('/contact')}>Request SWIFT CSP Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default SWIFTAssessment;
