import React, { useEffect } from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import { 
  Shield, 
  Lock, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Settings, 
  BarChart3, 
  Users, 
  Globe,
  Database,
  Bell,
  Eye,
  Award,
  Handshake,
  RefreshCw,
  FileCheck,
  UserCheck,
  Network,
  Key,
  BookOpen,
  Target
} from 'lucide-react';
import './RBICyberFramework.css';

/**
 * RBI Cyber Framework for Banks Service Page
 * Comprehensive Cyber Security Framework Compliance & Implementation
 */

const RBICyberFramework = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Key Challenges Data
  const challengesData = [
    {
      title: "Complex Regulatory Requirements",
      description: "The RBI Cyber Security Framework mandates comprehensive controls across governance, operations, and technology, requiring detailed documentation and implementation.",
      icon: <FileText size={40} />
    },
    {
      title: "Board-Level Cyber Security Policy",
      description: "Banks must establish a board-approved cyber security policy aligned with business strategy and risk appetite.",
      icon: <Users size={40} />
    },
    {
      title: "Cyber Crisis Management Plan",
      description: "Developing and testing comprehensive incident response and crisis management frameworks for cyber incidents.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Third-Party Risk Management",
      description: "Managing cyber security risks from vendors, service providers, and third-party integrations.",
      icon: <Network size={40} />
    },
    {
      title: "Advanced Threat Detection",
      description: "Implementing real-time monitoring, threat intelligence, and anomaly detection systems.",
      icon: <Eye size={40} />
    },
    {
      title: "Baseline Cyber Security Controls",
      description: "Implementing and maintaining 24 baseline controls covering identity management, data protection, and network security.",
      icon: <Shield size={40} />
    }
  ];

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Governance Assessment",
      description: "Evaluate existing cyber security governance structure, board oversight, and policy framework against RBI requirements.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Gap Analysis",
      description: "Conduct comprehensive gap assessment across all 24 baseline controls and governance requirements.",
      icon: <BarChart3 size={40} />
    },
    {
      title: "Risk Profiling",
      description: "Develop cyber risk profile based on bank's size, operations, digital presence, and customer base.",
      icon: <Target size={40} />
    },
    {
      title: "Policy Development",
      description: "Draft board-approved cyber security policy, strategy, and supporting procedures aligned with RBI framework.",
      icon: <BookOpen size={40} />
    },
    {
      title: "Technical Controls Implementation",
      description: "Deploy baseline security controls including identity management, encryption, network security, and monitoring.",
      icon: <Settings size={40} />
    },
    {
      title: "Cyber Crisis Management Framework",
      description: "Establish incident response plan, business continuity procedures, and crisis communication protocols.",
      icon: <Bell size={40} />
    },
    {
      title: "Third-Party Risk Management",
      description: "Implement vendor assessment framework, contractual controls, and ongoing monitoring mechanisms.",
      icon: <UserCheck size={40} />
    },
    {
      title: "Security Operations Center (SOC)",
      description: "Set up or enhance SOC capabilities for 24/7 monitoring, threat detection, and incident response.",
      icon: <Eye size={40} />
    },
    {
      title: "Training & Awareness",
      description: "Conduct board-level briefings and organization-wide cyber security awareness programs.",
      icon: <Users size={40} />
    },
    {
      title: "Testing & Validation",
      description: "Perform vulnerability assessments, penetration testing, and crisis simulation exercises.",
      icon: <CheckCircle size={40} />
    },
    {
      title: "Compliance Documentation",
      description: "Prepare comprehensive evidence repository for RBI inspections and regulatory reporting.",
      icon: <Database size={40} />
    },
    {
      title: "Continuous Monitoring",
      description: "Establish ongoing compliance monitoring, control effectiveness testing, and improvement programs.",
      icon: <RefreshCw size={40} />
    }
  ];

  // RBI Framework Core Components
  const frameworkComponents = [
    {
      title: "Governance Framework",
      description: "Board oversight, cyber security strategy, risk management framework, and accountability structure.",
      icon: <Shield size={40} />
    },
    {
      title: "Baseline Security Controls",
      description: "24 mandatory controls covering identity, data protection, network security, and resilience.",
      icon: <Lock size={40} />
    },
    {
      title: "Cyber Crisis Management",
      description: "Incident response, business continuity, crisis communication, and recovery procedures.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Third-Party Risk Management",
      description: "Vendor assessment, contractual safeguards, and continuous monitoring of outsourced services.",
      icon: <Network size={40} />
    },
    {
      title: "Threat Intelligence & Monitoring",
      description: "Real-time threat detection, security information sharing, and proactive defense measures.",
      icon: <Eye size={40} />
    },
    {
      title: "Security Operations Center",
      description: "24/7 monitoring, incident detection and response, and security event management.",
      icon: <Bell size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "RBI Audit Experience",
      description: "Deep expertise in RBI regulatory requirements with successful audit track record across major banks.",
      icon: <Award size={50} />
    },
    {
      title: "Banking Domain Knowledge",
      description: "Specialized understanding of banking operations, payment systems, and financial sector regulations.",
      icon: <Globe size={50} />
    },
    {
      title: "End-to-End Implementation",
      description: "Complete support from gap analysis to implementation, testing, and ongoing compliance maintenance.",
      icon: <Handshake size={50} />
    }
  ];

  // 24 Baseline Controls Categories
  const baselineControls = [
    "Identity & Access Management with privileged access controls",
    "Strong authentication mechanisms including multi-factor authentication",
    "Data security and encryption at rest and in transit",
    "Network security with segmentation and perimeter defense",
    "Security monitoring and incident detection systems",
    "Patch and vulnerability management processes",
    "Application security throughout SDLC",
    "Security testing including VAPT and code reviews",
    "Change management with security validation",
    "Configuration and asset management",
    "Backup and recovery with off-site storage",
    "Business continuity and disaster recovery",
    "Vendor and third-party risk management",
    "User awareness and training programs",
    "Cyber insurance coverage",
    "Security audit and compliance monitoring"
  ];

  return (
    <div className="rbi-cyber-framework-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Banking Sector Compliance</p>
            <h1 className="hero-title">
              RBI Cyber Security <span className="text-gradient">FRAMEWORK</span> for Banks
            </h1>
            <p className="hero-description">
              The Reserve Bank of India (RBI) Cyber Security Framework mandates comprehensive security measures for all Scheduled Commercial Banks and Urban Cooperative Banks. <strong>Our specialized services ensure complete compliance</strong> with RBI directives covering governance, baseline controls, crisis management, and third-party risk. Navigate complex regulatory requirements with expert guidance for sustainable cyber resilience.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Schedule RBI Compliance Assessment</button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="key-challenges">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">RBI Framework Compliance Challenges</h2>
              <p className="section-description">
                Banks face multiple challenges in implementing and maintaining RBI's comprehensive cyber security requirements
              </p>
            </div>
          </ScrollReveal>
          
          <div className="challenges-grid">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
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

      {/* Framework Components Section */}
      <section className="framework-components">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">RBI Framework Core Components</h2>
              <p className="section-description">
                Comprehensive framework covering governance, controls, crisis management, and continuous monitoring
              </p>
            </div>
          </ScrollReveal>
          
          <div className="components-grid">
            {frameworkComponents.map((component, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="component-card">
                  <div className="component-icon">
                    {component.icon}
                  </div>
                  <h3 className="component-title">{component.title}</h3>
                  <p className="component-description">{component.description}</p>
                  <div className="component-indicator"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="solutions-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Implementation Approach</h2>
              <p className="section-description">
                Systematic methodology ensuring complete RBI framework compliance with minimal business disruption
              </p>
            </div>
          </ScrollReveal>
          
          <div className="solutions-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
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

      {/* Baseline Controls Checklist */}
      <section className="baseline-controls">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">24 Baseline Security Controls Coverage</h2>
              <p className="section-description">
                Mandatory controls mandated by RBI for all banks to achieve cyber resilience
              </p>
            </div>
          </ScrollReveal>

          <div className="controls-checklist">
            <div className="controls-grid">
              {baselineControls.map((control, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 50} triggerOnce={false}>
                  <div className="control-item">
                    <div className="control-check">
                      <CheckCircle size={24} />
                    </div>
                    <span className="control-text">{control}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Why Choose Cyberaries for RBI Compliance?</h2>
            </div>
          </ScrollReveal>
          
          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150} triggerOnce={false}>
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
          <ScrollReveal animation="fade-up" triggerOnce={false}>
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>          
          </ScrollReveal>

          <div className="comparison-grid">
            {/* Traditional Compliance Consulting */}
            <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional Compliance Consulting</h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Checkbox compliance focused on documentation
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Generic frameworks not tailored to banking operations
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Limited understanding of RBI's regulatory expectations
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Delivers reports without implementation support
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    One-time assessment without ongoing monitoring
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Leaves banks unprepared for RBI inspections
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Cyberaries Banking Security */}
            <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">
                  CYBERARIES Banking Security
                </h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Operational cyber resilience with working controls
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Banking-specific implementation aligned with operations
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Deep RBI regulatory expertise and audit experience
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Hands-on implementation with knowledge transfer
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Continuous compliance monitoring and improvement
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Inspection-ready documentation and evidence management
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliverables-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Comprehensive Deliverables</h2>
            </div>
          </ScrollReveal>

          <div className="deliverables-grid">
            <ScrollReveal direction="up" delay={100}>
              <div className="deliverable-card">
                <FileText size={36} />
                <h4>Governance Documentation</h4>
                <ul>
                  <li>Board-approved Cyber Security Policy</li>
                  <li>Cyber Security Strategy Document</li>
                  <li>Risk Management Framework</li>
                  <li>Roles and Responsibilities Matrix</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="deliverable-card">
                <Settings size={36} />
                <h4>Technical Controls</h4>
                <ul>
                  <li>Implemented Baseline Security Controls</li>
                  <li>SOC Setup and Monitoring Playbooks</li>
                  <li>Identity and Access Management System</li>
                  <li>Network Security Architecture</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="deliverable-card">
                <Bell size={36} />
                <h4>Crisis Management</h4>
                <ul>
                  <li>Incident Response Plan</li>
                  <li>Business Continuity Procedures</li>
                  <li>Crisis Communication Framework</li>
                  <li>Tested Simulation Exercise Results</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="deliverable-card">
                <BarChart3 size={36} />
                <h4>Compliance Reports</h4>
                <ul>
                  <li>Gap Assessment Report</li>
                  <li>Compliance Status Dashboard</li>
                  <li>Evidence Repository</li>
                  <li>RBI Inspection Readiness Report</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="cta-content">
              <h2 className="cta-title">Ensure RBI Cyber Security Compliance</h2>
              <p className="cta-description">
                Partner with banking security experts to implement comprehensive RBI framework compliance
              </p>
              <button className="btn btn-primary btn-large">Request Compliance Assessment</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default RBICyberFramework;