// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LogoComponent from "./LogoComponent";
import IconMedsos1 from "../assets/images/icon_facebook.png";
import IconMedsos2 from "../assets/images/icon_instagram.png";
import IconMedsos3 from "../assets/images/icon_twitter.png";
import IconMedsos4 from "../assets/images/icon_mail.png";
import IconMedsos5 from "../assets/images/icon_twitch.png";

function FooterComponent() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="footer-1 col-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col className="footer-2 col-2">
            <a href="#service">
              <p>Our Service</p>
            </a>
            <a href="#why-us">
              <p>Why Us</p>
            </a>
            <a href="#testimonial">
              <p>Testimonial</p>
            </a>
            <a href="#faq">
              <p>FAQ</p>
            </a>
          </Col>
          <Col className="footer-3 col-4">
            <p>Connect with us</p>
            <div className="icon-footer d-inline">
              <img className="me-3" src={IconMedsos1} alt="" />
              <img className="me-3" src={IconMedsos2} alt="" />
              <img className="me-3" src={IconMedsos3} alt="" />
              <img className="me-3" src={IconMedsos4} alt="" />
              <img className="me-3" src={IconMedsos5} alt="" />
            </div>
          </Col>
          <Col className="footer-4 col-3">
            <p>Copyright Binar 2022</p>
            <LogoComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComponent;
