import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoComponent from "./LogoComponent";
import Button from "react-bootstrap/Button";
import { HashLink } from "react-router-hash-link";

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
            <Nav.Link className="me-3">
              <HashLink className="haslink" to={"/#service"}>
                Our Service
              </HashLink>
            </Nav.Link>
            <Nav.Link className="me-3">
              <HashLink className="haslink" to={"/#whyus"}>
                Why Us
              </HashLink>
            </Nav.Link>
            <Nav.Link className="me-3">
              <HashLink className="haslink" to={"/#testimonial"}>
                Testimonial
              </HashLink>
            </Nav.Link>
            <Nav.Link className="me-3">
              <HashLink className="haslink" to={"/#faq"}>
                FAQ
              </HashLink>
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
