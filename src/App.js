import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './components/Home';
import Careers from './components/Careers';
import Footer from './components/Footer';
import About from './components/about';
import Contact from './components/contact';
import Appointment from './components/appointment';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

import ComingSoon from './pages/comingsoon.js';

import GRC from './components/GRC';
import DPDPA from './components/DPDPA';
import TPRM from './components/TPRM.jsx'

// Industries
import BFSI from './pages/industries/BFSI';
import Government from './pages/industries/Government';
import Technology from './pages/industries/Technology';
import Education from './pages/industries/Education';
import Healthcare from './pages/industries/Healthcare';
import Manufacturing from './pages/industries/Manufacturing';

// RBI Regulatory Audit Services - Banking & Finance
import RBICyberFramework from './pages/Services/regulatory audit/Banking & Finance/RBICyberFramework';
import RBINBFCGuidelines from './pages/Services/regulatory audit/Banking & Finance/RBINBFCGuidelines';
import RBIPaymentSystems from './pages/Services/regulatory audit/Banking & Finance/RBIPaymentSystems';

// Capital Markets Regulatory Audit Services
import BSECyberAudit from './pages/Services/regulatory audit/Capital Markets/BSECyberAudit';
import NSECyberAudit from './pages/Services/regulatory audit/Capital Markets/NSECyberAudit';
import SEBICyberAudit from './pages/Services/regulatory audit/Capital Markets/SEBICyberAudit';

// Government & Digital Regulatory Audit Services
import DataLocalizationAudit from './pages/Services/regulatory audit/Government & Digital/DataLocalizationAudit';
import IRDAIISNPAudit from './pages/Services/regulatory audit/Government & Digital/IRDAIISNPAudit';
import UIDAICompliance from './pages/Services/regulatory audit/Government & Digital/UIDAICompliance';

// Offensive Security Services
import WebAppSecurity from './pages/Services/offensiveSecurity/ApplicationSecurity/WebAppSecurity';
import MobileAppSecurity from './pages/Services/offensiveSecurity/ApplicationSecurity/MobileAppSecurity';
import APISecurityTesting from './pages/Services/offensiveSecurity/ApplicationSecurity/APISecurityTesting';
import ThickClientSecurity from './pages/Services/offensiveSecurity/ApplicationSecurity/ThickClientSecurity';
import SASTandDAST from './pages/Services/offensiveSecurity/CodeSecurity/SASTandDAST';
import SourceCodeReview from './pages/Services/offensiveSecurity/CodeSecurity/SourceCodeReview';
import RedTeaming from './pages/Services/offensiveSecurity/AdvancedTesting/RedTeaming';
import VulnerabilityAssessment from './pages/Services/offensiveSecurity/AdvancedTesting/VulnerabilityAssessment';

// Infrastructure & Cloud Services - Cloud Security
import CloudConfigReview from './pages/Services/infrastructure and cloud/CloudSecurity/CloudConfigReview';
import CloudPenetrationTesting from './pages/Services/infrastructure and cloud/CloudSecurity/CloudPenetrationTesting';
import ContainerK8sSecurity from './pages/Services/infrastructure and cloud/CloudSecurity/ContainerK8sSecurity';

// Infrastructure & Cloud Services - IT Infrastructure
import NetworkArchitectureDesign from './pages/Services/infrastructure and cloud/ITInfrastructure/NetworkArchitectureDesign';
import ServerStorageSetup from './pages/Services/infrastructure and cloud/ITInfrastructure/ServerStorageSetup';
import VisualizationSetup from './pages/Services/infrastructure and cloud/ITInfrastructure/VisualizationSetup';
import EndpointManagement from './pages/Services/infrastructure and cloud/ITInfrastructure/EndpointManagement';

// Infrastructure & Cloud Services - Network Security
import NetworkSecurity from './pages/Services/infrastructure and cloud/NetworkSecurity/NetworkSecurity';
import WirelessSecurity from './pages/Services/infrastructure and cloud/NetworkSecurity/WirelessSecurity';
import FirewallRuleReview from './pages/Services/infrastructure and cloud/NetworkSecurity/FirewallRuleReview';

// Data Privacy Services - Privacy Frameworks
import ISO27018 from './pages/Services/dataPrivacy/PrivacyFrameworks/ISO27018';
import ISO27701 from './pages/Services/dataPrivacy/PrivacyFrameworks/ISO27701';

