// React Testing Library's idea: test what a USER sees and does, not how
// the component works inside. Find things the way people do (by their
// role and name, by label text), click them, and check what happens.
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  test("shows its text", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    // jest.fn() is a pretend function that remembers how it was called
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Save</Button>);
    userEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("can't be clicked when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Save
      </Button>
    );
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeDisabled();
    userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("is a plain button by default, so it never submits a form by accident", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  test("can be a submit button when asked", () => {
    render(<Button type="submit">Send</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("the icon is decoration: it isn't part of the button's name", () => {
    render(<Button icon="⬇️">Download</Button>);
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument();
  });

  test("passes other props through, like aria-label", () => {
    render(<Button icon="♡" aria-label="Save for later" />);
    expect(screen.getByRole("button", { name: "Save for later" })).toBeInTheDocument();
  });
});
