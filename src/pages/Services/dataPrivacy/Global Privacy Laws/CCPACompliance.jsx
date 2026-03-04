import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Shield, FileText, Search, Lock, AlertTriangle, CheckCircle,
    Settings, Users, Award, Globe, Database, Eye, FileCheck, Target
} from 'lucide-react';
import './CCPACompliance.css';

const challenges = [
    { icon: <Target size={40} />, title: 'Consumer Rights at Scale', desc: 'Managing CCPA/CPRA consumer rights — opt-out of sale, deletion, correction, portability, and access — at scale across digital channels, CRM systems, and third-party data brokers.' },
    { icon: <Database size={40} />, title: 'Personal Information Inventory', desc: 'Cataloguing all personal information collected across web properties, apps, and services; mapping disclosures to third parties, service providers, and contractors.' },
    { icon: <Globe size={40} />, title: '"Do Not Sell or Share" Implementation', desc: 'Implementing "Do Not Sell or Share My Personal Information" links, Global Privacy Control (GPC) signal recognition, opt-out preference propagation to all downstream recipients.' },
    { icon: <Lock size={40} />, title: 'Sensitive Personal Information Controls', desc: 'CPRA introduced a special category of Sensitive Personal Information (SPI) with additional use limitation and disclosure rights — requiring distinct technical and policy controls.' },
    { icon: <Eye size={40} />, title: 'Contractor & Service Provider Management', desc: 'Ensuring all service providers, contractors and third parties operate under appropriate CCPA/CPRA contracts with data use limitations and no sale or sharing of personal information.' },
    { icon: <AlertTriangle size={40} />, title: 'Security & Breach Liability', desc: 'CCPA creates a private right of action for data breaches resulting from failure to implement reasonable security. Demonstrating reasonable security practices is both a compliance and litigation risk management priority.' },
];

const framework = [
    { icon: <Search size={40} />, title: 'CCPA/CPRA Gap Assessment', desc: 'Systematic gap assessment against CCPA as amended by CPRA — data inventory, privacy policy, consumer rights procedures, service provider contracts, and sensitive PI controls.' },
    { icon: <Database size={40} />, title: 'Personal Information Mapping', desc: 'Discovery and mapping of all personal information — including sensitive PI — collected, used, retained, disclosed, and sold or shared, across all business functions and systems.' },
    { icon: <Globe size={40} />, title: 'Consumer Privacy Rights Programme', desc: 'Design and implementation of all CCPA/CPRA consumer rights workflows — access, deletion, correction, portability, opt-out of sale/sharing, and limit SPI use requests.' },
    { icon: <Lock size={40} />, title: 'Privacy Notice & Policy Compliance', desc: 'Privacy policy, collection notices, and "Do Not Sell or Share" infrastructure aligned to CPRA\'s updated disclosure requirements.' },
    { icon: <Settings size={40} />, title: 'Service Provider Contract Programme', desc: 'Review and update of all vendor, service provider, and contractor agreements to include CCPA/CPRA required terms, data use limitations, and audit rights.' },
    { icon: <Shield size={40} />, title: 'Reasonable Security Implementation', desc: 'Implementing and documenting reasonable security practices — reducing CCPA private right of action exposure through a defensible, documented security posture.' },
];

