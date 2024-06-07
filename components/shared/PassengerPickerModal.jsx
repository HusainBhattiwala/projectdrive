/* eslint-disable max-len */
import React, { useContext } from 'react';
import BookingContext from 'context/BookingContext';
import P from '../typography/P';
import Button from '../ui/Button';

function PassengerPickerModal({ setPassenger }) {
  const { passengers, decrement, increment } = useContext(BookingContext);
  return (
    <div className="fixed z-50 rounded-t-xl sm:absolute sm:-top-14 right-0 sm:right-auto left-0 border !bg-white bottom-0 max-w-[100vw]">
      <div className="bg-white p-3 rounded-md w-full shadow-lg shadow-red-500/50">
        <div className="flex flex-row justify-between mb-6 items-center !bg-white">
          <div className="leading-none font-semibold ">
            <P>Adults</P>
            <P className="!text-xs text-gray-500">12+ Years</P>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div onClick={() => decrement('adult', true)}>
              <Button type="button" kind="primary" className="w-2 h-8 rounded-full text-bold mr-2 text-xl font-bold">  - </Button>
            </div>
            <P className="text-bold w-[15px] text-center">{passengers.adult}</P>
            <div onClick={() => { increment('adult'); setPassenger(); }}>
              <Button type="button" kind="primary" className="btn-primary w-2 h-8 rounded-full text-bold ml-2 text-xl font-bold">  + </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mb-6">
          <div className="leading-none font-semibold">
            <P className="mr-3">Luggage</P>
            <P className="!text-xs text-gray-500">Bags</P>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div onClick={() => decrement('luggage')}>
              <Button type="button" kind="primary" className="btn-primary w-2 h-8 rounded-full text-bold mr-2 text-xl font-bold">  - </Button>
            </div>
            <P className="text-bold w-[15px] text-center">{passengers.luggage}</P>
            <div onClick={() => { increment('luggage'); setPassenger(); }}>
              <Button type="button" kind="primary" className="btn-primary w-2 h-8 rounded-full text-bold ml-2 text-xl font-bold ">
                +
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mb-6">
          <div className="font-semibold leading-none">
            <P>Children</P>
            <P className="!text-xs text-gray-500">2-12 Years</P>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div onClick={() => decrement('children')}>
              <Button type="button" kind="primary" className="btn-primary w-2 h-8 rounded-full text-bold mr-2 text-xl font-bold">  - </Button>
            </div>
            <P className="text-bold w-[15px] text-center">{passengers.children}</P>
            <div onClick={() => { increment('children'); setPassenger(); }}>
              <Button type="button" kind="primary" className="btn-primary w-2 h-8 rounded-full text-bold ml-2 text-xl font-bold">  + </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="leading-none font-semibold">
            <P>Infant</P>
            <P className="!text-xs text-gray-500">0-2 Years</P>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div onClick={() => decrement('infant')}>
              <Button type="button" kind="primary" className="btn-primary w-2 h-8 rounded-full text-bold mr-2 text-xl font-bold">  - </Button>
            </div>
            <P className="text-bold w-[15px] text-center">{passengers.infant}</P>
            <div onClick={() => { increment('infant'); setPassenger(); }}>
              <Button type="button" kind="primary" className="btn-primary w-2 h-8 rounded-full text-bold ml-2 text-xl font-bold ">
                +
              </Button>
            </div>
          </div>
        </div>
        {/* <div>
          <Button
            type="button"
            kind="primary"
            className={`btn btn-primary w-full text-white font-bold py-1 px-4 mt-5 h-10 ${adult === 0 ? 'btn-disabled' : ''}`}
            onClick={setPassenger}
            disabled={adult === 0}
          >
            Confirm
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default PassengerPickerModal;
