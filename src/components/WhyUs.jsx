import React from "react";

export const WhyUs = () => {
  return (
    <section className="whyus" id="why-us">
      <div className="container">
        <div className="row">
          <h2>
            <b>Why Us?</b>
          </h2>
          <p style={{ marginTop: "16px" }}>
            Mengapa harus pilih Binar Car Rental
          </p>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          {/* Kotak 1 */}
          <div className="col-lg-3">
            <div className="feature">
              <img
                src="./assets/images/icon_complete.svg"
                alt="Mobil Lengkap"
              />
              <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                Mobil Lengkap
              </h2>
              <p style={{ lineHeight: "20px" }}>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat.
              </p>
            </div>
          </div>

          {/* Kotak 2 */}
          <div className="col-lg-3">
            <div className="feature">
              <img src="./assets/images/icon_price.svg" alt="Harga Murah" />
              <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                Harga Murah
              </h2>
              <p className="fs-6" style={{ lineHeight: "20px" }}>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain.
              </p>
            </div>
          </div>

          {/* Kotak 3 */}
          <div className="col-lg-3">
            <div className="feature">
              <img src="./assets/images/icon_24hrs.svg" alt="Layanan 24 Jam" />
              <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                Layanan 24 Jam
              </h2>
              <p style={{ lineHeight: "20px" }}>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu.
              </p>
            </div>
          </div>

          {/* Kotak 4 */}
          <div className="col-lg-3">
            <div className="feature">
              <img
                src="./assets/images/icon_professional.svg"
                alt="Sopir Profesional"
              />
              <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                Sopir Profesional
              </h2>
              <p style={{ lineHeight: "20px" }}>
                Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu
                tepat waktu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
