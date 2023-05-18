// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function FaqComponent() {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="row-faq">
          <Col className="col-5">
            <h1 className="h1">Frequently Asked Question</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Col>
          <Col className="col-7">
            <Accordion>
              <Accordion.Item eventKey="0" className="border-top rounded-1">
                <Accordion.Header>
                  Apa saja syarat yang dibutuhkan?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam provident tempora labore omnis eos, nemo, ut repellendus
                  ducimus molestias ipsum veniam amet architecto. Eligendi non,
                  corporis iusto esse tenetur odio provident impedit minima
                  dolore nihil voluptate fugiat hic exercitationem explicabo,
                  ipsum laborum nobis maxime quo!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border-top rounded-1">
                <Accordion.Header>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus provident perferendis harum debitis ex. Culpa ipsum
                  commodi exercitationem dolorum? Quibusdam adipisci
                  voluptatibus dolore eos, voluptate distinctio odio delectus
                  mollitia enim provident minima labore repellendus impedit et,
                  natus iure ex, reiciendis unde. Aspernatur asperiores iusto
                  nihil quo harum corporis repudiandae id?
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border-top rounded-1">
                <Accordion.Header>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus provident perferendis harum debitis ex. Culpa ipsum
                  commodi exercitationem dolorum? Quibusdam adipisci
                  voluptatibus dolore eos, voluptate distinctio odio delectus
                  mollitia enim provident minima labore repellendus impedit et,
                  natus iure ex, reiciendis unde. Aspernatur asperiores iusto
                  nihil quo harum corporis repudiandae id?
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="border-top rounded-1">
                <Accordion.Header>
                  Apakah Ada biaya antar-jemput?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus provident perferendis harum debitis ex. Culpa ipsum
                  commodi exercitationem dolorum? Quibusdam adipisci
                  voluptatibus dolore eos, voluptate distinctio odio delectus
                  mollitia enim provident minima labore repellendus impedit et,
                  natus iure ex, reiciendis unde. Aspernatur asperiores iusto
                  nihil quo harum corporis repudiandae id?
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="border-top rounded-1">
                <Accordion.Header>
                  Bagaimana jika terjadi kecelakaan
                </Accordion.Header>
                <Accordion.Body>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus provident perferendis harum debitis ex. Culpa ipsum
                  commodi exercitationem dolorum? Quibusdam adipisci
                  voluptatibus dolore eos, voluptate distinctio odio delectus
                  mollitia enim provident minima labore repellendus impedit et,
                  natus iure ex, reiciendis unde. Aspernatur asperiores iusto
                  nihil quo harum corporis repudiandae id?
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FaqComponent;
