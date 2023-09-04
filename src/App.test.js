// A first test, kept simple until Step 9 (where we test each component).
// It draws <App /> in a pretend browser and checks the page heading is there.
import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows the page heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: "Component Showcase" })).toBeInTheDocument();
});
