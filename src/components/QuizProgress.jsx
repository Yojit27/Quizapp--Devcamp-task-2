// Shows "3 / 10" and a progress bar.
function QuizProgress({ current, total }) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="quiz-progress">
      <p className="progress-label">
        Question {current} / {total}
      </p>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
      >
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default QuizProgress;
