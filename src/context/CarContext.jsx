import React, { createContext, useContext, useEffect, useState } from "react";

const CarContext = createContext();

export const useCarContext = () => {
  return useContext(CarContext);
};

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      });
  }, []);

  return (
    <CarContext.Provider value={{ cars, filteredCars, setFilteredCars }}>
      {children}
    </CarContext.Provider>
  );
};
