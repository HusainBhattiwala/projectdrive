/* eslint-disable max-len */
import { FaCheck } from 'react-icons/fa';
import H3 from './typography/H3';
import P from './typography/P';

function BookRide() {
  return (
    <div className="xl:py-14 lg:py-10 py-8 xl:px-20 lg:px-10 px-6 !pb-1">
      <div className="flex items-center lg:container mx-auto rounded-lg pt-10 pb-2 bg-black sm:px-0 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-between ">
          <div className="text-black md:px-8 lg:text-center md:text-left mb-5">
            <div className="flex lg:flex-col flex-row items-center relative after:absolute lg:after:content-[''] lg:after:w-full lg:after:left-2/4 lg:after:top-5 lg:after:ml-8 lg:after:h-1 lg:after:border-b via-[#fff] after:border-[#fff] lg:after:border-1 lg:after:inline-block ">
              <div className="flex items-center justify-center border-none bg-white h-12 w-12 !rounded-full flex-none">
                <span className="text-xl font-bold text-black">1</span>
              </div>
              <div className="md:flex lg:inline-block md:flex-col ml-3 lg:ml-0 font-manrope">
                {/* <P className="rounded-full bg-primary w-8 h-8 mx-auto">1</P> */}
                <H3 className="my-3 font-bold md:leading-tight text-white md:text-lg font-manrope !text-[18px]">
                  Enter Booking Details
                </H3>
                <P className="text-white font-normal xl:px-4 font-sans">
                  Fill in the necessary details such as customer name, date of
                  pickup and location.
                </P>
              </div>
            </div>
          </div>
          <div className="text-black md:px-8 lg:text-center mb-5">
            <div className="flex lg:flex-col flex-row items-center relative after:absolute lg:after:content-[''] lg:after:w-full lg:after:left-2/4 lg:after:top-5 lg:after:ml-8 lg:after:h-1 lg:after:border-b via-[#fff] after:border-[#fff] lg:after:border-1 lg:after:inline-block ">
              <div className="flex items-center justify-center border-none text-black bg-white h-12 w-12 !rounded-full flex-none">
                <span className="text-xl font-bold text-black">2</span>
              </div>
              <div className="md:flex lg:inline-block md:flex-col ml-3 lg:ml-0">
                <H3 className="my-3 font-bold md:leading-tight leading-none font-manrope text-white md:text-lg !text-[18px]">
                  Select Vehicle
                </H3>
                <P className="text-white font-normal xl:px-4 font-sans">
                  Choose your preferred vehicle from our diverse fleet and
                  experience luxury with comfort.
                </P>
              </div>
            </div>
          </div>
          <div className="text-black md:px-8 lg:text-center mb-5">
            <div className="flex lg:flex-col flex-row items-center relative after:absolute lg:after:content-[''] lg:after:w-full lg:after:left-2/4 lg:after:top-5 lg:after:ml-8 lg:after:h-1 lg:after:border-b via-[#fff] after:border-[#fff] lg:after:border-1 lg:after:inline-block">
              <div className="flex items-center justify-center border-none text-black bg-white h-12 w-12 !rounded-full flex-none">
                <span className="text-xl font-bold text-black">3</span>
              </div>
              <div className="md:flex lg:inline-block md:flex-col ml-3 lg:ml-0">
                <H3 className="my-3 font-bold md:leading-tight leading-none text-white font-manrope md:text-lg !text-[18px]">
                  Make Payment
                </H3>
                <P className="text-white font-normal xl:px-4 font-sans">
                  Once your booking is confirmed, the payment gateway is
                  provided to you.
                </P>
              </div>
            </div>
          </div>
          <div className="text-black md:px-8 lg:text-center mb-5">
            <div className="flex lg:flex-col  items-center ">
              <div className="flex items-center justify-center h-12 w-12 font-xl !rounded-full border-none bg-[#4fee6c] flex-none">
                <span className="text-lg font-light text-[#0a5418]">
                  <FaCheck />
                </span>
              </div>
              <div className="md:flex lg:inline-block md:flex-col ml-3 lg:ml-0">
                <H3 className="my-3 font-bold md:leading-tight leading-none font-manrope text-white md:text-lg !text-[18px]">
                  Booking Confirmed
                </H3>
                <P className="text-white font-normal xl:px-4 font-sans">
                  <b className="text-primary">Voila!</b>
                  {' '}
                  <br />
                  {' '}
                  Your journey has
                  been confirmed.
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRide;
