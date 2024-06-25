'use client';

import { createContext, useState, useEffect } from 'react';
import api from 'components/utils/api';

export const FleetContext = createContext();

export function FleetProvider({ children }) {
  const [carDetails, setCarDetails] = useState();
  const [carCatData, setCarCatData] = useState();

  // useEffect(() => {
  //   const fetchCarDetails = async () => {
  //     try {
  //       const res = await api.get("/vehicle-categories/allDetails");
  //       console.log("fleet context:", res);
  //       setCarCatData(res?.data);
  //     } catch (error) {
  //       console.log("error fetching vehicle cat:", error);
  //     }
  //   };
  //   fetchCarDetails();
  // }, []);

  return (
    <FleetContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        carCatData,
        setCarCatData,
        carDetails,
        setCarDetails,
      }}
    >
      {children}
    </FleetContext.Provider>
  );
}
