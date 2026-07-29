import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';
import heroBgImage from '../../images/industries/technology/hero-image.png';
import {
  Cloud,
  GitBranch,
  Code2,
  Layers,
  Boxes,
  KeyRound,
  Shield,
  Lock,
  AlertTriangle,
  FileCheck,
  Users,
  Award,
  Globe,
  Handshake,
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './Technology.css';

/**
 * Technology Industry Page
 * Enterprise Software, Cloud, DevSecOps and SaaS Security Solutions
 * Alternating dark/light rhythm matching the BFSI / Government design system.
 * Fully Responsive for PC, Tablet, and Mobile
 */

const Technology = () => {
  // Key Challenges Data
  const challengesData = [
    {
      title: "Rapid Cloud Migration Risks",
      description: "Fast-moving migrations to multi-cloud and hybrid environments often outpace security controls, leaving misconfigurations and exposed assets.",
      icon: <Cloud size={28} />
    },
    {
      title: "Insecure CI/CD Pipelines",
      description: "Build and deployment pipelines that lack embedded security checks let vulnerabilities and secrets slip straight into production.",
      icon: <GitBranch size={28} />
    },
    {
      title: "API and Microservices Exposure",
      description: "Distributed, API-driven architectures expand the attack surface, with poorly authenticated endpoints becoming prime targets.",
      icon: <Code2 size={28} />
    },
    {
      title: "SaaS Sprawl and Shadow IT",
      description: "Unmanaged SaaS adoption across teams creates blind spots in visibility, access control, and data governance.",
      icon: <Layers size={28} />
    },
    {
      title: "Third-Party and Open-Source Vulnerabilities",
      description: "Dependencies on open-source libraries and third-party vendors introduce supply-chain risk that's difficult to track and patch.",
      icon: <Boxes size={28} />
    },
    {
      title: "Scaling Identity and Access Management",
      description: "Rapidly growing engineering teams and services make consistent, least-privilege access control harder to enforce at scale.",
      icon: <KeyRound size={28} />
    }
  ];

  // Solutions Data
  const solutionsData = [
    {
      title: "Secure Your Cloud Infrastructure",
      description: "Cyberaries hardens multi-cloud and hybrid environments with continuous configuration audits, workload protection, and automated compliance monitoring across AWS, Azure, and GCP.",
      icon: <Cloud size={28} />
    },
    {
      title: "Embed Security into DevSecOps Pipelines",
      description: "Shift security left with automated SAST, DAST, and dependency scanning built directly into your CI/CD workflows, catching vulnerabilities before they ship.",
      icon: <GitBranch size={28} />
    },
    {
      title: "Protect Your APIs and Microservices",
      description: "Deploy API gateways, schema validation, and runtime protection to secure service-to-service communication and prevent unauthorized data access.",
      icon: <Shield size={28} />
    },
    {
      title: "Strengthen Your SaaS Security Posture",
      description: "Gain unified visibility into SaaS usage with CASB and SSPM tooling, enforcing consistent policies and eliminating shadow IT risk across the organization.",
      icon: <Lock size={28} />
    },
    {
      title: "Manage Identity and Access at Scale",
      description: "Implement Zero Trust access, SSO, and fine-grained RBAC/ABAC controls that scale cleanly as your engineering and product teams grow.",
      icon: <KeyRound size={28} />
    },
    {
      title: "Enable Secure Digital Transformation",
      description: "Partner with our team to modernize infrastructure and applications with security engineered in from day one, not bolted on after launch.",
      icon: <Rocket size={28} />
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
    <div className="technology-page">
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
              <p className="hero-subtitle">Cybersecurity For Technology Industry</p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="hero-title">
                <span className="text-gradient">Engineer Security Into Every Deployment</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="hero-description">
                The technology sector moves faster than any other, and that speed is exactly what attackers exploit. As software companies scale across cloud, APIs, and SaaS ecosystems, the attack surface grows just as quickly. Staying ahead requires security that's built into the development lifecycle itself, not bolted on after release, so you can ship fast without shipping risk.
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
      <section className="key-challenges tech-light-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">The Threat Landscape</p>
              <h2 className="section-title">Key Cybersecurity Challenges Facing the Technology Industry</h2>
              <p className="section-description">
                Understanding the unique risks that software and technology companies face in a fast-shipping world
              </p>
            </div>
          </ScrollReveal>

          <div className="challenges-grid">
            {challengesData.map((challenge, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="tech-card">
                  <div className="tech-icon">
                    {challenge.icon}
                  </div>
                  <h3 className="tech-card-title">{challenge.title}</h3>
                  <p className="tech-card-description">{challenge.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CyberAries Approach + Solution Cards — one continuous Dark section */}
      <section className="cyberaries-approach tech-dark-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">Our Approach</p>
              <h2 className="section-title">With Cyberaries, Take a Proactive Cyber Security Approach</h2>
              <p className="section-description">
                Comprehensive security solutions tailored for cloud-native and fast-scaling technology teams
              </p>
            </div>
          </ScrollReveal>

          <div className="solutions-grid">
            {solutionsData.map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="tech-card tech-card--dark">
                  <div className="tech-icon">
                    {solution.icon}
                  </div>
                  <h3 className="tech-card-title">{solution.title}</h3>
                  <p className="tech-card-description">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section — Light + Grid, matching Key Challenges */}
      <section className="why-choose tech-light-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <p className="section-subtitle">Trusted Partner</p>
              <h2 className="section-title">Why Choose Cyberaries?</h2>
              <p className="section-description">
                Trusted by leading technology companies across India
              </p>
            </div>
          </ScrollReveal>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="tech-card">
                  <div className="tech-icon">
                    {item.icon}
                  </div>
                  <h3 className="tech-card-title">{item.title}</h3>
                  <p className="tech-card-description">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cyberaries Difference Section — Dark, matches Our Approach section */}
      <section className="cyberaries-difference tech-dark-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="difference-title">
              THE <span className="highlight-red">CYBERARIES</span> DIFFERENCE
            </h2>
          </ScrollReveal>

          <div className="comparison-grid">
            {/* Traditional Security Consulting */}
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="comparison-column traditional tech-card tech-card--dark">
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
              <div className="comparison-column cyberaries tech-card tech-card--featured">
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

      {/* CTA Section — Light, matches Key Challenges / Why Choose sections */}
      <section className="cta-section tech-light-section">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="cta-content">
              <h2 className="cta-title">Ready to Secure Your Technology Stack?</h2>
              <p className="cta-description">
                Let's discuss how we can help you build a security framework that keeps pace with your engineering velocity. Our team works closely with you to identify real risks, close gaps across cloud and code, and strengthen your defenses for the long term, not just for the next release.
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

export default Technology;
