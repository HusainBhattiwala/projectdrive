"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Category from "./Category";

const vehicleCategories =  [
  {
      "vehCatName": "Business V class",
      "vehCatImg": "https://rdbucket1.s3.eu-west-2.amazonaws.com/Business%20V%20class_car1.png",
      "vehTypeId": "7c6fc6a8-fa3c-45bc-8557-6f0c47a4f8e0",
      "vehCatId": "02b65338-d62b-48de-9f6e-9f3570fa157e",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "UAE Vehicle",
      "vehCatImg": "https://rdbucket1.s3.amazonaws.com/UAE%20Vehicle_car-vector.jpg",
      "vehTypeId": "e72b792f-2a6a-46d1-b488-3c6b5080857f",
      "vehCatId": "2584df45-5c80-4487-94b6-9b089062672d",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 1,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Paris Car13",
      "vehCatImg": "https://rdbucket1.s3.eu-west-2.amazonaws.com/Paris%20Car13_mercedes-sprinter-19.png",
      "vehTypeId": "1ff2214d-1a50-4513-8bfe-a187b9b73755",
      "vehCatId": "312d4b60-5b9e-41aa-a803-680fdff02a31",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Test Veh cat 1",
      "vehCatImg": null,
      "vehTypeId": "73f8c4b4-8a3d-4dac-8f41-429ed35a179e",
      "vehCatId": "3c0e3916-14b1-425c-853c-010ca4d02509",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Test Veh cat 3",
      "vehCatImg": null,
      "vehTypeId": "62438c9f-f29a-4a92-8a6a-7fa9f27ab09f",
      "vehCatId": "404525bd-434b-4512-8be6-a31dc5f12ad1",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Paris Car12",
      "vehCatImg": "https://rdbucket1.s3.eu-west-2.amazonaws.com/Paris%20Car12_roldrive-booking-background.jpg",
      "vehTypeId": "14948fc5-fead-42ad-be91-ef2dd3257142",
      "vehCatId": "5a1591b8-eb81-425d-b2fb-cc20cc2a1104",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 0,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "TES2 Veh",
      "vehCatImg": null,
      "vehTypeId": "6d70025b-896c-4fd3-b4a6-94fe7ab621cf",
      "vehCatId": "6611d12c-ec48-430c-ad60-96353dae10f2",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Veh Cat 1",
      "vehCatImg": null,
      "vehTypeId": "30de680c-6701-46b5-ae1a-cc31ad94148a",
      "vehCatId": "73211b23-c01d-42c6-9aa3-10f30f609c3b",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Deep Test Veh Cat",
      "vehCatImg": "https://rdbucket1.s3.eu-west-2.amazonaws.com/Deep%20Test%20Veh%20Cat_Screenshot%205.png",
      "vehTypeId": "f2e9aa39-d380-47df-9df9-340f18e353b4",
      "vehCatId": "8fbe43fc-a7e8-41ef-a29d-b40e0fd4817a",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 2,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Business S Class",
      "vehCatImg": "https://rdbucket1.s3.amazonaws.com/Business%20S%20Class_car1.png",
      "vehTypeId": "30f1df8e-238b-4e7a-afcb-909bcc315637",
      "vehCatId": "9f29f04b-34a9-45f4-b6db-59edef811963",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 4,
      "luggageCount": 3,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "test veh 1",
      "vehCatImg": null,
      "vehTypeId": "f98dc205-8f06-43be-81ad-a8ae2bcd5552",
      "vehCatId": "c0930d1f-f3f1-469c-85af-ac6f5541167d",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Business E class",
      "vehCatImg": "https://rdbucket1.s3.eu-west-2.amazonaws.com/Business%20E%20class_car1.png",
      "vehTypeId": "4e54863f-af85-4eb7-b89f-668a6479ad87",
      "vehCatId": "d12d4da4-e10d-42a8-95ea-fd21cafc0613",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 4,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Vehicle test 1",
      "vehCatImg": null,
      "vehTypeId": "f9dbd553-7671-4c4a-85c5-95e452309ffb",
      "vehCatId": "d32756e2-ece6-4f93-9d58-c98a1cf916bf",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 3,
      "luggageCount": 2,
      "description": null,
      "ChildSeat": null,
      "gps": null
  },
  {
      "vehCatName": "Test Veh cat 2",
      "vehCatImg": null,
      "vehTypeId": "5895289f-3239-4fb4-b51c-407a11dc741f",
      "vehCatId": "e1bf5985-d167-4ac9-b784-16bf03b83811",
      "vehMake": "(N/A)",
      "vehModel": "(N/A)",
      "vehImgUrl": null,
      "isActive": true,
      "adultSeatCount": 2,
      "luggageCount": 0,
      "description": null,
      "ChildSeat": null,
      "gps": null
  }
]

