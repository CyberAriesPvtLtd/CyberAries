import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/code-security-hero.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { ClipboardList,
  Wrench,
  Search,
  Zap,
  RefreshCw,
  CheckCircle,
  BarChart3,
  Settings as Tool,
  Repeat,
  Award,
  Globe,
  Handshake,
  Bug,
  AlertTriangle,
  FileCheck,
  Users,
  Code2,
  ShieldCheck,
  Lock,
  GitBranch,
  ArrowRight,
  User,
  Database, Landmark } from 'lucide-react';
import './SASTandDAST.css';

/**
 * SAST & DAST Service Page
 * Premium Application Security Engineering experience
 * Combines Static (SAST) and Dynamic (DAST) Application Security Testing
 */

const SASTandDAST = () => {
  const navigate = useNavigate();

  // Key Challenges Data
  const challengesData = [
    {
      title: 'Lack of Early Vulnerability Detection',
      description: 'Security flaws in source code often go unnoticed until late in development, increasing remediation costs.',
      icon: <Bug size={26} />
    },
    {
      title: 'Runtime Vulnerabilities',
      description: 'DAST identifies vulnerabilities that only manifest when applications are running.',
      icon: <Zap size={26} />
    },
    {
      title: 'False Positives and Noise',
      description: 'Both SAST and DAST tools generate noise, requiring expert analysis to prioritize real threats.',
      icon: <AlertTriangle size={26} />
    },
    {
      title: 'Integration with CI/CD Pipelines',
      description: 'Embedding security testing into DevOps workflows without slowing down velocity.',
      icon: <RefreshCw size={26} />
    },
    {
      title: 'Compliance Requirements',
      description: 'Meeting OWASP Top 10, PCI DSS, and regulatory mandates requires comprehensive testing.',
      icon: <FileCheck size={26} />
    },
    {
      title: 'Skill Gap in Security Testing',
      description: 'Teams often lack specialized expertise to interpret SAST/DAST results effectively.',
      icon: <Users size={26} />
    }
  ];

  // SAST layer details
  const sastPoints = [
    'Source code analysis',
    'Early detection in SDLC',
    'Developer focused feedback',
    'CI/CD integration',
    'Reduced remediation cost'
  ];

  // DAST layer details
  const dastPoints = [
    'Runtime application testing',
    'Attack simulation',
    'Business logic validation',
    'Production like testing',
    'Real world risk identification'
  ];

  const attackSurfaces = [
    { label: 'Authentication & Session Management', icon: <User size={20} /> },
    { label: 'Access Control & Authorization', icon: <Lock size={20} /> },
    { label: 'Input Validation & Injection', icon: <Code2 size={20} /> },
    { label: 'Business Logic Flows', icon: <GitBranch size={20} /> },
    { label: 'Sensitive Data Exposure', icon: <Database size={20} /> },
    { label: 'Security Misconfigurations & Error Handling', icon: <Tool size={20} /> }
  ];

  // Approach Methodology Data — presented as a security pipeline
  const approachSteps = [
    {
      tag: 'REQUIREMENTS',
      title: 'Requirements Analysis',
      description: 'Understand the application architecture, technology stack, and security requirements to tailor our testing approach.',
      icon: <ClipboardList size={28} />
    },
    {
      tag: 'TOOLS',
      title: 'Tools Selection & Setup',
      description: 'Configure best-in-class SAST and DAST tools to meet your development environment requirements.',
      icon: <Wrench size={28} />
    },
    {
      tag: 'SAST',
      title: 'Static Analysis (SAST)',
      description: 'Examine source code, bytecode, or binaries to detect security flaws early in the SDLC.',
      icon: <Search size={28} />
    },
    {
      tag: 'DAST',
      title: 'Dynamic Analysis (DAST)',
      description: 'Test running applications to identify runtime vulnerabilities, session handling, and access controls.',
      icon: <Zap size={28} />
    },
    {
      tag: 'INTEGRATION',
      title: 'Integrated Scanning',
      description: 'Validate SAST findings with DAST results to eliminate false positives and confirm exploitability.',
      icon: <RefreshCw size={28} />
    },
    {
      tag: 'VALIDATION',
      title: 'Vulnerability Validation',
      description: 'Correlate findings, remove false positives, and verify exploitability of identified issues.',
      icon: <CheckCircle size={28} />
    },
    {
      tag: 'RISK',
      title: 'Risk Prioritization & Reporting',
      description: 'Prioritize detected vulnerabilities by severity and impact with detailed remediation recommendations.',
      icon: <BarChart3 size={28} />
    },
    {
      tag: 'REMEDIATION',
      title: 'Remediation Support',
      description: 'Guide development teams to address security coding flaws and implement mitigation strategies.',
      icon: <Tool size={28} />
    },
    {
      tag: 'RETEST',
      title: 'Re Testing & Continuous Integration',
      description: 'Run validation scans and integrate automated testing into CI/CD pipelines to maintain ongoing security.',
      icon: <Repeat size={28} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      num: '01',
      title: 'Expertise You Can Trust',
      description: 'Partnered with CERT-In empanelled experts with deep security testing experience.',
      icon: <Award size={30} />
    },
    {
      num: '02',
      title: 'Proven Track Record',
      description: '350+ clients across banking, IT, insurance, healthcare, and manufacturing.',
      icon: <Globe size={30} />
    },
    {
      num: '03',
      title: 'End to End Partnership',
      description: 'From assessment and remediation to re-testing and security improvement.',
      icon: <Handshake size={30} />
    }
  ];

  return (
    <div className="sast-dast-page">
      {/* ============ HERO SECTION ============ */}
      <section className="hero-section">
        <div
          className="hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="hero-overlay" />
        <div className="hero-grid-overlay" />
        {/* Floating particles */}
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="sast-dast-hero-badge">
                  <Landmark size={14} className="sast-dast-badge-icon" />
                  <span className="sast-dast-badge-text">
                    OFFENSIVE SECURITY <span className="sast-dast-badge-divider">/</span> CODE SECURITY
                  </span>
                </div>
            <h1 className="hero-title">
              Secure Code.<br />
              <span className="text-gradient">Secure Applications.</span>
            </h1>
            <p className="hero-description">
              Combine <strong>Static Application Security Testing (SAST)</strong> and{' '}
              <strong>Dynamic Application Security Testing (DAST)</strong> to identify
              vulnerabilities across development and runtime.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Get Started <ArrowRight size={18} />
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const el = document.querySelector('.approach section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Methodology
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ============ KEY CHALLENGES SECTION ============ */}
      <section className="key-challenges">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header-block">
              <p className="section-eyebrow">The problem space</p>
              <h2 className="section-title">Key Application Security Testing Challenges</h2>
            </div>
          </ScrollReveal>

          <div className="challenges-row">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80}>
                <div className="challenge-item">
                  <div className="challenge-icon">{challenge.icon}</div>
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">{challenge.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TWO LAYERS. ONE SECURITY STRATEGY. ============ */}
      <section className="two-layers-section">
        <div className="grid-overlay"></div>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header-block">
              <p className="section-eyebrow text-center">How it works</p>
              <h2 className="section-title text-center">Two Layers. One Security Strategy.</h2>
            </div>
          </ScrollReveal>

          <div className="layers-diagram">
            <ScrollReveal direction="right" delay={100}>
              <div className="layer-card layer-sast">
                <div className="layer-header">
                  <span className="layer-tag">SAST</span>
                  <h3>Find vulnerabilities before deployment.</h3>
                </div>
                <ul className="layer-list">
                  {sastPoints.map((point, i) => (
                    <li key={i}><CheckCircle size={16} /> {point}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <div className="layer-center">
              <div className="layer-connector-line left"></div>
              <div className="layer-center-outer-rings">
                <div className="layer-ring ring-1"></div>
                <div className="layer-ring ring-2"></div>
                <div className="layer-center-node">
                  <div className="center-node-icon">
                    <ShieldCheck size={26} />
                  </div>
                  <span className="layer-center-tag">SAST + DAST</span>
                  <p>Defense Across<br />the SDLC</p>
                </div>
              </div>
              <div className="layer-connector-line right"></div>
            </div>

            <ScrollReveal direction="left" delay={100}>
              <div className="layer-card layer-dast">
                <div className="layer-header">
                  <span className="layer-tag">DAST</span>
                  <h3>Find vulnerabilities in running applications.</h3>
                </div>
                <ul className="layer-list">
                  {dastPoints.map((point, i) => (
                    <li key={i}><CheckCircle size={16} /> {point}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE TEST ============ */}
      <section className="what-we-test-section">
        <div className="container">
          
          <ScrollReveal direction="up" delay={0}>
            <div className="what-we-test-header">
              <p className="section-eyebrow">WHAT WE TEST</p>
              <h2 className="what-we-test-title">What We Test</h2>
              <div className="what-we-test-divider"></div>
              <p className="what-we-test-description">
                We assess your applications across all critical attack surfaces to ensure comprehensive security coverage.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="what-we-test-map-container">
              <div className="attack-surface-map">
                {/* Left column nodes */}
                <div className="surface-column left-column">
                  <div className="surface-node-wrapper">
                    <p className="surface-node-label">{attackSurfaces[0].label}</p>
                    <div className="surface-node-icon">{attackSurfaces[0].icon}</div>
                    <div className="surface-node-line line-left"></div>
                  </div>
                  <div className="surface-node-wrapper">
                    <p className="surface-node-label">{attackSurfaces[2].label}</p>
                    <div className="surface-node-icon">{attackSurfaces[2].icon}</div>
                    <div className="surface-node-line line-left"></div>
                  </div>
                  <div className="surface-node-wrapper">
                    <p className="surface-node-label">{attackSurfaces[3].label}</p>
                    <div className="surface-node-icon">{attackSurfaces[3].icon}</div>
                    <div className="surface-node-line line-left"></div>
                  </div>
                </div>

                {/* Center node */}
                <div className="surface-center-outer">
                  <div className="surface-center-inner">
                    <div className="browser-icon-decor">
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="2" y1="8" x2="22" y2="8" />
                        <circle cx="5" cy="5" r="0.5" />
                        <circle cx="7" cy="5" r="0.5" />
                        <circle cx="9" cy="5" r="0.5" />
                        <path d="M12 11c1.5 0 3 1.5 3 3.5s-1.5 3.5-3 3.5-3-1.5-3-3.5 1.5-3.5 3-3.5z" />
                        <path d="M12 12.5v2.5" />
                        <path d="M10.5 13.5h3" />
                      </svg>
                    </div>
                    <span className="surface-center-label">APPLICATION</span>
                  </div>
                  <div className="surface-center-ring"></div>
                </div>

                {/* Right column nodes */}
                <div className="surface-column right-column">
                  <div className="surface-node-wrapper">
                    <div className="surface-node-icon">{attackSurfaces[1].icon}</div>
                    <p className="surface-node-label">{attackSurfaces[1].label}</p>
                    <div className="surface-node-line line-right"></div>
                  </div>
                  <div className="surface-node-wrapper">
                    <div className="surface-node-icon">{attackSurfaces[4].icon}</div>
                    <p className="surface-node-label">{attackSurfaces[4].label}</p>
                    <div className="surface-node-line line-right"></div>
                  </div>
                  <div className="surface-node-wrapper">
                    <div className="surface-node-icon">{attackSurfaces[5].icon}</div>
                    <p className="surface-node-label">{attackSurfaces[5].label}</p>
                    <div className="surface-node-line line-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ============ OUR APPROACH — SECURITY PIPELINE ============ */}
      <section className="approach-section">
        <div className="grid-overlay"></div>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header-block">
              <p className="section-eyebrow text-center">Methodology</p>
              <h2 className="section-title text-center">Our Approach</h2>
            </div>
          </ScrollReveal>

          <div className="pipeline-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 60}>
                <div className="pipeline-card">
                  <div className="pipeline-card-top">
                    <span className="pipeline-step-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="pipeline-tag">{step.tag}</span>
                  </div>
                  <div className="pipeline-icon">{step.icon}</div>
                  <h3 className="pipeline-title">{step.title}</h3>
                  <p className="pipeline-description">{step.description}</p>
                  {index < approachSteps.length - 1 && (
                    <span className="pipeline-arrow"><ArrowRight size={16} /></span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE CYBERARIES ============ */}
      <section className="why-choose section-offwhite-nogrid">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-eyebrow">Why CyberAries</p>
              <h2 className="section-title">Why Choose CyberAries?</h2>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="why-choose-card">
                  <div className="why-choose-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="why-choose-icon">{item.icon}</div>
                  <div className="why-choose-body">
                    <h3 className="why-choose-title">{item.title}</h3>
                    <p className="why-choose-description">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CYBERARIES DIFFERENCE ============ */}
      <section className="cyberaries-difference">
        <div className="grid-overlay"></div>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional Security Consulting</h3>
                <ul className="comparison-list">
                  <li className="comparison-item"><span className="bullet">•</span>Creates dependencies through ongoing services</li>
                  <li className="comparison-item"><span className="bullet">•</span>Delivers static PDFs that sit unimplemented</li>
                  <li className="comparison-item"><span className="bullet">•</span>Focuses on finding problems, not building solutions</li>
                  <li className="comparison-item"><span className="bullet">•</span>Recommends generic security practices</li>
                  <li className="comparison-item"><span className="bullet">•</span>Adds more tools to an already complex environment</li>
                  <li className="comparison-item"><span className="bullet">•</span>Takes their knowledge when they leave</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">CyberAries Security Engineering</h3>
                <ul className="comparison-list">
                  <li className="comparison-item"><span className="bullet">•</span>Builds self sustaining security capabilities</li>
                  <li className="comparison-item"><span className="bullet">•</span>Delivers working code and automated systems</li>
                  <li className="comparison-item"><span className="bullet">•</span>Engineers solutions, not just identifies problems</li>
                  <li className="comparison-item"><span className="bullet">•</span>Creates business specific security architecture</li>
                  <li className="comparison-item"><span className="bullet">•</span>Integrates and optimizes your existing investments</li>
                  <li className="comparison-item"><span className="bullet">•</span>Embeds knowledge permanently in your systems</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">
                <span className="text-gradient">Find Vulnerabilities Before Attackers Do.</span>
              </h2>
              <p className="cta-description">
                Let's build a security first application strategy with comprehensive SAST and DAST testing.
              </p>
              <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>
                Contact With Us <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SASTandDAST;