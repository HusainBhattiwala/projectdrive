'use client';

import {
  useContext, useEffect, useRef, useState,
} from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { CgArrowsExchangeAlt, CgClose } from 'react-icons/cg';
import { FiClock } from 'react-icons/fi';
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import { toast } from 'react-toastify';
import useOnClickOutside from 'hooks/useOnClickOutside';
import BookingContext from 'context/BookingContext';
import gtagReportConversion from 'components/utils/trackGTag';
import { Pic } from 'components/ui/Pic';
import 'react-toastify/dist/ReactToastify.css';
import Select from '../FormInput/Select';
import CountriesAutocomplete from '../addressautocomplete/CountriesAutocomplete';
import Datepicker from '../shared/DatePicker';
import H4 from '../typography/H4';
import P from '../typography/P';
import Button from '../ui/Button';
import api from '../utils/api';

function BookingEngine() {
  const {
    passengers,
    selectedDateTime,
    setselectedDateTime,
    selectedReturnDateTime,
    setSelectedReturnDateTime,
    setMinReturnDatetime,
    bookingType,
    setBookingType,
    bookingDuration,
    userPickupLocation,
    setUserPickupLocation,
    setUserDropLocation,
    userDropLocation,
    minDatetime,
    minReturnDatetime,
    setRideDuration,
    rideDuration,
    getDistance,
    setMinute,
    setNewDate,
    addHours,
  } = useContext(BookingContext);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const pathName = usePathname();
  // date picker
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [showReturnDatepicker, setShowReturnDatepicker] = useState(false);

  // Return data
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [showPickupError, setShowPickupError] = useState(false);
  const [showDropError, setShowDropError] = useState(false);
  const [showDurationError, setshowDurationError] = useState(false);
  const [showDateError, setShowDateError] = useState(false);
  const [showBtnLoading, setShowBtnLoading] = useState(false);
  const [addressObject, setAddressObject] = useState(null);
  const [showReturnDateLoader, setshowReturnDateLoader] = useState(false);

  const swapPickDrop = () => {
    setUserPickupLocation(userDropLocation);
    setUserDropLocation(userPickupLocation);
  };

  useEffect(() => {
    sessionStorage.removeItem('isCarSelected');
    sessionStorage.removeItem('selectedfleet');
  }, []);

  function toggleDatePicker() {
    setShowDatepicker(!showDatepicker);
    setShowDateError(false);
  }
  function setDateTime() {
    setselectedDateTime((prev) => ({
      ...prev,
      dateChanged: true,
    }));
    setShowDatepicker(false);
  }
  function removeDateTime() {
    setselectedDateTime((prev) => ({
      ...prev,
      dateChanged: false,
    }));
    setShowDatepicker(false);
  }
  function setReturnDateTime() {
    setSelectedReturnDateTime((prev) => ({
      ...prev,
      dateChanged: true,
    }));
    setShowReturnDatepicker(false);
  }

  function removeReturnDateTime() {
    setSelectedReturnDateTime((prev) => ({
      ...prev,
      dateChanged: false,
    }));
    setShowReturnDatepicker(false);
  }

  function toggleReturnDatePicker() {
    setShowReturnDatepicker(!showReturnDatepicker);
  }
  const toggleShowReturnDate = async () => {
    if (
      selectedDateTime.dateChanged
      && userPickupLocation
      && userDropLocation
    ) {
      if (selectedReturnDateTime.dateChanged) {
        toggleReturnDatePicker();
      } else {
        setshowReturnDateLoader(true);
        const distance = await getDistance();
        // setTotalDuration(distance.duration);
        const time = `${selectedDateTime.hour}:${selectedDateTime.minute}`;

        let selectedDayTime = `${
          selectedDateTime.selectedDate.getMonth() + 1
        }/${selectedDateTime.selectedDate.getDate()}/${selectedDateTime.selectedDate.getFullYear()} ${time}`;

        selectedDayTime = new Date(selectedDayTime);

        selectedDayTime.setMinutes(
          selectedDayTime.getMinutes() + distance.duration,
        );
        const newReturnDate = selectedDayTime;
        const minReturn = {
          minDate: newReturnDate,
          minHour: newReturnDate.getHours(),
          minMinute: setMinute(newReturnDate),
        };
        if (minReturn.minMinute > 55) {
          minReturn.minMinute = 55;
        }
        const selectedReturn = {
          hour: minReturn.minHour,
          minute: minReturn.minMinute,
          date: newReturnDate,
          selectedDate: newReturnDate,
          dateChanged: false,
        };

        setMinReturnDatetime({ ...minReturn });
        setSelectedReturnDateTime({ ...selectedReturn });
        setShowReturnDate(!showReturnDate);
        setshowReturnDateLoader(false);
        toggleReturnDatePicker();
      }
    } else if (!userPickupLocation) {
      setShowPickupError(true);
    } else if (!userDropLocation && bookingType === 'transfers') {
      setShowDropError(true);
    } else toggleDatePicker();
  };
  const {
    selectedDate,
    hour,
    minute,
  } = selectedDateTime;
  const {
    selectedDate: returnSelectedDate,
    hour: returnHour,
    minute: returnMinute,
    // daytime: returnDaytime,
  } = selectedReturnDateTime;

  const monthName = new Date(selectedDate).toLocaleString('en-us', {
    month: 'short',
  });
  const selectedDay = new Date(selectedDate).getDate();
  const selectedYear = new Date(selectedDate).getFullYear();

  const returnMonthName = new Date(returnSelectedDate).toLocaleString('en-us', {
    month: 'short',
  });
  const returnSelectedDay = new Date(returnSelectedDate).getDate();
  const returnSelectedYear = new Date(returnSelectedDate).getFullYear();

  const nthNumber = (number) => {
    if (number > 3 && number < 21) return 'th';
    switch (number % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  function getHour(selectedHour) {
    if (typeof selectedHour === 'number' && selectedHour < 9) {
      return `0${selectedHour}`;
    }
    if (typeof selectedHour === 'string' && selectedHour.length === 0) {
      return `0${selectedHour}`;
    }
    return selectedHour;
  }

  const {
    adult, children, infant, luggage,
  } = passengers;

  const userDatePicker = useRef();
  const userReturnDatePicker = useRef();
  useOnClickOutside(userDatePicker, () => setShowDatepicker(false));
  useOnClickOutside(userDatePicker, () => setShowDatepicker(false));
  useOnClickOutside(userReturnDatePicker, () => setShowReturnDatepicker(false));

  function onChange(e) {
    if (e.target.value !== null) {
      setRideDuration(e.target.value);
      setshowDurationError(false);
    }
  }
  async function getFleetObject(distance) {
    setAddressObject({
      pickupaddress: userPickupLocation.address,
      pickupzone: userPickupLocation?.zoneId,
      pickuplatlng: userPickupLocation.latLng,
      pickupairport: userPickupLocation.isAirport,
      pickupdate: `${selectedDay} ${monthName} ${selectedYear}`,
      pickuptime: `${getHour(hour)}:${minute}`,
      adult,
      children,
      infant,
      luggage,
      bookingtype: bookingType,
      pickuplocationid: userPickupLocation.locationid,
      pickuppostalcode: userPickupLocation.postal_code,
      pickuplocationtype: userPickupLocation.locationtype,
      regionId: userPickupLocation.regionid,
    });
    if (userDropLocation !== null) {
      setAddressObject((prev) => ({
        ...prev,
        dropaddress: userDropLocation.address,
        droplatlng: userDropLocation.latLng,
        dropairport: userDropLocation.isAirport,
        droplocationid: userDropLocation.locationid,
        droppostalcode: userDropLocation.postal_code,
        droplocationtype: userDropLocation.locationtype,
        dropzone: userDropLocation?.zoneId,
      }));
    }
    // if (bookingType === 'transfers') {
    if (distance !== null) {
      setAddressObject((prev) => ({
        ...prev,
        distance: Number(distance.distance.split(' ')[0]),
        duration: distance.duration,
      }));
    }
    // }
    if (bookingType !== 'transfers') {
      setAddressObject((prev) => ({
        ...prev,
        rideduration: rideDuration,
      }));
    }
    if (selectedReturnDateTime.dateChanged) {
      setAddressObject((prev) => ({
        ...prev,
        returndate: `${returnSelectedDay} ${returnMonthName} ${returnSelectedYear}`,
        returntime: `${getHour(returnHour)}:${returnMinute}`,
      }));
    }
    return addressObject;
  }

  async function fetcTariffData(url, payload) {
    const response = await api.post(url, payload);
    return response;
  }

  useEffect(() => {
    if (addressObject !== null) {
      Cookies.set('searchdata', JSON.stringify(addressObject), {
        expires: 0.5,
      });
      sessionStorage.setItem('storesearchdata', JSON.stringify(addressObject));
      sessionStorage.setItem('currentpage', pathName);
    }
  }, [addressObject, pathName]);

  async function goToFleetPage(distance) {
    let payload;
    await getFleetObject(distance);
    if (userPickupLocation?.zoneId?.length > 0 || userDropLocation?.zoneId?.length > 0) {
      const distanceKM = distance ? distance?.distance.split(' ')[0] : '0';
      const distanceInNumber = parseFloat(distanceKM.replace(/,/g, ''));
      const factor = 0.621371;
      const distanceInMiles = Math.round(distanceInNumber * factor);
      if (bookingType === 'transfers') {
        payload = {
          from_location: userPickupLocation.locationid || null,
          region_id: userPickupLocation?.regionid || null,
          to_location: userDropLocation.locationid || null,
          adult_seat_count: Number(adult),
          luggage_count: Number(luggage),
          round_trip: selectedReturnDateTime.dateChanged,
          user_currency: 'INR',
          distance: Number(distanceInMiles),
          destination_zone_id: userDropLocation?.zoneId,
          source_zone_id: userPickupLocation?.zoneId,
          way_location: [],
          user_type: 'C',
        };
      } else {
        payload = {
          from_location: userPickupLocation?.locationid || null,
          to_location: userDropLocation?.locationid || null,
          region_id: userPickupLocation?.regionid,
          hours: Number(rideDuration.split(' ')[0]),
          distance: Number(distanceInMiles),
          adult_seat_count: Number(adult),
          luggage_count: Number(luggage),
          user_currency: 'INR',
          destination_zone_id: userDropLocation?.zoneId,
          source_zone_id: userPickupLocation?.zoneId,
          way_location: [],
          user_type: 'C',
        };
      }
      const response = await fetcTariffData('/tariff', payload).catch(() => {
        setShowBtnLoading(false);
      });
      if (response.data.length > 0) {
        sessionStorage.setItem('fleetlist', JSON.stringify(response.data));
        router.push('/fleet-availability');
      } else {
        toast.error('No Fleet Available', {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
        setShowBtnLoading(false);
      }
    } else {
      toast.error('Any of the address must be inside the coverage zone.', {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
      setShowBtnLoading(false);
    }
  }

  const onSubmit = async () => {
    if (userPickupLocation === null) {
      setShowPickupError(true);
    } else if (
      (!userDropLocation || !userDropLocation.address)
      && bookingType === 'transfers'
    ) {
      setShowDropError(true);
    } else if (rideDuration === null && bookingType !== 'transfers') {
      setshowDurationError(true);
    } else if (!selectedDateTime.dateChanged) {
      setShowDateError(true);
    } else if (
      userDropLocation?.latLng === userPickupLocation.latLng
      && bookingType === 'transfers'
    ) {
      toast.error("Both the pickup and drop-off can't be the same.", {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
      setShowBtnLoading(false);
    } else {
      setShowBtnLoading(true);
      gtagReportConversion('conversion');
      let distance;
      if (userDropLocation && userDropLocation.address) {
        distance = await getDistance();
      }
      if (bookingType === 'transfers') {
        if (userDropLocation?.regionid === userPickupLocation.regionid) {
          if (distance?.distance) {
            goToFleetPage(distance);
          } else {
            toast.error(
              'Distance not found.',
              {
                autoClose: 3000,
                theme: 'colored',
              },
            );
            toast.clearWaitingQueue();
          }
        } else {
          toast.error(
            'Both the pickup and drop-off points must be in the same region.',
            {
              autoClose: 3000,
              theme: 'colored',
            },
          );
          toast.clearWaitingQueue();
          setShowBtnLoading(false);
        }
      } else {
        goToFleetPage(distance || null);
      }
    }
  };

  function changeDate() {
    setShowReturnDate(false);
    selectedReturnDateTime.dateChanged = false;
  }

  useEffect(() => {
    const getUserCurrency = async (regionid) => {
      const response = await api.get(`/regions?region_id=${regionid}`);
      if (response?.data?.region_currency_text) {
        let date = new Date().toLocaleString('en-US', { timeZone: response?.data?.region_time_zone || 'Europe/London' });
        date = new Date(date);
        const newDate = addHours(date, 2);
        setNewDate(newDate);
      }
    };
    const data = sessionStorage.getItem('storesearchdata');
    if (userPickupLocation?.regionid && !data) {
      getUserCurrency(userPickupLocation?.regionid);
    }
  }, [addHours, setNewDate, userPickupLocation]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto lg:container text-gray-700">
      <div className="relative flex flex-col items-center rounded-md text-gray-700">
        <div className="relative w-full bg-white sm:rounded-md sm:!rounded-tl-none shadow-md text-gray-700">
          <div className="absolute flex justify-between uppercase rounded-md sm:-top-10 -top-5 sm:flex-row md:items-center sm:left-0 sm:translate-x-0 left-2/4 -translate-x-2/4">
            <Button
              onClick={() => {
                setBookingType('transfers');
              }}
              className={`${
                bookingType === 'transfers'
                  ? 'bg-white !text-primary hover:bg-white hover:text-primary'
                  : 'bg-black text-white hover:bg-black'
              } rounded-l-lg sm:rounded-tl-md uppercase font-[600] sm:!text-[15px] !text-[14px] rounded-none sm:!rounded-bl-none sm:border-0 border-[#6b6b6b] w-[120px] h-[40px]`}
            >
              Transfers
            </Button>
            <Button
              onClick={() => {
                setBookingType('hourly');
                setShowDropError(false);
              }}
              className={`${
                bookingType === 'hourly'
                  ? 'bg-white !text-primary hover:bg-white hover:text-primary'
                  : 'bg-black text-white hover:bg-black'
              } rounded-r-lg sm:rounded-tr-md sm:!rounded-br-none uppercase font-[600] sm:!text-[15px] !text-[14px] rounded-none sm:border-0 border-[#6b6b6b] border-[0.5px] w-[120px] h-[40px]`}
            >
              Hourly
            </Button>
          </div>
          <div className="p-3 pt-10 md:p-8 text-gray-700">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 relative gap-4 xl:w-[120%] lg:w-[110%] text-gray-700">
                <div
                  className={`${
                    bookingType === 'transfers' ? '' : ''
                  }  border shadow h-28 rounded-md p-1`}
                >
                  <div className="relative flex flex-col p-2">
                    <div className="flex items-center">
                      <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                        <Pic
                          src="/images/icons/location_gray.svg"
                          alt="location"
                        />
                      </div>

                      <H4 className="pl-2 !font-medium !text-[14px] !text-[#8B8585]">
                        FROM
                      </H4>
                    </div>

                    <div className="h-full mt-2 text-gray-700">
                      <CountriesAutocomplete
                        placeholder="Pick-up address, airport, hotel..."
                        setUserPlace={(data) => {
                          setUserPickupLocation(data);
                          removeDateTime();
                          removeReturnDateTime();
                        }}
                        className="!text-gray-700"
                        defaultValue={userPickupLocation?.address}
                        locationError={() => {}}
                        errorLabel={() => {}}
                        name="pickuploaction"
                        errors={showPickupError}
                        setError={setShowPickupError}
                      />
                    </div>
                  </div>
                </div>
                {/* {bookingType === 'transfers' && ( */}
                <div className="relative items-center justify-center p-1 border rounded-md shadow h-28 text-gray-700">
                  <div
                    className="btn btn-circle btn-xs z-20 shadow absolute text-gray-700 md:-left-[25px] left-[50%] md:!top-[34px] -translate-x-1/2 md:translate-x-0 !-top-[25px] md:rotate-0 rotate-90"
                    style={{ height: '2rem', width: '2rem' }}
                  >
                    <CgArrowsExchangeAlt size="1.5rem" onClick={swapPickDrop} />
                  </div>
                  <div className="relative flex flex-col p-2 text-gray-700">
                    <div className="flex items-center">
                      <div className="md:h-[10px] md:w-[10px] h-[16px] w-[12px]">
                        <Pic
                          src="/images/icons/location_gray.svg"
                          alt="location"
                        />
                      </div>
                      <H4 className="pl-2 !font-medium !text-[14px] !text-[#8B8585]">
                        TO
                      </H4>
                    </div>

                    <div className="mt-2 text-gray-700">
                      <CountriesAutocomplete
                        placeholder="Drop-off address, airport, hotel..."
                        // setUserPlace={setUserDropLocation}
                        setUserPlace={(data) => {
                          setUserDropLocation(data);
                          removeReturnDateTime();
                          removeDateTime();
                        }}
                        className="!text-gray-700"
                        defaultValue={userDropLocation?.address}
                        readOnly={false}
                        locationError={() => {}}
                        errorLabel={() => {}}
                        name="droplocation"
                        errors={showDropError}
                        setError={setShowDropError}
                      />
                    </div>
                  </div>
                </div>
                {/* )} */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-4 xl:w-[80%] lg:w-[90%] lg:ml-auto !text-gray-700">
                {
                  selectedDateTime && (
                    <div
                      className="border shadow h-28 rounded-md p-1 relative] lg:w-[100%] relative"
                      ref={userDatePicker}
                    >
                      <div className="flex flex-col justify-center p-2 text-neutral">
                        <div className="flex flex-col">
                          <div
                            className="flex items-center text-[#797979] cursor-pointer"
                            onClick={toggleDatePicker}
                          >
                            <div className="md:h-[11px] md:w-[11px] h-[18px] w-[14px]">
                              <Pic
                                src="/images/icons/calender_gray.svg"
                                alt="calender"
                              />
                            </div>
                            <H4 className="flex items-center uppercase pl-2 !font-medium !text-[14px] !text-[#8B8585]">
                              Date and Time
                              {/* <FaAngleDown className="ml-1 text-lg text-primary" /> */}
                            </H4>
                            <IoIosArrowDown className="ml-auto font-bold text-primary sm:ml-1 sm:font-normal" />
                          </div>

                          {!selectedDateTime.dateChanged && (
                          <div onClick={toggleDatePicker}>
                            <P className="!text-[14px] !text-gray-500 pt-2 mt-1 cursor-pointer">
                              Add date of travel
                            </P>
                          </div>
                          )}
                          {showDateError && (
                          <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
                            Required
                          </P>
                          )}

                          {selectedDateTime.dateChanged && (
                          <div className="flex mt-3" onClick={toggleDatePicker}>
                            <H4 className="flex justify-start mt-1 !text-[14px] text-black">
                              {`${selectedDay}${nthNumber(
                                selectedDay,
                              )}  ${monthName}, ${selectedYear}`}
                            </H4>
                            <span className="-mt-[2px] mx-2 text-black">|</span>
                            <P
                              className="!text-[14px] uppercase text-black"
                              onClick={toggleDatePicker}
                            >
                              {' '}
                              {`${getHour(hour)}:${minute}`}
                            </P>
                          </div>
                          )}
                        </div>
                      </div>
                      {showDatepicker && minDatetime && (
                      <Datepicker
                        minDate={minDatetime.minDate}
                        selectedDateTime={selectedDateTime}
                        minDatetime={minDatetime}
                        compareWith={minDatetime.minDate}
                        setselectedDateTime={setselectedDateTime}
                        setDateTime={setDateTime}
                        onChange={changeDate}
                      />
                      )}
                    </div>
                  )
                }

                {bookingType === 'transfers' && (
                  <div
                    className="relative p-1 ml-0 border rounded-md shadow h-28"
                    ref={userReturnDatePicker}
                  >
                    <div className="flex flex-col justify-center p-2 text-neutral">
                      <div className="flex flex-col">
                        <div
                          className="flex items-center text-gray-700 cursor-pointer"
                          onClick={toggleShowReturnDate}
                        >
                          <div className="md:h-[11px] md:w-[11px] h-[18px] w-[14px]">
                            <Pic
                              src="/images/icons/calender_gray.svg"
                              alt="calender"
                            />
                          </div>
                          <H4 className="flex items-center uppercase pl-2 !font-medium !text-[14px] text-gray-700">
                            Return Journey
                          </H4>
                          <IoIosArrowDown className="ml-auto font-bold text-primary sm:ml-1 sm:font-normal" />
                        </div>

                        {!selectedReturnDateTime.dateChanged && (
                          <>
                            <div className="relative py-2 rounded-md cursor-pointer top-2 hover:bg-gray-200">
                              <span
                                className="text-xs text-center text-primary rounded-md flex items-center justify-center w-9/12 min-w-max mx-auto h-full !font-semibold"
                                onClick={toggleShowReturnDate}
                              >
                                + Add Return
                              </span>
                            </div>
                            {showReturnDateLoader && (
                              <div role="status" className="absolute right-0">
                                <svg
                                  aria-hidden="true"
                                  className="inline !bg-white w-6 h-6 mr-2 text-gray-200 animate-spin fill-primary"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                                <span className="sr-only">Loading...</span>
                              </div>
                            )}
                          </>
                        )}
                        {(showReturnDate
                          || selectedReturnDateTime.dateChanged) && (
                          // eslint-disable-next-line react/jsx-no-useless-fragment
                          <>
                            {selectedReturnDateTime.dateChanged && (
                              <div className="flex items-center justify-between mt-3">
                                <div className="flex">
                                  <H4 className="flex justify-start mt-1 !text-[14px] text-black">
                                    {`${returnSelectedDay}${nthNumber(
                                      returnSelectedDay,
                                    )}  ${returnMonthName}, ${returnSelectedYear}`}
                                  </H4>
                                  <span className="-mt-[2px] mx-2 text-black">
                                    |
                                  </span>
                                  <P
                                    className="!text-[14px] uppercase text-black"
                                    onClick={toggleShowReturnDate}
                                  >
                                    {' '}
                                    {`${getHour(returnHour)}:${returnMinute}`}
                                  </P>
                                </div>
                                <P className="!-mr-1 text-black cursor-pointer">
                                  <CgClose onClick={changeDate} />
                                </P>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    {showReturnDatepicker && minReturnDatetime != null && (
                      <Datepicker
                        minDate={minReturnDatetime.minDate}
                        selectedDateTime={selectedReturnDateTime}
                        minDatetime={minReturnDatetime}
                        compareWith={selectedDateTime.date}
                        setselectedDateTime={setSelectedReturnDateTime}
                        setDateTime={setReturnDateTime}
                        onChange={() => {}}
                      />
                    )}
                  </div>
                )}

                {bookingType === 'hourly' && (
                  <div className="relative p-1 border rounded-md shadow h-28">
                    <div className="flex flex-col justify-center text-neutral">
                      <div className="flex flex-col mx-2">
                        <div className="flex items-center !text-gray-700">
                          <FiClock />
                          <H4 className="flex items-center justify-center p-2 font-semibold uppercase text-md">
                            Duration
                          </H4>
                        </div>

                        {showDurationError && (
                          <P className="animate-bounce absolute right-0 bg-red-500 text-gray-700 px-1 py-1 !text-xs font-bold z-10">
                            Required
                          </P>
                        )}
                        <Select
                          errors={errors}
                          register={register}
                          validationSchema={{
                            required: 'Required',
                          }}
                          name="duration"
                          options={bookingDuration}
                          onChange={onChange}
                          defaultValue={rideDuration}
                          className="max-w-xs pl-1 text-[14px] border-transparent appearance-none select select-ghost focus:border-transparent focus:outline-0 focus:ring-transparent active:ring-transparent focus:border-none font-xs disabled:bg-white disabled:border-none -mt-[10px]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-11/12 sm:w-auto -bottom-6 mx-auto z-[10]">
          <Button
            type="submit"
            kind="primary"
            isLoading={showBtnLoading}
            className="normal-case sm:w-auto sm:text-md !text-md !font-[500] h-auto !w-full px-5 sm:px-8 py-[10px]"
            onClick={onSubmit}
          >
            <IoIosSearch className="mr-1 text-xl" />
            <span className="uppercase">
              Search Ride
              {' '}
              {showBtnLoading}
            </span>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default BookingEngine;
