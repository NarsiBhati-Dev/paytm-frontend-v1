import React from "react";
import Image from "next/image";
import { Container } from "@/components";

const PaytmMoneyCard = () => {
  return (
    <Container className="md:p-0 mt-8">
      <div
        className="bg-white p-14 w-full bg-cover bg-center flex md:flex-row flex-col justify-between rounded-md "
        style={{
          backgroundImage: "url('/background-paytm-money.avif')",
        }}
      >
        <div className=" mr-12">
          <Image
            src={"/paytm-money-logo.webp"}
            alt={"paytm money logo"}
            width={134}
            height={50}
          />
          <h2 className="text-[40px] font-extrabold mt-4">
            Build Long-term <br />
            Wealth & Achieve <br />
            your Goals.
          </h2>
          <p className="text-[17px] font-semibold mt-4">
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
