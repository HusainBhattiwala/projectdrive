import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';

function Datepicker({
  setselectedDateTime,
  selectedDateTime,
  minDate,
  minDatetime,
  setDateTime,
  onChange,
}) {
  // const hour = useRef('');
  function getHourlyDate(date) {
    const selectedDate = new Date(date);
    if (selectedDate.getDate() === new Date(minDate).getDate()) {
      setselectedDateTime({
        hour:
          minDatetime.minHour > 9
            ? minDatetime.minHour
            : `0${minDatetime.minHour}`,
        minute:
          minDatetime.minMinute > 9
            ? minDatetime.minMinute
            : `0${minDatetime.minMinute}`,
        daytime: minDatetime.minDaytime,
      });
    }
    setselectedDateTime((prev) => ({
      ...prev,
      date: selectedDate,
      selectedDate,
    }));
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 rounded-t-xl sm:absolute z-[99999] !bg-[#223544] sm:-top-56 sm:left-auto sm:right-auto sm:rounded-md w-full min-w-[300px] md:max-w-[400px]">
      <div className="relative shadow-lg shadow-[#223544D9] !font-manrope">
        <Calendar
          className="w-full rounded-t-md !border-0 !border-b !border-[#223544D9]"
          onChange={getHourlyDate}
          minDate={minDate}
          value={new Date(selectedDateTime.selectedDate)}
          tileClassName="content"
          onClickDay={() => {
            setDateTime();
            onChange();
          }}
        />
      </div>
    </div>
  );
}

export default Datepicker;
