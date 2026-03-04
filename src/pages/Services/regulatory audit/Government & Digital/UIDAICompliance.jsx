import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Settings, BarChart3, Users, Award, RefreshCw, FileCheck,
    Eye, Database, Globe, UserCheck, Fingerprint, Key,
} from 'lucide-react';
import './UIDAICompliance.css';

const challengesData = [
    { title: 'AUA/KUA Certification Requirements', description: 'Authentication User Agencies (AUAs) and KYC User Agencies (KUAs) must meet UIDAI\'s strict technical and organizational security requirements for Aadhaar authentication platform integration.', icon: <Fingerprint size={40} /> },
    { title: 'Aadhaar Data Security & Protection', description: 'All Aadhaar and biometric data handled by AUAs/KUAs must be protected under UIDAI\'s data security standards, with strict controls on storage, access, and transmission.', icon: <Lock size={40} /> },
    { title: 'API Integration Security', description: 'Secure integration with UIDAI\'s authentication APIs requires rigorous security controls, certificate management, and conformance with UIDAI\'s technical specifications.', icon: <Key size={40} /> },
    { title: 'Audit Log & Traceability Obligations', description: 'UIDAI mandates comprehensive audit logging of all authentication transactions and access to Aadhaar data with immutable records for regulatory inspections.', icon: <Eye size={40} /> },
    { title: 'Data Residency & Localization', description: 'All Aadhaar-related data must be stored within India\'s geographic boundaries under UIDAI regulations and the Aadhaar Act, with no cross-border data transfer permitted.', icon: <Globe size={40} /> },
    { title: 'Periodic Compliance & Recertification', description: 'AUAs/KUAs must undergo periodic security audits and recertification cycles, requiring ongoing compliance management rather than one-time assessment.', icon: <RefreshCw size={40} /> },
];

const frameworkComponents = [
    { title: 'AUA/KUA Architecture Assessment', description: 'Comprehensive technical review of AUA/KUA platform architecture against UIDAI\'s security requirements, authentication API integration, and Aadhaar data handling.', icon: <Settings size={40} /> },
    { title: 'Aadhaar Data Protection Controls', description: 'Assessment and implementation of encryption, access control, data minimization, and retention controls protecting all Aadhaar and biometric data handled by the AUA/KUA.', icon: <Lock size={40} /> },
    { title: 'Authentication API Security Review', description: 'Security review of UIDAI authentication API integration, certificate management, request signing, and response handling for conformance and security gap coverage.', icon: <Key size={40} /> },
    { title: 'Audit Logging & Traceability', description: 'Design and implementation of immutable audit logging for all Aadhaar authentication transactions and sensitive data access events meeting UIDAI traceability requirements.', icon: <Database size={40} /> },
    { title: 'Access Control & Privileged Access', description: 'Implementation of role-based access controls, privileged access management, and MFA for all personnel and systems handling Aadhaar authentication data.', icon: <UserCheck size={40} /> },
    { title: 'Certification & Recertification Support', description: 'End-to-end support for UIDAI AUA/KUA certification and periodic recertification cycles, including evidence compilation and compliance reporting.', icon: <FileCheck size={40} /> },
];

