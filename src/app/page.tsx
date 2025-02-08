import Container from "@/components/container";
import Govt from "@/components/govt";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import RadioButtons from "@/components/radio-buttons";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Header />
      <Govt />
      <section className="bg-[#e8f8fd] pt-2 p-24">
        <Navbar />
        <Container className="bg-white rounded-lg shadow-sm flex flex-col">
          <RadioButtons />
          <div></div>
        </Container>
      </section>
    </section>
  );
}
