import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to={"/"} as={NavLink}>
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            style={{ width: '50px' }}
                        />
                        <b>Unsplash</b>
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}
export default Navbar;