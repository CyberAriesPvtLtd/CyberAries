import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Settings, BarChart3, Users, Award, RefreshCw, FileCheck,
    Eye, Database, Globe, UserCheck, Bell,
} from 'lucide-react';
import './IRDAIISNPAudit.css';

const challengesData = [
    { title: 'ISNP Technology & Security Standards', description: 'ISNPs must comply with IRDAI\'s strict technology and cybersecurity standards governing platform architecture, data protection, and operational resilience.', icon: <Settings size={40} /> },
    { title: 'Third-Party Aggregator Control', description: 'ISNPs rely on multiple insurance aggregators, brokers, and technology service providers whose security posture directly affects the ISNP\'s regulatory compliance standing.', icon: <Users size={40} /> },
    { title: 'Customer Data Protection', description: 'Policyholders\' sensitive financial and health data flowing through ISNP platforms requires robust encryption, access control, and data minimization controls under IRDAI guidelines.', icon: <Lock size={40} /> },
    { title: 'Incident Reporting & Response', description: 'IRDAI mandates timely cyber incident reporting with defined response timelines. Organizations without mature incident response capabilities face regulatory non-compliance risk.', icon: <AlertTriangle size={40} /> },
    { title: 'Continuity & Recovery Obligations', description: 'ISNPs must maintain defined RTO/RPO targets to ensure policyholders can access insurance services without disruption, requiring robust DR and BCP frameworks.', icon: <RefreshCw size={40} /> },
    { title: 'Periodic Audit & Reporting', description: 'Maintaining the continuous evidence and audit trails required for IRDAI periodic security audits and on-site inspections is operationally demanding without structured processes.', icon: <BarChart3 size={40} /> },
];

const frameworkComponents = [
    { title: 'ISNP Security Architecture Review', description: 'Comprehensive assessment of ISNP platform architecture against IRDAI technical security standards, including API security, encryption, and network design.', icon: <Shield size={40} /> },
    { title: 'Data Protection & Classification', description: 'Classification of all policyholder and operational data by sensitivity, with controls assessment against IRDAI data protection and privacy requirements.', icon: <Database size={40} /> },
    { title: 'Access Control & Identity Management', description: 'Evaluation and implementation of IAM, MFA, privileged access management, and role-based access controls across ISNP platform components.', icon: <UserCheck size={40} /> },
    { title: 'Third-Party & Aggregator Risk', description: 'Systematic risk assessment of all insurance aggregators, brokers, and technology vendors connected to the ISNP, with security attestation requirements.', icon: <Globe size={40} /> },
    { title: 'Incident Response Framework', description: 'Design and testing of incident response procedures, cyber incident reporting workflows, and crisis communication protocols aligned with IRDAI timelines.', icon: <Bell size={40} /> },
    { title: 'Business Continuity & DR', description: 'Assessment and implementation of BCP/DR frameworks meeting IRDAI-mandated RTO/RPO requirements with documented testing and annual review cycles.', icon: <RefreshCw size={40} /> },
];

