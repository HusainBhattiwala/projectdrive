'use client';

import BookingEngine3 from 'components/Booking/BookingEngine3';
import { BookingProvider } from 'context/BookingContext';
import { useEffect, useState } from 'react';
import './css/booking.css';

export default function Hero1() {
  const [width, setWidth] = useState(1200);
  const [focus, setFocus] = useState(false);
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
    <div
      className={`relative mt-[72px] flex flex-col w-full lg:min-h-[740px] overflow-hidden 3xl:min-h-[85svh] max-h-fit bg-[#11202d] ${focus && 'z-50'}`}
    >
      <div className="home-mobile-gradient absolute left-0 right-0 bg-repeat h-[400px] w-full z-[3] -bottom-5 sm:hidden block" />
      <div className="home-banner absolute top-0 left-0 right-0 h-auto xl:min-h-[300px] lg:min-h-[350px] z-[2]" />
      {
        width <= 1024
        && (
        <div className="sm:bg-cover bg-contain bg-top bg-no-repeat absolute -top-10 left-0 bottom-0 right-0 z-[5]" style={{ backgroundImage: 'url("/rolnew/home/banner-mobile.jpg")' }}>
          <div className="bg-cover absolute top-0 left-0 bottom-0 right-0 z-[1]" style={{ backgroundImage: 'url("/rolnew/home/banner-gradient-mobile.svg")' }} />
        </div>
        )
      }
      <div className="sm:h-full h-full flex flex-col sm:gap-y-0 gap-y-8 justify-center sm:pt-[28px] pt-[24px] z-[10]">
        <div className="relative z-[5] text-left xl:px-[130px] md:px-[60px] 2xl:px-0 px-4 2xl:container 2xl:mx-auto flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-y-6">
          <div className="w-full">
            <h1 className="lg:text-5xl text-3xl font-semibold text-white drop-shadow-lg">Premium Chauffeur Service</h1>
            <p className="sm:text-lg text-base font-medium text-[#E5EAFA] sm:mt-1 sm:leading-normal leading-tight">Your exclusive and dependable chauffeur service indulgence</p>
          </div>
          <div className="sm:w-[450px] w-full h-fit lg:absolute relative lg:top-2 lg:left-[60%] sm:px-6 px-4 sm:py-6 py-6 booking-background rounded-3xl z-50">
            <BookingProvider>
              <BookingEngine3 setFocus={setFocus} width={width} />
            </BookingProvider>
          </div>
        </div>
        <div className="relative w-full lg:hidden block">
          <div className="absolute bg-cover bottom-0 left-0 right-0 h-[300px] bg-no-repeat z-[1]" style={{ backgroundImage: 'url(\'/rolnew/services/banner-gradient.svg\')' }} />
          <div className="w-full bottom-0 xl:px-[130px] md:px-[60px] 2xl:px-0 px-4 2xl:container 2xl:mx-auto sm:text-left text-center md:pb-[60px] pb-8 z-[5] relative pt-5">
            <h2 className="text-[#CED5E5] sm:text-xl text-base leading-tight">Do you want to customise your booking?</h2>
            <p className="sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-xs leading-tight">We offer customised bookings for any location, from bulk or intercity trips to monthly packages.</p>
            <div className="flex sm:flex-row flex-col items-center gap-x-4 sm:pt-0 pt-4">
              <p className="text-[#CED5E5] sm:text-sm text-xs">Contact us now</p>
              <div className="flex sm:gap-x-[12px] gap-x-1.5 justify-between">
                <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium">
                  <img src="/rolnew/global/icons/phone-primary-gold.svg" alt="phone-primary-gold" />
                  <a href="tel:+442045920966">+44 204 592 0966</a>
                </div>
                <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium">
                  <img src="/rolnew/global/icons/mail-primary-gold.svg" alt="phone-primary-gold" />
                  <a href="mailto:+442045920966">booking@roldrive.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grow relative z-[1] lg:flex items-end sm:pb-[58pxpx] pb-0 hidden">
        {/* <div className="bg-[#223544D9] absolute inset-0" /> */}
        {
        width >= 1024
        && <div className="2xl:bg-cover bg-cover bg-top absolute 2xl:bg-no-repeat top-0 left-0 bottom-0 right-0" style={{ backgroundImage: width <= 1536 ? 'url("/rolnew/home/bannerv2.svg")' : 'url("/rolnew/home/banner.jpg")' }} />
      }
        <div className="relative z-[5] text-left w-full">
          <div className="absolute bg-cover bottom-0 left-0 right-0 h-[300px] bg-no-repeat z-[1]" style={{ backgroundImage: 'url(\'/rolnew/services/banner-gradient.svg\')' }} />
          <div className="xl:px-[130px] md:px-[60px] 2xl:px-0 px-4 2xl:container 2xl:mx-auto">
            <div className="w-full pb-[58px] relative z-[2]">
              <h2 className="text-[#CED5E5] sm:text-xl text-base leading-tight">Do you want to customise your booking?</h2>
              <p className="sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-xs leading-tight ">We offer customised bookings for any location, from bulk or intercity trips to monthly packages.</p>
              <div className="flex sm:flex-row flex-col items-center gap-x-4 sm:pt-0 pt-4 flex-nowrap">
                <p className="text-[#CED5E5] sm:text-sm text-xs">Contact us now</p>
                <div className="flex sm:gap-x-4 gap-x-1.5 justify-between">
                  <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium flex-nowrap">
                    <img src="/rolnew/global/icons/phone-primary-gold.svg" alt="phone-primary-gold" />
                    <a href="tel:+442045920966">+44 204 592 0966</a>
                  </div>
                  <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium">
                    <img src="/rolnew/global/icons/mail-primary-gold.svg" alt="phone-primary-gold" />
                    <a href="mailto:booking@roldrive.com">booking@roldrive.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
