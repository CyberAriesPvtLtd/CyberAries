import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Database, Globe, UserCheck, Target, BookOpen } from 'lucide-react';
import './ISO27001.css';

const challenges = [
    { icon: <Shield size={40} />, title: 'Scope Definition Complexity', desc: 'Defining the ISMS scope accurately — covering assets, processes, and locations — without over-scoping or under-scoping is a foundational challenge that affects every downstream control.' },
    { icon: <AlertTriangle size={40} />, title: 'Risk Assessment & Treatment', desc: 'Conducting a systematic, evidence-based risk assessment covering all in-scope information assets and documenting treatment decisions to meet Annex A control requirements.' },
    { icon: <Users size={40} />, title: 'Stakeholder Buy-In & Culture', desc: 'Achieving genuine top management commitment and embedding a security-conscious culture across all departments, not just the IT function.' },
    { icon: <FileText size={40} />, title: 'Documentation Overhead', desc: 'ISO 27001:2022 requires a structured documentation hierarchy — policies, procedures, records — that organizations often struggle to develop and maintain coherently.' },
    { icon: <Settings size={40} />, title: 'Control Implementation Gaps', desc: 'Mapping 93 Annex A controls to existing practices, identifying gaps, and implementing missing controls without disrupting ongoing business operations.' },
    { icon: <RefreshCw size={40} />, title: 'Continual Improvement', desc: 'Maintaining the ISMS post-certification through internal audits, management reviews, nonconformity management, and continual improvement cycles.' },
];

const components = [
    { icon: <Target size={40} />, title: 'ISMS Scoping & Context', desc: 'Defining organizational context, interested parties, ISMS scope, and information security objectives aligned with ISO 27001:2022 Clause 4 requirements.' },
    { icon: <AlertTriangle size={40} />, title: 'Risk Assessment Framework', desc: 'Systematic risk identification, analysis, and evaluation against defined criteria — leading to a formal risk treatment plan and Statement of Applicability (SoA).' },
    { icon: <Shield size={40} />, title: '93 Annex A Controls', desc: 'Assessment and implementation of all applicable controls across 4 themes: Organizational, People, Physical, and Technological — including 11 new ISO 27001:2022 controls.' },
    { icon: <FileText size={40} />, title: 'Policy & Documentation Suite', desc: 'Development of the complete ISMS documentation hierarchy: policies, procedures, standards, guidelines, and records required by ISO 27001:2022.' },
    { icon: <Eye size={40} />, title: 'Internal Audit Programme', desc: 'Design and execution of a systematic internal audit programme to verify ISMS effectiveness and compliance before certification assessment.' },
    { icon: <RefreshCw size={40} />, title: 'Management Review & Improvement', desc: 'Structured management review process and continual improvement framework ensuring the ISMS remains effective, relevant, and compliant post-certification.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'Gap Analysis', desc: 'Comprehensive baseline assessment of your current information security posture against ISO 27001:2022 requirements, identifying gaps across all clauses and Annex A controls.' },
    { icon: <Target size={40} />, title: 'ISMS Scope & Context', desc: 'Define organizational context, interested parties, ISMS boundaries, and information security objectives with documented scope statement.' },
    { icon: <AlertTriangle size={40} />, title: 'Risk Assessment', desc: 'Systematic risk assessment of all in-scope information assets with risk owner assignment, likelihood/impact scoring, and risk register development.' },
    { icon: <FileCheck size={40} />, title: 'Statement of Applicability', desc: 'Develop the SoA documenting applicability and implementation status of all 93 Annex A controls with justifications for exclusions.' },
    { icon: <BookOpen size={40} />, title: 'Policy & Procedure Development', desc: 'Create the complete ISMS documentation suite — Information Security Policy, Annex A control procedures, and all mandatory ISO 27001:2022 documented information.' },
    { icon: <Settings size={40} />, title: 'Control Implementation', desc: 'Hands-on implementation of technical, organizational, people, and physical controls identified in the risk treatment plan and SoA.' },
    { icon: <Users size={40} />, title: 'Awareness & Training', desc: 'Role-based security awareness training for all staff and specialized training for ISMS owners, internal auditors, and top management.' },
    { icon: <Eye size={40} />, title: 'Internal Audit', desc: 'Systematic internal audit of the entire ISMS with documented findings, nonconformity reports, and corrective action tracking.' },
    { icon: <BarChart3 size={40} />, title: 'Management Review', desc: 'Facilitate management review meetings with structured inputs, decisions, and documented outputs meeting ISO 27001:2022 Clause 9.3 requirements.' },
    { icon: <Award size={40} />, title: 'Certification Audit Support', desc: 'Stage 1 and Stage 2 certification audit support — document review preparation, audit logistics, and on-site auditor liaison.' },
];

const checklist = [
    'Gap analysis against all ISO 27001:2022 clauses and Annex A controls',
    'ISMS scope definition aligned with organizational and regulatory context',
    'Information asset register and asset classification scheme',
    'Risk assessment methodology and risk register with treatment decisions',
    'Statement of Applicability covering all 93 Annex A controls',
    'Complete ISMS documentation suite — policies, procedures, records',
    'All 93 Annex A controls assessed and implementation gaps remediated',
    '11 new ISO 27001:2022 controls implementation (threat intelligence, cloud security, ICT readiness, etc.)',
    'Internal audit programme design and execution',
    'Nonconformity and corrective action management process',
    'Management review facilitation with documented outputs',
    'Certification body selection support and Stage 1/Stage 2 audit preparation',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'ISO 27001 Certified Practitioners', desc: 'Our team includes ISO 27001 Lead Implementers and Lead Auditors with hands-on certification experience across enterprise, BFSI, and government organizations.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'CERT-In Empanelled', desc: 'Government-recognized cybersecurity firm delivering ISO 27001 implementations with proven regulatory and certification audit credentials.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'End-to-End Implementation', desc: 'From gap analysis through risk assessment, control implementation, internal audit, and certification audit support — we handle the entire ISMS journey.' },
];

