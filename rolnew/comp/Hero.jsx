'use client';

import { useEffect, useState } from 'react';
import '../section/home/css/booking.css';

export default function Hero({
  formContent, mainBgUrl = '/rolnew/home/banner.svg', mobileBgUrl = '/rolnew/home/banner-mobile.jpg', title = 'Premium Chauffeur Service', description = 'Your exclusive and dependable chauffeur service indulgence', titleWidth,
}) {
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
      className="relative mt-[72px] flex flex-col w-full md:min-h-[640px] lg:max-h-[90svh] overflow-hidden 2xl:min-h-[95svh] max-h-fit bg-[#11202d] "
    >
      <div
        className="absolute md:block hidden xl:px-[130px] md:px-[60px] 2xl:px-[130px] z-[6] 2xl:container"
        style={{
          bottom: height > 600 ? '58px' : '170px',
          left: width >= 1533 && '50%',
          transform: width >= 1533 && 'translateX(-50%)',
        }}
      >
        <div className="md:w-[350px] lg:w-[450px] xl:w-full w-full relative z-[2] md:block hidden">
          <h2 className="text-[#CED5E5] sm:text-xl text-base leading-tight">Do you want to customise your booking?</h2>
          <p className="sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-xs leading-tight lg:max-w-[500px] 2xl:max-w-full">We offer customised bookings for any location, from bulk or intercity trips to monthly packages.</p>
          <div className="flex md:flex-row flex-col items-center gap-x-4 sm:pt-0 pt-4 flex-wrap">
            <p className="text-[#CED5E5] sm:text-sm text-xs">Contact us now</p>
            <div className="flex sm:gap-x-4 gap-x-1.5 justify-between">
              <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] lg:text-base text-xs font-medium flex-nowrap">
                <img src="/rolnew/global/icons/phone-primary-gold.svg" alt="phone-primary-gold" />
                <a href="tel:+442071128101">+44 207 112 8101</a>
              </div>
              <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] lg:text-base text-xs font-medium">
                <img src="/rolnew/global/icons/mail-primary-gold.svg" alt="phone-primary-gold" />
                <a href="mailto:booking@roldrive.com">booking@roldrive.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-mobile-gradient absolute left-0 right-0 bg-repeat h-[400px] w-full z-[3] -bottom-5 sm:hidden block" />
      <div className="business-banner absolute top-0 left-0 right-0 h-auto xl:min-h-[328px] lg:min-h-[330px] z-[2]" />
      {
        width <= 1024
        && (
        <div className="sm:bg-cover bg-contain bg-top bg-no-repeat absolute -top-10 left-0 bottom-0 right-0 z-[5]" style={{ backgroundImage: `url(${mobileBgUrl})` }}>
          <div className="bg-cover absolute top-0 left-0 bottom-0 right-0 z-[1]" style={{ backgroundImage: 'url("/rolnew/home/banner-gradient-mobile.svg")' }} />
        </div>
        )
      }
      <div className="sm:h-full h-full flex flex-col sm:gap-y-0 gap-y-8 justify-center sm:pt-[28px] pt-[24px] z-[10]">
        <div className="relative z-[5] text-left xl:px-[130px] md:px-[60px] 2xl:px-[130px] px-4 2xl:container 2xl:mx-auto flex lg:flex-row flex-col md:justify-between justify-center md:items-start items-center gap-y-6 min-h-[120px]">
          <div className={`${titleWidth ? `lg:absolute ${titleWidth} top-0 sm:min-h-[200px]` : 'relative w-full'} md:w-[350px] lg:w-[450px] xl:w-full w-full`}>
            <h1 className="lg:text-5xl text-3xl font-semibold text-white drop-shadow-lg">{title}</h1>
            <p className="sm:text-lg text-base font-medium text-[#E5EAFA] sm:mt-1 sm:leading-normal leading-tight">{description}</p>
          </div>
          <div className={`sm:w-[450px] w-full h-fit md:absolute relative 2xl:top-8 md:top-1 md:left-[50%] lg:left-[53%] xl:left-[60%] booking-background rounded-3xl z-50 ${height > 600 ? 'py-6 sm:px-6 px-4' : 'py-4 sm:px-4 px-4'}`}>
            {formContent}
          </div>
        </div>
        <div className="relative w-full md:hidden block">
          <div className="absolute bg-cover bottom-0 left-0 right-0 h-[300px] bg-no-repeat z-[1]" style={{ backgroundImage: 'url(\'/rolnew/services/banner-gradient.svg\')' }} />
          <div className="w-full bottom-0 xl:px-[130px] md:px-[60px] 2xl:px-0 px-4 2xl:container 2xl:mx-auto sm:text-left text-center md:pb-[60px] pb-8 z-[2] relative">
            <h2 className="text-[#CED5E5] sm:text-xl text-base leading-tight">Do you want to customise your booking?</h2>
            <p className="sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-xs leading-tight">We offer customised bookings for any location, from bulk or intercity trips to monthly packages.</p>
            <div className="flex sm:flex-row flex-col items-center gap-x-4 sm:pt-0 pt-4">
              <p className="text-[#CED5E5] sm:text-sm text-xs">Contact us now</p>
              <div className="flex sm:gap-x-[12px] gap-x-1.5 justify-between">
                <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium">
                  <img src="/rolnew/global/icons/phone-primary-gold.svg" alt="phone-primary-gold" />
                  <a href="tel:+442071128101">+44 207 112 8101</a>
                </div>
                <div className="flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium">
                  <img src="/rolnew/global/icons/mail-primary-gold.svg" alt="phone-primary-gold" />
                  <a href="mailto:+442071128101">booking@roldrive.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grow relative z-[1] min-h-[548px] md:flex items-end pb-0">
        {
        width >= 768
        && <div className="2xl:bg-cover bg-contain bg-no-repeat bg-top absolute 2xl:bg-no-repeat top-0 left-0 bottom-0 right-0" style={{ backgroundImage: `url(${mainBgUrl}` }} />
      }
        <div className="relative z-[5] text-left w-full">
          <div className="absolute bg-cover bottom-0 left-0 right-0 lg:h-[430px] 2xl:h-[300px] bg-no-repeat z-[1] opacity-90" style={{ backgroundImage: 'url(\'/rolnew/services/banner-gradient.svg\')' }} />
        </div>
      </div>
    </div>
  );
}