// Data Privacy Services - Global Privacy Laws
import GDPRCompliance from './pages/Services/dataPrivacy/Global Privacy Laws/GDPRCompliance';
import CCPACompliance from './pages/Services/dataPrivacy/Global Privacy Laws/CCPACompliance';
import HIPAACompliance from './pages/Services/dataPrivacy/Global Privacy Laws/HIPAACompliance';

// Data Privacy Services - Indian Privacy Laws
import DPDPActCompliance from './pages/Services/dataPrivacy/Indian Privacy Laws/DPDPActCompliance';
import DPIAServices from './pages/Services/dataPrivacy/Indian Privacy Laws/DPIAServices';

// Strategic Consulting - Forensics & Recovery
import ForensicAudit from './pages/Services/strategicConsulting/Forensics and Recovery/ForensicAudit';
import RansomwareRecovery from './pages/Services/strategicConsulting/Forensics and Recovery/RansomwareRecovery';

// Strategic Consulting - Managed Leadership
import VirtualCISO from './pages/Services/strategicConsulting/Managed Leadership/VirtualCISO';
import DPOAsAService from './pages/Services/strategicConsulting/Managed Leadership/DPOAsAService';

// Strategic Consulting - US Federal Standards
import NIST80053 from './pages/Services/strategicConsulting/US Federal Standards/NIST80053';
import NIST800171 from './pages/Services/strategicConsulting/US Federal Standards/NIST800171';

// Compliance Services - ISO Standards
import ISO27001 from './pages/Services/compliance/ISO Standards/ISO27001';
import ISO22301 from './pages/Services/compliance/ISO Standards/ISO22301';
import ISO20000 from './pages/Services/compliance/ISO Standards/ISO20000';
import ISO42001 from './pages/Services/compliance/ISO Standards/ISO42001';

// Compliance Services - Global Attestations
import SOC1 from './pages/Services/compliance/Global Attestations/SOC1';
import SOC2 from './pages/Services/compliance/Global Attestations/SOC2';
import PCIDSS from './pages/Services/compliance/Global Attestations/PCIDSS';
import SWIFTAssessment from './pages/Services/compliance/Global Attestations/SWIFTAssessment';
import FedRAMPAssessment from './pages/Services/compliance/Global Attestations/FedRAMPAssessment';

import './App.css';

