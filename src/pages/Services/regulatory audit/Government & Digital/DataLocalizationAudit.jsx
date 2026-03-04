import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
    Globe,
    Database,
    Shield,
    FileText,
    Search,
    MapPin,
    Lock,
    AlertTriangle,
    CheckCircle,
    Settings,
    BarChart3,
    Users,
    Award,
    RefreshCw,
    FileCheck,
    Eye,
    Network,
    Book,
} from 'lucide-react';
import './DataLocalizationAudit.css';

/* ─── DATA ─────────────────────────────────────────────── */

const challengesData = [
    {
        title: 'Determining Data Residency Boundaries',
        description:
            'Identifying exactly which categories of data — payment, sensitive personal, and critical data — must remain within India\'s geographic boundaries under RBI, MeitY, and DPDPA mandates.',
        icon: <MapPin size={40} />,
    },
    {
        title: 'Cloud & Multi-Cloud Compliance',
        description:
            'Ensuring cloud-based data stores, backups, and processing pipelines remain compliant when organizational infrastructure spans AWS, Azure, GCP, and on-premise environments.',
        icon: <Globe size={40} />,
    },
    {
        title: 'Third-Party & Vendor Data Flows',
        description:
            'Mapping and restricting data flows to overseas vendors, analytics providers, and SaaS platforms that inadvertently receive or store regulated Indian data.',
        icon: <Network size={40} />,
    },
    {
        title: 'Cross-Border Data Transfer Controls',
        description:
            'Implementing lawful transfer mechanisms, sufficiency determinations, and contractual safeguards for data that must legitimately cross borders for secondary copies.',
        icon: <Lock size={40} />,
    },
    {
        title: 'Real-Time Monitoring & Evidence',
        description:
            'Maintaining continuous, auditable evidence of data residency compliance for regulatory inspections without disrupting operational systems.',
        icon: <Eye size={40} />,
    },
    {
        title: 'Regulatory Overlap & Complexity',
        description:
            'Navigating overlapping mandates from RBI (payment data), SEBI (securities data), IRDA (insurance data), and the DPDPA, each with distinct localization requirements.',
        icon: <AlertTriangle size={40} />,
    },
];

const frameworkComponents = [
    {
        title: 'Data Classification & Mapping',
        description:
            'Systematic classification of all organizational data by residency obligation category — critical, sensitive personal, payment — with full lineage mapping.',
        icon: <Database size={40} />,
    },
    {
        title: 'Regulatory Mandate Analysis',
        description:
            'Detailed cross-mapping of RBI, SEBI, IRDA, MeitY, and DPDPA data localization requirements to your data landscape, jurisdictions, and processing activities.',
        icon: <FileText size={40} />,
    },
    {
        title: 'Cross-Border Transfer Framework',
        description:
            'Design and implementation of lawful transfer mechanisms, SCCs, and contractual controls for data that legitimately requires cross-border transmission.',
        icon: <Globe size={40} />,
    },
    {
        title: 'Storage Architecture Review',
        description:
            'Technical assessment and remediation of databases, data warehouses, backup systems, and cloud storage to enforce geographic data residency boundaries.',
        icon: <Shield size={40} />,
    },
    {
        title: 'Vendor & Third-Party Assessment',
        description:
            'Comprehensive review of all data processors and sub-processors, ensuring contracts and technical controls enforce localization obligations.',
        icon: <Users size={40} />,
    },
    {
        title: 'Continuous Compliance Monitoring',
        description:
            'Data residency monitoring dashboards, automated alerting for policy violations, and periodic review cycles to maintain ongoing compliance.',
        icon: <RefreshCw size={40} />,
    },
];

