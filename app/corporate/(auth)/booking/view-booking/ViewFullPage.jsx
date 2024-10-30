/* eslint-disable no-shadow */

'use client';

import React, {
  useContext,
  useEffect, useRef, useState,
} from 'react';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Input from 'components/ui/Input';
import PassengerAutoComplete from 'components/corporate/PassengerAutoComplete';
import P from 'components/typography/P';
import api from 'components/utils/api';
import Button from 'components/ui/Button';
import H2 from 'components/typography/H2';
import { Pic } from 'components/ui/Pic';
import Modal from 'components/ui/Modal';
import PassengerModal from 'components/corporate/ui/PassengerModal';
import MapDirection from 'components/corporate/Booking/MapDirection';
import 'react-calendar/dist/Calendar.css';
import LocationComponent from 'components/corporate/Booking/LocationComponent';
import DateTimePicker from 'components/corporate/Booking/DateTimePicker';
import AdditionalInformation from 'components/corporate/Booking/AdditionalInformation';
import Tariff from 'components/corporate/Booking/Tariff';
import PaymentOptions from 'components/corporate/Booking/PaymentOptions';
import DriverNote from 'components/corporate/Booking//DriverNote';
import Loader from 'components/shared/Loader';
import TabsUi from 'app/(auth)/trip-details/TabsUi';
import Activity from 'app/(auth)/trip-details/Activity';
import { UtilityContext } from 'context/UtilityContext';
import RideRef from 'components/corporate/BookingManagement/RideRef';
import ConfirmAlert from 'components/corporate/ui/ConfirmAlert';
import Image from 'next/image';
import H3 from 'components/typography/H3';
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from 'react-icons/md';

function addHours(getDate, hours) {
  getDate.setHours(getDate.getHours() + hours);
  return getDate;
}

function setMinute(minDate) {
  const num = minDate.getMinutes();
  if (num < 9) {
    return '05';
  }
  const remainder = num % 5;
  if (remainder <= 2) {
    return num - remainder < 10 ? '05' : `${num - remainder}`;
  }
  return num + (5 - remainder) < 10 ? '05' : `${num + (5 - remainder)}`;
}

const formatDate = (givenDate) => {
  const parsedDate = dayjs(givenDate);
  const formattedDate = parsedDate.format('DD/MM/YYYY');
  return formattedDate;
};

