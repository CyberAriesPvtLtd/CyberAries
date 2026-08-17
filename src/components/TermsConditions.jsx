import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import './TermsConditions.css';

/* ---- SEO: JSON-LD blocks (module scope for stable identity) ---- */
const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms & Conditions',
  description:
    'Terms and conditions governing the use of the CyberAries website and the delivery of cybersecurity services, including VAPT, security audits, compliance and GRC engagements in India.',
  url: 'https://cyberaries.com/terms-conditions',
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

const breadcrumbJsonLd = {
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
      name: 'Terms & Conditions',
      item: 'https://cyberaries.com/terms-conditions',
    },
  ],
};

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tac-wrapper">
      <Seo
        title="Terms & Conditions | CyberAries Pvt Ltd"
        description="Terms for CyberAries Pvt Ltd's cybersecurity services in India — VAPT, security audits, compliance and GRC — including website use, payment and liability."
        path="/terms-conditions"
        jsonLd={[webPageJsonLd, breadcrumbJsonLd]}
      />

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
          <p className="tac-hero-date">
            Effective Date: 17 August 2026 &middot; Last Updated: 17 August 2026
          </p>
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
              <a href="#website-use">Eligibility &amp; Website Use</a>
              <a href="#client-responsibilities">Client Responsibilities</a>
              <a href="#service-delivery">Service Delivery</a>
              <a href="#confidentiality">Confidentiality</a>
              <a href="#intellectual-property">Intellectual Property</a>
              <a href="#payment">Payment &amp; Refund</a>
              <a href="#warranties">Disclaimer of Warranties</a>
              <a href="#liability">Limitation of Liability</a>
              <a href="#indemnification">Indemnification</a>
              <a href="#third-party">Third-Party Links &amp; Services</a>
              <a href="#governing-law">Governing Law &amp; Disputes</a>
              <a href="#general-provisions">General Provisions</a>
              <a href="#changes">Changes to These Terms</a>
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
              <strong>In plain language:</strong> This page sets out the terms on which
              CyberAries Pvt Ltd operates this website and delivers its cybersecurity
              services. It applies to visitors browsing the site and to clients who engage
              us for services such as VAPT, security audits and compliance consulting. For
              client engagements, the signed Statement of Work or service agreement governs
              the specifics; these Terms fill in the general framework. Please also read
              our <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
              <Link to="/cookie-policy">Cookie Policy</Link>, which explain how we handle
              personal data and cookies.
            </div>
          </div>

          {/* Section 1 */}
          <section id="acceptance" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">01</span>
              <h2 className="tac-section-title">Acceptance of Terms</h2>
            </div>
            <p className="tac-section-content">
              These Terms &amp; Conditions ("Terms") are an agreement between you and
              CyberAries Pvt Ltd ("CyberAries", "we", "our", "us"). By accessing or using
              this website, or by engaging CyberAries for cybersecurity services, you agree
              to be bound by these Terms. If you are accepting on behalf of a company or
              other organisation, you confirm that you have the authority to bind that
              organisation, and "you" refers to that organisation.
            </p>
            <p className="tac-section-content">
              We may revise these Terms from time to time. When we make material changes,
              we will post the updated Terms on this page with a revised "Last Updated"
              date and, where required by applicable law or by an existing contract, notify
              you directly. Your continued use of the website or our services after an
              update is posted constitutes acceptance of the revised Terms. If you do not
              agree with a revision, please stop using the website and contact us to
              discuss any ongoing engagement.
            </p>
            <p className="tac-section-content">
              Where you have signed a Statement of Work ("SoW"), Master Service Agreement
              ("MSA") or other written contract with CyberAries, that contract prevails
              over these Terms to the extent of any conflict for the services it covers.
              Our handling of personal data is described in our{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>, and our use of cookies and
              similar technologies in our <Link to="/cookie-policy">Cookie Policy</Link>;
              both form part of the terms on which we operate this website.
            </p>
          </section>

          {/* Section 2 */}
          <section id="about" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">02</span>
              <h2 className="tac-section-title">About CyberAries</h2>
            </div>
            <p className="tac-section-content">
              CyberAries Pvt Ltd is a cybersecurity services company incorporated in India,
              with its registered office at WeWork Lightbridge, 6th Floor, Hiranandani
              Business Park, Saki Vihar Road, Chandivali, Powai, Mumbai, Maharashtra
              400072, India. We provide cybersecurity services to banks, NBFCs, fintechs
              and enterprises across India, including vulnerability assessment and
              penetration testing (VAPT), regulatory security audits, compliance
              consulting, and governance, risk &amp; compliance (GRC) advisory. Our current
              service areas include:
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
            <p className="tac-section-content">
              The service descriptions on this website are for general information. The
              scope, deliverables and commercial terms of any engagement are defined in the
              applicable SoW or service agreement, and our service portfolio may evolve
              over time.
            </p>
          </section>

          {/* Section 3 */}
          <section id="website-use" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">03</span>
              <h2 className="tac-section-title">Eligibility &amp; Use of Our Website</h2>
            </div>
            <p className="tac-section-content">
              You may use this website if you are at least 18 years of age or are acting
              under the supervision of an organisation that has accepted these Terms.
              Subject to your compliance with these Terms and applicable law, CyberAries
              grants you a limited, non-exclusive, non-transferable, revocable licence to
              access and use this website for informational purposes and to enquire about
              our services.
            </p>
            <p className="tac-section-content">
              The following activities are prohibited and may expose you to civil and
              criminal liability under the Information Technology Act, 2000, directions
              issued by CERT-In, and other applicable laws:
            </p>
            <ul className="tac-list tac-prohibited">
              <li>
                <i className="fas fa-times-circle"></i>
                <span>
                  Probing, scanning, penetration testing or otherwise attacking or
                  evaluating the security of CyberAries' website or infrastructure without
                  our prior written authorisation
                </span>
              </li>
              <li>
                <i className="fas fa-times-circle"></i>
                <span>
                  Uploading or transmitting malware, exploits, unauthorised scripts,
                  denial-of-service payloads or any other code designed to disrupt, damage
                  or gain unauthorised access to systems or data
                </span>
              </li>
              <li>
                <i className="fas fa-times-circle"></i>
                <span>
                  Using the website in violation of the Information Technology Act, 2000,
                  CERT-In directions, the Digital Personal Data Protection Act, 2023, or
                  any other applicable central, state or sectoral law or regulation
                </span>
              </li>
              <li>
                <i className="fas fa-times-circle"></i>
                <span>
                  Reverse engineering, decompiling, scraping or copying the website's
                  source code, content or design, or misrepresenting your affiliation with
                  CyberAries
                </span>
              </li>
            </ul>
            <p className="tac-section-content">
              Information you submit through our contact and enquiry forms is processed as
              described in our <Link to="/privacy-policy">Privacy Policy</Link>. Cookies
              and analytics tools used on this website are described in our{' '}
              <Link to="/cookie-policy">Cookie Policy</Link>, where you can also manage
              your preferences.
            </p>
          </section>

          {/* Section 4 */}
          <section id="client-responsibilities" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">04</span>
              <h2 className="tac-section-title">Client Responsibilities</h2>
            </div>
            <p className="tac-section-content">
              Security assessments depend on accurate inputs and proper authorisation. The
              quality and reliability of our work depends materially on clients meeting the
              following obligations, and delays or gaps in doing so may affect timelines
              and findings:
            </p>
            <ul className="tac-list tac-allowed">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>
                  Provide complete, accurate and current information about the systems,
                  applications and environments in scope, and promptly tell us about
                  changes that could affect the engagement
                </span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>
                  Ensure that every system, network or asset submitted for testing is
                  either owned by you or covered by documented authorisation from its
                  owner (for example, a cloud or hosting provider) before testing begins
                </span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>
                  Review our findings and decide, on your own responsibility, which
                  remediation recommendations to implement and how; we are available to
                  assist with remediation as a separate engagement
                </span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>
                  Comply with the laws and regulations that apply to your own business,
                  including any obligation to report incidents to CERT-In or a sectoral
                  regulator within prescribed timelines
                </span>
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
              Engagements such as VAPT, penetration testing, SOC monitoring, compliance
              audits, incident response and advisory services are delivered on the
              following basis, which is incorporated into each SoW or service agreement
              unless that document states otherwise:
            </p>
            <ul className="tac-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Scope, timelines and deliverables are governed by the approved SoW;
                  changes require a written amendment agreed by authorised representatives
                  of both parties
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Engagements are conducted under confidentiality obligations (see Section
                  06) and, where agreed, a separate non-disclosure agreement
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Findings, reports and recommendations are advisory in nature; decisions
                  about whether and how to implement them, and their business impact,
                  remain with the client
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  CyberAries may suspend or terminate service delivery on written notice
                  for material breach of these Terms or the applicable contract, for
                  non-payment, or where a force majeure event prevents performance
                </span>
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
              CyberAries treats client information disclosed during an engagement as
              confidential and uses it only to deliver the agreed services. This obligation
              does not apply to information that: (i) is or becomes publicly available
              through no fault of CyberAries; (ii) was already known to us without a duty
              of confidence; (iii) was independently developed by us without use of your
              confidential information; (iv) must be disclosed under law, a court order or
              a regulatory or CERT-In direction (in which case we will, where lawful, give
              you prior notice); or (v) is disclosed with your prior written consent.
              Categories of information we protect include:
            </p>
            <div className="tac-conf-grid">
              <div className="tac-conf-card">
                <i className="fas fa-server"></i>
                <h4>System Architecture</h4>
                <p>
                  Infrastructure topology, configurations and network diagrams shared
                  during assessments
                </p>
              </div>
              <div className="tac-conf-card">
                <i className="fas fa-key"></i>
                <h4>Access Credentials</h4>
                <p>
                  Credentials, tokens and secrets disclosed for scoped testing, which we
                  handle securely and return or destroy after the engagement
                </p>
              </div>
              <div className="tac-conf-card">
                <i className="fas fa-file-alt"></i>
                <h4>Reports &amp; Results</h4>
                <p>
                  Audit findings, vulnerability data, risk ratings and remediation
                  recommendations
                </p>
              </div>
            </div>
            <p className="tac-section-content">
              Where engagement data includes personal data, we process it in accordance
              with the Digital Personal Data Protection Act, 2023, the DPDP Rules, 2025 and
              our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </section>

          {/* Section 7 */}
          <section id="intellectual-property" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">07</span>
              <h2 className="tac-section-title">Intellectual Property</h2>
            </div>
            <p className="tac-section-content">
              CyberAries and its licensors retain all intellectual property rights in our
              methodologies, frameworks, assessment toolkits, dashboards, report templates,
              software tools, branding and other proprietary materials. Nothing in these
              Terms or in a service agreement transfers ownership of those rights to you,
              and they may not be reproduced, reverse engineered, distributed or used to
              create derivative works without our prior written consent.
            </p>
            <p className="tac-section-content">
              Reports and other deliverables we prepare for you are licensed for your
              internal business use, including sharing with your regulators, auditors and
              professional advisers under confidentiality, once the applicable fees have
              been paid in full. Deliverables may not otherwise be published, sublicensed
              or provided to third parties without our prior written consent. Your own
              data, systems and pre-existing materials remain yours; you grant us only the
              limited rights needed to perform the services.
            </p>
          </section>

          {/* Section 8 */}
          <section id="payment" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">08</span>
              <h2 className="tac-section-title">Payment &amp; Refund Policy</h2>
            </div>
            <p className="tac-section-content">
              Fees, invoicing schedules and payment terms are set out in the applicable
              SoW, proposal or service agreement. Unless that document says otherwise, the
              following applies:
            </p>
            <div className="tac-payment-grid">
              <div className="tac-payment-card">
                <i className="fas fa-rupee-sign"></i>
                <h4>Payment Terms</h4>
                <p>
                  Invoices are due within the period stated in the applicable contractual
                  instrument, together with applicable taxes such as GST
                </p>
              </div>
              <div className="tac-payment-card">
                <i className="fas fa-ban"></i>
                <h4>Refunds</h4>
                <p>
                  Fees for work already performed or commenced are non-refundable; if you
                  cancel before work begins, we will refund amounts paid less any costs
                  reasonably incurred in preparation
                </p>
              </div>
              <div className="tac-payment-card">
                <i className="fas fa-pause-circle"></i>
                <h4>Late Payment</h4>
                <p>
                  Overdue amounts may attract interest at the rate stated in the contract
                  or permitted by law, and we may suspend services or withhold deliverables
                  until payment is received
                </p>
              </div>
            </div>
            <p className="tac-section-content">
              If you dispute an invoice in good faith, tell us in writing before the due
              date and pay the undisputed portion; both parties will work promptly to
              resolve the dispute.
            </p>
          </section>

          {/* Section 9 */}
          <section id="warranties" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">09</span>
              <h2 className="tac-section-title">Disclaimer of Warranties</h2>
            </div>
            <p className="tac-section-content">
              This website and its content are provided on an "as is" and "as available"
              basis. To the extent permitted by applicable law, CyberAries makes no
              warranties, express or implied, about the website, including implied
              warranties of merchantability, fitness for a particular purpose or
              non-infringement, and does not warrant that the website will be
              uninterrupted, error-free or free of harmful components. Content on this
              website is general information, not professional advice for your specific
              situation.
            </p>
            <p className="tac-section-content">
              We perform our services with reasonable skill and care, using
              industry-recognised methodologies. However, no security assessment can
              guarantee that every vulnerability will be identified, and no security
              control can guarantee that a system will never be compromised. Penetration
              tests and audits reflect the state of the tested environment at a point in
              time, within the agreed scope, and against threats known at the time of
              testing. A report finding no critical issues is not a certification that
              your systems are secure, and passing an audit does not by itself ensure
              compliance with every legal or regulatory obligation that applies to you.
              Except as expressly stated in a signed agreement, and to the maximum extent
              permitted by applicable law, we disclaim all other warranties in relation to
              the services.
            </p>
          </section>

          {/* Section 10 */}
          <section id="liability" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">10</span>
              <h2 className="tac-section-title">Limitation of Liability</h2>
            </div>
            <p className="tac-section-content">
              To the maximum extent permitted by applicable law, CyberAries, its directors,
              officers, employees and consultants are not liable for indirect, incidental,
              special, consequential, punitive or exemplary damages, or for loss of
              profits, revenue, data or goodwill, arising out of or in connection with the
              website or the services. In particular, we are not liable for losses arising
              from:
            </p>
            <ul className="tac-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Client-side misconfigurations, security weaknesses outside the agreed
                  scope, or a decision not to implement recommended security controls
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Data loss, breaches or unauthorised access attributable to client
                  negligence, inadequate access controls or compromise of third parties
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Failures or outages of third-party infrastructure, cloud platforms, SaaS
                  vendors or telecommunications carriers outside our control
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Misuse, misinterpretation or unauthorised disclosure of assessment
                  findings or reports by the client or its agents
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Business losses, regulatory penalties or legal proceedings resulting from
                  the client's own implementation and compliance decisions
                </span>
              </li>
            </ul>
            <p className="tac-section-content">
              To the maximum extent permitted by applicable law, CyberAries' total
              aggregate liability arising out of or in connection with an engagement,
              whether in contract, tort or otherwise, is limited to the fees paid by the
              client for the service giving rise to the claim in the three (3) months
              preceding the claim. Nothing in these Terms excludes or limits liability
              that cannot be excluded or limited under applicable law, such as liability
              for fraud.
            </p>
          </section>

          {/* Section 11 */}
          <section id="indemnification" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">11</span>
              <h2 className="tac-section-title">Indemnification</h2>
            </div>
            <p className="tac-section-content">
              You agree to indemnify and hold harmless CyberAries, its directors, officers,
              employees and agents against third-party claims, losses, liabilities and
              reasonable legal costs to the extent arising out of:
            </p>
            <ul className="tac-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Your instruction to test systems or assets that you did not own or were
                  not authorised to submit for testing
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Your misuse, unauthorised redistribution or unauthorised disclosure of
                  assessment reports, vulnerability findings or other deliverables
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  Your breach of these Terms, the applicable service agreement, or any law,
                  regulation or third-party right
                </span>
              </li>
            </ul>
            <p className="tac-section-content">
              We will notify you promptly of any claim for which we seek indemnity and
              allow you a reasonable opportunity to participate in its defence.
            </p>
          </section>

          {/* Section 12 */}
          <section id="third-party" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">12</span>
              <h2 className="tac-section-title">Third-Party Links &amp; Services</h2>
            </div>
            <p className="tac-section-content">
              This website contains links to, and relies on, services operated by third
              parties. These include Formspree (contact form submissions), Google Forms
              (surveys), Titan (appointment booking), Google Maps (our location embed),
              WhatsApp (click-to-chat links) and the Font Awesome CDN (icon fonts). The
              website also uses analytics and advertising technologies — Google Analytics
              4, Microsoft Clarity and the LinkedIn Insight Tag — which are described in
              detail, together with your consent choices, in our{' '}
              <Link to="/cookie-policy">Cookie Policy</Link> and{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
            <p className="tac-section-content">
              When you interact with these third-party services, their own terms and
              privacy policies apply. Links to external websites are provided for
              convenience and do not imply endorsement by CyberAries. We are not
              responsible for the content, availability, security practices or privacy
              practices of third-party sites and services, and you access them at your own
              risk. If you are visiting from the European Economic Area or the United
              Kingdom, please note that some of these providers may process your personal
              data outside your region; our Privacy Policy explains the safeguards applied
              and your rights under the GDPR and UK GDPR.
            </p>
          </section>

          {/* Section 13 */}
          <section id="governing-law" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">13</span>
              <h2 className="tac-section-title">Governing Law &amp; Dispute Resolution</h2>
            </div>
            <div className="tac-law-card">
              <i className="fas fa-gavel"></i>
              <div>
                <p className="tac-section-content">
                  These Terms are governed by and construed in accordance with the laws of
                  the Republic of India, without regard to conflict of law principles. If a
                  dispute arises out of or in connection with these Terms or our services,
                  both parties will first attempt to resolve it through good-faith
                  discussions between senior representatives. If the dispute is not
                  resolved within thirty (30) days, it shall be subject to the exclusive
                  jurisdiction of the competent courts at Mumbai, Maharashtra, India.
                  Nothing in this section prevents either party from seeking urgent
                  injunctive relief from a competent court.
                </p>
              </div>
            </div>
          </section>

          {/* Section 14 */}
          <section id="general-provisions" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">14</span>
              <h2 className="tac-section-title">General Provisions</h2>
            </div>
            <ul className="tac-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  <strong>Severability.</strong> If any provision of these Terms is held
                  invalid or unenforceable, the remaining provisions continue in full force
                  and effect
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  <strong>Waiver.</strong> A failure or delay by either party in exercising
                  a right under these Terms is not a waiver of that right
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  <strong>Assignment.</strong> Neither party may assign its rights or
                  obligations under these Terms without the other's written consent, except
                  to a successor in a merger, acquisition or sale of substantially all
                  assets
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  <strong>Entire agreement.</strong> These Terms, together with the
                  applicable SoW or service agreement, the{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link> and the{' '}
                  <Link to="/cookie-policy">Cookie Policy</Link>, constitute the entire
                  agreement between the parties regarding their subject matter
                </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>
                  <strong>Force majeure.</strong> Neither party is liable for delay or
                  failure to perform caused by events beyond its reasonable control,
                  including natural disasters, war, civil unrest, government action or
                  widespread internet or utility failures; payment obligations for services
                  already delivered are not excused
                </span>
              </li>
            </ul>
          </section>

          {/* Section 15 */}
          <section id="changes" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">15</span>
              <h2 className="tac-section-title">Changes to These Terms</h2>
            </div>
            <p className="tac-section-content">
              We review these Terms periodically and update them when our services, legal
              obligations or business practices change. The current version is always
              available on this page, with the "Last Updated" date shown at the top. For
              material changes, we will provide reasonable advance notice where required by
              applicable law or by an existing agreement — for example by email to active
              clients or a prominent notice on this website. Changes do not apply
              retroactively to an SoW signed before the change takes effect unless both
              parties agree in writing. If you continue to use the website or our services
              after a revision takes effect, you accept the revised Terms.
            </p>
          </section>

          {/* Section 16 */}
          <section id="contact" className="tac-section">
            <div className="tac-section-header">
              <span className="tac-section-num">16</span>
              <h2 className="tac-section-title">Contact Us</h2>
            </div>
            <p className="tac-section-content">
              For questions about these Terms, legal notices or formal communications,
              please contact us using the details below. For privacy-related requests or
              grievances, write to our grievance officer at{' '}
              <a href="mailto:privacy@cyberaries.com">privacy@cyberaries.com</a> as
              described in our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
            <div className="tac-contact-grid">
              <div className="tac-contact-card">
                <i className="fas fa-building"></i>
                <h4>Legal Entity</h4>
                <p>CyberAries Pvt Ltd</p>
              </div>
              <div className="tac-contact-card">
                <i className="fas fa-envelope"></i>
                <h4>Email</h4>
                <p>
                  <a href="mailto:legal@cyberaries.com">legal@cyberaries.com</a>
                  <br />
                  <a href="mailto:info@cyberaries.com">info@cyberaries.com</a>
                </p>
              </div>
              <div className="tac-contact-card">
                <i className="fas fa-phone-alt"></i>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+918828495202">+91 88284 95202</a>
                </p>
              </div>
              <div className="tac-contact-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Registered Office</h4>
                <p>
                  WeWork Lightbridge, 6th Floor, Hiranandani Business Park, Saki Vihar
                  Road, Chandivali, Powai, Mumbai, Maharashtra 400072, India
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="tac-cta">
            <h3>Have Questions About Our Terms?</h3>
            <p>
              Our team is happy to clarify any provision of these Terms before or during an
              engagement.
            </p>
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