function App() {
  useEffect(() => {
    // Only disable in production
     if (process.env.NODE_ENV === "production") {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.ctrlKey && e.key === "J") ||
      (e.ctrlKey && e.key === "u")
    ) {
      e.preventDefault();
    }
  };

  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("keydown", handleKeyDown);
  };
}
}, []);
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />

          {/* RBI Regulatory Audit Services - Banking & Finance */}
          <Route path="/services/regulatory/rbi-cyber-framework" element={<RBICyberFramework />} />
          <Route path="/services/regulatory/rbi-nbfc-guidelines" element={<RBINBFCGuidelines />} />
          <Route path="/services/regulatory/rbi-payment-systems" element={<RBIPaymentSystems />} />

          {/* Capital Markets Regulatory Audit Services */}
          <Route path="/services/regulatory/bse-cyber-audit" element={<BSECyberAudit />} />
          <Route path="/services/regulatory/nse-cyber-audit" element={<NSECyberAudit />} />
          <Route path="/services/regulatory/sebi-cyber-audit" element={<SEBICyberAudit />} />

          {/* Government & Digital Regulatory Audit Services */}
          <Route path="/services/regulatory/data-localization" element={<DataLocalizationAudit />} />
          <Route path="/services/regulatory/irdai-isnp" element={<IRDAIISNPAudit />} />
          <Route path="/services/regulatory/uidai-compliance" element={<UIDAICompliance />} />

          {/* Offensive Security Services */}
          <Route path="/services/web-app-security" element={<WebAppSecurity />} />
          <Route path="/services/mobile-app-security" element={<MobileAppSecurity />} />
          <Route path="/services/thick-client-security" element={<ThickClientSecurity />} />
          <Route path="/services/api-security" element={<APISecurityTesting />} />
          <Route path="/services/sast-dast" element={<SASTandDAST />} />
          <Route path="/services/source-code-review" element={<SourceCodeReview />} />
          <Route path="/services/red-teaming" element={<RedTeaming />} />
          <Route path="/services/vulnerability-assessment" element={<VulnerabilityAssessment />} />

          {/* Infrastructure & Cloud Services - Cloud Security */}
          <Route path="/services/cloud/config-review" element={<CloudConfigReview />} />
          <Route path="/services/cloud/penetration-testing" element={<CloudPenetrationTesting />} />
          <Route path="/services/cloud/container-k8s-security" element={<ContainerK8sSecurity />} />

          {/* Infrastructure & Cloud Services - IT Infrastructure */}
          <Route path="/services/infrastructure/network-architecture" element={<NetworkArchitectureDesign />} />
          <Route path="/services/infrastructure/server-storage" element={<ServerStorageSetup />} />
          <Route path="/services/infrastructure/virtualization" element={<VisualizationSetup />} />
          <Route path="/services/infrastructure/endpoint-management" element={<EndpointManagement />} />

          {/* Infrastructure & Cloud Services - Network Security */}
          <Route path="/services/network-security" element={<NetworkSecurity />} />
          <Route path="/services/wireless-security" element={<WirelessSecurity />} />
          <Route path="/services/firewall-rule-review" element={<FirewallRuleReview />} />

          {/* Data Privacy Services - Privacy Frameworks */}
          <Route path="/services/compliance/iso-27018" element={<ISO27018 />} />
          <Route path="/services/compliance/iso-27701" element={<ISO27701 />} />

          {/* Data Privacy Services - Global Privacy Laws */}
          <Route path="/services/privacy/gdpr" element={<GDPRCompliance />} />
          <Route path="/services/privacy/ccpa" element={<CCPACompliance />} />
          <Route path="/services/privacy/hipaa" element={<HIPAACompliance />} />

          {/* Data Privacy Services - Indian Privacy Laws */}
          <Route path="/services/privacy/dpdp" element={<DPDPActCompliance />} />
          <Route path="/services/privacy/dpia" element={<DPIAServices />} />

          {/* Strategic Consulting - Forensics & Recovery */}
          <Route path="/services/consulting/forensic-audit" element={<ForensicAudit />} />
          <Route path="/services/consulting/ransomware-recovery" element={<RansomwareRecovery />} />

          {/* Strategic Consulting - Managed Leadership */}
          <Route path="/services/consulting/virtual-ciso" element={<VirtualCISO />} />
          <Route path="/services/consulting/dpo-service" element={<DPOAsAService />} />

          {/* Strategic Consulting - US Federal Standards */}
          <Route path="/services/consulting/nist-800-53" element={<NIST80053 />} />
          <Route path="/services/consulting/nist-800-171" element={<NIST800171 />} />

          {/* Compliance Services - ISO Standards */}
          <Route path="/services/compliance/iso-27001" element={<ISO27001 />} />
          <Route path="/services/compliance/iso-22301" element={<ISO22301 />} />
          <Route path="/services/compliance/iso-20000" element={<ISO20000 />} />
          <Route path="/services/compliance/iso-42001" element={<ISO42001 />} />

          {/* Compliance Services - Global Attestations */}
          <Route path="/services/soc-compliance/soc-1" element={<SOC1 />} />
          <Route path="/services/soc-compliance/soc-2" element={<SOC2 />} />
          <Route path="/services/compliance/pci-dss" element={<PCIDSS />} />
          <Route path="/services/compliance/swift" element={<SWIFTAssessment />} />
          <Route path="/services/compliance/fedramp" element={<FedRAMPAssessment />} />

          {/* Resources - Survey */}
          <Route path="/resources/survey/grc" element={<GRC />} />
          <Route path="/resources/survey/dpdpa" element={<DPDPA />} />
          <Route path="/resources/survey/tprm" element={<TPRM />} />

          {/* Resources */}
          <Route path="/resources/case-studies" element={<ComingSoon />} />
          <Route path="/resources/blogs" element={<ComingSoon />} />
          <Route path="/resources/news" element={<ComingSoon />} />
          <Route path="/resources/download" element={<ComingSoon />} />

          {/* Coming Soon catch-all routes */}
          <Route path="/services" element={<ComingSoon />} />
          <Route path="/services/*" element={<ComingSoon />} />
          <Route path="/industries/*" element={<ComingSoon />} />
          <Route path="/resources/*" element={<ComingSoon />} />
          <Route path="/company/*" element={<ComingSoon />} />
          <Route path="/blog" element={<ComingSoon />} />

          {/* Fallback for undefined routes - MUST BE LAST */}
          <Route path="*" element={<ComingSoon />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;