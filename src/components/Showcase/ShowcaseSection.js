// One section of the showcase page: a heading, a sentence, and examples.
// Every section looked the same in App.js, written out five times; now
// the shape is written once, here.
//
//   <ShowcaseSection id="buttons" title="Buttons" description="...">
//     ...examples...
//   </ShowcaseSection>
function ShowcaseSection({ id, title, description, children }) {
  const titleId = `${id}-title`;
  return (
    <section className="showcase-section" id={id} aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <p>{description}</p>
      <div className="showcase-section__examples">{children}</div>
    </section>
  );
}

export default ShowcaseSection;
