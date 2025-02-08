import React from "react";
import Container from "./container";
import Image from "next/image";

const Govt = () => {
  return (
    <section className="w-full mt-24 mb-6">
      <Container className="flex justify-center items-center">
        <Image src={"/govt.avif"} alt={"govt. image"} width={728} height={90} />
      </Container>
    </section>
  );
};

export default Govt;
