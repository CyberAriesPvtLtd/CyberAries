import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { solutionDomains } from '../../data/solutionDomains';
import './ServiceArchitecture.css';

// ------------------------------------------------------------------
// Reusable Solution Domain landing page.
//
// Route:  /services/:categorySlug/:domainSlug
// Data:   src/data/solutionDomains.js
//
// Renders a dark enterprise hero followed by a service cards grid
// (reusing the site's existing global ".services" / ".service-card"
// design language). Each service card's "Know More" button links
// straight to the already-existing, already-built detailed service
// page — no service detail pages are created or duplicated here.
//
// This is the reusable template referenced in the architecture brief:
// the remaining solution domains can go live later by adding a new
// entry to solutionDomains.js — no changes needed here.
// ------------------------------------------------------------------

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const SolutionDomainPage = ({ categorySlug: categorySlugProp, domainSlug: domainSlugProp }) => {
  const params = useParams();
  const categorySlug = categorySlugProp || params.categorySlug;
  const domainSlug = domainSlugProp || params.domainSlug;
  const domain = solutionDomains[`${categorySlug}/${domainSlug}`];

  if (!domain) {
    return <Navigate to={`/services/${categorySlug}`} replace />;
  }

  return (
    <div className="service-arch-page">
      {/* Hero */}
      <section className="service-arch-hero">
        <div className="container service-arch-hero-content">
          <Link to={`/services/${domain.categorySlug}`} className="service-arch-breadcrumb">
            {domain.categoryLabel} <span>/</span> <span className="current">{domain.heading}</span>
          </Link>

          <h1 className="service-arch-title">{domain.heading}</h1>
          <p className="service-arch-description">{domain.intro}</p>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Our Services</div>
            <h2 className="section-title">{domain.heading} Services</h2>
            <p className="section-description">
              Explore our {domain.heading.toLowerCase()} audit services and find the one that fits your regulatory obligations.
            </p>
          </div>

          <motion.div
            className="services-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -80px 0px' }}
          >
            {domain.services.map((service) => (
              <motion.div className="service-card" key={service.title} variants={cardVariants}>
                <div className="service-card-inner">
                  <div className="service-card-header">
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>

                  <Link to={service.link} className="service-arch-card-btn">
                    Know More
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDomainPage;
