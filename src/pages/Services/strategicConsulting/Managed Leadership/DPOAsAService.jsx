import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Lock, AlertTriangle, CheckCircle,
    Database, Eye, Award, Globe, Settings, FileCheck, Target, Users
} from 'lucide-react';
import './DPOAsAService.css';

const challenges = [
    { icon: <Target size={40} />, title: 'DPO Appointment Obligation', desc: 'GDPR Article 37 mandates DPO appointment for public authorities, organisations conducting large-scale systematic monitoring, or large-scale processing of special category data — yet many organisations struggle to identify whether they are obligated or to find qualified candidates.' },
    { icon: <Users size={40} />, title: 'DPO Independence Requirement', desc: 'The DPO must operate with full independence — reporting directly to the highest management level and not being instructed on how to perform DPO tasks. Internal appointments often create conflicts of interest.' },
    { icon: <Globe size={40} />, title: 'Multi-Jurisdictional Privacy Expertise', desc: 'A DPO must maintain expert knowledge of data protection law — GDPR, applicable national derogations, sector-specific rules — across the jurisdictions where the organisation operates, including the rapidly evolving DPDP Act in India.' },
    { icon: <AlertTriangle size={40} />, title: 'Supervisory Authority Contact Point', desc: 'The DPO is the formal contact point for the supervisory authority — managing inquiries, investigation responses, DPIA consultations, and prior consultation procedures. Inadequate DPO engagement increases regulatory risk.' },
    { icon: <Settings size={40} />, title: 'Operationalising Privacy Governance', desc: 'The DPO must monitor compliance, provide advice, and cooperate with supervisory authorities — requiring active operational engagement with processing activities, not merely a titular appointment.' },
    { icon: <Database size={40} />, title: 'DPDP Act DPO/Grievance Officer Requirements', desc: 'India\'s DPDP Act requires Significant Data Fiduciaries to appoint a DPO — and all Data Fiduciaries to designate a grievance officer. Operationalising these Indian requirements requires combined GDPR and DPDP Act expertise.' },
];

const framework = [
    { icon: <Users size={40} />, title: 'DPO Role & Regulatory Compliance', desc: 'Fulfil the legal DPO role — formal appointment documentation, supervisory authority registration, and GDPR/DPDP Act DPO obligation compliance assessment across your entire processing estate.' },
    { icon: <Eye size={40} />, title: 'Compliance Monitoring', desc: 'Ongoing monitoring of data processing activities for compliance with GDPR, DPDP Act, and applicable sector regulations — reviewing processing operations, policies, and procedures.' },
    { icon: <FileText size={40} />, title: 'Privacy Governance Advisory', desc: 'DPO advisory on all matters relating to personal data processing — reviewing new projects, advising on lawful basis, consent design, data retention, and privacy impact assessments.' },
    { icon: <Globe size={40} />, title: 'Supervisory Authority Liaison', desc: 'Management of all supervisory authority communications — inquiry responses, investigation management, prior consultation submissions, and breach notifications to the relevant DPA or Data Protection Board.' },
    { icon: <Lock size={40} />, title: 'Data Subject Rights & DPIA Support', desc: 'Overseeing Data Subject/Data Principal rights request handling and leading or reviewing DPIAs — ensuring DPO consultation is documented in the DPIA record as required by GDPR Article 35.' },
    { icon: <Award size={40} />, title: 'Training & Awareness', desc: 'Conducting or coordinating GDPR/DPDP Act training for all staff involved in processing personal data — ensuring the organisation has documented awareness across the workforce.' },
];

const approach = [
    { icon: <Target size={40} />, title: 'DPO Obligation Assessment', desc: 'Determine whether GDPR DPO appointment is mandatory or voluntary for your organisation, and whether Indian DPDP Act Significant Data Fiduciary DPO or grievance officer obligations apply.' },
    { icon: <FileText size={40} />, title: 'DPO Appointment Documentation', desc: 'Prepare and publish DPO appointment documentation — role description, independence declaration, supervisory authority registration, and internal communication of DPO contact details.' },
    { icon: <Eye size={40} />, title: 'Processing Activity Orientation', desc: 'Orient the DPO to all personal data processing activities — reviewing the ROPA, existing policies, consent mechanisms, and DSR procedures to establish the required expert knowledge base.' },
    { icon: <Settings size={40} />, title: 'Compliance Monitoring Programme', desc: 'Establish a structured compliance monitoring programme — periodic review of processing activities, policy updates, new system assessments, and GDPR/DPDP Act compliance calendar.' },
    { icon: <Globe size={40} />, title: 'Supervisory Authority Registration', desc: 'Register the DPO with all relevant supervisory authorities as required and establish a protocol for managing inquiries, investigations, and prior consultation requests.' },
    { icon: <FileCheck size={40} />, title: 'DPIA Programme Oversight', desc: 'Review and approve DPIAs for all high-risk processing activities, ensuring DPO consultation is documented and mitigation measures are adequate before processing begins.' },
    { icon: <Users size={40} />, title: 'DSR & Grievance Redressal Oversight', desc: 'Oversee Data Subject/Data Principal rights request fulfilment — reviewing DSR procedures, monitoring response timelines, and escalating edge cases where DPO guidance is required.' },
    { icon: <Lock size={40} />, title: 'Training & Awareness Delivery', desc: 'Conduct or coordinate GDPR/DPDP Act training for all processing-role staff — awareness training, role-specific modules for privacy, legal, HR, and IT teams, with training completion records.' },
    { icon: <AlertTriangle size={40} />, title: 'Breach Notification Management', desc: 'Lead the DPO\'s role in breach response — advising on the four-factor risk assessment, supervisory authority notification content and timing, and Data Subject communication decisions.' },
    { icon: <Award size={40} />, title: 'Ongoing DPO Advisory & Representation', desc: 'Continuous DPO advisory for all new processing activities, system changes, contracts, and business decisions involving personal data — representing the DPO role at leadership meetings.' },
];

