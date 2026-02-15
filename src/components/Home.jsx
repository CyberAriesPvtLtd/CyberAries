import React from 'react';
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
              <strong>24/7</strong>
              <span>Threat Monitoring</span>
            </div>
            <div className="stat-mini">
              <strong>15+</strong>
              <span>Industry Certifications</span>
            </div>
            <div className="stat-mini">
              <strong>99.9%</strong>
              <span>Detection Rate</span>
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
            <h2 className="center-highlight">
              <span>
                <strong>How We Secure Your Business</strong>
                <p>
                  A systematic approach to identifying vulnerabilities, implementing
                  defenses, and maintaining continuous security.
                </p>
              </span></h2>
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
                    if (testimonial.rating >= ratingValue) {
                      return <i key={i} className="fas fa-star"></i>;
                    } else if (testimonial.rating >= ratingValue - 0.5) {
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
          <a href="#contact" className="cta-btn">
            <span>Get Your Audit Quote Now</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>

    </main>
  );
};

export default Home;