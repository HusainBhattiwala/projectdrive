'use client';

import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import dynamic from 'next/dynamic';
import 'react-calendar/dist/Calendar.css';
import { IoMdClose } from 'react-icons/io';

const DateRangePicker = dynamic(
  () => import('@wojtekmaj/react-daterange-picker'),
  { ssr: false },
);

function RangePicker({
  dateRange,
  setDateRange,
  calendarFocus,
  setCalendarFocus,
}) {
  return (
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
      {!dateRange[0] && (
        <input
          className="absolute top-2/4 -translate-y-2/4 z-20 left-7 right-8 h-[90%] w-[80%] !text-[13px]"
          placeholder="Form - to date"
          onClick={() => {
            setCalendarFocus(!calendarFocus);
          }}
          readOnly
        />
      )}
      <DateRangePicker
        onChange={setDateRange}
        value={dateRange}
        className="bg-white border border-solid border-neutral-200 !text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 p-2.5 z-10 !text-[13px]"
        calendarIcon={null}
        format="dd-MM-yy"
        rangeDivider="-"
        dayPlaceholder=""
        monthPlaceholder=""
        yearPlaceholder=""
        clearIcon={null}
        isOpen={calendarFocus}
        onCalendarClose={() => {
          setCalendarFocus(false);
        }}
      />
      {dateRange[0] && (
        <button
          aria-label="date set"
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
  );
}

export default RangePicker;
