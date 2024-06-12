"use client";

import Pic from "rolnew/util/Pic";
import Button from "rolnew/ui/Button";
import Category from "./Category";
import { useEffect, useState } from "react";

// const carCategoryList = [
//   {
//     id: "carcat1",
//     category: "Business Class",
//   },
//   {
//     id: "carcat2",
//     category: "First Class",
//   },
//   {
//     id: "carcat3",
//     category: "Luxury Class",
//   },
//   {
//     id: "carcat4",
//     category: "Electric",
//   },
//   {
//     id: "carcat5",
//     category: "SUV",
//   },
//   {
//     id: "carcat6",
//     category: "MVP",
//   },
//   {
//     id: "carcat7",
//     category: "Sprinter",
//   },
// ];

const vehicleCategories = [
  {
    vehCatName: "Business V class",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Business%20V%20class_car1.png",
    vehTypeId: "7c6fc6a8-fa3c-45bc-8557-6f0c47a4f8e0",
    vehCatId: "02b65338-d62b-48de-9f6e-9f3570fa157e",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "UAE Vehicle",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/UAE%20Vehicle_car-vector.jpg",
    vehTypeId: "e72b792f-2a6a-46d1-b488-3c6b5080857f",
    vehCatId: "2584df45-5c80-4487-94b6-9b089062672d",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 1,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Paris Car13",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Paris%20Car13_mercedes-sprinter-19.png",
    vehTypeId: "1ff2214d-1a50-4513-8bfe-a187b9b73755",
    vehCatId: "312d4b60-5b9e-41aa-a803-680fdff02a31",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Veh cat 1",
    vehCatImg: null,
    vehTypeId: "73f8c4b4-8a3d-4dac-8f41-429ed35a179e",
    vehCatId: "3c0e3916-14b1-425c-853c-010ca4d02509",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Veh cat 3",
    vehCatImg: null,
    vehTypeId: "62438c9f-f29a-4a92-8a6a-7fa9f27ab09f",
    vehCatId: "404525bd-434b-4512-8be6-a31dc5f12ad1",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Paris Car12",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Paris%20Car12_roldrive-booking-background.jpg",
    vehTypeId: "14948fc5-fead-42ad-be91-ef2dd3257142",
    vehCatId: "5a1591b8-eb81-425d-b2fb-cc20cc2a1104",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 0,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "TES2 Veh",
    vehCatImg: null,
    vehTypeId: "6d70025b-896c-4fd3-b4a6-94fe7ab621cf",
    vehCatId: "6611d12c-ec48-430c-ad60-96353dae10f2",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Veh Cat 1",
    vehCatImg: null,
    vehTypeId: "30de680c-6701-46b5-ae1a-cc31ad94148a",
    vehCatId: "73211b23-c01d-42c6-9aa3-10f30f609c3b",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Deep Test Veh Cat",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Deep%20Test%20Veh%20Cat_Screenshot%205.png",
    vehTypeId: "f2e9aa39-d380-47df-9df9-340f18e353b4",
    vehCatId: "8fbe43fc-a7e8-41ef-a29d-b40e0fd4817a",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 2,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Business S Class",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/Business%20S%20Class_car1.png",
    vehTypeId: "30f1df8e-238b-4e7a-afcb-909bcc315637",
    vehCatId: "9f29f04b-34a9-45f4-b6db-59edef811963",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 4,
    luggageCount: 3,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "test veh 1",
    vehCatImg: null,
    vehTypeId: "f98dc205-8f06-43be-81ad-a8ae2bcd5552",
    vehCatId: "c0930d1f-f3f1-469c-85af-ac6f5541167d",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Business E class",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Business%20E%20class_car1.png",
    vehTypeId: "4e54863f-af85-4eb7-b89f-668a6479ad87",
    vehCatId: "d12d4da4-e10d-42a8-95ea-fd21cafc0613",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 4,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Vehicle test 1",
    vehCatImg: null,
    vehTypeId: "f9dbd553-7671-4c4a-85c5-95e452309ffb",
    vehCatId: "d32756e2-ece6-4f93-9d58-c98a1cf916bf",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 3,
    luggageCount: 2,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Veh cat 2",
    vehCatImg: null,
    vehTypeId: "5895289f-3239-4fb4-b51c-407a11dc741f",
    vehCatId: "e1bf5985-d167-4ac9-b784-16bf03b83811",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
];

function CarClass({ hideArrow }) {
  const [carData, setCarData] = useState();

  // console.log(carData);

  useEffect(() => {
    const fetchCarsDetails = async () => {
      try {
        const response = await fetch(
          "https://api-dev.roldrive.com/api/v1/vehicle-categories/allDetails"
        );

        const data = await response.json();
        setCarData(JSON.parse(data));
        console.log("data from use effect", data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarsDetails();
  }, []);

  return (
    <>
      {/* <Container className="bg-[#11202D] sm:pt-[20px] py-8 text-center">

        <Category categorys={carData} />
      </Container> */}
      {/* <Container className="bg-[#11202D] hidden sm:block sm:pt-[8px]  text-center">
          <div className='bg-[#223544] w-[750px] h-[50px] mt-[50px] rounded-xl border-0 ml-[310px] flex items-center justify-center'><ClassCategory categorys={carCategoryList} /></div>

      </Container>
      <Container className="bg-[#11202D] sm:hidden pt-[30px]  text-center">
          <div className='bg-[#223544] w-[750px] h-[50px] rounded-xl border-0 flex items-center justify-center'><ClassCategory categorys={carCategoryList} /></div>

      </Container> */}

      <div className='bg-[#11202D] pt-4 sm:pt-[10px] text-center xs:pt-16 xl:!px-[70px] lg:px-[45px] md:px-[32px] sm:px-[20px] px-4'>
        {hideArrow && (
          <Category categorys={vehicleCategories} setCarData={setCarData} />
        )}
        <div className='bg-[#11202D] xs:pt-12 sm:px-12 md:px-16 pb-6'>
          <div className='flex flex-col gap-y-16 2xl:container mx-auto pb-4'>
            <div className='flex flex-col md:flex-row xs:flex-col sm:flex-col'>
              <div className='w-full hidden sm:block'>
                <div className=' gap-[24px] w-[360px] h-[250px]'>
                  <div className=''>
                    <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
                      <h2 className='sm:text-3xl leading-9 text-left font-medium text-[#FFFFFF]'>
                        Mercedes Benz E class
                      </h2>
                      <p className='sm:text-base font-medium sm:leading-6 mt-4 text-left text-[#FFF8F3]'>
                        The Mercedes E-Class is a great option for business
                        because of its balance of luxury, performance, and
                        technology. Mercedes Benz is known for their brilliant
                        vehicles and truly stands by what they call its cars to
                        be - &apos;The best or nothing&apos;. The car has a
                        sleek, professional design and a spacious, comfortable
                        interior that suits any businessman&apos;s needs. A
                        Mercedes E Class hire is what most businessmen prefer
                        for their travel needs.
                      </p>
                      <Button className='w-[260px] h-[50px] text-xl mt-4 mb-4 mr-[100px]'>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full h-[370px] max-w-[705px] hidden md:block'>
                <div className='w-full h-full relative'>
                  <Pic
                    alt='trust'
                    className='rounded-xl w-[495px]'
                    src='/images/airports/car1.png'
                    objectFit='fit'
                  />
                </div>
              </div>
              <div className='h-[210px] w-full mt-4 sm:mt-0  md:hidden ml-4'>
                <div className='w-[350px] sm:w-[450px] h-full'>
                  <Pic
                    alt='trust'
                    className='rounded-xl'
                    src='/images/airports/car1.png'
                    objectFit='fit'
                  />
                </div>
              </div>
              <div className='max-w-full mx-auto sm:hidden'>
                <div className='max-w-full h-[298px]'>
                  <div className='min-w-[350px] max-w-[550px] mx-auto'>
                    <div className='mt-6 text-[#B2B2B2] leading-5'>
                      <h2 className='text-[20px] leading-7 text-left font-medium text-[#FFFFFF] my-6 mt-2'>
                        Mercedes Benz E class
                      </h2>
                      <p className='text-sm font-normal leading-7 text-left text-[#FFF8F3] mt-4'>
                        The Mercedes E-Class is a great option for business
                        because of its balance of luxury, performance, and
                        technology. Mercedes Benz is known for their brilliant
                        vehicles and truly stands by what they call its cars to
                        be - &apos;The best or nothing&apos;. The car has a
                        sleek, professional design and a spacious, comfortable
                        interior that suits any businessman&apos;s needs. A
                        Mercedes E Class hire is what most businessmen prefer
                        for their travel needs.
                      </p>
                      <Button className='w-[226px] h-[50px] text-xl mt-4 mb-4 mr-[200px]'>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-nowrap gap-4 w-full sm:max-w-[912px] h-[130px] sm:grid sm:grid-cols-4 lg:ml-[260px] md:ml-[130px] sm:ml-[30px] sm:mr-8 sm:gap-16 mb-6 overflow-x-auto scroll no-scroll'>
              <div className='w-[190px] h-[130px]'>
                <Pic
                  alt='trust'
                  className='rounded-xl'
                  src='/images/airports/car4.png'
                  objectFit='fit'
                />
                <p className='w-full text-center text-base font-medium leading-6 text-[#FFFFFF]'>
                  Mercedes Benz E class
                </p>
              </div>
              <div className='w-[190px] h-[130px]'>
                <Pic
                  alt='trust'
                  className='rounded-xl'
                  src='/images/airports/car4.png'
                  objectFit='fit'
                />
                <p className='w-full text-center text-base font-medium leading-6 text-[#FFFFFF]'>
                  Mercedes Benz E class
                </p>
              </div>
              <div className='w-[190px] h-[130px]'>
                <Pic
                  alt='trust'
                  className='rounded-xl'
                  src='/images/airports/car4.png'
                  objectFit='fit'
                />
                <p className='w-full text-center text-base font-medium leading-6 text-[#FFFFFF]'>
                  Mercedes Benz E class
                </p>
              </div>
              <div className='w-[190px] h-[130px]'>
                <Pic
                  alt='trust'
                  className='rounded-xl'
                  src='/images/airports/car4.png'
                  objectFit='fit'
                />
                <p className='w-full text-center text-base font-medium leading-6 text-[#FFFFFF]'>
                  Mercedes Benz E class
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarClass;
