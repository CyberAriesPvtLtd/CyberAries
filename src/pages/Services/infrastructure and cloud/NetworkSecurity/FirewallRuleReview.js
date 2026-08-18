import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/network-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/wireless-image.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Search,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  Network,
  Eye,
  Award,
  Users,
  Headphones,
  ArrowRight, Landmark } from 'lucide-react';
import './FirewallRuleReview.css';

/**
 * Firewall Rule Review Service Page
 * Optimizing Network Security Through Firewall Configuration Analysis
 */

const FirewallRuleReview = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Firewall Discovery",
      description: "Catalog all firewall devices, vendors, and versions across the network infrastructure.",
      icon: <Search size={30} />
    },
    {
      title: "Rule Baseline Collection",
      description: "Extract complete firewall rulesets, ACLs, and security policies for comprehensive analysis.",
      icon: <FileText size={30} />
    },
    {
      title: "Topology Mapping",
      description: "Document network segments, zones, and traffic flows to understand rule context.",
      icon: <Network size={30} />
    },
    {
      title: "Rule Analysis",
      description: "Identify redundant, shadowed, overly permissive, and conflicting firewall rules.",
      icon: <Eye size={30} />
    },
    {
      title: "Security Risk Assessment",
      description: "Evaluate rules for compliance gaps, unsafe protocols, and unnecessary exposure.",
      icon: <Shield size={30} />
    },
    {
      title: "Access Control Validation",
      description: "Verify that firewall rules align with least privilege and business requirements.",
      icon: <Lock size={30} />
    },
    {
      title: "Vulnerability Identification",
      description: "Detect misconfigurations, weak rules, and potential attack vectors in firewall policies.",
      icon: <AlertTriangle size={30} />
    },
    {
      title: "Optimization Recommendations",
      description: "Provide actionable guidance to streamline rules, improve performance, and enhance security.",
      icon: <FileCheck size={30} />
    },
    {
      title: "Post-Implementation Validation",
      description: "Verify optimized firewall rules maintain security while enabling required business traffic.",
      icon: <CheckCircle size={30} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Partnered with CERT In Empanelled",
      description: "Government recognized for conducting security audits and assessments.",
      icon: <Award size={30} strokeWidth={1.75} />
    },
    {
      title: "Multi Vendor Expertise",
      description: "Experience with Palo Alto, Fortinet, Cisco, Check Point, and more.",
      icon: <Users size={30} strokeWidth={1.75} />
    },
    {
      title: "Comprehensive Support",
      description: "From rule analysis to optimization implementation and validation.",
      icon: <Headphones size={30} strokeWidth={1.75} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Relies on automated firewall analysis tools without manual validation.',
      'Generic recommendations without understanding business context and traffic patterns.',
      'Limited analysis of rule shadowing, conflicts, and optimization opportunities.',
      'Superficial assessment of security posture and compliance alignment.',
      'Reports lack practical implementation guidance for rule optimization.',
      'No consideration for business impact or operational requirements.'
    ],
    cyberaries: [
      'Comprehensive manual review combined with advanced firewall analysis tools.',
      'Context-aware assessment aligned with business requirements and security policies.',
      'Deep analysis of rule efficiency, conflicts, shadowing, and performance impact.',
      'Thorough compliance mapping against CIS benchmarks and regulatory standards.',
      'Detailed, vendor-specific remediation with step-by-step implementation plans.',
      'Business aware recommendations balancing security, performance, and operations.'
    ]
  };

  return (
    <div className="firewall-review-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="hero-overlay" />
        <div className="hero-grid-pattern" />
        {/* Floating particles */}
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="firewall-review-hero-badge">
                  <Landmark size={14} className="firewall-review-badge-icon" />
                  <span className="firewall-review-badge-text">
                    INFRASTRUCTURE & CLOUD <span className="firewall-review-badge-divider">/</span> NETWORK SECURITY
                  </span>
                </div>
            <h1 className="hero-title">
              <span className="text-gradient">
                FIREWALL RULE REVIEW <br />
                &amp; POLICY OPTIMIZATION
              </span>
            </h1>
            <p className="hero-description">
              <strong>Firewall Rule Review</strong> optimizes your network security by identifying
              <strong> redundant, conflicting, and overly permissive firewall rules</strong> that create security gaps
              and performance issues. Our comprehensive analysis ensures your firewall policies align with security
              best practices and business requirements.
            </p>
            <p className="hero-description">
              We evaluate <strong>rule efficiency, access controls, compliance adherence, and potential
              vulnerabilities</strong> across multi vendor firewall environments, delivering actionable recommendations
              to strengthen security posture while maintaining operational efficiency.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button" onClick={() => navigate('/contact')}>Get Started &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="overview-content">
                <p className="overview-text">
                  At <strong>Cyberaries</strong>, we conduct thorough <strong>firewall rule assessments</strong> to
                  identify and remediate security gaps, optimize performance, and ensure compliance across your
                  network infrastructure. Our approach combines automated analysis with expert manual validation
                  for accurate, prioritized results.
                </p>
                <p className="overview-text">
                  We help organizations achieve <strong>secure, efficient, and well managed firewall environments</strong>
                  that protect against evolving threats while supporting business operations. <strong>Cyberaries</strong> delivers
                  comprehensive reporting, vendor specific guidance, and ongoing advisory support for firewall optimization.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Firewall Rule Review"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Modern Horizontal Timeline */}
      <section className="fwrr-approach-section">
        <div className="grid-pattern" />
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="fwrr-section-header text-center">
              <p className="fwrr-eyebrow">Our Approach</p>
              <h2 className="fwrr-approach-title">A Security First Firewall Audit Methodology</h2>
              <p className="fwrr-approach-subtitle">
                Comprehensive firewall rule analysis methodology built on industry standards and best practices.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="fwrr-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="fwrr-method-card" key={index}>
                  <div className="fwrr-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="fwrr-method-connector" />}
                  <div className="fwrr-method-icon">{step.icon}</div>
                  <h3 className="fwrr-method-title">{step.title}</h3>
                  <p className="fwrr-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–9 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="fwrr-method-row">
              {approachSteps.slice(5, 9).map((step, index) => (
                <div className="fwrr-method-card" key={index + 5}>
                  <div className="fwrr-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 3 && <span className="fwrr-method-connector" />}
                  <div className="fwrr-method-icon">{step.icon}</div>
                  <h3 className="fwrr-method-title">{step.title}</h3>
                  <p className="fwrr-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="why-eyebrow">Why CyberAries</p>
              <h2 className="section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="why-choose-card">
                  <div className="why-choose-card-header">
                    <div className="why-choose-icon-box">{item.icon}</div>
                    <h3 className="why-choose-title">{item.title}</h3>
                  </div>
                  <p className="why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="cyberaries-difference">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span>{' '}
              DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional Firewall Reviews</h3>
                <ul className="comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="comparison-column cyberaries-col">
                <h3 className="comparison-heading cyberaries-heading">
                  Cyberaries Firewall Rule Review
                </h3>
                <ul className="comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet bullet-check">
                        <CheckCircle size={18} className="check-icon" />
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

      {/* CTA Section */}
      <section className="fwrr-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="fwrr-cta-grid-pattern" />
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="fwrr-cta-content">
              <h2 className="fwrr-cta-title">
                <span className="fwrr-cta-text-gradient">Ready to Optimize Your Firewall Security?</span>
              </h2>
              <p className="fwrr-cta-description">
                Enhance protection, improve performance, and ensure compliance.
              </p>
              <button
                className="fwrr-btn fwrr-btn-primary fwrr-btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Contact Us Today
                <ArrowRight size={18} className="fwrr-btn-arrow" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FirewallRuleReview;
