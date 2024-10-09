"use client";

import BookingEngine3 from "components/Booking/BookingEngine3";
import { BookingProvider } from "context/BookingContext";
import { useEffect, useState } from "react";
import "./css/booking.css";
import ContactUsDiv from "rolnew/comp/ContactUsDiv";
// import { Montserrat } from 'next/font/google';  // Updated import

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero2({ banner }) {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1000);
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`relative flex flex-col w-full md:min-h-[700px] lg:min-h-[90svh] overflow-auto 2xl:min-h-[92svh] min-h-fit bg-[#11202d] ${focus && "z-50"
        }`}
    >
      <div
        className="absolute md:block hidden xl:px-[130px] md:px-[60px] 2xl:px-[130px] z-[6] 2xl:container 2xl:mb-10"
        style={{
          bottom: height > 600 ? "38px" : "110px",
          left: width >= 1533 && "50%",
          transform: width >= 1533 && "translateX(-50%)",
        }}
      >
        <div className="md:w-[350px] lg:w-[450px] xl:w-full w-full relative z-[2]">
          <h2 className="text-[#CED5E5] sm:text-xl text-base leading-tight">
            Do you want to customise your booking?
          </h2>
          <p className="sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-sm leading-tight lg:max-w-[500px] 2xl:max-w-full">
            We offer customised bookings for any location, from bulk or
            intercity trips to monthly packages.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-x-4 sm:pt-0 pt-4 flex-wrap">
            <p className="text-[#CED5E5] sm:text-sm text-sm">Contact us now</p>
            <div className="flex sm:gap-x-4 gap-x-3 justify-between sm:pt-0 pt-2">
              <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] lg:text-base text-xs font-medium flex-nowrap pop">
                <img
                  src="/rolnew/global/icons/phone-primary-gold.svg"
                  alt="phone-primary-gold"
                />
                <a href="tel:+442045920966">+44 204 592 0966</a>
              </div>
              <div className="flex items-center sm:gap-x-2 gap-x-1  text-[#FDC65C] lg:text-base text-xs font-medium pop">
                <img
                  src="/rolnew/global/icons/mail-primary-gold.svg"
                  alt="phone-primary-gold"
                />
                <a href="mailto:booking@roldrive.com">booking@roldrive.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-mobile-gradient absolute left-0 right-0 bg-repeat h-[350px] w-full z-[3] sm:hidden block" />
      <div className={`home-banner absolute top-0 left-0 right-0 h-auto ${banner?.title?.length > 30 ? 'xl:min-h-[450px] lg:min-h-[400px]' : 'xl:min-h-[332px] lg:min-h-[350px]'}  md:min-h-[420px] sm:min-h-[450px] z-[2]`} />
      {width <= 768 && (
        <div
          className="sm:bg-cover bg-contain bg-top bg-no-repeat absolute -top-10 left-0 bottom-0 right-0 z-[5]"
          style={{
            backgroundImage: banner?.mobileBannerImage ? `url(${banner?.mobileBannerImage}` : 'url("/rolnew/home/banner-mobile.jpg")'
          }}
        >
          <div
            className="bg-cover absolute top-0 left-0 bottom-0 right-0 z-[1]"
            style={{
              backgroundImage: 'url("/rolnew/home/banner-gradient-mobile.svg")',
            }}
          />
        </div>
      )}
      <div className="sm:h-full h-full flex flex-col sm:gap-y-0 gap-y-6 justify-center sm:pt-[28px] pt-[24px]">
        <div className="relative z-[10] text-left xl:px-[130px] md:px-[60px] 2xl:px-[130px] px-4 2xl:container 2xl:mx-auto flex lg:flex-row flex-col md:justify-between justify-center items-center md:items-start gap-y-6">
          <div className={`md:w-2/3 lg:w-2/3 xl:w-2/3 `}>
            <h1 className="lg:text-5xl text-3xl font-semibold text-white drop-shadow-lg pr-16">
              {banner?.title ? banner?.title : 'Global Chauffeur Service'}
            </h1>
            <p className="sm:text-lg text-base font-medium text-[#E5EAFA] sm:mt-1 sm:leading-normal leading-tight">
              Your exclusive and dependable chauffeur service indulgence
            </p>
          </div>
          <div
            className={`sm:w-[450px] w-full h-fit md:absolute relative 2xl:top-8 md:top-1 md:left-[48%] lg:left-[53%] xl:left-[60%] booking-background rounded-3xl z-100 ${height > 600 ? "py-6 sm:px-6 px-4" : "py-4 sm:px-4 px-4"
              }`}
          >
            <BookingProvider>
              <BookingEngine3
                setFocus={setFocus}
                width={width}
                height={height}
                parentDivWidth={450}
              />
            </BookingProvider>
          </div>
        </div>
        <div className="relative w-full md:hidden block z-[50]">
          <div
            className="absolute bg-cover bottom-0 left-0 right-0 h-[220px] bg-no-repeat z-[1]"
            style={{
              backgroundImage: "url('/rolnew/services/banner-gradient.svg')",
            }}
          />
          <div className="w-full bottom-0 xl:px-[130px] md:px-[60px] 2xl:px-0 px-4 2xl:container 2xl:mx-auto sm:text-left text-center md:pb-[0px] pb-8 z-[2] relative">
            <ContactUsDiv />
          </div>
        </div>
      </div>
      {/* <div className="grow relative z-[1] md:flex items-end sm:pb-[58px] pb-0 hidden"> */}
      <div className="grow relative z-[1] md:flex items-end pb-0 hidden">
        {/* <div className="bg-[#223544D9] absolute inset-0" /> */}
        {width >= 768 && (
          <div
            className="2xl:bg-cover bg-cover bg-top absolute 2xl:bg-no-repeat top-0 left-0 bottom-0 right-0"
            style={{
              backgroundImage:
                width <= 1536 && banner?.bannerImage
                  ? `url(${banner?.bannerImage}`
                  : 'url("/rolnew/home/bannerv2.svg")',
            }}
          />
        )}
        <div className="relative z-[5] text-left w-full">
          <div
            className="absolute bg-cover bottom-0 left-0 right-0 h-[300px] bg-no-repeat z-[1]"
            style={{
              backgroundImage: "url('/rolnew/services/banner-gradient.svg')",
            }}
          />
        </div>
      </div>
    </div>
  );
}
