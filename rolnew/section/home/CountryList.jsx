'use client';

import React, { useEffect, useState } from 'react';
import Pic from 'rolnew/util/Pic';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/fleet.css';

function EachSlide({ id, cityName, image, countryCode, address }) {
  return (
    <div
      className='w-full mx-6 h-full group transition ease-in-out delay-150'
      key={id}
    >
      <div className='relative w-[200px] h-[200px]'>
        {/* <div className='bg-[#11202D] bg-opacity-25 absolute w-full h-full z-10 grayscale-[15%] group-hover:bg-transparent group-hover:grayscale-0' /> */}
        <Pic
          className='rounded-xl'
          alt={cityName}
          src={`${image}`}
          objectFit='cover'
        />
      </div>
      <div className='flex gap-x-2 mt-3 shrink-0'>
        <div className='w-6 h-6'>
          <Pic
            className='rounded-full shrink-0'
            alt={countryCode}
            src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${countryCode}.svg`}
            objectFit='cover'
          />
        </div>
        <p className='text-[#B2B2B2] text-sm font-normal'>{cityName}</p>
      </div>
      {address && (
        <div className='flex gap-x-4 p-1 items-center mt-1 shrink-0'>
          <svg
            width='16'
            height='17'
            viewBox='0 0 16 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.7137 11.8807C11.9862 12.6083 10.5186 14.0758 9.41311 15.1813C8.63206 15.9624 7.36726 15.9623 6.58622 15.1813C5.5006 14.0957 4.06013 12.6552 3.28563 11.8807C0.682134 9.27722 0.682134 5.05612 3.28563 2.45262C5.88912 -0.150874 10.1102 -0.150874 12.7137 2.45262C15.3172 5.05612 15.3172 9.27722 12.7137 11.8807Z'
              stroke='#CED5E5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M10.4997 7.16667C10.4997 8.54738 9.38039 9.66667 7.99967 9.66667C6.61896 9.66667 5.49967 8.54738 5.49967 7.16667C5.49967 5.78596 6.61896 4.66667 7.99967 4.66667C9.38039 4.66667 10.4997 5.78596 10.4997 7.16667Z'
              stroke='#CED5E5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>

          <p className='text-[#B2B2B2] text-sm font-normal text-left'>
            {address}
          </p>
        </div>
      )}
    </div>
  );
}

function CountryList({ countryList, bg }) {
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
    <div className='max-w-[1440px]'>
      {width > 768 ? (
        <div className='w-full relative presence-slider py-6'>
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
            <div
              className={`swiper-btn-prev absolute -left-14 top-2/4 -translate-y-2/4 z-10 w-[60px] h-[60px] ${bg} border ${
                bg === 'bg-[#223544]' ? 'border-gray-600' : 'border-[#223544]'
              } rounded-full flex items-center justify-center cursor-pointer`}
            >
              <img
                alt='go-prev'
                src='/rolnew/global/icons/arrow-left-primary.svg'
              />
            </div>
            {countryList?.map((item) => (
              <SwiperSlide key={item.id}>
                <EachSlide {...item} />
              </SwiperSlide>
            ))}
            <div
              className={`swiper-btn-next absolute -right-14 top-2/4 -translate-y-2/4 z-10 w-[60px] h-[60px] ${bg} border ${
                bg === 'bg-[#223544]' ? 'border-gray-600' : 'border-[#223544]'
              } rounded-full flex items-center justify-center cursor-pointer`}
            >
              <img
                alt='go-prev'
                src='/rolnew/global/icons/arrow-right-primary.svg'
              />
            </div>
          </Swiper>
        </div>
      ) : (
        <div className='flex flex-wrap justify-center items-center gap-y-5 gap-x-3'>
          {countryList?.map((country) => (
            <div
              className='w-[106px] group transition ease-in-out delay-150'
              key={country?.id}
            >
              <div className='w-full h-28 relative'>
                <div className='bg-[#11202D] bg-opacity-30 absolute w-full h-full z-10 grayscale-[15%] group-hover:bg-transparent group-hover:grayscale-0' />
                <Pic
                  className='rounded-xl'
                  alt={country?.cityName}
                  src={`${country?.image}`}
                  objectFit='cover'
                />
              </div>
              <div className='flex gap-x-1 mt-1 justify-center items-center'>
                <div className='w-4 h-4'>
                  <Pic
                    className='rounded-full'
                    alt={country?.countryCode}
                    src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${country?.countryCode}.svg`}
                    objectFit='cover'
                  />
                </div>
                <p className='text-[#B2B2B2] text-sm font-normal'>
                  {country?.cityName}
                </p>
              </div>
              {country?.address && (
                <div className='flex gap-x-4 items-center mt-2 shrink-0'>
                  <svg
                    width='16'
                    height='17'
                    viewBox='0 0 16 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.7137 11.8807C11.9862 12.6083 10.5186 14.0758 9.41311 15.1813C8.63206 15.9624 7.36726 15.9623 6.58622 15.1813C5.5006 14.0957 4.06013 12.6552 3.28563 11.8807C0.682134 9.27722 0.682134 5.05612 3.28563 2.45262C5.88912 -0.150874 10.1102 -0.150874 12.7137 2.45262C15.3172 5.05612 15.3172 9.27722 12.7137 11.8807Z'
                      stroke='#CED5E5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M10.4997 7.16667C10.4997 8.54738 9.38039 9.66667 7.99967 9.66667C6.61896 9.66667 5.49967 8.54738 5.49967 7.16667C5.49967 5.78596 6.61896 4.66667 7.99967 4.66667C9.38039 4.66667 10.4997 5.78596 10.4997 7.16667Z'
                      stroke='#CED5E5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>

                  <p className='text-[#B2B2B2] text-sm font-normal text-left'>
                    {country?.address}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountryList;