const trad = [
    'Template-based ISMS documentation not calibrated to your business context.',
    'Risk assessment conducted as a paper exercise without operational input.',
    'Controls implemented on paper without technical verification or testing.',
    'Internal audits conducted by staff not trained as ISO 27001 auditors.',
    'Certification audit surprises due to inadequate Stage 1 preparation.',
    'ISMS abandoned post-certification with no continual improvement process.',
];
const ca = [
    'ISMS documentation tailored to your specific business, sector, and risk landscape.',
    'Risk assessments grounded in operational reality with asset owner involvement.',
    'Controls technically implemented and tested with documented evidence.',
    'Internal audits conducted by qualified ISO 27001 Lead Auditors.',
    'Structured pre-audit readiness review eliminating certification surprises.',
    'Post-certification continual improvement programme keeping your ISMS alive.',
];

const deliverables = [
    { icon: <FileText size={36} />, title: 'ISMS Documentation', items: ['Information Security Policy & ISMS Manual', 'Risk Assessment Report & Risk Register', 'Statement of Applicability (SoA)', 'Complete Annex A Procedure Suite'] },
    { icon: <Settings size={36} />, title: 'Technical Controls', items: ['Access Control & IAM Implementation', 'Asset Classification & Handling', 'Cryptography & Key Management Controls', 'Network & Endpoint Security Controls'] },
    { icon: <Eye size={36} />, title: 'Audit & Review', items: ['Internal Audit Programme & Reports', 'Nonconformity & Corrective Action Register', 'Management Review Documentation', 'KPI & Metrics Dashboard'] },
    { icon: <Award size={36} />, title: 'Certification Support', items: ['Certification Body Selection Guidance', 'Stage 1 Audit Preparation Package', 'Stage 2 Audit Support & Liaison', 'Surveillance Audit Readiness Plan'] },
];

