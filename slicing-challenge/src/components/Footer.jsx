
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
            <div className="footer__brand">
                <div className="brand brand--footer">
                <span className="brand__logo" aria-hidden="true">◇</span>
                <span className="brand__text">Idaz</span>
                </div>
                <p className="footer__text">A simple page for slicing into React components.</p>
            </div>

            <div className="footer__links">
                <div className="link-col">
                <div className="link-col__title">Product</div>
                <a className="link" href="#features">Features</a>
                <a className="link" href="#pricing">Pricing</a>
                <a className="link" href="#faq">FAQ</a>
                </div>

                <div className="link-col">
                <div className="link-col__title">Company</div>
                <a className="link" href="#">About</a>
                <a className="link" href="#">Careers</a>
                <a className="link" href="#">Contact</a>
                </div>

                <div className="link-col">
                <div className="link-col__title">Resources</div>
                <a className="link" href="#">Docs</a>
                <a className="link" href="#">Community</a>
                <a className="link" href="#">Support</a>
                </div>
            </div>
            </div>

            <div className="container footer__bottom">
            <span>© 2026 Idaz. All rights reserved.</span>
            <span className="footer__small">Made for HTML/CSS slicing practice.</span>
            </div>
        </footer>
    )
}