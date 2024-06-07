/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRouter } from 'next/navigation';

export default function BottomNav({ setShowNewBooking, showNewBooking }) {
  const router = useRouter();
  return (
    <div
      className="w-screen px-0 py-3 bg-white sm:px-8"
      style={{ boxShadow: '0px -4px 4px 1px #EAEAEA' }}
    >
      <div className="flex items-stretch justify-between gap-4 sm:gap-6">
        <div
          className="flex flex-col w-1/4 gap-2 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <img
            src="/images/global/home.svg"
            className="flex-none w-6 h-6 mx-auto mt-[2px]"
            alt=""
          />
          <p className="text-xs font-semibold text-center text-gray-700 leading-[0.85rem] sm:text-sm">
            Home
          </p>
        </div>
        <div
          className="flex flex-col w-1/4 gap-2 cursor-pointer"
          onClick={() => router.push('/profile-management')}
        >
          <img
            src="/images/global/avatar.svg"
            className="flex-none w-8 h-8 mx-auto -mb-2"
            alt=""
          />
          <p className="text-xs font-semibold text-center text-gray-700 leading-[0.85rem] sm:text-sm">
            Account
          </p>
        </div>
        <div
          className="flex flex-col w-1/4 gap-2 cursor-pointer"
          onClick={() => router.push('/booking-management')}
        >
          <img
            src="/images/global/booking.svg"
            className="flex-none mx-auto -mb-1 w-7 h-7"
            alt=""
          />
          <p className="text-xs font-semibold text-center text-gray-700 leading-[0.85rem] sm:text-sm">
            Bookings
          </p>
        </div>
        <div
          className="flex flex-col w-1/4 gap-2 cursor-pointer"
          onClick={() => {
            router.push('/booking-management?param=new-booking');
            setShowNewBooking(!showNewBooking);
          }}
        >
          <img
            src="/images/global/plus.svg"
            className="flex-none w-6 h-6 mx-auto"
            alt=""
          />
          <p className="text-xs font-semibold text-center text-gray-700 leading-[0.85rem] sm:text-sm">
            Add Booking
          </p>
        </div>
      </div>
    </div>
  );
}
