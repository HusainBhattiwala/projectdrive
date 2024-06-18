'use client';

import { useEffect, useState } from 'react';
import Button from 'rolnew/ui/Button';

function Banner({ pageData }) {
  const [width, setWidth] = useState(1200);
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
    <div
      className='relative mt-[72px] w-full flex flex-col items-center md:min-h-[580px] lg:max-h-[90svh] 2xl:min-h-[92svh] max-h-fit bg-[#11202d] sm:bg-cover bg-contain sm:bg-no-repeat sm:bg-center bg-left sm:pt-12 pt-4 sm:min-h-[700px] min-h-[505px]'
      style={{
        backgroundImage: width > 640 && `url(${pageData?.banner?.bannerImage})`,
      }}
    >
      <div className='sm:city-banner-gradient city-banner-mobile-gradient sm:opacity-90 absolute top-0 left-0 right-0 h-[250px] xl:min-h-[400px] md:min-h-[420px] lg:min-h-[250px] z-[6]' />

      <div className='text-center flex flex-col h-full flex-grow w-full'>
        <div className='z-[7] px-4'>
          <h1 className='lg:text-5xl text-3xl font-semibold text-white drop-shadow-lg mt-3'>
            {pageData?.banner?.title}
          </h1>
          <p className='sm:text-lg text-base font-medium text-[#E5EAFA] sm:mt-1 sm:leading-normal leading-tight'>
            {pageData?.banner?.subTitle}
          </p>
        </div>
        <div className='sm:pt-10 relative flex flex-col flex-grow sm:justify-start justify-end bg-cover'>
          <div
            className='h-full w-full bg-contain z-[1] absolute top-0 bg-contain bg-no-repeat'
            style={{
              backgroundImage:
                width <= 640 && `url(${pageData?.banner?.bannerImage})`,
            }}
          />

          <div
            className='sm:hidden bg-cover bg-no-repeat block opacity-70 absolute  left-0 right-0 h-[250px] bottom-0 z-[2]'
            style={{
              backgroundImage: 'url("/rolnew/cities/mobile-gradient.svg")',
            }}
          />
          <div className='z-[7]'>
            <h2 className='text-[#CED5E5] sm:text-xl text-base leading-tight z-[2]'>
              Do you want to customise your booking?
            </h2>
            <p className='sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-xs leading-tight w-full px-4 z-[2]'>
              We offer customised bookings for any location, from bulk or
              intercity trips to monthly packages.
            </p>
            <div className='flex md:flex-row flex-col items-center gap-x-4 sm:pt-0 pt-4 gap-y-2 flex-wrap justify-center z-[2]'>
              <p className='text-[#CED5E5] sm:text-sm text-xs'>
                Contact us now
              </p>
              <div className='flex sm:flex-row flex-col sm:gap-x-4 gap-x-1.5 justify-between gap-y-1.5 sm:pb-0 pb-4'>
                <div className='flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] lg:text-base text-xs font-medium flex-nowrap pop'>
                  <img
                    className='sm:w-5 w-3'
                    src='/rolnew/global/icons/phone-primary-gold.svg'
                    alt='phone-primary-gold'
                  />
                  <a href='tel:+442071128101'>+44 207 112 8101</a>
                </div>
                <div className='flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] lg:text-base text-xs font-medium pop'>
                  <img
                    className='sm:w-5 w-3'
                    src='/rolnew/global/icons/mail-primary-gold.svg'
                    alt='phone-primary-gold'
                  />
                  <a href='mailto:booking@roldrive.com'>booking@roldrive.com</a>
                </div>
              </div>
            </div>

            <div className='z-[2] sm:hidden flex items-center justify-center sm:pb-0 pb-12'>
              <Button className='w-7/12'>Book Now</Button>
            </div>
          </div>
        </div>
      </div>
      {width >= 640 && (
        <div
          className='z-[2] sm:absolute flex items-center justify-center left-2/4 sm:-translate-x-2/4 sm:pb-0 pb-16'
          style={{
            top: `${height - 270}px`,
          }}
        >
          <Button className='!px-16 py-2'>Book Now</Button>
        </div>
      )}
      <div className='sm:w-[74px] sm:h-[74px] w-12 h-12 absolute sm:-bottom-[36px] -bottom-6 left-2/4 -translate-x-2/4 z-10 bg-[#2F4456] flex items-center justify-center flex-col p-4 border border-[#FFFFFF] border-opacity-20 rounded-lg cursor-pointer'>
        <div className='animate-bounce'>
          <img
            alt='arrow-down'
            className='w-8 h-8'
            src='/rolnew/global/icons/arrow-down.svg'
          />
          <img
            alt='arrow-down'
            className='w-8 h-8 -mt-5'
            src='/rolnew/global/icons/arrow-down.svg'
          />
          <img
            alt='arrow-down'
            className='w-8 h-8 -mt-5'
            src='/rolnew/global/icons/arrow-down.svg'
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
