import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Bell, ArrowRight } from 'lucide-react';
import './NewsAndInsights.css';
import heroBg from '../images/news-insights/news-insights-hero.webp';

export const calculateReadingTime = (text) => {
  if (!text) return "1 MIN READ";
  const wordsPerMinute = 225;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} MIN READ`;
};

export const insightsData = [
  {
    id: "evolving-cybersecurity-landscape",
    title: "The Evolving Cybersecurity Landscape",
    subtitle: "Understanding how organizations can strengthen security, compliance, and operational resilience in an increasingly connected, hybrid environment.",
    category: "CYBERSECURITY INSIGHTS",
    date: "August 24, 2026",
    takeaways: [
      "Traditional perimeter defenses are no longer sufficient in a hybrid, multi-cloud environment.",
      "Proactive threat hunting and continuous vulnerability assessments are essential components of modern resilience.",
      "Regulatory frameworks worldwide are shifting towards mandatory breach notification and strict governance."
    ],
    content: `In today's hyper-connected enterprise environment, the boundaries of the corporate network have all but dissolved. The rapid adoption of multi-cloud architectures, hybrid workforces, and third-party SaaS integrations has expanded the threat landscape exponentially. Attackers are leveraging automated tools and advanced generative artificial intelligence to launch highly targeted phishing campaigns, complex ransomware operations, and zero-day exploits.

As organizations adapt to these changes, security strategies must shift from a reactive posture to proactive operational resilience. Traditional defenses, while necessary, are no longer sufficient on their own. Security leaders must adopt continuous exposure management, integrating vulnerability assessments, threat intelligence, and user behavior analytics directly into corporate risk registers. 

To build true operational resilience, enterprise risk teams must also align their security controls with strict regulatory frameworks. Globally, regulators are moving towards mandatory breach notification timelines, requiring organizations to not only defend their data but also prove that their incident response procedures are battle-tested and effective. Aligning business units, IT operations, and executive leadership under a shared security framework is the key to weathering modern cyber threats.`
  },
  {
    id: "zero-trust-modern-enterprise",
    title: "Zero Trust and the Modern Enterprise Security Perimeter",
    subtitle: "A deep dive into how Zero Trust architecture shifts security focus from network location to dynamic identity verification and contextual access control.",
    category: "CYBERSECURITY INSIGHTS",
    date: "August 18, 2026",
    takeaways: [
      "Never trust, always verify: every access request must be authenticated, authorized, and encrypted.",
      "Least privilege access minimizes lateral movement risks if a compromise occurs.",
      "Contextual signals (device compliance, location, behavior) should dynamically determine access permissions."
    ],
    content: `For decades, enterprise security relied on the 'castle-and-moat' model—securing the network perimeter and assuming anyone inside was safe. However, the rise of remote work, cloud migration, and external contractor networks has made this model obsolete. Zero Trust is a strategic framework built to address this new reality, operating on the simple core principle of 'never trust, always verify.'

Under a Zero Trust architecture, no user or device is trusted by default, regardless of their location on the corporate network. Every access request is dynamically authenticated, authorized, and encrypted before access is granted. This approach significantly reduces the attack surface and mitigates internal threats.

Key pillars of Zero Trust include least privilege access, micro-segmentation, and context-aware policies. Least privilege access ensures employees only have access to resources necessary for their specific role, preventing lateral traversal by malicious actors. Micro-segmentation breaks networks into isolated zones to contain potential breaches. Context-aware policies evaluate signals like device health, geographic location, and login behavior to adjust security controls in real-time. Moving to Zero Trust is a multi-phase journey, but it is the foundation of modern cybersecurity.`
  },
  {
    id: "understanding-modern-api-security",
    title: "Understanding Modern API Security Risks",
    subtitle: "Exploring the top OWASP API security vulnerabilities and best practices to secure data transfer channels and microservices integration points.",
    category: "CYBERSECURITY INSIGHTS",
    date: "August 10, 2026",
    takeaways: [
      "Broken Object Level Authorization (BOLA) remains the most critical vulnerability affecting modern APIs.",
      "Lack of rate limiting and resource throttling exposes endpoints to denial-of-service and brute force leaks.",
      "APIs should enforce strict input validation, response schema enforcement, and robust token-based authorization."
    ],
    content: `Application Programming Interfaces (APIs) are the backbone of modern web applications, facilitating seamless data exchange between microservices, cloud resources, and user-facing clients. Because APIs expose direct communication channels to database backends and application logic, they have become a primary target for sophisticated threat actors.

