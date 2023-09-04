// The whole page. It's a component too: a function that returns JSX.
// For now it's just the layout; the real components arrive one per step.

// Plain JavaScript works anywhere in the file, outside the JSX
const COMPONENT_COUNT = 6;
const year = new Date().getFullYear();

function App() {
  // A component returns ONE outer element. Everything else goes inside it.
  // <> ... </> is a "fragment": a wrapper that doesn't add an extra element
  // to the page.
  return (
    <>
      <header className="page-header">
        <h1>Component Showcase</h1>
        {/* Curly braces put a JavaScript value into JSX. (This is also how
            you write a comment inside JSX.) */}
        <p>
          {COMPONENT_COUNT} reusable React components, each shown in all its
          versions: buttons, badges, alerts, cards, form fields and navigation.
        </p>
      </header>

      <main className="page-main">
        {/* "className", not "class": class is a reserved word in JavaScript */}
        <section className="showcase-section" aria-labelledby="buttons-title">
          <h2 id="buttons-title">Buttons</h2>
          <p>Coming in Step 3.</p>
        </section>

        <section className="showcase-section" aria-labelledby="feedback-title">
          <h2 id="feedback-title">Badges &amp; alerts</h2>
          <p>Coming in Step 4.</p>
        </section>

        <section className="showcase-section" aria-labelledby="cards-title">
          <h2 id="cards-title">Cards</h2>
          <p>Coming in Step 5.</p>
        </section>
      </main>

      <footer className="page-footer">
        <p>Built with React · {year}</p>
      </footer>
    </>
  );
}

export default App;
