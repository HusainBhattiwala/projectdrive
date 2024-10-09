"use client";

import { useEffect, useState, useContext } from "react";
import { ModalContext } from "context/ModalContext";
import Button from "rolnew/ui/Button";
import DownArrowBox from "rolnew/comp/DownArrowBox";
import ContactUsDiv from "rolnew/comp/ContactUsDiv";

// import { Montserrat } from 'next/font/google';

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

function Banner({ pageData }) {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1000);

  const { openModal } = useContext(ModalContext);

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
    // <div
    //   className="relative mt-[72px] w-full flex flex-col items-center md:min-h-[580px] lg:max-h-[90svh] 2xl:min-h-[92svh] max-h-fit bg-[#11202d] sm:bg-cover bg-contain sm:bg-no-repeat sm:bg-center bg-left sm:pt-12 pt-4 sm:min-h-[700px] min-h-[505px]"
    //   style={{
    //     backgroundImage: width > 640 && `url(${pageData?.banner?.bannerImage})`,
    //   }}
    // >
    <div
      className="relative w-full flex flex-col items-center md:min-h-[580px] lg:max-h-[90svh] 2xl:min-h-[92svh] max-h-fit bg-[#11202d] sm:bg-cover bg-contain sm:bg-no-repeat sm:bg-center bg-left sm:pt-12 pt-4 sm:min-h-[700px] min-h-[505px]"
      style={{
        backgroundImage: width > 640 && `url(${pageData?.banner?.bannerImage})`,
      }}
    >
      <div className="sm:city-banner-gradient city-banner-mobile-gradient sm:opacity-90 absolute top-0 left-0 right-0 h-[250px] xl:min-h-[400px] md:min-h-[420px] lg:min-h-[250px] z-[6]" />

      <div className="text-center flex flex-col h-full flex-grow w-full">
        <div className={`z-[7] px-4`}>
          <h1 h1 className="lg:text-5xl text-3xl font-semibold text-white drop-shadow-lg mt-3">
            {pageData?.banner?.title}
          </h1>
          <p className="sm:text-lg text-base font-medium text-[#E5EAFA] sm:mt-1 sm:leading-normal leading-tight">
            {pageData?.banner?.subTitle}
          </p>
        </div>
        <div className="sm:pt-10 relative flex flex-col flex-grow sm:justify-start justify-end bg-cover">
          <div
            className="h-full w-full z-[1] absolute top-0 bg-contain bg-no-repeat"
            style={{
              backgroundImage:
                width <= 640 && `url(${pageData?.banner?.bannerImage})`,
            }}
          />

          <div
            className="sm:hidden bg-cover bg-no-repeat block opacity-70 absolute  left-0 right-0 h-[250px] bottom-0 z-[2]"
            style={{
              backgroundImage: 'url("/rolnew/cities/mobile-gradient.svg")',
            }}
          />
          <div className="z-[7] relative flex flex-col">

            <ContactUsDiv />

            <div className="z-[2] sm:hidden flex items-center justify-center sm:pb-0 pb-4 sm:pt-0 pt-2">
              <Button onClick={() => openModal()} className="w-7/12">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      {
        width >= 640 && (
          <>
            <div
              className="z-[2] sm:absolute flex items-center justify-center left-2/4 sm:-translate-x-2/4 sm:pb-0 pb-16"
              style={{
                top: `${height - 270}px`,
              }}
            >
              <Button onClick={() => openModal()} className="!px-16 py-2">
                Book Now
              </Button>
            </div>

            <DownArrowBox />
          </>

        )
      }

    </div >
  );
}

export default Banner;
