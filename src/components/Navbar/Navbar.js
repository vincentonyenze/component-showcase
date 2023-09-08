import { useState } from "react";
import { classNames } from "../../utils/classNames";
import "./Navbar.css";

// A top navigation bar: a brand on the left, links, and an optional area
// for buttons on the right. On narrow screens the links fold into a
// "Menu" button.
//
//   <Navbar
//     brand="Shop"
//     links={[{ id: "home", label: "Home", href: "#home" }, ...]}
//     currentId="home"
//     onNavigate={(id) => setCurrent(id)}
//     actions={<Button size="small">Sign in</Button>}
//   />
//
// Props:
//   brand       the name on the left (text or JSX)
//   links       a list of { id, label, href }
//   currentId   the id of the page you're on (marked with aria-current)
//   onNavigate  called with a link's id when it's clicked (optional)
//   actions     anything for the right-hand side (optional)
//   label       what screen readers call this navigation ("Main" by default)
function Navbar({ brand, links, currentId, onNavigate, actions, label = "Main" }) {
  // Is the menu open? (Only matters on narrow screens.) Each Navbar on the
  // page has its own copy of this state.
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick(id) {
    setMenuOpen(false); // following a link closes the menu
    onNavigate?.(id); // ?.() calls it only if it was given
  }

  return (
    <nav className="navbar" aria-label={label}>
      <div className="navbar__brand">{brand}</div>

      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕ Close" : "☰ Menu"}
      </button>

      <div className={classNames("navbar__menu", menuOpen && "navbar__menu--open")}>
        <ul className="navbar__links">
          {/* map() turns each item in the list into an element.
              key: a value that's unique among the items AND stays the same
              for each one. React uses it to match items between renders,
              so it can update just what changed. Use an id, not the
              position: positions shift when items are added or removed. */}
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="navbar__link"
                // aria-current="page": "you are here", for screen readers
                // and for the CSS. undefined means: leave the attribute off.
                aria-current={link.id === currentId ? "page" : undefined}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {actions && <div className="navbar__actions">{actions}</div>}
      </div>
    </nav>
  );
}

export default Navbar;
