import React, { useEffect, useState } from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
/* eslint-disable no-unused-vars */
import {
  Shield, Lock, FileText, CheckCircle, Settings, BarChart3, Users, Globe, Database, Bell, Eye, Award, Handshake, RefreshCw, FileCheck, UserCheck, Network, Server, TrendingUp, Activity, Clipboard, Search, Target, Zap, Clock, ChevronDown, ChevronRight, Star, Phone, Mail, Calendar, DollarSign, Check, X, ArrowRight
} from 'lucide-react';
/* eslint-enable no-unused-vars */
import './BSECyberAudit.css';

const BSECyberAudit = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // STATE FOR INTERACTIVE COMPONENTS
  const [activeTab, setActiveTab] = useState('framework');
  const [openFaq, setOpenFaq] = useState(null);

  // HERO STATS DATA
  const stats = [
    { number: "500+", label: "Audits Completed" },
    { number: "98%", label: "Success Rate" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Compliance Score" }
  ];

  // TRUST INDICATORS
  const trustItems = [
    { icon: <Award size={40} />, text: "SEBI Certified" },
    { icon: <Shield size={40} />, text: "ISO Accredited" },
    { icon: <Users size={40} />, text: "500+ Audits" },
    { icon: <Clock size={40} />, text: "24/7 Support" }
  ];

  // CHALLENGES DATA
  const challenges = [
    { icon: <FileText />, title: "Regulatory Compliance", desc: "Meeting SEBI & BSE cyber security requirements" },
    { icon: <TrendingUp />, title: "Trading Platform Security", desc: "Securing high-frequency trading systems" },
    { icon: <Lock />, title: "Data Protection", desc: "Safeguarding investor information and records" },
    { icon: <Eye />, title: "Market Surveillance", desc: "Monitoring for manipulation and threats" },
    { icon: <Shield />, title: "DDoS Protection", desc: "Defending against cyber attacks" },
    { icon: <Network />, title: "Third-Party Risks", desc: "Managing vendor security dependencies" }
  ];

  // TABS CONTENT
  const tabsData = {
    framework: [
      { icon: <Users />, title: "Security Governance", desc: "Board oversight, policies, risk management" },
      { icon: <Network />, title: "Network Security", desc: "Firewall, IDS/IPS, segmentation" },
      { icon: <Activity />, title: "Platform Security", desc: "Authentication, transactions, integrity" },
      { icon: <Database />, title: "Data Protection", desc: "Encryption, DLP, secure disposal" },
      { icon: <UserCheck />, title: "Access Control", desc: "MFA, RBAC, identity governance" },
      { icon: <Bell />, title: "Incident Response", desc: "24/7 SOC, monitoring, forensics" }
    ],
    compliance: [
      { icon: <FileCheck />, title: "BSE Circulars", desc: "Adherence to exchange requirements" },
      { icon: <Shield />, title: "SEBI Guidelines", desc: "Regulatory compliance framework" },
      { icon: <Lock />, title: "Data Privacy", desc: "DPDP Act compliance" },
      { icon: <CheckCircle />, title: "Audit Standards", desc: "ISO 27001, NIST frameworks" }
    ],
    testing: [
      { icon: <Search />, title: "Vulnerability Scanning", desc: "Automated security assessments" },
      { icon: <Target />, title: "Penetration Testing", desc: "Real-world attack simulation" },
      { icon: <Activity />, title: "Network Testing", desc: "Infrastructure security validation" },
      { icon: <Settings />, title: "Configuration Review", desc: "Security hardening checks" }
    ],
    reports: [
      { icon: <FileText />, title: "Executive Summary", desc: "Board-level compliance overview" },
      { icon: <BarChart3 />, title: "Technical Report", desc: "Detailed findings and evidence" },
      { icon: <CheckCircle />, title: "Gap Analysis", desc: "Compliance matrix with roadmap" },
      { icon: <RefreshCw />, title: "Action Plan", desc: "Remediation steps and timelines" }
    ]
  };

  // TIMELINE STEPS
  const timeline = [
    { num: 1, icon: <Phone />, title: "Initial Consultation", desc: "Discuss requirements and scope" },
    { num: 2, icon: <FileText />, title: "Documentation Review", desc: "Analyze policies and procedures" },
    { num: 3, icon: <Search />, title: "Technical Assessment", desc: "Evaluate security controls" },
    { num: 4, icon: <Target />, title: "Penetration Testing", desc: "Simulate real-world attacks" },
    { num: 5, icon: <BarChart3 />, title: "Gap Analysis", desc: "Identify compliance gaps" },
    { num: 6, icon: <FileCheck />, title: "Report Delivery", desc: "Comprehensive audit findings" },
    { num: 7, icon: <Handshake />, title: "Remediation Support", desc: "Implementation guidance" },
    { num: 8, icon: <CheckCircle />, title: "Final Validation", desc: "Verify compliance achievement" }
  ];


  // FAQ DATA
  const faqs = [
    { q: "How long does a BSE audit take?", a: "Typically 2-3 weeks depending on organization size and complexity. We work with your schedule to minimize disruption." },
    { q: "What's included in the audit cost?", a: "Complete technical assessment, documentation review, penetration testing, gap analysis, detailed reports, and remediation guidance." },
    { q: "Do you provide remediation support?", a: "Yes! Our Professional and Enterprise packages include hands-on remediation support and implementation guidance." },
    { q: "How often should we conduct BSE audits?", a: "BSE requires annual audits. We recommend quarterly assessments to maintain continuous compliance." },
    { q: "Can you help with SEBI compliance too?", a: "Absolutely! Our audits cover both BSE and SEBI requirements comprehensively." },
    { q: "What deliverables do we receive?", a: "Executive summary, technical report, compliance matrix, gap analysis, and prioritized action plan." }
  ];

  // TESTIMONIALS
  const testimonials = [
    { name: "Rajesh Kumar", role: "Compliance Head", company: "Leading Stock Broker", rating: 5, text: "Cyberaries helped us achieve 100% BSE compliance. Their team is professional and thorough." },
    { name: "Priya Sharma", role: "CTO", company: "Trading Firm", rating: 5, text: "Excellent audit process. Found critical gaps we missed. Highly recommended!" }
  ];

  return (
    <div className="bse-page">
      {/* HERO SECTION */}
      <section className="bse-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="bse-hero-overlay"></div>
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="bse-badge">Capital Markets Regulatory Audit</span>
            <h1 className="bse-hero-title">BSE Cyber Security <span className="bse-gradient">Audit Services</span></h1>
            <p className="bse-hero-desc">Comprehensive compliance assessment for BSE trading members ensuring adherence to SEBI and BSE cyber security requirements</p>
            <div className="bse-hero-actions">
              <button className="bse-btn-primary"><Calendar size={20} /> Schedule Audit</button>
              <button className="bse-btn-secondary"><FileText size={20} /> Download Brochure</button>
            </div>
            <div className="bse-stats-bar">
              {stats.map((stat, i) => (
                <div key={i} className="bse-stat">
                  <div className="bse-stat-num">{stat.number}</div>
                  <div className="bse-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bse-trust">
        <div className="container">
          <div className="bse-trust-grid">
            {trustItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="bse-trust-item">
                  <div className="bse-trust-icon">{item.icon}</div>
                  <div className="bse-trust-text">{item.text}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES GRID */}
      <section className="bse-challenges">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="bse-section-title">Key Security Challenges</h2>
            <p className="bse-section-desc">Stock brokers face unique cyber security challenges in capital markets</p>
          </ScrollReveal>
          <div className="bse-challenge-grid">
            {challenges.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="bse-card bse-challenge-card">
                  <div className="bse-card-icon">{item.icon}</div>
                  <h3 className="bse-card-title">{item.title}</h3>
                  <p className="bse-card-desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TABS */}
      <section className="bse-tabs-section">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="bse-section-title">Comprehensive Audit Framework</h2>
            <p className="bse-section-desc">Click to explore different aspects of our audit approach</p>
          </ScrollReveal>

          <div className="bse-tabs">
            <div className="bse-tabs-header">
              <button className={`bse-tab-btn ${activeTab === 'framework' ? 'active' : ''}`} onClick={() => setActiveTab('framework')}>
                <Shield size={20} /> Framework
              </button>
              <button className={`bse-tab-btn ${activeTab === 'compliance' ? 'active' : ''}`} onClick={() => setActiveTab('compliance')}>
                <FileCheck size={20} /> Compliance
              </button>
              <button className={`bse-tab-btn ${activeTab === 'testing' ? 'active' : ''}`} onClick={() => setActiveTab('testing')}>
                <Target size={20} /> Testing
              </button>
              <button className={`bse-tab-btn ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>
                <FileText size={20} /> Reports
              </button>
            </div>

            <div className="bse-tab-content">
              <div className="bse-tab-grid">
                {tabsData[activeTab].map((item, i) => (
                  <div key={i} className="bse-card bse-tab-card">
                    <div className="bse-card-icon">{item.icon}</div>
                    <h4 className="bse-card-title">{item.title}</h4>
                    <p className="bse-card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL TIMELINE */}
      <section className="bse-timeline-section">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="bse-section-title">Audit Process Timeline</h2>
            <p className="bse-section-desc">Our structured 8-step approach to BSE compliance</p>
          </ScrollReveal>

          <div className="bse-timeline">
            {timeline.map((step, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100} triggerOnce={false}>
                <div className={`bse-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="bse-timeline-number">{step.num}</div>
                  <div className="bse-timeline-card">
                    <div className="bse-timeline-icon">{step.icon}</div>
                    <h4 className="bse-timeline-title">{step.title}</h4>
                    <p className="bse-timeline-desc">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bse-comparison">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="bse-section-title">The Cyberaries Difference</h2>
          </ScrollReveal>

          <div className="bse-comparison-grid">
            <div className="bse-comparison-col">
              <h3>Traditional Firms</h3>
              <div className="bse-comparison-item"><X className="bse-icon-no" /> Generic checklists</div>
              <div className="bse-comparison-item"><X className="bse-icon-no" /> Limited testing</div>
              <div className="bse-comparison-item"><X className="bse-icon-no" /> Report only</div>
              <div className="bse-comparison-item"><X className="bse-icon-no" /> Annual audit</div>
            </div>
            <div className="bse-comparison-col bse-featured">
              <h3>Cyberaries Approach</h3>
              <div className="bse-comparison-item"><Check className="bse-icon-yes" /> BSE-specific framework</div>
              <div className="bse-comparison-item"><Check className="bse-icon-yes" /> Comprehensive VAPT</div>
              <div className="bse-comparison-item"><Check className="bse-icon-yes" /> Remediation support</div>
              <div className="bse-comparison-item"><Check className="bse-icon-yes" /> Continuous monitoring</div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ ACCORDION */}
      <section className="bse-faq">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="bse-section-title">Frequently Asked Questions</h2>
          </ScrollReveal>

          <div className="bse-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`bse-faq-item ${openFaq === i ? 'active' : ''}`}>
                <div className="bse-faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown className={`bse-faq-icon ${openFaq === i ? 'rotated' : ''}`} />
                </div>
                {openFaq === i && (
                  <div className="bse-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bse-testimonials">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="bse-section-title">Client Success Stories</h2>
          </ScrollReveal>

          <div className="bse-testimonial-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="bse-testimonial-card">
                  <div className="bse-testimonial-stars">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={18} fill="#FFD700" stroke="#FFD700" />)}
                  </div>
                  <p className="bse-testimonial-text">"{t.text}"</p>
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
      </section>

      {/* FINAL CTA */}
      <section className="bse-cta">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="bse-cta-title">Ready to Achieve BSE Compliance?</h2>
            <p className="bse-cta-desc">Schedule a consultation with our experts today</p>
            <button className="bse-btn-cta"><Phone size={20} /> Contact Us Now</button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default BSECyberAudit;