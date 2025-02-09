import React, { useState, ReactNode } from "react";
import tripContext from "./trip-context";

const TripContextProvider = ({ children }: { children: ReactNode }) => {
  const [trip, setTrip] = useState<string>("One Way");

  return (
    <tripContext.Provider value={{ trip, setTrip }}>
      {children}
    </tripContext.Provider>
  );
};

export default TripContextProvider;
