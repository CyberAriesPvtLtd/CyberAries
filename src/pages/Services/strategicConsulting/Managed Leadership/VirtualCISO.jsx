import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Database, Eye, Award, Globe, Settings, FileCheck, Target, Users
} from 'lucide-react';
import './VirtualCISO.css';

const challenges = [
    { icon: <Target size={40} />, title: 'The Security Leadership Gap', desc: 'Most mid-market organizations lack the budget for a full-time CISO — yet face board-level accountability, regulatory expectations, cyber insurance requirements, and enterprise customer security questionnaires demanding senior security leadership.' },
    { icon: <Settings size={40} />, title: 'Translating Security into Business Language', desc: 'Technical security teams struggle to communicate risk, investment priorities, and programme maturity to boards, audit committees, and C-suite stakeholders in business terms that drive informed decision-making.' },
    { icon: <Globe size={40} />, title: 'Regulatory Landscape Complexity', desc: 'Organizations face an expanding patchwork of regulatory requirements — DPDP Act, CERT-In directions, RBI cybersecurity frameworks, SEBI CSCRF, ISO 27001, SOC 2 — requiring coordinated compliance governance.' },
    { icon: <AlertTriangle size={40} />, title: 'Security Programme Governance', desc: 'Without strategic leadership, security programmes become a collection of tactical tools rather than a coherent risk management function aligned to business objectives and risk appetite.' },
    { icon: <Database size={40} />, title: 'Vendor & Third-Party Risk Management', desc: 'Managing the security risk of a growing supplier and technology vendor ecosystem requires a structured third-party risk programme under strategic leadership — not ad-hoc questionnaire reviews.' },
    { icon: <Users size={40} />, title: 'Security Culture & Board Engagement', desc: 'Building a security culture and maintaining board-level engagement requires leadership that can connect cybersecurity to business risk, governance obligations, and strategic objectives.' },
];

const framework = [
    { icon: <Settings size={40} />, title: 'Security Strategy & Roadmap', desc: 'Development of a multi-year cybersecurity strategy and roadmap — aligned to business objectives, risk appetite, and regulatory obligations — with prioritised investment recommendations.' },
    { icon: <Eye size={40} />, title: 'Risk Governance & Reporting', desc: 'Risk-based cybersecurity governance — risk register management, KRI/KPI dashboards, board and executive reporting, and audit committee presentations in business language.' },
    { icon: <Globe size={40} />, title: 'Regulatory Compliance Oversight', desc: 'Strategic oversight of all regulatory compliance obligations — DPDP Act, CERT-In, RBI, SEBI, ISO 27001 — ensuring coordinated programme management and regulatory engagement.' },
    { icon: <Users size={40} />, title: 'Security Programme Management', desc: 'Ownership of the full security programme — security architecture review, policy governance, awareness training programme, incident response preparedness, and budget management.' },
    { icon: <Database size={40} />, title: 'Third-Party Risk Management', desc: 'Structured TPRM programme — vendor risk assessment, security questionnaire management, contractual controls review, and ongoing vendor security monitoring.' },
    { icon: <Award size={40} />, title: 'Board & C-Suite Engagement', desc: 'Regular board briefings, audit committee reporting, and executive leadership engagement — translating technical security risk into business impact and governance accountability.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'Security Baseline Assessment', desc: 'Comprehensive assessment of your current security posture — reviewing existing controls, policies, compliance status, risk management maturity, and governance structure.' },
    { icon: <Target size={40} />, title: 'Strategy & Roadmap Development', desc: 'Develop a prioritised multi-year security strategy aligned to business objectives, risk appetite, and the regulatory framework obligations applicable to your organisation.' },
    { icon: <Settings size={40} />, title: 'Security Programme Architecture', desc: 'Design or restructure the security programme covering policies, standards, procedures, security architecture, awareness training, and incident response capabilities.' },
    { icon: <Globe size={40} />, title: 'Regulatory Compliance Programme', desc: 'Map all applicable regulatory obligations, develop a compliance programme calendar, coordinate audit preparation, and manage regulatory submissions and supervisory authority engagement.' },
    { icon: <Database size={40} />, title: 'Risk Management Framework', desc: 'Implement a risk-based security governance framework — risk register, risk appetite statement, KRIs, and a risk reporting cycle aligned to board and executive requirements.' },
    { icon: <Users size={40} />, title: 'Third-Party Risk Programme', desc: 'Design and operate a structured TPRM programme — vendor risk tiering, assessment questionnaires, contractual security requirements, and continuous monitoring.' },
    { icon: <Eye size={40} />, title: 'Security Awareness Programme', desc: 'Design and oversee a security awareness and training programme — phishing simulations, role-specific training, and executive security briefings.' },
    { icon: <Lock size={40} />, title: 'Incident Response Governance', desc: 'Establish or mature the incident response programme — playbooks, tabletop exercises, escalation paths, regulatory notification procedures, and cyber insurance alignment.' },
    { icon: <FileCheck size={40} />, title: 'Board & Executive Reporting', desc: 'Develop and deliver regular board security reports, audit committee briefings, and C-suite dashboards — communicating risk in business impact terms.' },
    { icon: <Award size={40} />, title: 'Continuous Advisory & Programme Evolution', desc: 'Ongoing vCISO advisory — attending leadership meetings, responding to incident escalations, managing the security programme, and evolving strategy as the threat and regulatory landscape changes.' },
];

const checklist = [
    'Current security posture baseline assessment',
    'Multi-year cybersecurity strategy and roadmap development',
    'Security policy and standards governance framework',
    'Risk register, risk appetite definition, and KRI reporting',
    'Regulatory compliance programme — DPDP Act, CERT-In, RBI, SEBI, ISO 27001',
    'Security architecture review and technology roadmap alignment',
    'Third-party risk management programme design and operation',
    'Security awareness and phishing simulation programme',
    'Incident response programme — playbooks, tabletop exercises, regulatory notifications',
    'Board and audit committee security reporting',
    'Cyber insurance alignment and security questionnaire support',
    'Ongoing strategic advisory and programme evolution',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Seasoned CISO Leadership', desc: 'Our vCISOs are experienced practitioners with CISO-level backgrounds across financial services, healthcare, technology, and critical infrastructure — bringing genuine strategic leadership, not junior advisory.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Deep Indian Regulatory Expertise', desc: 'We bring specialist knowledge of CERT-In, DPDP Act, RBI cybersecurity frameworks, SEBI CSCRF, and IRDAI guidelines — navigating India\'s complex regulatory landscape as a core vCISO capability.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Flexible Engagement Models', desc: 'We offer fractional vCISO engagements at the hours and intensity your organisation needs — from board-level strategy advisory to active programme management and day-to-day security leadership.' },
];

