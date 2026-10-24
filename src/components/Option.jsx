// A single answer option. `status` is only used on the review screen
// ("correct" | "wrong" | "missed" | undefined).
function Option({ letter, text, isSelected, onSelect, status, disabled }) {
  const classNames = ["option"];
  if (isSelected) classNames.push("selected");
  if (status) classNames.push(status);

  return (
    <button
      type="button"
      className={classNames.join(" ")}
      onClick={onSelect}
      disabled={disabled}
    >
      <span className="option-letter">{letter}</span>
      <span className="option-text">{text}</span>
    </button>
  );
}

export default Option;
