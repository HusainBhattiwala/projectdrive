import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import Link from 'next/link';
import Button from '../../ui/Button';
import ModalV3 from '../../ui/ModalV3';
import AddNewPassenger from './AddNewPassenger';

export default function PassengerTop() {
  // eslint-disable-next-line no-unused-vars

  const [addPassengerModal, setAddPassengerModal] = useState();

  async function handleClose() {
    setAddPassengerModal((prev) => ({
      ...prev,
      enabled: false,
    }));
  }

  // eslint-disable-next-line react/jsx-no-bind
  const addPassengerModalBody = () => (
    <AddNewPassenger handleClose={handleClose} />
  );

  function openNewCardModal() {
    setAddPassengerModal(() => ({
      enabled: true,
      header: 'Add New Passenger',
      body: addPassengerModalBody,
      noOutSideClose: true,
      footer: '',
    }));
  }

  return (
    <div className="py-[15px] xl:px-[20px] lg:px-[20px] px-2 bg-white w-full rounded-md justify-between items-center md:flex-row md:gap-y-0 gap-y-4 gap-x-4 flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row gap-5 items-center">
          <div className="relative w-[584px]">
            <input
              type="text"
              className="bg-white border border-solid border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 "
              placeholder="Search by name, phone number, designation"
            />
            <button
              aria-label="icon"
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary"
            >
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
            </button>
          </div>
          <div className="flex gap-[30px] flex-row ml-[300px]">
            <div className="relative w-[190px]">
              {/* eslint-disable-next-line react/jsx-no-bind */}
              {/* <Button className="w-full h-[42px] p-4 py-2 rounded-md capitalize border border-primary btn-primary hover:bg-[#EAEAEA] hover:!text-primary !text-[#EAEAEA] !text-[16px]" onClick={openNewCardModal}> */}
              {/*  <img className="w-4 h-[19px] relative" src="/images/global/new-passenger.svg" alt="new passenger" /> */}
              {/*  {' '} */}
              {/*  New Passenger */}
              {/* </Button> */}
              <Button
                className="text-xs  border border-primary capitalize !h-10 font-semibold  w-auto !rounded-[5px] bg-primary text-white px-5"
                onClick={openNewCardModal}
              >
                <img
                  className="w-4 h-[19px] relative"
                  src="/images/global/new-passenger.svg"
                  alt="new passenger"
                />
                New Passenger
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ModalV3 {...addPassengerModal} setModal={setAddPassengerModal} />
    </div>
  );
}
