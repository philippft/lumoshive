import PricingCard from "../components/PricingCard";

export default function Pricing() {
    return (
        <section className="section" id="pricing">
        <div className="container">
            <div className="section__head">
            <h2 className="section__title">Pricing</h2>
            <p className="section__subtitle">Three cards with a highlighted plan. Great for component variants.</p>
            </div>

            <div className="grid grid--3">
            <PricingCard title="Starter" description="For beginners who want a clean template." price="0" features={["1 landing page", "Basic components", "Community access"]} buttonText="Choose Starter" />

            <PricingCard title="Pro" description="For students slicing weekly challenges." price="9" features={["10 templates", "Component checklist", "Priority support"]} buttonText="Choose Pro" isFeatured={true} />

            <PricingCard title="Team" description="For group practice and code reviews." price="29" features={["Unlimited templates", "Team guidelines", "Review sessions"]} buttonText="Choose Team" />
            </div>
        </div>
        </section>
    );
}