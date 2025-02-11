import React from "react";
import { DeveloperLink } from "@/components";

const Footer = () => {
  return (
    <footer className="mt-12 shadow pt-6 bg-white">
      <DeveloperLink />
      <div className="border-b-[12px] border-[#00baf2]"></div>
      <div className="border-b-[12px] border-[#002970]"></div>
    </footer>
  );
};

export default Footer;
