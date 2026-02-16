import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./survey.css";
const questions = [
  "Does your organization have a documented Privacy Policy?",
  "Is explicit consent obtained before collecting personal data?",
  "Is personal data stored securely?",
  "Is access to personal data role-based?",
  "Are employees trained on data privacy?",
  "Is a data retention policy defined?",
  "Is a breach response plan available?",
  "Are third-party vendors assessed?",
  "Is data encrypted at rest?",
  "Is compliance reviewed periodically?",
];

const cardStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)),
    url(${process.env.PUBLIC_URL}/survey-box-bg.jpg)
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function DPDPA() {
  const [state, setState] = useState({
    step: 0,
    index: 0,
    answers: Array(questions.length).fill(null),
  });

  const handleAnswer = useCallback((value) => {
    setState(prev => {
      const answers = [...prev.answers];
      answers[prev.index] = value;

      const isLast = prev.index === questions.length - 1;

      return {
        ...prev,
        answers,
        index: isLast ? prev.index : prev.index + 1,
        step: isLast ? 3 : prev.step,
      };
    });
  }, []);

  const score = useMemo(() => {
    return state.answers.filter(Boolean).length * 10;
  }, [state.answers]);
  const navigate = useNavigate();

  return (
    <div className="survey-bg">
      <div className="survey-card" style={cardStyle}>

        {state.step === 0 && (
          <>
            <h1>DPDPA Compliance Survey</h1>
            <p>
              Assess your organization’s readiness under the Digital Personal
              Data Protection Act.
            </p>
            <button 
            className="survey-btn primary"
            onClick={() => setState(s => ({ ...s, step: 1 }))}>
              Start Survey
            </button>
          </>
        )}

        {state.step === 1 && (
          <>
            <h2>Before You Begin</h2>
            <p>• Answer all questions honestly</p>
            <p>• Each question is mandatory</p>
            <p>• Takes less than 2 minutes</p>
            <button 
            className="survey-btn primary"
            onClick={() => setState(s => ({ ...s, step: 2 }))}>
              Proceed
            </button>
          </>
        )}

        {state.step === 2 && (
          <>
                <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${((state.index + 1) / questions.length) * 100}%` }} />
</div>
                
            <p>{state.index + 1} / {questions.length}</p>
            <h2>{questions[state.index]}</h2>

            <div className="options">
              <button className="survey-btn primary" onClick={() => handleAnswer(true)}>Yes</button>
              <button className="survey-btn secondary" onClick={() => handleAnswer(false)}>No</button>
            </div>
          </>
        )}

        {state.step === 3 && (
          <>
            <h1>Assessment Complete</h1>
                <p>Your GRC Compliance Score</p>
            
                <h2
                  className={`score ${
                    score >= 80
                      ? "high"
                      : score >= 50
                      ? "medium"
                      : "low"
                  }`}
                >
                  {score} / 100
                </h2>
                <p>
                  {score >= 80 && "Excellent compliance posture."}
                  {score >= 50 && score < 80 && "Moderate compliance – improvements recommended."}
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
