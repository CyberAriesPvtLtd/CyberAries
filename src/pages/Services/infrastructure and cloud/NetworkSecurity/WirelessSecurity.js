import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import heroBgImage from '../../images/industries/bfsi/hero-image.jpg';
import overviewImage from '../../../../images/services/vapt/wireless-image.jpg';
import Footer from '../../../../components/Footer';

import { 
  FileText,
  Wifi,
  Target,
  Shield,
  Lock,
  AlertTriangle,
  Activity,
  RefreshCw,
  CheckCircle,
  Award,
  Users,
  Headphones
} from 'lucide-react';
import './WirelessSecurity.css';

/**
 * Wireless Security Testing Service Page
 * Securing Your Wireless Infrastructure Against Unauthorized Access
 */

const WirelessSecurity = () => {
  // Approach Methodology Data
  const approachSteps = [
    {
      title: "Scope Definition",
      description: "Define testing boundaries, target network segments, and wireless devices to be evaluated.",
      icon: <FileText size={40} />
    },
    {
      title: "Reconnaissance",
      description: "Identify active SSIDs, access points, and wireless devices within the target environment.",
      icon: <Wifi size={40} />
    },
    {
      title: "Network Mapping",
      description: "Analyze signal coverage, configurations, and device interconnections for vulnerabilities.",
      icon: <Target size={40} />
    },
    {
      title: "Encryption & Authentication Testing",
      description: "Evaluate encryption strength (WEP/WPA/WPA2/WPA3), and authentication mechanisms.",
      icon: <Lock size={40} />
    },
    {
      title: "Rogue Access Point Detection",
      description: "Identify unauthorized or malicious access points within the wireless network.",
      icon: <Shield size={40} />
    },
    {
      title: "Vulnerability Assessment",
      description: "Detect misconfigurations, weak passwords, and insecure network settings.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Exploitation Simulation",
      description: "Conduct controlled attacks to test for credentials theft, sniffing, or session hijacking.",
      icon: <Activity size={40} />
    },
    {
      title: "Reporting & Recommendations",
      description: "Provide detailed findings with prioritized remediation steps.",
      icon: <RefreshCw size={40} />
    },
    {
      title: "Re-Testing & Verification",
      description: "Validate corrective actions and confirm all wireless configurations post-fix.",
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
      'Basic wireless scanning with limited coverage and detection capabilities.',
      'Generic testing without customization for specific wireless environments.',
      'Misses sophisticated attacks like evil twin, rogue APs, and WPS vulnerabilities.',
      'Limited assessment of encryption protocols and authentication mechanisms.',
      'Superficial analysis of wireless segmentation and access controls.',
      'Reports lack actionable guidance for wireless infrastructure hardening.'
    ],
    cyberaries: [
      'Comprehensive wireless penetration testing with advanced reconnaissance tools.',
      'Customized testing for Wi-Fi networks, controllers, and connected IoT devices.',
      'Detection of sophisticated attacks including evil twin, rogue APs, and WPS flaws.',
      'Thorough evaluation of WEP/WPA/WPA2/WPA3 encryption and authentication strength.',
      'Deep analysis of wireless segmentation, guest networks, and access policies.',
      'Detailed, infrastructure-specific remediation with wireless security best practices.'
    ]
  };

  return (
    <div className="wireless-security-page sast-style-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Wireless Infrastructure Security</p>
            <h1 className="hero-title">
              WIRELESS SECURITY TESTING{' '}
              <span className="text-gradient">
                PROTECTING WIRELESS NETWORKS
              </span>
            </h1>
            <p className="hero-description">
              <strong>Wireless Security Testing</strong> identifies vulnerabilities, misconfigurations, and weak encryption protocols in 
              wireless networks that could allow attackers to <strong>intercept or manipulate sensitive data</strong>. It ensures your 
              wireless infrastructure remains protected against rogue access points, credential theft, and signal-
              based attacks.
            </p>
            <p className="hero-description">
              Our comprehensive testing covers <strong>Wi-Fi networks, access points, wireless controllers, encryption protocols 
              (WEP/WPA/WPA2/WPA3), authentication mechanisms, and rogue device detection</strong>—securing your wireless 
              environment against unauthorized access and data breaches.
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
                  At <strong>Cyberaries</strong>, we perform detailed <strong>wireless penetration testing and configuration 
                  assessments</strong> to detect security flaws in Wi-Fi networks, controllers, and connected devices. Our experts 
                  combine manual testing with advanced tools to uncover risks that automated scans often overlook.
                </p>
                <p className="overview-text">
                  We ensure robust <strong>authentication, encryption, and access control mechanisms</strong> are in place to safeguard 
                  your wireless environment from external threats and insider misuse. <strong>Cyberaries</strong> helps 
                  organizations build secure, resilient wireless ecosystems that maintain business continuity and your trust.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="overview-visual">
                <img 
                  src={overviewImage} 
                  alt="Wireless Security Testing" 
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

           <ScrollReveal direction="up" delay={100}>
            <div className="section-header text-center">
              <h2 className="section-title">Our Approach</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0}>
            <div className="methodology-header">
              <p className="methodology-title">
                Our audit methodology is built around consistency, insight, and detecting vulnerabilities before they escalate
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

      {/* Why Choose Section - MOVED BEFORE DIFFERENCE */}
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

      {/* Difference Section - MOVED AFTER WHY CHOOSE */}
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
                <h3 className="comparison-heading">Traditional Wireless Testing</h3>
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
                  Cyberaries Wireless Security Testing
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
                Ready to Secure Your Wireless Infrastructure?
              </h2>
              <p className="cta-description">
                Enhance protection, reduce risk, and support your growth objectives.
              </p>
              <button className="btn btn-primary btn-large">
                Contact With Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WirelessSecurity;