function FleetBanner({ mainTitle, hideArrow }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState(1000);
  const [carData, setCarData] = useState();

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
  return (
    <div
      className='relative mt-16 flex flex-col w-full 2xl:min-h-[85svh] xl:min-h-[560px] md:min-h-[500px] min-h-[500px] max-h-[1000px] bg-[#223544]'
      ref={bannerRef}
    >
      <div className='service-home-banner absolute sm:top-0 -top-6 left-0 right-0 h-auto sm:min-h-[328px] min-h-[328px]' />
      <div className='sm:h-full h-full flex flex-col sm:pt-[28px] pt-5'>
        <div className='relative z-[5] sm:text-center px-5'>
          <h1 className='lg:text-[36px] mt-5 sm:text-3xl leading-[44px] font-normal text-2xl sm:font-bold drop-shadow-[25%]'>
            {mainTitle}
          </h1>
        </div>

        <div className='flex flex-col md:flex-row gap-2 mb-4 lg:mb-0 sm:gap-4 mx-auto w-full max-w-[1052px] h-auto md:h-[270px] justify-between z-[10] mt-3 sm:mt-10'>
          <div className='sm:text-center w-full md:w-[336px] p-[18px] flex flex-col gap-1 sm:gap-4 sm:items-center'>
            <div className='flex flex-row gap-2 sm:gap-4 sm:flex-col sm:items-center items-center'>
              <svg
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='sm:mb-2 shrink-0 w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]'
              >
                <path
                  d='M20.7097 7.70968C21.9597 6.45968 21.3897 4.99968 20.7097 4.28968L17.7097 1.28968C16.4497 0.0396849 14.9997 0.609685 14.2897 1.28968L12.5897 2.99968H9.99969C8.09969 2.99968 6.99968 3.99968 6.43968 5.14968L1.99968 9.58969V13.5897L1.28968 14.2897C0.0396849 15.5497 0.609685 16.9997 1.28968 17.7097L4.28968 20.7097C4.82968 21.2497 5.40968 21.4497 5.95968 21.4497C6.66968 21.4497 7.31968 21.0997 7.70968 20.7097L10.4097 17.9997H13.9997C15.6997 17.9997 16.5597 16.9397 16.8697 15.8997C17.9997 15.5997 18.6197 14.7397 18.8697 13.8997C20.4197 13.4997 20.9997 12.0297 20.9997 10.9997V7.99968H20.4097L20.7097 7.70968ZM18.9997 10.9997C18.9997 11.4497 18.8097 11.9997 17.9997 11.9997H16.9997V12.9997C16.9997 13.4497 16.8097 13.9997 15.9997 13.9997H14.9997V14.9997C14.9997 15.4497 14.8097 15.9997 13.9997 15.9997H9.58969L6.30968 19.2797C5.99968 19.5697 5.81968 19.3997 5.70968 19.2897L2.71968 16.3097C2.42968 15.9997 2.59968 15.8197 2.70968 15.7097L3.99968 14.4097V10.4097L5.99968 8.40968V9.99969C5.99968 11.2097 6.79969 12.9997 8.99969 12.9997C11.1997 12.9997 11.9997 11.2097 11.9997 9.99969H18.9997V10.9997ZM19.2897 6.28968L17.5897 7.99968H9.99969V9.99969C9.99969 10.4497 9.80969 10.9997 8.99969 10.9997C8.18969 10.9997 7.99968 10.4497 7.99968 9.99969V6.99968C7.99968 6.53968 8.16969 4.99968 9.99969 4.99968H13.4097L15.6897 2.71968C15.9997 2.42968 16.1797 2.59968 16.2897 2.70968L19.2797 5.68968C19.5697 5.99968 19.3997 6.17968 19.2897 6.28968Z'
                  fill='white'
                />
              </svg>

              <h3 className='font-medium text-sm sm:text-xl leading-[26px] text-[#FFFFFF]'>
                Elevate Your <br className='hidden sm:block' /> Business Image
              </h3>
            </div>
            <p className='font-normal text-sm text-[#B2B2B2]'>
              For success in business, a commanding presence is vital. Making an
              impact starts with your appearance. Arrive at meetings{" "}
              <br className='hidden md:inline' />
              impeccably groomed to leave a lasting impression.
            </p>
          </div>
          <div className='sm:text-center w-full md:w-[336px] p-[18px] flex flex-col gap-1 sm:gap-4 sm:items-center'>
            <div className='flex flex-row gap-2 sm:gap-4 sm:flex-col sm:items-center items-center'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='sm:mb-2 shrink-0 w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]'
              >
                <path
                  d='M12 1.5L3 4.5V13.5C3 18.4711 7.02891 22.5 12 22.5C16.9711 22.5 21 18.4711 21 13.5V4.5L12 1.5ZM19.3125 13.5C19.3125 17.5383 16.0383 20.8125 12 20.8125C7.96172 20.8125 4.6875 17.5383 4.6875 13.5V5.76562L12 3.1875L19.3125 5.76562V13.5Z'
                  fill='white'
                />
                <path
                  d='M8.86857 11.1361C8.79037 11.0576 8.69742 10.9952 8.59505 10.9527C8.49269 10.9102 8.38294 10.8883 8.27209 10.8883C8.16124 10.8883 8.05148 10.9102 7.94912 10.9527C7.84676 10.9952 7.75381 11.0576 7.6756 11.1361C7.59704 11.2143 7.5347 11.3073 7.49217 11.4097C7.44963 11.512 7.42773 11.6218 7.42773 11.7326C7.42773 11.8435 7.44963 11.9532 7.49217 12.0556C7.5347 12.1579 7.59704 12.2509 7.6756 12.3291L10.7084 15.3619L10.7576 15.4111C10.8316 15.4852 10.9195 15.544 11.0162 15.5842C11.1129 15.6243 11.2166 15.6449 11.3213 15.6449C11.426 15.6449 11.5297 15.6243 11.6264 15.5842C11.7231 15.544 11.811 15.4852 11.885 15.4111L17.1233 10.1729C17.1974 10.0989 17.2562 10.011 17.2963 9.9143C17.3364 9.81757 17.357 9.71389 17.357 9.60918C17.357 9.50447 17.3364 9.40079 17.2963 9.30406C17.2562 9.20734 17.1974 9.11948 17.1233 9.04551L17.0576 8.97988C16.9837 8.90577 16.8958 8.84698 16.7991 8.80686C16.7024 8.76674 16.5987 8.74609 16.494 8.74609C16.3893 8.74609 16.2856 8.76674 16.1888 8.80686C16.0921 8.84698 16.0043 8.90577 15.9303 8.97988L11.3201 13.5877L8.86857 11.1361Z'
                  fill='white'
                />
              </svg>

              <h3 className='font-medium text-sm sm:text-xl leading-[26px] text-[#FFFFFF]'>
                Comfort, Luxury, and <br className='hidden md:inline' />
                Safety in Transportation
              </h3>
            </div>
            <p className='font-normal text-sm text-[#B2B2B2]'>
              The comfort & luxury of a business class chauffeur service,
              equipped with all amenities, can make the journey more pleasant &
              relaxing. Safety and security are also paramount, with experienced
              and vetted drivers at the helm.
            </p>
          </div>
          <div className='sm:text-center w-full md:w-[336px] p-[18px] flex flex-col gap-1 sm:gap-4 sm:items-center'>
            <div className='flex flex-row gap-2 sm:gap-4 sm:flex-col sm:items-center items-center'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='sm:mb-2 shrink-0 w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]'
              >
                <path
                  d='M10.5095 3.66587C10.6971 3.45637 10.9267 3.28878 11.1835 3.17404C11.4402 3.0593 11.7183 3 11.9995 3C12.2807 3 12.5587 3.0593 12.8155 3.17404C13.0722 3.28878 13.3019 3.45637 13.4895 3.66587L14.1895 4.44787C14.3895 4.67137 14.6373 4.847 14.9144 4.96177C15.1916 5.07653 15.491 5.12749 15.7905 5.11087L16.8405 5.05287C17.1213 5.03739 17.4023 5.08132 17.665 5.18179C17.9277 5.28227 18.1663 5.43703 18.3651 5.63596C18.564 5.8349 18.7186 6.07354 18.8189 6.3363C18.9193 6.59906 18.9631 6.88003 18.9475 7.16087L18.8895 8.20987C18.873 8.5092 18.924 8.80841 19.0388 9.08536C19.1536 9.36231 19.3291 9.60992 19.5525 9.80987L20.3345 10.5099C20.5441 10.6975 20.7119 10.9272 20.8267 11.184C20.9415 11.4409 21.0009 11.719 21.0009 12.0004C21.0009 12.2817 20.9415 12.5599 20.8267 12.8167C20.7119 13.0736 20.5441 13.3033 20.3345 13.4909L19.5525 14.1909C19.329 14.3909 19.1533 14.6387 19.0386 14.9158C18.9238 15.193 18.8729 15.4924 18.8895 15.7919L18.9475 16.8419C18.963 17.1227 18.919 17.4037 18.8186 17.6664C18.7181 17.9291 18.5633 18.1677 18.3644 18.3665C18.1655 18.5653 17.9268 18.72 17.664 18.8203C17.4013 18.9207 17.1203 18.9645 16.8395 18.9489L15.7905 18.8909C15.4911 18.8744 15.1919 18.9254 14.915 19.0402C14.638 19.155 14.3904 19.3305 14.1905 19.5539L13.4905 20.3359C13.3029 20.5455 13.0732 20.7133 12.8163 20.8281C12.5595 20.9429 12.2813 21.0023 12 21.0023C11.7186 21.0023 11.4405 20.9429 11.1836 20.8281C10.9268 20.7133 10.6971 20.5455 10.5095 20.3359L9.80948 19.5539C9.60942 19.3304 9.36164 19.1547 9.08451 19.04C8.80737 18.9252 8.50797 18.8743 8.20848 18.8909L7.15848 18.9489C6.87763 18.9644 6.59668 18.9204 6.33397 18.82C6.07125 18.7195 5.83268 18.5647 5.63384 18.3658C5.435 18.1668 5.28036 17.9282 5.18001 17.6654C5.07966 17.4027 5.03586 17.1217 5.05148 16.8409L5.10948 15.7919C5.12595 15.4925 5.07491 15.1933 4.96015 14.9164C4.84539 14.6394 4.66984 14.3918 4.44648 14.1919L3.66448 13.4919C3.45481 13.3043 3.28708 13.0746 3.17224 12.8177C3.0574 12.5609 2.99805 12.2827 2.99805 12.0014C2.99805 11.72 3.0574 11.4419 3.17224 11.185C3.28708 10.9282 3.45481 10.6985 3.66448 10.5109L4.44648 9.81087C4.66997 9.61081 4.84561 9.36304 4.96037 9.0859C5.07514 8.80877 5.1261 8.50937 5.10948 8.20987L5.05148 7.15987C5.03614 6.87911 5.08018 6.59827 5.18072 6.33567C5.28126 6.07308 5.43604 5.83464 5.63496 5.63591C5.83388 5.43717 6.07247 5.28262 6.33516 5.18233C6.59784 5.08204 6.87873 5.03827 7.15948 5.05387L8.20848 5.11187C8.50781 5.12834 8.80701 5.07731 9.08396 4.96254C9.36091 4.84778 9.60852 4.67223 9.80848 4.44887L10.5095 3.66587Z'
                  stroke='white'
                  stroke-width='1.5'
                />
                <path
                  d='M9.5 9.5H9.51V9.51H9.5V9.5ZM14.5 14.5H14.51V14.51H14.5V14.5Z'
                  stroke='white'
                  stroke-width='2.25'
                  stroke-linejoin='round'
                />
                <path
                  d='M15 9L9 15'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>

              <h3 className='font-medium text-sm sm:text-xl leading-[26px] text-[#FFFFFF]'>
                Efficiency and <br className='hidden md:inline' />
                Cost-Effectiveness
              </h3>
            </div>

            <p className='font-normal text-sm text-[#B2B2B2]'>
              The convenience of having the driver navigate traffic allows for a
              stress-free journey, allowing you to focus on the meeting at hand.
              Hiring a business-class chauffeur service can also be
              cost-effective for companies needing regular transportation for
              employees or clients.
            </p>
          </div>
        </div>
      </div>

      {!hideArrow && (
        <div>
          <Category categorys={vehicleCategories} setCarData={setCarData} />
        </div>
      )}

      {!hideArrow && (
        <div className='hidden sm:block'>
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
      )}
    </div>
  );
}

export default FleetBanner;
