import React from 'react';
import ScrollReveal from '../../../../components/ScrollReveal';
import heroBgImage from '../../../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/red-image.jpg';
import Footer from '../../../../components/Footer';
import { 
  Target,
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
  Headphones
} from 'lucide-react';
import './RedTeaming.css';

/**
 * Red Teaming Services Page
 * Advanced Adversary Simulation for Comprehensive Security Testing
 */

const RedTeaming = () => {
  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Objective & Scope Definition",
      description: "Agree on high-value assets and realistic engagement, and safety constraints.",
      icon: <Target size={40} />
    },
    {
      title: "Threat Reconnaissance",
      description: "Gather intelligence on people, infrastructure, and supply-chain touchpoints to mirror realistic threats.",
      icon: <Crosshair size={40} />
    },
    {
      title: "Attack Planning",
      description: "Design multi-vector scenarios combining technical, social, and physical techniques aligned with objectives.",
      icon: <Map size={40} />
    },
    {
      title: "Initial Access",
      description: "Execute covert reconnaissance, exploiting credential abuse, and pivotal to gain foothold.",
      icon: <UserCheck size={40} />
    },
    {
      title: "Lateral Movement & Persistence",
      description: "Simulate privilege escalation, lateral propagation, and maneuvers to emulate advanced adversaries.",
      icon: <Activity size={40} />
    },
    {
      title: "Data Exfiltration Simulation",
      description: "Validate detection and controls by attempting controlled data exfiltration scenarios.",
      icon: <Database size={40} />
    },
    {
      title: "Detection & Response Evaluation",
      description: "Measure SOC, IR, and endpoint responses to determine time-to-detect and time-to-respond.",
      icon: <Shield size={40} />
    },
    {
      title: "Reporting & Executive Briefing",
      description: "Deliver a compact broken report with strategic, tactical analysis, and actionable remediation.",
      icon: <FileText size={40} />
    },
    {
      title: "Remediation Validation",
      description: "Support teams as perform follow-up validations to confirm improved security and detection capabilities.",
      icon: <CheckCircle size={40} />
    }
  ];

  // Why Choose Data
  const whyChooseItems = [
    {
      title: "CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits.",
      icon: <Award size={48} strokeWidth={1.5} />
    },
    {
      title: "Proven Expertise",
      description: "350+ clients across banking, IT, insurance, healthcare, and manufacturing.",
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification.",
      icon: <Headphones size={48} strokeWidth={1.5} />
    }
  ];

  // Difference section content
  const difference = {
    traditional: [
      'Limited to pre-defined penetration testing scopes and methodologies.',
      'Focuses on technical vulnerabilities without simulating realistic attack chains.',
      'Delivered as compliance-focused reports with limited actionable intelligence.',
      'Rarely tests organizational response, detection, and incident handling capabilities.',
      'Provides snapshot assessments without continuous adversary simulation.',
      'Minimal integration of social engineering and physical security vectors.'
    ],
    cyberaries: [
      'Full-scope adversary simulation mimicking real-world threat actor behavior.',
      'Multi-vector attacks combining technical, social, and physical exploitation.',
      'Measures detection, response, and recovery capabilities in real-time.',
      'Evaluates SOC effectiveness, IR procedures, and security team coordination.',
      'Provides strategic intelligence on high-value asset protection and gaps.',
      'Delivers executive briefings with prioritized remediation roadmaps.'
    ]
  };

  return (
    <div className="red-teaming-page sast-style-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Advanced Security Testing</p>
            <h1 className="hero-title">
              RED TEAMING SERVICES{' '}
              <span className="text-gradient">
                ADVERSARY SIMULATION
              </span>
            </h1>
            <p className="hero-description">
              <strong>Red Teaming</strong> is a full-scope, adversary-simulation exercise that evaluates an organization's detection, 
              response, and recovery capabilities by simulating realistic attack scenarios, direct pursuit, processes, and 
              technology defenses against sophisticated, real-world engagements. Focus on assessing <strong>high-value objectives 
              (data theft, persistence, lateral movement)</strong>, entry vectors, social engineering, and multi-stage tactics to 
              reveal actual risk and coordination gaps.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Start Now</button>
              <button className="btn btn-secondary">Learn More</button>
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
                  At <strong>Cyberaries</strong>, our red team engagements combine <strong>technical exploitation, physical/social 
                  engineering, and covert persistence techniques</strong> to test your security posture end-to-end. We design 
                  bespoke scenarios aligned with your threat landscape and business goals, execute controlled adversary 
                  simulations, and measure your people and SOC's effectiveness — delivering actionable intelligence to 
                  close detection and response gaps.
                </p>
                <p className="overview-text">
                  Our service emphasizes <strong>ethical, targeted, and measurable</strong> exercises with safety controls, executive 
                  briefings, and prioritized remediation roadmaps so you can strengthen detection, harden controls, and 
                  improve incident response readiness.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img 
                  src={overviewImage} 
                  alt="Red Teaming Services" 
                  className="overview-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="solutions-section our-approach">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="section-subtitle">
                Our audit methodology is built around vigilance, expertise, and driving continuous security improvement
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="solution-card">
                  <div className="solution-icon">{step.icon}</div>
                  <h3 className="solution-title">{step.title}</h3>
                  <p className="solution-description">{step.description}</p>
                  <div className="solution-indicator"></div>
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
                  <p className="why-choose-description">
                    {item.description}
                  </p>
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
                <h3 className="comparison-heading">Traditional Penetration Testing</h3>
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
                  Cyberaries Red Teaming
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
                Ready to Test Your Security Defenses?
              </h2>
              <p className="cta-description">
                Let's simulate real-world attacks and strengthen your detection and response capabilities.
              </p>
              <button className="btn btn-primary btn-large">
                Contact With Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/*   */}
    </div>
  );
};

export default RedTeaming;