const approachSteps = [
    {
        title: 'Regulatory Mandate Review',
        description:
            'Deep analysis of all applicable Indian data localization mandates — RBI circular on payment data, DPDPA provisions, MeitY notifications, and sector-specific SEBI/IRDA guidelines.',
        icon: <Book size={40} />,
    },
    {
        title: 'Data Discovery & Classification',
        description:
            'Automated and manual discovery of all data stores, identifying regulated data by type, sensitivity, and residency obligation category.',
        icon: <Search size={40} />,
    },
    {
        title: 'Data Flow Mapping & Analysis',
        description:
            'End-to-end mapping of all data flows — internal, cloud, external — to identify where regulated data is created, processed, stored, and transmitted.',
        icon: <Network size={40} />,
    },
    {
        title: 'Gap Assessment & Risk Scoring',
        description:
            'Structured gap analysis comparing current data residency posture against all applicable mandates, with weighted risk scores for each identified gap.',
        icon: <BarChart3 size={40} />,
    },
    {
        title: 'Remediation Architecture Design',
        description:
            'Design of technical and organizational controls — data zone architectures, cloud region configurations, API data masking — to achieve compliant residency.',
        icon: <Settings size={40} />,
    },
    {
        title: 'Vendor & Processor Remediation',
        description:
            'Renegotiate data processing agreements and enforce technical restrictions on all vendors, SaaS providers, and sub-processors handling regulated data.',
        icon: <FileCheck size={40} />,
    },
    {
        title: 'Cross-Border Transfer Controls',
        description:
            'Implement and document lawful transfer mechanisms for data that legitimately crosses borders, including standard contractual clauses and adequacy assessments.',
        icon: <Lock size={40} />,
    },
    {
        title: 'Technical Control Implementation',
        description:
            'Deploy database geo-isolation, cloud region restrictions, API data masking, and encryption controls to technically enforce residency boundaries.',
        icon: <Database size={40} />,
    },
    {
        title: 'Evidence & Documentation',
        description:
            'Compile comprehensive compliance evidence — data maps, vendor contracts, technical control documentation — structured for regulatory inspection readiness.',
        icon: <FileText size={40} />,
    },
    {
        title: 'Monitoring & Ongoing Assurance',
        description:
            'Establish automated data residency monitoring, periodic compliance reviews, and ongoing assurance reporting to maintain continuous compliance posture.',
        icon: <RefreshCw size={40} />,
    },
];

const whyChooseItems = [
    {
        title: 'Multi-Regulator Expertise',
        description:
            'Deep experience navigating overlapping data localization mandates from RBI, SEBI, DPDPA, IRDA, and MeitY for BFSI, government, and enterprise organizations.',
        icon: <Award size={48} strokeWidth={1.5} />,
    },
    {
        title: 'CERT-In Empanelled',
        description:
            'Government-recognized cybersecurity firm with proven regulatory audit credentials across Indian financial sector and government clients.',
        icon: <Shield size={48} strokeWidth={1.5} />,
    },
    {
        title: 'Technical & Legal Alignment',
        description:
            'We bridge the technical and legal dimensions — designing storage architectures that technically enforce residency boundaries while satisfying regulatory evidence requirements.',
        icon: <Globe size={48} strokeWidth={1.5} />,
    },
];

const complianceChecklist = [
    'RBI circular on payment data storage and mirroring requirements',
    'DPDPA restrictions on cross-border transfer of personal data',
    'MeitY guidelines on critical information infrastructure data residency',
    'SEBI regulations for securities market data localization',
    'IRDAI data storage requirements for insurance data',
    'Cloud storage geo-restrictions for regulated data categories',
    'Third-party and SaaS vendor data residency contractual controls',
    'Backup and disaster recovery systems data residency compliance',
    'API and data exchange layer cross-border data masking controls',
    'Data processor and sub-processor oversight framework',
    'Cross-border transfer mechanism documentation and SCCs',
    'Periodic data residency compliance audit and monitoring program',
];

const difference = {
    traditional: [
        'Surface-level mapping that misses embedded data in SaaS and cloud platforms.',
        'Generic frameworks not calibrated to India\'s sector-specific mandates.',
        'Vendor controls left entirely to legal contracts with no technical enforcement.',
        'One-time assessment with no ongoing monitoring of residency compliance.',
        'Cloud configurations reviewed only at the account level, missing service-level residency gaps.',
        'No structured evidence repository for regulatory inspection readiness.',
    ],
    cyberaries: [
        'Deep technical discovery including cloud services, SaaS, API flows, and backup systems.',
        'Assessment calibrated precisely to RBI, SEBI, DPDPA, and sector regulator mandates.',
        'Vendor controls enforced both contractually and technically via configuration restrictions.',
        'Continuous monitoring with automated alerts for data residency policy violations.',
        'Cloud assessed at the service, region, and data transfer level for full gap coverage.',
        'Inspection-ready evidence repository delivered as part of every engagement.',
    ],
};

