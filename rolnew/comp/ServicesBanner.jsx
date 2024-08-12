'use client';

import { useEffect, useState } from 'react';
import DownArrowBox from './DownArrowBox';
// import { Montserrat } from 'next/font/google';  // Updated import
// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

function ServicesBanner({
  mainDescription,
  backgroundImage,
  title,
  mainTitle,
  description,
  hideScrollDown,
}) {
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
      <div
        className='absolute w-full z-[5] flex flex-col justify-center items-center px-5 text-center'
        style={{
          // eslint-disable-next-line no-nested-ternary
          bottom: height > 600 ? (width > 560 ? '58px' : '40px') : '80px',
          left: width >= 1533 && '50%',
          transform: width >= 1533 && 'translateX(-50%)',
        }}
      >
        <h2 className='text-[#CED5E5] sm:text-xl text-base leading-tight'>
          {title}
        </h2>
        <p className='sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-xs leading-tight'>
          {description}
        </p>

        <div className='flex sm:flex-row flex-col items-center gap-x-4 sm:pt-0'>
          <p className='text-[#CED5E5] sm:text-sm text-xs'>Contact us now</p>
          <div className='flex sm:gap-x-[12px] gap-x-1.5 justify-between'>
            <div className='flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium'>
              <img
                src='/rolnew/global/icons/phone-primary-gold.svg'
                alt='phone-primary-gold'
              />
              <a href='tel:+442045920966'>+44 204 592 0966</a>
            </div>
            <div className='flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium'>
              <img
                src='/rolnew/global/icons/mail-primary-gold.svg'
                alt='phone-primary-gold'
              />
              <a href="mailto:booking@roldrive.com">booking@roldrive.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className='service-home-banner absolute sm:top-0 -top-6 left-0 right-0 h-auto sm:min-h-[240px] min-h-[328px] z-[2]' />
      <div className='sm:h-full h-full flex flex-col justify-center items-center sm:pt-[28px] pt-5'>
        {/* <div className={`relative z-[5] sm:text-center text-left px-5 ${montserrat.className}`}> */}
        <div className={`relative z-[5] sm:text-center text-left px-5`}>
          <h1 className='lg:text-5xl text-3xl leading-[1] font-semibold text-white drop-shadow-[25%]'>
            {mainTitle}
          </h1>
          <p className='sm:text-lg text-base font-medium text-[#E5EAFA] drop-shadow-[25%] sm:mt-1 sm:leading-normal leading-tight'>
            {mainDescription}
          </p>
        </div>
      </div>
      <div
        className='grow bg-cover bg-top service-banner bg-[#11202D40] bg-no-repeat relative z-[1] flex items-end sm:pb-[70px] pb-[35px]'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
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
      {
        !hideScrollDown && (
          <DownArrowBox />
        )
      }
    </div >
  );
}

export default ServicesBanner;
