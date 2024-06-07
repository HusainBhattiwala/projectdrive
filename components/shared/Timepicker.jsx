/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';

function TimePicker({
  setselectedDateTime,
  selectedDateTime,
  minDatetime,
  setDateTime,
  compareWith,
  onChange = () => {},
  showSelected = false,
}) {
  // New time picker
  const [hour, setSelectedHour] = useState(selectedDateTime.hour > 9 ? selectedDateTime.hour : `0${selectedDateTime.hour}`);
  const [minute, setSelectedMinute] = useState(selectedDateTime.minute);
  const [hourSelected, setHourSelected] = useState(false);
  const [minuteSelected, setMinuteSelected] = useState(false);

  function setHour(value) {
    console.log(value);
    setselectedDateTime((prev) => ({
      ...prev,
      hour: value,
    }));
    setSelectedHour(value);
    setHourSelected(true);
  }

  function setMinute(value) {
    setselectedDateTime((prev) => ({
      ...prev,
      minute: value,
    }));
    setSelectedMinute(value);
    setDateTime();
    onChange();
    setMinuteSelected(true);
  }

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
    for (let i = 0; i <= 23; i += 1) {
      options.push(
        <li key={i} onClick={() => { setHour(i.toString().padStart(2, '0')); }} disabled={getDisabledHour(i)} className={`flex justify-between items-center pl-4 cursor-pointer text-[#B2B2B2] text-[16px] py-2 hover:bg-[#0e1c27d9] ${getDisabledHour(i) ? 'hidden' : ''}`}>
          {i.toString().padStart(2, '0')}
          {
            Number(hour) === Number(i) && (showSelected || hourSelected) && <TiTick />
          }
        </li>,
      );
    }
    return options;
  };

  const renderMinutesOptions = () => {
    const options = [];
    for (let i = 0; i <= 55; i += 5) {
      options.push(
        <li key={i} onClick={() => { setMinute(i.toString().padStart(2, '0')); }} disabled={getDisabledMinute(i)} className={`flex justify-between items-center cursor-pointer px-2 text-[#B2B2B2] text-[16px] py-2 hover:bg-[#0e1c27d9] ${getDisabledMinute(i) ? 'hidden' : ''}`}>
          {i.toString().padStart(2, '0')}
          {' min'}
          {
            Number(minute) === Number(i) && (showSelected || minuteSelected) && <TiTick />
          }
        </li>,
      );
    }
    return options;
  };

  return (
    <div className="bottom-auto left-0 right-0 rounded-t-xl absolute z-50 sm:left-auto sm:right-auto sm:rounded-md w-full max-w-[400px] !bg-[#223544D9] max-h-[200px] overflow-auto">
      <div className="relative shadow-lg shadow-[#223544D9] !font-manrope">
        <div className="flex justify-center !bg-[#223544D9]">
          <ul value={hour} className="bg-[#223544D9] text-[#B2B2B2] flex-grow max-h-[200px] overflow-auto">
            {renderHoursOptions()}
          </ul>
          <ul value={minute} className="bg-[#223544D9] text-[#B2B2B2] w-7/12 max-h-[200px] overflow-auto">
            {renderMinutesOptions()}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default TimePicker;
