import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/bank-finance.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import {
  Shield, Lock, FileText, AlertTriangle, CheckCircle,
  Settings, BarChart3, Users, Database, Bell,
  Eye, Award, Handshake, RefreshCw, FileCheck,
  UserCheck, Network, BookOpen, Target, ArrowRight,
  TrendingUp, Laptop, Building, ShieldCheck, Smartphone, DollarSign, Landmark
} from 'lucide-react';
import './RBINBFCGuidelines.css';

/**
 * RBI NBFC Cyber Security Guidelines Page
 * Premium design — fully aligned with RBI Cyber Framework page
 */
const RBINBFCGuidelines = () => {
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
      title: "Scale-Based Compliance Requirements",
      description: "NBFCs must implement controls proportionate to their size, complexity, and digital footprint as per RBI's risk-based approach.",
      icon: <TrendingUp size={28} />
    },
    {
      title: "Digital Lending Security",
      description: "Securing mobile apps, APIs, and digital lending platforms against fraud, data breaches, and unauthorized access.",
      icon: <Laptop size={28} />
    },
    {
      title: "Customer Data Protection",
      description: "Protecting sensitive customer financial data, KYC documents, and transaction information from evolving cyber threats.",
      icon: <Database size={28} />
    },
    {
      title: "Third-Party Integration Risks",
      description: "Managing cyber risks from fintech partnerships, payment gateways, and technology service providers.",
      icon: <Network size={28} />
    },
    {
      title: "Limited Security Resources",
      description: "NBFCs often lack dedicated security teams and budgets compared to traditional banks, making compliance challenging.",
      icon: <Users size={28} />
    },
    {
      title: "Incident Response Preparedness",
      description: "Establishing incident response capabilities and crisis management frameworks suitable for NBFC operations.",
      icon: <AlertTriangle size={28} />
    }
  ];

  const approachSteps = [
    {
      title: "NBFC Profile Assessment",
      description: "Evaluate business model, digital infrastructure, customer base, and regulatory classification to determine compliance scope.",
      icon: <Building size={28} />
    },
    {
      title: "Risk-Based Gap Analysis",
      description: "Conduct proportionate gap assessment aligned with NBFC's scale and digital presence against RBI guidelines.",
      icon: <BarChart3 size={28} />
    },
    {
      title: "Governance Framework Setup",
      description: "Establish board-level oversight, cyber security policies, and management accountability structures.",
      icon: <FileCheck size={28} />
    },
    {
      title: "Core Security Controls",
      description: "Implement essential controls for identity management, data encryption, network security, and access controls.",
      icon: <Lock size={28} />
    },
    {
      title: "Digital Platform Security",
      description: "Secure mobile apps, web portals, APIs, and digital lending platforms with appropriate security measures.",
      icon: <Laptop size={28} />
    },
    {
      title: "Vendor Risk Management",
      description: "Establish third-party risk assessment framework for fintech partners and technology service providers.",
      icon: <UserCheck size={28} />
    },
    {
      title: "Security Monitoring Setup",
      description: "Deploy proportionate monitoring capabilities for threat detection and security event management.",
      icon: <Eye size={28} />
    },
    {
      title: "Incident Response Planning",
      description: "Develop NBFC-appropriate incident response procedures and crisis management frameworks.",
      icon: <Bell size={28} />
    },
    {
      title: "Staff Training Programs",
      description: "Conduct cyber security awareness training for employees and management personnel.",
      icon: <Users size={28} />
    },
    {
      title: "Security Testing",
      description: "Perform vulnerability assessments and penetration testing of critical systems and applications.",
      icon: <CheckCircle size={28} />
    },
    {
      title: "Compliance Documentation",
      description: "Prepare comprehensive evidence and documentation for RBI inspections and regulatory reporting.",
      icon: <FileText size={28} />
    },
    {
      title: "Continuous Improvement",
      description: "Establish ongoing compliance monitoring and security posture enhancement programs.",
      icon: <RefreshCw size={28} />
    }
  ];

  const nbfcRequirements = [
    {
      title: "Board Oversight",
      description: "Board-approved cyber security policy with regular updates on cyber risk and incidents.",
      icon: <Users size={28} />
    },
    {
      title: "Proportionate Controls",
      description: "Security controls scaled to NBFC's size, operations, and technology adoption level.",
      icon: <TrendingUp size={28} />
    },
    {
      title: "Digital Lending Security",
      description: "Specific controls for mobile apps, digital onboarding, and automated lending platforms.",
      icon: <Smartphone size={28} />
    },
    {
      title: "Data Privacy Compliance",
      description: "Customer data protection aligned with DPDP Act and RBI data localization requirements.",
      icon: <Database size={28} />
    },
    {
      title: "Fintech Partnership Security",
      description: "Due diligence and ongoing monitoring of technology service providers and partners.",
      icon: <Handshake size={28} />
    },
    {
      title: "Incident Reporting",
      description: "Mandatory reporting of cyber incidents to RBI within specified timelines.",
      icon: <Bell size={28} />
    }
  ];

  const whyChooseItems = [
    {
      title: "NBFC Specialization",
      description: "Deep understanding of NBFC business models, digital lending, and proportionate security requirements.",
      icon: <Award size={28} />
    },
    {
      title: "Cost-Effective Solutions",
      description: "Pragmatic, scalable security implementations designed for NBFC budgets and resource constraints.",
      icon: <DollarSign size={28} />
    },
    {
      title: "Complete Implementation",
      description: "End-to-end support from policy development to technical controls and ongoing compliance.",
      icon: <Handshake size={28} />
    }
  ];

  return (
    <div className="rbi-nbfc-page">

      {/* ══════════════════════════════════════════
          HERO — parallax bg + overlay + glow + particles
      ══════════════════════════════════════════ */}
      <section className="nbfc-hero-section" ref={heroRef}>

        {/* Parallax background */}
        <motion.div
          className="nbfc-hero-bg-layer"
          style={{
            backgroundImage: `url(${heroBgImage})`,
            y: isDesktop ? parallaxY : 0
          }}
        />
        <div className="nbfc-hero-overlay" />
        <div className="nbfc-hero-glow" />

        {/* Floating particles */}
        <div className="nbfc-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="nbfc-hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="nbfc-container">
          <div className="nbfc-hero-inner">
            <div className="nbfc-hero-content">
              <ScrollReveal animation="fade-down" delay={0}>
                <div className="nbfc-hero-badge">
                  <Landmark size={14} className="nbfc-badge-icon" />
                  <span className="nbfc-badge-text">
                    NBFC Regulatory Compliance
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="nbfc-hero-title">
                  <span className="nbfc-text-gradient">RBI NBFC Cyber Security Guidelines</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="nbfc-hero-description">
                  The Reserve Bank of India has issued comprehensive <strong>Cyber Security Guidelines for NBFCs</strong> to ensure robust security across digital lending, payment systems, and customer data protection. <strong>Our specialized services help NBFCs achieve proportionate compliance</strong> aligned with their scale, operations, and digital footprint — while managing costs effectively.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="nbfc-hero-actions">
                  <button className="nbfc-btn nbfc-btn-primary nbfc-btn-large" onClick={() => window.location.href = '/contact'}>
                    Request NBFC Assessment
                    <ArrowRight size={18} className="nbfc-btn-icon" />
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ KEY CHALLENGES — Off-white + numbered grid ══ */}
      <section className="nbfc-section nbfc-section--offwhite">
        <div className="nbfc-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="nbfc-section-header">
              <p className="nbfc-eyebrow">NBFC Compliance</p>
              <h2 className="nbfc-section-title">NBFC Cyber Security Challenges</h2>
              <p className="nbfc-section-description">
                NBFCs face unique challenges in balancing security requirements with operational efficiency and resource constraints
              </p>
            </div>
          </ScrollReveal>

          <div className="nbfc-num-grid nbfc-num-grid--2col">
            {challengesData.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="nbfc-num-card">
                  <span className="nbfc-num-badge">{padNum(index + 1)}</span>
                  <div className="nbfc-num-icon">{item.icon}</div>
                  <div className="nbfc-num-body">
                    <h3 className="nbfc-num-title">{item.title}</h3>
                    <p className="nbfc-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RBI GUIDELINES COMPONENTS — White + horizontal strip ══ */}
      <section className="nbfc-section nbfc-section--white">
        <div className="nbfc-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="nbfc-section-header">
              <p className="nbfc-eyebrow">The Foundation</p>
              <h2 className="nbfc-section-title">RBI Guidelines for NBFCs</h2>
              <p className="nbfc-section-description">
                Key requirements mandated by RBI for NBFC cyber security compliance
              </p>
            </div>
          </ScrollReveal>

          <div className="nbfc-components-strip">
            {nbfcRequirements.map((req, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="nbfc-comp-item">
                  <div className="nbfc-comp-circle">{req.icon}</div>
                  {index < nbfcRequirements.length - 1 && (
                    <div className="nbfc-comp-line" aria-hidden="true" />
                  )}
                  <h3 className="nbfc-comp-title">{req.title}</h3>
                  <p className="nbfc-comp-desc">{req.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ IMPLEMENTATION APPROACH — Off-white + numbered 3-col grid ══ */}
      <section className="nbfc-section nbfc-section--offwhite">
        <div className="nbfc-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="nbfc-section-header">
              <p className="nbfc-eyebrow">Implementation</p>
              <h2 className="nbfc-section-title">Our NBFC Compliance Approach</h2>
              <p className="nbfc-section-description">
                Tailored methodology designed specifically for NBFC requirements and resource constraints
              </p>
            </div>
          </ScrollReveal>

          <div className="nbfc-num-grid nbfc-num-grid--3col">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80} triggerOnce={false}>
                <div className="nbfc-num-card nbfc-num-card--white">
                  <span className="nbfc-num-badge">{padNum(index + 1)}</span>
                  <div className="nbfc-num-icon">{step.icon}</div>
                  <div className="nbfc-num-body">
                    <h3 className="nbfc-num-title">{step.title}</h3>
                    <p className="nbfc-num-desc">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE SECURITY AREAS — Circle + 4 cards ══ */}
      <section className="nbfc-section nbfc-section--white">
        <div className="nbfc-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="nbfc-section-header">
              <p className="nbfc-eyebrow">Control Coverage</p>
              <h2 className="nbfc-section-title">Core Security Areas Coverage</h2>
              <p className="nbfc-section-description">
                Essential security controls for NBFC cyber resilience and RBI compliance
              </p>
            </div>
          </ScrollReveal>

          <div className="nbfc-ctrl-layout">

            {/* ── LEFT COLUMN ── */}
            <div className="nbfc-ctrl-col nbfc-ctrl-col--left">

              {/* Q1 — Identity & Access */}
              <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
                <div className="nbfc-ctrl-card nbfc-ctrl-card--q1">
                  <div className="nbfc-ctrl-card-header">
                    <span className="nbfc-ctrl-dot" />
                    <span className="nbfc-ctrl-card-label">Identity &amp; Access</span>
                  </div>
                  <ul className="nbfc-ctrl-list">
                    <li>Identity &amp; access management with privileged account controls</li>
                    <li>Customer data encryption and protection mechanisms</li>
                    <li>Secure mobile application development and deployment</li>
                    <li>API security for digital lending integrations</li>
                    <li>Role-based access control and least privilege enforcement</li>
                    <li>Multi-factor authentication for critical systems</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Q3 — Manage & Govern */}
              <ScrollReveal animation="fade-right" delay={300} triggerOnce={false}>
                <div className="nbfc-ctrl-card nbfc-ctrl-card--q3">
                  <div className="nbfc-ctrl-card-header">
                    <span className="nbfc-ctrl-dot" />
                    <span className="nbfc-ctrl-card-label">Manage &amp; Govern</span>
                  </div>
                  <ul className="nbfc-ctrl-list">
                    <li>Business continuity and disaster recovery</li>
                    <li>Third-party and vendor risk management</li>
                    <li>Security awareness and training programs</li>
                    <li>Cyber insurance coverage requirements</li>
                    <li>Regulatory reporting and compliance documentation</li>
                    <li>Board-level governance and oversight mechanisms</li>
                  </ul>
                </div>
              </ScrollReveal>

            </div>

            {/* ── CENTER CIRCLE ── */}
            <div className="nbfc-ctrl-center">
              <ScrollReveal animation="fade-up" delay={200} triggerOnce={false}>
                <div className="nbfc-ctrl-circle-wrap">
                  <svg className="nbfc-ctrl-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

                    {/* PIE SLICES */}
                    <path d="M200,200 L200,20 A180,180 0 0,0 20,200 Z" fill="#1a1a1a" />
                    <path d="M200,200 L200,20 A180,180 0 0,1 380,200 Z" fill="#C1121F" />
                    <path d="M200,200 L20,200 A180,180 0 0,0 200,380 Z" fill="#C1121F" />
                    <path d="M200,200 L380,200 A180,180 0 0,1 200,380 Z" fill="#8B0000" />

                    {/* White dividers */}
                    <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

                    {/* Outer decorative rings */}
                    <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(193,18,31,0.3)" strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="152" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Center white hole */}
                    <circle cx="200" cy="200" r="72" fill="white" />
                    <circle cx="200" cy="200" r="72" fill="none" stroke="rgba(193,18,31,0.2)" strokeWidth="1.5" />

                    {/* Quadrant labels */}
                    <text x="121" y="113" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">IDENTITY</text>
                    <text x="121" y="127" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; ACCESS</text>

                    <text x="279" y="113" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">PROTECT</text>
                    <text x="279" y="127" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; DETECT</text>

                    <text x="121" y="273" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">MANAGE</text>
                    <text x="121" y="287" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; GOVERN</text>

                    <text x="279" y="273" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">RESILIENCE</text>
                    <text x="279" y="287" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; CONTINUITY</text>

                    {/* Dashed connecting lines */}
                    <line x1="28" y1="28" x2="0" y2="0" stroke="rgba(193,18,31,0.55)" strokeWidth="1.5" strokeDasharray="5 4" />
                    <line x1="28" y1="372" x2="0" y2="400" stroke="rgba(193,18,31,0.55)" strokeWidth="1.5" strokeDasharray="5 4" />
                    <line x1="372" y1="28" x2="400" y2="0" stroke="rgba(193,18,31,0.55)" strokeWidth="1.5" strokeDasharray="5 4" />
                    <line x1="372" y1="372" x2="400" y2="400" stroke="rgba(193,18,31,0.55)" strokeWidth="1.5" strokeDasharray="5 4" />

                    {/* Corner dots */}
                    <circle cx="28" cy="28" r="5.5" fill="#C1121F" />
                    <circle cx="372" cy="28" r="5.5" fill="#C1121F" />
                    <circle cx="28" cy="372" r="5.5" fill="#C1121F" />
                    <circle cx="372" cy="372" r="5.5" fill="#C1121F" />

                  </svg>

                  {/* Center hole text */}
                  <div className="nbfc-ctrl-center-text">
                    <span className="nbfc-ctrl-center-num">10+</span>
                    <span className="nbfc-ctrl-center-label">CORE SECURITY<br />AREAS</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="nbfc-ctrl-col nbfc-ctrl-col--right">

              {/* Q2 — Protect & Detect */}
              <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
                <div className="nbfc-ctrl-card nbfc-ctrl-card--q2">
                  <div className="nbfc-ctrl-card-header">
                    <span className="nbfc-ctrl-dot" />
                    <span className="nbfc-ctrl-card-label">Protect &amp; Detect</span>
                  </div>
                  <ul className="nbfc-ctrl-list">
                    <li>Network segmentation and perimeter security</li>
                    <li>Security monitoring and incident detection</li>
                    <li>Vulnerability and patch management</li>
                    <li>Application security throughout SDLC</li>
                    <li>Threat intelligence and proactive defence</li>
                    <li>Endpoint protection and malware prevention</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Q4 — Resilience & Continuity */}
              <ScrollReveal animation="fade-left" delay={400} triggerOnce={false}>
                <div className="nbfc-ctrl-card nbfc-ctrl-card--q4">
                  <div className="nbfc-ctrl-card-header">
                    <span className="nbfc-ctrl-dot" />
                    <span className="nbfc-ctrl-card-label">Resilience &amp; Continuity</span>
                  </div>
                  <ul className="nbfc-ctrl-list">
                    <li>Incident response and cyber crisis management</li>
                    <li>Data classification and information lifecycle</li>
                    <li>Fintech partnership security controls</li>
                    <li>Backup and recovery with off-site storage</li>
                    <li>Physical and environmental security controls</li>
                    <li>Continuous compliance monitoring</li>
                  </ul>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE — Off-white + numbered 3-col ══ */}
      <section className="nbfc-section nbfc-section--offwhite">
        <div className="nbfc-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="nbfc-section-header">
              <p className="nbfc-eyebrow">Why CyberAries</p>
              <h2 className="nbfc-section-title">Why Choose CyberAries for NBFC Compliance?</h2>
            </div>
          </ScrollReveal>

          <div className="nbfc-num-grid nbfc-num-grid--3col">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150} triggerOnce={false}>
                <div className="nbfc-num-card nbfc-num-card--white">
                  <div className="nbfc-num-icon">{item.icon}</div>
                  <div className="nbfc-num-body">
                    <h3 className="nbfc-num-title">{item.title}</h3>
                    <p className="nbfc-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CYBERARIES DIFFERENCE — White + featured dark card ══ */}
      <section className="nbfc-section nbfc-section--white nbfc-difference-section">
        <div className="nbfc-container">
          <ScrollReveal animation="fade-up" triggerOnce={false}>
            <h2 className="nbfc-difference-title">
              THE <span className="nbfc-diff-highlight">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="nbfc-diff-grid">

            {/* Traditional consulting */}
            <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
              <div className="nbfc-diff-card nbfc-diff-card--traditional">
                <h3 className="nbfc-diff-heading">Traditional NBFC Consulting</h3>
                <ul className="nbfc-diff-list">
                  {[
                    "One-size-fits-all solutions not suited for NBFCs",
                    "Expensive enterprise-grade tools beyond NBFC budgets",
                    "Limited understanding of digital lending operations",
                    "Generic documentation not aligned with RBI guidelines",
                    "Ignores resource and skill constraints of smaller entities",
                    "Leaves NBFCs struggling post-assessment with implementation"
                  ].map((item, i) => (
                    <li key={i} className="nbfc-diff-item">
                      <span className="nbfc-diff-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* CyberAries solutions */}
            <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
              <div className="nbfc-diff-card nbfc-diff-card--featured">
                <h3 className="nbfc-diff-heading nbfc-diff-heading--ca">
                  CYBERARIES NBFC Solutions
                </h3>
                <ul className="nbfc-diff-list">
                  {[
                    "Proportionate controls matched to NBFC scale and operations",
                    "Cost-effective solutions within realistic NBFC budgets",
                    "Deep digital lending and fintech ecosystem expertise",
                    "RBI-specific documentation and evidence management",
                    "Practical hands-on implementation with knowledge transfer",
                    "Builds sustainable internal security capabilities"
                  ].map((item, i) => (
                    <li key={i} className="nbfc-diff-item">
                      <span className="nbfc-diff-bullet">
                        <CheckCircle size={18} className="nbfc-check-icon" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ══ DELIVERABLES — 2×2 premium pillar cards ══ */}
      <section className="nbfc-section nbfc-section--offwhite">
        <div className="nbfc-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="nbfc-section-header">
              <p className="nbfc-eyebrow">Deliverables</p>
              <h2 className="nbfc-section-title">NBFC Compliance Deliverables</h2>
              <p className="nbfc-section-description">
                End-to-end documentation, controls, and reporting to ensure RBI NBFC compliance and strengthen your security posture.
              </p>
            </div>
          </ScrollReveal>

          <div className="nbfc-pillar-grid">

            {/* 01 */}
            <ScrollReveal direction="up" delay={100} triggerOnce={false}>
              <div className="nbfc-pillar-card">
                <span className="nbfc-pillar-bg-num" aria-hidden="true">01</span>
                <div className="nbfc-pillar-top">
                  <div className="nbfc-pillar-icon-wrap">
                    <FileText size={28} />
                  </div>
                  <div>
                    <span className="nbfc-pillar-num">01</span>
                    <h4 className="nbfc-pillar-title">Governance &amp; Policies</h4>
                  </div>
                </div>
                <div className="nbfc-pillar-divider" />
                <ul className="nbfc-pillar-list">
                  <li>Board-approved Cyber Security Policy</li>
                  <li>Risk Management Framework</li>
                  <li>Incident Response Plan</li>
                  <li>Business Continuity Procedures</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 02 */}
            <ScrollReveal direction="up" delay={200} triggerOnce={false}>
              <div className="nbfc-pillar-card">
                <span className="nbfc-pillar-bg-num" aria-hidden="true">02</span>
                <div className="nbfc-pillar-top">
                  <div className="nbfc-pillar-icon-wrap">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <span className="nbfc-pillar-num">02</span>
                    <h4 className="nbfc-pillar-title">Technical Controls</h4>
                  </div>
                </div>
                <div className="nbfc-pillar-divider" />
                <ul className="nbfc-pillar-list">
                  <li>Identity and Access Management</li>
                  <li>Data Encryption Implementation</li>
                  <li>Network Security Architecture</li>
                  <li>Mobile App Security Controls</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 03 */}
            <ScrollReveal direction="up" delay={300} triggerOnce={false}>
              <div className="nbfc-pillar-card">
                <span className="nbfc-pillar-bg-num" aria-hidden="true">03</span>
                <div className="nbfc-pillar-top">
                  <div className="nbfc-pillar-icon-wrap">
                    <Network size={28} />
                  </div>
                  <div>
                    <span className="nbfc-pillar-num">03</span>
                    <h4 className="nbfc-pillar-title">Third-Party Risk</h4>
                  </div>
                </div>
                <div className="nbfc-pillar-divider" />
                <ul className="nbfc-pillar-list">
                  <li>Vendor Assessment Framework</li>
                  <li>Fintech Partnership Security Guidelines</li>
                  <li>SLAs with Security Clauses</li>
                  <li>Ongoing Monitoring Procedures</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 04 */}
            <ScrollReveal direction="up" delay={400} triggerOnce={false}>
              <div className="nbfc-pillar-card">
                <span className="nbfc-pillar-bg-num" aria-hidden="true">04</span>
                <div className="nbfc-pillar-top">
                  <div className="nbfc-pillar-icon-wrap">
                    <BarChart3 size={28} />
                  </div>
                  <div>
                    <span className="nbfc-pillar-num">04</span>
                    <h4 className="nbfc-pillar-title">Compliance &amp; Reporting</h4>
                  </div>
                </div>
                <div className="nbfc-pillar-divider" />
                <ul className="nbfc-pillar-list">
                  <li>Gap Assessment Report</li>
                  <li>Security Testing Results</li>
                  <li>RBI Compliance Evidence Repository</li>
                  <li>Regular Compliance Status Updates</li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ══ CTA — dark section with bg image ══ */}
      <section
        className="nbfc-cta-section"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        <div className="nbfc-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="nbfc-cta-content">
              <h2 className="nbfc-cta-title">
                <span className="nbfc-text-gradient">Achieve NBFC Cyber Security Compliance</span>
              </h2>
              <p className="nbfc-cta-description">
                Partner with NBFC security specialists for cost-effective, proportionate RBI compliance. Our team works closely with you to close gaps, implement working controls, and prepare you for RBI inspections.
              </p>
              <div className="nbfc-cta-buttons">
                <Link to="/contact" className="nbfc-btn nbfc-btn-primary nbfc-btn-large nbfc-cta-btn">
                  <span>Request NBFC Compliance Assessment</span>
                  <ArrowRight size={18} className="nbfc-btn-icon" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default RBINBFCGuidelines;
