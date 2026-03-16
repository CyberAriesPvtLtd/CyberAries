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
  BookOpen,
  GraduationCap
} from 'lucide-react';
import './Education.css';

/**
 * Education Industry Page
 * Educational Institutions Security Solutions
 * Fully Responsive for PC, Tablet, and Mobile
 */

const Education = () => {
  // Key Challenges Data
  const challengesData = [
    {
      title: "Student Data Privacy and Protection",
      description: "Educational institutions handle vast amounts of sensitive student data, making them prime targets for data breaches and privacy violations.",
      icon: <Shield size={40} />
    },
    {
      title: "Remote Learning Security Risks",
      description: "The shift to online education has exposed vulnerabilities in virtual learning platforms, video conferencing tools, and cloud-based systems.",
      icon: <Server size={40} />
    },
    {
      title: "Legacy IT Infrastructure",
      description: "Many educational institutions struggle with outdated systems that lack modern security controls and compliance capabilities.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Regulatory Compliance Challenges",
      description: "Meeting requirements from FERPA, COPPA, state privacy laws, and international standards while maintaining operational efficiency.",
      icon: <FileCheck size={40} />
    }
  ];

  // Solutions Data
  const solutionsData = [
    {
      title: "Student Data Protection",
      description: "Cyberaries implements comprehensive data protection measures including encryption, access controls, and privacy-by-design principles to safeguard student information across all systems.",
      icon: <Database size={40} />
    },
    {
      title: "Secure Online Learning Platforms",
      description: "Deploy secure virtual learning environments with multi-factor authentication, session management, and real-time threat monitoring to protect remote education delivery.",
      icon: <GraduationCap size={40} />
    },
    {
      title: "Network and Endpoint Security",
      description: "Protect campus networks, student devices, and staff endpoints with advanced security solutions including EDR, XDR, and network segmentation.",
      icon: <Lock size={40} />
    },
    {
      title: "Identity and Access Management",
      description: "Implement robust IAM solutions for students, faculty, and staff with role-based access controls and secure authentication mechanisms.",
      icon: <Users size={40} />
    },
    {
      title: "Threat Detection and Response",
      description: "24/7 monitoring and incident response capabilities to detect and neutralize ransomware, phishing attacks, and other cyber threats targeting educational institutions.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Compliance and Privacy Management",
      description: "Achieve and maintain compliance with FERPA, COPPA, state privacy laws, and institutional policies through comprehensive audit and assessment programs.",
      icon: <FileCheck size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "Education Sector Expertise",
      description: "Specialized experience in K-12 and higher education security.",
      icon: <BookOpen size={50} />
    },
    {
      title: "350+ Clients Across Different Sectors",
      description: "Proven expertise across diverse industries.",
      icon: <Globe size={50} />
    },
    {
      title: "End-to-End Support",
      description: "From assessment to implementation and ongoing compliance.",
      icon: <Handshake size={50} />
    }
  ];

  // Smooth scroll to contact section or page
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="education-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <ScrollReveal animation="fade-down" delay={0}>
              <p className="hero-subtitle">Cybersecurity For Education Sector</p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="hero-title">
                Secure Learning Environments and <span className="text-gradient">Protect Student Data</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="hero-description">
                Educational institutions face unique cybersecurity challenges, from protecting sensitive student records to securing online learning platforms. As schools and universities embrace digital transformation, they must safeguard student privacy, ensure compliance with regulations like FERPA and COPPA, and defend against evolving cyber threats while maintaining accessible learning environments.
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
              <h2 className="section-title">Key Cybersecurity Challenges Facing Educational Institutions</h2>
              <p className="section-description">
                Understanding the unique security threats that schools and universities face in the digital age
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
              <h2 className="section-title">With Cyberaries, Build a Secure Educational Ecosystem</h2>
              <p className="section-description">
                Comprehensive security solutions designed for the unique needs of educational institutions
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
                Trusted by educational institutions across India
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
                    <span>Creates institution-specific security architecture</span>
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
              <h2 className="cta-title">Ready to Secure Your Educational Institution?</h2>
              <p className="cta-description">
                Let's discuss how we can help you protect student data and build a secure learning environment
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

export default Education;
