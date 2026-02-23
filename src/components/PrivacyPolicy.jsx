import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pp-wrapper">
      {/* Hero Section */}
      <div className="pp-hero">
        <div className="pp-hero-particles"></div>
        <div className="pp-hero-content">
          <div className="pp-breadcrumb">
            <Link to="/">Home</Link>
            <span className="pp-breadcrumb-sep">/</span>
            <span>Privacy Policy</span>
          </div>
          <h1 className="pp-hero-title">
            Privacy <span className="pp-highlight">Policy</span>
          </h1>
          <p className="pp-hero-date">Last Updated: December 2025</p>
          <div className="pp-hero-badge">
            <i className="fas fa-shield-alt"></i>
            <span>DPDP Act 2023 Compliant</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pp-container">
        <div className="pp-sidebar">
          <div className="pp-sidebar-sticky">
            <h3 className="pp-sidebar-title">Table of Contents</h3>
            <nav className="pp-sidebar-nav">
              <a href="#introduction">Introduction</a>
              <a href="#applicability">Applicability</a>
              <a href="#data-collection">Data Collection</a>
              <a href="#purpose">Purpose of Data</a>
              <a href="#lawful-basis">Lawful Basis</a>
              <a href="#cookies">Cookie Policy</a>
              <a href="#data-sharing">Data Sharing</a>
              <a href="#security">Security Measures</a>
              <a href="#retention">Data Retention</a>
              <a href="#rights">Your Rights</a>
              <a href="#children">Children's Data</a>
              <a href="#international">International Transfer</a>
              <a href="#contact-dpo">Contact DPO</a>
              <a href="#policy-changes">Policy Changes</a>
            </nav>
          </div>
        </div>

        <div className="pp-content">
          {/* Notice Banner */}
          <div className="pp-notice">
            <div className="pp-notice-icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="pp-notice-text">
              <strong>Your Privacy Matters:</strong> This Privacy Policy is a comprehensive and legally 
              binding instrument drafted specifically for CyberAries Security Solutions, operating in 
              India under the Digital Personal Data Protection Act (DPDP Act, 2023). It governs the 
              collection, use, processing, storage, transfer, and deletion of personal data across 
              all digital and non-digital touchpoints associated with CyberAries.
            </div>
          </div>

          {/* Section 1 */}
          <section id="introduction" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">01</span>
              <h2 className="pp-section-title">Introduction</h2>
            </div>
            <p className="pp-section-content">
              CyberAries Security Solutions ("Company", "we", "our", "us", "Data Fiduciary", or 
              "Controller") is a cybersecurity service entity constituted and operating under the 
              laws of India, engaged in the provision of Vulnerability Assessment and Penetration 
              Testing (VAPT), Incident Response, Cloud Security assessment, Security Operations 
              Centre (SOC) monitoring, Governance Risk and Compliance (GRC) advisory, and related 
              digital security services.
            </p>
            <p className="pp-section-content">
              This Privacy Policy ("Policy") constitutes a legally enforceable instrument governing 
              all aspects of personal data collection, processing, storage, disclosure, and deletion 
              conducted by CyberAries in its capacity as a Data Fiduciary, as defined under the 
              <strong> Digital Personal Data Protection Act (DPDP Act), 2023</strong>, and any 
              supplementary rules, regulations, or guidelines issued thereunder by the competent 
              Indian authority from time to time. Your continued engagement with CyberAries' 
              platforms or services constitutes unconditional acceptance of this Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="applicability" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">02</span>
              <h2 className="pp-section-title">Applicability</h2>
            </div>
            <p className="pp-section-content">
              This Policy applies broadly to all individuals, legal entities, or other parties 
              who interact with CyberAries in any capacity, including but not limited to:
            </p>
            <div className="pp-applicability-grid">
              <div className="pp-applicability-card">
                <i className="fas fa-globe"></i>
                <h4>Website Visitors</h4>
                <p>All visitors of www.cyberaries.com and associated subdomains</p>
              </div>
              <div className="pp-applicability-card">
                <i className="fas fa-handshake"></i>
                <h4>Clients</h4>
                <p>Entities engaging CyberAries for any contracted cybersecurity services</p>
              </div>
              <div className="pp-applicability-card">
                <i className="fas fa-envelope-open-text"></i>
                <h4>Contacts</h4>
                <p>Individuals communicating via web forms, email, telephone, or support portals</p>
              </div>
              <div className="pp-applicability-card">
                <i className="fas fa-users"></i>
                <h4>Stakeholders</h4>
                <p>Employees, vendors, trainees, contractors, and authorized service partners</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="data-collection" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">03</span>
              <h2 className="pp-section-title">What Personal Data We Collect</h2>
            </div>

            <div className="pp-data-category">
              <h3>
                <i className="fas fa-user-edit"></i>
                3.1 Data You Provide to Us
              </h3>
              <ul className="pp-list">
                <li><i className="fas fa-check"></i><span>Full name, corporate email address, and contact number</span></li>
                <li><i className="fas fa-check"></i><span>Organization name and professional designation or role</span></li>
                <li><i className="fas fa-check"></i><span>Inquiry messages, service requirements, and scoping details</span></li>
                <li><i className="fas fa-check"></i><span>Billing and invoicing information where services are commercially engaged</span></li>
                <li><i className="fas fa-check"></i><span>Documentation and assets voluntarily submitted for the purpose of security assessments</span></li>
              </ul>
            </div>

            <div className="pp-data-category">
              <h3>
                <i className="fas fa-robot"></i>
                3.2 Data Collected Automatically
              </h3>
              <ul className="pp-list">
                <li><i className="fas fa-check"></i><span>Internet Protocol (IP) address and geolocation metadata</span></li>
                <li><i className="fas fa-check"></i><span>Browser type, operating system, and device identifiers</span></li>
                <li><i className="fas fa-check"></i><span>Website interaction analytics and navigational user journey data</span></li>
                <li><i className="fas fa-check"></i><span>Functional and analytics cookies (as further described in Section 6)</span></li>
              </ul>
            </div>

            <div className="pp-data-category pp-sensitive">
              <h3>
                <i className="fas fa-exclamation-triangle"></i>
                3.3 Sensitive Personal Data
              </h3>
              <p className="pp-section-content">
                CyberAries does not, as a matter of standard practice, solicit, collect, or process 
                sensitive personal data (as defined under applicable Indian law), except to the 
                limited extent mandated by legal, regulatory, or contractual requirements. Any 
                processing of sensitive data, where applicable, is subject to heightened safeguards 
                and documented consent mechanisms in accordance with the DPDP Act.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="purpose" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">04</span>
              <h2 className="pp-section-title">Purpose of Collecting Personal Data</h2>
            </div>
            <p className="pp-section-content">
              Personal data collected by CyberAries is processed for one or more of the following 
              specified, explicit, and legitimate purposes. Processing beyond these declared purposes 
              shall not occur without appropriate legal basis or prior notice:
            </p>
            <div className="pp-purpose-grid">
              <div className="pp-purpose-card">
                <i className="fas fa-shield-virus"></i>
                <h4>Service Delivery</h4>
                <p>VAPT, Penetration Testing, SOC monitoring, and Cloud security engagements</p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-comments"></i>
                <h4>Support &amp; Inquiries</h4>
                <p>Responding to client inquiries, grievances, and service requests</p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-chart-line"></i>
                <h4>Platform Performance</h4>
                <p>Optimizing website functionality, performance, and user experience</p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-balance-scale"></i>
                <h4>Regulatory Compliance</h4>
                <p>CERT-In notifications, ISO 27001 audit obligations, and statutory filings</p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-file-invoice-dollar"></i>
                <h4>Business Operations</h4>
                <p>Client onboarding, project coordination, invoicing, and collections</p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-user-graduate"></i>
                <h4>Security Education</h4>
                <p>Security awareness training communications and programme delivery</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="lawful-basis" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">05</span>
              <h2 className="pp-section-title">Lawful Basis Under DPDP Act (India)</h2>
            </div>
            <p className="pp-section-content">
              All data processing activities conducted by CyberAries are grounded in one or 
              more of the following lawful bases as recognized under the DPDP Act, 2023:
            </p>
            <div className="pp-lawful-grid">
              <div className="pp-lawful-card">
                <div className="pp-lawful-icon"><i className="fas fa-clipboard-check"></i></div>
                <h4>Consent</h4>
                <p>Informed and documented consent obtained via engagement forms, service contracts, or email correspondence</p>
              </div>
              <div className="pp-lawful-card">
                <div className="pp-lawful-icon"><i className="fas fa-briefcase"></i></div>
                <h4>Legitimate Uses</h4>
                <p>Processing necessary for the delivery of cybersecurity services expressly requested by the Data Principal</p>
              </div>
              <div className="pp-lawful-card">
                <div className="pp-lawful-icon"><i className="fas fa-gavel"></i></div>
                <h4>Legal Compliance</h4>
                <p>Statutory obligations including CERT-In incident reporting, regulatory audits, and financial record-keeping</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="cookies" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">06</span>
              <h2 className="pp-section-title">How We Use Cookies</h2>
            </div>
            <p className="pp-section-content">
              CyberAries employs a limited set of cookies necessary for the functional operation 
              and analytical measurement of its digital platforms. By continuing to use this 
              website, you consent to the placement of the following cookie categories:
            </p>
            <div className="pp-cookies-container">
              <div className="pp-cookie-item">
                <div className="pp-cookie-header">
                  <i className="fas fa-cookie-bite"></i>
                  <h4>Essential Cookies</h4>
                </div>
                <p>Strictly necessary for site functionality, session management, and authenticated access</p>
              </div>
              <div className="pp-cookie-item">
                <div className="pp-cookie-header">
                  <i className="fas fa-chart-bar"></i>
                  <h4>Analytics Cookies</h4>
                </div>
                <p>Deployed to measure aggregate website usage patterns; no personally identifiable data is associated</p>
              </div>
              <div className="pp-cookie-item pp-no-use">
                <div className="pp-cookie-header">
                  <i className="fas fa-ban"></i>
                  <h4>No Marketing Cookies</h4>
                </div>
                <p>CyberAries does not deploy advertising, retargeting, or marketing cookies of any nature</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="data-sharing" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">07</span>
              <h2 className="pp-section-title">Sharing of Personal Data</h2>
            </div>
            <p className="pp-section-content">
              CyberAries does not sell, trade, or rent personal data. Data may be disclosed 
              to the following categories of recipients strictly on a need-to-know basis and 
              subject to appropriate data processing agreements:
            </p>
            <ul className="pp-list">
              <li><i className="fas fa-users-cog"></i><span>Internal CyberAries security and delivery teams engaged in executing the contracted service scope</span></li>
              <li><i className="fas fa-server"></i><span>Trusted third-party service providers including cloud infrastructure, email delivery, and anonymized analytics platforms</span></li>
              <li><i className="fas fa-landmark"></i><span>Regulatory and government authorities including CERT-In, MeitY, or law enforcement when mandated by applicable Indian law</span></li>
              <li><i className="fas fa-file-signature"></i><span>Authorized audit partners and sub-processors operating under executed Non-Disclosure Agreements</span></li>
            </ul>
            <div className="pp-important-note">
              <i className="fas fa-info-circle"></i>
              <strong>We do NOT sell, lease, or commercially exploit personal data under any circumstance.</strong>
            </div>
          </section>

          {/* Section 8 */}
          <section id="security" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">08</span>
              <h2 className="pp-section-title">Data Security Measures</h2>
            </div>
            <p className="pp-section-content">
              CyberAries implements a comprehensive, multi-layered security framework to protect 
              personal data against unauthorized access, disclosure, alteration, or destruction. 
              These measures include, without limitation:
            </p>
            <div className="pp-security-grid">
              <div className="pp-security-card">
                <i className="fas fa-lock"></i>
                <h4>Encryption</h4>
                <p>AES-256 encryption at rest and TLS 1.3 for data in transit</p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-user-lock"></i>
                <h4>Access Control</h4>
                <p>Role-based access control (RBAC) with least-privilege enforcement</p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-fire"></i>
                <h4>Firewalls</h4>
                <p>Multi-layer perimeter and application-layer firewall protection</p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-code-branch"></i>
                <h4>Secure DevOps</h4>
                <p>Security-integrated development lifecycle and code review practices</p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-eye"></i>
                <h4>Monitoring</h4>
                <p>Continuous 24×7 SOC-based security monitoring and alerting</p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-search"></i>
                <h4>Testing</h4>
                <p>Periodic internal penetration testing and vulnerability assessments</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="retention" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">09</span>
              <h2 className="pp-section-title">Data Retention</h2>
            </div>
            <div className="pp-info-card">
              <i className="fas fa-calendar-alt"></i>
              <div>
                <p className="pp-section-content">
                  Personal data is retained by CyberAries only for the duration necessary to fulfill 
                  the stated processing purposes, comply with applicable Indian legal and regulatory 
                  requirements, resolve disputes, and enforce contractual obligations. Upon expiry 
                  of the applicable retention period, data is securely deleted or anonymized in 
                  accordance with industry-standard data destruction practices. CyberAries conducts 
                  periodic data inventory reviews to ensure compliance with this retention framework.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="rights" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">10</span>
              <h2 className="pp-section-title">Your Rights Under DPDP Act</h2>
            </div>
            <p className="pp-section-content">
              As a Data Principal under the DPDP Act, 2023, you are vested with the following 
              rights with respect to your personal data processed by CyberAries. Requests must 
              be submitted in writing to our designated Grievance Officer and will be addressed 
              within the timelines prescribed under applicable law:
            </p>
            <div className="pp-rights-grid">
              <div className="pp-rights-card">
                <i className="fas fa-eye"></i>
                <h4>Access</h4>
                <p>Request a summary of personal data processed and the processing activities conducted</p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-edit"></i>
                <h4>Correction</h4>
                <p>Request correction or completion of inaccurate, incomplete, or misleading personal data</p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-trash-alt"></i>
                <h4>Deletion</h4>
                <p>Request erasure of personal data no longer required for the specified processing purpose</p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-hand-paper"></i>
                <h4>Withdrawal</h4>
                <p>Withdraw consent at any time without affecting the lawfulness of prior processing</p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-exclamation-circle"></i>
                <h4>Grievance</h4>
                <p>File a formal grievance or complaint with the Grievance Officer or competent authority</p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section id="children" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">11</span>
              <h2 className="pp-section-title">Children's Data</h2>
            </div>
            <div className="pp-info-card">
              <i className="fas fa-child"></i>
              <div>
                <p className="pp-section-content">
                  CyberAries does not knowingly solicit, collect, or process personal data from 
                  individuals below the age of eighteen (18) years. Our services are directed exclusively 
                  at corporate and professional audiences. If CyberAries becomes aware that personal 
                  data of a minor has been inadvertently collected without verifiable parental consent, 
                  we will take immediate steps to delete such information from our systems. 
                  Guardians may contact our Data Protection Officer to request deletion.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section id="international" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">12</span>
              <h2 className="pp-section-title">International Transfer of Data</h2>
            </div>
            <div className="pp-info-card">
              <i className="fas fa-globe-asia"></i>
              <div>
                <p className="pp-section-content">
                  In certain circumstances necessitated by operational or service delivery requirements, 
                  personal data may be transferred to, stored in, or processed in jurisdictions 
                  outside the Republic of India. Any such cross-border transfer shall be conducted 
                  in compliance with applicable provisions of the DPDP Act, 2023, and subject to 
                  adequate safeguards including, without limitation, data processing agreements, 
                  standard contractual clauses, or recipient country assessments as may be 
                  prescribed by the Data Protection Board of India.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section id="contact-dpo" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">13</span>
              <h2 className="pp-section-title">Contact for Data Requests</h2>
            </div>
            <p className="pp-section-content">
              All data-related requests, grievances, and formal privacy inquiries may be directed 
              to CyberAries' designated Data Protection and Grievance Officer:
            </p>
            <div className="pp-dpo-container">
              <div className="pp-dpo-header">
                <i className="fas fa-user-shield"></i>
                <h3>Data Protection Officer / Grievance Officer</h3>
              </div>
              <div className="pp-dpo-details">
                <div className="pp-dpo-item">
                  <i className="fas fa-building"></i>
                  <div>
                    <strong>Organization</strong>
                    <p>CyberAries Security Solutions</p>
                  </div>
                </div>
                <div className="pp-dpo-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:privacy@cyberaries.com">privacy@cyberaries.com</a></p>
                  </div>
                </div>
                <div className="pp-dpo-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location</strong>
                    <p>Hiranandani Business Park, Powai, Mumbai - 400071, India</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 14 */}
          <section id="policy-changes" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">14</span>
              <h2 className="pp-section-title">Changes to this Privacy Policy</h2>
            </div>
            <p className="pp-section-content">
              CyberAries reserves the right to amend, update, or replace this Privacy Policy 
              at any time, with or without individual notice, to reflect changes in applicable 
              law, regulatory guidance, operational practices, or service offerings. The revised 
              Policy, together with its effective date, shall be posted on this page. Your 
              continued use of CyberAries' website or services following publication of any 
              revised Policy shall constitute your acceptance of the amended terms. We encourage 
              all stakeholders to review this Policy periodically to remain informed of how 
              their personal data is being processed.
            </p>
          </section>

          {/* Bottom CTA */}
          <div className="pp-cta">
            <div className="pp-cta-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <div className="pp-cta-content">
              <h3>Have Questions About Your Privacy?</h3>
              <p>Our Data Protection Officer is available to address all privacy concerns and data requests.</p>
              <Link to="/contact" className="pp-cta-btn">
                Contact Privacy Team
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;