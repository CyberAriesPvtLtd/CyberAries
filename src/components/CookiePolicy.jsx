import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import './CookiePolicy.css';

/* ---- SEO: JSON-LD blocks (module scope for stable identity) ---- */
const cookieWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Cookie Policy',
  description:
    'Which cookies and tracking technologies cyberaries.com uses — Google Analytics, Microsoft Clarity and LinkedIn advertising — and how to manage or opt out.',
  url: 'https://cyberaries.com/cookie-policy',
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

const cookieBreadcrumbJsonLd = {
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
      name: 'Cookie Policy',
      item: 'https://cyberaries.com/cookie-policy',
    },
  ],
};

const cookieJsonLd = [cookieWebPageJsonLd, cookieBreadcrumbJsonLd];

/* ---- Cookie table data (module scope; rendered in Section 03) ---- */
const cookieTableRows = [
  {
    cookie: 'Session cookies',
    provider: 'CyberAries (first party)',
    category: 'Essential',
    purpose:
      'Core site functionality — page delivery, security, routing and load balancing on our hosting infrastructure',
    duration: 'Session',
  },
  {
    cookie: '_ga',
    provider: 'Google Analytics 4',
    category: 'Analytics',
    purpose:
      'Distinguishes unique visitors so we can compile aggregate usage statistics',
    duration: 'Up to 13 months',
  },
  {
    cookie: '_ga_*',
    provider: 'Google Analytics 4',
    category: 'Analytics',
    purpose:
      'Maintains session state and campaign data for our GA4 property (G-TJHJ0FVZT8)',
    duration: 'Up to 13 months',
  },
  {
    cookie: '_clck',
    provider: 'Microsoft Clarity',
    category: 'Analytics',
    purpose:
      'Persists the Clarity user ID for session recording and heatmaps across visits',
    duration: 'Up to 12 months',
  },
  {
    cookie: '_clsk',
    provider: 'Microsoft Clarity',
    category: 'Analytics',
    purpose:
      'Connects consecutive page views into a single session recording',
    duration: '1 day',
  },
  {
    cookie: 'CLID',
    provider: 'Microsoft Clarity',
    category: 'Analytics',
    purpose:
      'Clarity user identification — records the first time Clarity saw this browser',
    duration: 'Up to 12 months',
  },
  {
    cookie: 'MUID',
    provider: 'Microsoft Clarity',
    category: 'Analytics',
    purpose:
      'Microsoft-wide unique browser identifier used by Clarity for user identification',
    duration: 'Up to 12 months',
  },
  {
    cookie: 'bcookie',
    provider: 'LinkedIn',
    category: 'Advertising',
    purpose: 'LinkedIn browser identification cookie',
    duration: 'Up to 12 months',
  },
  {
    cookie: 'lidc',
    provider: 'LinkedIn',
    category: 'Advertising',
    purpose: 'Facilitates LinkedIn data-centre selection and request routing',
    duration: '1 day',
  },
  {
    cookie: 'li_sugr',
    provider: 'LinkedIn Insight Tag',
    category: 'Advertising',
    purpose: 'Probabilistic identifier matching used for ad targeting',
    duration: 'Up to 3 months',
  },
  {
    cookie: 'UserMatchHistory',
    provider: 'LinkedIn Insight Tag',
    category: 'Advertising',
    purpose:
      'LinkedIn Ads ID syncing for conversion tracking and retargeting of website visitors',
    duration: '1 month',
  },
  {
    cookie: 'AnalyticsSyncHistory',
    provider: 'LinkedIn Insight Tag',
    category: 'Advertising',
    purpose:
      'Stores the time of the last identifier sync with LinkedIn ads analytics',
    duration: '1 month',
  },
];