const deliverables = [
    {
        icon: <Database size={36} />,
        title: 'Data Residency Assessment',
        items: [
            'Comprehensive Data Discovery & Classification Report',
            'End-to-End Data Flow Maps with Residency Obligations',
            'Gap Analysis Against All Applicable Mandates',
            'Risk-Scored Remediation Roadmap',
        ],
    },
    {
        icon: <Settings size={36} />,
        title: 'Technical Controls',
        items: [
            'Cloud Region Configuration & Geo-isolation Implementation',
            'Database Residency Enforcement Architecture',
            'API Data Masking & Cross-Border Transfer Controls',
            'Backup & DR Data Residency Remediation',
        ],
    },
    {
        icon: <FileText size={36} />,
        title: 'Legal & Contractual Deliverables',
        items: [
            'Updated Data Processing Agreement Templates',
            'Standard Contractual Clauses for Cross-Border Transfers',
            'Vendor Data Residency Assessment Reports',
            'Cross-Border Transfer Mechanism Documentation',
        ],
    },
    {
        icon: <BarChart3 size={36} />,
        title: 'Compliance Reporting',
        items: [
            'Compliance Status Dashboard by Regulation',
            'Regulatory Inspection Evidence Repository',
            'Ongoing Monitoring Framework & Alerting Setup',
            'Annual Data Residency Compliance Review Plan',
        ],
    },
];

/* ─── COMPONENT ─────────────────────────────────────────── */

