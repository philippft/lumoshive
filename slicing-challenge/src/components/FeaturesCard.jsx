
export default function FeaturesCard({icon, title, text, href, link}) {
    return (
        <article className="feature-card">
                <div className="icon-bubble" aria-hidden="true">{icon}</div>
                <h3 className="feature-card__title">{title}</h3>
                <p className="feature-card__text">
                {text}
                </p>
                <a className="feature-card__link" href={href}>{link}</a>
        </article>
    )
}