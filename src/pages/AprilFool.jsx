import { useEffect, useState } from "react";
import "./AprilFool.css";
import { useRef } from "react";
import confetti from "canvas-confetti";
export default function AprilFool() {
  const [started, setStarted] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);
  const [showFinal, setShowFinal] = useState(false);
  const introRef = useRef(null);
  const lines = [
    "Initializing SentinelAI...",
    "Verifying secure environment...",
    "Analyzing system...",
    "Running deep scan...",
    "⚠ SYSTEM BREACH DETECTED — IMMEDIATE ACTION REQUIRED",
  ];

  useEffect(() => {
    if (!started) return;

    let i = 0;

    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[i]]);
      i++;

      if (i === lines.length) {
        clearInterval(interval);

        setTimeout(() => {
          setShowFinal(true);

          if (introRef.current) {
  introRef.current.style.display = "none";
}

        }, 1200);
        
      }
      
    }, 900);
    return () => clearInterval(interval);
  }, [started]

);
useEffect(() => {
  if (showFinal) {
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }
}, [showFinal]);

  return (
    <div className="af-wrapper">
  <p ref={introRef} className="af-intro">
      SentinelAI security check required.<br />
      Start scan to continue.
    </p>
      {!started && !showFinal &&(
       
        <button className="af-start" onClick={() => setStarted(true)}>
          Start Scan
        </button>
        
      )}

      {started && !showFinal && (
        <div className="af-terminal">
          {visibleLines.map((line, i) => (
            <p
              key={i}
              className={`af-line ${
                line?.toLowerCase().includes("breach")? "af-breach" : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      )}

      {showFinal && (
        <div className="af-final-box">
          <h1 className="af-final">😂 APRIL FOOL 😂</h1>

          
        </div>
      )}
    </div>
  );
}