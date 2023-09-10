import Card from "../components/Card/Card";
import Badge from "../components/Badge/Badge";
import Button from "../components/Button/Button";
import ExampleGroup from "../components/Showcase/ExampleGroup";

// Importing an image gives back its URL. The build tool copies the file,
// gives it a unique name (so browsers never show an old cached version),
// and fails loudly if the file is missing: safer than typing a path.
import macbookPhoto from "../assets/macbook.webp";
import iphonePhoto from "../assets/iphone.webp";
import perfumePhoto from "../assets/perfume.webp";

// The examples for Card: other components inside it
function CardsSection() {
  return (
    <>
      <ExampleGroup label="Product cards" layout="cards">
        <Card
          image={macbookPhoto}
          imageAlt="Apple MacBook Pro 14 inch in space grey"
          eyebrow={<Badge tone="info">New</Badge>}
          title="MacBook Pro 14 Inch"
          footer={<Button fullWidth>Add to cart</Button>}
        >
          <p className="price">$1,999.99</p>
        </Card>

        <Card
          image={iphonePhoto}
          imageAlt="iPhone 5s, back view"
          eyebrow={<Badge tone="danger">20% off</Badge>}
          title="iPhone 5s"
          footer={
            <>
              <Button>Add to cart</Button>
              <Button variant="ghost" icon="♡" aria-label="Save iPhone 5s for later" />
            </>
          }
        >
          <p className="price">
            $159.99 <s>$199.99</s>
          </p>
        </Card>

        <Card
          image={perfumePhoto}
          imageAlt="Calvin Klein CK One bottle"
          eyebrow={<Badge tone="warning">Only 2 left</Badge>}
          title="Calvin Klein CK One"
          footer={
            <Button variant="secondary" fullWidth>
              View details
            </Button>
          }
        >
          <p className="price">$49.99</p>
        </Card>
      </ExampleGroup>

      <ExampleGroup label="Without an image" layout="cards">
        <Card
          eyebrow={
            <Badge tone="success" dot>
              Live
            </Badge>
          }
          title="Monthly revenue"
        >
          <p className="stat">$12,480</p>
          <p>▲ 8.2% vs last month</p>
        </Card>

        <Card
          title="Upgrade to Pro"
          footer={
            <>
              <Button size="small">Upgrade</Button>
              <Button size="small" variant="ghost">
                Maybe later
              </Button>
            </>
          }
        >
          <p>Unlimited projects, priority support and advanced reports.</p>
        </Card>
      </ExampleGroup>
    </>
  );
}

export default CardsSection;
