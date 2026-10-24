# Interactive Quiz App

A frontend-only quiz app built with **React**, **JavaScript** and **CSS** for DevCamp 2.0 (Task 2). Answer multiple-choice questions on JavaScript, React and HTML/CSS, race the clock, and see your final score.

## Features

- **Start screen** with title, description, total questions and time limit
- **Quiz screen** showing one question at a time with four options, a highlighted selected option, a Next Question button, a question counter (e.g. 3 / 10) and a progress bar
- **Results screen** with final score, correct vs incorrect count, a message based on the score, and a Restart Quiz button
- **Responsive** layout for mobile and desktop

### Bonus features

- **Timer**: a 10-minute countdown for the whole quiz (the quiz ends automatically when time runs out)
- **Review screen**: see every question with the correct answer and your choice
- **Categories**: JavaScript, React, HTML/CSS (or All)
- **Difficulty levels**: Easy, Medium, Hard (or All)
- **Shuffle**: questions appear in a new order on every start

## How it works

- The question bank holds 30 questions (10 per category, mixed difficulty).
- Each quiz has 10 questions picked from the selected category and difficulty.
- If fewer than 10 questions match the filters, the quiz is filled up with questions from other categories/difficulties.
- Unanswered questions (e.g. when time runs out) count as incorrect.

## React concepts used

| Concept | Where |
| --- | --- |
| Components | `Question`, `Option`, `QuizProgress`, `Result`, `StartScreen`, `Timer`, `Review` |
| Props | Question data, options, selected answer and handlers passed down to children |
| State | Quiz stage, current question, selected answer, answers, time left (`useState`) |
| Effects | Countdown timer and time-up handling (`useEffect`) |
| Event handling | Option clicks, Start, Next, Restart, filter chips |
| Conditional rendering | Start / quiz / result screen by quiz stage |
| Lists | `.map()` for questions and answer options |
| Arrays & objects | Questions stored as an array of objects in `src/data/questions.js` |

## Project structure

```
quiz-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── data/
    │   └── questions.js
    └── components/
        ├── StartScreen.jsx
        ├── Question.jsx
        ├── Option.jsx
        ├── QuizProgress.jsx
        ├── Timer.jsx
        ├── Result.jsx
        └── Review.jsx
```

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# create a production build
npm run build

# preview the production build
npm run preview
```

## Question format

```js
{
  id: 1,
  category: "JavaScript",
  difficulty: "Easy",
  question: "Which keyword declares a block-scoped variable that can be reassigned?",
  options: ["var", "let", "const", "static"],
  answer: 1, // index of the correct option
}
```

## Tech stack

React 18 · JavaScript (ES6+) · CSS · Vite

## Live demo

Add your deployed link here.
