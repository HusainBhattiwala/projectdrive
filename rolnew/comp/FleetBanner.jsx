"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Category from "./Category";

function FleetBanner({ mainTitle }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState(1000);
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

  const carCategoryList = [
    {
      id: "carcat1",
      category: "Business Class",
    },
    {
      id: "carcat2",
      category: "First Class",
    },
    {
      id: "carcat3",
      category: "Luxury Class",
    },
    {
      id: "carcat4",
      category: "Electric",
    },
    {
      id: "carcat5",
      category: "SUV",
    },
    {
      id: "carcat6",
      category: "MVP",
    },
    {
      id: "carcat7",
      category: "Sprinter",
    },
  ];

  return (
    <div className='relative mt-16 flex flex-col w-full 2xl:min-h-[650px] xl:min-h-[560px] md:min-h-[500px] min-h-[500px] max-h-[1000px] bg-[#223544]'>
      <div className='service-home-banner absolute sm:top-0 -top-6 left-0 right-0 h-auto sm:min-h-[328px] min-h-[328px]' />
      <div className='sm:h-full h-full flex flex-col justify-center items-center sm:pt-[28px] pt-5'>
        <div className='relative z-[5] sm:text-center text-left px-5'>
          <h1 className='lg:text-[36px] mt-5 text-3xl leading-[44px] font-bold drop-shadow-[25%]'>
            {mainTitle}
          </h1>
        </div>

        <div className='flex gap-4 mx-auto w-[1052px] h-[270px] justify-between z-[10] mt-14'>
          <div className='text-center w-[336px] p-[18px] flex flex-col gap-4  items-center'>
            <img
              className='w-[30px] h-[30px]'
              src='/images/airports/service.png'
              alt='services logo'
            />
            <h3 className='font-medium text-xl leading-[26px] text-[#FFFFFF] break-words whitespace-pre-wrap'>
              Elevate Your <br /> Business Image
            </h3>
            <p className='font-normal text-sm left-5 text-[#B2B2B2]'>
              For success in business, a commanding presence is vital. Making an
              impact starts with your appearance. Arrive at meetings <br />{" "}
              impeccably groomed to leave a lasting impression.
            </p>
          </div>
          <div className='text-center p-[18px] w-[336px] flex flex-col gap-4 items-center'>
            <img
              className='w-[30px] h-[30px]'
              src='/images/airports/service.png'
              alt='services logo'
            />
            <h3 className='font-medium text-xl leading-[26px] text-[#FFFFFF]'>
              Comfort, Luxury, and <br /> Safety in Transportation
            </h3>
            <p className='font-normal text-sm left-5 text-[#B2B2B2]'>
              The comfort & luxury of a business class chauffeur service,
              equipped with all amenities, can make the journey more pleasant &
              relaxing. Safety and security are also paramount, with experienced
              and vetted drivers at the helm.
            </p>
          </div>
          <div className='text-center p-[18px] w-[336px] flex flex-col gap-4 items-center'>
            <img
              className='w-[30px] h-[30px]'
              src='/images/airports/service.png'
              alt='services logo'
            />
            <h3 className='font-medium text-xl leading-[26px] text-[#FFFFFF]'>
              Efficiency and <br /> Cost-Effectiveness
            </h3>
            <p className='font-normal text-sm left-5 text-[#B2B2B2]'>
              The convenience of having the driver navigate traffic allows for a
              stress-free journey, allowing you to focus on the meeting at hand.
              Hiring a business-class chauffeur service can also be
              cost-effective for companies needing regular transportation for
              employees or clients.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Category categorys={carCategoryList} />
      </div>
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

export default FleetBanner;
