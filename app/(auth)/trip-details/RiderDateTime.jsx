import { useRef, useState } from 'react';
import Datepicker from 'components/shared/DatePicker';
import TimePicker from 'components/shared/Timepicker';
import Input from 'components/ui/Input';
import useOnClickOutside from 'hooks/useOnClickOutside';

export default function RiderDateTime({
  riderDateTime, onChange, minDatetime, disabled = false,
}) {
  const [selectedDateTime, setselectedDateTime] = useState({
    hour: riderDateTime.hour > 9 ? riderDateTime.hour : `0${riderDateTime.hour}`,
    minute: riderDateTime.minute,
    date: riderDateTime.selectedDate,
    selectedDate: riderDateTime.selectedDate,
    dateChanged: false,
    timeChanged: false,
  });
  const [showRiderDateTime, setShowRiderDateTime] = useState(false);
  const [showTimepicker, setShowTimepicker] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);

  console.log(showTimeError);

  const setTimeChange = () => {
    setselectedDateTime((prev) => ({
      ...prev,
      timeChanged: true,
    }));
    setShowTimepicker(false);
    setShowTimeError(false);
  };

  const time = `${riderDateTime.hour}:${riderDateTime.minute}`;

  const selectedDayWithTime = riderDateTime
    ? `${riderDateTime.selectedDate.getDate()
    }/${riderDateTime.selectedDate.getMonth() + 1}/${riderDateTime.selectedDate.getFullYear()} ${time}`
    : 'Not Set';

  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => setShowRiderDateTime(false));
  return (
    <div className="" ref={outSideClickRef}>
      <div
        onClick={() => setShowRiderDateTime(true)}
      >
        <Input
          value={selectedDayWithTime}
          className="cursor-pointer"
          inputIcon="/images/trip-details/calendar.svg"
          disabled={disabled}
          readOnly // This line prevents the keyboard from opening
        />
      </div>

      {showTimepicker && (
        <TimePicker
          minDate={minDatetime?.minDate}
          selectedDateTime={selectedDateTime}
          minDatetime={minDatetime}
          compareWith={minDatetime?.minDate}
          setselectedDateTime={setselectedDateTime}
          setDateTime={setTimeChange}
          onChange={() => {
            onChange(selectedDateTime);
            setShowRiderDateTime(false);
          }}
          showSelected={selectedDateTime?.timeChanged}
        />
      )}

      {showRiderDateTime && (
        <Datepicker
          minDate={minDatetime.minDate}
          selectedDateTime={selectedDateTime}
          minDatetime={minDatetime}
          compareWith={minDatetime.minDate}
          setselectedDateTime={setselectedDateTime}
          setDateTime={(data) => console.log('data', data)}
          onChange={() => {
            onChange(selectedDateTime);
            setShowRiderDateTime(false);
          }}
        />
      )}
    </div>
  );
}
