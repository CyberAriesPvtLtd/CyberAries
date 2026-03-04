import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, Award, FileCheck, Eye, Database, Globe, Target } from 'lucide-react';
import './FedRAMPAssessment.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Authorization Path Selection', desc: 'Choosing between Agency ATO, Joint Authorization Board (JAB) P-ATO, or FedRAMP Ready designation — and selecting the appropriate NIST SP 800-53 baseline (Low, Moderate, or High) — is foundational to the FedRAMP journey.' },
    { icon: <Settings size={40} />, title: 'NIST SP 800-53 Control Complexity', desc: 'FedRAMP Moderate requires 323 controls; High requires 421 controls. Implementing and documenting all applicable controls with sufficient rigor for a 3PAO assessment is a significant organizational undertaking.' },
    { icon: <FileText size={40} />, title: 'System Security Plan Complexity', desc: 'The FedRAMP SSP is a comprehensive document — often hundreds of pages — describing every control implementation, system boundary, architecture, and responsibility in clear, auditable detail.' },
    { icon: <Eye size={40} />, title: 'Continuous Monitoring Obligations', desc: 'FedRAMP Authorization requires ongoing ConMon — monthly vulnerability scanning, annual penetration testing, change management reporting, and incident response integration with FISMA obligations.' },
    { icon: <AlertTriangle size={40} />, title: '3PAO Assessment Preparation', desc: 'A Third-Party Assessment Organization (3PAO) conducts a rigorous security assessment. Preparing evidence, control test results, and documentation for the SAR requires detailed pre-assessment readiness work.' },
    { icon: <Globe size={40} />, title: 'Cloud-Specific Control Implementation', desc: 'FedRAMP controls must be implemented in cloud environments (AWS GovCloud, Azure Government, Google Cloud) — requiring specialized cloud security engineering alongside compliance expertise.' },
];

