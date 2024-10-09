/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import useOnClickOutside from 'hooks/useOnClickOutside';

function SearchAutocomplete({
  setPassenger, passenger, placeHolder, openModal, allPassenger, showUserList, setShowUserList,
}) {
  const ref = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [userList, setUserList] = useState([]);
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setShowList(showUserList);
    if (inputRef?.current && !passenger) {
      inputRef?.current.focus();
      // setShowUserList(false);
    }
  }, [passenger, showUserList]);

  useEffect(() => {
    setUserList(allPassenger);
    setSuggestions(allPassenger);
    setShowList(true);
  }, [allPassenger]);

  const handleInputChange = (e) => {
    setShowList(true);
    const term = e?.target?.value || e;
    if (typeof term === 'string') {
      setSearchTerm(term);
      const filteredSuggestions = userList.filter((user) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        Object.keys(user).some((key) => {
          const value = user[key];
          if (value !== null && typeof value === 'string') {
            return value.toLowerCase().includes((term).toLowerCase());
          }
          return false;
        }));
      setSuggestions(filteredSuggestions);
    } else {
      setSearchTerm('');
      setSuggestions(userList);
    }
  };

  const selectPassenger = (selectedPassenger) => {
    setShowList(false);
    setShowUserList(false);
    setPassenger(selectedPassenger);
    setSearchTerm(
      `${selectedPassenger.passengerFname} ${selectedPassenger.passengerLname && ''}${selectedPassenger.passengerLname} ${selectedPassenger.passengerEmail && '/ '}${selectedPassenger.passengerEmail} ${selectedPassenger.passengerMobile && '/ '}${selectedPassenger.passengerMobile}`,
    );
    setSuggestions(userList);
  };

  useEffect(() => {
    if (passenger) {
      setSearchTerm(
        `${passenger.passengerFname} ${passenger.passengerLname} ${passenger.passengerEmail && '/ '}${passenger.passengerEmail} ${passenger.passengerMobile && '/ '}${passenger.passengerMobile}`,
      );
      setShowList(false);
    }
  }, [passenger]);

  useOnClickOutside(ref, () => {
    setShowList(false);
    setShowUserList(false);
  });

  return (
    <div className="relative !text-gray-700" ref={ref}>
      <div className="relative !text-gray-700">
        <input
          type="text"
          className="w-full input input-bordered focus:border-primary focus:outline-none pr-7 !text-gray-700"
          placeholder={placeHolder}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => {
            setShowList(true);
          }}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={showList}
          ref={inputRef}
        />
        { searchTerm && <MdClose className="absolute right-2 top-2/4 -translate-y-2/4 text-primary cursor-pointer" onClick={() => { setPassenger(null); setSearchTerm(''); handleInputChange(''); }} />}

      </div>
      {showList && suggestions && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 border border-t-0 rounded-lg shadow-lg bg-white !text-gray-700 max-h-64 overflow-y-auto z-30">
          {suggestions.map((suggestion) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              key={suggestion.passengerId}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 !text-black w-full"
              onClick={() => {
                selectPassenger(suggestion);
              }}
            >
              {suggestion.passengerFname}
              {
                suggestion.passengerLname
                && (
                  <span className="!text-black">
                    {' '}
                    {suggestion.passengerLname}
                  </span>
                )
              }
              {
                suggestion.passengerEmail
                && (
                  <span className="!text-black">
                    {' '}
                    /
                    {' '}
                    {suggestion.passengerEmail}
                  </span>
                )
              }
              {
                suggestion.passengerMobile
                && (
                  <span className="!text-black">
                    {' '}
                    /
                    {' '}
                    {suggestion.passengerMobile}
                  </span>
                )
              }
            </li>
          ))}
        </ul>
      )}
      {showList && suggestions.length === 0 && (
        <ul className="absolute left-0 right-0 border border-t-0 rounded-lg shadow-lg bg-white !text-gray-700 max-h-64 overflow-y-auto z-30">

          <li
            className="px-4 py-3 cursor-pointer hover:bg-gray-100 w-full text-center"
            onClick={openModal}
          >
            + Add Passenger
          </li>
        </ul>
      )}
    </div>
  );
}

export default SearchAutocomplete;
