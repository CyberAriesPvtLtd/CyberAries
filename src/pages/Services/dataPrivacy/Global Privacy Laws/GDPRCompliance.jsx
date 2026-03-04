import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Settings, Users, Award, Globe, Database, Eye, FileCheck, Target, RefreshCw
} from 'lucide-react';
import './GDPRCompliance.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Establishing Lawful Basis for Processing', desc: 'Identifying and documenting a valid lawful basis — consent, legitimate interest, contract, legal obligation — for every personal data processing activity across the organization.' },
    { icon: <Database size={40} />, title: 'Personal Data Mapping & Article 30 Records', desc: 'Building and maintaining a comprehensive Record of Processing Activities (ROPA) covering all data flows, retention periods, and third-party transfers as mandated by Article 30.' },
    { icon: <Users size={40} />, title: 'Data Subject Rights Fulfilment', desc: 'Operationalizing the eight GDPR rights — access, rectification, erasure, restriction, portability, objection — within statutory response timelines across complex organizational systems.' },
    { icon: <Globe size={40} />, title: 'International Data Transfers', desc: 'Ensuring lawful cross-border data transfers via SCCs, adequacy decisions, BCRs, or derogations — a complex area post-Schrems II with ongoing regulatory developments.' },
    { icon: <AlertTriangle size={40} />, title: 'Data Breach Management & 72-Hour Notification', desc: 'Implementing breach detection, internal escalation, supervisory authority notification within 72 hours, and data subject communication processes meeting GDPR requirements.' },
    { icon: <Eye size={40} />, title: 'Data Protection Impact Assessments (DPIAs)', desc: 'Conducting mandatory DPIAs for high-risk processing activities — systematic profiling, large-scale sensitive data, public monitoring — with documented risk mitigation outcomes.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'GDPR Readiness Assessment', desc: 'Comprehensive gap assessment against all GDPR obligations — lawful basis, data subject rights, controller/processor obligations, DPO requirements, and third-country transfer mechanisms.' },
    { icon: <Database size={40} />, title: 'Data Mapping & ROPA Development', desc: 'Personal data inventory and Article 30 Record of Processing Activities covering all processing purposes, data categories, retention schedules, and cross-border transfer safeguards.' },
    { icon: <FileText size={40} />, title: 'Privacy Governance & Policy Suite', desc: 'Privacy policy architecture, consent mechanisms, privacy notices, data subject request procedures, and internal governance documentation meeting GDPR accountability requirements.' },
    { icon: <Lock size={40} />, title: 'Technical & Organisational Measures', desc: 'Data minimization, pseudonymisation, encryption, access control, and storage limitation controls — the technical and organisational measures required by GDPR Article 32.' },
    { icon: <Eye size={40} />, title: 'DPIA & Privacy Risk Management', desc: 'Data Protection Impact Assessments for high-risk processing, privacy risk registers, and risk-based prioritisation of remediation aligned with the Article 35 DPIA framework.' },
    { icon: <Globe size={40} />, title: 'Third-Party & Transfer Management', desc: 'Data Processing Agreements, international transfer impact assessments, Standard Contractual Clauses, and ongoing vendor privacy compliance monitoring.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'GDPR Gap Assessment', desc: 'Baseline review against all GDPR obligations identifying processing activities without lawful basis, missing data subject rights procedures, and documentation deficiencies.' },
    { icon: <Database size={40} />, title: 'Personal Data Discovery & Mapping', desc: 'Technical and process-based discovery of all personal data — in databases, files, SaaS platforms, and on-premises systems — mapped to processing purposes and data flows.' },
    { icon: <FileText size={40} />, title: 'Article 30 ROPA Construction', desc: 'Build the Record of Processing Activities covering all processing operations, controller/processor roles, data categories, retention periods, and transfer safeguards.' },
    { icon: <Globe size={40} />, title: 'Lawful Basis & Consent Framework', desc: 'Document and validate lawful basis for all processing activities; design consent management, preference centres, and withdrawal mechanisms where consent is the basis.' },
    { icon: <Users size={40} />, title: 'Data Subject Rights Operationalization', desc: 'Design and implement DSR intake processes, identity verification, fulfilment workflows, and response tracking meeting Article 12-22 timelines.' },
    { icon: <Lock size={40} />, title: 'Technical Controls Implementation', desc: 'Implement privacy-by-design controls — encryption, pseudonymisation, data minimization, access restrictions, and retention enforcement — throughout IT systems.' },
    { icon: <AlertTriangle size={40} />, title: 'DPIA Execution', desc: 'Conduct DPIAs for high-risk processing activities with documented risk assessments, mitigation measures, and DPO/supervisory authority consultation where required.' },
    { icon: <Globe size={40} />, title: 'International Transfer Mechanisms', desc: 'Review and implement appropriate safeguards for cross-border data transfers — SCCs, transfer impact assessments, BCRs, adequacy reliance, or derogations.' },
    { icon: <FileCheck size={40} />, title: 'Breach Response Programme', desc: 'Develop data breach response playbook — detection, classification, 72-hour notification decision tree, Data Subject communication templates, and post-incident review.' },
    { icon: <Award size={40} />, title: 'DPO Support & Ongoing Compliance', desc: 'DPO-as-a-Service or DPO advisory, supervisory authority liaison support, and annual GDPR compliance review to maintain accountability documentation.' },
];

const checklist = [
    'GDPR gap assessment against all 11 chapters and 99 articles',
    'Personal data inventory and Article 30 Record of Processing Activities',
    'Lawful basis documentation for all processing activities',
    'Privacy notices and consent management implementation',
    'Data subject rights procedures — access, erasure, portability, rectification',
    'Technical controls — encryption, pseudonymisation, access management',
    'Data Protection Impact Assessments for high-risk processing',
    'Data Processing Agreements with all processors and sub-processors',
    'International data transfer safeguards — SCCs, transfer impact assessments',
    '72-hour breach notification procedure and data subject communication plan',
    'Data Protection Officer appointment or advisory where required',
    'Annual GDPR compliance review and accountability programme',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'GDPR Specialists with DPA Experience', desc: 'Our GDPR advisors have supported organizations across EU/EEA and third-country operations, with direct experience responding to supervisory authority inquiries.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'End-to-End Accountability Programme', desc: 'From data mapping and ROPA through technical controls, DPIAs, DSR workflows, and DPO support — we deliver a complete, documented GDPR accountability framework.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Practical, Business-Aligned Compliance', desc: 'We balance regulatory rigour with business pragmatism — risk-based prioritisation, scalable processes, and privacy-by-design embedded into your operations.' },
];

const trad = [
    'Privacy policies drafted without reviewing actual data processing activities.',
    'Lawful basis documented for some processing but not systematically across the organisation.',
    'Data subject rights procedures exist on paper but not operationally tested.',
    'DPIAs conducted as a formality without genuine risk assessment or mitigation.',
    'International transfers not reviewed post-Schrems II with no transfer impact assessment.',
    'Breach response relies on improvisation rather than a tested documented procedure.',
];
const ca = [
    'Privacy policies derived directly from documented processing activities and ROPA.',
    'Lawful basis systematically identified, documented, and validated across all processing.',
    'DSR workflows operationally tested end-to-end with identity verification and audit trails.',
    'DPIAs reflecting genuine risk analysis with documented mitigation and DPO review.',
    'All international transfers reviewed with SCCs or alternative safeguards implemented.',
    'Breach response programme tested via tabletop exercises with a 72-hour notification checklist.',
];

const deliverables = [
    { icon: <Database size={36} />, title: 'Assessment & Mapping', items: ['GDPR Gap Assessment Report', 'Personal Data Inventory & Discovery', 'Article 30 Record of Processing Activities', 'Data Flow Diagrams & Third-Party Register'] },
    { icon: <FileText size={36} />, title: 'Governance & Documentation', items: ['Privacy Policy & Notice Framework', 'Lawful Basis & Consent Management', 'Data Subject Rights Procedures', 'Data Processing Agreement Templates'] },
    { icon: <Lock size={36} />, title: 'Technical Controls', items: ['Privacy-by-Design Control Implementation', 'Encryption & Pseudonymisation Controls', 'Retention Management & Data Minimization', 'Access Control & Privileged Data Review'] },
    { icon: <Award size={36} />, title: 'Ongoing Compliance', items: ['DPIA Reports & Risk Register', 'Breach Response Playbook & Templates', 'DPO-as-a-Service or DPO Advisory', 'Annual GDPR Compliance Review Programme'] },
];

const GDPRCompliance = () => {
    const navigate = useNavigate();
    return (
        <div className="gdpr-page">
            <section className="gdpr-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="gdpr-hero-bg" />
                <div className="gdpr-container">
                    <p className="gdpr-eyebrow">Data Privacy — Global Privacy Laws</p>
                    <h1 className="gdpr-hero-title">GDPR <span className="gdpr-grad">COMPLIANCE & DATA PROTECTION</span></h1>
                    <p className="gdpr-hero-desc">The <strong>General Data Protection Regulation (GDPR)</strong> is the world's most comprehensive data protection law, applying to any organization that processes personal data of EU/EEA residents — regardless of where the organization is established. Non-compliance exposes organizations to fines of up to €20 million or 4% of global annual turnover.</p>
                    <p className="gdpr-hero-desc">Our <strong>GDPR compliance programme</strong> covers the full accountability framework — from data mapping and ROPA through lawful basis, DSR workflows, DPIAs, international transfer mechanisms, technical controls, breach response, and ongoing DPO advisory support.</p>
                    <div className="gdpr-actions">
                        <button className="gdpr-btn gdpr-btn-p" onClick={() => navigate('/contact')}>Schedule a GDPR Assessment</button>
                        <button className="gdpr-btn gdpr-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="gdpr-sec gdpr-bg-w"><div className="gdpr-container"><ScrollReveal direction="up"><div className="gdpr-hdr"><h2 className="gdpr-title">GDPR Compliance Challenges</h2><p className="gdpr-desc">Organizations processing EU personal data face complex challenges across all areas of the GDPR's accountability framework</p></div></ScrollReveal><div className="gdpr-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="gdpr-ch-card"><div className="gdpr-ic">{c.icon}</div><h3 className="gdpr-ct">{c.title}</h3><p className="gdpr-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="gdpr-sec gdpr-bg-p"><div className="gdpr-container"><ScrollReveal direction="up"><div className="gdpr-hdr"><h2 className="gdpr-title">Our GDPR Compliance Framework</h2><p className="gdpr-desc">Comprehensive GDPR compliance covering all accountability obligations from data mapping through technical controls and ongoing DPO support</p></div></ScrollReveal><div className="gdpr-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="gdpr-cmp-card"><div className="gdpr-ic">{c.icon}</div><h3 className="gdpr-ct">{c.title}</h3><p className="gdpr-cd">{c.desc}</p><div className="gdpr-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="gdpr-sec gdpr-bg-w"><div className="gdpr-container"><ScrollReveal direction="up"><div className="gdpr-hdr"><h2 className="gdpr-title">Our GDPR Methodology</h2><p className="gdpr-desc">A structured 10-step methodology from gap assessment through ongoing accountability programme</p></div></ScrollReveal><div className="gdpr-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="gdpr-ap-card"><div className="gdpr-sn">{String(i + 1).padStart(2, '0')}</div><div className="gdpr-ic">{a.icon}</div><h3 className="gdpr-ct">{a.title}</h3><p className="gdpr-cd">{a.desc}</p><div className="gdpr-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="gdpr-sec gdpr-bg-p"><div className="gdpr-container"><ScrollReveal direction="up"><div className="gdpr-hdr"><h2 className="gdpr-title">GDPR Coverage Checklist</h2><p className="gdpr-desc">Complete coverage of GDPR obligations across all chapters and 99 articles</p></div></ScrollReveal><div className="gdpr-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="gdpr-chk-item"><div className="gdpr-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="gdpr-sec gdpr-bg-w"><div className="gdpr-container"><ScrollReveal direction="up"><div className="gdpr-hdr"><h2 className="gdpr-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="gdpr-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="gdpr-why-card"><div className="gdpr-why-ic">{w.icon}</div><h3 className="gdpr-wt">{w.title}</h3><p className="gdpr-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="gdpr-diff"><div className="gdpr-container"><ScrollReveal direction="up"><h2 className="gdpr-diff-t">THE <span className="gdpr-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="gdpr-cmp-g"><ScrollReveal direction="left" delay={100}><div className="gdpr-col gdpr-col-t"><h3 className="gdpr-col-h">Generic Privacy Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="gdpr-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="gdpr-col gdpr-col-c"><h3 className="gdpr-col-h gdpr-col-ch">CyberAries GDPR Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="gdpr-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="gdpr-sec gdpr-bg-w"><div className="gdpr-container"><ScrollReveal direction="up"><div className="gdpr-hdr"><h2 className="gdpr-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="gdpr-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="gdpr-del-card"><div className="gdpr-del-ic">{d.icon}</div><h4 className="gdpr-dt">{d.title}</h4><ul className="gdpr-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="gdpr-cta"><div className="gdpr-container"><ScrollReveal direction="up"><div className="gdpr-cta-c"><h2 className="gdpr-cta-t">Achieve GDPR Accountability & Compliance</h2><p className="gdpr-cta-d">Build a robust GDPR accountability framework that satisfies supervisory authorities, earns customer trust, and reduces your regulatory exposure.</p><button className="gdpr-btn gdpr-btn-p gdpr-btn-lg" onClick={() => navigate('/contact')}>Request GDPR Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default GDPRCompliance;
