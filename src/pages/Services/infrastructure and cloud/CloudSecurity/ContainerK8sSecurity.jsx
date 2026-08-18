import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/cloud-security-hero.webp';
import overviewImage from '../../../../images/services/vapt/wireless-image.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { FileText,
  Search,
  Box,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  RefreshCw,
  Award,
  Server,
  Network,
  ArrowRight, Landmark } from 'lucide-react';
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
      icon: <Search size={30} />
    },
    {
      title: "Image Security Scanning",
      description: "Deep analysis of container images for vulnerabilities, malware, and insecure base images.",
      icon: <Box size={30} />
    },
    {
      title: "Configuration Review",
      description: "Assessment of Kubernetes configurations, RBAC policies, network policies, and security contexts.",
      icon: <FileText size={30} />
    },
    {
      title: "Access Control Testing",
      description: "Evaluation of RBAC, service accounts, pod security policies, and authentication mechanisms.",
      icon: <Lock size={30} />
    },
    {
      title: "Network Segmentation Analysis",
      description: "Testing of network policies, service mesh configurations, and inter pod communication security.",
      icon: <Network size={30} />
    },
    {
      title: "Runtime Security Assessment",
      description: "Analysis of runtime behavior, resource limits, privilege escalation, and container escape risks.",
      icon: <Server size={30} />
    },
    {
      title: "Secrets Management Review",
      description: "Evaluation of how secrets, credentials, and sensitive data are stored and accessed.",
      icon: <Shield size={30} />
    },
    {
      title: "Vulnerability Exploitation",
      description: "Controlled testing of identified weaknesses to demonstrate real-world attack scenarios.",
      icon: <AlertTriangle size={30} />
    },
    {
      title: "Hardening Recommendations",
      description: "Detailed guidance on security hardening, best practices, and compliance requirements.",
      icon: <FileCheck size={30} />
    },
    {
      title: "Continuous Security Validation",
      description: "Re-testing and validation ensuring security controls remain effective over time.",
      icon: <CheckCircle size={30} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "Container Expertise",
      description: "Deep knowledge of Docker, Kubernetes, OpenShift, and container security best practices.",
      icon: <Box size={30} strokeWidth={1.75} />
    },
    {
      title: "Partnered with CERT In Empanelled",
      description: "Government recognized for advanced security auditing and penetration testing.",
      icon: <Award size={30} strokeWidth={1.75} />
    },
    {
      title: "DevSecOps Integration",
      description: "Guidance on integrating security into CI/CD pipelines and development workflows.",
      icon: <RefreshCw size={30} strokeWidth={1.75} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Basic image scanning without runtime security and configuration analysis.',
      'Generic Kubernetes security checks without environment specific testing.',
      'Limited RBAC and privilege escalation assessment coverage.',
      'Superficial network policy review without lateral movement testing.',
      'Reports lack actionable container security and DevSecOps guidance.',
      'No validation of security controls against actual exploitation attempts.'
    ],
    cyberaries: [
      'Comprehensive security assessment covering images, runtime, and configurations.',
      'Environment aware testing aligned with your Kubernetes architecture and use cases.',
      'Deep RBAC analysis including service accounts, role bindings, and escalation paths.',
      'Thorough network policy testing with lateral movement and container escape scenarios.',
      'Detailed, implementation-ready recommendations with CI/CD security integration.',
      'Real exploitation attempts demonstrating actual risks and business impact.'
    ]
  };

  return (
    <div className="k8s-page">
      {/* Hero Section */}
      <section className="k8s-hero-section">
        <div
          className="k8s-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="k8s-hero-overlay" />
        <div className="k8s-hero-grid-pattern" />
        {/* Floating particles */}
        <div className="k8s-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="k8s-hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="k8s-container">
          <div className="k8s-hero-content">
            <div className="k8s-hero-badge">
                  <Landmark size={14} className="k8s-badge-icon" />
                  <span className="k8s-badge-text">
                    INFRASTRUCTURE & CLOUD <span className="k8s-badge-divider">/</span> CLOUD SECURITY
                  </span>
                </div>
            <h1 className="k8s-hero-title">
              <span className="k8s-text-gradient">
                CONTAINER &amp; KUBERNETES SECURITY <br />
                &amp; SECURE ORCHESTRATION
              </span>
            </h1>
            <p className="k8s-hero-description">
              <strong>Container &amp; Kubernetes Security</strong> ensures your containerized applications and orchestration platforms are{' '}
              <strong>secure, compliant, and resilient</strong> against evolving threats. Protect Docker containers, Kubernetes clusters,
              and cloud native infrastructure from misconfigurations, vulnerabilities, and attacks.
            </p>
            <p className="k8s-hero-description">
              Our comprehensive assessment covers <strong>container images, RBAC policies, network segmentation, secrets management,
                and runtime security</strong>, providing detailed recommendations to strengthen your cloud native security posture.
            </p>
            <div className="k8s-hero-actions">
              <button
                className="k8s-btn k8s-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Plan Your Assessment
                <ArrowRight size={16} className="k8s-btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="k8s-service-overview">
        <div className="k8s-container">
          <div className="k8s-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="k8s-overview-content">
                <p className="k8s-overview-text">
                  At <strong>Cyberaries</strong>, we conduct thorough <strong>container and Kubernetes security assessments</strong>{' '}
                  to identify and remediate vulnerabilities, misconfigurations, and security gaps across your cloud-native infrastructure.
                  Our approach combines automated scanning with expert manual validation for comprehensive security coverage.
                </p>
                <p className="k8s-overview-text">
                  We help organizations achieve <strong>secure, compliant, and well architected container environments</strong>{' '}
                  aligned with CIS benchmarks and industry best practices. <strong>Cyberaries</strong> delivers detailed reporting,
                  DevSecOps guidance, and ongoing advisory support for continuous security improvement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="k8s-overview-visual">
                <img
                  src={overviewImage}
                  alt="Container & Kubernetes Security"
                  className="k8s-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Horizontal Timeline */}
      <section className="k8s-approach-section">
        <div className="k8s-grid-pattern" />
        <div className="k8s-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="k8s-section-header k8s-text-center">
              <p className="k8s-eyebrow">Our Approach</p>
              <h2 className="k8s-approach-title">A Security First Architecture Methodology</h2>
              <p className="k8s-approach-subtitle">
                A structured, security first approach to designing resilient, scalable,
                and future ready network architectures.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="k8s-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="k8s-method-card" key={index}>
                  <div className="k8s-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="k8s-method-connector" />}
                  <div className="k8s-method-icon">{step.icon}</div>
                  <h3 className="k8s-method-title">{step.title}</h3>
                  <p className="k8s-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–10 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="k8s-method-row">
              {approachSteps.slice(5, 10).map((step, index) => (
                <div className="k8s-method-card" key={index + 5}>
                  <div className="k8s-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 4 && <span className="k8s-method-connector" />}
                  <div className="k8s-method-icon">{step.icon}</div>
                  <h3 className="k8s-method-title">{step.title}</h3>
                  <p className="k8s-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="k8s-method-footer">
              <div className="k8s-method-footer-icon">
                <Shield size={22} />
              </div>
              <p className="k8s-method-footer-text">
                Our container security testing ensures complete verification of registry controls, RBAC authorization boundaries, and runtime execution namespaces.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="k8s-why-choose">
        <div className="k8s-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="k8s-section-header k8s-text-center">
              <p className="k8s-why-eyebrow">Why CyberAries</p>
              <h2 className="k8s-section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="k8s-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="k8s-why-choose-card">
                  <div className="k8s-why-choose-card-header">
                    <div className="k8s-why-choose-icon-box">{item.icon}</div>
                    <h3 className="k8s-why-choose-title">{item.title}</h3>
                  </div>
                  <p className="k8s-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="k8s-cyberaries-difference">
        <div className="k8s-container">
          <ScrollReveal animation="fade-up">
            <h2 className="k8s-difference-title">
              THE <span className="k8s-highlight-red">CYBERARIES</span>{' '}
              DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="k8s-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="k8s-comparison-column k8s-traditional">
                <h3 className="k8s-comparison-heading">Traditional Container Security</h3>
                <ul className="k8s-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="k8s-comparison-item" key={idx}>
                      <span className="k8s-bullet k8s-bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="k8s-comparison-column k8s-cyberaries-col">
                <h3 className="k8s-comparison-heading k8s-cyberaries-heading">
                  Cyberaries Container &amp; K8s Security
                </h3>
                <ul className="k8s-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="k8s-comparison-item" key={idx}>
                      <span className="k8s-bullet k8s-bullet-check">
                        <CheckCircle size={18} className="k8s-check-icon" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="k8s-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="k8s-cta-grid-pattern" />
        <div className="k8s-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="k8s-cta-grid">
              <div className="k8s-cta-content">
                <h2 className="k8s-cta-title">
                  <span className="k8s-cta-text-gradient">Ready to Secure Your Container Environment?</span>
                </h2>
                <p className="k8s-cta-description">
                  Protect Kubernetes clusters and containerized applications with comprehensive security.
                </p>
                <button
                  className="k8s-btn k8s-btn-primary k8s-btn-large"
                  type="button"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us Today
                  <ArrowRight size={18} className="k8s-btn-arrow" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContainerK8sSecurity;
