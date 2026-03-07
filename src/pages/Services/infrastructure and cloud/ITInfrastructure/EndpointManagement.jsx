import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/wireless-image.jpg';

import {
  Monitor,
  Shield,
  Radio,
  FileText,
  Search,
  AlertTriangle,
  CheckCircle,
  Award,
  Settings,
  Lock,
  RefreshCw,
  Cpu,
} from 'lucide-react';
import './EndpointManagement.css';

const approachSteps = [
  {
    title: 'Asset Discovery & Inventory',
    description:
      'Identify and catalog all endpoints across your enterprise — including shadow IT devices, BYOD mobiles, IoT, and legacy systems.',
    icon: <Search size={40} />,
  },
  {
    title: 'Risk & Vulnerability Assessment',
    description:
      'Evaluate existing vulnerabilities, misconfigurations, patch gaps, and compliance deficiencies across all discovered endpoints.',
    icon: <AlertTriangle size={40} />,
  },
  {
    title: 'Endpoint Security Hardening',
    description:
      'Apply CIS benchmarks, disable unnecessary ports and services, enforce disk encryption policies, and eliminate attack surfaces on every device.',
    icon: <Lock size={40} />,
  },
  {
    title: 'Device Lifecycle Management',
    description:
      'End-to-end provisioning, configuration, monitoring, and decommissioning of all endpoint devices across your enterprise environment.',
    icon: <Cpu size={40} />,
  },
  {
    title: 'Patch & Vulnerability Management',
    description:
      'Automated patch deployment and vulnerability scanning to ensure all endpoints remain updated, hardened, and compliant at all times.',
    icon: <RefreshCw size={40} />,
  },
  {
    title: 'Remote Monitoring & Control',
    description:
      'Real-time visibility and remote remediation capabilities across desktops, laptops, mobile devices, and IoT endpoints from a single console.',
    icon: <Radio size={40} />,
  },
  {
    title: 'Policy & Compliance Enforcement',
    description:
      'Centrally define and enforce security policies aligned with ISO 27001, NIST, and RBI guidelines across all devices in your fleet.',
    icon: <FileText size={40} />,
  },
  {
    title: 'Threat Detection & Response (EDR)',
    description:
      'Deploy advanced EDR solutions for behavioral analysis, threat hunting, and automated incident response at the endpoint layer.',
    icon: <Shield size={40} />,
  },
  {
    title: 'Mobile Device Management (MDM)',
    description:
      'Govern BYOD and corporate mobile devices with containerization, remote wipe, app management, and compliance enforcement policies.',
    icon: <Monitor size={40} />,
  },
  {
    title: 'Continuous Monitoring & Reporting',
    description:
      'Unified dashboard for all device health, compliance status, threat alerts, and patch posture across distributed environments.',
    icon: <Settings size={40} />,
  },
];

const whyChooseItems = [
  {
    title: 'Zero Blind Spots',
    description:
      'Comprehensive asset discovery including shadow IT and BYOD devices for complete endpoint visibility across your organization.',
    icon: <Monitor size={48} strokeWidth={1.5} />,
  },
  {
    title: 'CERT-In Empanelled',
    description:
      'Government-recognized security firm with proven endpoint security deployments across BFSI, government, and enterprise sectors.',
    icon: <Award size={48} strokeWidth={1.5} />,
  },
  {
    title: 'Automated Compliance',
    description:
      'Continuous policy enforcement and automated reporting aligned with RBI, SEBI, DPDPA, and ISO 27001 endpoint security requirements.',
    icon: <CheckCircle size={48} strokeWidth={1.5} />,
  },
];

const difference = {
  traditional: [
    'Reactive patch management leaving devices vulnerable for weeks or months.',
    'No visibility into BYOD, remote worker, or IoT endpoint devices.',
    'Endpoint security treated as an add-on, not built into the device lifecycle.',
    'Manual compliance checks that are infrequent, inconsistent, and error-prone.',
    'No behavioral analysis or EDR, relying solely on signature-based antivirus.',
    'Zero centralized visibility, making incident response slow and disorganized.',
  ],
  cyberaries: [
    'Automated patch deployment ensuring all endpoints are updated and hardened.',
    'Full visibility across BYOD, remote, IoT, and shadow IT devices from day one.',
    'Security hardening integrated into the device provisioning and lifecycle process.',
    'Continuous automated compliance monitoring aligned with RBI, SEBI, and ISO 27001.',
    'Advanced EDR with behavioral analysis, threat hunting, and auto-remediation.',
    'Single-pane-of-glass dashboard for all devices, alerts, and compliance status.',
  ],
};

const EndpointManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="epm-page">
      {/* Hero */}
      <section
        className="epm-hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="epm-hero-background" />
        <div className="epm-container">
          <div className="epm-hero-content">
            <p className="epm-hero-subtitle">IT Infrastructure Services</p>
            <h1 className="epm-hero-title">
              ENDPOINT MANAGEMENT{' '}
              <span className="epm-text-gradient">&amp; SECURITY</span>
            </h1>
            <p className="epm-hero-description">
              <strong>Endpoint Management</strong> delivers comprehensive lifecycle management,
              hardening, and real-time monitoring of every device in your enterprise —{' '}
              <strong>from desktops to IoT endpoints</strong> — ensuring zero blind spots, full
              compliance, and rapid incident response.
            </p>
            <p className="epm-hero-description">
              Our holistic <strong>Unified Endpoint Management (UEM)</strong> framework combines
              device management, security hardening, patch automation, EDR, and compliance
              monitoring into a single, streamlined operation aligned with RBI, SEBI, and
              ISO 27001 mandates.
            </p>
            <div className="epm-hero-actions">
              <button
                className="epm-btn epm-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Get a Free Assessment
              </button>
              <button className="epm-btn epm-btn-secondary" type="button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="epm-service-overview">
        <div className="epm-container">
          <div className="epm-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="epm-overview-content">
                <p className="epm-overview-text">
                  At <strong>CyberAries</strong>, we recognize that endpoints are the{' '}
                  <strong>most targeted entry points for cyberattacks</strong>. Unmanaged or
                  misconfigured devices — including remote work laptops, BYOD mobiles, and legacy
                  systems — create critical gaps in your security posture that adversaries
                  actively exploit.
                </p>
                <p className="epm-overview-text">
                  We deliver a holistic UEM framework that combines{' '}
                  <strong>device management, security hardening, patch automation, and
                    compliance monitoring</strong> into a single streamlined operation — helping
                  organizations in BFSI, government, and enterprise sectors achieve complete
                  endpoint visibility and control while meeting stringent regulatory mandates.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="epm-overview-visual">
                <img
                  src={overviewImage}
                  alt="Endpoint Management and Security"
                  className="epm-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="epm-approach-section">
        <div className="epm-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="epm-section-header epm-text-center">
              <h2 className="epm-section-title">Our Approach</h2>
              <p className="epm-section-subtitle">
                A comprehensive endpoint lifecycle methodology covering discovery, hardening,
                patching, EDR, and continuous compliance monitoring
              </p>
            </div>
          </ScrollReveal>
          <div className="epm-approach-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80}>
                <div className="epm-approach-card">
                  <div className="epm-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="epm-card-icon-wrapper">
                    <div className="epm-card-icon">{step.icon}</div>
                  </div>
                  <h3 className="epm-card-title">{step.title}</h3>
                  <p className="epm-card-description">{step.description}</p>
                  <div className="epm-card-decoration" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="epm-why-choose">
        <div className="epm-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="epm-section-header epm-text-center">
              <h2 className="epm-section-title">Why Choose CyberAries?</h2>
            </div>
          </ScrollReveal>
          <div className="epm-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="epm-why-choose-card">
                  <div className="epm-why-choose-icon">{item.icon}</div>
                  <h3 className="epm-why-choose-title">{item.title}</h3>
                  <p className="epm-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="epm-cyberaries-difference">
        <div className="epm-container">
          <ScrollReveal animation="fade-up">
            <h2 className="epm-difference-title">
              THE <span className="epm-highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>
          <div className="epm-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="epm-comparison-column epm-traditional">
                <h3 className="epm-comparison-heading">Traditional Endpoint Management</h3>
                <ul className="epm-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="epm-comparison-item" key={idx}>
                      <span className="epm-bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="epm-comparison-column epm-cyberaries-col">
                <h3 className="epm-comparison-heading epm-cyberaries-heading">
                  CyberAries Endpoint Management &amp; Security
                </h3>
                <ul className="epm-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="epm-comparison-item" key={idx}>
                      <span className="epm-bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="epm-cta-section">
        <div className="epm-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="epm-cta-content">
              <h2 className="epm-cta-title">
                Ready to Secure Every Endpoint in Your Organization?
              </h2>
              <p className="epm-cta-description">
                Our team of certified security engineers will assess your current endpoint
                posture and deliver a tailored management and security strategy.
              </p>
              <button
                className="epm-btn epm-btn-primary epm-btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Schedule a Consultation
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default EndpointManagement;