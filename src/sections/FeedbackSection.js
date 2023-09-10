import { useState } from "react";
import Badge from "../components/Badge/Badge";
import Alert from "../components/Alert/Alert";
import Button from "../components/Button/Button";
import ExampleGroup from "../components/Showcase/ExampleGroup";

// The examples for Badge and Alert
function FeedbackSection() {
  // Only this section uses it, so the state lives here, not in App.
  // Changing a component's "key" makes React throw it away and build a
  // fresh one: bumping this number brings back every dismissed alert.
  const [alertsVersion, setAlertsVersion] = useState(0);

  return (
    <>
      <ExampleGroup label="Badges">
        <Badge>Draft</Badge>
        <Badge tone="info">New</Badge>
        <Badge tone="success">Paid</Badge>
        <Badge tone="warning">Pending</Badge>
        <Badge tone="danger">Overdue</Badge>
        <Badge tone="success" dot>
          Online
        </Badge>
        <Badge tone="danger" dot>
          Offline
        </Badge>
      </ExampleGroup>

      <h3 className="example-label">Alerts</h3>
      <div className="example-stack" key={alertsVersion}>
        <Alert>Your trial ends in 7 days.</Alert>
        <Alert tone="success" title="Payment received" dismissible>
          We've emailed your receipt.
        </Alert>
        <Alert tone="warning" title="Storage almost full" dismissible>
          You've used 90% of your space.
        </Alert>
        <Alert tone="danger" title="Couldn't save" dismissible>
          Check your connection and try again.
        </Alert>
      </div>
      <div className="example-row example-row--spaced">
        <Button variant="secondary" size="small" onClick={() => setAlertsVersion(alertsVersion + 1)}>
          ↺ Bring the alerts back
        </Button>
      </div>
    </>
  );
}

export default FeedbackSection;
