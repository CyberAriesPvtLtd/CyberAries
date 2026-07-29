import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig, animate, AnimatePresence } from 'framer-motion';
import FourDApproach from "./FourDApproach";
import TrustedCompanies from "./TrustedCompanies";
import './Home.css';


import {
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaClipboardCheck
} from "react-icons/fa";
import { Network, Lock, UserCheck, Eye, CloudUpload, Settings, ShieldCheck, Landmark, Clock, Users, Award, History } from 'lucide-react';

// Motion-enabled Link so the Hero CTA buttons get Framer Motion hover/tap gestures
// while still behaving like a normal react-router Link.
const MotionLink = motion(Link);

// ------------------------------------------------------------------
// Turns a full name into up-to-two-letter initials for the testimonial
// avatar circles (e.g. "Sameer Kulkarni" -> "SK", "Nipun" -> "N").
// Defined outside the component since it's a pure helper with no
// dependency on component state/props.
// ------------------------------------------------------------------
const getInitials = (name = '') => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};


// ------------------------------------------------------------------
// Hero animation variants
// Defined outside the component so they are stable references and are
// not re-created on every render (Framer Motion + React best practice).
// The sequence runs once on mount: badge -> title -> description ->
// feature list (staggered) -> CTA buttons.
// ------------------------------------------------------------------
const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroBadgeVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const heroTitleVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const heroDescriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
  },
};

const heroFeaturesListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const heroFeatureItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const heroButtonsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
  },
};

// Shared, subtle hover/tap feel for the CTA buttons — scale only,
// the soft shadow/color change is already handled by CSS transitions.
const buttonGestureTransition = { duration: 0.25, ease: 'easeOut' };
const featureIconGestureTransition = { duration: 0.25, ease: 'easeOut' };

// ------------------------------------------------------------------
// "Why Choose Us" (features) section animation variants.
// Sequence runs once when the section enters the viewport:
// heading -> description -> cards (staggered).
// ------------------------------------------------------------------
const featuresHeaderVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const featuresHeaderItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Shared entrance animation for the enterprise card grids. Both the
// "Why Choose Us" feature cards and the "Cybersecurity Services" cards
// use these same two variants so the stagger timing, offset and easing
// are identical between the two sections.
const enterpriseCardsGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 }
  }
};

const enterpriseCardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Kept as aliases (rather than removed) so any other references in this
// file continue to resolve to the same shared variants above.
const featuresGridVariants = enterpriseCardsGridVariants;
const featureCardVariants = enterpriseCardVariants;

// ------------------------------------------------------------------
// "How We Secure Your Business" section animation variants.
// Kept fast and low-delay on purpose: the whole workflow (header,
// ring, center circle, badges and cards) should feel like it's
// already there the moment it scrolls into view, not like it's
// catching up. Cards use a short stagger only so they read as a
// single coordinated reveal rather than a slow trickle.
// ------------------------------------------------------------------
// const secureHeaderVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.08 }
//   }
// };

// const secureHeaderItemVariants = {
//   hidden: { opacity: 0, y: 16 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
//   }
// };

// const secureCircleVariants = {
//   hidden: { opacity: 0, scale: 0.94 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
//   }
// };

// const secureCardVariants = {
//   hidden: { opacity: 0, y: 16 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
//   }
// };

// ------------------------------------------------------------------
// "How We Secure Your Business" section animation variants.
// Kept fast and low-delay on purpose: the whole workflow (header,
// ring, center circle, badges and cards) should feel like it's
// already there the moment it scrolls into view, not like it's
// catching up. Cards use a short stagger only so they read as a
// single coordinated reveal rather than a slow trickle.
// ------------------------------------------------------------------
const secureHeaderVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 }
  }
};

const secureHeaderItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const secureCircleVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const secureCardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// ------------------------------------------------------------------
// "Cybersecurity Services" section animation variants.
// Sequence runs once when the section enters the viewport:
// heading -> accent line -> description -> cards (staggered).
// ------------------------------------------------------------------
// Same header entrance timing as the "Why Choose Us" section above — see
// featuresHeaderVariants / featuresHeaderItemVariants.
const servicesHeaderVariants = featuresHeaderVariants;
const servicesHeaderItemVariants = featuresHeaderItemVariants;

// Accent line expands from the center outward when it scrolls into view.
const servicesAccentLineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Same stagger/entrance timing as the "Why Choose Us" cards above — see
// enterpriseCardsGridVariants / enterpriseCardVariants.
const servicesGridVariants = enterpriseCardsGridVariants;
const serviceCardVariants = enterpriseCardVariants;

