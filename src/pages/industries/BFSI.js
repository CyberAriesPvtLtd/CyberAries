import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';
import heroBgImage from '../../images/industries/bfsi/hero-image.jpg';
import {
  Shield,
  Lock,
  AlertTriangle,
  FileCheck,
  Users,
  TrendingUp,
  Award,
  Globe,
  Handshake,
  Database,
  Server,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './BFSI.css';

/**
 * BFSI Industry Page
 * Banking, Financial Services, and Insurance Security Solutions
 * Dark Hero -> one continuous off-white content canvas -> Dark Footer.
 * All sections between Hero and Footer share the same off-white
 * surface + grid pattern (.bfsi-content-section); hierarchy comes
 * from spacing, typography, and cards rather than background color.
 * Fully Responsive for PC, Tablet, and Mobile
 */

const BFSI = () => {
  // Key Challenges Data
  const challengesData = [
    {
      title: "Evolving Fraud and Ransomware Attacks",
      description: "Cybercriminals are increasingly targeting financial institutions with sophisticated fraud schemes and ransomware attacks.",
      icon: <AlertTriangle size={28} />
    },
    {
      title: "Impacts of Attacks on BFSI Sector",
      description: "Breaches can lead to significant financial losses, regulatory penalties, and damage to customer trust and brand reputation.",
      icon: <TrendingUp size={28} />
    },
    {
      title: "Confusion in Architecture and Technology Stack",
      description: "Complex legacy systems combined with modern digital platforms create security gaps and integration challenges.",
      icon: <Server size={28} />
    },
    {
      title: "Addressing BFSI-Specific Security and Regulatory Compliance",
      description: "Meeting stringent requirements from RBI, SEBI, IRDAI, and global standards like PCI-DSS and ISO 27001.",
      icon: <FileCheck size={28} />
    }
  ];

  // Solutions Data
  const solutionsData = [
    {
      title: "Manage Ransomware and Data Breaches",
      description: "Cyberaries offers real-time APT, malware, and ransomware protection. Deploying multi-layered security defenses and incident response protocols to minimize damage and ensure quick recovery.",
      icon: <Shield size={28} />
    },
    {
      title: "Quickly Respond to Cybersecurity Gaps",
      description: "Cyberaries provides comprehensive visibility and control through DLP, EDR, XDR, and threat detection solutions. Implementing continuous monitoring and rapid response capabilities to address vulnerabilities.",
      icon: <Lock size={28} />
    },
    {
      title: "Keep Customer Data Safe",
      description: "Utilize AES and other best-in-class encryption standards. Multi-factor authentication and role-based access controls ensure that sensitive customer data remains protected at all times.",
      icon: <Database size={28} />
    },
    {
      title: "Protect Your Corporate and Customer Info",
      description: "Deploy endpoint protection, email security, and network monitoring. Use advanced encryption and access controls to safeguard both corporate intellectual property and customer information.",
      icon: <Users size={28} />
    },
    {
      title: "Defend Against Ransomware and Phishing",
      description: "Deploy AI/ML-driven anti-ransomware and anti-phishing tools. Regular security awareness training and email filtering help detect and block malicious attempts before they cause harm.",
      icon: <AlertTriangle size={28} />
    },
    {
      title: "Ensure Compliance with Data Privacy Regulations",
      description: "Meet RBI, SEBI, IRDAI mandates along with PCI-DSS and ISO 27001 requirements. Conduct regular audits, risk assessments, and implement privacy-by-design principles.",
      icon: <FileCheck size={28} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "Partnered CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits.",
      icon: <Award size={28} />
    },
    {
      title: "350+ Clients Across Different Sector",
      description: "Proven expertise across diverse industries.",
      icon: <Globe size={28} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification.",
      icon: <Handshake size={28} />
    }
  ];

  // Smooth scroll to contact section or page
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  // Desktop-only parallax for the hero artwork layer. Parallax is
  // intentionally skipped on tablet/mobile per the design brief, and
  // the particle layer is hidden there via CSS as well.
  const heroRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1025px)');
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);
    updateIsDesktop();
    mediaQuery.addEventListener('change', updateIsDesktop);
    return () => mediaQuery.removeEventListener('change', updateIsDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <div className="bfsi-page">
      {/* Hero Section — Dark */}
      <section className="hero-section" ref={heroRef}>
        <motion.div
          className="hero-bg-layer"
          style={{
            backgroundImage: `url(${heroBgImage})`,
            y: isDesktop ? parallaxY : 0
          }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-glow"></div>
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="hero-particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="container">
          <div className="hero-content">
            <ScrollReveal animation="fade-down" delay={0}>
              <p className="hero-subtitle">Cybersecurity For BFSI Industry</p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="hero-title">
                <span className="text-gradient">Infuse Digital Trust</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="hero-description">
                The BFSI sector is at the forefront of digital transformation, making it a prime target for cyber threats. As financial institutions digitize operations, they face evolving challenges like ransomware, data breaches, and regulatory compliance. Securing customer trust and meeting stringent standards requires a proactive cybersecurity approach to safeguard sensitive data, ensure business continuity, and maintain regulatory adherence.
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

      {/* Key Challenges Section — part of the continuous off-white canvas */}
      <section className="key-challenges bfsi-content-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">The Threat Landscape</p>
              <h2 className="section-title">Key Cybersecurity Challenges Facing the BFSI Industry</h2>
              <p className="section-description">
                Understanding the unique threats that financial institutions face in today's digital landscape
              </p>
            </div>
          </ScrollReveal>

          <div className="challenges-grid">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bfsi-card">
                  <div className="bfsi-icon">
                    {challenge.icon}
                  </div>
                  <h3 className="bfsi-card-title">{challenge.title}</h3>
                  <p className="bfsi-card-description">{challenge.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CyberAries Approach + Solution Cards — part of the continuous off-white canvas */}
      <section className="cyberaries-approach bfsi-content-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">Our Approach</p>
              <h2 className="section-title">With Cyberaries, Take a Proactive Cyber Security Approach</h2>
              <p className="section-description">
                Comprehensive security solutions tailored for the financial services industry
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {solutionsData.map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bfsi-card">
                  <div className="bfsi-icon">
                    {solution.icon}
                  </div>
                  <h3 className="bfsi-card-title">{solution.title}</h3>
                  <p className="bfsi-card-description">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section — part of the continuous off-white canvas */}
      <section className="why-choose bfsi-content-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">Trusted Partner</p>
              <h2 className="section-title">Why Choose Cyberaries?</h2>
              <p className="section-description">
                Trusted by leading financial institutions across India
              </p>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="bfsi-card">
                  <div className="bfsi-icon">
                    {item.icon}
                  </div>
                  <h3 className="bfsi-card-title">{item.title}</h3>
                  <p className="bfsi-card-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cyberaries Difference Section — part of the continuous off-white canvas */}
      <section className="cyberaries-difference bfsi-content-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            {/* Traditional Security Consulting */}
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional bfsi-card">
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
              <div className="comparison-column cyberaries bfsi-card bfsi-card--featured">
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

      {/* CTA Section — final part of the continuous off-white canvas, before the dark Footer */}
      <section className="cta-section bfsi-content-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">Ready to Secure Your Financial Operations?</h2>
              <p className="cta-description">
                Let's discuss how we can help you build a robust cybersecurity framework tailored to your institution. Our team works closely with you to identify real risks, close compliance gaps, and strengthen your defenses for the long term, not just for the next audit cycle.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large cta-btn">
                  <span>Contact Us</span>
                  <ArrowRight size={18} className="btn-icon" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default BFSI;
