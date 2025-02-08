import React from "react";

const RadioButtons = () => {
  return (
    <div className="px-4 flex gap-4">
      <div className="flex justify-center items-center gap-2">
        <input type="radio" id="One-Way" name="trip" className="peer size-5" />
        <label htmlFor="One-Way">One Way</label>
      </div>
      <div className="flex justify-center items-center gap-2">
        <input
          type="radio"
          id="Round-Trip"
          name="trip"
          className="peer size-5"
        />
        <label htmlFor="Round-Trip">Round Trip</label>
      </div>
    </div>
  );
};

export default RadioButtons;
