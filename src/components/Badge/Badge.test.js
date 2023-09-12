import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge", () => {
  test("shows its text", () => {
    render(<Badge tone="success">Paid</Badge>);
    expect(screen.getByText("Paid")).toBeInTheDocument();
  });

  test("the dot is hidden from screen readers (the word says it all)", () => {
    const { container } = render(
      <Badge tone="danger" dot>
        Offline
      </Badge>
    );
    expect(container.querySelector(".badge__dot")).toHaveAttribute("aria-hidden", "true");
  });
});
