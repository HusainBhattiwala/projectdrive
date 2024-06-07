import Image from 'next/image';
import H1 from './typography/H1';
import H4 from './typography/H4';
import P from './typography/P';
import { Pic } from './ui/Pic';

function CarsCardWithUserDetails({
  fleetDetails,
  userDetails = null,
  showBooker,
  showFlight,
}) {
  const src = fleetDetails.vehicle_imge_url
    ? fleetDetails.vehicle_imge_url
    : '/images/cars/car5.png';

  return (
    <div
      className="w-full h-full rounded-md pt-4 sm:pb-10 pb-8 border  px-6 mb-8 cursor-pointer min-h-[289px] bg-white"
    >
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className=" col-span-1 border-b md:border-b-0 md:border-r border-r-0 relative sm:px-6 px-2">
          <div className="pb-2 border-b w-full text-center mb-6">
            <H1 className="!text-[#535353] font-bold !text-[24px]">
              Additional Details
            </H1>
          </div>
          <div className="grid grid-cols-2">
            <div className=" col-span-1">
              <H4 className="!text-[14px] text-black font-bold !leading-6 flex-1 text-left">
                PASSENGER
                {' '}
                <br />
                {' '}
                DETAILS
              </H4>
            </div>
            <div className="col-span-1">
              <div className="text-left">
                <P className="pb-1 break-words">
                  {userDetails.fname}
                  {' '}
                  {userDetails.lname}
                </P>
                <P className="pb-1 break-words">
                  {userDetails.mobileno}
                </P>
                <P className="break-words">
                  {userDetails.email}
                </P>
              </div>
            </div>
          </div>
          {
            showBooker && (
              <div className="grid grid-cols-2 py-4">
                <div className=" col-span-1">
                  <H4 className="!text-[14px] text-black font-bold !leading-6 flex-1 text-left uppercase">
                    Booker
                    {' '}
                    <br />
                    {' '}
                    DETAILS
                  </H4>
                </div>
                <div className="col-span-1">
                  <div className="text-left">
                    <P className="pb-1 break-words">
                      {userDetails.bookerfname}
                      {' '}
                      {userDetails.bookerlname}
                    </P>
                    <P className="pb-1 break-words">
                      {userDetails.bookermobileno}
                    </P>
                    <P className="break-words">
                      {userDetails.bookeremail}
                    </P>
                  </div>
                </div>
              </div>
            )
          }
          {
            showFlight && (
              <>
                <div className="grid grid-cols-2 py-4">
                  <div className=" col-span-1">
                    <H4 className="!text-[14px] text-black font-bold !leading-6 flex-1 text-left">
                      FLIGHT NO.
                    </H4>
                  </div>
                  <div className="col-span-1">
                    <div className="text-left">
                      <P className="pb-1 break-words">
                        {userDetails.flightdetails}
                      </P>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 py-4">
                  <div className=" col-span-1">
                    <H4 className="!text-[14px] text-black font-bold !leading-6 flex-1 text-left">
                      NAME BOARD.
                    </H4>
                  </div>
                  <div className="col-span-1 tooltip tooltip-primary cursor-pointer" data-tip={userDetails.boarddetails}>
                    <div className="text-left">
                      <P className="pb-1 break-words truncate ...">
                        {userDetails.boarddetails}
                      </P>
                    </div>
                  </div>
                </div>

              </>
            )
          }

          <div className="grid grid-cols-2 py-4">
            <div className=" col-span-1">
              <H4 className="!text-[14px] text-black font-bold !leading-6 flex-1 text-left">
                DRIVER NOTES
              </H4>
            </div>
            <div
              className="col-span-1 tooltip tooltip-primary cursor-pointer"
              data-tip={userDetails.drivernote}
            >
              <div>
                <P className="pb-1 truncate ...">
                  {userDetails.drivernote}
                </P>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative sm:px-6 px-2">
          <div className="pt-4 sm:pt-0 md:pb-2 pb-4 border-b w-full text-center mb-0">
            <H1 className="!text-[#535353] font-bold !text-[24px]">
              {fleetDetails.vehicle_cat_name}
            </H1>
          </div>
          <div className="mx-auto relative">
            <Image
              src={src}
              className=" object-cover mx-auto"
              height={100}
              width={250}
              alt={fleetDetails.vehicle_cat_name}
            />
          </div>

          <div className="md:text-right text-center pb-4 md:mt-0">
            <H4 className="text-black font-semibold sm:!text-[32px] !text-[20px]">
              {fleetDetails.tariff}
              {' '}
              GBP
            </H4>
          </div>
          <div className="w-full max-w-[320px] mx-auto">
            <P className="text-left !text-[#181A1F] !font-[14px] break-words">{fleetDetails.vehicle_cat_desc}</P>
            <div className="flex mt-3 mb-1 justify-start items-center">
              <div className="w-3 h-3">
                <Pic
                  src="/images/icons/green-tick.png"
                  className="object-contain"
                  alt="green-tick"
                />
              </div>
              <P className="text-[#1B9353] font-semibold pl-2 text-left">
                FREE Cancellation Upto 24 hours
              </P>
            </div>

            <div className="flex mb-6 justify-start items-center">
              <div className="w-3 h-3">
                <Pic src="/images/icons/black-tick.png" alt="black-tick" />
              </div>
              <P className="pl-2 font-bold text-left text-black">
                No hidden costs
              </P>
            </div>

            <div className="flex  mt-6 justify-start">
              <div className="flex items-end">
                <div className="w-6 h-5">
                  <Pic src="/images/icons/users.png" alt="users" />
                </div>
                <P className="pl-1 font-semibold text-black">
                  max.
                  {' '}
                  {fleetDetails.adult_seat_count}
                </P>
              </div>

              <div className="flex items-end pl-4">
                <div className="w-4 h-5">
                  <Pic src="/images/icons/bags.png" alt="users" />
                </div>
                <P className="pl-1 font-semibold text-black">
                  max.
                  {' '}
                  {fleetDetails.luggage_count}
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsCardWithUserDetails;
