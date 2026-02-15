import { useEffect, useState, useRef } from "react";
import { Search, Lock, FileCheck, Share2 } from "lucide-react";
import "./FourDApproach.css";


const steps = [
  { 
    title: "Deconstruct", 
    desc: "Systematically analyze security incidents, breach patterns, and attack vectors to understand the root causes and impact of cyber threats.",
    icon: Search,
    date: "Stage 1",
    // You can replace these with actual image paths
    image: "/images/deconstruct.jpg" // Replace with your image path
  },
  { 
    title: "Decipher", 
    desc: "Identify critical vulnerabilities, security gaps, and weaknesses in your infrastructure through detailed forensic analysis.",
    icon: Lock,
    date: "Stage 2",
    image: "/images/decipher.jpg" // Replace with your image path
  },
  { 
    title: "Develop", 
    desc: "Design and implement robust security controls, protocols, and defensive strategies tailored to your organization's needs.",
    icon: FileCheck,
    date: "Stage 3",
    image: "/images/develop.jpg" // Replace with your image path
  },
  { 
    title: "Disseminate", 
    desc: "Share insights, strengthen security posture, and educate teams to ensure continuous improvement and resilience.",
    icon: Share2,
    date: "Stage 4",
    image: "/images/disseminate.jpg" // Replace with your image path
  },
];

