import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alert from "./Alert";

describe("Alert", () => {
  test("shows its title and message", () => {
    render(<Alert title="Payment received">We've emailed your receipt.</Alert>);
    expect(screen.getByText("Payment received")).toBeInTheDocument();
    expect(screen.getByText("We've emailed your receipt.")).toBeInTheDocument();
  });

  test("good news is a polite status message", () => {
    render(<Alert tone="success">Saved</Alert>);
    expect(screen.getByRole("status")).toHaveTextContent("Saved");
  });

  test("problems interrupt, as an alert", () => {
    render(<Alert tone="danger">Couldn't save</Alert>);
    expect(screen.getByRole("alert")).toHaveTextContent("Couldn't save");
  });

  test("has no close button unless it's dismissible", () => {
    render(<Alert>Just so you know</Alert>);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test("disappears when dismissed", () => {
    render(
      <Alert tone="warning" title="Storage almost full" dismissible>
        You've used 90% of your space.
      </Alert>
    );
    userEvent.click(screen.getByRole("button", { name: "Dismiss: Storage almost full" }));
    // queryBy... returns null instead of failing when nothing is found:
    // the way to check that something is GONE
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
