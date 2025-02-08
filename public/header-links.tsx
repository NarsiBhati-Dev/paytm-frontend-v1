import { FC } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HeaderLinksProps {
  title: string;
  dropdown?: string[];
}

const HeaderLinks: FC<HeaderLinksProps> = ({ title, dropdown }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center gap-1 px-[10px] py-3 cursor-pointer rounded-md transition-all duration-300 hover:text-blue-500">
          <h2 className="font-medium text-md ">{title}</h2>
          <Image
            src="/down.svg"
            alt={`${title} dropdown`}
            width={12}
            height={12}
          />
        </div>
      </PopoverTrigger>

      {dropdown?.length !== 0 && (
        <PopoverContent className="w-50 bg-white shadow-lg rounded-md border mt-2">
          {dropdown?.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-[#e8f8fd] hover:text-blue-500 cursor-pointer rounded-sm font-medium text-sm transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </PopoverContent>
      )}
    </Popover>
  );
};

export default HeaderLinks;