const trad = [
    'Security strategy based on technology preferences rather than business risk alignment.',
    'Board reporting consists of vulnerability counts without business risk context.',
    'Compliance obligations tracked in a spreadsheet without strategic programme governance.',
    'Third-party risk managed through ad-hoc questionnaires without tiering or ongoing monitoring.',
    'Security awareness limited to mandatory annual training without phishing simulation.',
    'Incident response plan exists on paper but leadership escalation paths not tested.',
];
const ca = [
    'Security strategy explicitly aligned to business objectives and board-approved risk appetite.',
    'Board reporting in business risk language — financial impact, regulatory exposure, probability.',
    'All regulatory obligations mapped to a governed compliance programme with clear ownership.',
    'Structured TPRM — vendor tiering, risk-weighted assessments, contractual controls, monitoring.',
    'Security awareness programme with phishing simulation, role-specific training, and metrics.',
    'Incident response governance tested via tabletops with regulatory notification procedures validated.',
];

const deliverables = [
    { icon: <Settings size={36} />, title: 'Strategy & Governance', items: ['Security Baseline Assessment Report', 'Multi-Year Security Strategy & Roadmap', 'Security Policy & Standards Suite', 'Risk Register & Risk Appetite Statement'] },
    { icon: <Globe size={36} />, title: 'Compliance & Risk', items: ['Regulatory Compliance Programme Calendar', 'KRI/KPI Dashboard & Reporting Framework', 'Third-Party Risk Assessment Programme', 'Vendor Security Questionnaire Toolkit'] },
    { icon: <Users size={36} />, title: 'People & Culture', items: ['Security Awareness Training Programme', 'Phishing Simulation Programme', 'Incident Response Playbooks & Tabletops', 'Security Champion Programme Design'] },
    { icon: <Award size={36} />, title: 'Leadership & Reporting', items: ['Board Security Report Templates', 'Audit Committee Briefing Packs', 'Executive Security Dashboard', 'Cyber Insurance Alignment Review'] },
];

