import React from 'react';
import SearchAutocomplete from 'components/corporate/SearchAutocomplete';

function PassengerAutoComplete({
  setPassenger, passenger, openModal, allPassenger, passengerRef, showUserList, setShowUserList,
}) {
  return (
    <div ref={passengerRef}>
      <SearchAutocomplete setPassenger={setPassenger} passenger={passenger} openModal={openModal} allPassenger={allPassenger} showUserList={showUserList} setShowUserList={setShowUserList} placeHolder="Search account name / phone number / email" />
    </div>
  );
}

export default PassengerAutoComplete;
