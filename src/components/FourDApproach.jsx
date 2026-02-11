import { useEffect, useState, useRef } from "react";
import "./FourDApproach.css";

const steps = [
  { title: "Deconstruct", desc: "the incidents and breaches", icon: "⚙️" },
  { title: "Decipher", desc: "the loopholes", icon: "🔍" },
  { title: "Develop", desc: "the essential controls", icon: "📝" },
  { title: "Disseminate", desc: "the learnings", icon: "🛡️" },
];

export default function FourDApproach() {
  const [activeStep, setActiveStep] = useState(-1);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When section comes into view
          if (entry.isIntersecting) {
            // Reset animation
            setActiveStep(-1);


            // Start animation after a small delay
            setTimeout(() => {
              animateSteps();
            }, 200);
          } else {
            // When section leaves view, reset for next time
            setActiveStep(-1);

          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "0px",
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const animateSteps = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < steps.length) {
        setActiveStep(index);
        index++;
      } else {
        clearInterval(interval);

      }
    }, 600); // Smooth 600ms delay between each step
  };

  return (
    <section className="four-d" ref={sectionRef}>
      <h2 className="four-d-title">4D approach to Forensics-driven Cybersecurity</h2>

      <div className="four-d-path">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`four-d-step ${activeStep >= index ? "active" : ""}`}
          >
            <div
              className="four-d-card"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = ((y - rect.height / 2) / rect.height) * -8;
                const rotateY = ((x - rect.width / 2) / rect.width) * 8;

                card.style.transform = `
                  perspective(1200px)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  translateZ(15px)
                  scale(1.02)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)";
              }}
            >
              <div className="icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>

            {index !== steps.length - 1 && (
              <span
                className={`line ${activeStep > index ? "draw" : ""}`}
              ></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}