import React from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/code-image.jpg';


import {
  FileSearch,
  Database,
  Settings,
  Code,
  Shield,
  AlertTriangle,
  FileText,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones
} from 'lucide-react';
import './SourceCodeReview.css';

/**
 * Source Code Review Service Page
 * Securing Applications at the Code Level
 */

const SourceCodeReview = () => {
  // Approach / methodology data (same content as original Source Code page)
  const approachSteps = [
    {
      title: 'Scope Definition',
      description:
        'Determine the application modules, technologies, and programming languages in scope.',
      icon: <FileSearch size={40} />
    },
    {
      title: 'Codebase Collection',
      description:
        'Obtain the latest source code version and necessary build dependencies for review.',
      icon: <Database size={40} />
    },
    {
      title: 'Static Analysis Setup',
      description:
        'Use automated tools to perform an initial scan for security flaws and coding issues.',
      icon: <Settings size={40} />
    },
    {
      title: 'Manual Code Review',
      description:
        'Conduct in-depth line-by-line analysis to identify complex logical and architectural vulnerabilities.',
      icon: <Code size={40} />
    },
    {
      title: 'Security Control Validation',
      description:
        'Verify implementation of authentication, authorization, and input validation mechanisms.',
      icon: <Shield size={40} />
    },
    {
      title: 'Cryptography & Data Handling Review',
      description:
        'Assess the proper use of encryption, hashing, and sensitive data storage methods.',
      icon: <AlertTriangle size={40} />
    },
    {
      title: 'Error & Exception Management',
      description:
        'Evaluate logging, error handling, and debugging functions for potential data leakage.',
      icon: <FileText size={40} />
    },
    {
      title: 'Reporting & Remediation',
      description:
        'Deliver a detailed report highlighting vulnerabilities, their impact, and mitigation methods.',
      icon: <RefreshCw size={40} />
    },
    {
      title: 'Re-Testing & Continuous Integration',
      description:
        'Validate fixes and integrate secure coding checks into CI/CD pipelines for ongoing assurance.',
      icon: <CheckCircle size={40} />
    }
  ];

  // Why Choose data (same as original Source Code Review)
  const whyChooseItems = [
    {
      title: 'CERT-In Empanelled',
      description: 'Recognized by the Government of India for security audits.',
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: 'Proven Expertise',
      description:
        '350+ clients across banking, IT, insurance, healthcare, and manufacturing.',
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      title: 'End-to-End Support',
      description: 'From scoping to remediation and final certification.',
      icon: <Headphones size={48} strokeWidth={1.5} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Focuses mainly on surface-level testing and functional defects.',
      'Relies heavily on automated tools without deep contextual analysis.',
      'Findings are often delivered as static reports with limited guidance.',
      'Security is treated as a one-time activity after development.',
      'Limited collaboration with developers on secure coding practices.',
      'Minimal emphasis on integrating checks into CI/CD pipelines.'
    ],
    cyberaries: [
      'Performs deep manual review of business logic and architecture.',
      'Combines advanced tooling with expert security engineering insight.',
      'Delivers actionable remediation guidance with prioritized fixes.',
      'Embeds security early into the SDLC and development workflows.',
      'Works closely with developers to uplift secure coding maturity.',
      'Integrates repeatable checks into CI/CD for continuous assurance.'
    ]
  };

  return (
    <div className="source-code-review-page sast-style-page">
      {/* Hero Section – same layout style as SAST */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Application Security Testing</p>
            <h1 className="hero-title">
              SOURCE CODE REVIEW{' '}
              <span className="text-gradient">
                SECURING APPLICATIONS AT THE CODE LEVEL
              </span>
            </h1>
            <p className="hero-description">
              <strong>Source Code Review</strong> is a systematic examination of
              an application's codebase to identify vulnerabilities, logic
              flaws, and insecure coding practices. Unlike automated or
              signature-based scans that focus on surface-level checks, a manual
              code review delves deep into how code is written, revealing subtle
              security and reliability issues.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Start Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview / description block */}
      <section className="service-overview">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>

          </ScrollReveal>

          <div className="overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="overview-content">
                <p className="overview-text">
                  At <strong>Cyberaries</strong>, we conduct{' '}
                  <strong>
                    comprehensive manual and automated source code analysis
                  </strong>{' '}
                  using advanced analysis tools and expert evaluation. Our
                  process identifies risks such as{' '}
                  <strong>
                    injection flaws, insecure APIs, improper input validation,
                    and weak cryptographic implementations
                  </strong>{' '}
                  across multiple programming languages and frameworks.
                </p>
                <p className="overview-text">
                  We help development teams integrate{' '}
                  <strong>secure coding practices</strong> into the SDLC,
                  enabling early vulnerability detection, reduced remediation
                  costs, and compliance with global standards such as OWASP,
                  ISO, and NIST. <strong>Cyberaries</strong> ensures your
                  applications are <strong>secure by design</strong>,
                  reinforcing security posture while maintaining performance,
                  functionality, and scalability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Source Code Review"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Our Approach – same pattern as SAST "Our Approach" */}
      <section className="solutions-section our-approach">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">
                Our Approach
              </h2>
              <p className="section-subtitle">
                Our audit methodology is built around verification, transparency,
                and delivering measurable security outcomes.
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
                  <p className="why-choose-description">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Difference Section */}
      <section className="cyberaries-difference source-difference">
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
                <h3 className="comparison-heading">Traditional Code Review</h3>
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
                  Cyberaries Source Code Review
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
                Ready to Strengthen Your Source Code Security?
              </h2>
              <p className="cta-description">
                Let&apos;s review your applications at the code level and build
                a secure-by-design software foundation.
              </p>
              <button className="btn btn-primary btn-large">
                Contact With Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      
    </div>
  );
};

export default SourceCodeReview;