const DataLocalizationAudit = () => {
    const navigate = useNavigate();
    return (
        <div className="dla-page">

            {/* Hero */}
            <section className="dla-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
                <div className="dla-hero-bg" />
                <div className="dla-container">
                    <p className="dla-hero-eyebrow">Government &amp; Digital Compliance</p>
                    <h1 className="dla-hero-title">
                        DATA LOCALIZATION <span className="dla-gradient">AUDIT &amp; COMPLIANCE</span>
                    </h1>
                    <p className="dla-hero-desc">
                        Indian regulations — from the <strong>RBI Payment Data Storage circular</strong> to the{' '}
                        <strong>Digital Personal Data Protection Act (DPDPA)</strong> — impose strict mandates on
                        where critical and personal data can be stored and processed. Non-compliance carries
                        significant regulatory penalties and reputational exposure for BFSI, government, and
                        enterprise organizations.
                    </p>
                    <p className="dla-hero-desc">
                        Our <strong>Data Localization Audit</strong> provides complete coverage — from regulatory
                        mandate mapping and technical data discovery through cross-border transfer controls,
                        vendor remediation, and inspection-ready compliance evidence.
                    </p>
                    <div className="dla-hero-actions">
                        <button className="dla-btn dla-btn-primary" onClick={() => navigate('/contact')}>
                            Schedule a Compliance Assessment
                        </button>
                        <button className="dla-btn dla-btn-secondary">Learn More</button>
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="dla-section dla-bg-white">
                <div className="dla-container">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="dla-section-header">
                            <h2 className="dla-section-title">Data Localization Compliance Challenges</h2>
                            <p className="dla-section-desc">
                                Organizations across BFSI, government, and enterprise sectors face significant
                                complexity navigating India's layered data localization landscape
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="dla-grid-2">
                        {challengesData.map((item, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 90}>
                                <div className="dla-challenge-card">
                                    <div className="dla-icon-circle">{item.icon}</div>
                                    <h3 className="dla-card-title">{item.title}</h3>
                                    <p className="dla-card-desc">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Framework Components */}
            <section className="dla-section dla-bg-panel">
                <div className="dla-container">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="dla-section-header">
                            <h2 className="dla-section-title">Our Data Localization Audit Framework</h2>
                            <p className="dla-section-desc">
                                A comprehensive assessment and remediation framework covering all technical,
                                legal, and regulatory dimensions of data localization compliance
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="dla-grid-3">
                        {frameworkComponents.map((item, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 90}>
                                <div className="dla-component-card">
                                    <div className="dla-icon-circle">{item.icon}</div>
                                    <h3 className="dla-card-title">{item.title}</h3>
                                    <p className="dla-card-desc">{item.description}</p>
                                    <div className="dla-card-bar" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="dla-section dla-bg-white">
                <div className="dla-container">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="dla-section-header">
                            <h2 className="dla-section-title">Our Audit Methodology</h2>
                            <p className="dla-section-desc">
                                A structured 10-step methodology from regulatory analysis through technical
                                remediation and ongoing compliance assurance
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="dla-grid-3">
                        {approachSteps.map((step, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 80}>
                                <div className="dla-approach-card">
                                    <div className="dla-step-num">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="dla-icon-circle">{step.icon}</div>
                                    <h3 className="dla-card-title">{step.title}</h3>
                                    <p className="dla-card-desc">{step.description}</p>
                                    <div className="dla-card-bar" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Checklist */}
            <section className="dla-section dla-bg-panel">
                <div className="dla-container">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="dla-section-header">
                            <h2 className="dla-section-title">Regulatory Coverage Checklist</h2>
                            <p className="dla-section-desc">
                                Our audit covers data localization obligations across all major Indian regulations
                                and regulatory bodies
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="dla-checklist-grid">
                        {complianceChecklist.map((item, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 50}>
                                <div className="dla-checklist-item">
                                    <div className="dla-check-icon"><CheckCircle size={22} /></div>
                                    <span className="dla-check-text">{item}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="dla-section dla-bg-white">
                <div className="dla-container">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="dla-section-header">
                            <h2 className="dla-section-title">Why Choose CyberAries?</h2>
                        </div>
                    </ScrollReveal>
                    <div className="dla-grid-3">
                        {whyChooseItems.map((item, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 150}>
                                <div className="dla-why-card">
                                    <div className="dla-why-icon">{item.icon}</div>
                                    <h3 className="dla-why-title">{item.title}</h3>
                                    <p className="dla-why-desc">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Difference */}
            <section className="dla-difference">
                <div className="dla-container">
                    <ScrollReveal direction="up">
                        <h2 className="dla-diff-title">
                            THE <span className="dla-diff-red">CYBERARIES</span> DIFFERENCE
                        </h2>
                    </ScrollReveal>
                    <div className="dla-compare-grid">
                        <ScrollReveal direction="left" delay={100}>
                            <div className="dla-compare-col dla-compare-trad">
                                <h3 className="dla-compare-heading">Traditional Compliance Approach</h3>
                                <ul className="dla-compare-list">
                                    {difference.traditional.map((item, i) => (
                                        <li key={i} className="dla-compare-item">
                                            <span className="dla-bullet">•</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="dla-compare-col dla-compare-ca">
                                <h3 className="dla-compare-heading dla-compare-ca-heading">
                                    CyberAries Data Localization Audit
                                </h3>
                                <ul className="dla-compare-list">
                                    {difference.cyberaries.map((item, i) => (
                                        <li key={i} className="dla-compare-item">
                                            <span className="dla-bullet">•</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="dla-section dla-bg-white">
                <div className="dla-container">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="dla-section-header">
                            <h2 className="dla-section-title">Comprehensive Deliverables</h2>
                        </div>
                    </ScrollReveal>
                    <div className="dla-grid-2">
                        {deliverables.map((d, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100}>
                                <div className="dla-deliverable-card">
                                    <div className="dla-deliverable-icon">{d.icon}</div>
                                    <h4 className="dla-deliverable-title">{d.title}</h4>
                                    <ul className="dla-deliverable-list">
                                        {d.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="dla-cta">
                <div className="dla-container">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="dla-cta-content">
                            <h2 className="dla-cta-title">Achieve Data Localization Compliance Across All Indian Regulations</h2>
                            <p className="dla-cta-desc">
                                Our regulatory experts will assess your current data residency posture
                                and deliver a tailored remediation and compliance roadmap.
                            </p>
                            <button className="dla-btn dla-btn-primary dla-btn-lg" onClick={() => navigate('/contact')}>
                                Request a Compliance Assessment
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

        </div>
    );
};

export default DataLocalizationAudit;
