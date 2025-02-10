"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = ["/offer1.avif", "/offer2.avif", "/offer3.avif"];

export default function InfiniteSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true} // Infinite scrolling
      autoplay={{
        delay: 2000, // Time between auto-swipes (2s)
        disableOnInteraction: false, // Allows user interaction without stopping autoplay
      }}
      pagination={{ clickable: true }} // Enables pagination dots
      modules={[Autoplay, Pagination]} // Use necessary modules
      className="w-full h-fit mt-8 rounded-md"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt={`Slide ${index}`}
            width={1170}
            height={390}
            className="w-full h-auto object-cover rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
