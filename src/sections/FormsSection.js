import { useState } from "react";
import TextField from "../components/Field/TextField";
import Select from "../components/Field/Select";
import Checkbox from "../components/Field/Checkbox";
import Button from "../components/Button/Button";
import Alert from "../components/Alert/Alert";
import ExampleGroup from "../components/Showcase/ExampleGroup";

// The choices for the country dropdown: data, kept apart from the JSX
const COUNTRIES = [
  { value: "ng", label: "Nigeria" },
  { value: "gh", label: "Ghana" },
  { value: "ke", label: "Kenya" },
  { value: "za", label: "South Africa" },
  { value: "gb", label: "United Kingdom" },
];

// The examples for TextField, Select and Checkbox
function FormsSection() {
  // Whether the demo form has been sent (to show a message)
  const [formSent, setFormSent] = useState(false);

  // A form's submit event: stop the browser reloading the page, and show
  // what was typed. FormData reads every field by its name="" attribute.
  function handleSubmit(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    console.log("The form would send:", values);
    setFormSent(true);
  }

  return (
    <>
      <ExampleGroup label="The different states" layout="fields">
        <TextField label="Full name" placeholder="Amara Okafor" />
        <TextField
          label="Email"
          type="email"
          hint="We'll only use it to send your receipts."
          placeholder="you@example.com"
        />
        <TextField
          label="Password"
          type="password"
          required
          error="Use at least 8 characters."
          defaultValue="abc"
        />
        <TextField label="Account ID" defaultValue="ACC-20931" disabled />
      </ExampleGroup>

      <h3 className="example-label">A whole form</h3>
      {/* noValidate: the browser's own error bubbles can't be styled or
          worded well, so they're turned off */}
      <form className="demo-form" onSubmit={handleSubmit} noValidate>
        <TextField label="Shop name" name="shop" required placeholder="My Shop" />
        <Select
          label="Country"
          name="country"
          placeholder="Choose a country"
          options={COUNTRIES}
          hint="Where your business is based."
        />
        <Checkbox name="newsletter" label="Send me product news" hint="About once a month." />
        <Checkbox name="terms" label="I agree to the terms" required />
        <div className="example-row">
          <Button type="submit">Create shop</Button>
          <Button type="reset" variant="ghost" onClick={() => setFormSent(false)}>
            Clear
          </Button>
        </div>
        {formSent && (
          <Alert tone="success" title="Form sent (not really)">
            This is a demo: nothing was sent anywhere. Open the console (F12) to
            see the values it read.
          </Alert>
        )}
      </form>
    </>
  );
}

export default FormsSection;
