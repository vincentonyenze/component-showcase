// The whole page, now short: the page navigation, a header, and the
// sections, built from the SECTIONS list below.
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ShowcaseSection from "./components/Showcase/ShowcaseSection";
import ButtonsSection from "./sections/ButtonsSection";
import FeedbackSection from "./sections/FeedbackSection";
import CardsSection from "./sections/CardsSection";
import FormsSection from "./sections/FormsSection";
import NavigationSection from "./sections/NavigationSection";

// Everything the page knows about its sections, in ONE place. The
// navigation links and the sections are both made from this list, so
// adding a section here adds it to the page AND the navigation.
//   Content: the component with that section's examples. A component can
//   be stored in a variable like any other value.
const SECTIONS = [
  {
    id: "buttons",
    title: "Buttons",
    description: "One component, many looks: everything is set with props.",
    Content: ButtonsSection,
  },
  {
    id: "feedback",
    title: "Badges & alerts",
    description: "Small labels for status, and boxes for messages that matter.",
    Content: FeedbackSection,
  },
  {
    id: "cards",
    title: "Cards",
    description:
      "One Card, filled with other components: a Badge on top, Buttons in the footer. Card doesn't need to know what's inside it.",
    Content: CardsSection,
  },
  {
    id: "forms",
    navLabel: "Forms",
    title: "Form fields",
    description:
      "Every field has a real label, plus an optional hint and error that screen readers read out with it.",
    Content: FormsSection,
  },
  {
    id: "navigation",
    title: "Navigation",
    description:
      "The bar at the top of this page and the one below are the SAME component, given different props. Make the window narrow to see the links fold into a menu.",
    Content: NavigationSection,
  },
];

// The navigation's links, worked out from the sections (never typed twice)
const PAGE_LINKS = SECTIONS.map((section) => ({
  id: section.id,
  label: section.navLabel ?? section.title,
  href: `#${section.id}`,
}));

// The components shown on the page: Button, Badge, Alert, Card, the form
// fields and Navbar
const COMPONENT_COUNT = 6;
const year = new Date().getFullYear();

function App() {
  // Which section's link is highlighted in the page navigation
  const [pageSection, setPageSection] = useState(SECTIONS[0].id);

  return (
    <>
      <div className="page-nav">
        <Navbar
          brand="⚛️ Showcase"
          links={PAGE_LINKS}
          currentId={pageSection}
          onNavigate={setPageSection}
          label="Showcase sections"
        />
      </div>

      <header className="page-header">
        <h1>Component Showcase</h1>
        <p>
          {COMPONENT_COUNT} reusable React components, each shown in all its
          versions: buttons, badges, alerts, cards, form fields and navigation.
        </p>
      </header>

      <main className="page-main">
        {/* One ShowcaseSection per item. Destructuring "Content" with a
            capital letter lets it be used as a JSX tag: <Content /> */}
        {SECTIONS.map(({ id, title, description, Content }) => (
          <ShowcaseSection key={id} id={id} title={title} description={description}>
            <Content />
          </ShowcaseSection>
        ))}
      </main>

      <footer className="page-footer">
        <p>Built with React · {year}</p>
      </footer>
    </>
  );
}

export default App;
