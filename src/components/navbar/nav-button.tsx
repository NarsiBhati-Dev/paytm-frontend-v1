import { FC } from "react";
import Image from "next/image";

interface NavButtonProps {
  title: string;
  img: string;
}

const NavButton: FC<NavButtonProps> = ({ title, img }) => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center border-b-2 border-transparent hover:border-[#00baf2] cursor-pointer md:p-2 p-1">
      <Image
        src={img}
        alt={title}
        width={25}
        height={25}
        className="w-6 h-6 md:w-8 md:h-8"
      />
      <h2 className="ml-2 text-[15px] md:text-md lg:text-lg">{title}</h2>
    </div>
  );
};

export default NavButton;
