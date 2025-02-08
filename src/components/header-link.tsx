import { FC } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HeaderLinkProps {
  title: string;
  dropdown?: string[];
}

const HeaderLink: FC<HeaderLinkProps> = ({ title, dropdown }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="lg:flex justify-center items-center hidden text-[14px] hover:text-blue-600 font-bold transition-all duration-200">
          <h1 className="mr-0.5">{title}</h1>
          <Image
            src={"/down.svg"}
            alt={`${title} dropdown`}
            width={12}
            height={12}
          />
        </div>
      </PopoverTrigger>
      {dropdown?.length !== 0 && (
        <PopoverContent className="w-50 shadow-lg bg-white ">
          {dropdown?.map((item, index) => (
            <div
              className="px-4 py-2 hover:bg-[#e8f8fd] hover:text-blue-600 rounded-md transition-all duration-300 font-medium"
              key={index}
            >
              {item}
            </div>
          ))}
        </PopoverContent>
      )}
    </Popover>
  );
};

export default HeaderLink;
