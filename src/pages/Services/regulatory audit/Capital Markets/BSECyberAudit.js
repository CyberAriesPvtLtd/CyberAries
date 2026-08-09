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
import './BSECyberAudit.css';

const BSECyberAudit = () => {
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
      desc: "Our team comprises seasoned professionals with deep SEBI and BSE domain knowledge. Each auditor brings hands-on capital market security experience."
    },
    {
      icon: <Clock size={32} />,
      text: "24/7 Support",
      desc: "Round-the-clock assistance is available throughout your audit engagement. Our dedicated support team ensures no compliance query goes unanswered."
    }
  ];

  const challenges = [
    { icon: <FileText size={28} />, num: "01", title: "Regulatory Compliance", desc: "Meeting SEBI & BSE cyber security circulars is mandatory for all trading members. Non-compliance exposes firms to regulatory penalties and trading suspension." },
    { icon: <TrendingUp size={28} />, num: "02", title: "Trading Platform Security", desc: "High-frequency trading environments demand real-time threat detection and resilience. Any breach in trading infrastructure can trigger significant financial and reputational damage." },
    { icon: <Lock size={28} />, num: "03", title: "Data Protection", desc: "Investor records, trade data, and KYC information must be encrypted and access-controlled. Unauthorised exposure violates DPDP Act obligations and erodes client trust." },
    { icon: <Eye size={28} />, num: "04", title: "Market Surveillance", desc: "Continuous monitoring is essential to detect price manipulation, insider activity, and anomalous patterns. Gaps in surveillance can result in regulatory investigations and sanctions." },
    { icon: <Shield size={28} />, num: "05", title: "DDoS Protection", desc: "Capital market platforms are prime targets for volumetric denial-of-service attacks. Robust mitigation controls ensure trading continuity and prevent market disruption." },
    { icon: <Network size={28} />, num: "06", title: "Third-Party Risks", desc: "Brokers rely on multiple vendors for trading, clearing, and risk management systems. Each integration point introduces potential vulnerabilities that must be assessed and controlled." }
  ];

  const tabsData = {
    framework: [
      { icon: <Users size={24} />, title: "Security Governance", desc: "Establishes board-level oversight, security policies, and risk management frameworks. Ensures accountability and strategic alignment across the organisation." },
      { icon: <Network size={24} />, title: "Network Security", desc: "Covers firewall configurations, intrusion detection and prevention systems, and network segmentation. Protects critical trading infrastructure from lateral movement attacks." },
      { icon: <Activity size={24} />, title: "Platform Security", desc: "Validates authentication controls, transaction integrity, and application-layer protections. Ensures trading platforms are hardened against exploitation and tampering." },
      { icon: <Database size={24} />, title: "Data Protection", desc: "Assesses encryption standards, data loss prevention controls, and secure disposal practices. Ensures sensitive investor and trade data is protected at rest and in transit." },
      { icon: <UserCheck size={24} />, title: "Access Control", desc: "Reviews multi-factor authentication, role-based access controls, and identity governance processes. Prevents unauthorised access to critical systems and trading functions." },
      { icon: <Bell size={24} />, title: "Incident Response", desc: "Evaluates the 24/7 SOC capability, continuous monitoring tools, and forensic readiness. Ensures rapid detection, containment, and recovery from security incidents." }
    ],
    compliance: [
      { icon: <FileCheck size={24} />, title: "BSE Circulars", desc: "Reviews adherence to all BSE-issued cyber security circulars and exchange directives. Ensures trading members meet every mandatory technical and procedural requirement." },
      { icon: <Shield size={24} />, title: "SEBI Guidelines", desc: "Validates compliance with SEBI's cyber security and cyber resilience framework for market intermediaries. Maps controls to each prescribed regulatory requirement." },
      { icon: <Lock size={24} />, title: "Data Privacy", desc: "Assesses alignment with the Digital Personal Data Protection Act and related obligations. Ensures lawful collection, processing, and storage of investor personal data." },
      { icon: <CheckCircle size={24} />, title: "Audit Standards", desc: "Benchmarks controls against ISO 27001 and NIST Cybersecurity Framework standards. Provides a globally recognised compliance baseline for the organisation." }
    ],
    testing: [
      { icon: <Search size={24} />, title: "Vulnerability Scanning", desc: "Runs automated assessments across all in-scope systems to identify known security weaknesses. Produces a prioritised vulnerability register for remediation action." },
      { icon: <Target size={24} />, title: "Penetration Testing", desc: "Simulates real-world attack scenarios against trading platforms and supporting infrastructure. Uncovers exploitable gaps that automated scanning alone cannot detect." },
      { icon: <Activity size={24} />, title: "Network Testing", desc: "Validates the security posture of network perimeters, internal segments, and inter-system communications. Identifies misconfigurations that expose critical assets to attack." },
      { icon: <Settings size={24} />, title: "Configuration Review", desc: "Inspects system hardening settings against security baselines and vendor best practices. Eliminates unnecessary services, weak defaults, and insecure configurations." }
    ],
    reports: [
      { icon: <FileText size={24} />, title: "Executive Summary", desc: "Provides board and senior leadership with a clear, non-technical overview of compliance status. Highlights key risks, overall posture, and strategic recommendations." },
      { icon: <BarChart3 size={24} />, title: "Technical Report", desc: "Delivers detailed findings with evidence, risk ratings, and technical context for each identified issue. Supports your IT and security teams in planning targeted remediation." },
      { icon: <CheckCircle size={24} />, title: "Gap Analysis", desc: "Maps current controls against BSE and SEBI requirements to identify every compliance shortfall. Presented as a structured matrix with a clear remediation roadmap." },
      { icon: <RefreshCw size={24} />, title: "Action Plan", desc: "Provides prioritised remediation steps with suggested timelines and ownership assignments. Enables your team to close gaps systematically before regulatory deadlines." }
    ]
  };

  const timeline = [
    { num: 1, icon: <Phone size={20} />, title: "Initial Consultation", desc: "We meet your team to understand your business model, regulatory obligations, and current security posture. This scoping session defines the full audit boundary and timeline." },
    { num: 2, icon: <FileText size={20} />, title: "Documentation Review", desc: "Our auditors examine your existing security policies, procedures, and governance documentation. Gaps between documented controls and BSE requirements are identified at this stage." },
    { num: 3, icon: <Search size={20} />, title: "Technical Assessment", desc: "A thorough evaluation of your technical security controls, system configurations, and network architecture is performed. Findings are benchmarked against SEBI and BSE mandated standards." },
    { num: 4, icon: <Target size={20} />, title: "Penetration Testing", desc: "Controlled real-world attacks are simulated against your trading platforms and critical infrastructure. Exploitable vulnerabilities are safely demonstrated and documented with evidence." },
    { num: 5, icon: <BarChart3 size={20} />, title: "Gap Analysis", desc: "All assessment findings are mapped against the BSE cyber security framework to identify every compliance gap. Each gap is rated by severity and linked to the relevant regulatory requirement." },
    { num: 6, icon: <FileCheck size={20} />, title: "Report Delivery", desc: "You receive a comprehensive audit report containing executive summary, technical findings, and a compliance matrix. All evidence is packaged to support BSE inspection readiness." },
    { num: 7, icon: <Handshake size={20} />, title: "Remediation Support", desc: "Our team provides hands-on implementation guidance to help your team close identified gaps. We review remediation progress and validate that controls are correctly implemented." },
    { num: 8, icon: <CheckCircle size={20} />, title: "Final Validation", desc: "A closure assessment confirms that all critical findings have been successfully remediated. You receive a final compliance sign-off letter to present during BSE regulatory inspections." }
  ];

  const faqs = [
    { q: "How long does a BSE audit take?", a: "Typically 2-3 weeks depending on organization size and complexity. We work with your schedule to minimize disruption." },
    { q: "What's included in the audit cost?", a: "Complete technical assessment, documentation review, penetration testing, gap analysis, detailed reports, and remediation guidance." },
    { q: "Do you provide remediation support?", a: "Yes! Our Professional and Enterprise packages include hands-on remediation support and implementation guidance." },
    { q: "How often should we conduct BSE audits?", a: "BSE requires annual audits. We recommend quarterly assessments to maintain continuous compliance." },
    { q: "Can you help with SEBI compliance too?", a: "Absolutely! Our audits cover both BSE and SEBI requirements comprehensively." },
    { q: "What deliverables do we receive?", a: "Executive summary, technical report, compliance matrix, gap analysis, and prioritized action plan." }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Compliance Head", company: "Leading Stock Broker", rating: 5, text: "CyberAries helped us achieve 100% BSE compliance. Their team is professional and thorough." },
    { name: "Priya Sharma", role: "CTO", company: "Trading Firm", rating: 5, text: "Excellent audit process. Found critical gaps we missed. Highly recommended!" }
  ];

  const tabs = [
    { id: 'framework', label: 'Framework', icon: <Shield size={18} /> },
    { id: 'compliance', label: 'Compliance', icon: <FileCheck size={18} /> },
    { id: 'testing', label: 'Testing', icon: <Target size={18} /> },
    { id: 'reports', label: 'Reports', icon: <FileText size={18} /> },
  ];

  return (
    <div className="bse-page">

      {/* ═══════════════════════════════════════════
          HERO — DARK
      ═══════════════════════════════════════════ */}
      <section className="bse-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="bse-hero-overlay" />
        <div className="bse-hero-grid-pattern" />
        <div className="container bse-hero-inner">
          <div className="bse-hero-content">
            <ScrollReveal direction="up" triggerOnce={false}>
              <span className="bse-eyebrow">Capital Markets Regulatory Audit</span>
              <h1 className="bse-hero-title">
                <span className="bse-text-gradient">BSE Cyber Security<br />Audit Services</span>
              </h1>
              <p className="bse-hero-desc">
                Comprehensive compliance assessment for BSE trading members ensuring
                adherence to SEBI and BSE cyber security requirements.
              </p>
              <div className="bse-hero-actions">
                <button className="bse-btn-primary" onClick={() => navigate('/contact')}>
                  Schedule Audit <ArrowRight size={18} />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats panel — sits at the bottom of the hero */}
        <div className="bse-stats-panel" ref={statsRef}>
          <div className="container">
            <div className="bse-stats-panel-header">
              <span className="bse-stats-panel-title">Our Track Record</span>
              <span className="bse-stats-panel-sub">Proven results across BSE-regulated capital market firms</span>
            </div>
            <div className="bse-stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="bse-stat-item">
                  <div className="bse-stat-num">{animatedStats[i]}{stat.suffix}</div>
                  <div className="bse-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST STRIP — OFF-WHITE + GRID
      ═══════════════════════════════════════════ */}
      <section className="bse-trust">
        <div className="bse-trust-grid-bg" />
        <div className="container">
          <p className="bse-trust-eyebrow">
            <span className="bse-eyebrow-line" />
            Trusted by Capital Market Leaders
            <span className="bse-eyebrow-line" />
          </p>
          <div className="bse-trust-strip">
            {trustItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="bse-trust-card">
                  <div className="bse-trust-icon">{item.icon}</div>
                  <div className="bse-trust-body">
                    <div className="bse-trust-title">{item.text}</div>
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
      <section className="bse-challenges">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="bse-eyebrow bse-eyebrow-dark bse-eyebrow-center">Risk Landscape</span>
            <h2 className="bse-section-title">Key Security Challenges</h2>
            <p className="bse-section-desc">
              Stock brokers face unique cyber security challenges in capital markets
            </p>
          </ScrollReveal>
          <div className="bse-challenge-grid">
            {challenges.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80} triggerOnce={false}>
                <div className="bse-challenge-card">
                  <div className="bse-challenge-num">{item.num}</div>
                  <div className="bse-challenge-icon">{item.icon}</div>
                  <h3 className="bse-challenge-title">{item.title}</h3>
                  <p className="bse-challenge-desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPREHENSIVE AUDIT FRAMEWORK — OFF-WHITE + GRID
      ═══════════════════════════════════════════ */}
      <section className="bse-framework">
        <div className="bse-framework-grid-bg" />
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="bse-eyebrow bse-eyebrow-dark bse-eyebrow-center">Audit Framework</span>
            <h2 className="bse-section-title">Comprehensive Audit Framework</h2>
            <p className="bse-section-desc">Click to explore different aspects of our audit approach</p>
          </ScrollReveal>

          <div className="bse-tabs">
            <div className="bse-tabs-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`bse-tab-btn${activeTab === tab.id ? ' bse-tab-btn--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="bse-tab-panel" key={activeTab}>
              <div className="bse-tab-grid">
                {tabsData[activeTab].map((item, i) => (
                  <div key={i} className="bse-framework-card" style={{ animationDelay: `${i * 60}ms` }}>
                    <div className="bse-framework-icon">{item.icon}</div>
                    <h4 className="bse-framework-card-title">{item.title}</h4>
                    <p className="bse-framework-card-desc">{item.desc}</p>
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
      <section className="bse-process">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="bse-eyebrow bse-eyebrow-dark bse-eyebrow-center">Our Approach</span>
            <h2 className="bse-section-title">Audit Process Timeline</h2>
            <p className="bse-section-desc">Our structured 8-step approach to BSE compliance</p>
          </ScrollReveal>

          {/* Desktop snake timeline */}
          <div className="bse-timeline-desktop">

            {/* ══ ROW 1 ══ */}
            {/* Step 1a: Dots-only strip with the horizontal line behind them */}
            <div className="bse-tl-dots-row" aria-label="Steps 1 to 4">
              <div className="bse-tl-hline" aria-hidden="true" />
              {timeline.slice(0, 4).map((step) => (
                <div key={step.num} className="bse-tl-dot-cell">
                  <div className="bse-timeline-dot">{step.num}</div>
                </div>
              ))}
            </div>

            {/* Step 1b: Cards-only strip (no line here at all) */}
            <div className="bse-tl-cards-row">
              {timeline.slice(0, 4).map((step, i) => (
                <ScrollReveal key={step.num} direction="up" delay={i * 80} triggerOnce={false}>
                  <div className="bse-tl-card-cell">
                    <div className="bse-timeline-node-card">
                      <div className="bse-timeline-node-icon">{step.icon}</div>
                      <h4 className="bse-timeline-node-title">{step.title}</h4>
                      <p className="bse-timeline-node-desc">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* ══ TURN: right-side vertical drop from row1 to row2 ══ */}
            <div className="bse-tl-turn-wrap" aria-hidden="true">
              <div className="bse-tl-turn-line" />
            </div>

            {/* ══ ROW 2 ══ — DOM order is 8,7,6,5 so step 5 is rightmost (under dot 4) */}
            {/* Step 2a: Dots-only strip with horizontal line */}
            <div className="bse-tl-dots-row bse-tl-dots-row--rtl" aria-label="Steps 5 to 8">
              <div className="bse-tl-hline" aria-hidden="true" />
              {timeline.slice(4).reverse().map((step) => (
                <div key={step.num} className="bse-tl-dot-cell">
                  <div className="bse-timeline-dot">{step.num}</div>
                </div>
              ))}
            </div>

            {/* Step 2b: Cards-only strip */}
            <div className="bse-tl-cards-row bse-tl-cards-row--rtl">
              {timeline.slice(4).reverse().map((step, i) => (
                <ScrollReveal key={step.num} direction="up" delay={(i + 4) * 80} triggerOnce={false}>
                  <div className="bse-tl-card-cell">
                    <div className="bse-timeline-node-card">
                      <div className="bse-timeline-node-icon">{step.icon}</div>
                      <h4 className="bse-timeline-node-title">{step.title}</h4>
                      <p className="bse-timeline-node-desc">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

          {/* Mobile vertical timeline */}
          <div className="bse-timeline-mobile">
            {/* Single vertical line behind everything */}
            <div className="bse-tl-mobile-line" aria-hidden="true" />
            {timeline.map((step, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 60} triggerOnce={false}>
                <div className="bse-tl-mobile-item">
                  {/* Dot sits on the line */}
                  <div className="bse-tl-mobile-dot">{step.num}</div>
                  {/* Card is entirely to the right */}
                  <div className="bse-tl-mobile-card">
                    <div className="bse-tl-mobile-icon">{step.icon}</div>
                    <div className="bse-tl-mobile-text">
                      <h4 className="bse-tl-mobile-title">{step.title}</h4>
                      <p className="bse-tl-mobile-desc">{step.desc}</p>
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
      <section className="bse-difference">
        <div className="bse-difference-grid-bg" />
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="bse-difference-title">
              THE <span className="bse-difference-highlight">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="bse-comparison-grid">
            {/* Traditional — white card */}
            <ScrollReveal direction="left" delay={100} triggerOnce={false}>
              <div className="bse-diff-card bse-diff-card--traditional">
                <h3 className="bse-diff-heading">Traditional Security Firms</h3>
                <ul className="bse-diff-list">
                  {[
                    "Generic checklists not tailored to BSE requirements",
                    "Limited testing scope and depth",
                    "Report only — no implementation support",
                    "Annual audit without continuous monitoring",
                    "Limited understanding of SEBI/BSE regulatory expectations",
                    "Leaves firms unprepared for BSE inspections"
                  ].map((item, i) => (
                    <li key={i} className="bse-diff-item">
                      <span className="bse-diff-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* CyberAries — dark featured card */}
            <ScrollReveal direction="right" delay={200} triggerOnce={false}>
              <div className="bse-diff-card bse-diff-card--featured">
                <div className="bse-diff-card-inner-glow" />
                <h3 className="bse-diff-heading bse-diff-heading--red">CyberAries BSE Security</h3>
                <ul className="bse-diff-list">
                  {[
                    "BSE-specific framework aligned with SEBI circulars",
                    "Comprehensive VAPT across all critical systems",
                    "Hands-on remediation support and knowledge transfer",
                    "Continuous compliance monitoring and improvement",
                    "Deep BSE regulatory expertise and audit experience",
                    "Inspection-ready documentation and evidence management"
                  ].map((item, i) => (
                    <li key={i} className="bse-diff-item bse-diff-item--featured">
                      <CheckCircle size={17} className="bse-diff-check" />
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
      <section className="bse-faq-testimonials">
        <div className="bse-faq-grid-bg" />
        <div className="container">
          <div className="bse-faq-testimonials-inner">

            {/* FAQ */}
            <div className="bse-faq-col">
              <ScrollReveal direction="up" triggerOnce={false}>
                <span className="bse-eyebrow bse-eyebrow-dark">FAQ</span>
                <h2 className="bse-section-title bse-section-title--left">Frequently Asked Questions</h2>
              </ScrollReveal>
              <div className="bse-faq-list">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`bse-faq-item${openFaq === i ? ' bse-faq-item--open' : ''}`}
                  >
                    <button
                      className="bse-faq-question"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`bse-faq-chevron${openFaq === i ? ' bse-faq-chevron--open' : ''}`}
                      />
                    </button>
                    <div className={`bse-faq-answer${openFaq === i ? ' bse-faq-answer--open' : ''}`}>
                      <div className="bse-faq-answer-inner">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical gradient divider */}
            <div className="bse-faq-divider" aria-hidden="true" />

            {/* Testimonials */}
            <div className="bse-testimonials-col">
              <ScrollReveal direction="up" delay={100} triggerOnce={false}>
                <span className="bse-eyebrow bse-eyebrow-dark">Client Success</span>
                <h2 className="bse-section-title bse-section-title--left">Client Success Stories</h2>
              </ScrollReveal>
              <div className="bse-testimonial-list">
                {testimonials.map((t, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 120} triggerOnce={false}>
                    <div className="bse-testimonial-card">
                      <div className="bse-testimonial-stars">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} size={16} fill="#FFD700" stroke="#FFD700" />
                        ))}
                      </div>
                      <p className="bse-testimonial-quote">"{t.text}"</p>
                      <div className="bse-testimonial-author">
                        <div className="bse-testimonial-avatar">{t.name[0]}</div>
                        <div>
                          <div className="bse-testimonial-name">{t.name}</div>
                          <div className="bse-testimonial-role">{t.role}, {t.company}</div>
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
        className="bse-cta"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        {/* Dark overlay sits on top of the bg image */}
        <div className="bse-cta-overlay" />
        <div className="bse-cta-red-glow" />
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <div className="bse-cta-content">
              <span className="bse-eyebrow">Ready to Strengthen Your Cyber Resilience?</span>
              <h2 className="bse-cta-title"><span className="bse-text-gradient">Ensure BSE Compliance with Confidence</span></h2>
              <p className="bse-cta-desc">Partner with CyberAries for comprehensive BSE cyber security audits</p>
              <div className="bse-cta-actions">
                <button className="bse-btn-primary bse-btn-primary--large" onClick={() => navigate('/contact')}>
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

export default BSECyberAudit;
