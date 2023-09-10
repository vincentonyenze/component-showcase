// A labelled group of examples inside a section.
//
//   <ExampleGroup label="Sizes">            examples side by side (default)
//   <ExampleGroup label="Alerts" layout="stack">   one under another
//   <ExampleGroup label="Products" layout="cards"> a grid of cards
//   <ExampleGroup label="States" layout="fields">  a grid of form fields
//
// The layout names map to the CSS classes the page already had.
const LAYOUT_CLASSES = {
  row: "example-row",
  stack: "example-stack",
  cards: "card-grid",
  fields: "field-grid",
  plain: undefined, // no wrapper styling: the children lay themselves out
};

function ExampleGroup({ label, layout = "row", children }) {
  return (
    <>
      <h3 className="example-label">{label}</h3>
      <div className={LAYOUT_CLASSES[layout]}>{children}</div>
    </>
  );
}

export default ExampleGroup;
