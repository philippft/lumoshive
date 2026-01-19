import NavbarButton from "./common/NavbarButton"

export default function Navbar() {
    return (
        <>
        <header className="navbar">
            <div className="container navbar__inner">
            <a className="brand" href="#">
                <span className="brand__logo" aria-hidden="true">◇</span>
                <span className="brand__text">Idaz</span>
            </a>

            <nav className="nav" aria-label="Primary">
                <a className="nav__link" href="#features">Features</a>
                <a className="nav__link" href="#testimonials">Testimonials</a>
                <a className="nav__link" href="#pricing">Pricing</a>
                <a className="nav__link" href="#faq">FAQ</a>
            </nav>

            <div className="navbar__actions">
                <NavbarButton teks="Sign in" className="btn btn--ghost" href="#pricing" />
                <NavbarButton teks="Get started" className="btn btn--primary" href="#get-started" />
            </div>
            </div>
        </header>
        </>
    )
}