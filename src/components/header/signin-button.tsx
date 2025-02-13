import React from "react";
import Image from "next/image";
import Link from "next/link";

const SigninButton = () => {
  return (
    <Link
      href={"/signin"}
      className="flex justify-center items-center gap-1 bg-[#002970] rounded-full p-[2px] md:pr-[15px] text-white text-sm"
    >
      <Image src={"/logoutImg.svg"} alt={"signin"} width={32} height={32} />
      <span className="md:block hidden">Sign in</span>
    </Link>
  );
};

export default SigninButton;
