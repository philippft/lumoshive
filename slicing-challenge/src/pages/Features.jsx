import FeaturesCard from "../components/FeaturesCard";
import FeaturesSplit from "../components/FeaturesSplit";

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Features made for slicing practice</h2>
          <p className="section__subtitle">
            Each block is designed to become a small component.
          </p>
        </div>
        <div className="grid grid--3">
          <FeaturesCard
            icon="⚡"
            title="Clean spacing"
            text="Consistent paddings and gaps so your components look aligned."
            href="#pricing"
            link="Learn more"
          />
          <FeaturesCard
            icon="🧩"
            title="Reusable cards"
            text="Card patterns you can reuse for products, posts, or services."
            href="#testimonials"
            link="See examples"
          />
          <FeaturesCard
            icon="🎯"
            title="Simple colors"
            text="Neutral base with one accent color, easy to theme later."
            href="#faq"
            link="How to slice"
          />
        </div>
        <FeaturesSplit />
      </div>
    </section>
  );
}
