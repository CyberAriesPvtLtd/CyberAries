import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Database, Globe, Target } from 'lucide-react';
import './SOC2.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Trust Services Criteria Scoping', desc: 'Selecting the right combination of Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy) for your SOC 2 report and scoping the systems appropriately.' },
    { icon: <Shield size={40} />, title: 'Security Control Breadth', desc: 'The Security TSC covers logical access, threat detection, incident response, change management, risk assessment, and monitoring — requiring mature controls across all these domains.' },
    { icon: <Database size={40} />, title: 'Evidence Management Over 12 Months', desc: 'For a Type II report, evidence of control operation must be captured continuously across the entire 12-month audit period — requiring automated evidence collection workflows.' },
    { icon: <AlertTriangle size={40} />, title: 'Vendor & Subprocessor Risk', desc: 'SOC 2 requires managing risks from all subprocessors and vendors — your SOC 2 report must address third-party risks and complementary subservice organization controls (CSOCs).' },
    { icon: <Eye size={40} />, title: 'Continuous Monitoring Requirements', desc: 'The Security TSC demands continuous threat monitoring, vulnerability management, and anomaly detection — going beyond point-in-time security assessments.' },
    { icon: <RefreshCw size={40} />, title: 'Annual Renewal & Control Evolution', desc: 'Managing control environment evolution, cloud infrastructure changes, and new product features while maintaining continuous SOC 2 compliance across annual renewals.' },
];

