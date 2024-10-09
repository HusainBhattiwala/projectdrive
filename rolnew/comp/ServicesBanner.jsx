'use client';

import { useEffect, useState } from 'react';
import DownArrowBox from './DownArrowBox';
import ContactUsDiv from './ContactUsDiv';
// import { Montserrat } from 'next/font/google';  // Updated import
// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

function ServicesBanner({ banner }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState(1000);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    // <div className='relative mt-16 flex flex-col w-full 2xl:min-h-[90svh] xl:min-h-[560px] md:min-h-[500px] min-h-[500px] max-h-[700px]'>
    <div className='relative flex flex-col w-full 2xl:min-h-[90svh] xl:min-h-[560px] md:min-h-[500px] min-h-[500px] max-h-[700px]'>

      <div className='service-home-banner absolute sm:top-0 top-0 left-0 right-0 h-[240px] sm:min-h-[240px] min-h-[328px] z-[2]' />
      <div className='sm:h-full h-full flex flex-col justify-center items-center sm:pt-[28px] pt-5 z-[10]'>
        <div className={`relative z-[5] sm:text-center text-left px-5`}>
          <h1 className='lg:text-5xl text-3xl leading-[1] font-semibold text-white drop-shadow-[25%]'>
            {banner?.title}
          </h1>
          <p className='sm:text-lg text-base font-medium text-[#E5EAFA] drop-shadow-[25%] sm:mt-1 sm:leading-normal leading-tight'>
            {banner?.subTitle}
          </p>
        </div>
      </div>

      <div
        className='absolute w-full flex flex-col justify-center items-center px-5 text-center z-[10]'
        style={{
          // eslint-disable-next-line no-nested-ternary
          bottom: height > 600 ? (width > 560 ? '48px' : '20px') : '20px',
          left: width >= 1533 && '50%',
          transform: width >= 1533 && 'translateX(-50%)',
        }}
      >
        <ContactUsDiv />
      </div>


      {/* <div
        className='grow bg-cover bg-top service-banner bg-[#11202D40] bg-no-repeat relative z-[1] flex items-end sm:pb-[70px] pb-[35px]'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      > */}
      {width >= 768 && (
        <div
          className="2xl:bg-cover bg-cover bg-top service-banner absolute 2xl:bg-no-repeat top-24 left-0 bottom-0 right-0"
          style={{
            backgroundImage:
              width <= 1536 && banner?.bannerImage
                ? `url(${banner?.bannerImage}`
                : 'url("/rolnew/home/bannerv2.svg")',
          }}
        >
          <div
            className='h-full bg-cover md:max-h-[130px] lg:max-h-[170px] min-h-[150px] absolute bottom-0 w-full left-0 right-0 z-[2] banner-mobile'
            style={{
              backgroundImage:
                "url('/rolnew/services/banner-gradient-mobile.svg')",
            }}
          />
        </div>

      )}

      {width <= 768 && (

        <div
          className="bg-cover bg-top bg-no-repeat absolute top-0 left-0 bottom-0 right-0 z-[5]"
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
          <div
            className='bg-cover max-h-[180px] sm:min-h-[160px] h-[160px] absolute bottom-0 w-full left-0 right-0 z-[2]'
            style={{
              backgroundImage:
                "url('/rolnew/services/banner-gradient-mobile.svg')",
            }}
          />
          {/* <div
            className="bg-cover absolute top-0 left-0 bottom-0 right-0 z-[1]"
            style={{
              backgroundImage: 'url("/rolnew/home/banner-gradient-mobile.svg")',
            }}
          /> */}
        </div>
      )}


      {/* {width >= 786 ? (
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
      )} */}

      {/* {
        !hideScrollDown && (
          <DownArrowBox />
        )
      } */}
    </div >
  );
}

export default ServicesBanner;
