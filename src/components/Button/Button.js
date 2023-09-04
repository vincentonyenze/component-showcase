import { classNames } from "../../utils/classNames";
import "./Button.css";

// A button in one of several styles and sizes.
//
//   <Button>Save</Button>
//   <Button variant="danger" size="small">Delete</Button>
//   <Button variant="secondary" icon="⬇️" fullWidth>Download</Button>
//
// Props (the settings a component is given, like attributes on HTML):
//   variant   "primary" (default) | "secondary" | "ghost" | "danger"
//   size      "small" | "medium" (default) | "large"
//   icon      an emoji or symbol shown before the text (optional)
//   fullWidth stretch to the width of its container
//   type      "button" (default) | "submit" | "reset"
//   children  whatever is written between <Button> and </Button>
//   ...rest   anything else (onClick, disabled, aria-label...) is passed
//             straight on to the real <button>
function Button({
  variant = "primary",
  size = "medium",
  icon,
  fullWidth = false,
  type = "button",
  className,
  children,
  ...rest
}) {
  return (
    <button
      // type="button" by default: inside a <form>, a button without a type
      // is a SUBMIT button, which surprises everyone the first time
      type={type}
      className={classNames(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth && "btn--full",
        className
      )}
      {...rest}
    >
      {/* Only drawn when there IS an icon: `false` and `undefined` show nothing */}
      {icon && (
        <span className="btn__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}

export default Button;
