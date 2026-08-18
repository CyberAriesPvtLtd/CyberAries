import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/cloud-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/wireless-image.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Search,
  Settings,
  Shield,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  RefreshCw,
  Award,
  Cloud,
  Key,
  Database,
  ArrowRight, Landmark } from 'lucide-react';
import './CloudConfigReview.css';

/**
 * Cloud Configuration Review Service Page
 * Ensuring Secure Cloud Infrastructure Configuration
 */

/* Decorative CTA icon: shield + lock with radial rings */
// eslint-disable-next-line no-unused-vars
const CtaIconGraphic = () => (
  <svg
    className="ccr-cta-icon-svg"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Secure cloud config shield illustration"
  >
    <defs>
      <radialGradient id="ccrCtaGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#ccrCtaGlow)" />
    <circle cx="100" cy="100" r="85" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.35" />
    <circle cx="100" cy="100" r="65" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.45" />
    <circle cx="100" cy="100" r="45" fill="none" stroke="#C1121F" strokeWidth="1.2" opacity="0.6" />
    <g transform="translate(100,100)">
      <path
        d="M0 -26 l22 8 v20 c0 15 -11 24 -22 29 c-11 -5 -22 -14 -22 -29 v-20z"
        fill="none"
        stroke="#ff5555"
        strokeWidth="2"
      />
      <rect x="-8" y="-2" width="16" height="13" rx="2" fill="none" stroke="#ff5555" strokeWidth="2" />
      <path d="M-5 -2 v-4 a5 5 0 0 1 10 0 v4" fill="none" stroke="#ff5555" strokeWidth="2" />
      <circle cx="0" cy="4" r="1.6" fill="#ff5555" />
    </g>
  </svg>
);

