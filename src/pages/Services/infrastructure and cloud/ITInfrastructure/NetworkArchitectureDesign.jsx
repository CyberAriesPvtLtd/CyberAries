import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/network-image.jpg';

import {
  Network,
  Shield,
  Layers,
  GitBranch,
  Activity,
  FileText,
  Search,
  Settings,
  CheckCircle,
  Award,
  Globe,
  Lock,
} from 'lucide-react';
import './NetworkArchitectureDesign.css';

const approachSteps = [
  {
    title: 'Discovery & Topology Mapping',
    description:
      'Comprehensive inventory of all network assets, devices, links, and traffic flows across your entire environment.',
    icon: <Search size={40} />,
  },
  {
    title: 'Security Gap Analysis',
    description:
      'Identify misconfigurations, flat network risks, uncontrolled east-west traffic, and compliance gaps in current topology.',
    icon: <Shield size={40} />,
  },
  {
    title: 'Zero Trust Architecture Design',
    description:
      'Apply Zero Trust principles — micro-segmentation, least-privilege access, and explicit verification across every network zone.',
    icon: <Lock size={40} />,
  },
  {
    title: 'SD-WAN & Hybrid Cloud Planning',
    description:
      'Design software-defined WAN overlays and secure hybrid cloud connectivity for AWS, Azure, or GCP integration.',
    icon: <Globe size={40} />,
  },
  {
    title: 'Network Segmentation & Zoning',
    description:
      'Implement DMZs, VLANs, and firewall zones to limit lateral movement and contain potential breach blast radius.',
    icon: <Layers size={40} />,
  },
  {
    title: 'Architecture Blueprint Delivery',
    description:
      'Produce detailed Visio-quality diagrams, IP schemas, and architecture review reports aligned with NIST and ISO 27001.',
    icon: <FileText size={40} />,
  },
  {
    title: 'Redundancy & HA Design',
    description:
      'Engineer redundant paths, failover configurations, and load-balancing to eliminate single points of failure.',
    icon: <GitBranch size={40} />,
  },
  {
    title: 'Traffic Analysis & Optimization',
    description:
      'Baseline traffic patterns, identify bottlenecks, and optimize bandwidth utilization across WAN and cloud-connected links.',
    icon: <Activity size={40} />,
  },
  {
    title: 'Configuration & Hardening',
    description:
      'Apply CIS benchmarks and device-level hardening on routers, switches, and firewalls throughout the implementation.',
    icon: <Settings size={40} />,
  },
  {
    title: 'Validation & Post-Deployment Testing',
    description:
      'Rigorous post-deployment validation with traffic simulation, failover testing, and performance benchmarking.',
    icon: <CheckCircle size={40} />,
  },
];

const whyChooseItems = [
  {
    title: 'Zero Trust Expertise',
    description:
      'Deep knowledge of ZTNA frameworks, micro-segmentation, and identity-driven network access controls.',
    icon: <Shield size={48} strokeWidth={1.5} />,
  },
  {
    title: 'Partnered with CERT-In Empanelled',
    description:
      'Government-recognized security firm with a proven track record across BFSI, government, and enterprise sectors.',
    icon: <Award size={48} strokeWidth={1.5} />,
  },
  {
    title: 'Multi-Vendor Expertise',
    description:
      'Hands-on experience with Cisco, Palo Alto, Fortinet, Juniper, and cloud-native networking platforms.',
    icon: <Network size={48} strokeWidth={1.5} />,
  },
];

const difference = {
  traditional: [
    'Ad-hoc network expansions without documented architecture or design standards.',
    'Flat network topologies with no segmentation, enabling unrestricted lateral movement.',
    'Single points of failure with no failover or redundancy planning.',
    'Security added as an afterthought rather than built into the design.',
    'Generic templates that ignore compliance mandates like RBI, SEBI, or ISO 27001.',
    'No post-deployment validation or traffic analysis after implementation.',
  ],
  cyberaries: [
    'Structured, documented architecture design aligned with industry standards and compliance.',
    'Zero Trust segmentation built into every layer — DMZ, VLAN, and micro-segmentation.',
    'High-availability design with redundant paths, failover, and load balancing.',
    'Security-first approach with CIS hardening applied across all network devices.',
    'Full compliance alignment with RBI, SEBI, NIST, and ISO 27001 network controls.',
    'Post-deployment validation, traffic analysis, and performance benchmarking included.',
  ],
};

