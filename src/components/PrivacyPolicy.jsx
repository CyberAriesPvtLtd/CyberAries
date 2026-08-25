import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css'; // Inherit same design system styles from Terms page

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | CyberAries";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      {/* 1. White Header Section with Grid Background */}
      <header className="terms-header-section bg-white">
        <div className="container terms-layout-container">
          <div className="breadcrumb-nav-terms">
            <Link to="/" className="breadcrumb-link-terms">Home</Link>
            <span className="breadcrumb-separator-terms">/</span>
            <span className="breadcrumb-active-terms">Privacy Policy</span>
          </div>
          <span className="terms-eyebrow-red">LEGAL</span>
          <h1 className="terms-page-title">Privacy Policy</h1>
          <p className="terms-page-subtitle">
            This policy explains how CyberAries Pvt Ltd collects, uses, stores and shares personal data through our website and in the course of providing our services. It also sets out how long we keep information, who we share it with, and the rights you can exercise over your own data.
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
              <h2 className="terms-section-heading">1. Who We Are and How to Contact Us</h2>
              <p className="terms-paragraph">
                CyberAries Pvt Ltd is an IT and information security firm registered in India. We provide security audits, governance and advisory work, security operations, and IT services to organisations in India and in international markets.
              </p>
              <p className="terms-paragraph">
                For anything relating to this policy, or to the personal data we hold about you, write to <a href="mailto:privacy@cyberaries.com" className="terms-mail-link">privacy@cyberaries.com</a> or call +91 88284 95202. Our office hours are Monday to Friday, 09:00 to 18:00 IST, and messages that arrive outside those hours are picked up on the next working day.
              </p>
              <p className="terms-paragraph">
                Under India's Digital Personal Data Protection Act 2023 we act as a Data Fiduciary for the personal data described in this policy, and under the EU General Data Protection Regulation we act as a controller for the same data. Where we handle personal data on behalf of a client, we act instead as a Data Processor, and the terms of that client's contract govern what we may do with it.
              </p>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">2. What This Policy Covers</h2>
              <p className="terms-paragraph">
                This policy applies to the CyberAries website, to the enquiries and applications you send us through it, and to the personal data we handle for our own purposes as a business. It covers visitors to the site, prospective and current clients, people who request our published resources, newsletter subscribers, and candidates who apply for a role with us.
              </p>
              <p className="terms-paragraph">
                It does not cover personal data that sits inside a client's own systems and that we access only to deliver a service under contract. That data stays under the client's control, and the client's own privacy notice governs it. A separate section below explains how we treat such data.
              </p>
              <p className="terms-paragraph">
                Our website sometimes links to material published by other organisations. We do not control how those organisations handle personal data, so read their own privacy notices before you share anything with them.
              </p>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">3. Personal Data We Collect</h2>
              <p className="terms-paragraph">
                We collect only what a defined purpose needs. Most of the personal data we hold comes directly from you, because you completed a form or wrote to us. A smaller amount is generated automatically when your browser requests a page from our servers.
              </p>
              <p className="terms-paragraph">
                The categories below describe everything we routinely collect through this website and through ordinary business contact.
              </p>
              <ul className="terms-bullet-list">
                <li>Enquiry form submissions: your name, work email address, phone number, organisation name, and whatever you choose to write in the message field.</li>
                <li>Resource requests: the name, email address and organisation you give us when you ask for a whitepaper, checklist or similar document.</li>
                <li>Careers applications: your CV, contact details, work history, qualifications, and any covering note or portfolio link you send.</li>
                <li>Newsletter sign-ups: your email address, which is the only field the sign-up form has.</li>
                <li>Correspondence: the content of emails, call notes and meeting notes created when you contact us directly.</li>
                <li>Server logs: your IP address, browser type and version, operating system, referring page, the pages you viewed, and the date and time of each request.</li>
                <li>Cookies and similar storage: the record of the cookie choice you made, and, where analytics is running and you have agreed to it, aggregated information about how the site is used.</li>
              </ul>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">4. Why We Use Personal Data and Our Lawful Basis</h2>
              <p className="terms-paragraph">
                Every use we make of personal data has a stated purpose and a lawful basis behind it. Under the DPDP Act 2023 we rely on your consent, and on the certain legitimate uses the Act recognises, such as responding to a request you have voluntarily made to us. Under the GDPR we rely on consent, on the performance of a contract, on our legitimate interests in running and marketing a business, and on compliance with legal obligations.
              </p>
              <p className="terms-paragraph">
                We do not sell personal data. We do not use it to build advertising profiles, and we do not make decisions about you by automated means that would produce a legal or similarly significant effect on you.
              </p>
              <p className="terms-paragraph">
                These are the purposes for which we process personal data.
              </p>
              <ul className="terms-bullet-list">
                <li>Responding to enquiries and preparing proposals, so that we can answer your question and scope the work you asked about.</li>
                <li>Delivering the resources you requested, and following up once to check whether the material was useful.</li>
                <li>Assessing job applications, arranging interviews, and keeping a record of our hiring decisions.</li>
                <li>Sending the newsletter and other marketing you have opted in to, until you tell us to stop.</li>
                <li>Keeping the website available and secure, which includes detecting abuse, debugging faults and blocking automated attacks.</li>
                <li>Understanding which pages people actually read, so that we can improve what we publish.</li>
                <li>Meeting our legal, accounting, tax and contractual obligations.</li>
              </ul>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">5. Cookies, Analytics and Server Logs</h2>
              <p className="terms-paragraph">
                Our website uses a small amount of browser storage, in two categories. The strictly necessary category keeps the site working, holds the record of the cookie choice you made, and supports the protection sitting in front of the site and its forms. The analytics category is optional, and anything in it is set only where you have agreed through our consent control, or where the law that applies to you permits measurement without consent. Our cookie policy describes both categories in detail.
              </p>
              <p className="terms-paragraph">
                We do not currently run an analytics provider on this site. If we add one, it will sit behind the consent control, we will configure it to gather as little as the purpose needs, and we will not attempt to identify you from it or match it against your enquiry records.
              </p>
              <p className="terms-paragraph">
                You can clear or block cookies and other browser storage through your browser settings at any time. Clearing this site's stored data also clears the answer you gave to our consent control, so you will be asked again on your next visit. Blocking strictly necessary storage may stop parts of the site from working. Server logs are separate: they are generated automatically for security and diagnostics, and they are kept apart from marketing data.
              </p>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">6. Data We Process on Behalf of Our Clients</h2>
              <p className="terms-paragraph">
                Our services often bring us into contact with personal data belonging to a client's employees, customers or users. Common examples include log data reviewed during a security assessment, user account records examined in an access review, and files recovered during an incident investigation.
              </p>
              <p className="terms-paragraph">
                In those situations the client decides why and how the data is processed, and we act on their documented instructions. Our engagement contracts set out the permitted scope, the confidentiality terms, the security controls we apply, the rules on sub-processing, and what happens to the data when the work ends. We do not use client data for our own purposes, and we do not keep it beyond what the contract allows.
              </p>
              <p className="terms-paragraph">
                If you are an individual whose data was handled during work we carried out for a client, that client is the right first point of contact for a rights request. Write to us in any case if you cannot identify them, and we will help route your request to the right organisation.
              </p>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">7. How Long We Keep Personal Data</h2>
              <p className="terms-paragraph">
                We keep personal data for as long as the purpose it was collected for still applies, and then for any further period the law requires. Because the correct period depends on the type of record and the obligation attached to it, we set retention periods internally by category rather than applying one figure across everything.
              </p>
              <p className="terms-paragraph">
                Under the DPDP Act 2023 we must erase personal data once you withdraw consent, or once the purpose it was collected for has ended, unless a law requires us to keep it. We apply that rule as a matter of routine and not only when someone asks.
              </p>
              <p className="terms-paragraph">
                The general pattern we follow is set out below.
              </p>
              <ul className="terms-bullet-list">
                <li>Enquiry and proposal records stay with us while a commercial conversation is live, and for a limited period afterwards so that we can pick the discussion back up.</li>
                <li>Contract, invoicing and tax records are held for the minimum period Indian law requires for books of account and related documents.</li>
                <li>Unsuccessful job applications are kept for a short window in case a suitable role opens, then deleted unless you have asked us to hold them longer.</li>
                <li>Newsletter records last until you unsubscribe, together with the record of when and how you subscribed.</li>
                <li>Server logs are rotated and deleted on a routine cycle, apart from entries preserved for an open security investigation.</li>
                <li>Client engagement data is returned or destroyed at the end of the engagement, in line with the contract that governs it.</li>
              </ul>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">8. Who We Share Personal Data With</h2>
              <p className="terms-paragraph">
                We do not sell or rent personal data, and we do not share it for anyone else's marketing. A limited set of service providers processes data on our behalf so that the website and the business can function. They are described here by category, because the specific suppliers change over time and a named list would quickly become inaccurate.
              </p>
              <p className="terms-paragraph">
                Every processor we use is bound by a written agreement that limits them to our instructions, imposes confidentiality, and requires security measures appropriate to the data. If the ownership of our business ever changes, personal data may transfer to the acquiring entity, and we will tell you if that happens and what it means for you. The categories of recipient are these:
              </p>
              <ul className="terms-bullet-list">
                <li>Hosting and infrastructure providers, who run the servers and content delivery network behind this website.</li>
                <li>Email delivery and communication providers, who transmit our replies, resource downloads and newsletter.</li>
                <li>Analytics providers, where analytics is running, who process website usage data on our instructions and nothing more.</li>
                <li>Recruitment and applicant tracking tools, where those are used to manage job applications.</li>
                <li>Professional advisers such as accountants, auditors and lawyers, where they need the data in order to advise us.</li>
                <li>Government bodies, regulators, courts and law enforcement agencies, where a legal obligation requires disclosure.</li>
              </ul>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">9. International Transfers</h2>
              <p className="terms-paragraph">
                Some of the providers described above operate infrastructure outside India, so your personal data may be stored or processed in another country. We prefer providers that can host data in India, or in a jurisdiction with a recognised data protection framework, and we check where data will sit before we adopt a service.
              </p>
              <p className="terms-paragraph">
                The DPDP Act 2023 permits transfer of personal data outside India except to territories that the Central Government restricts by notification. We track those notifications and adjust our arrangements if a restriction affects a provider we use.
              </p>
              <p className="terms-paragraph">
                For personal data protected by the GDPR, transfers outside the European Economic Area are made under an adequacy decision where one exists, and otherwise under Standard Contractual Clauses together with any additional safeguards the particular transfer requires. Ask us and we will tell you which mechanism applies to a given transfer.
              </p>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">10. How We Protect Personal Data</h2>
              <p className="terms-paragraph">
                Security is the work we do for our clients, and we hold our own environment to the same standard. We align our own controls with recognised practice, including the control set in ISO/IEC 27001:2022 and CIS Benchmarks for system hardening, and we review them as our systems and our risks change.
              </p>
              <p className="terms-paragraph">
                No control set removes risk entirely. If a personal data breach occurs that is likely to affect you, we will notify the relevant authority and the affected individuals within the timeframes the applicable law sets, and we will tell you what happened, what data was involved, and what we are doing about it.
              </p>
              <p className="terms-paragraph">
                The measures below apply to the personal data covered by this policy.
              </p>
              <ul className="terms-bullet-list">
                <li>Encryption in transit using TLS across the website and our mail systems, with encryption at rest for stored data wherever the platform supports it.</li>
                <li>Access restricted to the people whose work requires it, using unique accounts, role-based permissions and multi-factor authentication on administrative access.</li>
                <li>Logging and monitoring of administrative activity, with alerting on unusual behaviour.</li>
                <li>Patching and hardening of servers, endpoints and applications on a defined cycle.</li>
                <li>Backups taken regularly and tested by restoration, so that data survives failure or attack.</li>
                <li>Vetting of suppliers before we adopt them, and periodic review of the ones we continue to use.</li>
                <li>Training for our team on handling personal data, recognising phishing, and secure working practices.</li>
              </ul>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">11. Your Rights Under India's DPDP Act 2023</h2>
              <p className="terms-paragraph">
                If you are a Data Principal under the DPDP Act 2023, the Act gives you a set of rights over personal data we process on the basis of your consent or of a legitimate use.
              </p>
              <p className="terms-paragraph">
                The Act also asks Data Principals to provide authentic information and to avoid raising false or frivolous complaints. Where we cannot satisfy ourselves about your identity, we may ask for further information before we act on a request. The rights are these:
              </p>
              <ul className="terms-bullet-list">
                <li>Access: a summary of the personal data we process about you, the processing activities involved, and the identities of other Data Fiduciaries with whom we have shared it.</li>
                <li>Correction, completion and updating: inaccurate or misleading data corrected, incomplete data completed, and out-of-date data brought current.</li>
                <li>Erasure: deletion of personal data once the purpose has been served, unless retention is required by law.</li>
                <li>Grievance redressal: the ability to raise a complaint with us and receive a response within the period the Act prescribes.</li>
                <li>Nomination: the ability to nominate another individual to exercise your rights on your behalf if you die or become incapable of doing so yourself.</li>
                <li>Withdrawal of consent: consent can be withdrawn at any time, as easily as it was given, and we will stop the processing that depended on it.</li>
              </ul>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">12. Rights Available Under the EU GDPR</h2>
              <p className="terms-paragraph">
                If you are in the European Economic Area or the United Kingdom and the GDPR or UK GDPR applies to our processing of your data, you have a further set of rights.
              </p>
              <p className="terms-paragraph">
                Where these overlap with rights under the DPDP Act 2023, we apply whichever gives you the stronger protection. None of these rights is absolute. If we have to decline a request in whole or in part, we will say so in writing and explain the reasoning behind the decision. The rights are these:
              </p>
              <ul className="terms-bullet-list">
                <li>Access to a copy of your personal data, along with information about how and why it is used.</li>
                <li>Rectification of personal data that is inaccurate or incomplete.</li>
                <li>Erasure of personal data where no continuing lawful reason to hold it exists.</li>
                <li>Restriction of processing while a dispute about accuracy or lawful basis is being resolved.</li>
                <li>Portability of the data you gave us, in a structured, commonly used and machine-readable format.</li>
                <li>Objection to processing based on legitimate interests, and an unqualified right to object to direct marketing.</li>
                <li>Withdrawal of consent at any time, without affecting the lawfulness of processing carried out before the withdrawal.</li>
                <li>Complaint to a supervisory authority in the country where you live, where you work, or where the issue arose.</li>
              </ul>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">13. How to Exercise Your Rights and Raise a Grievance</h2>
              <p className="terms-paragraph">
                Send your request to <a href="mailto:privacy@cyberaries.com" className="terms-mail-link">privacy@cyberaries.com</a> with enough detail for us to find your records. Tell us what you would like done and, where it matters, which website form or engagement your data came from. You can also call +91 88284 95202 during office hours, and we will confirm the request in writing so that both sides have a record of it.
              </p>
              <p className="terms-paragraph">
                We acknowledge requests, verify identity by proportionate means, and respond within the period the applicable law allows. There is no charge for a reasonable request. Where a request is manifestly unfounded or excessive we may charge a reasonable fee or decline to act, and we will explain that decision to you.
              </p>
              <p className="terms-paragraph">
                Grievances about the way we have handled your personal data go to our Grievance Officer, contactable at <a href="mailto:privacy@cyberaries.com" className="terms-mail-link">privacy@cyberaries.com</a> or on +91 88284 95202. Put the words Grievance Officer in the subject line, or state them at the start of the call, so that the message is routed correctly. Direct resolution is our preferred route, and we would rather fix a problem than have you escalate it.
              </p>
              <p className="terms-paragraph">
                If our response does not satisfy you, you can complain to the Data Protection Board of India under the DPDP Act 2023, or, where the GDPR applies to you, to the supervisory authority in your country. Coming to us first does not affect your right to approach a regulator at any stage.
              </p>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">14. Children's and Minors' Data</h2>
              <p className="terms-paragraph">
                Our website and our services are intended for organisations and working professionals. We do not knowingly collect personal data from children, and none of our forms are directed at them.
              </p>
              <p className="terms-paragraph">
                The DPDP Act 2023 treats anyone under the age of eighteen as a child and requires verifiable consent from a parent or lawful guardian before such data is processed. It also prohibits tracking, behavioural monitoring and targeted advertising directed at children. None of those activities take place on our website.
              </p>
              <p className="terms-paragraph">
                Should you believe that a child has given us personal data, write to <a href="mailto:privacy@cyberaries.com" className="terms-mail-link">privacy@cyberaries.com</a> and we will delete it promptly.
              </p>
            </section>

            <section className="terms-doc-section">
              <h2 className="terms-section-heading">15. Changes to This Policy</h2>
              <p className="terms-paragraph">
                We review this policy periodically, and we update it when our processing changes, when we adopt a new category of service provider, or when the law moves. The version published on this page is always the current one.
              </p>
              <p className="terms-paragraph">
                Minor edits, such as clarified wording, take effect as soon as they appear here. Where a change materially affects how we use your personal data or the rights you can exercise, we will give notice on the website and, where we hold your contact details and the change warrants it, by email. Where a change requires fresh consent, we will ask for it before we rely on the new processing.
              </p>
              <p className="terms-paragraph">
                If anything in this policy is unclear, or you think something here does not match what we actually do, tell us at <a href="mailto:privacy@cyberaries.com" className="terms-mail-link">privacy@cyberaries.com</a>. We would rather correct it than leave it wrong.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;