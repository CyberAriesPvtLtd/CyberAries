import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/mobile-image.jpg';

import {
  FileSearch,
  Shield,
  Database,
  Lock,
  FileText,
  AlertTriangle,
  CheckCircle,
  Award,
  Users,
  Headphones,
  UserCheck,
  Settings
} from 'lucide-react';
import './ISO27701.css';

/**
 * ISO 27701 Compliance Page
 * Privacy Information Management System (PIMS)
 */
const ISO27701 = () => {
  const navigate = useNavigate();

  const approachSteps = [
    {
      title: "Gap Assessment and PIMS Readiness",
      description: "Evaluating existing ISMS and privacy frameworks to identify gaps against ISO 27701 requirements and applicable data protection regulations.",
      icon: <FileSearch size={40} />
    },
    {
      title: "Privacy Policy and Governance Setup",
      description: "Establishing a Privacy Information Management System (PIMS), defining privacy roles, responsibilities, and accountability structures across the organization.",
      icon: <Shield size={40} />
    },
    {
      title: "Personal Data Inventory and Mapping",
      description: "Documenting personal data flows, identifying categories of data subjects, and mapping data lifecycle across all processing activities.",
      icon: <Database size={40} />
    },
    {
      title: "Privacy Risk Assessment and DPIA",
      description: "Conducting privacy risk assessments and Data Protection Impact Assessments (DPIA) to identify and mitigate privacy risks across operations.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Data Subject Rights Management",
      description: "Implementing processes for managing data subject rights including access, rectification, erasure, and portability requests.",
      icon: <UserCheck size={40} />
    },
    {
      title: "Consent and Lawful Basis Framework",
      description: "Establishing mechanisms for obtaining, recording, and managing consent and ensuring lawful basis for all data processing activities.",
      icon: <FileText size={40} />
    },
    {
      title: "Access Controls and Data Security",
      description: "Implementing access management, encryption, and technical controls to protect personal data from unauthorized access or disclosure.",
      icon: <Lock size={40} />
    },
    {
      title: "Third-Party and Processor Management",
      description: "Assessing data processors and third-party vendors to ensure contractual and operational compliance with privacy obligations.",
      icon: <Settings size={40} />
    },
    {
      title: "Certification and Continuous Improvement",
      description: "Preparing for third-party ISO 27701 certification audits and enabling continual improvement of the PIMS.",
      icon: <CheckCircle size={40} />
    }
  ];

  const whyChooseItems = [
    {
      title: "Partnered with CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits, compliance, and risk management services.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Proven Expertise",
      description: "150+ clients across banking, IT, insurance, healthcare, and manufacturing sectors successfully certified.",
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification, we provide full support throughout your compliance journey.",
      icon: <Headphones size={48} strokeWidth={1.5} />
    }
  ];

  const difference = {
    traditional: [
      'Generic privacy consulting without structured PIMS implementation or governance.',
      'Limited alignment with ISO 27701 as an extension of ISO 27001 and ISO 27002.',
      'Overlooks data subject rights management and consent framework requirements.',
      'Superficial review of data processor agreements and third-party obligations.',
      'No formal DPIA or privacy risk assessment integrated into the compliance process.',
      'Generic reports without actionable, regulation-specific privacy remediation steps.'
    ],
    cyberaries: [
      'Full ISO 27701 PIMS implementation built on your existing ISMS foundation.',
      'Comprehensive personal data mapping, classification, and lifecycle documentation.',
      'Structured DPIA and privacy risk assessments aligned with GDPR and DPDPA.',
      'Robust data subject rights framework with tested workflows and escalation paths.',
      'Detailed vendor and processor assessments with contractual compliance reviews.',
      'End-to-end support from initial gap analysis through certification and beyond.'
    ]
  };

  return (
    <div className="iso-27701-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">ISO 27701 Compliance</p>
            <h1 className="hero-title">
              BUILD A TRUSTED PRIVACY MANAGEMENT SYSTEM{' '}
              <span className="text-gradient">
                WITH EXPERTS IN ISO 27701 COMPLIANCE
              </span>
            </h1>
            <p className="hero-description">
              <strong>ISO 27701:2019</strong> is an international privacy extension to ISO 27001 that specifies requirements
              for establishing, implementing, maintaining, and continually improving a <strong>Privacy Information Management
              System (PIMS)</strong>. It provides a structured framework for managing personal data in compliance with global
              regulations such as GDPR and DPDPA.
            </p>
            <p className="hero-description">
              Our compliance services cover <strong>privacy governance, personal data mapping, DPIA, data subject rights
              management, consent frameworks, and third-party assessments</strong>—helping organizations demonstrate
              accountability and build lasting trust with customers and regulators alike.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Start Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="overview-content">
                <p className="overview-text">
                  At <strong>Cyberaries</strong>, we help organizations implement a <strong>Privacy Information Management
                  System (PIMS)</strong> aligned with ISO 27701, strengthening your privacy governance and ensuring compliance
                  with applicable data protection legislation. Our approach integrates seamlessly with your existing
                  ISO 27001 ISMS to extend privacy controls across your entire organization.
                </p>
                <p className="overview-text">
                  Our team of <strong>certified ISO 27701 privacy and information security specialists</strong> guides
                  clients through gap analysis, data mapping, risk assessments, and control implementation—delivering
                  a privacy framework that is <strong>audit-ready, regulation-aligned, and operationally resilient</strong>.
                  ISO 27701 certification signals your commitment to responsible data stewardship and regulatory trust.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="ISO 27701 Privacy Information Management"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="solutions-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-subtitle">
                Our ISO 27701 methodology is built around privacy governance, accountability, and regulatory confidence
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="solution-card">
                  <div className="solution-icon">{step.icon}</div>
                  <h3 className="solution-title">{step.title}</h3>
                  <p className="solution-description">{step.description}</p>
                  <div className="solution-indicator"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
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
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional Privacy Consulting</h3>
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
                  Cyberaries ISO 27701 Compliance
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
                Ready to Protect PII in Your Cloud Environment?
              </h2>
              <p className="cta-description">
                Enhance protection, reduce risk, and support your growth objectives.
              </p>
              <button
                className="btn btn-primary btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Contact With Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ISO27701;