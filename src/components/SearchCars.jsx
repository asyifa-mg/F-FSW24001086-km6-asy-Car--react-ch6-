import React from "react";

const SearchCars = () => {
  return (
    <>
      <section className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipeDriver"
                  >
                    <option value="default" selected>
                      Pilih Tipe Driver
                    </option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="tanggal"
                  />
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                  <label>Pilih Waktu</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="waktuJemput"
                  >
                    <option value="false" selected>
                      Pilih Waktu
                    </option>
                    <option value="08:00">08:00 WIB</option>
                    <option value="09:00">09:00 WIB</option>
                    <option value="10:00">10:00 WIB</option>
                    <option value="11:00">11:00 WIB</option>
                    <option value="12:00">12:00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">
                    Jumlah Penumpang (opsional)
                  </label>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="jumlahPenumpang"
                      defaultValue="0"
                    />
                    <span className="input-group-text bg-white">
                      <img
                        src="./assets/images/fi_users.png"
                        width="20px"
                        alt="Users"
                      />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                  <button className="btn btn-sewa" id="load-btn">
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cars">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row" id="cars-container">
                {/* Ini area untuk menampilkan daftar mobil */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <div className="container-xxl mt-5">
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

              <div className="col-6 col-md-3">
                <p>Connect with us</p>
                <ul className="nav justify-content-center">
                  <li>
                    <img
                      src="./assets/images/icon_facebook.svg"
                      className="mx-1"
                      alt="Facebook"
                      width="32px"
                      height="32px"
                    />
                  </li>
                  <li>
                    <img
                      src="./assets/images/icon_instagram.svg"
                      className="mx-1"
                      alt="Instagram"
                      width="32px"
                      height="32px"
                    />
                  </li>
                  <li>
                    <img
                      src="./assets/images/icon_twitter.svg"
                      className="mx-1"
                      alt="Twitter"
                      width="32px"
                      height="32px"
                    />
                  </li>
                  <li>
                    <img
                      src="./assets/images/icon_mail.svg"
                      className="mx-1"
                      alt="Mail"
                      width="32px"
                      height="32px"
                    />
                  </li>
                  <li>
                    <img
                      src="./assets/images/icon_twitch.svg"
                      className="mx-1"
                      alt="Twitch"
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
    </>
  );
};

export default SearchMobil;
