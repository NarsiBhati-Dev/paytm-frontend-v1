import {
  Container,
  Header,
  Navbar,
  TripBooking,
  Footer,
  PaytmPlanCard,
  PaytmMoneyCard,
} from "@/components";

import InfiniteSwiper from "@/components/swiper";
import { PlanCardData, BillPaymentsData } from "@/data/paytm-plan-card-data";

export default function Home() {
  return (
    <section className="bg-[#f7f9fc] w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#e8f8fd] pt-24 pb-8 w-full">
        <Navbar />
        <Container className="bg-white rounded-lg shadow flex flex-col md:p-4 md:mx-auto ml-3 mr-3">
          <TripBooking />
        </Container>
        <Container className="p-4 md:p-0">
          <InfiniteSwiper />
        </Container>
      </section>

      {/* Plan Cards Section */}
      <Container className="flex flex-col lg:flex-row gap-6 md:p-0 pt-4 lg:mt-6">
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

      <PaytmMoneyCard />
      <Footer />
    </section>
  );
}
