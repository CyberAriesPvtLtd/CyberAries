import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Database, Globe, Target } from 'lucide-react';
import './SOC1.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Financial Reporting Controls Scoping', desc: 'Identifying which IT general controls, application controls, and business process controls are in scope for the SOC 1 examination as they relate to user entities\' financial reporting.' },
    { icon: <FileText size={40} />, title: 'Control Design vs. Operating Effectiveness', desc: 'SOC 1 Type II requires demonstrating that controls not only exist but operated effectively over the review period — demanding rigorous documentation and continuous evidence collection.' },
    { icon: <Users size={40} />, title: 'User Entity Control Responsibilities', desc: 'Documenting complementary user entity controls (CUECs) and ensuring the SOC 1 report clearly communicates what customers must implement for controls to be effective.' },
    { icon: <Database size={40} />, title: 'Evidence Collection & Documentation', desc: 'Systematically collecting and organizing evidence of control operation across the entire audit period without disrupting operational workflows.' },
    { icon: <AlertTriangle size={40} />, title: 'Change Management & Exceptions', desc: 'Managing control exceptions, deviations, and changes to the control environment during the SOC 1 audit period without triggering material exceptions in the final report.' },
    { icon: <RefreshCw size={40} />, title: 'Annual Audit Cycle Management', desc: 'Maintaining continuous readiness for annual SOC 1 renewals and managing the relationship with the independent CPA firm conducting the examination.' },
];

const components = [
    { icon: <Target size={40} />, title: 'Scope Definition', desc: 'Defining the SOC 1 service description scope — covering in-scope systems, controls relevant to financial reporting, and CUEC documentation.' },
    { icon: <FileText size={40} />, title: 'Control Environment Assessment', desc: 'Structured assessment of existing ITGC and application controls against SSAE 18 requirements, identifying design gaps and operating effectiveness weaknesses.' },
    { icon: <Settings size={40} />, title: 'Control Design & Implementation', desc: 'Design and implementation of financial reporting-relevant controls across IT operations, change management, access, availability, and processing integrity.' },
    { icon: <Eye size={40} />, title: 'Evidence Collection Framework', desc: 'Systematic evidence collection framework ensuring continuous capture of control operation evidence across the entire SOC 1 audit period.' },
    { icon: <FileCheck size={40} />, title: 'Readiness Assessment', desc: 'Pre-audit readiness assessment simulating auditor testing of control design and operating effectiveness — eliminating surprises in the formal examination.' },
    { icon: <Award size={40} />, title: 'Auditor Liaison & Management', desc: 'Selection of qualified CPA firm, engagement management, auditor request fulfilment, and management response to any identified exceptions.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'Readiness Assessment', desc: 'Baseline assessment of current control environment against SOC 1/SSAE 18 requirements — identifying design gaps and operating effectiveness weaknesses.' },
    { icon: <Target size={40} />, title: 'Service Description & Scope', desc: 'Develop the SOC 1 system description covering infrastructure, software, people, processes, and controls relevant to financial reporting.' },
    { icon: <FileText size={40} />, title: 'Control Inventory Development', desc: 'Comprehensive inventory of all controls within scope — ITGC, application controls, business process controls — with control owners and testing procedures.' },
    { icon: <AlertTriangle size={40} />, title: 'Control Gap Remediation', desc: 'Remediate all control design gaps identified in the readiness assessment before the formal SOC 1 examination period begins.' },
    { icon: <Database size={40} />, title: 'Evidence Collection Programme', desc: 'Implement systematic evidence collection workflows for all in-scope controls, ensuring auditable documentation throughout the examination period.' },
    { icon: <Users size={40} />, title: 'CUEC Documentation', desc: 'Document complementary user entity controls clearly and accurately, ensuring customers understand their responsibilities for SOC 1 controls to be effective.' },
    { icon: <Settings size={40} />, title: 'Change & Exception Management', desc: 'Establish procedures for managing control environment changes and tracking exceptions during the audit period to minimize report qualifications.' },
    { icon: <Eye size={40} />, title: 'Pre-Audit Readiness Testing', desc: 'Simulate auditor testing of control operating effectiveness across the examination period, identifying and remediating remaining weaknesses.' },
    { icon: <FileCheck size={40} />, title: 'Auditor Management & Support', desc: 'Manage the CPA firm relationship, coordinate auditor information requests, and provide guidance on management responses to findings.' },
    { icon: <Award size={40} />, title: 'Report Issuance & Customer Distribution', desc: 'Review and finalize SOC 1 report content, management representation letter, and establish secure distribution process for customer delivery.' },
];

const checklist = [
    'SOC 1/SSAE 18 readiness assessment against financial reporting control requirements',
    'Service description development covering all in-scope systems and processes',
    'Control inventory covering ITGC, application controls, and business process controls',
    'Control design gap identification and remediation before examination period',
    'Evidence collection framework and documentation procedures for all controls',
    'Complementary user entity controls (CUEC) documentation',
    'Change management controls for control environment modifications during audit period',
    'Exception and deviation tracking and management procedures',
    'Pre-audit readiness testing simulating CPA firm auditor testing',
    'CPA firm selection and engagement management',
    'Type I or Type II examination coordination and auditor request fulfilment',
    'SOC 1 report review and management response to any identified exceptions',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'SOC Examination Specialists', desc: 'Our team has deep SOC 1 examination experience — understanding exactly how CPA firms test controls and what evidence they require for a clean Type II report.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Complete Readiness Programme', desc: 'Our pre-examination readiness programme eliminates surprises — we simulate auditor testing before the formal examination, ensuring control operating effectiveness.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Ongoing Audit Cycle Support', desc: 'From initial Type I through annual Type II renewals, we provide continuous SOC 1 support — evidence management, control maintenance, and auditor liaison.' },
];

