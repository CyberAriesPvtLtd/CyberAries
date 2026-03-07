import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/wireless-image.jpg';

import {
  FileText,
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
  Database
} from 'lucide-react';
import './CloudConfigReview.css';

/**
 * Cloud Configuration Review Service Page
 * Ensuring Secure Cloud Infrastructure Configuration
 */

const CloudConfigReview = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Configuration Discovery",
      description: "Comprehensive inventory of cloud resources, services, and configurations across AWS, Azure, or GCP.",
      icon: <Search size={40} />
    },
    {
      title: "IAM Policy Analysis",
      description: "Deep review of identity and access management policies, roles, and permission boundaries.",
      icon: <Key size={40} />
    },
    {
      title: "Network Security Review",
      description: "Examination of security groups, network ACLs, VPC configurations, and firewall rules.",
      icon: <Shield size={40} />
    },
    {
      title: "Storage Security Assessment",
      description: "Evaluation of S3 buckets, blob storage, and databases for public access and encryption.",
      icon: <Database size={40} />
    },
    {
      title: "Compliance Verification",
      description: "Mapping configurations against CIS benchmarks, NIST, ISO 27001, and industry standards.",
      icon: <FileText size={40} />
    },
    {
      title: "Logging & Monitoring",
      description: "Assessment of CloudTrail, CloudWatch, or equivalent logging for security visibility.",
      icon: <Settings size={40} />
    },
    {
      title: "Vulnerability Detection",
      description: "Identification of misconfigurations, exposed resources, and compliance gaps.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Risk Prioritization",
      description: "Classification of findings by severity and business impact for remediation planning.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Remediation Guidance",
      description: "Detailed, actionable recommendations with step-by-step implementation plans.",
      icon: <RefreshCw size={40} />
    },
    {
      title: "Validation & Verification",
      description: "Post-remediation validation ensuring security controls are properly implemented.",
      icon: <CheckCircle size={40} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Multi-Cloud Expertise",
      description: "Deep experience across AWS, Azure, Google Cloud, and hybrid cloud environments.",
      icon: <Cloud size={48} strokeWidth={1.5} />
    },
    {
      title: "CERT-In Empanelled",
      description: "Government-recognized security audit firm with proven track record.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Comprehensive Support",
      description: "End-to-end assistance from discovery through remediation validation.",
      icon: <Settings size={48} strokeWidth={1.5} />
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
      'Reports lack infrastructure-specific context and prioritization.'
    ],
    cyberaries: [
      'Comprehensive manual review combined with advanced automated scanning.',
      'Context-aware analysis aligned with your business and architecture needs.',
      'Manual validation eliminates false positives and confirms real risks.',
      'Deep IAM analysis including roles, policies, and privilege escalation paths.',
      'Thorough compliance mapping with step-by-step remediation guidance.',
      'Detailed, environment-specific recommendations with best practices.'
    ]
  };

  return (
    <div className="cloud-config-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Cloud Security Services</p>
            <h1 className="hero-title">
              CLOUD CONFIGURATION REVIEW{' '}
              <span className="text-gradient">
                SECURE INFRASTRUCTURE
              </span>
            </h1>
            <p className="hero-description">
              <strong>Cloud Configuration Review</strong> ensures your cloud infrastructure is securely configured by identifying
              <strong> misconfigurations, over-permissive access controls, and compliance gaps</strong> across AWS, Azure, and
              Google Cloud Platform, protecting your organization from cloud security incidents.
            </p>
            <p className="hero-description">
              Our comprehensive review covers <strong>IAM policies, security groups, storage configurations, network settings,
                and logging mechanisms</strong>, providing detailed remediation guidance to strengthen cloud security posture.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button" onClick={() => navigate('/contact')}>Get Started</button>
              <button className="btn btn-secondary" type="button">Learn More</button>
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
                  At <strong>Cyberaries</strong>, we conduct thorough <strong>cloud configuration security assessments</strong>
                  to identify and remediate misconfigurations, over-permissive access, exposed resources, and compliance gaps
                  across your cloud environment. Our approach combines automated scanning with expert manual analysis.
                </p>
                <p className="overview-text">
                  We help organizations achieve <strong>secure, compliant, and well-architected cloud infrastructure</strong>
                  aligned with industry best practices. <strong>Cyberaries</strong> delivers comprehensive reporting,
                  practical remediation guidance, and ongoing advisory support.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Cloud Configuration Review"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Modern Card Design */}
      <section className="approach-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-subtitle">
                Comprehensive cloud security assessment methodology built on industry standards
              </p>
            </div>
          </ScrollReveal>

          <div className="approach-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80}>
                <div className="approach-card">
                  <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="card-icon-wrapper">
                    <div className="card-icon">{step.icon}</div>
                  </div>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-description">{step.description}</p>
                  <div className="card-decoration"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="why-choose-card">
                  <div className="why-choose-icon">{item.icon}</div>
                  <h3 className="why-choose-title">{item.title}</h3>
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
                <h3 className="comparison-heading">Traditional Cloud Reviews</h3>
                <ul className="comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">
                  Cyberaries Cloud Configuration Review
                </h3>
                <ul className="comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="comparison-item" key={idx}>
                      <span className="bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Secure Your Cloud Infrastructure?
              </h2>
              <p className="cta-description">
                Identify misconfigurations, strengthen security, and achieve compliance.
              </p>
              <button
                className="btn btn-primary btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Contact Us Today
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CloudConfigReview;