const approachSteps = [
    { title: 'Regulatory Requirement Mapping', description: 'Detailed mapping of all IRDAI ISNP cybersecurity circulars, guidelines, and inspection checklists to your platform\'s architecture and operations.', icon: <FileText size={40} /> },
    { title: 'ISNP Platform Architecture Assessment', description: 'In-depth technical review of the ISNP platform — API layers, web applications, databases, integration points — against IRDAI security standards.', icon: <Search size={40} /> },
    { title: 'Data Flow & Classification Mapping', description: 'Discovery and mapping of all policyholder data flows within and external to the ISNP, identifying data protection gaps and compliance risks.', icon: <Database size={40} /> },
    { title: 'Access Control & IAM Review', description: 'Assessment of identity and access management controls, privileged access policies, and authentication mechanisms across all ISNP components.', icon: <UserCheck size={40} /> },
    { title: 'Third-Party Risk Assessment', description: 'Security evaluation of all aggregators, brokers, and technology vendors with security questionnaires, contract reviews, and attestation management.', icon: <Globe size={40} /> },
    { title: 'Vulnerability Assessment & VAPT', description: 'Comprehensive VAPT of ISNP web applications, APIs, mobile apps, and infrastructure components to identify and remediate exploitable vulnerabilities.', icon: <Eye size={40} /> },
    { title: 'Incident Response Plan Development', description: 'Design, document, and test an IRDAI-compliant incident response plan including defined roles, escalation paths, and regulatory notification timelines.', icon: <Bell size={40} /> },
    { title: 'BCP & DR Framework Implementation', description: 'Develop and test BCP/DR procedures with defined RTO/RPO targets, failover testing, and annual review cycles meeting IRDAI continuity requirements.', icon: <RefreshCw size={40} /> },
    { title: 'Policy & Governance Documentation', description: 'Develop IRDAI-aligned cybersecurity policies, vendor security standards, and governance frameworks with board-level oversight structures.', icon: <FileCheck size={40} /> },
    { title: 'Compliance Evidence & Inspection Readiness', description: 'Compile structured evidence repository, compliance dashboards, and inspection-ready documentation for IRDAI security audits and on-site inspections.', icon: <BarChart3 size={40} /> },
];

const whyChooseItems = [
    { title: 'IRDAI Regulatory Expertise', description: 'Deep knowledge of IRDAI ISNP cybersecurity circulars, inspection frameworks, and compliance expectations across insurance platform categories.', icon: <Award size={48} strokeWidth={1.5} /> },
    { title: 'Partnered with CERT-In Empanelled', description: 'Government-recognized cybersecurity firm with proven audit credentials across Indian financial sector, insurance, and government organizations.', icon: <Shield size={48} strokeWidth={1.5} /> },
    { title: 'End-to-End Implementation', description: 'From platform architecture assessment through policy development, VAPT, incident response planning, and inspection-ready evidence compilation.', icon: <CheckCircle size={48} strokeWidth={1.5} /> },
];

const complianceChecklist = [
    'IRDAI Information and Cyber Security Guidelines compliance assessment',
    'ISNP platform architecture review against IRDAI technical standards',
    'Policyholder data protection and encryption controls evaluation',
    'Identity and access management and MFA implementation review',
    'API security and integration point vulnerability assessment',
    'Third-party aggregator and broker security assessment',
    'Vendor security attestation and contract review',
    'Incident response plan development and tabletop testing',
    'Cyber incident reporting procedure and IRDAI notification workflow',
    'Business continuity and disaster recovery framework with RTO/RPO validation',
    'VAPT of web application, mobile app, and infrastructure components',
    'Compliance evidence repository and annual audit readiness',
];

const difference = {
    traditional: [
        'Generic IT audit frameworks not calibrated to IRDAI ISNP-specific requirements.',
        'Compliance reviews limited to documentation without technical platform assessment.',
        'Third-party risk ignored or treated as entirely a contractual/legal matter.',
        'Incident response plans developed on paper but never tested or validated.',
        'BCP/DR frameworks documented but never tested against IRDAI RTO/RPO requirements.',
        'No structured evidence repository, leaving organizations unprepared for inspections.',
    ],
    cyberaries: [
        'IRDAI ISNP-specific assessment framework calibrated to the exact inspection checklist.',
        'Combined documentation and deep technical platform and API security assessment.',
        'Third-party risk assessed both contractually and through technical security questionnaires.',
        'Incident response plans tested through tabletop exercises and simulation scenarios.',
        'BCP/DR frameworks tested with documented results and remediation evidence.',
        'Structured compliance evidence repository delivered as part of every engagement.',
    ],
};

