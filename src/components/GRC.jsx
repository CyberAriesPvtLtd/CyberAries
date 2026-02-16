import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./survey.css";

const questions = [
  "Does your organization have formally documented security policies approved by management?",
  "Are roles and responsibilities for information security clearly defined and communicated?",
  "Is risk assessment conducted periodically to identify and evaluate security risks?",
  "Are compliance requirements (ISO 27001, GDPR, DPDPA, etc.) identified and monitored regularly?",
  "Are employees trained regularly on security awareness and compliance obligations?",
  "Is there a formal incident response plan in place and tested periodically?",
  "Are third-party vendors assessed for security and compliance risks before onboarding?",
  "Are internal audits conducted to verify compliance with security policies and regulations?",
  "Is sensitive data classified and handled according to defined data protection standards?",
  "Are corrective actions tracked and implemented for identified security or compliance gaps?",
];

export default function GRC() {
  const [step, setStep] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[qIndex] = value;
    setAnswers(updated);

    if (qIndex === questions.length - 1) {
      setStep(3);
    } else {
      setQIndex(qIndex + 1);
    }
  };

  const score = answers.filter((a) => a === true).length * 10;
  const navigate = useNavigate();

  return (
    <div className="survey-bg">
      <div
        className="survey-card"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.92),
              rgba(255,255,255,0.92)
            ),
            url(${process.env.PUBLIC_URL}/survey-box-bg.jpg)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* STEP 0 */}
        {step === 0 && (
          <>
            <h1>GRC Compliance Survey</h1>
            <p>
              Evaluate your organization’s Governance, Risk, and Compliance
              posture against industry best practices.
            </p>
            <button className="survey-btn primary" onClick={() => setStep(1)}>
              Start Survey
            </button>
          </>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2>Before You Begin</h2>
            <p>• Answer all questions honestly</p>
            <p>• Takes less than 2 minutes</p>
            <button 
            className="survey-btn primary"
            onClick={() => setStep(2)}>Proceed</button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((qIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <p>
              {qIndex + 1} / {questions.length}
            </p>
            <h2>{questions[qIndex]}</h2>

            <div className="options">
              <button
               className="survey-btn primary"
              onClick={() => handleAnswer(true)}>Yes</button>
              <button 
               className="survey-btn secondary"
              onClick={() => handleAnswer(false)}>No</button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h1>Assessment Complete</h1>
            <p>Your GRC Compliance Score</p>

            <h2
              className={`score ${
                score >= 80 ? "high" : score >= 50 ? "medium" : "low"
              }`}
            >
              {score} / 100
            </h2>

            <p>
              {score >= 80 && "Excellent compliance posture."}
              {score >= 50 &&
                score < 80 &&
                "Moderate compliance – improvements recommended."}
              {score < 50 && "Low compliance – immediate action required."}
            </p>
            <button 
            className="survey-btn primary"
            onClick={() => navigate("/appointment")}>
              Book Consultation
            </button>
          </>
        )}
      </div>
    </div>
  );
}
