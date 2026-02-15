import React, { useEffect, useState } from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
// eslint-disable-next-line no-unused-vars
import {
  Shield, Lock, FileText, CheckCircle, Settings, BarChart3, Users, Globe, Database, Bell, Eye, Award, Handshake, RefreshCw, FileCheck, UserCheck, Network, Server, TrendingUp, Activity, Clipboard, Search, Target, Zap, Clock, ChevronDown, ChevronRight, Star, Phone, Mail, Calendar, DollarSign, Check, X, ArrowRight
} from 'lucide-react';
import './SEBICyberAudit.css';

const SEBICyberAudit = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // STATE FOR INTERACTIVE COMPONENTS
  const [activeTab, setActiveTab] = useState('framework');
  const [openFaq, setOpenFaq] = useState(null);

  // HERO STATS DATA
  const stats = [
    { number: "500+", label: "Audits Completed" },
    { number: "98%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
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
    { icon: <FileText />, title: "Regulatory Compliance", desc: "Meeting SEBI & SEBI cyber security requirements" },
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
      { icon: <FileCheck />, title: "SEBI Circulars", desc: "Adherence to exchange requirements" },
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

  // PRICING PACKAGES
  const packages = [
    {
      name: "Basic",
      price: "₹2,50,000",
      period: "One-time",
      popular: false,
      features: ["Gap Assessment", "Policy Review", "Basic Testing", "Compliance Report", "Email Support"]
    },
    {
      name: "Professional",
      price: "₹5,00,000",
      period: "One-time",
      popular: true,
      features: ["Complete Audit", "VAPT Testing", "Remediation Support", "Detailed Documentation", "Priority Support", "Quarterly Review"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Annual Contract",
      popular: false,
      features: ["Full Audit Suite", "Ongoing Monitoring", "24/7 Support", "Dedicated Consultant", "Quarterly Audits", "Incident Response"]
    }
  ];

  // FAQ DATA
  const faqs = [
    { q: "How long does a SEBI audit take?", a: "Typically 2-3 weeks depending on organization size and complexity. We work with your schedule to minimize disruption." },
    { q: "What's included in the audit cost?", a: "Complete technical assessment, documentation review, penetration testing, gap analysis, detailed reports, and remediation guidance." },
    { q: "Do you provide remediation support?", a: "Yes! Our Professional and Enterprise packages include hands-on remediation support and implementation guidance." },
    { q: "How often should we conduct SEBI audits?", a: "SEBI requires annual audits. We recommend quarterly assessments to maintain continuous compliance." },
    { q: "Can you help with SEBI compliance too?", a: "Absolutely! Our audits cover both SEBI and SEBI requirements comprehensively." },
    { q: "What deliverables do we receive?", a: "Executive summary, technical report, compliance matrix, gap analysis, and prioritized action plan." }
  ];

  // TESTIMONIALS
  const testimonials = [
    { name: "Rajesh Kumar", role: "Compliance Head", company: "Leading Stock Broker", rating: 5, text: "Cyberaries helped us achieve 100% SEBI compliance. Their team is professional and thorough." },
    { name: "Priya Sharma", role: "CTO", company: "Trading Firm", rating: 5, text: "Excellent audit process. Found critical gaps we missed. Highly recommended!" }
  ];

  return (
    <div className="sebi-page">
      {/* HERO SECTION */}
      <section className="sebi-hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="sebi-hero-overlay"></div>
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <span className="sebi-badge">Capital Markets Regulatory Audit</span>
            <h1 className="sebi-hero-title">SEBI Cyber Security <span className="sebi-gradient">Audit Services</span></h1>
            <p className="sebi-hero-desc">Comprehensive compliance assessment for SEBI trading members ensuring adherence to SEBI and SEBI cyber security requirements</p>
            <div className="sebi-hero-actions">
              <button className="sebi-btn-primary"><Calendar size={20} /> Schedule Audit</button>
              <button className="sebi-btn-secondary"><FileText size={20} /> Download Brochure</button>
            </div>
            <div className="sebi-stats-bar">
              {stats.map((stat, i) => (
                <div key={i} className="sebi-stat">
                  <div className="sebi-stat-num">{stat.number}</div>
                  <div className="sebi-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="sebi-trust">
        <div className="container">
          <div className="sebi-trust-grid">
            {trustItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="sebi-trust-item">
                  <div className="sebi-trust-icon">{item.icon}</div>
                  <div className="sebi-trust-text">{item.text}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES GRID */}
      <section className="sebi-challenges">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-section-title">Key Security Challenges</h2>
            <p className="sebi-section-desc">Stock brokers face unique cyber security challenges in capital markets</p>
          </ScrollReveal>
          <div className="sebi-challenge-grid">
            {challenges.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="sebi-card sebi-challenge-card">
                  <div className="sebi-card-icon">{item.icon}</div>
                  <h3 className="sebi-card-title">{item.title}</h3>
                  <p className="sebi-card-desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TABS */}
      <section className="sebi-tabs-section">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-section-title">Comprehensive Audit Framework</h2>
            <p className="sebi-section-desc">Click to explore different aspects of our audit approach</p>
          </ScrollReveal>

          <div className="sebi-tabs">
            <div className="sebi-tabs-header">
              <button className={`sebi-tab-btn ${activeTab === 'framework' ? 'active' : ''}`} onClick={() => setActiveTab('framework')}>
                <Shield size={20} /> Framework
              </button>
              <button className={`sebi-tab-btn ${activeTab === 'compliance' ? 'active' : ''}`} onClick={() => setActiveTab('compliance')}>
                <FileCheck size={20} /> Compliance
              </button>
              <button className={`sebi-tab-btn ${activeTab === 'testing' ? 'active' : ''}`} onClick={() => setActiveTab('testing')}>
                <Target size={20} /> Testing
              </button>
              <button className={`sebi-tab-btn ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>
                <FileText size={20} /> Reports
              </button>
            </div>

            <div className="sebi-tab-content">
              <div className="sebi-tab-grid">
                {tabsData[activeTab].map((item, i) => (
                  <div key={i} className="sebi-card sebi-tab-card">
                    <div className="sebi-card-icon">{item.icon}</div>
                    <h4 className="sebi-card-title">{item.title}</h4>
                    <p className="sebi-card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL TIMELINE */}
      <section className="sebi-timeline-section">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-section-title">Audit Process Timeline</h2>
            <p className="sebi-section-desc">Our structured 8-step approach to SEBI compliance</p>
          </ScrollReveal>

          <div className="sebi-timeline">
            {timeline.map((step, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100} triggerOnce={false}>
                <div className={`sebi-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="sebi-timeline-number">{step.num}</div>
                  <div className="sebi-timeline-card">
                    <div className="sebi-timeline-icon">{step.icon}</div>
                    <h4 className="sebi-timeline-title">{step.title}</h4>
                    <p className="sebi-timeline-desc">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="sebi-comparison">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-section-title">The Cyberaries Difference</h2>
          </ScrollReveal>

          <div className="sebi-comparison-grid">
            <div className="sebi-comparison-col">
              <h3>Traditional Firms</h3>
              <div className="sebi-comparison-item"><X className="sebi-icon-no" /> Generic checklists</div>
              <div className="sebi-comparison-item"><X className="sebi-icon-no" /> Limited testing</div>
              <div className="sebi-comparison-item"><X className="sebi-icon-no" /> Report only</div>
              <div className="sebi-comparison-item"><X className="sebi-icon-no" /> Annual audit</div>
            </div>
            <div className="sebi-comparison-col sebi-featured">
              <h3>Cyberaries Approach</h3>
              <div className="sebi-comparison-item"><Check className="sebi-icon-yes" /> SEBI-specific framework</div>
              <div className="sebi-comparison-item"><Check className="sebi-icon-yes" /> Comprehensive VAPT</div>
              <div className="sebi-comparison-item"><Check className="sebi-icon-yes" /> Remediation support</div>
              <div className="sebi-comparison-item"><Check className="sebi-icon-yes" /> Continuous monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="sebi-pricing">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-section-title">Flexible Pricing Plans</h2>
            <p className="sebi-section-desc">Choose the package that fits your needs</p>
          </ScrollReveal>

          <div className="sebi-pricing-grid">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className={`sebi-pricing-card ${pkg.popular ? 'popular' : ''}`}>
                  {pkg.popular && <div className="sebi-pricing-badge">Most Popular</div>}
                  <h3 className="sebi-pricing-name">{pkg.name}</h3>
                  <div className="sebi-pricing-price">{pkg.price}</div>
                  <div className="sebi-pricing-period">{pkg.period}</div>
                  <ul className="sebi-pricing-features">
                    {pkg.features.map((f, j) => (
                      <li key={j}><Check size={18} /> {f}</li>
                    ))}
                  </ul>
                  <button className="sebi-btn-pricing">Get Started <ArrowRight size={18} /></button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="sebi-faq">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-section-title">Frequently Asked Questions</h2>
          </ScrollReveal>

          <div className="sebi-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`sebi-faq-item ${openFaq === i ? 'active' : ''}`}>
                <div className="sebi-faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown className={`sebi-faq-icon ${openFaq === i ? 'rotated' : ''}`} />
                </div>
                {openFaq === i && (
                  <div className="sebi-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sebi-testimonials">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-section-title">Client Success Stories</h2>
          </ScrollReveal>

          <div className="sebi-testimonial-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} triggerOnce={false}>
                <div className="sebi-testimonial-card">
                  <div className="sebi-testimonial-stars">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={18} fill="#FFD700" stroke="#FFD700" />)}
                  </div>
                  <p className="sebi-testimonial-text">"{t.text}"</p>
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
      </section>

      {/* FINAL CTA */}
      <section className="sebi-cta">
        <div className="container">
          <ScrollReveal direction="up" triggerOnce={false}>
            <h2 className="sebi-cta-title">Ready to Achieve SEBI Compliance?</h2>
            <p className="sebi-cta-desc">Schedule a consultation with our experts today</p>
            <button className="sebi-btn-cta"><Phone size={20} /> Contact Us Now</button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SEBICyberAudit;