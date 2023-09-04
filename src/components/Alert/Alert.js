import { useState } from "react";
import { classNames } from "../../utils/classNames";
import "./Alert.css";

// An icon for each tone, looked up instead of a chain of if/else
const ICONS = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  danger: "⛔",
};

// A message box: information, a success, a warning or an error.
//
//   <Alert tone="success" title="Saved">Your changes are live.</Alert>
//   <Alert tone="danger" dismissible>Couldn't connect.</Alert>
//
// Props:
//   tone        "info" (default) | "success" | "warning" | "danger"
//   title       a bold first line (optional)
//   dismissible show a ✕ button that hides the alert
//   children    the message
function Alert({ tone = "info", title, dismissible = false, children }) {
  // STATE: something the component remembers, that can change.
  // useState(false) gives back the current value and a function to change
  // it. Calling setDismissed(true) makes React run Alert again and draw
  // the new result.
  const [dismissed, setDismissed] = useState(false);

  // Returning null draws nothing at all
  if (dismissed) return null;

  return (
    <div
      className={classNames("alert", `alert--${tone}`)}
      // Problems interrupt a screen reader straight away ("alert"); good
      // news waits politely until it has finished speaking ("status")
      role={tone === "danger" || tone === "warning" ? "alert" : "status"}
    >
      <span className="alert__icon" aria-hidden="true">
        {ICONS[tone]}
      </span>

      <div className="alert__body">
        {title && <p className="alert__title">{title}</p>}
        <div className="alert__message">{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          className="alert__close"
          // The ✕ alone means nothing to a screen reader; the label says what it does
          aria-label={title ? `Dismiss: ${title}` : "Dismiss"}
          onClick={() => setDismissed(true)}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Alert;
