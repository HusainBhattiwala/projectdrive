/* eslint-disable react/style-prop-object */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
// import { FaAngleDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { CgClose } from 'react-icons/cg';
import { toast, ToastContainer } from 'react-toastify';
import BookingContext from 'context/BookingContext';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Datepicker from '../shared/DatePicker';
import PassengerPickerModal from '../shared/PassengerPickerModal';
import H4 from '../typography/H4';
import Button from '../ui/Button';
import Radio from '../ui/Radio';
import { Pic } from '../ui/Pic';
import CountriesAutocomplete from '../addressautocomplete/CountriesAutocomplete';
import Select from '../FormInput/Select';
import P from '../typography/P';
import api from '../utils/api';
import 'react-toastify/dist/ReactToastify.css';

function BookingEngine() {
  const {
    options,
    passengers,
    setPassengers,
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
  } = useContext(BookingContext);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [showPassengerPicker, setShowPassengerPicker] = useState(false);
  // date picker
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [showReturnDatepicker, setShowReturnDatepicker] = useState(false);

  // Return data
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [showPickupError, setShowPickupError] = useState(false);
  const [showDropError, setShowDropError] = useState(false);
  const [showDurationError, setshowDurationError] = useState(false);
  const [showDateError, setShowDateError] = useState(false);
  const [showPassengerError, setShowPassengerError] = useState(false);
  const [showLocationError, setShowLocationError] = useState(false);
  const [errorLabel, setErrorLabel] = useState('');
  const [showBtnLoading, setShowBtnLoading] = useState(false);
  const [addressObject, setAddressObject] = useState(null);
  // const [selectedDuration, setSelectedDuration] = useState(0);
  const [showReturnDateLoader, setshowReturnDateLoader] = useState(false);
  const [storeReturnDatetime, setStoreReturnDatetime] = useState(null);
  // const [totalDuration, setTotalDuration] = useState(0);
  console.log(errorLabel);
  console.log('showBtnLoading', showBtnLoading);

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

  function addPassengers() {
    setShowPassengerError(false);
    if (passengers.passengerChanged === false);
    {
      setPassengers((prev) => ({
        ...prev,
        passengerChanged: true,
      }));

      setValue('passengers', 'changed', {
        shouldValidate: true,
      });
    }
    // setShowPassengerPicker(false);
  }
  const toggleShowReturnDate = async () => {
    if (
      selectedDateTime.dateChanged
      && userPickupLocation
      && userDropLocation
    ) {
      setshowReturnDateLoader(true);
      const distance = await getDistance();
      // setTotalDuration(distance.duration);
      const time = `${selectedDateTime.hour}:${selectedDateTime.minute}`;

      let selectedDayTime = `${selectedDateTime.selectedDate.getMonth() + 1
      }/${selectedDateTime.selectedDate.getDate()}/${selectedDateTime.selectedDate.getFullYear()} ${time}`;

      selectedDayTime = new Date(selectedDayTime);

      selectedDayTime.setMinutes(selectedDayTime.getMinutes() + distance.duration);

      const newReturnDate = selectedDayTime;

      // const returnDaytime = newReturnDate.getHours() >= 12 ? 'pm' : 'am';

      // if (returnSelectHour < 10 && returnSelectHour !== 0) {
      //   returnSelectHour = `0${returnSelectHour}`;
      // } else if (returnSelectHour === 0) {
      //   returnSelectHour = 12;
      // }

      const minReturn = {
        minDate: newReturnDate,
        minHour: newReturnDate.getHours(),
        minMinute: setMinute(newReturnDate),
        // minDaytime: returnDaytime,
      };

      // let returnMinute;

      if (minReturn.minMinute > 55) {
        minReturn.minMinute = 55;
      }
      const selectedReturn = {
        hour: minReturn.minHour,
        minute: minReturn.minMinute,
        // daytime: minReturn.minDaytime,
        date: newReturnDate,
        selectedDate: newReturnDate,
        dateChanged: false,
      };
      // console.log(selectedReturn);

      setMinReturnDatetime({ ...minReturn });
      setSelectedReturnDateTime({ ...selectedReturn });
      setStoreReturnDatetime({ ...selectedReturn });
      setShowReturnDate(!showReturnDate);
      setshowReturnDateLoader(false);
    } else if (!userPickupLocation) {
      setShowPickupError(true);
    } else if (!userDropLocation && bookingType === 'transfers') {
      setShowDropError(true);
    } else toggleDatePicker();
  };

  function toggleReturnDatePicker() {
    setShowReturnDatepicker(!showReturnDatepicker);
  }

  function togglePassengerPicker() {
    setShowPassengerPicker(!showPassengerPicker);
  }

  const {
    selectedDate, hour, minute, // daytime,
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
    } if (typeof selectedHour === 'string' && selectedHour.length === 0) {
      return `0${selectedHour}`;
    }
    return selectedHour;
  }

  const {
    adult, children, infant, luggage,
  } = passengers;
  function changeRideStatus(id, text) {
    setBookingType(text);
    reset();
  }

  const userDatePicker = useRef();
  const userReturnDatePicker = useRef();
  const userPssengerPicker = useRef();
  useOnClickOutside(userDatePicker, () => setShowDatepicker(false));
  useOnClickOutside(userDatePicker, () => setShowDatepicker(false));
  useOnClickOutside(userReturnDatePicker, () => setShowReturnDatepicker(false));
  useOnClickOutside(userPssengerPicker, () => setShowPassengerPicker(false));

  function onChange(e) {
    if (e.target.value !== null) {
      setRideDuration(e.target.value);
      // setSelectedDuration(e.target.value);
      setshowDurationError(false);
    }
  }
  async function getFleetObject(distance) {
    console.log('userPickupLocation', userPickupLocation);
    setAddressObject({
      pickupaddress: userPickupLocation.address,
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
    if (userDropLocation !== null && bookingType === 'transfers') {
      setAddressObject((prev) => ({
        ...prev,
        dropaddress: userDropLocation.address,
        droplatlng: userDropLocation.latLng,
        dropairport: userDropLocation.isAirport,
        droplocationid: userDropLocation.locationid,
        droppostalcode: userDropLocation.postal_code,
        droplocationtype: userDropLocation.locationtype,
      }));
    }
    if (bookingType === 'transfers') {
      if (distance !== null) {
        setAddressObject((prev) => ({
          ...prev,
          distance: Number(distance.distance.split(' ')[0]),
          duration: distance.duration,
        }));
      }
    }
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
        // returntime: `${returnHour}:${returnMinute} ${returnDaytime}`,
        returntime: `${getHour(returnHour)}:${returnMinute}`,
      }));
    }
    return addressObject;
  }

  async function fetcTariffData(url, payload) {
    const response = await api.post(url, payload);
    if (response.data.length === 0) {
      // console.log('No fleet available');
    }
    return response;
  }

  useEffect(() => {
    if (addressObject !== null) {
      Cookies.set('searchdata', JSON.stringify(addressObject), { expires: 0.5 });
      sessionStorage.setItem('storesearchdata', JSON.stringify(addressObject));
    }
  }, [addressObject]);

  async function goToFleetPage(distance) {
    if (adult < 1) {
      setErrorLabel('Please select at least 1 adult');
      setShowLocationError(true);
      return;
    }
    let payload;
    await getFleetObject(distance);
    console.log(bookingType);
    if (bookingType === 'transfers') {
      const distanceKM = distance.distance.split(' ')[0];
      const factor = 0.621371;
      const distanceInMiles = Math.round(distanceKM * factor);
      payload = {
        from_location: userPickupLocation.locationid,
        to_location: userDropLocation.locationid,
        adult_seat_count: Number(adult),
        luggage_count: Number(luggage),
        round_trip: selectedReturnDateTime.dateChanged || false,
        user_currency: 'INR',
        distance: Number(distanceInMiles),
      };
    } else {
      payload = {
        hours: Number(rideDuration.split(' ')[0]),
        adult_seat_count: Number(adult),
        luggage_count: Number(luggage),
        user_currency: 'INR',
      };
    }
    const response = await fetcTariffData('/tariff', payload).catch(() => {
      setShowBtnLoading(false);
    });
    if (response.data.length > 0) {
      sessionStorage.setItem('fleetlist', JSON.stringify(response.data));
      router.push('/fleet-availability');
    } else {
      setShowLocationError(true);
      setErrorLabel('No Fleet Available');
      toast.error(
        'No Fleet Available',
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
      setShowBtnLoading(false);
    }
  }

  const onSubmit = async () => {
    if (userPickupLocation === null) {
      setShowPickupError(true);
    } else if (userDropLocation === null && bookingType === 'transfers') {
      setShowDropError(true);
    } else if (rideDuration === null && bookingType !== 'transfers') {
      setshowDurationError(true);
    } else if (!selectedDateTime.dateChanged) {
      setShowDateError(true);
    } else if (!passengers.passengerChanged || adult === 0) {
      setShowPassengerError(true);
    } else if (userDropLocation?.latLng === userPickupLocation.latLng) {
      toast.error(
        "Both the pickup and drop-off can't be the same.",
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
      setShowLocationError(true);
      setShowBtnLoading(false);
    } else {
      setShowBtnLoading(true);
      if (bookingType === 'transfers') {
        if (userDropLocation?.regionid === userPickupLocation.regionid) {
          const distance = await getDistance();
          await goToFleetPage(distance);
        } else {
          toast.error(
            'Both the pickup and drop-off points must be in the same region.',
            {
              autoClose: 3000,
              theme: 'colored',
            },
          );
          toast.clearWaitingQueue();
          setShowLocationError(true);
          setShowBtnLoading(false);
        }
      } else {
        await goToFleetPage(null);
      }
    }
  };

  function changeDate() {
    setShowReturnDate(false);
    setSelectedReturnDateTime({ storeReturnDatetime });
  }
  function onReturnDateChange() {
    // console.log('fix return date');
    // const pickupDate = `${(selectedDateTime.selectedDate).getFullYear()} ${(selectedDateTime.selectedDate).getMonth()} ${(selectedDateTime.selectedDate).getDate()}`;
    // const pickuptime = `${selectedDateTime.hour}:${selectedDateTime.minute}:${selectedDateTime.daytime}`;
    // let pickUpdateTime = `${pickupDate} ${(convertTo24Hour(pickuptime))}`;
    // const specificTime = new Date(pickUpdateTime);

    // const returnDate = `${(selectedReturnDateTime.selectedDate).getFullYear()} ${(selectedReturnDateTime.selectedDate).getMonth()} ${(selectedReturnDateTime.selectedDate).getDate()}`;
    // const returntime = `${selectedReturnDateTime.hour}:${selectedReturnDateTime.minute}:${selectedReturnDateTime.daytime}`;
    // const returnUpdateTime = `${returnDate} ${(convertTo24Hour(returntime))}`;
    // specificTime.setMinutes(specificTime.getMinutes() + totalDuration);
    // const updatedTime = convertTo24Hour(specificTime.toLocaleTimeString());
    // pickUpdateTime = new Date(`${pickupDate} ${updatedTime}`);

    // if (pickUpdateTime > new Date(returnUpdateTime)) {
    //   setShowLocationError(true);
    //   setErrorLabel('Please select future date and time from pickup date time');
    //   setShowReturnDate(false);
    //   setSelectedReturnDateTime({ storeReturnDatetime });
    // }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto lg:container">
      <div className="relative flex flex-col items-center rounded-md text-gray-700">
        {showLocationError && (
          <ToastContainer
            limit={1}
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        )}

        <div className="relative w-full pt-6 pb-6 my-8 bg-white rounded-md md:pt-14 sm:mb-2 text-gray-700">
          <div className="absolute flex items-start justify-between px-2 py-1 uppercase rounded-md bg-primary md:px-6 sm:px-4 -top-6 sm:flex-row md:items-center">
            {options.map((option, index) => (
              <div
                className={`flex text-white ${
                  // eslint-disable-next-line quotes
                  index === options.length - 1 ? ' md:ml-6 ml-0' : ''
                }`}
                key={option.id}
              >
                <Radio
                  id={option.id}
                  name="ridetype"
                  isChecked={option.text === bookingType}
                  // eslint-disable-next-line react/jsx-no-bind
                  changeRideStatus={() => {
                    changeRideStatus(option.id, option.text);
                  }}
                  className="text-xs font-normal !text-white sm:text-sm border-white"
                  label={option.text}
                />
              </div>
            ))}
          </div>
          <div className="pr-4 mt-4 ml-5 md:mt-0">
            <div className="flex flex-wrap ">
              <div
                className={`${bookingType === 'transfers'
                  ? 'lg:basis-[30%]'
                  : 'lg:basis-[38%]'
                }  sm:basis-[50%] basis-[100%] pr-3 sm:border-r border-b lg:border-b-0 min-h-[90px] sm:min-h-[70px]`}
              >
                <div className="relative flex flex-col ml-5">
                  <div className="flex items-center">
                    <div className="relative w-3 h-3">
                      <Pic
                        src="/images/icons/location_black.png"
                        alt="calender_black"
                        className="object-contain w-full h-auto"
                      />
                    </div>

                    <H4 className="pl-2 text-base font-semibold text-black">
                      Pick-Up Location
                    </H4>
                  </div>

                  <div className="mt-2">
                    <CountriesAutocomplete
                      className="text-gray-700"
                      placeholder="Pick-up address, airport, hotel..."
                      setUserPlace={(data) => { setUserPickupLocation(data); removeDateTime(); removeReturnDateTime(); }}
                      defaultValue={userPickupLocation?.address}
                      locationError={setShowLocationError}
                      errorLabel={setErrorLabel}
                      name="pickuploaction"
                      errors={showPickupError}
                      setError={setShowPickupError}
                    />
                  </div>
                </div>
              </div>
              {bookingType === 'transfers' && (
                <div className="lg:basis-[30%] sm:basis-[50%] basis-[100%] lg:border-r pr-3 lg:border-b-0  border-b justify-center items-center relative mt-3 sm:mt-0 min-h-[90px] sm:min-h-[70px]">
                  <div className="relative flex flex-col ml-5">
                    <div className="flex items-center">
                      <div className="relative w-3 h-3">
                        <Pic
                          src="/images/icons/location_black.png"
                          alt="calender_black"
                          className="object-contain w-full h-auto"
                        />
                      </div>
                      <H4 className="pl-2 text-base font-semibold text-black">
                        Drop-Off Location
                      </H4>
                    </div>

                    <div className="mt-2">
                      <CountriesAutocomplete
                        className="text-gray-700"
                        placeholder="Drop-off address, airport, hotel..."
                        // setUserPlace={setUserDropLocation}
                        setUserPlace={(data) => { setUserDropLocation(data); removeReturnDateTime(); removeDateTime(); }}
                        defaultValue={userDropLocation?.address}
                        readOnly={false}
                        locationError={setShowLocationError}
                        errorLabel={setErrorLabel}
                        name="droplocation"
                        errors={showDropError}
                        setError={setShowDropError}
                      />
                    </div>
                  </div>
                </div>
              )}

              {bookingType === 'hourly' && (
                <div className="lg:basis-[22%] sm:basis-[50%] basis-[100%] lg:border-r lg:border-b-0 border-b relative pt-3 sm:pt-0 min-h-[102px] sm:min-h-[70px]">
                  <div className="flex flex-col justify-center text-neutral">
                    <div className="flex flex-col mx-4">
                      <div className="flex items-center ">
                        <div className="relative w-3 h-3">
                          <Pic
                            src="/images/icons/clock_fill.png"
                            alt="calender_black"
                            className="object-contain w-full h-auto"
                          />
                        </div>
                        <H4 className="flex items-center justify-center pl-2 text-base font-semibold">
                          Duration
                        </H4>
                      </div>

                      {showDurationError && (
                        <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
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
                        className="max-w-xs pl-1 text-[14px] border-transparent appearance-none select select-ghost focus:border-transparent focus:outline-0 focus:ring-transparent active:ring-transparent focus:border-none font-xs disabled:bg-white disabled:border-none max-w-32 "
                      />
                    </div>
                  </div>
                </div>
              )}

              <div
                className={`${bookingType === 'transfers'
                  ? 'lg:basis-[22%] lg:min-h-[105px]'
                  : 'lg:basis-[22%] lg:min-h-[105px]'
                } sm:basis-[50%] basis-[100%] sm:border-r relative lg:py-0 sm:pb-0 py-3 min-h-[116px] sm:min-h-[70px]`}
                ref={userDatePicker}
              >
                <div
                  className="flex flex-col justify-center text-neutral"
                  onClick={toggleDatePicker}
                >
                  <div className="flex flex-col ml-5">
                    <div className="flex items-center cursor-pointer">
                      <div className="relative w-3 h-3">
                        <Pic
                          src="/images/icons/calender_black.png"
                          alt="calender_black"
                          className="object-contain w-full h-auto"
                        />
                      </div>
                      <H4 className="flex items-center pl-2 font-semibold text-[16px]">
                        Date and Time
                        {/* <FaAngleDown className="ml-1 text-lg text-primary" /> */}
                      </H4>
                    </div>

                    {!selectedDateTime.dateChanged && (
                      <P className="!text-[14px] pt-2 mt-1 text-[#929292] cursor-pointer" onClick={toggleDatePicker}>
                        Add date of travel
                      </P>
                    )}
                    {showDateError && (
                      <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
                        Required
                      </P>
                    )}

                    {selectedDateTime.dateChanged && (

                      <div className="flex mt-3">
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
                {showDatepicker && (
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

                {bookingType === 'transfers' && (
                  <div
                    ref={userReturnDatePicker}
                  >
                    <div className="cursor-pointer ">
                      <div className="mx-5">
                        {!showReturnDate && !selectedReturnDateTime.dateChanged && (
                          <>
                            <span
                              className="mt-3 py-2 text-xs font-semibold text-center text-[#000] rounded-md flex items-center justify-center w-full !mr-4 h-full !bg-[#e5e7eb]"
                              onClick={toggleShowReturnDate}
                            >
                              + Add Return
                            </span>
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
                        {(showReturnDate || selectedReturnDateTime.dateChanged) && (
                          <>
                            <div
                              className="flex !items-center text-neutral pt-2 mt-4 sm:mt-1"
                              onClick={toggleReturnDatePicker}
                            >
                              <div className="relative !w-3 sm:-mt-1 !h-3">
                                <Pic
                                  src="/images/icons/calender_black.png"
                                  alt="calender_black"
                                  className="object-contain w-full h-auto"
                                />
                              </div>
                              <H4 className="flex pl-2 text-base font-semibold">
                                Return Date and Time
                                {/* <FaAngleDown className="ml-1 text-lg text-primary" /> */}
                              </H4>
                            </div>
                            {!selectedReturnDateTime.dateChanged && (
                              <div
                                className="text-[14px] pt-2"
                                onClick={toggleReturnDatePicker}
                              >
                                Add date of return
                              </div>
                            )}
                            {selectedReturnDateTime.dateChanged && (
                              <div className="flex items-center justify-between">
                                <div className="flex mt-3">
                                  <H4 className="!text-md mt-[3px] text-black">
                                    {`${returnSelectedDay}${nthNumber(
                                      returnSelectedDay,
                                    )}  ${returnMonthName}, ${returnSelectedYear}`}
                                  </H4>
                                  <span className="mx-2 -mt-1 text-black">|</span>
                                  <P
                                    className="!text-md text-black uppercase"
                                    onClick={toggleDatePicker}
                                  >
                                    {`${getHour(returnHour)}:${returnMinute}`}
                                  </P>
                                </div>
                                <div>
                                  <P className="mt-3 -mr-2 text-black cursor-pointer">
                                    <CgClose onClick={changeDate} className="z-[1]" />
                                  </P>
                                </div>
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
                        onChange={onReturnDateChange}
                      />
                    )}
                  </div>
                )}
              </div>
              <div
                className={` ${bookingType === 'transfers'
                  ? 'lg:basis-[18%]'
                  : 'lg:basis-[18%]'
                } sm:basis-[50%] basis-[100%] relative border-t sm:border-t-0 lg:pt-0 pt-3 mb-8 sm:mb-0`}
                ref={userPssengerPicker}
              >
                <div className="flex flex-col justify-center text-neutral">
                  <div className="flex flex-col ml-5">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={togglePassengerPicker}
                    >
                      <div className="relative w-4 h-4">
                        <Pic
                          src="/images/icons/users_fill.png"
                          alt="users"
                          className="object-contain w-full h-auto"
                        />
                      </div>
                      <H4 className="flex items-center text-[16px] pl-2 font-semibold">
                        Passengers
                        {/* <FaAngleDown className="ml-1 text-lg text-primary" /> */}
                      </H4>
                    </div>
                    {(!passengers.passengerChanged) && (
                      <div onClick={togglePassengerPicker}>
                        <P
                          className="!text-[14px] pt-2 cursor-pointer text-[#929292] mt-1"
                        >
                          Add passengers
                        </P>
                      </div>

                    )}

                    {showPassengerError && (
                      <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
                        Required
                      </P>
                    )}
                    {adult === 0 && showPassengerError && (
                      <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
                        1 Adult required
                      </P>
                    )}

                    {passengers.passengerChanged && (
                      <P className="!text-[14px] text-black mt-2 capitalize">
                        {adult}
                        {' '}
                        Adults,
                        {' '}
                        {luggage}
                        {' '}
                        luggage,
                        <br />
                        {children}
                        {' '}
                        children,
                        {infant}
                        {' '}
                        infant
                      </P>
                    )}
                  </div>

                  {showPassengerPicker && (
                    <PassengerPickerModal
                      setPassenger={addPassengers}
                    // adult={adult}
                    />
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="absolute w-full mx-auto sm:w-auto bottom-2 sm:-bottom-6">
          <Button
            type="submit"
            // isLoading
            className="normal-case sm:text-md !text-base !font-[500] px-5 btn-primary sm:w-auto w-full"
            onClick={onSubmit}
          >
            Search for Rides
          </Button>
        </div>
      </div>
    </form>
  );
}

export default BookingEngine;
