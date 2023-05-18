// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ThumbsUp from "../assets/images/icon_thubms-up.png";
import Tag from "../assets/images/icon_tag.png";
import Clock from "../assets/images/icon_clock.png";
import Award from "../assets/images/icon_award.png";

function WhyUsComponent() {
  return (
    <div className="why-us" id="whyus">
      <Container>
        <h1 className="fs-4 fw-bold judul-why-us">Why Us?</h1>
        <p className="fw-light why-us-description">
          Mengapa harus pilih Binar Car Rental?
        </p>
        <Row className="list-item">
          <Col className="border border-2 list-us">
            <img src={ThumbsUp} alt="..." className="icon-us" />
            <p className="sub-judul">Mobil lengkap</p>
            <p className="deskripsi-why-us">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </Col>
          <Col className="border border-2 list-us">
            <img src={Tag} alt="..." className="icon-us" />
            <p className="sub-judul">Harga Murah</p>
            <p className="deskripsi-why-us">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </Col>
          <Col className="border border-2 list-us">
            <img src={Clock} alt="..." className="icon-us" />
            <p className="sub-judul">Layanan 24 jam</p>
            <p className="deskripsi-why-us">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </Col>
          <Col className="border border-2 list-us">
            <img src={Award} alt="..." className="icon-us" />
            <p className="sub-judul">Sopir Profesional</p>
            <p className="deskripsi-why-us">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyUsComponent;
