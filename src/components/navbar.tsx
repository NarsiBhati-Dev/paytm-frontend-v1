import React from "react";
import Container from "./container";
import { NavLinksData } from "@/data/nav-links-data";
import NavButton from "./nav-button";

const Navbar = () => {
  return (
    <Container className="flex justify-center items-center ">
      <nav className="flex justify-center gap-4 items-center ">
        {NavLinksData.map(({ title, img }, index) => (
          <NavButton title={title} img={img} key={index} />
        ))}
      </nav>
    </Container>
  );
};

export default Navbar;
