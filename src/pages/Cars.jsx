// eslint-disable-next-line no-unused-vars
import React from "react";
import CarHeroComponent from "../components/CarHeroComponent";
import FooterComponent from "../components/FooterComponent";
import CarListComponent from "../components/CarListComponent";

function Cars() {
  return (
    <div>
      <CarHeroComponent />
      <CarListComponent />
      <FooterComponent />
    </div>
  );
}

export default Cars;