const categoryClass = {
  Essential: 'ckp-badge ckp-badge-essential',
  Analytics: 'ckp-badge ckp-badge-analytics',
  Advertising: 'ckp-badge ckp-badge-advertising',
};

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ckp-wrapper">
      <Seo
        title="Cookie Policy | CyberAries Pvt Ltd"
        description="Which cookies and tracking technologies cyberaries.com uses — Google Analytics, Microsoft Clarity and LinkedIn advertising — and how to manage or opt out."
        path="/cookie-policy"
        jsonLd={cookieJsonLd}
      />

      {/* Hero Section */}
      <div className="ckp-hero">
        <div className="ckp-hero-particles"></div>
        <div className="ckp-hero-content">
          <div className="ckp-breadcrumb">
            <Link to="/">Home</Link>
            <span className="ckp-breadcrumb-sep">/</span>
            <span>Cookie Policy</span>
          </div>
          <h1 className="ckp-hero-title">
            Cookie <span className="ckp-highlight">Policy</span>
          </h1>
          <p className="ckp-hero-date">Last Updated: 17 August 2026</p>
          <div className="ckp-hero-badge">
            <i className="fas fa-cookie-bite"></i>
            <span>Full Disclosure of Analytics &amp; Advertising Cookies</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ckp-container">
        <div className="ckp-sidebar">
          <div className="ckp-sidebar-sticky">
            <h3 className="ckp-sidebar-title">Table of Contents</h3>
            <nav className="ckp-sidebar-nav">
              <a href="#what-are-cookies">What Are Cookies</a>
              <a href="#how-we-use">How We Use Cookies</a>
              <a href="#cookies-we-set">Cookies We Set</a>
              <a href="#third-party">Third-Party Services &amp; Embeds</a>
              <a href="#your-choices">Your Choices &amp; Opt-Out</a>
              <a href="#consent">Consent &amp; Legal Basis</a>
              <a href="#changes">Changes to This Policy</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>
        </div>

        <div className="ckp-content">
          {/* Notice Banner */}
          <div className="ckp-notice">
            <div className="ckp-notice-icon">
              <i className="fas fa-cookie"></i>
            </div>
            <div className="ckp-notice-text">
              <strong>In plain language:</strong> This Cookie Policy explains
              which cookies and similar technologies CyberAries Pvt Ltd
              ("CyberAries", "we", "our", "us") uses on cyberaries.com, why we
              use them, and how you can control them. In addition to essential
              cookies, this site uses <strong>analytics</strong> tools (Google
              Analytics 4 and Microsoft Clarity) and an{' '}
              <strong>advertising</strong> tool (the LinkedIn Insight Tag). This
              Policy should be read together with our{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>, which describes
              our wider handling of personal data.
            </div>
          </div>

          {/* Section 1 */}
          <section id="what-are-cookies" className="ckp-section">
            <div className="ckp-section-header">
              <span className="ckp-section-num">01</span>
              <h2 className="ckp-section-title">What Are Cookies</h2>
            </div>
            <p className="ckp-section-content">
              Cookies are small text files that a website places on your
              computer or mobile device when you visit it. They are widely used
              to make websites work, to remember your preferences between pages
              or visits, and to give site owners information about how their
              website is used. A cookie set by the website you are visiting is a
              "first-party" cookie; a cookie set by another company whose
              technology is embedded in the page (for example, an analytics or
              advertising provider) is a "third-party" cookie.
            </p>
            <p className="ckp-section-content">
              In this Policy, "cookies" also covers similar technologies that
              can identify your browser or device or store information on it:
            </p>
            <div className="ckp-tech-grid">
              <div className="ckp-tech-card">
                <i className="fas fa-cookie-bite"></i>
                <h4>Cookies</h4>
                <p>
                  Small text files stored by your browser, either for a single
                  session or for a set duration
                </p>
              </div>
              <div className="ckp-tech-card">
                <i className="fas fa-crosshairs"></i>
                <h4>Pixels &amp; Tags</h4>
                <p>
                  Tiny invisible images or code snippets (such as the LinkedIn
                  Insight Tag) that fire when a page loads or an action occurs
                </p>
              </div>
              <div className="ckp-tech-card">
                <i className="fas fa-database"></i>
                <h4>Local Storage</h4>
                <p>
                  Browser storage (localStorage / sessionStorage) that scripts
                  can use to keep data on your device
                </p>
              </div>
              <div className="ckp-tech-card">
                <i className="fas fa-code"></i>
                <h4>Scripts &amp; SDKs</h4>
                <p>
                  JavaScript libraries (such as gtag.js and the Clarity script)
                  that collect and transmit usage information
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="how-we-use" className="ckp-section">
            <div className="ckp-section-header">
              <span className="ckp-section-num">02</span>
              <h2 className="ckp-section-title">How We Use Cookies</h2>
            </div>
            <p className="ckp-section-content">
              We use cookies and similar technologies for three purposes.
              Anything that is not strictly necessary for the website to
              function falls into the analytics or advertising categories, and
              you can opt out of both (see Section 5):
            </p>
            <div className="ckp-use-grid">
              <div className="ckp-use-card">
                <div className="ckp-use-header">
                  <i className="fas fa-cogs"></i>
                  <h4>Functionality</h4>
                </div>
                <p>
                  Essential cookies keep the website working: page delivery,
                  security, and load balancing. These cannot be switched off
                  through our tools because the site depends on them.
                </p>
              </div>
              <div className="ckp-use-card">
                <div className="ckp-use-header">
                  <i className="fas fa-chart-bar"></i>
                  <h4>Analytics</h4>
                </div>
                <p>
                  Google Analytics 4 measures visits, traffic sources, and page
                  performance. Microsoft Clarity records heatmaps and session
                  replays showing how visitors click, scroll, and navigate, so
                  we can improve content and usability.
                </p>
              </div>
              <div className="ckp-use-card">
                <div className="ckp-use-header">
                  <i className="fas fa-bullhorn"></i>
                  <h4>Advertising Measurement</h4>
                </div>
                <p>
                  The LinkedIn Insight Tag measures the effectiveness of our
                  LinkedIn campaigns (conversion tracking) and allows us to
                  show relevant messages to people who have visited our website
                  (retargeting).
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — the cookie table */}
          <section id="cookies-we-set" className="ckp-section">
            <div className="ckp-section-header">
              <span className="ckp-section-num">03</span>
              <h2 className="ckp-section-title">Cookies We Set</h2>
            </div>
            <p className="ckp-section-content">
              The table below lists the cookies set when you use
              cyberaries.com, the provider responsible for each, the category
              it belongs to, what it does, and how long it lasts. Analytics
              cookies are set by Google Analytics 4 (property G-TJHJ0FVZT8) and
              Microsoft Clarity; advertising cookies are set by the LinkedIn
              Insight Tag.
            </p>
            <div className="ckp-table-wrap">
              <table className="ckp-table">
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Provider</th>
                    <th>Category</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTableRows.map((row) => (
                    <tr key={row.cookie}>
                      <td>
                        <code className="ckp-cookie-name">{row.cookie}</code>
                      </td>
                      <td>{row.provider}</td>
                      <td>
                        <span className={categoryClass[row.category]}>
                          {row.category}
                        </span>
                      </td>
                      <td>{row.purpose}</td>
                      <td className="ckp-duration">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ckp-important-note">
              <i className="fas fa-info-circle"></i>
              <span>
                Durations are the maximum lifetimes set by each provider and
                may vary by browser and provider configuration. Third parties
                occasionally rename cookies or change their lifetimes; we
                review this table periodically to keep it accurate.
              </span>
            </div>
          </section>

          {/* Section 4 */}
          <section id="third-party" className="ckp-section">
            <div className="ckp-section-header">
              <span className="ckp-section-num">04</span>
              <h2 className="ckp-section-title">
                Third-Party Services &amp; Embeds
              </h2>
            </div>
            <p className="ckp-section-content">
              Beyond the trackers listed above, certain features of our website
              are provided by third parties. These services load their own
              content, make their own network requests, and may set their own
              cookies when you use them — governed by each provider's own
              privacy and cookie policies:
            </p>
            <div className="ckp-services-grid">
              <div className="ckp-service-card">
                <i className="fas fa-map-marked-alt"></i>
                <h4>Google Maps</h4>
                <p>
                  The map embed on our contact page is served by Google and may
                  set Google cookies when it loads
                </p>
              </div>
              <div className="ckp-service-card">
                <i className="fas fa-paper-plane"></i>
                <h4>Formspree</h4>
                <p>
                  Our contact form submits your message through Formspree,
                  which processes the submission on our behalf
                </p>
              </div>
              <div className="ckp-service-card">
                <i className="fas fa-poll-h"></i>
                <h4>Google Forms</h4>
                <p>
                  Surveys we run are hosted on Google Forms; responses are
                  processed by Google when you submit them
                </p>
              </div>
              <div className="ckp-service-card">
                <i className="fas fa-calendar-check"></i>
                <h4>Titan Booking</h4>
                <p>
                  Appointment booking at book.titan.email/cyberaries is
                  operated by Titan and sets its own cookies on its pages
                </p>
              </div>
              <div className="ckp-service-card">
                <i className="fab fa-whatsapp"></i>
                <h4>WhatsApp</h4>
                <p>
                  Click-to-chat links open WhatsApp; any resulting conversation
                  is handled on WhatsApp's platform
                </p>
              </div>
              <div className="ckp-service-card">
                <i className="fas fa-icons"></i>
                <h4>Font Awesome CDN</h4>
                <p>
                  Icons are served from cdnjs.cloudflare.com, which receives
                  your IP address as part of each request
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="your-choices" className="ckp-section">
            <div className="ckp-section-header">
              <span className="ckp-section-num">05</span>
              <h2 className="ckp-section-title">
                Your Choices &amp; How to Opt Out
              </h2>
            </div>

            <h3 className="ckp-subheading">
              <i className="fas fa-sliders-h"></i>
              5.1 Browser Cookie Settings
            </h3>
            <p className="ckp-section-content">
              Every major browser lets you view, block, and delete cookies —
              for this site alone or for all websites. You can also browse in
              private/incognito mode, in which cookies are discarded when you
              close the window:
            </p>
            <div className="ckp-browser-grid">
              <div className="ckp-browser-card">
                <i className="fab fa-chrome"></i>
                <h4>Chrome</h4>
                <p>Settings → Privacy and security → Third-party cookies</p>
              </div>
              <div className="ckp-browser-card">
                <i className="fab fa-firefox-browser"></i>
                <h4>Firefox</h4>
                <p>Settings → Privacy &amp; Security → Cookies and Site Data</p>
              </div>
              <div className="ckp-browser-card">
                <i className="fab fa-safari"></i>
                <h4>Safari</h4>
                <p>Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="ckp-browser-card">
                <i className="fab fa-edge"></i>
                <h4>Edge</h4>
                <p>Settings → Cookies and site permissions</p>
              </div>
            </div>

            <h3 className="ckp-subheading">
              <i className="fas fa-user-slash"></i>
              5.2 Provider Opt-Out Tools
            </h3>
            <ul className="ckp-list">
              <li>
                <i className="fab fa-google"></i>
                <span>
                  <strong>Google Analytics:</strong> install the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics opt-out browser add-on
                  </a>{' '}
                  to prevent your data being used by Google Analytics on any
                  website, including ours.
                </span>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <span>
                  <strong>LinkedIn:</strong> opt out of retargeting and
                  interest-based advertising via{' '}
                  <a
                    href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn's ads opt-out controls
                  </a>{' '}
                  (available whether or not you have a LinkedIn account).
                </span>
              </li>
              <li>
                <i className="fab fa-microsoft"></i>
                <span>
                  <strong>Microsoft Clarity:</strong> blocking analytics
                  cookies in your browser, or using a content/tracker blocker,
                  prevents Clarity from recording your sessions.
                </span>
              </li>
            </ul>

            <div className="ckp-warning-note">
              <i className="fas fa-exclamation-triangle"></i>
              <span>
                <strong>Please note:</strong> blocking or deleting{' '}
                <em>essential</em> cookies may break parts of this website —
                for example, pages may fail to load correctly or forms may not
                submit. Blocking analytics and advertising cookies does not
                affect site functionality.
              </span>
            </div>

            <h3 className="ckp-subheading">
              <i className="fas fa-hand-paper"></i>
              5.3 Global Privacy Control &amp; Do Not Track
            </h3>
            <p className="ckp-section-content">
              Some browsers can send a Global Privacy Control (GPC) or Do Not
              Track (DNT) signal with every request. There is not yet a
              universally adopted standard for how websites must respond to
              these signals, so we honor them on a best-effort basis. Whether
              or not your browser sends such a signal, the browser settings and
              provider opt-out tools described above remain fully available to
              you.
            </p>
          </section>

          {/* Section 6 */}
          <section id="consent" className="ckp-section">
            <div className="ckp-section-header">
              <span className="ckp-section-num">06</span>
              <h2 className="ckp-section-title">Consent &amp; Legal Basis</h2>
            </div>
            <div className="ckp-legal-grid">
              <div className="ckp-legal-card">
                <div className="ckp-legal-icon">
                  <i className="fas fa-landmark"></i>
                </div>
                <h4>India — DPDP Act, 2023</h4>
                <p>
                  For users in India, our use of cookies is governed by the
                  Digital Personal Data Protection Act, 2023 (DPDP Act) and the
                  DPDP Rules, 2025, alongside the Information Technology Act,
                  2000. Essential cookies are processed as a legitimate use
                  necessary to provide the website you have requested.
                  Analytics and advertising cookies, which involve the
                  processing of personal data such as identifiers and usage
                  data, rest on your consent — which you may withdraw at any
                  time, as easily as it was given, using the tools in Section
                  5, without affecting prior lawful processing.
                </p>
              </div>
              <div className="ckp-legal-card">
                <div className="ckp-legal-icon">
                  <i className="fas fa-globe-europe"></i>
                </div>
                <h4>EEA &amp; UK — GDPR</h4>
                <p>
                  If you visit from the European Economic Area or the United
                  Kingdom, the GDPR or UK GDPR may apply to our processing. Our
                  legal basis for analytics and advertising cookies is consent;
                  for strictly necessary cookies it is our legitimate interest
                  in operating a secure, functioning website. You may withdraw
                  consent at any time using the controls in Section 5, and you
                  have the data subject rights described in our{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </div>
            </div>
            <p className="ckp-section-content">
              As a Data Fiduciary under the DPDP Act, CyberAries also complies
              with the directions of the Indian Computer Emergency Response
              Team (CERT-In) on cyber incident reporting, which may require us
              to retain certain technical logs for prescribed periods.
            </p>
          </section>

          {/* Section 7 */}
          <section id="changes" className="ckp-section">
            <div className="ckp-section-header">
              <span className="ckp-section-num">07</span>
              <h2 className="ckp-section-title">Changes to This Policy</h2>
            </div>
            <div className="ckp-info-card">
              <i className="fas fa-history"></i>
              <div>
                <p className="ckp-section-content">
                  We may update this Cookie Policy from time to time — for
                  example, when we add or remove a tracking tool, when a
                  provider changes its cookies, or when the law changes. The
                  current version, with its "Last Updated" date, will always be
                  posted on this page, and material changes will be highlighted
                  here. We encourage you to review this Policy periodically,
                  together with our{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
                  <Link to="/terms-conditions">Terms &amp; Conditions</Link>.
                  This Policy is governed by the laws of the Republic of India,
                  and any disputes arising from it are subject to the exclusive
                  jurisdiction of the courts at Mumbai, Maharashtra.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="contact" className="ckp-section">
            <div className="ckp-section-header">
              <span className="ckp-section-num">08</span>
              <h2 className="ckp-section-title">Contact Us</h2>
            </div>
            <p className="ckp-section-content">
              Questions about this Cookie Policy, or requests concerning the
              personal data processed through cookies, may be directed to our
              Data Protection and Grievance Officer:
            </p>
            <div className="ckp-contact-container">
              <div className="ckp-contact-header">
                <i className="fas fa-user-shield"></i>
                <h3>Data Protection Officer / Grievance Officer</h3>
              </div>
              <div className="ckp-contact-details">
                <div className="ckp-contact-item">
                  <i className="fas fa-building"></i>
                  <div>
                    <strong>Organization</strong>
                    <p>CyberAries Pvt Ltd</p>
                  </div>
                </div>
                <div className="ckp-contact-item">
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
                <div className="ckp-contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <strong>Phone</strong>
                    <p>
                      <a href="tel:+918828495202">+91 88284 95202</a>
                    </p>
                  </div>
                </div>
                <div className="ckp-contact-item">
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
            <p className="ckp-section-content">
              For details of how we handle personal data more generally, see
              our <Link to="/privacy-policy">Privacy Policy</Link>. The terms
              on which we operate this website and deliver our services are set
              out in our{' '}
              <Link to="/terms-conditions">Terms &amp; Conditions</Link>.
            </p>
          </section>

          {/* Bottom CTA */}
          <div className="ckp-cta">
            <div className="ckp-cta-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <div className="ckp-cta-content">
              <h3>Questions About Cookies or Tracking?</h3>
              <p>
                Our privacy team is happy to explain what we collect, why, and
                how to switch it off.
              </p>
              <Link to="/contact" className="ckp-cta-btn">
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

export default CookiePolicy;
