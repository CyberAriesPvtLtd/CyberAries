import React from 'react';
import '../../styles/common/ApproachCard.css';

/**
 * ApproachCard Component
 * Reusable card for displaying methodology steps in 3x3 grid
 * 
 * @param {string|ReactNode} icon - Icon/Image for the card
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {string} number - Step number (required for timeline)
 */

const ApproachCard = ({ icon, title, description, number }) => {
  return (
    <div className="approach-card">
      {number && (
        <span className="approach-card-number">
          {number}
        </span>
      )}

      <div className="approach-icon-wrapper">
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} />
        ) : (
          icon
        )}
      </div>

      <h3 className="approach-title">{title}</h3>
      <p className="approach-description">{description}</p>
    </div>
  );
};

export default ApproachCard;