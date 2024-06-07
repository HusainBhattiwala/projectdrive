import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Button from '../../ui/Button';

function BookingManagementTop() {
  return (
    <div className="py-[15px] xl:px-[55px] lg:px-[20px] px-2 bg-white w-full justify-between items-center md:flex-row md:gap-y-0 gap-y-4 gap-x-4 flex flex-row">
      <div>
        <div className="sm:px-4">
          <div className="relative">
            <input placeholder="Search by month, pick-up, drop-off etc" className="w-full input input-bordered focus:border-primary focus:outline-none md:max-w-[350px] md:min-w-[350px] h-[40px]" type="text" />
            <div className="absolute -translate-y-1/2 cursor-pointer right-2 top-2/4 z-30">
              <FaTimes />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button type="button" className="btn-primary w-10 h-10 ml-[-220px] mt-[2px] absolute right-[290px] top-6 rounded-lg">
          <div className="w-6 h-6 left-[8px] top-[8px] absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </Button>
      </div>
      <div>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button className="w-full h-[42px] p-4 py-2 rounded-md capitalize border border-primary btn-primary hover:bg-[#EAEAEA] hover:!text-primary !text-[#EAEAEA] !text-[16px]">
          <Link href="/pages/booking-management">Add New Booking +</Link>
        </Button>
      </div>
    </div>

  );
}

export default BookingManagementTop;
