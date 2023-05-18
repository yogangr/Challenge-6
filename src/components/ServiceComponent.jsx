// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImgService from "../assets/images/img_service.png";
import Icon from "../assets/images/checklist.png";

function ServiceComponent() {
  return (
    <div className="service" id="service">
      <Container>
        <Row>
          <Col>
            <img src={ImgService} alt="" className="img-service" />
          </Col>
          <Col>
            <h1 className="service-word">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <p className="service-description">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="list-service">
              <p>
                <span>
                  <img
                    src={Icon}
                    alt="checklist"
                    width="24px"
                    className="img-check"
                  />
                </span>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p>
                <span>
                  <img
                    src={Icon}
                    alt="checklist"
                    width="24px"
                    className="img-check"
                  />
                </span>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p>
                <span>
                  <img
                    src={Icon}
                    alt="checklist"
                    width="24px"
                    className="img-check"
                  />
                </span>
                Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p>
                <span>
                  <img
                    src={Icon}
                    alt="checklist"
                    width="24px"
                    className="img-check"
                  />
                </span>
                Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p>
                <span>
                  <img
                    src={Icon}
                    alt="checklist"
                    width="24px"
                    className="img-check"
                  />
                </span>
                Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceComponent;
