/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */

'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import BookingCard from 'components/BookingManagement/BookingCard';
import BookingManagementTop from 'components/BookingManagement/BookingManagementTop';
import H1 from 'components/typography/H1';
import { BookingProvider } from 'context/BookingContext';
import Button from 'components/ui/Button';
import useRetryUntilResolved from 'hooks/useRetryUntilResolved';
import BookingEngine3 from 'components/Booking/BookingEngine3';
// import Image from 'next/image';
import Loader from '../shared/Loader';
import api from '../utils/api';
import BookingCardMobile from './BookingCardMobile';
import BookingCalender from './BookingCalender';
import BookingSearch from './BookingSearch';

function FullPage({ isShowNewBooking, setNewBooking }) {
  const router = useRouter();
  const [showNewBooking, setShowNewBooking] = useState(false);
  const [sendMailLoader, setSendMailLoader] = useState('');
  const [userBookings, setUserBooking] = useState(null);
  const [filterBookings, setFilterBooking] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [finishedBooking, setFinishedBooking] = useState(false);
  const [noBookingMessage, setNoBookingMessage] = useState(null);

  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1000);
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isTokenResolved = useRetryUntilResolved(() => {
    if (typeof window === 'undefined') return;
    const token = sessionStorage.getItem('token');
    // eslint-disable-next-line consistent-return
    return token;
  });

  const HeaderValues = [
    {
      width: '20%',
      label: 'Booking #',
    },
    {
      width: '10%',
      label: 'Date & Time',
    },
    {
      width: '18%',
      label: 'Passengers',
    },
    {
      width: '27%',
      label: 'Pick-Up & Drop Off',
    },
    {
      width: '20%',
      label: 'Vehicle',
    },
    {
      width: '20%',
      label: 'Cost',
    },
    {
      width: '25%',
      label: 'Status & Action',
    },
  ];

  useEffect(() => {
    setShowNewBooking(isShowNewBooking);
    setNewBooking(isShowNewBooking);
  }, [isShowNewBooking, setNewBooking]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get('param');
    if (paramValue === 'new-booking') {
      setShowNewBooking(true);
    }
    router.refresh();
  }, [router]);

  useEffect(() => {
    async function getBookings() {
      setShowLoader(true);
      const response = await api.get('/booking?ride_status=u');
      if (response?.data?.length > 0) {
        setUserBooking(response.data);
        setFilterBooking(response.data);
      } else {
        setUserBooking(null);
        setFilterBooking(null);
      }
      setShowLoader(false);
    }
    if (isTokenResolved) {
      getBookings();
    }
  }, [isTokenResolved]);

  async function getSearchDataUsingDate(searchdate) {
    console.log(`serach Date = ${searchdate}`);
    const isoTime = new Date(searchdate).toDateString();
    // const date = `${isoTime.split('T')[0]}T00:00:00.000Z`;

    let url;
    // if (finishedBooking) { url = `/booking?travel_date=${isoTime}&ride_status=f`; }
    // else { url = `/booking?travel_date=${isoTime}&ride_status=u`; }
    if (finishedBooking) {
      url = `/booking?to_date=${isoTime}&from_date=${isoTime}&ride_status=f`;
    } else {
      url = `/booking?to_date=${isoTime}&from_date=${isoTime}&ride_status=u`;
    }
    const response = await api.get(url);
    if (response.data.length > 0) {
      setUserBooking(response.data);
      setFilterBooking(response.data);
    } else {
      setUserBooking(null);
      setFilterBooking(null);
      if (!finishedBooking) setNoBookingMessage(`No Bookings on - ${new Date(searchdate).toDateString()}`);
    }
  }

  async function getSearchByText(searchText) {
    const keysToSearchIn = [
      'booker_email_id',
      'booker_fname',
      'booker_lname',
      'booker_mobile_no',
      'drop_location',
      'passenger_flight_no',
      'pickup_location',
      'preferred_veh_cat_desc',
      'preferred_veh_cat_name',
      'provided_veh_cat_name',
      'travel_date',
      'booking_ref_no',
      'ride_status',
    ];

    const filteredUsers = userBookings?.filter((user) => keysToSearchIn.some((key) => user[key]?.toLowerCase().includes(searchText.toLowerCase())));
    setFilterBooking(filteredUsers);
    setShowLoader(false);
  }
  async function showFinishedBooking() {
    setShowLoader(true);
    setFinishedBooking(true);
    const response = await api.get('/booking?ride_status=f');
    if (response?.data?.length > 0) {
      setUserBooking(response.data);
      setFilterBooking(response.data);
    } else {
      setUserBooking(null);
      setFilterBooking(null);
    }
    setShowLoader(false);
    setNoBookingMessage('No Finished Bookings to show');
  }

  function filterByDate(filter) {
    setFilterBooking(null);
    let filterData;
    if (filter === 'oldtonew') {
      filterData = userBookings.sort(
        (a, b) => new Date(a.travel_date) - new Date(b.travel_date),
      );
    } else {
      filterData = userBookings.sort(
        (a, b) => new Date(b.travel_date) - new Date(a.travel_date),
      );
    }
    setFilterBooking([...filterData]);
  }

  async function showUpcomingBooking() {
    setShowLoader(true);
    setFinishedBooking(false);
    const response = await api.get('/booking?ride_status=u');
    if (response?.data?.length > 0) {
      setUserBooking(response.data);
      setFilterBooking(response.data);
    } else {
      setUserBooking(null);
      setFilterBooking(null);
      setNoBookingMessage('No Upcoming Bookings to show');
    }
    setShowLoader(false);
  }

  const removeQueryParam = () => {
    setShowNewBooking(false);
    setNewBooking(false);
    router.push('/booking-management');
  };

  const sendMail = async (mailBookingId, regionId) => {
    setSendMailLoader(mailBookingId);
    const payload = {
      mail_type: 'CUSTOMER_BOOKING_DETAILS',
      display: false,
      download: false,
      region_id: regionId,
    };

    const response = await api.post(`/mailer/mail/${mailBookingId}`, payload);
    setSendMailLoader('');
    if (response?.data?.status === 1) {
      toast.success(
        response?.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    } else {
      setSendMailLoader('');
      toast.error(
        'Mail send failed.',
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    }
  };

  return (
    <>
      <ToastContainer
        limit={1}
        position="top-right"
        // autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="2xl:px-[100px] lg:px-4 xl:py-10 pt-8 pb-2 md:pb-8 w-auto relative !bg-[#233b4d] min-h-screen text-white">
        <div className="mx-auto xl:container h-100 min-h-full">
          <div className="mb-4">
            <H1 className="font-bold md:!text-[32px] tracking-tight sm:pl-0 pl-[14px]">
              {/* <span className='bg-[#bdbcbc] text-black px-3 py-3 rounded-lg text-center'>
              {finishedBooking && !showNewBooking && 'Finished Bookings'}
              {!finishedBooking && !showNewBooking && 'Upcoming Bookings'}
              {showNewBooking && 'Add New Bookings'}
              </span> */}
              {finishedBooking && !showNewBooking && 'Finished Bookings'}
              {!finishedBooking && !showNewBooking && 'Upcoming Bookings'}
              {showNewBooking && 'Add New Bookings'}
            </H1>
          </div>
          {!showNewBooking && (
            <>
              <div className="hidden tabs-container md:block">
                <div className="tabs">
                  <div
                    className={`tab tab-lifted text-white font-semibold ${!finishedBooking && 'tab-active !bg-primary text-white '
                    } !h-12 mr-2`}
                    onClick={showUpcomingBooking}
                  >
                    Upcoming Bookings
                  </div>
                  <div
                    className={`tab tab-lifted text-white font-semibold ${finishedBooking && 'tab-active !bg-primary text-white '
                    } !h-12 mr-2`}
                    onClick={showFinishedBooking}
                  >
                    Finished Bookings
                  </div>
                </div>
              </div>
              <div className="flex mb-4 overflow-hidden rounded-md md:hidden mr-[15px] ml-[15px]">
                <div
                  className={`text-black !text-base sm:!text-lg cursor-pointer px-4 py-4 text-center font-semibold w-1/2 ${!finishedBooking
                    ? '!bg-black text-white'
                    : '!bg-[#E4E4E4] text-black'
                  }`}
                  onClick={showUpcomingBooking}
                >
                  Upcoming
                </div>
                <div
                  className={`text-black !text-base sm:!text-lg cursor-pointer px-4 py-4 text-center font-semibold w-1/2 ${finishedBooking
                    ? '!bg-black text-white'
                    : '!bg-[#E4E4E4] text-black'
                  }`}
                  onClick={showFinishedBooking}
                >
                  Finished
                </div>
              </div>
            </>
          )}

          {!showNewBooking && (
            <div className="px-[15px] pt-[10px] pb-4 md:pb-0 rounded-b-lg flex items-center flex-col relative sm:bg-white min-h-[400px] flex-nowrap overflow-x-auto w-full">
              {showLoader && <Loader />}

              {!showLoader && (
                <>
                  <div className="hidden w-full md:block">
                    <BookingManagementTop
                      showBooking={setShowNewBooking}
                      searchByDate={getSearchDataUsingDate}
                      searchByText={getSearchByText}
                      isFinishedBooking={finishedBooking}
                      filterDate={(filter) => {
                        filterByDate(filter);
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-center w-full gap-4 md:hidden">
                    <div className="flex justify-between">
                      <div className="w-3/5">
                        <BookingSearch
                          getSearchDataUsingText={getSearchByText}
                        />
                      </div>
                      <div className="w-2/5 ml-2 sm:mr-0">
                        <BookingCalender
                          right
                          getSearchDataUsingDate={getSearchDataUsingDate}
                        />
                      </div>
                    </div>
                    <Button
                      className="p-4 py-2 capitalize border btn-block border-gray-800 bg-[#EAEAEA] hover:bg-gray-900 hover:!text-white !text-black !text-[16px]"
                      onClick={() => {
                        setShowNewBooking(true);
                      }}
                    >
                      add new Booking +
                    </Button>
                  </div>
                  {/* {!filterBookings && !showLoader && (
                    <div className="text-center capitalize pt-[15%]">
                      <div className="w-28 h-38 relative">
                        <Image src="/images/global/empty-box.png" fill alt="empty-box" />
                      </div>
                      <h1 className='text-lg !text-black'>{noBookingMessage ? noBookingMessage : "No Bookings to show"}</h1>
                    </div>
                  )} */}
                  {!filterBookings && !showLoader && (
                    <div className="flex flex-col items-center justify-center text-center py-16">

                      <h1 className="text-xl font-semibold sm:text-gray-700 text-white">
                        {noBookingMessage || 'No Bookings to show'}
                      </h1>

                      {noBookingMessage
                        && (
                        <p className="text-sm sm:text-gray-500 text-white mt-2">
                          It looks like you don’t have any bookings yet. You can add a new booking or check back later.
                        </p>
                        )}
                    </div>
                  )}

                  <div className="w-full overflow-x-auto flex-nowrap md:max-h-screen md:min-w-[950px]">
                    {filterBookings && filterBookings.length > 0 ? (
                      <div className="h-12 w-full lg:flex-row justify-between items-center mt-3 uppercase shrink-0 min-w-[900px] overflow-x-auto sticky top-0 z-20 bg-[#F6F6F6] hidden md:flex">
                        {HeaderValues.map((item) => (
                          <div className={`basis-[${item.width}] justify-center box-border text-center px-2`} key={item.label}>
                            <header>
                              <h6 className="text-xs uppercase text-[#797979] font-medium ">
                                {item.label}
                              </h6>
                            </header>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center capitalize">
                        {/* <H1>No Bookings to show</H1> */}
                      </div>
                    )}
                    {filterBookings
                      && filterBookings.map((bookings) => (
                        <div key={bookings.booking_id}>
                          <div className="hidden md:block">
                            <BookingCard
                              item={bookings}
                              isFinished={finishedBooking}
                              sendMail={sendMail}
                              sendMailLoader={sendMailLoader}
                            />
                          </div>
                          <div className="md:hidden">
                            <BookingCardMobile bookings={bookings} />
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          )}
          {showNewBooking && (
            <div className="relative w-full sm:w-[610px] md:w-[700px] lg:w-[900px] xl:w-[1100px] px-6 py-4 pb-12 bg-[#15222c] rounded-3xl mx-auto">
              <div
                className="absolute top-3 z-0 cursor-pointer right-3"
                onClick={removeQueryParam}
              >
                <H1>
                  <IoMdClose />
                </H1>
              </div>

              {/* <div
                className="absolute top-3 z-0 left-3 flex items-center text-primary text-sm font-bold cursor-pointer mb-2 sm:mb-0 2xl:basis-[35%] lg:basis-[387px]"
                onClick={() => { setShowNewBooking(false) }}
              >
                <img
                  src="/rolnew/global/icons/arrow-sm-left.svg"
                  alt="go back"
                  height={20}
                  width={40}
                />
              </div> */}

              <div className={`relative z-10 mt-16 mx-auto ${focus && 'z-50'}`}>
                <BookingProvider>
                  <BookingEngine3
                    setFocus={setFocus}
                    width={width}
                    height={height}
                    parentDivWidth={900}
                  />
                </BookingProvider>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FullPage;
