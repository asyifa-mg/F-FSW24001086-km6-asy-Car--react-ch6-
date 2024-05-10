import React from "react";

export const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>

            <div className="col-6 col-md-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <b>
                    <a
                      href="#our-services"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Our Services
                    </a>
                  </b>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#why-us"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Why Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#testimonials"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Testimonial
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#faq" className="nav-link p-0 text-body-secondary">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <p>Connect with us</p>
              <ul className="nav justify-content-center">
                <li>
                  <img
                    src="./assets/images/icon_facebook.svg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Facebook"
                    loading="lazy"
                    width="32px"
                    height="32px"
                  />
                </li>
                <li>
                  <img
                    src="./assets/images/icon_instagram.svg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Instagram"
                    loading="lazy"
                    width="32px"
                    height="32px"
                  />
                </li>
                <li>
                  <img
                    src="./assets/images/icon_twitter.svg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Twitter"
                    loading="lazy"
                    width="32px"
                    height="32px"
                  />
                </li>
                <li>
                  <img
                    src="./assets/images/icon_mail.svg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Mail"
                    loading="lazy"
                    width="32px"
                    height="32px"
                  />
                </li>
                <li>
                  <img
                    src="./assets/images/icon_twitch.svg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Twitch"
                    loading="lazy"
                    width="32px"
                    height="32px"
                  />
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <p>Copyright Binar 2022</p>
              <img
                src="./assets/images/logo.svg"
                className="d-block mx-lg-auto img-fluid"
                alt="Binar Logo"
                width="100px"
                height="34px"
              />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
