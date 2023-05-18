import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoComponent from "./LogoComponent";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <LogoComponent />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#service" className="me-3">
              Our Service
            </Nav.Link>
            <Nav.Link href="#whyus" className="me-3">
              Why Us
            </Nav.Link>
            <Nav.Link href="#testimonial" className="me-3">
              Testimonial
            </Nav.Link>
            <Nav.Link href="#faq" className="me-3">
              FAQ
            </Nav.Link>
          </Nav>
          <Button className="btn" variant="success">
            Register
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
