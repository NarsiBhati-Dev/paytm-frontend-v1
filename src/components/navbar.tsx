import React from "react";
import Container from "./container";
import Image from "next/image";
import { NavLinksData } from "@/data/nav-links-data";
import NavButton from "./nav-button";

const Navbar = () => {
  return (
    <Container className="flex justify-between items-center">
      <nav className="flex justify-start gap-4 items-center">
        {NavLinksData.map(({ title, img }, index) => (
          <NavButton title={title} img={img} key={index} />
        ))}
      </nav>
      <Image
        src={"/Paytm_Travel_Logo.svg"}
        alt={"Paytm_Travel_Logo"}
        width={140}
        height={21}
      />
    </Container>
  );
};

export default Navbar;
