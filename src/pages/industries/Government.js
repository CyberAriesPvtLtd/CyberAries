import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import heroBgImage from '../../images/industries/bfsi/hero-image.jpg';
import { 
  Shield,
  Lock,
  AlertTriangle,
  FileCheck,
  Users,
  Database,
  Server,
  Cloud,
  Award,
  Globe,
  Handshake,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './Government.css';

/**
 * Government Industry Page
 * Cybersecurity Solutions for Government Entities
 * Fully Responsive for PC, Tablet, and Mobile
 */

const Government = () => {
  // Key Challenges Data - 8 items for 4-column grid
  const challengesData = [
    {
      title: "Sophisticated Cyber Threats Targeting Critical Infrastructure",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Need for Robust Data Privacy and Protection Measures",
      icon: <Lock size={40} />
    },
    {
      title: "Challenges in Securing Legacy Systems and Networks",
      icon: <Server size={40} />
    },
    {
      title: "Managing Cybersecurity Risks Across Distributed Government Networks",
      icon: <Globe size={40} />
    },
    {
      title: "Ensuring the Integrity of Digital Service Delivery Systems",
      icon: <CheckCircle size={40} />
    },
    {
      title: "Managing Digital Transformation While Maintaining Security",
      icon: <Cloud size={40} />
    },
    {
      title: "Addressing Insider Threats and Insider Risk Management",
      icon: <Users size={40} />
    },
    {
      title: "Ensuring Compliance with Data Localization and Privacy Regulations",
      icon: <FileCheck size={40} />
    }
  ];

  // Solutions Data
  const solutionsData = [
    {
      title: "Ensure Compliance with Data Regulations",
      description: "Cyberaries helps government entities meet stringent data protection and compliance requirements, including data localization mandates, through robust security frameworks and regular audits. Our solutions ensure adherence to national and international standards, safeguarding sensitive citizen data and critical infrastructure.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Prevent Data Breaches and Unauthorized Access",
      description: "Cyberaries deploys advanced security measures, including multi-factor authentication, encryption, and continuous monitoring, to prevent data breaches. Our proactive threat intelligence identifies and mitigates risks before they can compromise critical government systems or citizen information.",
      icon: <Shield size={40} />
    },
    {
      title: "Defend Against Hacktivism and State-Sponsored Attacks",
      description: "Government agencies face sophisticated threats from hacktivists and state-sponsored actors. Cyberaries provides advanced threat detection, incident response capabilities, and security intelligence to defend against targeted attacks, ensuring the integrity and availability of government services.",
      icon: <Lock size={40} />
    },
    {
      title: "Enhance Security for Legacy Systems",
      description: "Many government entities rely on legacy systems that are vulnerable to modern cyber threats. Cyberaries offers specialized security solutions to protect these systems, including network segmentation, vulnerability management, and secure integration with modern infrastructure without disrupting critical operations.",
      icon: <Server size={40} />
    },
    {
      title: "Secure Your Hybrid Cloud Environments",
      description: "As governments migrate to hybrid cloud environments, Cyberaries ensures seamless security across on-premises and cloud infrastructure. Our solutions provide unified visibility, threat detection, and compliance management, enabling secure digital transformation while maintaining data sovereignty.",
      icon: <Cloud size={40} />
    },
    {
      title: "Strengthen Data and Service Security",
      description: "Cyberaries strengthens the security of government digital services through comprehensive protection strategies, including secure application development, API security, and data encryption. We ensure citizens can access government services safely while protecting against cyber threats and data breaches.",
      icon: <Database size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "Partnered with CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits.",
      icon: <Award size={50} />
    },
    {
      title: "350+ Clients Across Different Sector",
      description: "Proven expertise across diverse industries.",
      icon: <Globe size={50} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification.",
      icon: <Handshake size={50} />
    }
  ];

  // Smooth scroll or navigate to contact
  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="government-page">
      {/* Hero Section - NO BUTTONS as requested */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <ScrollReveal animation="fade-down" delay={0}>
              <p className="hero-subtitle">Cybersecurity For Government Entities</p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="hero-title">
                Fortify Critical Infrastructure with <span className="text-gradient">Robust and Reliable Security Solutions</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="hero-description">
                Cyberaries offers cutting-edge cybersecurity solutions tailored for the government sector. As critical infrastructures increasingly face cyber threats, safeguarding national security and public trust is paramount. Our expert team specializes in protecting government entities from ever-evolving cyber threats while ensuring seamless public service delivery.
              </p>
            </ScrollReveal>
            
            {/* No buttons in hero section as per requirement */}
          </div>
        </div>
      </section>

      {/* Key Challenges Section - 4 Column Grid */}
      <section className="key-challenges">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Key Cybersecurity Challenges for Government Entities</h2>
              <p className="section-description">
                Understanding the complex security landscape facing government organizations
              </p>
            </div>
          </ScrollReveal>
          
          <div className="challenges-grid-4col">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 50}>
                <div className="challenge-card-compact">
                  <div className="challenge-icon">
                    {challenge.icon}
                  </div>
                  <h3 className="challenge-title-compact">{challenge.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Safeguard Digital Sovereignty with Cyberaries</h2>
              <p className="section-description">
                Comprehensive security solutions designed for government operations
              </p>
            </div>
          </ScrollReveal>
          
          <div className="solutions-grid">
            {solutionsData.map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="solution-card">
                  <div className="solution-icon">
                    {solution.icon}
                  </div>
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
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
              <p className="section-description">
                Trusted expertise in protecting critical government infrastructure
              </p>
            </div>
          </ScrollReveal>
          
          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="why-choose-card">
                  <div className="why-choose-icon">
                    {item.icon}
                  </div>
                  <h3 className="why-choose-title">{item.title}</h3>
                  <p className="why-choose-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cyberaries Difference Section */}
      <section className="cyberaries-difference">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>          
          </ScrollReveal>

          <div className="comparison-grid">
            {/* Traditional Security Consulting */}
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional">
                <h3 className="comparison-heading">Traditional Security Consulting</h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    <span>Creates dependencies through ongoing services</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    <span>Delivers static PDFs that sit unimplemented</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    <span>Focuses on finding problems, not building solutions</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    <span>Recommends generic security practices</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    <span>Adds more tools to an already complex environment</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    <span>Takes their knowledge when they leave</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Cyberaries Security Engineering */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="comparison-column cyberaries">
                <h3 className="comparison-heading cyberaries-heading">
                  CYBERARIES Security Engineering
                </h3>
                <ul className="comparison-list">
                  <li className="comparison-item">
                    <span className="bullet">
                      <CheckCircle size={18} className="check-icon" />
                    </span>
                    <span>Builds self-sustaining security capabilities</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">
                      <CheckCircle size={18} className="check-icon" />
                    </span>
                    <span>Delivers working code and automated systems</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">
                      <CheckCircle size={18} className="check-icon" />
                    </span>
                    <span>Engineers solutions, not just identifies problems</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">
                      <CheckCircle size={18} className="check-icon" />
                    </span>
                    <span>Creates business-specific security architecture</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">
                      <CheckCircle size={18} className="check-icon" />
                    </span>
                    <span>Integrates and optimizes your existing investments</span>
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">
                      <CheckCircle size={18} className="check-icon" />
                    </span>
                    <span>Embeds knowledge permanently in your systems</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section - SAME DARK BACKGROUND as Cyberaries Difference */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">Ready to Take on Your Cybersecurity Challenges Head-on?</h2>
              <p className="cta-description">
                Let's discuss how we can help you secure critical infrastructure and government operations
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary btn-large" onClick={handleContactUs}>
                  Contact Us
                  <ArrowRight size={20} className="btn-icon" />
                </button>
                <Link to="/contact" className="btn btn-secondary btn-large">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Government;