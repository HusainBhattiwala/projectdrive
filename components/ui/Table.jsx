'use client';

import H1 from '../typography/H1';

function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <H1 className="mb-6 font-semibold text-black">Upcomming Bookings</H1>
      <table className="table w-full table-compact">
        <thead>
          <tr>
            <th>#</th>
            <th>Booking reference</th>
            <th>Booking Type</th>
            <th>From address</th>
            <th>To address</th>
            <th>Vehicle Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data
            && data.map((bookingDetails, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{bookingDetails.booking_ref_no}</th>
                <td>{bookingDetails.booking_type}</td>
                <td>{bookingDetails.pickup_location}</td>
                <td>{bookingDetails.drop_location}</td>
                <td>{bookingDetails.preferred_vehcatname}</td>
                <td>
                  {bookingDetails.tariff}
                  {' '}
                  GBP
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
