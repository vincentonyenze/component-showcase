import Field from "./Field";

// A labelled text box.
//
//   <TextField label="Email" type="email" hint="We'll never share it" />
//   <TextField label="Name" required error="Please enter your name" />
//
// Props: label, hint, error, required (see Field), and anything else
// (type, name, placeholder, defaultValue, disabled, autoComplete...) goes
// on to the <input> itself.
function TextField({ label, hint, error, required, className, ...inputProps }) {
  return (
    <Field label={label} hint={hint} error={error} required={required} className={className}>
      {(controlProps) => <input className="field__control" {...controlProps} {...inputProps} />}
    </Field>
  );
}

export default TextField;
