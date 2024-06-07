/* eslint-disable max-len */

import H2 from '../typography/H2';
import H4 from '../typography/H4';
import P from '../typography/P';
import { Pic } from '../ui/Pic';

export default function BookingProcess() {
  return (
    <section className="pt-28 pb-24 bg-[#FBFBFB]">
      <div className="2xl:container px-6 md:px-6 lg:px-[110px] mx-auto">
        <div className="flex gap-[12px]" data-aos="slide-right" data-aos-duration="1000">
          <div className="h-6 w-6">
            <Pic src="/images/icons/tickingreen.svg" />
          </div>
          <H2 className="uppercase !leading-[24px] !text-[24px] font-[700] text-black flex mb-24">
            Why Choose US
          </H2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 sm:gap-y-[80px] gap-y-[40px] !font-robo sm:px-6">
          <div className="grid-cols-3 grid sm:gap-x-10 gap-x-5 sm:gap-y-6 gap-y-2 items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-10">
            <div className="col-span-1 max-h-max">
              <Pic
                src="/images/icons/mobileinhand.svg"
                className="object-contain !h-44 mt-auto"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="flex sm:flex-col sm:items-start flex-row items-center">
                <div className="max-w-max text-white bg-black rounded-full flex justify-center items-center px-[0.9rem] py-2 !font-[700] sm:!text-[14px] !text-[16px] ">1</div>
                <H4 className="text-black font-[700] my-[8px] !font-manrope sm:pl-0 pl-2 sm:leading-none !leading-2 sm:!text-[14px] !text-[16px] sm:pt-2 pt-0">Outstanding Customer Service</H4>
              </div>
              <P className="text-[#8B8B8B] !text-sm !font-sans sm:pt-1 pt-3">RolDrive is committed to providing top-notch customer service, addressing any concerns or special requests to ensure complete satisfaction. This is our most important USP.</P>
            </div>
          </div>
          <div className="grid-cols-3 grid sm:gap-x-10 gap-x-5 sm:gap-y-6 gap-y-2 items-center sm:pt-0 pt-1" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-10">
            <div className="col-span-1 max-h-max relative">
              <Pic
                src="/images/icons/caronmobile.svg"
                className="object-contain !h-44 mt-auto"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="flex sm:flex-col sm:items-start flex-row items-center">
                <div className="max-w-max text-white bg-black rounded-full flex justify-center items-center px-[0.9rem] py-2 !font-[700] sm:!text-[14px] !text-[16px] ">2</div>
                <H4 className="text-black font-[700] my-[8px] !font-manrope sm:pl-0 pl-2 sm:leading-none !leading-2 sm:!text-[14px] !text-[16px] sm:pt-2 pt-0">Luxury Fleet</H4>
              </div>
              <P className="text-[#8B8B8B] !text-sm !font-sans sm:pt-1 pt-3">RolDrive&#39;s impressive collection of high-end vehicles, including Mercedes Maybach, Rolls Royce and Bentley, ensures clients experience the utmost in style, comfort, safety and luxury.</P>
            </div>
          </div>
          <div className="grid-cols-3 grid gap-x-10 gap-y-6 items-center sm:pt-0 pt-1" data-aos="fade-up" data-aos-offset="-10" data-aos-duration="1000" data-aos-delay="200">
            <div className="col-span-1 max-h-max">
              <Pic
                src="/images/icons/booking3.svg"
                className="!h-44 mt-auto"
              />
            </div>
            <div className="col-span-2 flex flex-col">

              <div className="flex sm:flex-col sm:items-start flex-row items-center">
                <div className="max-w-max text-white bg-black rounded-full flex justify-center items-center px-[0.9rem] py-2 !font-[700] sm:!text-[14px] !text-[16px] ">3</div>
                <H4 className="text-black font-[700] my-[8px] !font-manrope sm:pl-0 pl-2 sm:leading-none !leading-2 sm:!text-[14px] !text-[16px] sm:pt-2 pt-0">Competitive Pricing</H4>
              </div>
              <P className="text-[#8B8B8B] !text-sm !font-sans !font-[400] sm:pt-1 pt-3">Despite offering luxury services, RolDrive maintains competitive pricing, ensuring clients receive exceptional value without compromising on quality or comfort.</P>
            </div>
          </div>
          <div className="grid-cols-3 grid gap-x-10 gap-y-6 items-center sm:pt-0 pt-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="-10">
            <div className="col-span-1 max-h-max">
              <Pic
                src="/images/icons/mobileinhand.svg"
                className="object-contain sm:!h-48 !h-[192px]"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="flex sm:flex-col sm:items-start flex-row items-center">
                <div className="max-w-max text-white bg-black rounded-full flex justify-center items-center px-[0.9rem] py-2 !font-[700] sm:!text-[14px] !text-[16px] ">4</div>
                <H4 className="text-black font-[700] my-[8px] !font-manrope sm:pl-0 pl-2 sm:leading-none !leading-2 sm:!text-[14px] !text-[16px] sm:pt-2 pt-0">24/7 Availability</H4>
              </div>

              <P className="text-[#8B8B8B] !text-sm !font-sans sm:pt-1 pt-3">RolDrive’s round-the-clock services make us a convenient and dependable option for clients with busy schedules or last-minute transportation requirements.</P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