const VirtualCISO = () => {
    const navigate = useNavigate();
    return (
        <div className="vcso-page">
            <section className="vcso-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="vcso-hero-bg" />
                <div className="vcso-container">
                    <p className="vcso-eyebrow">Strategic Consulting — Managed Leadership</p>
                    <h1 className="vcso-hero-title">VIRTUAL CISO <span className="vcso-grad">SERVICES</span></h1>
                    <p className="vcso-hero-desc">A <strong>Virtual Chief Information Security Officer (vCISO)</strong> provides strategic cybersecurity leadership on a fractional basis — giving your organisation CISO-level expertise, board engagement capability, and regulatory knowledge without the full-time cost. vCISO services are increasingly demanded by cyber insurers, enterprise customers, and regulators as evidence of security programme governance.</p>
                    <p className="vcso-hero-desc">Our <strong>vCISO practice</strong> delivers genuine strategic security leadership — security strategy and roadmap, risk governance and board reporting, regulatory compliance programme management, third-party risk management, security awareness, and ongoing executive advisory — calibrated to your organisation's scale and risk profile.</p>
                    <div className="vcso-actions">
                        <button className="vcso-btn vcso-btn-p" onClick={() => navigate('/contact')}>Engage a Virtual CISO</button>
                        <button className="vcso-btn vcso-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="vcso-sec vcso-bg-w"><div className="vcso-container"><ScrollReveal direction="up"><div className="vcso-hdr"><h2 className="vcso-title">Security Leadership Challenges</h2><p className="vcso-desc">Mid-market and growth-stage organisations face board-level accountability and regulatory expectations without access to full-time CISO leadership</p></div></ScrollReveal><div className="vcso-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="vcso-ch-card"><div className="vcso-ic">{c.icon}</div><h3 className="vcso-ct">{c.title}</h3><p className="vcso-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="vcso-sec vcso-bg-p"><div className="vcso-container"><ScrollReveal direction="up"><div className="vcso-hdr"><h2 className="vcso-title">Our vCISO Service Framework</h2><p className="vcso-desc">Comprehensive strategic security leadership — from risk governance and regulatory compliance through board reporting and programme management</p></div></ScrollReveal><div className="vcso-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="vcso-cmp-card"><div className="vcso-ic">{c.icon}</div><h3 className="vcso-ct">{c.title}</h3><p className="vcso-cd">{c.desc}</p><div className="vcso-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="vcso-sec vcso-bg-w"><div className="vcso-container"><ScrollReveal direction="up"><div className="vcso-hdr"><h2 className="vcso-title">Our vCISO Engagement Approach</h2><p className="vcso-desc">A structured 10-step engagement — from security baseline through ongoing strategic advisory</p></div></ScrollReveal><div className="vcso-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="vcso-ap-card"><div className="vcso-sn">{String(i + 1).padStart(2, '0')}</div><div className="vcso-ic">{a.icon}</div><h3 className="vcso-ct">{a.title}</h3><p className="vcso-cd">{a.desc}</p><div className="vcso-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="vcso-sec vcso-bg-p"><div className="vcso-container"><ScrollReveal direction="up"><div className="vcso-hdr"><h2 className="vcso-title">vCISO Programme Checklist</h2><p className="vcso-desc">Complete strategic security leadership coverage across strategy, risk, compliance, and board engagement</p></div></ScrollReveal><div className="vcso-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="vcso-chk-item"><div className="vcso-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="vcso-sec vcso-bg-w"><div className="vcso-container"><ScrollReveal direction="up"><div className="vcso-hdr"><h2 className="vcso-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="vcso-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="vcso-why-card"><div className="vcso-why-ic">{w.icon}</div><h3 className="vcso-wt">{w.title}</h3><p className="vcso-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="vcso-diff"><div className="vcso-container"><ScrollReveal direction="up"><h2 className="vcso-diff-t">THE <span className="vcso-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="vcso-cmp-g"><ScrollReveal direction="left" delay={100}><div className="vcso-col vcso-col-t"><h3 className="vcso-col-h">Typical Security Advisory</h3><ul>{trad.map((t, i) => <li key={i}><span className="vcso-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="vcso-col vcso-col-c"><h3 className="vcso-col-h vcso-col-ch">CyberAries vCISO Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="vcso-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="vcso-sec vcso-bg-w"><div className="vcso-container"><ScrollReveal direction="up"><div className="vcso-hdr"><h2 className="vcso-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="vcso-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="vcso-del-card"><div className="vcso-del-ic">{d.icon}</div><h4 className="vcso-dt">{d.title}</h4><ul className="vcso-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="vcso-cta"><div className="vcso-container"><ScrollReveal direction="up"><div className="vcso-cta-c"><h2 className="vcso-cta-t">Get Strategic Security Leadership</h2><p className="vcso-cta-d">Bring CISO-level expertise to your organisation on a flexible basis — building a security programme that satisfies boards, regulators, and customers.</p><button className="vcso-btn vcso-btn-p vcso-btn-lg" onClick={() => navigate('/contact')}>Engage a Virtual CISO</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default VirtualCISO;
