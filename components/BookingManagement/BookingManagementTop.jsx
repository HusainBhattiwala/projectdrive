/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// 'use client';

// import { FaAngleDown } from 'react-icons/fa';
// import Button from 'components/ui/Button';
// import P from '../typography/P';
// import { Pic } from '../ui/Pic';
// import BookingCalender from './BookingCalender';
// import BookingSearch from './BookingSearch';

// function BookingManagementTop({
//   showBooking,
//   searchByDate,
//   searchByText,
//   isFinishedBooking,
//   filterDate,
// }) {
//   return (
//     <div className="py-[15px] xl:px-[55px] lg:px-[20px] px-2 bg-white w-full flex justify-between items-center md:flex-row flex-col md:gap-y-0 gap-y-4 gap-x-4">
//       <div>
//         <BookingCalender getSearchDataUsingDate={searchByDate} />
//       </div>
//       <div>
//         <BookingSearch getSearchDataUsingText={searchByText} />
//       </div>
//       <div>
//         {!isFinishedBooking ? (
//           <Button
//             kind="primary"
//             className="btn-primary ml-4 capitalize px-[16px] py-[11px]"
//             onClick={() => {
//               showBooking(true);
//             }}
//           >
//             add new Booking +
//           </Button>
//         ) : (
//           <div className="cursor-pointer dropdown dropdown-end collapse-arrow">
//             <div tabIndex="0" className="flex items-center">
//               <div className="w-[14px] h-[11px] mr-1">
//                 <Pic src="/images/icons/updown.png" alt="updown" />
//               </div>
//               <P className="font-bold text-black ">Sort By</P>
//               <FaAngleDown className=" text-primary" />
//             </div>

//             <ul
//               tabIndex="0"
//               className="dropdown-content menu  text-center shadow bg-base-100 w-44 rounded-md border text-[14px] flex justify-center font-normal text-[#333333] mt-2 z-30"
//             >
//               <li
//                 className="py-2 hover:bg-gray-100"
//                 onClick={() => {
//                   filterDate('oldtonew');
//                 }}
//               >
//                 By date - old to new
//               </li>
//               <li
//                 className="py-2 hover:bg-gray-100"
//                 onClick={() => {
//                   filterDate('newtoold');
//                 }}
//               >
//                 By date - new to old
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BookingManagementTop;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import { FaAngleDown } from 'react-icons/fa';
import Button from 'components/ui/Button';
import P from '../typography/P';
// import { Pic } from '../ui/Pic';
import BookingCalender from './BookingCalender';
import BookingSearch from './BookingSearch';

function BookingManagementTop({
  showBooking,
  searchByDate,
  searchByText,
  isFinishedBooking,
  filterDate,
}) {
  return (
    <div className="py-[15px] xl:px-[55px] lg:px-[20px] px-2 w-full flex justify-between items-center md:flex-row flex-col md:gap-y-0 gap-y-4 gap-x-4">
      <div>
        <BookingCalender getSearchDataUsingDate={searchByDate} />
      </div>
      <div>
        <BookingSearch getSearchDataUsingText={searchByText} />
      </div>
      <div>
        {!isFinishedBooking ? (
          <Button
            kind="dark"
            // className="bg-gray-700 border-gray-800 hover:bg-gray-800 hover:border-gray-800 text-white ml-4 capitalize px-[16px] py-[11px]"
            className="bg-primary border-white hover:bg-red text-white ml-4 capitalize px-[16px] py-[11px]"
            onClick={() => {
              showBooking(true);
            }}
          >
            add new Booking +
          </Button>
        ) : (
          <div className="cursor-pointer dropdown dropdown-end collapse-arrow">
            <div tabIndex="0" className="flex items-center">
              {/* <div className="w-[14px] h-[11px] mr-1">
                <Pic src="/images/icons/updown.png" alt="updown" />
              </div> */}
              <P className="font-bold text-primary ">Sort By</P>
              <FaAngleDown className="text-primary" />
            </div>

            <ul
              tabIndex="0"
              className="dropdown-content menu  text-center shadow bg-base-100 w-44 rounded-md border text-[14px] flex justify-center font-normal text-primary mt-2 z-30"
            >
              <li
                className="py-2 hover:bg-gray-100"
                onClick={() => {
                  filterDate('oldtonew');
                }}
              >
                By date - old to new
              </li>
              <li
                className="py-2 hover:bg-gray-100"
                onClick={() => {
                  filterDate('newtoold');
                }}
              >
                By date - new to old
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingManagementTop;
