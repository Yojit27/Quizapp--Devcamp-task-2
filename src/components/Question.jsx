import Option from "./Option.jsx";

const LETTERS = ["A", "B", "C", "D"];

// Renders one question and its answer options (built with .map()).
function Question({ question, selected, onSelect }) {
  return (
    <div className="question">
      <div className="badges">
        <span className="badge">{question.category}</span>
        <span className={`badge difficulty ${question.difficulty.toLowerCase()}`}>
          {question.difficulty}
        </span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="options">
        {question.options.map((optionText, index) => (
          <Option
            key={index}
            letter={LETTERS[index]}
            text={optionText}
            isSelected={selected === index}
            onSelect={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
