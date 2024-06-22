import React from 'react';
import Pic from 'rolnew/util/Pic';

function TrustedPartner() {
  return (
    <div className="bg-[#11202D] sm:px-9 px-4">
      <div className="bg-[#081017] xl:px-[97px] lg:px-10 md:px-6 sm:px-4 px-2 sm:py-[60px] py-4 sm:border-b sm:border-t border-[#828282] border-opacity-30">
        <div className="flex sm:gap-x-8 gap-x-4 2xl:container mx-auto">
          <div className="w-full max-w-[400px] hidden md:block">
            <div className="w-full min-h-[496px] h-full relative">
              <Pic alt="trust" className="rounded-xl" src="/rolnew/global/trust.jpg" objectFit="cover" />
            </div>
          </div>
          <div className="w-full">
            <div className="sm:mb-16 mb-4">
              <h4 className="sm:text-lg text-base font-normal leading-7 text-[#B2B2B2] font-robo">Who We Are</h4>
              <div className="flex flex-col">
                <h2 className="sm:text-3xl text-2xl font-medium sm:leading-9 leading-tight text-[#B2B2B2]">
                  RolDrive - Your trusted travel partner
                </h2>
                <p className="text-[#B2B2B2] leading-5 font-medium text-xs">Embark on a journey of luxury and convenience with our global chauffeured car hire service.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:gap-y-6 gap-y-4 lg:gap-x-12 md:gap-x-6 gap-x-4">
              <div className="col-span-1">
                <div className="w-6 h-6 relative">
                  <Pic alt="trust" className="rounded-xl" src="/rolnew/global/icons/shield-user-line.svg" objectFit="cover" />
                </div>
                <div className="sm:mt-6 mt-2 text-[#B2B2B2] leading-5">
                  <h4 className="sm:text-xl text-sm font-medium text-[#B2B2B2]">
                    Safe & Discreet
                  </h4>
                  <p className="sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]">RolDrive&apos;s chauffeurs are renowned for their safety and discretion, rigorously trained to maintain the highest standards of secure and private travel, ensuring clients&apos; journeys are not only comfortable but also confidential.</p>
                </div>
              </div>

              <div className="col-span-1">
                <div className="w-6 h-6 relative">
                  <Pic alt="trust" className="rounded-xl" src="/rolnew/global/icons/steering-wheel.svg" objectFit="cover" />
                </div>
                <div className="sm:mt-6 mt-2 text-[#B2B2B2] leading-5">
                  <h4 className="sm:text-xl text-sm font-medium text-[#B2B2B2]">
                    Professional Chauffeur
                  </h4>
                  <p className="sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]">RolDrive&apos;s chauffeurs strike the perfect balance between friendliness and professionalism, ensuring passengers feel both welcomed and respected throughout their journey, embodying the utmost standards of service excellence.</p>
                </div>
              </div>

              <div className="col-span-1">
                <div className="w-6 h-6 relative">
                  <Pic alt="trust" className="rounded-xl" src="/rolnew/global/icons/service-line.svg" objectFit="cover" />
                </div>
                <div className="sm:mt-6 mt-2 text-[#B2B2B2] leading-5">
                  <h4 className="sm:text-xl text-sm font-medium text-[#B2B2B2]">
                    Trust & Reliability
                  </h4>
                  <p className="sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]">RolDrive&apos;s chauffeurs prioritise trust and reliability, embodying these values in every journey to ensure clients receive secure, dependable, and consistent high-quality service.</p>
                  <p className="sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2] pt-2">Over 8,000 rides completed.</p>
                </div>
              </div>

              <div className="col-span-1">
                <div className="w-6 h-6 relative">
                  <Pic alt="trust" className="rounded-xl" src="/rolnew/global/icons/car-line.svg" objectFit="cover" />
                </div>
                <div className="sm:mt-6 mt-2 text-[#B2B2B2] leading-5">
                  <h4 className="sm:text-xl text-sm font-medium text-[#B2B2B2]">
                    A Great Fleet
                  </h4>
                  <p className="sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]">RolDrive boasts a large, diverse fleet, offering clients a wide range of luxury vehicles to select from, ensuring a perfect match for any preference or occasion.</p>
                  <p className="sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2] pt-2">Over 500 luxury cars</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedPartner;
