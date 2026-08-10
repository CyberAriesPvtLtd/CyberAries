import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';
import heroBgImage from '../../images/industries/goverment/hero-image.webp';
import ctaBgImage from '../../images/cta/cta-background.webp';
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
 * Alternating dark/light rhythm matching the BFSI page design system.
 * Fully Responsive for PC, Tablet, and Mobile
 */

const Government = () => {
  // Key Challenges Data — 8 items, 4-column grid (existing content structure)
  const challengesData = [
    {
      title: "Sophisticated Threats to Critical Infrastructure",
      description: "Nation-state actors and organized groups increasingly target power grids, transit, and public networks.",
      icon: <AlertTriangle size={28} />
    },
    {
      title: "Data Privacy and Citizen Protection",
      description: "Agencies must safeguard vast stores of citizen data against breach, misuse, and unauthorized access.",
      icon: <Lock size={28} />
    },
    {
      title: "Securing Legacy Systems and Networks",
      description: "Decades-old systems remain in daily use, creating gaps modern attackers know how to exploit.",
      icon: <Server size={28} />
    },
    {
      title: "Risk Across Distributed Networks",
      description: "Departments, agencies, and regional offices each add their own exposure to a sprawling attack surface.",
      icon: <Globe size={28} />
    },
    {
      title: "Integrity of Digital Public Services",
      description: "Citizens depend on always-on digital services; any compromise erodes public trust immediately.",
      icon: <CheckCircle size={28} />
    },
    {
      title: "Secure Digital Transformation",
      description: "Modernization initiatives must move fast without opening new doors for attackers along the way.",
      icon: <Cloud size={28} />
    },
    {
      title: "Insider Threats and Access Risk",
      description: "Privileged access across large workforces raises the risk of accidental or deliberate insider incidents.",
      icon: <Users size={28} />
    },
    {
      title: "Data Localization and Privacy Compliance",
      description: "Strict, evolving regulations demand continuous alignment across national and sector-specific mandates.",
      icon: <FileCheck size={28} />
    }
  ];

  // Solutions Data
  const solutionsData = [
    {
      title: "Ensure Compliance with Data Regulations",
      description: "Cyberaries helps government entities meet stringent data protection and compliance requirements, including data localization mandates, through robust security frameworks and regular audits. Our solutions ensure adherence to national and international standards, safeguarding sensitive citizen data and critical infrastructure.",
      icon: <FileCheck size={28} />
    },
    {
      title: "Prevent Data Breaches and Unauthorized Access",
      description: "Cyberaries deploys advanced security measures, including multi-factor authentication, encryption, and continuous monitoring, to prevent data breaches. Our proactive threat intelligence identifies and mitigates risks before they can compromise critical government systems or citizen information.",
      icon: <Shield size={28} />
    },
    {
      title: "Defend Against Hacktivism and State-Sponsored Attacks",
      description: "Government agencies face sophisticated threats from hacktivists and state-sponsored actors. Cyberaries provides advanced threat detection, incident response capabilities, and security intelligence to defend against targeted attacks, ensuring the integrity and availability of government services.",
      icon: <Lock size={28} />
    },
    {
      title: "Enhance Security for Legacy Systems",
      description: "Many government entities rely on legacy systems that are vulnerable to modern cyber threats. Cyberaries offers specialized security solutions to protect these systems, including network segmentation, vulnerability management, and secure integration with modern infrastructure without disrupting critical operations.",
      icon: <Server size={28} />
    },
    {
      title: "Secure Your Hybrid Cloud Environments",
      description: "As governments migrate to hybrid cloud environments, Cyberaries ensures seamless security across on-premises and cloud infrastructure. Our solutions provide unified visibility, threat detection, and compliance management, enabling secure digital transformation while maintaining data sovereignty.",
      icon: <Cloud size={28} />
    },
    {
      title: "Strengthen Data and Service Security",
      description: "Cyberaries strengthens the security of government digital services through comprehensive protection strategies, including secure application development, API security, and data encryption. We ensure citizens can access government services safely while protecting against cyber threats and data breaches.",
      icon: <Database size={28} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "Partnered with CERT-In Empanelled",
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

  // Smooth scroll or navigate to contact
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  // Desktop-only parallax for the hero artwork layer, matching the
  // BFSI page. Parallax is skipped on tablet/mobile per the design
  // system, and the particle layer is hidden there via CSS as well.
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
    <div className="government-page">
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
              <p className="hero-subtitle">Cybersecurity For Government Entities</p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="hero-title">
                <span className="text-gradient">Robust Security for Public Entities</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="hero-description">
                Cyberaries offers cutting-edge cybersecurity solutions tailored for the government sector. As critical infrastructures increasingly face cyber threats, safeguarding national security and public trust is paramount. Our expert team specializes in protecting government entities from ever-evolving cyber threats while ensuring seamless public service delivery.
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

      {/* Key Challenges Section — Light + Grid */}
      <section className="key-challenges gov-light-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">The Security Landscape</p>
              <h2 className="section-title">Key Cybersecurity Challenges for Government Entities</h2>
              <p className="section-description">
                Understanding the complex security landscape facing government organizations
              </p>
            </div>
          </ScrollReveal>

          <div className="challenges-grid-4col">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 50}>
                <div className="gov-card">
                  <div className="gov-icon">
                    {challenge.icon}
                  </div>
                  <h3 className="gov-card-title">{challenge.title}</h3>
                  <p className="gov-card-description">{challenge.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CyberAries Approach + Solution Cards — one continuous Dark section */}
      <section className="cyberaries-approach gov-section-white">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">Our Approach</p>
              <h2 className="section-title">Safeguard Digital Sovereignty with Cyberaries</h2>
              <p className="section-description">
                Comprehensive security solutions designed for government operations
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {solutionsData.map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="gov-card">
                  <div className="gov-icon">
                    {solution.icon}
                  </div>
                  <h3 className="gov-card-title">{solution.title}</h3>
                  <p className="gov-card-description">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section — Light + grid — alternates with the
          plain-white Approach section above, and the gridded Key
          Challenges section before that: grid, plain, grid. */}
      <section className="why-choose gov-section-grey-grid">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">Trusted Partner</p>
              <h2 className="section-title">Why Choose Cyberaries?</h2>
              <p className="section-description">
                Trusted expertise in protecting critical government infrastructure
              </p>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="gov-card">
                  <div className="gov-icon">
                    {item.icon}
                  </div>
                  <h3 className="gov-card-title">{item.title}</h3>
                  <p className="gov-card-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cyberaries Difference Section — Light + grid, matches BFSI Difference section */}
      <section className="cyberaries-difference gov-light-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            {/* Traditional Security Consulting */}
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional gov-card">
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
              <div className="comparison-column cyberaries gov-card gov-card--featured">
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

      {/* CTA Section — Dark + bg image, closes the rhythm into the dark Footer (matches BFSI/About/Contact) */}
      <section
        className="cta-section gov-dark-section"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">Ready to Take on Your Cybersecurity Challenges Head-on?</h2>
              <p className="cta-description">
                Let's discuss how we can help you secure critical infrastructure and government operations. Our team works closely with you to identify real risks, close compliance gaps, and strengthen your defenses for the long term.
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

export default Government;
