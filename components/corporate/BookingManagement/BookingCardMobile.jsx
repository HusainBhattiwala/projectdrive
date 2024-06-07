import { useRouter } from 'next/navigation';

export default function BookingCardMobile() {
  const router = useRouter();

  return (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="p-2 my-3 bg-white shadow cursor-pointer sm:p-4 rounded-xl" onClick={() => router.push('/trip-details?booking-id=')}>
      <div className="flex items-center justify-between gap-4">
        <p
          className="p-2 text-xs font-medium text-white rounded-lg sm:rounded-md bg-primary"
        >
          Transfer
        </p>
        <p className="text-sm font-medium">
          #42242
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 my-6 sm:gap-8">
        <p className="w-64 font-bold text-gray-700 line-clamp-1">
          Heathrow Airport London
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/global/right.svg"
          alt=""
          className="w-4 h-4 mx-auto sm:w-5 sm:h-5"
        />
        <p className="w-64 font-bold text-gray-700 line-clamp-1 mo:hidden">
          Lords Cricket Grounds
        </p>
        <p className="w-64 font-bold text-gray-700 line-clamp-1 sm:hidden">
          22 Hours
        </p>
      </div>
      <p className="text-sm font-medium text-gray-600 mb-2">
        {/* {`${dateShown.getDate()}.${dateShown.getMonth()}.${dateShown.getFullYear()} `}
        |
        {` ${hours}.${dateShown.getMinutes()} ${amPm}`} */}
        22/05/2023
      </p>
      <div className="flex justify-between">

        <p className="mt-2 text-sm font-medium text-gray-600">
          Land Rover Ghost Destroyer
        </p>

        {/* <GetStatusBtn type={bookings.ride_status} /> */}

      </div>

    </div>
  );
}
