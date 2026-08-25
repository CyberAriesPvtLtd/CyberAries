import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { caseStudiesData } from './CaseStudies';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const item = caseStudiesData.find(cs => cs.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.title} | CyberAries`;
    } else {
      document.title = "Case Study Not Found | CyberAries";
    }
    window.scrollTo(0, 0);
  }, [item]);

  if (!item) {
    return (
      <div className="case-not-found">
        <div className="container text-center">
          <h2>Case Study Not Found</h2>
          <p>The engagement record you are looking for does not exist or has been moved.</p>
          <Link to="/resources/case-studies" className="back-to-cases-btn">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="case-detail-page">
      {/* 1. DARK HERO */}
      <section className="case-detail-hero bg-dark-cyber-detail-cases">
        <div className="tech-bg-effects">
          <div className="hero-cyber-grid-cases-detail"></div>
        </div>
        <div className="container case-detail-hero-content">
          <Link to="/resources/case-studies" className="back-link-cases">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          <span className="case-badge-category">{item.category}</span>
          <h1 className="case-title-heading">{item.title}</h1>
          <p className="case-subtitle-lead">{item.subtitle}</p>
        </div>
      </section>

      {/* 2. MAIN REPORT BODY */}
      <section className="case-body-section bg-white-grid-cases-detail">
        <div className="container case-editorial-container">
          
          {/* Section 01 — Overview */}
          <div className="case-report-block">
            <div className="report-num">01</div>
            <h3 className="report-heading">Overview</h3>
            <p className="report-text">
              {item.subtitle} CyberAries was engaged to address operational vulnerabilities, satisfy governance constraints, 
              and build key evidence metrics. All activities were designed around security baselines and long-term risk treatment goals.
            </p>
          </div>

          {/* Section 02 — The Challenge */}
          <div className="case-report-block">
            <div className="report-num">02</div>
            <h3 className="report-heading">The Challenge</h3>
            <p className="report-text">{item.challenge}</p>
          </div>

          {/* Section 03 — CyberAries Approach */}
          <div className="case-report-block">
            <div className="report-num">03</div>
            <h3 className="report-heading">CyberAries Approach</h3>
            <p className="report-text">
              We partnered with the client to implement a custom-fit assessment program, breaking tasks into manageable 
              phases spanning gap checks, policy review, manual validation, and executive control reporting.
            </p>
          </div>

          {/* Section 04 — Key Focus Areas */}
          <div className="case-report-block">
            <div className="report-num">04</div>
            <h3 className="report-heading">Key Focus Areas</h3>
            <div className="report-focus-grid">
              {item.engagement.map((area, idx) => (
                <div key={idx} className="focus-area-bullet">
                  <span className="focus-bullet-icon">
                    <CheckCircle size={16} />
                  </span>
                  <span className="focus-bullet-text">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 05 — Outcome */}
          <div className="case-report-block">
            <div className="report-num">05</div>
            <h3 className="report-heading">Outcome</h3>
            <p className="report-text">{item.outcome}</p>
          </div>

          {/* Section 06 — Related Services */}
          <div className="case-report-block related-services-block">
            <div className="report-num">06</div>
            <h3 className="report-heading">Related Services</h3>
            <div className="related-services-links">
              {item.relatedServices.map((service, index) => (
                <span key={index} className="related-service-chip">
                  {service.name}
                </span>
              ))}
            </div>
          </div>

          <div className="case-footer-nav">
            <Link to="/resources/case-studies" className="return-to-cases-btn">
              <ArrowLeft size={16} /> Return to Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