const CloudConfigReview = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Configuration Discovery",
      description: "Comprehensive inventory of cloud resources, services, and configurations across AWS, Azure, or GCP.",
      icon: <Search size={30} />
    },
    {
      title: "IAM Policy Analysis",
      description: "Deep review of identity and access management policies, roles, and permission boundaries.",
      icon: <Key size={30} />
    },
    {
      title: "Network Security Review",
      description: "Examination of security groups, network ACLs, VPC configurations, and firewall rules.",
      icon: <Shield size={30} />
    },
    {
      title: "Storage Security Assessment",
      description: "Evaluation of S3 buckets, blob storage, and databases for public access and encryption.",
      icon: <Database size={30} />
    },
    {
      title: "Compliance Verification",
      description: "Mapping configurations against CIS benchmarks, NIST, ISO 27001, and industry standards.",
      icon: <FileText size={30} />
    },
    {
      title: "Logging & Monitoring",
      description: "Assessment of CloudTrail, CloudWatch, or equivalent logging for security visibility.",
      icon: <Settings size={30} />
    },
    {
      title: "Vulnerability Detection",
      description: "Identification of misconfigurations, exposed resources, and compliance gaps.",
      icon: <AlertTriangle size={30} />
    },
    {
      title: "Risk Prioritization",
      description: "Classification of findings by severity and business impact for remediation planning.",
      icon: <FileCheck size={30} />
    },
    {
      title: "Remediation Guidance",
      description: "Detailed, actionable recommendations with step-by-step implementation plans.",
      icon: <RefreshCw size={30} />
    },
    {
      title: "Validation & Verification",
      description: "Post-remediation validation ensuring security controls are properly implemented.",
      icon: <CheckCircle size={30} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Multi Cloud Expertise",
      description: "Deep experience across AWS, Azure, Google Cloud, and hybrid cloud environments.",
      icon: <Cloud size={30} strokeWidth={1.75} />
    },
    {
      title: "Partnered with CERT In Empanelled",
      description: "Government recognized security audit firm with proven track record.",
      icon: <Award size={30} strokeWidth={1.75} />
    },
    {
      title: "Comprehensive Support",
      description: "End-to-end assistance from discovery through remediation validation.",
      icon: <Settings size={30} strokeWidth={1.75} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Relies solely on automated CSPM tools without manual verification.',
      'Generic scanning without business context or architecture understanding.',
      'High false positive rates and missed critical misconfigurations.',
      'Limited IAM policy analysis and permission boundary review.',
      'Superficial compliance checks without actionable remediation.',
      'Reports lack infrastructure specific context and prioritization.'
    ],
    cyberaries: [
      'Comprehensive manual review combined with advanced automated scanning.',
      'Context aware analysis aligned with your business and architecture needs.',
      'Manual validation eliminates false positives and confirms real risks.',
      'Deep IAM analysis including roles, policies, and privilege escalation paths.',
      'Thorough compliance mapping with step-by-step remediation guidance.',
      'Detailed, environment specific recommendations with best practices.'
    ]
  };

  return (
    <div className="ccr-page">
      {/* Hero Section */}
      <section className="ccr-hero-section">
        <div
          className="ccr-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="ccr-hero-overlay" />
        <div className="ccr-hero-grid-pattern" />
        {/* Floating particles */}
        <div className="ccr-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="ccr-hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="ccr-container">
          <div className="ccr-hero-content">
            <div className="ccr-hero-badge">
                  <Landmark size={14} className="ccr-badge-icon" />
                  <span className="ccr-badge-text">
                    INFRASTRUCTURE & CLOUD <span className="ccr-badge-divider">/</span> CLOUD SECURITY
                  </span>
                </div>
            <h1 className="ccr-hero-title">
              <span className="ccr-text-gradient">
                CLOUD CONFIGURATION REVIEW <br />
                &amp; SECURE INFRASTRUCTURE
              </span>
            </h1>
            <p className="ccr-hero-description">
              <strong>Cloud Configuration Review</strong> ensures your cloud infrastructure is securely configured by identifying{' '}
              <strong>misconfigurations, over permissive access controls, and compliance gaps</strong> across AWS, Azure, and
              Google Cloud Platform, protecting your organization from cloud security incidents.
            </p>
            <p className="ccr-hero-description">
              Our comprehensive review covers <strong>IAM policies, security groups, storage configurations, network settings,
                and logging mechanisms</strong>, providing detailed remediation guidance to strengthen cloud security posture.
            </p>
            <div className="ccr-hero-actions">
              <button
                className="ccr-btn ccr-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Plan Your Infrastructure
                <ArrowRight size={16} className="ccr-btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="ccr-service-overview">
        <div className="ccr-container">
          <div className="ccr-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="ccr-overview-content">
                <p className="ccr-overview-text">
                  At <strong>Cyberaries</strong>, we conduct thorough <strong>cloud configuration security assessments</strong>{' '}
                  to identify and remediate misconfigurations, over-permissive access, exposed resources, and compliance gaps
                  across your cloud environment. Our approach combines automated scanning with expert manual analysis.
                </p>
                <p className="ccr-overview-text">
                  We help organizations achieve <strong>secure, compliant, and well architected cloud infrastructure</strong>{' '}
                  aligned with industry best practices. <strong>Cyberaries</strong> delivers comprehensive reporting,
                  practical remediation guidance, and ongoing advisory support.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="ccr-overview-visual">
                <img
                  src={overviewImage}
                  alt="Cloud Configuration Review"
                  className="ccr-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Modern Horizontal Timeline */}
      <section className="ccr-approach-section">
        <div className="ccr-grid-pattern" />
        <div className="ccr-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="ccr-section-header ccr-text-center">
              <p className="ccr-eyebrow">Our Approach</p>
              <h2 className="ccr-approach-title">A Security First Architecture Methodology</h2>
              <p className="ccr-approach-subtitle">
                A structured, security first approach to designing resilient, scalable,
                and future ready network architectures.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="ccr-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="ccr-method-card" key={index}>
                  <div className="ccr-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="ccr-method-connector" />}
                  <div className="ccr-method-icon">{step.icon}</div>
                  <h3 className="ccr-method-title">{step.title}</h3>
                  <p className="ccr-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–10 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="ccr-method-row">
              {approachSteps.slice(5, 10).map((step, index) => (
                <div className="ccr-method-card" key={index + 5}>
                  <div className="ccr-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 4 && <span className="ccr-method-connector" />}
                  <div className="ccr-method-icon">{step.icon}</div>
                  <h3 className="ccr-method-title">{step.title}</h3>
                  <p className="ccr-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="ccr-method-footer">
              <div className="ccr-method-footer-icon">
                <Shield size={22} />
              </div>
              <p className="ccr-method-footer-text">
                Our configuration review ensures complete compliance alignment with AWS Well Architected Framework, Azure Security Benchmark, Google Cloud Security Foundations, and CIS Benchmarks.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="ccr-why-choose">
        <div className="ccr-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="ccr-section-header ccr-text-center">
              <p className="ccr-why-eyebrow">Why CyberAries</p>
              <h2 className="ccr-section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="ccr-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="ccr-why-choose-card">
                  <div className="ccr-why-choose-card-header">
                    <div className="ccr-why-choose-icon-box">{item.icon}</div>
                    <h3 className="ccr-why-choose-title">{item.title}</h3>
                  </div>
                  <p className="ccr-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="ccr-cyberaries-difference">
        <div className="ccr-container">
          <ScrollReveal animation="fade-up">
            <h2 className="ccr-difference-title">
              THE <span className="ccr-highlight-red">CYBERARIES</span>{' '}
              DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="ccr-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="ccr-comparison-column ccr-traditional">
                <h3 className="ccr-comparison-heading">Traditional Cloud Reviews</h3>
                <ul className="ccr-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="ccr-comparison-item" key={idx}>
                      <span className="ccr-bullet ccr-bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="ccr-comparison-column ccr-cyberaries-col">
                <h3 className="ccr-comparison-heading ccr-cyberaries-heading">
                  Cyberaries Cloud Configuration Review
                </h3>
                <ul className="ccr-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="ccr-comparison-item" key={idx}>
                      <span className="ccr-bullet ccr-bullet-check">
                        <CheckCircle size={18} className="ccr-check-icon" />
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
      <section className="ccr-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="ccr-cta-grid-pattern" />
        <div className="ccr-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="ccr-cta-grid">
              <div className="ccr-cta-content">
                <h2 className="ccr-cta-title">
                  <span className="ccr-cta-text-gradient">Ready to Secure Your Cloud Infrastructure?</span>
                </h2>
                <p className="ccr-cta-description">
                  Identify misconfigurations, strengthen security, and achieve compliance.
                </p>
                <button
                  className="ccr-btn ccr-btn-primary ccr-btn-large"
                  type="button"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us Today
                  <ArrowRight size={18} className="ccr-btn-arrow" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CloudConfigReview;
