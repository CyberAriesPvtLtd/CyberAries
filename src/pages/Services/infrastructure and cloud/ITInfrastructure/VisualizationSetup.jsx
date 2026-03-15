import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/code-image.jpg';

import {
  Cpu,
  Layers,
  Container,
  Lock,
  Monitor,
  BarChart2,
  CheckCircle,
  Award,
  Settings,
  Search,
  Activity,
  Shield,
} from 'lucide-react';
import './VisualizationSetup.css';

const approachSteps = [
  {
    title: 'Workload Assessment & Profiling',
    description:
      'Profile application workloads, resource requirements, licensing constraints, and regulatory data residency mandates.',
    icon: <Search size={40} />,
  },
  {
    title: 'Platform Selection & Architecture',
    description:
      'Recommend and design the optimal hypervisor or container platform — VMware, Hyper-V, KVM, or Kubernetes — based on your environment and budget.',
    icon: <Layers size={40} />,
  },
  {
    title: 'VMware vSphere / ESXi Deployment',
    description:
      'Deploy enterprise VMware environments with vCenter, vMotion, DRS, and HA clustering for seamless VM lifecycle management.',
    icon: <Cpu size={40} />,
  },
  {
    title: 'Microsoft Hyper-V & Azure Stack HCI',
    description:
      'Implement Hyper-V clusters with failover clustering, Storage Spaces Direct (S2D), and seamless integration with Azure hybrid services.',
    icon: <Monitor size={40} />,
  },
  {
    title: 'KVM / Proxmox Open-Source Virtualization',
    description:
      'Set up KVM or Proxmox VE environments for cost-effective virtualization with live migration and CEPH storage integration.',
    icon: <Activity size={40} />,
  },
  {
    title: 'Container Platform Setup (Docker / K8s)',
    description:
      'Deploy Docker Swarm and Kubernetes clusters for microservices, enabling rapid deployment with security hardening and RBAC.',
    icon: <Container size={40} />,
  },
  {
    title: 'VM Security Hardening & Isolation',
    description:
      'Enforce hypervisor-level isolation, disable unnecessary VM features, and apply CIS benchmarks across all virtual machine configurations.',
    icon: <Lock size={40} />,
  },
  {
    title: 'High Availability & Failover Configuration',
    description:
      'Configure HA clustering, live migration, and automated failover to eliminate planned and unplanned downtime for critical workloads.',
    icon: <Shield size={40} />,
  },
  {
    title: 'Virtual Infrastructure Monitoring',
    description:
      'Configure real-time performance dashboards and alerting for CPU, memory, storage, and network across all virtualized workloads.',
    icon: <BarChart2 size={40} />,
  },
  {
    title: 'Capacity Management & Scaling',
    description:
      'Implement capacity policies and resource pools with automated scaling triggers to optimize utilization and reduce infrastructure costs.',
    icon: <Settings size={40} />,
  },
];

const whyChooseItems = [
  {
    title: 'Multi-Hypervisor Expertise',
    description:
      'Certified engineers across VMware, Microsoft Hyper-V, KVM, Proxmox, Docker, and Kubernetes platforms.',
    icon: <Cpu size={48} strokeWidth={1.5} />,
  },
  {
    title: 'Partnered with CERT-In Empanelled',
    description:
      'Government-recognized security firm with proven virtualization deployments across BFSI, government, and enterprise clients.',
    icon: <Award size={48} strokeWidth={1.5} />,
  },
  {
    title: 'Security-First Deployment',
    description:
      'CIS benchmark hardening, hypervisor isolation, and RBAC applied to every virtual layer from day one.',
    icon: <CheckCircle size={48} strokeWidth={1.5} />,
  },
];

const difference = {
  traditional: [
    'Hypervisors deployed without CIS hardening, leaving VM escape vulnerabilities.',
    'Flat VM network with no segmentation, allowing cross-VM lateral movement.',
    'No HA or live migration configuration, causing downtime on hardware failures.',
    'Template sprawl and ungoverned VM provisioning leading to resource exhaustion.',
    'No centralized monitoring or alerting on virtualization layer health.',
    'Compliance mandates ignored in VM configurations and data residency placement.',
  ],
  cyberaries: [
    'CIS benchmark hardening applied to every hypervisor and guest OS on deployment.',
    'VM network segmentation with security zones, micro-segmentation, and RBAC.',
    'HA clustering and live migration configured and tested before go-live.',
    'Governed VM provisioning with templates, resource pools, and capacity policies.',
    'Centralized dashboards and alerting for CPU, memory, storage, and network health.',
    'Data residency and compliance controls baked into VM placement and storage policies.',
  ],
};

const VisualizationSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="virt-page">
      {/* Hero */}
      <section
        className="virt-hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="virt-hero-background" />
        <div className="virt-container">
          <div className="virt-hero-content">
            <p className="virt-hero-subtitle">IT Infrastructure Services</p>
            <h1 className="virt-hero-title">
              VIRTUALIZATION &amp;{' '}
              <span className="virt-text-gradient">PLATFORM SETUP</span>
            </h1>
            <p className="virt-hero-description">
              <strong>Virtualization &amp; Platform Setup</strong> delivers enterprise-grade
              hypervisor and container deployments across VMware, Hyper-V, KVM, and Kubernetes —
              enabling <strong>workload consolidation, rapid provisioning, and security-hardened
                isolation</strong> for modern IT environments.
            </p>
            <p className="virt-hero-description">
              Our certified engineers deploy every platform with{' '}
              <strong>CIS hardening, HA clustering, and compliance controls</strong> built in —
              meeting RBI, DPDPA, and ISO 27001 data residency and security requirements.
            </p>
            <div className="virt-hero-actions">
              <button
                className="virt-btn virt-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Plan Your Virtual Environment
              </button>
              <button className="virt-btn virt-btn-secondary" type="button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="virt-service-overview">
        <div className="virt-container">
          <div className="virt-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="virt-overview-content">
                <p className="virt-overview-text">
                  At <strong>CyberAries</strong>, we design and deploy virtualization environments
                  that are <strong>secure, resilient, and built for scale</strong>. Poorly
                  configured hypervisors, unsegmented VM networks, and absent security hardening
                  expose organizations to lateral movement attacks and data leakage across
                  workloads.
                </p>
                <p className="virt-overview-text">
                  We specialize in enterprise virtualization — from single-site VMware clusters
                  to <strong>multi-cloud Kubernetes orchestration</strong> — built around
                  performance, security, and compliance. Our team holds certifications across
                  VMware, Microsoft, and cloud-native platforms, ensuring every deployment meets
                  CIS hardening benchmarks and regulatory data residency requirements.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="virt-overview-visual">
                <img
                  src={overviewImage}
                  alt="Virtualization Platform Setup"
                  className="virt-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="virt-approach-section">
        <div className="virt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="virt-section-header virt-text-center">
              <h2 className="virt-section-title">Our Approach</h2>
              <p className="virt-section-subtitle">
                A structured virtualization methodology covering all major hypervisors and
                container platforms with security hardening at every layer
              </p>
            </div>
          </ScrollReveal>
          <div className="virt-approach-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80}>
                <div className="virt-approach-card">
                  <div className="virt-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="virt-card-icon-wrapper">
                    <div className="virt-card-icon">{step.icon}</div>
                  </div>
                  <h3 className="virt-card-title">{step.title}</h3>
                  <p className="virt-card-description">{step.description}</p>
                  <div className="virt-card-decoration" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="virt-why-choose">
        <div className="virt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="virt-section-header virt-text-center">
              <h2 className="virt-section-title">Why Choose CyberAries?</h2>
            </div>
          </ScrollReveal>
          <div className="virt-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="virt-why-choose-card">
                  <div className="virt-why-choose-icon">{item.icon}</div>
                  <h3 className="virt-why-choose-title">{item.title}</h3>
                  <p className="virt-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="virt-cyberaries-difference">
        <div className="virt-container">
          <ScrollReveal animation="fade-up">
            <h2 className="virt-difference-title">
              THE <span className="virt-highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>
          <div className="virt-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="virt-comparison-column virt-traditional">
                <h3 className="virt-comparison-heading">Traditional Virtualization Setup</h3>
                <ul className="virt-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="virt-comparison-item" key={idx}>
                      <span className="virt-bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="virt-comparison-column virt-cyberaries-col">
                <h3 className="virt-comparison-heading virt-cyberaries-heading">
                  CyberAries Virtualization &amp; Platform Setup
                </h3>
                <ul className="virt-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="virt-comparison-item" key={idx}>
                      <span className="virt-bullet">•</span>
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
      <section className="virt-cta-section">
        <div className="virt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="virt-cta-content">
              <h2 className="virt-cta-title">
                Ready to Modernize Your Infrastructure with Virtualization?
              </h2>
              <p className="virt-cta-description">
                Our certified virtualization engineers will design and deploy a secure,
                high-performance virtual environment tailored to your workloads and compliance
                requirements.
              </p>
              <button
                className="virt-btn virt-btn-primary virt-btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Schedule a Demo
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default VisualizationSetup;