'use client';

import { useState } from 'react';
import FullPage2 from 'components/BookingManagement/FullPage2';
import AuthWrap from '../AuthWrap';

export const metadata = {
  title: 'Booking Management',
  description: 'Welcome to roldrive :)',
};

function BookingPage() {
  const [showNewBooking, setShowNewBooking] = useState(false);
  return (
    <AuthWrap
      setShowNewBooking={setShowNewBooking}
      showNewBooking={showNewBooking}
    >
      {/* <FullPage
        isShowNewBooking={showNewBooking}
        setNewBooking={setShowNewBooking}
      /> */}
      <FullPage2
        isShowNewBooking={showNewBooking}
        setNewBooking={setShowNewBooking}
      />
    </AuthWrap>
  );
}

export default BookingPage;
