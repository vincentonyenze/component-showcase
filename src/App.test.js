// Tests for the page as a whole: does everything fit together?
import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("shows the page heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Component Showcase" })).toBeInTheDocument();
  });

  test("has one navigation link for every section, pointing at it", () => {
    render(<App />);
    const nav = screen.getByRole("navigation", { name: "Showcase sections" });
    const links = within(nav).getAllByRole("link");
    const sections = screen.getAllByRole("region");

    expect(links).toHaveLength(sections.length);
    links.forEach((link, i) => {
      expect(link).toHaveAttribute("href", `#${sections[i].id}`);
    });
  });

  test("every section is named by its heading", () => {
    render(<App />);
    // A <section> with aria-labelledby is a "region" named by its heading
    const names = screen.getAllByRole("region").map((section) => section.getAttribute("id"));
    expect(names).toEqual(["buttons", "feedback", "cards", "forms", "navigation"]);
    for (const name of ["Buttons", "Badges & alerts", "Cards", "Form fields", "Navigation"]) {
      expect(screen.getByRole("region", { name })).toBeInTheDocument();
    }
  });
});
