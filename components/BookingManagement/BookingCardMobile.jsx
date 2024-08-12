import { useRouter } from 'next/navigation';
import Button from 'components/ui/Button';
import formatDateTime from 'components/utils/formatDateTime';

function GetStatusBtn(props) {
  const { type } = props;

  switch (type) {
    case 'BID' || 'ACCEPT_BID':
      return (
        <Button className="!bg-[#47C65E] text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-3 capitalize">
          Confirmed
        </Button>
      );
    case 'DRIVER_ASSIGNED':
      return (
        <Button className="!bg-[#F9A000] text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-3 capitalize">
          Allocated
        </Button>
      );
    case 'ON_ROUTE':
      return (
        <Button className="!bg-[#FF7E9D] text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-3 capitalize">
          Onway
        </Button>
      );
    case 'POB':
      return (
        <Button className="!bg-[#BB3CE8] text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-3 capitalize">
          POB
        </Button>
      );
    case 'ARRIVED':
      return (
        <Button className="!bg-[#41479B] text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-3 capitalize">
          ARRIVED
        </Button>
      );
    case 'CANCELLED':
      return (
        <Button className="!bg-[#FFE4E9] !text-[#ED2939] text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-3 capitalize">
          Cancelled
        </Button>
      );
    default:
      return (
        <Button className="!bg-[#47C65E] text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-3 capitalize">
          Completed
        </Button>
      );
  }
}

export default function BookingCardMobile({ bookings }) {
  const router = useRouter();
  return (
    <div
      className="p-2 my-3 bg-white shadow cursor-pointer sm:p-4 rounded-xl text-gray-700"
      onClick={() => router.push(`/trip-details?booking-id=${bookings.booking_id}`)}
    >
      <div className="flex items-center justify-between gap-4">
        <p
          className={`p-2 text-xs font-medium text-white rounded-lg sm:rounded-md ${
            bookings.booking_type === 'HOURLY' ? 'bg-[#131092]' : 'bg-primary'
          }`}
        >
          {bookings.booking_type}
        </p>
        <p className="text-sm font-medium">
          #
          {bookings?.booking_ref_no}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 my-6 sm:gap-8">
        <p className="w-64 font-bold text-gray-700 line-clamp-1">
          {bookings?.pickup_location}
        </p>
        <img
          src="/images/global/right.svg"
          alt=""
          className="w-4 h-4 mx-auto sm:w-5 sm:h-5"
        />
        <p className="w-64 font-bold text-gray-700 line-clamp-1 mo:hidden">
          {bookings.booking_type !== 'HOURLY'
            ? bookings?.drop_location
            : `Duration: ${bookings?.booking_duration}`}
          {' '}
          Hours
        </p>
        <p className="w-64 font-bold text-gray-700 line-clamp-1 sm:hidden">
          {bookings.booking_type !== 'HOURLY'
            ? bookings?.drop_location
            : `${bookings?.time_since_travel_date}`}
        </p>
      </div>
      <p className="text-sm font-medium text-gray-600 mb-2">
        {/* {`${dateShown.getDate()}.${dateShown.getMonth()}.${dateShown.getFullYear()} `}
        |
        {` ${hours}.${dateShown.getMinutes()} ${amPm}`} */}
        {formatDateTime(bookings?.travel_date)}
      </p>
      <div className="flex justify-between">
        <p className="mt-2 text-sm font-medium text-gray-600">
          {`${bookings?.preferred_vehicle}`}
        </p>

        <GetStatusBtn type={bookings.ride_status} />
      </div>
    </div>
  );
}
