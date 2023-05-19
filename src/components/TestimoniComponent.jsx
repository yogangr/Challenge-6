// eslint-disable-next-line no-unused-vars
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Container } from "react-bootstrap";
import Pp1 from "../assets/images/pp1.png";
import Pp2 from "../assets/images/pp2.png";
import Rate from "../assets/images/Rate.png";

function TestimoniComponent() {
  return (
    <div className="testimonial" id="testimonial">
      <Container fluid>
        <div className="testi text-center">
          <h1 className="text-testi">Testimonial</h1>
          <p className="h6">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items={1}
          nav
          navText={[
            "<img src='src/assets/images/prev_button.png'>",
            "<img src='src/assets/images/next_button.png'>",
          ]}
          dots={false}
          stagePadding={425}
        >
          <div className="item">
            <div className="row">
              <div className="col-4">
                <img className="profile-img" src={Pp2} alt="" />
              </div>
              <div className="col-8">
                <img className="rate" src={Rate} alt="" />
                <p className="profile-desc fw-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, natus. Corrupti illo architecto, quo perferendis
                  sapiente ex recusandae adipisci natus!
                </p>
                <h6 className="h6 fw-bold">John Dee 32, Bromo</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-4">
                <img className="profile-img" src={Pp1} alt="" />
              </div>
              <div className="col-8">
                <img className="rate" src={Rate} alt="" />
                <p className="profile-desc fw-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  eaque possimus placeat totam asperiores, corporis unde
                  incidunt quis nobis hic.
                </p>
                <h6 className="h6 fw-bold">John Dee 32, Bromo</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-4">
                <img className="profile-img" src={Pp2} alt="" />
              </div>
              <div className="col-8">
                <img className="rate" src={Rate} alt="" />
                <p className="profile-desc fw-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem eligendi inventore quas non illo blanditiis
                  accusamus reprehenderit vel, dolor asperiores?
                </p>
                <h6 className="h6 fw-bold">John Dee 32, Bromo</h6>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </div>
  );
}

export default TestimoniComponent;
