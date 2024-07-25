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
import BookingEngine2 from '../Booking/BookingEngine2';
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
    const isoTime = new Date(searchdate).toDateString();
    // const date = `${isoTime.split('T')[0]}T00:00:00.000Z`;
    let url;
    if (finishedBooking) {
      url = `/booking?travel_date=${isoTime}&ride_status=f`;
    } else {
      url = `/booking?travel_date=${isoTime}&ride_status=u`;
    }
    const response = await api.get(url);
    if (response.data.length > 0) {
      setUserBooking(response.data);
      setFilterBooking(response.data);
    } else {
      setUserBooking(null);
      setFilterBooking(null);
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

    const filteredUsers = userBookings.filter((user) => keysToSearchIn.some((key) => user[key]?.toLowerCase().includes(searchText.toLowerCase())));
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
      <div className="2xl:px-[120px] lg:px-4 xl:py-10 pt-8 pb-2 md:pb-8 w-auto relative bg-[#FEF8F4]">
        <div className="mx-auto xl:container">
          <div className="mb-8">
            <H1 className="font-bold text-primary md:!text-[32px] tracking-tight sm:pl-0 pl-[14px]">
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
                    className={`tab tab-lifted text-black font-semibold ${
                      !finishedBooking && 'tab-active !bg-primary text-white '
                    } !h-12 mr-2`}
                    onClick={showUpcomingBooking}
                  >
                    Upcoming Bookings
                  </div>
                  <div
                    className={`tab tab-lifted text-black font-semibold ${
                      finishedBooking && 'tab-active !bg-primary text-white '
                    } !h-12 mr-2`}
                    onClick={showFinishedBooking}
                  >
                    Finished Bookings
                  </div>
                </div>
              </div>
              <div className="flex mb-4 overflow-hidden rounded-md md:hidden mr-[15px] ml-[15px]">
                <div
                  className={`text-black !text-base sm:!text-lg cursor-pointer px-4 py-4 text-center font-semibold w-1/2 ${
                    !finishedBooking
                      ? '!bg-primary text-white'
                      : '!bg-[#E4E4E4] text-primary'
                  }`}
                  onClick={showUpcomingBooking}
                >
                  Upcoming
                </div>
                <div
                  className={`text-black !text-base sm:!text-lg cursor-pointer px-4 py-4 text-center font-semibold w-1/2 ${
                    finishedBooking
                      ? '!bg-primary text-white'
                      : '!bg-[#E4E4E4] text-primary'
                  }`}
                  onClick={showFinishedBooking}
                >
                  Finished
                </div>
              </div>
            </>
          )}

          {!showNewBooking && (
            <div className="px-[15px] pt-[10px] pb-4 md:pb-0 rounded-lg flex items-center flex-col relative sm:bg-white min-h-[400px] flex-nowrap overflow-x-auto w-full">
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
                      className="p-4 py-2 capitalize border btn-block border-primary bg-[#EAEAEA] hover:btn-primary hover:!text-white !text-primary !text-[16px]"
                      onClick={() => {
                        setShowNewBooking(true);
                      }}
                    >
                      add new Booking +
                    </Button>
                  </div>
                  {!filterBookings && !showLoader && (
                    <div className="text-center capitalize pt-[15%]">
                      <H1>No Bookings to show</H1>
                    </div>
                  )}
                  <div className="w-full overflow-x-auto flex-nowrap md:max-h-screen md:min-w-[950px]">
                    {filterBookings && filterBookings.length > 0 ? (
                      <div className="h-12 w-full lg:flex-row justify-between items-center mt-3 uppercase shrink-0 min-w-[900px] overflow-x-auto sticky top-0 z-20 bg-[#F6F6F6] hidden md:flex">
                        {HeaderValues.map((item) => (
                          <div className={`basis-[${item.width}] justify-center box-border text-center px-2`} key={item.label}>
                            <header>
                              <h6 className="text-xs uppercase text-[#797979] font-medium">
                                {item.label}
                              </h6>
                            </header>
                          </div>
                        ))}
                      </div>
                    // <div className="h-12 w-full lg:flex-row justify-between items-center mt-3 uppercase shrink-0 min-w-[900px] overflow-x-auto sticky top-0 z-20 bg-[#F6F6F6] hidden md:flex">
                    //   <div className="basis-[12%] items-center justify-center box-border px-3 text-center">
                    //     <header>
                    //       <h6 className="text-sm font-bold text-black uppercase ">
                    //         Job id &amp; Type
                    //       </h6>
                    //     </header>
                    //   </div>
                    //   <div className="basis-[18%] items-center justify-center box-border px-3 text-center">
                    //     <header>
                    //       <h6 className="text-sm font-bold text-black uppercase">
                    //         Date &amp; Time
                    //       </h6>
                    //     </header>
                    //   </div>
                    //   <div className="basis-[12%] items-center justify-center box-border px-3 text-center">
                    //     <header>
                    //       <h6 className="text-sm font-bold text-black uppercase">
                    //         Details
                    //       </h6>
                    //     </header>
                    //   </div>
                    //   <div className="basis-[18%] items-center justify-center box-border px-3 text-center">
                    //     <header>
                    //       <h6 className="text-sm font-bold text-black uppercase">
                    //         Pick-Up &amp; Drop
                    //       </h6>
                    //     </header>
                    //   </div>
                    //   <div className="basis-[16%] items-center justify-center box-border px-3 text-center">
                    //     <header>
                    //       <h6 className="text-sm font-bold text-black uppercase">
                    //         Vehicle
                    //       </h6>
                    //     </header>
                    //   </div>
                    //   <div className="basis-[12%] items-center justify-center box-border px-3 text-center">
                    //     <header>
                    //       <h6 className="text-sm font-bold text-black uppercase">
                    //         Cost
                    //       </h6>
                    //     </header>
                    //   </div>
                    //   <div className="basis-[12%] items-center justify-center box-border px-3 text-center">
                    //     <header>
                    //       <h6 className="text-sm font-bold text-black uppercase">
                    //         {finishedBooking ? 'status' : 'status'}
                    //       </h6>
                    //     </header>
                    //   </div>
                    // </div>
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
            <div className="relative px-6 py-4 pb-12 bg-[#1e1d1d] bg-opacity-20">
              <div
                className="absolute top-0 z-30 cursor-pointer right-3"
                onClick={removeQueryParam}
              >
                <H1>
                  <IoMdClose />
                </H1>
              </div>
              <div className="relative z-10 mt-12">
                <BookingProvider>
                  <BookingEngine2 />
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
