import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/cloud-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/wireless-image.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Search,
  Target,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  RefreshCw,
  Award,
  Cloud,
  Key,
  Server,
  ArrowRight, Landmark } from 'lucide-react';
import './CloudPenetrationTesting.css';

/**
 * Cloud Penetration Testing Service Page
 * Identifying Vulnerabilities in Cloud Infrastructure
 */

const CloudPenetrationTesting = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition & Planning",
      description: "Define cloud assets, services, and boundaries across AWS, Azure, or GCP environments for testing.",
      icon: <FileText size={30} />
    },
    {
      title: "Reconnaissance & Discovery",
      description: "Identify exposed cloud resources, APIs, storage buckets, and publicly accessible services.",
      icon: <Search size={30} />
    },
    {
      title: "Threat Modeling",
      description: "Map potential attack vectors targeting cloud infrastructure, APIs, and misconfigurations.",
      icon: <Target size={30} />
    },
    {
      title: "IAM Testing",
      description: "Test identity and access management weaknesses, privilege escalation, and permission boundaries.",
      icon: <Key size={30} />
    },
    {
      title: "Network Penetration",
      description: "Assess security groups, network ACLs, VPC configurations, and network segmentation.",
      icon: <Server size={30} />
    },
    {
      title: "API Security Testing",
      description: "Evaluate cloud APIs for authentication bypasses, injection attacks, and authorization flaws.",
      icon: <Lock size={30} />
    },
    {
      title: "Storage Security Assessment",
      description: "Test S3 buckets, blob storage, and databases for data data exposure and encryption weaknesses.",
      icon: <Shield size={30} />
    },
    {
      title: "Exploitation & Impact",
      description: "Perform controlled exploitation to demonstrate real-world attack scenarios and business impact.",
      icon: <AlertTriangle size={30} />
    },
    {
      title: "Remediation Recommendations",
      description: "Provide detailed remediation guidance with prioritized, actionable security improvements.",
      icon: <FileCheck size={30} />
    },
    {
      title: "Re Testing & Validation",
      description: "Verify that identified vulnerabilities have been effectively remediated post-implementation.",
      icon: <CheckCircle size={30} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Cloud Native Expertise",
      description: "Specialized knowledge in AWS, Azure, GCP, and multi cloud security testing.",
      icon: <Cloud size={30} strokeWidth={1.75} />
    },
    {
      title: "Partnered with CERT In Empanelled",
      description: "Government recognized for conducting advanced security assessments.",
      icon: <Award size={30} strokeWidth={1.75} />
    },
    {
      title: "Safe Testing Methodology",
      description: "Non disruptive testing approach ensuring business continuity and production safety.",
      icon: <RefreshCw size={30} strokeWidth={1.75} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Basic vulnerability scanning without simulating real world attack scenarios.',
      'Generic testing without understanding cloud specific attack techniques.',
      'Limited IAM and privilege escalation testing coverage.',
      'Superficial API security testing without deep authorization analysis.',
      'Reports lack cloud-specific context and remediation guidance.',
      'No validation of security controls against actual exploitation attempts.'
    ],
    cyberaries: [
      'Comprehensive penetration testing simulating advanced persistent threat scenarios.',
      'Cloud native attack techniques targeting AWS, Azure, and GCP specific services.',
      'Deep IAM testing including role chaining, cross account access, and privilege paths.',
      'Thorough API security assessment with business logic and authorization testing.',
      'Detailed, cloud-specific remediation with architecture-aware recommendations.',
      'Real exploitation attempts demonstrating actual business impact and risk.'
    ]
  };

  return (
    <div className="cpt-page">
      {/* Hero Section */}
      <section className="cpt-hero-section">
        <div
          className="cpt-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="cpt-hero-overlay" />
        <div className="cpt-hero-grid-pattern" />
        {/* Floating particles */}
        <div className="cpt-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="cpt-hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="cpt-container">
          <div className="cpt-hero-content">
            <div className="cpt-hero-badge">
                  <Landmark size={14} className="cpt-badge-icon" />
                  <span className="cpt-badge-text">
                    INFRASTRUCTURE & CLOUD <span className="cpt-badge-divider">/</span> CLOUD SECURITY
                  </span>
                </div>
            <h1 className="cpt-hero-title">
              <span className="cpt-text-gradient">
                CLOUD PENETRATION TESTING <br />
                &amp; ATTACK SIMULATION
              </span>
            </h1>
            <p className="cpt-hero-description">
              <strong>Cloud Penetration Testing</strong> identifies exploitable vulnerabilities in your cloud infrastructure by simulating{' '}
              <strong>real world cyber attacks against AWS, Azure, and Google Cloud</strong> environments. Go beyond automated scanning
              to uncover critical security gaps that could lead to data breaches and service disruption.
            </p>
            <p className="cpt-hero-description">
              Our offensive security experts perform <strong>comprehensive testing of IAM policies, APIs, storage, network controls,
                and serverless functions</strong>, providing actionable remediation guidance to strengthen your cloud security posture.
            </p>
            <div className="cpt-hero-actions">
              <button
                className="cpt-btn cpt-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Plan Your Assessment
                <ArrowRight size={16} className="cpt-btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="cpt-service-overview">
        <div className="cpt-container">
          <div className="cpt-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="cpt-overview-content">
                <p className="cpt-overview-text">
                  At <strong>Cyberaries</strong>, we conduct <strong>advanced cloud penetration testing</strong>{' '}
                  to uncover security weaknesses through simulated attacks targeting your cloud infrastructure,
                  applications, and services. Our ethical hackers employ real-world tactics to identify vulnerabilities
                  before malicious actors can exploit them.
                </p>
                <p className="cpt-overview-text">
                  We help organizations build <strong>resilient, defense in depth cloud security</strong>{' '}
                  with comprehensive testing coverage and actionable remediation guidance. <strong>Cyberaries</strong> delivers
                  detailed reporting, proof of concept exploits, and ongoing advisory support for continuous security improvement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="cpt-overview-visual">
                <img
                  src={overviewImage}
                  alt="Cloud Penetration Testing"
                  className="cpt-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Horizontal Timeline */}
      <section className="cpt-approach-section">
        <div className="cpt-grid-pattern" />
        <div className="cpt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cpt-section-header cpt-text-center">
              <p className="cpt-eyebrow">Our Approach</p>
              <h2 className="cpt-approach-title">A Security First Architecture Methodology</h2>
              <p className="cpt-approach-subtitle">
                A structured, security first approach to designing resilient, scalable,
                and future ready network architectures.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="cpt-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="cpt-method-card" key={index}>
                  <div className="cpt-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="cpt-method-connector" />}
                  <div className="cpt-method-icon">{step.icon}</div>
                  <h3 className="cpt-method-title">{step.title}</h3>
                  <p className="cpt-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–10 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="cpt-method-row">
              {approachSteps.slice(5, 10).map((step, index) => (
                <div className="cpt-method-card" key={index + 5}>
                  <div className="cpt-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 4 && <span className="cpt-method-connector" />}
                  <div className="cpt-method-icon">{step.icon}</div>
                  <h3 className="cpt-method-title">{step.title}</h3>
                  <p className="cpt-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="cpt-method-footer">
              <div className="cpt-method-footer-icon">
                <Shield size={22} />
              </div>
              <p className="cpt-method-footer-text">
                Our penetration testing ensures deep validation of identity controls, perimeter security, and compliance benchmarks for cloud deployments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="cpt-why-choose">
        <div className="cpt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cpt-section-header cpt-text-center">
              <p className="cpt-why-eyebrow">Why CyberAries</p>
              <h2 className="cpt-section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="cpt-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="cpt-why-choose-card">
                  <div className="cpt-why-choose-card-header">
                    <div className="cpt-why-choose-icon-box">{item.icon}</div>
                    <h3 className="cpt-why-choose-title">{item.title}</h3>
                  </div>
                  <p className="cpt-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="cpt-cyberaries-difference">
        <div className="cpt-container">
          <ScrollReveal animation="fade-up">
            <h2 className="cpt-difference-title">
              THE <span className="cpt-highlight-red">CYBERARIES</span>{' '}
              DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="cpt-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="cpt-comparison-column cpt-traditional">
                <h3 className="cpt-comparison-heading">Traditional Cloud Testing</h3>
                <ul className="cpt-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="cpt-comparison-item" key={idx}>
                      <span className="cpt-bullet cpt-bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="cpt-comparison-column cpt-cyberaries-col">
                <h3 className="cpt-comparison-heading cpt-cyberaries-heading">
                  Cyberaries Cloud Penetration Testing
                </h3>
                <ul className="cpt-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="cpt-comparison-item" key={idx}>
                      <span className="cpt-bullet cpt-bullet-check">
                        <CheckCircle size={18} className="cpt-check-icon" />
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
      <section className="cpt-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="cpt-cta-grid-pattern" />
        <div className="cpt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cpt-cta-grid">
              <div className="cpt-cta-content">
                <h2 className="cpt-cta-title">
                  <span className="cpt-cta-text-gradient">Ready to Test Your Cloud Security?</span>
                </h2>
                <p className="cpt-cta-description">
                  Discover vulnerabilities before attackers do with comprehensive penetration testing.
                </p>
                <button
                  className="cpt-btn cpt-btn-primary cpt-btn-large"
                  type="button"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us Today
                  <ArrowRight size={18} className="cpt-btn-arrow" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CloudPenetrationTesting;
