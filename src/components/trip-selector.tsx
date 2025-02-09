"use client";

import React, { useState } from "react";
import RadioButton from "./radio-button";

const TripSelector = () => {
  const [trip, setTrip] = useState("One Way");

  return (
    <div className="flex justify-between bg-[#e8f8fd] p-0.5 rounded-md w-full">
      <RadioButton title={"One Way"} trip={trip} setTrip={setTrip} />
      <RadioButton title={"Round Trip"} trip={trip} setTrip={setTrip} />
    </div>
  );
};

export default TripSelector;
