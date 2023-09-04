// Join class names, skipping any that are false, null, undefined or "".
//   classNames("btn", isLarge && "btn--large", disabled && "btn--disabled")
//   -> "btn btn--large" (when isLarge is true and disabled is false)
// Components use this to build their className from their props.
export function classNames(...names) {
  return names.filter(Boolean).join(" ");
}
