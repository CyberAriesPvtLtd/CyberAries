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

// RBI Regulatory Audit Services - Banking & Finance
import RBICyberFramework from './pages/Services/regulatory audit/Banking & Finance/RBICyberFramework';
import RBINBFCGuidelines from './pages/Services/regulatory audit/Banking & Finance/RBINBFCGuidelines';
import RBIPaymentSystems from './pages/Services/regulatory audit/Banking & Finance/RBIPaymentSystems';

// Capital Markets Regulatory Audit Services
import BSECyberAudit from './pages/Services/regulatory audit/Capital Markets/BSECyberAudit';
import NSECyberAudit from './pages/Services/regulatory audit/Capital Markets/NSECyberAudit';
import SEBICyberAudit from './pages/Services/regulatory audit/Capital Markets/SEBICyberAudit';

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

          {/* RBI Regulatory Audit Services - Banking & Finance */}
          <Route path="/services/regulatory/rbi-cyber-framework" element={<RBICyberFramework />} />
          <Route path="/services/regulatory/rbi-nbfc-guidelines" element={<RBINBFCGuidelines />} />
          <Route path="/services/regulatory/rbi-payment-systems" element={<RBIPaymentSystems />} />

          {/* Capital Markets Regulatory Audit Services */}
          <Route path="/services/regulatory/bse-cyber-audit" element={<BSECyberAudit />} />
          <Route path="/services/regulatory/nse-cyber-audit" element={<NSECyberAudit />} />
          <Route path="/services/regulatory/sebi-cyber-audit" element={<SEBICyberAudit />} />

          {/* Add other service routes here as you create them */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;