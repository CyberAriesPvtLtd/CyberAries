import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/government-digital.webp'; // ← swap to your actual image
import ctaBgImage from '../../../../images/cta/cta-background.webp';
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
  BookOpen,
  ArrowRight,
  Landmark,
} from 'lucide-react';
import './DataLocalizationAudit.css';

const DataLocalizationAudit = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // ── Parallax (desktop only) ──
  const heroRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const padNum = (n) => String(n).padStart(2, '0');

  // ── Data ──
  const challengesData = [
    {
      title: 'Determining Data Residency Boundaries',
      description: 'Identifying exactly which categories of data (payment, sensitive personal, and critical) must remain within India\'s geographic boundaries under RBI, MeitY, and DPDPA mandates.',
      icon: <MapPin size={28} />,
    },
    {
      title: 'Cloud & Multi-Cloud Compliance',
      description: 'Ensuring cloud-based data stores, backups, and processing pipelines remain compliant when organizational infrastructure spans AWS, Azure, GCP, and on-premise environments.',
      icon: <Globe size={28} />,
    },
    {
      title: 'Third-Party & Vendor Data Flows',
      description: 'Mapping and restricting data flows to overseas vendors, analytics providers, and SaaS platforms that inadvertently receive or store regulated Indian data.',
      icon: <Network size={28} />,
    },
    {
      title: 'Cross-Border Data Transfer Controls',
      description: 'Implementing lawful transfer mechanisms, sufficiency determinations, and contractual safeguards for data that must legitimately cross borders for secondary copies.',
      icon: <Lock size={28} />,
    },
    {
      title: 'Real-Time Monitoring & Evidence',
      description: 'Maintaining continuous, auditable evidence of data residency compliance for regulatory inspections without disrupting operational systems.',
      icon: <Eye size={28} />,
    },
    {
      title: 'Regulatory Overlap & Complexity',
      description: 'Navigating overlapping mandates from RBI (payment data), SEBI (securities data), IRDA (insurance data), and the DPDPA, each with distinct localization requirements.',
      icon: <AlertTriangle size={28} />,
    },
  ];

  const frameworkComponents = [
    {
      title: 'Data Classification & Mapping',
      description: 'Systematic classification of all organizational data by residency obligation category (critical, sensitive personal, payment) with full lineage mapping.',
      icon: <Database size={28} />,
    },
    {
      title: 'Regulatory Mandate Analysis',
      description: 'Detailed cross-mapping of RBI, SEBI, IRDA, MeitY, and DPDPA data localization requirements to your data landscape, jurisdictions, and processing activities.',
      icon: <FileText size={28} />,
    },
    {
      title: 'Cross-Border Transfer Framework',
      description: 'Design and implementation of lawful transfer mechanisms, SCCs, and contractual controls for data that legitimately requires cross-border transmission.',
      icon: <Globe size={28} />,
    },
    {
      title: 'Storage Architecture Review',
      description: 'Technical assessment and remediation of databases, data warehouses, backup systems, and cloud storage to enforce geographic data residency boundaries.',
      icon: <Shield size={28} />,
    },
    {
      title: 'Vendor & Third-Party Assessment',
      description: 'Comprehensive review of all data processors and sub-processors, ensuring contracts and technical controls enforce localization obligations.',
      icon: <Users size={28} />,
    },
    {
      title: 'Continuous Compliance Monitoring',
      description: 'Data residency monitoring dashboards, automated alerting for policy violations, and periodic review cycles to maintain ongoing compliance.',
      icon: <RefreshCw size={28} />,
    },
  ];

  const approachSteps = [
    {
      title: 'Regulatory Mandate Review',
      description: 'Deep analysis of all applicable Indian data localization mandates: RBI circular on payment data, DPDPA provisions, MeitY notifications, and sector-specific SEBI/IRDA guidelines.',
      icon: <BookOpen size={28} />,
    },
    {
      title: 'Data Discovery & Classification',
      description: 'Automated and manual discovery of all data stores, identifying regulated data by type, sensitivity, and residency obligation category.',
      icon: <Search size={28} />,
    },
    {
      title: 'Data Flow Mapping & Analysis',
      description: 'End-to-end mapping of all data flows (internal, cloud, and external) to identify where regulated data is created, processed, stored, and transmitted.',
      icon: <Network size={28} />,
    },
    {
      title: 'Gap Assessment & Risk Scoring',
      description: 'Structured gap analysis comparing current data residency posture against all applicable mandates, with weighted risk scores for each identified gap.',
      icon: <BarChart3 size={28} />,
    },
    {
      title: 'Remediation Architecture Design',
      description: 'Design of technical and organizational controls including data zone architectures, cloud region configurations, and API data masking to achieve compliant residency.',
      icon: <Settings size={28} />,
    },
    {
      title: 'Vendor & Processor Remediation',
      description: 'Renegotiate data processing agreements and enforce technical restrictions on all vendors, SaaS providers, and sub-processors handling regulated data.',
      icon: <FileCheck size={28} />,
    },
    {
      title: 'Cross-Border Transfer Controls',
      description: 'Implement and document lawful transfer mechanisms for data that legitimately crosses borders, including standard contractual clauses and adequacy assessments.',
      icon: <Lock size={28} />,
    },
    {
      title: 'Technical Control Implementation',
      description: 'Deploy database geo-isolation, cloud region restrictions, API data masking, and encryption controls to technically enforce residency boundaries.',
      icon: <Database size={28} />,
    },
    {
      title: 'Evidence & Documentation',
      description: 'Compile comprehensive compliance evidence including data maps, vendor contracts, and technical control documentation structured for regulatory inspection readiness.',
      icon: <FileText size={28} />,
    },
    {
      title: 'Monitoring & Ongoing Assurance',
      description: 'Establish automated data residency monitoring, periodic compliance reviews, and ongoing assurance reporting to maintain continuous compliance posture.',
      icon: <RefreshCw size={28} />,
    },
  ];

  const whyChooseItems = [
    {
      title: 'Multi-Regulator Expertise',
      description: 'Deep experience navigating overlapping data localization mandates from RBI, SEBI, DPDPA, IRDA, and MeitY for BFSI, government, and enterprise organizations.',
      icon: <Award size={28} />,
    },
    {
      title: 'CERT-In Empanelled',
      description: 'Government-recognized cybersecurity firm with proven regulatory audit credentials across Indian financial sector and government clients.',
      icon: <Shield size={28} />,
    },
    {
      title: 'Technical & Legal Alignment',
      description: 'We bridge the technical and legal dimensions by designing storage architectures that technically enforce residency boundaries while satisfying regulatory evidence requirements.',
      icon: <Globe size={28} />,
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
      'Cloud configurations reviewed only at account level, missing service-level residency gaps.',
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
      icon: <Database size={28} />,
      title: 'Data Residency Assessment',
      items: [
        'Comprehensive Data Discovery & Classification Report',
        'End-to-End Data Flow Maps with Residency Obligations',
        'Gap Analysis Against All Applicable Mandates',
        'Risk-Scored Remediation Roadmap',
      ],
    },
    {
      icon: <Settings size={28} />,
      title: 'Technical Controls',
      items: [
        'Cloud Region Configuration & Geo-isolation Implementation',
        'Database Residency Enforcement Architecture',
        'API Data Masking & Cross-Border Transfer Controls',
        'Backup & DR Data Residency Remediation',
      ],
    },
    {
      icon: <FileText size={28} />,
      title: 'Legal & Contractual Deliverables',
      items: [
        'Updated Data Processing Agreement Templates',
        'Standard Contractual Clauses for Cross-Border Transfers',
        'Vendor Data Residency Assessment Reports',
        'Cross-Border Transfer Mechanism Documentation',
      ],
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Compliance Reporting',
      items: [
        'Compliance Status Dashboard by Regulation',
        'Regulatory Inspection Evidence Repository',
        'Ongoing Monitoring Framework & Alerting Setup',
        'Annual Data Residency Compliance Review Plan',
      ],
    },
  ];

  return (
    <div className="dla-page">

      {/* ══════════════════════════════════════════
          HERO — RBI-identical structure
          bg layer (parallax) + overlay + glow + particles + left content
      ══════════════════════════════════════════ */}
      <section className="dla-hero-section" ref={heroRef}>

        {/* Parallax background */}
        <motion.div
          className="dla-hero-bg-layer"
          style={{
            backgroundImage: `url(${heroBgImage})`,
            y: isDesktop ? parallaxY : 0,
          }}
        />
        <div className="dla-hero-overlay" />
        <div className="dla-hero-glow" />

        {/* Floating particles */}
        <div className="dla-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="dla-hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="dla-container">
          <div className="dla-hero-inner">
            <div className="dla-hero-content">

              <ScrollReveal animation="fade-down" delay={0}>
                <div className="dla-hero-badge">
                  <Landmark size={14} className="dla-badge-icon" />
                  <span className="dla-badge-text">
                    GOVERNMENT &amp; DIGITAL <span className="dla-badge-divider">/</span> COMPLIANCE
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="dla-hero-title">
                  <span className="dla-text-gradient">Data Localization Audit &amp; Compliance</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="dla-hero-description">
                  The <strong>RBI Payment Data Storage circular</strong> and the{' '}
                  <strong>Digital Personal Data Protection Act (DPDPA)</strong> impose strict mandates on
                  where critical and personal data can be stored. Our <strong>Data Localization Audit</strong> covers
                  every dimension: regulatory mapping, technical discovery, vendor remediation, and
                  inspection-ready compliance evidence.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="dla-hero-actions">
                  <Link to="/contact" className="dla-btn dla-btn-primary dla-btn-large">
                    Schedule a Compliance Assessment
                  </Link>
                  <button className="dla-btn dla-btn-ghost dla-btn-large">Learn More</button>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* ══ CHALLENGES — 2-col numbered cards ══ */}
      <section className="dla-section dla-section--offwhite">
        <div className="dla-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="dla-section-header">
              <p className="dla-eyebrow">Key Challenges</p>
              <h2 className="dla-section-title">Data Localization Compliance Challenges</h2>
              <p className="dla-section-description">
                Organizations across BFSI, government, and enterprise sectors face significant complexity
                navigating India's layered data localization landscape.
              </p>
            </div>
          </ScrollReveal>

          <div className="dla-num-grid dla-num-grid--2col">
            {challengesData.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 90} triggerOnce={false}>
                <div className="dla-num-card">
                  <span className="dla-num-badge">{padNum(i + 1)}</span>
                  <div className="dla-num-icon">{item.icon}</div>
                  <div className="dla-num-body">
                    <h3 className="dla-num-title">{item.title}</h3>
                    <p className="dla-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FRAMEWORK COMPONENTS — 6-icon connected strip ══ */}
      <section className="dla-section dla-section--white">
        <div className="dla-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="dla-section-header">
              <p className="dla-eyebrow">Our Framework</p>
              <h2 className="dla-section-title">Our Data Localization Audit Framework</h2>
              <p className="dla-section-description">
                A comprehensive assessment and remediation framework covering all technical,
                legal, and regulatory dimensions of data localization compliance.
              </p>
            </div>
          </ScrollReveal>

          <div className="dla-components-strip">
            {frameworkComponents.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80} triggerOnce={false}>
                <div className="dla-comp-item">
                  {i < frameworkComponents.length - 1 && <span className="dla-comp-line" aria-hidden="true" />}
                  <div className="dla-comp-circle">{item.icon}</div>
                  <p className="dla-comp-title">{item.title}</p>
                  <p className="dla-comp-desc">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ APPROACH — 3-col step cards ══ */}
      <section className="dla-section dla-section--offwhite">
        <div className="dla-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="dla-section-header">
              <p className="dla-eyebrow">Methodology</p>
              <h2 className="dla-section-title">Our Audit Methodology</h2>
              <p className="dla-section-description">
                A structured 10-step methodology from regulatory analysis through technical
                remediation and ongoing compliance assurance.
              </p>
            </div>
          </ScrollReveal>

          <div className="dla-num-grid dla-num-grid--3col">
            {approachSteps.map((step, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 70} triggerOnce={false}>
                <div className="dla-num-card">
                  <span className="dla-num-badge">{padNum(i + 1)}</span>
                  <div className="dla-num-icon">{step.icon}</div>
                  <div className="dla-num-body">
                    <h3 className="dla-num-title">{step.title}</h3>
                    <p className="dla-num-desc">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPLIANCE CHECKLIST — 2-col list ══ */}
      <section className="dla-section dla-section--white">
        <div className="dla-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="dla-section-header">
              <p className="dla-eyebrow">Regulatory Coverage</p>
              <h2 className="dla-section-title">Regulatory Coverage Checklist</h2>
              <p className="dla-section-description">
                Our audit covers data localization obligations across all major Indian regulations
                and regulatory bodies.
              </p>
            </div>
          </ScrollReveal>

          <div className="dla-checklist-grid">
            {complianceChecklist.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 50} triggerOnce={false}>
                <div className="dla-checklist-item">
                  <div className="dla-check-icon"><CheckCircle size={22} /></div>
                  <span className="dla-check-text">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE — offwhite section, 3 cards ══ */}
      <section className="dla-section dla-section--offwhite">
        <div className="dla-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="dla-section-header">
              <p className="dla-eyebrow">Why CyberAries</p>
              <h2 className="dla-section-title">Why Choose CyberAries?</h2>
            </div>
          </ScrollReveal>

          <div className="dla-why-grid">
            {whyChooseItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150} triggerOnce={false}>
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

      {/* ══ DIFFERENCE — white section, 2 comparison cards ══ */}
      <section className="dla-section dla-section--white">
        <div className="dla-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <h2 className="dla-difference-title">
              THE <span className="dla-diff-highlight">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="dla-diff-grid">

            {/* Traditional column */}
            <ScrollReveal direction="left" delay={100} triggerOnce={false}>
              <div className="dla-diff-card dla-diff-card--traditional">
                <h3 className="dla-diff-heading">Traditional Compliance Approach</h3>
                <ul className="dla-diff-list">
                  {difference.traditional.map((item, i) => (
                    <li key={i} className="dla-diff-item">
                      <span className="dla-diff-bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* CyberAries featured column */}
            <ScrollReveal direction="right" delay={200} triggerOnce={false}>
              <div className="dla-diff-card dla-diff-card--featured">
                <h3 className="dla-diff-heading dla-diff-heading--ca">
                  CyberAries Data Localization Audit
                </h3>
                <ul className="dla-diff-list">
                  {difference.cyberaries.map((item, i) => (
                    <li key={i} className="dla-diff-item">
                      <CheckCircle size={18} className="dla-check-bullet" style={{ flexShrink: 0, marginTop: 3 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ══ DELIVERABLES — 2×2 premium pillar cards ══ */}
      <section className="dla-section dla-section--offwhite">
        <div className="dla-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="dla-section-header">
              <p className="dla-eyebrow">Deliverables</p>
              <h2 className="dla-section-title">Comprehensive Deliverables</h2>
              <p className="dla-section-description">
                End-to-end documentation, controls, and reporting to ensure data localization compliance
                and strengthen your data governance posture.
              </p>
            </div>
          </ScrollReveal>

          <div className="dla-pillar-grid">

            {deliverables.map((d, i) => (
              <ScrollReveal key={i} direction="up" delay={(i + 1) * 100} triggerOnce={false}>
                <div className="dla-pillar-card">
                  <span className="dla-pillar-bg-num" aria-hidden="true">{padNum(i + 1)}</span>
                  <div className="dla-pillar-top">
                    <div className="dla-pillar-icon-wrap">{d.icon}</div>
                    <div>
                      <span className="dla-pillar-num">{padNum(i + 1)}</span>
                      <h4 className="dla-pillar-title">{d.title}</h4>
                    </div>
                  </div>
                  <div className="dla-pillar-divider" />
                  <ul className="dla-pillar-list">
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

      {/* ══ CTA — RBI-identical dark section with bg image ══ */}
      <section
        className="dla-cta-section"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        <div className="dla-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="dla-cta-content">
              <h2 className="dla-cta-title">
                <span className="dla-text-gradient">
                  Achieve Data Localization Compliance Across All Indian Regulations
                </span>
              </h2>
              <p className="dla-cta-description">
                Our regulatory experts will assess your current data residency posture and deliver
                a tailored remediation and compliance roadmap covering RBI payment data, DPDPA
                cross-border transfer controls, and all applicable sector regulations.
              </p>
              <div className="dla-cta-buttons">
                <Link to="/contact" className="dla-btn dla-btn-primary dla-btn-large dla-cta-btn">
                  <span>Request a Compliance Assessment</span>
                  <ArrowRight size={18} className="dla-btn-icon" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default DataLocalizationAudit;
