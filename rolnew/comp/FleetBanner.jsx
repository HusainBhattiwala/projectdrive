"use client";

import { useEffect, useRef, useState, useContext } from "react";
import Category from "./Category";
import { FleetContext } from "context/FleetContext";
import { fleetData } from "static/fleetData";
import Pic from "rolnew/util/Pic";

function FleetBanner({ mainTitle, hideArrow }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState(1000);

  const { setCarDetails, setCarCatData } = useContext(FleetContext);

  const bannerRef = useRef(null);

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

  const handleCategoryChange = (category) => {
    setCarCatData(category.options);
    setCarDetails(category.options[0]);
  };

  return (
    <div
      className={`relative mt-16 flex flex-col w-full xl:min-h-[560px] md:min-h-[500px] min-h-[500px] max-h-[1000px] bg-[#223544] ${
        !hideArrow ? "2xl:min-h-[80svh]" : "2xl:min-h-[75svh]"
      }`}
      ref={bannerRef}
    >
      <div className="service-home-banner absolute sm:top-0 -top-6 left-0 right-0 h-auto sm:min-h-[328px] min-h-[328px]" />
      <div className="sm:h-full h-full flex flex-col sm:pt-[28px] pt-5">
        <div className="relative z-[5] sm:text-center px-5">
          <h1 className="lg:text-[36px] mt-5 sm:text-3xl leading-[44px] font-normal text-2xl sm:font-bold drop-shadow-[25%]">
            {mainTitle}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-2 mb-4 lg:mb-0 sm:gap-4 mx-auto w-full max-w-[1052px] h-auto md:h-[270px] justify-between z-[10] mt-3 sm:mt-14">
          <div className="sm:text-center w-full md:w-[336px] p-[18px] flex flex-col gap-1 sm:gap-4 sm:items-center">
            <div className="flex flex-row gap-2 sm:gap-4 sm:flex-col sm:items-center items-center">
              <div className="w-7 h-6">
                <Pic
                  src="/rolnew/global/icons/fleet/upgrade-your-image.png"
                  alt="fleet icon"
                  objectFit="cover"
                />
              </div>

              <h3 className="font-medium text-sm sm:text-xl leading-[26px] text-[#FFFFFF]">
                Upgrade Your Image <br className="hidden sm:block" />
              </h3>
            </div>
            <p className="font-normal text-sm text-[#B2B2B2]">
              A commanding presence is vital for success. Making this impact
              starts with your appearance. Arrive at your venue impeccably
              groomed to leave a lasting impression
            </p>
          </div>
          <div className="sm:text-center w-full md:w-[336px] p-[18px] flex flex-col gap-1 sm:gap-4 sm:items-center">
            <div className="flex flex-row gap-2 sm:gap-4 sm:flex-col sm:items-center items-center">
              <div className="w-7 h-6">
                <Pic
                  src="/rolnew/global/icons/fleet/Comfort, Luxury and Safety.png"
                  alt="fleet icon"
                  objectFit="cover"
                />
              </div>

              <h3 className="font-medium text-sm sm:text-xl leading-[26px] text-[#FFFFFF]">
                Comfort, Luxury and Safety
              </h3>
            </div>
            <p className="font-normal text-sm text-[#B2B2B2]">
              The comfort, luxury and safety offered by our chauffeur driven
              cars equipped with all amenities means a more pleasant and
              relaxing journey. Safety and security are paramount too through
              our experienced and vetted drivers at the helm
            </p>
          </div>
          <div className="sm:text-center w-full md:w-[336px] p-[18px] flex flex-col gap-1 sm:gap-4 sm:items-center">
            <div className="flex flex-row gap-2 sm:gap-4 sm:flex-col sm:items-center items-center">
              <div className="w-8 h-7">
                <Pic
                  src="/rolnew/global/icons/fleet/Efficiency and Cost Effectiveness.png"
                  alt="fleet icon"
                  objectFit="cover"
                />
              </div>

              <h3 className="font-medium text-sm sm:text-xl leading-[26px] text-[#FFFFFF]">
                Efficiency and Cost Effectiveness
              </h3>
            </div>

            <p className="font-normal text-sm text-[#B2B2B2]">
              Through our chauffeur driven cars, having a driver navigate
              traffic allows for a stress free journey allowing you to focus on
              the task at hand. Hiring a business class chauffeur service can
              also save on costs for those requiring regular transportation.
            </p>
          </div>
        </div>
      </div>

      {!hideArrow && (
        <div className="mt-20">
          <Category
            categorys={fleetData}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      )}

      {!hideArrow && (
        <div className="hidden sm:block">
          <div className="sm:w-[74px] sm:h-[74px] w-12 h-12 absolute sm:-bottom-[36px] -bottom-6 left-2/4 -translate-x-2/4 z-10 bg-[#2F4456] flex items-center justify-center flex-col p-4 border border-[#FFFFFF] border-opacity-20 rounded-lg cursor-pointer">
            <div className="animate-bounce">
              <img
                alt="arrow-down"
                className="w-8 h-8"
                src="/rolnew/global/icons/arrow-down.svg"
              />
              <img
                alt="arrow-down"
                className="w-8 h-8 -mt-5"
                src="/rolnew/global/icons/arrow-down.svg"
              />
              <img
                alt="arrow-down"
                className="w-8 h-8 -mt-5"
                src="/rolnew/global/icons/arrow-down.svg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FleetBanner;
