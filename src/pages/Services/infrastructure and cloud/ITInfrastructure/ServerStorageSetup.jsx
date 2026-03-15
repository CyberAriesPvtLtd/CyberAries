import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/vapt-image.jpg';

import {
  Server,
  HardDrive,
  Database,
  RefreshCw,
  BarChart2,
  Lock,
  CheckCircle,
  Award,
  Settings,
  Search,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import './ServerStorageSetup.css';

const approachSteps = [
  {
    title: 'Requirements & Workload Profiling',
    description:
      'Understand application workloads, performance targets, data volumes, and regulatory compliance mandates before any design.',
    icon: <Search size={40} />,
  },
  {
    title: 'Physical Server Provisioning',
    description:
      'Rack, stack, cable, and configure bare-metal servers with hardened OS installations and BIOS/UEFI security baselines.',
    icon: <Server size={40} />,
  },
  {
    title: 'Hypervisor & Virtualization Setup',
    description:
      'Deploy and configure VMware vSphere, Microsoft Hyper-V, or KVM environments with HA clustering and resource optimization.',
    icon: <Cpu size={40} />,
  },
  {
    title: 'SAN / NAS Storage Architecture',
    description:
      'Design and implement Storage Area Networks (SAN) and Network-Attached Storage (NAS) optimized for IOPS, throughput, and redundancy.',
    icon: <HardDrive size={40} />,
  },
  {
    title: 'Database & Application Storage',
    description:
      'Configure tiered storage — NVMe for hot data, SAS/SSD hybrid for warm workloads, and object/tape for cold archive — to balance cost and performance.',
    icon: <Database size={40} />,
  },
  {
    title: 'Storage Security & Encryption',
    description:
      'Implement at-rest encryption, access control lists, and audit logging on all storage systems to meet RBI, DPDPA, and ISO 27001 requirements.',
    icon: <Lock size={40} />,
  },
  {
    title: 'Backup & Disaster Recovery Design',
    description:
      'Configure enterprise backup with defined RPO/RTO, off-site replication, and automated recovery testing procedures.',
    icon: <RefreshCw size={40} />,
  },
  {
    title: 'Capacity Planning & Optimization',
    description:
      'Analyze utilization patterns and design scalable storage tiers to reduce costs while meeting performance SLAs and future growth projections.',
    icon: <BarChart2 size={40} />,
  },
  {
    title: 'OS & System Hardening',
    description:
      'Apply CIS benchmark hardening across all server operating systems, disabling unnecessary services and enforcing least-privilege access.',
    icon: <ShieldCheck size={40} />,
  },
  {
    title: 'Monitoring & Ongoing Support',
    description:
      'Deploy continuous health monitoring, capacity alerts, automated patching, and performance dashboards across all infrastructure.',
    icon: <Settings size={40} />,
  },
];

const whyChooseItems = [
  {
    title: 'Multi-Platform Expertise',
    description:
      'Deep hands-on experience across Dell EMC, HPE, NetApp, VMware, and major cloud-native storage platforms.',
    icon: <Server size={48} strokeWidth={1.5} />,
  },
  {
    title: 'Partnered with CERT-In Empanelled',
    description:
      'Government-recognized security firm delivering compliant infrastructure for BFSI, government, and enterprise clients.',
    icon: <Award size={48} strokeWidth={1.5} />,
  },
  {
    title: 'End-to-End Delivery',
    description:
      'From architecture design and procurement guidance through deployment, hardening, and post-deployment support.',
    icon: <CheckCircle size={48} strokeWidth={1.5} />,
  },
];

const difference = {
  traditional: [
    'Generic server configurations without workload-specific performance tuning.',
    'Flat storage architectures with no tiering, leading to cost overruns.',
    'No at-rest encryption or access control enforcement on storage systems.',
    'Backup configurations untested for recovery or DR scenarios.',
    'Security hardening omitted or applied superficially after deployment.',
    'No capacity planning, causing reactive, disruptive infrastructure expansion.',
  ],
  cyberaries: [
    'Workload-profiled configurations with performance and compliance tuning built in.',
    'Intelligent tiered storage design balancing NVMe, SAS, and archive layers.',
    'Full at-rest encryption, ACLs, and audit logging on every storage system.',
    'Backup configurations with validated RPO/RTO and automated DR run-books.',
    'CIS benchmark hardening applied across all servers and operating systems.',
    'Proactive capacity planning with alerting and scaling policies from day one.',
  ],
};

const ServerStorageSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="sss-page">
      {/* Hero */}
      <section
        className="sss-hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="sss-hero-background" />
        <div className="sss-container">
          <div className="sss-hero-content">
            <p className="sss-hero-subtitle">IT Infrastructure Services</p>
            <h1 className="sss-hero-title">
              SERVER &amp; STORAGE{' '}
              <span className="sss-text-gradient">SETUP &amp; OPTIMIZATION</span>
            </h1>
            <p className="sss-hero-description">
              <strong>Server &amp; Storage Setup</strong> provides enterprise-grade provisioning,
              tiered storage architecture, and disaster recovery solutions designed for{' '}
              <strong>high availability, regulatory compliance, and seamless scalability</strong>{' '}
              across your data environment.
            </p>
            <p className="sss-hero-description">
              Our engineers deliver comprehensive coverage from{' '}
              <strong>bare-metal provisioning and hypervisor configuration</strong> through to
              tiered storage design, backup automation, encryption enforcement, and ongoing
              capacity management.
            </p>
            <div className="sss-hero-actions">
              <button
                className="sss-btn sss-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Plan Your Infrastructure
              </button>
              <button className="sss-btn sss-btn-secondary" type="button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="sss-service-overview">
        <div className="sss-container">
          <div className="sss-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="sss-overview-content">
                <p className="sss-overview-text">
                  At <strong>CyberAries</strong>, we recognize that{' '}
                  <strong>server and storage infrastructure</strong> is the backbone of every
                  business application and data operation. Misconfigured systems, inadequate
                  capacity planning, and absent encryption controls are among the leading causes
                  of both operational failures and data breaches.
                </p>
                <p className="sss-overview-text">
                  We deliver end-to-end infrastructure services — from{' '}
                  <strong>bare-metal provisioning and hypervisor configuration</strong> to tiered
                  storage design, backup automation, and encryption enforcement — ensuring your
                  infrastructure handles peak loads, recovers within defined RPO/RTO windows,
                  and meets the regulatory data protection standards required by RBI, DPDPA, and
                  ISO 27001.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="sss-overview-visual">
                <img
                  src={overviewImage}
                  alt="Server and Storage Setup"
                  className="sss-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="sss-approach-section">
        <div className="sss-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="sss-section-header sss-text-center">
              <h2 className="sss-section-title">Our Approach</h2>
              <p className="sss-section-subtitle">
                A structured infrastructure delivery methodology built for performance, security,
                and compliance
              </p>
            </div>
          </ScrollReveal>
          <div className="sss-approach-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80}>
                <div className="sss-approach-card">
                  <div className="sss-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="sss-card-icon-wrapper">
                    <div className="sss-card-icon">{step.icon}</div>
                  </div>
                  <h3 className="sss-card-title">{step.title}</h3>
                  <p className="sss-card-description">{step.description}</p>
                  <div className="sss-card-decoration" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="sss-why-choose">
        <div className="sss-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="sss-section-header sss-text-center">
              <h2 className="sss-section-title">Why Choose CyberAries?</h2>
            </div>
          </ScrollReveal>
          <div className="sss-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="sss-why-choose-card">
                  <div className="sss-why-choose-icon">{item.icon}</div>
                  <h3 className="sss-why-choose-title">{item.title}</h3>
                  <p className="sss-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="sss-cyberaries-difference">
        <div className="sss-container">
          <ScrollReveal animation="fade-up">
            <h2 className="sss-difference-title">
              THE <span className="sss-highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>
          <div className="sss-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="sss-comparison-column sss-traditional">
                <h3 className="sss-comparison-heading">Traditional Infrastructure Setup</h3>
                <ul className="sss-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="sss-comparison-item" key={idx}>
                      <span className="sss-bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="sss-comparison-column sss-cyberaries-col">
                <h3 className="sss-comparison-heading sss-cyberaries-heading">
                  CyberAries Server &amp; Storage Setup
                </h3>
                <ul className="sss-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="sss-comparison-item" key={idx}>
                      <span className="sss-bullet">•</span>
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
      <section className="sss-cta-section">
        <div className="sss-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="sss-cta-content">
              <h2 className="sss-cta-title">
                Ready to Build Resilient, Secure Server Infrastructure?
              </h2>
              <p className="sss-cta-description">
                Our infrastructure engineers will design and deploy a high-availability server
                and storage environment tailored to your workloads and compliance requirements.
              </p>
              <button
                className="sss-btn sss-btn-primary sss-btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Talk to an Expert
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServerStorageSetup;