import { Landmark, TrendingUp, Building2, AppWindow, Code2, Crosshair, Server, CloudCog, Router, BadgeCheck, FileCheck2, Globe2, Flag, ShieldCheck, Search, Briefcase, FileBadge2 } from 'lucide-react';

// ------------------------------------------------------------------
// SERVICE CATEGORY ARCHITECTURE (SHARED DATA SOURCE)
//
// Footer -> Service Category -> Solution Domains -> Individual Services
//
// Each key is a category slug and drives <ServiceCategoryPage /> at
// /services/:categorySlug. To bring a new category online later, add
// a new entry here (and, for each of its domains, a matching entry in
// solutionDomains.js) — no changes to the page components are needed.
//
// `domains[].comingSoon: true` renders a disabled-style "Coming Soon"
// card instead of an active "View Services" link, for domains that
// don't have a built page yet.
// ------------------------------------------------------------------

export const serviceCategories = {
  'regulatory-audit': {
    slug: 'regulatory-audit',
    heading: 'Regulatory Audit',
    intro:
      "Stay ahead of India's evolving regulatory landscape with audits built around the frameworks that govern your sector — from RBI and SEBI mandates to data localization and government compliance requirements.",
    domains: [
      {
        slug: 'banking-finance',
        icon: Landmark,
        title: 'Banking & Finance',
        description:
          'Cyber security audits aligned to RBI frameworks for banks, NBFCs, and payment system operators.',
      },
      {
        slug: 'capital-markets',
        icon: TrendingUp,
        title: 'Capital Markets',
        description:
          'Cyber audit services for exchanges, brokers, and market infrastructure institutions under SEBI, BSE, and NSE guidelines.',
      },
      {
        slug: 'government-digital',
        icon: Building2,
        title: 'Government & Digital',
        description:
          'Compliance and audit support for government, insurance, and digital infrastructure entities, including data localization and UIDAI requirements.',
      },
    ],
  },

  'offensive-security': {
    slug: 'offensive-security',
    heading: 'Offensive Security',
    intro:
      'Think like an attacker before one finds you. Our offensive security services combine application testing, secure code review, and adversary simulation to expose real-world weaknesses across your applications, code, and infrastructure.',
    domains: [
      {
        slug: 'application-security',
        icon: AppWindow,
        title: 'Application Security',
        description:
          'Hands-on security testing of your web, mobile, API, and thick client applications to uncover exploitable vulnerabilities before attackers do.',
      },
      {
        slug: 'code-security',
        icon: Code2,
        title: 'Code Security',
        description:
          'Static and dynamic analysis paired with manual source code review to catch insecure coding patterns and logic flaws early in development.',
      },
      {
        slug: 'advanced-testing',
        icon: Crosshair,
        title: 'Advanced Testing',
        description:
          'Red team engagements and vulnerability assessments that simulate real adversary behavior to test detection, response, and resilience.',
      },
    ],
  },

  'infrastructure-cloud': {
    slug: 'infrastructure-cloud',
    heading: 'Infrastructure & Cloud',
    intro:
      'Build on a secure foundation. Our infrastructure and cloud services cover enterprise IT infrastructure, cloud security, and network security, so your systems are engineered and protected from the ground up.',
    domains: [
      {
        slug: 'it-infrastructure',
        icon: Server,
        title: 'IT Infrastructure',
        description:
          'Enterprise infrastructure planning, deployment, management, and optimization services designed for reliability and scale.',
      },
      {
        slug: 'cloud-security',
        icon: CloudCog,
        title: 'Cloud Security',
        description:
          'Cloud security assessments, configuration hardening, and infrastructure protection across your cloud environments.',
      },
      {
        slug: 'network-security',
        icon: Router,
        title: 'Network Security',
        description:
          'Enterprise network security assessments, wireless security testing, and firewall rule review to secure your network perimeter.',
      },
    ],
  },

  'compliance': {
    slug: 'compliance',
    heading: 'Compliance',
    intro:
      'Turn compliance into a competitive advantage. Our compliance services guide you through ISO certification and globally recognized attestations, so you can prove your security posture to customers, partners, and regulators.',
    domains: [
      {
        slug: 'iso-standards',
        icon: BadgeCheck,
        title: 'ISO Standards',
        description:
          'Certification readiness, implementation support, and audit assistance across the ISO standards relevant to your organization.',
      },
      {
        slug: 'global-attestations',
        icon: FileCheck2,
        title: 'Global Attestations',
        description:
          'Internationally recognized cybersecurity attestations and compliance assessments trusted by enterprise customers worldwide.',
      },
    ],
  },

  'data-privacy': {
    slug: 'data-privacy',
    heading: 'Data Privacy',
    intro:
      'Protect what matters most to your customers. Our data privacy services span global and Indian privacy law compliance alongside the frameworks needed to govern personal data responsibly.',
    domains: [
      {
        slug: 'global-privacy-laws',
        icon: Globe2,
        title: 'Global Privacy Laws',
        description:
          'Compliance services for international privacy regulations, helping you meet obligations wherever your customers are.',
      },
      {
        slug: 'indian-privacy-laws',
        icon: Flag,
        title: 'Indian Privacy Laws',
        description:
          "Compliance and assessment services for India's digital privacy and personal data protection requirements.",
      },
      {
        slug: 'privacy-frameworks',
        icon: ShieldCheck,
        title: 'Privacy Frameworks',
        description:
          'Governance framework implementation support to help you build and maintain a structured, auditable privacy program.',
      },
    ],
  },

  'strategic-consulting': {
    slug: 'strategic-consulting',
    heading: 'Strategic Consulting',
    intro:
      'Get expert guidance when it matters most. Our strategic consulting services span digital forensics and incident recovery, ongoing security leadership, and alignment with US federal security standards.',
    domains: [
      {
        slug: 'forensics-recovery',
        icon: Search,
        title: 'Forensics & Recovery',
        description:
          'Digital forensics, cyber investigations, and ransomware response and recovery services when an incident demands answers fast.',
      },
      {
        slug: 'managed-leadership',
        icon: Briefcase,
        title: 'Managed Leadership',
        description:
          'Strategic cybersecurity leadership, governance, and executive advisory services delivered as an ongoing engagement.',
      },
      {
        slug: 'us-federal-standards',
        icon: FileBadge2,
        title: 'US Federal Standards',
        description:
          'Cybersecurity consulting aligned with United States federal security frameworks and standards for organizations that need to meet them.',
      },
    ],
  },

  // This is the sixth and final service category. All six categories
  // now share this same reusable architecture — future changes need
  // only touch this file and solutionDomains.js, not the page
  // components themselves.
};
