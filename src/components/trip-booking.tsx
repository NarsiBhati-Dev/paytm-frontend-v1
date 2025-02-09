"use client";
import React from "react";
import TripSelector from "./trip-selector";
import TripContextProvider from "@/context-api/trip-context-provider";
import TripLocation from "./trip-location";
import TripTime from "./trip-time";
import Image from "next/image";

const TripBooking = () => {
  return (
    <TripContextProvider>
      {/* {top bar } */}
      <TripSelector />

      {/* {location From and To} */}
      <TripLocation />

      {/* {timing of trip} */}
      <TripTime />

      {/* {cabin class} */}
      <div className="text-left border-b-2 w-full mt-4 pb-2">
        <p className="text-gray-500 text-[12px]">Travelers & Cabin Class</p>
        <h1 className="font-bold text-8">1 Adult Economy</h1>
      </div>

      {/* {Offers fot trip} */}
      <div className="flex justify-between mt-4">
        <div className="text-left w-full">
          <p className="text-gray-500 text-[12px]">Special Fares (optional)</p>
        </div>
        <div className="text-right w-full ">
          <div className="text-green-600 text-[12px] flex justify-end gap-1">
            <Image
              src={"/a6fdca89..png"}
              alt={"saving"}
              width={14}
              height={14}
            />{" "}
            <p className="font-semibold">Extra Savings</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2 pb-2">
        <div className="text-left w-full">
          <div className="flex gap-4 mt-1">
            <div className="border text-start px-2 py-1 rounded hover:bg-[#00baf2] hover:text-white group cursor-pointer">
              <h3 className="text-[12px] font-semibold group-hover:text-white">
                Armed Forces
              </h3>
              <p className="text-gray-500 text-[10px] group-hover:text-white">
                {" "}
                Up to ₹600 off
              </p>
            </div>
            <div className="border text-start px-2 py-1 rounded hover:bg-[#00baf2] hover:text-white group cursor-pointer">
              <h3 className="text-[12px] font-semibold group-hover:text-white">
                Student
              </h3>
              <p className="text-gray-500 text-[10px] group-hover:text-white">
                {" "}
                Extra Baggage
              </p>
            </div>
            <div className="border text-start px-2 py-1 rounded hover:bg-[#00baf2] hover:text-white group cursor-pointer">
              <h3 className="text-[12px] font-semibold group-hover:text-white">
                Senior Citizen
              </h3>
              <p className="text-gray-500 text-[10px] group-hover:text-white">
                {" "}
                Up to ₹600 off
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#00baf2] p-5 rounded-sm mt-4 text-white font-extrabold ease-in-out hover:bg-blue-400">
        Search Flights
      </button>
    </TripContextProvider>
  );
};

export default TripBooking;
