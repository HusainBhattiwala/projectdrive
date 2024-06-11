// "use client";

import Pic from "rolnew/util/Pic";
import Button from "rolnew/ui/Button";
import Category from "./Category";
// import { useEffect, useState } from "react";

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

function CarClass() {
  // const [carData, setCarData] = useState();

  // useEffect(() => {
  //   const fetchCarsDetails = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api-dev.roldrive.com/api/v1/vehicle-categories/allDetails"
  //       );

  //       const data = await response.json();
  //       setCarData(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching car details:", error);
  //     }
  //   };

  //   fetchCarsDetails();
  // }, []);

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
        <Category categorys={carCategoryList} />
        <div className='bg-[#11202D] xs:pt-12 sm:px-12 md:px-16 pb-6'>
          <div className='flex flex-col gap-y-16 2xl:container mx-auto pb-4'>
            <div className='flex md:flex-row xs:flex-col sm:flex-col'>
              <div className='w-full hidden sm:block'>
                <div className=' gap-[24px] w-[360px] h-[298px]'>
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
              <div className='w-full mx-auto sm:hidden'>
                <div className='w-full h-[298px]'>
                  <div className='min-w-[350px] w-[550px] mx-auto'>
                    <div className='mt-6 text-[#B2B2B2] leading-5 mx-2'>
                      <h2 className='text-[20px] leading-7 text-center font-medium text-[#FFFFFF] my-6 mt-2'>
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
                      <Button className='w-full h-[50px] text-xl mt-4 mb-4 mr-[100px]'>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden max-w-[912px] h-[130px] sm:grid sm:grid-cols-4 lg:ml-[260px] md:ml-[130px] sm:ml-[30px] sm:mr-8 gap-16 mb-6'>
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
