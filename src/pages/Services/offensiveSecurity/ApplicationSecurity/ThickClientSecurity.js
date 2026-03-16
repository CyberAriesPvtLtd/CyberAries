import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/wast-image.jpg';

import {
  FileText,
  Search,
  Code,
  AlertTriangle,
  FileCheck,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones,
  Monitor,
  Lock,
  Eye,
  Cpu,
  Database,
  Network
} from 'lucide-react';
import './ThickClientSecurity.css';

/**
 * Thick Client Security Testing Service Page
 * Comprehensive Security Assessment for Desktop & Rich Client Applications
 */

const ThickClientSecurity = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope & Architecture Review",
      description: "Define the testing scope covering client-side logic, server communication protocols, and local data storage mechanisms.",
      icon: <FileText size={40} />
    },
    {
      title: "Environment Setup & Reconnaissance",
      description: "Configure proxy tools, interceptors, and debugging environments to analyze application traffic and behaviour.",
      icon: <Search size={40} />
    },
    {
      title: "Traffic Analysis & Interception",
      description: "Intercept and analyze communication between the thick client and backend servers to identify insecure data transmission.",
      icon: <Network size={40} />
    },
    {
      title: "Binary & Memory Analysis",
      description: "Reverse engineer application binaries and analyze runtime memory for hardcoded credentials, keys, and sensitive data.",
      icon: <Cpu size={40} />
    },
    {
      title: "Authentication & Authorization Testing",
      description: "Test login mechanisms, session management, privilege escalation, and improper access control vulnerabilities.",
      icon: <Lock size={40} />
    },
    {
      title: "Business Logic Testing",
      description: "Identify flaws in application workflows, data validation, and process logic that can be exploited by attackers.",
      icon: <Code size={40} />
    },
    {
      title: "Local Storage & Registry Testing",
      description: "Examine sensitive data stored locally in files, databases, registry keys, and application caches.",
      icon: <Database size={40} />
    },
    {
      title: "Exploitation & Impact Assessment",
      description: "Validate discovered vulnerabilities through controlled exploitation to demonstrate real-world risk and business impact.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Reporting & Remediation Guidance",
      description: "Deliver comprehensive reports with prioritized findings, risk ratings, and actionable remediation steps.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Re-Testing & Verification",
      description: "Validate all fixes through follow-up testing to confirm complete resolution and eliminate residual risks.",
      icon: <RefreshCw size={40} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "CERT-In Empanelled Experts",
      description: "Recognized by the Government of India for conducting certified security assessments.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Proven Expertise",
      description: "350+ clients across banking, IT, insurance, healthcare, and manufacturing sectors.",
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      title: "End-to-End Support",
      description: "From initial scoping to final remediation guidance and re-testing verification.",
      icon: <Headphones size={48} strokeWidth={1.5} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Limited to web-based scanning tools not suited for thick client assessment.',
      'Misses client-side logic flaws, memory leaks, and hardcoded credentials.',
      'No binary analysis or runtime memory inspection capabilities.',
      'Lacks expertise in proprietary protocols used by desktop applications.',
      'Generic reports missing context-specific thick client vulnerabilities.',
      'One-time assessments without post-remediation validation support.'
    ],
    cyberaries: [
      'Specialized thick client testing with advanced binary reverse engineering.',
      'Deep analysis of client-side logic, local storage, and memory artifacts.',
      'Full traffic interception and proprietary protocol analysis.',
      'Expert coverage of desktop, Java-based, and Electron applications.',
      'Detailed reports with thick client-specific exploitation evidence.',
      'Continuous support with re-testing and security enhancement recommendations.'
    ]
  };

  return (
    <div className="thick-client-security-page sast-style-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Application Security Testing</p>
            <h1 className="hero-title">
              THICK CLIENT SECURITY TESTING
            </h1>
            <p className="hero-subheading">SECURING DESKTOP & RICH CLIENT APPLICATIONS</p>
            <p className="hero-description">
              <strong>Thick Client Security Testing</strong> is a specialized assessment that identifies vulnerabilities
              in desktop applications, rich clients, and enterprise software that communicate with backend servers.
              Unlike web applications, thick clients operate with client-side logic, local data storage, and proprietary
              protocols that require <strong>unique testing techniques and toolsets</strong>.
            </p>
            <p className="hero-description">
              At <strong>Cyberaries</strong>, we conduct comprehensive <strong>manual and automated thick client
                security assessments</strong> covering ERP systems, trading platforms, banking software, and enterprise
              desktop applications. Our certified experts identify vulnerabilities that traditional web scanners simply
              cannot detect.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Start Now &rarr;</button>
              <button className="btn btn-secondary">Learn More</button>
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
                  Thick clients present a <strong>unique attack surface</strong> that includes client-side business logic,
                  local file and registry storage, memory artifacts, and direct communication with application servers.
                  <strong> Cyberaries</strong> delivers thorough risk assessments covering all vectors—from binary
                  reverse engineering to network traffic analysis.
                </p>
                <p className="overview-text">
                  Our testing methodology addresses <strong>authentication bypass, privilege escalation, insecure
                    local storage, hardcoded credentials, improper session handling, and business logic flaws</strong>—
                  ensuring complete protection across your entire thick client application ecosystem including
                  Java, .NET, Electron, and proprietary frameworks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Thick Client Security Testing"
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Test Section */}
      <section className="what-we-test">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">What We Test</h2>
              <p className="section-subtitle">
                Comprehensive coverage across all thick client vulnerability categories
              </p>
            </div>
          </ScrollReveal>

          <div className="test-categories-grid">
            {[
              {
                icon: <Monitor size={36} />,
                title: "Client-Side Logic",
                items: ["Business logic flaws", "Input validation bypass", "Improper error handling", "Data manipulation"]
              },
              {
                icon: <Lock size={36} />,
                title: "Authentication & Sessions",
                items: ["Credential storage in plaintext", "Session token weaknesses", "Privilege escalation", "Broken auth mechanisms"]
              },
              {
                icon: <Database size={36} />,
                title: "Local Data Storage",
                items: ["Registry key exposure", "SQLite / local DB analysis", "Config file secrets", "Temp file artifacts"]
              },
              {
                icon: <Network size={36} />,
                title: "Network Communication",
                items: ["Unencrypted traffic", "Proprietary protocol flaws", "Man-in-the-middle exposure", "API endpoint misuse"]
              },
              {
                icon: <Cpu size={36} />,
                title: "Binary & Memory",
                items: ["Hardcoded credentials", "Reverse engineering", "Runtime memory dumps", "DLL injection risks"]
              },
              {
                icon: <Eye size={36} />,
                title: "Third-Party Components",
                items: ["Vulnerable libraries", "Outdated dependencies", "Insecure update mechanisms", "Supply chain risks"]
              }
            ].map((cat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="test-category-card">
                  <div className="test-category-icon">{cat.icon}</div>
                  <h3 className="test-category-title">{cat.title}</h3>
                  <ul className="test-category-list">
                    {cat.items.map((item, i) => (
                      <li key={i} className="test-category-item">
                        <CheckCircle size={14} className="check-mini" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="solutions-section our-approach">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-subtitle">
                Our methodology is built on deep technical expertise and a structured, proven testing framework
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="solution-card">
                  <div className="solution-step-number">{index + 1}</div>
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
                <h3 className="comparison-heading">Traditional Thick Client Testing</h3>
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
                  Cyberaries Thick Client Security
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
                Ready to Secure Your Thick Client Applications?
              </h2>
              <p className="cta-description">
                Protect your desktop applications from sophisticated attacks with expert thick client security testing.
              </p>
              <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>
                Start Now &rarr;
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default ThickClientSecurity;
