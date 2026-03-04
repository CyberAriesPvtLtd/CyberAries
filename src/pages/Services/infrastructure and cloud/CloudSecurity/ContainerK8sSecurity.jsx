import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/wireless-image.jpg';

import {
  FileText,
  Search,
  Box,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  RefreshCw,
  Award,
  Cloud,
  Server,
  Network
} from 'lucide-react';
import './ContainerK8sSecurity.css';

/**
 * Container & Kubernetes Security Service Page
 * Securing Containerized Applications and Orchestration Platforms
 */

const ContainerK8sSecurity = () => {
  const navigate = useNavigate();

  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Environment Discovery",
      description: "Comprehensive inventory of container images, Kubernetes clusters, and orchestration configurations.",
      icon: <Search size={40} />
    },
    {
      title: "Image Security Scanning",
      description: "Deep analysis of container images for vulnerabilities, malware, and insecure base images.",
      icon: <Box size={40} />
    },
    {
      title: "Configuration Review",
      description: "Assessment of Kubernetes configurations, RBAC policies, network policies, and security contexts.",
      icon: <FileText size={40} />
    },
    {
      title: "Access Control Testing",
      description: "Evaluation of RBAC, service accounts, pod security policies, and authentication mechanisms.",
      icon: <Lock size={40} />
    },
    {
      title: "Network Segmentation Analysis",
      description: "Testing of network policies, service mesh configurations, and inter-pod communication security.",
      icon: <Network size={40} />
    },
    {
      title: "Runtime Security Assessment",
      description: "Analysis of runtime behavior, resource limits, privilege escalation, and container escape risks.",
      icon: <Server size={40} />
    },
    {
      title: "Secrets Management Review",
      description: "Evaluation of how secrets, credentials, and sensitive data are stored and accessed.",
      icon: <Shield size={40} />
    },
    {
      title: "Vulnerability Exploitation",
      description: "Controlled testing of identified weaknesses to demonstrate real-world attack scenarios.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Hardening Recommendations",
      description: "Detailed guidance on security hardening, best practices, and compliance requirements.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Continuous Security Validation",
      description: "Re-testing and validation ensuring security controls remain effective over time.",
      icon: <CheckCircle size={40} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Container Expertise",
      description: "Deep knowledge of Docker, Kubernetes, OpenShift, and container security best practices.",
      icon: <Box size={48} strokeWidth={1.5} />
    },
    {
      title: "CERT-In Empanelled",
      description: "Government-recognized for advanced security auditing and penetration testing.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "DevSecOps Integration",
      description: "Guidance on integrating security into CI/CD pipelines and development workflows.",
      icon: <RefreshCw size={48} strokeWidth={1.5} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Basic image scanning without runtime security and configuration analysis.',
      'Generic Kubernetes security checks without environment-specific testing.',
      'Limited RBAC and privilege escalation assessment coverage.',
      'Superficial network policy review without lateral movement testing.',
      'Reports lack actionable container security and DevSecOps guidance.',
      'No validation of security controls against actual exploitation attempts.'
    ],
    cyberaries: [
      'Comprehensive security assessment covering images, runtime, and configurations.',
      'Environment-aware testing aligned with your Kubernetes architecture and use cases.',
      'Deep RBAC analysis including service accounts, role bindings, and escalation paths.',
      'Thorough network policy testing with lateral movement and container escape scenarios.',
      'Detailed, implementation-ready recommendations with CI/CD security integration.',
      'Real exploitation attempts demonstrating actual risks and business impact.'
    ]
  };

  return (
    <div className="container-k8s-page">
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
              CONTAINER & KUBERNETES SECURITY{' '}
              <span className="text-gradient">
                SECURE ORCHESTRATION
              </span>
            </h1>
            <p className="hero-description">
              <strong>Container & Kubernetes Security</strong> ensures your containerized applications and orchestration platforms are
              <strong> secure, compliant, and resilient</strong> against evolving threats. Protect Docker containers, Kubernetes clusters,
              and cloud-native infrastructure from misconfigurations, vulnerabilities, and attacks.
            </p>
            <p className="hero-description">
              Our comprehensive assessment covers <strong>container images, RBAC policies, network segmentation, secrets management,
              and runtime security</strong>, providing detailed recommendations to strengthen your cloud-native security posture.
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
                  At <strong>Cyberaries</strong>, we conduct thorough <strong>container and Kubernetes security assessments</strong>
                  to identify and remediate vulnerabilities, misconfigurations, and security gaps across your cloud-native infrastructure.
                  Our approach combines automated scanning with expert manual validation for comprehensive security coverage.
                </p>
                <p className="overview-text">
                  We help organizations achieve <strong>secure, compliant, and well-architected container environments</strong>
                  aligned with CIS benchmarks and industry best practices. <strong>Cyberaries</strong> delivers detailed reporting,
                  DevSecOps guidance, and ongoing advisory support for continuous security improvement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img
                  src={overviewImage}
                  alt="Container & Kubernetes Security"
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
                Comprehensive container and Kubernetes security assessment methodology
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
                <h3 className="comparison-heading">Traditional Container Security</h3>
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
                  Cyberaries Container & K8s Security
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
                Ready to Secure Your Container Environment?
              </h2>
              <p className="cta-description">
                Protect Kubernetes clusters and containerized applications with comprehensive security.
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

export default ContainerK8sSecurity;
