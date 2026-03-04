import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { Shield, FileText, Search, Lock, AlertTriangle, CheckCircle, Settings, BarChart3, Users, Award, RefreshCw, FileCheck, Eye, Database, Globe, Target, BookOpen } from 'lucide-react';
import './ISO22301.css';

const challenges = [
    { icon: <AlertTriangle size={40} />, title: 'Business Impact Analysis Complexity', desc: 'Conducting a thorough BIA to identify critical processes, their dependencies, recovery time objectives, and recovery point objectives requires structured engagement across all business functions.' },
    { icon: <Settings size={40} />, title: 'Recovery Strategy Design', desc: 'Designing cost-effective continuity and recovery strategies that genuinely meet defined RTO/RPO targets — not just theoretical plans but operationally tested solutions.' },
    { icon: <Users size={40} />, title: 'Organizational Commitment', desc: 'Securing genuine top management commitment and cross-departmental ownership of continuity responsibilities across IT, operations, HR, communications, and facilities.' },
    { icon: <FileText size={40} />, title: 'Plan Documentation & Maintenance', desc: 'Developing comprehensive, actionable BCP and DR plans and maintaining them through organizational changes, technology updates, and operational evolution.' },
    { icon: <Eye size={40} />, title: 'Testing & Exercising', desc: 'Designing progressive exercises — from tabletop simulations to full failover tests — that genuinely validate recovery capability without disrupting live operations.' },
    { icon: <RefreshCw size={40} />, title: 'Supply Chain & Third-Party Resilience', desc: 'Extending business continuity requirements to critical suppliers and partners, ensuring third-party disruptions do not cascade into your own business continuity failures.' },
];

