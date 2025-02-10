import React from "react";
import Container from "../container";
import Image from "next/image";
import { headerLinksData } from "@/data/header-links-data";
import HeaderLink from "./header-link";
import SigninButton from "./signin-button";

const Header = () => {
  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <Container className="flex justify-between items-center">
        <Image
          src={"/logo_new.svg"}
          alt={"logo paytm"}
          width={144}
          height={18}
          className="w-auto h-auto"
          priority={true}
        />
        <div className="flex  justify-between items-center gap-4">
          {headerLinksData.map(({ title, dropdown }, index) => (
            <HeaderLink title={title} dropdown={dropdown} key={index} />
          ))}
        </div>

        <div className="lg:flex justify-center items-center hidden cursor-pointer">
          <Image
            src={"/download.svg"}
            alt={` dropdown`}
            width={15}
            height={15}
            priority={true}
          />
          <h1 className="ml-1 font-bold hover:text-blue-600 transition-all duration-200">
            Download App
          </h1>
        </div>

        <SigninButton />
      </Container>
    </header>
  );
};

export default Header;
