import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h3 className="footer-title">
<<<<<<< HEAD
            Cyber<span style={{ color: 'white' }}>Aries</span>
=======
            <img src="/public/cyberaries-logo.png" alt="logo" />
>>>>>>> 86201b2 (save local changes before pull)
          </h3>
          <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
            At Cyber Aries Pvt. Ltd., we're committed to delivering professional, high-quality cybersecurity solutions. From proactive threat monitoring to advanced data protection.
          </p>
          <div style={{ display: 'flex', gap: '15px', fontSize: '1.2rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bg-soft-white)' }}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bg-soft-white)' }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bg-soft-white)' }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bg-soft-white)' }}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/services/network-security">Network Security</Link></li>
            <li><Link to="/services">Data Encryption</Link></li>
            <li><Link to="/services">Identity & Access</Link></li>
            <li><Link to="/services">Security Monitoring</Link></li>
            <li><Link to="/services">Backup & Recovery</Link></li>
            <li><Link to="/services">Security Configuration</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Contact Us</h3>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ fontWeight: '700', marginBottom: '5px' }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-corporate-red)', marginRight: '8px' }}></i>
              Head Office
            </div>
            <div style={{ opacity: '0.9' }}>
              Hiranandani Business Park, Powai, Mumbai - 400071
            </div>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ fontWeight: '700', marginBottom: '5px' }}>
              <i className="fas fa-phone" style={{ color: 'var(--accent-corporate-red)', marginRight: '8px' }}></i>
              Call Us
            </div>
            <div style={{ opacity: '0.9' }}>
              <a href="tel:+918828495202" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 8828495202
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '700', marginBottom: '5px' }}>
              <i className="fas fa-envelope" style={{ color: 'var(--accent-corporate-red)', marginRight: '8px' }}></i>
              Email Us
            </div>
            <div style={{ opacity: '0.9' }}>
              <a href="mailto:info@cyberaries.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                info@cyberaries.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            © 2026 CyberAries Pvt Ltd. All Rights Reserved.
          </div>
          <div></div>
          <div></div>
          <div className="footer-links-bottom">
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;