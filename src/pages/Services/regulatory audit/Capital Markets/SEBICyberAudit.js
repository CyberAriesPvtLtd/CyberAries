import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import ctaBgImage from '../../../../images/cta/cta-background.webp';
/* eslint-disable no-unused-vars */
import {
  Shield, Lock, FileText, CheckCircle, Settings, BarChart3, Users, Globe, Database, Bell, Eye, Award, Handshake, RefreshCw, FileCheck, UserCheck, Network, Server, TrendingUp, Activity, Clipboard, Search, Target, Zap, Clock, ChevronDown, ChevronRight, Star, Phone, Mail, Calendar, DollarSign, Check, X, ArrowRight
} from 'lucide-react';
/* eslint-enable no-unused-vars */
import './SEBICyberAudit.css';

const SEBICyberAudit = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [activeTab, setActiveTab] = useState('framework');
  const [openFaq, setOpenFaq] = useState(null);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);
  const statsAnimated = useRef(false);

  // Animate hero stats counter
  useEffect(() => {
    const targets = [500, 98, 10, 100];
    const suffixes = ['+', '%', '+', '%'];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true;
          targets.forEach((target, idx) => {
            let start = 0;
            const duration = 1800;
            const step = Math.ceil(target / (duration / 16));
            const timer = setInterval(() => {
              start = Math.min(start + step, target);
              setAnimatedStats(prev => {
                const next = [...prev];
                next[idx] = start;
                return next;
              });
              if (start >= target) clearInterval(timer);
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 500, suffix: "+", label: "Audits Completed" },
    { number: 98, suffix: "%", label: "Success Rate" },
    { number: 10, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "%", label: "Compliance Score" }
  ];

  const trustItems = [
    {
      icon: <Shield size={32} />,
      text: "ISO Accredited",
      desc: "Our audit processes follow ISO 27001 global standards. Every assessment is conducted under certified, internationally recognised security frameworks."
    },
    {
      icon: <Users size={32} />,
      text: "Expert Security Auditors",
      desc: "Our team comprises seasoned professionals with deep SEBI regulatory domain knowledge. Each auditor brings hands-on capital market security experience."
    },
    {
      icon: <Clock size={32} />,
      text: "24/7 Support",
      desc: "Round-the-clock assistance is available throughout your audit engagement. Our dedicated support team ensures no compliance query goes unanswered."
    }
  ];

  const challenges = [
    { icon: <FileText size={28} />, num: "01", title: "Regulatory Compliance", desc: "Meeting SEBI cyber security and resilience framework mandates is obligatory for all regulated entities. Non-compliance exposes firms to regulatory penalties, suspension, and reputational harm." },
    { icon: <TrendingUp size={28} />, num: "02", title: "Trading Platform Security", desc: "High-frequency trading systems demand real-time threat detection and resilience. A breach in trading infrastructure can trigger severe financial and reputational damage." },
    { icon: <Lock size={28} />, num: "03", title: "Data Protection", desc: "Investor records, trade data, and KYC details must be encrypted and strictly access-controlled. Unauthorised exposure violates DPDP Act obligations and deeply erodes client trust." },
    { icon: <Eye size={28} />, num: "04", title: "Market Surveillance", desc: "Continuous monitoring is required to detect manipulation, insider activity, and anomalous patterns. Gaps in surveillance can lead to regulatory investigations and market sanctions." },
    { icon: <Shield size={28} />, num: "05", title: "DDoS Protection", desc: "Capital market platforms are prime targets for volumetric denial-of-service attacks. Robust mitigation controls ensure trading continuity and prevent costly market disruption." },
    { icon: <Network size={28} />, num: "06", title: "Third-Party Risks", desc: "Brokers rely on multiple vendors for trading, clearing, and risk management systems. Each integration point introduces vulnerabilities that must be assessed and tightly controlled." }
  ];

  const tabsData = {
    framework: [
      { icon: <Users size={24} />, title: "Security Governance", desc: "Establishes board-level oversight, security policies, and risk management frameworks. Ensures accountability and clear strategic alignment across the organisation." },
      { icon: <Network size={24} />, title: "Network Security", desc: "Covers firewall configurations, intrusion detection and prevention, and network segmentation. Protects critical trading infrastructure from lateral movement and external attacks." },
      { icon: <Activity size={24} />, title: "Platform Security", desc: "Validates authentication controls, transaction integrity, and application-layer protections. Ensures all trading platforms are hardened against exploitation and tampering." },
      { icon: <Database size={24} />, title: "Data Protection", desc: "Assesses encryption standards, data loss prevention controls, and secure disposal practices. Ensures sensitive investor and trade data is protected at rest and in transit." },
      { icon: <UserCheck size={24} />, title: "Access Control", desc: "Reviews multi-factor authentication, role-based access, and identity governance processes. Prevents unauthorised access to critical systems and sensitive trading functions." },
      { icon: <Bell size={24} />, title: "Incident Response", desc: "Evaluates the 24/7 SOC capability, continuous monitoring tools, and forensic readiness. Ensures rapid detection, containment, and recovery from any security incidents." }
    ],
    compliance: [
      { icon: <FileCheck size={24} />, title: "SEBI Circulars", desc: "Reviews adherence to all SEBI-issued cyber security circulars and regulatory directives. Ensures registered entities meet every mandatory technical and procedural requirement." },
      { icon: <Shield size={24} />, title: "SEBI Guidelines", desc: "Validates compliance with SEBI's cyber security and resilience framework for intermediaries. Maps every existing control to the applicable prescribed regulatory requirement." },
      { icon: <Lock size={24} />, title: "Data Privacy", desc: "Assesses alignment with the Digital Personal Data Protection Act and related obligations. Ensures lawful collection, processing, and storage of all investor personal data." },
      { icon: <CheckCircle size={24} />, title: "Audit Standards", desc: "Benchmarks controls against ISO 27001 and NIST Cybersecurity Framework standards. Provides a globally recognised and auditable compliance baseline for the organisation." }
    ],
    testing: [
      { icon: <Search size={24} />, title: "Vulnerability Scanning", desc: "Runs automated assessments across all in-scope systems to identify known security weaknesses. Produces a prioritised vulnerability register for structured remediation action." },
      { icon: <Target size={24} />, title: "Penetration Testing", desc: "Simulates real-world attack scenarios against trading platforms and supporting infrastructure. Uncovers exploitable gaps that automated scanning alone is unable to detect." },
      { icon: <Activity size={24} />, title: "Network Testing", desc: "Validates the security posture of network perimeters, internal segments, and system communications. Identifies misconfigurations that could expose critical assets to attack." },
      { icon: <Settings size={24} />, title: "Configuration Review", desc: "Inspects system hardening settings against security baselines and vendor best practices. Eliminates unnecessary services, insecure defaults, and weak configuration choices." }
    ],
    reports: [
      { icon: <FileText size={24} />, title: "Executive Summary", desc: "Provides board and senior leadership with a clear, non-technical overview of compliance status. Highlights key risks, overall posture, and prioritised strategic recommendations." },
      { icon: <BarChart3 size={24} />, title: "Technical Report", desc: "Delivers detailed findings with evidence, risk ratings, and technical context for each issue. Supports your IT and security teams in planning accurate and targeted remediation." },
      { icon: <CheckCircle size={24} />, title: "Gap Analysis", desc: "Maps current controls against SEBI framework requirements to identify every compliance shortfall. Presented as a structured matrix with a clear and actionable remediation roadmap." },
      { icon: <RefreshCw size={24} />, title: "Action Plan", desc: "Provides prioritised remediation steps with suggested timelines and ownership assignments. Enables your team to close all identified gaps systematically before regulatory deadlines." }
    ]
  };

  const timeline = [
    { num: 1, icon: <Phone size={20} />, title: "Initial Consultation", desc: "We meet your team to understand your business model, regulatory obligations, and security posture. This scoping session defines the full audit boundary and agreed timeline." },
    { num: 2, icon: <FileText size={20} />, title: "Documentation Review", desc: "Our auditors examine your existing security policies, procedures, and governance documentation. Gaps between documented controls and SEBI requirements are identified at this stage." },
    { num: 3, icon: <Search size={20} />, title: "Technical Assessment", desc: "A thorough evaluation of your technical security controls, system configurations, and network architecture. Findings are benchmarked against SEBI mandated security standards and resilience controls." },
    { num: 4, icon: <Target size={20} />, title: "Penetration Testing", desc: "Controlled real-world attacks are simulated against your trading platforms and critical infrastructure. Exploitable vulnerabilities are safely demonstrated and documented with full evidence." },
    { num: 5, icon: <BarChart3 size={20} />, title: "Gap Analysis", desc: "All findings are mapped against the SEBI cyber security framework to identify every compliance gap. Each gap is rated by severity and linked to the relevant regulatory requirement." },
    { num: 6, icon: <FileCheck size={20} />, title: "Report Delivery", desc: "You receive a comprehensive audit report with executive summary, technical findings, and a compliance matrix. Evidence is packaged to fully support SEBI inspection readiness." },
    { num: 7, icon: <Handshake size={20} />, title: "Remediation Support", desc: "Our team provides hands-on implementation guidance to help your team close all identified gaps. We review remediation progress and validate that controls are correctly implemented." },
    { num: 8, icon: <CheckCircle size={20} />, title: "Final Validation", desc: "A closure assessment confirms that all critical findings have been successfully remediated. You receive a compliance sign-off letter to present during SEBI regulatory inspections." }
  ];

  const faqs = [
    { q: "How long does a SEBI audit take?", a: "Typically 2-3 weeks depending on organization size and complexity. We work with your schedule to minimize disruption." },
    { q: "What's included in the audit cost?", a: "Complete technical assessment, documentation review, penetration testing, gap analysis, detailed reports, and remediation guidance." },
    { q: "Do you provide remediation support?", a: "Yes! Our Professional and Enterprise packages include hands-on remediation support and implementation guidance." },
    { q: "How often should we conduct SEBI audits?", a: "SEBI requires periodic audits. We recommend quarterly assessments to maintain continuous compliance." },
    { q: "Can you help with SEBI compliance too?", a: "Absolutely! Our audits cover all SEBI framework requirements comprehensively comprehensively." },
    { q: "What deliverables do we receive?", a: "Executive summary, technical report, compliance matrix, gap analysis, and prioritized action plan." }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Compliance Head", company: "Leading Stock Broker", rating: 5, text: "CyberAries helped us achieve full SEBI compliance. Their team is professional and thorough." },
    { name: "Priya Sharma", role: "CTO", company: "Trading Firm", rating: 5, text: "Excellent audit process. Found critical gaps we missed. Highly recommended!" }
  ];

  const tabs = [
    { id: 'framework', label: 'Framework', icon: <Shield size={18} /> },
    { id: 'compliance', label: 'Compliance', icon: <FileCheck size={18} /> },
    { id: 'testing', label: 'Testing', icon: <Target size={18} /> },
    { id: 'reports', label: 'Reports', icon: <FileText size={18} /> },
  ];

  return (
    <div className="sebi-page">

      {/* ═══════════════════════════════════════════
          HERO — DARK
      ═══════════════════════════════════════════ */}
      <section className="sebi-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="sebi-hero-overlay" />
        <div className="sebi-hero-grid-pattern" />
        <div className="container sebi-hero-inner">
          <div className="sebi-hero-content">
            <ScrollReveal direction="up" triggerOnce={false}>
              <span className="sebi-eyebrow">Capital Markets Regulatory Audit</span>
              <h1 className="sebi-hero-title">
                <span className="sebi-text-gradient">SEBI Cyber Security<br />Audit Services</span>
              </h1>
              <p className="sebi-hero-desc">
                Comprehensive compliance assessment for SEBI-registered entities ensuring
                adherence to SEBI cyber security and resilience framework requirements.
              </p>
              <div className="sebi-hero-actions">
                <button className="sebi-btn-primary" onClick={() => navigate('/contact')}>
                  Schedule Audit <ArrowRight size={18} />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats panel — sits at the bottom of the hero */}
        <div className="sebi-stats-panel" ref={statsRef}>
          <div className="container">
            <div className="sebi-stats-panel-header">
              <span className="sebi-stats-panel-title">Our Track Record</span>
              <span className="sebi-stats-panel-sub">Proven results across SEBI-regulated capital market entities</span>
            </div>
            <div className="sebi-stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="sebi-stat-item">
                  <div className="sebi-stat-num">{animatedStats[i]}{stat.suffix}</div>
                  <div className="sebi-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST STRIP — OFF-WHITE + GRID
      ═══════════════════════════════════════════ */}
      <section className="sebi-trust">
        <div className="sebi-trust-grid-bg" />
        <div className="container">
          <p className="sebi-trust-eyebrow">
            <span className="sebi-eyebrow-line" />
            Trusted by Capital Market Leaders
            <span className="sebi-eyebrow-line" />
          </p>
          <div className="sebi-trust-strip">
            {trustItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="sebi-trust-card">
                  <div className="sebi-trust-icon">{item.icon}</div>
                  <div className="sebi-trust-body">
                    <div className="sebi-trust-title">{item.text}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          KEY SECURITY CHALLENGES — WHITE
      ═══════════════════════════════════════════ */}
      <section className="sebi-challenges">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="sebi-eyebrow sebi-eyebrow-dark sebi-eyebrow-center">Risk Landscape</span>
            <h2 className="sebi-section-title">Key Security Challenges</h2>
            <p className="sebi-section-desc">
              Stock brokers face unique cyber security challenges in capital markets
            </p>
          </ScrollReveal>
          <div className="sebi-challenge-grid">
            {challenges.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80} triggerOnce={false}>
                <div className="sebi-challenge-card">
                  <div className="sebi-challenge-num">{item.num}</div>
                  <div className="sebi-challenge-icon">{item.icon}</div>
                  <h3 className="sebi-challenge-title">{item.title}</h3>
                  <p className="sebi-challenge-desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPREHENSIVE AUDIT FRAMEWORK — OFF-WHITE + GRID
      ═══════════════════════════════════════════ */}
      <section className="sebi-framework">
        <div className="sebi-framework-grid-bg" />
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="sebi-eyebrow sebi-eyebrow-dark sebi-eyebrow-center">Audit Framework</span>
            <h2 className="sebi-section-title">Comprehensive Audit Framework</h2>
            <p className="sebi-section-desc">Click to explore different aspects of our audit approach</p>
          </ScrollReveal>

          <div className="sebi-tabs">
            <div className="sebi-tabs-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`sebi-tab-btn${activeTab === tab.id ? ' sebi-tab-btn--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="sebi-tab-panel" key={activeTab}>
              <div className="sebi-tab-grid">
                {tabsData[activeTab].map((item, i) => (
                  <div key={i} className="sebi-framework-card" style={{ animationDelay: `${i * 60}ms` }}>
                    <div className="sebi-framework-icon">{item.icon}</div>
                    <h4 className="sebi-framework-card-title">{item.title}</h4>
                    <p className="sebi-framework-card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AUDIT PROCESS TIMELINE — WHITE
      ═══════════════════════════════════════════ */}
      <section className="sebi-process">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="sebi-eyebrow sebi-eyebrow-dark sebi-eyebrow-center">Our Approach</span>
            <h2 className="sebi-section-title">Audit Process Timeline</h2>
            <p className="sebi-section-desc">Our structured 8-step approach to SEBI compliance</p>
          </ScrollReveal>

          {/* Desktop snake timeline */}
          <div className="sebi-timeline-desktop">

            {/* ══ ROW 1 ══ */}
            {/* Step 1a: Dots-only strip with the horizontal line behind them */}
            <div className="sebi-tl-dots-row" aria-label="Steps 1 to 4">
              <div className="sebi-tl-hline" aria-hidden="true" />
              {timeline.slice(0, 4).map((step) => (
                <div key={step.num} className="sebi-tl-dot-cell">
                  <div className="sebi-timeline-dot">{step.num}</div>
                </div>
              ))}
            </div>

            {/* Step 1b: Cards-only strip (no line here at all) */}
            <div className="sebi-tl-cards-row">
              {timeline.slice(0, 4).map((step, i) => (
                <ScrollReveal key={step.num} direction="up" delay={i * 80} triggerOnce={false}>
                  <div className="sebi-tl-card-cell">
                    <div className="sebi-timeline-node-card">
                      <div className="sebi-timeline-node-icon">{step.icon}</div>
                      <h4 className="sebi-timeline-node-title">{step.title}</h4>
                      <p className="sebi-timeline-node-desc">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* ══ TURN: right-side vertical drop from row1 to row2 ══ */}
            <div className="sebi-tl-turn-wrap" aria-hidden="true">
              <div className="sebi-tl-turn-line" />
            </div>

            {/* ══ ROW 2 ══ — DOM order is 8,7,6,5 so step 5 is rightmost (under dot 4) */}
            {/* Step 2a: Dots-only strip with horizontal line */}
            <div className="sebi-tl-dots-row sebi-tl-dots-row--rtl" aria-label="Steps 5 to 8">
              <div className="sebi-tl-hline" aria-hidden="true" />
              {timeline.slice(4).reverse().map((step) => (
                <div key={step.num} className="sebi-tl-dot-cell">
                  <div className="sebi-timeline-dot">{step.num}</div>
                </div>
              ))}
            </div>

            {/* Step 2b: Cards-only strip */}
            <div className="sebi-tl-cards-row sebi-tl-cards-row--rtl">
              {timeline.slice(4).reverse().map((step, i) => (
                <ScrollReveal key={step.num} direction="up" delay={(i + 4) * 80} triggerOnce={false}>
                  <div className="sebi-tl-card-cell">
                    <div className="sebi-timeline-node-card">
                      <div className="sebi-timeline-node-icon">{step.icon}</div>
                      <h4 className="sebi-timeline-node-title">{step.title}</h4>
                      <p className="sebi-timeline-node-desc">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

          {/* Mobile vertical timeline */}
          <div className="sebi-timeline-mobile">
            {/* Single vertical line behind everything */}
            <div className="sebi-tl-mobile-line" aria-hidden="true" />
            {timeline.map((step, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 60} triggerOnce={false}>
                <div className="sebi-tl-mobile-item">
                  {/* Dot sits on the line */}
                  <div className="sebi-tl-mobile-dot">{step.num}</div>
                  {/* Card is entirely to the right */}
                  <div className="sebi-tl-mobile-card">
                    <div className="sebi-tl-mobile-icon">{step.icon}</div>
                    <div className="sebi-tl-mobile-text">
                      <h4 className="sebi-tl-mobile-title">{step.title}</h4>
                      <p className="sebi-tl-mobile-desc">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CYBERARIES DIFFERENCE — WHITE + GRID (BFSI style)
      ═══════════════════════════════════════════ */}
      <section className="sebi-difference">
        <div className="sebi-difference-grid-bg" />
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-difference-title">
              THE <span className="sebi-difference-highlight">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="sebi-comparison-grid">
            {/* Traditional — white card */}
            <ScrollReveal direction="left" delay={100} triggerOnce={false}>
              <div className="sebi-diff-card sebi-diff-card--traditional">
                <h3 className="sebi-diff-heading">Traditional Security Firms</h3>
                <ul className="sebi-diff-list">
                  {[
                    "Generic checklists not tailored to SEBI requirements",
                    "Limited testing scope and depth",
                    "Report only — no implementation support",
                    "Annual audit without continuous monitoring",
                    "Limited understanding of SEBI regulatory expectations",
                    "Leaves firms unprepared for SEBI inspections"
                  ].map((item, i) => (
                    <li key={i} className="sebi-diff-item">
                      <span className="sebi-diff-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* CyberAries — dark featured card */}
            <ScrollReveal direction="right" delay={200} triggerOnce={false}>
              <div className="sebi-diff-card sebi-diff-card--featured">
                <div className="sebi-diff-card-inner-glow" />
                <h3 className="sebi-diff-heading sebi-diff-heading--red">CyberAries SEBI Security</h3>
                <ul className="sebi-diff-list">
                  {[
                    "SEBI-specific framework aligned with latest SEBI circulars",
                    "Comprehensive VAPT across all critical systems",
                    "Hands-on remediation support and knowledge transfer",
                    "Continuous compliance monitoring and improvement",
                    "Deep SEBI regulatory expertise and audit experience",
                    "Inspection-ready documentation and evidence management"
                  ].map((item, i) => (
                    <li key={i} className="sebi-diff-item sebi-diff-item--featured">
                      <CheckCircle size={17} className="sebi-diff-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ + CLIENT SUCCESS — OFF-WHITE + GRID
      ═══════════════════════════════════════════ */}
      <section className="sebi-faq-testimonials">
        <div className="sebi-faq-grid-bg" />
        <div className="container">
          <div className="sebi-faq-testimonials-inner">

            {/* FAQ */}
            <div className="sebi-faq-col">
              <ScrollReveal direction="up" triggerOnce={false}>
                <span className="sebi-eyebrow sebi-eyebrow-dark">FAQ</span>
                <h2 className="sebi-section-title sebi-section-title--left">Frequently Asked Questions</h2>
              </ScrollReveal>
              <div className="sebi-faq-list">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`sebi-faq-item${openFaq === i ? ' sebi-faq-item--open' : ''}`}
                  >
                    <button
                      className="sebi-faq-question"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`sebi-faq-chevron${openFaq === i ? ' sebi-faq-chevron--open' : ''}`}
                      />
                    </button>
                    <div className={`sebi-faq-answer${openFaq === i ? ' sebi-faq-answer--open' : ''}`}>
                      <div className="sebi-faq-answer-inner">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical gradient divider */}
            <div className="sebi-faq-divider" aria-hidden="true" />

            {/* Testimonials */}
            <div className="sebi-testimonials-col">
              <ScrollReveal direction="up" delay={100} triggerOnce={false}>
                <span className="sebi-eyebrow sebi-eyebrow-dark">Client Success</span>
                <h2 className="sebi-section-title sebi-section-title--left">Client Success Stories</h2>
              </ScrollReveal>
              <div className="sebi-testimonial-list">
                {testimonials.map((t, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 120} triggerOnce={false}>
                    <div className="sebi-testimonial-card">
                      <div className="sebi-testimonial-stars">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} size={16} fill="#FFD700" stroke="#FFD700" />
                        ))}
                      </div>
                      <p className="sebi-testimonial-quote">"{t.text}"</p>
                      <div className="sebi-testimonial-author">
                        <div className="sebi-testimonial-avatar">{t.name[0]}</div>
                        <div>
                          <div className="sebi-testimonial-name">{t.name}</div>
                          <div className="sebi-testimonial-role">{t.role}, {t.company}</div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — DARK WITH BG IMAGE (BFSI style)
      ═══════════════════════════════════════════ */}
      <section
        className="sebi-cta"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        {/* Dark overlay sits on top of the bg image */}
        <div className="sebi-cta-overlay" />
        <div className="sebi-cta-red-glow" />
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <div className="sebi-cta-content">
              <span className="sebi-eyebrow">Ready to Strengthen Your Cyber Resilience?</span>
              <h2 className="sebi-cta-title"><span className="sebi-text-gradient">Ensure SEBI Compliance with Confidence</span></h2>
              <p className="sebi-cta-desc">Partner with CyberAries for comprehensive SEBI cyber security audits</p>
              <div className="sebi-cta-actions">
                <button className="sebi-btn-primary sebi-btn-primary--large" onClick={() => navigate('/contact')}>
                  Schedule Your Audit <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default SEBICyberAudit;
