export default function Navbar() {
    return (
    <nav className="nav">
    <a href="/" className="creepy-facts">Creepy Facts</a>
    <ul>
    <CustomLink href="/fact1">Fact 1</CustomLink>
    <CustomLink href="/fact2">Fact 2</CustomLink>
    <CustomLink href="/fact3">Fact 3</CustomLink>
        

    </ul>
    </nav>
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}{...props}>{children}</a>
        </li>
    )

}