const approachSteps = [
    { title: 'Regulatory & Certification Requirement Analysis', description: 'Deep review of UIDAI\'s AUA/KUA certification requirements, technical specifications, and security standards applicable to your organization\'s authentication use case.', icon: <FileText size={40} /> },
    { title: 'Platform Architecture Review', description: 'Assessment of existing or planned AUA/KUA platform architecture — authentication servers, API gateway, databases — against UIDAI technical security standards.', icon: <Search size={40} /> },
    { title: 'Aadhaar Data Flow Mapping', description: 'Complete mapping of how Aadhaar and biometric data flows through the organization\'s systems — from collection through authentication, storage, and disposal.', icon: <Database size={40} /> },
    { title: 'Gap Analysis & Risk Assessment', description: 'Structured gap analysis comparing current AUA/KUA security posture against all applicable UIDAI requirements, with risk-scored findings and prioritized remediation roadmap.', icon: <BarChart3 size={40} /> },
    { title: 'Aadhaar Data Security Controls Implementation', description: 'Deploy encryption at rest and in transit, key management, data masking, and access control mechanisms for all Aadhaar-related data handled by the AUA/KUA platform.', icon: <Lock size={40} /> },
    { title: 'API Security & Certificate Management', description: 'Secure UIDAI API integration with proper certificate management, request signing and encryption, and response validation aligned with UIDAI technical specifications.', icon: <Key size={40} /> },
    { title: 'Audit Logging Framework Implementation', description: 'Deploy immutable audit logging for all authentication transactions covering log completeness, integrity, retention, and rapid retrieval for regulatory inspections.', icon: <Eye size={40} /> },
    { title: 'Access Control & IAM Hardening', description: 'Implement and harden RBAC, privileged access management, and MFA policies for all personnel and systems with access to Aadhaar authentication data and systems.', icon: <Shield size={40} /> },
    { title: 'Policy & Procedure Development', description: 'Develop UIDAI-compliant security policies, Aadhaar data handling procedures, incident response workflows, and employee authorization documentation.', icon: <FileCheck size={40} /> },
    { title: 'Certification Evidence & Audit Readiness', description: 'Compile structured certification evidence repository including security assessment reports, control test results, audit logs, and policy documentation for UIDAI submission.', icon: <Award size={40} /> },
];

const whyChooseItems = [
    { title: 'UIDAI Compliance Expertise', description: 'Hands-on experience with UIDAI AUA/KUA certification requirements, technical specifications, and security standards across BFSI, government, and enterprise AUAs.', icon: <Award size={48} strokeWidth={1.5} /> },
    { title: 'CERT-In Empanelled', description: 'Government-recognized cybersecurity firm with proven regulatory audit credentials — a mandatory requirement for UIDAI AUA/KUA security audits.', icon: <Shield size={48} strokeWidth={1.5} /> },
    { title: 'Technical & Regulatory Alignment', description: 'We align technical implementation — API security, encryption, audit logging — precisely with UIDAI\'s regulatory evidence requirements for certification.', icon: <CheckCircle size={48} strokeWidth={1.5} /> },
];

const complianceChecklist = [
    'UIDAI AUA/KUA certification security requirements assessment',
    'Aadhaar authentication platform architecture security review',
    'UIDAI authentication API security and certificate management review',
    'Aadhaar and biometric data encryption at rest and in transit controls',
    'Data minimization and retention policy compliance review',
    'Role-based access control and privileged access management implementation',
    'Multi-factor authentication for personnel accessing Aadhaar systems',
    'Immutable audit logging for all authentication transactions',
    'Data residency compliance — confirmed India-only Aadhaar data storage',
    'Vulnerability assessment and penetration testing of AUA/KUA platform',
    'Incident response plan and breach reporting procedure development',
    'Certification evidence repository and UIDAI submission package preparation',
];

const difference = {
    traditional: [
        'Generic IT security assessments not calibrated to UIDAI\'s AUA/KUA certification requirements.',
        'Compliance focussed on documentation without technical platform and API security assessment.',
        'Audit logging implemented superficially without UIDAI traceability requirement compliance.',
        'Data residency compliance assumed rather than technically verified and documented.',
        'No structured evidence package for UIDAI certification submission.',
        'Certificate management handled informally with no documentation or renewal tracking.',
    ],
    cyberaries: [
        'UIDAI AUA/KUA certification-specific assessment framework calibrated to the exact requirements.',
        'Deep technical assessment of authentication platform, APIs, database, and infrastructure security.',
        'Audit logging implemented to meet UIDAI\'s full traceability, completeness, and retrieval requirements.',
        'Data residency compliance technically verified with documented controls and evidence.',
        'Structured certification evidence package ready for UIDAI submission.',
        'Certificate lifecycle management with documented procedures and renewal alerting.',
    ],
};

