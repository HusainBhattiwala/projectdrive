// 'use client';

// import React, { useRef, useState } from 'react';
// import { FaTimes } from 'react-icons/fa';

// function BookingSearch({ getSearchDataUsingText }) {
//   const inputRef = useRef(null);
//   const divRef = useRef(null);
//   const [searchText, setSearchText] = useState('');
//   function getDataByText() {
//     setSearchText(inputRef.current.value);
//     getSearchDataUsingText(inputRef.current.value);
//   }
//   function onFocus() {
//     if (window.innerWidth < 560) {
//       divRef.current.classList.add('!absolute', 'z-30', 'w-11/12');
//     }
//   }
//   function offFocus() {
//     if (window.innerWidth < 560) {
//       divRef.current.classList.remove('!absolute', 'z-20', 'w-11/12');
//     }
//   }
//   return (
//     <div className="sm:px-4 !text-gray-700">
//       <div className="relative" ref={divRef}>
//         <input
//           placeholder="Search by month, pick-up, drop-off etc"
//           className="w-full input input-bordered !text-gray-700 focus:border-primary focus:outline-none md:max-w-[350px] md:min-w-[350px] h-[40px]"
//           ref={inputRef}
//           type="text"
//           onKeyUp={() => {
//             getDataByText();
//           }}
//           onFocus={onFocus}
//           onBlur={offFocus}
//         />
//         {searchText && (
//           <div
//             className="absolute -translate-y-1/2 cursor-pointer right-2 top-2/4 z-30"
//             onClick={() => {
//               setSearchText('');
//               inputRef.current.value = '';
//               getSearchDataUsingText('');
//             }}
//           >
//             <FaTimes />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BookingSearch;

'use client';

import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function BookingSearch({ getSearchDataUsingText }) {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  function getDataByText() {
    setSearchText(inputRef.current.value);
    getSearchDataUsingText(inputRef.current.value);
  }

  // function onFocus() {
  //   if (window.innerWidth < 560) {
  //     divRef.current.classList.add('!absolute', 'z-30', 'w-11/12');
  //   }
  // }
  // function offFocus() {
  //   if (window.innerWidth < 560) {
  //     divRef.current.classList.remove('!absolute', 'z-20', 'w-11/12');
  //   }
  // }

  return (
    <div className="sm:px-4 text-gray-700">
      <div className="relative" ref={divRef}>
        <input
          placeholder="Search by month, pick-up, drop-off etc"
          className="w-full input input-bordered focus:border-primary focus:outline-none md:max-w-[350px] md:min-w-[350px] h-[40px]"
          ref={inputRef}
          type="text"
          onKeyUp={() => {
            getDataByText();
          }}
          // onFocus={onFocus}
          // onBlur={offFocus}
        />
        {searchText && (
          <div
            className="absolute -translate-y-1/2 cursor-pointer right-2 top-2/4 z-30"
            onClick={() => {
              setSearchText('');
              inputRef.current.value = '';
              getSearchDataUsingText('');
            }}
          >
            <FaTimes />
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingSearch;
