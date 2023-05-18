// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroComponent from "../components/HeroComponent";
import ServiceComponent from "../components/ServiceComponent";
import WhyUsComponent from "../components/WhyUsComponent";
import TestimoniComponent from "../components/TestimoniComponent";
import BannerComponent from "../components/BannerComponent";
import FaqComponent from "../components/FaqComponent";
import FooterComponent from "../components/FooterComponent";

function Home() {
  return (
    <div>
      <HeroComponent />
      <ServiceComponent />
      <WhyUsComponent />
      <TestimoniComponent />
      <BannerComponent />
      <FaqComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
