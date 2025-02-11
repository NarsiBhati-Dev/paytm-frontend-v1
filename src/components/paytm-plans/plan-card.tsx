import { FC } from "react";
import Image from "next/image";

interface PlanCardProps {
  heading1: string;
  heading2: string;
  img: string;
}

const PlanCard: FC<PlanCardProps> = ({ heading1, heading2, img }) => {
  return (
    <div className="md:px-6 flex flex-col justify-center items-center md:p-5 md:hover:shadow-2xl md:hover:rounded-md cursor-pointer w-full mb-2">
      <Image
        src={img}
        alt={heading1 + heading2}
        width={48}
        height={48}
        className="w-auto h-auto"
      />
      <span className="text-center md:text-[15px] text-[14px]">
        {heading1} <br />
        {heading2}
      </span>
    </div>
  );
};

export default PlanCard;
