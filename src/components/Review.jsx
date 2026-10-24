import Option from "./Option.jsx";

const LETTERS = ["A", "B", "C", "D"];

// Review screen: every question with the correct answer and the user's choice.
function Review({ quiz, answers }) {
  return (
    <div className="review">
      {quiz.map((question, qIndex) => {
        const userAnswer = answers[qIndex];
        const isCorrect = userAnswer === question.answer;

        return (
          <div className="review-item" key={question.id}>
            <p className="review-heading">
              Q{qIndex + 1}.{" "}
              <span className={isCorrect ? "tag-correct" : "tag-wrong"}>
                {userAnswer === undefined || userAnswer === null
                  ? "Not answered"
                  : isCorrect
                  ? "Correct"
                  : "Incorrect"}
              </span>
            </p>
            <h3 className="review-question">{question.question}</h3>

            <div className="options">
              {question.options.map((optionText, index) => {
                let status;
                if (index === question.answer) status = "correct";
                else if (index === userAnswer) status = "wrong";

                return (
                  <Option
                    key={index}
                    letter={LETTERS[index]}
                    text={optionText}
                    isSelected={index === userAnswer}
                    status={status}
                    disabled
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Review;
