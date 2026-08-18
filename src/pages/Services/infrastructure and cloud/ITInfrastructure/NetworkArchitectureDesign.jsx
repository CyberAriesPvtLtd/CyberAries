import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/network-architecture-hero.webp';
import overviewIsometricImage from '../../../../images/services/vapt/network-overview.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { Network,
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
  ArrowRight, Landmark } from 'lucide-react';
import './NetworkArchitectureDesign.css';


const approachSteps = [
  {
    title: 'Discovery & Topology Mapping',
    description:
      'Comprehensive inventory of all network assets, devices, links, and traffic flows across your entire environment.',
    icon: <Search size={26} />,
  },
  {
    title: 'Security Gap Analysis',
    description:
      'Identify misconfigurations, flat network risks, uncontrolled east west traffic, and compliance gaps in current topology.',
    icon: <Shield size={26} />,
  },
  {
    title: 'Zero Trust Architecture Design',
    description:
      'Apply Zero Trust principles micro segmentation, least privilege access, and explicit verification across every network zone.',
    icon: <Lock size={26} />,
  },
  {
    title: 'SD WAN & Hybrid Cloud Planning',
    description:
      'Design software defined WAN overlays and secure hybrid cloud connectivity for AWS, Azure, or GCP integration.',
    icon: <Globe size={26} />,
  },
  {
    title: 'Network Segmentation & Zoning',
    description:
      'Implement DMZs, VLANs, and firewall zones to limit lateral movement and contain potential breach blast radius.',
    icon: <Layers size={26} />,
  },
  {
    title: 'Architecture Blueprint Delivery',
    description:
      'Produce detailed Visio-quality diagrams, IP schemas, and architecture review reports aligned with NIST and ISO 27001.',
    icon: <FileText size={26} />,
  },
  {
    title: 'Redundancy & HA Design',
    description:
      'Engineer redundant paths, failover configurations, and load balancing to eliminate single points of failure.',
    icon: <GitBranch size={26} />,
  },
  {
    title: 'Traffic Analysis & Optimization',
    description:
      'Baseline traffic patterns, identify bottlenecks, and optimize bandwidth utilization across WAN and cloud-connected links.',
    icon: <Activity size={26} />,
  },
  {
    title: 'Configuration & Hardening',
    description:
      'Apply CIS benchmarks and device-level hardening on routers, switches, and firewalls throughout the implementation.',
    icon: <Settings size={26} />,
  },
  {
    title: 'Validation & Post Deployment Testing',
    description:
      'Rigorous post deployment validation with traffic simulation, failover testing, and performance benchmarking.',
    icon: <CheckCircle size={26} />,
  },
];

const whyChooseItems = [
  {
    title: 'Zero Trust Expertise',
    description:
      'Deep knowledge of ZTNA frameworks, micro segmentation, and identity driven network access controls.',
    icon: <Shield size={30} strokeWidth={1.75} />,
  },
  {
    title: 'Partnered with CERT In Empanelled',
    description:
      'Government recognized security firm with a proven track record across BFSI, government, and enterprise sectors.',
    icon: <Award size={30} strokeWidth={1.75} />,
  },
  {
    title: 'Multi Vendor Expertise',
    description:
      'Hands on experience with Cisco, Palo Alto, Fortinet, Juniper, and cloud native networking platforms.',
    icon: <Network size={30} strokeWidth={1.75} />,
  },
];

const difference = {
  traditional: [
    'Ad hoc network expansions without documented architecture or design standards.',
    'Flat network topologies with no segmentation, enabling unrestricted lateral movement.',
    'Single points of failure with no failover or redundancy planning.',
    'Security added as an afterthought rather than built into the design.',
    'Generic templates that ignore compliance mandates like RBI, SEBI, or ISO 27001.',
    'No post-deployment validation or traffic analysis after implementation.',
  ],
  cyberaries: [
    'Structured, documented architecture design aligned with industry standards and compliance.',
    'Zero Trust segmentation built into every layer DMZ, VLAN, and micro segmentation.',
    'High availability design with redundant paths, failover, and load balancing.',
    'Security first approach with CIS hardening applied across all network devices.',
    'Full compliance alignment with RBI, SEBI, NIST, and ISO 27001 network controls.',
    'Post deployment validation, traffic analysis, and performance benchmarking included.',
  ],
};


/* Decorative CTA icon: shield + lock with radial rings */
const CtaIconGraphic = () => (
  <svg
    className="nad-cta-icon-svg"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Secure network shield illustration"
  >
    <defs>
      <radialGradient id="nadCtaGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#nadCtaGlow)" />
    <circle cx="100" cy="100" r="85" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.35" />
    <circle cx="100" cy="100" r="65" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.45" />
    <circle cx="100" cy="100" r="45" fill="none" stroke="#C1121F" strokeWidth="1.2" opacity="0.6" />
    <g transform="translate(100,100)">
      <path
        d="M0 -26 l22 8 v20 c0 15 -11 24 -22 29 c-11 -5 -22 -14 -22 -29 v-20z"
        fill="none"
        stroke="#ff5555"
        strokeWidth="2"
      />
      <rect x="-8" y="-2" width="16" height="13" rx="2" fill="none" stroke="#ff5555" strokeWidth="2" />
      <path d="M-5 -2 v-4 a5 5 0 0 1 10 0 v4" fill="none" stroke="#ff5555" strokeWidth="2" />
      <circle cx="0" cy="4" r="1.6" fill="#ff5555" />
    </g>
  </svg>
);

