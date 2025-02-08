import Container from "@/components/container";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Header />
      <section className="w-full mt-24">
        <Container className="flex justify-center items-center">
          <Image
            src={"/govt.avif"}
            alt={"govt. image"}
            width={728}
            height={90}
          />
        </Container>
      </section>
      <section className="bg-[#e8f8fd]">
        <Container>
          <nav></nav>
        </Container>
      </section>
    </section>
  );
}