const approach = [
    { icon: <Search size={40} />, title: 'CCPA/CPRA Gap Assessment', desc: 'Baseline gap assessment against all CCPA and CPRA obligations including consumer rights, privacy notices, opt-out infrastructure, service provider management, and data retention.' },
    { icon: <Database size={40} />, title: 'Personal Information Inventory & Data Mapping', desc: 'Structured discovery of all PI collection points — web, app, offline, CRM — including sensitive PI categories, mapped to business purposes, retention, and disclosure recipients.' },
    { icon: <Globe size={40} />, title: '"Do Not Sell or Share" Infrastructure', desc: 'Implement DNSSS links, Global Privacy Control signal recognition, consent management platform configuration, and preference propagation to downstream service providers.' },
    { icon: <Users size={40} />, title: 'Consumer Rights Workflow Design', desc: 'Design and operationalize all consumer rights intake procedures — identity verification, verification exemptions for opt-out, fulfilment timelines, and exception handling.' },
    { icon: <FileText size={40} />, title: 'Privacy Notice & Policy Update', desc: 'Update privacy policy and collection notices to meet CPRA\'s enhanced disclosure requirements for categories, purposes, retention periods, and consumer rights.' },
    { icon: <Lock size={40} />, title: 'Sensitive Personal Information Controls', desc: 'Identify all SPI processing, implement use limitation controls, deploy a "Limit Use of My Sensitive Personal Information" link where required, and update privacy notices.' },
    { icon: <Settings size={40} />, title: 'Service Provider & Contractor Agreements', desc: 'Audit all third-party relationships, classify as service providers, contractors, third parties, or data brokers, and update contracts with required CCPA/CPRA provisions.' },
    { icon: <Shield size={40} />, title: 'Reasonable Security Programme', desc: 'Implement reasonable security measures mapped to applicable frameworks, documented as a defensible security programme reducing CCPA data breach private right of action risk.' },
    { icon: <Eye size={40} />, title: 'Employee & Training Programme', desc: 'CCPA/CPRA awareness training for all staff handling consumer requests, and functional training for privacy, legal, and compliance teams.' },
    { icon: <Award size={40} />, title: 'Ongoing CPRA Compliance Management', desc: 'Annual privacy notice review, consumer rights audit, service provider register update, and CPPA regulatory monitoring for new rules and enforcement guidance.' },
];

const checklist = [
    'CCPA/CPRA gap assessment across all statutory obligations',
    'Personal information inventory and data mapping (all categories and SPI)',
    '"Do Not Sell or Share" links and Global Privacy Control signal recognition',
    'Privacy policy and collection notice update meeting CPRA requirements',
    'Consumer rights workflows — access, deletion, correction, portability, opt-out',
    'Sensitive Personal Information use limitation controls and notice',
    'Service provider, contractor, and third-party agreement review and update',
    'Employee consumer rights request handling training programme',
    'Reasonable security practices documentation and implementation',
    'Data broker registration review (if applicable)',
    'Automated preference signal propagation to downstream recipients',
    'Annual CPPA regulatory update monitoring and compliance review',
];

const why = [
    { icon: <Award size={48} strokeWidth={1.5} />, title: 'CCPA/CPRA Specialists', desc: 'Our team has deep experience with CCPA as amended by CPRA — including CPPA rulemaking, GPC signal implementation, SPI controls, and enforcement-informed compliance priorities.' },
    { icon: <Globe size={48} strokeWidth={1.5} />, title: 'Technical & Legal Integration', desc: 'We bridge legal CCPA/CPRA obligations with technical implementation — consent management platforms, preference propagation, and security controls — delivering end-to-end compliance.' },
    { icon: <Shield size={48} strokeWidth={1.5} />, title: 'Litigation Risk Management', desc: 'Our reasonable security programme is designed to reduce CCPA private right of action exposure — giving you a documented, defensible security posture against breach litigation.' },
];

const trad = [
    'Privacy policy updated without reviewing actual data collection and disclosure practices.',
    '"Do Not Sell" links implemented without GPC signal recognition or preference propagation.',
    'Consumer rights procedures exist on paper but not operationally tested with real requests.',
    'Service provider agreements reviewed only for CCPA terms without functional data use review.',
    'Sensitive Personal Information controls not distinguished from general PI controls.',
    'Security practices not documented, leaving organizations exposed to CCPA breach litigation.',
];
const ca = [
    'Privacy policy derived from documented PI inventory with all categories and purposes.',
    'DNSSS and GPC configured with verified preference propagation to all service providers.',
    'Consumer rights workflows operationally tested with timing, verification, and exception handling.',
    'All service provider and contractor relationships classified and contracts updated.',
    'Separate SPI inventory, use limitation controls, and opt-out infrastructure deployed.',
    'Reasonably security programme fully documented — defensible against CCPA private right of action.',
];

