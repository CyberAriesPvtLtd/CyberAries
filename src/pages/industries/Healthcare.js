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
  Globe,
  Handshake,
  Database,
  Server,
  CheckCircle,
  Heart,
  Activity
} from 'lucide-react';
import './Healthcare.css';

/**
 * Healthcare Industry Page
 * Healthcare and Medical Institutions Security Solutions
 * Fully Responsive for PC, Tablet, and Mobile
 */

const Healthcare = () => {
  // Key Challenges Data
  const challengesData = [
    {
      title: "Patient Data Privacy and HIPAA Compliance",
      description: "Healthcare organizations must protect sensitive patient health information while maintaining compliance with HIPAA, state privacy laws, and international regulations.",
      icon: <Shield size={40} />
    },
    {
      title: "Ransomware and Cyber Attacks",
      description: "Hospitals and clinics are prime targets for ransomware attacks that can disrupt critical patient care services and compromise life-saving medical systems.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Medical Device and IoT Security",
      description: "Connected medical devices, IoMT systems, and legacy equipment create unique vulnerabilities that require specialized security approaches.",
      icon: <Activity size={40} />
    },
    {
      title: "Third-Party and Vendor Risk",
      description: "Healthcare providers work with numerous vendors and partners, creating complex supply chain security challenges and compliance requirements.",
      icon: <Users size={40} />
    }
  ];

  // Solutions Data
  const solutionsData = [
    {
      title: "HIPAA Compliance and Privacy Protection",
      description: "Cyberaries provides comprehensive HIPAA compliance solutions including risk assessments, privacy policy development, and ongoing compliance monitoring to protect patient data.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Medical Device Security",
      description: "Secure connected medical devices and IoMT ecosystems with specialized security controls, network segmentation, and real-time monitoring solutions.",
      icon: <Activity size={40} />
    },
    {
      title: "Electronic Health Records Security",
      description: "Protect EHR systems with encryption, access controls, audit logging, and security monitoring to ensure confidentiality and integrity of patient records.",
      icon: <Database size={40} />
    },
    {
      title: "Ransomware Defense and Recovery",
      description: "Deploy multi-layered ransomware protection including backup solutions, endpoint security, email filtering, and incident response capabilities.",
      icon: <Shield size={40} />
    },
    {
      title: "Network and Infrastructure Security",
      description: "Implement secure network architecture with segmentation, zero-trust principles, and continuous monitoring to protect clinical and administrative systems.",
      icon: <Server size={40} />
    },
    {
      title: "Third-Party Risk Management",
      description: "Assess and manage vendor risks through comprehensive due diligence, business associate agreements, and ongoing security monitoring programs.",
      icon: <Lock size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "Healthcare Security Expertise",
      description: "Specialized experience in HIPAA and healthcare cybersecurity.",
      icon: <Heart size={50} />
    },
    {
      title: "350+ Clients Across Different Sectors",
      description: "Proven expertise across diverse industries.",
      icon: <Globe size={50} />
    },
    {
      title: "End-to-End Support",
      description: "From compliance to implementation and continuous monitoring.",
      icon: <Handshake size={50} />
    }
  ];

  // Smooth scroll to contact section or page
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="healthcare-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <ScrollReveal animation="fade-down" delay={0}>
              <p className="hero-subtitle">Cybersecurity For Healthcare Industry</p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="hero-title">
                Protect Patient Data and <span className="text-gradient">Secure Critical Care Systems</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="hero-description">
                Healthcare organizations face unprecedented cybersecurity challenges, from protecting electronic health records to securing connected medical devices. As the industry embraces digital transformation, hospitals, clinics, and healthcare providers must safeguard patient privacy, ensure HIPAA compliance, and defend against ransomware attacks while maintaining uninterrupted patient care delivery.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={handleGetStarted}>
                  Schedule Consultation
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="key-challenges">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Key Cybersecurity Challenges Facing Healthcare Organizations</h2>
              <p className="section-description">
                Understanding the critical security threats that impact patient care and data protection
              </p>
            </div>
          </ScrollReveal>
          
          <div className="challenges-grid">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="challenge-card">
                  <div className="challenge-icon">
                    {challenge.icon}
                  </div>
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">{challenge.description}</p>
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
              <h2 className="section-title">With Cyberaries, Build a Secure Healthcare Ecosystem</h2>
              <p className="section-description">
                Comprehensive security solutions tailored for healthcare providers and medical institutions
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
                Trusted by healthcare organizations across India
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
                    <span>Creates healthcare-specific security architecture</span>
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">Ready to Secure Your Healthcare Operations?</h2>
              <p className="cta-description">
                Let's discuss how we can help you protect patient data and ensure HIPAA compliance
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-secondary btn-large">
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
