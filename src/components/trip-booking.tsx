"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import TripSelector from "./trip-selector";

const TripBooking = () => {
  return (
    <RecoilRoot>
      <TripSelector />
    </RecoilRoot>
  );
};

export default TripBooking;
