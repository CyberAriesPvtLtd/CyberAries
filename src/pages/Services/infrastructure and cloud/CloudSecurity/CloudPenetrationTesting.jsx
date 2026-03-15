import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/wireless-image.jpg';

import {
  FileText,
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
  Server
} from 'lucide-react';
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
      icon: <FileText size={40} />
    },
    {
      title: "Reconnaissance & Discovery",
      description: "Identify exposed cloud resources, APIs, storage buckets, and publicly accessible services.",
      icon: <Search size={40} />
    },
    {
      title: "Threat Modeling",
      description: "Map potential attack vectors targeting cloud infrastructure, APIs, and misconfigurations.",
      icon: <Target size={40} />
    },
    {
      title: "IAM Testing",
      description: "Test identity and access management weaknesses, privilege escalation, and permission boundaries.",
      icon: <Key size={40} />
    },
    {
      title: "Network Penetration",
      description: "Assess security groups, network ACLs, VPC configurations, and network segmentation.",
      icon: <Server size={40} />
    },
    {
      title: "API Security Testing",
      description: "Evaluate cloud APIs for authentication bypasses, injection attacks, and authorization flaws.",
      icon: <Lock size={40} />
    },
    {
      title: "Storage Security Assessment",
      description: "Test S3 buckets, blob storage, and databases for data exposure and encryption weaknesses.",
      icon: <Shield size={40} />
    },
    {
      title: "Exploitation & Impact Analysis",
      description: "Perform controlled exploitation to demonstrate real-world attack scenarios and business impact.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Remediation Recommendations",
      description: "Provide detailed remediation guidance with prioritized, actionable security improvements.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Re-Testing & Validation",
      description: "Verify that identified vulnerabilities have been effectively remediated post-implementation.",
      icon: <CheckCircle size={40} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Cloud-Native Expertise",
      description: "Specialized knowledge in AWS, Azure, GCP, and multi-cloud security testing.",
      icon: <Cloud size={48} strokeWidth={1.5} />
    },
    {
      title: "Partnered with CERT-In Empanelled",
      description: "Government-recognized for conducting advanced security assessments.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Safe Testing Methodology",
      description: "Non-disruptive testing approach ensuring business continuity and production safety.",
      icon: <RefreshCw size={48} strokeWidth={1.5} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Basic vulnerability scanning without simulating real-world attack scenarios.',
      'Generic testing without understanding cloud-specific attack techniques.',
      'Limited IAM and privilege escalation testing coverage.',
      'Superficial API security testing without deep authorization analysis.',
      'Reports lack cloud-specific context and remediation guidance.',
      'No validation of security controls against actual exploitation attempts.'
    ],
    cyberaries: [
      'Comprehensive penetration testing simulating advanced persistent threat scenarios.',
      'Cloud-native attack techniques targeting AWS, Azure, and GCP specific services.',
      'Deep IAM testing including role chaining, cross-account access, and privilege paths.',
      'Thorough API security assessment with business logic and authorization testing.',
      'Detailed, cloud-specific remediation with architecture-aware recommendations.',
      'Real exploitation attempts demonstrating actual business impact and risk.'
    ]
  };

  return (
    <div className="cloud-pentest-page">
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
              CLOUD PENETRATION TESTING{' '}
              <span className="text-gradient">
                REAL-WORLD ATTACK SIMULATION
              </span>
            </h1>
            <p className="hero-description">
              <strong>Cloud Penetration Testing</strong> identifies exploitable vulnerabilities in your cloud infrastructure by simulating
              <strong> real-world cyber attacks against AWS, Azure, and Google Cloud</strong> environments. Go beyond automated scanning
              to uncover critical security gaps that could lead to data breaches and service disruption.
            </p>
            <p className="hero-description">
              Our offensive security experts perform <strong>comprehensive testing of IAM policies, APIs, storage, network controls,
              and serverless functions</strong>, providing actionable remediation guidance to strengthen your cloud security posture.
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
                  At <strong>Cyberaries</strong>, we conduct <strong>advanced cloud penetration testing</strong>
                  to uncover security weaknesses through simulated attacks targeting your cloud infrastructure,
                  applications, and services. Our ethical hackers employ real-world tactics to identify vulnerabilities
                  before malicious actors can exploit them.
                </p>
                <p className="overview-text">
                  We help organizations build <strong>resilient, defense-in-depth cloud security</strong>
                  with comprehensive testing coverage and actionable remediation guidance. <strong>Cyberaries</strong> delivers
                  detailed reporting, proof-of-concept exploits, and ongoing advisory support for continuous security improvement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Cloud Penetration Testing"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-subtitle">
                Advanced penetration testing methodology simulating real-world cloud attacks
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
                <h3 className="comparison-heading">Traditional Cloud Testing</h3>
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
                  Cyberaries Cloud Penetration Testing
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
                Ready to Test Your Cloud Security?
              </h2>
              <p className="cta-description">
                Discover vulnerabilities before attackers do with comprehensive penetration testing.
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

export default CloudPenetrationTesting;