// ------------------------------------------------------------------
// "Your Security, Our Mission" section animation variants.
// Sequence runs once when the section enters the viewport:
// heading -> paragraph -> statistics (staggered).
// ------------------------------------------------------------------
const missionHeaderVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const missionHeaderItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const missionStatsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 }
  }
};

const missionStatItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Content stays exactly the same as before (50+, 15+, 10+) — just
// restructured as data so it can drive the icon, the CountUp value,
// and the stagger animation without repeating markup three times.
const missionStats = [
  { id: 'experts', value: 50, suffix: '+', label: 'Security Experts', icon: Users },
  { id: 'certifications', value: 15, suffix: '+', label: 'Industry Certifications', icon: Award },
  { id: 'experience', value: 10, suffix: '+', label: 'Years Experience', icon: History }
];

// Lightweight CountUp: animates a number from 0 to `value` using Framer
// Motion's imperative `animate()` helper (no extra library needed).
// `start` is controlled by the parent's viewport-enter callback so the
// count is perfectly synced with the stagger entrance and only runs once.
const StatCounter = ({ value, suffix = '', start, duration = 1.6, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    const controls = animate(0, value, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => setCount(decimals > 0 ? Number(latest.toFixed(decimals)) : Math.round(latest))
    });

    return () => controls.stop();
  }, [start, value, duration, decimals]);

  return <>{decimals > 0 ? count.toFixed(decimals) : count}{suffix}</>;
};

// ------------------------------------------------------------------
// "Statistics" (enterprise stats strip) section animation variants.
// Sequence runs once when the section enters the viewport:
// heading -> description, then divider lines fade in while the
// numbers/labels fade up (staggered), with the count-up synced to
// the same trigger.
// ------------------------------------------------------------------
const statsEnterpriseHeaderVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const statsEnterpriseHeaderItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const statsEnterpriseGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const statsEnterpriseItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const statsEnterpriseDividerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

// Updated statistics for the "Trusted. Proven. Secure." section.
// Structured as data so it can drive the divider, the CountUp value,
// and the stagger animation without repeating markup four times.
const enterpriseStats = [
  { id: 'clients', value: 400, suffix: '+', decimals: 0, label: 'Enterprise Clients' },
  { id: 'projects', value: 5000, suffix: '+', decimals: 0, label: 'Projects Delivered' },
  { id: 'vulnerabilities', value: 10000, suffix: '+', decimals: 0, label: 'Vulnerabilities Assessed' },
  { id: 'retention', value: 99, suffix: '%', decimals: 0, label: 'Client Retention' }
];

