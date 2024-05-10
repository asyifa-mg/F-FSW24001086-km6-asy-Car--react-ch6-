import React from "react";
import { Navbar } from "../components/Navbar";
import { OurServices } from "../components/OurServices";
import { WhyUs } from "../components/WhyUs";
import { Testimonial } from "../components/Testimonial";
import { Banner } from "../components/Banner";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
      <Footer />
    </>
  );
}