const trad = [
    'Generic control frameworks not tailored to financial reporting relevance requirements.',
    'Evidence collection left to client operations teams without structured procedures.',
    'CUECs documented superficially, creating ambiguity about customer responsibilities.',
    'No pre-audit readiness testing, leading to exceptions discovered during CPA examination.',
    'Control gaps not remediated before examination period begins, affecting Type II opinions.',
    'No ongoing support between annual audits, leaving control gaps to accumulate.',
];
const ca = [
    'Control scope precisely mapped to financial reporting relevance for your service model.',
    'Structured evidence collection framework ensuring continuous documentation throughout audit period.',
    'CUECs clearly and specifically documented with customer implementation guidance.',
    'Rigorous pre-audit readiness testing eliminating CPA examination surprises.',
    'Control gaps identified and remediated before examination period commencement.',
    'Continuous between-audit support maintaining control readiness year-round.',
];

const deliverables = [
    { icon: <FileText size={36} />, title: 'Documentation', items: ['System Description Document', 'Control Inventory with Testing Procedures', 'CUEC Documentation', 'Exception & Change Management Log'] },
    { icon: <Eye size={36} />, title: 'Readiness & Testing', items: ['Control Design Assessment Report', 'Pre-Audit Readiness Testing Report', 'Control Gap Remediation Evidence', 'Evidence Collection Framework'] },
    { icon: <Settings size={36} />, title: 'Controls Implementation', items: ['ITGC Implementation & Evidence', 'Access Control & Logical Security', 'Change Management Controls', 'Availability & Processing Integrity Controls'] },
    { icon: <Award size={36} />, title: 'Audit Support', items: ['CPA Firm Selection Guidance', 'Auditor Request Management', 'Management Representation Support', 'Annual Renewal Readiness Plan'] },
];