const components = [
    { icon: <Target size={40} />, title: 'BCMS Scope & Context', desc: 'Defining the BCMS scope, organizational context, interested parties, and business continuity policy aligned with ISO 22301:2019 Clause 4 requirements.' },
    { icon: <BarChart3 size={40} />, title: 'Business Impact Analysis', desc: 'Structured BIA identifying critical business functions, dependencies, minimum business continuity objectives, and prioritized recovery requirements.' },
    { icon: <AlertTriangle size={40} />, title: 'Risk Assessment', desc: 'Identification and assessment of threats that could disrupt critical business activities, leading to a risk treatment plan and residual risk acceptance.' },
    { icon: <Shield size={40} />, title: 'Continuity Strategies', desc: 'Design and implementation of resilience, continuity, and recovery strategies that meet defined RTO/RPO objectives for critical business functions.' },
    { icon: <FileText size={40} />, title: 'BCP & DR Plans', desc: 'Development of comprehensive, actionable Business Continuity Plans, IT Disaster Recovery Plans, and Crisis Communication Plans.' },
    { icon: <Eye size={40} />, title: 'Exercise & Testing Programme', desc: 'Structured exercise programme progressing from tabletop simulations through walkthroughs to full failover tests with documented results.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'Gap Analysis', desc: 'Comprehensive assessment of your current business continuity posture against ISO 22301:2019, identifying gaps across all clauses and continuity capabilities.' },
    { icon: <Target size={40} />, title: 'BCMS Scope & Policy', desc: 'Define BCMS organizational context, stakeholder requirements, BCMS scope, and business continuity policy meeting ISO 22301 Clause 4-5 requirements.' },
    { icon: <BarChart3 size={40} />, title: 'Business Impact Analysis', desc: 'Facilitated BIA across all business functions — identifying critical processes, dependencies, RTO/RPO requirements, and minimum business continuity objectives.' },
    { icon: <AlertTriangle size={40} />, title: 'Threat & Risk Assessment', desc: 'Assessment of threats to critical business activities with likelihood and impact scoring, risk treatment decisions, and residual risk documentation.' },
    { icon: <Settings size={40} />, title: 'Continuity Strategy Design', desc: 'Design cost-effective continuity strategies — backup facilities, cloud DR, manual workarounds — genuinely meeting your defined RTO/RPO targets.' },
    { icon: <FileCheck size={40} />, title: 'BCP/DR Plan Development', desc: 'Develop comprehensive, actionable BCP, IT DR plans, and crisis communication plans with clear roles, escalation paths, and step-by-step procedures.' },
    { icon: <Users size={40} />, title: 'Training & Awareness', desc: 'Role-specific training for Crisis Management Team, BCP coordinators, IT recovery teams, and organization-wide business continuity awareness.' },
    { icon: <Eye size={40} />, title: 'Exercise & Testing', desc: 'Progressive exercise programme from tabletop simulations through technical failover tests with documented results, lessons learned, and plan updates.' },
    { icon: <FileText size={40} />, title: 'Internal Audit', desc: 'BCMS internal audit against ISO 22301:2019 requirements with findings, nonconformity reports, and corrective action tracking.' },
    { icon: <Award size={40} />, title: 'Certification Audit Support', desc: 'Stage 1 and Stage 2 certification audit support with pre-audit readiness review, document preparation, and on-site auditor liaison.' },
];

const checklist = [
    'Gap analysis against all ISO 22301:2019 clauses and continuity requirements',
    'BCMS scope definition and organizational context analysis',
    'Business Impact Analysis covering all critical business functions',
    'RTO and RPO definition for all critical processes and IT systems',
    'Threat and risk assessment for all identified critical activities',
    'Continuity strategy design meeting defined RTO/RPO objectives',
    'Business Continuity Plans with step-by-step recovery procedures',
    'IT Disaster Recovery Plans with technical failover procedures',
    'Crisis Communication Plan with stakeholder notification procedures',
    'Exercise programme including tabletop simulations and failover tests',
    'Internal BCMS audit with corrective action management',
    'ISO 22301:2019 certification audit Stage 1 & Stage 2 support',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'ISO 22301 Certified Practitioners', desc: 'Our team includes ISO 22301 Lead Implementers and Lead Auditors with proven certification experience across enterprise, BFSI, and critical infrastructure organizations.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Operational Resilience Focus', desc: 'We build business continuity programmes that genuinely work — not just certification tick-boxes — with tested plans and validated recovery capabilities.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'End-to-End Implementation', desc: 'Complete BIA through strategy design, BCP/DR development, exercise programme, internal audit, and certification audit support in one engagement.' },
];

const trad = [
    'BIA conducted as a documentation exercise without operational validation.',
    'Recovery strategies designed without testing against real RTO/RPO targets.',
    'BCP documents developed but never exercised or tested in practice.',
    'Crisis Management Team trained once without periodic rehearsal.',
    'BCMS abandoned post-certification with outdated plans and untested strategies.',
    'Certification audit surprises due to inadequate preparation and mock audits.',
];
const ca = [
    'BIA conducted through structured workshops producing operationally valid results.',
    'Recovery strategies tested against defined RTO/RPO targets before certification.',
    'Progressive exercise programme from tabletop to full failover tests with results.',
    'Crisis Management Team rehearsed through realistic multi-scenario simulations.',
    'Post-certification continual improvement programme keeping BCMS current and tested.',
    'Pre-audit readiness review eliminating certification surprises and NCRs.',
];

const deliverables = [
    { icon: <FileText size={36} />, title: 'BCMS Documentation', items: ['Business Continuity Policy & BCMS Manual', 'Business Impact Analysis Report', 'Threat & Risk Assessment Report', 'Complete BCP/DR Plan Suite'] },
    { icon: <Settings size={36} />, title: 'Recovery Strategies', items: ['Continuity Strategy Document', 'IT Disaster Recovery Architecture', 'Crisis Communication Plan', 'Supply Chain Continuity Framework'] },
    { icon: <Eye size={36} />, title: 'Testing & Validation', items: ['Exercise Programme Design & Schedule', 'Tabletop Exercise Results & Lessons', 'Technical Failover Test Reports', 'Plan Update Register'] },
    { icon: <Award size={36} />, title: 'Certification Support', items: ['Internal BCMS Audit Reports', 'Nonconformity & Corrective Actions Register', 'Stage 1 & Stage 2 Audit Preparation', 'Surveillance Audit Readiness Plan'] },
];

const ISO22301 = () => {
    const navigate = useNavigate();
    return (
        <div className="i223-page">
            <section className="i223-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="i223-hero-bg" />
                <div className="i223-container">
                    <p className="i223-eyebrow">Compliance — ISO Standards</p>
                    <h1 className="i223-hero-title">ISO 22301 <span className="i223-grad">BUSINESS CONTINUITY</span></h1>
                    <p className="i223-hero-desc">ISO 22301:2019 is the <strong>international standard for Business Continuity Management Systems (BCMS)</strong>. Certification demonstrates that your organization can maintain critical operations, protect staff, and serve customers through disruptions — from cyberattacks and power outages to pandemics and natural disasters.</p>
                    <p className="i223-hero-desc">Our ISO 22301 practice delivers <strong>end-to-end BCMS implementation</strong> — from Business Impact Analysis and continuity strategy design through BCP/DR plan development, exercise programmes, and certification audit support.</p>
                    <div className="i223-actions">
                        <button className="i223-btn i223-btn-p" onClick={() => navigate('/contact')}>Schedule a BCMS Gap Analysis</button>
                        <button className="i223-btn i223-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="i223-sec i223-bg-w">
                <div className="i223-container">
                    <ScrollReveal direction="up"><div className="i223-hdr"><h2 className="i223-title">ISO 22301 Implementation Challenges</h2><p className="i223-desc">Organizations face significant practical challenges building genuine business continuity capability aligned with ISO 22301:2019</p></div></ScrollReveal>
                    <div className="i223-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="i223-ch-card"><div className="i223-ic">{c.icon}</div><h3 className="i223-ct">{c.title}</h3><p className="i223-cd">{c.desc}</p></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="i223-sec i223-bg-p">
                <div className="i223-container">
                    <ScrollReveal direction="up"><div className="i223-hdr"><h2 className="i223-title">Our ISO 22301 Implementation Framework</h2><p className="i223-desc">A comprehensive BCMS implementation approach covering all clauses of ISO 22301:2019 from strategy through certification</p></div></ScrollReveal>
                    <div className="i223-g3">{components.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="i223-cmp-card"><div className="i223-ic">{c.icon}</div><h3 className="i223-ct">{c.title}</h3><p className="i223-cd">{c.desc}</p><div className="i223-bar" /></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="i223-sec i223-bg-w">
                <div className="i223-container">
                    <ScrollReveal direction="up"><div className="i223-hdr"><h2 className="i223-title">Our Implementation Methodology</h2><p className="i223-desc">A proven 10-step methodology from baseline gap analysis through ISO 22301 certification success</p></div></ScrollReveal>
                    <div className="i223-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="i223-ap-card"><div className="i223-sn">{String(i + 1).padStart(2, '0')}</div><div className="i223-ic">{a.icon}</div><h3 className="i223-ct">{a.title}</h3><p className="i223-cd">{a.desc}</p><div className="i223-bar" /></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="i223-sec i223-bg-p">
                <div className="i223-container">
                    <ScrollReveal direction="up"><div className="i223-hdr"><h2 className="i223-title">ISO 22301 Coverage Checklist</h2><p className="i223-desc">Complete coverage of ISO 22301:2019 requirements across all BCMS implementation domains</p></div></ScrollReveal>
                    <div className="i223-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="i223-chk-item"><div className="i223-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="i223-sec i223-bg-w">
                <div className="i223-container">
                    <ScrollReveal direction="up"><div className="i223-hdr"><h2 className="i223-title">Why Choose CyberAries?</h2></div></ScrollReveal>
                    <div className="i223-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="i223-why-card"><div className="i223-why-ic">{w.icon}</div><h3 className="i223-wt">{w.title}</h3><p className="i223-wd">{w.desc}</p></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="i223-diff">
                <div className="i223-container">
                    <ScrollReveal direction="up"><h2 className="i223-diff-t">THE <span className="i223-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal>
                    <div className="i223-cmp-g">
                        <ScrollReveal direction="left" delay={100}><div className="i223-col i223-col-t"><h3 className="i223-col-h">Traditional BCP Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="i223-blt">•</span>{t}</li>)}</ul></div></ScrollReveal>
                        <ScrollReveal direction="right" delay={200}><div className="i223-col i223-col-c"><h3 className="i223-col-h i223-col-ch">CyberAries ISO 22301 Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="i223-blt">•</span>{t}</li>)}</ul></div></ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="i223-sec i223-bg-w">
                <div className="i223-container">
                    <ScrollReveal direction="up"><div className="i223-hdr"><h2 className="i223-title">Comprehensive Deliverables</h2></div></ScrollReveal>
                    <div className="i223-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="i223-del-card"><div className="i223-del-ic">{d.icon}</div><h4 className="i223-dt">{d.title}</h4><ul className="i223-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="i223-cta">
                <div className="i223-container">
                    <ScrollReveal direction="up"><div className="i223-cta-c"><h2 className="i223-cta-t">Achieve ISO 22301:2019 BCMS Certification</h2><p className="i223-cta-d">Build genuine business continuity capability and achieve ISO 22301 certification with our certified BCMS implementers.</p><button className="i223-btn i223-btn-p i223-btn-lg" onClick={() => navigate('/contact')}>Request ISO 22301 Assessment</button></div></ScrollReveal>
                </div>
            </section>
        </div>
    );
};
export default ISO22301;
