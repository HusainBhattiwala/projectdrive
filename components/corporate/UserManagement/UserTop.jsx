import { useState } from 'react';
import Button from '../../ui/Button';
import AddNewUser from './AddNewUser';
import ModalV3 from '../../ui/ModalV3';

export default function UserTop() {
  const [addUserModal, setAddUserModal] = useState();
  async function handleClose() {
    setAddUserModal((prev) => ({
      ...prev,
      enabled: false,
    }));
  }

  // eslint-disable-next-line react/jsx-no-bind
  const addUserModalBody = () => <AddNewUser handleClose={handleClose} />;

  function openNewCardModal() {
    setAddUserModal(() => ({
      enabled: true,
      header: 'Add New User',
      body: addUserModalBody,
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
              className="bg-white border border-solid border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5"
              placeholder="Search by eg. booking ID, name."
              required
            />
            <button
              aria-label="svg"
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
          <div className="gap-[30px] ml-[300px]">
            <div className="relative w-[190px]">
              {/* eslint-disable-next-line react/jsx-no-bind */}
              {/* <Button className="w-auto py-3.5 capitalize border border-primary btn-primary hover:bg-[#EAEAEA] hover:!text-primary !text-[#EAEAEA] !text-[16px] text-xs !h-10 font-semibold !rounded-[5px] bg-primary px-5"> */}
              {/*  <img className="w-4 h-[19px] relative" src="/images/global/new-passenger.svg" alt="new passenger" /> */}
              {/*  <p className="text-white text-xs text-[15px] font-semibold capitalize">New User</p> */}
              {/* </Button> */}
              <Button
                className="text-xs border border-primary capitalize !h-10 font-semibold w-52 !rounded-[5px] bg-primary text-white px-5"
                onClick={openNewCardModal}
              >
                <img
                  className="w-4 h-[19px] relative"
                  src="/images/global/new-passenger.svg"
                  alt="new passenger"
                />
                New User
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ModalV3 {...addUserModal} setModal={setAddUserModal} />
    </div>
  );
}

// <button type="button" className="text-xs capitalize !h-10 font-semibold w-auto !rounded-[5px] bg-primary text-white px-5"> + Add new booking </button>
