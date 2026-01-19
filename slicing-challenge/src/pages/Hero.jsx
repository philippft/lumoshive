import NavbarButton from "../components/common/NavbarButton";
import HeroCardPreview from "../components/HeroCardPreview";

export default function Hero () {
    return (
        <section className="hero">
        <div className="container hero__inner">
            <div className="hero__content">
            <p className="badge">
                <span className="badge__dot" aria-hidden="true"></span>
                New: Weekly UI challenges for students
            </p>

            <h1 className="hero__title">
                Build clean, reusable UI components
                <span className="hero__title-accent">fast</span>
            </h1>

            <p className="hero__subtitle">
                A simple landing page template for slicing practice.
                Your task: break this page into small components and reuse them.
            </p>

            <div className="hero__cta">
                <NavbarButton teks="Sign in" className="btn btn--primary" href="#pricing" />
                <NavbarButton teks="Get started" className="btn btn--ghost" href="#pricing" />
            </div>

            <div className="hero__meta">
                <div className="avatar-row" aria-label="Happy learners">
                <span className="avatar avatar--a" aria-hidden="true"></span>
                <span className="avatar avatar--b" aria-hidden="true"></span>
                <span className="avatar avatar--c" aria-hidden="true"></span>
                <span className="avatar avatar--d" aria-hidden="true"></span>
                <span className="avatar avatar--e" aria-hidden="true"></span>
                <span className="avatar-row__text">Trusted by 2,400+ learners</span>
                </div>

                <div className="rating">
                <span className="rating__stars" aria-hidden="true">★★★★★</span>
                <span className="rating__text">4.9/5 average rating</span>
                </div>
            </div>
            </div>

            <div className="hero__visual" aria-hidden="true">
                <div className="card-preview">
                    <HeroCardPreview />
                </div>
            </div>
        </div>
        </section>
    )
}