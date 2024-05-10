import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SearchCars } from "../components/SearchCars";

export default function Search() {
  return (
    <>
      <Navbar />
      <SearchCars />
      <Footer />
    </>
  );
}
