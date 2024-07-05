'use client';

import { useEffect, useState } from 'react';
import Table from 'components/ui/Table';

function Page() {
  const [bookingData, setBookingData] = useState(null);
  useEffect(() => {
    async function getBookings() {
      const headers = {
        Accept: '*/*',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      };
      fetch(`${process.env.NEXT_PUBLIC_ROOT_API}/booking`, {
        method: 'GET', // GET, POST, PUT, DELETE, etc.
        headers,
      })
        .then((response) => response.json())
        .then((data) => { setBookingData(data.data); });
    }
    getBookings();
  }, []);
  return (
    <div className="lg:container h-full w-full flex items-center justify-center py-20">
      <Table data={bookingData} />
    </div>
  );
}

export default Page;
