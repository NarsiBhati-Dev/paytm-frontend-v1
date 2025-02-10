import { Container, Header, Navbar, TripBooking, Footer } from "@/components";
import InfiniteSwiper from "@/components/swiper";

export default function Home() {
  return (
    <section className="bg-[#f7f9fc]">
      <Header />
      <section className="bg-[#e8f8fd] pt-24 pb-8">
        <Navbar />
        <Container className="bg-white rounded-lg shadow-sm flex flex-col md:m-auto mx-5">
          <TripBooking />
        </Container>
        <Container className="p-4 md:p-0 py-4">
          <InfiniteSwiper />
        </Container>
      </section>
      <Container className="md:p-0">3</Container>
      <Footer />
    </section>
  );
}
