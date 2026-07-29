// ------------------------------------------------------------------
// SOLUTION DOMAIN ARCHITECTURE (SHARED DATA SOURCE)
//
// Each key is "<categorySlug>/<domainSlug>" and drives
// <SolutionDomainPage /> at /services/:categorySlug/:domainSlug.
//
// `services[].link` points at the already-existing, already-built
// detailed service page — these routes are defined once in App.js and
// are never recreated here, only linked to.
//
// To bring a new solution domain online later, add a new entry here
// in the same shape; no changes to the page component are needed.
// ------------------------------------------------------------------

export const solutionDomains = {
  'regulatory-audit/banking-finance': {
    categorySlug: 'regulatory-audit',
    categoryLabel: 'Regulatory Audit',
    domainSlug: 'banking-finance',
    heading: 'Banking & Finance',
    intro:
      'Purpose-built cyber audits for banks, NBFCs, and payment system operators, mapped directly to RBI regulatory expectations so your compliance evidence is audit-ready from day one.',
    services: [
      {
        title: 'RBI – Cyber Framework for Banks',
        description:
          'A comprehensive audit against the RBI Cyber Security Framework, covering governance, controls, and incident reporting readiness for banks.',
        link: '/services/regulatory/rbi-cyber-framework',
      },
      {
        title: 'RBI – NBFC Cyber Guidelines',
        description:
          'Assessment of NBFC cyber security posture against RBI guidelines, tailored to your scale-based regulatory tier.',
        link: '/services/regulatory/rbi-nbfc-guidelines',
      },
      {
        title: 'RBI – Payment Systems Audit',
        description:
          'Security and resilience audit for payment system operators, aligned to RBI oversight requirements for payment infrastructure.',
        link: '/services/regulatory/rbi-payment-systems',
      },
    ],
  },

  'regulatory-audit/capital-markets': {
    categorySlug: 'regulatory-audit',
    categoryLabel: 'Regulatory Audit',
    domainSlug: 'capital-markets',
    heading: 'Capital Markets',
    intro:
      'Cyber security audits for exchanges, brokers, and market infrastructure institutions, built around the frameworks SEBI, BSE, and NSE hold you to.',
    services: [
      {
        title: 'BSE Cyber Security Audit',
        description:
          'A structured cyber security audit for BSE-regulated entities, covering technical controls, governance, and reporting obligations under exchange guidelines.',
        link: '/services/regulatory/bse-cyber-audit',
      },
      {
        title: 'NSE Cyber Security Audit',
        description:
          'Assessment of your cyber security posture against NSE requirements, identifying gaps before they surface in a regulatory review.',
        link: '/services/regulatory/nse-cyber-audit',
      },
      {
        title: 'SEBI Cyber Security Audit',
        description:
          'End-to-end audit against SEBI\'s cyber security and cyber resilience framework, covering market intermediaries and infrastructure institutions.',
        link: '/services/regulatory/sebi-cyber-audit',
      },
    ],
  },

  'regulatory-audit/government-digital': {
    categorySlug: 'regulatory-audit',
    categoryLabel: 'Regulatory Audit',
    domainSlug: 'government-digital',
    heading: 'Government & Digital',
    intro:
      'Compliance and audit support for government, insurance, and digital infrastructure entities operating under India\'s data localization and digital identity mandates.',
    services: [
      {
        title: 'Data Localization Audit',
        description:
          'Verification that sensitive data is stored, processed, and transferred in line with India\'s data localization requirements across your systems and vendors.',
        link: '/services/regulatory/data-localization',
      },
      {
        title: 'IRDAI – ISNP Security Audit',
        description:
          'Cyber security audit for Insurance Self-Network Platforms, aligned to IRDAI\'s ISNP guidelines on data protection and system integrity.',
        link: '/services/regulatory/irdai-isnp',
      },
      {
        title: 'UIDAI – AUA/KUA Compliance',
        description:
          'Compliance audit for Authentication User Agencies and KYC User Agencies against UIDAI\'s security and data handling requirements for Aadhaar-based authentication.',
        link: '/services/regulatory/uidai-compliance',
      },
    ],
  },

  'offensive-security/application-security': {
    categorySlug: 'offensive-security',
    categoryLabel: 'Offensive Security',
    domainSlug: 'application-security',
    heading: 'Application Security',
    intro:
      'Hands-on security testing across your web, mobile, thick client, and API surfaces to find exploitable vulnerabilities before they reach production.',
    services: [
      {
        title: 'Web App Security (WAST)',
        description:
          'Manual and automated testing of your web applications against the OWASP Top 10 and business-logic flaws that scanners alone miss.',
        link: '/services/web-app-security',
      },
      {
        title: 'Mobile App Security (MAST)',
        description:
          'In-depth security assessment of Android and iOS applications, covering local storage, API communication, and platform-specific attack vectors.',
        link: '/services/mobile-app-security',
      },
      {
        title: 'Thick Client Security',
        description:
          'Security testing of desktop and thick client applications, examining local storage, binary protections, and client-server communication.',
        link: '/services/thick-client-security',
      },
      {
        title: 'API Security Testing',
        description:
          'Focused testing of REST and other API endpoints for authentication, authorization, and data-exposure vulnerabilities.',
        link: '/services/api-security',
      },
    ],
  },

  'offensive-security/code-security': {
    categorySlug: 'offensive-security',
    categoryLabel: 'Offensive Security',
    domainSlug: 'code-security',
    heading: 'Code Security',
    intro:
      'Catch insecure coding patterns and logic flaws at the source, combining automated analysis with expert manual review.',
    services: [
      {
        title: 'SAST & DAST',
        description:
          'Static and dynamic application security testing integrated into your development workflow to catch vulnerabilities early and continuously.',
        link: '/services/sast-dast',
      },
      {
        title: 'Source Code Review',
        description:
          'Manual, expert-led review of your application source code to identify security flaws that automated tools typically overlook.',
        link: '/services/source-code-review',
      },
    ],
  },

  'offensive-security/advanced-testing': {
    categorySlug: 'offensive-security',
    categoryLabel: 'Offensive Security',
    domainSlug: 'advanced-testing',
    heading: 'Advanced Testing',
    intro:
      'Adversary simulation and in-depth vulnerability testing that goes beyond a checklist to validate how your defenses hold up under real attack conditions.',
    services: [
      {
        title: 'Red Teaming',
        description:
          'Full-scope adversary simulation testing your people, processes, and technology against realistic, multi-stage attack scenarios.',
        link: '/services/red-teaming',
      },
      {
        title: 'VAPT Services',
        description:
          'Comprehensive vulnerability assessment and penetration testing across your network and infrastructure to identify and validate exploitable weaknesses.',
        link: '/services/vulnerability-assessment',
      },
    ],
  },

  'infrastructure-cloud/it-infrastructure': {
    categorySlug: 'infrastructure-cloud',
    categoryLabel: 'Infrastructure & Cloud',
    domainSlug: 'it-infrastructure',
    heading: 'IT Infrastructure',
    intro:
      'End-to-end infrastructure services covering architecture, deployment, and ongoing management, built to scale reliably with your business.',
    services: [
      {
        title: 'Network Architecture Design',
        description:
          'Design of secure, scalable network architectures tailored to your organization\'s performance, security, and growth requirements.',
        link: '/services/infrastructure/network-architecture',
      },
      {
        title: 'Server & Storage Setup',
        description:
          'Planning and deployment of server and storage infrastructure engineered for reliability, performance, and future scalability.',
        link: '/services/infrastructure/server-storage',
      },
      {
        title: 'Virtualization Setup',
        description:
          'Design and implementation of virtualization environments that optimize resource utilization and simplify infrastructure management.',
        link: '/services/infrastructure/virtualization',
      },
      {
        title: 'Endpoint Management',
        description:
          'Centralized management and security of endpoints across your organization, from provisioning through ongoing monitoring.',
        link: '/services/infrastructure/endpoint-management',
      },
    ],
  },

  'infrastructure-cloud/cloud-security': {
    categorySlug: 'infrastructure-cloud',
    categoryLabel: 'Infrastructure & Cloud',
    domainSlug: 'cloud-security',
    heading: 'Cloud Security',
    intro:
      'Assessment and hardening services that secure your cloud environments against misconfiguration, exposure, and container-level risk.',
    services: [
      {
        title: 'Cloud Config Review',
        description:
          'Detailed review of your cloud environment configuration against security best practices to identify misconfigurations and exposure.',
        link: '/services/cloud/config-review',
      },
      {
        title: 'Cloud Penetration Testing',
        description:
          'Simulated attacks against your cloud infrastructure to identify exploitable vulnerabilities across your cloud footprint.',
        link: '/services/cloud/penetration-testing',
      },
      {
        title: 'Container & Kubernetes (K8s) Security',
        description:
          'Security assessment of containerized workloads and Kubernetes clusters, covering configuration, orchestration, and runtime risk.',
        link: '/services/cloud/container-k8s-security',
      },
    ],
  },

  'infrastructure-cloud/network-security': {
    categorySlug: 'infrastructure-cloud',
    categoryLabel: 'Infrastructure & Cloud',
    domainSlug: 'network-security',
    heading: 'Network Security',
    intro:
      'Testing and review services that harden your network perimeter, wireless environment, and firewall configuration against real-world threats.',
    services: [
      {
        title: 'Network Security Testing',
        description:
          'Comprehensive assessment of your internal and external network infrastructure to identify exploitable vulnerabilities and misconfigurations.',
        link: '/services/network-security',
      },
      {
        title: 'Wireless Security',
        description:
          'Security testing of your wireless network infrastructure to identify weaknesses in encryption, authentication, and access controls.',
        link: '/services/wireless-security',
      },
      {
        title: 'Firewall Rule Review',
        description:
          'Detailed review of firewall rule sets to eliminate redundant, overly permissive, or misconfigured rules that expand your attack surface.',
        link: '/services/firewall-rule-review',
      },
    ],
  },

  'compliance/iso-standards': {
    categorySlug: 'compliance',
    categoryLabel: 'Compliance',
    domainSlug: 'iso-standards',
    heading: 'ISO Standards',
    intro:
      'Certification readiness and implementation support across the ISO standards that matter most to your industry and customers.',
    services: [
      {
        title: 'ISO 27001',
        description:
          'End-to-end support for ISO 27001 certification, from gap assessment and ISMS implementation through to audit readiness.',
        link: '/services/compliance/iso-27001',
      },
      {
        title: 'ISO 22301',
        description:
          'Business continuity management system implementation and audit support aligned to ISO 22301 requirements.',
        link: '/services/compliance/iso-22301',
      },
      {
        title: 'ISO 20000',
        description:
          'IT service management system implementation and certification support aligned to ISO 20000 requirements.',
        link: '/services/compliance/iso-20000',
      },
      {
        title: 'ISO 42001',
        description:
          'AI management system implementation and certification support aligned to ISO 42001 requirements for responsible AI governance.',
        link: '/services/compliance/iso-42001',
      },
    ],
  },

  'compliance/global-attestations': {
    categorySlug: 'compliance',
    categoryLabel: 'Compliance',
    domainSlug: 'global-attestations',
    heading: 'Global Attestations',
    intro:
      'Assessment and readiness support for the attestations enterprise customers and regulators expect to see.',
    services: [
      {
        title: 'SOC 1',
        description:
          'Readiness assessment and audit support for SOC 1 reporting on controls relevant to your customers\' financial reporting.',
        link: '/services/soc-compliance/soc-1',
      },
      {
        title: 'SOC 2',
        description:
          'Readiness assessment and audit support for SOC 2 reporting across security, availability, and confidentiality trust principles.',
        link: '/services/soc-compliance/soc-2',
      },
      {
        title: 'PCI DSS',
        description:
          'Compliance assessment and remediation support for organizations that store, process, or transmit payment card data.',
        link: '/services/compliance/pci-dss',
      },
      {
        title: 'SWIFT Assessment',
        description:
          'Security assessment against the SWIFT Customer Security Controls Framework for financial messaging infrastructure.',
        link: '/services/compliance/swift',
      },
      {
        title: 'FedRAMP Assessment',
        description:
          'Readiness and assessment support for organizations pursuing FedRAMP authorization for cloud services.',
        link: '/services/compliance/fedramp',
      },
    ],
  },

  'data-privacy/global-privacy-laws': {
    categorySlug: 'data-privacy',
    categoryLabel: 'Data Privacy',
    domainSlug: 'global-privacy-laws',
    heading: 'Global Privacy Laws',
    intro:
      'Compliance services for the international privacy regulations your organization is accountable to, wherever your customers are based.',
    services: [
      {
        title: 'GDPR Compliance',
        description:
          'Gap assessment and compliance support for the EU General Data Protection Regulation, covering data mapping, rights, and governance.',
        link: '/services/privacy/gdpr',
      },
      {
        title: 'CCPA Compliance',
        description:
          'Compliance assessment and support for the California Consumer Privacy Act, covering consumer rights and disclosure obligations.',
        link: '/services/privacy/ccpa',
      },
      {
        title: 'HIPAA Compliance',
        description:
          'Compliance assessment and support for HIPAA requirements around the protection of health information.',
        link: '/services/privacy/hipaa',
      },
    ],
  },

  'data-privacy/indian-privacy-laws': {
    categorySlug: 'data-privacy',
    categoryLabel: 'Data Privacy',
    domainSlug: 'indian-privacy-laws',
    heading: 'Indian Privacy Laws',
    intro:
      "Compliance and assessment services aligned to India's evolving digital personal data protection landscape.",
    services: [
      {
        title: 'DPDP Act Compliance',
        description:
          "Compliance support for India's Digital Personal Data Protection Act, covering consent, data principal rights, and governance.",
        link: '/services/privacy/dpdp',
      },
      {
        title: 'DPIA Services',
        description:
          'Data Protection Impact Assessment services to identify and mitigate privacy risk in high-impact data processing activities.',
        link: '/services/privacy/dpia',
      },
    ],
  },

  'data-privacy/privacy-frameworks': {
    categorySlug: 'data-privacy',
    categoryLabel: 'Data Privacy',
    domainSlug: 'privacy-frameworks',
    heading: 'Privacy Frameworks',
    intro:
      'Governance framework implementation support to help you build a structured, auditable privacy program.',
    services: [
      {
        title: 'ISO 27701',
        description:
          'Privacy information management system implementation and certification support aligned to ISO 27701 requirements.',
        link: '/services/compliance/iso-27701',
      },
      {
        title: 'ISO 27018',
        description:
          'Implementation and audit support for the protection of personally identifiable information in public cloud environments under ISO 27018.',
        link: '/services/compliance/iso-27018',
      },
    ],
  },

  'strategic-consulting/forensics-recovery': {
    categorySlug: 'strategic-consulting',
    categoryLabel: 'Strategic Consulting',
    domainSlug: 'forensics-recovery',
    heading: 'Forensics & Recovery',
    intro:
      'When an incident happens, you need answers and a path back to normal operations. Our forensics and recovery services deliver both.',
    services: [
      {
        title: 'Forensic Audit',
        description:
          'Detailed digital forensic investigation to determine how an incident occurred, what was affected, and what evidence needs preserving.',
        link: '/services/consulting/forensic-audit',
      },
      {
        title: 'Ransomware Recovery',
        description:
          'Rapid response and recovery support to contain a ransomware incident, restore operations, and reduce the risk of recurrence.',
        link: '/services/consulting/ransomware-recovery',
      },
    ],
  },

  'strategic-consulting/managed-leadership': {
    categorySlug: 'strategic-consulting',
    categoryLabel: 'Strategic Consulting',
    domainSlug: 'managed-leadership',
    heading: 'Managed Leadership',
    intro:
      'Ongoing strategic security and privacy leadership for organizations that need senior expertise without a full-time hire.',
    services: [
      {
        title: 'Virtual CISO Services',
        description:
          'On-demand strategic security leadership to guide governance, risk management, and security strategy at the executive level.',
        link: '/services/consulting/virtual-ciso',
      },
      {
        title: 'DPO as a Service',
        description:
          'Outsourced Data Protection Officer services to manage your privacy program and regulatory obligations on an ongoing basis.',
        link: '/services/consulting/dpo-service',
      },
    ],
  },

  'strategic-consulting/us-federal-standards': {
    categorySlug: 'strategic-consulting',
    categoryLabel: 'Strategic Consulting',
    domainSlug: 'us-federal-standards',
    heading: 'US Federal Standards',
    intro:
      'Consulting support to align your security program with the federal standards your US government and contractor relationships require.',
    services: [
      {
        title: 'NIST 800-53',
        description:
          'Assessment and implementation support for security and privacy controls aligned to NIST SP 800-53 requirements.',
        link: '/services/consulting/nist-800-53',
      },
      {
        title: 'NIST 800-171',
        description:
          'Compliance assessment and support for protecting controlled unclassified information under NIST SP 800-171 requirements.',
        link: '/services/consulting/nist-800-171',
      },
    ],
  },

  // This completes the sixth and final service category. All six
  // categories now share this same reusable architecture.
};
