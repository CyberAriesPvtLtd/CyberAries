import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-wrapper">
      {/* Hero Section */}
      <div className="terms-hero">
        <div className="terms-hero-grid"></div>
        <div className="terms-hero-content">
          <div className="terms-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Terms & Conditions</span>
          </div>
          <h1 className="terms-hero-title">
            Terms & <span className="highlight">Conditions</span>
          </h1>
          <p className="terms-hero-date">Effective Date: December 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="terms-container">
        <div className="terms-sidebar">
          <div className="sidebar-sticky">
            <h3 className="sidebar-title">Quick Navigation</h3>
            <nav className="sidebar-nav">
              <a href="#acceptance">Acceptance of Terms</a>
              <a href="#about">About CyberAries</a>
              <a href="#website-use">Use of Website</a>
              <a href="#client-responsibilities">Client Responsibilities</a>
              <a href="#service-delivery">Service Delivery</a>
              <a href="#confidentiality">Confidentiality</a>
              <a href="#intellectual-property">Intellectual Property</a>
              <a href="#payment">Payment & Refund</a>
              <a href="#liability">Liability Limitations</a>
              <a href="#indemnification">Indemnification</a>
              <a href="#third-party">Third-Party Links</a>
              <a href="#governing-law">Governing Law</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>
        </div>

        <div className="terms-content">
          {/* Notice Banner */}
          <div className="terms-notice">
            <div className="notice-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="notice-text">
              <strong>Important Notice:</strong> This Terms & Conditions page is custom-tailored for CyberAries, 
              an Indian cybersecurity company. It outlines the rules and guidelines for using our website and services, 
              ensuring compliance with Indian laws and industry best practices.
            </div>
          </div>

          {/* Section 1 */}
          <section id="acceptance" className="terms-section">
            <div className="section-number">01</div>
            <h2 className="section-title">Acceptance of Terms</h2>
            <p className="section-content">
              By accessing or using the CyberAries website or services, you agree to be bound by these Terms & Conditions. 
              If you do not agree to these terms, please discontinue use of our services immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section id="about" className="terms-section">
            <div className="section-number">02</div>
            <h2 className="section-title">About CyberAries</h2>
            <p className="section-content">
              CyberAries is an Indian cybersecurity service provider specializing in comprehensive security solutions:
            </p>
            <div className="services-grid">
              <div className="service-card">
                <i className="fas fa-bug"></i>
                <span>VAPT Services</span>
              </div>
              <div className="service-card">
                <i className="fas fa-network-wired"></i>
                <span>Network & Application Testing</span>
              </div>
              <div className="service-card">
                <i className="fas fa-cloud"></i>
                <span>Cloud Security Assessments</span>
              </div>
              <div className="service-card">
                <i className="fas fa-eye"></i>
                <span>SOC Monitoring</span>
              </div>
              <div className="service-card">
                <i className="fas fa-fire-extinguisher"></i>
                <span>Incident Response</span>
              </div>
              <div className="service-card">
                <i className="fas fa-clipboard-check"></i>
                <span>Governance, Risk & Compliance</span>
              </div>
              <div className="service-card">
                <i className="fas fa-graduation-cap"></i>
                <span>Security Awareness Training</span>
              </div>
              <div className="service-card">
                <i className="fas fa-user-shield"></i>
                <span>Cybersecurity Consulting</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="website-use" className="terms-section">
            <div className="section-number">03</div>
            <h2 className="section-title">Use of Our Website</h2>
            <p className="section-content">You agree NOT to engage in the following activities:</p>
            <ul className="terms-list prohibited">
              <li>
                <i className="fas fa-times-circle"></i>
                <span>Attack, probe, scan, or test our systems without authorization</span>
              </li>
              <li>
                <i className="fas fa-times-circle"></i>
                <span>Upload malware, harmful scripts, or perform unauthorized penetration tests</span>
              </li>
              <li>
                <i className="fas fa-times-circle"></i>
                <span>Violate Indian IT Act, CERT-In regulations, or DPDP Act</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="client-responsibilities" className="terms-section">
            <div className="section-number">04</div>
            <h2 className="section-title">Client Responsibilities</h2>
            <p className="section-content">
              Clients engaging CyberAries services agree to fulfill the following responsibilities:
            </p>
            <ul className="terms-list allowed">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Provide accurate information for security assessments</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Ensure systems tested belong to them or have explicit authorization</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Follow recommendations provided in audit reports</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Maintain legal compliance for their own operations</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="service-delivery" className="terms-section">
            <div className="section-number">05</div>
            <h2 className="section-title">Service Delivery</h2>
            <p className="section-content">
              All services (VAPT, PT, SOC, compliance audits, etc.) are subject to:
            </p>
            <ul className="terms-list">
              <li>Delivery based on approved contracts and Statements of Work (SoWs)</li>
              <li>Strict adherence to confidentiality agreements and NDAs</li>
              <li>Advisory nature; final implementation is client responsibility</li>
              <li>Professional standards and industry best practices</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="confidentiality" className="terms-section">
            <div className="section-number">06</div>
            <h2 className="section-title">Confidentiality</h2>
            <p className="section-content">
              CyberAries maintains the highest standards of confidentiality regarding:
            </p>
            <div className="confidentiality-grid">
              <div className="confidentiality-card">
                <i className="fas fa-server"></i>
                <h4>System Architecture</h4>
                <p>Complete infrastructure details and configurations</p>
              </div>
              <div className="confidentiality-card">
                <i className="fas fa-key"></i>
                <h4>Access Credentials</h4>
                <p>All credentials shared for testing purposes</p>
              </div>
              <div className="confidentiality-card">
                <i className="fas fa-file-alt"></i>
                <h4>Reports & Results</h4>
                <p>Audit reports and testing results</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="intellectual-property" className="terms-section">
            <div className="section-number">07</div>
            <h2 className="section-title">Intellectual Property</h2>
            <p className="section-content">
              All content, dashboards, reports, methodologies, and branding are the exclusive property of CyberAries. 
              Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </section>

          {/* Section 8 */}
          <section id="payment" className="terms-section">
            <div className="section-number">08</div>
            <h2 className="section-title">Payment & Refund Policy</h2>
            <div className="payment-cards">
              <div className="payment-card">
                <i className="fas fa-rupee-sign"></i>
                <h4>Payment Terms</h4>
                <p>All invoices must be paid as per contract terms and conditions</p>
              </div>
              <div className="payment-card">
                <i className="fas fa-ban"></i>
                <h4>No Refunds</h4>
                <p>No refunds once testing or audit work has begun</p>
              </div>
              <div className="payment-card">
                <i className="fas fa-pause-circle"></i>
                <h4>Delayed Payments</h4>
                <p>May result in pausing of service delivery</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="liability" className="terms-section">
            <div className="section-number">09</div>
            <h2 className="section-title">Liability Limitations</h2>
            <p className="section-content">CyberAries is NOT liable for:</p>
            <ul className="terms-list">
              <li>Client-side misconfigurations or security oversights</li>
              <li>Data loss due to client negligence or improper handling</li>
              <li>Third-party service failures or downtime</li>
              <li>Damages arising from misuse of VAPT findings or recommendations</li>
              <li>Indirect, incidental, or consequential damages</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section id="indemnification" className="terms-section">
            <div className="section-number">10</div>
            <h2 className="section-title">Indemnification</h2>
            <p className="section-content">
              You agree to indemnify and hold CyberAries harmless from any claims, damages, or liabilities 
              arising from misuse of:
            </p>
            <ul className="terms-list">
              <li>Security assessment reports and findings</li>
              <li>Testing results and vulnerability data</li>
              <li>Security recommendations and implementation guidance</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="third-party" className="terms-section">
            <div className="section-number">11</div>
            <h2 className="section-title">Third-Party Links</h2>
            <p className="section-content">
              Our website may contain links to external websites for reference purposes. CyberAries is not 
              responsible for the content, privacy policies, or practices of these third-party sites.
            </p>
          </section>

          {/* Section 12 */}
          <section id="governing-law" className="terms-section">
            <div className="section-number">12</div>
            <h2 className="section-title">Governing Law</h2>
            <div className="law-card">
              <i className="fas fa-gavel"></i>
              <div>
                <p className="section-content">
                  These Terms & Conditions are governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these terms shall fall under the exclusive jurisdiction of the courts 
                  in Mumbai, India.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section id="contact" className="terms-section">
            <div className="section-number">13</div>
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <i className="fas fa-building"></i>
                <h4>Company Name</h4>
                <p>CyberAries Security Solutions</p>
              </div>
              <div className="contact-info-card">
                <i className="fas fa-envelope"></i>
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:legal@cyberaries.com">legal@cyberaries.com</a>
                </p>
              </div>
              <div className="contact-info-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Office Address</h4>
                <p>Hiranandani Business Park, Powai, Mumbai - 400071, India</p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="terms-cta">
            <h3>Have Questions About Our Terms?</h3>
            <p>Our legal team is here to help clarify any concerns you may have.</p>
            <Link to="/contact" className="cta-button">
              Contact Legal Team
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;