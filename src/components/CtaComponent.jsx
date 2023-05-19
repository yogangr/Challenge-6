// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CtaComponent() {
  return (
    <div className="cta">
      <Button variant="success" className="btn" as={Link} to="/cars">
        Mulai Sewa Mobil
      </Button>
    </div>
  );
}

export default CtaComponent;
