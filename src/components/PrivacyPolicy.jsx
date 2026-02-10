import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-wrapper">
      {/* Hero Section */}
      <div className="privacy-hero">
        <div className="privacy-hero-particles"></div>
        <div className="privacy-hero-content">
          <div className="privacy-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Privacy Policy</span>
          </div>
          <h1 className="privacy-hero-title">
            Privacy <span className="highlight">Policy</span>
          </h1>
          <p className="privacy-hero-date">Last Updated: December 2025</p>
          <div className="hero-badge">
            <i className="fas fa-shield-check"></i>
            <span>DPDP Act 2023 Compliant</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="privacy-container">
        <div className="privacy-sidebar">
          <div className="sidebar-sticky">
            <h3 className="sidebar-title">Table of Contents</h3>
            <nav className="sidebar-nav">
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

        <div className="privacy-content">
          {/* Notice Banner */}
          <div className="privacy-notice">
            <div className="notice-icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="notice-text">
              <strong>Your Privacy Matters:</strong> This Privacy Policy is drafted specifically for CyberAries, 
              operating in India, and aligned with the Digital Personal Data Protection Act (DPDP Act, 2023). 
              It details how we collect, use, and protect personal data in compliance with Indian regulations 
              and best practices.
            </div>
          </div>

          {/* Section 1 */}
          <section id="introduction" className="privacy-section">
            <div className="section-number">01</div>
            <h2 className="section-title">Introduction</h2>
            <p className="section-content">
              CyberAries ("Company", "we", "our", "us") is a cybersecurity service provider based in India 
              offering VAPT services, Penetration Testing, Incident Response, Cloud Security, SOC monitoring, 
              Compliance consulting, and related digital security solutions.
            </p>
            <p className="section-content">
              This Privacy Policy outlines how we collect, use, store, and safeguard Personal Data in accordance 
              with the <strong>Digital Personal Data Protection Act (DPDP Act), 2023</strong> and applicable 
              best practices.
            </p>
          </section>

          {/* Section 2 */}
          <section id="applicability" className="privacy-section">
            <div className="section-number">02</div>
            <h2 className="section-title">Applicability</h2>
            <p className="section-content">This policy applies to:</p>
            <div className="applicability-grid">
              <div className="applicability-card">
                <i className="fas fa-globe"></i>
                <h4>Website Visitors</h4>
                <p>All visitors of www.cyberaries.com</p>
              </div>
              <div className="applicability-card">
                <i className="fas fa-handshake"></i>
                <h4>Clients</h4>
                <p>Clients who engage our cybersecurity services</p>
              </div>
              <div className="applicability-card">
                <i className="fas fa-envelope-open-text"></i>
                <h4>Contacts</h4>
                <p>Individuals contacting us via forms, email, or support</p>
              </div>
              <div className="applicability-card">
                <i className="fas fa-users"></i>
                <h4>Stakeholders</h4>
                <p>Employees, vendors, trainees, and service partners</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="data-collection" className="privacy-section">
            <div className="section-number">03</div>
            <h2 className="section-title">What Personal Data We Collect</h2>
            
            <div className="data-category">
              <h3>
                <i className="fas fa-user-edit"></i>
                3.1 Data You Provide to Us
              </h3>
              <ul className="privacy-list">
                <li>
                  <i className="fas fa-check"></i>
                  <span>Name, Email, Phone number</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Company Name, Role/Designation</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Inquiry messages, project requirements</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Billing information (if services are purchased)</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Documents voluntarily shared for security audits</span>
                </li>
              </ul>
            </div>

            <div className="data-category">
              <h3>
                <i className="fas fa-robot"></i>
                3.2 Data Collected Automatically
              </h3>
              <ul className="privacy-list">
                <li>
                  <i className="fas fa-check"></i>
                  <span>IP address</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Browser/device information</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Website analytics and user journey</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Cookies (functional & analytics only)</span>
                </li>
              </ul>
            </div>

            <div className="data-category sensitive">
              <h3>
                <i className="fas fa-exclamation-triangle"></i>
                3.3 Sensitive Personal Data
              </h3>
              <p className="section-content">
                CyberAries does NOT request or process sensitive personal data unless required for 
                compliance or legal purposes. We handle all data with the highest security standards.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="purpose" className="privacy-section">
            <div className="section-number">04</div>
            <h2 className="section-title">Purpose of Collecting Personal Data</h2>
            <p className="section-content">CyberAries processes personal data for:</p>
            <div className="purpose-grid">
              <div className="purpose-card">
                <i className="fas fa-shield-virus"></i>
                <h4>Service Delivery</h4>
                <p>VAPT, PT, SOC monitoring, and Cloud security assessments</p>
              </div>
              <div className="purpose-card">
                <i className="fas fa-comments"></i>
                <h4>Support & Inquiries</h4>
                <p>Responding to inquiries and support requests</p>
              </div>
              <div className="purpose-card">
                <i className="fas fa-chart-line"></i>
                <h4>Performance</h4>
                <p>Improving website performance and user experience</p>
              </div>
              <div className="purpose-card">
                <i className="fas fa-balance-scale"></i>
                <h4>Compliance</h4>
                <p>CERT-In, ISO 27001, and other regulatory obligations</p>
              </div>
              <div className="purpose-card">
                <i className="fas fa-file-invoice-dollar"></i>
                <h4>Business Operations</h4>
                <p>Client onboarding, project execution, invoicing</p>
              </div>
              <div className="purpose-card">
                <i className="fas fa-user-graduate"></i>
                <h4>Education</h4>
                <p>Security awareness communication and training</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="lawful-basis" className="privacy-section">
            <div className="section-number">05</div>
            <h2 className="section-title">Lawful Basis Under DPDP Act (India)</h2>
            <p className="section-content">We process data based on:</p>
            <div className="lawful-grid">
              <div className="lawful-card">
                <div className="lawful-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h4>Consent</h4>
                <p>Provided through forms, contracts, or email communication</p>
              </div>
              <div className="lawful-card">
                <div className="lawful-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h4>Legitimate Uses</h4>
                <p>Delivering cybersecurity services requested by you</p>
              </div>
              <div className="lawful-card">
                <div className="lawful-icon">
                  <i className="fas fa-gavel"></i>
                </div>
                <h4>Legal Compliance</h4>
                <p>CERT-In incident reporting, audit requirements, invoices</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="cookies" className="privacy-section">
            <div className="section-number">06</div>
            <h2 className="section-title">How We Use Cookies</h2>
            <div className="cookies-container">
              <div className="cookie-item">
                <div className="cookie-header">
                  <i className="fas fa-cookie-bite"></i>
                  <h4>Essential Cookies</h4>
                </div>
                <p>Required for site functionality and user authentication</p>
              </div>
              <div className="cookie-item">
                <div className="cookie-header">
                  <i className="fas fa-chart-bar"></i>
                  <h4>Analytics Cookies</h4>
                </div>
                <p>To measure website usage (non-personally identifiable)</p>
              </div>
              <div className="cookie-item no-use">
                <div className="cookie-header">
                  <i className="fas fa-ban"></i>
                  <h4>No Marketing Cookies</h4>
                </div>
                <p>We do NOT use advertising or marketing cookies</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="data-sharing" className="privacy-section">
            <div className="section-number">07</div>
            <h2 className="section-title">Sharing of Personal Data</h2>
            <p className="section-content">We may share data with:</p>
            <ul className="privacy-list">
              <li>
                <i className="fas fa-users-cog"></i>
                <span>Internal CyberAries security teams for service delivery</span>
              </li>
              <li>
                <i className="fas fa-server"></i>
                <span>Trusted service providers (cloud hosting, email delivery, analytics)</span>
              </li>
              <li>
                <i className="fas fa-landmark"></i>
                <span>Regulatory authorities (CERT-In or Government agencies when required)</span>
              </li>
              <li>
                <i className="fas fa-file-signature"></i>
                <span>Partners performing audits under NDA</span>
              </li>
            </ul>
            <div className="important-note">
              <i className="fas fa-info-circle"></i>
              <strong>We NEVER sell personal data.</strong>
            </div>
          </section>

          {/* Section 8 */}
          <section id="security" className="privacy-section">
            <div className="section-number">08</div>
            <h2 className="section-title">Data Security Measures</h2>
            <p className="section-content">CyberAries implements industry-leading security measures:</p>
            <div className="security-grid">
              <div className="security-card">
                <i className="fas fa-lock"></i>
                <h4>Encryption</h4>
                <p>Data encrypted at rest and in transit</p>
              </div>
              <div className="security-card">
                <i className="fas fa-user-lock"></i>
                <h4>Access Control</h4>
                <p>Role-based access control (RBAC)</p>
              </div>
              <div className="security-card">
                <i className="fas fa-fire"></i>
                <h4>Firewalls</h4>
                <p>Multi-layer firewall protection</p>
              </div>
              <div className="security-card">
                <i className="fas fa-code-branch"></i>
                <h4>Secure DevOps</h4>
                <p>Secure development practices</p>
              </div>
              <div className="security-card">
                <i className="fas fa-eye"></i>
                <h4>Monitoring</h4>
                <p>Continuous security monitoring</p>
              </div>
              <div className="security-card">
                <i className="fas fa-search"></i>
                <h4>Testing</h4>
                <p>Regular penetration testing</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="retention" className="privacy-section">
            <div className="section-number">09</div>
            <h2 className="section-title">Data Retention</h2>
            <div className="retention-card">
              <i className="fas fa-calendar-alt"></i>
              <div>
                <p className="section-content">
                  Data is retained only as long as required for the purposes stated in this policy, or as 
                  required by Indian law. We regularly review and delete data that is no longer necessary.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="rights" className="privacy-section">
            <div className="section-number">10</div>
            <h2 className="section-title">Your Rights Under DPDP Act</h2>
            <p className="section-content">As a data subject, you have the following rights:</p>
            <div className="rights-grid">
              <div className="rights-card">
                <i className="fas fa-eye"></i>
                <h4>Access</h4>
                <p>Request access to your personal data</p>
              </div>
              <div className="rights-card">
                <i className="fas fa-edit"></i>
                <h4>Correction</h4>
                <p>Correction of inaccurate data</p>
              </div>
              <div className="rights-card">
                <i className="fas fa-trash-alt"></i>
                <h4>Deletion</h4>
                <p>Request deletion of personal data</p>
              </div>
              <div className="rights-card">
                <i className="fas fa-hand-paper"></i>
                <h4>Withdrawal</h4>
                <p>Withdraw consent at any time</p>
              </div>
              <div className="rights-card">
                <i className="fas fa-exclamation-circle"></i>
                <h4>Grievance</h4>
                <p>File grievances and complaints</p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section id="children" className="privacy-section">
            <div className="section-number">11</div>
            <h2 className="section-title">Children's Data</h2>
            <div className="children-card">
              <i className="fas fa-child"></i>
              <div>
                <p className="section-content">
                  CyberAries does not knowingly collect data of children under 18 years of age. If we become 
                  aware that we have collected personal data from a child, we will take steps to delete such 
                  information promptly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section id="international" className="privacy-section">
            <div className="section-number">12</div>
            <h2 className="section-title">International Transfer of Data</h2>
            <div className="international-card">
              <i className="fas fa-globe-asia"></i>
              <div>
                <p className="section-content">
                  If required for service delivery or operational purposes, data may be stored or processed 
                  outside India. In such cases, we ensure adequate safeguards are in place to protect your 
                  personal data in accordance with DPDP Act requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section id="contact-dpo" className="privacy-section">
            <div className="section-number">13</div>
            <h2 className="section-title">Contact for Data Requests</h2>
            <div className="dpo-container">
              <div className="dpo-header">
                <i className="fas fa-user-shield"></i>
                <h3>Data Protection Officer / Grievance Officer</h3>
              </div>
              <div className="dpo-details">
                <div className="dpo-item">
                  <i className="fas fa-building"></i>
                  <div>
                    <strong>Organization</strong>
                    <p>CyberAries Security Solutions</p>
                  </div>
                </div>
                <div className="dpo-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href="mailto:privacy@cyberaries.com">privacy@cyberaries.com</a>
                    </p>
                  </div>
                </div>
                <div className="dpo-item">
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
          <section id="policy-changes" className="privacy-section">
            <div className="section-number">14</div>
            <h2 className="section-title">Changes to this Privacy Policy</h2>
            <p className="section-content">
              We may update this privacy policy from time to time to reflect changes in our practices or for 
              legal, regulatory, or operational reasons. The updated date will be reflected at the top of this 
              policy. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Bottom CTA */}
          <div className="privacy-cta">
            <div className="cta-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <div className="cta-content">
              <h3>Have Questions About Your Privacy?</h3>
              <p>Our Data Protection Officer is here to address all your privacy concerns.</p>
              <Link to="/contact" className="cta-button">
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