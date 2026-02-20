import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';

import {
  ClipboardList,
  Wrench,
  Search,
  Zap,
  RefreshCw,
  CheckCircle,
  BarChart3,
  Settings as Tool,
  Repeat,
  Award,
  Globe,
  Handshake,
  Bug,
  AlertTriangle, FileCheck, Users
} from 'lucide-react';
import './SASTandDAST.css';


/**
 * SAST & DAST Service Page
 * Comprehensive Static and Dynamic Application Security Testing
 */

const SASTandDAST = () => {
  const navigate = useNavigate();
  // Key Challenges Data
  const challengesData = [
    {
      title: "Lack of Early Vulnerability Detection",
      description: "Without SAST, security flaws in source code often go unnoticed until late in development, increasing remediation costs.",
      icon: <Bug size={40} />
    },
    {
      title: "Runtime Vulnerabilities",
      description: "DAST identifies vulnerabilities that only manifest when applications are running, catching issues SAST might miss.",
      icon: <Zap size={40} />
    },
    {
      title: "False Positives and Noise",
      description: "Both SAST and DAST tools can generate false positives, requiring expert analysis to prioritize real threats.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Integration with CI/CD Pipelines",
      description: "Seamlessly integrating security testing into DevOps workflows without slowing down development velocity.",
      icon: <RefreshCw size={40} />
    },
    {
      title: "Compliance Requirements",
      description: "Meeting industry standards like OWASP Top 10, PCI-DSS, and regulatory mandates requires comprehensive testing.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Skill Gap in Security Testing",
      description: "Development teams often lack specialized expertise to effectively use and interpret SAST/DAST tool results.",
      icon: <Users size={40} />
    }
  ];

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Requirements Analysis",
      description: "Understand the application architecture, technology stack, and security requirements to tailor our testing approach.",
      icon: <ClipboardList size={40} />
    },
    {
      title: "Tools Selection & Setup",
      description: "Configure best-in-class SAST and DAST tools to meet your development environment requirements.",
      icon: <Wrench size={40} />
    },
    {
      title: "Static Analysis (SAST)",
      description: "Examine source code, bytecode, or binaries to detect security flaws early in the SDLC.",
      icon: <Search size={40} />
    },
    {
      title: "Dynamic Analysis (DAST)",
      description: "Test running applications to identify runtime vulnerabilities, session handling, and access controls.",
      icon: <Zap size={40} />
    },
    {
      title: "Integrated Scanning",
      description: "Validate SAST findings with DAST results to eliminate false positives and confirm exploitability.",
      icon: <RefreshCw size={40} />
    },
    {
      title: "Vulnerability Validation",
      description: "Correlate findings, remove false positives, and verify exploitability of identified issues.",
      icon: <CheckCircle size={40} />
    },
    {
      title: "Risk Prioritization & Reporting",
      description: "Prioritize detected vulnerabilities by severity and impact with detailed remediation recommendations.",
      icon: <BarChart3 size={40} />
    },
    {
      title: "Remediation Support",
      description: "Guide development teams to address security coding flaws and implement mitigation strategies.",
      icon: <Tool size={40} />
    },
    {
      title: "Re-Testing & Continuous Integration",
      description: "Run validation scans and integrate automated testing into CI/CD pipelines to maintain ongoing security.",
      icon: <Repeat size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "Partnered with CERT-In Empanelled Experts",
      description: "Recognized by the Government of India for security audits.",
      icon: <Award size={50} />
    },
    {
      title: "350+ Clients Across Banking, IT, Insurance, Healthcare, and Manufacturing",
      description: "Proven expertise across diverse industries.",
      icon: <Globe size={50} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification.",
      icon: <Handshake size={50} />
    }
  ];

  return (
    <div className="sast-dast-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Application Security Testing</p>
            <h1 className="hero-title">
              SAST and DAST <span className="text-gradient">ASSESSMENT</span>
            </h1>
            <p className="hero-description">
              Modern applications demand security at every layer. <strong>Static Application Security Testing (SAST)</strong> and <strong>Dynamic Application Security Testing (DAST)</strong> are critical techniques to identify vulnerabilities during development and after deployment. Secure your software development lifecycle with comprehensive testing that catches vulnerabilities before they reach production.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="key-challenges">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Key Application Security Testing Challenges</h2>
            </div>
          </ScrollReveal>

          <div className="challenges-grid">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
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

      {/* Our Approach Section */}
      <section className="solutions-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
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
          <ScrollReveal animation="fade-up">
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            {/* Traditional Security Consulting */}
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional Security Consulting</h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Creates dependencies through ongoing services
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Delivers static PDFs that sit unimplemented
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Focuses on finding problems, not building solutions
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Recommends generic security practices
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Adds more tools to an already complex environment
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Takes their knowledge when they leave
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Cyberaries Security Engineering */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">
                  CYBERARIES Security Engineering
                </h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Builds self-sustaining security capabilities
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Delivers working code and automated systems
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Engineers solutions, not just identifies problems
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Creates business-specific security architecture
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Integrates and optimizes your existing investments
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Embeds knowledge permanently in your systems
                  </li>
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
              <h2 className="cta-title">Ready to Secure Your Applications?</h2>
              <p className="cta-description">
                Let's discuss how we can help you build comprehensive SAST and DAST testing into your SDLC
              </p>
              <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>Contact With Us</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      
    </div>
  );
};

export default SASTandDAST;