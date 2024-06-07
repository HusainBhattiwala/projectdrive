/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import P from 'components/typography/P';
import Input from 'components/ui/Input';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import NewDropdown from '../../ui/NewDropdown';
import RegionDropDown from '../BookingManagement/RegionDropDown';
import RangePicker from '../BookingManagement/RangePicker';

export default function InvoiceTop({
  userCountry,
  setUserCountry,
  bookingStatusList,
  bookingStatus,
  setBookingStatus,
  selectedDateTime,
  setSelectedDateTime,
  searchText,
  setSearchText,
  invoiceMonthList,
  setDateRange,
  dateRange,
}) {
  const [calendarFocus, setCalendarFocus] = useState(false);
  return (
    <div className="grid grid-cols-10 gap-x-2 flex-nowrap mt-4 mb-2">
      <div className="col-span-3">
        <div className="relative">
          <Input
            type="text"
            className="bg-white border border-solid border-neutral-200 text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5 pr-8"
            placeholder="Search by invoice number , date...."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value.replace(/^\s/, ''));
            }}
            rangedivider="TO"
          />
          {!searchText && (
            <button
              aria-label="input button"
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
          {searchText && (
            <button
              aria-label="close"
              type="button"
              className="absolute top-2/4 -translate-y-2/4 right-2 text-primary"
              onClick={() => {
                setSearchText('');
              }}
            >
              <IoMdClose />
            </button>
          )}
        </div>
      </div>
      <div className="col-span-7">
        <div className="grid grid-cols-8 gap-x-2">
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
          <div className="col-span-1">
            <RegionDropDown
              userCountry={userCountry}
              setUserCountry={setUserCountry}
            />
          </div>
          <div className="col-span-2">
            <NewDropdown
              className="bg-white border border-solid border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none block w-auto pl-1 p-0.5"
              label={`${bookingStatus.label}`}
            >
              {bookingStatusList.map((st) => (
                <li
                  key={st.label}
                  className="flex flex-row justify-between py-2 items-center"
                  onClick={() => {
                    setBookingStatus(st);
                  }}
                >
                  <div className="py-2 px-2 flex items-start w-full">
                    <P className="text-neutral-700 text-sm font-medium tracking-tight">
                      {st.label}
                    </P>
                  </div>
                </li>
              ))}
            </NewDropdown>
          </div>
          <div className="col-span-2">
            <NewDropdown
              className="bg-white border border-solid border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none block w-auto pl-1 p-0.5"
              label={`${selectedDateTime.label}`}
              disable={!!dateRange[0]}
            >
              {invoiceMonthList.map((st) => (
                <li
                  key={st.label}
                  className="flex flex-row justify-between py-2 items-center"
                  onClick={() => {
                    setSelectedDateTime(st);
                  }}
                >
                  <div className="py-2 px-2 flex items-start w-full">
                    <P className="text-neutral-700 text-sm font-medium tracking-tight">
                      {st.label}
                    </P>
                  </div>
                </li>
              ))}
            </NewDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
