import { FC } from "react";
import Image from "next/image";

interface NavButtonProps {
  title: string;
  img: string;
}

const NavButton: FC<NavButtonProps> = ({ title, img }) => {
  return (
    <div className="flex justify-center items-center hover:border-b-2 hover:border-blue-600 cursor-pointer p-2">
      <Image src={img} alt={title} width={30} height={30} />
      <h2 className="ml-2">{title}</h2>
    </div>
  );
};

export default NavButton;