const ISO27001 = () => {
    const navigate = useNavigate();
    return (
        <div className="iso27-page">
            <section className="iso27-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="iso27-hero-bg" />
                <div className="iso27-container">
                    <p className="iso27-eyebrow">Compliance — ISO Standards</p>
                    <h1 className="iso27-hero-title">ISO 27001 <span className="iso27-grad">ISMS CERTIFICATION</span></h1>
                    <p className="iso27-hero-desc">ISO/IEC 27001:2022 is the <strong>global benchmark for Information Security Management Systems</strong>. Achieving certification demonstrates to customers, regulators, and partners that your organization systematically manages information security risks — covering people, processes, and technology.</p>
                    <p className="iso27-hero-desc">Our ISO 27001 practice delivers <strong>end-to-end implementation and certification support</strong> — from gap analysis through ISMS design, risk assessment, control implementation, internal audit, and Stage 1/Stage 2 certification audit preparation.</p>
                    <div className="iso27-actions">
                        <button className="iso27-btn iso27-btn-p" onClick={() => navigate('/contact')}>Schedule a Gap Analysis</button>
                        <button className="iso27-btn iso27-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="iso27-sec iso27-bg-w">
                <div className="iso27-container">
                    <ScrollReveal direction="up"><div className="iso27-hdr"><h2 className="iso27-title">ISO 27001 Implementation Challenges</h2><p className="iso27-desc">Organizations across industries face common challenges when implementing and certifying their ISMS against ISO 27001:2022</p></div></ScrollReveal>
                    <div className="iso27-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="iso27-ch-card"><div className="iso27-ic">{c.icon}</div><h3 className="iso27-ct">{c.title}</h3><p className="iso27-cd">{c.desc}</p></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="iso27-sec iso27-bg-p">
                <div className="iso27-container">
                    <ScrollReveal direction="up"><div className="iso27-hdr"><h2 className="iso27-title">Our ISO 27001 Implementation Framework</h2><p className="iso27-desc">A comprehensive ISMS implementation approach covering all clauses and Annex A control domains of ISO 27001:2022</p></div></ScrollReveal>
                    <div className="iso27-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="iso27-cmp-card"><div className="iso27-ic">{c.icon}</div><h3 className="iso27-ct">{c.title}</h3><p className="iso27-cd">{c.desc}</p><div className="iso27-bar" /></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="iso27-sec iso27-bg-w">
                <div className="iso27-container">
                    <ScrollReveal direction="up"><div className="iso27-hdr"><h2 className="iso27-title">Our Implementation Methodology</h2><p className="iso27-desc">A proven 10-step methodology from baseline gap analysis through certification audit success</p></div></ScrollReveal>
                    <div className="iso27-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="iso27-ap-card"><div className="iso27-sn">{String(i + 1).padStart(2, '0')}</div><div className="iso27-ic">{a.icon}</div><h3 className="iso27-ct">{a.title}</h3><p className="iso27-cd">{a.desc}</p><div className="iso27-bar" /></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="iso27-sec iso27-bg-p">
                <div className="iso27-container">
                    <ScrollReveal direction="up"><div className="iso27-hdr"><h2 className="iso27-title">ISO 27001 Coverage Checklist</h2><p className="iso27-desc">Complete coverage of ISO 27001:2022 requirements across all clauses and Annex A control domains</p></div></ScrollReveal>
                    <div className="iso27-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="iso27-chk-item"><div className="iso27-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="iso27-sec iso27-bg-w">
                <div className="iso27-container">
                    <ScrollReveal direction="up"><div className="iso27-hdr"><h2 className="iso27-title">Why Choose CyberAries?</h2></div></ScrollReveal>
                    <div className="iso27-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="iso27-why-card"><div className="iso27-why-ic">{w.icon}</div><h3 className="iso27-wt">{w.title}</h3><p className="iso27-wd">{w.desc}</p></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="iso27-diff">
                <div className="iso27-container">
                    <ScrollReveal direction="up"><h2 className="iso27-diff-t">THE <span className="iso27-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal>
                    <div className="iso27-cmp-g">
                        <ScrollReveal direction="left" delay={100}><div className="iso27-col iso27-col-t"><h3 className="iso27-col-h">Traditional ISO Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="iso27-blt">•</span>{t}</li>)}</ul></div></ScrollReveal>
                        <ScrollReveal direction="right" delay={200}><div className="iso27-col iso27-col-c"><h3 className="iso27-col-h iso27-col-ch">CyberAries ISO 27001 Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="iso27-blt">•</span>{t}</li>)}</ul></div></ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="iso27-sec iso27-bg-w">
                <div className="iso27-container">
                    <ScrollReveal direction="up"><div className="iso27-hdr"><h2 className="iso27-title">Comprehensive Deliverables</h2></div></ScrollReveal>
                    <div className="iso27-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="iso27-del-card"><div className="iso27-del-ic">{d.icon}</div><h4 className="iso27-dt">{d.title}</h4><ul className="iso27-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="iso27-cta">
                <div className="iso27-container">
                    <ScrollReveal direction="up"><div className="iso27-cta-c"><h2 className="iso27-cta-t">Achieve ISO 27001:2022 Certification</h2><p className="iso27-cta-d">Partner with certified ISO 27001 implementers to build a compliant, effective ISMS and achieve certification with confidence.</p><button className="iso27-btn iso27-btn-p iso27-btn-lg" onClick={() => navigate('/contact')}>Request ISO 27001 Assessment</button></div></ScrollReveal>
                </div>
            </section>
        </div>
    );
};
export default ISO27001;
