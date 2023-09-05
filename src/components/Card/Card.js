import { classNames } from "../../utils/classNames";
import "./Card.css";

// A box that groups related content: an optional image, a small label
// above the title, the title, the content, and an optional footer.
//
//   <Card
//     image={photo}
//     imageAlt="MacBook Pro"
//     eyebrow={<Badge tone="info">New</Badge>}
//     title="MacBook Pro 14"
//     footer={<Button fullWidth>Add to cart</Button>}
//   >
//     <p>$1,999.99</p>
//   </Card>
//
// Card doesn't know or care what goes in it. `eyebrow`, `footer` and
// `children` can be ANY JSX: text, a Badge, Buttons, other components...
// Building components out of other components is called COMPOSITION.
//
// Props:
//   image, imageAlt  a picture at the top (imageAlt "" if it's decorative)
//   eyebrow          something small above the title (often a Badge)
//   title            the heading
//   titleAs          which heading tag to use, "h3" by default, so the page's
//                    heading outline stays correct wherever the card is used
//   footer           something at the bottom (often Buttons)
//   children         the main content
function Card({
  image,
  imageAlt = "",
  eyebrow,
  title,
  titleAs: Title = "h3",
  footer,
  className,
  children,
}) {
  // `titleAs: Title` renames the prop while destructuring. A variable that
  // starts with a capital letter can be used as a JSX tag: <Title> becomes
  // <h3>, <h2>... whatever string it holds.
  return (
    <article className={classNames("card", className)}>
      {image && (
        <div className="card__media">
          <img className="card__image" src={image} alt={imageAlt} />
        </div>
      )}

      <div className="card__body">
        {eyebrow && <div className="card__eyebrow">{eyebrow}</div>}
        {title && <Title className="card__title">{title}</Title>}
        {children && <div className="card__content">{children}</div>}
      </div>

      {footer && <div className="card__footer">{footer}</div>}
    </article>
  );
}

export default Card;
