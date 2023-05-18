// eslint-disable-next-line no-unused-vars
import React from "react";
import CarHeroComponent from "../components/CarHeroComponent";
import FooterComponent from "../components/FooterComponent";
import SearchCarComponent from "../components/SearchCarComponent";

function Cars() {
  return (
    <div>
      <CarHeroComponent />
      <SearchCarComponent />
      <FooterComponent />
    </div>
  );
}

export default Cars;
