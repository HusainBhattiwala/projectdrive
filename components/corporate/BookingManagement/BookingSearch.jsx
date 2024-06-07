import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function BookingSearch({ getSearchDataUsingText }) {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [searchText, setSearchText] = useState('');
  // eslint-disable-next-line no-unused-vars
  function getDataByText() {
    setSearchText(inputRef.current.value);
    getSearchDataUsingText(inputRef.current.value);
  }
  // eslint-disable-next-line no-unused-vars
  function onFocus() {
    if (window.innerWidth < 560) {
      divRef.current.classList.add('!absolute', 'z-30', 'w-11/12');
    }
  }
  // eslint-disable-next-line no-unused-vars
  function offFocus() {
    if (window.innerWidth < 560) {
      divRef.current.classList.remove('!absolute', 'z-20', 'w-11/12');
    }
  }
  return (
    <div className="sm:px-4">
      <div className="relative">
        <input placeholder="Search by month, pick-up, drop-off etc" className="w-full input input-bordered focus:border-primary focus:outline-none md:max-w-[350px] md:min-w-[350px] h-[40px]" type="text" />
        <div className="absolute -translate-y-1/2 cursor-pointer right-2 top-2/4 z-30">
          <FaTimes />
        </div>
      </div>
    </div>

  );
}

export default BookingSearch;
