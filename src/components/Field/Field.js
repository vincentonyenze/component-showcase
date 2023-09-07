import { useId } from "react";
import { classNames } from "../../utils/classNames";
import "./Field.css";

// The parts every form field shares: a label, the control itself, a hint,
// and an error. TextField and Select are built ON TOP of this, so labels,
// hints and errors look and behave the same everywhere.
//
// `children` is a FUNCTION here, not JSX. Field works out the ids and
// attributes, then calls children(controlProps) so the field can put them
// on its own <input> or <select>:
//
//   <Field label="Email" hint="We'll never share it">
//     {(controlProps) => <input type="email" {...controlProps} />}
//   </Field>
//
// This is called a "render prop": a prop that's a function returning JSX.
function Field({ label, hint, error, required = false, className, children }) {
  // useId() makes an id that's unique on the page, even when the same
  // component is used many times. The <label> points at the control with
  // htmlFor, and the control points at its hint and error.
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  // aria-describedby: screen readers read these after the label, so the
  // hint and error are heard when the field is reached, not just seen
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={classNames("field", error && "field--error", className)}>
      {/* "htmlFor", not "for": for is a reserved word in JavaScript too */}
      <label className="field__label" htmlFor={id}>
        {label}
        {required && (
          <span className="field__required" aria-hidden="true">
            {" "}*
          </span>
        )}
      </label>

      {children({
        id,
        required,
        "aria-describedby": describedBy,
        // Tells screen readers the value is wrong, and lets CSS style it
        "aria-invalid": error ? true : undefined,
      })}

      {hint && (
        <p className="field__hint" id={hintId}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Field;
