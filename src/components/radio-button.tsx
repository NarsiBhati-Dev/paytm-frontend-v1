"use client";

import clsx from "clsx";
import { FC } from "react";

interface RadioButtonProps {
  title: string;
  trip: string;
  setTrip: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButton: FC<RadioButtonProps> = ({ title, setTrip, trip }) => {
  return (
    <div
      className={clsx(
        "w-full text-center p-1 cursor-pointer ease-in-out transition-all duration-300",
        trip == title
          ? "bg-white rounded-md font-medium text-blue-600"
          : "text-gray-600"
      )}
      onClick={() => setTrip(title)}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default RadioButton;
