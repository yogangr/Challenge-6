// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import ImageCar from "../assets/images/img_car.png";

function CarHeroComponent() {
  return (
    <div className="hero">
      <NavbarComponent />
      <Container>
        <Row>
          <Col>
            <h1 className="judul-hero">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="description-hero">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </Col>
          <Col>
            <div className="bg-color position-absolute"></div>
            <img
              className="img-hero img-fluid position-absolute"
              src={ImageCar}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarHeroComponent;
