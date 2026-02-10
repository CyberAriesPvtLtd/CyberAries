import React from 'react';
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
  Wifi,
  UserX,
  BookOpen
} from 'lucide-react';
import './Technology.css';
/**
 * ITeS Industry Page
 * Information Technology Enabled Services Security Solutions
 */

const ITeS = () => {
  // Key Challenges Data
  const challengesData = [
    {
      title: "Data Security & Privacy",
      description: "Handling sensitive customer data across borders requires robust encryption and compliance with regulations like GDPR, HIPAA, and SOC 2 to prevent data breaches.",
      icon: <Lock size={40} />
    },
    {
      title: "Infrastructure Vulnerability",
      description: "Complex hybrid and multi-cloud environments create multiple attack surfaces that need continuous monitoring and protection.",
      icon: <Server size={40} />
    },
    {
      title: "Emerging Threat Landscape",
      description: "Sophisticated phishing attacks, ransomware, and insider threats targeting remote workforce and cloud infrastructure.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Remote Work Exposure",
      description: "Distributed teams accessing corporate resources from various locations increase the risk of unauthorized access and data leakage.",
      icon: <Wifi size={40} />
    },
    {
      title: "Supply Chain Weakness",
      description: "Third-party vendors and partners in the ecosystem can introduce vulnerabilities and compliance risks.",
      icon: <Users size={40} />
    },
    {
      title: "Business Continuity Risk",
      description: "Cyber incidents can disrupt operations, leading to service downtime, financial losses, and damage to client relationships.",
      icon: <TrendingUp size={40} />
    },
    {
      title: "Meeting Regulatory Compliance",
      description: "Adhering to industry-specific regulations and maintaining certifications like ISO 27001, SOC 2, and PCI-DSS.",
      icon: <FileCheck size={40} />
    },
    {
      title: "Insider Threat Management",
      description: "Monitoring and controlling access by employees and contractors to prevent data theft and unauthorized activities.",
      icon: <UserX size={40} />
    }
  ];

  // Solutions Data
  const solutionsData = [
    {
      title: "Protect Sensitive Data and Achieve Compliance",
      description: "Implement comprehensive data protection strategies including encryption, tokenization, and DLP solutions. Ensure compliance with regulations like GDPR, HIPAA, and SOC 2 to safeguard client data. Regular audits help track compliance status and quickly identify potential vulnerabilities, reducing the risk of hefty fines and loss of customer trust. Supports multi-cloud compliance posture by integrating security controls across hybrid infrastructures. Automated tools verify that privacy policies align with regulatory frameworks, even as rules evolve globally.",
      icon: <Shield size={40} />
    },
    {
      title: "Strengthen Defense Against Advanced Cyber Threats",
      description: "This ITeS industry relies on services such as BPO, KPO, and software outsourcing and each of these faces unique challenges. With a growing threat landscape, you need to build a security posture that can predict, detect, and respond to advanced cyber risks. Leverage AI-driven threat intelligence, next-gen firewalls, and intrusion detection/prevention systems to neutralize sophisticated cyber risks. Implement Zero Trust architecture and multi-layered defenses backed by advanced threat hunting capabilities to ensure timely and effective mitigation. Stay ahead of threats like malware, ransomware, phishing, insider risks, and more with continuous monitoring and real-time incident response.",
      icon: <Lock size={40} />
    },
    {
      title: "Simplify Mobile Security and Device Management",
      description: "Enforce unified policies across all employee-owned devices in a Bring Your Own Device (BYOD) environment. Secure Enterprise Mobility Management (EMM) strategies keep corporate data separated from personal use, ensuring authorized access and protecting sensitive information. Use Mobile Device Management (MDM) platforms to enable encryption, data wiping capabilities, ensuring that any stolen or misplaced device doesn't result in data breaches. This comprehensive approach ensures seamless operations while maintaining strict security standards for remote and on-site employees.",
      icon: <Database size={40} />
    },
    {
      title: "Deploy Proactive Threat Detection and Response",
      description: "Establish a security operations center (SOC) when needed to, identify vulnerabilities early, and minimize potential damage. Integrating Security Information and Event Management (SIEM) solutions with Endpoint Detection and Response (EDR) or Extended Detection and Response (XDR) capabilities provides 24/7 insight into your network. Real-time threat intelligence feeds and AI-driven analysis help you quickly prioritize incidents that matter most, reducing response times from hours to minutes. Proactive monitoring and swift handling not only prevent significant damage but also maintain client confidence and regulatory compliance.",
      icon: <AlertTriangle size={40} />
    },
    {
      title: "Strengthen Your Cyber Resilience",
      description: "To enable the company to face the challenges of a multi-faceted threat landscape, you need to build security awareness. Ensure that employees understand threats like phishing, social engineering, and data mishandling. Having a detailed incident response plan that covers everything from initial detection and immediate containment to post-incident analysis is crucial. Keep your disaster recovery solutions updated with automated backups and failover mechanisms. Regularly practice tabletop exercises to ensure your teams are prepared for real-world scenarios. By turning every employee into a potential defender and having a mature security posture, you create a security-first culture that can swiftly detect and mitigate cyber risks before they escalate, protecting your reputation and bottom line.",
      icon: <BookOpen size={40} />
    },
    {
      title: "Securing Remote Access and Collaboration",
      description: "The rise of distributed and remote work forces the ITeS industry to enable VPN, two-factor authentication, and endpoint security. Secure collaboration tools with built-in encryption for video calls, file sharing, and project management platforms that meet security standards. Application layer security ensures that even when employees access resources from their own devices or unsecured networks, corporate data remains protected. Role-based access controls limit users' privileges to only what they need, preventing unauthorized users from accessing internal data breaches. Regular vulnerability scanning, coupled with patch management, keeps the entire environment resilient and compliant with evolving industry and client-specific security requirements.",
      icon: <Wifi size={40} />
    }
  ];

  // Why Choose Cyberaries Data
  const whyChooseItems = [
    {
      title: "CERT-In Empanelled",
      description: "Recognized by the Government of India for security audits.",
      icon: <Award size={50} />
    },
    {
      title: "350+ Clients Across Banking, IT, Insurance, Healthcare, and Manufacturing",
      description: "Proven expertise across diverse industries.",
      icon: <Globe size={50} />
    },
    {
      title: "End-to-End Support",
      description: "From scoping to remediation and final certification.",
      icon: <Handshake size={50} />
    }
  ];

  return (
    <div className="ites-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Cybersecurity For ITeS Industry</p>
            <h1 className="hero-title">
              Keep Your Digital Operations Secure with <span className="text-gradient">Future-Proof Cybersecurity Solutions</span>
            </h1>
            <p className="hero-description">
              In today's hyper-connected world, the Information Technology-Enabled Services (ITeS) industry stands at both a vanguard of innovation and a prime target for cyber threats. With digitization becoming integral to business operations, data breaches and sophisticated attacks against your clients' sensitive information are multiplying fast. Comprehensive security solutions now demand proactive defense strategies, rigorous compliance management, and continuous monitoring to safeguard your business reputation and maintain client trust.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="key-challenges">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-header text-center">
              <h2 className="section-title">Key Cybersecurity Challenges For The ITeS Industry</h2>
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
              <h2 className="section-title">Take a Multi-Layered Security Approach To Protect Your Business</h2>
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
                    Creates dependencies through ongoing services
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Delivers static PDFs that sit unimplemented
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Focuses on finding problems, not building solutions
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Recommends generic security practices
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Adds more tools to an already complex environment
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Takes their knowledge when they leave
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
                    <span className="bullet">•</span>
                    Builds self-sustaining security capabilities
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Delivers working code and automated systems
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Engineers solutions, not just identifies problems
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Creates business-specific security architecture
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Integrates and optimizes your existing investments
                  </li>
                  <li className="comparison-item">
                    <span className="bullet">•</span>
                    Embeds knowledge permanently in your systems
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
              <h2 className="cta-title">Contact our Cybersecurity Experts</h2>
              <p className="cta-description">
                Let's discuss how we can help you build a comprehensive security framework for your ITeS operations
              </p>
              <button className="btn btn-primary btn-large">Contact With Us</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ITeS;