The OWASP API Security Top 10 highlights several critical vulnerabilities, with Broken Object Level Authorization (BOLA) leading the list. BOLA occurs when an API endpoint does not validate whether the requesting user has permission to access or modify a specific object. Attackers can exploit this by simply altering parameter IDs in the request header, resulting in massive data breaches.

To counter these risks, security teams must implement robust API security practices. This includes enforcing token-based authorization (using OAuth 2.0 and JSON Web Tokens), applying strict input validation to prevent injection attacks, and implementing rate limiting to protect endpoints from denial-of-service attempts. Continuous API discovery is also vital to find and decommission legacy or undocumented 'shadow' APIs before they are compromised.`
  },
  {
    id: "iso-27001-security-maturity",
    title: "ISO 27001 and the Journey Toward Security Maturity",
    subtitle: "A step-by-step compliance outline for implementing an Information Security Management System (ISMS) to protect critical organization assets.",
    category: "GRC & COMPLIANCE",
    date: "August 02, 2026",
    takeaways: [
      "ISO 27001 provides a globally recognized framework to systematically manage information risk.",
      "Strong leadership commitment and clear documentation of policies are absolute prerequisites for certification.",
      "Continuous internal auditing and management review ensure long-term compliance and alignment with threat landscapes."
    ],
    content: `Achieving ISO 27001 certification is a significant milestone for organizations aiming to demonstrate their security maturity. The standard outlines the requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Rather than prescribing specific security tools, ISO 27001 mandates a risk-based management approach tailored to the organization's business needs.

The certification process begins with identifying the organization's critical assets and performing a comprehensive risk assessment. Teams evaluate threats and vulnerabilities, determine the impact of potential compromises, and select appropriate security controls from Annex A of the standard to mitigate these risks.

