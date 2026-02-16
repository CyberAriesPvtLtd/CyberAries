import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import './Header.css';
import logoImage from '../images/logos/cyberaries-logo.png';

const Header = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNestedSurvey, setShowNestedSurvey] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  // Mobile menu states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [mobileActiveService, setMobileActiveService] = useState('regulatory');

  const isActive = (path) => location.pathname === path;

  // Desktop hover handlers
  const handleMouseEnter = (dropdown) => {
    // Only work on desktop
    if (window.innerWidth > 968) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    // Only work on desktop
    if (window.innerWidth > 968) {
      const id = setTimeout(() => {
        setActiveDropdown(null);
        setShowNestedSurvey(false);
      }, 150);
      setTimeoutId(id);
    }
  };

  const handleTabClick = (e) => {
    const serviceName = e.currentTarget.getAttribute('data-service');

    // Remove active class from all service buttons and panels
    document.querySelectorAll('.services-category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.services-category-content').forEach(panel => panel.classList.remove('active'));

    // Add active class to clicked button and corresponding panel
    e.currentTarget.classList.add('active');
    document.querySelector(`[data-service-panel="${serviceName}"]`).classList.add('active');
  };

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveMenu(null);
    setMobileActiveService('regulatory');

    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const toggleMobileDropdown = (menu) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  const handleMobileServiceTab = (serviceName) => {
    setMobileActiveService(serviceName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileActiveMenu(null);
    document.body.style.overflow = '';
  };

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo" onClick={closeMobileMenu}>
          <img
            src={logoImage}
            alt="Cyber Aries Security Solutions"
            className="logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {/* Home */}
          <div className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
          </div>

          {/* Company */}
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link">
              Company
              <ChevronDown size={14} />
            </button>

            {activeDropdown === 'company' && (
              <div className="dropdown-menu">
                <Link to="/about" className="dropdown-item">About Us</Link>
                <Link to="/careers" className="dropdown-item">Career</Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link">
              Services
              <ChevronDown size={14} />
            </button>

            {activeDropdown === 'services' && (
              <div className="services-mega-menu">
                {/* Sidebar */}
                <div className="services-sidebar">
                  <button
                    className="services-category-btn active"
                    data-service="regulatory"
                    onClick={handleTabClick}
                  >
                    Regulatory Audit
                  </button>
                  <button
                    className="services-category-btn"
                    data-service="offensive"
                    onClick={handleTabClick}
                  >
                    Offensive Security
                  </button>
                  <button
                    className="services-category-btn"
                    data-service="infrastructure"
                    onClick={handleTabClick}
                  >
                    Infrastructure & Cloud
                  </button>
                  <button
                    className="services-category-btn"
                    data-service="compliance"
                    onClick={handleTabClick}
                  >
                    Compliance
                  </button>
                  <button
                    className="services-category-btn"
                    data-service="privacy"
                    onClick={handleTabClick}
                  >
                    Data Privacy
                  </button>
                  <button
                    className="services-category-btn"
                    data-service="consulting"
                    onClick={handleTabClick}
                  >
                    Strategic Consulting
                  </button>
                </div>

                {/* Content Area */}
                <div className="services-content-area">
                  {/* Regulatory Audit */}
                  <div className="services-category-content active" data-service-panel="regulatory">
                    <div className="services-grid">
                      <div className="services-section">
                        <h5 className="services-section-title">Banking & Finance</h5>
                        <Link to="/services/regulatory/rbi-cyber-framework" className="services-link">RBI - Cyber Framework for Banks</Link>
                        <Link to="/services/regulatory/rbi-nbfc-guidelines" className="services-link">RBI - NBFC Cyber Guidelines</Link>
                        <Link to="/services/regulatory/rbi-payment-systems" className="services-link">RBI - Payment Systems Audit</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Capital Markets</h5>
                        <Link to="/services/regulatory/bse-cyber-audit" className="services-link">BSE Cyber Security Audit</Link>
                        <Link to="/services/regulatory/nse-cyber-audit" className="services-link">NSE Cyber Security Audit</Link>
                        <Link to="/services/regulatory/sebi-cyber-audit" className="services-link">SEBI Cyber Security Audit</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Government & Digital</h5>
                        <Link to="/services/regulatory/data-localization" className="services-link">Data Localization Audit</Link>
                        <Link to="/services/regulatory/irdai-isnp" className="services-link">IRDAI - ISNP Security Audit</Link>
                        <Link to="/services/regulatory/uidai-compliance" className="services-link">UIDAI - AUA/KUA Compliance</Link>
                      </div>
                    </div>
                  </div>

                  {/* Offensive Security */}
                  <div className="services-category-content" data-service-panel="offensive">
                    <div className="services-grid">
                      <div className="services-section">
                        <h5 className="services-section-title">Application Security</h5>
                        <Link to="/services/web-app-security" className="services-link">Web App Security (WAST)</Link>
                        <Link to="/services/mobile-app-security" className="services-link">Mobile App Security (MAST)</Link>
                        <Link to="/services/thick-client-security" className="services-link">Thick Client Security</Link>
                        <Link to="/services/api-security" className="services-link">API Security Testing</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Code Security</h5>
                        <Link to="/services/sast-dast" className="services-link">SAST & DAST</Link>
                        <Link to="/services/source-code-review" className="services-link">Source Code Review</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Advanced Testing</h5>
                        <Link to="/services/red-teaming" className="services-link">Red Teaming</Link>
                        <Link to="/services/vulnerability-assessment" className="services-link">VAPT Services</Link>
                      </div>
                    </div>
                  </div>

                  {/* Infrastructure & Cloud */}
                  <div className="services-category-content" data-service-panel="infrastructure">
                    <div className="services-grid">
                      <div className="services-section">
                        <h5 className="services-section-title">IT Infrastructure</h5>
                        <Link to="/services/infrastructure/network-design" className="services-link">Network Architecture Design</Link>
                        <Link to="/services/infrastructure/server-setup" className="services-link">Server & Storage Setup</Link>
                        <Link to="/services/infrastructure/virtualization" className="services-link">Virtualization Setup</Link>
                        <Link to="/services/infrastructure/endpoint-management" className="services-link">Endpoint Management</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Cloud Security</h5>
                        <Link to="/services/cloud/configuration-review" className="services-link">Cloud Config Review</Link>
                        <Link to="/services/cloud/penetration-testing" className="services-link">Cloud Penetration Testing</Link>
                        <Link to="/services/cloud/container-security" className="services-link">Container & K8s Security</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Network Security</h5>
                        <Link to="/services/network-security" className="services-link">Network Security Testing</Link>
                        <Link to="/services/wireless-security" className="services-link">Wireless Security</Link>
                        <Link to="/services/infrastructure/firewall-review" className="services-link">Firewall Rule Review</Link>
                      </div>
                    </div>
                  </div>

                  {/* Compliance */}
                  <div className="services-category-content" data-service-panel="compliance">
                    <div className="services-grid">
                      <div className="services-section">
                        <h5 className="services-section-title">ISO Standards</h5>
                        <Link to="/services/compliance/iso-27001" className="services-link">ISO 27001</Link>
                        <Link to="/services/compliance/iso-22301" className="services-link">ISO 22301</Link>
                        <Link to="/services/compliance/iso-20000" className="services-link">ISO 20000</Link>
                        <Link to="/services/compliance/iso-42001" className="services-link">ISO 42001</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Global Attestations</h5>
                        <Link to="/services/soc-compliance/soc-1" className="services-link">SOC 1</Link>
                        <Link to="/services/soc-compliance/soc-2" className="services-link">SOC 2</Link>
                        <Link to="/services/compliance/pci-dss" className="services-link">PCI DSS</Link>
                        <Link to="/services/compliance/swift" className="services-link">SWIFT Assessment</Link>
                        <Link to="/services/compliance/fedramp" className="services-link">FedRAMP Assessment</Link>
                      </div>
                    </div>
                  </div>

                  {/* Data Privacy */}
                  <div className="services-category-content" data-service-panel="privacy">
                    <div className="services-grid">
                      <div className="services-section">
                        <h5 className="services-section-title">Global Privacy Laws</h5>
                        <Link to="/services/privacy/gdpr" className="services-link">GDPR Compliance</Link>
                        <Link to="/services/privacy/ccpa" className="services-link">CCPA Compliance</Link>
                        <Link to="/services/privacy/hipaa" className="services-link">HIPAA Compliance</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Indian Privacy Laws</h5>
                        <Link to="/services/privacy/dpdp" className="services-link">DPDP Act Compliance</Link>
                        <Link to="/services/privacy/dpia" className="services-link">DPIA Services</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Privacy Frameworks</h5>
                        <Link to="/services/compliance/iso-27701" className="services-link">ISO 27701</Link>
                        <Link to="/services/compliance/iso-27018" className="services-link">ISO 27018</Link>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Consulting */}
                  <div className="services-category-content" data-service-panel="consulting">
                    <div className="services-grid">
                      <div className="services-section">
                        <h5 className="services-section-title">Forensics & Recovery</h5>
                        <Link to="/services/consulting/forensic-audit" className="services-link">Forensic Audit</Link>
                        <Link to="/services/consulting/ransomware-recovery" className="services-link">Ransomware Recovery</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">Managed Leadership</h5>
                        <Link to="/services/consulting/virtual-ciso" className="services-link">Virtual CISO Services</Link>
                        <Link to="/services/consulting/dpo-service" className="services-link">DPO as a Service</Link>
                      </div>
                      <div className="services-section">
                        <h5 className="services-section-title">US Federal Standards</h5>
                        <Link to="/services/consulting/nist-800-53" className="services-link">NIST 800-53</Link>
                        <Link to="/services/consulting/nist-800-171" className="services-link">NIST 800-171</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries */}
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link">
              Industries
              <ChevronDown size={14} />
            </button>

            {activeDropdown === 'industries' && (
              <div className="dropdown-menu">
                <Link to="/industries/bfsi" className="dropdown-item">BFSI</Link>
                <Link to="/industries/government" className="dropdown-item">Government</Link>
                <Link to="/industries/technology" className="dropdown-item">Technology</Link>
                <Link to="/industries/education" className="dropdown-item">Education</Link>
                <Link to="/industries/healthcare" className="dropdown-item">Healthcare</Link>
                <Link to="/industries/manufacturing" className="dropdown-item">Manufacturing</Link>
              </div>
            )}
          </div>

          {/* Resources */}
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link">
              Resources
              <ChevronDown size={14} />
            </button>

            {activeDropdown === 'resources' && (
              <div className="dropdown-menu">
                <Link to="/resources/case-studies" className="dropdown-item">Case Studies</Link>
                <a
  href="https://medium.com/@cyberaries"
  target="_blank"
  rel="noopener noreferrer"
  className="dropdown-item"
>
  Blogs
</a>
                <Link to="/resources/news" className="dropdown-item">News</Link>
                <Link to="/resources/download" className="dropdown-item">Download</Link>

                {/* Nested Survey Dropdown */}
                <div
                  className="dropdown-item nested-dropdown"
                  onMouseEnter={() => setShowNestedSurvey(true)}
                  onMouseLeave={() => setShowNestedSurvey(false)}
                >
                  Survey
                  <ChevronDown size={12} className="nested-arrow" />

                  {showNestedSurvey && (
                    <div className="nested-menu">
                      <Link to="/resources/survey/grc" className="nested-item">GRC Survey</Link>
                      <Link to="/resources/survey/dpdpa" className="nested-item">Data Privacy Check</Link>
                      <Link to="/resources/survey/tprm" className="nested-item">TPRM Maturity Level</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Career */}
          {/* <div className="nav-item">
            <Link to="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`}>
              Career
            </Link>
          </div> */}

          {/* Contact Us */}
          <div className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact Us
            </Link>
          </div>

          {/* Consult Button */}
          <Link to="/contact" className="quick-contact-btn desktop-only">
            <Phone size={18} />
            Consult With Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
          <nav className="mobile-nav">
            <div className="mobile-nav-content">
              {/* Home */}
              <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                Home
              </Link>

              {/* Company */}
              <div className="mobile-nav-item">
                <button
                  className="mobile-nav-link"
                  onClick={() => toggleMobileDropdown('company')}
                >
                  Company
                  <ChevronDown
                    size={18}
                    className={`mobile-chevron ${mobileActiveMenu === 'company' ? 'rotated' : ''}`}
                  />
                </button>
                {mobileActiveMenu === 'company' && (
                  <div className="mobile-dropdown">
                    <Link to="/about" className="mobile-dropdown-item" onClick={closeMobileMenu}>About Us</Link>
                    <Link to="/careers" className="mobile-dropdown-item" onClick={closeMobileMenu}>Career</Link>
                  </div>
                )}
              </div>

              {/* Services */}
              <div className="mobile-nav-item">
                <button
                  className="mobile-nav-link"
                  onClick={() => toggleMobileDropdown('services')}
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`mobile-chevron ${mobileActiveMenu === 'services' ? 'rotated' : ''}`}
                  />
                </button>
                {mobileActiveMenu === 'services' && (
                  <div className="mobile-services-wrapper">
                    {/* Service Tabs */}
                    <div className="mobile-service-tabs">
                      <button
                        className={`mobile-service-tab ${mobileActiveService === 'regulatory' ? 'active' : ''}`}
                        onClick={() => handleMobileServiceTab('regulatory')}
                      >
                        Regulatory Audit
                      </button>
                      <button
                        className={`mobile-service-tab ${mobileActiveService === 'offensive' ? 'active' : ''}`}
                        onClick={() => handleMobileServiceTab('offensive')}
                      >
                        Offensive Security
                      </button>
                      <button
                        className={`mobile-service-tab ${mobileActiveService === 'infrastructure' ? 'active' : ''}`}
                        onClick={() => handleMobileServiceTab('infrastructure')}
                      >
                        Infrastructure & Cloud
                      </button>
                      <button
                        className={`mobile-service-tab ${mobileActiveService === 'compliance' ? 'active' : ''}`}
                        onClick={() => handleMobileServiceTab('compliance')}
                      >
                        Compliance
                      </button>
                      <button
                        className={`mobile-service-tab ${mobileActiveService === 'privacy' ? 'active' : ''}`}
                        onClick={() => handleMobileServiceTab('privacy')}
                      >
                        Data Privacy
                      </button>
                      <button
                        className={`mobile-service-tab ${mobileActiveService === 'consulting' ? 'active' : ''}`}
                        onClick={() => handleMobileServiceTab('consulting')}
                      >
                        Strategic Consulting
                      </button>
                    </div>

                    {/* Service Content */}
                    <div className="mobile-service-content">
                      {/* Regulatory Audit */}
                      {mobileActiveService === 'regulatory' && (
                        <div className="mobile-service-links">
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Banking & Finance</h6>
                            <Link to="/services/regulatory/rbi-cyber-framework" onClick={closeMobileMenu}>RBI - Cyber Framework for Banks</Link>
                            <Link to="/services/regulatory/rbi-nbfc-guidelines" onClick={closeMobileMenu}>RBI - NBFC Cyber Guidelines</Link>
                            <Link to="/services/regulatory/rbi-payment-systems" onClick={closeMobileMenu}>RBI - Payment Systems Audit</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Capital Markets</h6>
                            <Link to="/services/regulatory/bse-cyber-audit" onClick={closeMobileMenu}>BSE Cyber Security Audit</Link>
                            <Link to="/services/regulatory/nse-cyber-audit" onClick={closeMobileMenu}>NSE Cyber Security Audit</Link>
                            <Link to="/services/regulatory/sebi-cyber-audit" onClick={closeMobileMenu}>SEBI Cyber Security Audit</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Government & Digital</h6>
                            <Link to="/services/regulatory/data-localization" onClick={closeMobileMenu}>Data Localization Audit</Link>
                            <Link to="/services/regulatory/irdai-isnp" onClick={closeMobileMenu}>IRDAI - ISNP Security Audit</Link>
                            <Link to="/services/regulatory/uidai-compliance" onClick={closeMobileMenu}>UIDAI - AUA/KUA Compliance</Link>
                          </div>
                        </div>
                      )}

                      {/* Offensive Security */}
                      {mobileActiveService === 'offensive' && (
                        <div className="mobile-service-links">
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Application Security</h6>
                            <Link to="/services/web-app-security" onClick={closeMobileMenu}>Web App Security (WAST)</Link>
                            <Link to="/services/mobile-app-security" onClick={closeMobileMenu}>Mobile App Security (MAST)</Link>
                            <Link to="/services/thick-client-security" onClick={closeMobileMenu}>Thick Client Security</Link>
                            <Link to="/services/api-security" onClick={closeMobileMenu}>API Security Testing</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Code Security</h6>
                            <Link to="/services/sast-dast" onClick={closeMobileMenu}>SAST & DAST</Link>
                            <Link to="/services/source-code-review" onClick={closeMobileMenu}>Source Code Review</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Advanced Testing</h6>
                            <Link to="/services/red-teaming" onClick={closeMobileMenu}>Red Teaming</Link>
                            <Link to="/services/vulnerability-assessment" onClick={closeMobileMenu}>VAPT Services</Link>
                          </div>
                        </div>
                      )}

                      {/* Infrastructure & Cloud */}
                      {mobileActiveService === 'infrastructure' && (
                        <div className="mobile-service-links">
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">IT Infrastructure</h6>
                            <Link to="/services/infrastructure/network-design" onClick={closeMobileMenu}>Network Architecture Design</Link>
                            <Link to="/services/infrastructure/server-setup" onClick={closeMobileMenu}>Server & Storage Setup</Link>
                            <Link to="/services/infrastructure/virtualization" onClick={closeMobileMenu}>Virtualization Setup</Link>
                            <Link to="/services/infrastructure/endpoint-management" onClick={closeMobileMenu}>Endpoint Management</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Cloud Security</h6>
                            <Link to="/services/cloud/configuration-review" onClick={closeMobileMenu}>Cloud Config Review</Link>
                            <Link to="/services/cloud/penetration-testing" onClick={closeMobileMenu}>Cloud Penetration Testing</Link>
                            <Link to="/services/cloud/container-security" onClick={closeMobileMenu}>Container & K8s Security</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Network Security</h6>
                            <Link to="/services/network-security" onClick={closeMobileMenu}>Network Security Testing</Link>
                            <Link to="/services/wireless-security" onClick={closeMobileMenu}>Wireless Security</Link>
                            <Link to="/services/infrastructure/firewall-review" onClick={closeMobileMenu}>Firewall Rule Review</Link>
                          </div>
                        </div>
                      )}

                      {/* Compliance */}
                      {mobileActiveService === 'compliance' && (
                        <div className="mobile-service-links">
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">ISO Standards</h6>
                            <Link to="/services/compliance/iso-27001" onClick={closeMobileMenu}>ISO 27001</Link>
                            <Link to="/services/compliance/iso-22301" onClick={closeMobileMenu}>ISO 22301</Link>
                            <Link to="/services/compliance/iso-20000" onClick={closeMobileMenu}>ISO 20000</Link>
                            <Link to="/services/compliance/iso-42001" onClick={closeMobileMenu}>ISO 42001</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Global Attestations</h6>
                            <Link to="/services/soc-compliance/soc-1" onClick={closeMobileMenu}>SOC 1</Link>
                            <Link to="/services/soc-compliance/soc-2" onClick={closeMobileMenu}>SOC 2</Link>
                            <Link to="/services/compliance/pci-dss" onClick={closeMobileMenu}>PCI DSS</Link>
                            <Link to="/services/compliance/swift" onClick={closeMobileMenu}>SWIFT Assessment</Link>
                            <Link to="/services/compliance/fedramp" onClick={closeMobileMenu}>FedRAMP Assessment</Link>
                          </div>
                        </div>
                      )}

                      {/* Data Privacy */}
                      {mobileActiveService === 'privacy' && (
                        <div className="mobile-service-links">
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Global Privacy Laws</h6>
                            <Link to="/services/privacy/gdpr" onClick={closeMobileMenu}>GDPR Compliance</Link>
                            <Link to="/services/privacy/ccpa" onClick={closeMobileMenu}>CCPA Compliance</Link>
                            <Link to="/services/privacy/hipaa" onClick={closeMobileMenu}>HIPAA Compliance</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Indian Privacy Laws</h6>
                            <Link to="/services/privacy/dpdp" onClick={closeMobileMenu}>DPDP Act Compliance</Link>
                            <Link to="/services/privacy/dpia" onClick={closeMobileMenu}>DPIA Services</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Privacy Frameworks</h6>
                            <Link to="/services/compliance/iso-27701" onClick={closeMobileMenu}>ISO 27701</Link>
                            <Link to="/services/compliance/iso-27018" onClick={closeMobileMenu}>ISO 27018</Link>
                          </div>
                        </div>
                      )}

                      {/* Strategic Consulting */}
                      {mobileActiveService === 'consulting' && (
                        <div className="mobile-service-links">
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Forensics & Recovery</h6>
                            <Link to="/services/consulting/forensic-audit" onClick={closeMobileMenu}>Forensic Audit</Link>
                            <Link to="/services/consulting/ransomware-recovery" onClick={closeMobileMenu}>Ransomware Recovery</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">Managed Leadership</h6>
                            <Link to="/services/consulting/virtual-ciso" onClick={closeMobileMenu}>Virtual CISO Services</Link>
                            <Link to="/services/consulting/dpo-service" onClick={closeMobileMenu}>DPO as a Service</Link>
                          </div>
                          <div className="mobile-service-group">
                            <h6 className="mobile-service-group-title">US Federal Standards</h6>
                            <Link to="/services/consulting/nist-800-53" onClick={closeMobileMenu}>NIST 800-53</Link>
                            <Link to="/services/consulting/nist-800-171" onClick={closeMobileMenu}>NIST 800-171</Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Industries */}
              <div className="mobile-nav-item">
                <button
                  className="mobile-nav-link"
                  onClick={() => toggleMobileDropdown('industries')}
                >
                  Industries
                  <ChevronDown
                    size={18}
                    className={`mobile-chevron ${mobileActiveMenu === 'industries' ? 'rotated' : ''}`}
                  />
                </button>
                {mobileActiveMenu === 'industries' && (
                  <div className="mobile-dropdown">
                    <Link to="/industries/bfsi" className="mobile-dropdown-item" onClick={closeMobileMenu}>BFSI</Link>
                    <Link to="/industries/government" className="mobile-dropdown-item" onClick={closeMobileMenu}>Government</Link>
                    <Link to="/industries/technology" className="mobile-dropdown-item" onClick={closeMobileMenu}>Technology</Link>
                    <Link to="/industries/education" className="mobile-dropdown-item" onClick={closeMobileMenu}>Education</Link>
                    <Link to="/industries/healthcare" className="mobile-dropdown-item" onClick={closeMobileMenu}>Healthcare</Link>
                    <Link to="/industries/manufacturing" className="mobile-dropdown-item" onClick={closeMobileMenu}>Manufacturing</Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div className="mobile-nav-item">
                <button
                  className="mobile-nav-link"
                  onClick={() => toggleMobileDropdown('resources')}
                >
                  Resources
                  <ChevronDown
                    size={18}
                    className={`mobile-chevron ${mobileActiveMenu === 'resources' ? 'rotated' : ''}`}
                  />
                </button>
                {mobileActiveMenu === 'resources' && (
                  <div className="mobile-dropdown">
                    <Link to="/resources/case-studies" className="mobile-dropdown-item" onClick={closeMobileMenu}>Case Studies</Link>
                   <a
  href="https://medium.com/@cyberaries"
  target="_blank"
  rel="noopener noreferrer"
  className="mobile-dropdown-item"
  onClick={closeMobileMenu}
>
  Blogs
</a>
                    <Link to="/resources/news" className="mobile-dropdown-item" onClick={closeMobileMenu}>News</Link>
                    <Link to="/resources/download" className="mobile-dropdown-item" onClick={closeMobileMenu}>Download</Link>
                    <div className="mobile-dropdown-nested">
                      <div className="mobile-dropdown-item mobile-nested-label">Survey</div>
                      <Link to="/resources/survey/grc" className="mobile-dropdown-item nested" onClick={closeMobileMenu}>GRC Survey</Link>
                      <Link to="/resources/survey/dpdpa" className="mobile-dropdown-item nested" onClick={closeMobileMenu}>Data Privacy Check</Link>
                      <Link to="/resources/survey/tprm" className="mobile-dropdown-item nested" onClick={closeMobileMenu}>TPRM Maturity Level</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Career */}
              <Link to="/careers" className="mobile-nav-link" onClick={closeMobileMenu}>
                Career
              </Link>

              {/* Contact Us */}
              <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                Contact Us
              </Link>

              {/* Mobile Consult Button */}
              <Link to="/contact" className="mobile-consult-btn">
                <Phone size={20} />
                Consult With Us
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;