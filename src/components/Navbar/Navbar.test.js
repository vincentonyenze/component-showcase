import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

const LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "deals", label: "Deals", href: "#deals" },
  { id: "help", label: "Help", href: "#help" },
];

describe("Navbar", () => {
  test("shows one link per item, in order", () => {
    render(<Navbar brand="Shop" links={LINKS} currentId="home" />);
    const names = screen.getAllByRole("link").map((link) => link.textContent);
    expect(names).toEqual(["Home", "Deals", "Help"]);
  });

  test("marks only the current link as the current page", () => {
    render(<Navbar brand="Shop" links={LINKS} currentId="deals" />);
    expect(screen.getByRole("link", { name: "Deals" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
  });

  test("tells the parent which link was clicked", () => {
    const handleNavigate = jest.fn();
    render(<Navbar brand="Shop" links={LINKS} currentId="home" onNavigate={handleNavigate} />);
    userEvent.click(screen.getByRole("link", { name: "Help" }));
    expect(handleNavigate).toHaveBeenCalledWith("help");
  });

  test("still works without onNavigate", () => {
    render(<Navbar brand="Shop" links={LINKS} currentId="home" />);
    // Would throw if Navbar called a missing function
    userEvent.click(screen.getByRole("link", { name: "Help" }));
  });

  test("the menu button says whether the menu is open", () => {
    render(<Navbar brand="Shop" links={LINKS} currentId="home" />);
    const toggle = screen.getByRole("button", { name: /Menu/ });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    userEvent.click(toggle);
    expect(screen.getByRole("button", { name: /Close/ })).toHaveAttribute("aria-expanded", "true");
  });

  test("is a navigation landmark with a name", () => {
    render(<Navbar brand="Shop" links={LINKS} currentId="home" label="Shop menu" />);
    expect(screen.getByRole("navigation", { name: "Shop menu" })).toBeInTheDocument();
  });
});
