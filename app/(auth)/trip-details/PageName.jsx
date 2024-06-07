'use client';

import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import H1 from 'components/typography/H1';

function PageName() {
  return (
    <div className="flex items-center sm:justify-items-start mt-3">
      <Link className="flex items-center text-primary text-sm font-bold cursor-pointer" href="/booking-management">
        <MdArrowBack className="sm:text-3xl text-2xl border border-primary rounded-full py-1 px-1 shadow-red-600 hover:bg-primary hover:text-white" />
      </Link>
      <H1 className="font-bold sm:!text-[32px] tracking-tight text-black sm:ml-5 ml-1">
        Your Trip Details
      </H1>
    </div>
  );
}

export default PageName;
