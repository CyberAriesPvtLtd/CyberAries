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
import ComingSoon from './pages/comingsoon';

// Industries
import BFSI from './pages/industries/BFSI';
import Government from './pages/industries/Government';
import Technology from './pages/industries/Technology';

// RBI Regulatory Audit Services - Banking & Finance
import RBICyberFramework from './pages/Services/regulatory audit/Banking & Finance/RBICyberFramework';
import RBINBFCGuidelines from './pages/Services/regulatory audit/Banking & Finance/RBINBFCGuidelines';
import RBIPaymentSystems from './pages/Services/regulatory audit/Banking & Finance/RBIPaymentSystems';

// Capital Markets Regulatory Audit Services
import BSECyberAudit from './pages/Services/regulatory audit/Capital Markets/BSECyberAudit';
import NSECyberAudit from './pages/Services/regulatory audit/Capital Markets/NSECyberAudit';
import SEBICyberAudit from './pages/Services/regulatory audit/Capital Markets/SEBICyberAudit';

// Offensive Security Services
import WebAppSecurity from './pages/Services/offensiveSecurity/ApplicationSecurity/WebAppSecurity';
import MobileAppSecurity from './pages/Services/offensiveSecurity/ApplicationSecurity/MobileAppSecurity';
import APISecurityTesting from './pages/Services/offensiveSecurity/ApplicationSecurity/APISecurityTesting';
import SASTandDAST from './pages/Services/offensiveSecurity/CodeSecurity/SASTandDAST';
import SourceCodeReview from './pages/Services/offensiveSecurity/CodeSecurity/SourceCodeReview';
import RedTeaming from './pages/Services/offensiveSecurity/AdvancedTesting/RedTeaming';
import VulnerabilityAssessment from './pages/Services/offensiveSecurity/AdvancedTesting/VulnerabilityAssessment';

// Infrastructure & Cloud Services
import NetworkSecurity from './pages/Services/infrastructure and cloud/NetworkSecurity/NetworkSecurity';
import WirelessSecurity from './pages/Services/infrastructure and cloud/NetworkSecurity/WirelessSecurity';

// Data Privacy Services
import ISO27018 from './pages/Services/dataPrivacy/PrivacyFrameworks/ISO27018';
import ISO27701 from './pages/Services/dataPrivacy/PrivacyFrameworks/ISO27701';

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

          {/* Industries */}
          <Route path="/industries/bfsi" element={<BFSI />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/industries/technology" element={<Technology />} />

          {/* RBI Regulatory Audit Services - Banking & Finance */}
          <Route path="/services/regulatory/rbi-cyber-framework" element={<RBICyberFramework />} />
          <Route path="/services/regulatory/rbi-nbfc-guidelines" element={<RBINBFCGuidelines />} />
          <Route path="/services/regulatory/rbi-payment-systems" element={<RBIPaymentSystems />} />

          {/* Capital Markets Regulatory Audit Services */}
          <Route path="/services/regulatory/bse-cyber-audit" element={<BSECyberAudit />} />
          <Route path="/services/regulatory/nse-cyber-audit" element={<NSECyberAudit />} />
          <Route path="/services/regulatory/sebi-cyber-audit" element={<SEBICyberAudit />} />

          {/* Offensive Security Services */}
          <Route path="/services/web-app-security" element={<WebAppSecurity />} />
          <Route path="/services/mobile-app-security" element={<MobileAppSecurity />} />
          <Route path="/services/api-security" element={<APISecurityTesting />} />
          <Route path="/services/sast-dast" element={<SASTandDAST />} />
          <Route path="/services/source-code-review" element={<SourceCodeReview />} />
          <Route path="/services/red-teaming" element={<RedTeaming />} />
          <Route path="/services/vulnerability-assessment" element={<VulnerabilityAssessment />} />

          {/* Infrastructure & Cloud Services */}
          <Route path="/services/network-security" element={<NetworkSecurity />} />
          <Route path="/services/wireless-security" element={<WirelessSecurity />} />

          {/* Data Privacy Services */}
          <Route path="/services/compliance/iso-27018" element={<ISO27018 />} />
          <Route path="/services/compliance/iso-27701" element={<ISO27701 />} />

          {/* Coming Soon Resources / Pages */}
          <Route path="/services/*" element={<ComingSoon />} />
          <Route path="/industries/*" element={<ComingSoon />} />
          <Route path="/resources/*" element={<ComingSoon />} />
          <Route path="/company/*" element={<ComingSoon />} />
          <Route path="/blog" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;