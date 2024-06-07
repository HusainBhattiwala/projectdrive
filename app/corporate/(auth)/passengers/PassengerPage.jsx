'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'components/ui/Button';
import Loader from 'components/shared/Loader';
import P from 'components/typography/P';
import PassengerModal from 'components/corporate/ui/PassengerModal';
import api from 'components/utils/api';
import Image from 'next/image';
import Input from 'components/ui/Input';
import H2 from 'components/typography/H2';

function PassengerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [passengers, setPassengers] = useState([]);
  const [currentPassenger, setCurrentPassenger] = useState({});
  const [loading, setLoading] = useState(true);
  const [deletePassenger, setDeletePassenger] = useState(null);

  // Function to handle input change in the search field
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPassengers = passengers.reverse().filter((passenger) => {
    const passengerName = `${passenger.passengerFname} ${passenger.passengerLname}`;
    const mobileInfo = `${passenger.passengerMobileCntrycd} ${passenger.passengerMobile}`;
    const EmailAddress = `${passenger.passengerEmail}`;
    const isNameMatch = passengerName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isEmailMatch = EmailAddress.toLowerCase().includes(
      searchQuery.toLowerCase(),
    );
    const isAddressMatch = passenger.address
      ? passenger.address.toLowerCase().includes(searchQuery.toLowerCase())
      : false;
    const isMobileMatch = mobileInfo
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return isNameMatch || isAddressMatch || isMobileMatch || isEmailMatch;
  });

  // Function to open the modal for editing or creating a passenger
  const openModal = (passenger) => {
    setCurrentPassenger(passenger);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setCurrentPassenger({});
    setModalOpen(false);
    setDeletePassenger(null);
  };

  // Use effect to fetch passengers when the component mounts
  const fetchPassengers = useCallback(async () => {
    try {
      const response = await api.get('/corporate/passengers');
      if (response.data) {
        setPassengers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching passengers:', error);
    }
  }, []);

  useEffect(() => {
    fetchPassengers();
  }, [fetchPassengers]);

  // Function to handle the creation of a passenger
  const handleCreate = async (passenger) => {
    try {
      const response = await api.post('/corporate/passengers', passenger);
      if (response.data.status === 1) {
        fetchPassengers();
        closeModal();
        toast.success(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
      } else {
        toast.error(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
      }
    } catch (error) {
      // Handle any errors if the request fails
      toast.error(error, {
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  const handleUpdate = async (passenger) => {
    try {
      const response = await api.post(
        `/corporate/passengers/${passenger.id}`,
        passenger,
      );
      if (response.data.status === 1) {
        fetchPassengers();
        closeModal();
        toast.success(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
      } else {
        toast.error(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
      }
    } catch (error) {
      // Handle any errors if the request fails
      toast.error(error, {
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  // Function to handle the initiation of passenger deletion
  const handleDelete = (passengerId) => {
    const passengerToDelete = passengers.find(
      (passenger) => passenger.passenger_id === passengerId,
    );
    setDeletePassenger(passengerToDelete);
    setModalOpen(true);
  };

  // Function to confirm and perform the deletion of a passenger
  const confirmDelete = async () => {
    try {
      const response = await api.delete(
        `/corporate/passengers/${deletePassenger.passengerId}`,
      );
      if (response.data.status === 1) {
        fetchPassengers();
        closeModal();
        toast.success(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
      } else if (
        response.message
        === 'Failed to delete corporate passenger since jobs are assigned'
      ) {
        fetchPassengers();
        closeModal();
        toast.warn(response.message, {
          autoClose: 3000,
          theme: 'colored',
          className: 'warning-toast', // Add the custom CSS class here
        });
      } else {
        toast.error(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
      }
    } catch (error) {
      toast.error(error, {
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="bg-white rounded-md mb-10">
      <div className="w-full hidden md:block">
        <div className="topbar m-5 flex flex-col md:flex-row gap-5 xl:gap-[25rem] lg:gap-[12rem]  justify-between items-center py-4">
          <div className="box flex-grow relative basis-[45%]">
            <Input
              type="text"
              className="block w-full rounded-lg border border-solid border-neutral-200 bg-white p-2.5 pl-4 text-sm text-gray-900"
              placeholder="Search by name, phone number, designation"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {/* Conditional rendering for search/close icon */}
            {searchQuery && (
              <button
                aria-label="button"
                type="button"
                className="absolute inset-y-0 right-[1px] top-1/2 -translate-y-1/2 flex items-center w-9 h-9 place-content-center text-primary rounded-full bg-white hover:bg-pry-100"
                onClick={() => setSearchQuery('')}
              >
                <img
                  className="h-3 w-3"
                  src="/images/corporate/global/close.svg"
                  alt=""
                />
              </button>
            )}
            {!searchQuery && (
              <button
                aria-label="button"
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            )}
          </div>
          <Button
            kind="primary"
            className="!h-10 w-auto !rounded-[5px] border border-primary bg-primary px-5 text-xs font-semibold capitalize text-white"
            onClick={() => openModal({})}
          >
            <img
              className="relative h-[19px] w-4"
              src="/images/global/new-passenger.svg"
              alt="new passenger"
            />
            New Passenger
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        <div className="boxers relative w-full mb-2">
          <Input
            type="text"
            className="block w-full rounded-lg border border-solid border-neutral-200 bg-white p-2.5 pl-4 text-sm text-gray-900"
            placeholder="Search by name, mobile number, address"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {/* Conditional rendering for search/close icon */}
          {searchQuery && (
            <button
              aria-label="button"
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary"
              onClick={() => setSearchQuery('')}
            >
              <img
                className="h-3 w-3"
                src="/images/corporate/global/close.svg"
                alt=""
              />
            </button>
          )}
          {!searchQuery && (
            <button
              aria-label="button"
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="boxers w-full mb-2">
          <Button
            kind="primary"
            className="!h-10 w-full !rounded-[5px] border border-primary bg-primary px-5 text-xs font-semibold capitalize text-white"
            onClick={() => openModal({})}
          >
            <img
              className="relative h-[19px] w-4"
              src="/images/global/new-passenger.svg"
              alt="new passenger"
            />
            New Passenger
          </Button>
        </div>
      </div>
      <PassengerModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={confirmDelete}
        passenger={currentPassenger}
        deletePassenger={deletePassenger}
      />
      {loading ? (
        <Loader />
      ) : (
        <div>
          {passengers.length === 0 ? (
            <div className="flex items-center justify-center flex-col min-h-[35vh] my-auto">
              <div className="w-28 h-28 relative">
                <Image
                  src="/images/global/empty-box.png"
                  fill
                  alt="empty-box"
                />
              </div>
              <H2>No Data Available</H2>
            </div>
          ) : (
            <>
              <div className="lg:grid hidden grid-cols-9 justify-between text-center bg-gray-100 text-xs shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-gray-700 py-4 items-center px-2">
                <div className="col-span-2">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500">
                    Passenger Name
                  </h6>
                </div>
                <div className="col-span-1">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500 whitespace-nowrap">
                    Phone Number
                  </h6>
                </div>
                <div className="col-span-3">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500">
                    Email Address
                  </h6>
                </div>
                <div className="col-span-2">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500">
                    Home Address
                  </h6>
                </div>
                <div className="col-span-1">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500">
                    Actions
                  </h6>
                </div>
              </div>
              {filteredPassengers.reverse().map((passenger) => (
                <div className="lg:grid hidden grid-cols-9 justify-between text-center bg-white border-b border-gray-200 hover:bg-gray-50 !font-medium py-6 gap-x-4 items-center">
                  <div className="col-span-2">
                    <P className="text-center text-sm font-medium leading-[18px] text-neutral-500">
                      {`${passenger.passengerFname} ${passenger.passengerLname}`}
                    </P>
                  </div>
                  <div className="col-span-1">
                    <P className="text-center text-sm font-medium leading-[18px] lg:!whitespace-pre text-primary">
                      {passenger.passengerMobile
                        ? `${passenger.passengerMobileCntrycd} ${passenger.passengerMobile}`
                        : ''}
                    </P>
                  </div>
                  <div className="col-span-3 whitespace-normal">
                    <P className="text-center text-sm font-medium leading-[18px] text-neutral-500 whitespace-normal">
                      {passenger.passengerEmail}
                    </P>
                  </div>
                  <div className="col-span-2 whitespace-normal">
                    <P className="text-center text-sm font-medium leading-[18px] text-neutral-500">
                      {passenger.address}
                    </P>
                  </div>
                  <div className="col-span-1">
                    <div className="flex gap-2 items-center justify-center">
                      <button
                        type="button"
                        className="cursor-pointer py-2"
                        onClick={() => openModal(passenger)}
                      >
                        <div className="h-4 w-4 relative">
                          <Image
                            src="/images/global/edit.svg"
                            fill
                            alt="EDIT"
                          />
                        </div>
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer py-2"
                        onClick={() => handleDelete(passenger.passenger_id)}
                      >
                        <div className="h-4 w-4 relative">
                          <Image
                            src="/images/global/delete.svg"
                            fill
                            alt="DELETE"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {filteredPassengers.map((passenger) => (
          <div
            key={passenger.passengerId}
            className="bg-white space-y-3 p-4 rounded-lg shadow"
          >
            <div className="flex justify-between gap-2 sm:gap-16 text-sm py-2">
              <div className="buttons w-full flex justify-end">
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="btn-circle btn btn-ghost cursor-pointer relative"
                    onClick={() => openModal(passenger)}
                  >
                    <img
                      src="/images/global/edit.svg"
                      className="relative h-5 w-5"
                      alt="EDIT"
                    />
                  </button>
                  <button
                    type="button"
                    className="btn-circle btn btn-ghost cursor-pointer relative"
                    onClick={() => handleDelete(passenger.passenger_id)}
                  >
                    <img
                      src="/images/global/delete.svg"
                      className="relative h-5 w-5"
                      alt="DELETE"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-black">{`${passenger.passengerFname} ${passenger.passengerLname}`}</div>
            <div className="text-sm font-medium text-primary">
              {passenger.passengerMobileCntrycd}
              {' '}
              {passenger.passengerMobile}
            </div>
            <div className="text-sm text-gray-700">
              {passenger.passengerEmail}
            </div>
            <div className="text-sm text-gray-700 text-justify">
              {passenger.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PassengerPage;