const NetworkArchitectureDesign = () => {
  const navigate = useNavigate();

  return (
    <div className="nad-page">
      {/* Hero */}
      <section
        className="nad-hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="nad-hero-background" />
        <div className="nad-container">
          <div className="nad-hero-content">
            <p className="nad-hero-subtitle">IT Infrastructure Services</p>
            <h1 className="nad-hero-title">
              NETWORK ARCHITECTURE{' '}
              <span className="nad-text-gradient">DESIGN & SECURITY</span>
            </h1>
            <p className="nad-hero-description">
              <strong>Network Architecture Design</strong> builds resilient, high-performance network
              topologies that are <strong>secure by default</strong> — incorporating Zero Trust
              principles, robust segmentation, and redundant designs for branches, data centers, and
              multi-cloud environments.
            </p>
            <p className="nad-hero-description">
              Our certified network architects deliver comprehensive blueprints covering{' '}
              <strong>SD-WAN, hybrid cloud connectivity, segmentation, and HA configurations</strong>{' '}
              aligned with NIST, ISO 27001, and RBI regulatory requirements.
            </p>
            <div className="nad-hero-actions">
              <button
                className="nad-btn nad-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Request Architecture Review
              </button>
              <button className="nad-btn nad-btn-secondary" type="button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="nad-service-overview">
        <div className="nad-container">
          <div className="nad-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="nad-overview-content">
                <p className="nad-overview-text">
                  At <strong>CyberAries</strong>, we design network architectures that are{' '}
                  <strong>secure, resilient, and built for scale</strong>. Poorly designed networks —
                  flat topologies, ad-hoc expansions, and absent segmentation — are among the most
                  persistent and costly security liabilities an organization can carry.
                </p>
                <p className="nad-overview-text">
                  We specialize in delivering <strong>Zero Trust network architectures</strong>,
                  SD-WAN designs, hybrid cloud connectivity, and comprehensive segmentation
                  strategies. Our team combines security engineering with network architecture
                  expertise to produce designs that defend against lateral movement, meet compliance
                  mandates, and scale with your business.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="nad-overview-visual">
                <img
                  src={overviewImage}
                  alt="Network Architecture Design"
                  className="nad-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="nad-approach-section">
        <div className="nad-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="nad-section-header nad-text-center">
              <h2 className="nad-section-title">Our Approach</h2>
              <p className="nad-section-subtitle">
                A structured, security-first network design methodology built on Zero Trust and
                industry standards
              </p>
            </div>
          </ScrollReveal>
          <div className="nad-approach-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80}>
                <div className="nad-approach-card">
                  <div className="nad-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="nad-card-icon-wrapper">
                    <div className="nad-card-icon">{step.icon}</div>
                  </div>
                  <h3 className="nad-card-title">{step.title}</h3>
                  <p className="nad-card-description">{step.description}</p>
                  <div className="nad-card-decoration" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="nad-why-choose">
        <div className="nad-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="nad-section-header nad-text-center">
              <h2 className="nad-section-title">Why Choose CyberAries?</h2>
            </div>
          </ScrollReveal>
          <div className="nad-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="nad-why-choose-card">
                  <div className="nad-why-choose-icon">{item.icon}</div>
                  <h3 className="nad-why-choose-title">{item.title}</h3>
                  <p className="nad-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="nad-cyberaries-difference">
        <div className="nad-container">
          <ScrollReveal animation="fade-up">
            <h2 className="nad-difference-title">
              THE <span className="nad-highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>
          <div className="nad-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="nad-comparison-column nad-traditional">
                <h3 className="nad-comparison-heading">Traditional Network Design</h3>
                <ul className="nad-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="nad-comparison-item" key={idx}>
                      <span className="nad-bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="nad-comparison-column nad-cyberaries-col">
                <h3 className="nad-comparison-heading nad-cyberaries-heading">
                  CyberAries Network Architecture Design
                </h3>
                <ul className="nad-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="nad-comparison-item" key={idx}>
                      <span className="nad-bullet">•</span>
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
      <section className="nad-cta-section">
        <div className="nad-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="nad-cta-content">
              <h2 className="nad-cta-title">
                Ready to Build a Resilient, Secure Network?
              </h2>
              <p className="nad-cta-description">
                Our certified network architects will review your environment and deliver a
                future-ready, Zero Trust architecture blueprint.
              </p>
              <button
                className="nad-btn nad-btn-primary nad-btn-large"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Start Architecture Review
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default NetworkArchitectureDesign;