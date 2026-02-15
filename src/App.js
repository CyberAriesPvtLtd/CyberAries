import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Careers from './components/Careers';
import Footer from './components/Footer';
import About from './components/about';
import Contact from './components/contact';
import Appointment from './components/appointment';
import TermsConditions from './components/TermsConditions'; 
import PrivacyPolicy from './components/PrivacyPolicy';

// Industries
import BFSI from './pages/industries/BFSI';
import Government from './pages/industries/Government';
import Technology from './pages/industries/Technology';

// Offensive Security - Application Security
import WebAppSecurity from './pages/Services/offensiveSecurity/ApplicationSecurity/WebAppSecurity';
import MobileAppSecurity from './pages/Services/offensiveSecurity/ApplicationSecurity/MobileAppSecurity';
import APISecurityTesting from './pages/Services/offensiveSecurity/ApplicationSecurity/APISecurityTesting';

// Offensive Security - Code Security
import SourceCodeReview from './pages/Services/offensiveSecurity/CodeSecurity/SourceCodeReview';
import SASTandDAST from './pages/Services/offensiveSecurity/CodeSecurity/SASTandDAST';

// Offensive Security - Advanced Testing
import RedTeaming from './pages/Services/offensiveSecurity/AdvancedTesting/RedTeaming';
import VulnerabilityAssessment from './pages/Services/offensiveSecurity/AdvancedTesting/VulnerabilityAssessment';

// Infrastructure and Cloud - Network Security
import NetworkSecurity from './pages/Services/infrastructure and cloud/NetworkSecurity/NetworkSecurity';
import WirelessSecurity from './pages/Services/infrastructure and cloud/NetworkSecurity/WirelessSecurity';

// Data Privacy - Privacy Frameworks
import ISO27701 from './pages/Services/dataPrivacy/PrivacyFrameworks/ISO27701';
import ISO27018 from './pages/Services/dataPrivacy/PrivacyFrameworks/ISO27018';

