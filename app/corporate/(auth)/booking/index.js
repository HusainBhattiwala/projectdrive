'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function BookingIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push('/corporate/booking/add-new-booking');
  }, [router]);

  return null; // or you can display a loading message or redirect message
}

export default BookingIndex;
