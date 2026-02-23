import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tac-wrapper">
      {/* Hero Section */}
      <div className="tac-hero">
        <div className="tac-hero-grid"></div>
        <div className="tac-hero-content">
          <div className="tac-breadcrumb">
            <Link to="/">Home</Link>
            <span className="tac-breadcrumb-sep">/</span>
            <span>Terms &amp; Conditions</span>
          </div>
          <h1 className="tac-hero-title">
            Terms &amp; <span className="tac-highlight">Conditions</span>
          </h1>
          <p className="tac-hero-date">Effective Date: December 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="tac-container">
        <div className="tac-sidebar">
          <div className="tac-sidebar-sticky">
            <h3 className="tac-sidebar-title">Quick Navigation</h3>
            <nav className="tac-sidebar-nav">
              <a href="#acceptance">Acceptance of Terms</a>
              <a href="#about">About CyberAries</a>
              <a href="#website-use">Use of Website</a>
              <a href="#client-responsibilities">Client Responsibilities</a>
              <a href="#service-delivery">Service Delivery</a>
              <a href="#confidentiality">Confidentiality</a>
              <a href="#intellectual-property">Intellectual Property</a>
              <a href="#payment">Payment &amp; Refund</a>
              <a href="#liability">Liability Limitations</a>
              <a href="#indemnification">Indemnification</a>
              <a href="#third-party">Third-Party Links</a>
              <a href="#governing-law">Governing Law</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>
        </div>

        <div className="tac-content">
          {/* Notice Banner */}
          <div className="tac-notice">
            <div className="tac-notice-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="tac-notice-text">
              <strong>Important Legal Notice:</strong> The following constitutes a legally binding instrument 
              governing the entirety of your engagement with CyberAries Security Solutions, its affiliates, 
              subsidiaries, and authorized representatives (collectively, "CyberAries"). By proceeding, you 
              unconditionally acknowledge, accept, and are bound by all provisions herein, including but not 
              limited to those which may be subject to periodic amendment without prior individual notification.
            </div>
          </div>

          {/* Section 1 */}
          <section id="acceptance" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">01</span>
              <h2 className="tac-section-title">Acceptance of Terms</h2>
            </div>
            <p className="tac-section-content">
              Your continued access to, or use of, any digital interface, service offering, consultation channel, 
              or informational resource operated by or on behalf of CyberAries — whether directly or indirectly — 
              constitutes your full, unequivocal, and irrevocable acceptance of these Terms &amp; Conditions, 
              in their entirety, as may be amended, supplemented, or otherwise modified from time to time at 
              the sole and absolute discretion of CyberAries, without any obligation of advance notice to you. 
              Non-acceptance must be communicated in writing and shall result in immediate cessation of access.
            </p>
            <p className="tac-section-content">
              These Terms supersede any prior representations, warranties, understandings, or agreements — 
              whether oral, written, express, or implied — between you and CyberAries, regardless of how 
              or when they were communicated. In the event of a conflict between these Terms and any other 
              instrument or arrangement, these Terms shall prevail unless expressly stated otherwise in a 
              separately executed, duly signed contractual instrument bearing the authorized signature of a 
              CyberAries designated legal representative.
            </p>
          </section>

          {/* Section 2 */}
          <section id="about" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">02</span>
              <h2 className="tac-section-title">About CyberAries</h2>
            </div>
            <p className="tac-section-content">
              CyberAries Security Solutions is an Indian entity engaged in the provision of multi-disciplinary 
              cybersecurity advisory, assessment, and managed service functions. The scope and nature of 
              services rendered are subject to change, limitation, or discontinuation at CyberAries' discretion, 
              and the listing herein shall not be construed as a guarantee of availability or fitness for 
              any particular purpose:
            </p>
            <div className="tac-services-grid">
              <div className="tac-service-card">
                <i className="fas fa-bug"></i>
                <span>VAPT Services</span>
              </div>
              <div className="tac-service-card">
                <i className="fas fa-network-wired"></i>
                <span>Network &amp; Application Testing</span>
              </div>
              <div className="tac-service-card">
                <i className="fas fa-cloud"></i>
                <span>Cloud Security Assessments</span>
              </div>
              <div className="tac-service-card">
                <i className="fas fa-eye"></i>
                <span>SOC Monitoring</span>
              </div>
              <div className="tac-service-card">
                <i className="fas fa-fire-extinguisher"></i>
                <span>Incident Response</span>
              </div>
              <div className="tac-service-card">
                <i className="fas fa-clipboard-check"></i>
                <span>Governance, Risk &amp; Compliance</span>
              </div>
              <div className="tac-service-card">
                <i className="fas fa-graduation-cap"></i>
                <span>Security Awareness Training</span>
              </div>
              <div className="tac-service-card">
                <i className="fas fa-user-shield"></i>
                <span>Cybersecurity Consulting</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="website-use" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">03</span>
              <h2 className="tac-section-title">Use of Our Website</h2>
            </div>
            <p className="tac-section-content">
              Subject to your compliance with these Terms and applicable law, CyberAries grants you a 
              limited, non-exclusive, non-transferable, revocable license to access this website strictly 
              for informational purposes. The following activities are expressly prohibited and may result 
              in legal action under relevant provisions of the Information Technology Act, 2000, CERT-In 
              directives, or other applicable statutes:
            </p>
            <ul className="tac-list tac-prohibited">
              <li>
                <i className="fas fa-times-circle"></i>
                <span>Attempting to probe, scan, test, attack, or otherwise evaluate the security posture 
                of CyberAries' infrastructure without express, written pre-authorization from a designated 
                CyberAries authority</span>
              </li>
              <li>
                <i className="fas fa-times-circle"></i>
                <span>Uploading, transmitting, or introducing any form of malware, exploit, unauthorized 
                script, denial-of-service payload, or any other instrument designed to disrupt, damage, 
                or gain unauthorized access to systems</span>
              </li>
              <li>
                <i className="fas fa-times-circle"></i>
                <span>Engaging in any activity that violates applicable provisions of the Indian IT Act, 
                CERT-In regulatory notifications, DPDP Act 2023, or any other central, state, or 
                industry-specific regulation</span>
              </li>
              <li>
                <i className="fas fa-times-circle"></i>
                <span>Reverse engineering, decompiling, disassembling, or otherwise attempting to derive 
                source code, algorithms, or proprietary methodologies from any CyberAries digital asset 
                or service deliverable</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="client-responsibilities" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">04</span>
              <h2 className="tac-section-title">Client Responsibilities</h2>
            </div>
            <p className="tac-section-content">
              Clients engaging CyberAries' services acknowledge that the performance and accuracy of 
              assessments, audits, and advisory services are materially contingent upon the Client's 
              fulfillment of the following obligations, the breach of which shall relieve CyberAries 
              of any liability for deficiencies in service outcomes:
            </p>
            <ul className="tac-list tac-allowed">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Furnish complete, accurate, and current information for all security assessments; 
                CyberAries assumes no responsibility for inaccurate findings arising from incomplete 
                or erroneous data</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Ensure that all systems, networks, and assets submitted for testing are either 
                owned outright by the Client or are covered by documented authorization from the 
                relevant asset owner</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Implement, at the Client's sole discretion and responsibility, the remediation 
                recommendations provided in audit reports; CyberAries does not guarantee security 
                outcomes resulting from full or partial implementation</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Maintain full legal compliance within their own operational, regulatory, and 
                jurisdictional context throughout the engagement period and beyond</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="service-delivery" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">05</span>
              <h2 className="tac-section-title">Service Delivery</h2>
            </div>
            <p className="tac-section-content">
              All engagements, including but not limited to VAPT, Penetration Testing, SOC, compliance 
              audits, incident response, and related advisory services, are delivered subject to the 
              following terms and conditions, which are incorporated by reference into all Statements 
              of Work, Master Service Agreements, and contractual instruments:
            </p>
            <ul className="tac-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Scope, timelines, and deliverables are governed exclusively by the approved 
                Statement of Work (SoW); any deviations require written amendment executed by 
                authorized representatives of both parties</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>All service components are subject to Non-Disclosure and Confidentiality 
                Agreements; unauthorized disclosure may result in civil and criminal liability</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Recommendations, findings, and deliverables are advisory in nature; 
                CyberAries assumes no liability for outcomes arising from Client-side 
                implementation decisions</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>CyberAries reserves the right to modify, suspend, or terminate service delivery 
                upon material breach of these Terms, non-payment, or force majeure events, 
                without refund obligations</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="confidentiality" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">06</span>
              <h2 className="tac-section-title">Confidentiality</h2>
            </div>
            <p className="tac-section-content">
              CyberAries shall maintain strict confidentiality with respect to Client data disclosed 
              during engagements. However, this obligation shall not apply to information that: (i) is 
              or becomes publicly available through no fault of CyberAries; (ii) was independently 
              developed by CyberAries; (iii) is required to be disclosed by law, court order, or 
              regulatory directive; or (iv) is disclosed with prior written consent of the Client. 
              Specific categories of protected information include, without limitation:
            </p>
            <div className="tac-conf-grid">
              <div className="tac-conf-card">
                <i className="fas fa-server"></i>
                <h4>System Architecture</h4>
                <p>Infrastructure topology, configurations, and network diagrams shared during assessment</p>
              </div>
              <div className="tac-conf-card">
                <i className="fas fa-key"></i>
                <h4>Access Credentials</h4>
                <p>All credentials, tokens, and secrets disclosed for scoped testing purposes</p>
              </div>
              <div className="tac-conf-card">
                <i className="fas fa-file-alt"></i>
                <h4>Reports &amp; Results</h4>
                <p>Audit findings, vulnerability data, risk ratings, and recommendations</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="intellectual-property" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">07</span>
              <h2 className="tac-section-title">Intellectual Property</h2>
            </div>
            <p className="tac-section-content">
              All intellectual property, including without limitation, methodologies, frameworks, 
              assessment toolkits, dashboards, report templates, software tools, branding elements, 
              trade secrets, and proprietary processes, are and shall remain the exclusive and 
              absolute property of CyberAries or its licensors. No provision of these Terms or 
              any service agreement shall be construed as a transfer, assignment, or license of 
              any intellectual property rights to the Client, except as expressly stated in a 
              separately executed written instrument. Any unauthorized reproduction, reverse 
              engineering, distribution, or derivative use is strictly prohibited and may 
              constitute an actionable offense under applicable Indian and international law.
            </p>
            <p className="tac-section-content">
              Deliverables produced for a Client are licensed (not sold) for the Client's internal 
              use only, subject to payment in full, and may not be sublicensed, transferred, 
              published, or otherwise disclosed to any third party without prior written authorization 
              from CyberAries.
            </p>
          </section>

          {/* Section 8 */}
          <section id="payment" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">08</span>
              <h2 className="tac-section-title">Payment &amp; Refund Policy</h2>
            </div>
            <p className="tac-section-content">
              All financial obligations arising from service engagements are governed by the following 
              provisions, which are non-negotiable unless explicitly modified in writing:
            </p>
            <div className="tac-payment-grid">
              <div className="tac-payment-card">
                <i className="fas fa-rupee-sign"></i>
                <h4>Payment Terms</h4>
                <p>All invoices are due and payable strictly as per the timelines specified in the 
                respective contractual instrument; delayed payment attracts interest as prescribed</p>
              </div>
              <div className="tac-payment-card">
                <i className="fas fa-ban"></i>
                <h4>No Refunds</h4>
                <p>CyberAries maintains an absolute no-refund policy once any portion of 
                testing, audit, or advisory work has commenced, regardless of interim outcomes</p>
              </div>
              <div className="tac-payment-card">
                <i className="fas fa-pause-circle"></i>
                <h4>Delayed Payments</h4>
                <p>Non-payment or delayed payment may result in unilateral suspension of service 
                delivery and access to deliverables, without prejudice to CyberAries' right to 
                recover dues</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="liability" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">09</span>
              <h2 className="tac-section-title">Liability Limitations</h2>
            </div>
            <p className="tac-section-content">
              To the maximum extent permitted under applicable law, CyberAries, its directors, 
              officers, employees, agents, consultants, and affiliates expressly disclaim all 
              liability for any direct, indirect, incidental, special, consequential, punitive, 
              or exemplary damages arising out of or in connection with:
            </p>
            <ul className="tac-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Client-side misconfigurations, security oversights, or failure to implement 
                recommended security controls within commercially reasonable timeframes</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Data loss, data breach, or unauthorized access events attributable to 
                Client negligence, improper access control, or third-party compromise</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Failures, outages, or service disruptions attributable to third-party 
                infrastructure, cloud providers, SaaS vendors, or telecommunications carriers</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Misuse, misinterpretation, or unauthorized disclosure of VAPT findings, 
                vulnerability reports, or advisory recommendations by the Client or its agents</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Any consequential business losses, reputational harm, regulatory penalties, 
                or legal proceedings arising from the Client's independent implementation decisions</span>
              </li>
            </ul>
            <p className="tac-section-content">
              In no event shall CyberAries' aggregate liability exceed the total fees paid 
              by the Client for the specific service giving rise to the claim during the 
              three (3) months preceding the event, regardless of the cause of action or 
              the theory of liability alleged.
            </p>
          </section>

          {/* Section 10 */}
          <section id="indemnification" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">10</span>
              <h2 className="tac-section-title">Indemnification</h2>
            </div>
            <p className="tac-section-content">
              You agree to defend, indemnify, and hold harmless CyberAries, its directors, officers, 
              shareholders, employees, agents, successors, and assigns from and against any and all 
              claims, actions, demands, proceedings, losses, liabilities, judgments, damages, 
              penalties, fines, costs, and expenses (including reasonable legal fees) arising 
              out of or related to:
            </p>
            <ul className="tac-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Your use, misuse, redistribution, or unauthorized disclosure of security 
                assessment reports, vulnerability findings, or proprietary deliverables</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Your breach of any provision of these Terms or any applicable law, 
                regulation, or third-party right</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Any claim by a third party arising out of your reliance on, or application 
                of, CyberAries' security recommendations or implementation guidance</span>
              </li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="third-party" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">11</span>
              <h2 className="tac-section-title">Third-Party Links</h2>
            </div>
            <p className="tac-section-content">
              This website may contain hyperlinks to external websites, platforms, tools, or resources 
              operated by third parties. Such links are provided solely for reference and informational 
              convenience and shall not be construed as an endorsement, recommendation, or validation 
              by CyberAries of the content, products, services, security practices, or privacy policies 
              of any linked entity. CyberAries assumes no responsibility and expressly disclaims all 
              liability for any damages, losses, or legal exposure arising from your interaction with, 
              or reliance on, any third-party site or service. Access to third-party content is 
              entirely at your own risk.
            </p>
          </section>

          {/* Section 12 */}
          <section id="governing-law" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">12</span>
              <h2 className="tac-section-title">Governing Law</h2>
            </div>
            <div className="tac-law-card">
              <i className="fas fa-gavel"></i>
              <div>
                <p className="tac-section-content">
                  These Terms &amp; Conditions shall be governed by, construed, and enforced in 
                  accordance with the laws of the Republic of India, without regard to its conflict 
                  of law provisions. Any dispute, controversy, claim, or difference arising out of 
                  or in connection with these Terms — including questions regarding their existence, 
                  validity, interpretation, breach, or termination — shall be subject to the exclusive 
                  jurisdiction of the competent courts situated in Mumbai, Maharashtra, India. You 
                  hereby irrevocably submit to such jurisdiction and waive any objection to venue 
                  or inconvenient forum.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section id="contact" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">13</span>
              <h2 className="tac-section-title">Contact Us</h2>
            </div>
            <p className="tac-section-content">
              For legal inquiries, formal communications, or grievances pertaining to these Terms, 
              you may direct correspondence to:
            </p>
            <div className="tac-contact-grid">
              <div className="tac-contact-card">
                <i className="fas fa-building"></i>
                <h4>Company Name</h4>
                <p>CyberAries Security Solutions</p>
              </div>
              <div className="tac-contact-card">
                <i className="fas fa-envelope"></i>
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:legal@cyberaries.com">legal@cyberaries.com</a>
                </p>
              </div>
              <div className="tac-contact-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Office Address</h4>
                <p>Hiranandani Business Park, Powai, Mumbai - 400071, India</p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="tac-cta">
            <h3>Have Questions About Our Terms?</h3>
            <p>Our legal team is available to clarify any provisions, obligations, or concerns you may have.</p>
            <Link to="/contact" className="tac-cta-btn">
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