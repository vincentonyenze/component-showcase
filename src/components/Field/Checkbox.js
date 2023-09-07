import { useId } from "react";

// A checkbox with its label beside it, and an optional hint underneath.
// The whole label is clickable, which makes it a much bigger target.
//
//   <Checkbox label="Send me the newsletter" hint="About once a month" />
//
// Anything else (name, defaultChecked, required, disabled...) goes on to
// the <input>.
function Checkbox({ label, hint, className, ...inputProps }) {
  const id = useId();
  const hintId = `${id}-hint`;

  return (
    <div className={className ? `checkbox ${className}` : "checkbox"}>
      <input
        type="checkbox"
        className="checkbox__input"
        id={id}
        aria-describedby={hint ? hintId : undefined}
        {...inputProps}
      />
      <label className="checkbox__label" htmlFor={id}>
        {label}
      </label>
      {hint && (
        <p className="checkbox__hint" id={hintId}>
          {hint}
        </p>
      )}
    </div>
  );
}

export default Checkbox;
