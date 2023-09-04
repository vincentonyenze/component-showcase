import { classNames } from "../../utils/classNames";
import "./Badge.css";

// A small label for a status or a count.
//
//   <Badge tone="success">Paid</Badge>
//   <Badge tone="danger" dot>Offline</Badge>
//
// Props:
//   tone      "neutral" (default) | "info" | "success" | "warning" | "danger"
//   dot       show a small coloured dot before the text
//   children  the text
function Badge({ tone = "neutral", dot = false, className, children, ...rest }) {
  return (
    <span className={classNames("badge", `badge--${tone}`, className)} {...rest}>
      {dot && <span className="badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

export default Badge;
