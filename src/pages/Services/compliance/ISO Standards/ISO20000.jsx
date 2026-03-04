import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Database, Globe, Target, BookOpen } from 'lucide-react';
import './ISO20000.css';

const challenges = [
    { icon: <Settings size={40} />, title: 'Service Management Maturity', desc: 'Most organizations have informal IT service management practices. ISO 20000-1 requires formalizing these into a structured, documented SMS across all 7 service management system clauses.' },
    { icon: <FileText size={40} />, title: 'Process Integration & Alignment', desc: 'Aligning ITSM processes — incident, change, capacity, availability, supplier management — into a coherent SMS while maintaining operational continuity.' },
    { icon: <Users size={40} />, title: 'Supplier Management Obligations', desc: 'ISO 20000-1 mandates systematic management of all IT service supply chains — including cloud providers, outsourced services, and software vendors — through formal supplier agreements.' },
    { icon: <BarChart3 size={40} />, title: 'Service Reporting & Metrics', desc: 'Establishing meaningful service performance measurement, reporting against agreed SLAs, and triggering improvement actions when targets are missed.' },
    { icon: <AlertTriangle size={40} />, title: 'Change & Release Management', desc: 'Implementing formal change management controls that reduce service disruption risk while enabling the business to move at speed.' },
    { icon: <RefreshCw size={40} />, title: 'Continual Service Improvement', desc: 'Embedding a genuine CSI culture with structured improvement initiatives, not just annual reviews — ensuring the SMS continues to deliver value post-certification.' },
];

