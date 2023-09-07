import Field from "./Field";

// A labelled dropdown.
//
//   <Select
//     label="Country"
//     placeholder="Choose a country"
//     options={[{ value: "ng", label: "Nigeria" }, { value: "gh", label: "Ghana" }]}
//   />
//
// Props: label, hint, error, required (see Field), options (a list of
// { value, label }), placeholder (an empty first choice), and anything
// else goes on to the <select>.
function Select({ label, hint, error, required, options, placeholder, className, ...selectProps }) {
  return (
    <Field label={label} hint={hint} error={error} required={required} className={className}>
      {(controlProps) => (
        <select className="field__control" {...controlProps} {...selectProps}>
          {placeholder && <option value="">{placeholder}</option>}
          {/* One <option> per item. `key` helps React keep track of each
              one in a list (Step 7 explains why) */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </Field>
  );
}

export default Select;