const deliverables = [
    { icon: <Search size={36} />, title: 'Assessment Reports', items: ['ISNP Platform Architecture Security Assessment', 'VAPT Report (Web, API, Mobile, Infrastructure)', 'Data Protection & Classification Assessment', 'Third-Party Risk Assessment Report'] },
    { icon: <Settings size={36} />, title: 'Technical Remediation', items: ['IAM & MFA Implementation Support', 'API Security Controls Implementation', 'Encryption & Data Protection Controls', 'Network Security Architecture Recommendations'] },
    { icon: <FileText size={36} />, title: 'Governance & Policy', items: ['IRDAI-Aligned Cybersecurity Policy Suite', 'Incident Response Plan & Playbooks', 'BCP/DR Framework Documentation', 'Vendor Security Standards & Attestation Templates'] },
    { icon: <BarChart3 size={36} />, title: 'Compliance Documentation', items: ['Gap Analysis Against IRDAI ISNP Requirements', 'Compliance Status Dashboard', 'Inspection-Ready Evidence Repository', 'Annual Compliance Review Plan'] },
];

const IRDAIISNPAudit = () => {
    const navigate = useNavigate();
    return (
        <div className="ini-page">
            <section className="ini-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="ini-hero-bg" />
                <div className="ini-container">
                    <p className="ini-hero-eyebrow">Government &amp; Digital Compliance</p>
                    <h1 className="ini-hero-title">IRDAI – ISNP <span className="ini-gradient">SECURITY AUDIT</span></h1>
                    <p className="ini-hero-desc">The <strong>Insurance Regulatory and Development Authority of India (IRDAI)</strong> mandates rigorous cybersecurity standards for <strong>Insurance Self-Network Platforms (ISNPs)</strong> — covering platform architecture, data protection, incident response, and business continuity. Non-compliance exposes insurers and intermediaries to regulatory action, license risk, and reputational harm.</p>
                    <p className="ini-hero-desc">Our <strong>IRDAI ISNP Security Audit</strong> provides comprehensive coverage — from regulatory mandate mapping through VAPT, third-party risk assessment, incident response framework development, and full inspection-ready evidence compilation.</p>
                    <div className="ini-hero-actions">
                        <button className="ini-btn ini-btn-primary" onClick={() => navigate('/contact')}>Schedule an IRDAI Compliance Assessment</button>
                        <button className="ini-btn ini-btn-secondary">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="ini-section ini-bg-white">
                <div className="ini-container">
                    <ScrollReveal direction="up" delay={0}><div className="ini-section-header"><h2 className="ini-section-title">IRDAI ISNP Compliance Challenges</h2><p className="ini-section-desc">Insurance self-network platforms face complex, multi-dimensional cybersecurity compliance requirements under IRDAI's evolving regulatory framework</p></div></ScrollReveal>
                    <div className="ini-grid-2">{challengesData.map((item, i) => (<ScrollReveal key={i} direction="up" delay={i * 90}><div className="ini-challenge-card"><div className="ini-icon-circle">{item.icon}</div><h3 className="ini-card-title">{item.title}</h3><p className="ini-card-desc">{item.description}</p></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="ini-section ini-bg-panel">
                <div className="ini-container">
                    <ScrollReveal direction="up" delay={0}><div className="ini-section-header"><h2 className="ini-section-title">Our IRDAI ISNP Audit Framework</h2><p className="ini-section-desc">A comprehensive security assessment framework covering all dimensions of IRDAI ISNP compliance — technical, operational, and governance</p></div></ScrollReveal>
                    <div className="ini-grid-3">{frameworkComponents.map((item, i) => (<ScrollReveal key={i} direction="up" delay={i * 90}><div className="ini-component-card"><div className="ini-icon-circle">{item.icon}</div><h3 className="ini-card-title">{item.title}</h3><p className="ini-card-desc">{item.description}</p><div className="ini-card-bar" /></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="ini-section ini-bg-white">
                <div className="ini-container">
                    <ScrollReveal direction="up" delay={0}><div className="ini-section-header"><h2 className="ini-section-title">Our Audit Methodology</h2><p className="ini-section-desc">A structured 10-step methodology covering every dimension of IRDAI ISNP cybersecurity compliance</p></div></ScrollReveal>
                    <div className="ini-grid-3">{approachSteps.map((step, i) => (<ScrollReveal key={i} direction="up" delay={i * 80}><div className="ini-approach-card"><div className="ini-step-num">{String(i + 1).padStart(2, '0')}</div><div className="ini-icon-circle">{step.icon}</div><h3 className="ini-card-title">{step.title}</h3><p className="ini-card-desc">{step.description}</p><div className="ini-card-bar" /></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="ini-section ini-bg-panel">
                <div className="ini-container">
                    <ScrollReveal direction="up" delay={0}><div className="ini-section-header"><h2 className="ini-section-title">IRDAI Compliance Coverage Checklist</h2><p className="ini-section-desc">Comprehensive coverage of IRDAI ISNP cybersecurity requirements across all audit domains</p></div></ScrollReveal>
                    <div className="ini-checklist-grid">{complianceChecklist.map((item, i) => (<ScrollReveal key={i} direction="up" delay={i * 50}><div className="ini-checklist-item"><div className="ini-check-icon"><CheckCircle size={22} /></div><span className="ini-check-text">{item}</span></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="ini-section ini-bg-white">
                <div className="ini-container">
                    <ScrollReveal direction="up" delay={0}><div className="ini-section-header"><h2 className="ini-section-title">Why Choose CyberAries?</h2></div></ScrollReveal>
                    <div className="ini-grid-3">{whyChooseItems.map((item, i) => (<ScrollReveal key={i} direction="up" delay={i * 150}><div className="ini-why-card"><div className="ini-why-icon">{item.icon}</div><h3 className="ini-why-title">{item.title}</h3><p className="ini-why-desc">{item.description}</p></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="ini-difference">
                <div className="ini-container">
                    <ScrollReveal direction="up"><h2 className="ini-diff-title">THE <span className="ini-diff-red">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal>
                    <div className="ini-compare-grid">
                        <ScrollReveal direction="left" delay={100}><div className="ini-compare-col ini-compare-trad"><h3 className="ini-compare-heading">Traditional Compliance Consulting</h3><ul className="ini-compare-list">{difference.traditional.map((item, i) => (<li key={i} className="ini-compare-item"><span className="ini-bullet">•</span>{item}</li>))}</ul></div></ScrollReveal>
                        <ScrollReveal direction="right" delay={200}><div className="ini-compare-col ini-compare-ca"><h3 className="ini-compare-heading ini-compare-ca-heading">CyberAries IRDAI ISNP Security Audit</h3><ul className="ini-compare-list">{difference.cyberaries.map((item, i) => (<li key={i} className="ini-compare-item"><span className="ini-bullet">•</span>{item}</li>))}</ul></div></ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="ini-section ini-bg-white">
                <div className="ini-container">
                    <ScrollReveal direction="up" delay={0}><div className="ini-section-header"><h2 className="ini-section-title">Comprehensive Deliverables</h2></div></ScrollReveal>
                    <div className="ini-grid-2">{deliverables.map((d, i) => (<ScrollReveal key={i} direction="up" delay={i * 100}><div className="ini-deliverable-card"><div className="ini-deliverable-icon">{d.icon}</div><h4 className="ini-deliverable-title">{d.title}</h4><ul className="ini-deliverable-list">{d.items.map((item, j) => (<li key={j}>{item}</li>))}</ul></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="ini-cta">
                <div className="ini-container">
                    <ScrollReveal direction="up" delay={0}><div className="ini-cta-content"><h2 className="ini-cta-title">Ensure IRDAI ISNP Security Compliance</h2><p className="ini-cta-desc">Partner with our insurance cybersecurity experts to achieve and maintain full IRDAI ISNP compliance with confidence.</p><button className="ini-btn ini-btn-primary ini-btn-lg" onClick={() => navigate('/contact')}>Request an IRDAI Assessment</button></div></ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default IRDAIISNPAudit;
