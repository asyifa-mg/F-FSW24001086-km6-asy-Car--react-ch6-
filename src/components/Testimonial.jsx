import React from "react";

export const Testimonial = () => {
  return (
    <section id="testimonials">
      <div className="col-lg-12 text-center my-5">
        <h2 className="pb-2 text-center">
          <b>Testimonial</b>
        </h2>
        <p className="text-center">
          Berbagai review positif dari para pelanggan kami
        </p>
      </div>

      <div id="carouselExample" className="carousel slide m-auto">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="col d-flex align-items-start py-5 px-5">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <img
                  src="./assets/images/img_photo.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Testimonial 1"
                  width="70.22px"
                  height="80px"
                />
              </div>
              <div>
                <img
                  src="./assets/images/Rate.svg"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Rating"
                  width="80px"
                  height="16px"
                />
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p>John Dee, 32, Bromo</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="col d-flex align-items-start py-5 px-5">
                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <img
                    src="./assets/images/img_photo.png"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Testimonial 2"
                    width="70.22px"
                    height="80px"
                  />
                </div>
                <div>
                  <img
                    src="./assets/images/Rate.svg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Rating"
                    width="80px"
                    height="16px"
                  />
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p>John Dee, 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          style={{ width: "auto" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          style={{ width: "auto" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
