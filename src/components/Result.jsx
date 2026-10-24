import { useState } from "react";
import Review from "./Review.jsx";

function getMessage(percent) {
  if (percent === 100) return "Perfect score! You're a true master! 🏆";
  if (percent >= 80) return "Excellent work! You really know your stuff! 🎉";
  if (percent >= 60) return "Good job! A little more practice and you'll ace it. 👍";
  if (percent >= 40) return "Not bad, but there's room to improve. Keep learning! 📚";
  return "Don't give up! Review the topics and try again. 💪";
}

// Results screen: score, correct vs incorrect, message, review and restart.
function Result({ quiz, answers, timedOut, onRestart }) {
  const [showReview, setShowReview] = useState(false);

  const total = quiz.length;
  const correct = quiz.filter((q, i) => answers[i] === q.answer).length;
  const incorrect = total - correct;
  const percent = Math.round((correct / total) * 100);

  return (
    <div className="card result-screen">
      <h1 className="title">Quiz Complete!</h1>
      {timedOut && <p className="time-up">⏰ Time's up!</p>}

      <div className="score-circle">
        <span className="score-number">
          {correct}/{total}
        </span>
        <span className="score-percent">{percent}%</span>
      </div>

      <p className="result-message">{getMessage(percent)}</p>

      <div className="info-row">
        <div className="info-box good">
          <strong>{correct}</strong>
          <span>Correct</span>
        </div>
        <div className="info-box bad">
          <strong>{incorrect}</strong>
          <span>Incorrect</span>
        </div>
      </div>

      <div className="button-row">
        <button
          type="button"
          className="btn secondary"
          onClick={() => setShowReview((prev) => !prev)}
        >
          {showReview ? "Hide Review" : "Review Answers"}
        </button>
        <button type="button" className="btn primary" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>

      {showReview && <Review quiz={quiz} answers={answers} />}
    </div>
  );
}

export default Result;
