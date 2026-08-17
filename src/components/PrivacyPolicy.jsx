import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import './PrivacyPolicy.css';

/* ---- SEO: structured data (module scope for stable identity) ---- */
const privacyWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description:
    "How CyberAries Pvt Ltd collects, uses, shares and protects personal data under India's DPDP Act, 2023 and DPDP Rules, 2025, including cookies and your rights.",
  url: 'https://cyberaries.com/privacy-policy',
  inLanguage: 'en',
  datePublished: '2025-12-01',
  dateModified: '2026-08-17',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CyberAries',
    url: 'https://cyberaries.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'CyberAries Pvt Ltd',
    url: 'https://cyberaries.com',
  },
};

const privacyBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://cyberaries.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Privacy Policy',
      item: 'https://cyberaries.com/privacy-policy',
    },
  ],
};

const privacyJsonLd = [privacyWebPageJsonLd, privacyBreadcrumbJsonLd];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pp-wrapper">
      <Seo
        title="Privacy Policy | CyberAries Pvt Ltd"
        description="How CyberAries Pvt Ltd collects, uses, shares and protects personal data under India's DPDP Act, 2023 and DPDP Rules, 2025, including cookies and your rights."
        path="/privacy-policy"
        jsonLd={privacyJsonLd}
      />

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
          <p className="pp-hero-date">Last Updated: 17 August 2026</p>
          <div className="pp-hero-badge">
            <i className="fas fa-shield-alt"></i>
            <span>DPDP Act 2023 &amp; DPDP Rules 2025 Compliant</span>
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
              <a href="#cookies">Cookies &amp; Tracking</a>
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
              <strong>Your Privacy Matters:</strong> This Privacy Policy explains
              how CyberAries Pvt Ltd collects, uses, discloses, stores and
              deletes personal data across our website and services, in
              accordance with the Digital Personal Data Protection Act, 2023
              (DPDP Act) and the DPDP Rules, 2025. It is written to be a clear,
              honest disclosure of our actual data practices — including the
              analytics and advertising technologies deployed on this website.
            </div>
          </div>

          {/* Section 1 */}
          <section id="introduction" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">01</span>
              <h2 className="pp-section-title">Introduction</h2>
            </div>
            <p className="pp-section-content">
              CyberAries Pvt Ltd ("CyberAries", "we", "our", "us") is a
              cybersecurity services company registered in Mumbai, India,
              providing Vulnerability Assessment and Penetration Testing (VAPT),
              regulatory and compliance audits, Governance, Risk and Compliance
              (GRC) advisory, and related security services to banks, NBFCs, and
              enterprises.
            </p>
            <p className="pp-section-content">
              In relation to the personal data described in this Policy,
              CyberAries acts as a <strong>Data Fiduciary</strong> under the{' '}
              <strong>
                Digital Personal Data Protection Act, 2023 (DPDP Act)
              </strong>{' '}
              and the <strong>DPDP Rules, 2025</strong>. We also comply with the
              Information Technology Act, 2000 and, where applicable, the
              directions issued by the Indian Computer Emergency Response Team
              (CERT-In) on cyber incident reporting. This Policy describes what
              personal data we collect, why we collect it, who we share it with,
              how long we keep it, and the rights you can exercise. Your use of
              our website and services is also governed by our{' '}
              <Link to="/terms-conditions">Terms &amp; Conditions</Link>.
            </p>
          </section>

          {/* Section 2 */}
          <section id="applicability" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">02</span>
              <h2 className="pp-section-title">Applicability</h2>
            </div>
            <p className="pp-section-content">
              This Policy applies to all individuals whose personal data
              CyberAries processes in connection with its website and services,
              including:
            </p>
            <div className="pp-applicability-grid">
              <div className="pp-applicability-card">
                <i className="fas fa-globe"></i>
                <h4>Website Visitors</h4>
                <p>Visitors to www.cyberaries.com and associated subdomains</p>
              </div>
              <div className="pp-applicability-card">
                <i className="fas fa-handshake"></i>
                <h4>Clients</h4>
                <p>
                  Individuals at organizations engaging CyberAries for
                  cybersecurity services
                </p>
              </div>
              <div className="pp-applicability-card">
                <i className="fas fa-envelope-open-text"></i>
                <h4>Contacts</h4>
                <p>
                  Individuals reaching us via web forms, email, telephone,
                  WhatsApp, or appointment booking
                </p>
              </div>
              <div className="pp-applicability-card">
                <i className="fas fa-users"></i>
                <h4>Stakeholders</h4>
                <p>
                  Employees, vendors, trainees, contractors, and authorized
                  service partners
                </p>
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
                <li>
                  <i className="fas fa-check"></i>
                  <span>Full name, email address, and contact number</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Organization name and professional designation or role
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Inquiry messages, service requirements, and scoping details
                    submitted through our contact form (processed via Formspree)
                    or surveys (processed via Google Forms)
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Appointment details you provide when booking a consultation
                    through our Titan booking page
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Billing and invoicing information where services are
                    commercially engaged
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Documentation and assets voluntarily submitted for the
                    purpose of security assessments
                  </span>
                </li>
              </ul>
            </div>

            <div className="pp-data-category">
              <h3>
                <i className="fas fa-robot"></i>
                3.2 Data Collected Automatically
              </h3>
              <p className="pp-section-content">
                When you browse our website, the following data is collected
                automatically through cookies and similar technologies operated
                by us and by the third-party providers named in Section 6:
              </p>
              <ul className="pp-list">
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Internet Protocol (IP) address and approximate location
                    derived from it
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Browser type, operating system, device type, and screen
                    characteristics
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Pages visited, time on page, referral source, and
                    navigation paths, measured through Google Analytics 4
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    On-page behavior such as clicks, scrolling, and mouse
                    movement, captured by Microsoft Clarity in the form of
                    heatmaps and session replays
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Advertising identifiers and conversion signals collected by
                    the LinkedIn Insight Tag for campaign measurement and
                    retargeting
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Technical requests made to content delivery networks that
                    serve website assets (for example, the Font Awesome icon
                    library from cdnjs.cloudflare.com), which receive your IP
                    address as part of the request
                  </span>
                </li>
              </ul>
            </div>

            <div className="pp-data-category pp-sensitive">
              <h3>
                <i className="fas fa-exclamation-triangle"></i>
                3.3 Sensitive Personal Data
              </h3>
              <p className="pp-section-content">
                CyberAries does not, as a matter of standard practice, solicit
                or collect sensitive personal data through this website. Where a
                client engagement requires the processing of sensitive data (for
                example, within systems in scope for a security assessment),
                such processing is governed by the engagement contract, limited
                to what the engagement requires, and protected by heightened
                safeguards and documented consent in accordance with the DPDP
                Act and the DPDP Rules, 2025.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="purpose" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">04</span>
              <h2 className="pp-section-title">
                Purpose of Collecting Personal Data
              </h2>
            </div>
            <p className="pp-section-content">
              We process personal data for the following specified purposes. We
              do not process personal data for purposes beyond these without an
              appropriate legal basis and, where required, fresh notice or
              consent:
            </p>
            <div className="pp-purpose-grid">
              <div className="pp-purpose-card">
                <i className="fas fa-shield-virus"></i>
                <h4>Service Delivery</h4>
                <p>
                  VAPT, regulatory audits, compliance assessments, and GRC
                  engagements
                </p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-comments"></i>
                <h4>Support &amp; Inquiries</h4>
                <p>
                  Responding to inquiries, scheduling consultations, and
                  handling grievances
                </p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-chart-line"></i>
                <h4>Analytics &amp; Improvement</h4>
                <p>
                  Understanding how the website is used so we can improve
                  content, performance, and usability
                </p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-bullhorn"></i>
                <h4>Marketing Measurement</h4>
                <p>
                  Measuring the effectiveness of our LinkedIn campaigns and
                  reaching relevant professional audiences
                </p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-balance-scale"></i>
                <h4>Regulatory Compliance</h4>
                <p>
                  CERT-In incident reporting obligations, audit requirements,
                  and statutory filings
                </p>
              </div>
              <div className="pp-purpose-card">
                <i className="fas fa-file-invoice-dollar"></i>
                <h4>Business Operations</h4>
                <p>
                  Client onboarding, project coordination, invoicing, and
                  record-keeping
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="lawful-basis" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">05</span>
              <h2 className="pp-section-title">
                Lawful Basis Under the DPDP Act
              </h2>
            </div>
            <p className="pp-section-content">
              Our processing of personal data rests on one or more of the
              following grounds recognized under the DPDP Act, 2023 and the
              DPDP Rules, 2025:
            </p>
            <div className="pp-lawful-grid">
              <div className="pp-lawful-card">
                <div className="pp-lawful-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h4>Consent</h4>
                <p>
                  Free, specific, informed, and unambiguous consent — for
                  example, when you submit a form, book an appointment, or
                  accept non-essential cookies. You may withdraw consent at any
                  time (Section 10).
                </p>
              </div>
              <div className="pp-lawful-card">
                <div className="pp-lawful-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h4>Legitimate Uses</h4>
                <p>
                  Certain legitimate uses recognized by the DPDP Act, including
                  processing needed to respond to a request you have voluntarily
                  made to us and to deliver services you have asked for
                </p>
              </div>
              <div className="pp-lawful-card">
                <div className="pp-lawful-icon">
                  <i className="fas fa-gavel"></i>
                </div>
                <h4>Legal Compliance</h4>
                <p>
                  Statutory obligations, including CERT-In incident reporting,
                  regulatory audit requirements, and financial record-keeping
                  under Indian law
                </p>
              </div>
            </div>
            <p className="pp-section-content">
              For visitors from the European Economic Area or the United
              Kingdom: where the GDPR or UK GDPR applies, our lawful bases are
              consent (for analytics and advertising cookies), performance of a
              contract or steps taken at your request, legitimate interests, and
              compliance with legal obligations.
            </p>
          </section>

          {/* Section 6 */}
          <section id="cookies" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">06</span>
              <h2 className="pp-section-title">
                Cookies &amp; Tracking Technologies
              </h2>
            </div>
            <p className="pp-section-content">
              Our website uses cookies and similar technologies in three
              categories. Being transparent about this matters to us: in
              addition to essential cookies, this site deploys{' '}
              <strong>analytics</strong> tools (Google Analytics 4 and Microsoft
              Clarity) and an <strong>advertising</strong> tool (the LinkedIn
              Insight Tag). The categories are:
            </p>
            <div className="pp-cookies-container">
              <div className="pp-cookie-item">
                <div className="pp-cookie-header">
                  <i className="fas fa-cookie-bite"></i>
                  <h4>Essential</h4>
                </div>
                <p>
                  Strictly necessary for the website to function — page
                  delivery, security, and load balancing. These do not require
                  consent and cannot be switched off.
                </p>
              </div>
              <div className="pp-cookie-item">
                <div className="pp-cookie-header">
                  <i className="fas fa-chart-bar"></i>
                  <h4>Analytics &amp; Performance</h4>
                </div>
                <p>
                  Google Analytics 4 (cookies such as _ga and _ga_*) measures
                  visits and traffic sources. Microsoft Clarity (cookies such as
                  _clck, _clsk, CLID, and MUID) records heatmaps and session
                  replays of how visitors interact with pages.
                </p>
              </div>
              <div className="pp-cookie-item">
                <div className="pp-cookie-header">
                  <i className="fas fa-bullhorn"></i>
                  <h4>Advertising &amp; Marketing</h4>
                </div>
                <p>
                  The LinkedIn Insight Tag (cookies such as bcookie, lidc,
                  li_sugr, UserMatchHistory, and AnalyticsSyncHistory) enables
                  conversion tracking for our LinkedIn campaigns and retargeting
                  of website visitors on LinkedIn.
                </p>
              </div>
            </div>
            <div className="pp-important-note">
              <i className="fas fa-info-circle"></i>
              <span>
                For cookie-by-cookie tables, durations, and step-by-step opt-out
                instructions for each provider, see our{' '}
                <Link to="/cookie-policy">
                  <strong>Cookie Policy</strong>
                </Link>
                .
              </span>
            </div>
          </section>

          {/* Section 7 */}
          <section id="data-sharing" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">07</span>
              <h2 className="pp-section-title">Sharing of Personal Data</h2>
            </div>
            <p className="pp-section-content">
              CyberAries does not sell personal data. We share personal data
              only with the following categories of recipients, on a
              need-to-know basis and subject to appropriate contractual and
              legal safeguards:
            </p>
            <ul className="pp-list">
              <li>
                <i className="fas fa-users-cog"></i>
                <span>
                  Internal CyberAries security and delivery teams engaged in
                  executing the contracted service scope
                </span>
              </li>
              <li>
                <i className="fas fa-server"></i>
                <span>
                  Cloud and hosting infrastructure providers that operate our
                  website and business systems
                </span>
              </li>
              <li>
                <i className="fas fa-paper-plane"></i>
                <span>
                  Formspree, which processes contact-form submissions on our
                  behalf
                </span>
              </li>
              <li>
                <i className="fab fa-google"></i>
                <span>
                  Google, which provides Google Analytics 4, Google Forms
                  (surveys), and the Google Maps embed on our contact page
                </span>
              </li>
              <li>
                <i className="fab fa-microsoft"></i>
                <span>
                  Microsoft, which provides Clarity behavioral analytics
                  (heatmaps and session replay)
                </span>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <span>
                  LinkedIn, which receives data through the LinkedIn Insight Tag
                  for conversion tracking and retargeting
                </span>
              </li>
              <li>
                <i className="fas fa-calendar-check"></i>
                <span>
                  Titan, which processes appointment bookings made through our
                  scheduling page
                </span>
              </li>
              <li>
                <i className="fas fa-landmark"></i>
                <span>
                  Regulatory and government authorities, including CERT-In,
                  MeitY, or law enforcement, when disclosure is required by
                  applicable Indian law
                </span>
              </li>
              <li>
                <i className="fas fa-file-signature"></i>
                <span>
                  Authorized auditors and sub-processors operating under
                  Non-Disclosure Agreements and data processing agreements
                </span>
              </li>
            </ul>
            <div className="pp-important-note">
              <i className="fas fa-info-circle"></i>
              <strong>
                We do not sell, lease, or trade personal data under any
                circumstance.
              </strong>
            </div>
            <p className="pp-section-content">
              If you contact us via a WhatsApp click-to-chat link, the resulting
              conversation is handled on WhatsApp's platform and is subject to
              WhatsApp's own privacy policy in addition to this one.
            </p>
          </section>

          {/* Section 8 */}
          <section id="security" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">08</span>
              <h2 className="pp-section-title">Data Security Measures</h2>
            </div>
            <p className="pp-section-content">
              CyberAries implements reasonable security safeguards, as required
              by the DPDP Act and the DPDP Rules, 2025, to protect personal data
              against unauthorized access, disclosure, alteration, or
              destruction. These measures include:
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
                <p>
                  Role-based access control (RBAC) with least-privilege
                  enforcement
                </p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-fire"></i>
                <h4>Firewalls</h4>
                <p>
                  Multi-layer perimeter and application-layer firewall
                  protection
                </p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-code-branch"></i>
                <h4>Secure DevOps</h4>
                <p>
                  Security-integrated development lifecycle and code review
                  practices
                </p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-eye"></i>
                <h4>Monitoring</h4>
                <p>Continuous security monitoring and alerting</p>
              </div>
              <div className="pp-security-card">
                <i className="fas fa-search"></i>
                <h4>Testing</h4>
                <p>
                  Periodic internal penetration testing and vulnerability
                  assessments
                </p>
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
                  We retain personal data only for as long as it is needed for
                  the purposes described in this Policy, to comply with legal
                  and regulatory requirements (including record-keeping and
                  incident-reporting obligations under Indian law), to resolve
                  disputes, and to enforce our agreements. When personal data is
                  no longer required — or when you validly withdraw consent and
                  no other legal ground requires retention — it is securely
                  deleted or anonymized. We conduct periodic data inventory
                  reviews to keep our retention practices aligned with this
                  framework and with the timelines contemplated under the DPDP
                  Rules, 2025.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="rights" className="pp-section">
            <div className="pp-section-header">
              <span className="pp-section-num">10</span>
              <h2 className="pp-section-title">
                Your Rights as a Data Principal
              </h2>
            </div>
            <p className="pp-section-content">
              As a Data Principal under the DPDP Act, 2023, you have the
              following rights in respect of your personal data. To exercise any
              of them, write to our Grievance Officer at{' '}
              <a href="mailto:privacy@cyberaries.com">privacy@cyberaries.com</a>
              ; we respond within the timelines prescribed under applicable law:
            </p>
            <div className="pp-rights-grid">
              <div className="pp-rights-card">
                <i className="fas fa-eye"></i>
                <h4>Access</h4>
                <p>
                  Obtain a summary of the personal data being processed and the
                  processing activities undertaken
                </p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-edit"></i>
                <h4>Correction &amp; Completion</h4>
                <p>
                  Have inaccurate or misleading personal data corrected, and
                  incomplete data completed or updated
                </p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-trash-alt"></i>
                <h4>Erasure</h4>
                <p>
                  Have personal data erased when it is no longer necessary for
                  the purpose it was collected for
                </p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-hand-paper"></i>
                <h4>Withdraw Consent</h4>
                <p>
                  Withdraw consent at any time, as easily as it was given,
                  without affecting prior lawful processing
                </p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-user-friends"></i>
                <h4>Nominate</h4>
                <p>
                  Nominate another individual to exercise your rights in the
                  event of death or incapacity
                </p>
              </div>
              <div className="pp-rights-card">
                <i className="fas fa-exclamation-circle"></i>
                <h4>Grievance Redressal</h4>
                <p>
                  Raise a grievance with our Grievance Officer regarding any
                  act or omission concerning your personal data
                </p>
              </div>
            </div>
            <p className="pp-section-content">
              If you are not satisfied with our response after exhausting the
              grievance redressal process described above, you have the right to
              file a complaint with the{' '}
              <strong>Data Protection Board of India</strong>.
            </p>
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
                  The DPDP Act defines a child as an individual below eighteen
                  (18) years of age. CyberAries does not knowingly collect or
                  process the personal data of children; our website and
                  services are directed exclusively at corporate and
                  professional audiences. If we become aware that a child's
                  personal data has been collected without verifiable consent of
                  a parent or lawful guardian, we will delete it promptly.
                  Parents and guardians may contact our Grievance Officer at{' '}
                  <a href="mailto:privacy@cyberaries.com">
                    privacy@cyberaries.com
                  </a>{' '}
                  to request deletion.
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
                  Some of the service providers named in this Policy (including
                  Google, Microsoft, LinkedIn, Formspree, and Titan) may store
                  or process personal data on servers located outside India. The
                  DPDP Act permits the transfer of personal data outside India
                  except to countries or territories restricted by notification
                  of the Central Government; we transfer personal data only in
                  compliance with that framework and any conditions prescribed
                  under the DPDP Rules, 2025, supported by data processing
                  agreements with our providers.
                </p>
                <p className="pp-section-content">
                  For visitors from the EEA or the UK: where the GDPR or UK GDPR
                  applies to our processing, cross-border transfers are
                  protected by appropriate safeguards, such as Standard
                  Contractual Clauses (SCCs) or adequacy decisions, where
                  applicable.
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
              All data-related requests, grievances, and privacy inquiries may
              be directed to CyberAries' designated Data Protection and
              Grievance Officer:
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
                    <p>CyberAries Pvt Ltd</p>
                  </div>
                </div>
                <div className="pp-dpo-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href="mailto:privacy@cyberaries.com">
                        privacy@cyberaries.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="pp-dpo-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <strong>Phone</strong>
                    <p>
                      <a href="tel:+918828495202">+91 88284 95202</a>
                    </p>
                  </div>
                </div>
                <div className="pp-dpo-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Registered Office</strong>
                    <p>
                      WeWork Lightbridge, 6th Floor, Hiranandani Business Park,
                      Saki Vihar Road, Chandivali, Powai, Mumbai, Maharashtra
                      400072, India
                    </p>
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
              We may update this Privacy Policy from time to time to reflect
              changes in law, regulatory guidance, our data practices, or the
              third-party tools deployed on our website. The current version,
              with its "Last Updated" date, will always be posted on this page,
              and material changes will be highlighted here. We encourage you to
              review this Policy periodically, together with our{' '}
              <Link to="/terms-conditions">Terms &amp; Conditions</Link> and{' '}
              <Link to="/cookie-policy">Cookie Policy</Link>, to stay informed
              about how your personal data is handled. This Policy is governed
              by the laws of the Republic of India, and any disputes arising
              from it are subject to the exclusive jurisdiction of the courts at
              Mumbai, Maharashtra.
            </p>
          </section>

          {/* Bottom CTA */}
          <div className="pp-cta">
            <div className="pp-cta-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <div className="pp-cta-content">
              <h3>Have Questions About Your Privacy?</h3>
              <p>
                Our Data Protection Officer is available to address privacy
                concerns and data requests.
              </p>
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
