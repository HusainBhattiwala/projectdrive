import React from 'react';
import Pic from 'rolnew/util/Pic';
import Container from 'rolnew/comp/Container';
import Title from './Title';

function AirportBookingFlow({ pageData }) {
  return (
    <div className='w-full bg-[#11202D] sm:px-[30px] sm:pt-[60px]'>
      <Container className='bg-[#081017] sm:py-[50px] py-8 mx-auto'>
        <div className='md:flex gap-10 tex-left'>
          <img
            src='/rolnew/airports/plane.jpg'
            alt='plane'
            className='rounded-xl'
          />

          <div className='pt-[45px] space-y-2'>
            <h4 className='text-[#B2B2B2] font-medium text-lg'>About</h4>
            <h2 className='text-[#B2B2B2] font-medium text-3xl'>
              {pageData?.aboutData?.title}
            </h2>
            <p className='text-[#B2B2B2]'>{pageData?.aboutData?.description}</p>
          </div>
        </div>
        <div className='border-b mt-10 sm:mt-[100px] border-[#3C3C3C]'></div>
      </Container>

      <Container className='bg-[#081017] sm:pb-[100px] pb-8 text-center mx-auto'>
        <Title
          subTile='How it Works'
          mainTitle='Book Your Chauffeur Experience in Three Simple Steps'
        />
        <div className='grid lg:grid-cols-5 sm:grid-cols-11 grid-cols-1 sm:justify-center sm:items-center pt-10 gap-y-4'>
          <div className='lg:col-span-1 sm:col-span-3 col-span-1 flex sm:flex-col flex-row sm:justify-center items-center sm:gap-x-0 gap-x-2'>
            <div className='bg-[#11202D] sm:w-20 sm:h-20 w-14 h-14 rounded-lg flex justify-center items-center flex-none'>
              <div className='sm:w-6 sm:h-5 w-4 h-4 mx-auto'>
                <Pic
                  src='/rolnew/global/bx-detail.svg'
                  alt='bx-detail'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='flex flex-col sm:items-center items-start sm:pt-4 sm:sm:gap-y-1'>
              <h4 className='text-lg font-medium text-[#B2B2B2]'>
                Enter Trip Details
              </h4>
              <p className='font-normal text-[#B2B2B2] text-xs sm:text-center text-left'>
                Enter your destination, select your date and time, and explore
                our fleet
              </p>
            </div>
          </div>

          <div className='lg:col-span-1 col-span-1 hidden sm:block'>
            <div className='lg:w-full sm:w-[170%] w-full sm:-ml-5 lg:ml-0 ml-0 h-[15px]'>
              <Pic
                src='/rolnew/global/booking-flow-arrow.svg'
                alt='booking-flow-arrow'
                objectFit='fit'
              />
            </div>
          </div>

          <div className='lg:col-span-1 sm:col-span-3 col-span-1 flex sm:flex-col flex-row sm:justify-center items-center sm:gap-x-0 gap-x-2'>
            <div className='bg-[#11202D] sm:w-20 sm:h-20 w-14 h-14 rounded-lg flex justify-center items-center flex-none'>
              <div className='sm:w-6 sm:h-5 w-4 h-4 mx-auto'>
                <Pic src='/rolnew/global/car.svg' alt='car' objectFit='cover' />
              </div>
            </div>
            <div className='flex flex-col sm:items-center items-start sm:pt-4 sm:gap-y-1'>
              <h4 className='text-lg font-medium text-[#B2B2B2]'>
                Vehicle Of Choice
              </h4>
              <p className='font-normal text-[#B2B2B2] text-xs sm:text-center text-left'>
                Choose from our extensive fleet for a vehicle that suits you
                best
              </p>
            </div>
          </div>

          <div className='lg:col-span-1 col-span-1 hidden sm:block'>
            <div className='lg:w-full sm:w-[170%] w-full sm:-ml-5 lg:ml-0 ml-0 h-[15px]'>
              <Pic
                src='/rolnew/global/booking-flow-arrow.svg'
                alt='booking-flow-arrow'
                objectFit='fit'
              />
            </div>
          </div>

          <div className='lg:col-span-1 sm:col-span-3 col-span-1 flex sm:flex-col flex-row sm:justify-center items-center sm:gap-x-0 gap-x-2'>
            <div className='bg-[#11202D] sm:w-20 sm:h-20 w-14 h-14 rounded-lg flex justify-center items-center flex-none'>
              <div className='sm:w-6 sm:h-5 w-4 h-4 mx-auto'>
                <Pic
                  src='/rolnew/global/check-circle.svg'
                  alt='check-circle'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='flex flex-col sm:items-center items-start sm:pt-4 sm:gap-y-1'>
              <h4 className='text-lg font-medium text-[#B2B2B2]'>
                Confirm Your Ride
              </h4>
              <p className='font-normal text-[#B2B2B2] text-xs sm:text-center text-left'>
                The final stage to your booking process where you confirm the
                ride.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AirportBookingFlow;
