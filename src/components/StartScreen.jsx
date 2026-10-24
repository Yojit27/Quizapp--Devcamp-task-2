import { CATEGORIES, DIFFICULTIES } from "../data/questions.js";

// Home screen: title, description, total questions, filters and Start button.
function StartScreen({
  totalQuestions,
  timeMinutes,
  category,
  difficulty,
  onCategoryChange,
  onDifficultyChange,
  onStart,
}) {
  return (
    <div className="card start-screen">
      <h1 className="title">Interactive Quiz</h1>
      <p className="description">
        Test your knowledge of JavaScript, React and HTML/CSS. Answer
        multiple-choice questions, beat the clock and see how well you score.
      </p>

      <div className="info-row">
        <div className="info-box">
          <strong>{totalQuestions}</strong>
          <span>Questions</span>
        </div>
        <div className="info-box">
          <strong>{timeMinutes} min</strong>
          <span>Time limit</span>
        </div>
      </div>

      <div className="filter-group">
        <p className="filter-label">Category</p>
        <div className="chips">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              className={`chip ${category === item ? "active" : ""}`}
              onClick={() => onCategoryChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <p className="filter-label">Difficulty</p>
        <div className="chips">
          {DIFFICULTIES.map((item) => (
            <button
              key={item}
              type="button"
              className={`chip ${difficulty === item ? "active" : ""}`}
              onClick={() => onDifficultyChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="btn primary" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