const deliverables = [
    { icon: <Database size={36} />, title: 'Assessment & Discovery', items: ['CCPA/CPRA Gap Assessment Report', 'Personal Information Inventory & Data Map', 'Sensitive PI Registry & Use Limitation Plan', 'Third-Party & Data Broker Classification Register'] },
    { icon: <FileText size={36} />, title: 'Notices & Policy', items: ['Updated Privacy Policy & Collection Notices', '"Do Not Sell or Share" Infrastructure', 'Limit SPI Use Notice & Controls', 'GPC Signal Recognition Implementation'] },
    { icon: <Users size={36} />, title: 'Consumer Rights', items: ['Consumer Rights Request Intake Procedures', 'Identity Verification & Verification Exemption Rules', 'Opt-Out Preference Propagation Workflow', 'Consumer Rights Fulfilment Audit Log'] },
    { icon: <Shield size={36} />, title: 'Security & Ongoing', items: ['Reasonable Security Programme Documentation', 'Service Provider Agreement Review & Update', 'Employee Training Programme', 'Annual CPPA Regulatory Update Review'] },
];

const CCPACompliance = () => {
    const navigate = useNavigate();
    return (
        <div className="ccpa-page">
            <section className="ccpa-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="ccpa-hero-bg" />
                <div className="ccpa-container">
                    <p className="ccpa-eyebrow">Data Privacy — Global Privacy Laws</p>
                    <h1 className="ccpa-hero-title">CCPA/CPRA <span className="ccpa-grad">COMPLIANCE PROGRAMME</span></h1>
                    <p className="ccpa-hero-desc">The <strong>California Consumer Privacy Act (CCPA)</strong> as amended by the <strong>California Privacy Rights Act (CPRA)</strong> gives California consumers comprehensive rights over their personal information and imposes significant obligations on businesses meeting qualifying thresholds. The California Privacy Protection Agency (CPPA) enforces CPRA with fines up to $7,500 per intentional violation.</p>
                    <p className="ccpa-hero-desc">Our <strong>CCPA/CPRA compliance programme</strong> covers all obligations — PI inventory, "Do Not Sell or Share" infrastructure, GPC signal recognition, consumer rights workflows, sensitive PI controls, service provider agreements, and ongoing CPPA regulatory monitoring.</p>
                    <div className="ccpa-actions">
                        <button className="ccpa-btn ccpa-btn-p" onClick={() => navigate('/contact')}>Schedule a CCPA Assessment</button>
                        <button className="ccpa-btn ccpa-btn-s">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="ccpa-sec ccpa-bg-w"><div className="ccpa-container"><ScrollReveal direction="up"><div className="ccpa-hdr"><h2 className="ccpa-title">CCPA/CPRA Compliance Challenges</h2><p className="ccpa-desc">Businesses subject to CCPA/CPRA face complex technical and operational challenges across consumer rights, data governance, and vendor management</p></div></ScrollReveal><div className="ccpa-g2">{challenges.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="ccpa-ch-card"><div className="ccpa-ic">{c.icon}</div><h3 className="ccpa-ct">{c.title}</h3><p className="ccpa-cd">{c.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="ccpa-sec ccpa-bg-p"><div className="ccpa-container"><ScrollReveal direction="up"><div className="ccpa-hdr"><h2 className="ccpa-title">Our CCPA/CPRA Framework</h2><p className="ccpa-desc">Comprehensive CCPA/CPRA compliance from PI inventory and opt-out infrastructure through consumer rights, SPI controls, and reasonable security</p></div></ScrollReveal><div className="ccpa-g3">{framework.map((c, i) => <ScrollReveal key={i} direction="up" delay={i * 80}><div className="ccpa-cmp-card"><div className="ccpa-ic">{c.icon}</div><h3 className="ccpa-ct">{c.title}</h3><p className="ccpa-cd">{c.desc}</p><div className="ccpa-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="ccpa-sec ccpa-bg-w"><div className="ccpa-container"><ScrollReveal direction="up"><div className="ccpa-hdr"><h2 className="ccpa-title">Our Compliance Methodology</h2><p className="ccpa-desc">A 10-step CCPA/CPRA compliance methodology from gap assessment through annual CPPA regulatory monitoring</p></div></ScrollReveal><div className="ccpa-g3">{approach.map((a, i) => <ScrollReveal key={i} direction="up" delay={i * 70}><div className="ccpa-ap-card"><div className="ccpa-sn">{String(i + 1).padStart(2, '0')}</div><div className="ccpa-ic">{a.icon}</div><h3 className="ccpa-ct">{a.title}</h3><p className="ccpa-cd">{a.desc}</p><div className="ccpa-bar" /></div></ScrollReveal>)}</div></div></section>
            <section className="ccpa-sec ccpa-bg-p"><div className="ccpa-container"><ScrollReveal direction="up"><div className="ccpa-hdr"><h2 className="ccpa-title">CCPA/CPRA Coverage Checklist</h2><p className="ccpa-desc">Complete coverage of CCPA/CPRA compliance obligations for qualifying businesses</p></div></ScrollReveal><div className="ccpa-chk">{checklist.map((it, i) => <ScrollReveal key={i} direction="up" delay={i * 45}><div className="ccpa-chk-item"><div className="ccpa-chk-ic"><CheckCircle size={22} /></div><span>{it}</span></div></ScrollReveal>)}</div></div></section>
            <section className="ccpa-sec ccpa-bg-w"><div className="ccpa-container"><ScrollReveal direction="up"><div className="ccpa-hdr"><h2 className="ccpa-title">Why Choose CyberAries?</h2></div></ScrollReveal><div className="ccpa-g3">{why.map((w, i) => <ScrollReveal key={i} direction="up" delay={i * 130}><div className="ccpa-why-card"><div className="ccpa-why-ic">{w.icon}</div><h3 className="ccpa-wt">{w.title}</h3><p className="ccpa-wd">{w.desc}</p></div></ScrollReveal>)}</div></div></section>
            <section className="ccpa-diff"><div className="ccpa-container"><ScrollReveal direction="up"><h2 className="ccpa-diff-t">THE <span className="ccpa-diff-r">CYBERARIES</span> DIFFERENCE</h2></ScrollReveal><div className="ccpa-cmp-g"><ScrollReveal direction="left" delay={100}><div className="ccpa-col ccpa-col-t"><h3 className="ccpa-col-h">Generic Privacy Consultants</h3><ul>{trad.map((t, i) => <li key={i}><span className="ccpa-blt">•</span>{t}</li>)}</ul></div></ScrollReveal><ScrollReveal direction="right" delay={200}><div className="ccpa-col ccpa-col-c"><h3 className="ccpa-col-h ccpa-col-ch">CyberAries CCPA/CPRA Practice</h3><ul>{ca.map((t, i) => <li key={i}><span className="ccpa-blt">•</span>{t}</li>)}</ul></div></ScrollReveal></div></div></section>
            <section className="ccpa-sec ccpa-bg-w"><div className="ccpa-container"><ScrollReveal direction="up"><div className="ccpa-hdr"><h2 className="ccpa-title">Comprehensive Deliverables</h2></div></ScrollReveal><div className="ccpa-g2">{deliverables.map((d, i) => <ScrollReveal key={i} direction="up" delay={i * 90}><div className="ccpa-del-card"><div className="ccpa-del-ic">{d.icon}</div><h4 className="ccpa-dt">{d.title}</h4><ul className="ccpa-dl">{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul></div></ScrollReveal>)}</div></div></section>
            <section className="ccpa-cta"><div className="ccpa-container"><ScrollReveal direction="up"><div className="ccpa-cta-c"><h2 className="ccpa-cta-t">Achieve CCPA/CPRA Compliance</h2><p className="ccpa-cta-d">Build a defensible CCPA/CPRA compliance programme that respects consumer rights, manages vendor obligations, and reduces regulatory and litigation exposure.</p><button className="ccpa-btn ccpa-btn-p ccpa-btn-lg" onClick={() => navigate('/contact')}>Request CCPA Assessment</button></div></ScrollReveal></div></section>
        </div>
    );
};
export default CCPACompliance;
