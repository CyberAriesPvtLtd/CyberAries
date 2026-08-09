import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/bank-finance.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
import {
  Shield, Lock, FileText, AlertTriangle, CheckCircle,
  BarChart3, Database, Bell, Eye, Award, Handshake,
  RefreshCw, FileCheck, UserCheck, Network, ArrowRight,
  Server, CreditCard, Smartphone, Zap, Key,
  ShieldCheck, Activity, FileSearch, GitBranch, Globe, Landmark
} from 'lucide-react';
import './RBIPaymentSystems.css';

/**
 * RBI Payment Systems Audit Service Page
 * Premium design — fully aligned with RBI Cyber Framework page
 */
const RBIPaymentSystems = () => {
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
      title: "Complex Payment Infrastructure",
      description: "Modern payment systems integrate multiple channels — UPI, NEFT, RTGS, cards, wallets — each with unique security requirements.",
      icon: <Network size={28} />
    },
    {
      title: "Real-Time Transaction Security",
      description: "Ensuring security without impacting transaction speed and customer experience in instant payment systems.",
      icon: <Zap size={28} />
    },
    {
      title: "Fraud Detection & Prevention",
      description: "Identifying and preventing payment fraud, card-not-present transactions, and account takeover attempts.",
      icon: <AlertTriangle size={28} />
    },
    {
      title: "API Security",
      description: "Securing payment APIs, webhooks, and third-party integrations while maintaining interoperability.",
      icon: <GitBranch size={28} />
    },
    {
      title: "Compliance with Multiple Standards",
      description: "Meeting RBI guidelines, PCI-DSS, PA-DSS, NPCI requirements, and international payment security standards.",
      icon: <FileCheck size={28} />
    },
    {
      title: "Data Privacy & Tokenization",
      description: "Implementing card tokenization, secure payment data storage, and compliance with data protection regulations.",
      icon: <Database size={28} />
    }
  ];

  const approachSteps = [
    {
      title: "Payment System Scoping",
      description: "Identify all payment channels, systems, interfaces, and third-party connections in scope for audit.",
      icon: <FileSearch size={28} />
    },
    {
      title: "Architecture Review",
      description: "Analyze payment infrastructure, data flows, integration points, and security architecture.",
      icon: <Network size={28} />
    },
    {
      title: "Security Controls Assessment",
      description: "Evaluate authentication, authorization, encryption, tokenization, and access control mechanisms.",
      icon: <Lock size={28} />
    },
    {
      title: "Transaction Security Testing",
      description: "Test payment processing security, session management, and transaction integrity controls.",
      icon: <CreditCard size={28} />
    },
    {
      title: "API Security Audit",
      description: "Assess API authentication, rate limiting, input validation, and secure communication protocols.",
      icon: <GitBranch size={28} />
    },
    {
      title: "Fraud Control Evaluation",
      description: "Review fraud detection mechanisms, transaction monitoring, and anomaly detection capabilities.",
      icon: <Eye size={28} />
    },
    {
      title: "PCI-DSS Compliance",
      description: "Verify compliance with Payment Card Industry Data Security Standard v4.0 requirements.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "Penetration Testing",
      description: "Conduct ethical hacking of payment applications, mobile apps, and payment gateways.",
      icon: <Shield size={28} />
    },
    {
      title: "Third-Party Integration Security",
      description: "Assess security of payment aggregators, gateways, and service provider connections.",
      icon: <UserCheck size={28} />
    },
    {
      title: "Incident Response Validation",
      description: "Test payment incident response procedures and crisis management capabilities.",
      icon: <Bell size={28} />
    },
    {
      title: "Compliance Documentation",
      description: "Prepare comprehensive audit reports with findings, risk ratings, and remediation roadmap.",
      icon: <FileText size={28} />
    },
    {
      title: "Remediation & Re-Audit",
      description: "Support remediation activities and conduct validation testing post-implementation.",
      icon: <RefreshCw size={28} />
    }
  ];

  const paymentComponents = [
    {
      title: "Card Payment Systems",
      description: "Credit/debit card processing, ATM networks, POS terminals, and card tokenization systems.",
      icon: <CreditCard size={28} />
    },
    {
      title: "Digital Payment Platforms",
      description: "UPI, mobile wallets, digital payment apps, and QR code payment systems.",
      icon: <Smartphone size={28} />
    },
    {
      title: "Core Banking Interfaces",
      description: "NEFT, RTGS, IMPS integration with core banking and payment switching systems.",
      icon: <Server size={28} />
    },
    {
      title: "Payment Gateways",
      description: "E-commerce payment processing, payment aggregators, and merchant onboarding systems.",
      icon: <Network size={28} />
    },
    {
      title: "Mobile Banking",
      description: "Mobile apps, SMS banking, USSD services, and m-commerce platforms.",
      icon: <Smartphone size={28} />
    },
    {
      title: "API & Integration Layer",
      description: "Payment APIs, webhooks, third-party integrations, and open banking interfaces.",
      icon: <GitBranch size={28} />
    }
  ];

  const whyChooseItems = [
    {
      title: "Payment Systems Expertise",
      description: "Specialized knowledge of RBI payment guidelines, NPCI standards, and PCI-DSS compliance requirements.",
      icon: <Award size={28} />
    },
    {
      title: "Financial Sector Experience",
      description: "Extensive experience auditing payment systems across banks, NBFCs, and fintech companies.",
      icon: <Globe size={28} />
    },
    {
      title: "Comprehensive Testing",
      description: "Combined compliance audits with penetration testing for thorough end-to-end security validation.",
      icon: <Handshake size={28} />
    }
  ];

  const standardsData = [
    {
      title: "RBI Guidelines",
      description: "Reserve Bank of India payment system regulations and security guidelines for all regulated entities.",
      icon: <Shield size={28} />
    },
    {
      title: "PCI-DSS v4.0",
      description: "Payment Card Industry Data Security Standard — latest version compliance for card data environments.",
      icon: <CreditCard size={28} />
    },
    {
      title: "NPCI Standards",
      description: "National Payments Corporation of India security requirements for UPI, IMPS, and NACH systems.",
      icon: <Network size={28} />
    },
    {
      title: "ISO 20022",
      description: "International payment messaging and security standards for cross-border and domestic transactions.",
      icon: <Key size={28} />
    }
  ];

  return (
    <div className="rbi-payment-page">

      {/* ══════════════════════════════════════════
          HERO — parallax bg + overlay + glow + particles
      ══════════════════════════════════════════ */}
      <section className="pay-hero-section" ref={heroRef}>

        <motion.div
          className="pay-hero-bg-layer"
          style={{
            backgroundImage: `url(${heroBgImage})`,
            y: isDesktop ? parallaxY : 0
          }}
        />
        <div className="pay-hero-overlay" />
        <div className="pay-hero-glow" />

        <div className="pay-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="pay-hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="pay-container">
          <div className="pay-hero-inner">
            <div className="pay-hero-content">

              <ScrollReveal animation="fade-down" delay={0}>
                <div className="pay-hero-badge">
                  <Landmark size={14} className="pay-badge-icon" />
                  <span className="pay-badge-text">
                    Payment Systems Security
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="pay-hero-title">
                  <span className="pay-text-gradient">RBI Payment Systems Audit</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="pay-hero-description">
                  Payment systems are the backbone of financial services, handling billions of transactions daily across cards, UPI, NEFT, RTGS, and digital wallets. <strong>RBI mandates rigorous security audits</strong> to protect customer data, prevent fraud, and ensure business continuity. <strong>Our comprehensive payment system audits</strong> cover security architecture, fraud controls, PCI-DSS compliance, and penetration testing to safeguard your payment infrastructure.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="pay-hero-actions">
                  <button className="pay-btn pay-btn-primary pay-btn-large" onClick={() => window.location.href='/contact'}>
                    Request Payment Systems Audit
                    <ArrowRight size={18} className="pay-btn-icon" />
                  </button>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* ══ KEY CHALLENGES — Off-white + numbered 2-col grid ══ */}
      <section className="pay-section pay-section--offwhite">
        <div className="pay-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="pay-section-header">
              <p className="pay-eyebrow">Payment Security</p>
              <h2 className="pay-section-title">Payment Systems Security Challenges</h2>
              <p className="pay-section-description">
                Modern payment ecosystems face complex security requirements across multiple channels and technologies
              </p>
            </div>
          </ScrollReveal>

          <div className="pay-num-grid pay-num-grid--2col">
            {challengesData.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="pay-num-card">
                  <span className="pay-num-badge">{padNum(index + 1)}</span>
                  <div className="pay-num-icon">{item.icon}</div>
                  <div className="pay-num-body">
                    <h3 className="pay-num-title">{item.title}</h3>
                    <p className="pay-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PAYMENT COMPONENTS — White + horizontal strip ══ */}
      <section className="pay-section pay-section--white">
        <div className="pay-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="pay-section-header">
              <p className="pay-eyebrow">Audit Scope</p>
              <h2 className="pay-section-title">Payment System Components Covered</h2>
              <p className="pay-section-description">
                Comprehensive audit coverage across all payment channels and infrastructure
              </p>
            </div>
          </ScrollReveal>

          <div className="pay-components-strip">
            {paymentComponents.map((comp, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="pay-comp-item">
                  <div className="pay-comp-circle">{comp.icon}</div>
                  {index < paymentComponents.length - 1 && (
                    <div className="pay-comp-line" aria-hidden="true" />
                  )}
                  <h3 className="pay-comp-title">{comp.title}</h3>
                  <p className="pay-comp-desc">{comp.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AUDIT METHODOLOGY — Off-white + numbered 3-col grid ══ */}
      <section className="pay-section pay-section--offwhite">
        <div className="pay-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="pay-section-header">
              <p className="pay-eyebrow">Methodology</p>
              <h2 className="pay-section-title">Our Audit Methodology</h2>
              <p className="pay-section-description">
                Systematic approach combining compliance assessment with deep technical security testing
              </p>
            </div>
          </ScrollReveal>

          <div className="pay-num-grid pay-num-grid--3col">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80} triggerOnce={false}>
                <div className="pay-num-card pay-num-card--white">
                  <span className="pay-num-badge">{padNum(index + 1)}</span>
                  <div className="pay-num-icon">{step.icon}</div>
                  <div className="pay-num-body">
                    <h3 className="pay-num-title">{step.title}</h3>
                    <p className="pay-num-desc">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AUDIT COVERAGE — Circle + 4 cards ══ */}
      <section className="pay-section pay-section--white">
        <div className="pay-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="pay-section-header">
              <p className="pay-eyebrow">Control Coverage</p>
              <h2 className="pay-section-title">Comprehensive Audit Coverage</h2>
              <p className="pay-section-description">
                Complete assessment of payment system security controls and compliance requirements
              </p>
            </div>
          </ScrollReveal>

          <div className="pay-ctrl-layout">

            {/* ── LEFT COLUMN ── */}
            <div className="pay-ctrl-col pay-ctrl-col--left">

              <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
                <div className="pay-ctrl-card pay-ctrl-card--q1">
                  <div className="pay-ctrl-card-header">
                    <span className="pay-ctrl-dot" />
                    <span className="pay-ctrl-card-label">Security Controls</span>
                  </div>
                  <ul className="pay-ctrl-list">
                    <li>Payment channel security (UPI, cards, wallets, NEFT, RTGS)</li>
                    <li>Card data security and PCI-DSS compliance</li>
                    <li>Tokenization and encryption implementation</li>
                    <li>Authentication and authorization controls</li>
                    <li>API security and integration testing</li>
                    <li>Mobile payment application security</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={300} triggerOnce={false}>
                <div className="pay-ctrl-card pay-ctrl-card--q3">
                  <div className="pay-ctrl-card-header">
                    <span className="pay-ctrl-dot" />
                    <span className="pay-ctrl-card-label">Governance & Compliance</span>
                  </div>
                  <ul className="pay-ctrl-list">
                    <li>Incident response and crisis management</li>
                    <li>Business continuity for payment services</li>
                    <li>Regulatory compliance and reporting</li>
                    <li>Customer data privacy and protection</li>
                    <li>Security logging and monitoring</li>
                    <li>Source code review of payment applications</li>
                  </ul>
                </div>
              </ScrollReveal>

            </div>

            {/* ── CENTER CIRCLE ── */}
            <div className="pay-ctrl-center">
              <ScrollReveal animation="fade-up" delay={200} triggerOnce={false}>
                <div className="pay-ctrl-circle-wrap">
                  <svg className="pay-ctrl-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

                    <path d="M200,200 L200,20 A180,180 0 0,0 20,200 Z" fill="#1a1a1a"/>
                    <path d="M200,200 L200,20 A180,180 0 0,1 380,200 Z" fill="#C1121F"/>
                    <path d="M200,200 L20,200 A180,180 0 0,0 200,380 Z" fill="#C1121F"/>
                    <path d="M200,200 L380,200 A180,180 0 0,1 200,380 Z" fill="#8B0000"/>

                    <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                    <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>

                    <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(193,18,31,0.3)" strokeWidth="1.5"/>
                    <circle cx="200" cy="200" r="152" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4"/>

                    <circle cx="200" cy="200" r="72" fill="white"/>
                    <circle cx="200" cy="200" r="72" fill="none" stroke="rgba(193,18,31,0.2)" strokeWidth="1.5"/>

                    <text x="121" y="113" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">SECURITY</text>
                    <text x="121" y="127" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">CONTROLS</text>

                    <text x="279" y="113" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">DETECT</text>
                    <text x="279" y="127" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; PREVENT</text>

                    <text x="121" y="273" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">GOVERN</text>
                    <text x="121" y="287" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; COMPLY</text>

                    <text x="279" y="273" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">TEST</text>
                    <text x="279" y="287" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Lexend,sans-serif" letterSpacing="0.5">&amp; VALIDATE</text>

                    <line x1="28" y1="28" x2="0" y2="0" stroke="rgba(193,18,31,0.55)" strokeWidth="1.5" strokeDasharray="5 4"/>
                    <line x1="28" y1="372" x2="0" y2="400" stroke="rgba(193,18,31,0.55)" strokeWidth="1.5" strokeDasharray="5 4"/>
                    <line x1="372" y1="28" x2="400" y2="0" stroke="rgba(193,18,31,0.55)" strokeWidth="1.5" strokeDasharray="5 4"/>
                    <line x1="372" y1="372" x2="400" y2="400" stroke="rgba(193,18,31,0.55)" strokeWidth="1.5" strokeDasharray="5 4"/>

                    <circle cx="28" cy="28" r="5.5" fill="#C1121F"/>
                    <circle cx="372" cy="28" r="5.5" fill="#C1121F"/>
                    <circle cx="28" cy="372" r="5.5" fill="#C1121F"/>
                    <circle cx="372" cy="372" r="5.5" fill="#C1121F"/>

                  </svg>

                  <div className="pay-ctrl-center-text">
                    <span className="pay-ctrl-center-num">12+</span>
                    <span className="pay-ctrl-center-label">AUDIT<br/>COVERAGE<br/>AREAS</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="pay-ctrl-col pay-ctrl-col--right">

              <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
                <div className="pay-ctrl-card pay-ctrl-card--q2">
                  <div className="pay-ctrl-card-header">
                    <span className="pay-ctrl-dot" />
                    <span className="pay-ctrl-card-label">Detect &amp; Prevent</span>
                  </div>
                  <ul className="pay-ctrl-list">
                    <li>Transaction monitoring and fraud detection</li>
                    <li>Payment gateway configuration and hardening</li>
                    <li>Third-party service provider security</li>
                    <li>Real-time anomaly detection capabilities</li>
                    <li>Penetration testing of payment systems</li>
                    <li>Business logic flaw identification</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={400} triggerOnce={false}>
                <div className="pay-ctrl-card pay-ctrl-card--q4">
                  <div className="pay-ctrl-card-header">
                    <span className="pay-ctrl-dot" />
                    <span className="pay-ctrl-card-label">Test &amp; Validate</span>
                  </div>
                  <ul className="pay-ctrl-list">
                    <li>Payment application penetration testing</li>
                    <li>API and integration layer security testing</li>
                    <li>PCI-DSS gap assessment and remediation</li>
                    <li>NPCI compliance validation</li>
                    <li>Fraud scenario and exploit simulation</li>
                    <li>Post-remediation re-validation testing</li>
                  </ul>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE — Off-white + numbered 3-col ══ */}
      <section className="pay-section pay-section--offwhite">
        <div className="pay-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="pay-section-header">
              <p className="pay-eyebrow">Why CyberAries</p>
              <h2 className="pay-section-title">Why Choose CyberAries for Payment Audits?</h2>
            </div>
          </ScrollReveal>

          <div className="pay-num-grid pay-num-grid--3col">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150} triggerOnce={false}>
                <div className="pay-num-card pay-num-card--white">
                  <div className="pay-num-icon">{item.icon}</div>
                  <div className="pay-num-body">
                    <h3 className="pay-num-title">{item.title}</h3>
                    <p className="pay-num-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CYBERARIES DIFFERENCE — White + featured dark card ══ */}
      <section className="pay-section pay-section--white pay-difference-section">
        <div className="pay-container">
          <ScrollReveal animation="fade-up" triggerOnce={false}>
            <h2 className="pay-difference-title">
              THE <span className="pay-diff-highlight">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="pay-diff-grid">

            <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
              <div className="pay-diff-card pay-diff-card--traditional">
                <h3 className="pay-diff-heading">Traditional Payment Audits</h3>
                <ul className="pay-diff-list">
                  {[
                    "Compliance-focused with checkbox assessments only",
                    "Limited technical testing of actual payment flows",
                    "Generic findings not specific to payment logic",
                    "Misses business logic flaws in payment processing",
                    "No fraud scenario testing or real exploit attempts",
                    "Reports deliver findings without remediation support"
                  ].map((item, i) => (
                    <li key={i} className="pay-diff-item">
                      <span className="pay-diff-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
              <div className="pay-diff-card pay-diff-card--featured">
                <h3 className="pay-diff-heading pay-diff-heading--ca">
                  CYBERARIES Payment Security
                </h3>
                <ul className="pay-diff-list">
                  {[
                    "Deep technical assessment with full security testing",
                    "Comprehensive penetration testing of all payment flows",
                    "Payment-specific vulnerabilities and attack scenarios",
                    "Business logic testing and fraud scenario validation",
                    "Real-world exploit attempts in controlled environment",
                    "Hands-on remediation support and re-validation testing"
                  ].map((item, i) => (
                    <li key={i} className="pay-diff-item">
                      <span className="pay-diff-bullet">
                        <CheckCircle size={18} className="pay-check-icon" />
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
      <section className="pay-section pay-section--offwhite">
        <div className="pay-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="pay-section-header">
              <p className="pay-eyebrow">Deliverables</p>
              <h2 className="pay-section-title">Audit Deliverables</h2>
              <p className="pay-section-description">
                Comprehensive reports, evidence, and actionable roadmaps to strengthen your payment security posture.
              </p>
            </div>
          </ScrollReveal>

          <div className="pay-pillar-grid">

            <ScrollReveal direction="up" delay={100} triggerOnce={false}>
              <div className="pay-pillar-card">
                <span className="pay-pillar-bg-num" aria-hidden="true">01</span>
                <div className="pay-pillar-top">
                  <div className="pay-pillar-icon-wrap"><FileText size={28} /></div>
                  <div>
                    <span className="pay-pillar-num">01</span>
                    <h4 className="pay-pillar-title">Executive Summary Report</h4>
                  </div>
                </div>
                <div className="pay-pillar-divider" />
                <ul className="pay-pillar-list">
                  <li>Overall risk assessment and compliance status</li>
                  <li>Critical findings and recommendations</li>
                  <li>Compliance gaps and remediation priorities</li>
                  <li>Board-ready executive presentation</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} triggerOnce={false}>
              <div className="pay-pillar-card">
                <span className="pay-pillar-bg-num" aria-hidden="true">02</span>
                <div className="pay-pillar-top">
                  <div className="pay-pillar-icon-wrap"><Activity size={28} /></div>
                  <div>
                    <span className="pay-pillar-num">02</span>
                    <h4 className="pay-pillar-title">Technical Assessment Report</h4>
                  </div>
                </div>
                <div className="pay-pillar-divider" />
                <ul className="pay-pillar-list">
                  <li>Detailed vulnerability findings with evidence</li>
                  <li>Penetration testing results and exploits</li>
                  <li>Security configuration weaknesses</li>
                  <li>Technical remediation guidance</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} triggerOnce={false}>
              <div className="pay-pillar-card">
                <span className="pay-pillar-bg-num" aria-hidden="true">03</span>
                <div className="pay-pillar-top">
                  <div className="pay-pillar-icon-wrap"><ShieldCheck size={28} /></div>
                  <div>
                    <span className="pay-pillar-num">03</span>
                    <h4 className="pay-pillar-title">Compliance Assessment</h4>
                  </div>
                </div>
                <div className="pay-pillar-divider" />
                <ul className="pay-pillar-list">
                  <li>RBI payment guidelines compliance matrix</li>
                  <li>PCI-DSS compliance status report</li>
                  <li>NPCI security requirements assessment</li>
                  <li>Evidence repository for regulators</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} triggerOnce={false}>
              <div className="pay-pillar-card">
                <span className="pay-pillar-bg-num" aria-hidden="true">04</span>
                <div className="pay-pillar-top">
                  <div className="pay-pillar-icon-wrap"><BarChart3 size={28} /></div>
                  <div>
                    <span className="pay-pillar-num">04</span>
                    <h4 className="pay-pillar-title">Remediation Roadmap</h4>
                  </div>
                </div>
                <div className="pay-pillar-divider" />
                <ul className="pay-pillar-list">
                  <li>Prioritized remediation plan with timelines</li>
                  <li>Quick wins vs strategic improvements</li>
                  <li>Cost-benefit analysis of controls</li>
                  <li>Re-audit and validation testing plan</li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ══ STANDARDS & FRAMEWORKS — White + horizontal strip ══ */}
      <section className="pay-section pay-section--white">
        <div className="pay-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="pay-section-header">
              <p className="pay-eyebrow">Standards & Frameworks</p>
              <h2 className="pay-section-title">Standards &amp; Frameworks Covered</h2>
              <p className="pay-section-description">
                Our audits ensure compliance with multiple payment security standards and regulatory frameworks
              </p>
            </div>
          </ScrollReveal>

          <div className="pay-standards-strip">
            {standardsData.map((std, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="pay-std-item">
                  <div className="pay-std-circle">{std.icon}</div>
                  {index < standardsData.length - 1 && (
                    <div className="pay-std-line" aria-hidden="true" />
                  )}
                  <h3 className="pay-std-title">{std.title}</h3>
                  <p className="pay-std-desc">{std.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA — dark section with bg image ══ */}
      <section
        className="pay-cta-section"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        <div className="pay-container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="pay-cta-content">
              <h2 className="pay-cta-title">
                <span className="pay-text-gradient">Secure Your Payment Infrastructure</span>
              </h2>
              <p className="pay-cta-description">
                Partner with payment security experts for comprehensive RBI-compliant audits. Our team combines compliance assessment with deep technical testing to protect your payment infrastructure end-to-end.
              </p>
              <div className="pay-cta-buttons">
                <Link to="/contact" className="pay-btn pay-btn-primary pay-btn-large pay-cta-btn">
                  <span>Request Payment Systems Audit</span>
                  <ArrowRight size={18} className="pay-btn-icon" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default RBIPaymentSystems;