const components = [
    { icon: <Target size={40} />, title: 'TSC Scope & System Description', desc: 'Selecting appropriate Trust Services Criteria, defining system boundaries, and developing the SOC 2 service description covering all in-scope components.' },
    { icon: <Shield size={40} />, title: 'CC Series Controls — Security TSC', desc: 'Implementation of all Common Criteria (CC) controls across risk management, communication, logical access, system operations, change management, and risk mitigation.' },
    { icon: <Eye size={40} />, title: 'Continuous Monitoring Programme', desc: 'Automated threat detection, vulnerability scanning, log monitoring, and anomaly detection capabilities meeting SOC 2 continuous monitoring requirements.' },
    { icon: <Globe size={40} />, title: 'Vendor & Subprocessor Management', desc: 'Third-party risk assessment programme and CSOC documentation ensuring all subproces-sor risks are addressed within the SOC 2 report.' },
    { icon: <Database size={40} />, title: 'Evidence Collection & GRC Tooling', desc: 'Implementation of GRC/evidence management tooling to automate evidence collection across all controls throughout the 12-month audit period.' },
    { icon: <Award size={40} />, title: 'CPA Audit Management', desc: 'Readiness assessment, CPA firm selection, Type I/Type II audit coordination, and management response to identified exceptions.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'SOC 2 Readiness Assessment', desc: 'Comprehensive baseline assessment against all selected Trust Services Criteria — identifying control gaps, evidence deficiencies, and scope boundary issues.' },
    { icon: <Target size={40} />, title: 'TSC Selection & System Scoping', desc: 'Define which Trust Services Criteria (Security + optional Availability, Confidentiality, PI, Privacy) apply and establish precise system and infrastructure scope boundaries.' },
    { icon: <FileText size={40} />, title: 'System Description Development', desc: 'Develop the SOC 2 system description narrative covering infrastructure, software, data flows, people, procedures, and controls across all in-scope components.' },
    { icon: <Settings size={40} />, title: 'Control Gap Remediation', desc: 'Implement and harden controls identified as gaps — logical access, change management, incident response, monitoring, encryption, backup, and vendor management.' },
    { icon: <Eye size={40} />, title: 'Continuous Monitoring Implementation', desc: 'Deploy threat detection, SIEM correlation, vulnerability scanning, and log monitoring capabilities meeting SOC 2 continuous monitoring expectations.' },
    { icon: <Database size={40} />, title: 'Evidence Automation & GRC Setup', desc: 'Configure GRC platform or evidence management tooling to automate control evidence collection, reducing manual burden during the 12-month audit period.' },
    { icon: <Globe size={40} />, title: 'Subprocessor Management', desc: 'Assess all subprocessors and document complementary subservice organization controls (CSOCs) and user entity controls (UECs).' },
    { icon: <Users size={40} />, title: 'Policy & Procedure Documentation', desc: 'Develop or update all SOC 2-required policies — Information Security, Incident Response, Change Management, Access Control, Vendor Risk, and Backup.' },
    { icon: <FileCheck size={40} />, title: 'Pre-Audit Readiness Testing', desc: 'Simulate CPA auditor testing across all selected TSC domains, identifying and remediating remaining weaknesses before the formal examination.' },
    { icon: <Award size={40} />, title: 'CPA Audit Support & Report Management', desc: 'CPA firm selection and management, Type I/Type II audit coordination, auditor request fulfilment, and management response support.' },
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
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'SOC 2 Examination Veterans', desc: 'Our team has guided SaaS, cloud, and technology companies through SOC 2 Type I and Type II examinations across multiple CPA firms and audit methodologies.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Technical Security Depth', desc: 'We implement the technical controls underpinning SOC 2 — SIEM, vulnerability management, MFA, encryption, and access controls — not just the documentation.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'GRC Automation Expertise', desc: 'We configure GRC platforms (Vanta, Drata, Secureframe, or custom) to automate evidence collection and reduce the annual audit overhead for your team.' },
];

const trad = [
    'SOC 2 scope defined too broadly, creating unnecessary control complexity.',
    'Control documentation developed without underlying technical implementation.',
    'Evidence collection left to manual processes, creating gaps in Type II coverage.',
    'Subprocessors and CSOCs not adequately addressed in the system description.',
    'No continuous monitoring beyond point-in-time vulnerability scans.',
    'Annual renewal surprises from controls that drifted post-Type I certification.',
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
    { icon: <FileText size={36} />, title: 'Core SOC 2 Documentation', items: ['System Description & TSC Mapping', 'SOC 2 Policy Suite (10+ policies)', 'Control Test Plans & Evidence Templates', 'CSOC & UEC Documentation'] },
    { icon: <Settings size={36} />, title: 'Technical Controls', items: ['IAM, MFA & Privileged Access Implementation', 'SIEM & Continuous Monitoring Setup', 'Encryption & Data Protection Controls', 'Change Management & SDLC Controls'] },
    { icon: <Eye size={36} />, title: 'Audit Evidence Management', items: ['GRC Platform Configuration', 'Automated Evidence Collection Workflows', 'Pre-Audit Readiness Testing Report', 'Policy Acknowledgment & Training Records'] },
    { icon: <Award size={36} />, title: 'Examination Support', items: ['CPA Firm Selection & Engagement Management', 'Type I & Type II Audit Coordination', 'Auditor Request Fulfilment Support', 'Annual Renewal Management Plan'] },
];

const SOC2 = () => {
    const navigate = useNavigate();
    return (
        <div className="soc2-page">
            <section className="soc2-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="soc2-hero-bg" />
                <div className="soc2-container">
                    <p className="soc2-eyebrow">Compliance — Global Attestations</p>
                    <h1 className="soc2-hero-title">SOC 2 <span className="soc2-grad">TYPE I & TYPE II REPORT</span></h1>
                    <p className="soc2-hero-desc">A <strong>SOC 2 report</strong> provides independent assurance that your organization's security, availability, processing integrity, confidentiality, and privacy controls are designed and operating effectively. It is the gold standard trust attestation for SaaS companies, cloud providers, and technology service organizations.</p>
                    <p className="soc2-hero-desc">Our SOC 2 practice delivers <strong>end-to-end examination readiness</strong> — from TSC scoping and control implementation through continuous monitoring, evidence automation, pre-audit testing, and CPA firm management for both Type I and Type II reports.</p>
                    <div className="soc2-actions">
                        <button className="soc2-btn soc2-btn-p" onClick={() => navigate('/contact')}>Schedule a SOC 2 Readiness Assessment</button>
                        <button className="soc2-btn soc2-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="soc2-sec soc2-bg-w"><div className="soc2-container"><ScrollReveal direction="up"><div className="soc2-hdr"><h2 className="soc2-title">SOC 2 Examination Challenges</h2><p className="soc2-desc">Technology and SaaS companies face significant challenges achieving a clean SOC 2 Type II opinion across all selected Trust Services Criteria</p></div></ScrollReveal><div className="soc2-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="soc2-ch-card"><div className="soc2-ic">{c.icon}</div><h3 className="soc2-ct">{c.title}</h3><p className="soc2-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="soc2-sec soc2-bg-p"><div className="soc2-container"><ScrollReveal direction="up"><div className="soc2-hdr"><h2 className="soc2-title">Our SOC 2 Examination Framework</h2><p className="soc2-desc">A comprehensive SOC 2 examination preparation framework covering all Trust Services Criteria and Common Criteria domains</p></div></ScrollReveal><div className="soc2-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="soc2-cmp-card"><div className="soc2-ic">{c.icon}</div><h3 className="soc2-ct">{c.title}</h3><p className="soc2-cd">{c.desc}</p><div className="soc2-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="soc2-sec soc2-bg-w"><div className="soc2-container"><ScrollReveal direction="up"><div className="soc2-hdr"><h2 className="soc2-title">Our Examination Methodology</h2><p className="soc2-desc">A proven 10-step methodology from readiness assessment through SOC 2 Type I and Type II report issuance</p></div></ScrollReveal><div className="soc2-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="soc2-ap-card"><div className="soc2-sn">{String(i + 1).padStart(2, '0')}</div><div className="soc2-ic">{a.icon}</div><h3 className="soc2-ct">{a.title}</h3><p className="soc2-cd">{a.desc}</p><div className="soc2-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="soc2-sec soc2-bg-p"><div className="soc2-container"><ScrollReveal direction="up"><div className="soc2-hdr"><h2 className="soc2-title">SOC 2 Coverage Checklist</h2><p className="soc2-desc">Complete coverage of SOC 2 examination requirements across all Trust Services Criteria domains</p></div></ScrollReveal><div className="soc2-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="soc2-chk-item"><div className="soc2-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="soc2-sec soc2-bg-w"><div className="soc2-container"><ScrollReveal direction="up"><div className="soc2-hdr"><h2 className="soc2-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="soc2-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="soc2-why-card"><div className="soc2-why-ic">{w.icon}</div><h3 className="soc2-wt">{w.title}</h3><p className="soc2-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="soc2-diff"><div className="soc2-container"><ScrollReveal direction="up"><h2 className="soc2-diff-t">THE <span className="soc2-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="soc2-cmp-g"><ScrollReveal direction="left" delay={100}><div className="soc2-col soc2-col-t"><h3 className="soc2-col-h">Generic SOC 2 Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="soc2-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="soc2-col soc2-col-c"><h3 className="soc2-col-h soc2-col-ch">CyberAries SOC 2 Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="soc2-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="soc2-sec soc2-bg-w"><div className="soc2-container"><ScrollReveal direction="up"><div className="soc2-hdr"><h2 className="soc2-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="soc2-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="soc2-del-card"><div className="soc2-del-ic">{d.icon}</div><h4 className="soc2-dt">{d.title}</h4><ul className="soc2-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="soc2-cta"><div className="soc2-container"><ScrollReveal direction="up"><div className="soc2-cta-c"><h2 className="soc2-cta-t">Achieve Your SOC 2 Type I & Type II Report</h2><p className="soc2-cta-d">Build a clean SOC 2 attestation — demonstrating industry-leading trust to your customers, enterprise prospects, and partners.</p><button className="soc2-btn soc2-btn-p soc2-btn-lg" onClick={() => navigate('/contact')}>Request SOC 2 Readiness Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default SOC2;
