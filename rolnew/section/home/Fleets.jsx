"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./css/fleet.css";
import Button from "rolnew/ui/Button";
import Link from "next/link";

export default function Fleets({ slideData, showBooking = false }) {
  return (
    <div className='w-full relative fleet-page max-w-[1440px] mx-auto'>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          560: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        centeredSlides
        // centerInsufficientSlides
        // autoplay
        // loop
        pagination={{
          el: ".swiper-pagination",
        }}
        speed={1000}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slideData?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='max-w-[574px]'>
              <img src={item?.img} alt={item?.name} />
            </div>
            <p className='text-center text-[#E5EAFA] text-xl font-medium flex-none mb-2'>
              {item.name}
            </p>
          </SwiperSlide>
        ))}
        <div className={`sm:py-[42px] py-5 ${showBooking && "mt-6"}`}>
          {showBooking && (
            <Button className='flex-1 !px-14'>
              <Link href='/rolnew'>Book Now</Link>
            </Button>
          )}
          <div className='flex justify-center items-center gap-x-3 sm:mt-10 relative'>
            <div className='swiper-btn-prev pop w-12 h-12 bg-[#11202D] border border-[#223544] rounded-full flex items-center justify-center cursor-pointer'>
              <img
                alt='go-prev'
                src='/rolnew/global/icons/arrow-left-primary.svg'
              />
            </div>
            <div className='swiper-pagination !relative !w-auto sm:mx-[30px] mx-2' />
            <div className='swiper-btn-next pop w-12 h-12 bg-[#11202D] border border-[#223544] rounded-full flex items-center justify-center cursor-pointer'>
              <img
                alt='go-prev'
                src='/rolnew/global/icons/arrow-right-primary.svg'
              />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
