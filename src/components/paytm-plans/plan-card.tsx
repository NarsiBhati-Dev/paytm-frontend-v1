import { FC } from "react";
import Image from "next/image";

interface PlanCardProps {
  heading1: string;
  heading2: string;
  img: string;
}

const PlanCard: FC<PlanCardProps> = ({ heading1, heading2, img }) => {
  return (
    <div className="md:px-6 flex flex-col justify-center items-center md:p-4 md:hover:shadow-2xl md:hover:rounded-md cursor-pointer">
      <Image
        src={img}
        alt={""}
        width={48}
        height={48}
        className="w-auto h-auto"
      />
      <span className="text-center text-[16px]">
        {heading1} <br />
        {heading2}
      </span>
    </div>
  );
};

export default PlanCard;
