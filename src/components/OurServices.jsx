import React from "react";

export const OurServices = () => {
  return (
    <section className="content" id="our-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-4" style={{ paddingTop: "50px" }}>
            <img
              src="./assets/images/img_service.png"
              alt="Service"
              height="428px"
            />
          </div>

          <div className="col-lg-6" style={{ paddingTop: "50px" }}>
            <h2 style={{ paddingRight: "200px", paddingTop: "50px" }}>
              <b>Best Car Rental for any kind of trip in Padang!</b>
            </h2>

            <p style={{ fontSize: "14px", paddingRight: "30px" }}>
              Sewa mobil di Padang bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </p>

            <div className="checklist">
              <p>
                <img
                  src="./assets/images/Group 53.svg"
                  style={{ marginRight: "16px" }}
                  alt="Checklist"
                />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
            </div>

            <div className="checklist">
              <p>
                <img
                  src="./assets/images/Group 53.svg"
                  style={{ marginRight: "16px" }}
                  alt="Checklist"
                />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
            </div>

            <div className="checklist">
              <p>
                <img
                  src="./assets/images/Group 53.svg"
                  style={{ marginRight: "16px" }}
                  alt="Checklist"
                />
                Sewa Mobil Jangka Panjang Bulanan
              </p>
            </div>

            <div className="checklist">
              <p>
                <img
                  src="./assets/images/Group 53.svg"
                  style={{ marginRight: "16px" }}
                  alt="Checklist"
                />
                Gratis Antar - Jemput Mobil di Bandara
              </p>
            </div>

            <div className="checklist">
              <p>
                <img
                  src="./assets/images/Group 53.svg"
                  style={{ marginRight: "16px" }}
                  alt="Checklist"
                />
                Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
