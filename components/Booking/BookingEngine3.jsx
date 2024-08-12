'use client';

import {
  useContext, useEffect, useRef, useState,
} from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useOnClickOutside from 'hooks/useOnClickOutside';
import BookingContext from 'context/BookingContext';
import gtagReportConversion from 'components/utils/trackGTag';
import 'react-toastify/dist/ReactToastify.css';
import Input from 'rolnew/ui/Input';
import Datepicker from 'components/shared/DatePicker';
import TimePicker from 'components/shared/Timepicker';
import Button from 'rolnew/ui/Button';
import Select from 'components/FormInput/Select';
// import { Montserrat } from 'next/font/google';
import CountriesAutocomplete from '../addressautocomplete/CountriesAutocomplete';
import api from '../utils/api';

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const labels = ['transfers', 'hourly'].map((item) => ({
  id: item,
  label: (
    <div className="flex gap-[10px] items-center max-w-max mx-auto">
      <img src={`/rolnew/home/${item}.svg`} alt="" className="h-6 w-6" />
      <p className="capitalize text-base font-medium">{item}</p>
    </div>
  ),
}));

function BookingEngine3({ setFocus, height }) {
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
  const { handleSubmit, errors, register } = useForm();

  const router = useRouter();
  const pathName = usePathname();
  const [fullScreen, setIsFullScreen] = useState(false);
  const [fullScreenDrop, setIsFullScreenDrop] = useState(false);

  // date picker
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [showTimepicker, setShowTimepicker] = useState(false);
  const [showReturnDatepicker, setShowReturnDatepicker] = useState(false);
  const [showReturnTimepicker, setShowReturnTimepicker] = useState(false);

  // Return data
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [showPickupError, setShowPickupError] = useState(false);
  const [showDropError, setShowDropError] = useState(false);
  const [showDurationError, setshowDurationError] = useState(false);
  const [showDateError, setShowDateError] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);
  const [showBtnLoading, setShowBtnLoading] = useState(false);
  const [addressObject, setAddressObject] = useState(null);
  const [showReturnDateLoader, setshowReturnDateLoader] = useState(false);
  const [showReturnDateError, setShowReturnDateError] = useState(false);
  const [showReturnTimeError, setShowReturnTimeError] = useState(false);

  // const swapPickDrop = () => {
  //   setUserPickupLocation(userDropLocation);
  //   setUserDropLocation(userPickupLocation);
  // };

  console.log(showDurationError, showDateError, showBtnLoading);

  useEffect(() => {
    sessionStorage.removeItem('isCarSelected');
    sessionStorage.removeItem('selectedfleet');
  }, []);

  const toggleDatePicker = () => {
    setShowDatepicker(!showDatepicker);
    setShowDateError(false);
  };

  // const toggleDatePicker = () => {
  //   const isDatePickerOpen = !showDatepicker;

  //   // Set date picker state to trigger re-render if needed
  //   setShowDatepicker(isDatePickerOpen);

  //   if (!isDatePickerOpen) {
  //     setShowDateError(false);
  //   }
  // };

  // const setDateTime = () => {
  //   setselectedDateTime((prev) => ({
  //     ...prev,
  //     dateChanged: true,
  //   }));
  //   setShowDatepicker(false);
  //   setShowDateError(false);
  // };

  const setDateTime = (newDate) => {
    setselectedDateTime((prev) => ({
      ...prev,
      selectedDate: newDate,
      dateChanged: true,
    }));
    setShowDatepicker(false);
    setShowDateError(false);
  };

  const setTimeChange = () => {
    setselectedDateTime((prev) => ({
      ...prev,
      timeChanged: true,
    }));
    setShowTimepicker(false);
    setShowTimeError(false);
  };

  const removeDateTime = () => {
    setselectedDateTime((prev) => ({
      ...prev,
      dateChanged: false,
    }));
    setShowDatepicker(false);
  };
  const setReturnDateTime = (newDate) => {
    setSelectedReturnDateTime((prev) => ({
      ...prev,
      selectedDate: newDate,
      dateChanged: true,
    }));
    setShowReturnDatepicker(false);
    setShowReturnDateError(false);
  };
  const setReturnTime = () => {
    setSelectedReturnDateTime((prev) => ({
      ...prev,
      timeChanged: true,
    }));
    setShowReturnDatepicker(false);
    setShowReturnTimeError(false);
  };

  const removeReturnDateTime = () => {
    setSelectedReturnDateTime((prev) => ({
      ...prev,
      dateChanged: false,
    }));
    setShowReturnDatepicker(false);
  };

  const toggleReturnDatePicker = async () => {
    setTimeout(() => {
      setShowReturnDate(false);
      setSelectedReturnDateTime((prev) => ({
        ...prev,
        dateChanged: false,
      }));
    }, 200);
  };

  const toggleShowReturnDate = async () => {
    if (showReturnDate) {
      await toggleReturnDatePicker();
      return;
    }
    if (
      // selectedDateTime.dateChanged &&
      selectedDateTime.timeChanged
      && userPickupLocation
      && userDropLocation
    ) {
      setshowReturnDateLoader(true);
      const distance = await getDistance();
      const time = `${selectedDateTime.hour}:${selectedDateTime.minute}`;
      let selectedDayTime = `${selectedDateTime.selectedDate.getMonth() + 1
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
    } else if (!userPickupLocation) {
      setShowPickupError(true);
    } else if (!userDropLocation && bookingType === 'transfers') {
      setShowDropError(true);
    } else if (!selectedDateTime.dateChanged) {
      toggleDatePicker();
    } else {
      setShowTimepicker(true);
    }
  };
  const { selectedDate, hour, minute } = selectedDateTime;
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

  const getHour = (selectedHour) => {
    if (typeof selectedHour === 'number' && selectedHour < 9) {
      return `0${selectedHour}`;
    }
    if (typeof selectedHour === 'string' && selectedHour.length === 0) {
      return `0${selectedHour}`;
    }
    return selectedHour;
  };

  const {
    adult, children, infant, luggage,
  } = passengers;

  const addressPicker = useRef();
  const userDatePicker = useRef();
  const userTimePicker = useRef();
  const userReturnDatePicker = useRef();
  const userReturnTimePicker = useRef();
  useOnClickOutside(userDatePicker, () => setShowDatepicker(false));
  useOnClickOutside(userTimePicker, () => setShowTimepicker(false));
  useOnClickOutside(userReturnDatePicker, () => setShowReturnDatepicker(false));
  useOnClickOutside(userReturnTimePicker, () => setShowReturnTimepicker(false));

  const onChange = (e) => {
    if (e.target.value !== null) {
      setRideDuration(e.target.value);
      setshowDurationError(false);
    }
  };
  const getFleetObject = (distance) => {
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
  };

  const fetcTariffData = async (url, payload) => {
    const response = await api.post(url, payload);
    return response;
  };

  useEffect(() => {
    if (addressObject !== null) {
      Cookies.set('searchdata', JSON.stringify(addressObject), {
        expires: 0.5,
      });
      sessionStorage.setItem('storesearchdata', JSON.stringify(addressObject));
      sessionStorage.setItem('currentpage', pathName);
    }
  }, [addressObject, pathName]);

  const goToFleetPage = async (distance) => {
    let payload;
    await getFleetObject(distance);
    if (
      userPickupLocation?.zoneId?.length > 0
      || userDropLocation?.zoneId?.length > 0
    ) {
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
  };

  // const onSubmit = async () => {
  //   if (userPickupLocation === null) {
  //     setShowPickupError(true);
  //     addressPicker.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   } else if (
  //     (!userDropLocation || !userDropLocation.address)
  //     && bookingType === 'transfers'
  //   ) {
  //     setShowDropError(true);
  //     addressPicker.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   } else if (rideDuration === null && bookingType !== 'transfers') {
  //     setshowDurationError(true);
  //   }
  //   // else if (!selectedDateTime.dateChanged) {
  //   //   setShowDateError(true);
  //   //   userDatePicker.current.scrollIntoView({
  //   //     behavior: 'smooth',
  //   //     block: 'center',
  //   //   });
  //   else if (!selectedDateTime.timeChanged) {
  //     setShowTimeError(true);
  //     userTimePicker.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  //   // else if (showReturnDate && !selectedReturnDateTime.dateChanged) {
  //   //   setShowReturnDateError(true);
  //   //   userTimePicker.current.scrollIntoView({
  //   //     behavior: 'smooth',
  //   //     block: 'center',
  //   //   });
  //   // }

  //   else if (showReturnDate && !selectedReturnDateTime.timeChanged) {
  //     setShowReturnTimeError(true);
  //     userTimePicker.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   } else if (
  //     userDropLocation?.latLng === userPickupLocation.latLng
  //     && bookingType === 'transfers'
  //   ) {
  //     toast.error("Both the pickup and drop-off can't be the same.", {
  //       autoClose: 3000,
  //       theme: 'colored',
  //     });
  //     toast.clearWaitingQueue();
  //     setShowBtnLoading(false);
  //   } else {
  //     setShowBtnLoading(true);
  //     gtagReportConversion('conversion');
  //     let distance;
  //     if (userDropLocation && userDropLocation.address) {
  //       distance = await getDistance();
  //     }
  //     if (bookingType === 'transfers') {
  //       if (userDropLocation?.regionid === userPickupLocation.regionid) {
  //         if (distance?.distance) {
  //           goToFleetPage(distance);
  //         } else {
  //           toast.error('Distance not found.', {
  //             autoClose: 3000,
  //             theme: 'colored',
  //           });
  //           toast.clearWaitingQueue();
  //         }
  //       } else {
  //         toast.error(
  //           'Both the pickup and drop-off points must be in the same region.',
  //           {
  //             autoClose: 3000,
  //             theme: 'colored',
  //           },
  //         );
  //         toast.clearWaitingQueue();
  //         setShowBtnLoading(false);
  //       }
  //     } else {
  //       goToFleetPage(distance || null);
  //     }
  //   }
  // };

  const onSubmit = async () => {
    if (userPickupLocation === null) {
      setShowPickupError(true);
      addressPicker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else if (
      (!userDropLocation || !userDropLocation.address)
      && bookingType === 'transfers'
    ) {
      setShowDropError(true);
      addressPicker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else if (rideDuration === null && bookingType !== 'transfers') {
      setshowDurationError(true);
    } else if (!selectedDateTime.timeChanged) {
      setShowTimeError(true);
      userTimePicker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else if (showReturnDate && !selectedReturnDateTime.timeChanged) {
      setShowReturnTimeError(true);
      userTimePicker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
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
            toast.error('Distance not found.', {
              autoClose: 3000,
              theme: 'colored',
            });
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

  const changeDate = () => {
    setShowReturnDate(false);
    selectedReturnDateTime.dateChanged = false;
  };

  useEffect(() => {
    const getUserCurrency = async (regionid) => {
      const response = await api.get(`/regions?region_id=${regionid}`);
      if (response?.data?.region_currency_text) {
        let date = new Date().toLocaleString('en-US', {
          timeZone: response?.data?.region_time_zone || 'Europe/London',
        });
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

  const pickUpInput = ({
    inputIcon,
    leadingIcon,
    label,
    placeholder,
    onFocus,
    closeFocus,
    isFullScreen,
    ...rest
  }) => (
    <Input
      inputIcon="/rolnew/home/inputIcon.svg"
      leadingIcon="/rolnew/home/gps.svg"
      label="Pick Up"
      placeholder="Enter pick up location"
      onFocus={() => {
        setFocus(false); // Ensure no full-screen behavior on focus
      }}
      isFullScreen={false} // Disable full-screen mode
      closeFocus={() => {
        setFocus(false);
      }}
      // onFocus={() => {
      //   if (width < 560) {
      //     setFocus(true);
      //     setIsFullScreen(true);
      //   }
      // }}
      // isFullScreen={fullScreen}
      // closeFocus={() => {
      //   setFocus(false);
      //   setIsFullScreen(false);
      // }}
      {...rest}
    />
  );
  const dropOffInput = ({
    inputIcon,
    leadingIcon,
    label,
    placeholder,
    onFocus,
    closeFocus,
    isFullScreen,
    ...rest
  }) => (
    <Input
      inputIcon="/rolnew/home/inputIcon.svg"
      leadingIcon="/rolnew/home/gps.svg"
      label="Drop Off"
      placeholder="Enter drop off location"
      onFocus={() => {
        setFocus(false); // Ensure no full-screen behavior on focus
      }}
      isFullScreen={false} // Disable full-screen mode
      closeFocus={() => {
        setFocus(false);
      }}
      // onFocus={() => {
      //   if (width < 560) {
      //     setFocus(true);
      //     setIsFullScreenDrop(true);
      //   }
      // }}
      // closeFocus={() => {
      //   setFocus(false);
      //   setIsFullScreenDrop(false);
      // }}
      // isFullScreen={fullScreenDrop}
      {...rest}
    />
  );

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto lg:container"
      autoComplete="off"
    >
      <div className="flex gap-2 sm:gap-3 items-center justify-between">
        {labels.map((item) => (
          <button
            type="button"
            className={`rounded-full bg-[#223544] py-[10px] border border-[#fff] pop w-1/2 font-medium ${bookingType !== item.id
              ? 'opacity-40 border-opacity-30'
              : 'border-opacity-40'
            }`}
            id={item.id}
            onClick={() => setBookingType(item.id)}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        className={`flex flex-col  z-[50] ${height > 600 ? 'pt-6 gap-y-6' : 'pt-4 gap-y-4'
        } `}
        ref={addressPicker}
      >
        <CountriesAutocomplete
          isFullScreen={fullScreen}
          setIsFullScreen={setIsFullScreen}
          autoCompleteComponent={pickUpInput}
          placeholder="Pick-up address, airport, hotel..."
          setUserPlace={(data) => {
            setUserPickupLocation(data);
            removeDateTime();
            removeReturnDateTime();
            setFocus(false);
            setIsFullScreen(false);
          }}
          defaultValue={userPickupLocation?.address}
          locationError={() => { }}
          errorLabel={() => { }}
          name="pickuploaction"
          errors={showPickupError}
          setError={setShowPickupError}
        />

        <CountriesAutocomplete
          isFullScreen={fullScreenDrop}
          autoCompleteComponent={dropOffInput}
          setIsFullScreen={setIsFullScreenDrop}
          setUserPlace={(data) => {
            setUserDropLocation(data);
            removeReturnDateTime();
            removeDateTime();
            setFocus(false);
            setIsFullScreenDrop(false);
          }}
          defaultValue={userDropLocation?.address}
          readOnly={false}
          locationError={() => { }}
          errorLabel={() => { }}
          name="droplocation"
          errors={showDropError}
          setError={setShowDropError}
        />

        <div className="flex gap-x-4">
          <div className="relative sm:w-2/4 w-full" ref={userDatePicker}>
            <Input
              leadingIcon="/rolnew/home/calendar.svg"
              label="Date"
              placeholder="Pick up date"
              className="cursor-pointer"
              readOnly
              showError={showDateError}
              // value={
              //   selectedDateTime.dateChanged
              //     ? formatDateTime(selectedDateTime?.selectedDate)
              //     : ''
              // }
              value={selectedDateTime?.selectedDate ? formatDateTime(selectedDateTime?.selectedDate) : ''}
              onClick={() => {
                setShowDatepicker(true);
              }}
            />
            {showDatepicker && minDatetime && (
              <Datepicker
                minDate={minDatetime?.minDate}
                selectedDateTime={selectedDateTime}
                minDatetime={minDatetime}
                compareWith={minDatetime?.minDate}
                setselectedDateTime={setselectedDateTime}
                setDateTime={(newDate) => {
                  setDateTime(newDate); // Pass the selected date
                }}
                onChange={changeDate}
              />
            )}
          </div>
          <div className="relative sm:w-2/4 w-full" ref={userTimePicker}>
            <Input
              leadingIcon="/rolnew/home/clock.svg"
              label="Time"
              showError={showTimeError}
              placeholder="Pick up time"
              className="cursor-pointer"
              readOnly
              value={
                selectedDateTime?.timeChanged
                  ? `${selectedDateTime?.hour}:${selectedDateTime?.minute}`
                  : ''
              }
              onClick={() => {
                setShowTimepicker(true);
              }}
            />
            {showTimepicker && minDatetime && (
              <TimePicker
                minDate={minDatetime?.minDate}
                selectedDateTime={selectedDateTime}
                minDatetime={minDatetime}
                compareWith={minDatetime?.minDate}
                setselectedDateTime={setselectedDateTime}
                setDateTime={setTimeChange}
                onChange={changeDate}
                showSelected={selectedDateTime?.timeChanged}
              />
            )}
          </div>
        </div>
        {bookingType === 'transfers' && (
          <div className="border-t border-[#B2B2B2]">
            <button
              type="button"
              className={`pop max-w-max ${height > 600 ? 'py-6' : 'py-3'}`}
              onClick={toggleShowReturnDate}
            >
              <div className="flex gap-2 items-center">
                <svg
                  className="h-5 w-5 text-[#FDC65C]"
                  fill="none"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p className="font-medium text-[#FDC65C]">
                  {showReturnDate || selectedReturnDateTime.dateChanged
                    ? 'Remove'
                    : 'Add'}
                  {' '}
                  Return Journey
                  {' '}
                </p>
                {showReturnDateLoader && (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
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
              </div>
            </button>
            {(showReturnDate || selectedReturnDateTime.dateChanged) && (
              <div className={`flex gap-x-4 ${height > 600 ? 'pb-6' : 'pb-4'}`}>
                <div
                  className="relative sm:w-2/4 w-full"
                  ref={userReturnDatePicker}
                >
                  <Input
                    leadingIcon="/rolnew/home/calendar.svg"
                    label="Return Date"
                    placeholder="Return date"
                    className="cursor-pointer"
                    readOnly
                    showError={showReturnDateError}
                    // value={
                    //   selectedReturnDateTime?.dateChanged
                    //     ? formatDateTime(selectedReturnDateTime?.selectedDate)
                    //     : ''
                    // }
                    value={selectedReturnDateTime?.selectedDate ? formatDateTime(selectedReturnDateTime?.selectedDate) : ''}
                    onClick={() => {
                      setShowReturnDatepicker(true);
                    }}
                  />
                  {showReturnDatepicker && minReturnDatetime && (
                    <Datepicker
                      minDate={minReturnDatetime.minDate}
                      selectedDateTime={selectedReturnDateTime}
                      minDatetime={minReturnDatetime}
                      compareWith={selectedDateTime.date}
                      setselectedDateTime={setSelectedReturnDateTime}
                      setDateTime={(newDate) => {
                        setReturnDateTime(newDate); // Pass the selected date
                      }}
                      // setDateTime={setReturnDateTime}
                      onChange={() => { }}
                    />
                  )}
                </div>
                <div
                  className="relative sm:w-2/4 w-full"
                  ref={userReturnTimePicker}
                >
                  <Input
                    leadingIcon="/rolnew/home/clock.svg"
                    label="Return Time"
                    placeholder="Return time"
                    className="cursor-pointer"
                    readOnly
                    showError={showReturnTimeError}
                    value={
                      selectedReturnDateTime?.timeChanged
                        ? `${selectedReturnDateTime?.hour}:${selectedReturnDateTime?.minute}`
                        : ''
                    }
                    onClick={() => {
                      setShowReturnTimepicker(true);
                    }}
                  />
                  {showReturnTimepicker && minReturnDatetime && (
                    <TimePicker
                      minDate={minReturnDatetime.minDate}
                      selectedDateTime={selectedReturnDateTime}
                      minDatetime={minReturnDatetime}
                      compareWith={selectedDateTime.date}
                      setselectedDateTime={setSelectedReturnDateTime}
                      setDateTime={setReturnTime}
                      showSelected={selectedReturnDateTime?.timeChanged}
                      onChange={() => {
                        setShowReturnTimepicker(false);
                      }}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {bookingType === 'hourly' && (
          <div className={`relative ${height > 600 ? 'pb-6' : 'pb-4'}`}>
            <Select
              leadingIcon="/rolnew/home/clock.svg"
              label="Duration"
              errors={errors}
              register={register}
              validationSchema={{
                required: 'Required',
              }}
              name="duration"
              options={bookingDuration}
              onChange={onChange}
              defaultValue={rideDuration}
              className="w-full appearance-none select focus:border-transparent focus:outline-0 focus:ring-transparent active:ring-transparent bg-[#223544D9] bg-opacity-85 border border-[#E1E1E140] overflow-ellipsis"
            />
          </div>
        )}
      </div>
      <Button className="w-full" submit cta isLoading={showBtnLoading}>
        Search Ride
      </Button>
    </form>
  );
}

export default BookingEngine3;
