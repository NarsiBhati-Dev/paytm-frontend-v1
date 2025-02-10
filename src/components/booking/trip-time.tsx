import React, { useContext } from "react";
import tripContext from "@/context-api/trip-context";

const TripTime = () => {
  const context = useContext(tripContext);

  if (!context) {
    return;
  }

  const { trip } = context;

  return (
    <div className="flex justify-between items-center border-b-2 pb-2 pt-5">
      <div className=" text-left w-full ">
        <p className="text-gray-500 text-[12px]">Departure Date</p>
        <h2 className="font-bold text-8">Thu, 13 Feb 25</h2>
      </div>
      <div className="text-left w-full">
        {trip == "One Way" && (
          <div className="text-right w-full">
            <p className="text-gray-500 text-[12px]">Save more on Roundtrip</p>
            <h1 className="text-[#00baf2] font-semibold">+ Add Return</h1>
          </div>
        )}
        {trip == "Round Trip" && (
          <div className="text-right w-full">
            <p className="text-gray-500 text-[12px]">Return Date</p>
            <h1 className="text-[#00baf2] font-semibold">Choose Date</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripTime;
