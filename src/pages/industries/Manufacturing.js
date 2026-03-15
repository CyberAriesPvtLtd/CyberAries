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
  TrendingUp,
  Globe,
  Handshake,
  Server,
  CheckCircle,
  Factory,
  Cog
} from 'lucide-react';
import './Manufacturing.css';

/**
 * Manufacturing Industry Page
 * Manufacturing and Industrial Security Solutions
 * Fully Responsive for PC, Tablet, and Mobile
 */

const Manufacturing = () => {
  // Key Challenges Data
  const challengesData = [
    {
      title: "OT and ICS Security Vulnerabilities",
      description: "Manufacturing facilities face unique risks from insecure operational technology and industrial control systems that control critical production processes.",
      icon: <Factory size={40} />
    },
    {
      title: "Supply Chain and Vendor Risks",
      description: "Complex global supply chains and third-party dependencies create extensive attack surfaces and potential points of compromise.",
      icon: <TrendingUp size={40} />
    },
    {
      title: "Legacy Industrial Systems",
      description: "Outdated manufacturing equipment and control systems lack modern security features and are difficult to patch or upgrade.",
      icon: <Cog size={40} />
    },
    {
      title: "Intellectual Property Theft",
      description: "Manufacturing designs, processes, and trade secrets are prime targets for industrial espionage and cyber theft.",
      icon: <AlertTriangle size={40} />
    }
  ];

  // Solutions Data
  const solutionsData = [
    {
      title: "OT and ICS Security",
      description: "Cyberaries provides specialized security solutions for operational technology and industrial control systems, including network segmentation, anomaly detection, and secure remote access.",
      icon: <Factory size={40} />
    },
    {
      title: "IT/OT Convergence Security",
      description: "Secure the integration between IT and OT networks with proper segmentation, access controls, and monitoring to protect both business and production systems.",
      icon: <Server size={40} />
    },
    {
      title: "Supply Chain Risk Management",
      description: "Assess and mitigate third-party risks through vendor security assessments, continuous monitoring, and supply chain threat intelligence.",
      icon: <Users size={40} />
    },
    {
      title: "Intellectual Property Protection",
      description: "Implement data loss prevention, encryption, access controls, and monitoring solutions to protect valuable manufacturing IP and trade secrets.",
      icon: <Shield size={40} />
    },
    {
      title: "Ransomware and Malware Defense",
      description: "Deploy multi-layered protection against ransomware and malware targeting manufacturing operations, including backup solutions and incident response capabilities.",
      icon: <Lock size={40} />
    },
    {
      title: "Compliance and Standards",
      description: "Achieve compliance with industry standards including NIST CSF, ISA/IEC 62443, and ISO 27001 for manufacturing environments.",
      icon: <FileCheck size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "OT/ICS Security Expertise",
      description: "Specialized experience in manufacturing and industrial cybersecurity.",
      icon: <Cog size={50} />
    },
    {
      title: "350+ Clients Across Different Sectors",
      description: "Proven expertise across diverse industries.",
      icon: <Globe size={50} />
    },
    {
      title: "End-to-End Support",
      description: "From OT assessment to implementation and continuous monitoring.",
      icon: <Handshake size={50} />
    }
  ];

  // Smooth scroll to contact section or page
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="manufacturing-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <ScrollReveal animation="fade-down" delay={0}>
              <p className="hero-subtitle">Cybersecurity For Manufacturing Industry</p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="hero-title">
                Secure Industrial Operations and <span className="text-gradient">Protect Manufacturing IP</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="hero-description">
                Manufacturing facilities are increasingly targeted by sophisticated cyber threats that can disrupt production, compromise intellectual property, and impact supply chains. As Industry 4.0 drives digital transformation, manufacturers must secure operational technology, protect proprietary designs and processes, and defend against ransomware while maintaining production efficiency and safety.
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
              <h2 className="section-title">Key Cybersecurity Challenges Facing Manufacturing</h2>
              <p className="section-description">
                Understanding the unique security threats that impact industrial operations and production systems
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
              <h2 className="section-title">With Cyberaries, Build Resilient Manufacturing Security</h2>
              <p className="section-description">
                Comprehensive security solutions designed for modern manufacturing and industrial environments
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
                Trusted by manufacturing organizations across India
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
                    <span>Creates manufacturing-specific security architecture</span>
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
              <h2 className="cta-title">Ready to Secure Your Manufacturing Operations?</h2>
              <p className="cta-description">
                Let's discuss how we can help you protect industrial systems and manufacturing IP
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

export default Manufacturing;
