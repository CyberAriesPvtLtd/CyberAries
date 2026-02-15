import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, ArrowLeft, Clock } from 'lucide-react';
import './ComingSoon.css';

const ComingSoon = ({ 
  pageName = "This Feature", 
  launchDate = null, // Format: "2026-03-15" or null for no countdown
  description = "We're working hard to bring you something amazing!"
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!launchDate) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(launchDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="coming-soon-wrapper">
      {/* Animated Background */}
      <div className="cs-background">
        <div className="cs-grid"></div>
      </div>

      <div className="coming-soon-container">
        {/* Logo/Brand Section (Optional) */}
        <div className="cs-brand">
          <div className="cs-logo-circle">
            <Clock size={48} />
          </div>
        </div>

        {/* Main Content */}
        <div className="cs-content">
          <div className="cs-badge">Coming Soon</div>
          
          <h1 className="cs-title">{pageName}</h1>
          <p className="cs-description">{description}</p>

          {/* Countdown Timer */}
          {launchDate && (
            <div className="cs-countdown">
              <div className="cs-countdown-item">
                <div className="cs-countdown-number">{timeLeft.days}</div>
                <div className="cs-countdown-label">Days</div>
              </div>
              <div className="cs-countdown-separator">:</div>
              <div className="cs-countdown-item">
                <div className="cs-countdown-number">{timeLeft.hours}</div>
                <div className="cs-countdown-label">Hours</div>
              </div>
              <div className="cs-countdown-separator">:</div>
              <div className="cs-countdown-item">
                <div className="cs-countdown-number">{timeLeft.minutes}</div>
                <div className="cs-countdown-label">Minutes</div>
              </div>
              <div className="cs-countdown-separator">:</div>
              <div className="cs-countdown-item">
                <div className="cs-countdown-number">{timeLeft.seconds}</div>
                <div className="cs-countdown-label">Seconds</div>
              </div>
            </div>
          )}

          {/* Email Notification (Optional) */}
          <div className="cs-notify-section">
            <h3 className="cs-notify-title">Get Notified When We Launch</h3>
            <form className="cs-notify-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="cs-email-input"
                required
              />
              <button type="submit" className="cs-notify-btn">
                <Mail size={20} />
                <span>Notify Me</span>
              </button>
            </form>
          </div>

          {/* Navigation Buttons */}
          <div className="cs-actions">
            <Link to="/" className="cs-btn cs-btn-primary">
              <Home size={20} />
              <span>Back to Home</span>
            </Link>
            <button onClick={() => window.history.back()} className="cs-btn cs-btn-secondary">
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="cs-footer">
          <p>In the meantime, explore our other services</p>
          <div className="cs-social-links">
            {/* Add your social links */}
            <a href="#" className="cs-social-link">Twitter</a>
            <a href="#" className="cs-social-link">LinkedIn</a>
            <a href="#" className="cs-social-link">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;