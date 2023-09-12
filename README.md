# Component Showcase

A small library of **reusable React components**, shown off in all their versions on one page: buttons, badges, alerts, cards, form fields and navigation. Each component is built to be accessible, works in light and dark mode, and is covered by tests: **39 automated tests** in total.

This is **Project 14** in my beginner-to-expert web development roadmap, and my first React project (Level 3). It was created with **Create React App**.

<!-- Add a screenshot: save one as screenshot.png in this folder and uncomment the line below -->
<!-- ![Component showcase screenshot](screenshot.png) -->

## The components

| Component | What it does | Props |
|---|---|---|
| `Button` | A button in 4 styles and 3 sizes, with an optional icon | `variant`, `size`, `icon`, `fullWidth`, `type`, plus any normal button prop |
| `Badge` | A small status label, optionally with a dot | `tone`, `dot` |
| `Alert` | A message box that can be dismissed | `tone`, `title`, `dismissible` |
| `Card` | A box with slots for an image, a label, a title, content and a footer | `image`, `imageAlt`, `eyebrow`, `title`, `titleAs`, `footer` |
| `TextField` | A labelled text box with a hint and an error | `label`, `hint`, `error`, `required`, plus any input prop |
| `Select` | A labelled dropdown | `label`, `options`, `placeholder`, `hint`, `error` |
| `Checkbox` | A checkbox with a clickable label | `label`, `hint` |
| `Navbar` | Navigation that folds into a menu on narrow screens | `brand`, `links`, `currentId`, `onNavigate`, `actions`, `label` |

Example:

```jsx
<Card
  image={photo}
  imageAlt="Apple MacBook Pro 14 inch"
  eyebrow={<Badge tone="info">New</Badge>}
  title="MacBook Pro 14 Inch"
  footer={<Button fullWidth>Add to cart</Button>}
>
  <p>$1,999.99</p>
</Card>
```

## Accessibility built in

- Every form field has a **real, connected label** (`useId()` gives each one a unique id)
- Hints and errors are **read out with the field** (`aria-describedby`), and errors set `aria-invalid`
- Alerts use `role="alert"` for problems and `role="status"` for good news
- The navigation marks the current link with `aria-current="page"`, and its menu button uses `aria-expanded`
- Icons are hidden from screen readers; icon-only buttons have an `aria-label`
- Colour is never the only signal: badges and errors always include words
- Text on coloured buttons stays readable in **both** themes

## What I learned

- **Create React App**: creating a project, the dev server with instant reload, `npm run build`, and the ESLint checks that stop a build
- **JSX**: `className`, `htmlFor`, curly braces, fragments, one outer element
- **Components and props**, default values, `children`, and passing other props through with `...rest`
- **Conditional rendering**: `&&`, `? :`, and returning `null`
- **Composition**: components inside components, and props that hold JSX (slots)
- **Lists**: `map()` and why `key` must be a stable id
- **State with `useState`**, event handlers, and keeping state in the component that uses it
- **Data flow**: data goes down as props, events come up as function calls
- **One source of truth**: the navigation is built from the same list as the sections
- **Testing with React Testing Library**: finding things by role and label, `user-event`, `jest.fn()`, and proving a test can fail
- **Importing images** so the build checks them and names them for caching

## How to run

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/vincentonyenze/component-showcase.git
cd component-showcase
npm install
npm start
```

It opens at **http://localhost:3000** and reloads instantly when you save a file.

| Command | Does |
|---|---|
| `npm start` | runs the app while you work on it |
| `npm test` | runs the tests, and re-runs them as you save (press `q` to quit) |
| `npm run build` | makes the finished, optimised app in `build/` |

**About Create React App:** the React team stopped recommending it in 2025, so `npm install` shows a deprecation warning and lists "vulnerabilities". Those are in its old **development tools**, not in the app itself. Don't run `npm audit fix --force`: it breaks Create React App projects. Later projects in my roadmap use **Vite** instead.

## Project structure

```
src/
├── index.js                # Starts React and draws <App /> into #root
├── index.css               # Design tokens, reset, page layout
├── App.js                  # The page: navigation, header, sections from a list
├── App.test.js
├── components/             # Reusable building blocks
│   ├── Button/             #   Button.js, Button.css, Button.test.js
│   ├── Badge/
│   ├── Alert/
│   ├── Card/
│   ├── Field/              #   Field (shared), TextField, Select, Checkbox
│   ├── Navbar/
│   └── Showcase/           #   ShowcaseSection, ExampleGroup (page layout pieces)
├── sections/               # The examples shown in each section of this page
├── assets/                 # Product photos
└── utils/
    └── classNames.js       # Joins class names, skipping empty ones
```

## Known limitations

- The form fields are **uncontrolled** (the browser keeps their values). Controlled inputs with state come in my next project.
- No `Modal`, `Tabs` or `Tooltip` components yet.
- The navigation highlights the link you click, not the section you've scrolled to.

## Credits

Product photos from [DummyJSON](https://dummyjson.com/), free sample data for practising web development.
