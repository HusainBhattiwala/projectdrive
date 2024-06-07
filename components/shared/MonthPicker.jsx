import Input from 'components/ui/Input';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoMdClose } from 'react-icons/io';

function MonthPicker({
  selectedDateTime,
  setSelectedDateTime,
  placeholder,
  showClear,
}) {
  const outSideClickRef = useRef();
  const [showCalender, setShowCalender] = useState(false);
  // Handel date change
  const handlePickUpDateChange = (event) => {
    setShowCalender(false);
    const selectedDate = new Date(event);
    const month = selectedDate.toLocaleString('default', { month: 'long' });
    setSelectedDateTime({
      label: `${month}, ${selectedDate.getFullYear()}`,
      value: `${selectedDate.getMonth() + 1}, ${selectedDate.getFullYear()}`,
    });
  };

  useOnClickOutside(outSideClickRef, () => {
    setShowCalender(false);
  });

  return (
    <div className="relative" ref={outSideClickRef}>
      <Input
        placeholder={placeholder}
        readOnly
        className="w-full !px-6"
        value={selectedDateTime?.label || ''}
        onFocus={() => {
          setShowCalender(true);
        }}
      />

      {selectedDateTime && showClear && (
        <button
          aria-label="close"
          type="button"
          onClick={() => {
            setSelectedDateTime('');
          }}
          className="absolute top-2/4 right-2 -translate-y-2/4 text-primary"
        >
          <IoMdClose />
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          setShowCalender(true);
        }}
        className="absolute top-2/4 left-1 -translate-y-2/4"
      >
        <img src="/images/icons/calender_primary.svg" alt="calender_primary" />
      </button>
      {showCalender && (
        <Calendar
          view="year"
          showYearDropdown
          className="w-full min-w-[300px] rounded-t-md !border-0 !border-b !border-gray-300 absolute top-auto right-0 z-50 shadow-sm shadow-red-500/50 !font-manrope py-2 px-2 bg-gray-50"
          onClickMonth={(e) => {
            handlePickUpDateChange(e);
          }}
          // eslint-disable-next-line consistent-return
          tileClassName={({ date, view }) => {
            if (
              view === 'year'
              && date.getMonth()
                === Number(selectedDateTime.value.split(',')[0] - 1)
            ) {
              return 'selected-month'; // Replace 'selected-month' with your desired class name
            }
          }}
        />
      )}
    </div>
  );
}

export default MonthPicker;
