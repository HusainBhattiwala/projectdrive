"use client";

import { useEffect, useState, useContext } from "react";
import { ModalContext } from "context/ModalContext";
import Button from "rolnew/ui/Button";
import DownArrowBox from "rolnew/comp/DownArrowBox";
// import { Montserrat } from 'next/font/google'; 

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

function BannerLight({ pageData }) {
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
    <div
      className="relative w-full h-full flex flex-col items-center md:min-h-[580px] lg:max-h-[90svh] 2xl:min-h-[92svh] max-h-fit bg-[#11202d] sm:bg-cover bg-contain sm:bg-no-repeat sm:bg-center bg-left sm:pt-12 pt-4 sm:min-h-[700px] min-h-[505px]"
      style={{
        backgroundImage: width > 640 && `url(${pageData?.banner?.bannerImage})`,
      }}
    >
      <div className="sm:city-banner-gradient city-banner-mobile-gradient sm:opacity-90 absolute top-0 left-0 right-0 h-[250px] xl:min-h-[400px] md:min-h-[420px] lg:min-h-[250px] z-[6]" />

      <div className="text-center flex flex-col h-full flex-grow w-full">
        <div className="z-[7] px-4">
          {pageData?.banner?.isCentered
            ? <h1 className={`lg:text-5xl text-3xl font-semibold text-white drop-shadow-lg mt-16 ` }>
              {pageData?.banner?.title}
            </h1>
            : <h1 h1 className="lg:text-5xl text-3xl font-semibold text-white drop-shadow-lg mt-3">
              {pageData?.banner?.title}
            </h1>
          }

          <p className={`sm:text-lg text-base font-medium text-[#E5EAFA] sm:mt-1 sm:leading-normal leading-tight`}>
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
          <div className="z-[7]">
            <h2 className="text-[#CED5E5] sm:text-xl text-base leading-tight z-[2]">
              Do you want to customise your booking?
            </h2>
            <p className="sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-xs leading-tight w-full px-4 z-[2]">
              We offer customised bookings for any location, from bulk or
              intercity trips to monthly packages.
            </p>
            <div className="flex md:flex-row flex-col items-center gap-x-4 sm:pt-0 pt-4 gap-y-2 flex-wrap justify-center z-[2]">
              <p className="text-[#CED5E5] sm:text-sm text-xs">
                Contact us now
              </p>
              <div className="flex sm:flex-row flex-col sm:gap-x-4 gap-x-1.5 justify-between gap-y-1.5 sm:pb-0 pb-4">
                <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] lg:text-base text-xs font-medium flex-nowrap pop">
                  <img
                    className="sm:w-5 w-3"
                    src="/rolnew/global/icons/phone-primary-gold.svg"
                    alt="phone-primary-gold"
                  />
                  <a href="tel:+442045920966">+44 204 592 0966</a>
                </div>
                <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] lg:text-base text-xs font-medium pop">
                  <img
                    className="sm:w-5 w-3"
                    src="/rolnew/global/icons/mail-primary-gold.svg"
                    alt="phone-primary-gold"
                  />
                  <a href="mailto:booking@roldrive.com">booking@roldrive.com</a>
                </div>
              </div>
            </div>

            <div className="z-[2] sm:hidden flex items-center justify-center sm:pb-0 pb-12">
              <Button onClick={() => openModal()} className="w-7/12">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      {
        width >= 640 && (
          <div
            className="z-[2] sm:absolute flex items-center justify-center left-2/4 sm:-translate-x-2/4 sm:pb-0 pb-16"
            style={{
              top: `${height - 350}px`,
            }}
          >
            <Button onClick={() => openModal()} className="!px-16 py-2">
              Book Now
            </Button>
          </div>
        )
      }
      <div
        className='grow bg-cover bg-top service-banner bg-[#11202D40] bg-no-repeat relative z-[1] flex items-end sm:pb-[70px] pb-[35px]'
        style={{ backgroundImage:  `url(${pageData?.banner?.bannerImage})`}}
      >
        {width >= 786 ? (
          <div
            className='h-full bg-cover md:max-h-[130px] lg:max-h-[170px] min-h-[150px] absolute bottom-0 w-full left-0 right-0 z-[2] banner-mobile'
            style={{
              backgroundImage:
                "url('/rolnew/services/banner-gradient-mobile.svg')",
            }}
          />
        ) : (
          <div
            className='bg-cover max-h-[180px] sm:min-h-[210px] h-[160px] absolute bottom-0 w-full left-0 right-0 z-[2]'
            style={{
              backgroundImage:
                "url('/rolnew/services/banner-gradient-mobile.svg')",
            }}
          />
        )}
      </div>
      <DownArrowBox />
    </div >
  );
}

export default BannerLight;