const checklist = [
    'GDPR DPO obligation assessment — mandatory vs. voluntary appointment',
    'DPDP Act DPO and grievance officer obligation review (Significant Data Fiduciaries)',
    'DPO appointment documentation and supervisory authority registration',
    'Personal data processing activity orientation and ROPA review',
    'Compliance monitoring programme — periodic reviews and compliance calendar',
    'Advisory on all new projects, systems, and business changes involving personal data',
    'DPIA oversight — DPO consultation documented and mitigation reviewed',
    'Data Subject/Data Principal rights oversight — DSR procedure review and monitoring',
    'Grievance redressal mechanism operation (DPDP Act)',
    'Supervisory authority inquiry and investigation management',
    'Breach notification — DPO advisory on assessment, notification, and communication',
    'Workforce GDPR/DPDP Act training programme with completion records',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'Qualified, Experienced DPOs', desc: 'Our DPOs hold recognised privacy qualifications (CIPP/E, CIPM) and have served as DPO for organisations across financial services, healthcare, technology, and media — bringing genuine expertise, not nominal compliance.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Dual GDPR & DPDP Act Expertise', desc: 'We provide DPO services covering both GDPR (for EU operations) and DPDP Act (for Indian operations) — serving organisations with dual regulatory exposure through a single service relationship.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'True DPO Independence', desc: 'As an external DPO, CyberAries operates with the full independence required by GDPR Article 38 — without the conflicts of interest that frequently compromise internal DPO appointments.' },
];

const trad = [
    'DPO appointed in name only — no active compliance monitoring or processing activity review.',
    'DPO not consulted on new projects — data protection risks materialise without early input.',
    'DSR procedures exist but DPO not involved in oversight — response timelines missed.',
    'DPIAs conducted without documented DPO consultation — GDPR Article 35 requirement missed.',
    'Breach notifications drafted by legal team without DPO \'s risk assessment involvement.',
    'Training delivered annually without DPO oversight — training records not maintained.',
];
const ca = [
    'DPO actively monitors processing activities — reviewing new systems, policies, and data flows.',
    'All new projects assessed for data protection risk before launch — DPO input formally documented.',
    'DSR programme overseen by DPO with response audit logs and escalation protocol.',
    'DPIA DPO consultation formally documented for every high-risk processing assessment.',
    'Breach notification led by DPO — four-factor assessment, supervisory authority draft, decision record.',
    'Training programme designed and overseen by DPO — completion records maintained.',
];

const deliverables = [
    { icon: <Users size={36} />, title: 'DPO Role & Documentation', items: ['DPO Appointment Documentation', 'Supervisory Authority Registration', 'DPO Independence Declaration', 'DPDP Act Grievance Officer Designation'] },
    { icon: <Eye size={36} />, title: 'Compliance & Advisory', items: ['Compliance Monitoring Programme', 'New Project Privacy Assessment', 'DPIA Review & DPO Consultation Record', 'Annual GDPR/DPDP Act Compliance Review'] },
    { icon: <FileText size={36} />, title: 'Rights & Governance', items: ['DSR/Data Principal Rights Oversight', 'Grievance Redressal Programme', 'Supervisory Authority Correspondence', 'Breach Notification Management'] },
    { icon: <Award size={36} />, title: 'Training & Reporting', items: ['GDPR/DPDP Act Training Programme', 'Training Completion Records', 'DPO Activity Report', 'Board Privacy Governance Summary'] },
];