const deliverables = [
    { icon: <Search size={36} />, title: 'Assessment Reports', items: ['AUA/KUA Platform Security Assessment Report', 'Authentication API Security Review Report', 'Aadhaar Data Protection Gap Analysis', 'VAPT Report of AUA/KUA Systems'] },
    { icon: <Settings size={36} />, title: 'Technical Controls', items: ['Aadhaar Data Encryption Implementation', 'API Security & Certificate Management', 'Audit Logging Framework Deployment', 'IAM & Access Control Hardening'] },
    { icon: <FileText size={36} />, title: 'Governance & Policy', items: ['UIDAI-Aligned Security Policy Suite', 'Aadhaar Data Handling Procedures', 'Incident Response & Breach Reporting Plan', 'Employee Authorization & Training Documentation'] },
    { icon: <BarChart3 size={36} />, title: 'Compliance & Certification', items: ['Certification Evidence Repository (UIDAI Submission Ready)', 'Gap Analysis Against UIDAI Requirements', 'Compliance Status Dashboard', 'Recertification Planning & Monitoring Framework'] },
];

const UIDAICompliance = () => {
    const navigate = useNavigate();
    return (
        <div className="uak-page">
            <section className="uak-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="uak-hero-bg" />
                <div className="uak-container">
                    <p className="uak-hero-eyebrow">Government &amp; Digital Compliance</p>
                    <h1 className="uak-hero-title">UIDAI – AUA/KUA <span className="uak-gradient">COMPLIANCE</span></h1>
                    <p className="uak-hero-desc">Organizations using <strong>Aadhaar-based authentication</strong> as Authentication User Agencies (AUA) or KYC User Agencies (KUA) must meet <strong>UIDAI's strict security certification requirements</strong> — covering platform architecture, Aadhaar data protection, API security, audit logging, and data residency. Non-compliance risks UIDAI certification suspension and regulatory liability under the Aadhaar Act.</p>
                    <p className="uak-hero-desc">Our <strong>UIDAI AUA/KUA Compliance service</strong> provides end-to-end coverage — from certification requirement analysis through technical implementation, platform security assessment, evidence compilation, and ongoing recertification support.</p>
                    <div className="uak-hero-actions">
                        <button className="uak-btn uak-btn-primary" onClick={() => navigate('/contact')}>Schedule an AUA/KUA Compliance Assessment</button>
                        <button className="uak-btn uak-btn-secondary">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="uak-section uak-bg-white">
                <div className="uak-container">
                    <ScrollReveal direction="up" delay={0}><div className="uak-section-header"><h2 className="uak-section-title">UIDAI AUA/KUA Compliance Challenges</h2><p className="uak-section-desc">AUAs and KUAs face significant technical and regulatory challenges achieving and maintaining UIDAI certification compliance</p></div></ScrollReveal>
                    <div className="uak-grid-2">{challengesData.map((item, i) => (<ScrollReveal key={i} direction="up" delay={i * 90}><div className="uak-challenge-card"><div className="uak-icon-circle">{item.icon}</div><h3 className="uak-card-title">{item.title}</h3><p className="uak-card-desc">{item.description}</p></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="uak-section uak-bg-panel">
                <div className="uak-container">
                    <ScrollReveal direction="up" delay={0}><div className="uak-section-header"><h2 className="uak-section-title">Our UIDAI Compliance Framework</h2><p className="uak-section-desc">A structured compliance framework covering all technical, operational, and governance requirements for UIDAI AUA/KUA certification</p></div></ScrollReveal>
                    <div className="uak-grid-3">{frameworkComponents.map((item, i) => (<ScrollReveal key={i} direction="up" delay={i * 90}><div className="uak-component-card"><div className="uak-icon-circle">{item.icon}</div><h3 className="uak-card-title">{item.title}</h3><p className="uak-card-desc">{item.description}</p><div className="uak-card-bar" /></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="uak-section uak-bg-white">
                <div className="uak-container">
                    <ScrollReveal direction="up" delay={0}><div className="uak-section-header"><h2 className="uak-section-title">Our Compliance Methodology</h2><p className="uak-section-desc">A structured 10-step methodology from certification requirement analysis through full AUA/KUA compliance implementation and audit readiness</p></div></ScrollReveal>
                    <div className="uak-grid-3">{approachSteps.map((step, i) => (<ScrollReveal key={i} direction="up" delay={i * 80}><div className="uak-approach-card"><div className="uak-step-num">{String(i + 1).padStart(2, '0')}</div><div className="uak-icon-circle">{step.icon}</div><h3 className="uak-card-title">{step.title}</h3><p className="uak-card-desc">{step.description}</p><div className="uak-card-bar" /></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="uak-section uak-bg-panel">
                <div className="uak-container">
                    <ScrollReveal direction="up" delay={0}><div className="uak-section-header"><h2 className="uak-section-title">UIDAI Compliance Coverage Checklist</h2><p className="uak-section-desc">Complete coverage of UIDAI AUA/KUA security requirements across all compliance domains</p></div></ScrollReveal>
                    <div className="uak-checklist-grid">{complianceChecklist.map((item, i) => (<ScrollReveal key={i} direction="up" delay={i * 50}><div className="uak-checklist-item"><div className="uak-check-icon"><CheckCircle size={22} /></div><span className="uak-check-text">{item}</span></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="uak-section uak-bg-white">
                <div className="uak-container">
                    <ScrollReveal direction="up" delay={0}><div className="uak-section-header"><h2 className="uak-section-title">Why Choose CyberAries?</h2></div></ScrollReveal>
                    <div className="uak-grid-3">{whyChooseItems.map((item, i) => (<ScrollReveal key={i} direction="up" delay={i * 150}><div className="uak-why-card"><div className="uak-why-icon">{item.icon}</div><h3 className="uak-why-title">{item.title}</h3><p className="uak-why-desc">{item.description}</p></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="uak-difference">
                <div className="uak-container">
                    <ScrollReveal direction="up"><h2 className="uak-diff-title">THE <span className="uak-diff-red">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal>
                    <div className="uak-compare-grid">
                        <ScrollReveal direction="left" delay={100}><div className="uak-compare-col uak-compare-trad"><h3 className="uak-compare-heading">Traditional Compliance Approach</h3><ul className="uak-compare-list">{difference.traditional.map((item, i) => (<li key={i} className="uak-compare-item"><span className="uak-bullet">•</span>{item}</li>))}</ul></div></ScrollReveal>
                        <ScrollReveal direction="right" delay={200}><div className="uak-compare-col uak-compare-ca"><h3 className="uak-compare-heading uak-compare-ca-heading">CyberAries UIDAI AUA/KUA Compliance</h3><ul className="uak-compare-list">{difference.cyberaries.map((item, i) => (<li key={i} className="uak-compare-item"><span className="uak-bullet">•</span>{item}</li>))}</ul></div></ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="uak-section uak-bg-white">
                <div className="uak-container">
                    <ScrollReveal direction="up" delay={0}><div className="uak-section-header"><h2 className="uak-section-title">Comprehensive Deliverables</h2></div></ScrollReveal>
                    <div className="uak-grid-2">{deliverables.map((d, i) => (<ScrollReveal key={i} direction="up" delay={i * 100}><div className="uak-deliverable-card"><div className="uak-deliverable-icon">{d.icon}</div><h4 className="uak-deliverable-title">{d.title}</h4><ul className="uak-deliverable-list">{d.items.map((item, j) => (<li key={j}>{item}</li>))}</ul></div></ScrollReveal>))}</div>
                </div>
            </section>

            <section className="uak-cta">
                <div className="uak-container">
                    <ScrollReveal direction="up" delay={0}><div className="uak-cta-content"><h2 className="uak-cta-title">Achieve UIDAI AUA/KUA Certification Compliance</h2><p className="uak-cta-desc">Our experts will guide your organization through every step of UIDAI AUA/KUA compliance — from initial assessment through certification and ongoing recertification.</p><button className="uak-btn uak-btn-primary uak-btn-lg" onClick={() => navigate('/contact')}>Request an AUA/KUA Assessment</button></div></ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default UIDAICompliance;
