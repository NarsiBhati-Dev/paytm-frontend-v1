import { FC } from "react";
import Image from "next/image";
import PlanCard from "./plan-card";

interface items {
  heading1: string;
  heading2: string;
  img: string;
}

interface PaytmPlanCardProps {
  title: string;
  items: items[];
  buttonImg: string;
}

const PaytmPlanCard: FC<PaytmPlanCardProps> = ({ title, items, buttonImg }) => {
  return (
    <div className="bg-white p-4 w-full rounded-md shadow">
      <h3 className="text-[18px] font-bold">{title}</h3>
      <div className="flex gap-4 w-full my-6">
        {items.map((item, index) => (
          <PlanCard
            heading1={item.heading1}
            heading2={item.heading2}
            img={item.img}
            key={index}
          />
        ))}
      </div>
      <Image
        src={buttonImg}
        alt={""}
        width={556}
        height={65}
        className="lg:w-auto h-auto w-full cursor-pointer "
      />
    </div>
  );
};
export default PaytmPlanCard;
