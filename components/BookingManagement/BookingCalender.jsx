// 'use client';

// import 'react-calendar/dist/Calendar.css';
// import { Calendar } from 'react-calendar';
// import { useRef, useState } from 'react';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import useOnClickOutside from 'hooks/useOnClickOutside';
// import { Pic } from '../ui/Pic';
// import P from '../typography/P';

// function BookingCalender({ getSearchDataUsingDate, right }) {
//   const [showCalender, setShowCalender] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const datePicker = useRef();

//   async function setDate(e) {
//     setSelectedDate(e);
//     getSearchDataUsingDate(e);
//     setShowCalender(false);
//   }

//   // const nthNumber = (number) => {
//   //   if (number > 3 && number < 21) return 'th';
//   //   switch (number % 10) {
//   //     case 1:
//   //       return 'st';
//   //     case 2:
//   //       return 'nd';
//   //     case 3:
//   //       return 'rd';
//   //     default:
//   //       return 'th';
//   //   }
//   // };

//   const getMonthName = (date) => new Date(date).toLocaleString('en-us', {
//     month: 'short',
//   });
//   const goBackDate = () => {
//     const date = new Date(selectedDate);
//     const prevDate = new Date(date.setDate(date.getDate() - 1));
//     setSelectedDate(prevDate);
//     getSearchDataUsingDate(new Date(prevDate));
//   };

//   const goNextDate = () => {
//     const date = new Date(selectedDate);
//     const nextDay = new Date(date.setDate(date.getDate() + 1));
//     setSelectedDate(nextDay);
//     getSearchDataUsingDate(new Date(nextDay));
//   };

//   useOnClickOutside(datePicker, () => setShowCalender(false));
//   return (
//     <div className="flex items-center md:border-r border-[#BDBDBD] sm:pr-4 md:px-2 px-1 sm:border-0 border h-[40px] rounded-md sm:rounded-none sm:bg-transparent bg-white justify-center sm:min-w-[120px] text-gray-700">
//       <div className="relative sm:mr-3 mr-1.5">
//         <div className="sm:hidden block">
//           {
//           !selectedDate
//           && (
//           <div className="sm:w-[28px] sm:h-[31px] w-[24px] h-[28px]">
//             <Pic
//               src="/images/icons/calender-primary.png"
//               alt="calender-primary"
//               className="object-contain w-full h-full cursor-pointer"
//               onClick={() => {
//                 setShowCalender(!showCalender);
//               }}
//             />
//           </div>
//           )
//         }
//         </div>

//         <div className="hidden sm:block">
//           <div className="sm:w-[28px] sm:h-[31px] w-[24px] h-[28px]">
//             <Pic
//               src="/images/icons/calender-primary.png"
//               alt="calender-primary"
//               className="object-contain w-full h-full cursor-pointer"
//               onClick={() => {
//                 setShowCalender(!showCalender);
//               }}
//             />
//           </div>
//         </div>

//         {showCalender && (
//           <div
//             className={`sm:absolute fixed sm:top-0 z-30 bg-white border lg:-left-16 ${
//               right ? 'right-0' : '-left-2'
//             }`}
//             ref={datePicker}
//           >
//             <Calendar
//               className="sm:!w-72 !w-full"
//               onChange={setDate}
//               value={!selectedDate ? new Date() : selectedDate}
//               tileClassName="content"
//             />
//           </div>
//         )}
//       </div>
//       {selectedDate && (
//         <div className="flex items-center">
//           <div
//             className="sm:mr-2 mr-1 cursor-pointer"
//             onClick={goBackDate}
//           >
//             <FaAngleLeft className="text-primary" />
//           </div>
//           <P className="text-black font-bold uppercase sm:!text-[12px] !text-[11px] !leading-none text-center hidden sm:block">
//             {selectedDate.getDate() === new Date().getDate()
//               && selectedDate.getFullYear() === new Date().getFullYear()
//               && 'Today, '}
//             {selectedDate.getDate()}
//             {' '}
//             {getMonthName(selectedDate)}
//             ,
//             {selectedDate.getFullYear()}
//           </P>
//           <div
//             className="block sm:hidden"
//             onClick={() => {
//               setShowCalender(!showCalender);
//             }}
//           >
//             <P className="text-black font-bold uppercase sm:!text-[12px] !text-[11px] !leading-none text-center">
//               {selectedDate.getDate() === new Date().getDate()
//               && selectedDate.getFullYear() === new Date().getFullYear()
//               && 'Today, '}
//               {selectedDate.getDate()}
//               {' '}
//               {getMonthName(selectedDate)}
//               ,
//               {selectedDate.getFullYear()}
//             </P>
//           </div>
//           <div
//             className="sm:ml-2 ml-1 cursor-pointer"
//             onClick={goNextDate}
//           >
//             <FaAngleRight className=" text-primary" />
//             {/* <Pic
//               src="/images/icons/goprev.png"
//               className="object-cover w-full h-full"
//               alt="goprev"
//             /> */}
//           </div>
//         </div>
//       )}
//       {!selectedDate && (
//         <div
//           className="sm:w-full"
//           onClick={() => {
//             setShowCalender(!showCalender);
//           }}
//         >
//           <P className="sm:mr-3 font-bold text-primary cursor-pointer pt-[2px] sm:text-[14px] !text-[12px]">
//             Select Date
//           </P>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BookingCalender;

