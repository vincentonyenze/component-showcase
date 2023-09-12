import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("its title is an h3 by default", () => {
    render(<Card title="MacBook Pro" />);
    expect(screen.getByRole("heading", { level: 3, name: "MacBook Pro" })).toBeInTheDocument();
  });

  test("the heading level can be changed to fit the page", () => {
    render(<Card title="MacBook Pro" titleAs="h2" />);
    expect(screen.getByRole("heading", { level: 2, name: "MacBook Pro" })).toBeInTheDocument();
  });

  test("shows the image with its description", () => {
    render(<Card image="laptop.webp" imageAlt="A silver laptop" title="Laptop" />);
    expect(screen.getByRole("img", { name: "A silver laptop" })).toHaveAttribute("src", "laptop.webp");
  });

  test("has no image when none is given", () => {
    render(<Card title="Monthly revenue" />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  test("puts whatever it's given in the eyebrow, body and footer", () => {
    render(
      <Card eyebrow={<span>New</span>} title="Phone" footer={<button>Add to cart</button>}>
        <p>$199.99</p>
      </Card>
    );
    expect(screen.getByText("New")).toBeInTheDocument();
    expect(screen.getByText("$199.99")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add to cart" })).toBeInTheDocument();
  });
});
