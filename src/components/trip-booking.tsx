"use client";
import React from "react";
import TripSelector from "./trip-selector";
import TripContextProvider from "@/context-api/trip-context-provider";

const TripBooking = () => {
  return (
    <TripContextProvider>
      <TripSelector />;
    </TripContextProvider>
  );
};

export default TripBooking;