const SOC1 = () => {
    const navigate = useNavigate();
    return (
        <div className="soc1-page">
            <section className="soc1-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="soc1-hero-bg" />
                <div className="soc1-container">
                    <p className="soc1-eyebrow">Compliance — Global Attestations</p>
                    <h1 className="soc1-hero-title">SOC 1 <span className="soc1-grad">ATTESTATION REPORT</span></h1>
                    <p className="soc1-hero-desc">A <strong>SOC 1 (SSAE 18) report</strong> provides independent assurance that your organization's controls over financial reporting are designed and operating effectively. It is a critical requirement for service organizations — payment processors, IT service providers, and BPOs — whose systems affect user entities' financial statements.</p>
                    <p className="soc1-hero-desc">Our SOC 1 practice provides <strong>complete examination support</strong> — from readiness assessment and control gap remediation through evidence collection, pre-audit testing, CPA firm liaison, and annual renewal management.</p>
                    <div className="soc1-actions">
                        <button className="soc1-btn soc1-btn-p" onClick={() => navigate('/contact')}>Schedule a SOC 1 Readiness Assessment</button>
                        <button className="soc1-btn soc1-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="soc1-sec soc1-bg-w"><div className="soc1-container"><ScrollReveal direction="up"><div className="soc1-hdr"><h2 className="soc1-title">SOC 1 Examination Challenges</h2><p className="soc1-desc">Service organizations face significant challenges achieving a clean SOC 1 Type II opinion with minimal exceptions or qualifications</p></div></ScrollReveal><div className="soc1-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="soc1-ch-card"><div className="soc1-ic">{c.icon}</div><h3 className="soc1-ct">{c.title}</h3><p className="soc1-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="soc1-sec soc1-bg-p"><div className="soc1-container"><ScrollReveal direction="up"><div className="soc1-hdr"><h2 className="soc1-title">Our SOC 1 Examination Framework</h2><p className="soc1-desc">A comprehensive SOC 1 examination preparation and support framework covering all SSAE 18 requirements</p></div></ScrollReveal><div className="soc1-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="soc1-cmp-card"><div className="soc1-ic">{c.icon}</div><h3 className="soc1-ct">{c.title}</h3><p className="soc1-cd">{c.desc}</p><div className="soc1-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="soc1-sec soc1-bg-w"><div className="soc1-container"><ScrollReveal direction="up"><div className="soc1-hdr"><h2 className="soc1-title">Our Examination Methodology</h2><p className="soc1-desc">A proven 10-step methodology from baseline readiness assessment through SOC 1 report issuance</p></div></ScrollReveal><div className="soc1-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="soc1-ap-card"><div className="soc1-sn">{String(i + 1).padStart(2, '0')}</div><div className="soc1-ic">{a.icon}</div><h3 className="soc1-ct">{a.title}</h3><p className="soc1-cd">{a.desc}</p><div className="soc1-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="soc1-sec soc1-bg-p"><div className="soc1-container"><ScrollReveal direction="up"><div className="soc1-hdr"><h2 className="soc1-title">SOC 1 Coverage Checklist</h2><p className="soc1-desc">Complete coverage of SOC 1/SSAE 18 examination requirements</p></div></ScrollReveal><div className="soc1-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="soc1-chk-item"><div className="soc1-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="soc1-sec soc1-bg-w"><div className="soc1-container"><ScrollReveal direction="up"><div className="soc1-hdr"><h2 className="soc1-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="soc1-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="soc1-why-card"><div className="soc1-why-ic">{w.icon}</div><h3 className="soc1-wt">{w.title}</h3><p className="soc1-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="soc1-diff"><div className="soc1-container"><ScrollReveal direction="up"><h2 className="soc1-diff-t">THE <span className="soc1-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="soc1-cmp-g"><ScrollReveal direction="left" delay={100}><div className="soc1-col soc1-col-t"><h3 className="soc1-col-h">Typical SOC Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="soc1-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="soc1-col soc1-col-c"><h3 className="soc1-col-h soc1-col-ch">CyberAries SOC 1 Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="soc1-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="soc1-sec soc1-bg-w"><div className="soc1-container"><ScrollReveal direction="up"><div className="soc1-hdr"><h2 className="soc1-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="soc1-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="soc1-del-card"><div className="soc1-del-ic">{d.icon}</div><h4 className="soc1-dt">{d.title}</h4><ul className="soc1-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="soc1-cta"><div className="soc1-container"><ScrollReveal direction="up"><div className="soc1-cta-c"><h2 className="soc1-cta-t">Achieve Your SOC 1 Attestation Report</h2><p className="soc1-cta-d">Demonstrate financial reporting control assurance to your customers and auditors with a clean SOC 1 Type I or Type II report.</p><button className="soc1-btn soc1-btn-p soc1-btn-lg" onClick={() => navigate('/contact')}>Request SOC 1 Readiness Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default SOC1;
