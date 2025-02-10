"use client";

import tripContext from "@/context-api/trip-context";
import clsx from "clsx";
import { FC, useContext } from "react";

interface RadioButtonProps {
  title: string;
}

const RadioButton: FC<RadioButtonProps> = ({ title }) => {
  const context = useContext(tripContext);

  if (!context) {
    return;
  }

  const { trip, setTrip } = context;

  return (
    <div
      className={clsx(
        "w-full text-center p-1 cursor-pointer ease-in-out transition-all duration-300",
        trip == title
          ? "bg-white rounded-sm font-medium text-[#00baf2]"
          : "text-gray-600"
      )}
      onClick={() => setTrip(title)}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default RadioButton;
