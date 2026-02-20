import React, { useEffect } from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
  Shield,
  Lock,
  FileText,
  AlertTriangle,
  CheckCircle,
  // eslint-disable-next-line no-unused-vars
  Settings,
  BarChart3,
  // eslint-disable-next-line no-unused-vars
  Users,
  Globe,
  Database,
  Bell,
  Eye,
  Award,
  Handshake,
  RefreshCw,
  FileCheck,
  UserCheck,
  Network,
  Server,
  CreditCard,
  Smartphone,
  Zap,
  Key,
  ShieldCheck,
  Activity,
  FileSearch,
  GitBranch
} from 'lucide-react';
import './RBIPaymentSystems.css';

/**
 * RBI Payment Systems Audit Service Page
 * Comprehensive Payment Systems Security & Compliance Audits
 */

const RBIPaymentSystems = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Key Challenges Data
  const challengesData = [
    {
      title: "Complex Payment Infrastructure",
      description: "Modern payment systems integrate multiple channels - UPI, NEFT, RTGS, cards, wallets - each with unique security requirements.",
      icon: <Network size={40} />
    },
    {
      title: "Real-Time Transaction Security",
      description: "Ensuring security without impacting transaction speed and customer experience in instant payment systems.",
      icon: <Zap size={40} />
    },
    {
      title: "Fraud Detection & Prevention",
      description: "Identifying and preventing payment fraud, card-not-present transactions, and account takeover attempts.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "API Security",
      description: "Securing payment APIs, webhooks, and third-party integrations while maintaining interoperability.",
      icon: <GitBranch size={40} />
    },
    {
      title: "Compliance with Multiple Standards",
      description: "Meeting RBI guidelines, PCI-DSS, PA-DSS, NPCI requirements, and international payment security standards.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Data Privacy & Tokenization",
      description: "Implementing card tokenization, secure payment data storage, and compliance with data protection regulations.",
      icon: <Database size={40} />
    }
  ];

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Payment System Scoping",
      description: "Identify all payment channels, systems, interfaces, and third-party connections in scope for audit.",
      icon: <FileSearch size={40} />
    },
    {
      title: "Architecture Review",
      description: "Analyze payment infrastructure, data flows, integration points, and security architecture.",
      icon: <Network size={40} />
    },
    {
      title: "Security Controls Assessment",
      description: "Evaluate authentication, authorization, encryption, tokenization, and access control mechanisms.",
      icon: <Lock size={40} />
    },
    {
      title: "Transaction Security Testing",
      description: "Test payment processing security, session management, and transaction integrity controls.",
      icon: <CreditCard size={40} />
    },
    {
      title: "API Security Audit",
      description: "Assess API authentication, rate limiting, input validation, and secure communication protocols.",
      icon: <GitBranch size={40} />
    },
    {
      title: "Fraud Control Evaluation",
      description: "Review fraud detection mechanisms, transaction monitoring, and anomaly detection capabilities.",
      icon: <Eye size={40} />
    },
    {
      title: "PCI-DSS Compliance",
      description: "Verify compliance with Payment Card Industry Data Security Standard requirements.",
      icon: <ShieldCheck size={40} />
    },
    {
      title: "Penetration Testing",
      description: "Conduct ethical hacking of payment applications, mobile apps, and payment gateways.",
      icon: <Shield size={40} />
    },
    {
      title: "Third-Party Integration Security",
      description: "Assess security of payment aggregators, gateways, and service provider connections.",
      icon: <UserCheck size={40} />
    },
    {
      title: "Incident Response Validation",
      description: "Test payment incident response procedures and crisis management capabilities.",
      icon: <Bell size={40} />
    },
    {
      title: "Compliance Documentation",
      description: "Prepare comprehensive audit reports with findings, risk ratings, and remediation roadmap.",
      icon: <FileText size={40} />
    },
    {
      title: "Remediation & Re-Audit",
      description: "Support remediation activities and conduct validation testing post-implementation.",
      icon: <RefreshCw size={40} />
    }
  ];

  // Payment System Components
  const paymentComponents = [
    {
      title: "Card Payment Systems",
      description: "Credit/debit card processing, ATM networks, POS terminals, and card tokenization systems.",
      icon: <CreditCard size={40} />
    },
    {
      title: "Digital Payment Platforms",
      description: "UPI, mobile wallets, digital payment apps, and QR code payment systems.",
      icon: <Smartphone size={40} />
    },
    {
      title: "Core Banking Interfaces",
      description: "NEFT, RTGS, IMPS integration with core banking and payment switching systems.",
      icon: <Server size={40} />
    },
    {
      title: "Payment Gateways",
      description: "E-commerce payment processing, payment aggregators, and merchant onboarding systems.",
      icon: <Network size={40} />
    },
    {
      title: "Mobile Banking",
      description: "Mobile apps, SMS banking, USSD services, and m-commerce platforms.",
      icon: <Smartphone size={40} />
    },
    {
      title: "API & Integration Layer",
      description: "Payment APIs, webhooks, third-party integrations, and open banking interfaces.",
      icon: <GitBranch size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "Payment Systems Expertise",
      description: "Specialized knowledge of RBI payment guidelines, NPCI standards, and PCI-DSS compliance.",
      icon: <Award size={50} />
    },
    {
      title: "Financial Sector Experience",
      description: "Extensive experience auditing payment systems across banks, NBFCs, and fintech companies.",
      icon: <Globe size={50} />
    },
    {
      title: "Comprehensive Testing",
      description: "Combined compliance audits with penetration testing for thorough security validation.",
      icon: <Handshake size={50} />
    }
  ];

  // Audit Coverage Areas
  const auditAreas = [
    "Payment channel security (UPI, cards, wallets, NEFT, RTGS)",
    "Card data security and PCI-DSS compliance",
    "Tokenization and encryption implementation",
    "Authentication and authorization controls",
    "API security and integration testing",
    "Transaction monitoring and fraud detection",
    "Mobile payment application security",
    "Payment gateway configuration and hardening",
    "Third-party service provider security",
    "Incident response and crisis management",
    "Business continuity for payment services",
    "Regulatory compliance and reporting",
    "Customer data privacy and protection",
    "Security logging and monitoring",
    "Penetration testing of payment systems",
    "Source code review of payment applications"
  ];

  return (
    <div className="rbi-payment-systems-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Payment Systems Security</p>
            <h1 className="hero-title">
              RBI Payment Systems <span className="text-gradient">AUDIT</span>
            </h1>
            <p className="hero-description">
              Payment systems are the backbone of financial services, handling billions of transactions daily across cards, UPI, NEFT, RTGS, and digital wallets. <strong>RBI mandates rigorous security audits</strong> to protect customer data, prevent fraud, and ensure business continuity. <strong>Our comprehensive payment system audits</strong> cover security architecture, fraud controls, PCI-DSS compliance, and penetration testing to safeguard your payment infrastructure.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large">REQUEST PAYMENT SYSTEMS AUDIT</button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="key-challenges">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Payment Systems Security Challenges</h2>
              <p className="section-description">
                Modern payment ecosystems face complex security requirements across multiple channels and technologies
              </p>
            </div>
          </ScrollReveal>

          <div className="challenges-grid">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="challenge-card">
                  <div className="challenge-icon">
                    {challenge.icon}
                  </div>
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">{challenge.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Payment System Components Section */}
      <section className="framework-components">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Payment System Components Covered</h2>
              <p className="section-description">
                Comprehensive audit coverage across all payment channels and infrastructure
              </p>
            </div>
          </ScrollReveal>

          <div className="components-grid">
            {paymentComponents.map((component, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="component-card">
                  <div className="component-icon">
                    {component.icon}
                  </div>
                  <h3 className="component-title">{component.title}</h3>
                  <p className="component-description">{component.description}</p>
                  <div className="component-indicator"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="solutions-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Audit Methodology</h2>
              <p className="section-description">
                Systematic approach combining compliance assessment with deep technical security testing
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="solution-card">
                  <div className="solution-icon">
                    {step.icon}
                  </div>
                  <h3 className="solution-title">{step.title}</h3>
                  <p className="solution-description">{step.description}</p>
                  <div className="solution-indicator"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Areas Checklist */}
      <section className="baseline-controls">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Comprehensive Audit Coverage</h2>
              <p className="section-description">
                Complete assessment of payment system security controls and compliance requirements
              </p>
            </div>
          </ScrollReveal>

          <div className="controls-checklist">
            <div className="controls-grid">
              {auditAreas.map((area, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 50} triggerOnce={false}>
                  <div className="control-item">
                    <div className="control-check">
                      <CheckCircle size={24} />
                    </div>
                    <span className="control-text">{area}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Why Choose Cyberaries for Payment Audits?</h2>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150} triggerOnce={false}>
                <div className="why-choose-card">
                  <div className="why-choose-icon">
                    {item.icon}
                  </div>
                  <h3 className="why-choose-title">{item.title}</h3>
                  <p className="why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cyberaries Difference Section */}
      <section className="cyberaries-difference">
        <div className="container">
          <ScrollReveal animation="fade-up" triggerOnce={false}>
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            {/* Traditional Payment Audits */}
            <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional Payment Audits</h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Compliance-focused with checkbox assessments
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Limited technical testing of payment systems
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Generic findings not specific to payment flows
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Misses business logic flaws in payment processing
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    No fraud scenario testing or exploitation
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Reports deliver findings without remediation support
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Cyberaries Payment Security */}
            <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">
                  CYBERARIES Payment Security
                </h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Deep technical assessment with security testing
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Comprehensive penetration testing of payment flows
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Payment-specific vulnerabilities and attack scenarios
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Business logic testing and fraud scenario validation
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Real-world exploit attempts in controlled environment
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Hands-on remediation support and re-validation testing
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliverables-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Audit Deliverables</h2>
            </div>
          </ScrollReveal>

          <div className="deliverables-grid">
            <ScrollReveal direction="up" delay={100}>
              <div className="deliverable-card">
                <FileText size={36} />
                <h4>Executive Summary Report</h4>
                <ul>
                  <li>Overall risk assessment and compliance status</li>
                  <li>Critical findings and recommendations</li>
                  <li>Compliance gaps and remediation priorities</li>
                  <li>Board-ready executive presentation</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="deliverable-card">
                <Activity size={36} />
                <h4>Technical Assessment Report</h4>
                <ul>
                  <li>Detailed vulnerability findings with evidence</li>
                  <li>Penetration testing results and exploits</li>
                  <li>Security configuration weaknesses</li>
                  <li>Technical remediation guidance</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="deliverable-card">
                <ShieldCheck size={36} />
                <h4>Compliance Assessment</h4>
                <ul>
                  <li>RBI payment guidelines compliance matrix</li>
                  <li>PCI-DSS compliance status report</li>
                  <li>NPCI security requirements assessment</li>
                  <li>Evidence repository for regulators</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="deliverable-card">
                <BarChart3 size={36} />
                <h4>Remediation Roadmap</h4>
                <ul>
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

      {/* Standards & Compliance */}
      <section className="standards-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Standards & Frameworks Covered</h2>
              <p className="section-description">
                Our audits ensure compliance with multiple payment security standards
              </p>
            </div>
          </ScrollReveal>

          <div className="standards-grid">
            <ScrollReveal direction="up" delay={100}>
              <div className="standard-card">
                <div className="standard-icon">
                  <Shield size={48} />
                </div>
                <h4>RBI Guidelines</h4>
                <p>Reserve Bank of India payment system regulations and security guidelines</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="standard-card">
                <div className="standard-icon">
                  <CreditCard size={48} />
                </div>
                <h4>PCI-DSS</h4>
                <p>Payment Card Industry Data Security Standard v4.0 compliance</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="standard-card">
                <div className="standard-icon">
                  <Network size={48} />
                </div>
                <h4>NPCI Standards</h4>
                <p>National Payments Corporation of India security requirements</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="standard-card">
                <div className="standard-icon">
                  <Key size={48} />
                </div>
                <h4>ISO 20022</h4>
                <p>International payment messaging and security standards</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="cta-content">
              <h2 className="cta-title">Secure Your Payment Infrastructure</h2>
              <p className="cta-description">
                Partner with payment security experts for comprehensive RBI-compliant audits
              </p>
              <button className="btn btn-primary btn-large">Request Payment Systems Audit</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default RBIPaymentSystems;