'use client';

import { useState } from 'react';
import FullPage from 'components/BookingManagement/FullPage';
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
      <FullPage
        isShowNewBooking={showNewBooking}
        setNewBooking={setShowNewBooking}
      />
    </AuthWrap>
  );
}

export default BookingPage;
