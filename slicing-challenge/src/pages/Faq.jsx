import FaqCard from "../components/FaqCard";

export default function Faq() {
    return (
        <section className="section section--alt" id="faq">
            <div className="container">
                <div className="section__head">
                <h2 className="section__title">FAQ</h2>
                <p className="section__subtitle">Each item can become its own component.</p>
                </div>

                <div className="faq">
                    <FaqCard open={true} question="What does “slicing” mean?" answer="Slicing means breaking a page into reusable UI components, then rebuilding it using those components." />

                    <FaqCard open={false} question="Should we slice by section or by UI pattern?" answer="Start by section, then extract repeated patterns like buttons, cards, badges, and layout wrappers." />
                    
                    <FaqCard open={false} question="Can we change the design?" answer="Yes. After slicing, you can theme it, add dark mode, or replace content as long as structure remains similar." />
                </div>
            </div>
        </section>
    );
}