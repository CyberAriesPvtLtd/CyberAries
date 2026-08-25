import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css';

const TermsConditions = () => {
  useEffect(() => {
    document.title = "Terms of Service | CyberAries";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      {/* 1. White Header Section */}
      <header className="terms-header-section bg-white">
        <div className="container terms-layout-container">
          <div className="breadcrumb-nav-terms">
            <Link to="/" className="breadcrumb-link-terms">Home</Link>
            <span className="breadcrumb-separator-terms">/</span>
            <span className="breadcrumb-active-terms">Terms of Service</span>
          </div>
          <span className="terms-eyebrow-red">LEGAL</span>
          <h1 className="terms-page-title">Terms of Service</h1>
          <p className="terms-page-subtitle">
            These terms set out the basis on which you may use cyberaries.com. They cover who the site is for, what you may do with our content, conduct we do not permit, the limits of the information we publish, our liability, how we handle enquiries, and the law that applies.
          </p>
          <p className="terms-last-updated">Last Updated: August 25, 2026</p>
        </div>
      </header>

      {/* 2. Off-White Content Section */}
      <main className="terms-content-section bg-off-white">
        <div className="container terms-layout-container">
          {/* Legal Document Content */}
          <div className="terms-document-body">
          
          <section className="terms-doc-section">
            <h2 className="terms-section-heading">1. Acceptance of These Terms</h2>
            <p className="terms-paragraph">
              CyberAries Pvt Ltd operates this website at cyberaries.com. In these terms, "CyberAries", "we", "us" and "our" mean CyberAries Pvt Ltd, a company registered in India. "You" means anyone who accesses or uses the site.
            </p>
            <p className="terms-paragraph">
              By accessing, browsing or otherwise using this website, you accept these terms and agree to be bound by them. If you do not accept them, please stop using the site. We suggest you read them in full and keep a copy for your records.
            </p>
            <p className="terms-paragraph">
              These terms apply alongside our privacy policy and any notice published on a particular page or form. Where a page carries its own additional terms, those additional terms apply to that page as well as these.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">2. Who May Use This Website</h2>
            <p className="terms-paragraph">
              This site is intended for business use. It is written for people evaluating information security and IT services on behalf of an organisation: security leaders, technology and finance decision-makers, compliance teams, and founders. It is not directed at children.
            </p>
            <p className="terms-paragraph">
              You may use the site only if you are legally capable of entering into a binding contract under the Indian Contract Act, 1872, or the equivalent law of your own country. If you are using the site on behalf of an organisation, you confirm that you are authorised to accept these terms for that organisation, and references to "you" include it.
            </p>
            <p className="terms-paragraph">
              We operate the site from India. Access from other countries is at your own initiative, and you are responsible for complying with the laws that apply where you are. We make no representation that the content is appropriate or available for use in every jurisdiction.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">3. What These Terms Cover, and What They Do Not</h2>
            <p className="terms-paragraph">
              These terms govern your use of this website and the content published on it. They do not govern the services we deliver to clients. Every client engagement is set out in a separate written contract signed by both parties, which may include a master services agreement, a statement of work, a non-disclosure agreement and, where personal data is involved, a data processing agreement.
            </p>
            <p className="terms-paragraph">
              Where anything in these terms conflicts with a signed engagement contract, the engagement contract prevails for that engagement. Nothing published on this website varies, extends or replaces what has been agreed there.
            </p>
            <p className="terms-paragraph">
              Descriptions of our services on this site are indicative. They are an invitation to discuss, not an offer capable of acceptance, and no client relationship is created by browsing the site or sending an enquiry. The following are settled in writing for each engagement, not here:
            </p>
            <ul className="terms-bullet-list">
              <li>Scope of work, deliverables and acceptance criteria</li>
              <li>Timelines, milestones and any service level commitments</li>
              <li>Fees, invoicing and payment terms</li>
              <li>Confidentiality, data handling and security obligations on both sides</li>
              <li>Ownership of, and rights in, the deliverables we produce for you</li>
              <li>Warranties, liability caps and insurance</li>
              <li>Rules of engagement and written authorisation for any testing we carry out</li>
              <li>Termination, exit assistance and what happens to your data afterwards</li>
            </ul>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">4. Intellectual Property and Permitted Use</h2>
            <p className="terms-paragraph">
              All material published on this website belongs to us or to our licensors. That includes the text, graphics, page design and layout, illustrations, downloadable documents, and the underlying code. It is protected by copyright under the Copyright Act, 1957 and by equivalent law in other countries. The CyberAries name and logo are our marks and may not be used without our written permission.
            </p>
            <p className="terms-paragraph">
              Third-party names we mention, including standards such as ISO/IEC 27001:2022 and the SOC 2 Trust Services Criteria, frameworks such as NIST CSF 2.0, MITRE ATT&amp;CK and the OWASP Top 10, and the names of software products, belong to their respective owners. We refer to them to identify what we work with. A reference of that kind does not imply any partnership, endorsement, accreditation or empanelment.
            </p>
            <p className="terms-paragraph">
              You may view the site, and you may print or download extracts for your own internal reference or for evaluating whether to work with us. When you do, keep any attribution and copyright notices intact and do not alter the material. This permission is a limited licence rather than a transfer of ownership, and we may withdraw it. Without our prior written permission, you may not:
            </p>
            <ul className="terms-bullet-list">
              <li>Republish, redistribute or sell our content, in whole or in part</li>
              <li>Remove, obscure or alter any attribution, copyright or trade mark notice</li>
              <li>Reproduce our material inside a proposal, tender response or marketing document in a way that suggests we endorse it</li>
              <li>Frame, mirror or present the site as though it were your own</li>
              <li>Systematically scrape, harvest or copy the site, including for building a data set or training a model</li>
              <li>Adapt our material to build or market a competing service</li>
            </ul>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">5. Acceptable Use and Prohibited Conduct</h2>
            <p className="terms-paragraph">
              Use this website lawfully, and in a way that does not interfere with anyone else's use of it or with its normal operation.
            </p>
            <p className="terms-paragraph">
              If we believe you have breached this section, we may restrict or block your access, remove material you have submitted, and preserve and disclose relevant records to law enforcement or a regulator where we are required or permitted to do so. Some of the conduct listed below is also an offence under the Information Technology Act, 2000.
            </p>
            <p className="terms-paragraph">
              The list that follows is not exhaustive, and it covers the conduct we most often have to address. You must not:
            </p>
            <ul className="terms-bullet-list">
              <li>Attempt to gain unauthorised access to the site, its servers, or any network or system connected to it</li>
              <li>Introduce malware, ransomware, logic bombs or any other harmful code</li>
              <li>Launch a denial-of-service attack, or send automated traffic at a volume that degrades the site for others</li>
              <li>Circumvent access controls, rate limits, authentication or any directive we publish for automated agents</li>
              <li>Impersonate CyberAries, our people or another user, or misrepresent your identity or affiliation</li>
              <li>Submit material through our forms that is unlawful, defamatory, obscene, infringing or otherwise objectionable</li>
              <li>Use our contact channels to send unsolicited marketing, bulk email or chain messages</li>
              <li>Collect names, email addresses or telephone numbers from the site for marketing or resale</li>
              <li>Probe, scan or test the security of the site or our infrastructure, except as described in the next section</li>
            </ul>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">6. Security Testing and Responsible Disclosure</h2>
            <p className="terms-paragraph">
              We are a security firm, so we understand the instinct to test what we publish. Please do not act on it here. Security testing against cyberaries.com, our email and messaging systems, our supporting infrastructure or our people is not permitted, except within the limits our responsible disclosure policy sets out for good-faith research on the assets it lists. Authorisation for client testing is given in the rules of engagement of a signed contract, and it never extends to our own systems.
            </p>
            <p className="terms-paragraph">
              Testing outside those limits breaches these terms and may be an offence under the Information Technology Act, 2000, whatever your intention. Good motives do not create consent.
            </p>
            <p className="terms-paragraph">
              If you come across a possible security weakness in one of our systems, report it to us privately rather than testing it further. Write to <a href="mailto:legal@cyberaries.com" className="terms-mail-link">legal@cyberaries.com</a> with enough detail for us to reproduce the issue.
            </p>
            <p className="terms-paragraph">
              Please avoid accessing, altering or copying any data beyond the minimum needed to demonstrate the problem, avoid anything that degrades the service for other users, and give us a reasonable opportunity to fix the issue before you discuss it publicly. Reports made in good faith and in line with our responsible disclosure policy are welcome, and we handle them as that policy describes.
            </p>
            <p className="terms-paragraph">
              Activity of the following kind is never authorised against our systems, whatever else this section or that policy allows, and anything you notice while using the site normally should go through the disclosure route above instead:
            </p>
            <ul className="terms-bullet-list">
              <li>Vulnerability scanning, port scanning or automated enumeration of our sites and mail infrastructure at a rate or volume that affects the service</li>
              <li>Exploitation that goes beyond the minimal proof of concept our responsible disclosure policy allows, including fuzzing and sustained penetration testing</li>
              <li>Brute-force, password-spraying or credential-stuffing attempts against any authentication endpoint</li>
              <li>Phishing, pretexting or other social engineering aimed at our partners, employees or contractors</li>
              <li>Load testing, stress testing or anything else intended to exhaust our capacity</li>
              <li>Physical or in-person attempts to reach our premises, staff or equipment</li>
            </ul>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">7. Informational Content, No Advice and No Warranty</h2>
            <p className="terms-paragraph">
              We publish service descriptions, articles and reference material about security and privacy frameworks, including ISO/IEC 27001:2022, the SOC 2 Trust Services Criteria, NIST CSF 2.0, PCI DSS 4.0, the OWASP Top 10, India's Digital Personal Data Protection Act, 2023 and the EU GDPR. All of it is general information.
            </p>
            <p className="terms-paragraph">
              General information is not professional, legal or regulatory advice, and it is no substitute for advice on your own situation. What applies to you depends on your sector, the data you hold, where you and your customers are, the contracts you have signed, and the position your regulator takes. Standards and law also change, and a page may not reflect the most recent amendment. Before acting on anything here, confirm your position with qualified legal counsel and, where relevant, with your regulator or your auditor.
            </p>
            <p className="terms-paragraph">
              Reading this site, downloading a document or sending an enquiry does not create an advisory, professional or client relationship. Advice tailored to your organisation is something we provide under a signed engagement, once we understand your environment.
            </p>
            <p className="terms-paragraph">
              The site and everything on it are provided "as is" and "as available", to the fullest extent permitted by law. We take reasonable care in preparing what we publish, and we still make no warranty, express or implied, that the content is accurate, complete or current, that the site will be uninterrupted or error-free, or that the site and its server are free of viruses or other harmful components.
            </p>
            <p className="terms-paragraph">
              Any reliance you place on the content of this website is at your own risk, and you are responsible for the security of the device and network you use to reach the site, for your own anti-malware controls, and for backing up your own data. Nothing in this section excludes a warranty or condition that the law does not permit us to exclude.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">8. Third-Party Links and Referenced Material</h2>
            <p className="terms-paragraph">
              This site links to material published by others: standards bodies, regulators, tool vendors, research groups and news sources. We include those links because they are useful, not because we control what sits on the other side of them.
            </p>
            <p className="terms-paragraph">
              Endorsement is not implied by a link, and we are not responsible for the content, accuracy, availability, security or privacy practices of any third-party site. Once you follow a link away from cyberaries.com, the terms and privacy notice of that site apply and you visit it at your own risk. If you find a link that is broken or that points somewhere it should not, tell us at <a href="mailto:info@cyberaries.com" className="terms-mail-link">info@cyberaries.com</a> and we will look at it.
            </p>
            <p className="terms-paragraph">
              Naming a product, vendor, standard or certification scheme on this site does not indicate a partnership, reseller arrangement, endorsement, accreditation or empanelment, and it does not indicate that the owner of that scheme has reviewed or approved anything we have written.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">9. Limitation of Liability</h2>
            <p className="terms-paragraph">
              Nothing in these terms limits or excludes any liability that cannot be limited or excluded under the applicable law, including liability for death or personal injury caused by our negligence, and liability for fraud or fraudulent misrepresentation.
            </p>
            <p className="terms-paragraph">
              Subject to that, and to the fullest extent permitted by law, we are not liable to you for any indirect, incidental, special, consequential or punitive loss, or for any loss of profit, revenue, business, contracts, goodwill, anticipated savings or data, arising out of or in connection with your use of this website, your inability to use it, or your reliance on anything published on it.
            </p>
            <p className="terms-paragraph">
              Access to this website is provided free of charge, and our total liability to you in connection with it is limited to the fullest extent the law allows. This section does not affect our liability under a signed engagement contract, which is governed by the liability provisions of that contract.
            </p>
            <p className="terms-paragraph">
              If you are dealing with us as a consumer, these limits do not affect rights you hold under consumer protection law that cannot be excluded by agreement.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">10. Indemnity</h2>
            <p className="terms-paragraph">
              You agree to indemnify us, and to keep us indemnified, against any claim, loss, liability, damage, cost or reasonable legal expense we incur in connection with your use of this website.
            </p>
            <p className="terms-paragraph">
              We will tell you promptly about any claim covered by this section. We may take conduct of the defence of that claim at your cost, and you agree to give us reasonable cooperation. Settling a claim in a way that admits liability on our behalf requires our written agreement.
            </p>
            <p className="terms-paragraph">
              The indemnity applies to claims and costs that arise from:
            </p>
            <ul className="terms-bullet-list">
              <li>Your breach of these terms, or of any additional terms published on the site</li>
              <li>Misuse of the site, or use of it for a purpose these terms do not permit</li>
              <li>Unauthorised access attempts or security testing carried out against our systems</li>
              <li>Material you submit through the site that is unlawful or that infringes the rights of another party</li>
              <li>Any breach by you of a law or regulation that applies to your use of the site</li>
            </ul>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">11. Enquiries, Submissions and Confidentiality</h2>
            <p className="terms-paragraph">
              When you send us an enquiry through a form on this site, by email or by telephone, we treat what you tell us as confidential business information. We use it to respond, to work out whether we are the right firm for the problem, and to prepare a proposal if you ask for one. We do not publish it and we do not sell it.
            </p>
            <p className="terms-paragraph">
              Keep sensitive material out of a first enquiry. Credentials, network diagrams, live vulnerability details, penetration test reports, audit findings and personal data belonging to other people should not travel through a web form or ordinary email. If you need to share material of that kind before an engagement starts, ask us and we will put a non-disclosure agreement and a suitable channel in place first.
            </p>
            <p className="terms-paragraph">
              Ideas, suggestions or feedback you send us about our services or this website, where they are not covered by a signed non-disclosure agreement, may be used by us without any obligation of confidentiality, attribution or payment. That does not apply to information you share under an executed non-disclosure agreement or engagement contract, which we handle strictly on the terms of that agreement.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">12. Privacy and Personal Data</h2>
            <p className="terms-paragraph">
              How we handle personal data collected through this website is set out in our privacy policy, which applies to your use of the site alongside these terms. It explains the categories of information we collect, why we collect them, the basis on which we process them, the categories of service provider who process data on our behalf, such as our hosting and email providers, how long we retain information, and the rights you can exercise.
            </p>
            <p className="terms-paragraph">
              We process personal data in line with India's Digital Personal Data Protection Act, 2023 and, where it applies to a particular set of processing, the EU GDPR. Our privacy policy and our cookie policy describe the browser storage this site uses, the consent control that governs the optional category, and how to change the answer you gave it.
            </p>
            <p className="terms-paragraph">
              Questions or complaints about how we handle your personal data, and requests to exercise a right such as access, correction or erasure, should go to our Grievance Officer at <a href="mailto:privacy@cyberaries.com" className="terms-mail-link">privacy@cyberaries.com</a>. We will acknowledge your request and respond within the period the applicable law requires.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">13. Changes to These Terms and to the Site</h2>
            <p className="terms-paragraph">
              We may update these terms as the site changes, as our services change, or as the law changes. The version published on this page is the version in force, and it replaces every earlier version. Where a change is material, we will take reasonable steps to bring it to your attention on the site.
            </p>
            <p className="terms-paragraph">
              Check this page from time to time. Continuing to use the site after we publish a change means you accept the updated terms, and if you do not accept them the remedy is to stop using the site.
            </p>
            <p className="terms-paragraph">
              Parts of the site may also be changed, suspended, restricted or withdrawn without notice, including for maintenance. We are not obliged to keep any particular page, document or feature available, and we are not liable to you for making it unavailable.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">14. Governing Law, Jurisdiction and General Terms</h2>
            <p className="terms-paragraph">
              These terms, their subject matter and their formation, and any dispute or claim arising out of or in connection with them or with your use of this website, including a non-contractual dispute or claim, are governed by and construed in accordance with the laws of India.
            </p>
            <p className="terms-paragraph">
              The courts at Mumbai, Maharashtra have exclusive jurisdiction over any such dispute or claim, and you and we submit to that jurisdiction. Where you reach the site from outside India, you do so on your own initiative, and any mandatory protection you hold under the law of your country of residence is unaffected to the extent that law says it cannot be excluded by agreement.
            </p>
            <p className="terms-paragraph">
              If a court or other competent authority finds a provision of these terms invalid or unenforceable, that provision is severed and the remainder stays in force. Our failure to enforce a provision is not a waiver of it, and a waiver given on one occasion does not waive the provision on another.
            </p>
            <p className="terms-paragraph">
              Together with our privacy policy, our cookie policy and any additional terms published on the site, these terms are the whole of what is agreed between you and us about your use of this website. They create no partnership, agency, employment or joint venture between us, and a person who is not a party to them may not enforce them.
            </p>
          </section>

          <section className="terms-doc-section">
            <h2 className="terms-section-heading">15. How to Contact Us</h2>
            <p className="terms-paragraph">
              CyberAries Pvt Ltd is headquartered in Mumbai, Maharashtra, India, and full registered office details are available on request. If something in these terms is unclear, or you have a question about anything published on this site, we would rather hear from you than have you guess.
            </p>
            <p className="terms-paragraph">
              Our general enquiry line is open Monday to Friday, 09:00 to 18:00 IST. Retainer and managed service clients reach us at any hour through the channels set out in their engagement contract.
            </p>
            <p className="terms-paragraph">
              Use whichever route fits your question:
            </p>
            <ul className="terms-bullet-list">
              <li>Questions about these terms or about the content of this site: <a href="mailto:legal@cyberaries.com" className="terms-mail-link">legal@cyberaries.com</a></li>
              <li>Possible security weakness in cyberaries.com or another CyberAries system: <a href="mailto:legal@cyberaries.com" className="terms-mail-link">legal@cyberaries.com</a>, under our responsible disclosure policy</li>
              <li>Personal data requests and privacy complaints: our Grievance Officer at <a href="mailto:privacy@cyberaries.com" className="terms-mail-link">privacy@cyberaries.com</a></li>
              <li>Service enquiries, scoping conversations and proposals: <a href="mailto:info@cyberaries.com" className="terms-mail-link">info@cyberaries.com</a> or +91 88284 95202</li>
            </ul>
          </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;