'use client';

import React, { useEffect, useState } from 'react';
import Pic from 'rolnew/util/Pic';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/fleet.css';

function EachSlide({
  id, cityName, image, countryCode,
}) {
  return (
    <div
      className="w-full mx-6 h-full group transition ease-in-out delay-150"
      key={id}
    >
      <div className="relative w-[200px] h-[200px]">
        {/* <div className="bg-[#11202D] bg-opacity-25 absolute w-full h-full z-10 grayscale-[15%] group-hover:bg-transparent group-hover:grayscale-0" /> */}
        <Pic className="rounded-xl" alt={cityName} src={`${image}`} objectFit="cover" />
      </div>
      <div className="flex gap-x-2 mt-3 items-center">
        <div className="w-6 h-6">
          <Pic className="rounded-full" alt={countryCode} src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${countryCode}.svg`} objectFit="cover" />
        </div>
        <p className="text-[#B2B2B2] text-sm font-normal">{cityName}</p>
      </div>
    </div>
  );
}

function CountryList({ countryList }) {
  const [width, setWidth] = useState();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1440px]">
      {width > 768 ? (
        <div className="w-full relative presence-slider py-6">
          <Swiper
            breakpoints={{
              560: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1260: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1360: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            loop
            autoplay
            pagination={{
              el: '.swiper-pagination',
            }}
            navigation={{
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
            }}
            modules={[Autoplay, Navigation]}
          >
            <div className="swiper-btn-prev absolute -left-14 top-2/4 -translate-y-2/4 z-10 w-[60px] h-[60px] bg-[#11202D] border border-[#223544] rounded-full flex items-center justify-center cursor-pointer">
              <img alt="go-prev" src="/rolnew/global/icons/arrow-left-primary.svg" />
            </div>
            {countryList.map((item) => (
              <SwiperSlide key={item.id}>
                <EachSlide {...item} />
              </SwiperSlide>
            ))}
            <div className="swiper-btn-next absolute -right-14 top-2/4 -translate-y-2/4 z-10 w-[60px] h-[60px] bg-[#11202D] border border-[#223544] rounded-full flex items-center justify-center cursor-pointer">
              <img alt="go-prev" src="/rolnew/global/icons/arrow-right-primary.svg" />
            </div>
          </Swiper>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-y-5 gap-x-3">
          {countryList.map((country) => (
            <div className="w-[106px] group transition ease-in-out delay-150" key={country?.id}>
              <div className="w-full h-28 relative">
                <div className="bg-[#11202D] bg-opacity-30 absolute w-full h-full z-10 grayscale-[15%] group-hover:bg-transparent group-hover:grayscale-0" />
                <Pic className="rounded-xl" alt={country?.cityName} src={`${country?.image}`} objectFit="cover" />
              </div>
              <div className="flex gap-x-1 mt-1 justify-center items-center">
                <div className="w-4 h-4">
                  <Pic className="rounded-full" alt={country?.countryCode} src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${country?.countryCode}.svg`} objectFit="cover" />
                </div>
                <p className="text-[#B2B2B2] text-sm font-normal">{country?.cityName}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountryList;
