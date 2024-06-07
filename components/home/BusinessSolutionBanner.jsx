/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */

'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import { Pic } from 'components/ui/Pic';
import H1 from 'components/typography/H1';
import H4 from 'components/typography/H4';
// import { BookingProvider } from 'context/BookingContext';
import P from 'components/typography/P';
// import BookingEngine2 from '../Booking/BookingEngine2';
import Button from 'components/ui/Button';
import { BackgroundImage } from '../ui/BackgroundImage';
import 'aos/dist/aos.css';

export default function BusinessSolutionBanner({
  line1, line2, line3, img,
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
        {
          width >= 640 ? (
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
              <img
                src={img || '/images/banner/fireflyBanner.png'}
                alt="booking_bg"
                className="w-full h-full object-cover absolute"
              />
            </div>
          )
            : (
              <div className="absolute top-0 left-0 w-full z-[3] min-h-[20rem] h-[80vw]">
                <img
                  src={
              (pathName !== '/' && img) || '/images/banner/fireflyBanner.png'
            }
                  alt="booking_bg"
                  className={`w-full h-full  ${
                    pathName === '/' ? 'object-cover bg-bottom' : 'object-cover'
                  }`}
                />
              </div>
            )
        }

        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-[3]">
          <BackgroundImage
            src="/images/banner/number-gradient.svg"
            alt="booking_bg"
            className="object-cover"
          />
        </div>

        <div className="flex flex-row gap-6">
          <div className="relative z-[3] w-full 2xl:container mx-auto">
            {pathName !== '/' && (
            <div className="text-white max-w-max py-4 lg:px-0 px-6">
              <H1 className="lg:!text-[50px] text-5xl !font-[500] mt-6  md:!text-[34px] !text-[22px] lg:!leading-[50px] md:!leading-[42px] !leading-[30px]  whitespace-nowrap  tracking-[1px] capitalize md:max-w-[65%] max-w-[80%]">
                {line1 || 'Premium Chauffeurs At'}
              </H1>
              <H1 className="lg:!text-[50px] text-5xl !font-[500] mt-6  md:!text-[34px] !text-[22px] lg:!leading-[50px] md:!leading-[42px] !leading-[30px]  whitespace-nowrap  tracking-[1px] capitalize md:max-w-[65%] max-w-[80%]">
                {line2 || 'Premium Chauffeurs At'}
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

            <div className="flex sm:flex-row flex-col gap-6 lg:px-0 px-6">
              <div className="flex gap-2">
                <div className="w-5 h-5">
                  <Pic src="images/icons/phone.svg" alt="phone" />
                </div>
                <a
                  className="text-white !text-sm font-medium"
                  href="tel:+442071128101"
                >
                  +44 (0) 207 112 8101
                </a>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 mt-0.5">
                  <Pic src="images/icons/email-1.svg" alt="uk-flag" />
                </div>
                <a
                  className="text-white !text-sm font-medium"
                  href="mailto:info@roldrive.com"
                >
                  info@roldrive.com
                </a>
              </div>
              <div className="flex gap-2">
                <div className="w-5 h-5">
                  <Pic src="images/icons/whatsapp.svg" alt="uk-flag" />
                </div>
                <a
                  className="text-white !text-sm font-medium"
                  href="https://wa.me/442071128101"
                >
                  +44 (0) 207 112 8101
                </a>
              </div>
              {pathName === '/' && (
              <div className="hidden md:block">
                <a
                  target="_blank"
                  href="https://wa.me/442071128101"
                  rel="noreferrer"
                >
                  <div className="flex">
                    <div className="w-5 h-5">
                      <Pic src="/images/icons/whatsapp-icon.svg" />
                    </div>
                    <P className="text-primary !text-sm font-semibold pl-2">
                      +442071128101
                    </P>
                  </div>
                </a>
              </div>
              )}
            </div>
          </div>

          <div className="relative z-[3] w-full mt-12">
            <form className="hidden md:block mx-auto lg:container">
              <div className="relative flex flex-col items-center rounded-md">
                <div className="relative w-full bg-white sm:rounded-md  shadow-md">
                  <div className="p-1 pt-8 md:p-8">
                    <div className="flex items-center mb-1">
                      <div className="step flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500 border-2 border-orange-600 rounded-full flex items-center justify-center" viewBox="0 0 24 24">
                          <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="font-bold">1</text>
                        </svg>
                        <span className="ml-1 mt-1 text-neutral-900 text-xs font-medium">Create account</span>
                      </div>
                      <span className="text-gray-300">------</span>
                      <div className="step flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500 border-2 border-orange-600 rounded-full flex items-center justify-center" viewBox="0 0 24 24">
                          <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="font-bold">2</text>
                        </svg>
                        <span className="ml-1 mt-1 text-neutral-900 text-xs font-medium">Book Ride</span>
                      </div>
                      <span className="text-gray-300">------</span>
                      <div className="step flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500 border-2 border-orange-600 rounded-full flex items-center justify-center" viewBox="0 0 24 24">
                          <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="font-bold">3</text>
                        </svg>
                        <span className="ml-1 mt-1 text-neutral-900 text-xs font-medium">Enjoy Ride</span>
                      </div>
                    </div>
                    <form action="">
                      <div className="boxers py-1 gap-5 justify-between flex lg:flex-row flex-col">
                        <div className="box w-full">
                          <div
                            className="border shadow h-20 rounded-md p-1 w-full"
                          >
                            <div className="relative flex flex-col p-1 w-full">
                              <div className="flex items-center">
                                <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                                  <Pic
                                    src="/images/icons/location_gray.svg"
                                    alt="location"
                                  />
                                </div>
                                <H4 className="pl-2 !font-medium !text-[13px] uppercase !text-[#8B8585]">
                                  Full Name
                                </H4>
                              </div>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  className="block rounded-md px-3 pt-3 pb-3 w-full text-sm text-gray-900 bg-white   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                                  placeholder="Enter Your Name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boxers py-1 gap-5 justify-between flex lg:flex-row flex-col">
                        <div className="box w-full">
                          <div
                            className="border shadow h-20 rounded-md p-1 w-full"
                          >
                            <div className="relative flex flex-col p-1 w-full">
                              <div className="flex items-center">
                                <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                                  <Pic
                                    src="/images/icons/location_gray.svg"
                                    alt="location"
                                  />
                                </div>
                                <H4 className="pl-2 !font-medium !text-[13px] uppercase !text-[#8B8585]">
                                  Company Name
                                </H4>
                              </div>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  className="block rounded-md px-3 pt-3 pb-3 w-full text-sm text-gray-900 bg-white   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                                  placeholder="Enter the company name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boxers py-1 gap-5 justify-between flex lg:flex-row flex-col">
                        <div className="box w-full">
                          <div
                            className="border shadow h-20 rounded-md p-1 w-full"
                          >
                            <div className="relative flex flex-col p-1 w-full">
                              <div className="flex items-center">
                                <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                                  <Pic
                                    src="/images/icons/location_gray.svg"
                                    alt="location"
                                  />
                                </div>
                                <H4 className="pl-2 !font-medium !text-[13px] uppercase !text-[#8B8585]">
                                  Company Address
                                </H4>
                              </div>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  className="block rounded-md px-3 pt-3 pb-3 w-full text-sm text-gray-900 bg-white   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                                  placeholder="Enter the company address"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boxers py-1 gap-5 justify-between flex lg:flex-row flex-col">
                        <div className="boxers py-1 gap-5 justify-between flex lg:flex-row flex-col">
                          <div className="box w-full">
                            <div
                              className="border shadow h-20 rounded-md p-1 w-full"
                            >
                              <div className="relative flex flex-col p-1 w-full">
                                <div className="flex items-center">
                                  <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                                    <Pic
                                      src="/images/icons/location_gray.svg"
                                      alt="location"
                                    />
                                  </div>
                                  <H4 className="pl-2 !font-medium !text-[13px] uppercase !text-[#8B8585]">
                                    Country
                                  </H4>
                                </div>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    className="block rounded-md px-3 pt-3 pb-3 w-full text-sm text-gray-900 bg-white   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="boxers py-1 gap-5 justify-between flex lg:flex-row flex-col">
                          <div className="box w-full">
                            <div
                              className="border shadow h-20 rounded-md p-1 w-full"
                            >
                              <div className="relative flex flex-col p-1 w-full">
                                <div className="flex items-center">
                                  <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                                    <Pic
                                      src="/images/icons/location_gray.svg"
                                      alt="location"
                                    />
                                  </div>
                                  <H4 className="pl-2 !font-medium !text-[13px] uppercase !text-[#8B8585]">
                                    City
                                  </H4>
                                </div>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    className="block rounded-md px-3 pt-3 pb-3 w-full text-sm text-gray-900 bg-white   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="boxers py-1 gap-5 justify-between flex lg:flex-row flex-col">
                          <div className="box w-full">
                            <div
                              className="border shadow h-20 rounded-md p-1 w-full"
                            >
                              <div className="relative flex flex-col p-1 w-full">
                                <div className="flex items-center">
                                  <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                                    <Pic
                                      src="/images/icons/location_gray.svg"
                                      alt="location"
                                    />
                                  </div>
                                  <H4 className="pl-2 !font-medium !text-[13px] uppercase !text-[#8B8585]">
                                    Zip
                                  </H4>
                                </div>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    className="block rounded-md px-3 pt-3 pb-3 w-full text-sm text-gray-900 bg-white   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boxers py-1 gap-5 justify-between flex lg:flex-row flex-col">
                        <div className="box w-full">
                          <div
                            className="border shadow h-20 rounded-md p-1 w-full"
                          >
                            <div className="relative flex flex-col p-1 w-full">
                              <div className="flex items-center">
                                <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                                  <Pic
                                    src="/images/icons/location_gray.svg"
                                    alt="location"
                                  />
                                </div>
                                <H4 className="pl-2 !font-medium !text-[13px] uppercase !text-[#8B8585]">
                                  Company Email
                                </H4>
                              </div>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  className="block rounded-md px-3 pt-3 pb-3 w-full text-sm text-gray-900 bg-white   appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                                  placeholder="Enter company email"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="absolute w-11/12 sm:w-auto -bottom-6 mx-auto z-[10]">
                  <Button
                    type="submit"
                    kind="primary"
                    className="normal-case sm:w-auto sm:text-md !text-md !font-[500] h-auto !w-full px-5 sm:px-8 py-[10px]"
                  >
                    <span className="uppercase">
                      Create Account
                      {' '}
                    </span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
