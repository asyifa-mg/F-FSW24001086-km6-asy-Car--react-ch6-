import React from "react";

export const Banner = () => {
  return (
    <section id="banner">
      <div className="container-xxl">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mt-2">
          <div className="page-home-corporate-card">
            <h3 className="page-home-corporate-card-title">
              Sewa Mobil di Padang Sekarang
            </h3>
            <div className="page-home-corporate-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <a href="cars.html" className="btn btn-sewa">
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