function ViewFullPage() {
  const {
    renderWithNewlines, getDate, getTime, setShowViewBooking,
    formatPrice, viewBookingId, activeTabIndex,
  } = useContext(UtilityContext);

  const router = useRouter();
  // Confirm delete
  const [showAlert, setShowAlert] = useState(false);
  const [onConfrim, setOnConfirm] = useState(null);
  const [confrimLabel, setConfrimLabel] = useState('');
  // Refs for pickup booking
  const pickUpLocationRef = useRef(null);
  const dropOffLocationRef = useRef(null);
  const passengerRef = useRef(null);
  const viaLocationRefs = useRef([]);
  const vehicleRef = useRef(null);
  const adultRef = useRef(null);

  // Refs for return booking
  const returnPickUpLocationRef = useRef(null);
  const returnDropOffLocationRef = useRef(null);
  const returnViaLocationRefs = useRef([]);
  const returnVehicleRef = useRef(null);
  const returnAdultRef = useRef(null);

  // Refs
  const locationRef = useRef(null);
  const bookingId = viewBookingId;
  const activity = activeTabIndex;
  const [activeTab, setActiveTab] = useState(Number(activity) || 0);
  const [allTripDetails, setAllTripDetails] = useState(null);
  const [bookingActivity, setBookingActivity] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCancelLoading, setIsCancelLoading] = useState(false);
  const [allPassenger, setAllPassenger] = useState([]);
  const [showUserList, setShowUserList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tariffShowModal, setTariffShowModal] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [passenger, setPassenger] = useState(null);
  const [selectedBookingType, setSelectedBookingType] = useState('TRANSFERS');
  const [userCurrency, setUserCurrency] = useState('GBP');
  const [returnUserCurrency, setReturnUserCurrency] = useState('GBP');
  // For One way journey
  const [userPickLocation, setUserPickLocation] = useState(null);
  const [hourDuration, setHourDuration] = useState({
    value: 4,
    label: '4 Hours',
  });
  const [userDropLocation, setUserDropLocation] = useState(null);
  const [showPickupError, setShowPickupError] = useState(false);
  const [viaLocationsError, setViaLocationsError] = useState([]);
  const [showDropError, setShowDropError] = useState(false);
  const [pickUpFlight, setPickUpFlight] = useState('');
  const [dropFlight, setDropUpFlight] = useState('');
  const [pickUpViaLocations, setPickUpViaLocations] = useState([]);
  const [adultNo, setAdultNo] = useState(0);
  const [showAdultError, setShowAdultError] = useState(false);
  const [infantNo, setInfantNo] = useState(0);
  const [childNo, setChildNo] = useState(0);
  const [bagNo, setBagNo] = useState(0);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [destination, setDestination] = useState(null);
  const [wayLocations, setWayLocations] = useState(null);
  const [showPickUpDateCalender, setShowPickUpDateCalender] = useState(false);
  const [pickUpVehicle, setPickUpVehicle] = useState(null);
  const [showPickUpVehicleError, setShowPickUpVehicleError] = useState(false);
  const [returnShowPickUpVehicleError, setReturnShowPickUpVehicleError] = useState(false);
  const [driverNote, setDriverNote] = useState('');
  const [nameBoard, setNameBoard] = useState('');
  const [costCenter, setCostCenter] = useState('');
  const [date, setNewDate] = useState(addHours(new Date(), 2));

  // Date picker
  const [minDatetime, setMinDatetime] = useState();
  const [selectedDateTime, setSelectedDateTime] = useState();
  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const newDate = date;
    // eslint-disable-next-line no-shadow
    const selectHour = date.getHours();
    setMinDatetime({
      minDate: newDate,
      minHour: selectHour,
      minMinute:
        Math.round(newDate.getMinutes() / 5) * 5 === 60
          ? '00'
          : Math.round(newDate.getMinutes() / 5) * 5,
    });
    // setSelectedDateTime({
    //   hour: selectHour,
    //   minute: setMinute(newDate),
    //   date: newDate,
    //   selectedDate: formatDate(newDate),
    //   dateChanged: false,
    // });
  }, [date]);
  // For One way journey
  const [addReturnJourney, setAddReturnJourney] = useState(false);
  // For Two way journey
  const [returnUserPickLocation, setReturnUserPickLocation] = useState(null);
  const [returnHourDuration, setReturnHourDuration] = useState({
    value: 4,
    label: '4 Hours',
  });
  const [returnUserDropLocation, setReturnUserDropLocation] = useState(null);
  const [returnShowPickupError, setReturnShowPickupError] = useState(false);
  const [returnViaLocationsError, setReturnViaLocationsError] = useState([]);
  const [returnShowDropError, setReturnShowDropError] = useState(false);
  const [returnPickUpFlight, setReturnPickUpFlight] = useState('');
  const [returnDropFlight, setReturnDropUpFlight] = useState('');
  const [returnPickUpViaLocations, setReturnPickUpViaLocations] = useState([]);
  const [returnAdultNo, setReturnAdultNo] = useState(0);
  const [returnShowAdultError, setReturnShowAdultError] = useState(false);
  const [returnInfantNo, setReturnInfantNo] = useState(0);
  const [returnChildNo, setReturnChildNo] = useState(0);
  const [returnBagNo, setReturnBagNo] = useState(0);
  const [returnDistance, setReturnDistance] = useState('');
  const [returnDuration, setReturnDuration] = useState('');
  const [returnDestination, setReturnDestination] = useState(null);
  const [returnWayLocations, setReturnWayLocations] = useState(null);
  const [returnShowPickUpDateCalenger, setReturnShowPickUpDateCalenger] = useState(false);
  const [returnPickUpVehicle, setReturnPickUpVehicle] = useState(null);
  const [returnDriverNote, setReturnDriverNote] = useState('');
  const [returnNameBoard, setReturnNameBoard] = useState('');
  const [returnCostCenter, setReturnCostCenter] = useState('');
  const returnDate = addHours(date, 0);
  const selectReturnHour = returnDate.getHours();

  // Date picker
  const [returnMinDatetime, setReturnMinDatetime] = useState({
    minDate: returnDate,
    minHour: selectReturnHour,
    minMinute:
      Math.round(returnDate.getMinutes() / 5) * 5 === 60
        ? '00'
        : Math.round(returnDate.getMinutes() / 5) * 5,
  });

  const [returnSelectedDateTime, setReturnSelectedDateTime] = useState({
    hour: selectReturnHour,
    minute: setMinute(returnDate),
    date: returnDate,
    selectedDate: formatDate(returnDate),
    dateChanged: false,
  });

  // Checking return date validation
  useEffect(() => {
    if (selectedDateTime) {
      const parts = selectedDateTime.selectedDate.split('/');
      let rearrangedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      rearrangedDate = new Date(rearrangedDate);
      const time = `${selectedDateTime.hour}:${selectedDateTime.minute}`;
      let selectedDayTime = `${rearrangedDate.getMonth() + 1
      }/${rearrangedDate.getDate()}/${rearrangedDate.getFullYear()} ${time}`;
      selectedDayTime = new Date(selectedDayTime);
      selectedDayTime.setMinutes(selectedDayTime.getMinutes() + (duration?.inMinute || 0));
      const newReturnDate = selectedDayTime;
      const minReturn = {
        minDate: newReturnDate,
        minHour: newReturnDate.getHours(),
        minMinute: setMinute(newReturnDate),
      };
      setReturnMinDatetime({ ...minReturn });
      if (minReturn.minMinute > 55) {
        minReturn.minMinute = 55;
      }
      const selectedReturn = {
        hour: minReturn.minHour,
        minute: minReturn.minMinute,
        date: newReturnDate,
        selectedDate: formatDate(newReturnDate),
        dateChanged: false,
      };
      setReturnSelectedDateTime({ ...selectedReturn });
    }
  }, [duration, selectedDateTime]);
  // Checking return date validation

  // For Two way journey

  // For payment
  const [cardDetails, setCardDetails] = useState();
  const [submitCardDetails, setSubmitCardDetails] = useState(false);
  const [paymentType, setPaymentType] = useState({
    label: 'Prepaid',
    value: 'card',
  });
  const [cardType, setCardType] = useState('token');
  const [selectedCard, setSelectedCard] = useState();
  const [cardList, setCardList] = useState([]);
  const [isCardLoaded, setIsCardLoaded] = useState(false);
  // For payment
  // For Initial Tariff
  const [initialTariff, setInitialTariff] = useState([]);
  // For Initial Tariff

  const handleBookingTypeChange = (event) => {
    setSelectedBookingType(event.target.value);
  };

  const handleFormControlClick = (value) => {
    setSelectedBookingType(value);
  };

  // Add booking
  const showErrorMsg = (msg) => {
    toast.error(
      msg,
      {
        autoClose: 3000,
        theme: 'colored',
      },
    );
    toast.clearWaitingQueue();
  };

  const submitCardEvent = async () => {
    setSubmitCardDetails(true);
  };

  function isValidated() {
    if (!passenger) {
      showErrorMsg('Please select a passenger');
      if (passengerRef.current) {
        setTimeout(() => {
          passengerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }, 0);
      }
      setShowUserList(true);
    } else if (!userPickLocation) {
      if (pickUpLocationRef.current) {
        setTimeout(() => {
          pickUpLocationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }, 0);
      }
      setShowPickupError(true);
      showErrorMsg('Please select pick-up location');
    } else if (pickUpViaLocations.some((location) => location === null)) {
      pickUpViaLocations.forEach((location, index) => {
        if (location === null) {
          showErrorMsg(`Please add via point ${index + 1}`);
          const updatedErrors = [...viaLocationsError];
          updatedErrors[index] = true;
          setViaLocationsError(updatedErrors);

          if (viaLocationRefs.current[index]) {
            setTimeout(() => {
              viaLocationRefs.current[index].current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            }, 0);
          }
        }
      });
    } else if (!userDropLocation && selectedBookingType === 'TRANSFERS') {
      setShowDropError(true);
      if (dropOffLocationRef.current) {
        setTimeout(() => {
          dropOffLocationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }, 0);
      }
      showErrorMsg('Please select drop-off location');
    } else if (!userDropLocation && (selectedBookingType === 'HOURLY' && pickUpViaLocations.length > 0)) {
      showErrorMsg('Please select drop-off location');
    } else if (pickUpViaLocations.some((location) => location?.regionid !== userPickLocation?.regionid)) {
      pickUpViaLocations.forEach((location, index) => {
        if (location !== null) {
          showErrorMsg(`Via point ${index + 1} not in the same zone`);
        }
      });
    } else if (selectedBookingType === 'TRANSFERS' && userPickLocation?.regionid !== userDropLocation?.regionid) {
      showErrorMsg('Pick up and drop not in the same zone');
    } else if (adultNo === 0) {
      showErrorMsg('Please select at least 1 adult');
      setShowAdultError(true);
      if (adultRef.current) {
        setTimeout(() => {
          adultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }, 0);
      }
    } else if (!pickUpVehicle) {
      showErrorMsg('Please select an vehicle');
      if (vehicleRef.current) {
        setTimeout(() => {
          vehicleRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }, 0);
      }
      setShowPickUpVehicleError(true);
    } else if (addReturnJourney) {
      if (!returnUserPickLocation) {
        if (returnPickUpLocationRef.current) {
          setTimeout(() => {
            returnPickUpLocationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          }, 0);
        }
        setReturnShowPickupError(true);
        showErrorMsg('Please select return pick-up location');
      } else if (returnPickUpViaLocations.some((location) => location === null)) {
        returnPickUpViaLocations.forEach((location, index) => {
          if (location === null) {
            showErrorMsg(`Please add return via point ${index + 1}`);
            const updatedErrors = [...returnViaLocationsError];
            updatedErrors[index] = true;
            setReturnViaLocationsError(updatedErrors);

            if (returnViaLocationRefs.current[index]) {
              setTimeout(() => {
                returnViaLocationRefs.current[index].current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
              }, 0);
            }
          }
        });
      } else if (!returnUserDropLocation && selectedBookingType === 'TRANSFERS') {
        setReturnShowDropError(true);
        if (returnDropOffLocationRef.current) {
          setTimeout(() => {
            returnDropOffLocationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          }, 0);
        }
        showErrorMsg('Please select return drop-off location');
      } else if (!returnUserDropLocation && (selectedBookingType === 'HOURLY' && returnPickUpViaLocations.length > 0)) {
        showErrorMsg('Please select drop-off location');
      } else if (returnAdultNo === 0) {
        showErrorMsg('Please select at least 1 adult in return');
        setReturnShowAdultError(true);
        if (returnAdultRef.current) {
          setTimeout(() => {
            returnAdultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          }, 0);
        }
      } else if (!returnPickUpVehicle) {
        showErrorMsg('Please select a return vehicle');
        if (returnVehicleRef.current) {
          setTimeout(() => {
            returnVehicleRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          }, 0);
        }
        setReturnShowPickUpVehicleError(true);
      } else {
        return true;
      }
    } else {
      return true;
    }

    return false;
  }

  const confirmBooking = async (_cardDetails) => {
    setIsLoading(true);
    const pickUpDateTime = `${selectedDateTime.selectedDate} ${selectedDateTime.hour}:${selectedDateTime.minute}`;
    const returnPickUpDateTime = `${returnSelectedDateTime.selectedDate} ${returnSelectedDateTime.hour}:${returnSelectedDateTime.minute}`;
    let pickUpVia = [];
    let returnVia = [];
    if (pickUpViaLocations.length > 0) {
      pickUpVia = pickUpViaLocations.map((location) => {
        const {
          // eslint-disable-next-line camelcase
          address, postal_code, latLng, locationtype,
        } = location;
        return {
          via_location: address,
          // eslint-disable-next-line camelcase
          via_postcode: postal_code,
          via_loc_coord: {
            lat: parseFloat(latLng.split(',')[0]),
            lng: parseFloat(latLng.split(',')[1]),
          },
          via_loc_type: locationtype,
        };
      });
    }
    if (returnPickUpViaLocations.length > 0) {
      returnVia = returnPickUpViaLocations.map((location) => {
        const {
          // eslint-disable-next-line camelcase
          address, postal_code, latLng, locationtype,
        } = location;
        return {
          via_location: address,
          // eslint-disable-next-line camelcase
          via_postcode: postal_code,
          via_loc_coord: {
            lat: parseFloat(latLng.split(',')[0]),
            lng: parseFloat(latLng.split(',')[1]),
          },
          via_loc_type: locationtype,
        };
      });
    }

    const payload = {
      locationDetails: {
        regionId: userPickLocation?.regionid,
        pickupLocationId: userPickLocation?.locationid,
        dropLocationId: userDropLocation?.locationid,
        pickupLocation: userPickLocation?.address,
        dropLocation: userDropLocation?.address,
        pickupPostcode: userPickLocation?.postal_code,
        dropPostcode: userDropLocation?.postal_code,
        pickupLocCoord: {
          lat: parseFloat(userPickLocation?.latLng.split(',')[0]),
          lng: parseFloat(userPickLocation?.latLng.split(',')[1]),
        },
        dropLocCoord: userDropLocation && {
          lat: parseFloat(userDropLocation?.latLng.split(',')[0]),
          lng: parseFloat(userDropLocation?.latLng.split(',')[1]),
        },
        via: pickUpVia,
        pickupLocationType: userPickLocation?.locationtype,
        dropLocationType: userDropLocation?.locationtype,
        flightNo: userPickLocation?.locationtype === 'airport' ? pickUpFlight : '',
        passengerDropFlightNumber: userDropLocation?.locationtype === 'airport' ? dropFlight : '',
        distance: distance?.inMiles,
        duration: duration?.inMinute,
      },
      bookingDetails: {
        passengerId: passenger?.passengerId,
        bookingDate: new Date(),
        bookingType: selectedBookingType,
        travelDate: pickUpDateTime,
        bookingDuration: selectedBookingType === 'HOURLY' ? hourDuration?.value : 0,
        preferredVehicle: pickUpVehicle?.vehicle_cat_id,
        passengerAdultCnt: adultNo,
        passengerInfantCnt: infantNo,
        passengerChildCnt: childNo,
        passengerLuggageCnt: bagNo,
        driverNotes: driverNote,
        boardName: nameBoard,
        // eslint-disable-next-line no-unsafe-optional-chaining
        paymentType: (paymentType?.value).toUpperCase(),
        hasReturnJourney: addReturnJourney,
      },
    };
    let userCardDetails;
    if (paymentType?.value === 'card' && cardType === 'new-card') {
      userCardDetails = {
        cardHolderName: _cardDetails?.name,
        cardNumber: _cardDetails?.number,
        expMonth: _cardDetails?.month,
        expYear: _cardDetails?.year,
        cvc: _cardDetails?.cvv,
      };
    } else {
      userCardDetails = {
        cardToken: selectedCard?.card_token,
        last4: selectedCard?.last4,
        brand: selectedCard?.brand,
        isDefault: selectedCard?.is_default,
      };
    }
    payload.cardDetails = userCardDetails;

    let tariffDetails;

    if (selectedBookingType === 'TRANSFERS') {
      tariffDetails = {
        tariff: pickUpVehicle?.tariff,
        carParkingFee: pickUpVehicle?.car_parking_charge,
        taxPct: pickUpVehicle?.tax_pct,
        taxAmt: pickUpVehicle?.tax_amount,
        baseTariff: pickUpVehicle?.base_rate,
        finalTariff: pickUpVehicle?.tariff,
      };
    } else {
      console.log(pickUpVehicle);
      tariffDetails = {
        tariff: pickUpVehicle?.tariff,
        carParkingFee: pickUpVehicle?.car_parking_charge,
        taxPct: pickUpVehicle?.tax_pct,
        taxAmt: pickUpVehicle?.tax_amount,
        baseTariff: pickUpVehicle?.base_rate,
        minBookingHour: Number(pickUpVehicle?.min_hour),
        bookingHourlyRate: Number(pickUpVehicle?.hrly_rate),
        bookingMilesIncluded: pickUpVehicle?.miles_included,
        addlHourRate: Number(pickUpVehicle?.addl_hour_rate),
        addlMilesHour: Number(pickUpVehicle?.addl_miles_hourly),
        extraHourCharge: pickUpVehicle?.extra_hour_charge ? Number(pickUpVehicle?.extra_hour_charge) : 0,
        extraMileageCharge: pickUpVehicle?.extra_mile_charge ? Number(pickUpVehicle?.extra_mile_charge) : 0,
        jobHour: hourDuration?.value,
        jobMile: distance?.inMiles,
        finalTariff: pickUpVehicle?.tariff,
      };
    }
    payload.tariffDetails = tariffDetails;

    payload.billingAddressDetails = {
      costCenter,
    };

    let returnJourneyDetails;

    if (addReturnJourney) {
      returnJourneyDetails = {
        locationDetails: {
          regionId: returnUserPickLocation?.regionid,
          pickupLocationId: returnUserPickLocation?.locationid,
          dropLocationId: returnUserDropLocation?.locationid,
          pickupLocation: returnUserPickLocation?.address,
          dropLocation: returnUserDropLocation?.address,
          pickupPostcode: returnUserPickLocation?.postal_code,
          dropPostcode: returnUserDropLocation?.postal_code,
          pickupLocCoord: {
            lat: parseFloat(returnUserPickLocation?.latLng.split(',')[0]),
            lng: parseFloat(returnUserPickLocation?.latLng.split(',')[1]),
          },
          dropLocCoord: {
            lat: parseFloat(returnUserDropLocation?.latLng.split(',')[0]),
            lng: parseFloat(returnUserDropLocation?.latLng.split(',')[1]),
          },
          via: returnVia,
          pickupLocationType: returnUserPickLocation?.locationtype,
          dropLocationType: returnUserDropLocation?.locationtype,
          flightNo: returnPickUpFlight,
          passengerDropFlightNumber: returnDropFlight,
          distance: returnDistance?.inMiles,
          duration: returnDuration?.inMinute,
        },
        bookingDetails: {
          passengerId: passenger?.passengerId,
          bookingDate: new Date(),
          bookingType: selectedBookingType,
          travelDate: returnPickUpDateTime,
          bookingDuration: selectedBookingType === 'HOURLY' ? returnHourDuration?.value : 0,
          preferredVehicle: returnPickUpVehicle?.vehicle_cat_id,
          passengerAdultCnt: returnAdultNo,
          passengerInfantCnt: returnInfantNo,
          passengerChildCnt: returnChildNo,
          passengerLuggageCnt: returnBagNo,
          driverNotes: returnDriverNote,
          boardName: returnNameBoard,
          // eslint-disable-next-line no-unsafe-optional-chaining
          paymentType: (paymentType?.value).toUpperCase(),
          hasReturnJourney: addReturnJourney,
        },
      };
      let returnTariffDetails;

      if (selectedBookingType === 'TRANSFERS') {
        returnTariffDetails = {
          tariff: returnPickUpVehicle?.tariff,
          taxPct: returnPickUpVehicle?.tax_pct,
          taxAmt: returnPickUpVehicle?.tax_amount,
          baseTariff: returnPickUpVehicle?.base_rate,
          finalTariff: returnPickUpVehicle?.tariff,
          carParkingFee: returnPickUpVehicle?.car_parking_charge,
        };
      } else {
        returnTariffDetails = {
          tariff: returnPickUpVehicle?.tariff,
          carParkingFee: returnPickUpVehicle?.car_parking_charge,
          taxPct: returnPickUpVehicle?.tax_pct,
          taxAmt: returnPickUpVehicle?.tax_amount,
          baseTariff: returnPickUpVehicle?.base_rate,
          minBookingHour: returnPickUpVehicle?.min_hour,
          bookingHourlyRate: returnPickUpVehicle?.hrly_rate,
          bookingMilesIncluded: returnPickUpVehicle?.miles_included,
          addlHourRate: Number(returnPickUpVehicle?.addl_hour_rate),
          addlMilesHour: Number(returnPickUpVehicle?.addl_miles_hourly),
          extraHourCharge: Number(returnPickUpVehicle?.extra_hour_charge),
          extraMileageCharge: Number(returnPickUpVehicle?.extra_mile_charge),
          jobHour: returnHourDuration?.value,
          jobMile: returnDistance?.inMiles,
          finalTariff: returnPickUpVehicle?.tariff,
        };
      }
      returnJourneyDetails.tariffDetails = returnTariffDetails;
      payload.returnJourneyDetails = returnJourneyDetails;
    }

    const response = await api.put(`/corporate/booking/${bookingId}`, payload);
    if (response?.data?.status === 1) {
      // showErrorMsg(response?.message);
      if (tariffShowModal) {
        setTariffShowModal(false);
      }
      toast.success(
        response?.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
      setShowModal(true);
      setBookingRef(response?.data?.booking_ref);
      // router.push('/corporate/booking-summary');
    } else {
      toast.error(
        response?.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
      setIsLoading(false);
    }
  };

  const confirmCancel = async () => {
    setIsCancelLoading(true);
    setShowAlert(false);
    const response = await api.put(`/booking/cancel/${bookingId}`, {});
    setIsCancelLoading(false);
    if (response?.data?.status === 1) {
      toast.success(
        response?.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
      router.push('/corporate/booking-summary');
    } else {
      toast.error(
        response?.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
      setIsLoading(false);
    }
  };

  const updateBooking = async (_cardDetails) => {
    if (isValidated()) {
      if (paymentType?.value === 'card' && cardType === 'new-card') {
        if (!submitCardDetails) {
          await submitCardEvent();
        }
        if (_cardDetails?.number) {
          setCardDetails(_cardDetails);
        }
      }
      setSubmitCardDetails(false);
      if (paymentType?.value !== 'credit' && cardType === 'new-card' && !_cardDetails?.number) {
        return;
      }
      await confirmBooking(_cardDetails);
    }
  };

  const getCardDetails = async (data) => {
    if (data) {
      setCardDetails((prev) => ({
        ...prev,
        ...data,
      }));
      updateBooking({ ...cardDetails, ...data });
    } else {
      setCardDetails();
    }
  };

  // const swapJourny = () => {
  //   if (userDropLocation) {
  //     setReturnUserPickLocation(userDropLocation);
  //   }
  //   if (userPickLocation) {
  //     setReturnUserDropLocation(userPickLocation);
  //   }
  // };

  const removeSwapJourny = () => {
    setReturnUserPickLocation();
    setReturnUserDropLocation();
  };

  // Set Passenger
  useEffect(() => {
    async function getPassengerList() {
      const getAllPassenger = await api.get('/corporate/passengers');
      if (getAllPassenger?.data.length > 0) {
        setAllPassenger(getAllPassenger?.data);
      }
    }
    const fetchCardDetails = async () => {
      const cardDetails = await api.get('/card-details');
      if (cardDetails?.data) {
        setCardList(cardDetails?.data);
        setSelectedCard(cardDetails?.data[0]);
        setIsCardLoaded(true);
      } else {
        setCardType('new-card');
        setIsCardLoaded(true);
      }
    };
    const fetchInitialTariff = async () => {
      const payload = {
        hours: 0,
        adult_seat_count: 0,
        luggage_count: 0,
        round_trip: false,
        user_currency: 'GBP',
        distance: 0,
        region_id: '',
        user_type: 'C',
        display_vehicle: true,
      };
      const getTarrifList = await api.post('/tariff', payload);
      if (getTarrifList?.data.length > 0) {
        setInitialTariff(getTarrifList?.data);
      }
    };
    getPassengerList();
    fetchCardDetails();
    fetchInitialTariff();
  }, []);

  // Get booking detials
  useEffect(() => {
    if (!bookingId) return;
    const fetchTripDetails = async () => {
      const tripDetailsResponse = await api.get(`/corporate/booking/${bookingId}`);
      const activity = await api.get(
        `/booking/activity?booking_id=${bookingId}`,
      );
      setBookingActivity(activity?.data);
      const tripDetails = tripDetailsResponse?.data;
      setAllTripDetails(tripDetails);
      if (tripDetails?.client_payment_type === 'CREDIT') {
        const userPaymentType = {
          label: 'Credit',
          value: 'credit',
        };
        setPaymentType(userPaymentType);
      }
      setPickUpFlight(tripDetails?.passenger_flight_no);
      setDropUpFlight(tripDetails?.passenger_drop_flight_no);

      const selectedPassenger = allPassenger.filter((passenger) => passenger?.passengerId === tripDetails?.passenger_id);
      console.log(selectedPassenger);
      // if (!passenger) {
      setPassenger(selectedPassenger[0]);
      // }
      setSelectedBookingType(tripDetails?.booking_type);
      const pickUpcoordinates = tripDetails?.pickup_loc_coord.match(/-?\d+\.\d+/g);
      const reversedCoordinatesPickUp = `${pickUpcoordinates[1]},${pickUpcoordinates[0]}`;

      setUserPickLocation({
        address: tripDetails?.pickup_location,
        locationtype: tripDetails?.pickup_location_type,
        postal_code: tripDetails?.pickup_postcode,
        latLng: reversedCoordinatesPickUp,
        regionid: tripDetails?.region_id,
        placeid: '',
        locationid: tripDetails?.pickup_location_id,
      });
      if (tripDetails?.drop_location) {
        const dropCoordinates = tripDetails?.drop_loc_coord.match(/-?\d+\.\d+/g);
        const reversedCoordinatesDrop = `${dropCoordinates[1]},${dropCoordinates[0]}`;
        setUserDropLocation({
          address: tripDetails?.drop_location,
          locationtype: tripDetails?.drop_location_type,
          postal_code: tripDetails?.drop_postcode,
          latLng: reversedCoordinatesDrop,
          regionid: tripDetails?.region_id,
          placeid: '',
          locationid: tripDetails?.drop_location_id,
        });
      }
      if (tripDetails?.booking_via.length > 0) {
        const viaLocations = tripDetails?.booking_via.map((via) => {
          const viaCoordinates = via?.via_loc_coord.match(/-?\d+\.\d+/g);
          const reversedCoordinatesVia = `${viaCoordinates[1]},${viaCoordinates[0]}`;
          return {
            address: via?.via_location,
            latLng: reversedCoordinatesVia,
            isAirport: via?.via_loc_type === 'airport',
            locationid: '',
            postal_code: via?.via_postcode,
            regionid: tripDetails?.region_id,
            locationtype: via?.via_loc_type,
            placeid: '',
          };
        });
        setPickUpViaLocations(viaLocations);
      }
      const dateString = tripDetails?.travel_date;
      const travelDate = new Date(dateString);
      setSelectedDateTime({
        hour: travelDate.getHours(),
        minute: setMinute(travelDate),
        date: travelDate,
        selectedDate: formatDate(travelDate),
        dateChanged: false,
      });
      setAdultNo(tripDetails?.passenger_adult_cnt);
      setBagNo(tripDetails?.passenger_luggage_count);
      setChildNo(tripDetails?.passenger_child_cnt);
      setInfantNo(tripDetails?.passenger_infant_cnt);
      setDriverNote(tripDetails?.driver_notes);
      setCostCenter(tripDetails?.cost_center);
      setNameBoard(tripDetails?.passenger_board_name);
      const userVehicle = initialTariff.filter((vehicle) => vehicle?.vehicle_cat_id === tripDetails?.preferred_veh_id);

      // tariff: pickUpVehicle?.tariff,
      // carParkingFee: pickUpVehicle?.car_parking_charge,
      // taxPct: pickUpVehicle?.tax_pct,
      // taxAmt: pickUpVehicle?.tax_amount,
      // baseTariff: pickUpVehicle?.base_rate,
      // minBookingHour: pickUpVehicle?.min_hour,
      // bookingHourlyRate: pickUpVehicle?.hrly_rate,
      // bookingMilesIncluded: pickUpVehicle?.miles_included,
      // addlHourRate: Number(pickUpVehicle?.addl_hour_rate),
      // addlMilesHour: Number(pickUpVehicle?.addl_miles_hourly),
      // extraHourCharge: Number(pickUpVehicle?.addl_miles_hourly),
      // extraMileageCharge: Number(pickUpVehicle?.extra_mile_charge),
      // jobHour: hourDuration?.value,
      // jobMile: distance?.inMiles,
      // finalTariff: pickUpVehicle?.tariff,

      setPickUpVehicle({
        vehicle_cat_name: tripDetails?.preferred_veh_cat_name,
        car_parking_charge: Number(tripDetails?.client_car_park_charge || 0),
        tax_pct: Number(tripDetails?.client_tax_pct || 0),
        tax_amount: Number(tripDetails?.client_tax_amt || 0),
        base_rate: Number(tripDetails?.client_base_tariff || 0),
        min_hour: Number(tripDetails?.client_min_booking_hour || 0),
        hrly_rate: Number(tripDetails?.client_booking_hourly_rate || 0),
        miles_included: Number(tripDetails?.client_booking_miles_included || 0),
        addl_hour_rate: Number(tripDetails?.client_addl_hour_rate || 0),
        addl_miles_hourly: Number(tripDetails?.client_addl_miles_hour || 0),
        extra_hour_charge: Number(tripDetails?.client_extra_hour_charge || 0),
        extra_mile_charge: Number(tripDetails?.client_extra_mileage_charge || 0),
        jobHour: Number(tripDetails?.client_job_hour) || 0,
        jobMile: Number(tripDetails?.client_job_miles) || 0,
        tariff: tripDetails?.tariff,
        // base_rate: tripDetails?.client_base_tariff,
        // car_parking_charge: tripDetails?.client_car_park_charge,
        // tax_pct: tripDetails?.client_tax_pct,
        // tax_amount: tripDetails?.client_tax_amt,
        vehicle_imge_url: tripDetails?.prefereed_vehicle_img_url || 'https://rdbucket1.s3.eu-west-2.amazonaws.com/rd-vehicle-category-list/first-S-Class.png',
        vehicle_cat_desc: tripDetails?.preferred_veh_cat_desc,
        vehicle_cat_id: tripDetails?.preferred_veh_id,
        adult_seat_count: userVehicle[0]?.adult_seat_count,
        luggage_count: userVehicle[0]?.luggage_count,
      });
      setIsLoaded(true);
    };
    fetchTripDetails();
    if (allPassenger.length > 0 && initialTariff.length > 0 && !isLoaded) {
      fetchTripDetails();
    }
  }, [bookingId, allPassenger, initialTariff, isLoaded]);

  // Add new passenger
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to handle the creation of a passenger
  const handleCreate = async (newPassenger) => {
    try {
      const response = await api.post('/corporate/passengers', newPassenger);
      if (response.data.status === 1) {
        toast.success(response.message || 'Passenger created successfully.', {
          autoClose: 3000,
          theme: 'colored',
        });
        const getAllPassenger = await api.get('/corporate/passengers');
        if (getAllPassenger?.data.length > 0) {
          const createdPassenger = getAllPassenger?.data.filter((user) => user?.passengerId === response.data?.passengerId);
          console.log(createdPassenger);
          setPassenger(createdPassenger[0]);
          setAllPassenger(getAllPassenger?.data);
        }
        closeModal();
      } else {
        toast.error(response.message || 'Passenger creation failed.', {
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

  const getRemainAmount = () => {
    const amount = ((Number(pickUpVehicle?.tariff)) - Number(allTripDetails?.tariff)).toFixed(2);
    return {
      amount: Math.abs(amount),
      isGreter: amount > 0,
    };
  };

  const checkTariff = async () => {
    if (isValidated()) {
      if (getRemainAmount().amount === 0) {
        setIsLoading(true);
        await updateBooking();
      } else {
        setTariffShowModal(true);
      }
    }
  };

  return (
    <div className="min-h-[80vh]">
      {
        showAlert && <ConfirmAlert onRequestClose={() => setShowAlert(false)} label={confrimLabel} handleConfirm={onConfrim} />
      }

      {
        !isLoaded && (
          <Loader className="!w-14 !h-14" />
        )
      }
      {
        isLoaded
        && (
          <>
            <PassengerModal
              isOpen={modalOpen}
              onRequestClose={closeModal}
              onCreate={handleCreate}
              passenger={[]}
            />
            {showModal && (
              // eslint-disable-next-line react/jsx-no-bind
              <Modal>
                <div className="relative flex flex-col items-center justify-center py-10 bg-white rounded-lg shadow">
                  <div className="max-h-[60px] max-w-[60px]">
                    <Pic
                      src="/images/icons/confirm.png"
                      className="object-contain"
                      alt="confirm_icon"
                    />
                  </div>
                  <div>
                    <div className="py-4 text-center">
                      <H2 className="font-bold text-black ">
                        Booking Updated Successfully
                      </H2>
                      <P className="text-[#4a4a4a]">
                        Your booking has been updated.
                      </P>
                      <P className="text-[#4a4a4a]">
                        Your booking reference no is
                        {' '}
                        <b className="underline">
                          #
                          {bookingRef}
                        </b>
                      </P>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    <Button
                      type="button"
                      className="btn btn-primary text-white"
                      onClick={() => { setShowViewBooking(false); }}
                    >
                      Go to Bookings
                    </Button>
                  </div>
                </div>
              </Modal>
            )}
            {tariffShowModal && (
              // eslint-disable-next-line react/jsx-no-bind
              <Modal>
                <div className="relative flex flex-col items-center justify-center py-10 bg-white rounded-lg shadow">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="p-2 rounded-full cursor-pointer w-9 h-9 hover:bg-red-100 absolute right-1 top-2"
                    onClick={() => { setTariffShowModal(false); }}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div className="max-h-[60px] max-w-[60px]">
                    <Pic
                      src="/images/icons/confirm.png"
                      className="object-contain"
                      alt="confirm_icon"
                    />
                  </div>
                  <div>
                    <div className="py-4 text-center">
                      <H2 className="font-bold text-center text-[#59981A]">
                        Tariff has been updated!
                      </H2>
                      <H3 className="!text-md text-center mt-3 mb-1 text-gray-700">
                        Previous booking amount
                        {' '}
                        {' '}
                        <b className="text-gray-600 uppercase">
                          {formatPrice(allTripDetails.tariff, userCurrency || 'GBP')}
                        </b>
                      </H3>

                      <H3 className="!text-md text-center mt-3 mb-1 text-gray-700">
                        New booking amount
                        {' '}
                        {' '}
                        <b className="text-primary uppercase">
                          {formatPrice(pickUpVehicle?.tariff, userCurrency || 'GBP')}
                        </b>
                      </H3>
                      <div className="mb-8">
                        <h3 className="!text-md text-center mt-3 mb-4 text-gray-700">
                          <b className="uppercase">
                            {formatPrice(getRemainAmount().amount, userCurrency || 'GBP')}
                          </b>
                          {getRemainAmount().isGreter ? ' will be charged. ' : ' will be refunded to you at the earliest. '}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    <Button
                      type="button"
                      className="btn btn-primary text-white"
                      onClick={updateBooking}
                    >
                      Confirm Update
                    </Button>
                  </div>
                </div>
              </Modal>
            )}
            <div className="grid lg:grid-cols-5 grid-cols-1 mx-auto gap-x-3 mb-5">
              <div className="lg:col-span-3 col-span-5">
                <TabsUi activeTab={activeTab} onChange={setActiveTab} />
              </div>

              <div className="lg:col-span-3 col-span-5">
                <RideRef tripDetails={allTripDetails} />
              </div>

              {activeTab === 0 ? (
                <>
                  <div className="lg:col-span-3 col-span-5">
                    {/* Passenger Autocomplete */}
                    <div className="card w-full bg-white rounded-md">
                      <div className="card-body sm:px-4 px-2 py-2">
                        <div className="card-title flex justify-between border-b border-[#DFDFDF] sm:px-4 px-2 py-2 flex-wrap">
                          <P className="!text-[#3B3B3B]">PASSENGERS / EMPLOYEE</P>
                          <button
                            type="button"
                            className="text-primary text-sm flex items-center gap-x-2"
                            onClick={() => openModal({})}
                          >
                            <img src="/images/icons/plus_primary.svg" alt="plus_primary" />
                            Add new passenger
                          </button>
                        </div>
                        <div className="py-4 sm:px-4 px-2 flex sm:flex-row flex-col gap-x-2 w-full items-center">
                          <P className="text-[#797979] !text-normal text-left sm:w-auto w-full whitespace-pre">
                            Passenger
                            {' '}
                            <span className="text-red-500">*</span>
                          </P>
                          <div className="w-full">
                            <PassengerAutoComplete
                              setPassenger={setPassenger}
                              passenger={passenger}
                              openModal={openModal}
                              allPassenger={allPassenger}
                              passengerRef={passengerRef}
                              showUserList={showUserList}
                              setShowUserList={setShowUserList}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Passenger Autocomplete */}
                    <div className="card w-full bg-white rounded-md my-2">
                      <div className="card-body sm:px-4 px-2 py-2">
                        <div className="card-title flex flex-wrap gap-x-4 border-[#DFDFDF] sm:px-4 px-2 py-2">
                          <div
                            className={`form-control cursor-pointer ${selectedBookingType === 'TRANSFERS' ? 'active' : ''}`}
                            onClick={() => handleFormControlClick('TRANSFERS')}
                          >
                            <label className="label" htmlFor="bookingtype">
                              <input
                                type="radio"
                                name="bookingtype"
                                value="TRANSFERS"
                                className="radio radio-primary !w-[1.2rem] !h-[1.2rem]"
                                checked={selectedBookingType === 'TRANSFERS'}
                                onChange={handleBookingTypeChange}
                              />
                              <span className="label-text text-primary pl-2 cursor-pointer">
                                TRANSFERS
                              </span>
                            </label>
                          </div>
                          <div
                            className={`form-control cursor-pointer sm:pl-2 ${selectedBookingType === 'HOURLY' ? 'active' : ''}`}
                            onClick={() => handleFormControlClick('HOURLY')}
                          >
                            <label className="label" htmlFor="bookingtype">
                              <input
                                type="radio"
                                name="bookingtype"
                                value="HOURLY"
                                className="radio radio-primary !w-[1.2rem] !h-[1.2rem]"
                                checked={selectedBookingType === 'HOURLY'}
                                onChange={handleBookingTypeChange}
                              />
                              <span className="label-text text-primary pl-4 cursor-pointer">
                                HOURLY
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* One way journey */}
                        {/* Pickup Location */}
                        <div ref={locationRef}>
                          <LocationComponent
                            pickUpLocation={userPickLocation}
                            setPickUpLocation={setUserPickLocation}
                            dropLocation={userDropLocation}
                            setDropLocation={setUserDropLocation}
                            viaLocations={pickUpViaLocations}
                            setViaLocations={setPickUpViaLocations}
                            showPickupError={showPickupError}
                            setShowPickupError={setShowPickupError}
                            pickUpFlight={pickUpFlight}
                            setPickUpFlight={setPickUpFlight}
                            dropFlight={dropFlight}
                            setDropUpFlight={setDropUpFlight}
                            bookingType={selectedBookingType}
                            hourDuration={hourDuration}
                            setHourDuration={setHourDuration}
                            setUserCurrency={setUserCurrency}
                            pickUpLocationRef={pickUpLocationRef}
                            showDropError={showDropError}
                            setShowDropError={setShowDropError}
                            viaLocationsError={viaLocationsError}
                            setViaLocationsError={setViaLocationsError}
                            viaLocationRefs={viaLocationRefs}
                            dropOffLocationRef={dropOffLocationRef}
                            setNewDate={setNewDate}
                          />
                        </div>
                        {/* Drop location */}
                      </div>
                      {/* Ride date time */}
                      {
                        minDatetime?.minDate && selectedDateTime
                        && <DateTimePicker setShowCalender={setShowPickUpDateCalender} showCalender={showPickUpDateCalender} selectedDateTime={selectedDateTime} setSelectedDateTime={setSelectedDateTime} minDatetime={minDatetime} setMinDatetime={setMinDatetime} formatDate={formatDate} setMinute={setMinute} compareWith={minDatetime.minDate} addHours={addHours} date={date} />
                      }

                      {/* Ride date time */}
                      {/* Additional Information */}
                      <AdditionalInformation adultNo={adultNo} setAdultNo={setAdultNo} infantNo={infantNo} setInfantNo={setInfantNo} childNo={childNo} setChildNo={setChildNo} bagNo={bagNo} setBagNo={setBagNo} adultRef={adultRef} showAdultError={showAdultError} setShowAdultError={setShowAdultError} />
                      {/* Additional Information */}
                      {/* Cost Center */}
                      <div className="grid sm:grid-cols-7 grid-cols-1 items-center py-2 sm:px-5 px-2">
                        <div className="col-span-2">
                          <P className="!text-[#797979] !text-normal !text-sm capitalize">
                            Cost center
                          </P>
                        </div>
                        <div className="col-span-5">
                          <Input onChange={(e) => { setCostCenter(e?.target?.value); }} value={costCenter} placeholder="Cost center" />
                        </div>
                      </div>
                      {/* Cost Center */}
                      {/* Add Retun */}
                      {
                        !addReturnJourney && selectedBookingType === 'TRANSFERS'
                        && (
                          <div className="grid sm:grid-cols-7 grid-cols-1 sm:px-4 px-2 pb-3">
                            {/* <div className="col-span-7 py-2 flex items-end justify-start">
                <button
                  type="button"
                  className="text-primary text-sm flex items-center gap-x-2 font-semibold"
                  onClick={() => { setAddReturnJourney(!addReturnJourney); swapJourny(); }}
                >
                  <img src="/images/icons/plus_primary.svg" alt="plus_primary" />
                  Add return journey
                </button>
              </div> */}
                          </div>
                        )
                      }
                      {/* Add Retun */}
                    </div>
                    {/* Driver Note */}
                    <div className="my-3">
                      <DriverNote driverNote={driverNote} setDriverNote={setDriverNote} nameBoard={nameBoard} setNameBoard={setNameBoard} />
                    </div>
                    {/* Driver Note */}
                    {/* One way journey */}
                    {/* Two way journey */}
                    {addReturnJourney
                      && (
                        <>
                          <div className="card w-full bg-white rounded-md my-2">
                            <div className="card-body px-4 py-2">
                              <div className="card-title flex justify-between gap-x-4 border-[#DFDFDF] sm:px-4 px-2 py-2 flex-wrap">
                                <P className="text-primary font-bold text-sm uppercase">RETURN JOURNEY</P>
                                <button
                                  type="button"
                                  className="text-primary text-sm flex items-center gap-x-2 font-semibold"
                                  onClick={() => { setAddReturnJourney(!addReturnJourney); removeSwapJourny(); }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                    <path d="M1 1H11" stroke="#EC5C29" strokeWidth="1.6" strokeLinecap="round" />
                                  </svg>
                                  Remove return journey
                                </button>
                              </div>
                              {/* Pickup Location */}
                              <LocationComponent
                                pickUpLocation={returnUserPickLocation}
                                setPickLocation={setReturnUserPickLocation}
                                dropLocation={returnUserDropLocation}
                                setDropLocation={setReturnUserDropLocation}
                                viaLocations={returnPickUpViaLocations}
                                setViaLocations={setReturnPickUpViaLocations}
                                showPickupError={returnShowPickupError}
                                setShowPickupError={setReturnShowPickupError}
                                pickUpFlight={returnPickUpFlight}
                                setPickUpFlight={setReturnPickUpFlight}
                                dropFlight={returnDropFlight}
                                setDropUpFlight={setReturnDropUpFlight}
                                bookingType={selectedBookingType}
                                hourDuration={returnHourDuration}
                                setHourDuration={setReturnHourDuration}
                                setUserCurrency={setReturnUserCurrency}
                                pickUpLocationRef={returnPickUpLocationRef}
                                showDropError={returnShowDropError}
                                setShowDropError={setReturnShowDropError}
                                viaLocationsError={returnViaLocationsError}
                                setViaLocationsError={setReturnViaLocationsError}
                                viaLocationRefs={returnViaLocationRefs}
                                dropOffLocationRef={returnDropOffLocationRef}
                                setNewDate={setNewDate}
                              />
                              {/* Drop location */}
                            </div>
                            {/* Ride date time */}
                            {
                              returnMinDatetime.minDate && returnSelectedDateTime
                              && <DateTimePicker setShowCalender={setReturnShowPickUpDateCalenger} showCalender={returnShowPickUpDateCalenger} selectedDateTime={returnSelectedDateTime} setSelectedDateTime={setReturnSelectedDateTime} minDatetime={returnMinDatetime} setMinDatetime={setReturnMinDatetime} formatDate={formatDate} setMinute={setMinute} compareWith={returnMinDatetime.minDate} addHours={addHours} date={date} />
                            }
                            {/* Ride date time */}
                            {/* Additional Information */}
                            <AdditionalInformation adultNo={returnAdultNo} setAdultNo={setReturnAdultNo} infantNo={returnInfantNo} setInfantNo={setReturnInfantNo} childNo={returnChildNo} setChildNo={setReturnChildNo} bagNo={returnBagNo} setBagNo={setReturnBagNo} adultRef={returnAdultRef} showAdultError={returnShowAdultError} setShowAdultError={setReturnShowAdultError} />
                            {/* Additional Information */}
                            {/* Cost Center */}
                            <div className="grid sm:grid-cols-7 grid-cols-1 items-center py-2 sm:px-4 px-2">
                              <div className="col-span-2">
                                <P className="!text-[#797979] !text-normal !text-sm capitalize">
                                  Cost center
                                </P>
                              </div>
                              <div className="col-span-5">
                                <Input onChange={(e) => { setReturnCostCenter(e?.target?.value); }} value={returnCostCenter} placeholder="Cost center" />
                              </div>
                            </div>
                            {/* Cost Center */}
                          </div>
                          {/* Driver Note */}
                          <div className="collapse collapse-arrow my-3 bg-white !rounded-md">
                            <input type="checkbox" />
                            <div className="collapse-title text-sm font-medium text-[#3B3B3B] text-bold uppercase">
                              Return Driver Notes & Return Name Board
                            </div>
                            <div className="collapse-content">
                              <DriverNote driverNote={returnDriverNote} setDriverNote={setReturnDriverNote} nameBoard={returnNameBoard} setNameBoard={setReturnNameBoard} />
                            </div>
                          </div>
                          {/* Driver Note */}

                          {/* Two way journey */}
                        </>
                      )}
                  </div>
                  {/* col-span-3 */}
                  <div className="lg:col-span-2 col-span-5 lg:-mt-24 mt-5">
                    {/* One way journey */}
                    <div className="h-80">
                      <MapDirection
                        origin={userPickLocation?.latLng}
                        destination={destination}
                        viaLocations={wayLocations}
                        setDistance={setDistance}
                        setDuration={setDuration}
                      />
                    </div>
                    <div className="grid grid-cols-2 bg-white py-4 px-2 my-4">
                      <div className="col-span-1 text-center">
                        <p className="text-[#606060] text-sm font-normal">Travel Distance</p>
                        <p className="text-[#606060] text-sm font-semibold">
                          {distance?.inKm || 0}
                          {' '}
                          kms/
                          {' '}
                          {distance?.inMiles || 0}
                          {' '}
                          miles
                        </p>
                      </div>
                      <div className="col-span-1 text-center">
                        <p className="text-[#606060] text-sm font-normal">Travel Time</p>
                        <p className="text-[#606060] text-sm font-semibold">{duration?.formattedHour || '0hr 0min'}</p>
                      </div>
                    </div>
                    {/* One way journey */}
                    {/* Two way journey */}
                    {addReturnJourney && (
                      <>
                        {/* Two way journey */}
                        <div className="h-80">
                          <MapDirection
                            origin={returnUserPickLocation?.latLng}
                            destination={returnDestination}
                            viaLocations={returnWayLocations}
                          />
                        </div>
                        <div className="grid grid-cols-2 bg-white py-4 px-2 my-4">
                          <div className="col-span-1 text-center">
                            <p className="text-[#606060] text-sm font-normal">Travel Distance</p>
                            <p className="text-[#606060] text-sm font-semibold">
                              {returnDistance?.inKm || 0}
                              {' '}
                              kms/
                              {' '}
                              {returnDistance?.inMiles || 0}
                              {' '}
                              miles
                            </p>
                          </div>
                          <div className="col-span-1 text-center">
                            <p className="text-[#606060] text-sm font-normal">Travel Time</p>
                            <p className="text-[#606060] text-sm font-semibold">{returnDuration?.formattedHour || '0hr 0min'}</p>
                          </div>
                        </div>
                        {/* Two way journey */}
                      </>
                    )}
                    {/* Two way journey */}

                    {/* One way journey */}
                    <Tariff
                      pickUpLocation={userPickLocation}
                      dropLocation={userDropLocation}
                      viaLocations={pickUpViaLocations}
                      setPickUpVehicle={setPickUpVehicle}
                      pickUpVehicle={pickUpVehicle}
                      setDistance={setDistance}
                      setDuration={setDuration}
                      setDestination={setDestination}
                      setWayLocations={setWayLocations}
                      bookingHours={hourDuration?.value}
                      bookingType={selectedBookingType}
                      returnJourney={addReturnJourney}
                      label="PICKUP VEHICLE"
                      userCurrency={userCurrency}
                      isShowOpenTariff={false}
                      initialTariff={initialTariff}
                      vehicleError={showPickUpVehicleError}
                      vehicleRef={vehicleRef}
                    />
                    {/* One way journey */}
                    {/* Two way journey */}
                    {addReturnJourney && (
                      <div className="mt-5">
                        <Tariff
                          pickUpLocation={returnUserPickLocation}
                          dropLocation={returnUserDropLocation}
                          viaLocations={returnPickUpViaLocations}
                          setPickUpVehicle={setReturnPickUpVehicle}
                          pickUpVehicle={returnPickUpVehicle}
                          setDistance={setReturnDistance}
                          setDuration={setReturnDuration}
                          setDestination={setReturnDestination}
                          setWayLocations={setReturnWayLocations}
                          bookingHours={returnHourDuration?.value}
                          bookingType={selectedBookingType}
                          returnJourney={addReturnJourney}
                          label="RETURN VEHICLE"
                          userCurrency={returnUserCurrency}
                          initialTariff={initialTariff}
                          vehicleError={returnShowPickUpVehicleError}
                          vehicleRef={returnVehicleRef}
                        />
                      </div>
                    )}
                    {/* Two way journey */}
                    <div className="card w-full bg-white rounded-md mt-3">
                      <div className="card-body px-4 py-2">
                        <PaymentOptions setCardDetails={setCardDetails} submitCardDetails={submitCardDetails} setPaymentType={setPaymentType} setSelectedCard={setSelectedCard} selectedCard={selectedCard} setCardType={setCardType} cardType={cardType} paymentType={paymentType} setSubmitCardDetails={setSubmitCardDetails} getCardDetails={getCardDetails} cardList={cardList} loaded={isCardLoaded} />
                      </div>
                    </div>
                    <div className="lg:flex items-end md:flex-row flex-col gap-3 md:w-auto w-full hidden mt-5">
                      <Button
                        className="btn btn-outline btn-primary uppercase !h-12 !text-xs px-8 sm:w-auto w-full hover:!text-white"
                        isLoading={isCancelLoading}
                        onClick={() => {
                          setShowAlert(true);
                          setOnConfirm(() => confirmCancel);
                          setConfrimLabel('Do you want to cancel the booking?');
                        }}
                      >
                        Cancel Booking
                      </Button>
                      <Button className="btn btn-primary uppercase !h-12 !text-xs px-8 sm:w-auto w-full" isLoading={isLoading} disabled={isLoading} onClick={() => { checkTariff(); }}>Upadate Booking</Button>
                    </div>
                  </div>
                </>
              )
                : (
                  <>
                    <div className="lg:col-span-3 col-span-5 -mt-3">
                      <div className="bg-[#FFFFFF] px-6 py-3 mt-5 rounded-md">
                        <P className="font-semibold py-3 text-[#000] text-[15px] text-left"> Employee/Passenger: </P>
                        <div className="flex flex-col sm:flex-row justify-start gap-x-3 sm:gap-y-0 gap-y-3">
                          <div className="flex gap-x-2 justify-start items-center sm:border-r border-[#ddd] pr-4">
                            <img src="/images/global/user_primary.svg" alt="user_primary" />
                            <P className="text-sm font-medium">
                              {passenger?.passengerFname}
                              {' '}
                              {passenger?.passengerLname}
                            </P>
                          </div>
                          <div className="flex gap-x-2 justify-start items-center">
                            <img src="/images/global/mobile_primary.svg" alt="mobile_primary" />
                            <P className="text-sm font-medium">
                              {
                                passenger?.passengerMobile ? (
                                  <>
                                    {passenger?.passengerMobileCntrycd}
                                    {passenger?.passengerMobile}
                                  </>
                                )
                                  : <>NA</>

                              }
                            </P>
                          </div>
                          <div className="flex gap-x-2 justify-start items-center sm:border-l border-[#ddd] sm:pl-4">
                            {
                              passenger?.passengerEmail
                              && (
                                <>
                                  <img src="/images/global/email_primary.svg" alt="email_primary" />
                                  <P className="text-sm font-medium">
                                    {passenger?.passengerEmail}
                                  </P>
                                </>
                              )
                            }
                          </div>
                        </div>
                      </div>
                      {/* Location details */}
                      <div className="bg-[#FFFFFF] px-6 py-6 mt-5 mb-5">
                        <div className="grid sm:grid-cols-4 grid-cols-5 gap-y-4">
                          <div className="sm:col-span-1 col-span-2">
                            <div className="flex gap-x-2 items-center">
                              <img src="/images/global/arrow_primary.svg" alt="arrow_primary" />
                              <P className="!text-[#797979] text-sm">Category:</P>
                            </div>
                          </div>
                          <div className="col-span-3">
                            <P className="!text-[#282828]">
                              {selectedBookingType}
                            </P>
                          </div>
                          <div className="sm:col-span-1 col-span-2">
                            <div className="flex gap-x-2 items-center">
                              <img src="/images/global/calendar_primary.svg" alt="calendar_primary.svg" />
                              <P className="!text-[#797979] text-sm">Date &amp; Time:</P>
                            </div>
                          </div>
                          <div className="col-span-3">
                            <P className="!text-[#282828]">
                              {getDate(allTripDetails?.travel_date)}
                              ,
                              {' '}
                              {getTime(allTripDetails?.travel_date)}
                            </P>
                          </div>
                          <div className="sm:col-span-1 col-span-2">
                            <div className="flex gap-x-2 items-center">
                              <img src="/images/global/location_outline_primary.svg" alt="location_outline_primary" />
                              <p className="!text-[#797979] text-sm">Pickup:</p>
                            </div>
                          </div>
                          <div className="col-span-3">
                            <P className="!text-[#282828]">
                              {userPickLocation?.address}
                            </P>
                            {
                              allTripDetails?.passenger_flight_no
                              && (
                                <div className="flex items-center pt-2 gap-x-1 pl-5">
                                  <MdOutlineFlightLand className="h-6 w-6" />
                                  <P className="leading-[14px] w-full text-left !text-xs  text-neutral-700 font-semibold -mt-1">{allTripDetails?.passenger_flight_no}</P>
                                </div>
                              )
                            }
                          </div>
                          {
                            pickUpViaLocations.length > 0 && pickUpViaLocations.map((via, index) => (
                              <>
                                <div className="sm:col-span-1 col-span-2">
                                  <div className="flex gap-x-2 items-center">
                                    <div className="relative">
                                      <img src="/images/global/ring_primary.svg" alt="location_outline_primary" className="w-[16px]" />
                                      <span className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-primary text-[10px] font-semibold">1</span>
                                    </div>
                                    <P className="!text-[#797979] text-sm">
                                      {' '}
                                      Via Point
                                      {' '}
                                      {index + 1}
                                      {' '}
                                      :
                                      {' '}
                                    </P>
                                  </div>
                                </div>
                                <div className="col-span-3 ">
                                  <p className="!text-[#282828]">{via?.address}</p>
                                </div>
                              </>
                            ))
                          }

                          {
                            userDropLocation?.address && (
                              <>
                                <div className="sm:col-span-1 col-span-2">
                                  <div className="flex gap-x-2 items-center">
                                    <img src="/images/global/destination_primary.svg" alt="destination_primary" />
                                    <p className="!text-[#797979] text-sm">Drop-off:</p>
                                  </div>
                                </div>
                                <div className="col-span-3">
                                  <P className="!text-[#282828]">
                                    {userDropLocation?.address}
                                  </P>
                                  {
                                    allTripDetails?.passenger_drop_flight_no
                                    && (
                                      <div className="flex items-center gap-x-1 pl-5">
                                        <MdOutlineFlightTakeoff className="h-6 w-6" />
                                        <P className="leading-[14px] w-full text-left !text-xs  text-neutral-700 font-semibold -mt-1">{allTripDetails?.passenger_drop_flight_no}</P>
                                      </div>
                                    )
                                  }
                                </div>
                              </>
                            )
                          }
                          <div className="sm:col-span-1 col-span-2">
                            <div className="flex gap-x-1 items-center">
                              <img src="/images/global/vehicle_primary.svg" alt="destination_primary" className="w-[16px]" />
                              <P className="!text-[#797979] text-sm">Vehicle :</P>
                            </div>
                          </div>
                          <div className="col-span-3"><P className="!text-[#282828]">{allTripDetails?.preferred_veh_cat_desc || 'Not assigned yet'}</P></div>
                          <div className="col-span-3"><P className="!text-[#797979] text-sm"> Additional Information: </P></div>
                          <div className="col-span-4 -mt-6 flex sm:flex-row flex-col items-start">
                            <div className="flex flex-wrap py-4 w-[250px] justify-between items-center">
                              <div className="w-1/2 flex items-center justify-start gap-x-1 text-[13px] font-medium">
                                <img src="/images/global/user_primary.svg" alt="user_primary" className="w-[14px] h-[14px]" />
                                <P>
                                  {adultNo}
                                  {' '}
                                  Adults
                                </P>
                              </div>
                              <div className="w-1/2 flex gap-x-1 text-[13px] font-medium items-center justify-start">
                                <img src="/images/global/luggage_primary.svg" alt="luggage_primary" className="w-[14px] h-[14px]" />
                                <P>
                                  {bagNo}
                                  {' '}
                                  Luggage
                                </P>
                              </div>
                              <div className="w-full flex gap-x-1 text-[13px] font-medium items-center justify-start mt-1 pt-1 border-t border-[#ddd]">
                                <img src="/images/global/child_seat_primary.svg" alt="child_seat_primary" className="w-[17px] h-[17px]" />
                                <P className="rotate-45">+</P>
                                <P>
                                  {childNo + infantNo}
                                  {' '}
                                  Child seat requested
                                  {' '}
                                </P>
                              </div>
                            </div>
                            <div className="sm:ml-10 sm:-mt-3">
                              <P className="!text-[#797979] text-sm">Cost Center:</P>
                              <div className="flex items-center gap-x-2">
                                <div className="relative w-4 h-4">
                                  <Image fill src="/images/global/cost_center_primary.svg" alt="cost_center_primary" />
                                </div>
                                <P className="!text-[#282828]">{costCenter || 'Not specified'}</P>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Location details */}
                      {/* Driver details */}
                      {
                        allTripDetails?.driver_fname ? (
                          <div className="bg-[#FFFFFF] px-6 py-6 mt-5 ">
                            <div className="flex flex-col sm:flex-row justify-start gap-x-3 sm:gap-y-0 gap-y-3 mt-2">
                              <div className="flex gap-x-2 justify-start items-center">
                                <img src="/images/global/driver_primary.svg" alt="driver_primary" />
                                <P className="text-sm font-medium !text-[#797979] min-w-[60px]">Driver:</P>
                              </div>
                              <div className="flex gap-x-2 justify-start items-center">
                                <img src="/images/global/user_primary.svg" alt="user_primary" />
                                <P className="text-sm font-medium">
                                  {allTripDetails?.driver_fname}
                                  {' '}
                                  {allTripDetails?.driver_lname}
                                </P>
                              </div>
                              <div className="flex gap-x-2 justify-start items-center sm:border-l border-[#ddd] sm:pl-4">
                                <img src="/images/global/mobile_primary.svg" alt="mobile_primary" />
                                <P className="text-sm font-medium">
                                  {allTripDetails?.driver_mobile}
                                </P>
                              </div>
                            </div>
                          </div>
                        )
                          : (
                            <div className="bg-[#FFFFFF] px-8 py-6 mt-5 ">
                              <div className="flex flex-col sm:flex-row justify-start gap-x-3 sm:gap-y-0 gap-y-3 mt-2">
                                <div className="flex gap-x-2 justify-start items-center">
                                  <img src="/images/global/driver_primary.svg" alt="driver_primary" />
                                  <P className="text-sm font-medium !text-[#797979] min-w-[60px]">Driver:</P>
                                </div>
                                <div className="flex gap-x-2 justify-start items-center">
                                  <P className="text-sm font-medium">
                                    Not assigned yet
                                  </P>
                                </div>
                              </div>
                            </div>
                          )
                      }
                      {/* Driver details */}
                      {/* Driver note */}
                      <div className="bg-[#FFFFFF] px-6 pt-2 pb-1 mt-5">
                        <div className="grid sm:grid-cols-4 grid-cols-1 py-3">
                          <div className="col-span-1">
                            <P className="flex font-medium gap-x-2 rounded-t-lg !text-[#797979] text-left">
                              <img src="/images/global/note_primary.svg" alt="note_primary" />
                              {' '}
                              Driver Notes:
                            </P>
                          </div>
                          <div className="col-span-3">
                            {
                              renderWithNewlines(driverNote)
                            }
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FFFFFF] px-6 pt-2 pb-1 mt-5">
                        <div className="grid sm:grid-cols-4 grid-cols-1 items-start py-3">
                          <div className="col-span-1">
                            <P className="flex font-medium gap-x-2 rounded-t-lg !text-[#797979] text-left">
                              <img src="/images/global/name_board_primary.svg" alt="name_board_primary" />
                              {' '}
                              Name Board:
                            </P>
                          </div>
                          <div className="col-span-3">
                            {nameBoard}
                          </div>
                        </div>
                      </div>
                      {/* Driver note */}

                    </div>
                    <div className="lg:col-span-2 col-span-5 lg:-mt-24 mt-4">
                      <Activity activity={bookingActivity} />
                    </div>
                  </>
                )}
              <div className={`col-span-5 flex gap-y-4 flex-wrap items-center my-10 ${activeTab === 1 ? 'justify-end' : 'justify-between'}`}>
                <Button className="btn btn-outline btn-primary uppercase !h-10 !text-xs md:w-auto w-full hover:!text-white" onClick={() => { setShowViewBooking(false); }}>
                  Go Back
                </Button>
                {
                  (activeTab === 0 && allTripDetails?.ride_status !== 'CANCELLED')
                  && (
                    <div className="flex items-end md:flex-row flex-col gap-3 md:w-auto w-full lg:hidden">
                      <Button
                        className="btn btn-outline btn-primary uppercase !h-12 !text-xs px-8 md:w-auto w-full hover:!text-white"
                        isLoading={isCancelLoading}
                        onClick={() => {
                          setShowAlert(true);
                          setOnConfirm(() => confirmCancel);
                          setConfrimLabel('Do you want to cancel the booking?');
                        }}
                      >
                        Cancel Booking
                      </Button>
                      <Button className="btn btn-primary uppercase !h-12 !text-xs px-8 md:w-auto w-full" isLoading={isLoading} disabled={isLoading} onClick={() => { checkTariff(); }}>Upadate Booking</Button>
                    </div>
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

export default ViewFullPage;
