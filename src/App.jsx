import { useState, useEffect } from "react";
import questions from "./data/questions.js";
import StartScreen from "./components/StartScreen.jsx";
import Question from "./components/Question.jsx";
import QuizProgress from "./components/QuizProgress.jsx";
import Timer from "./components/Timer.jsx";
import Result from "./components/Result.jsx";
import "./App.css";

const QUIZ_LENGTH = 10;
const QUIZ_TIME_SECONDS = 10 * 60; // whole-quiz timer: 10 minutes

// Fisher-Yates shuffle (returns a new array).
function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Pick questions matching the filters; if fewer than QUIZ_LENGTH match,
// fill up with questions from other categories/difficulties.
function buildQuiz(category, difficulty) {
  const matching = questions.filter(
    (q) =>
      (category === "All" || q.category === category) &&
      (difficulty === "All" || q.difficulty === difficulty)
  );

  const picked = shuffle(matching).slice(0, QUIZ_LENGTH);

  if (picked.length < QUIZ_LENGTH) {
    const others = shuffle(questions.filter((q) => !picked.includes(q)));
    picked.push(...others.slice(0, QUIZ_LENGTH - picked.length));
  }

  return shuffle(picked);
}

function App() {
  const [stage, setStage] = useState("start"); // "start" | "quiz" | "result"
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [quiz, setQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_SECONDS);
  const [timedOut, setTimedOut] = useState(false);

  // Count down once per second while the quiz is running.
  useEffect(() => {
    if (stage !== "quiz") return;
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [stage]);

  // End the quiz when the time runs out.
  useEffect(() => {
    if (stage === "quiz" && timeLeft <= 0) {
      const finalAnswers = selected !== null ? [...answers, selected] : answers;
      setAnswers(finalAnswers);
      setTimedOut(true);
      setStage("result");
    }
  }, [timeLeft, stage, selected, answers]);

  function handleStart() {
    setQuiz(buildQuiz(category, difficulty));
    setCurrentIndex(0);
    setSelected(null);
    setAnswers([]);
    setTimeLeft(QUIZ_TIME_SECONDS);
    setTimedOut(false);
    setStage("quiz");
  }

  function handleNext() {
    if (selected === null) return;

    const updatedAnswers = [...answers, selected];
    setAnswers(updatedAnswers);

    if (currentIndex + 1 === quiz.length) {
      setStage("result");
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setStage("start");
  }

  const isLastQuestion = currentIndex + 1 === quiz.length;

  return (
    <main className="app">
      {stage === "start" && (
        <StartScreen
          totalQuestions={QUIZ_LENGTH}
          timeMinutes={QUIZ_TIME_SECONDS / 60}
          category={category}
          difficulty={difficulty}
          onCategoryChange={setCategory}
          onDifficultyChange={setDifficulty}
          onStart={handleStart}
        />
      )}

      {stage === "quiz" && (
        <div className="card quiz-screen">
          <div className="quiz-top">
            <QuizProgress current={currentIndex + 1} total={quiz.length} />
            <Timer secondsLeft={Math.max(timeLeft, 0)} />
          </div>

          <Question
            question={quiz[currentIndex]}
            selected={selected}
            onSelect={setSelected}
          />

          <button
            type="button"
            className="btn primary"
            onClick={handleNext}
            disabled={selected === null}
          >
            {isLastQuestion ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}

      {stage === "result" && (
        <Result
          quiz={quiz}
          answers={answers}
          timedOut={timedOut}
          onRestart={handleRestart}
        />
      )}
    </main>
  );
}

export default App;
