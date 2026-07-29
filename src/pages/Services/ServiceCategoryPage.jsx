import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceCategories } from '../../data/serviceCategories';
import './ServiceArchitecture.css';

// ------------------------------------------------------------------
// Reusable Service Category landing page.
//
// Route:  /services/:categorySlug
// Data:   src/data/serviceCategories.js
//
// Renders a dark enterprise hero (heading + intro pulled from the
// category's data entry) followed by a "Solution Domains" grid that
// reuses the site's existing global ".services" / ".service-card"
// design language. Each domain card links to its own
// /services/:categorySlug/:domainSlug page.
//
// This is the reusable template referenced in the architecture brief:
// the remaining five service categories can go live later by adding a
// new entry to serviceCategories.js — no changes needed here.
// ------------------------------------------------------------------

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const ServiceCategoryPage = ({ categorySlug: categorySlugProp }) => {
  const params = useParams();
  const categorySlug = categorySlugProp || params.categorySlug;
  const category = serviceCategories[categorySlug];

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-arch-page">
      {/* Hero */}
      <section className="service-arch-hero">
        <div className="container service-arch-hero-content">
          <Link to="/" className="service-arch-breadcrumb">
            Home <span>/</span> <span className="current">{category.heading}</span>
          </Link>

          <h1 className="service-arch-title">{category.heading}</h1>
          <p className="service-arch-description">{category.intro}</p>
        </div>
      </section>

      {/* Solution Domains */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Solution Domains</div>
            <h2 className="section-title">Choose Your Domain</h2>
            <p className="section-description">
              Select the domain relevant to your organization to explore the {category.heading.toLowerCase()} services available.
            </p>
          </div>

          <motion.div
            className="services-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -80px 0px' }}
          >
            {category.domains.map((domain) => (
              <motion.div className="service-card" key={domain.slug} variants={cardVariants}>
                <div className="service-card-inner">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <domain.icon size={30} strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="service-title">{domain.title}</h3>
                  </div>
                  <p className="service-description">{domain.description}</p>

                  {domain.comingSoon ? (
                    <span className="service-arch-card-btn service-arch-card-btn--disabled">
                      Coming Soon
                    </span>
                  ) : (
                    <Link to={`/services/${category.slug}/${domain.slug}`} className="service-arch-card-btn">
                      View Services
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCategoryPage;
