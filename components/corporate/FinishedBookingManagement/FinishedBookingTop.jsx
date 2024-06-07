'use client';

import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import Input from 'components/ui/Input';
import Button from '../../ui/Button';
import RegionDropDown from '../BookingManagement/RegionDropDown';
import RangePicker from '../BookingManagement/RangePicker';

export default function FinishedBookingTop({
  dateRange,
  setDateRange,
  bookingId,
  setBookingId,
  userCountry,
  setUserCountry,
  exportDataToExcel,
  showExcelDownload,
  isReady,
}) {
  const [calendarFocus, setCalendarFocus] = useState(false);
  return (
    <div className="grid grid-cols-9 md:gap-x-10 lg:gap-x-15 xl:gap-x-24 gap-x-2 flex-nowrap mt-4 mb-2">
      <div className="col-span-4 relative">
        <div className="relative">
          <Input
            type="text"
            className="bg-white border border-solid border-neutral-200 text-gray-900 text-sm rounded-lg block w-full pl-2 pr-8 p-2.5"
            placeholder="Search by eg. booking ID, name, vehicle etc..."
            value={bookingId}
            onChange={(event) => {
              setBookingId(event.target.value.replace(/^\s/, ''));
            }}
            rangedivider="TO"
          />
          {!bookingId && (
            <button
              aria-label="btn"
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
              aria-label="booking id set"
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
      <div className="col-span-5">
        <div className="grid grid-cols-6 gap-x-2">
          <div className="col-span-1">
            <RegionDropDown
              userCountry={userCountry}
              setUserCountry={setUserCountry}
            />
          </div>
          <div className="col-span-3">
            <div className="relative">
              <button
                type="button"
                className="absolute top-2/4 -translate-y-2/4 left-2 z-20"
                aria-label="calendarAriaLabel"
                onClick={() => {
                  setCalendarFocus(!calendarFocus);
                }}
              >
                <img src="/images/icons/calender.svg" alt="calender" />
              </button>
              <RangePicker
                dateRange={dateRange}
                setDateRange={setDateRange}
                calendarFocus={calendarFocus}
                setCalendarFocus={setCalendarFocus}
              />
              {dateRange[0] && (
                <button
                  aria-label="close"
                  type="button"
                  className="absolute top-2/4 -translate-y-2/4 right-1 text-primary z-20"
                  onClick={() => {
                    setDateRange([]);
                  }}
                >
                  <IoMdClose />
                </button>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <Button
              className="h-[42px] w-full px-2 py-2 rounded-md capitalize border border-primary btn-primary !text-xs"
              onClick={exportDataToExcel}
              disabled={showExcelDownload.length === 0 && isReady}
            >
              <div className="flex justify-between gap-1">
                <div className="box w-3 relative">
                  <Image
                    src="/images/global/download-w.svg"
                    alt="download"
                    fill
                  />
                </div>
                Export To Excel
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
