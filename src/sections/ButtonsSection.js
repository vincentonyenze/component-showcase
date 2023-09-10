import Button from "../components/Button/Button";
import ExampleGroup from "../components/Showcase/ExampleGroup";

// The examples for the Button component
function ButtonsSection() {
  return (
    <>
      <ExampleGroup label="Variants">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Delete</Button>
      </ExampleGroup>

      <ExampleGroup label="Sizes">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </ExampleGroup>

      <ExampleGroup label="With an icon, and disabled">
        <Button icon="⬇️">Download</Button>
        <Button variant="secondary" icon="✏️">
          Edit
        </Button>
        {/* A prop with no value means true: disabled is the same as disabled={true} */}
        <Button disabled>Can't click me</Button>
      </ExampleGroup>

      <ExampleGroup label="Full width" layout="plain">
        <Button fullWidth size="large">
          Continue to checkout
        </Button>
      </ExampleGroup>
    </>
  );
}

export default ButtonsSection;
