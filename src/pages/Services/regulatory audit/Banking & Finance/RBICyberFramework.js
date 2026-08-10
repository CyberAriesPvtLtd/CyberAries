import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/bank-finance.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import {
  Shield, Settings, Target, Lock, FileText, AlertTriangle, CheckCircle, BarChart3, Users, Globe, Database, Bell,
  Eye, Award, Handshake, RefreshCw, FileCheck,
  UserCheck, Network, ArrowRight,
  Landmark
} from 'lucide-react';
import './RBICyberFramework.css';

const RBICyberFramework = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // ── Parallax (desktop only, same as BFSI) ──
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
    { title: "Complex Regulatory Requirements", description: "The RBI Cyber Security Framework mandates comprehensive controls across governance, operations, and technology, requiring detailed documentation and implementation.", icon: <FileText size={28} /> },
    { title: "Board-Level Cyber Security Policy", description: "Banks must establish a board-approved cyber security policy aligned with business strategy and risk appetite.", icon: <Users size={28} /> },
    { title: "Cyber Crisis Management Plan", description: "Developing and testing comprehensive incident response and crisis management frameworks for cyber incidents.", icon: <AlertTriangle size={28} /> },
    { title: "Third-Party Risk Management", description: "Managing cyber security risks from vendors, service providers, and third-party integrations.", icon: <Network size={28} /> },
    { title: "Advanced Threat Detection", description: "Implementing real-time monitoring, threat intelligence, and anomaly detection systems.", icon: <Eye size={28} /> },
    { title: "Baseline Cyber Security Controls", description: "Implementing and maintaining 24 baseline controls covering identity management, data protection, and network security." }
  ];

  const approachSteps = [
    { title: "Governance Assessment", description: "Evaluate existing cyber security governance structure, board oversight, and policy framework against RBI requirements.", icon: <FileCheck size={28} /> },
    { title: "Gap Analysis", description: "Conduct comprehensive gap assessment across all 24 baseline controls and governance requirements.", icon: <BarChart3 size={28} /> },
    {
    title: "Risk Profiling",
    description: "Develop cyber risk profile based on bank's size, operations, digital presence, and customer base.",
    icon: <Target size={28} />
},
   {
    title: "Policy Development",
    description: "Draft board-approved cyber security policy, strategy, and supporting procedures aligned with RBI framework.",
    icon: <FileText size={28} />
},
{
  title: "Technical Controls Implementation",
  description: "Deploy baseline security controls including identity management, encryption, network security, and monitoring.",
  icon: <Settings size={28} />
},
    { title: "Cyber Crisis Management Framework", description: "Establish incident response plan, business continuity procedures, and crisis communication protocols.", icon: <Bell size={28} /> },
    { title: "Third-Party Risk Management", description: "Implement vendor assessment framework, contractual controls, and ongoing monitoring mechanisms.", icon: <UserCheck size={28} /> },
    { title: "Security Operations Center (SOC)", description: "Set up or enhance SOC capabilities for 24/7 monitoring, threat detection, and incident response.", icon: <Eye size={28} /> },
    { title: "Training & Awareness", description: "Conduct board-level briefings and organization-wide cyber security awareness programs.", icon: <Users size={28} /> },
    { title: "Testing & Validation", description: "Perform vulnerability assessments, penetration testing, and crisis simulation exercises.", icon: <CheckCircle size={28} /> },
    { title: "Compliance Documentation", description: "Prepare comprehensive evidence repository for RBI inspections and regulatory reporting.", icon: <Database size={28} /> },
    { title: "Continuous Monitoring", description: "Establish ongoing compliance monitoring, control effectiveness testing, and improvement programs.", icon: <RefreshCw size={28} /> }
  ];

  const frameworkComponents = [
    {
  title: "Governance Framework",
  description: "Board oversight, cyber security strategy, risk management framework, and accountability structure.",
  icon: <Shield size={28} />
},
    { title: "Baseline Security Controls", description: "24 mandatory controls covering identity, data protection, network security, and resilience.", icon: <Lock size={28} /> },
    { title: "Cyber Crisis Management", description: "Incident response, business continuity, crisis communication, and recovery procedures.", icon: <AlertTriangle size={28} /> },
    { title: "Third-Party Risk Management", description: "Vendor assessment, contractual safeguards, and continuous monitoring of outsourced services.", icon: <Network size={28} /> },
    { title: "Threat Intelligence & Monitoring", description: "Real-time threat detection, security information sharing, and proactive defense measures.", icon: <Eye size={28} /> },
    { title: "Security Operations Center", description: "24/7 monitoring, incident detection and response, and security event management.", icon: <Bell size={28} /> }
  ];

  const whyChooseItems = [
    { title: "RBI Audit Experience", description: "Deep expertise in RBI regulatory requirements with successful audit track record across major banks.", icon: <Award size={28} /> },
    { title: "Banking Domain Knowledge", description: "Specialized understanding of banking operations, payment systems, and financial sector regulations.", icon: <Globe size={28} /> },
    { title: "End-to-End Implementation", description: "Complete support from gap analysis to implementation, testing, and ongoing compliance maintenance.", icon: <Handshake size={28} /> }
  ];


  return (
    <div className="rbi-cyber-framework-page">

      {/* ══════════════════════════════════════════
          HERO — BFSI-identical structure
          bg layer (parallax) + overlay + glow +
          particles + left content + right image
      ══════════════════════════════════════════ */}
      <section className="rbi-hero-section" ref={heroRef}>

        {/* Parallax background — same as BFSI */}
        <motion.div
          className="rbi-hero-bg-layer"
          style={{
            backgroundImage: `url(${heroBgImage})`,
            y: isDesktop ? parallaxY : 0
          }}
        />
        <div className="rbi-hero-overlay" />
        <div className="rbi-hero-glow" />

        {/* Floating particles */}
        <div className="rbi-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="rbi-hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="rbi-container">
          <div className="rbi-hero-inner">

            <div className="rbi-hero-content">
              <ScrollReveal animation="fade-down" delay={0}>
                <div className="rbi-hero-badge">
                  <Landmark size={14} className="rbi-badge-icon" />
                  <span className="rbi-badge-text">
                    BANKING SECTOR <span className="rbi-badge-divider">/</span> COMPLIANCE
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="rbi-hero-title">
                  <span className="rbi-text-gradient">Secure RBI Compliance</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="rbi-hero-description">
                  The Reserve Bank of India (RBI) Cyber Security Framework mandates comprehensive security measures for all Scheduled Commercial Banks and Urban Cooperative Banks. <strong>Our specialized services ensure complete compliance</strong> with RBI directives covering governance, baseline controls, crisis management, and third-party risk. Navigate complex regulatory requirements with expert guidance for sustainable cyber resilience.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="rbi-hero-actions">
                  <button className="rbi-btn rbi-btn-primary" onClick={() => window.location.href='/contact'}>
                    Schedule RBI Consultation
                  </button>
                </div>
              </ScrollReveal>
            </div>



          </div>
        </div>
      </section>

      {/* ══ KEY CHALLENGES — Off-white + red grid ══ */}
      <section className="rbi-section rbi-section--offwhite">
        <div className="rbi-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="rbi-section-header">
              <p className="rbi-eyebrow">RBI Compliance</p>
              <h2 className="rbi-section-title">RBI Framework Compliance Challenges</h2>
              <p className="rbi-section-description">
                Banks face multiple challenges in implementing and maintaining RBI's comprehensive cyber security requirements
              </p>
            </div>
          </ScrollReveal>

          <div className="rbi-num-grid rbi-num-grid--2col">
            {challengesData.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="rbi-num-card">
                  <span className="rbi-num-badge">{padNum(index + 1)}</span>
                  <div className="rbi-num-icon">{item.icon}</div>
                  <div className="rbi-num-body">
                    <h3 className="rbi-num-title">{item.title}</h3>
                    <p className="rbi-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FRAMEWORK COMPONENTS — White + quiet grid ══ */}
      <section className="rbi-section rbi-section--white">
        <div className="rbi-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="rbi-section-header">
              <p className="rbi-eyebrow">The Foundation</p>
              <h2 className="rbi-section-title">RBI Framework Core Components</h2>
              <p className="rbi-section-description">
                Comprehensive framework covering governance, controls, crisis management, and continuous monitoring
              </p>
            </div>
          </ScrollReveal>

          <div className="rbi-components-strip">
            {frameworkComponents.map((comp, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="rbi-comp-item">
                  <div className="rbi-comp-circle">{comp.icon}</div>
                  {index < frameworkComponents.length - 1 && (
                    <div className="rbi-comp-line" aria-hidden="true" />
                  )}
                  <h3 className="rbi-comp-title">{comp.title}</h3>
                  <p className="rbi-comp-desc">{comp.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ IMPLEMENTATION APPROACH — Off-white + red grid ══ */}
      <section className="rbi-section rbi-section--offwhite">
        <div className="rbi-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="rbi-section-header">
              <p className="rbi-eyebrow">Implementation</p>
              <h2 className="rbi-section-title">Our Implementation Approach</h2>
              <p className="rbi-section-description">
                Systematic methodology ensuring complete RBI framework compliance with minimal business disruption
              </p>
            </div>
          </ScrollReveal>

          <div className="rbi-num-grid rbi-num-grid--3col">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80} triggerOnce={false}>
                <div className="rbi-num-card rbi-num-card--white">
                  <span className="rbi-num-badge">{padNum(index + 1)}</span>
                  <div className="rbi-num-icon">{step.icon}</div>
                  <div className="rbi-num-body">
                    <h3 className="rbi-num-title">{step.title}</h3>
                    <p className="rbi-num-desc">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BASELINE CONTROLS — Circle + 4 cards ══ */}
      <section className="rbi-section rbi-section--white">
        <div className="rbi-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="rbi-section-header">
              <p className="rbi-eyebrow">Control Coverage</p>
              <h2 className="rbi-section-title">24 Baseline Security Controls Coverage</h2>
              <p className="rbi-section-description">
                Mandatory controls mandated by RBI for all banks to achieve cyber resilience
              </p>
            </div>
          </ScrollReveal>

          <div className="rbi-ctrl-layout">

            {/* ── LEFT COLUMN ── */}
            <div className="rbi-ctrl-col rbi-ctrl-col--left">

              {/* Q1 — Identity & Access */}
              <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
                <div className="rbi-ctrl-card rbi-ctrl-card--q1">
                  <div className="rbi-ctrl-card-header">
                    <span className="rbi-ctrl-dot" />
                    <span className="rbi-ctrl-card-label">Identity &amp; Access</span>
                  </div>
                  <ul className="rbi-ctrl-list">
                    <li>Identity &amp; Access Management with privileged access controls</li>
                    <li>Strong authentication mechanisms including multi-factor authentication</li>
                    <li>Data security and encryption at rest and in transit</li>
                    <li>Network security with segmentation and perimeter defense</li>
                    <li>Role-based access control and least privilege enforcement</li>
                    <li>Session management and secure remote access protocols</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Q3 — Manage & Govern */}
              <ScrollReveal animation="fade-right" delay={300} triggerOnce={false}>
                <div className="rbi-ctrl-card rbi-ctrl-card--q3">
                  <div className="rbi-ctrl-card-header">
                    <span className="rbi-ctrl-dot" />
                    <span className="rbi-ctrl-card-label">Manage &amp; Govern</span>
                  </div>
                  <ul className="rbi-ctrl-list">
                    <li>Change management with security validation</li>
                    <li>Configuration and asset management</li>
                    <li>Backup and recovery with off-site storage</li>
                    <li>Business continuity and disaster recovery</li>
                    <li>User awareness and training programs</li>
                    <li>Security audit and compliance monitoring</li>
                  </ul>
                </div>
              </ScrollReveal>

            </div>{/* /left col */}

            {/* ── CENTER CIRCLE ── */}
            <div className="rbi-ctrl-center">
              <ScrollReveal animation="fade-up" delay={200} triggerOnce={false}>
                <div className="rbi-ctrl-circle-wrap">

                  <svg className="rbi-ctrl-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

                    {/* ── PIE SLICES — outer radius 180 ── */}
                    <path d="M200,200 L200,20 A180,180 0 0,0 20,200 Z" fill="#1a1a1a"/>
                    <path d="M200,200 L200,20 A180,180 0 0,1 380,200 Z" fill="#C1121F"/>
                    <path d="M200,200 L20,200 A180,180 0 0,0 200,380 Z" fill="#C1121F"/>
                    <path d="M200,200 L380,200 A180,180 0 0,1 200,380 Z" fill="#8B0000"/>

                    {/* White dividers */}
                    <line x1="200" y1="20"  x2="200" y2="380" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                    <line x1="20"  y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>

                    {/* Outer decorative rings */}
                    <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(208,5,13,0.3)"  strokeWidth="1.5"/>
                    <circle cx="200" cy="200" r="152" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4"/>

                    {/* ── Center white hole — smaller so slices have room ── */}
                    <circle cx="200" cy="200" r="72" fill="white"/>
                    {/* Subtle red ring around hole */}
                    <circle cx="200" cy="200" r="72" fill="none" stroke="rgba(208,5,13,0.2)" strokeWidth="1.5"/>

                    {/* ── Labels — at quadrant centroids, well clear of white hole ── */}
                    {/* Each centroid is ~112px from center at 45° into the quadrant */}
                    {/* Q1 top-left: centroid (121,121) → label just below icon */}
                    <text x="121" y="113" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">IDENTITY</text>
                    <text x="121" y="127" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; ACCESS</text>

                    {/* Q2 top-right: centroid (279,121) */}
                    <text x="279" y="113" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">PROTECT</text>
                    <text x="279" y="127" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; DETECT</text>

                    {/* Q3 bottom-left: centroid (121,279) */}
                    <text x="121" y="273" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">MANAGE</text>
                    <text x="121" y="287" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; GOVERN</text>

                    {/* Q4 bottom-right: centroid (279,279) */}
                    <text x="279" y="273" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">RESILIENCE</text>
                    <text x="279" y="287" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; CONTINUITY</text>

                    {/* ── Dashed connecting lines ── */}
                    <line x1="28"  y1="28"  x2="0"   y2="0"   stroke="rgba(208,5,13,0.55)" strokeWidth="1.5" strokeDasharray="5 4"/>
                    <line x1="28"  y1="372" x2="0"   y2="400" stroke="rgba(208,5,13,0.55)" strokeWidth="1.5" strokeDasharray="5 4"/>
                    <line x1="372" y1="28"  x2="400" y2="0"   stroke="rgba(208,5,13,0.55)" strokeWidth="1.5" strokeDasharray="5 4"/>
                    <line x1="372" y1="372" x2="400" y2="400" stroke="rgba(208,5,13,0.55)" strokeWidth="1.5" strokeDasharray="5 4"/>

                    {/* Corner dots */}
                    <circle cx="28"  cy="28"  r="5.5" fill="#D0050D"/>
                    <circle cx="372" cy="28"  r="5.5" fill="#D0050D"/>
                    <circle cx="28"  cy="372" r="5.5" fill="#D0050D"/>
                    <circle cx="372" cy="372" r="5.5" fill="#D0050D"/>

                  </svg>

                  {/* Center hole text */}
                  <div className="rbi-ctrl-center-text">
                    <span className="rbi-ctrl-center-num">24</span>
                    <span className="rbi-ctrl-center-label">BASELINE<br/>SECURITY<br/>CONTROLS</span>
                  </div>

                </div>
              </ScrollReveal>
            </div>{/* /center */}

            {/* ── RIGHT COLUMN ── */}
            <div className="rbi-ctrl-col rbi-ctrl-col--right">

              {/* Q2 — Protect & Detect */}
              <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
                <div className="rbi-ctrl-card rbi-ctrl-card--q2">
                  <div className="rbi-ctrl-card-header">
                    <span className="rbi-ctrl-dot" />
                    <span className="rbi-ctrl-card-label">Protect &amp; Detect</span>
                  </div>
                  <ul className="rbi-ctrl-list">
                    <li>Security monitoring and incident detection systems</li>
                    <li>Patch and vulnerability management processes</li>
                    <li>Application security throughout SDLC</li>
                    <li>Security testing including VAPT and code reviews</li>
                    <li>Threat intelligence and proactive defence measures</li>
                    <li>Endpoint protection and malware prevention controls</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Q4 — Resilience & Continuity */}
              <ScrollReveal animation="fade-left" delay={400} triggerOnce={false}>
                <div className="rbi-ctrl-card rbi-ctrl-card--q4">
                  <div className="rbi-ctrl-card-header">
                    <span className="rbi-ctrl-dot" />
                    <span className="rbi-ctrl-card-label">Resilience &amp; Continuity</span>
                  </div>
                  <ul className="rbi-ctrl-list">
                    <li>Vendor and third-party risk management</li>
                    <li>Cyber insurance coverage</li>
                    <li>Incident response and cyber crisis management</li>
                    <li>Data classification and information lifecycle management</li>
                    <li>Physical and environmental security controls</li>
                    <li>Continuous compliance monitoring and improvement</li>
                  </ul>
                </div>
              </ScrollReveal>

            </div>{/* /right col */}

          </div>{/* /rbi-ctrl-layout */}
        </div>
      </section>
      {/* ══ WHY CHOOSE — Off-white + red grid ══ */}
      <section className="rbi-section rbi-section--offwhite">
        <div className="rbi-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="rbi-section-header">
              <p className="rbi-eyebrow">Why CyberAries</p>
              <h2 className="rbi-section-title">Why Choose CyberAries for RBI Compliance?</h2>
            </div>
          </ScrollReveal>

          <div className="rbi-num-grid rbi-num-grid--3col">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150} triggerOnce={false}>
                <div className="rbi-num-card rbi-num-card--white">
                  <div className="rbi-num-icon">{item.icon}</div>
                  <div className="rbi-num-body">
                    <h3 className="rbi-num-title">{item.title}</h3>
                    <p className="rbi-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CYBERARIES DIFFERENCE — BFSI-identical: white+grid, light bg ══ */}
      <section className="rbi-section rbi-section--white rbi-difference-section">
        <div className="rbi-container">
          <ScrollReveal animation="fade-up" triggerOnce={false}>
            <h2 className="rbi-difference-title">
              THE <span className="rbi-diff-highlight">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="rbi-diff-grid">
            {/* Traditional — plain white bfsi-card */}
            <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
              <div className="rbi-diff-card rbi-diff-card--traditional">
                <h3 className="rbi-diff-heading">Traditional Compliance Consulting</h3>
                <ul className="rbi-diff-list">
                  {[
                    "Checkbox compliance focused on documentation",
                    "Generic frameworks not tailored to banking operations",
                    "Limited understanding of RBI's regulatory expectations",
                    "Delivers reports without implementation support",
                    "One-time assessment without ongoing monitoring",
                    "Leaves banks unprepared for RBI inspections"
                  ].map((item, i) => (
                    <li key={i} className="rbi-diff-item">
                      <span className="rbi-diff-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* CyberAries — dark featured card, identical to BFSI bfsi-card--featured */}
            <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
              <div className="rbi-diff-card rbi-diff-card--featured">
                <h3 className="rbi-diff-heading rbi-diff-heading--ca">
                  CYBERARIES Banking Security
                </h3>
                <ul className="rbi-diff-list">
                  {[
                    "Operational cyber resilience with working controls",
                    "Banking-specific implementation aligned with operations",
                    "Deep RBI regulatory expertise and audit experience",
                    "Hands-on implementation with knowledge transfer",
                    "Continuous compliance monitoring and improvement",
                    "Inspection-ready documentation and evidence management"
                  ].map((item, i) => (
                    <li key={i} className="rbi-diff-item">
                      <span className="rbi-diff-bullet">
                        <CheckCircle size={18} className="rbi-check-icon" />
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
      <section className="rbi-section rbi-section--offwhite">
        <div className="rbi-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="rbi-section-header">
              <p className="rbi-eyebrow">Deliverables</p>
              <h2 className="rbi-section-title">Comprehensive Deliverables</h2>
              <p className="rbi-section-description">
                End-to-end documentation, controls, and reporting to ensure RBI compliance and strengthen your security posture.
              </p>
            </div>
          </ScrollReveal>

          <div className="rbi-pillar-grid">

            {/* 01 — Governance Documentation */}
            <ScrollReveal direction="up" delay={100} triggerOnce={false}>
              <div className="rbi-pillar-card">
                <span className="rbi-pillar-bg-num" aria-hidden="true">01</span>
                <div className="rbi-pillar-top">
                  <div className="rbi-pillar-icon-wrap">
                    <FileText size={28} />
                  </div>
                  <div>
                    <span className="rbi-pillar-num">01</span>
                    <h4 className="rbi-pillar-title">Governance Documentation</h4>
                  </div>
                </div>
                <div className="rbi-pillar-divider" />
                <ul className="rbi-pillar-list">
                  <li>Board-approved Cyber Security Policy</li>
                  <li>Cyber Security Strategy Document</li>
                  <li>Risk Management Framework</li>
                  <li>Roles and Responsibilities Matrix</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 02 — Technical Controls */}
            <ScrollReveal direction="up" delay={200} triggerOnce={false}>
              <div className="rbi-pillar-card">
                <span className="rbi-pillar-bg-num" aria-hidden="true">02</span>
                <div className="rbi-pillar-top">
                  <div className="rbi-pillar-icon-wrap">
                  </div>
                  <div>
                    <span className="rbi-pillar-num">02</span>
                    <h4 className="rbi-pillar-title">Technical Controls</h4>
                  </div>
                </div>
                <div className="rbi-pillar-divider" />
                <ul className="rbi-pillar-list">
                  <li>Implemented Baseline Security Controls</li>
                  <li>SOC Setup and Monitoring Playbooks</li>
                  <li>Identity and Access Management System</li>
                  <li>Network Security Architecture</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 03 — Crisis Management */}
            <ScrollReveal direction="up" delay={300} triggerOnce={false}>
              <div className="rbi-pillar-card">
                <span className="rbi-pillar-bg-num" aria-hidden="true">03</span>
                <div className="rbi-pillar-top">
                  <div className="rbi-pillar-icon-wrap">
                    <Bell size={28} />
                  </div>
                  <div>
                    <span className="rbi-pillar-num">03</span>
                    <h4 className="rbi-pillar-title">Crisis Management</h4>
                  </div>
                </div>
                <div className="rbi-pillar-divider" />
                <ul className="rbi-pillar-list">
                  <li>Incident Response Plan</li>
                  <li>Business Continuity Procedures</li>
                  <li>Crisis Communication Framework</li>
                  <li>Tested Simulation Exercise Results</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 04 — Compliance Reports */}
            <ScrollReveal direction="up" delay={400} triggerOnce={false}>
              <div className="rbi-pillar-card">
                <span className="rbi-pillar-bg-num" aria-hidden="true">04</span>
                <div className="rbi-pillar-top">
                  <div className="rbi-pillar-icon-wrap">
                    <BarChart3 size={28} />
                  </div>
                  <div>
                    <span className="rbi-pillar-num">04</span>
                    <h4 className="rbi-pillar-title">Compliance Reports</h4>
                  </div>
                </div>
                <div className="rbi-pillar-divider" />
                <ul className="rbi-pillar-list">
                  <li>Gap Assessment Report</li>
                  <li>Compliance Status Dashboard</li>
                  <li>Evidence Repository</li>
                  <li>RBI Inspection Readiness Report</li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
      {/* ══ CTA — BFSI-identical dark section with bg image ══ */}
      <section
        className="rbi-cta-section"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        <div className="rbi-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="rbi-cta-content">
              <h2 className="rbi-cta-title">
                <span className="rbi-text-gradient">Ready to Achieve RBI Cyber Security Compliance?</span>
              </h2>
              <p className="rbi-cta-description">
                Let's build a robust RBI compliance framework tailored to your bank. Our team works closely with you to close compliance gaps, implement working controls, and prepare you for RBI inspections — not just the next audit cycle.
              </p>
              <div className="rbi-cta-buttons">
                <Link to="/contact" className="rbi-btn rbi-btn-primary rbi-btn-large rbi-cta-btn">
                  <span>Contact Us</span>
                  <ArrowRight size={18} className="rbi-btn-icon" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default RBICyberFramework;
