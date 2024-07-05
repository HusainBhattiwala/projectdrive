import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import Container from 'rolnew/comp/Container';
import Pic from 'rolnew/util/Pic';

function Locations() {
  return (
    <Container className="bg-[#223544] sm:pb-[110px]  pb-8 text-center">
      <div className="grid sm:grid-cols-5 grid-cols-1 gap-x-10 gap-y-6 items-center">
        <div className="sm:col-span-3 col-span-1">
          <h3 className="text-[#B2B2B2] text-2xl leading-7 sm:text-left text-center font-medium">Looking for more locations?</h3>
          <p className="text-[#B2B2B2] text-sm font-normal leading-5 sm:text-left text-center sm:mt-5 sm:max-w-[80%]">Explore our expanding locations and book your customized trip, from bulk bookings to monthly plans. Contact us now!</p>
          <div className="sm:mt-5 flex flex-nowrap sm:justify-start justify-center sm:gap-x-3 gap-x-1 text-[#FDC65C]">
            <a href="tel:+4402045920966" className="flex sm:gap-x-2 gap-x-1 items-center sm:text-base text-sm sm:font-light font-medium pop text-[#FDC65C]">
              {' '}
              <FiPhone className="sm:text-xl text-base" />
              {' '}
              <a href="tel:+442045920966">+44 204 592 0966</a>
            </a>
            <span className="text-[#B2B2B2]">|</span>
            <a href="mailto:booking@roldrive.com" className="flex sm:gap-x-2 gap-x-1 items-center sm:text-base text-sm sm:font-light font-medium pop text-[#FDC65C]">
              {' '}
              <MdOutlineMailOutline className="sm:text-xl text-base" />
              {' '}
              <a href="mailto:+booking@roldrive.com">booking@roldrive.com</a>
            </a>
          </div>
        </div>
        <div className="sm:col-span-2 col-span-1">
          <div className="w-full h-60 mx-auto">
            <Pic alt="location" className="mx-auto" src="/rolnew/home/map-locations.svg" objectFit="cover" />
          </div>
        </div>
      </div>

    </Container>
  );
}

export default Locations;
