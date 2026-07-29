import React from 'react';
import { motion } from 'framer-motion';
import './TrustedCompanies.css';
import ethonhurstLogo from '../images/clients/ethonhurst.png';
import nafaLogo from '../images/clients/nafa.png';
import otpVenturesLogo from '../images/clients/otp-ventures.png';
import samaraCapitalLogo from '../images/clients/samara-capital.png';
import araliVenturesLogo from '../images/clients/arali-ventures.png';
import kitaraCapitalLogo from '../images/clients/kitara-capital.png';
import profesCapitalLogo from '../images/clients/profes-capital.png';
import soonicornVenturesLogo from '../images/clients/soonicorn-ventures.png';
import sunriseLogo from '../images/clients/sunrise.png';
import twoXCapitalLogo from '../images/clients/twox-capital.png';

// ------------------------------------------------------------------
// Turns a company name into a short monogram (e.g. "Northbridge
// Financial" -> "NF") for the logo-mark placeholder shown when no
// logoUrl is supplied. Mirrors the initials treatment already used
// for testimonial avatars on the Home page, so the two "client trust"
// sections share the same visual language.
// ------------------------------------------------------------------
const getCompanyInitials = (name = '') => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

// ------------------------------------------------------------------
// "Trusted by Leading Enterprises" section animation variants.
// Sequence runs once when the section enters the viewport:
// subtitle -> title -> description (staggered), then the marquee
// fades/lifts in. The infinite logo scroll itself is a pure CSS
// animation (see TrustedCompanies.css) — kept independent of Framer
// Motion so the loop never restarts or stutters on re-render.
// ------------------------------------------------------------------
const headerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const marqueeRevealVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }
  }
};

// Real client roster, matched to the logo pack provided (Ethonhurst,
// NAFA, OTP Ventures, Samara Capital). Logo files live at
// src/images/clients/ and are imported above so the bundler resolves
// them, matching the convention already used elsewhere in this project
// (e.g. the CTA background image). To swap or add clients, pass a
// `companies` prop with the same shape.
const defaultCompanies = [
  { id: 'ethonhurst', name: 'Ethonhurst', logoUrl: ethonhurstLogo },
  { id: 'nafa', name: 'NAFA', logoUrl: nafaLogo },
  { id: 'otp-ventures', name: 'OTP Ventures', logoUrl: otpVenturesLogo },
  { id: 'samara-capital', name: 'Samara Capital', logoUrl: samaraCapitalLogo },
  { id: 'arali-ventures', name: 'Arali Ventures', logoUrl: araliVenturesLogo },
  { id: 'kitara-capital', name: 'Kitara Capital', logoUrl: kitaraCapitalLogo },
  { id: 'profes-capital', name: 'Profes Capital', logoUrl: profesCapitalLogo },
  { id: 'soonicorn-ventures', name: 'Soonicorn Ventures', logoUrl: soonicornVenturesLogo },
  { id: 'sunrise', name: 'Sunrise', logoUrl: sunriseLogo },
  { id: 'twox-capital', name: 'TwoX Capital', logoUrl: twoXCapitalLogo }
];

const TrustedCompanies = ({ companies = defaultCompanies }) => {
  // Duplicate the roster once so the marquee track is exactly 200%
  // wide. Animating from translateX(0) to translateX(-50%) then lands
  // on a frame identical to the start — a seamless loop with no visible
  // jump. The duplicated half is hidden from assistive tech.
  const marqueeLogos = [...companies, ...companies];

  return (
    <section className="trusted-companies" aria-label="Enterprises that trust CyberAries">
      <div className="trusted-companies-container">
        <motion.div
          className="trusted-companies-header"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="trusted-companies-subtitle" variants={headerItemVariants}>
            TRUSTED ACROSS INDUSTRIES
          </motion.div>
          <motion.h2 className="trusted-companies-title" variants={headerItemVariants}>
            Leading Enterprises Trust Cyber<span className="trusted-companies-title-accent">Aries</span>
          </motion.h2>
          <motion.p className="trusted-companies-description" variants={headerItemVariants}>
            Helping organizations strengthen their cybersecurity through VAPT, GRC, Audits, Compliance and Managed Security Services.
          </motion.p>
        </motion.div>

        <motion.div
          className="trusted-companies-marquee-wrapper"
          variants={marqueeRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="trusted-companies-marquee-track">
            {marqueeLogos.map((company, index) => (
              <div
                className="trusted-companies-logo-item"
                key={`${company.id}-${index}`}
                aria-hidden={index >= companies.length ? 'true' : undefined}
              >
                <div className="trusted-companies-logo-mark">
                  {company.logoUrl ? (
                    <img
                      src={company.logoUrl}
                      alt={company.name}
                      className="trusted-companies-logo-img"
                      loading="lazy"
                    />
                  ) : (
                    <span className="trusted-companies-logo-placeholder" aria-hidden="true">
                      {getCompanyInitials(company.name)}
                    </span>
                  )}
                </div>
                <span className="trusted-companies-logo-name">{company.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