export default function FourDApproach() {
  const [activeStep, setActiveStep] = useState(-1);
  const [progressWidth, setProgressWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current; // Store ref value
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateTimeline();
            setHasAnimated(true); // Mark as animated
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  const animateTimeline = () => {
    setActiveStep(0);
    setProgressWidth(0);

    // Line flows smoothly over 8 seconds
    setTimeout(() => {
      setProgressWidth(100);
    }, 100);

    // Dots activate EXACTLY when line reaches them
  setTimeout(() => setActiveStep(1), 2000);  // 200ms early
  setTimeout(() => setActiveStep(2), 3000);  // 200ms early
  setTimeout(() => setActiveStep(3), 4000);  // 200ms early
  };

  // Scroll-based animation for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return; // Only on mobile

      const points = document.querySelectorAll('.timeline-point');
      
      points.forEach((point, index) => {
        const rect = point.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.7; // Activate when 70% in view
        
        if (isInView && activeStep < index) {
          setActiveStep(index);
        }
      });
    };

    if (window.innerWidth <= 768) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeStep]);
  return (
    <section className="four-d-timeline" ref={sectionRef}>
      <div className="timeline-container">
        {/* Header */}
        <div className="timeline-header">
          <h2 className="timeline-title">4D Approach to Forensics-Driven Cybersecurity</h2>
          <p className="timeline-subtitle">
            A systematic methodology transforming security incidents into actionable intelligence
          </p>
        </div>

        {/* Cards Section */}
        <div className="timeline-cards">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className={`timeline-card ${activeStep >= index ? "active" : ""}`}
              >
                {/* Image Section */}
                <div className="card-image-wrapper">
                  <div className="card-image">
                    {/* Custom illustrated scene for each stage */}
                    {index === 0 && (
                      // Deconstruct - Magnifying glass examining data/code
                      <svg viewBox="0 0 400 300" className="card-illustration">
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#D92344', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#ff4f6d', stopOpacity: 1}} />
                          </linearGradient>
                        </defs>
                        {/* Background */}
                        <rect width="400" height="300" fill="url(#grad1)" />
                        {/* Code lines */}
                        <rect x="40" y="80" width="120" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                        <rect x="40" y="100" width="90" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                        <rect x="40" y="120" width="140" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                        <rect x="40" y="140" width="100" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                        {/* Magnifying glass */}
                        <circle cx="280" cy="160" r="50" fill="none" stroke="white" strokeWidth="8" />
                        <line x1="315" y1="195" x2="350" y2="230" stroke="white" strokeWidth="8" strokeLinecap="round" />
                        {/* Highlighted code inside magnifying glass */}
                        <rect x="245" y="145" width="60" height="6" rx="3" fill="white" opacity="0.8" />
                        <rect x="245" y="160" width="50" height="6" rx="3" fill="white" opacity="0.8" />
                        <rect x="245" y="175" width="55" height="6" rx="3" fill="white" opacity="0.8" />
                      </svg>
                    )}
                    
                    {index === 1 && (
                      // Decipher - Lock with key and security shield
                      <svg viewBox="0 0 400 300" className="card-illustration">
                        <defs>
                          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#D92344', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#ff4f6d', stopOpacity: 1}} />
                          </linearGradient>
                        </defs>
                        {/* Background */}
                        <rect width="400" height="300" fill="url(#grad2)" />
                        {/* Shield outline */}
                        <path d="M200 60 L280 90 L280 160 Q280 200 200 240 Q120 200 120 160 L120 90 Z" 
                              fill="none" stroke="white" strokeWidth="6" opacity="0.3" />
                        {/* Lock body */}
                        <rect x="170" y="140" width="60" height="70" rx="8" fill="white" />
                        {/* Lock shackle */}
                        <path d="M180 140 L180 110 Q180 90 200 90 Q220 90 220 110 L220 140" 
                              fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
                        {/* Keyhole */}
                        <circle cx="200" cy="165" r="8" fill="#D92344" />
                        <rect x="196" y="170" width="8" height="20" rx="2" fill="#D92344" />
                        {/* Vulnerability icons (small crosses) */}
                        <g opacity="0.5">
                          <line x1="140" y1="120" x2="150" y2="130" stroke="white" strokeWidth="3" />
                          <line x1="150" y1="120" x2="140" y2="130" stroke="white" strokeWidth="3" />
                          
                          <line x1="250" y1="120" x2="260" y2="130" stroke="white" strokeWidth="3" />
                          <line x1="260" y1="120" x2="250" y2="130" stroke="white" strokeWidth="3" />
                        </g>
                      </svg>
                    )}
                    
                    {index === 2 && (
                      // Develop - Building blocks/construction with gears
                      <svg viewBox="0 0 400 300" className="card-illustration">
                        <defs>
                          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#D92344', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#ff4f6d', stopOpacity: 1}} />
                          </linearGradient>
                        </defs>
                        {/* Background */}
                        <rect width="400" height="300" fill="url(#grad3)" />
                        {/* Building blocks */}
                        <rect x="80" y="180" width="70" height="60" rx="8" fill="white" opacity="0.9" />
                        <rect x="160" y="180" width="70" height="60" rx="8" fill="white" opacity="0.7" />
                        <rect x="240" y="180" width="70" height="60" rx="8" fill="white" opacity="0.9" />
                        
                        <rect x="120" y="130" width="70" height="60" rx="8" fill="white" opacity="0.8" />
                        <rect x="200" y="130" width="70" height="60" rx="8" fill="white" opacity="0.8" />
                        
                        <rect x="160" y="80" width="70" height="60" rx="8" fill="white" />
                        
                        {/* Gear 1 */}
                        <g transform="translate(115, 160)">
                          <circle r="15" fill="#D92344" />
                          <circle r="8" fill="white" />
                        </g>
                        
                        {/* Gear 2 */}
                        <g transform="translate(235, 160)">
                          <circle r="18" fill="#D92344" />
                          <circle r="10" fill="white" />
                        </g>
                        
                        {/* Check mark on top block */}
                        <path d="M175 105 L185 115 L205 95" fill="none" stroke="#D92344" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    
                    {index === 3 && (
                      // Disseminate - Network nodes with connections spreading outward
                      <svg viewBox="0 0 400 300" className="card-illustration">
                        <defs>
                          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#D92344', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#ff4f6d', stopOpacity: 1}} />
                          </linearGradient>
                        </defs>
                        {/* Background */}
                        <rect width="400" height="300" fill="url(#grad4)" />
                        
                        {/* Connection lines */}
                        <line x1="200" y1="150" x2="120" y2="100" stroke="white" strokeWidth="3" opacity="0.5" />
                        <line x1="200" y1="150" x2="280" y2="100" stroke="white" strokeWidth="3" opacity="0.5" />
                        <line x1="200" y1="150" x2="100" y2="200" stroke="white" strokeWidth="3" opacity="0.5" />
                        <line x1="200" y1="150" x2="300" y2="200" stroke="white" strokeWidth="3" opacity="0.5" />
                        <line x1="200" y1="150" x2="200" y2="80" stroke="white" strokeWidth="3" opacity="0.5" />
                        <line x1="200" y1="150" x2="200" y2="220" stroke="white" strokeWidth="3" opacity="0.5" />
                        
                        {/* Outer nodes */}
                        <circle cx="120" cy="100" r="20" fill="white" opacity="0.8" />
                        <circle cx="280" cy="100" r="20" fill="white" opacity="0.8" />
                        <circle cx="100" cy="200" r="20" fill="white" opacity="0.8" />
                        <circle cx="300" cy="200" r="20" fill="white" opacity="0.8" />
                        <circle cx="200" cy="80" r="20" fill="white" opacity="0.8" />
                        <circle cx="200" cy="220" r="20" fill="white" opacity="0.8" />
                        
                        {/* Center node (largest) */}
                        <circle cx="200" cy="150" r="35" fill="white" />
                        
                        {/* Share icon in center */}
                        <g transform="translate(200, 150)">
                          <circle cx="0" cy="-8" r="4" fill="#D92344" />
                          <circle cx="-7" cy="4" r="4" fill="#D92344" />
                          <circle cx="7" cy="4" r="4" fill="#D92344" />
                          <line x1="0" y1="-4" x2="-5" y2="2" stroke="#D92344" strokeWidth="2" />
                          <line x1="0" y1="-4" x2="5" y2="2" stroke="#D92344" strokeWidth="2" />
                        </g>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="card-content">
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-description">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="timeline-track">
          <div className="timeline-line">
            <div 
              className="timeline-progress"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>

          <div className="timeline-points">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`timeline-point ${activeStep >= index ? "active" : ""}`}
              >
                <div className="point-dot"></div>
                <div className="point-label">
                  <div className="point-title">{step.title}</div>
                  <div className="point-date">{step.date}</div>
                  
                  {/* Mobile Card - Shows description */}
                  <div className="mobile-card">
                    <p className="mobile-card-description">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}