// Coming Soon Page (for routes without pages yet)
import ComingSoon from './pages/comingsoon';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/career" element={<Careers />} />

          {/* Industries */}
          <Route path="/industries/bfsi" element={<BFSI />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/education" element={<ComingSoon />} />
          <Route path="/industries/healthcare" element={<ComingSoon />} />
          <Route path="/industries/manufacturing" element={<ComingSoon />} />

          {/* Regulatory Audit - Banking & Finance */}
          <Route path="/services/regulatory/rbi-cyber-framework" element={<ComingSoon />} />
          <Route path="/services/regulatory/rbi-nbfc-guidelines" element={<ComingSoon />} />
          <Route path="/services/regulatory/rbi-payment-systems" element={<ComingSoon />} />

          {/* Regulatory Audit - Capital Markets */}
          <Route path="/services/regulatory/bse-audit" element={<ComingSoon />} />
          <Route path="/services/regulatory/nse-audit" element={<ComingSoon />} />
          <Route path="/services/regulatory/sebi-audit" element={<ComingSoon />} />

          {/* Regulatory Audit - Government & Digital */}
          <Route path="/services/regulatory/data-localization" element={<ComingSoon />} />
          <Route path="/services/regulatory/irdai-isnp" element={<ComingSoon />} />
          <Route path="/services/regulatory/uidai-compliance" element={<ComingSoon />} />

          {/* Offensive Security - Application Security */}
          <Route path="/services/web-app-security" element={<WebAppSecurity />} />
          <Route path="/services/mobile-app-security" element={<MobileAppSecurity />} />
          <Route path="/services/thick-client-security" element={<ComingSoon />} />
          <Route path="/services/api-security" element={<APISecurityTesting />} />

          {/* Offensive Security - Code Security */}
          <Route path="/services/sast-dast" element={<SASTandDAST />} />
          <Route path="/services/source-code-review" element={<SourceCodeReview />} />

          {/* Offensive Security - Advanced Testing */}
          <Route path="/services/red-teaming" element={<RedTeaming />} />
          <Route path="/services/vulnerability-assessment" element={<VulnerabilityAssessment />} />

          {/* Infrastructure & Cloud - IT Infrastructure */}
          <Route path="/services/infrastructure/network-design" element={<ComingSoon />} />
          <Route path="/services/infrastructure/server-setup" element={<ComingSoon />} />
          <Route path="/services/infrastructure/virtualization" element={<ComingSoon />} />
          <Route path="/services/infrastructure/endpoint-management" element={<ComingSoon />} />

          {/* Infrastructure & Cloud - Cloud Security */}
          <Route path="/services/cloud/configuration-review" element={<ComingSoon />} />
          <Route path="/services/cloud/penetration-testing" element={<ComingSoon />} />
          <Route path="/services/cloud/container-security" element={<ComingSoon />} />

          {/* Infrastructure & Cloud - Network Security */}
          <Route path="/services/network-security" element={<NetworkSecurity />} />
          <Route path="/services/wireless-security" element={<WirelessSecurity />} />
          <Route path="/services/infrastructure/firewall-review" element={<ComingSoon />} />

          {/* Compliance - ISO Standards */}
          <Route path="/services/compliance/iso-27001" element={<ComingSoon />} />
          <Route path="/services/compliance/iso-22301" element={<ComingSoon />} />
          <Route path="/services/compliance/iso-20000" element={<ComingSoon />} />
          <Route path="/services/compliance/iso-42001" element={<ComingSoon />} />

          {/* Compliance - Global Attestations */}
          <Route path="/services/soc-compliance/soc-1" element={<ComingSoon />} />
          <Route path="/services/soc-compliance/soc-2" element={<ComingSoon />} />
          <Route path="/services/compliance/pci-dss" element={<ComingSoon />} />
          <Route path="/services/compliance/swift" element={<ComingSoon />} />
          <Route path="/services/compliance/fedramp" element={<ComingSoon />} />

          {/* Data Privacy - Global Privacy Laws */}
          <Route path="/services/privacy/gdpr" element={<ComingSoon />} />
          <Route path="/services/privacy/ccpa" element={<ComingSoon />} />
          <Route path="/services/privacy/hipaa" element={<ComingSoon />} />

          {/* Data Privacy - Indian Privacy Laws */}
          <Route path="/services/privacy/dpdp" element={<ComingSoon />} />
          <Route path="/services/privacy/dpia" element={<ComingSoon />} />

          {/* Data Privacy - Privacy Frameworks */}
          <Route path="/services/compliance/iso-27701" element={<ISO27701 />} />
          <Route path="/services/compliance/iso-27018" element={<ISO27018 />} />

          {/* Strategic Consulting - Forensics & Recovery */}
          <Route path="/services/consulting/forensic-audit" element={<ComingSoon />} />
          <Route path="/services/consulting/ransomware-recovery" element={<ComingSoon />} />

          {/* Strategic Consulting - Managed Leadership */}
          <Route path="/services/consulting/virtual-ciso" element={<ComingSoon />} />
          <Route path="/services/consulting/dpo-service" element={<ComingSoon />} />

          {/* Strategic Consulting - US Federal Standards */}
          <Route path="/services/consulting/nist-800-53" element={<ComingSoon />} />
          <Route path="/services/consulting/nist-800-171" element={<ComingSoon />} />

          {/* Resources */}
          <Route path="/resources/case-studies" element={<ComingSoon />} />
          <Route path="/resources/blogs" element={<ComingSoon />} />
          <Route path="/resources/news" element={<ComingSoon />} />
          <Route path="/resources/download" element={<ComingSoon />} />

          {/* Resources - Survey */}
          <Route path="/resources/survey/grc" element={<ComingSoon />} />
          <Route path="/resources/survey/dpdpa" element={<ComingSoon />} />
          <Route path="/resources/survey/tprm" element={<ComingSoon />} />

          {/* Fallback for undefined routes */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
        
  );
}

export default App;