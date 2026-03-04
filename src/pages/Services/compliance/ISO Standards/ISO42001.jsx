import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Database, Globe, Target, BookOpen } from 'lucide-react';
import './ISO42001.css';

const challenges = [
    { icon: <Target size={40} />, title: 'AI System Scope & Inventory', desc: 'Identifying and inventorying all AI systems across the organization — including third-party AI, ML pipelines, and embedded AI features — is foundational but deeply complex in modern enterprises.' },
    { icon: <AlertTriangle size={40} />, title: 'AI Risk Assessment Methodology', desc: 'Applying a structured risk assessment tailored to AI-specific risks — model bias, explainability failures, data poisoning, adversarial attacks, and unintended outcomes — requires specialized AI governance expertise.' },
    { icon: <FileText size={40} />, title: 'AI Policy & Governance Framework', desc: 'Developing board-level AI policies, ethical AI principles, and governance structures that satisfy ISO 42001 requirements while remaining practical for AI development and deployment teams.' },
    { icon: <Shield size={40} />, title: 'Responsible AI Controls', desc: 'Implementing controls for fairness, transparency, explainability, human oversight, accountability, and data quality across diverse AI use cases — from predictive models to generative AI deployments.' },
    { icon: <Users size={40} />, title: 'Third-Party AI Risk Management', desc: 'Managing AI risks introduced through third-party models, foundation models, APIs, and AI-enabled SaaS — assessing their trustworthiness, data handling, and bias mitigation measures.' },
    { icon: <RefreshCw size={40} />, title: 'Continual AI Risk Monitoring', desc: 'Establishing ongoing AI performance monitoring, fairness audits, and model drift detection processes to maintain responsible AI operations post-certification.' },
];

const components = [
    { icon: <Target size={40} />, title: 'AIMS Scope & AI Inventory', desc: 'Defining the AI Management System scope and building a comprehensive AI system inventory — covering all AI systems, their purposes, data inputs, and stakeholder impact.' },
    { icon: <AlertTriangle size={40} />, title: 'AI Risk Assessment', desc: 'Structured risk assessment methodology addressing AI-specific risks: bias, explainability, data poisoning, privacy, safety, and unintended outcomes.' },
    { icon: <FileText size={40} />, title: 'AI Policy & Ethical Framework', desc: 'Board-approved AI Policy, AI Ethics Principles, AI Use Case Approval Process, and Responsible AI Guidelines aligned with ISO 42001 requirements.' },
    { icon: <Shield size={40} />, title: 'Responsible AI Controls', desc: 'Implementation of controls for transparency, fairness, human oversight, accountability, data quality, and AI output validation across all in-scope AI systems.' },
    { icon: <Globe size={40} />, title: 'Third-Party AI Governance', desc: 'Framework for assessing, governing, and monitoring third-party AI models, APIs, and AI-enabled vendors — including foundation model usage policies.' },
    { icon: <RefreshCw size={40} />, title: 'AI Performance & Continual Improvement', desc: 'AI monitoring programme covering model performance, fairness metrics, bias detection, and structured improvement processes for ongoing AIMS effectiveness.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'AI Landscape Discovery & Gap Analysis', desc: 'Complete AI system discovery across the organization, followed by a structured gap assessment against ISO 42001:2023 AIMS requirements.' },
    { icon: <Target size={40} />, title: 'AIMS Scope & Context Definition', desc: 'Define organizational context, AI-specific interested parties, AIMS scope boundaries, and AI management objectives.' },
    { icon: <Database size={40} />, title: 'AI System Inventory & Classification', desc: 'Build comprehensive AI inventory with classification by risk level, use case, data sensitivity, operational impact, and regulatory exposure.' },
    { icon: <AlertTriangle size={40} />, title: 'AI Risk Assessment', desc: 'Conduct structured AI risk assessments for all in-scope systems — covering model bias, explainability, data quality, security, safety, and misuse risks.' },
    { icon: <BookOpen size={40} />, title: 'AI Policy & Ethics Framework', desc: 'Develop board-approved AI Policy, AI Ethics Principles, Use Case Approval Framework, and Generative AI Usage Guidelines.' },
    { icon: <Shield size={40} />, title: 'Responsible AI Controls Implementation', desc: 'Implement controls for fairness, transparency, human oversight, accountability, and data quality across all in-scope AI systems and pipelines.' },
    { icon: <Globe size={40} />, title: 'Third-Party AI Risk Management', desc: 'Establish third-party AI assessment framework, foundation model governance policies, and vendor AI risk attestation processes.' },
    { icon: <Eye size={40} />, title: 'AI Monitoring & Performance Management', desc: 'Deploy AI monitoring for model drift, performance degradation, fairness metrics, and unexpected output detection with alert and review processes.' },
    { icon: <FileCheck size={40} />, title: 'Internal Audit', desc: 'AIMS internal audit against all ISO 42001:2023 clauses and Annex A controls with nonconformity reporting and corrective action management.' },
    { icon: <Award size={40} />, title: 'Certification Audit Support', desc: 'Stage 1 and Stage 2 certification audit support with pre-audit readiness review, document preparation, and on-site auditor liaison.' },
];

const checklist = [
    'AI system discovery and comprehensive AI inventory across all business functions',
    'Gap analysis against ISO 42001:2023 AIMS clauses and Annex A controls',
    'AIMS scope definition covering all organizational AI use cases',
    'AI-specific risk assessment covering bias, explainability, safety, and data risks',
    'Board-approved AI Policy and AI Ethics Principles documentation',
    'AI Use Case Approval and Review Process implementation',
    'Responsible AI controls — fairness, transparency, human oversight, accountability',
    'Generative AI governance framework and acceptable use policy',
    'Third-party AI and foundation model risk assessment process',
    'AI monitoring programme — performance, fairness, model drift detection',
    'Internal AIMS audit against all ISO 42001:2023 requirements',
    'ISO 42001:2023 certification Stage 1 & Stage 2 audit support',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'AI Governance Specialists', desc: 'Our team combines ISO 42001 implementation expertise with practical AI/ML engineering knowledge — delivering governance that works in real AI development and deployment environments.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Responsible AI by Design', desc: 'We embed responsible AI principles — fairness, transparency, human oversight — into your AI development lifecycle rather than bolting compliance onto existing systems.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Future-Proof AI Compliance', desc: 'Our AIMS framework is designed to accommodate emerging AI regulations — EU AI Act, India\'s AI regulatory landscape — building governance that scales with AI adoption.' },
];

