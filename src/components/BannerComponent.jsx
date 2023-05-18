// eslint-disable-next-line no-unused-vars
import React from "react";
import CtaComponent from "./CtaComponent";

function BannerComponent() {
  return (
    <div className="banner rounded-3 text-center">
      <div className="container">
        <p className="banner-text text-white">
          Sewa Mobil di (Lokasimu) Sekarang
        </p>
        <p className="banner-desc text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          provident consequuntur veritatis molestiae ipsum quod!
        </p>
        <CtaComponent />
      </div>
    </div>
  );
}

export default BannerComponent;
