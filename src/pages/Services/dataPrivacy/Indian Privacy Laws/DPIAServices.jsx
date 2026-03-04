import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Settings, Users, Award, Globe, Database, Eye, FileCheck, Target
} from 'lucide-react';
import './DPIAServices.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Identifying High-Risk Processing for Mandatory DPIA', desc: 'Determining which processing activities trigger mandatory Data Protection Impact Assessments under GDPR Article 35 — systematic profiling, large-scale sensitive data, public area monitoring — without a structured risk screening process.' },
    { icon: <Database size={40} />, title: 'Scoping the DPIA Accurately', desc: 'Defining the DPIA scope too narrowly misses risks; too broadly consumes disproportionate resources. Accurate processing description, necessity assessment, and proportionality review require specialised privacy expertise.' },
    { icon: <Eye size={40} />, title: 'Meaningful Risk Assessment', desc: 'Conducting a genuine DPIA risk assessment — identifying likelihood and severity of risks to Data Subjects\' rights and freedoms — beyond surface-level checklists that satisfy the form but not the substance of GDPR requirements.' },
    { icon: <Settings size={40} />, title: 'Integrating DPIAs into SDLC', desc: 'Embedding DPIA screening and execution into project delivery, product development, and change management lifecycles so privacy risk is assessed before new processing starts, not after deployment.' },
    { icon: <Users size={40} />, title: 'DPO Consultation & Supervisory Authority Prior Consultation', desc: 'Managing DPO consultation in the DPIA process, and determining when residual high risk requires prior consultation with the supervisory authority before processing begins — a step many organizations overlook.' },
    { icon: <Lock size={40} />, title: 'DPIA Under Indian DPDP Act for Significant Data Fiduciaries', desc: 'Significant Data Fiduciaries under India\'s DPDP Act are required to conduct Data Protection Impact Assessments. Understanding DPDP Act DPIA requirements and scoping these assessments for Indian regulatory compliance.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'DPIA Screening & Necessity Assessment', desc: 'Structured pre-DPIA screening of proposed processing activities against mandatory DPIA triggers (Article 35 list, supervisory authority lists) and high-risk indicators to determine DPIA necessity.' },
    { icon: <FileText size={40} />, title: 'Processing Description & Necessity/Proportionality Review', desc: 'Systematic description of the processing operation — purposes, data categories, recipients, retention, technical controls — with documented necessity and proportionality assessment.' },
    { icon: <Eye size={40} />, title: 'Privacy Risk Assessment', desc: 'Identification of risks to Data Subjects\' rights and freedoms — likelihood and severity assessment, risk matrix scoring, and documentation of residual risk after mitigation measures.' },
    { icon: <Lock size={40} />, title: 'Mitigation Measures & Risk Reduction', desc: 'Identification and implementation of technical and organisational controls — privacy-by-design, data minimisation, access controls, encryption — to reduce DPIA risks to acceptable levels.' },
    { icon: <Users size={40} />, title: 'DPO & Stakeholder Consultation', desc: 'Structured DPO consultation in the DPIA process, Data Subject views where appropriate, and prior consultation with supervisory authority where residual high risk cannot be mitigated.' },
    { icon: <Globe size={40} />, title: 'DPIA Programme & SDLC Integration', desc: 'Building an organisational DPIA programme — screening checklist, DPIA template, review governance, and integration into SDLC, change management, and procurement processes.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'Processing Activity Screening', desc: 'Screen proposed or existing processing activities against GDPR Article 35 mandatory triggers and WP248 high-risk criteria to determine DPIA necessity.' },
    { icon: <FileText size={40} />, title: 'DPIA Scoping', desc: 'Define DPIA scope — processing operation boundaries, systems involved, data categories, data subjects, third parties, and jurisdictions — ensuring accurate and proportionate coverage.' },
    { icon: <Database size={40} />, title: 'Processing Description', desc: 'Document the processing operation systematically — purposes, legal basis, data flows, retention schedules, recipients, and cross-border transfer mechanisms.' },
    { icon: <Eye size={40} />, title: 'Necessity & Proportionality Assessment', desc: 'Assess whether processing is necessary and proportionate to the legitimate purpose — identifying over-collection, unnecessary retention, and disproportionate disclosure.' },
    { icon: <AlertTriangle size={40} />, title: 'Risk Identification', desc: 'Identify privacy risks to Data Subjects — discrimination, identity theft, financial loss, reputational damage, loss of confidentiality — linked to specific processing activities.' },
    { icon: <Settings size={40} />, title: 'Likelihood & Severity Scoring', desc: 'Score identified risks on likelihood and severity dimensions, applying residual risk assessment after existing controls — producing a documented risk matrix.' },
    { icon: <Lock size={40} />, title: 'Mitigation Measures Design', desc: 'Design and document technical and organisational mitigation measures — privacy-by-default, minimisation, access controls, encryption, anonymisation — reducing risks to acceptable levels.' },
    { icon: <Users size={40} />, title: 'DPO Consultation & Review', desc: 'Conduct formal DPO consultation, document DPO opinion and recommendations, and integrate DPO input into final DPIA documentation.' },
    { icon: <FileCheck size={40} />, title: 'Prior Supervisory Authority Consultation', desc: 'Where residual high risk persists after mitigation, manage prior consultation with the supervisory authority — submission preparation, timeline management, and response handling.' },
    { icon: <Award size={40} />, title: 'DPIA Programme Institutionalization', desc: 'Deploy a DPIA screening checklist, standard DPIA template, review governance, and SDLC/change management integration for ongoing DPIA programme management.' },
];

const checklist = [
    'Processing activity screening against Article 35 mandatory triggers and WP248 criteria',
    'DPIA scoping and processing operation boundary definition',
    'Systematic processing description — purposes, data, recipients, retention, transfers',
    'Necessity and proportionality assessment for each processing activity',
    'Risk identification — rights and freedoms of Data Subjects',
    'Likelihood and severity scoring with residual risk matrix',
    'Technical and organisational mitigation measure design and implementation',
    'DPO consultation with documented opinion and recommendations',
    'Data Subject views assessment (where appropriate)',
    'Prior supervisory authority consultation preparation (where required)',
    'DPIA report documentation and version control',
    'DPIA programme — screening checklist, template, SDLC integration, and annual review',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'DPIA Specialists with Regulatory Experience', desc: 'Our privacy team has conducted DPIAs for complex, high-risk processing operations across AI/ML, biometrics, healthcare, financial services, and public authority contexts.' },
    { icon: <Eye size={48} strokeWidth={1.5} />, title: 'Substance Over Form', desc: 'We conduct DPIAs as genuine risk assessments — not checkbox exercises. Our DPIA reports would satisfy supervisory authority scrutiny in any investigation or audit scenario.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'GDPR & DPDP Act Coverage', desc: 'We conduct DPIAs meeting both GDPR Article 35 requirements and DPDP Act obligations for Significant Data Fiduciaries — a single integrated assessment for organisations with dual regulatory exposure.' },
];

const trad = [
    'DPIA screening conducted informally — mandatory triggers not systematically checked.',
    'Processing descriptions incomplete — data flows, recipients, and retention not fully documented.',
    'Risk assessment limited to a checklist of generic harms without likelihood/severity scoring.',
    'Mitigation measures suggested at a high level without implementation tracking.',
    'DPO consultation acknowledged formally without documented opinion or recommendations.',
    'No DPIA programme — each DPIA isolated without recurring screening or review governance.',
];
const ca = [
    'Systematic DPIA screening against Article 35 mandatory triggers and WP248 high-risk criteria.',
    'Complete processing description with data flow diagrams, recipient list, and retention schedule.',
    'Genuine risk assessment with documented likelihood and severity scores and residual risk matrix.',
    'Mitigation measures specifically designed, documented, and tracked through to implementation.',
    'DPO consultation formally documented with DPO opinion recorded in the DPIA report.',
    'DPIA programme institutionalised — screening, template, SDLC integration, and annual review cycle.',
];

const deliverables = [
    { icon: <Search size={36} />, title: 'Assessment & Screening', items: ['Processing Activity DPIA Screening Report', 'DPIA Scoping Documentation', 'Processing Description & Data Flow Diagrams', 'Necessity & Proportionality Assessment'] },
    { icon: <Eye size={36} />, title: 'Risk Assessment', items: ['Privacy Risk Identification Report', 'Likelihood & Severity Risk Matrix', 'Residual Risk Assessment', 'Mitigation Measures Design & Tracking'] },
    { icon: <Users size={36} />, title: 'Consultation & Report', items: ['DPO Consultation Documentation', 'DPIA Final Report', 'Supervisory Authority Prior Consultation Submission', 'DPIA Version Control Register'] },
    { icon: <Award size={36} />, title: 'DPIA Programme', items: ['DPIA Screening Checklist', 'Standard DPIA Template', 'SDLC & Change Management Integration', 'Annual DPIA Review Programme'] },
];

const DPIAServices = () => {
    const navigate = useNavigate();
    return (
        <div className="dpia-page">
            <section className="dpia-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="dpia-hero-bg" />
                <div className="dpia-container">
                    <p className="dpia-eyebrow">Data Privacy — Indian Privacy Laws</p>
                    <h1 className="dpia-hero-title">DPIA <span className="dpia-grad">SERVICES</span></h1>
                    <p className="dpia-hero-desc">A <strong>Data Protection Impact Assessment (DPIA)</strong> is a mandatory process under GDPR Article 35 for processing likely to result in high risk to individuals' rights and freedoms. DPIAs are also required for Significant Data Fiduciaries under India's DPDP Act. A well-conducted DPIA demonstrates privacy by design, satisfies regulatory requirements, and reduces the risk of enforcement action.</p>
                    <p className="dpia-hero-desc">Our <strong>DPIA services</strong> cover the complete DPIA lifecycle — screening and necessity determination, processing description, necessity and proportionality assessment, risk identification and scoring, mitigation design, DPO consultation, and prior supervisory authority consultation management — plus DPIA programme design for organisational embedding.</p>
                    <div className="dpia-actions">
                        <button className="dpia-btn dpia-btn-p" onClick={() => navigate('/contact')}>Request a DPIA</button>
                        <button className="dpia-btn dpia-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="dpia-sec dpia-bg-w"><div className="dpia-container"><ScrollReveal direction="up"><div className="dpia-hdr"><h2 className="dpia-title">DPIA Challenges</h2><p className="dpia-desc">Organizations face significant challenges conducting DPIAs of genuine rigour that satisfy regulatory requirements and reduce processing risks</p></div></ScrollReveal><div className="dpia-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="dpia-ch-card"><div className="dpia-ic">{c.icon}</div><h3 className="dpia-ct">{c.title}</h3><p className="dpia-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="dpia-sec dpia-bg-p"><div className="dpia-container"><ScrollReveal direction="up"><div className="dpia-hdr"><h2 className="dpia-title">Our DPIA Service Framework</h2><p className="dpia-desc">End-to-end DPIA services — from screening through risk assessment, mitigation, DPO consultation, and DPIA programme design</p></div></ScrollReveal><div className="dpia-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="dpia-cmp-card"><div className="dpia-ic">{c.icon}</div><h3 className="dpia-ct">{c.title}</h3><p className="dpia-cd">{c.desc}</p><div className="dpia-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="dpia-sec dpia-bg-w"><div className="dpia-container"><ScrollReveal direction="up"><div className="dpia-hdr"><h2 className="dpia-title">Our DPIA Methodology</h2><p className="dpia-desc">A rigorous 10-step DPIA methodology designed to produce defensible, supervisory-authority-standard assessments</p></div></ScrollReveal><div className="dpia-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="dpia-ap-card"><div className="dpia-sn">{String(i + 1).padStart(2, '0')}</div><div className="dpia-ic">{a.icon}</div><h3 className="dpia-ct">{a.title}</h3><p className="dpia-cd">{a.desc}</p><div className="dpia-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="dpia-sec dpia-bg-p"><div className="dpia-container"><ScrollReveal direction="up"><div className="dpia-hdr"><h2 className="dpia-title">DPIA Coverage Checklist</h2><p className="dpia-desc">Complete DPIA lifecycle coverage — from screening through supervisory authority consultation and programme institutionalisation</p></div></ScrollReveal><div className="dpia-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="dpia-chk-item"><div className="dpia-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="dpia-sec dpia-bg-w"><div className="dpia-container"><ScrollReveal direction="up"><div className="dpia-hdr"><h2 className="dpia-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="dpia-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="dpia-why-card"><div className="dpia-why-ic">{w.icon}</div><h3 className="dpia-wt">{w.title}</h3><p className="dpia-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="dpia-diff"><div className="dpia-container"><ScrollReveal direction="up"><h2 className="dpia-diff-t">THE <span className="dpia-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="dpia-cmp-g"><ScrollReveal direction="left" delay={100}><div className="dpia-col dpia-col-t"><h3 className="dpia-col-h">Generic Privacy Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="dpia-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="dpia-col dpia-col-c"><h3 className="dpia-col-h dpia-col-ch">CyberAries DPIA Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="dpia-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="dpia-sec dpia-bg-w"><div className="dpia-container"><ScrollReveal direction="up"><div className="dpia-hdr"><h2 className="dpia-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="dpia-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="dpia-del-card"><div className="dpia-del-ic">{d.icon}</div><h4 className="dpia-dt">{d.title}</h4><ul className="dpia-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="dpia-cta"><div className="dpia-container"><ScrollReveal direction="up"><div className="dpia-cta-c"><h2 className="dpia-cta-t">Commission a Rigorous DPIA</h2><p className="dpia-cta-d">Ensure your high-risk processing activities are covered by supervisory-authority-standard DPIAs — conducted by privacy specialists with genuine regulatory experience.</p><button className="dpia-btn dpia-btn-p dpia-btn-lg" onClick={() => navigate('/contact')}>Request DPIA Services</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default DPIAServices;