const Home = () => {
  // Triggers the stats CountUp once, in sync with the stagger entrance.
  const [missionStatsInView, setMissionStatsInView] = useState(false);

  // Triggers the enterprise statistics strip CountUp once, in sync with
  // its own stagger entrance (independent of the mission mini-stats above).
  const [statsInView, setStatsInView] = useState(false);

  // Tracks which "How We Secure" workflow card is active. CSS :hover
  // doesn't fire reliably on tap/touch, so clicking a card toggles the
  // same lifted/glowing state that mouse hover already applies on
  // desktop. Clicking the active card again (or another card) closes it.
  const [activeSecureStep, setActiveSecureStep] = useState(null);
  const toggleSecureStep = (step) => {
    setActiveSecureStep((current) => (current === step ? null : step));
  };

  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Vulnerability Assessment',
      description: 'Identify weaknesses before attackers do, reduce risk exposure, and strengthen your overall security posture with comprehensive vulnerability scanning.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Data Protection',
      description: 'Safeguard sensitive data against breaches and leaks with strong encryption, access control, and secure storage solutions.'
    },
    {
      icon: 'fas fa-award',
      title: 'Brand Reputation',
      description: 'Maintain customer trust and brand integrity by preventing cyber incidents and demonstrating strong data responsibility.'
    },
    {
      icon: 'fas fa-search-plus',
      title: 'Advanced Threat Detection',
      description: 'Leverage real-time monitoring and AI-driven analytics to detect threats on your systems before they cause damage.'
    },
    {
      icon: 'fas fa-fingerprint',
      title: 'Zero Trust Architecture',
      description: 'Enforce strict access control and verification at every level to prevent lateral movement in your network.'
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Compliance & Governance',
      description: 'Achieve and maintain compliance with ISO 27001, RBI guidelines, GDPR, and other regulatory requirements.'
    }
  ];


  const services = [
    {
      icon: Network,
      title: 'Network Security',
      description: 'Deploying firewalls and intrusion detection systems to safeguard networks from unauthorized access.'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'Encrypting sensitive data at rest and in transit using advanced encryption standards to prevent data breaches.'
    },
    {
      icon: UserCheck,
      title: 'Access Management',
      description: 'Managing user identities and access with MFA and detailed role-based control for enhanced security.'
    },
    {
      icon: Eye,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock monitoring with advanced SIEM systems for real-time detection and incident response.'
    },
    {
      icon: CloudUpload,
      title: 'Backup & Recovery',
      description: 'Protecting critical data with secure backups and rapid recovery plans to ensure business continuity.'
    },
    {
      icon: Settings,
      title: 'Security Configuration',
      description: 'Hardening systems and applying secure configurations across all infrastructure components.'
    }
  ];

  // eslint-disable-next-line no-unused-vars
  const processSteps = [
    {
      number: 1,
      title: 'Security Assessment',
      description: 'We conduct a comprehensive analysis of your current security posture, identifying vulnerabilities and potential threats across all systems.'
    },
    {
      number: 2,
      title: 'Risk Analysis',
      description: 'Our experts prioritize risks based on impact and likelihood, creating a roadmap for addressing the most critical security gaps.'
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'We deploy tailored security solutions, from firewalls to encryption, ensuring comprehensive protection across your infrastructure.'
    },
    {
      number: 4,
      title: 'Clearing Audit & Report Generation',
      description: 'Comprehensive audit documentation and detailed reporting to ensure compliance and provide clear insights into your security status.'
    }
  ];

  const testimonials = [
    {
      name: 'Divya Evermount',
      role: 'Founder',
      company: 'Evermount',
      badge: 'Security Audit',
      date: 'March 2025',
      rating: 5.0,
      text: 'CyberAries conducted a thorough security audit of our infrastructure. Their findings were clear and helped us prioritize the right fixes quickly.'
    },
    {
      name: 'Vinay Meheta',
      role: 'Angel Investor',
      company: '',
      badge: 'Risk Assessment',
      date: 'January 2025',
      rating: 4.9,
      text: 'CyberAries reviewed my digital exposure and gave practical, easy steps to reduce risk without disrupting my daily work.'
    },
    {
      name: 'Natasha',
      role: 'Investment Manager',
      company: 'VG Capital',
      badge: 'VAPT',
      date: 'November 2024',
      rating: 4.8,
      text: 'Their testing uncovered real gaps in our access controls. The team explained everything clearly and helped us fix issues fast.'
    },
    {
      name: 'Nipun',
      role: 'Managing Partner',
      company: 'Sunrise Wealth Advisors',
      badge: 'Compliance Readiness',
      date: 'February 2025',
      rating: 5.0,
      text: 'CyberAries helped us prepare for a regulatory review with a clear, practical readiness plan. It worked well when the review happened.'
    },
    {
      name: 'Sameer Kulkarni',
      role: 'Director',
      company: 'Samara India Advisors',
      badge: 'Penetration Testing',
      date: 'December 2024',
      rating: 4.9,
      text: 'The penetration testing was well organized and easy to follow. We got a realistic picture of our security gaps.'
    },
    {
      name: 'Sanjay Chinderkar',
      role: 'Compliance Head',
      company: 'Etonhurst Investment Advisors',
      badge: 'GRC Consulting',
      date: 'April 2025',
      rating: 5.0,
      text: 'CyberAries guided us through a full compliance engagement. Every recommendation was practical and easy for our team to apply.'
    },
    {
      name: 'Shaan Dhandhara',
      role: 'Managing Director',
      company: 'Akalpya Capital Advisors',
      badge: 'SEBI Compliance Audit',
      date: 'October 2024',
      rating: 4.9,
      text: 'They understood our industry\u2019s compliance needs and explained technical findings in simple, useful terms for our team.'
    },
    {
      name: 'Rohit Parab',
      role: 'Operations Head',
      company: 'BIIIG Management',
      badge: 'Infrastructure Security',
      date: 'May 2025',
      rating: 5.0,
      text: 'Our infrastructure review was thorough and well documented. We received a clear roadmap instead of just a list of problems.'
    },
    {
      name: 'Tejas Panchal',
      role: 'Principal',
      company: 'OTP Ventures',
      badge: 'Cloud Security Assessment',
      date: 'September 2024',
      rating: 4.8,
      text: 'CyberAries reviewed our cloud setup and caught issues we had missed. The fixes they suggested were simple to apply.'
    },
    {
      name: 'Praveen V S',
      role: 'Managing Partner',
      company: 'NC Venture Partners',
      badge: 'IT Risk Assessment',
      date: 'June 2025',
      rating: 4.9,
      text: 'Their risk assessment gave us a clear, practical view of our systems. It\u2019s now a reference our team uses regularly.'
    },
    {
      name: 'Mamta Kabra',
      role: 'Investment Manager',
      company: 'New Age Entrepreneurs Fund',
      badge: 'Data Security Audit',
      date: 'March 2025',
      rating: 5.0,
      text: 'CyberAries reviewed how we store and access sensitive data, and helped us tighten controls we hadn\u2019t noticed before.'
    },
    {
      name: 'Debashish Bose',
      role: 'Director',
      company: 'Infinite Circles',
      badge: 'Vendor Risk Assessment',
      date: 'July 2025',
      rating: 4.9,
      text: 'They helped us build a simple, effective process to assess our vendors. It has already helped us catch real risks.'
    },
    {
      name: 'Sumit Soni',
      role: 'Managing Director',
      company: 'Two X Capital Management',
      badge: 'Network Security Audit',
      date: 'August 2024',
      rating: 4.9,
      text: 'The security review was detailed and easy to understand. Our leadership team found the findings genuinely useful.'
    },
    {
      name: 'Priya Shah',
      role: 'Managing Partner',
      company: 'Theia Ventures',
      badge: 'ISO 27001 Readiness',
      date: 'January 2026',
      rating: 5.0,
      text: 'CyberAries made a process that felt overwhelming much easier to manage. Their guidance was clear at every step.'
    },
    {
      name: 'Riddhi Chitaliya',
      role: 'Compliance Head',
      company: 'Zero One AIF',
      badge: 'Regulatory Compliance',
      date: 'April 2025',
      rating: 4.8,
      text: 'They understood the compliance needs of our fund and helped us align our practices with what\u2019s expected.'
    },
    {
      name: 'Astha',
      role: 'Investment Associate',
      company: 'Soonicorn Ventures',
      badge: 'Cyber Awareness Training',
      date: 'November 2024',
      rating: 4.9,
      text: 'The training session was practical and relevant to how our team actually works, far more useful than a typical briefing.'
    },
    {
      name: 'Rishabh Valecha',
      role: 'Principal',
      company: 'Trineta Strategic Advisors',
      badge: 'Incident Response Planning',
      date: 'December 2024',
      rating: 5.0,
      text: 'CyberAries helped us build a clear response plan from scratch, so our team now knows exactly what to do.'
    },
    {
      name: 'Jatin Dewan',
      role: 'Director',
      company: 'Superlatives Capital Advisors',
      badge: 'Application Security Testing',
      date: 'February 2026',
      rating: 4.9,
      text: 'They tested our internal application and found issues our developers could fix quickly. A follow-up test confirmed the fixes worked.'
    },
    {
      name: 'Jagadish',
      role: 'Managing Partner',
      company: 'Arali Ventures II',
      badge: 'Business Continuity Planning',
      date: 'May 2025',
      rating: 4.8,
      text: 'CyberAries helped us document a clear recovery plan and identify gaps we hadn\u2019t noticed before. Well organized and useful.'
    },
    {
      name: 'Vivek Soni',
      role: 'Founder',
      company: 'Kitara Capital',
      badge: 'Security Monitoring',
      date: 'March 2026',
      rating: 5.0,
      text: 'Since working with CyberAries, we have much better visibility into unusual activity. Their alerts are clear and genuinely useful.'
    },
    {
      name: 'Abhishek Kumar',
      role: 'Risk & Compliance Officer',
      company: 'Profes Multi Opportunity Fund',
      badge: 'Third-Party Risk Assessment',
      date: 'June 2024',
      rating: 4.9,
      text: 'Their review of our vendors led us to tighten data-sharing terms and meaningfully reduce our overall risk.'
    },
    {
      name: 'Eraya Capital',
      role: 'Portfolio Operations',
      company: '',
      badge: 'Red Team Assessment',
      date: 'September 2025',
      rating: 4.8,
      text: 'The assessment was more thorough than we expected and gave our team a much better understanding of real security risks.'
    },
    {
      name: 'Mihir Jha',
      role: 'Investment Associate',
      company: 'Point One',
      badge: 'Vulnerability Assessment',
      date: 'October 2025',
      rating: 5.0,
      text: 'CyberAries prioritized findings by real business risk, making it easy for our small team to focus on what mattered.'
    },
    {
      name: 'Value Angels Network',
      role: 'Fund Operations',
      company: '',
      badge: 'GRC Advisory',
      date: 'July 2024',
      rating: 4.9,
      text: 'Their review covered our policies and access controls clearly. Recommendations were practical and simple for our team to apply.'
    },
    {
      name: 'River Rocks',
      role: 'Client Relations',
      company: '',
      badge: 'Security Consulting',
      date: 'August 2025',
      rating: 4.8,
      text: 'CyberAries has been a reliable partner as we scaled. Their advice is always practical and easy to act on.'
    },
    {
      name: 'Ankit Mehrotra',
      role: 'Investment Manager',
      company: 'Sampattika Investment Fund',
      badge: 'Compliance Documentation Review',
      date: 'November 2025',
      rating: 5.0,
      text: 'Ahead of a scheduled review, CyberAries helped us close documentation gaps quickly and with plenty of lead time.'
    }
  ];

  // Testimonials carousel: how many cards are visible at once, driven by
  // viewport width (3 desktop / 2 tablet / 1 mobile).
  const [testimonialsPerView, setTestimonialsPerView] = useState(3);
  const [testimonialGroupIndex, setTestimonialGroupIndex] = useState(0);
  const testimonialTouchStartX = useRef(null);

  useEffect(() => {
    const updateTestimonialsPerView = () => {
      if (window.innerWidth <= 768) {
        setTestimonialsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setTestimonialsPerView(2);
      } else {
        setTestimonialsPerView(3);
      }
    };
    updateTestimonialsPerView();
    window.addEventListener('resize', updateTestimonialsPerView);
    return () => window.removeEventListener('resize', updateTestimonialsPerView);
  }, []);

  // Reset to the first group whenever the number of visible cards changes
  // so we never land on an out-of-range group after a resize.
  useEffect(() => {
    setTestimonialGroupIndex(0);
  }, [testimonialsPerView]);

  const totalTestimonialGroups = Math.ceil(testimonials.length / testimonialsPerView);

  const goToPrevTestimonials = () => {
    setTestimonialGroupIndex((prev) => (prev - 1 + totalTestimonialGroups) % totalTestimonialGroups);
  };

  const goToNextTestimonials = () => {
    setTestimonialGroupIndex((prev) => (prev + 1) % totalTestimonialGroups);
  };

  const handleTestimonialTouchStart = (e) => {
    testimonialTouchStartX.current = e.touches[0].clientX;
  };

  const handleTestimonialTouchEnd = (e) => {
    if (testimonialTouchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - testimonialTouchStartX.current;
    const swipeThreshold = 50;
    if (deltaX > swipeThreshold) {
      goToPrevTestimonials();
    } else if (deltaX < -swipeThreshold) {
      goToNextTestimonials();
    }
    testimonialTouchStartX.current = null;
  };

  const visibleTestimonials = testimonials.slice(
    testimonialGroupIndex * testimonialsPerView,
    testimonialGroupIndex * testimonialsPerView + testimonialsPerView
  );
  // eslint-disable-next-line no-unused-vars
  const stripItems = [
    'Endpoint Protection', 'Threat Intelligence', 'Penetration Testing',
    'Security Audits', 'Incident Response', 'Network Security',
    'Cloud Security', 'Compliance Management'
  ];


  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          {/* reducedMotion="user" respects the visitor's OS-level
             "prefers-reduced-motion" setting for accessibility */}
          <MotionConfig reducedMotion="user">
            <motion.div
              className="hero-content"
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div className="hero-badge" variants={heroBadgeVariants}>
                <i className="fas fa-shield-alt"></i>
                <span>Trusted By 100+ Organizations</span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 className="hero-title" variants={heroTitleVariants}>
                Comprehensive {''}
                <span className="hero-highlight">Cyber Security</span>
                <br />
                Solutions For Your Business
              </motion.h1>

              {/* Description */}
              <motion.p className="hero-description" variants={heroDescriptionVariants}>
                Expert audits, real-time monitoring, and rigorous penetration testing — built to keep your business secure, compliant, and resilient against evolving threats.
              </motion.p>

              {/* Feature Bullets */}
              <motion.div className="hero-features" variants={heroFeaturesListVariants}>
                <motion.div className="hero-feature" variants={heroFeatureItemVariants}>
                  <motion.span
                    className="hero-feature-icon"
                    whileHover={{ scale: 1.15 }}
                    transition={featureIconGestureTransition}
                  >
                    <ShieldCheck aria-hidden="true" />
                  </motion.span>
                  <span>ISO 27001 Certified Team</span>
                </motion.div>
                <motion.div className="hero-feature" variants={heroFeatureItemVariants}>
                  <motion.span
                    className="hero-feature-icon"
                    whileHover={{ scale: 1.15 }}
                    transition={featureIconGestureTransition}
                  >
                    <Landmark aria-hidden="true" />
                  </motion.span>
                  <span>SEBI & RBI Compliance Experts</span>
                </motion.div>
                <motion.div className="hero-feature" variants={heroFeatureItemVariants}>
                  <motion.span
                    className="hero-feature-icon"
                    whileHover={{ scale: 1.15 }}
                    transition={featureIconGestureTransition}
                  >
                    <Clock aria-hidden="true" />
                  </motion.span>
                  <span>24/7 Security Support</span>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div className="hero-buttons" variants={heroButtonsVariants}>
                <MotionLink
                  to="/contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={buttonGestureTransition}
                >
                  Get Started
                  <i className="fas fa-arrow-right"></i>
                </MotionLink>
              </motion.div>
            </motion.div>
          </MotionConfig>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            variants={featuresHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div className="section-subtitle" variants={featuresHeaderItemVariants}>
              Why Choose Us
            </motion.div>
            <motion.h2 className="section-title" variants={featuresHeaderItemVariants}>
              Cybersecurity Excellence
            </motion.h2>
            <motion.p className="section-description" variants={featuresHeaderItemVariants}>
              Our comprehensive approach covers every aspect of cybersecurity, ensuring your business stays protected, compliant, and resilient.
            </motion.p>
          </motion.div>
          <motion.div
            className="features-grid"
            variants={featuresGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -80px 0px" }}
          >
            {features.map((feature, index) => (
              <motion.div className="feature-card" key={index} variants={featureCardVariants}>
                <div className="feature-card-header">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="security-intro">
        <div className="container">
          <motion.div
            className="security-intro-header"
            variants={missionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h2 className="security-title" variants={missionHeaderItemVariants}>
              Your Security, <span>Our Mission</span>
            </motion.h2>

            <motion.p className="security-text" variants={missionHeaderItemVariants}>
              We don't just detect threats—we prevent them. From proactive monitoring and
              incident response to compliance management and security training, we deliver
              comprehensive protection that keeps your business ahead of evolving cyber risks.
            </motion.p>
          </motion.div>

          <motion.div
            className="security-stats-mini"
            variants={missionStatsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => setMissionStatsInView(true)}
          >
            {missionStats.map((stat) => (
              <motion.div className="stat-mini" key={stat.id} variants={missionStatItemVariants}>
                <stat.icon className="stat-mini-icon" aria-hidden="true" />
                <strong>
                  <StatCounter value={stat.value} suffix={stat.suffix} start={missionStatsInView} />
                </strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="home-container">
        <motion.div
          className="security-section-header"
          variants={secureHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
        >
  
          <motion.div className="section-subtitle" variants={secureHeaderItemVariants}>How We Secure</motion.div>
          <motion.h2 className="section-title" variants={secureHeaderItemVariants}>How We Secure Your Business</motion.h2>
          <motion.p className="section-description" variants={secureHeaderItemVariants}>A systematic approach to identifying vulnerabilities, implementing defenses, and maintaining continuous security.</motion.p>
        </motion.div>
        <motion.div
          className="security-circle"
          variants={secureCircleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -200px 0px" }}
        >
        

          {/* Static thin ring */}
          <div className="static-ring"></div>

          {/* Rotating thick arc */}
          <div className="rotating-arc"></div>

          {/* Center Content - just label, no nested card */}
          <div className="center-content">
            <div className="center-label">
              <i className="fas fa-shield-alt center-icon"></i>
              <strong>How We Secure<br />Your Business</strong>
            </div>
          </div>

         {/* Box 1 - Security Assessment */}
          <motion.div
            className={`process-step process-step-top${activeSecureStep === 'top' ? ' is-active' : ''}`}
            variants={secureCardVariants}
            onClick={() => toggleSecureStep('top')}
          >
            <div className="step-badge step-badge-top">01</div>
            <div className="cycle-card top">
              <div className="cycle-card-header">
                <div className="cycle-card-icon">
                  <FaShieldAlt />
                </div>
                <h4>Security Assessment</h4>
              </div>
              <p>
                We conduct a comprehensive analysis of your current security posture,
                identifying vulnerabilities and potential threats across all systems.
              </p>
            </div>
          </motion.div>

          {/* Box 2 - Risk Analysis */}
          <motion.div
            className={`process-step process-step-right${activeSecureStep === 'right' ? ' is-active' : ''}`}
            variants={secureCardVariants}
            onClick={() => toggleSecureStep('right')}
          >
            <div className="step-badge step-badge-right">02</div>
            <div className="cycle-card right">
              <div className="cycle-card-header">
                <div className="cycle-card-icon">
                  <FaChartLine />
                </div>
                <h4>Risk Analysis</h4>
              </div>
              <p>
                Our experts prioritize risks based on impact and likelihood, creating
                a roadmap for addressing the most critical security gaps.
              </p>
            </div>
          </motion.div>

          {/* Box 3 - Implementation */}
          <motion.div
            className={`process-step process-step-bottom${activeSecureStep === 'bottom' ? ' is-active' : ''}`}
            variants={secureCardVariants}
            onClick={() => toggleSecureStep('bottom')}
          >
            <div className="step-badge step-badge-bottom">03</div>
            <div className="cycle-card bottom">
              <div className="cycle-card-header">
                <div className="cycle-card-icon">
                  <FaCogs />
                </div>
                <h4>Implementation</h4>
              </div>
              <p>
                We deploy tailored security solutions, from firewalls to encryption,
                ensuring comprehensive protection across your infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Box 4 - Audit & Report */}
          <motion.div
            className={`process-step process-step-left${activeSecureStep === 'left' ? ' is-active' : ''}`}
            variants={secureCardVariants}
            onClick={() => toggleSecureStep('left')}
          >
            <div className="step-badge step-badge-left">04</div>
            <div className="cycle-card left">
              <div className="cycle-card-header">
                <div className="cycle-card-icon">
                  <FaClipboardCheck />
                </div>
                <h4>Audit & Report</h4>
              </div>
              <p>
                Comprehensive audit documentation and detailed reporting to ensure
                compliance and provide clear insights into your security status.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Mobile linear flow - shown only on mobile */}
        <div className="mobile-security-flow">
          <div className="mobile-flow-card">
            <div className="mobile-flow-step">01</div>
            <div className="mobile-flow-content">
              <h4><FaShieldAlt /> Security Assessment</h4>
              <p>We conduct a comprehensive analysis of your current security posture, identifying vulnerabilities and potential threats across all systems.</p>
            </div>
          </div>
          <div className="mobile-flow-connector">
            <span className="mobile-flow-dot"></span>
            <span className="mobile-flow-line"></span>
            <span className="mobile-flow-dot"></span>
          </div>
          <div className="mobile-flow-card">
            <div className="mobile-flow-step">02</div>
            <div className="mobile-flow-content">
              <h4><FaChartLine /> Risk Analysis</h4>
              <p>Our experts prioritize risks based on impact and likelihood, creating a roadmap for addressing the most critical security gaps.</p>
            </div>
          </div>
          <div className="mobile-flow-connector">
            <span className="mobile-flow-dot"></span>
            <span className="mobile-flow-line"></span>
            <span className="mobile-flow-dot"></span>
          </div>
          <div className="mobile-flow-card">
            <div className="mobile-flow-step">03</div>
            <div className="mobile-flow-content">
              <h4><FaCogs /> Implementation</h4>
              <p>We deploy tailored security solutions, from firewalls to encryption, ensuring comprehensive protection across your infrastructure.</p>
            </div>
          </div>
          <div className="mobile-flow-connector">
            <span className="mobile-flow-dot"></span>
            <span className="mobile-flow-line"></span>
            <span className="mobile-flow-dot"></span>
          </div>
          <div className="mobile-flow-card">
            <div className="mobile-flow-step">04</div>
            <div className="mobile-flow-content">
              <h4><FaClipboardCheck /> Audit & Report</h4>
              <p>Comprehensive audit documentation and detailed reporting to ensure compliance and provide clear insights into your security status.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-enterprise">
        <div className="stats-enterprise-container">
          <motion.div
            className="stats-enterprise-header"
            variants={statsEnterpriseHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h2 className="stats-enterprise-title" variants={statsEnterpriseHeaderItemVariants}>
              Trusted. Proven. Secure.
            </motion.h2>
            <motion.p className="stats-enterprise-description" variants={statsEnterpriseHeaderItemVariants}>
              Delivering enterprise-grade cybersecurity backed by measurable results and trusted partnerships.
            </motion.p>
          </motion.div>

          <motion.div
            className="stats-enterprise-grid"
            variants={statsEnterpriseGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => setStatsInView(true)}
          >
            {enterpriseStats.map((stat) => (
              <motion.div className="stats-enterprise-item" key={stat.id} variants={statsEnterpriseItemVariants}>
                <motion.span
                  className="stats-enterprise-divider"
                  variants={statsEnterpriseDividerVariants}
                  aria-hidden="true"
                ></motion.span>
                <div className="stats-enterprise-number">
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    start={statsInView}
                  />
                </div>
                <div className="stats-enterprise-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <motion.div
            className="section-header"
            variants={servicesHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div className="section-subtitle" variants={servicesHeaderItemVariants}>
              What We Provide
            </motion.div>
            <motion.h2 className="section-title" variants={servicesHeaderItemVariants}>
              Robust Cybersecurity Services
            </motion.h2>
            <motion.div className="section-accent-line" variants={servicesAccentLineVariants} />
            <motion.p className="section-description" variants={servicesHeaderItemVariants}>
              Whether you're safeguarding sensitive data or ensuring compliance, our robust cybersecurity services help you stay secure, resilient, and ahead of the threat curve.
            </motion.p>
          </motion.div>
          <motion.div
            className="services-grid"
            variants={servicesGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -80px 0px" }}
          >
            {services.map((service, index) => (
              <motion.div className="service-card" key={index} variants={serviceCardVariants}>
                <div className="service-card-inner">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <service.icon size={32} strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FourDApproach />

      <section className="testimonials-section">
        <div className="testimonials-bg-grid" aria-hidden="true"></div>
        <div className="testimonials-bg-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Testimonials</div>
            <h2 className="section-title">Hear It from Our Happy Customers</h2>
            <p className="section-description">
              See how our cybersecurity solutions have helped businesses stay secure, compliant, and resilient.
            </p>
            <p className="testimonials-trust-statement">
              Trusted by 100+ organizations across BFSI, Healthcare, Manufacturing and Technology.
            </p>
          </div>

          <div className="testimonials-carousel">
            <button
              type="button"
              className="testimonial-nav-arrow testimonial-nav-arrow-left"
              onClick={goToPrevTestimonials}
              aria-label="Show previous testimonials"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div
              className="testimonials-grid"
              onTouchStart={handleTestimonialTouchStart}
              onTouchEnd={handleTestimonialTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialGroupIndex}
                  className="testimonials-grid-inner"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  {visibleTestimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={`${testimonialGroupIndex}-${index}`}>
                      <div className="testimonial-header">
                        <div className="testimonial-avatar">{getInitials(testimonial.name)}</div>
                        <div className="testimonial-info">
                          <div className="testimonial-name">{testimonial.name}</div>
                          <div className="testimonial-role">{testimonial.role}</div>
                          {testimonial.company && (
                            <div className="testimonial-company">{testimonial.company}</div>
                          )}
                        </div>
                      </div>
                      <div className="testimonial-stars">
                        {[...Array(5)].map((_, i) => {
                          const ratingValue = i + 1;
                          const diff = testimonial.rating - (ratingValue - 1);
                          if (diff >= 0.75) {
                            return <i key={i} className="fas fa-star"></i>;
                          } else if (diff >= 0.25) {
                            return <i key={i} className="fas fa-star-half-alt"></i>;
                          } else {
                            return <i key={i} className="far fa-star"></i>;
                          }
                        })}
                      </div>
                      <div className="testimonial-rating-label">
                        {testimonial.rating.toFixed(1)}
                      </div>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-date-bottom">
                        <span>{testimonial.date}</span>
                        <span className="testimonial-verified">
                          <i className="fas fa-check-circle"></i> Verified Client
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              className="testimonial-nav-arrow testimonial-nav-arrow-right"
              onClick={goToNextTestimonials}
              aria-label="Show next testimonials"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="testimonials-indicators">
            {Array.from({ length: totalTestimonialGroups }).map((_, i) => (
              <button
                type="button"
                key={i}
                className={`testimonial-indicator ${i === testimonialGroupIndex ? 'active' : ''}`}
                onClick={() => setTestimonialGroupIndex(i)}
                aria-label={`Go to testimonial group ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <TrustedCompanies />

      <section className="home-secure-cta" id="book">
        <div className="container">
          <h2 className="home-secure-cta-title">Ready to Secure Your Business?</h2>
          <p className="home-secure-cta-description">
            We focus on understanding your business first—not selling tools. Schedule a consultation with our security experts to build a resilient cybersecurity strategy that lasts.
          </p>
          <Link to="/contact" className="home-secure-cta-btn">
            <span>Get Your Audit Quote Now</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Home;