Successful implementation requires active leadership involvement, clear policy documentation, and regular training to cultivate a security-first culture. Organizations must also perform internal audits and management reviews to ensure controls remain effective as threats evolve. ISO 27001 certification is not a one-time project; it is an ongoing commitment to continuous improvement and operational integrity.`
  }
];

const NewsAndInsights = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  useEffect(() => {
    document.title = "News & Insights | CyberAries";
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const section = document.getElementById("all-publications");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredInsights = insightsData.filter(insight => {
    if (activeCategory === "ALL") return true;
    return insight.category === activeCategory;
  });

  return (
    <div className="news-insights-page">
      {/* 1. PREMIUM DARK HERO SECTION */}
      <section className="insights-hero bg-dark-cyber" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="tech-bg-effects">
          <div className="hero-cyber-grid"></div>
          <div className="hero-glow-overlay"></div>
        </div>
        <div className="container insights-hero-content">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">News & Insights</span>
          </div>
          <h1 className="hero-title">News & Insights</h1>
          <p className="hero-subtitle">
            Cybersecurity perspectives, compliance intelligence, and industry insights from the CyberAries team.
          </p>
        </div>
      </section>

      {/* 2. OFF-WHITE FEATURED INSIGHT */}
      <section className="featured-insight-section bg-light">
        <div className="container">
          <div className="section-header-minimal">
            <span className="accent-label-red">FEATURED INSIGHT</span>
          </div>
          <div className="featured-card">
            <div className="featured-card-content">
              <div className="featured-meta">
                <span className="meta-category">{insightsData[0].category}</span>
                <span className="meta-dot">•</span>
                <span className="meta-read-time">{calculateReadingTime(insightsData[0].content)}</span>
              </div>
              <h2 className="featured-title">{insightsData[0].title}</h2>
              <p className="featured-desc">{insightsData[0].subtitle}</p>
              <Link to={`/resources/news/${insightsData[0].id}`} className="read-more-btn">
                READ INSIGHT <ArrowRight size={16} className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHITE + SUBTLE GRID LATEST INSIGHTS */}
      <section className="latest-insights-section bg-white-grid">
        <div className="container">
          <div className="section-header-minimal">
            <span className="accent-label-red">PUBLICATIONS</span>
            <h2 className="section-title-editorial">LATEST INSIGHTS</h2>
          </div>

          <div className="insights-grid">
            {insightsData.slice(1).map((insight) => (
              <div key={insight.id} className="insight-card-editorial">
                <div className="card-top-indicator"></div>
                <div className="card-category">{insight.category}</div>
                <h3 className="card-heading-editorial">{insight.title}</h3>
                <p className="card-desc-editorial">{insight.subtitle}</p>
                <div className="card-footer-editorial">
                  <span className="card-read-time">{calculateReadingTime(insight.content)}</span>
                  <Link to={`/resources/news/${insight.id}`} className="card-link-editorial">
                    READ INSIGHT <ArrowRight size={14} className="link-arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OFF-WHITE EXPLORE OUR INSIGHTS */}
      <section className="explore-categories-section bg-light">
        <div className="container">
          <div className="section-header-minimal">
            <span className="accent-label-red">CATEGORIES</span>
            <h2 className="section-title-editorial">EXPLORE OUR INSIGHTS</h2>
          </div>
          <div className="categories-grid">
            <div className="category-card-editorial" onClick={() => handleCategoryChange("CYBERSECURITY INSIGHTS")}>
              <div className="category-card-icon">
                <Shield size={24} className="cat-icon" />
              </div>
              <div className="category-card-num">01</div>
              <h3 className="category-card-title">Cybersecurity Insights</h3>
              <p className="category-card-text">Technical, actionable, and practical cybersecurity knowledge designed for security practitioners and technology leaders.</p>
            </div>

            <div className="category-card-editorial" onClick={() => handleCategoryChange("GRC & COMPLIANCE")}>
              <div className="category-card-icon">
                <BookOpen size={24} className="cat-icon" />
              </div>
              <div className="category-card-num">02</div>
              <h3 className="category-card-title">GRC & Compliance</h3>
              <p className="category-card-text">Expert reviews on frameworks such as ISO, RBI Guidelines, DPDP, compliance, privacy, risk management, and governance standards.</p>
            </div>

            <div className="category-card-editorial" onClick={() => handleCategoryChange("CYBERARIES UPDATES")}>
              <div className="category-card-icon">
                <Bell size={24} className="cat-icon" />
              </div>
              <div className="category-card-num">03</div>
              <h3 className="category-card-title">CyberAries Updates</h3>
              <p className="category-card-text">Official announcements, team developments, certification events, and major product/platform updates from CyberAries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHITE + SUBTLE GRID FILTER & CONTENT */}
      <section className="filter-insights-section bg-white-grid" id="all-publications">
        <div className="container">
          <div className="filter-bar">
            <button 
              className={`filter-tab ${activeCategory === "ALL" ? "is-active" : ""}`}
              onClick={() => setActiveCategory("ALL")}
            >
              ALL
            </button>
            <button 
              className={`filter-tab ${activeCategory === "CYBERSECURITY INSIGHTS" ? "is-active" : ""}`}
              onClick={() => setActiveCategory("CYBERSECURITY INSIGHTS")}
            >
              CYBERSECURITY INSIGHTS
            </button>
            <button 
              className={`filter-tab ${activeCategory === "GRC & COMPLIANCE" ? "is-active" : ""}`}
              onClick={() => setActiveCategory("GRC & COMPLIANCE")}
            >
              GRC & COMPLIANCE
            </button>
            <button 
              className={`filter-tab ${activeCategory === "CYBERARIES UPDATES" ? "is-active" : ""}`}
              onClick={() => setActiveCategory("CYBERARIES UPDATES")}
            >
              CYBERARIES UPDATES
            </button>
          </div>

          <div className="filtered-results-container">
            {activeCategory === "CYBERARIES UPDATES" ? (
              /* Intentional Empty State */
              <div className="insights-empty-state">
                <div className="empty-state-icon">
                  <Bell size={32} />
                </div>
                <h3 className="empty-state-title">CyberAries Updates Coming Soon</h3>
                <p className="empty-state-desc">
                  We're preparing updates, announcements, and corporate insights. Check back soon for the latest news from CyberAries.
                </p>
              </div>
            ) : filteredInsights.length === 0 ? (
              <div className="insights-empty-state">
                <h3 className="empty-state-title">No Insights Found</h3>
                <p className="empty-state-desc">There are currently no insights matching this category.</p>
              </div>
            ) : (
              <div className="filtered-insights-list">
                {filteredInsights.map((insight) => (
                  <div key={insight.id} className="list-insight-item">
                    <div className="list-meta">
                      <span className="list-category">{insight.category}</span>
                      <span className="list-dot">•</span>
                      <span className="list-date">{insight.date}</span>
                      <span className="list-dot">•</span>
                      <span className="list-read-time">{calculateReadingTime(insight.content)}</span>
                    </div>
                    <h3 className="list-title">
                      <Link to={`/resources/news/${insight.id}`} className="list-title-link">
                        {insight.title}
                      </Link>
                    </h3>
                    <p className="list-subtitle">{insight.subtitle}</p>
                    <Link to={`/resources/news/${insight.id}`} className="list-read-more">
                      READ INSIGHT <ArrowRight size={14} className="list-arrow" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsAndInsights;
