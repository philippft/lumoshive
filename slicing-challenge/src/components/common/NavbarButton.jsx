
export default function NavbarButton({ teks, className, href }) {
    return (
        <a className={className} href={href}>{teks}</a>
    )
}