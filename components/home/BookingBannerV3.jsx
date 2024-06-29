/* eslint-disable max-len */

'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import { Pic } from 'components/ui/Pic';
import H1 from 'components/typography/H1';
import { BookingProvider } from 'context/BookingContext';
import P from 'components/typography/P';
import BookingEngine2 from '../Booking/BookingEngine2';
import { BackgroundImage } from '../ui/BackgroundImage';
import 'aos/dist/aos.css';

export default function BookingBannerV3({
  line1, line2, line3, img, alt,
}) {
  const pathName = usePathname();
  const [width, setWidth] = useState(1400);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    // Function to update window width
    function handleResize() {
      setWidth(window.innerWidth);
    }
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="relative md:h-[103vh] h-auto md:-mt-20 xl:px-20 lg:px-10 px-0 !pb-1 lg:pt-5 md:pt-20 pt-12 flex flex-col justify-center ">
        {width >= 640 ? (
          <div className="absolute top-0 left-0 w-full h-full z-[1]">
            <img
              src={img || '/images/banner/fireflyBanner.png'}
              alt={alt || 'booking_bg'}
              className="w-full h-full object-cover absolute"
            />
          </div>
        ) : (
          <div className="absolute top-0 left-0 w-full z-[3] min-h-[20rem] h-[80vw]">
            <img
              src={
                (pathName !== '/' && img) || '/images/banner/fireflyBanner.png'
              }
              alt={alt || 'booking_bg'}
              className={`w-full h-full  ${
                pathName === '/' ? 'object-cover bg-bottom' : 'object-cover'
              }`}
            />
          </div>
        )}

        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-[3] sm:bg-transparent bg-black bg-opacity-40">
          <BackgroundImage
            src="/images/banner/number-gradient.svg"
            alt="booking_bg"
            className="object-cover"
          />
        </div>

        <div className="relative z-[3] w-full 2xl:container mx-auto">
          {pathName !== '/' && (
            <div className="text-white max-w-max py-4 md:mt-10 lg:px-0 px-6">
              <H1 className="lg:!text-[50px] md:!text-[34px] !text-[22px] lg:!leading-[50px] md:!leading-[42px] !leading-[30px] !font-[600] tracking-[1px] uppercase md:max-w-[65%] max-w-[90%]">
                {line1 || 'Premium Chauffeurs At'}
              </H1>
              <H1 className="lg:!text-[50px] md:!text-[34px] !text-[22px] lg:!leading-[50px] md:!leading-[42px] !leading-[30px] font-[400] !text-opacity-80 text-white">
                {line2 || 'the Press of a button'}
              </H1>
              <P className="xl:!text-[24px] lg:!text-[22px] md:!text-[20px] !text-[18px] md:max-w-[60%] max-w-[90%] mt-2 md:leading-8 leading-5">
                {line3 || 'Arrive in style, stress-free and rejuvenated.'}
              </P>
            </div>
          )}
          {pathName === '/' && (
            <div className="text-white max-w-max py-4 sm:px-0 px-6">
              <H1 className="lg:!text-[50px] md:!text-[34px] !text-[22px] lg:!leading-[55px] md:!leading-[42px] !leading-[30px] !font-[600] max-w-lg pl-0 sm:pl-4 lg:pl-0 lg:max-w-3xl">
                {line1 || 'Premium chauffeurs'}
                <span className="lg:!text-[50px] md:!text-[34px] !text-[22px] !font-[400] pl-3 !text-opacity-80 text-white">
                  at the press of a button
                </span>
              </H1>
            </div>
          )}

          <div className="flex sm:flex-row flex-col gap-x-3 gap-y-0.5 lg:px-0 px-6 sm:mt-5">
            <div className="flex gap-x-1 items-center">
              <div className="w-[24px]">
                <Pic src="/images/icons/phone-orange.svg" alt="phone-gold" />
              </div>
              <a
                className="text-[#ff7e24] !text-base"
                href="tel:+442071128101"
              >
                +442071128101
              </a>
            </div>
            <div className="flex gap-x-1 items-center">
              <div className="w-[24px]">
                <Pic src="/images/icons/email-orange.svg" alt="email" />
              </div>
              <a
                className="text-[#ff7e24] !text-base"
                href="mailto:booking@roldrive.com"
              >
                booking@roldrive.com
              </a>
            </div>
            <div className="flex gap-x-1">
              <a
                target="_blank"
                href="https://wa.me/442071128101"
                rel="noreferrer"
              >
                <div className="flex items-center">
                  <div className="w-[24px]">
                    <Pic src="/images/icons/whatsapp-icon.svg" />
                  </div>
                  <P className="text-[#ff7e24] !text-base pl-1.5">
                    +442045920966
                  </P>
                </div>
              </a>
            </div>
            {/* {pathName === '/' && (
              <div className="hidden md:block">
                <a
                  target="_blank"
                  href="https://wa.me/442071128101"
                  rel="noreferrer"
                >
                  <div className="flex">
                    <div className="h-[16px] w-[16px]">
                      <Pic src="/images/icons/whatsapp-icon.svg" />
                    </div>
                    <P className="text-primary !text-sm font-semibold pl-2">
                      +442071128101
                    </P>
                  </div>
                </a>
              </div>
            )} */}
          </div>
        </div>
        <div className="md:mt-20 mt-8">
          <div className="relative z-[3]">
            <BookingProvider>
              <BookingEngine2 />
            </BookingProvider>
          </div>
        </div>
      </section>
    </>
    // <section className="pb-[520px] md:pb-0 bg-black md:bg-white">
    //   <div className="md:pt-[115px] md:pb-24 xl:px-14 lg:px-10 px-4 sm:pt-10 pt-0 pb-8 bg-center w-full md:h-[103vh] h-auto relative -mt-20 flex flex-col items-center">
    //     <div className="absolute top-0 left-0 w-full h-full z-[1] sm:block hidden">
    //       <BackgroundImage
    //         src={img || '/images/banner/fireflyBanner.png'}
    //         alt="booking_bg"
    //         className="w-full h-auto object-cover"
    //       />
    //     </div>
    //     <div className="absolute top-0 left-0 w-full h-full z-[3] block sm:hidden">
    //       <BackgroundImage
    //         src={(pathName !== '/' && img) || '/images/banner/homepagebanner_mobile.svg'}
    //         alt="booking_bg"
    //         className={`w-full h-auto  ${pathName === '/' ? 'object-contain bg-bottom' : 'object-cover'}`}
    //       />
    //     </div>

  //     <div className="absolute top-0 left-0 w-full h-full z-[2] overlay-bg sm:block hidden">
  //       <BackgroundImage
  //         src="/images/banner/bg-overlay.png"
  //         alt="booking_bg"
  //         className="w-full h-auto object-cover"
  //       />
  //     </div>
  //     <div className="relative 2xl:container 2xl:mx-auto z-[3] w-full">
  //       {
  //         pathName !== '/' && (
  //           <div className="text-white bg-[#00000099] max-w-max lg:px-6 xl:px-16 py-4 px-4">
  //             <H1 className="uppercase lg:!text-[1.875rem] md:!text-[26px] !text-[22px] lg:!leading-[50px] md:!leading-[42px] !leading-[30px] !font-[500]">{ line1 || 'Premium Chauffeurs At'}</H1>
  //             <H1 className="uppercase lg:!text-[1.875rem] md:!text-[26px] !text-[22px] lg:!leading-[50px] md:!leading-[42px] !leading-[30px] font-[500]">{ line2 || 'the Press of a button'}</H1>
  //           </div>
  //         )
  //       }
  //       {
  //         pathName === '/' && (
  //           <div className="text-white max-w-max py-4">
  //             <div className="flex items-center">
  //               <H1 className="lg:!text-[50px] md:!text-[34px] !text-[22px] lg:!leading-[50px] md:!leading-[42px] !leading-[30px] !font-[600]">
  //                 { line1 || 'Premium chauffeurs'}
  //                 {' '}
  //               </H1>
  //               <span className="lg:!text-[50px] md:!text-[34px] !text-[22px] !font-[400] pl-3 !text-opacity-80 text-white">at the</span>
  //             </div>

  //             <H1 className="lg:!text-[50px] md:!text-[34px] !text-[22px] lg:!leading-[50px] md:!leading-[42px] !leading-[30px] font-[400] !text-opacity-80 text-white">{ line2 || 'press of a button'}</H1>
  //           </div>
  //         )
  //       }
  //       <div className="flex mt-2 gap-x-4">
  //         <div className="flex gap-x-2">
  //           <div className="w-[24px] h-[14px]">
  //             <Pic src="images/icons/uk-flag.svg" alt="uk-flag" />
  //           </div>
  //           <a className="text-primary !text-sm font-semibold" href="tel:+44 (0) 207 112 8101">+442071128101</a>
  //         </div>
  //         <div className="flex gap-x-2">
  //           <div className="w-[24px] h-[14px]">
  //             <Pic src="images/icons/email-primary.svg" alt="uk-flag" />
  //           </div>
  //           <a className="text-primary !text-sm font-semibold" href="mailto:booking@roldrive.com">booking@roldrive.com</a>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="xl:container px-4 md:px-6 mx-auto mt-16">
  //       <div className="relative z-10">
  //         <BookingProvider>
  //           <BookingEngine2 />
  //         </BookingProvider>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  );
}
