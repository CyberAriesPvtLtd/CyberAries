import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

// ------------------------------------------------------------------
// Footer animation variants — same philosophy as the rest of the
// homepage: container staggers its children in on first view,
// social icons stagger in slightly after the columns.
// ------------------------------------------------------------------
const footerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const footerColumnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const footerSocialVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const footerSocialIconVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const backToTopTransition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] };

const socialLinks = [
  { href: 'https://www.linkedin.com/company/cyberaries/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://x.com/Cyberarmorknigt', icon: 'fab fa-twitter', label: 'Twitter / X' },
  { href: 'https://www.linkedin.com/company/cyberariespvtltd/', icon: 'fab fa-facebook', label: 'Facebook' },
  { href: 'https://www.instagram.com/cyberarmorknight/', icon: 'fab fa-instagram', label: 'Instagram' },
];

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={footerContainerVariants}
      >
        <div className="footer-grid">
          <motion.div className="footer-about" variants={footerColumnVariants}>
            <img
              src="/cyberaries1-logo.png"
              alt="CyberAries logo"
              className="footer-logo"
            />
            <p className="footer-description">
              At Cyber Aries, we deliver proactive threat monitoring, advanced
              data protection, and enterprise-grade cybersecurity built
              around your business.
            </p>
            <motion.div className="footer-social" variants={footerSocialVariants}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                  variants={footerSocialIconVariants}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={footerColumnVariants}>
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li>
                <a
                  href="https://medium.com/@cyberaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  Blogs
                </a>
              </li>
              <li><Link to="/careers">Career</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={footerColumnVariants}>
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services/regulatory-audit">Regulatory Audit</Link></li>
              <li><Link to="/services/offensive-security">Offensive Security</Link></li>
              <li><Link to="/services/infrastructure-cloud">Infrastructure & Cloud</Link></li>
              <li><Link to="/services/compliance">Compliance</Link></li>
              <li><Link to="/services/data-privacy">Data Privacy</Link></li>
              <li><Link to="/services/strategic-consulting">Strategic Consulting</Link></li>
            </ul>
          </motion.div>

          <motion.div className="footer-contact" variants={footerColumnVariants}>
            <h3 className="footer-title">Contact Us</h3>

            <div className="contact-item">
              <span className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div className="contact-text">
                <div className="contact-label">Head Office</div>
                <div className="contact-value">
                  Hiranandani Business Park, Powai, Mumbai - 400071
                </div>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <i className="fas fa-phone"></i>
              </span>
              <div className="contact-text">
                <div className="contact-label">Call Us</div>
                <a href="tel:+918828495202" className="contact-value contact-link">
                  +91 8828495202
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <i className="fas fa-envelope"></i>
              </span>
              <div className="contact-text">
                <div className="contact-label">Email Us</div>
                <a href="mailto:info@cyberaries.com" className="contact-value contact-link">
                  info@cyberaries.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © 2026 CyberAries Pvt Ltd. All Rights Reserved.
            </div>
            <div className="footer-links-bottom">
              <Link to="/terms-conditions">Terms of Service</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </motion.footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={backToTopTransition}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
