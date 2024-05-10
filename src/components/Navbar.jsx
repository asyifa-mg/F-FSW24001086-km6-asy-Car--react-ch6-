import React from "react";

export const Navbar = () => {
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img
              src=".//images/logo.svg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="100px"
              height="34px"
            />
          </a>

          <ul className="nav nav-pills mr-2 mb-lg-0">
            <li className="nav-item mx-3 my-1">
              <a href="#our-services" className="nav-link">
                Our Services
              </a>
            </li>
            <li className="nav-item mx-3 my-1">
              <a href="#why-us" className="nav-link">
                Why Us
              </a>
            </li>
            <li className="nav-item mx-3 my-1">
              <a href="#testimonials" className="nav-link">
                Testimonial
              </a>
            </li>
            <li className="nav-item mx-3 my-1">
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item mx-3 my-1">
              <a href="" className="btn btn-sewa">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="title">
        <div className="container-xxl">
          <div className="row">
            <div
              className="col-lg-5 mx-lg-5 col-xl-5 col-xxl-5 mx-md-0"
              style={{ paddingTop: "100px" }}
            >
              <h2 className="fw-bold" style={{ paddingRight: "20px" }}>
                Sewa & Rental Mobil Terbaik di kawasan Padang
              </h2>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <a href="cars.html" className="btn btn-sewa">
                Mulai Sewa Mobil
              </a>
            </div>
            <div
              className="col-lg-5 col-xl-6 col-xxl-6 mt-lg-3"
              style={{ paddingTop: "50px" }}
            >
              <img
                width="700"
                src="./assets/images/img_car.png"
                alt="Car Image"
                height="500px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
