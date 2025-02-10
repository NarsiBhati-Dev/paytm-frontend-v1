import {
  Container,
  Header,
  Navbar,
  TripBooking,
  Footer,
  PaytmPlanCard,
} from "@/components";
import InfiniteSwiper from "@/components/swiper";
import { PlanCardData, BillPaymentsData } from "@/data/paytm-plan-card-data";

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
      <Container className="md:p-0 flex  justify-between md:flex-row flex-col  mt-6 gap-4">
        <PaytmPlanCard
          title={PlanCardData.title}
          items={PlanCardData.images}
          buttonImg={PlanCardData.buttonImg}
        />
        <PaytmPlanCard
          title={BillPaymentsData.title}
          items={BillPaymentsData.images}
          buttonImg={BillPaymentsData.buttonImg}
        />
      </Container>
      <Footer />
    </section>
  );
}
