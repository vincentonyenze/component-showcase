// The whole page. It's a component too: a function that returns JSX.
// The real components arrive one per step.
import { useState } from "react";
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Alert from "./components/Alert/Alert";

// Plain JavaScript works anywhere in the file, outside the JSX
const COMPONENT_COUNT = 6;
const year = new Date().getFullYear();

function App() {
  // Changing a component's "key" makes React throw it away and build a
  // fresh one. Bumping this number brings back every dismissed alert.
  const [alertsVersion, setAlertsVersion] = useState(0);

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
          <p>One component, many looks: everything is set with props.</p>

          <div className="showcase-section__examples">
            <h3 className="example-label">Variants</h3>
            <div className="example-row">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Delete</Button>
            </div>

            <h3 className="example-label">Sizes</h3>
            <div className="example-row">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>

            <h3 className="example-label">With an icon, and disabled</h3>
            <div className="example-row">
              <Button icon="⬇️">Download</Button>
              <Button variant="secondary" icon="✏️">
                Edit
              </Button>
              {/* A prop with no value means true: disabled is the same as disabled={true} */}
              <Button disabled>Can't click me</Button>
            </div>

            <h3 className="example-label">Full width</h3>
            <Button fullWidth size="large">
              Continue to checkout
            </Button>
          </div>
        </section>

        <section className="showcase-section" aria-labelledby="feedback-title">
          <h2 id="feedback-title">Badges &amp; alerts</h2>
          <p>Small labels for status, and boxes for messages that matter.</p>

          <div className="showcase-section__examples">
            <h3 className="example-label">Badges</h3>
            <div className="example-row">
              <Badge>Draft</Badge>
              <Badge tone="info">New</Badge>
              <Badge tone="success">Paid</Badge>
              <Badge tone="warning">Pending</Badge>
              <Badge tone="danger">Overdue</Badge>
              <Badge tone="success" dot>
                Online
              </Badge>
              <Badge tone="danger" dot>
                Offline
              </Badge>
            </div>

            <h3 className="example-label">Alerts</h3>
            <div className="example-stack" key={alertsVersion}>
              <Alert>Your trial ends in 7 days.</Alert>
              <Alert tone="success" title="Payment received" dismissible>
                We've emailed your receipt.
              </Alert>
              <Alert tone="warning" title="Storage almost full" dismissible>
                You've used 90% of your space.
              </Alert>
              <Alert tone="danger" title="Couldn't save" dismissible>
                Check your connection and try again.
              </Alert>
            </div>
            <div className="example-row example-row--spaced">
              {/* An event handler: a function React calls on click */}
              <Button variant="secondary" size="small" onClick={() => setAlertsVersion(alertsVersion + 1)}>
                ↺ Bring the alerts back
              </Button>
            </div>
          </div>
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