const NetworkArchitectureDesign = () => {
  const navigate = useNavigate();

  return (
    <div className="nad-page">
      {/* Hero */}
      <section className="nad-hero-section">
        <div
          className="nad-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="nad-hero-overlay" />
        <div className="nad-hero-grid-pattern" />
        {/* Floating particles */}
        <div className="nad-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="nad-hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="nad-container">
          <div className="nad-hero-content">
            <div className="nad-hero-badge">
                  <Landmark size={14} className="nad-badge-icon" />
                  <span className="nad-badge-text">
                    INFRASTRUCTURE & CLOUD <span className="nad-badge-divider">/</span> IT INFRASTRUCTURE
                  </span>
                </div>
            <h1 className="nad-hero-title">
              <span className="nad-text-gradient">
                NETWORK ARCHITECTURE <br />
                DESIGN &amp; SECURITY
              </span>
            </h1>
            <p className="nad-hero-description">
              <strong>Network Architecture Design</strong> builds resilient, high performance network
              topologies that are <strong>secure by default</strong> incorporating Zero Trust
              principles, robust segmentation, and redundant designs for branches, data centers, and
              multi cloud environments.
            </p>
            <p className="nad-hero-description">
              Our certified network architects deliver comprehensive blueprints covering{' '}
              <strong>SD WAN, hybrid cloud connectivity, segmentation, and HA configurations</strong>{' '}
              aligned with NIST, ISO 27001, and RBI regulatory requirements.
            </p>
            <div className="nad-hero-actions">
              <button
                className="nad-btn nad-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Request Architecture Review
                <ArrowRight size={16} className="nad-btn-arrow" />
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
                  <strong>secure, resilient, and built for scale</strong>. Poorly designed networks flat topologies, ad hoc expansions, and absent segmentation are among the most
                  persistent and costly security liabilities an organization can carry.
                </p>
                <p className="nad-overview-text">
                  We specialize in delivering <strong>Zero Trust network architectures</strong>,
                  SD WAN designs, hybrid cloud connectivity, and comprehensive segmentation
                  strategies. Our team combines security engineering with network architecture
                  expertise to produce designs that defend against lateral movement, meet compliance
                  mandates, and scale with your business.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="nad-overview-visual-panel">
                <div className="nad-overview-visual">
                  <img
                    src={overviewIsometricImage}
                    alt="Secure network architecture infrastructure, users, branch offices, cloud, and data center connected through a central security layer"
                    className="nad-overview-visual-img"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>


        </div>
      </section>

      {/* Approach */}
      <section className="nad-approach-section">
        <div className="nad-grid-pattern" />
        <div className="nad-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="nad-section-header nad-text-center">
              <p className="nad-approach-eyebrow">Our Approach</p>
              <h2 className="nad-approach-title">A Security First Architecture Methodology</h2>
              <p className="nad-approach-subtitle">
                A structured, security first approach to designing resilient, scalable,
                and future ready network architectures.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="nad-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="nad-method-card" key={index}>
                  <div className="nad-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="nad-method-connector" />}
                  <div className="nad-method-icon">{step.icon}</div>
                  <h3 className="nad-method-title">{step.title}</h3>
                  <p className="nad-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–10 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="nad-method-row">
              {approachSteps.slice(5, 10).map((step, index) => (
                <div className="nad-method-card" key={index + 5}>
                  <div className="nad-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 4 && <span className="nad-method-connector" />}
                  <div className="nad-method-icon">{step.icon}</div>
                  <h3 className="nad-method-title">{step.title}</h3>
                  <p className="nad-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="nad-method-footer">
              <div className="nad-method-footer-icon">
                <Shield size={22} />
              </div>
              <p className="nad-method-footer-text">
                Every architecture we deliver is secure by design, built for performance, and aligned
                with industry standards and best practices.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose */}
      <section className="nad-why-choose">
        <div className="nad-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="nad-section-header nad-text-center">
              <p className="nad-why-eyebrow">Why CyberAries</p>
              <h2 className="nad-section-title">Why Choose CyberAries for Network Architecture?</h2>
            </div>
          </ScrollReveal>
          <div className="nad-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="nad-why-choose-card">
                  <div className="nad-why-choose-card-header">
                    <div className="nad-why-choose-icon-box">{item.icon}</div>
                    <h3 className="nad-why-choose-title">{item.title}</h3>
                  </div>
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
                      <span className="nad-bullet nad-bullet-cross">•</span>
                      <span>{item}</span>
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
                      <span className="nad-bullet nad-bullet-check">
                        <CheckCircle size={18} className="nad-check-icon" />
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

      {/* CTA */}
      <section
        className="nad-cta-section"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        <div className="nad-cta-grid-pattern" />
        <div className="nad-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="nad-cta-grid">
              <div className="nad-cta-icon-wrapper">
                <CtaIconGraphic />
              </div>
              <div className="nad-cta-content">
                <h2 className="nad-cta-title">
                  <span className="nad-cta-text-gradient">Ready to Build a Resilient, Secure Network?</span>
                </h2>
                <p className="nad-cta-description">
                  Our certified network architects will review your environment and deliver a
                  future ready, Zero Trust architecture blueprint.
                </p>
                <button
                  className="nad-btn nad-btn-primary nad-btn-large"
                  type="button"
                  onClick={() => navigate('/contact')}
                >
                  Start Architecture Review
                  <ArrowRight size={18} className="nad-btn-arrow" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default NetworkArchitectureDesign;
