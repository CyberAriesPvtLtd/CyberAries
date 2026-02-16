import React from 'react';
import { Link } from 'react-router-dom';
import FourDApproach from "./FourDApproach";
import './Home.css';
import {
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaClipboardCheck
} from "react-icons/fa";
import { Network, Lock, UserCheck, Eye, CloudUpload, Settings } from 'lucide-react';


const Home = () => {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Vulnerability Assessment',
      description: 'Identify weaknesses before attackers do, reduce risk exposure, and strengthen your overall security posture with comprehensive vulnerability scanning.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Data Protection',
      description: 'Safeguard sensitive data against breaches and leaks with strong encryption, access control, and secure storage solutions.'
    },
    {
      icon: 'fas fa-award',
      title: 'Brand Reputation',
      description: 'Maintain customer trust and brand integrity by preventing cyber incidents and demonstrating strong data responsibility.'
    },
    {
      icon: 'fas fa-search-plus',
      title: 'Advanced Threat Detection',
      description: 'Leverage real-time monitoring and AI-driven analytics to detect threats on your systems before they cause damage.'
    },
    {
      icon: 'fas fa-fingerprint',
      title: 'Zero Trust Architecture',
      description: 'Enforce strict access control and verification at every level to prevent lateral movement in your network.'
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Compliance & Governance',
      description: 'Achieve and maintain compliance with ISO 27001, RBI guidelines, GDPR, and other regulatory requirements.'
    }
  ];


  const services = [
    {
      icon: Network,
      title: 'Network Security',
      description: 'Deploying firewalls and intrusion detection systems to safeguard networks from unauthorized access and threats.'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'Encrypting sensitive data at rest and in transit using advanced encryption standards to prevent data breaches.'
    },
    {
      icon: UserCheck,
      title: 'Identity & Access Management',
      description: 'Managing user identities and access with MFA and detailed role-based control for enhanced security.'
    },
    {
      icon: Eye,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock monitoring with advanced SIEM systems for real-time detection and incident response.'
    },
    {
      icon: CloudUpload,
      title: 'Backup & Recovery',
      description: 'Protecting critical data with secure backups and rapid recovery plans to ensure business continuity.'
    },
    {
      icon: Settings,
      title: 'Security Configuration',
      description: 'Hardening systems and applying secure configurations across all infrastructure components.'
    }
  ];

  // eslint-disable-next-line no-unused-vars
  const processSteps = [
    {
      number: 1,
      title: 'Security Assessment',
      description: 'We conduct a comprehensive analysis of your current security posture, identifying vulnerabilities and potential threats across all systems.'
    },
    {
      number: 2,
      title: 'Risk Analysis',
      description: 'Our experts prioritize risks based on impact and likelihood, creating a roadmap for addressing the most critical security gaps.'
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'We deploy tailored security solutions, from firewalls to encryption, ensuring comprehensive protection across your infrastructure.'
    },
    {
      number: 4,
      title: 'Clearing Audit & Report Generation',
      description: 'Comprehensive audit documentation and detailed reporting to ensure compliance and provide clear insights into your security status.'
    }
  ];

  const testimonials = [
    {
      avatar: 'RP',
      name: 'Rajesh Patel',
      role: 'CTO',
      company: 'FinTech Solutions Pvt Ltd',
      date: '15 January 2025',
      rating: 5,
      text: 'CyberAries helped us identify critical vulnerabilities before attackers could exploit them. Their team is proactive and truly knows their craft.'
    },
    {
      avatar: 'AS',
      name: 'Anita Sharma',
      role: 'IT Security Head',
      company: 'Global Logistics Corp',
      date: '28 December 2024',
      rating: 5,
      text: 'Thanks to their 24/7 monitoring, we sleep better knowing our systems are safe. They\'ve prevented several potential breaches already.'
    },
    {
      avatar: 'VK',
      name: 'Vikram Kumar',
      role: 'Compliance Officer',
      company: 'Healthcare Systems Ltd',
      date: '10 December 2024',
      rating: 4.8,
      text: 'Their penetration testing gave us a clear picture of our risks. The remediation plan was actionable and effective. Highly recommended.'
    },
    {
      avatar: 'PM',
      name: 'Priya Mehta',
      role: 'CISO',
      company: 'E-Commerce Platform',
      date: '5 December 2024',
      rating: 5,
      text: 'Outstanding RBI compliance audit! Their detailed documentation and remediation support made the entire process smooth and hassle-free.'
    },
    {
      avatar: 'SK',
      name: 'Sanjay Kapoor',
      role: 'VP Technology',
      company: 'Manufacturing Group',
      date: '22 November 2024',
      rating: 4.8,
      text: 'Impressed with their SEBI audit expertise. The team understood our requirements perfectly and delivered comprehensive security assessment on time.'
    },
    {
      avatar: 'NR',
      name: 'Neha Reddy',
      role: 'Security Manager',
      company: 'Banking Solutions Inc',
      date: '18 November 2024',
      rating: 5,
      text: 'Professional approach and deep technical knowledge. Their incident response team helped us contain a potential threat within hours. Excellent service!'
    }
  ];

  // eslint-disable-next-line no-unused-vars
  const stripItems = [
    'Endpoint Protection', 'Threat Intelligence', 'Penetration Testing',
    'Security Audits', 'Incident Response', 'Network Security',
    'Cloud Security', 'Compliance Management'
  ];


  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            {/* Badge */}
            <div className="hero-badge">
              <i className="fas fa-shield-alt"></i>
              <span>Trusted By 500+ Organizations</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title">
              Comprehensive
              <span className="hero-highlight"> Cyber Security</span>
              <br />
              Solutions For Your Business
            </h1>

            {/* Description */}
            <p className="hero-description">
              Empowering organizations with expert audits, continuous monitoring, and deep penetration testing ensuring resilience, compliance, and confidence in every layer of your digital ecosystem.
            </p>

            {/* Feature Bullets */}
            <div className="hero-features">
              <div className="hero-feature">
                <i className="fas fa-check-circle"></i>
                <span>ISO 27001 Certified Team</span>
              </div>
              <div className="hero-feature">
                <i className="fas fa-check-circle"></i>
                <span>SEBI & RBI Compliance Experts</span>
              </div>
              <div className="hero-feature">
                <i className="fas fa-check-circle"></i>
                <span>24/7 Security Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="#book" className="btn-primary">
                Get Started
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#services" className="btn-secondary">Explore Services</a>
            </div>

            {/* Trust Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Security Audits</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">99.9%</div>
                <div className="hero-stat-label">Threat Detection</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-label">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Why Choose Us</div>
            <h2 className="section-title">Cybersecurity Excellence</h2>
            <p className="section-description">
              Our comprehensive approach covers every aspect of cybersecurity, ensuring your business stays protected, compliant, and resilient.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="security-intro">
        <div className="container">
          <h2 className="security-title">
            Your Security, <span>Our Mission</span>
          </h2>

          <p className="security-text">
            We don't just detect threats—we prevent them. From proactive monitoring and
            incident response to compliance management and security training, we deliver
            comprehensive protection that keeps your business ahead of evolving cyber risks.
          </p>

          <div className="security-stats-mini">
            <div className="stat-mini">
              <strong>50+</strong>
              <span>Security Experts</span>
            </div>
            <div className="stat-mini">
              <strong>15+</strong>
              <span>Industry Certifications</span>
            </div>
            <div className="stat-mini">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </section>


      <section className="home-container">
        <div className="section-header">
        </div>
        <div className="security-circle">

          {/* Static thin ring */}
          <div className="static-ring"></div>

          {/* Rotating thick arc */}
          <div className="rotating-arc"></div>

          {/* Center Content */}
          <div className="center-content">
            <div className="center-highlight">
              <span>
                <strong>How We Secure Your Business</strong>
                <span className="center-desc">
                  A systematic approach to identifying vulnerabilities, implementing
                  defenses, and maintaining continuous security.
                </span>
              </span></div>
          </div>

          {/* Box 1 - Security Assessment */}
          <div className="cycle-card top">
            <h4><FaShieldAlt /> Security Assessment</h4>
            <p>
              We conduct a comprehensive analysis of your current security posture,
              identifying vulnerabilities and potential threats across all systems.
            </p>
          </div>

          {/* Box 2 - Risk Analysis */}
          <div className="cycle-card right">
            <h4><FaChartLine /> Risk Analysis</h4>
            <p>
              Our experts prioritize risks based on impact and likelihood, creating
              a roadmap for addressing the most critical security gaps.
            </p>
          </div>

          {/* Box 3 - Implementation */}
          <div className="cycle-card bottom">
            <h4><FaCogs /> Implementation</h4>
            <p>
              We deploy tailored security solutions, from firewalls to encryption,
              ensuring comprehensive protection across your infrastructure.
            </p>
          </div>

          {/* Box 4 - Audit & Report */}
          <div className="cycle-card left">
            <h4><FaClipboardCheck /> Clearing Audit & Report Generation</h4>
            <p>
              Comprehensive audit documentation and detailed reporting to ensure
              compliance and provide clear insights into your security status.
            </p>
          </div>

        </div>
      </section>


      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">What We Provide</div>
            <h2 className="section-title">Robust Cybersecurity Services</h2>
            <p className="section-description">
              Whether you're safeguarding sensitive data or ensuring compliance, our robust cybersecurity services help you stay secure, resilient, and ahead of the threat curve.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-card-inner">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <service.icon size={32} strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FourDApproach />

      <section>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Testimonials</div>
            <h2 className="section-title">Hear It from Our Happy Customers</h2>
            <p className="section-description">
              See how our cybersecurity solutions have helped businesses stay secure, compliant, and resilient.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                    <div className="testimonial-company">{testimonial.company}</div>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    const diff = testimonial.rating - (ratingValue - 1);
                    if (diff >= 0.75) {
                      return <i key={i} className="fas fa-star"></i>;
                    } else if (diff >= 0.25) {
                      return <i key={i} className="fas fa-star-half-alt"></i>;
                    } else {
                      return <i key={i} className="far fa-star"></i>;
                    }
                  })}
                  <span className="rating-number">{testimonial.rating.toFixed(1)}</span>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-date-bottom">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">500+</div>
              <div className="stat-label">Security Audits Completed</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Threat Detection Rate</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Security Monitoring</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-building"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">150+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="book">
        <div className="container">
          <h2 className="cta-title">Ready to Secure Your Business?</h2>
          <p className="cta-description">
            We focus on understanding your business first—not selling tools. Schedule a consultation with our security experts to build a resilient cybersecurity strategy that lasts.
          </p>
          <Link to="/contact" className="cta-btn">
            <span>Get Your Audit Quote Now</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Home;