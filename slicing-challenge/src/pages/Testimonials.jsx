import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Loved by learners</h2>
          <p className="section__subtitle">
            Great for practicing props, lists, and layout.
          </p>
        </div>

        <div className="grid grid--3">
          <TestimonialCard 
            text="I finally understood how to split a page into components without overthinking." 
            avatarClass="avatar--a" 
            name="Alya" 
            role="Frontend student" 
          />
          <TestimonialCard 
            text="The section layout is clean and the cards are perfect for reuse." 
            avatarClass="avatar--c" 
            name="Bima" 
            role="Bootcamp participant" 
          />
          <TestimonialCard 
            text="Easy to theme. I swapped colors and added dark mode in 10 minutes." 
            avatarClass="avatar--e" 
            name="Citra" 
            role="Junior developer" 
          />
        </div>
      </div>
    </section>
  );
}