const components = [
    { icon: <Target size={40} />, title: 'Authorization Path & Baseline Selection', desc: 'Guidance on FedRAMP authorization path (Agency ATO, JAB, Ready), impact level selection (Low/Moderate/High), and boundary scoping for your cloud service offering.' },
    { icon: <FileText size={40} />, title: 'System Security Plan (SSP)', desc: 'Development of the comprehensive FedRAMP SSP — including system description, authorization boundary, all control implementations, and data flow diagrams.' },
    { icon: <Shield size={40} />, title: 'NIST SP 800-53 Control Implementation', desc: 'Technical implementation and documentation of all applicable FedRAMP controls across your cloud environment, with evidence collection procedures for 3PAO assessment.' },
    { icon: <Eye size={40} />, title: 'Continuous Monitoring (ConMon)', desc: 'Design and implementation of the FedRAMP ConMon programme — vulnerability scanning, SIEM, change management reporting, and POA&M management.' },
    { icon: <Lock size={40} />, title: 'Supply Chain & Third-Party Controls', desc: 'SCRM controls assessment and documentation covering all third-party services, CSPs, and external service providers integrated into the FedRAMP boundary.' },
    { icon: <Award size={40} />, title: '3PAO Assessment & Authorization Support', desc: 'Selection of accredited 3PAO, assessment coordination, SAR response, POA&M development, and Agency AO or JAB authorization package support.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'FedRAMP Readiness Assessment', desc: 'Comprehensive baseline assessment against the appropriate NIST SP 800-53 control baseline — identifying control gaps, documentation deficiencies, and authorization boundary issues.' },
    { icon: <Target size={40} />, title: 'Authorization Path & Boundary Definition', desc: 'Define FedRAMP authorization path, impact level, and system authorization boundary — including all components, APIs, interconnections, and third-party services.' },
    { icon: <Database size={40} />, title: 'System Inventory & Architecture Documentation', desc: 'Develop comprehensive inventory of all system components within the authorization boundary with data flows, network diagrams, and system categorization documentation.' },
    { icon: <FileText size={40} />, title: 'System Security Plan Development', desc: 'Develop the FedRAMP SSP — the authoritative document describing system purpose, boundary, users, architecture, and all control implementations.' },
    { icon: <Settings size={40} />, title: 'Control Implementation & Remediation', desc: 'Implement and remediate all required FedRAMP controls across your cloud environment — access control, audit logging, encryption, incident response, and all applicable families.' },
    { icon: <Eye size={40} />, title: 'ConMon Programme Design', desc: 'Design and implement the FedRAMP Continuous Monitoring programme — vulnerability scanning schedule, SIEM and alerting, change management reporting, and POA&M process.' },
    { icon: <Lock size={40} />, title: 'Supply Chain Risk Management', desc: 'Document and implement SCRM controls covering all third-party services and CSPs within the authorization boundary.' },
    { icon: <Shield size={40} />, title: 'Penetration Testing Coordination', desc: 'Coordinate and support the annual FedRAMP penetration test — scope definition, rules of engagement, remediation tracking, and evidence management.' },
    { icon: <FileCheck size={40} />, title: '3PAO Readiness & Assessment Support', desc: 'Conduct pre-assessment readiness testing, select an accredited 3PAO, and provide full assessment support through evidence provision and assessor liaison.' },
    { icon: <Award size={40} />, title: 'Authorization Package & ATO Support', desc: 'Compile the complete FedRAMP authorization package — SSP, SAR, POA&M — and support the Agency AO or JAB authorization decision process.' },
];

const checklist = [
    'FedRAMP authorization path selection (Agency ATO, JAB P-ATO, FedRAMP Ready)',
    'NIST SP 800-53 impact baseline determination (Low, Moderate, or High)',
    'Authorization boundary definition with all components and interconnections',
    'System Security Plan (SSP) development covering all control families',
    'All applicable NIST SP 800-53 controls implemented and documented',
    'Access control, identity management, and MFA implementation',
    'Audit logging, SIEM, and continuous monitoring capabilities',
    'Encryption at rest and in transit for all federal data',
    'Supply chain risk management controls for all third-party services',
    'Annual penetration testing coordinated with accredited 3PAO',
    'FedRAMP ConMon programme — monthly scans, POA&M management, change reporting',
    'Authorization package (SSP, SAR, POA&M) and ATO support',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'FedRAMP Authorization Veterans', desc: 'Our team has guided cloud service providers through FedRAMP authorization at Moderate and High impact levels, with experience across Agency ATO and JAB P-ATO pathways.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Cloud Security Engineering Depth', desc: 'We implement FedRAMP controls at the technical level in AWS GovCloud, Azure Government, and Google Cloud — not just documentation of controls that aren\'t actually deployed.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'End-to-End Authorization Support', desc: 'From readiness assessment through SSP development, control implementation, 3PAO coordination, and ATO — we support your entire FedRAMP authorization journey.' },
];

const trad = [
    'SSP developed using generic templates that don\'t reflect actual control implementations.',
    'Authorization boundary defined too broadly, creating unnecessary assessment burden.',
    'Controls documented as implemented without underlying technical validation.',
    'ConMon programme designed on paper but not operationally implemented.',
    '3PAO assessment discovers control gaps that could have been resolved pre-assessment.',
    'POA&M items left unresolved, jeopardizing annual authorization continuance.',
];
const ca = [
    'SSP developed based on actual system architecture, reflecting real control implementations.',
    'Precise boundary definition scoping the assessment appropriately for your service offering.',
    'Technical validation of all controls before 3PAO assessment begins.',
    'ConMon programme operationally implemented with automated scanning and alerting.',
    'Pre-3PAO readiness testing eliminating surprises in the formal assessment.',
    'Active POA&M management tracking remediation progress and authorization continuance.',
];

const deliverables = [
    { icon: <FileText size={36} />, title: 'Authorization Documentation', items: ['System Security Plan (SSP)', 'Authorization Boundary & Data Flow Diagrams', 'System Component Inventory', 'FedRAMP Control Implementation Summary'] },
    { icon: <Settings size={36} />, title: 'Technical Controls', items: ['Cloud Security Control Implementation', 'IAM, MFA & Access Control Deployment', 'SIEM & Continuous Monitoring Configuration', 'Encryption & Key Management Implementation'] },
    { icon: <Eye size={36} />, title: 'ConMon & Testing', items: ['FedRAMP ConMon Programme Design', 'Monthly Vulnerability Scan Reports', 'Annual Penetration Test Coordination', 'POA&M Management & Tracking'] },
    { icon: <Award size={36} />, title: 'Authorization Support', items: ['3PAO Selection & Assessment Coordination', 'SAR Review & Management Response', 'Authorization Package Compilation', 'Agency ATO or JAB P-ATO Support'] },
];

const FedRAMPAssessment = () => {
    const navigate = useNavigate();
    return (
        <div className="frp-page">
            <section className="frp-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="frp-hero-bg" />
                <div className="frp-container">
                    <p className="frp-eyebrow">Compliance — Global Attestations</p>
                    <h1 className="frp-hero-title">FedRAMP <span className="frp-grad">AUTHORIZATION ASSESSMENT</span></h1>
                    <p className="frp-hero-desc">The <strong>Federal Risk and Authorization Management Program (FedRAMP)</strong> is the US federal government's standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. Cloud service providers seeking US federal agency customers must achieve FedRAMP Authorization — a rigorous, multi-phase process.</p>
                    <p className="frp-hero-desc">Our <strong>FedRAMP Assessment practice</strong> provides comprehensive support — from authorization path selection and SSP development through NIST SP 800-53 control implementation, continuous monitoring programme design, 3PAO coordination, and Agency ATO or JAB P-ATO support.</p>
                    <div className="frp-actions">
                        <button className="frp-btn frp-btn-p" onClick={() => navigate('/contact')}>Schedule a FedRAMP Readiness Assessment</button>
                        <button className="frp-btn frp-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="frp-sec frp-bg-w"><div className="frp-container"><ScrollReveal direction="up"><div className="frp-hdr"><h2 className="frp-title">FedRAMP Authorization Challenges</h2><p className="frp-desc">Cloud service providers face complex technical and process challenges navigating the FedRAMP authorization journey</p></div></ScrollReveal><div className="frp-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="frp-ch-card"><div className="frp-ic">{c.icon}</div><h3 className="frp-ct">{c.title}</h3><p className="frp-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="frp-sec frp-bg-p"><div className="frp-container"><ScrollReveal direction="up"><div className="frp-hdr"><h2 className="frp-title">Our FedRAMP Assessment Framework</h2><p className="frp-desc">Comprehensive FedRAMP authorization support from boundary definition through 3PAO assessment and ATO</p></div></ScrollReveal><div className="frp-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="frp-cmp-card"><div className="frp-ic">{c.icon}</div><h3 className="frp-ct">{c.title}</h3><p className="frp-cd">{c.desc}</p><div className="frp-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="frp-sec frp-bg-w"><div className="frp-container"><ScrollReveal direction="up"><div className="frp-hdr"><h2 className="frp-title">Our Authorization Methodology</h2><p className="frp-desc">A proven 10-step methodology from FedRAMP readiness through authorization package delivery and ATO</p></div></ScrollReveal><div className="frp-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="frp-ap-card"><div className="frp-sn">{String(i + 1).padStart(2, '0')}</div><div className="frp-ic">{a.icon}</div><h3 className="frp-ct">{a.title}</h3><p className="frp-cd">{a.desc}</p><div className="frp-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="frp-sec frp-bg-p"><div className="frp-container"><ScrollReveal direction="up"><div className="frp-hdr"><h2 className="frp-title">FedRAMP Coverage Checklist</h2><p className="frp-desc">Complete coverage of FedRAMP authorization requirements from readiness through ATO</p></div></ScrollReveal><div className="frp-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="frp-chk-item"><div className="frp-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="frp-sec frp-bg-w"><div className="frp-container"><ScrollReveal direction="up"><div className="frp-hdr"><h2 className="frp-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="frp-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="frp-why-card"><div className="frp-why-ic">{w.icon}</div><h3 className="frp-wt">{w.title}</h3><p className="frp-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="frp-diff"><div className="frp-container"><ScrollReveal direction="up"><h2 className="frp-diff-t">THE <span className="frp-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="frp-cmp-g"><ScrollReveal direction="left" delay={100}><div className="frp-col frp-col-t"><h3 className="frp-col-h">Generic Compliance Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="frp-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="frp-col frp-col-c"><h3 className="frp-col-h frp-col-ch">CyberAries FedRAMP Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="frp-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="frp-sec frp-bg-w"><div className="frp-container"><ScrollReveal direction="up"><div className="frp-hdr"><h2 className="frp-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="frp-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="frp-del-card"><div className="frp-del-ic">{d.icon}</div><h4 className="frp-dt">{d.title}</h4><ul className="frp-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="frp-cta"><div className="frp-container"><ScrollReveal direction="up"><div className="frp-cta-c"><h2 className="frp-cta-t">Achieve FedRAMP Authorization</h2><p className="frp-cta-d">Open the US federal market for your cloud services with a FedRAMP Authorization — guided by our experienced advisors and cloud engineers.</p><button className="frp-btn frp-btn-p frp-btn-lg" onClick={() => navigate('/contact')}>Request FedRAMP Readiness Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default FedRAMPAssessment;
