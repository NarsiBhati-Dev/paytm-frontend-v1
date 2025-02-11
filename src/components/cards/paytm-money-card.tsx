import React from "react";
import Image from "next/image";
import { Container } from "@/components";

const PaytmMoneyCard = () => {
  return (
    <Container className="md:p-0 mt-8 md:m-auto md:mt-4">
      <div
        className="bg-white md:p-14 p-8 w-full bg-cover bg-center flex md:flex-row flex-col justify-between rounded-md md:gap-0 gap-8 shadow "
        style={{
          backgroundImage: "url('/background-paytm-money.avif')",
        }}
      >
        <div className="md:mr-12">
          <Image
            src={"/paytm-money-logo.webp"}
            alt={"paytm money logo"}
            width={134}
            height={50}
          />
          <h2 className="md:text-[40px] text-[25px] font-extrabold mt-4">
            Build Long-term Wealth & Achieve your Goals.
          </h2>
          <p className="md:text-[17px] text-[14px] font-semibold mt-4">
            Investing on Paytm Money is transparent, low-cost and
            commission-free. Buy stocks & mutual funds that can help you create
            wealth & realise your dreams.
          </p>
        </div>
        <Image
          src={"/paytm-money-phone.avif"}
          alt={"paytm-money-phone"}
          width={453}
          height={414}
          className="w-auto h-auto"
        />
      </div>
    </Container>
  );
};

export default PaytmMoneyCard;
