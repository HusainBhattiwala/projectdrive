/* eslint-disable no-nested-ternary */

'use client';

import {
  useContext, useEffect, useState,
} from 'react';
import Image from 'next/image';
import BookingTop from 'components/corporate/BookingManagement/BookingTop';
import FullPage from 'app/corporate/(auth)/booking/add-new-booking/FullPage';
import api from 'components/utils/api';
import Loader from 'components/shared/Loader';
import H2 from 'components/typography/H2';
import UseDebounce from 'components/addressautocomplete/UseDebounce';
import { toast } from 'react-toastify';
import { UtilityContext } from 'context/UtilityContext';
import ViewFullPage from 'app/corporate/(auth)/booking/view-booking/ViewFullPage';
import { useSocket } from 'context/SocketContext';
import formatDateTime from 'components/utils/formatDateTime';
import dayjs from 'dayjs';
import BookingCard from './BookingCard';
import BookingCardMobile from './BookingCardMobile';

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

function SummaryPage() {
  const {
    showNewBooking, setShowNewBooking, setViewBookingId, setShowViewBooking, showViewBooking, setBookingActivity,
  } = useContext(UtilityContext);

  const [activeTab, setActiveTab] = useState(0);
  const [newBookingId, setNewBookingId] = useState('');
  const [bookingList, setBookingList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [bookingId, setBookingId] = useState('');
  const [dateRange, setDateRange] = useState([]);
  const [userRegion, setUserRegion] = useState({
    region_short_name: 'All',
    region_id: '',
  });
  const debouncedSearchId = UseDebounce(bookingId, 300);
  const debouncedDateRange = UseDebounce(dateRange, 300);
  const [sendMailLoader, setSendMailLoader] = useState('');

  useEffect(() => {
    const filterBooking = async () => {
      let formDate;
      let toDate;
      if (debouncedDateRange && debouncedDateRange[0]) {
        const originalDate = new Date(debouncedDateRange[0]);
        const modifiedDate = new Date(originalDate);
        formDate = modifiedDate.toDateString();
      }
      if (debouncedDateRange && debouncedDateRange[1]) {
        const originalDate = new Date(debouncedDateRange[1]);
        const modifiedDate = new Date(originalDate);
        toDate = modifiedDate.toDateString();
      }
      const response = await api.get(`/corporate/booking?from_date=${encodeURIComponent(formDate || '')}&to_date=${encodeURIComponent(toDate || '')}&region_id=${userRegion?.region_id || ''}&ride_status=${activeTab === 1 ? 't' : 'a'}&search_text=${encodeURIComponent(debouncedSearchId || '')}`);
      if (response?.data?.length > 0) {
        setBookingList(response?.data);
      } else {
        setBookingList([]);
      }
      setShowLoader(false);
    };
    setShowLoader(true);
    filterBooking();
  }, [debouncedSearchId, debouncedDateRange, userRegion, activeTab]);

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

  // Auto update
  const newSocket = useSocket();
  useEffect(() => {
    const removeBookingById = async (bookingRef) => {
      const index = bookingList.findIndex((booking) => booking?.booking_ref_no === bookingRef);
      bookingList.splice(index, 1);
      setBookingList(bookingList);
    };
    const updateBooking = async (bookingRef, urlParem) => {
      const index = bookingList.findIndex((booking) => booking?.booking_ref_no === bookingRef);
      if (index !== -1) {
        const response = await api.get(urlParem);
        const responseData = response?.data[0];
        if (responseData) {
          const updatedList = [...bookingList];
          updatedList[index] = responseData;
          setBookingList(updatedList);
        } else {
          bookingList.splice(index, 1);
          setBookingList(bookingList);
        }
      }
    };
    const addNewBooking = async (urlParem) => {
      const response = await api.get(urlParem);
      const responseData = response?.data[0];
      if (responseData && bookingList.some((item) => item?.booking_id !== responseData.booking_id)) {
        const updatedList = [...bookingList, responseData];
        const sortedList = updatedList.sort((a, b) => {
          const prevTimeStamp = dayjs(formatDateTime(a.travel_date), 'DD/MM/YYYY HH:mm').unix();
          const nextTimeStamp = dayjs(formatDateTime(b.travel_date), 'DD/MM/YYYY HH:mm').unix();
          return prevTimeStamp - nextTimeStamp;
        });
        setBookingList(sortedList);
        setNewBookingId(responseData?.booking_ref_no);
      }
    };

    if (newSocket) {
      newSocket.on('notification', (notification) => {
        const newNotification = JSON.parse(notification);
        if (newNotification.bookingRef) {
          const urlParem = (`/corporate/booking?from_date=&to_date=&region_id=&ride_status=&search_text=${encodeURIComponent(newNotification?.bookingRef || '')}`);
          if (newNotification?.notificationType === 'UPDATE') {
            updateBooking(newNotification?.bookingRef, urlParem);
          } else if (newNotification?.notificationType === 'CREATE') {
            addNewBooking(urlParem);
          } else if (newNotification?.notificationType === 'DELETE') {
            removeBookingById(newNotification?.bookingRef);
          }
        }
      });
    }
  }, [bookingList, newSocket, setBookingList]);
  // Auto update
  return (
    <div className={`pb-2 md:pb-8 w-auto relative text-gray-700 ${showNewBooking || showViewBooking ? 'w-full' : 'min-w-[1000px]'} `}>
      {
        showNewBooking || showViewBooking
          ? showNewBooking ? <FullPage />
            : showViewBooking && <ViewFullPage />
          : (
            <>
              <BookingTop dateRange={dateRange} setDateRange={setDateRange} bookingId={bookingId} setBookingId={setBookingId} userCountry={userRegion} setUserCountry={setUserRegion} activeTab={activeTab} setActiveTab={setActiveTab} setShowNewBooking={setShowNewBooking} />
              {
              showLoader && (
              <div className="flex items-center justify-center bg-white">
                <Loader className="!w-16 !h-16" />
              </div>
              )
            }
              <div className="px-[15px] pb-4 md:pb-0 rounded-lg flex items-center flex-col relative bg-white min-h-[400px] flex-nowrap mt-0 w-full">
                {
                bookingList.length === 0 && !showLoader && (
                  <div className="flex items-center justify-center flex-col min-h-[35vh] my-auto">
                    <div className="w-28 h-28 relative">
                      <Image src="/images/global/empty-box.png" fill alt="empty-box" />
                    </div>
                    <H2>No Data Available</H2>
                  </div>
                )
              }
                <div className="w-full overflow-x-auto flex-nowrap">
                  {
                    bookingList.length > 0
                  && (
                  <>
                    <div className="md:block">
                      <div className="w-full flex justify-between items-center mt-3 uppercase shrink-0 overflow-x-auto sticky top-0 bg-white py-4">
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
                      {
                        bookingList.map((item) => (
                          <BookingCard item={item} key={item?.booking_id} sendMail={sendMail} sendMailLoader={sendMailLoader} setViewBookingId={setViewBookingId} setShowViewBooking={setShowViewBooking} setBookingActivity={setBookingActivity} newBookingId={newBookingId} setNewBookingId={setNewBookingId} />
                        ))
                      }
                    </div>
                    <div className="hidden">
                      <BookingCardMobile />
                    </div>
                  </>
                  )
                  }
                </div>
              </div>
            </>
          )
      }
    </div>
  );
}

export default SummaryPage;
