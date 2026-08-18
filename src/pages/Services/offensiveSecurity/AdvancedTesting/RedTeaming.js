import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/services/vapt/advanced-testing-hero.webp';
import overviewImage from '../../../../images/services/vapt/red-image.webp';
import ctaBgImage from '../../../../images/cta/cta-background.webp';

import { Target,
  Crosshair,
  Map,
  UserCheck,
  Activity,
  Database,
  Shield,
  FileText,
  CheckCircle,
  Award,
  Users,
  Headphones,
  ArrowRight, Landmark } from 'lucide-react';
import './RedTeaming.css';

/**
 * Red Teaming Services Page
 * Advanced Adversary Simulation for Comprehensive Security Testing
 */

const RedTeaming = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Approach Methodology Data
  const approachSteps = [
    {
      title: 'Objective & Scope Definition',
      description: 'Agree on high-value assets and realistic engagement, and safety constraints.',
      icon: <Target size={30} />
    },
    {
      title: 'Threat Reconnaissance',
      description: 'Gather intelligence on people, infrastructure, and supply chain touchpoints to mirror realistic threats.',
      icon: <Crosshair size={30} />
    },
    {
      title: 'Attack Planning',
      description: 'Design multi vector scenarios combining technical, social, and physical techniques aligned with objectives.',
      icon: <Map size={30} />
    },
    {
      title: 'Initial Access',
      description: 'Execute covert reconnaissance, exploiting credential abuse, and pivotal to gain foothold.',
      icon: <UserCheck size={30} />
    },
    {
      title: 'Lateral Movement & Persistence',
      description: 'Simulate privilege escalation, lateral propagation, and maneuvers to emulate advanced adversaries.',
      icon: <Activity size={30} />
    },
    {
      title: 'Data Exfiltration Simulation',
      description: 'Validate detection and controls by attempting controlled data exfiltration scenarios.',
      icon: <Database size={30} />
    },
    {
      title: 'Detection & Response Evaluation',
      description: 'Measure SOC, IR, and endpoint responses to determine time to detect and time to respond.',
      icon: <Shield size={30} />
    },
    {
      title: 'Reporting & Executive Briefing',
      description: 'Deliver a compact broken report with strategic, tactical analysis, and actionable remediation.',
      icon: <FileText size={30} />
    },
    {
      title: 'Remediation Validation',
      description: 'Support teams as perform follow up validations to confirm improved security and detection capabilities.',
      icon: <CheckCircle size={30} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: 'Partnered with CERT In Empanelled Experts',
      description: 'Recognized by the Government of India for security audits.',
      icon: <Award size={30} strokeWidth={1.75} />
    },
    {
      title: 'Proven Expertise',
      description: '350+ clients successfully audited across banking, IT, insurance, healthcare, and manufacturing sectors.',
      icon: <Users size={30} strokeWidth={1.75} />
    },
    {
      title: 'End to End Support',
      description: 'From scoping to remediation and final certification with dedicated developer support.',
      icon: <Headphones size={30} strokeWidth={1.75} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Limited to pre defined penetration testing scopes and methodologies.',
      'Focuses on technical vulnerabilities without simulating realistic attack chains.',
      'Delivered as compliance focused reports with limited actionable intelligence.',
      'Rarely tests organizational response, detection, and incident handling capabilities.',
      'Provides snapshot assessments without continuous adversary simulation.',
      'Minimal integration of social engineering and physical security vectors.'
    ],
    cyberaries: [
      'Full scope adversary simulation mimicking real world threat actor behavior.',
      'Multi vector attacks combining technical, social, and physical exploitation.',
      'Measures detection, response, and recovery capabilities in real time.',
      'Evaluates SOC effectiveness, IR procedures, and security team coordination.',
      'Provides strategic intelligence on high value asset protection and gaps.',
      'Delivers executive briefings with prioritized remediation roadmaps.'
    ]
  };

  return (
    <div className="rt-page">
      {/* Hero Section */}
      <section className="rt-hero-section">
        <div
          className="rt-hero-bg-layer"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="rt-hero-overlay" />
        <div className="rt-hero-grid-pattern" />
        {/* Floating particles */}
        <div className="rt-hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="rt-hero-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="rt-container">
          <div className="rt-hero-content">
            <div className="rt-hero-badge">
                  <Landmark size={14} className="rt-badge-icon" />
                  <span className="rt-badge-text">
                    OFFENSIVE SECURITY <span className="rt-badge-divider">/</span> ADVANCED TESTING
                  </span>
                </div>
            <h1 className="rt-hero-title">
              <span className="rt-text-gradient">
                RED TEAMING SERVICES <br />
                &amp; ADVERSARY SIMULATION
              </span>
            </h1>
            <p className="rt-hero-description">
              <strong>Red Teaming</strong> is a full scope, adversary simulation exercise that evaluates an organization's detection,
              response, and recovery capabilities by simulating realistic attack scenarios, direct pursuit, processes, and
              technology defenses against sophisticated, real world engagements.
            </p>
            <p className="rt-hero-description">
              We focus on assessing <strong>high value objectives (data theft, persistence, lateral movement)</strong>, entry vectors,
              social engineering, and multi stage tactics to reveal actual risk and coordination gaps.
            </p>
            <div className="rt-hero-actions">
              <button
                className="rt-btn rt-btn-primary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Request a Red Team Simulation
                <ArrowRight size={16} className="rt-btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="rt-service-overview">
        <div className="rt-container">
          <div className="rt-overview-grid">
            <ScrollReveal direction="left" delay={100}>
              <div className="rt-overview-content">
                <p className="rt-overview-text">
                  At <strong>Cyberaries</strong>, our red team engagements combine <strong>technical exploitation, physical/social
                  engineering, and covert persistence techniques</strong> to test your security posture end to end. We design
                  bespoke scenarios aligned with your threat landscape and business goals.
                </p>
                <p className="rt-overview-text">
                  Our service emphasizes <strong>ethical, targeted, and measurable</strong> exercises with safety controls, executive
                  briefings, and prioritized remediation roadmaps so you can strengthen detection, harden controls, and
                  improve incident response readiness.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="rt-overview-visual">
                <img
                  src={overviewImage}
                  alt="Red Teaming Services"
                  className="rt-overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Modern Horizontal Timeline */}
      <section className="rt-approach-section">
        <div className="rt-grid-pattern" />
        <div className="rt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="rt-section-header rt-text-center">
              <p className="rt-eyebrow">Our Approach</p>
              <h2 className="rt-approach-title">Bespoke Adversary Simulation Methodology</h2>
              <p className="rt-approach-subtitle">
                A structured, multi layered process designed to emulate sophisticated threats, evaluate security operations,
                and strengthen overall incident response capabilities.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Steps 1–5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="rt-method-row">
              {approachSteps.slice(0, 5).map((step, index) => (
                <div className="rt-method-card" key={index}>
                  <div className="rt-method-badge">{String(index + 1).padStart(2, '0')}</div>
                  {index < 4 && <span className="rt-method-connector" />}
                  <div className="rt-method-icon">{step.icon}</div>
                  <h3 className="rt-method-title">{step.title}</h3>
                  <p className="rt-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Row 2: Steps 6–9 */}
          <ScrollReveal direction="up" delay={200}>
            <div className="rt-method-row">
              {approachSteps.slice(5, 9).map((step, index) => (
                <div className="rt-method-card" key={index + 5}>
                  <div className="rt-method-badge">{String(index + 6).padStart(2, '0')}</div>
                  {index < 3 && <span className="rt-method-connector" />}
                  <div className="rt-method-icon">{step.icon}</div>
                  <h3 className="rt-method-title">{step.title}</h3>
                  <p className="rt-method-description">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Footer banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="rt-method-footer">
              <div className="rt-method-footer-icon">
                <Shield size={22} />
              </div>
              <p className="rt-method-footer-text">
                Our red team simulations align with advanced security testing standards, MITRE ATT&amp;CK frameworks, and regulatory threat intelligence led penetration testing requirements.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="rt-why-choose">
        <div className="rt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="rt-section-header rt-text-center">
              <p className="rt-why-eyebrow">Why CyberAries</p>
              <h2 className="rt-section-title">Why Choose Cyberaries?</h2>
            </div>
          </ScrollReveal>

          <div className="rt-why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="rt-why-choose-card">
                  <div className="rt-why-choose-card-header">
                    <div className="rt-why-choose-icon-box">{item.icon}</div>
                    <h3 className="rt-why-choose-title">{item.title}</h3>
                  </div>
                  <p className="rt-why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="rt-cyberaries-difference">
        <div className="rt-container">
          <ScrollReveal animation="fade-up">
            <h2 className="rt-difference-title">
              THE <span className="rt-highlight-red">CYBERARIES</span>{' '}
              DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="rt-comparison-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="rt-comparison-column rt-traditional">
                <h3 className="rt-comparison-heading">Traditional Penetration Testing</h3>
                <ul className="rt-comparison-list">
                  {difference.traditional.map((item, idx) => (
                    <li className="rt-comparison-item" key={idx}>
                      <span className="rt-bullet rt-bullet-cross">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="rt-comparison-column rt-cyberaries-col">
                <h3 className="rt-comparison-heading rt-cyberaries-heading">
                  Cyberaries Red Teaming
                </h3>
                <ul className="rt-comparison-list">
                  {difference.cyberaries.map((item, idx) => (
                    <li className="rt-comparison-item" key={idx}>
                      <span className="rt-bullet rt-bullet-check">
                        <CheckCircle size={18} className="rt-check-icon" />
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
      <section className="rt-cta-section" style={{ backgroundImage: `url(${ctaBgImage})` }}>
        <div className="rt-cta-grid-pattern" />
        <div className="rt-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="rt-cta-grid">
              <div className="rt-cta-content">
                <h2 className="rt-cta-title">
                  <span className="rt-cta-text-gradient">Ready to Test Your Security Defenses?</span>
                </h2>
                <p className="rt-cta-description">
                  Let's simulate real world attacks and strengthen your detection and response capabilities.
                </p>
                <button
                  className="rt-btn rt-btn-primary rt-btn-large"
                  type="button"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us Today
                  <ArrowRight size={18} className="rt-btn-arrow" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default RedTeaming;