const trad = [
    'AI governance policies written without input from AI development teams.',
    'AI risk assessment applied using generic IT risk frameworks unsuited to AI.',
    'AI inventory limited to known production systems, missing embedded and third-party AI.',
    'Responsible AI controls defined on paper without technical integration into ML pipelines.',
    'Foundation model and third-party AI risks not addressed in the governance framework.',
    'AIMS abandoned post-certification as AI systems evolve without governance updates.',
];
const ca = [
    'AI policies co-developed with data science, engineering, and governance stakeholders.',
    'AI-specific risk assessment methodology addressing bias, explainability, and safety risks.',
    'Comprehensive AI discovery including embedded features, APIs, and third-party models.',
    'Responsible AI controls technically integrated into ML pipelines and deployment workflows.',
    'Foundation model governance and third-party AI risk assessment included as standard.',
    'Post-certification AI monitoring and governance update process keeping AIMS current.',
];

const deliverables = [
    { icon: <FileText size={36} />, title: 'AIMS Documentation', items: ['AI Management System Policy & Manual', 'AI System Inventory & Classification Register', 'AI Risk Assessment Report', 'Statement of Applicability — Annex A Controls'] },
    { icon: <Shield size={36} />, title: 'AI Governance Framework', items: ['AI Ethics Principles & Guidelines', 'AI Use Case Approval Framework', 'Generative AI Usage Policy', 'Third-Party AI Risk Assessment Framework'] },
    { icon: <Eye size={36} />, title: 'Monitoring & Controls', items: ['AI Performance & Fairness Monitoring Framework', 'Model Drift Detection & Alert Programme', 'Human Oversight & Escalation Procedures', 'AI Incident Response Process'] },
    { icon: <Award size={36} />, title: 'Certification Support', items: ['Internal AIMS Audit Reports', 'Nonconformity & Corrective Actions Register', 'Stage 1 & Stage 2 Audit Preparation', 'Continual AI Governance Improvement Plan'] },
];

