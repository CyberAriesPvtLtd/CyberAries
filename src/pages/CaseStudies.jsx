import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Award, Target, Layers, FileText, ArrowRight } from 'lucide-react';
import './CaseStudies.css';
import ctaBg from '../images/cta/cta-background.webp';
import heroBg from '../images/news-insights/news-insights-hero.webp';

export const caseStudiesData = [
  {
    id: "iso-27001-readiness",
    category: "GRC & Compliance",
    title: "ISO 27001 Readiness for a Growing Technology Business",
    subtitle: "Developing a structured, auditable security framework to satisfy enterprise constraints and improve overall information security governance.",
    challenge: "The organization needed a structured information security management framework to support enterprise requirements and improve its overall security posture. Fragmented policies, incomplete risk records, and lack of consistent evidence management created barriers during customer security questionnaires.",
    engagement: [
      "ISMS Gap Assessment & Scope Definition",
      "Asset Identification and Risk Assessment / Treatment Planning",
      "Policy, Procedure, and Security Controls Development",
      "Control Mapping (Annex A Controls Framework)",
      "Evidence Management & Preparation Support",
      "Internal Auditing and Dry Run Assessment Readiness",
      "External Certification Support & Audit Preparation"
    ],
    outcome: "A structured, certified, and auditable security framework aligned fully with ISO 27001 requirements. The business achieved certification readiness, establishing repeatable governance policies and resolving vendor security review bottlenecks.",
    relatedServices: [
      { name: "GRC & Compliance", link: "/services/regulatory" },
      { name: "ISO 27001", link: "/services/compliance/iso-27001" },
      { name: "IT Risk Assessment", link: "/services" }
    ]
  },
  {
    id: "privacy-healthcare",
    category: "Privacy & Data Protection",
    title: "Privacy Readiness for a Healthcare & Diagnostics Organization",
    subtitle: "Conducting data privacy maturity mapping and establishing a data-flow governance model to protect sensitive patient records.",
    challenge: "The organization handled sensitive personal and healthcare-related information across multiple applications, operational centers, and partner networks. Challenges included lack of data-flow transparency, consent tracking inconsistencies, and unclear data principal request handling policies.",
    engagement: [
      "Data Inventory Mapping & Flow Analysis",
      "Privacy Impact Assessment (PIA) on Patient Records",
      "Consent & Notice Policy Review",
      "Retention & De-identification Assessment",
      "Privacy Governance Documentation & Procedures",
      "Regulatory Readiness Gap Assessment (including DPDP Act context)"
    ],
    outcome: "A robust privacy governance framework with clear ownership, documented personal data flows, and active consent controls. The organization resolved compliance concerns and aligned operational practices with international data protection requirements.",
    relatedServices: [
      { name: "Global Privacy Laws", link: "/services/privacy" },
      { name: "Indian Privacy Laws", link: "/services" },
      { name: "Privacy Frameworks", link: "/services/compliance/iso-27701" }
    ]
  },
  {
    id: "risk-based-it-audit",
    category: "IT Audit & Risk",
    title: "Building a Risk-Based IT Audit Program for a Financial Services Organization",
    subtitle: "Establishing critical control reviews and evidence matrices to ensure continuous compliance and satisfy regulatory expectations.",
    challenge: "A leading financial services provider required a structured, repeatable IT audit methodology to systematically review access controls, change management workflows, and third-party risk management parameters.",
    engagement: [
      "IT Risk Assessment & Universe Definition",
      "Audit Charter and Risk-based Scheduling Plans",
      "Control Effectiveness Testing (Design & Operating)",
      "Evidence Collection Framework & Validation",
      "Findings Classification and Remediation Matrices",
      "Executive Dashboard Reporting & Management Reviews"
    ],
    outcome: "A fully functional risk-based IT audit program providing executive visibility into control compliance, auditable change tracks, and structured findings remediation systems to address regulatory scrutiny.",
    relatedServices: [
      { name: "RBI Compliance", link: "/services/regulatory" },
      { name: "SOC 2 Attestation Readiness", link: "/services/soc-compliance/soc-2" },
      { name: "IT Risk Management", link: "/services" }
    ]
  },
  {
    id: "vapt-app-security",
    category: "VAPT & Security Testing",
    title: "Strengthening an Enterprise Application Security Posture",
    subtitle: "Executing deep penetration testing and code review to protect core business platforms from exploitation.",
    challenge: "The client needed deep, human-led validation of their production application and API ecosystems, going beyond basic automated vulnerability scanners to identify logical flaws and access control bypasses.",
    engagement: [
      "Web Application Penetration Testing (OWASP Top 10)",
      "RESTful API & Endpoint Security Verification",
      "Authentication and Business Logic Attack Scenarios",
      "Manual Exploit Validation & False-Positive Elimination",
      "Prioritized Risk Reporting & Severity Classification",
      "Developer Remediation Walkthroughs & Retesting"
    ],
    outcome: "Elimination of high-severity application risks, secure API authentication controls, and a developer roadmap to maintain security health across the application lifecycle.",
    relatedServices: [
      { name: "Web App Security", link: "/services/web-app-security" },
      { name: "API Security Testing", link: "/services/api-security" },
      { name: "VAPT Services", link: "/services/vulnerability-assessment" }
    ]
  },
  {
    id: "infrastructure-network-security",
    category: "Network & Infrastructure Security",
    title: "Securing a Distributed Enterprise Infrastructure",
    subtitle: "Reviewing network architecture, firewall rule policies, and configuration baselines to enforce network segmentation.",
    challenge: "A geographically distributed infrastructure suffered from inconsistent configuration management, over-permissive firewall configurations, and lack of granular segmentation between business units.",
    engagement: [
      "Network Architecture & Topology Assessment",
      "Firewall Rule-Base Analysis & Optimization",
      "Internal Segmentation & Access Control Review",
      "Server & Active Directory Hardening Reviews",
      "Secure Baseline Audits against CIS Benchmarks",
      "Infrastructure Risk Remediation Priority Mapping"
    ],
    outcome: "Optimized firewall configurations, a defined segmentation matrix to contain threats, and a robust baseline hardening guide implemented across distributed locations.",
    relatedServices: [
      { name: "Network Security Review", link: "/services/network-security" },
      { name: "Firewall Rule Review", link: "/services/firewall-rule-review" },
      { name: "Cloud Config Review", link: "/services/cloud" }
    ]
  },
  {
    id: "security-governance",
    category: "Security Governance",
    title: "Establishing a Practical Cybersecurity Governance Framework",
    subtitle: "Transitioning an organization from ad-hoc security actions to a formalized, metric-driven security governance model.",
    challenge: "The organization needed to consolidate fragmented security tasks into a structured, unified governance approach aligned with business strategies and compliance requirements.",
    engagement: [
      "Governance Maturity Mapping & Gap Analysis",
      "Security Policy Framework & Standards Authoring",
      "Control Ownership and RACI Matrix Assignment",
      "IT Security Risk Register Implementation",
      "KPI & Security Metric Dashboard Definitions",
      "Management Reporting & Incident Response Frameworks"
    ],
    outcome: "An operational cybersecurity governance model with defined roles, standard policies, measurable metrics, and a regular cadence of risk reviews for management decision-making.",
    relatedServices: [
      { name: "Consulting Services", link: "/services/consulting" },
      { name: "Compliance Mapping", link: "/services/compliance/iso-27001" },
      { name: "Risk Management", link: "/services" }
    ]
  }
];

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies | CyberAries";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-studies-page">
      {/* 1. DARK HERO SECTION */}
      <section className="case-hero bg-dark-cyber-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="tech-bg-effects">
          <div className="hero-cyber-grid-cases"></div>
          <div className="hero-radial-glow"></div>
        </div>
        <div className="container case-hero-content">
          <div className="breadcrumb-nav-cases">
            <Link to="/" className="breadcrumb-link-cases">Home</Link>
            <span className="breadcrumb-separator-cases">/</span>
            <span className="breadcrumb-active-cases">Case Studies</span>
          </div>
          <h1 className="case-hero-title">Security in Practice</h1>
          <p className="case-hero-subtitle">
            Real-world cybersecurity, GRC, compliance, and privacy engagements designed around business outcomes.
          </p>
        </div>
      </section>

      {/* 2. OFF-WHITE INTRO SECTION */}
      <section className="case-intro-section bg-light-cases">
        <div className="container">
          <div className="section-header-minimal-cases text-center">
            <span className="accent-label-red">SELECTED ENGAGEMENTS</span>
            <h2 className="section-title-editorial-cases">Real-World Security Challenges. Practical Outcomes.</h2>
            <p className="case-intro-lead">
              CyberAries delivers custom-fit consulting, audits, assessments, and technical validations. 
              Our engagements bridge the gap between technical requirements and strategic compliance across 
              cybersecurity, GRC, privacy, risk management, and security testing.
            </p>
            <span className="confidentiality-notice">* Client details withheld for confidentiality.</span>
          </div>
        </div>
      </section>

      {/* 3. WHITE + SUBTLE GRID SECTION (FEATURED + GRID) */}
      <section className="case-list-section bg-white-grid-cases">
        <div className="container">
          {/* Featured Case Study */}
          <div className="featured-case-container">
            <div className="featured-case-card">
              <div className="featured-case-left">
                <span className="case-card-cat">{caseStudiesData[0].category}</span>
                <h3 className="featured-case-title">{caseStudiesData[0].title}</h3>
                <p className="featured-case-challenge">
                  <strong>Challenge:</strong> {caseStudiesData[0].challenge.slice(0, 200)}...
                </p>
                <div className="featured-case-areas">
                  {caseStudiesData[0].engagement.slice(0, 3).map((area, idx) => (
                    <span key={idx} className="badge-area">{area}</span>
                  ))}
                </div>
                <Link to={`/resources/case-studies/${caseStudiesData[0].id}`} className="view-case-link">
                  VIEW CASE STUDY <ArrowRight size={16} />
                </Link>
              </div>
              <div className="featured-case-right">
                {/* Abstract Geometric Cybersecurity Shield Graphic */}
                <div className="network-abstract-graphic">
                  <svg width="220" height="220" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="glowing-svg-shield">
                    <circle cx="120" cy="120" r="100" stroke="rgba(208, 5, 13, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="120" cy="120" r="85" stroke="rgba(208, 5, 13, 0.25)" strokeWidth="1.5" />
                    <line x1="120" y1="20" x2="120" y2="220" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                    <line x1="20" y1="120" x2="220" y2="120" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                    <path d="M120 45 L175 65 V125 C175 165 145 188 120 195 C95 188 65 165 65 125 V65 L120 45 Z" 
                          fill="rgba(208, 5, 13, 0.05)" 
                          stroke="#D0050D" 
                          strokeWidth="2.5" 
                          strokeLinejoin="round"
                          className="shield-path-glow" />
                    <path d="M120 60 L160 75 V120 C160 150 140 170 120 176 C100 170 80 150 80 120 V75 L120 60 Z" 
                          stroke="rgba(255, 255, 255, 0.25)" 
                          strokeWidth="1.5" 
                          strokeDasharray="3 3" />
                    <path d="M112 120 H128 M120 112 V128" stroke="#D0050D" strokeWidth="2" />
                    <circle cx="120" cy="120" r="115" stroke="rgba(208, 5, 13, 0.85)" strokeWidth="2.5" strokeDasharray="15 35" className="radar-sweep" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="cases-grid-wrapper">
            {caseStudiesData.slice(1).map((item) => (
              <div key={item.id} className="case-item-card">
                <div className="case-card-border-top"></div>
                <span className="case-card-cat">{item.category}</span>
                <h3 className="case-card-title">{item.title}</h3>
                <p className="case-card-challenge-preview">
                  {item.subtitle}
                </p>
                <div className="case-card-focus-list">
                  {item.engagement.slice(0, 2).map((pt, i) => (
                    <div key={i} className="focus-list-item">
                      <span className="focus-dot"></span>
                      <span className="focus-text">{pt}</span>
                    </div>
                  ))}
                </div>
                <div className="case-card-footer">
                  <Link to={`/resources/case-studies/${item.id}`} className="case-card-arrow-link">
                    VIEW CASE STUDY <ArrowRight size={14} className="card-arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OFF-WHITE METHODOLOGY SECTION */}
      <section className="case-methodology-section bg-light-cases">
        <div className="container">
          <div className="section-header-minimal-cases text-center">
            <span className="accent-label-red">METHODOLOGY</span>
            <h2 className="section-title-editorial-cases">How We Approach Security Challenges</h2>
          </div>
          <div className="methodology-grid">
            <div className="method-step-card">
              <div className="method-step-num">01</div>
              <h3 className="method-step-title">Assess</h3>
              <p className="method-step-desc">Understand the operational environment, critical assets, threat vector exposures, and strategic business requirements.</p>
            </div>
            <div className="method-step-card">
              <div className="method-step-num">02</div>
              <h3 className="method-step-title">Analyze</h3>
              <p className="method-step-desc">Identify control gaps, configurations, and vulnerabilities. Map exposures directly to compliance and risk objectives.</p>
            </div>
            <div className="method-step-card">
              <div className="method-step-num">03</div>
              <h3 className="method-step-title">Implement</h3>
              <p className="method-step-desc">Design and roll out practical policies, technical segmentation baselines, and custom security controls.</p>
            </div>
            <div className="method-step-card">
              <div className="method-step-num">04</div>
              <h3 className="method-step-title">Validate</h3>
              <p className="method-step-desc">Perform security audits, vulnerability validation, and continuous testing to ensure frameworks adapt to compliance changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHITE + SUBTLE GRID OUTCOMES SECTION */}
      <section className="case-outcomes-section bg-white-grid-cases">
        <div className="container">
          <div className="section-header-minimal-cases text-center">
            <span className="accent-label-red">IMPACT</span>
            <h2 className="section-title-editorial-cases">What Our Engagements Deliver</h2>
          </div>
          <div className="outcomes-grid">
            <div className="outcome-block">
              <div className="outcome-icon-box">
                <Target size={20} />
              </div>
              <h3 className="outcome-block-title">Security Visibility</h3>
              <p className="outcome-block-desc">Clear mapping of assets, networks, application endpoints, and risk metrics across business units.</p>
            </div>
            <div className="outcome-block">
              <div className="outcome-icon-box">
                <Layers size={20} />
              </div>
              <h3 className="outcome-block-title">Risk Prioritization</h3>
              <p className="outcome-block-desc">Remediation roadmaps classified by vulnerability severity, operational cost, and compliance criticality.</p>
            </div>
            <div className="outcome-block">
              <div className="outcome-icon-box">
                <Award size={20} />
              </div>
              <h3 className="outcome-block-title">Compliance Readiness</h3>
              <p className="outcome-block-desc">Systematic alignment of organizational security management systems with international standards.</p>
            </div>
            <div className="outcome-block">
              <div className="outcome-icon-box">
                <Shield size={20} />
              </div>
              <h3 className="outcome-block-title">Stronger Controls</h3>
              <p className="outcome-block-desc">Hardened network perimeters, API authorization logic, and baseline configuration rules.</p>
            </div>
            <div className="outcome-block">
              <div className="outcome-icon-box">
                <FileText size={20} />
              </div>
              <h3 className="outcome-block-title">Audit Readiness</h3>
              <p className="outcome-block-desc">Formalized security evidence binders, audit trails, and control matrices to simplify reviews.</p>
            </div>
            <div className="outcome-block">
              <div className="outcome-icon-box">
                <CheckCircle size={20} />
              </div>
              <h3 className="outcome-block-title">Continuous Improvement</h3>
              <p className="outcome-block-desc">Defined metric systems and continuous validation plans to monitor security health over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DARK CTA SECTION */}
      <section className="case-cta bg-dark-cyber-cases-cta" style={{ backgroundImage: `url(${ctaBg})` }}>
        <div className="container text-center">
          <span className="accent-label-red">CONTACT US</span>
          <h2 className="cta-title">SECURITY CHALLENGE? LET'S TALK.</h2>
          <p className="cta-description">
            Whether you're preparing for certification, strengthening security controls, assessing risk, 
            or improving compliance readiness, CyberAries can help you build a practical roadmap.
          </p>
          <div className="cta-buttons-container">
            <Link to="/contact" className="btn-rbi btn-primary-rbi">
              Talk to a Security Expert
            </Link>
            <a href="https://book.titan.email/cyberaries" target="_blank" rel="noopener noreferrer" className="btn-rbi btn-secondary-rbi">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
