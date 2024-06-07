import React, { useContext } from 'react';
import P from 'components/typography/P';
import formatDateTime from 'components/utils/formatDateTime';
import { UtilityContext } from 'context/UtilityContext';
import Image from 'next/image';
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from 'react-icons/md';

function BookingDetails({ tripDetails }) {
  const { renderWithNewlines } = useContext(UtilityContext);
  return (
    <div className="lg:col-span-3 col-span-5 -mt-3">
      <div className="bg-[#FFFFFF] px-6 py-3 mt-5 rounded-md">
        <P className="font-semibold py-3 text-[#000] text-[15px] text-left"> Employee/Passenger: </P>
        <div className="flex flex-col sm:flex-row justify-start gap-x-3 sm:gap-y-0 gap-y-3">
          <div className="flex gap-x-2 justify-start items-center sm:border-r border-[#ddd] pr-4">
            <img src="/images/global/user_primary.svg" alt="user_primary" />
            <P className="text-sm font-medium">
              {tripDetails?.passenger_fname}
              {' '}
              {tripDetails?.passenger_lname}
            </P>
          </div>
          <div className="flex gap-x-2 justify-start items-center">
            <img src="/images/global/mobile_primary.svg" alt="mobile_primary" />
            <P className="text-sm font-medium">
              {
                    tripDetails?.passenger_mobile ? (
                      tripDetails?.passenger_mobile
                    )
                      : <>NA</>

                }
            </P>
          </div>
          <div className="flex gap-x-2 justify-start items-center sm:border-l border-[#ddd] sm:pl-4">
            <img src="/images/global/email_primary.svg" alt="email_primary" />
            <P className="text-sm font-medium">
              {tripDetails?.passenger_email}
            </P>
          </div>
        </div>
      </div>
      {/* Location details */}
      <div className="bg-[#FFFFFF] px-6 py-6 mt-5 mb-5">
        <div className="grid sm:grid-cols-4 grid-cols-5 gap-y-4">
          <div className="sm:col-span-1 col-span-2">
            <div className="flex gap-x-2 items-center">
              <img src="/images/global/arrow_primary.svg" alt="arrow_primary" />
              <P className="!text-[#797979] text-sm">Category:</P>
            </div>
          </div>
          <div className="col-span-3">
            <P className="!text-[#282828]">
              {tripDetails?.booking_type}
            </P>
          </div>
          <div className="sm:col-span-1 col-span-2">
            <div className="flex gap-x-2 items-center">
              <img src="/images/global/calendar_primary.svg" alt="calendar_primary.svg" />
              <P className="!text-[#797979] text-sm">Date &amp; Time:</P>
            </div>
          </div>
          <div className="col-span-3">
            <P className="!text-[#282828]">
              {formatDateTime(tripDetails?.travel_date, 'DD MMM YYYY HH:mm')}
            </P>
          </div>
          <div className="sm:col-span-1 col-span-2">
            <div className="flex gap-x-2 items-center">
              <img src="/images/global/location_outline_primary.svg" alt="location_outline_primary" />
              <p className="!text-[#797979] text-sm">Pickup:</p>
            </div>
          </div>
          <div className="col-span-3">
            <P className="!text-[#282828]">
              {tripDetails?.pickup_location}
            </P>
            {
                tripDetails?.passenger_flight_no
              && (
              <div className="flex items-center pt-2 gap-x-1 pl-5">
                <MdOutlineFlightLand className="h-6 w-6" />
                <P className="leading-[14px] w-full text-left !text-xs  text-neutral-700 font-semibold -mt-1">{tripDetails?.passenger_flight_no}</P>
              </div>
              )
            }
          </div>
          {
            tripDetails.booking_via.length > 0 && tripDetails.booking_via.map((via, index) => (
              <>
                <div className="sm:col-span-1 col-span-2">
                  <div className="flex gap-x-2 items-center">
                    <div className="relative">
                      <img src="/images/global/ring_primary.svg" alt="location_outline_primary" className="w-[16px]" />
                      <span className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-primary text-[10px] font-semibold">1</span>
                    </div>
                    <P className="!text-[#797979] text-sm">
                      {' '}
                      Via Point
                      {' '}
                      {index + 1}
                      {' '}
                      :
                      {' '}
                    </P>
                  </div>
                </div>
                <div className="col-span-3 ">
                  <p className="!text-[#282828]">{via?.address}</p>
                </div>
              </>
            ))
          }

          {
            tripDetails?.drop_location && (
              <>
                <div className="sm:col-span-1 col-span-2">
                  <div className="flex gap-x-2 items-center">
                    <img src="/images/global/destination_primary.svg" alt="destination_primary" />
                    <p className="!text-[#797979] text-sm">Drop-off:</p>
                  </div>
                </div>
                <div className="col-span-3">
                  <P className="!text-[#282828]">
                    {tripDetails?.drop_location}
                  </P>
                </div>
                {
                  tripDetails?.passenger_drop_flight_no
                  && (
                  <div className="flex items-center pt-2 gap-x-1 pl-5">
                    <MdOutlineFlightTakeoff className="h-6 w-6" />
                    <P className="leading-[14px] w-full text-left !text-xs  text-neutral-700 font-semibold -mt-1">{tripDetails?.passenger_flight_no}</P>
                  </div>
                  )
                }
              </>
            )
          }
          <div className="sm:col-span-1 col-span-2">
            <div className="flex gap-x-1 items-center">
              <img src="/images/global/vehicle_primary.svg" alt="destination_primary" className="w-[16px]" />
              <P className="!text-[#797979] text-sm">Vehicle :</P>
            </div>
          </div>
          <div className="col-span-3"><P className="!text-[#282828]">{tripDetails?.preferred_veh_cat_desc || 'Not assigned yet'}</P></div>
          <div className="col-span-3"><P className="!text-[#797979] text-sm"> Additional Information: </P></div>
          <div className="col-span-4 -mt-6 flex sm:flex-row flex-col items-start">
            <div className="flex flex-wrap py-4 w-[250px] justify-between items-center">
              <div className="w-1/2 flex items-center justify-start gap-x-1 text-[13px] font-medium">
                <img src="/images/global/user_primary.svg" alt="user_primary" className="w-[14px] h-[14px]" />
                <P>
                  {tripDetails?.passenger_adult_cnt}
                  {' '}
                  Adults
                </P>
              </div>
              <div className="w-1/2 flex gap-x-1 text-[13px] font-medium items-center justify-start">
                <img src="/images/global/luggage_primary.svg" alt="luggage_primary" className="w-[14px] h-[14px]" />
                <P>
                  {tripDetails?.passenger_luggage_count}
                  {' '}
                  Luggage
                </P>
              </div>
              <div className="w-full flex gap-x-1 text-[13px] font-medium items-center justify-start mt-1 pt-1 border-t border-[#ddd]">
                <img src="/images/global/child_seat_primary.svg" alt="child_seat_primary" className="w-[17px] h-[17px]" />
                <P className="rotate-45">+</P>
                <P>
                  {Number(tripDetails?.passenger_child_cnt) + Number(tripDetails?.passenger_infant_cnt)}
                  {' '}
                  Child seat requested
                  {' '}
                </P>
              </div>
            </div>
            <div className="sm:ml-10 sm:-mt-3">
              <P className="!text-[#797979] text-sm">Cost Center:</P>
              <div className="flex items-center gap-x-2">
                <div className="relative w-4 h-4">
                  <Image fill src="/images/global/cost_center_primary.svg" alt="cost_center_primary" />
                </div>
                <P className="!text-[#282828]">{tripDetails?.cost_center || 'Not specified'}</P>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location details */}
      {/* Driver details */}
      {
          tripDetails?.driver_fname ? (
            <div className="bg-[#FFFFFF] px-6 py-6 mt-5 ng-star-inserted">
              <div className="flex flex-col sm:flex-row justify-start gap-x-3 sm:gap-y-0 gap-y-3 mt-2">
                <div className="flex gap-x-2 justify-start items-center">
                  <img src="/images/global/driver_primary.svg" alt="driver_primary" />
                  <P className="text-sm font-medium text-[#797979] min-w-[60px]">Driver:</P>
                </div>
                <div className="flex gap-x-2 justify-start items-center">
                  <img src="/images/global/user_primary.svg" alt="user_primary" />
                  <P className="text-sm font-medium">
                    {tripDetails?.driver_fname}
                    {' '}
                    {tripDetails?.driver_lname}
                  </P>
                </div>
                <div className="flex gap-x-2 justify-start items-center sm:border-l border-[#ddd] sm:pl-4">
                  <img src="/images/global/mobile_primary.svg" alt="mobile_primary" />
                  <P className="text-sm font-medium">
                    {tripDetails?.driver_mobile}
                  </P>
                </div>
              </div>
            </div>
          )
            : (
              <div className="bg-[#FFFFFF] px-6 py-6 mt-5 ng-star-inserted">
                <div className="flex flex-col sm:flex-row justify-start gap-x-3 sm:gap-y-0 gap-y-3 mt-2">
                  <div className="flex gap-x-2 justify-start items-center">
                    <img src="/images/global/driver_primary.svg" alt="driver_primary" />
                    <P className="text-sm font-medium text-[#797979] min-w-[60px]">Driver:</P>
                  </div>
                  <div className="flex gap-x-2 justify-start items-center">
                    <P className="text-sm font-medium">
                      Not assigned yet
                    </P>
                  </div>
                </div>
              </div>
            )
        }
      {/* Driver details */}
      {/* Driver note */}
      <div className="bg-[#FFFFFF] px-4 pt-2 pb-1 mt-5">
        <div className="grid sm:grid-cols-4 grid-cols-1 py-3">
          <div className="col-span-1">
            <P className="flex font-medium gap-x-2 rounded-t-lg text-[#797979] text-left">
              <img src="/images/global/note_primary.svg" alt="note_primary" />
              {' '}
              Driver Notes:
            </P>
          </div>
          <div className="col-span-3">
            {
              renderWithNewlines(tripDetails?.driver_notes || '')
            }
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] px-4 pt-2 pb-1 mt-5">
        <div className="grid sm:grid-cols-4 grid-cols-1 items-start py-3">
          <div className="col-span-1">
            <P className="flex font-medium gap-x-2 rounded-t-lg text-[#797979] text-left">
              <img src="/images/global/name_board_primary.svg" alt="name_board_primary" />
              {' '}
              Name Board:
            </P>
          </div>
          <div className="col-span-3">
            {tripDetails?.passenger_board_name}
          </div>
        </div>
      </div>
      {/* Driver note */}

    </div>
  );
}

export default BookingDetails;
