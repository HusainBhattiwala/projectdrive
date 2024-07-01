"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./css/fleet.css";
import Button from "rolnew/ui/Button";
import Link from "next/link";

export default function Fleets({ slideData = [], showBooking = false }) {
  const slidesToShow =
    slideData.length <= 3 ? [...slideData, ...slideData] : slideData;

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
        autoplay
        loop
        centeredSlidesBounds
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
        {slidesToShow.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            {({ isActive }) => (
              <div>
                <div
                  className={`max-w-[574px] mt-5 ${
                    isActive
                      ? "h-[250px] text-[#ffffff] font-bold text-2xl"
                      : "h-[350px] text-[#E5EAFA] font-medium text-sm"
                  }`}
                >
                  <img
                    className={`object-fill ${
                      isActive ? "h-full w-full" : "w-full"
                    }`}
                    src={item?.img}
                    alt={item?.name}
                  />
                </div>
                <p className='text-center text-[#E5EAFA] text-xl font-medium flex-none mb-2'>
                  {item.name}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${showBooking && "pb-20"} z-50`}>
        {showBooking && (
          <Button className='flex-1 !px-14'>
            <Link href='/rolnew'>Book Now</Link>
          </Button>
        )}
        <div className='flex justify-center items-center gap-x-3 sm:mt-5 relative'>
          <div className='swiper-btn-prev pop w-12 h-12 bg-[#11202D] border border-[#223544] rounded-full flex items-center justify-center cursor-pointer'>
            <img
              alt='go-prev'
              src='/rolnew/global/icons/arrow-left-primary.svg'
            />
          </div>
          <div className='swiper-pagination !relative !w-auto sm:mx-[30px] mx-2' />
          <div className='swiper-btn-next pop w-12 h-12 bg-[#11202D] border border-[#223544] rounded-full flex items-center justify-center cursor-pointer'>
            <img
              alt='go-next'
              src='/rolnew/global/icons/arrow-right-primary.svg'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
