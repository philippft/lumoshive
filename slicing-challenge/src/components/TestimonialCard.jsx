export default function TestimonialCard({ text, avatarClass, name, role }) {
  return (
    <>
        <article className="testimonial">
        <p className="testimonial__text">{text}</p>
        <div className="testimonial__meta">
            <span className={`avatar ${avatarClass}`} aria-hidden="true"></span>
            <div>
            <div className="testimonial__name">{name}</div>
            <div className="testimonial__role">{role}</div>
            </div>
        </div>
        </article>
    </>
  );
}