const DPOAsAService = () => {
    const navigate = useNavigate();
    return (
        <div className="dpoa-page">
            <section className="dpoa-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="dpoa-hero-bg" />
                <div className="dpoa-container">
                    <p className="dpoa-eyebrow">Strategic Consulting — Managed Leadership</p>
                    <h1 className="dpoa-hero-title">DPO AS A <span className="dpoa-grad">SERVICE</span></h1>
                    <p className="dpoa-hero-desc">A <strong>Data Protection Officer (DPO)</strong> is a mandatory appointment under GDPR for qualifying organisations and under India's DPDP Act for Significant Data Fiduciaries. The DPO must be an expert in data protection law, operate with full independence, and serve as the formal contact point for supervisory authorities — obligations that nominal internal appointments frequently fail to fulfil.</p>
                    <p className="dpoa-hero-desc">Our <strong>DPO-as-a-Service</strong> provides a qualified, truly independent external DPO — covering GDPR DPO obligations and DPDP Act requirements. Services include compliance monitoring, new project advisory, DPIA oversight, DSR management, supervisory authority liaison, breach notification management, and workforce training.</p>
                    <div className="dpoa-actions">
                        <button className="dpoa-btn dpoa-btn-p" onClick={() => navigate('/contact')}>Appoint a DPO</button>
                        <button className="dpoa-btn dpoa-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="dpoa-sec dpoa-bg-w"><div className="dpoa-container"><ScrollReveal direction="up"><div className="dpoa-hdr"><h2 className="dpoa-title">DPO Appointment Challenges</h2><p className="dpoa-desc">Organisations face significant challenges meeting the independence, expertise, and active engagement requirements of the DPO role</p></div></ScrollReveal><div className="dpoa-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="dpoa-ch-card"><div className="dpoa-ic">{c.icon}</div><h3 className="dpoa-ct">{c.title}</h3><p className="dpoa-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="dpoa-sec dpoa-bg-p"><div className="dpoa-container"><ScrollReveal direction="up"><div className="dpoa-hdr"><h2 className="dpoa-title">Our DPO Service Framework</h2><p className="dpoa-desc">Comprehensive DPO-as-a-Service covering all GDPR and DPDP Act DPO obligations with genuine independence and expert engagement</p></div></ScrollReveal><div className="dpoa-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="dpoa-cmp-card"><div className="dpoa-ic">{c.icon}</div><h3 className="dpoa-ct">{c.title}</h3><p className="dpoa-cd">{c.desc}</p><div className="dpoa-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="dpoa-sec dpoa-bg-w"><div className="dpoa-container"><ScrollReveal direction="up"><div className="dpoa-hdr"><h2 className="dpoa-title">Our DPO Engagement Approach</h2><p className="dpoa-desc">A structured 10-step DPO engagement — from obligation assessment through ongoing compliance monitoring and supervisory authority liaison</p></div></ScrollReveal><div className="dpoa-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="dpoa-ap-card"><div className="dpoa-sn">{String(i + 1).padStart(2, '0')}</div><div className="dpoa-ic">{a.icon}</div><h3 className="dpoa-ct">{a.title}</h3><p className="dpoa-cd">{a.desc}</p><div className="dpoa-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="dpoa-sec dpoa-bg-p"><div className="dpoa-container"><ScrollReveal direction="up"><div className="dpoa-hdr"><h2 className="dpoa-title">DPO Service Checklist</h2><p className="dpoa-desc">Complete DPO role coverage across GDPR and DPDP Act obligations</p></div></ScrollReveal><div className="dpoa-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="dpoa-chk-item"><div className="dpoa-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="dpoa-sec dpoa-bg-w"><div className="dpoa-container"><ScrollReveal direction="up"><div className="dpoa-hdr"><h2 className="dpoa-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="dpoa-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="dpoa-why-card"><div className="dpoa-why-ic">{w.icon}</div><h3 className="dpoa-wt">{w.title}</h3><p className="dpoa-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="dpoa-diff"><div className="dpoa-container"><ScrollReveal direction="up"><h2 className="dpoa-diff-t">THE <span className="dpoa-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="dpoa-cmp-g"><ScrollReveal direction="left" delay={100}><div className="dpoa-col dpoa-col-t"><h3 className="dpoa-col-h">Nominal DPO Appointments</h3><ul>{trad.map((t, i) => <li key={i}><span className="dpoa-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="dpoa-col dpoa-col-c"><h3 className="dpoa-col-h dpoa-col-ch">CyberAries DPO-as-a-Service</h3><ul>{ca.map((t, i) => <li key={i}><span className="dpoa-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="dpoa-sec dpoa-bg-w"><div className="dpoa-container"><ScrollReveal direction="up"><div className="dpoa-hdr"><h2 className="dpoa-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="dpoa-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="dpoa-del-card"><div className="dpoa-del-ic">{d.icon}</div><h4 className="dpoa-dt">{d.title}</h4><ul className="dpoa-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="dpoa-cta"><div className="dpoa-container"><ScrollReveal direction="up"><div className="dpoa-cta-c"><h2 className="dpoa-cta-t">Appoint a Qualified, Independent DPO</h2><p className="dpoa-cta-d">Meet your GDPR and DPDP Act DPO obligations with an experienced, truly independent external DPO who actively fulfils the role requirements.</p><button className="dpoa-btn dpoa-btn-p dpoa-btn-lg" onClick={() => navigate('/contact')}>Appoint Your DPO</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default DPOAsAService;
