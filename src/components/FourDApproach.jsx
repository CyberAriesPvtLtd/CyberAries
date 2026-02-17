import { useEffect, useState, useRef } from "react";
import { Search, Lock, Shield, Share2 } from "lucide-react";
import "./FourDApproach.css";

const steps = [
  {
    title: "Deconstruct",
    desc: "Systematically analyze security incidents, breach patterns, and attack vectors to understand the root causes and impact of cyber threats.",
    icon: Search,
    stage: "Stage 1",
  },
  {
    title: "Decipher",
    desc: "Identify critical vulnerabilities, security gaps, and weaknesses in your infrastructure through detailed forensic analysis.",
    icon: Lock,
    stage: "Stage 2",
  },
  {
    title: "Develop",
    desc: "Design and implement robust security controls, protocols, and defensive strategies tailored to your organization's needs.",
    icon: Shield,
    stage: "Stage 3",
  },
  {
    title: "Disseminate",
    desc: "Share insights, strengthen security posture, and educate teams to ensure continuous improvement and resilience.",
    icon: Share2,
    stage: "Stage 4",
  },
];

export default function FourDApproach() {
  const [activeStep, setActiveStep] = useState(-1);
  const [progressWidth, setProgressWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateTimeline();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, [hasAnimated]);

  const animateTimeline = () => {
    setActiveStep(0);
    setProgressWidth(0);
    setTimeout(() => setProgressWidth(100), 100);
    setTimeout(() => setActiveStep(1), 2000);
    setTimeout(() => setActiveStep(2), 3000);
    setTimeout(() => setActiveStep(3), 4000);
  };

  // Mobile scroll-based activation
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return;
      const points = document.querySelectorAll(".timeline-point");
      points.forEach((point, index) => {
        const rect = point.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && activeStep < index) {
          setActiveStep(index);
        }
      });
    };

    if (window.innerWidth <= 768) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => window.removeEventListener("scroll", handleScroll);
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

        {/* Desktop Cards */}
        <div className="timeline-cards">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`timeline-card ${activeStep >= index ? "active" : ""}`}
              >
                {/* Light icon area - NOT heavy red block (issue 18) */}
                <div className="card-image-wrapper">
                  {/* Stage badge top-right (issue 20) */}
                  <span className="card-stage-badge">{step.stage}</span>
                  {/* Relevant icon with high contrast (issues 21, 22) */}
                  <div className="card-icon-main">
                    <Icon />
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-description">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Track */}
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
                  {/* Stage label - now prominent (issue 20) */}
                  <span className="point-stage">{step.stage}</span>
                  <div className="point-title">{step.title}</div>

                  {/* Mobile card - consistent structure for equal height (issue 23) */}
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