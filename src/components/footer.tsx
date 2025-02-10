import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="mt-12 shadow-md pt-4 bg-white">
      <Container className="flex justify-between">
        <div className="text-left">@ 2025 Narsi paytm</div>
      </Container>
      <div className="border-b-[12px] border-[#00baf2]"></div>
      <div className="border-b-[12px] border-[#002970]"></div>
    </footer>
  );
};

export default Footer;
