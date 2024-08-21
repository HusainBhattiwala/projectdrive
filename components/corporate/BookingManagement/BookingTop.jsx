import { useState } from 'react';
// import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import RegionDropDown from './RegionDropDown';
import RangePicker from './RangePicker';

export default function BookingTop({
  dateRange,
  setDateRange,
  bookingId,
  setBookingId,
  userCountry,
  setUserCountry,
  activeTab,
  setActiveTab,
  setShowNewBooking,
}) {
  const [calendarFocus, setCalendarFocus] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="basis-[28%] mt-auto">
        <div className="tabs flex-nowrap">
          <div
            className={`tab leading-5 rounded-t-md font-semibold w-1/2 !text-xs px-2 ${
              activeTab === 0
                ? 'tab-active !bg-primary text-white'
                : 'text-[#797979] hover:text-gray-600 bg-white'
            } !h-12`}
            onClick={() => setActiveTab(0)}
          >
            All Bookings
          </div>
          <div
            className={`tab leading-5 rounded-t-md font-semibold !text-xs w-1/2 rounded-bl-none px-2 ${
              activeTab === 1
                ? 'tab-active !bg-primary text-white'
                : 'text-[#797979] hover:text-gray-600 bg-white'
            } !h-12`}
            onClick={() => setActiveTab(1)}
          >
            Today’s Bookings
          </div>
        </div>
      </div>
      <div className="basis-[72%] pl-5 pb-2">
        <div className="grid grid-cols-16 gap-x-2">
          <div className="col-span-5 relative">
            <div className="relative">
              <Input
                type="text"
                className="bg-white border border-solid border-neutral-200 !text-gray-900 text-sm rounded-lg block w-full pl-2 pr-8 p-2.5"
                placeholder="Search by eg. booking ID, name, vehicle etc..."
                value={bookingId}
                onChange={(event) => {
                  setBookingId(event.target.value.replace(/^\s/, ''));
                }}
                rangedivider="TO"
              />
              {!bookingId && (
                <button
                  aria-label="icon"
                  type="button"
                  className="absolute top-2/4 -translate-y-2/4 right-2 text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              )}
              {bookingId && (
                <button
                  aria-label="set booking id"
                  type="button"
                  className="absolute top-2/4 -translate-y-2/4 right-2 text-primary"
                  onClick={() => {
                    setBookingId('');
                  }}
                >
                  <IoMdClose />
                </button>
              )}
            </div>
          </div>
          <div className="col-span-5 relative">
            <div className="relative">
              <RangePicker
                dateRange={dateRange}
                setDateRange={setDateRange}
                calendarFocus={calendarFocus}
                setCalendarFocus={setCalendarFocus}
              />
            </div>
          </div>
          <div className="col-span-2">
            <RegionDropDown
              userCountry={userCountry}
              setUserCountry={setUserCountry}
            />
          </div>
          <div className="col-span-4">
            {/* <Link type="button" href="/corporate/booking/add-new-booking" className="h-[42px] w-full !text-white px-1 py-2 rounded-md capitalize border border-primary btn-primary hover:bg-primary bg-opacity-90 hover:bg-opacity-100 !text-[12px] flex items-center justify-center text-center font-semibold text-sm">
              + Add New Booking
            </Link> */}
            <Button
              type="button"
              onClick={() => {
                setShowNewBooking(true);
              }}
              className="h-[42px] w-full !text-white px-1 py-2 rounded-md capitalize border border-primary btn-primary hover:bg-primary bg-opacity-90 hover:bg-opacity-100 !text-[12px] flex items-center justify-center text-center font-semibold text-sm"
            >
              + Add New Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