const ISO42001 = () => {
    const navigate = useNavigate();
    return (
        <div className="i420-page">
            <section className="i420-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="i420-hero-bg" />
                <div className="i420-container">
                    <p className="i420-eyebrow">Compliance — ISO Standards</p>
                    <h1 className="i420-hero-title">ISO 42001 <span className="i420-grad">AI GOVERNANCE CERTIFICATION</span></h1>
                    <p className="i420-hero-desc">ISO/IEC 42001:2023 is the <strong>world's first international standard for Artificial Intelligence Management Systems (AIMS)</strong>. Certification demonstrates that your organization systematically governs AI development and deployment — ensuring responsible, transparent, and accountable AI across the enterprise.</p>
                    <p className="i420-hero-desc">Our ISO 42001 practice delivers <strong>end-to-end AIMS implementation</strong> — from AI discovery and risk assessment through policy development, responsible AI controls, third-party AI governance, and certification audit support — purpose-built for the AI era.</p>
                    <div className="i420-actions">
                        <button className="i420-btn i420-btn-p" onClick={() => navigate('/contact')}>Schedule an AI Governance Assessment</button>
                        <button className="i420-btn i420-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="i420-sec i420-bg-w"><div className="i420-container"><ScrollReveal direction="up"><div className="i420-hdr"><h2 className="i420-title">ISO 42001 AI Governance Challenges</h2><p className="i420-desc">Organizations deploying AI systems face complex governance challenges addressed by ISO 42001:2023</p></div></ScrollReveal><div className="i420-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="i420-ch-card"><div className="i420-ic">{c.icon}</div><h3 className="i420-ct">{c.title}</h3><p className="i420-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="i420-sec i420-bg-p"><div className="i420-container"><ScrollReveal direction="up"><div className="i420-hdr"><h2 className="i420-title">Our ISO 42001 AIMS Framework</h2><p className="i420-desc">A comprehensive AI Management System framework covering all ISO 42001:2023 clauses and Annex A responsible AI controls</p></div></ScrollReveal><div className="i420-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="i420-cmp-card"><div className="i420-ic">{c.icon}</div><h3 className="i420-ct">{c.title}</h3><p className="i420-cd">{c.desc}</p><div className="i420-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="i420-sec i420-bg-w"><div className="i420-container"><ScrollReveal direction="up"><div className="i420-hdr"><h2 className="i420-title">Our Implementation Methodology</h2><p className="i420-desc">A proven 10-step methodology from AI discovery through ISO 42001 certification success</p></div></ScrollReveal><div className="i420-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="i420-ap-card"><div className="i420-sn">{String(i + 1).padStart(2, '0')}</div><div className="i420-ic">{a.icon}</div><h3 className="i420-ct">{a.title}</h3><p className="i420-cd">{a.desc}</p><div className="i420-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="i420-sec i420-bg-p"><div className="i420-container"><ScrollReveal direction="up"><div className="i420-hdr"><h2 className="i420-title">ISO 42001 Coverage Checklist</h2><p className="i420-desc">Complete coverage of ISO 42001:2023 AIMS requirements across all clauses and Annex A responsible AI controls</p></div></ScrollReveal><div className="i420-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="i420-chk-item"><div className="i420-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="i420-sec i420-bg-w"><div className="i420-container"><ScrollReveal direction="up"><div className="i420-hdr"><h2 className="i420-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="i420-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="i420-why-card"><div className="i420-why-ic">{w.icon}</div><h3 className="i420-wt">{w.title}</h3><p className="i420-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="i420-diff"><div className="i420-container"><ScrollReveal direction="up"><h2 className="i420-diff-t">THE <span className="i420-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="i420-cmp-g"><ScrollReveal direction="left" delay={100}><div className="i420-col i420-col-t"><h3 className="i420-col-h">Generic Compliance Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="i420-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="i420-col i420-col-c"><h3 className="i420-col-h i420-col-ch">CyberAries ISO 42001 AIMS Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="i420-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="i420-sec i420-bg-w"><div className="i420-container"><ScrollReveal direction="up"><div className="i420-hdr"><h2 className="i420-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="i420-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="i420-del-card"><div className="i420-del-ic">{d.icon}</div><h4 className="i420-dt">{d.title}</h4><ul className="i420-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="i420-cta"><div className="i420-container"><ScrollReveal direction="up"><div className="i420-cta-c"><h2 className="i420-cta-t">Achieve ISO 42001:2023 AI Governance Certification</h2><p className="i420-cta-d">Build responsible AI governance and achieve world's first AI management standard certification with our AI governance specialists.</p><button className="i420-btn i420-btn-p i420-btn-lg" onClick={() => navigate('/contact')}>Request AI Governance Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default ISO42001;