const components = [
    { icon: <Target size={40} />, title: 'SMS Scope & Governance', desc: 'Defining the SMS scope, organizational context, stakeholder requirements, and service management policy aligned with ISO 20000-1:2018 Clause 4-5.' },
    { icon: <Shield size={40} />, title: 'Service Planning & Design', desc: 'Service catalogue management, SLA definition, capacity and availability planning, and service continuity aligned with business requirements.' },
    { icon: <RefreshCw size={40} />, title: 'Incident & Problem Management', desc: 'Formalized incident and problem management processes with defined priority, escalation, resolution, and root cause analysis procedures.' },
    { icon: <Settings size={40} />, title: 'Change & Release Management', desc: 'Risk-based change management controls and formal release management processes with testing, rollback, and documentation requirements.' },
    { icon: <Globe size={40} />, title: 'Supplier Management', desc: 'Systematic supplier identification, evaluation, agreement management, and performance monitoring across all IT service supply chain partners.' },
    { icon: <BarChart3 size={40} />, title: 'Service Reporting & Improvement', desc: 'Service performance measurement framework, SLA compliance reporting, and structured continual service improvement programme.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'Gap Analysis', desc: 'Comprehensive baseline assessment of current ITSM practices and processes against ISO 20000-1:2018, identifying gaps across all service management clauses.' },
    { icon: <Target size={40} />, title: 'SMS Scope & Policy', desc: 'Define SMS organizational context, stakeholder requirements, SMS scope statement, and service management policy aligned with ISO 20000-1:2018.' },
    { icon: <FileText size={40} />, title: 'Service Catalogue Development', desc: 'Develop formal service catalogue documenting all in-scope services with attributes, service owners, and agreed service levels.' },
    { icon: <AlertTriangle size={40} />, title: 'Process Design & Documentation', desc: 'Design and document all required SMS processes — incident, problem, change, release, supplier, capacity, availability, and continuity management.' },
    { icon: <BarChart3 size={40} />, title: 'SLA & OLA Development', desc: 'Develop Service Level Agreements with customers and Operational Level Agreements with internal teams, establishing measurable service targets.' },
    { icon: <Globe size={40} />, title: 'Supplier Management Framework', desc: 'Implement formal supplier management — classification, agreement review, performance monitoring — covering all IT service supply chain partners.' },
    { icon: <Settings size={40} />, title: 'Change & Release Controls', desc: 'Implement change advisory board, risk-based change classification, emergency change procedures, and formal release management processes.' },
    { icon: <Eye size={40} />, title: 'Tooling & Automation', desc: 'Configure ITSM tooling to support ISO 20000-1 process requirements — ticket management, change records, knowledge base, and reporting dashboards.' },
    { icon: <FileCheck size={40} />, title: 'Internal Audit', desc: 'SMS internal audit against all ISO 20000-1:2018 clauses with documented findings, nonconformity reports, and corrective action tracking.' },
    { icon: <Award size={40} />, title: 'Certification Audit Support', desc: 'Stage 1 and Stage 2 certification audit support including pre-audit readiness review, documentation preparation, and on-site auditor liaison.' },
];

const checklist = [
    'Gap analysis against all ISO 20000-1:2018 clauses and process requirements',
    'SMS scope definition and organizational context analysis',
    'Service catalogue with all in-scope services and service levels defined',
    'Incident management process with priority, escalation, and resolution procedures',
    'Problem management process with root cause analysis and known error management',
    'Change management process with CAB, risk-based classification, and emergency changes',
    'Release and deployment management procedures with testing and rollback controls',
    'Capacity and availability management plans and monitoring',
    'Service continuity plan aligned with business continuity requirements',
    'Supplier management framework with agreements and performance monitoring',
    'Service reporting against SLAs with continual improvement programme',
    'ISO 20000-1:2018 certification audit Stage 1 & Stage 2 support',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'ISO 20000 Lead Implementers', desc: 'Our team includes ISO 20000-1 certified practitioners with practical ITSM implementation experience across enterprise IT service providers and BFSI organizations.' },
    { icon: <Settings size={48} strokeWidth={1.5} />, title: 'ITSM & Process Expertise', desc: 'Deep ITSM process expertise — from incident and change management through supplier and capacity management — ensuring compliant and operationally effective processes.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'End-to-End SMS Delivery', desc: 'Complete gap analysis through process design, tooling configuration, internal audit, and certification audit support — delivered by certified SMS implementers.' },
];

const trad = [
    'Generic ITSM process templates not calibrated to your service delivery model.',
    'SMS documentation developed without operational process owner involvement.',
    'SLAs defined without underlying capacity or performance baseline data.',
    'Supplier management limited to contract review without ongoing monitoring.',
    'Change management delivers documentation but no tooling or workflow changes.',
    'ITSM tools not configured to support actual ISO 20000-1 process requirements.',
];
const ca = [
    'SMS processes designed around your actual service delivery architecture.',
    'Process documentation co-developed with service owners and operations teams.',
    'SLAs grounded in capacity analysis and historical performance baselines.',
    'Supplier management framework with automated performance monitoring.',
    'Change management implemented end-to-end — CAB, tooling, procedures, training.',
    'ITSM tooling fully configured to support every ISO 20000-1 process requirement.',
];

const deliverables = [
    { icon: <FileText size={36} />, title: 'SMS Documentation', items: ['Service Management Policy & SMS Manual', 'Service Catalogue with SLAs', 'Complete Process Suite Documentation', 'Supplier Register & Agreement Templates'] },
    { icon: <Settings size={36} />, title: 'Process Implementations', items: ['Incident & Problem Management Workflows', 'Change & Release Management Procedures', 'Capacity & Availability Management Plans', 'Service Continuity Plan'] },
    { icon: <BarChart3 size={36} />, title: 'Reporting & Metrics', items: ['SLA Performance Dashboard', 'Service Reporting Templates', 'KPI Metrics Framework', 'Supplier Performance Scorecard'] },
    { icon: <Award size={36} />, title: 'Certification Support', items: ['Internal SMS Audit Reports', 'Nonconformity & Corrective Actions Register', 'Stage 1 & Stage 2 Audit Preparation', 'Continual Improvement Programme'] },
];

const ISO20000 = () => {
    const navigate = useNavigate();
    return (
        <div className="i200-page">
            <section className="i200-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="i200-hero-bg" />
                <div className="i200-container">
                    <p className="i200-eyebrow">Compliance — ISO Standards</p>
                    <h1 className="i200-hero-title">ISO 20000 <span className="i200-grad">IT SERVICE MANAGEMENT</span></h1>
                    <p className="i200-hero-desc">ISO/IEC 20000-1:2018 is the <strong>international standard for IT Service Management Systems (SMS)</strong>. Certification demonstrates that your IT service delivery is systematically managed — with formal processes, defined SLAs, supplier management, and continual improvement — reassuring customers, regulators, and partners.</p>
                    <p className="i200-hero-desc">Our ISO 20000 practice delivers <strong>end-to-end SMS implementation</strong> — from gap analysis through process design, SLA development, supplier management, tooling configuration, internal audit, and certification audit support.</p>
                    <div className="i200-actions">
                        <button className="i200-btn i200-btn-p" onClick={() => navigate('/contact')}>Schedule an SMS Gap Analysis</button>
                        <button className="i200-btn i200-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="i200-sec i200-bg-w"><div className="i200-container"><ScrollReveal direction="up"><div className="i200-hdr"><h2 className="i200-title">ISO 20000 Implementation Challenges</h2><p className="i200-desc">IT service providers face significant challenges formalizing service management practices to meet ISO 20000-1:2018 requirements</p></div></ScrollReveal><div className="i200-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="i200-ch-card"><div className="i200-ic">{c.icon}</div><h3 className="i200-ct">{c.title}</h3><p className="i200-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="i200-sec i200-bg-p"><div className="i200-container"><ScrollReveal direction="up"><div className="i200-hdr"><h2 className="i200-title">Our ISO 20000 Implementation Framework</h2><p className="i200-desc">Comprehensive SMS implementation covering all ISO 20000-1:2018 service management clauses and process domains</p></div></ScrollReveal><div className="i200-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="i200-cmp-card"><div className="i200-ic">{c.icon}</div><h3 className="i200-ct">{c.title}</h3><p className="i200-cd">{c.desc}</p><div className="i200-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="i200-sec i200-bg-w"><div className="i200-container"><ScrollReveal direction="up"><div className="i200-hdr"><h2 className="i200-title">Our Implementation Methodology</h2><p className="i200-desc">A proven 10-step methodology from baseline gap analysis through ISO 20000-1 certification success</p></div></ScrollReveal><div className="i200-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="i200-ap-card"><div className="i200-sn">{String(i + 1).padStart(2, '0')}</div><div className="i200-ic">{a.icon}</div><h3 className="i200-ct">{a.title}</h3><p className="i200-cd">{a.desc}</p><div className="i200-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="i200-sec i200-bg-p"><div className="i200-container"><ScrollReveal direction="up"><div className="i200-hdr"><h2 className="i200-title">ISO 20000 Coverage Checklist</h2><p className="i200-desc">Complete coverage of ISO 20000-1:2018 requirements across all SMS process domains</p></div></ScrollReveal><div className="i200-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="i200-chk-item"><div className="i200-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="i200-sec i200-bg-w"><div className="i200-container"><ScrollReveal direction="up"><div className="i200-hdr"><h2 className="i200-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="i200-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="i200-why-card"><div className="i200-why-ic">{w.icon}</div><h3 className="i200-wt">{w.title}</h3><p className="i200-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="i200-diff"><div className="i200-container"><ScrollReveal direction="up"><h2 className="i200-diff-t">THE <span className="i200-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="i200-cmp-g"><ScrollReveal direction="left" delay={100}><div className="i200-col i200-col-t"><h3 className="i200-col-h">Traditional ITSM Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="i200-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="i200-col i200-col-c"><h3 className="i200-col-h i200-col-ch">CyberAries ISO 20000 Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="i200-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="i200-sec i200-bg-w"><div className="i200-container"><ScrollReveal direction="up"><div className="i200-hdr"><h2 className="i200-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="i200-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="i200-del-card"><div className="i200-del-ic">{d.icon}</div><h4 className="i200-dt">{d.title}</h4><ul className="i200-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="i200-cta"><div className="i200-container"><ScrollReveal direction="up"><div className="i200-cta-c"><h2 className="i200-cta-t">Achieve ISO 20000-1:2018 SMS Certification</h2><p className="i200-cta-d">Build a genuinely effective IT service management system and achieve ISO 20000-1 certification with our certified SMS implementers.</p><button className="i200-btn i200-btn-p i200-btn-lg" onClick={() => navigate('/contact')}>Request ISO 20000 Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default ISO20000;
