import Label from "./common/Label";

export default function PricingCard({ title, description, price, features, buttonText, isFeatured = false,}) {
  return (
    <article className={`price-card ${isFeatured ? "price-card--featured" : ""}`}>
      {isFeatured && <div className="price-card__tag">Most popular</div>}

      <h3 className="price-card__title">{title}</h3>
      <p className="price-card__desc">{description}</p>

      <div className="price-card__price">
        <span className="price-card__currency">$</span>
        <span className="price-card__amount">{price}</span>
        <span className="price-card__period">/mo</span>
      </div>

      <ul className="list list--compact">
        {features.map((feature, index) => (
          <Label key={index} text={feature} />
        ))}
      </ul>
      <a className={`btn btn--full ${isFeatured ? "btn--primary" : "btn--secondary"}`} href="#"> {buttonText} </a>
    </article>
  );
}
