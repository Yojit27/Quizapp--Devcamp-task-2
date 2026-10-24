// Whole-quiz countdown display (mm:ss). Turns red in the last minute.
function Timer({ secondsLeft }) {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  const isLow = secondsLeft <= 60;

  return (
    <div className={`timer ${isLow ? "low" : ""}`}>
      <span aria-hidden="true">⏱</span> {minutes}:{seconds}
    </div>
  );
}

export default Timer;
