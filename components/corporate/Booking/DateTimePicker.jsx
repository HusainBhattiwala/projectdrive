/* eslint-disable no-plusplus */
import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import P from 'components/typography/P';
import Input from 'components/ui/Input';
import 'react-calendar/dist/Calendar.css';
import useOnClickOutside from 'hooks/useOnClickOutside';

function DateTimePicker({
  setShowCalender,
  showCalender,
  selectedDateTime,
  setSelectedDateTime,
  minDatetime,
  setMinDatetime,
  formatDate,
  setMinute,
  compareWith,
  // addHours,
  date,
}) {
  const [hour, setSelectedHour] = useState(selectedDateTime.hour > 9 ? selectedDateTime.hour : `0${selectedDateTime.hour}`);
  const [minute, setSelectedMinute] = useState(selectedDateTime.minute);
  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => {
    setShowCalender(false);
  });

  useEffect(() => {
    const getHour = selectedDateTime.hour > 9 ? selectedDateTime.hour : `0${Number(selectedDateTime.hour)}`;
    setSelectedHour(getHour);
    setSelectedMinute(selectedDateTime.minute);
  }, [selectedDateTime]);

  // Handel date change
  const handlePickUpDateChange = (event) => {
    setShowCalender(false);
    const selectedDate = new Date(event);
    // const date = new Date();
    const newDate = date;
    const selectedHour = newDate.getHours();
    // Date picker
    setMinDatetime({
      minDate: newDate,
      minHour: selectedHour,
      minMinute:
        Math.round(newDate.getMinutes() / 5) * 5 === 60
          ? '00'
          : Math.round(newDate.getMinutes() / 5) * 5,
    });

    setSelectedDateTime((prev) => ({
      ...prev,
      date: newDate,
      selectedDate: formatDate(newDate),
      dateChanged: false,
    }));
    if (selectedDate.getDate() === new Date(minDatetime.minDate).getDate()) {
      setSelectedDateTime((prev) => ({
        ...prev,
        hour:
          minDatetime.minHour > 9
            ? minDatetime.minHour
            : `0${minDatetime.minHour}`,
        minute:
          minDatetime.minMinute > 9
            ? minDatetime.minMinute
            : `0${minDatetime.minMinute}`,
      }));
      setSelectedHour(selectedHour);
      setSelectedMinute(setMinute(newDate));
    }
  };

  /* Min Hour and min */

  function getDisabledMinute(i) {
    // eslint-disable-next-line max-len
    if (compareWith.getDate() === selectedDateTime.date.getDate() && parseInt(selectedDateTime.hour, 10) === parseInt(minDatetime.minHour, 10) && i < minDatetime.minMinute) {
      return true;
    }
    return false;
  }

  function getDisabledHour(i) {
    if (compareWith.getDate() === selectedDateTime.date.getDate() && i < minDatetime.minHour) {
      return true;
    }
    return false;
  }

  const renderHoursOptions = () => {
    const options = [];
    for (let i = 0; i <= 23; i++) {
      options.push(
        <option key={i} value={i.toString().padStart(2, '0')} disabled={getDisabledHour(i)} className={` text-black text-[14px] ${getDisabledHour(i) ? 'bg-[#5f5f5f45]' : ''}`}>
          {i.toString().padStart(2, '0')}
          {' hrs'}
        </option>,
      );
    }
    return options;
  };

  const renderMinutesOptions = () => {
    const options = [];
    for (let i = 0; i <= 55; i += 5) {
      options.push(
        <option key={i} value={i.toString().padStart(2, '0')} disabled={getDisabledMinute(i)} className={`text-black text-[14px] ${getDisabledMinute(i) ? 'bg-[#5f5f5f45]' : ''}`}>
          {i.toString().padStart(2, '0')}
          {' min'}
        </option>,
      );
    }
    return options;
  };
  // New time picker

  function getHourlyDate(dateSelected) {
    const selectedDate = new Date(dateSelected);
    if ((selectedDate).getDate() === new Date(minDatetime?.minDate).getDate()) {
      setSelectedDateTime({
        hour: minDatetime.minHour > 9 ? minDatetime.minHour : `0${minDatetime.minHour}`,
        minute: minDatetime.minMinute > 9 ? minDatetime.minMinute : `0${minDatetime.minMinute}`,
      });
    }
    setSelectedDateTime((prev) => ({
      ...prev,
      date: selectedDate,
      selectedDate: formatDate(selectedDate),
    }));
  }

  function selectHour(e) {
    setSelectedDateTime((prev) => ({
      ...prev,
      hour: Number(e.target.value) > 9 ? Number(e.target.value) : `${e.target.value}`,
    }));
    if (Number(e.target.value) === minDatetime?.minHour && selectedDateTime?.minute < minDatetime?.minMinute) {
      setSelectedDateTime((prev) => ({
        ...prev,
        hour: Number(e.target.value) > 9 ? Number(e.target.value) : `${e.target.value}`,
        minute: minDatetime?.minMinute,
      }));
    } else {
      setSelectedDateTime((prev) => ({
        ...prev,
        hour: Number(e.target.value) > 9 ? Number(e.target.value) : `${e.target.value}`,
      }));
    }
    setSelectedHour(e.target.value);
  }

  function selectMinute(e) {
    setSelectedDateTime((prev) => ({
      ...prev,
      minute: e.target.value,
    }));
    setSelectedMinute(e.target.value);
  }
  /* Min Hour and min */

  return (
    <div className="grid sm:grid-cols-7 grid-cols-1 py-2 sm:px-4 px-2 items-center">
      <div className="col-span-2">
        <P className="text-[#797979] !text-normal !text-sm pl-2">
          Ride Date & Time
          {' '}
          <span className="text-red-500">*</span>
        </P>
      </div>
      <div className="col-span-5" ref={outSideClickRef}>
        <div className="grid sm:grid-cols-7 grid-cols-1 gap-x-4 gap-y-2 py-2">
          <div className="col-span-3 relative">
            <Input
              placeholder="Enter pickup date."
              className="w-full !pr-6"
              value={selectedDateTime.selectedDate}
              onFocus={() => {
                setShowCalender(true);
              }}
            />
            <button
              type="button"
              onClick={() => {
                setShowCalender(true);
              }}
              className="absolute top-2/4 right-1 -translate-y-2/4"
            >

              <img
                src="/images/icons/calender_primary.svg"
                alt="calender_primary"
              />
            </button>
            {showCalender && (
              <div className="relative w-[280px] !z-50 bg-white">
                <Calendar
                  className="w-full rounded-md absolute bottom-0"
                  onChange={(e) => { handlePickUpDateChange(e); getHourlyDate(e); }}
                  minDate={minDatetime.minDate}
                  value={new Date(selectedDateTime.date)}
                  tileClassName="content"
                />
              </div>
            )}
          </div>
          <div className="col-span-4 flex justify-between gap-x-4">
            <select value={hour} onChange={selectHour} className="border border-solid border-neutral-200 text-sm rounded-lg h-[45px] text-black w-full ring-0 outline-none cursor-pointer px-2">
              {renderHoursOptions()}
            </select>
            <select value={minute} onChange={selectMinute} className="border border-solid border-neutral-200 text-sm rounded-lg h-[45px] text-black w-full ring-0 outline-none cursor-pointer px-2">
              {renderMinutesOptions()}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateTimePicker;
