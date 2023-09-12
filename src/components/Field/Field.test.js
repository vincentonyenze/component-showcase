import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextField from "./TextField";
import Select from "./Select";
import Checkbox from "./Checkbox";

describe("TextField", () => {
  test("is found by its label: the label is really connected", () => {
    render(<TextField label="Email" />);
    // getByLabelText only works if the <label> points at the input
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  test("can be typed into", () => {
    render(<TextField label="Name" />);
    userEvent.type(screen.getByLabelText("Name"), "Amara");
    expect(screen.getByLabelText("Name")).toHaveValue("Amara");
  });

  test("the hint is read out with the field", () => {
    render(<TextField label="Email" hint="We'll never share it." />);
    expect(screen.getByLabelText("Email")).toHaveAccessibleDescription("We'll never share it.");
  });

  test("an error marks the field invalid and is read out with it", () => {
    render(<TextField label="Password" error="Use at least 8 characters." />);
    const field = screen.getByLabelText("Password");
    expect(field).toBeInvalid();
    expect(field).toHaveAccessibleDescription("Use at least 8 characters.");
  });

  test("a field without an error isn't marked invalid", () => {
    render(<TextField label="Name" />);
    expect(screen.getByLabelText("Name")).not.toHaveAttribute("aria-invalid");
  });

  test("required fields are required", () => {
    render(<TextField label="Shop name" required />);
    expect(screen.getByRole("textbox", { name: /Shop name/ })).toBeRequired();
  });

  test("two fields on one page get different ids", () => {
    render(
      <>
        <TextField label="First" />
        <TextField label="Second" />
      </>
    );
    expect(screen.getByLabelText("First").id).not.toBe(screen.getByLabelText("Second").id);
  });
});

describe("Select", () => {
  const options = [
    { value: "ng", label: "Nigeria" },
    { value: "gh", label: "Ghana" },
  ];

  test("lists every option after the placeholder", () => {
    render(<Select label="Country" placeholder="Choose a country" options={options} />);
    const names = screen.getAllByRole("option").map((option) => option.textContent);
    expect(names).toEqual(["Choose a country", "Nigeria", "Ghana"]);
  });

  test("an option can be chosen", () => {
    render(<Select label="Country" options={options} />);
    userEvent.selectOptions(screen.getByLabelText("Country"), "gh");
    expect(screen.getByLabelText("Country")).toHaveValue("gh");
  });
});

describe("Checkbox", () => {
  test("clicking the label ticks the box", () => {
    render(<Checkbox label="I agree to the terms" />);
    userEvent.click(screen.getByText("I agree to the terms"));
    expect(screen.getByRole("checkbox", { name: "I agree to the terms" })).toBeChecked();
  });

  test("its hint is read out with it", () => {
    render(<Checkbox label="Newsletter" hint="About once a month." />);
    expect(screen.getByRole("checkbox")).toHaveAccessibleDescription("About once a month.");
  });
});
