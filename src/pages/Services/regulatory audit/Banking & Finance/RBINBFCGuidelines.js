import React, { useEffect } from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import {
  // eslint-disable-next-line no-unused-vars
  Shield,
  Lock,
  FileText,
  AlertTriangle,
  CheckCircle,
  // eslint-disable-next-line no-unused-vars
  Settings,
  BarChart3,
  Users,
  // eslint-disable-next-line no-unused-vars
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
  // eslint-disable-next-line no-unused-vars
  Server,
  // eslint-disable-next-line no-unused-vars
  BookOpen,
  // eslint-disable-next-line no-unused-vars
  Target,
  Laptop,
  DollarSign,
  TrendingUp,
  Building,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import './RBINBFCGuidelines.css';

/**
 * RBI NBFC Cyber Guidelines Service Page
 * Cyber Security Guidelines for NBFCs and Non-Banking Finance Companies
 */

const RBINBFCGuidelines = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Key Challenges Data
  const challengesData = [
    {
      title: "Scale-Based Compliance Requirements",
      description: "NBFCs must implement controls proportionate to their size, complexity, and digital footprint as per RBI's risk-based approach.",
      icon: <TrendingUp size={40} />
    },
    {
      title: "Digital Lending Security",
      description: "Securing mobile apps, APIs, and digital lending platforms against fraud, data breaches, and unauthorized access.",
      icon: <Laptop size={40} />
    },
    {
      title: "Customer Data Protection",
      description: "Protecting sensitive customer financial data, KYC documents, and transaction information from cyber threats.",
      icon: <Database size={40} />
    },
    {
      title: "Third-Party Integration Risks",
      description: "Managing cyber risks from fintech partnerships, payment gateways, and technology service providers.",
      icon: <Network size={40} />
    },
    {
      title: "Limited Security Resources",
      description: "NBFCs often lack dedicated security teams and budgets compared to traditional banks, making compliance challenging.",
      icon: <Users size={40} />
    },
    {
      title: "Incident Response Preparedness",
      description: "Establishing incident response capabilities and crisis management frameworks suitable for NBFC operations.",
      icon: <AlertTriangle size={40} />
    }
  ];

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "NBFC Profile Assessment",
      description: "Evaluate business model, digital infrastructure, customer base, and regulatory classification to determine compliance scope.",
      icon: <Building size={40} />
    },
    {
      title: "Risk-Based Gap Analysis",
      description: "Conduct proportionate gap assessment aligned with NBFC's scale and digital presence.",
      icon: <BarChart3 size={40} />
    },
    {
      title: "Governance Framework Setup",
      description: "Establish board-level oversight, cyber security policies, and management accountability structures.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Core Security Controls",
      description: "Implement essential controls for identity management, data encryption, network security, and access controls.",
      icon: <Lock size={40} />
    },
    {
      title: "Digital Platform Security",
      description: "Secure mobile apps, web portals, APIs, and digital lending platforms with appropriate security measures.",
      icon: <Laptop size={40} />
    },
    {
      title: "Vendor Risk Management",
      description: "Establish third-party risk assessment framework for fintech partners and technology service providers.",
      icon: <UserCheck size={40} />
    },
    {
      title: "Security Monitoring Setup",
      description: "Deploy proportionate monitoring capabilities for threat detection and security event management.",
      icon: <Eye size={40} />
    },
    {
      title: "Incident Response Planning",
      description: "Develop NBFC-appropriate incident response procedures and crisis management frameworks.",
      icon: <Bell size={40} />
    },
    {
      title: "Staff Training Programs",
      description: "Conduct cyber security awareness training for employees and management personnel.",
      icon: <Users size={40} />
    },
    {
      title: "Security Testing",
      description: "Perform vulnerability assessments and penetration testing of critical systems and applications.",
      icon: <CheckCircle size={40} />
    },
    {
      title: "Compliance Documentation",
      description: "Prepare comprehensive evidence and documentation for RBI inspections and regulatory reporting.",
      icon: <FileText size={40} />
    },
    {
      title: "Continuous Improvement",
      description: "Establish ongoing compliance monitoring and security posture enhancement programs.",
      icon: <RefreshCw size={40} />
    }
  ];

  // NBFC-Specific Requirements
  const nbfcRequirements = [
    {
      title: "Board Oversight",
      description: "Board-approved cyber security policy with regular updates on cyber risk and incidents.",
      icon: <Users size={40} />
    },
    {
      title: "Proportionate Controls",
      description: "Security controls scaled to NBFC's size, operations, and technology adoption level.",
      icon: <TrendingUp size={40} />
    },
    {
      title: "Digital Lending Security",
      description: "Specific controls for mobile apps, digital onboarding, and automated lending platforms.",
      icon: <Smartphone size={40} />
    },
    {
      title: "Data Privacy Compliance",
      description: "Customer data protection aligned with DPDP Act and RBI data localization requirements.",
      icon: <Database size={40} />
    },
    {
      title: "Fintech Partnership Security",
      description: "Due diligence and ongoing monitoring of technology service providers and partners.",
      icon: <Handshake size={40} />
    },
    {
      title: "Incident Reporting",
      description: "Mandatory reporting of cyber incidents to RBI within specified timelines.",
      icon: <Bell size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "NBFC Specialization",
      description: "Deep understanding of NBFC business models, digital lending, and proportionate security requirements.",
      icon: <Award size={50} />
    },
    {
      title: "Cost-Effective Solutions",
      description: "Pragmatic, scalable security implementations designed for NBFC budgets and resources.",
      icon: <DollarSign size={50} />
    },
    {
      title: "Complete Implementation",
      description: "End-to-end support from policy development to technical controls and ongoing compliance.",
      icon: <Handshake size={50} />
    }
  ];

  // Core Security Areas
  const securityAreas = [
    "Identity and access management with privileged account controls",
    "Customer data encryption and protection mechanisms",
    "Secure mobile application development and deployment",
    "API security for digital lending integrations",
    "Network segmentation and perimeter security",
    "Security monitoring and incident detection",
    "Vulnerability and patch management",
    "Business continuity and disaster recovery",
    "Third-party and vendor risk management",
    "Security awareness and training programs",
    "Cyber insurance coverage requirements",
    "Regulatory reporting and compliance documentation"
  ];

  return (
    <div className="rbi-nbfc-guidelines-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">NBFC Regulatory Compliance</p>
            <h1 className="hero-title">
              RBI NBFC Cyber Security <span className="text-gradient">GUIDELINES</span>
            </h1>
            <p className="hero-description">
              The Reserve Bank of India has issued comprehensive <strong>Cyber Security Guidelines for NBFCs</strong> (Non-Banking Financial Companies) to ensure robust security posture across digital lending, payment systems, and customer data protection. <strong>Our specialized services help NBFCs achieve proportionate compliance</strong> aligned with their scale, operations, and digital footprint while managing costs effectively.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large">REQUEST NBFC COMPLIANCE ASSESSMENT</button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="key-challenges">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">NBFC Cyber Security Challenges</h2>
              <p className="section-description">
                NBFCs face unique challenges in balancing security requirements with operational efficiency and resource constraints
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

      {/* NBFC Requirements Section */}
      <section className="framework-components">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">RBI Guidelines for NBFCs</h2>
              <p className="section-description">
                Key requirements mandated by RBI for NBFC cyber security compliance
              </p>
            </div>
          </ScrollReveal>

          <div className="components-grid">
            {nbfcRequirements.map((requirement, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} triggerOnce={false}>
                <div className="component-card">
                  <div className="component-icon">
                    {requirement.icon}
                  </div>
                  <h3 className="component-title">{requirement.title}</h3>
                  <p className="component-description">{requirement.description}</p>
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
              <h2 className="section-title">Our NBFC Compliance Approach</h2>
              <p className="section-description">
                Tailored methodology designed specifically for NBFC requirements and resource constraints
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

      {/* Security Areas Checklist */}
      <section className="baseline-controls">
        <div className="container">
          <ScrollReveal direction="up" delay={0} triggerOnce={false}>
            <div className="section-header text-center">
              <h2 className="section-title">Core Security Areas Coverage</h2>
              <p className="section-description">
                Essential security controls for NBFC cyber resilience and RBI compliance
              </p>
            </div>
          </ScrollReveal>

          <div className="controls-checklist">
            <div className="controls-grid">
              {securityAreas.map((area, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 50} triggerOnce={false}>
                  <div className="control-item">
                    <div className="control-check">
                      <CheckCircle size={24} />
                    </div>
                    <span className="control-text">{area}</span>
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
              <h2 className="section-title">Why Choose Cyberaries for NBFC Compliance?</h2>
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
            {/* Traditional NBFC Consulting */}
            <ScrollReveal animation="fade-right" delay={100} triggerOnce={false}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional NBFC Consulting</h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    One-size-fits-all solutions not suited for NBFCs
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Expensive enterprise-grade tools beyond NBFC budgets
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Limited understanding of digital lending operations
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Generic documentation not aligned with RBI guidelines
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Ignores resource and skill constraints
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Leaves NBFCs struggling with implementation
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Cyberaries NBFC Solutions */}
            <ScrollReveal animation="fade-left" delay={200} triggerOnce={false}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">
                  CYBERARIES NBFC Solutions
                </h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Proportionate controls matched to NBFC scale
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Cost-effective solutions within realistic budgets
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Deep digital lending and fintech expertise
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    RBI-specific documentation and evidence management
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Practical implementation with knowledge transfer
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Builds sustainable internal security capabilities
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
              <h2 className="section-title">NBFC Compliance Deliverables</h2>
            </div>
          </ScrollReveal>

          <div className="deliverables-grid">
            <ScrollReveal direction="up" delay={100}>
              <div className="deliverable-card">
                <FileText size={36} />
                <h4>Governance & Policies</h4>
                <ul>
                  <li>Board-approved Cyber Security Policy</li>
                  <li>Risk Management Framework</li>
                  <li>Incident Response Plan</li>
                  <li>Business Continuity Procedures</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="deliverable-card">
                <ShieldCheck size={36} />
                <h4>Technical Controls</h4>
                <ul>
                  <li>Identity and Access Management</li>
                  <li>Data Encryption Implementation</li>
                  <li>Network Security Architecture</li>
                  <li>Mobile App Security Controls</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="deliverable-card">
                <Network size={36} />
                <h4>Third-Party Risk</h4>
                <ul>
                  <li>Vendor Assessment Framework</li>
                  <li>Fintech Partnership Security Guidelines</li>
                  <li>Service Level Agreements with Security Clauses</li>
                  <li>Ongoing Monitoring Procedures</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="deliverable-card">
                <BarChart3 size={36} />
                <h4>Compliance & Reporting</h4>
                <ul>
                  <li>Gap Assessment Report</li>
                  <li>Security Testing Results</li>
                  <li>RBI Compliance Evidence Repository</li>
                  <li>Regular Compliance Status Updates</li>
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
              <h2 className="cta-title">Achieve NBFC Cyber Security Compliance</h2>
              <p className="cta-description">
                Partner with NBFC security specialists for cost-effective, proportionate RBI compliance
              </p>
              <button className="btn btn-primary btn-large">Request NBFC Compliance Assessment</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default RBINBFCGuidelines;