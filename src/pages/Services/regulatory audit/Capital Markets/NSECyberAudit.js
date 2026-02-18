import React, { useEffect, useState } from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
/* eslint-disable no-unused-vars */
import {
  Shield, Lock, FileText, CheckCircle, Settings, BarChart3, Users, Globe, Database, Bell, Eye, Award, Handshake, RefreshCw, FileCheck, UserCheck, Network, Server, TrendingUp, Activity, Clipboard, Search, Target, Zap, Clock, ChevronDown, ChevronRight, Star, Phone, Mail, Calendar, DollarSign, Check, X, ArrowRight
} from 'lucide-react';
/* eslint-enable no-unused-vars */
import './NSECyberAudit.css';

const NSECyberAudit = () => {
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
    { icon: <FileText />, title: "Regulatory Compliance", desc: "Meeting SEBI & NSE cyber security requirements" },
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
      { icon: <FileCheck />, title: "NSE Circulars", desc: "Adherence to exchange requirements" },
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
    { q: "How long does a NSE audit take?", a: "Typically 2-3 weeks depending on organization size and complexity. We work with your schedule to minimize disruption." },
    { q: "What's included in the audit cost?", a: "Complete technical assessment, documentation review, penetration testing, gap analysis, detailed reports, and remediation guidance." },
    { q: "Do you provide remediation support?", a: "Yes! Our Professional and Enterprise packages include hands-on remediation support and implementation guidance." },
    { q: "How often should we conduct NSE audits?", a: "NSE requires annual audits. We recommend quarterly assessments to maintain continuous compliance." },
    { q: "Can you help with SEBI compliance too?", a: "Absolutely! Our audits cover both NSE and SEBI requirements comprehensively." },
    { q: "What deliverables do we receive?", a: "Executive summary, technical report, compliance matrix, gap analysis, and prioritized action plan." }
  ];

  // TESTIMONIALS
  const testimonials = [
    { name: "Rajesh Kumar", role: "Compliance Head", company: "Leading Stock Broker", rating: 5, text: "Cyberaries helped us achieve 100% NSE compliance. Their team is professional and thorough." },
    { name: "Priya Sharma", role: "CTO", company: "Trading Firm", rating: 5, text: "Excellent audit process. Found critical gaps we missed. Highly recommended!" }
  ];

  return (
    <div className="nse-page">
      {/* HERO SECTION */}
      <section className="nse-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="nse-hero-overlay"></div>
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="nse-badge">Capital Markets Regulatory Audit</span>
            <h1 className="nse-hero-title">NSE Cyber Security <span className="nse-gradient">Audit Services</span></h1>
            <p className="nse-hero-desc">Comprehensive compliance assessment for NSE trading members ensuring adherence to SEBI and NSE cyber security requirements</p>
            <div className="nse-hero-actions">
              <button className="nse-btn-primary"><Calendar size={20} /> Schedule Audit</button>
              <button className="nse-btn-secondary"><FileText size={20} /> Download Brochure</button>
            </div>
            <div className="nse-stats-bar">
              {stats.map((stat, i) => (
                <div key={i} className="nse-stat">
                  <div className="nse-stat-num">{stat.number}</div>
                  <div className="nse-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="nse-trust">
        <div className="container">
          <div className="nse-trust-grid">
            {trustItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="nse-trust-item">
                  <div className="nse-trust-icon">{item.icon}</div>
                  <div className="nse-trust-text">{item.text}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES GRID */}
      <section className="nse-challenges">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="nse-section-title">Key Security Challenges</h2>
            <p className="nse-section-desc">Stock brokers face unique cyber security challenges in capital markets</p>
          </ScrollReveal>
          <div className="nse-challenge-grid">
            {challenges.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="nse-card nse-challenge-card">
                  <div className="nse-card-icon">{item.icon}</div>
                  <h3 className="nse-card-title">{item.title}</h3>
                  <p className="nse-card-desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TABS */}
      <section className="nse-tabs-section">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="nse-section-title">Comprehensive Audit Framework</h2>
            <p className="nse-section-desc">Click to explore different aspects of our audit approach</p>
          </ScrollReveal>

          <div className="nse-tabs">
            <div className="nse-tabs-header">
              <button className={`nse-tab-btn ${activeTab === 'framework' ? 'active' : ''}`} onClick={() => setActiveTab('framework')}>
                <Shield size={20} /> Framework
              </button>
              <button className={`nse-tab-btn ${activeTab === 'compliance' ? 'active' : ''}`} onClick={() => setActiveTab('compliance')}>
                <FileCheck size={20} /> Compliance
              </button>
              <button className={`nse-tab-btn ${activeTab === 'testing' ? 'active' : ''}`} onClick={() => setActiveTab('testing')}>
                <Target size={20} /> Testing
              </button>
              <button className={`nse-tab-btn ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>
                <FileText size={20} /> Reports
              </button>
            </div>

            <div className="nse-tab-content">
              <div className="nse-tab-grid">
                {tabsData[activeTab].map((item, i) => (
                  <div key={i} className="nse-card nse-tab-card">
                    <div className="nse-card-icon">{item.icon}</div>
                    <h4 className="nse-card-title">{item.title}</h4>
                    <p className="nse-card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL TIMELINE */}
      <section className="nse-timeline-section">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="nse-section-title">Audit Process Timeline</h2>
            <p className="nse-section-desc">Our structured 8-step approach to NSE compliance</p>
          </ScrollReveal>

          <div className="nse-timeline">
            {timeline.map((step, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100} triggerOnce={false}>
                <div className={`nse-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="nse-timeline-number">{step.num}</div>
                  <div className="nse-timeline-card">
                    <div className="nse-timeline-icon">{step.icon}</div>
                    <h4 className="nse-timeline-title">{step.title}</h4>
                    <p className="nse-timeline-desc">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="nse-comparison">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="nse-section-title">The Cyberaries Difference</h2>
          </ScrollReveal>

          <div className="nse-comparison-grid">
            <div className="nse-comparison-col">
              <h3>Traditional Firms</h3>
              <div className="nse-comparison-item"><X className="nse-icon-no" /> Generic checklists</div>
              <div className="nse-comparison-item"><X className="nse-icon-no" /> Limited testing</div>
              <div className="nse-comparison-item"><X className="nse-icon-no" /> Report only</div>
              <div className="nse-comparison-item"><X className="nse-icon-no" /> Annual audit</div>
            </div>
            <div className="nse-comparison-col nse-featured">
              <h3>Cyberaries Approach</h3>
              <div className="nse-comparison-item"><Check className="nse-icon-yes" /> NSE-specific framework</div>
              <div className="nse-comparison-item"><Check className="nse-icon-yes" /> Comprehensive VAPT</div>
              <div className="nse-comparison-item"><Check className="nse-icon-yes" /> Remediation support</div>
              <div className="nse-comparison-item"><Check className="nse-icon-yes" /> Continuous monitoring</div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ ACCORDION */}
      <section className="nse-faq">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="nse-section-title">Frequently Asked Questions</h2>
          </ScrollReveal>

          <div className="nse-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`nse-faq-item ${openFaq === i ? 'active' : ''}`}>
                <div className="nse-faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown className={`nse-faq-icon ${openFaq === i ? 'rotated' : ''}`} />
                </div>
                {openFaq === i && (
                  <div className="nse-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="nse-testimonials">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="nse-section-title">Client Success Stories</h2>
          </ScrollReveal>

          <div className="nse-testimonial-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="nse-testimonial-card">
                  <div className="nse-testimonial-stars">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={18} fill="#FFD700" stroke="#FFD700" />)}
                  </div>
                  <p className="nse-testimonial-text">"{t.text}"</p>
                  <div className="nse-testimonial-author">
                    <div className="nse-testimonial-avatar">{t.name[0]}</div>
                    <div>
                      <div className="nse-testimonial-name">{t.name}</div>
                      <div className="nse-testimonial-role">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="nse-cta">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="nse-cta-title">Ready to Achieve NSE Compliance?</h2>
            <p className="nse-cta-desc">Schedule a consultation with our experts today</p>
            <button className="nse-btn-cta"><Phone size={20} /> Contact Us Now</button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default NSECyberAudit;