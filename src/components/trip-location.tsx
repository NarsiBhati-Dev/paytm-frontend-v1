import React from "react";
import Image from "next/image";

const TripLocation = () => {
  return (
    <div className="flex justify-between items-center gap-2 pt-5">
      <div className="border-b-2 text-left w-full">
        <p className="text-gray-500 pl-1 text-[12px]">From</p>
        <h2 className="font-normal text-[32px]">DEL</h2>
        <p className="text-gray-500 pl-1 text-[12px] mb-3">Delhi</p>
      </div>
      <Image src={"/e5e744ba..png"} alt={"swp Image"} width={40} height={40} />
      <div className="text-right border-b-2 w-full">
        <p className="text-gray-500  text-[12px] pr-1">To</p>
        <h2 className="font-normal text-[32px]">BOM</h2>
        <p className="text-gray-500 pl-1 text-[12px] pr-1 mb-3">Mumbai</p>
      </div>
    </div>
  );
};

export default TripLocation;