'use client';

import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { Pic } from '../ui/Pic';
import P from '../typography/P';

function BookingCalender({ getSearchDataUsingDate, right }) {
  const [showCalender, setShowCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const datePicker = useRef();

  async function setDate(e) {
    setSelectedDate(e);
    getSearchDataUsingDate(e);
    setShowCalender(false);
  }

  // const nthNumber = (number) => {
  //   if (number > 3 && number < 21) return 'th';
  //   switch (number % 10) {
  //     case 1:
  //       return 'st';
  //     case 2:
  //       return 'nd';
  //     case 3:
  //       return 'rd';
  //     default:
  //       return 'th';
  //   }
  // };

  const getMonthName = (date) => new Date(date).toLocaleString('en-us', {
    month: 'short',
  });
  const goBackDate = () => {
    const date = new Date(selectedDate);
    const prevDate = new Date(date.setDate(date.getDate() - 1));
    setSelectedDate(prevDate);
    getSearchDataUsingDate(new Date(prevDate));
  };

  const goNextDate = () => {
    const date = new Date(selectedDate);
    const nextDay = new Date(date.setDate(date.getDate() + 1));
    setSelectedDate(nextDay);
    getSearchDataUsingDate(new Date(nextDay));
  };

  useOnClickOutside(datePicker, () => setShowCalender(false));
  return (
    <div className="flex items-center md:border-r border-[#BDBDBD] sm:pr-4 md:px-2 px-1 sm:border-0 border h-[40px] rounded-md sm:rounded-none sm:bg-transparent bg-white justify-center sm:min-w-[120px] text-gray-700">
      <div className="relative sm:mr-3 mr-1.5">
        <div className="sm:hidden block">
          {
          !selectedDate
          && (
          <div className="sm:w-[28px] sm:h-[31px] w-[24px] h-[28px]">
            <Pic
              src="/images/icons/calender_black.png"
              className="object-contain w-full h-full cursor-pointer"
              onClick={() => {
                setShowCalender(!showCalender);
              }}
            />
          </div>
          )
        }
        </div>

        <div className="hidden sm:block">
          <div className="sm:w-[28px] sm:h-[31px] w-[24px] h-[28px]">
            <Pic
              src="/images/icons/calender_primary.svg"
              alt="calender-primary"
              className="object-contain w-full h-full cursor-pointer"
              onClick={() => {
                setShowCalender(!showCalender);
              }}
            />
          </div>
        </div>

        {showCalender && (
          <div
            className={`sm:absolute fixed sm:top-0 z-30 bg-white border lg:-left-16 ${
              right ? 'right-0' : '-left-2'
            }`}
            ref={datePicker}
          >
            <Calendar
              className="sm:!w-72 !w-full"
              onChange={setDate}
              value={!selectedDate ? new Date() : selectedDate}
              tileClassName="content"
            />
          </div>
        )}
      </div>
      {selectedDate && (
        <div className="flex items-center">
          <div
            className="sm:mr-2 mr-1 cursor-pointer"
            onClick={goBackDate}
          >
            <FaAngleLeft className="text-gray-700" />
          </div>
          <P className="text-black font-bold uppercase sm:!text-[12px] !text-[11px] !leading-none text-center hidden sm:block">
            {selectedDate.getDate() === new Date().getDate()
              && selectedDate.getFullYear() === new Date().getFullYear()
              && 'Today, '}
            {selectedDate.getDate()}
            {' '}
            {getMonthName(selectedDate)}
            ,
            {selectedDate.getFullYear()}
          </P>
          <div
            className="block sm:hidden"
            onClick={() => {
              setShowCalender(!showCalender);
            }}
          >
            <P className="text-black font-bold uppercase sm:!text-[12px] !text-[11px] !leading-none text-center">
              {selectedDate.getDate() === new Date().getDate()
              && selectedDate.getFullYear() === new Date().getFullYear()
              && 'Today, '}
              {selectedDate.getDate()}
              {' '}
              {getMonthName(selectedDate)}
              ,
              {selectedDate.getFullYear()}
            </P>
          </div>
          <div
            className="sm:ml-2 ml-1 cursor-pointer"
            onClick={goNextDate}
          >
            <FaAngleRight className="text-gray-700" />
            {/* <Pic
              src="/images/icons/goprev.png"
              className="object-cover w-full h-full"
              alt="goprev"
            /> */}
          </div>
        </div>
      )}
      {!selectedDate && (
        <div
          className="sm:w-full"
          onClick={() => {
            setShowCalender(!showCalender);
          }}
        >
          <P className="sm:mr-3 font-bold text-primary cursor-pointer pt-[2px] sm:text-[14px] !text-[12px]">
            Select Date
          </P>
        </div>
      )}
    </div>
  );
}

export default BookingCalender;
