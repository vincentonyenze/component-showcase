import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import Badge from "../components/Badge/Badge";

// A pretend shop's navigation, to show the same component used differently
const SHOP_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "products", label: "Products", href: "#products" },
  { id: "deals", label: "Deals", href: "#deals" },
  { id: "help", label: "Help", href: "#help" },
];

// The example for Navbar (the page's own navigation is the other example)
function NavigationSection() {
  const [shopPage, setShopPage] = useState("home");
  const current = SHOP_LINKS.find((link) => link.id === shopPage);

  return (
    <>
      <h3 className="example-label">A shop's navigation</h3>
      <Navbar
        brand="🛍️ Shop"
        links={SHOP_LINKS}
        currentId={shopPage}
        // Passing the setter itself: Navbar calls onNavigate("deals"),
        // which is setShopPage("deals")
        onNavigate={setShopPage}
        label="Shop demo"
        actions={
          <>
            <Button variant="ghost" size="small">
              Sign in
            </Button>
            <Button size="small" icon="🛒">
              Cart <Badge tone="neutral">3</Badge>
            </Button>
          </>
        }
      />
      <p className="example-note">
        You're on: <strong>{current.label}</strong>
      </p>
    </>
  );
}

export default NavigationSection;
