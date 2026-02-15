import React from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/network-image.jpg';

import { 
  FileText,
  Search,
  Target,
  Shield,
  Scan,
  AlertTriangle,
  FileCheck,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones
} from 'lucide-react';
import './NetworkSecurity.css';

/**
 * Network Security Testing Service Page
 * Evaluating Infrastructure Resilience Against Cyber Threats
 */

const NetworkSecurity = () => {
  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Identify the target environment (LANs, WANs, devices), and objectives for a precise assessment boundary.",
      icon: <FileText size={40} />
    },
    {
      title: "Information Gathering",
      description: "Collect details on network topology, IP structure, and active devices.",
      icon: <Search size={40} />
    },
    {
      title: "Threat Modeling",
      description: "Identify potential entry points and prioritize high-risk systems for evaluation.",
      icon: <Target size={40} />
    },
    {
      title: "Vulnerability Scanning",
      description: "Use advanced tools to detect open ports, weak configurations, and outdated protocols.",
      icon: <Scan size={40} />
    },
    {
      title: "Manual Validation",
      description: "Verify auto-results manually to eliminate false positives and confirm real risks.",
      icon: <Shield size={40} />
    },
    {
      title: "Exploitation Testing",
      description: "Perform controlled exploitation to assess the impact of discovered weaknesses.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Privilege Escalation Review",
      description: "Evaluate internal pathways and potential misuse of privileges within the network.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Reporting & Remediation",
      description: "Provide comprehensive reports with severity-based and actionable remediation steps.",
      icon: <RefreshCw size={40} />
    },
    {
      title: "Re-Testing & Verification",
      description: "Validate that vulnerabilities have been effectively reduced post-remediation.",
      icon: <CheckCircle size={40} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Proven Expertise",
      description: "350+ clients across banking, IT, insurance, healthcare, and manufacturing.",
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification.",
      icon: <Headphones size={48} strokeWidth={1.5} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Relies primarily on automated vulnerability scanners without manual verification.',
      'High rate of false positives and missed critical vulnerabilities.',
      'Generic scanning without customization for specific network architectures.',
      'Limited testing of privilege escalation and lateral movement scenarios.',
      'Superficial analysis of network segmentation and access controls.',
      'Reports lack context-specific remediation guidance for infrastructure.'
    ],
    cyberaries: [
      'Comprehensive manual testing combined with advanced automated scanning tools.',
      'Manual validation eliminates false positives and confirms exploitable vulnerabilities.',
      'Customized testing approach for LANs, WANs, routers, switches, and firewalls.',
      'Thorough evaluation of privilege escalation, lateral movement, and attack paths.',
      'Deep analysis of network segmentation, access controls, and defense layers.',
      'Detailed, infrastructure-specific remediation guidance with security best practices.'
    ]
  };

  return (
    <div className="network-security-page sast-style-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Network Infrastructure Security</p>
            <h1 className="hero-title">
              NETWORK SECURITY TESTING{' '}
              <span className="text-gradient">
                INFRASTRUCTURE RESILIENCE
              </span>
            </h1>
            <p className="hero-description">
              <strong>Network Security Testing</strong> evaluates the resilience of your IT infrastructure by identifying 
              <strong> misconfigurations, vulnerabilities, and weaknesses</strong> in internal and external network components. It 
              ensures that your organization's critical assets remain protected against unauthorized access and 
              network breaches.
            </p>
            <p className="hero-description">
              Our comprehensive testing covers <strong>routers, switches, firewalls, servers, and connected devices</strong>, 
              combining automated scanning with manual validation to deliver accurate, prioritized, risk-based results 
              across your entire network infrastructure.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Start Now</button>
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
                  At <strong>Cyberaries</strong>, we conduct comprehensive <strong>network vulnerability assessments and penetration 
                  tests</strong> to identify and remediate security gaps across routers, switches, firewalls, servers, and connected 
                  devices. Our approach combines automated scanning with manual validation to deliver accurate, 
                  prioritized, risk-based results.
                </p>
                <p className="overview-text">
                  We help organizations build <strong>reliable, defense-in-depth security posture</strong> ensuring that every layer of 
                  their network architecture meets the highest cybersecurity standards. <strong>Cyberaries</strong> delivers 
                  detailed reporting, practical remediation guidance, and advisory support to build resilient, threat-
                  resilient networks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img 
                  src={overviewImage} 
                  alt="Network Security Testing" 
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="solutions-section our-approach">
        <div className="container">

          <ScrollReveal direction="up" delay={100}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0}>
            <div className="methodology-header">
              <p className="methodology-title">
                Our audit methodology is built around trust, adaptability, and reinforcing your security posture
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

      {/* Why Choose Section - MOVED BEFORE DIFFERENCE */}
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

      {/* Difference Section - MOVED AFTER WHY CHOOSE */}
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
                <h3 className="comparison-heading">Traditional Network Testing</h3>
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
                  Cyberaries Network Security Testing
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
                Ready to Secure Your Network Infrastructure?
              </h2>
              <p className="cta-description">
                Enhance protection, reduce risk, and support your growth objectives.
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

export default NetworkSecurity;
