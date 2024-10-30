/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */

'use client';

import {
  Suspense, useContext, useEffect, useRef, useState,
} from 'react';
import { FaDotCircle, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { FiCheck, FiPhone } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { isValidNumber } from 'libphonenumber-js';
import { MdOutlineEmail } from 'react-icons/md';
import H1 from 'components/typography/H1';
import Loader from 'components/shared/Loader';
import Login from 'components/auth/Login';
import CarsCard from 'components/CarsCard';
import FleetFilter from 'components/FleetFilter';
import H2 from 'components/typography/H2';
import H4 from 'components/typography/H4';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';
import PassengerDetails from 'components/PassengerDetails';
import EmailLogin from 'components/auth/ShowEmailLogin';
import api from 'components/utils/api';
import { LoginContext } from 'context/LoginContext';
import PayWithStripe from 'components/PayWithStripe';
import Container from 'rolnew/comp/Container';
import Modal from '../ui/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { UtilityContext } from 'context/UtilityContext';

const allCards = ['visa', 'mastercard', 'maestro', 'amex'];

function getMobileNumber(phone, country) {
  const newPhone = phone?.replace('+', '');
  const formattedCountry = country?.replace('+', '');
  const formattedNumber = newPhone.replace(formattedCountry, '');
  return formattedNumber;
}

function TempBookingComponent({
  setBookingRef,
  setShowAuth,
  setShowModal,
  setShowBtnLoading,
  setShowPayment,
  setShowPaymentDone,
}) {
  const searchParams = useSearchParams();
  const tempBookingId = searchParams.get('temp_booking_id');
  useEffect(() => {
    // if (!tempBookingId) return;
    const fetchData = async () => {
      try {
        const partialId = JSON.parse(sessionStorage.getItem('partial_booking_id'));
        const payload = {
          partial_id: partialId,
        };
        const response = await api.put(`/client-booking/${tempBookingId}`, payload);
        if (response.data && response.data.status === 1) {
          setBookingRef(response.data.booking_ref);
          setShowAuth(true);
          setShowModal(true);
          setShowPaymentDone(true);
          const user = JSON.parse(sessionStorage.getItem('passengerDetails'));
          if (user) {
            sessionStorage.setItem(
              'user',
              JSON.stringify({
                userfname: user.booker_fname,
                userlname: user.booker_lname,
                useremailid: user.booker_email,
                usermobileno: user.booker_mobile_no,
                usercountrycode: user.booker_country_code,
              }),
            );
          }
          sessionStorage.removeItem('isCarSelected');
          sessionStorage.removeItem('selectedfleet');
          sessionStorage.removeItem('passengerDetails');
          sessionStorage.removeItem('partial_booking_id');
          Cookies.remove('searchdata');
          Cookies.remove('fleetlist');
          if (response.data.Authorization) {
            sessionStorage.setItem('token', response.data.Authorization);
          }
        } else {
          toast.error(response.message || 'Booking Failed', {
            autoClose: 3000,
            theme: 'colored',
          });
          toast.clearWaitingQueue();
          setShowBtnLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (tempBookingId) {
      setShowPayment(true);
      setShowBtnLoading(true);
      // api call
      fetchData();
    }
    return () => {
      setShowPayment(false);
      setShowBtnLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempBookingId]);
  return <div />;
}

function FleetPage() {
  const { data: session, update } = useSession();
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [searchData, setSearchData] = useState({});
  const [viaLocationdata, setViaLocationData] = useState([]);
  const [fleetList, setFleetList] = useState([]);
  const [filterFleetList, setFilterFleetList] = useState([]);
  const [showTransfer, setShowTransfer] = useState(false);
  const [isCarSelected, setCarSelected] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showPaymentDone, setShowPaymentDone] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showEmailLogin, setshowEmailLogin] = useState(true);
  const [passengersDetails, setPassengersDetails] = useState(null);
  const [showBooker, setShowBooker] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [selectedCarDetails, setSelectedCarDetails] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [bookerPassword, setBookerPassword] = useState('');
  const [passwordExists, setPasswordExists] = useState(true);
  const [authType, setAuthType] = useState(null);
  const { setShowLogin, setUserName, isNewUser } = useContext(LoginContext);
  const [partialBookingId, setPartialBookingId] = useState(null);

  const [userDetails, setUserDetails] = useState(null);
  const [passengerMobileError, setPassengerMobileError] = useState(false);
  const [bookerMobileError, setBookerMobileError] = useState(false);
  const [showToken, setShowToken] = useState(true);
  const [bookerEmailExists, setBookerEmailExists] = useState(false);
  const [passengerLoader, setPassengerLoader] = useState(false);
  const [sessionExpires, setSessionExpires] = useState(false);
  const [showPassengerError, setShowPassengerError] = useState(null);
  const [passengers, setPassengers] = useState({
    adult: 0,
    children: 0,
    infant: 0,
    luggage: 0,
  });
  const carsRef = useRef();
  const paymentsRef = useRef();
  const formRef = useRef();
  const loginRef = useRef();
  const pageRef = useRef();

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    reset,
    setError,
    clearErrors,
    getValues,
  } = useForm({
    keepErrorsOnSubmit: true,
  });

  const { eclipseText } = useContext(UtilityContext);

  const setAllSessionData = async (data) => {
    const authData = data.auth;
    const bookingData = data.partialBooking[0].booking_data;

    const { partialIdForBooking } = data.partialBooking[0].partial_booking_id;
    sessionStorage.setItem('partial_booking_id', JSON.stringify(partialIdForBooking));

    sessionStorage.setItem('passengerDetails', JSON.stringify(bookingData?.passengerDetails));
    sessionStorage.setItem('user', JSON.stringify(bookingData?.user));
    sessionStorage.setItem('selectedfleet', JSON.stringify(bookingData?.selectedFleet));
    sessionStorage.setItem('isCarSelected', bookingData?.isCarSelected);
    sessionStorage.setItem('fleetlist', JSON.stringify(bookingData?.fleetList));
    sessionStorage.setItem('storesearchdata', JSON.stringify(bookingData?.storeSearchData));
    Cookies.set('searchdata', JSON.stringify(bookingData?.storedData));

    sessionStorage.setItem('token', authData?.Authorization);
    if (authData?.Authorization) {
      update({
        ...session,
        rolDriveToken: authData?.Authorization,
        isNewUser: false,
        mobile: bookingData?.passengerDetails?.booker_mobile_no,
      });
      setShowLogin(true);
      setAuthType('BASIC');
      Cookies.set('authtype', 'BASIC');
      sessionStorage.setItem('token', authData?.Authorization);
      setShowAuth(true);
      router.refresh();
      setShowToken(true);
    }
  };

  const getSessionData = async () => {
    const storedData = Cookies.get('searchdata');
    const storesearchdata = sessionStorage.getItem('storesearchdata');
    const viaLocationArray = sessionStorage.getItem('viaLocationArray');
    let listOfFleet = sessionStorage.getItem('fleetlist');
    console.log(`storesearchdata - ${storesearchdata}`);
    console.log(`listOfFleet - ${listOfFleet}`);
    const getAuthType = Cookies.get('authtype');
    setAuthType(getAuthType);
    if (!storedData || !listOfFleet || !storesearchdata) {
      // router.push('/rolnew');
    }
    if (storesearchdata && listOfFleet) {
      listOfFleet = JSON.parse(listOfFleet);
      setSearchData(JSON.parse(storesearchdata));
      setViaLocationData(JSON.parse(viaLocationArray));
      setFilterFleetList([...listOfFleet]);
      setFleetList([...listOfFleet]);
      setShowLoader(false);
    }
    const carsExists = sessionStorage.getItem('selectedfleet');
    setCarSelected(!!carsExists);
    setSelectedCarDetails(JSON.parse(carsExists));
    const userExists = !!sessionStorage.getItem('passengerDetails');
    if (userExists) {
      setShowPayment(true);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const getPartialBookingData = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const partialId = searchParams.get('partial_id');
      const tempBookingId = searchParams.get('temp_booking_id');

      if (partialId && !tempBookingId) {
        setPartialBookingId(partialId);
        try {
          console.log('Fetching partial booking data for ID:', partialId);
          const response = await api.get(`/auth/booking/partial?partial_id=${partialId}`);
          console.log('API response:', response);

          // if (response.data && response.data.partialBooking && response.data.partialBooking[0].booking_id !== null) {
          //   toast.error('Booking Already Completed Scucessfully!', {
          //     autoClose: 3000,
          //     theme: 'colored',
          //   });
          //   toast.clearWaitingQueue();
          //   setShowBtnLoading(false);
          // }

          if (response.data && response.data.partialBooking && response.data.partialBooking.length > 0) {
            console.log('Calling setAllSessionData with response data');
            setAllSessionData(response.data);

            getSessionData();
          } else {
            console.error('No valid partial booking data received from API');
          }
        } catch (error) {
          console.error('Error fetching partial booking data:', error);
        }
      } else {
        console.log('No partial_id found in URL');
      }
    };
    getPartialBookingData();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  useEffect(() => {
    reset();
  }, [reset, showBooker]);

  useEffect(() => {
    if (!showPayment) {
      carsRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    } else {
      paymentsRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, [showPayment]);

  useEffect(() => {
    loginRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
    });
  }, [showEmailLogin]);

  const {
    // eslint-disable-next-line max-len
    pickupaddress,
    pickuplatlng,
    dropaddress,
    droplatlng,
    pickupdate,
    pickuptime,
    distance,
    duration,
    rideduration,
    pickupairport,
    dropairport,
    bookingtype,
    returndate,
    returntime,
    pickuppostalcode,
    droppostalcode,
    regionId,
    droplocationtype,
    pickuplocationtype,
    pickuplocationid,
    droplocationid,
    dropzone,
    pickupzone,
  } = searchData;

  function getDurationInHour(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} h ${remainingMinutes} m`;
  }

  function convertKmToMile(distanceKM) {
    const factor = 0.621371;
    return Math.round(distanceKM * factor);
  }

  // Sending Partial booking details to backend through api
  const sendPayloadToAPI = async (bookingStep) => {
    let journey = null;
    if (returndate && bookingtype === 'transfers') journey = 'Round Trip';
    if (!returndate && bookingtype !== 'hourly') journey = 'one-way journey';
    if (bookingtype === 'hourly') journey = 'Hourly trip;';

    const distanceInKmAndMiles = `${distance} km /${convertKmToMile(distance)} miles`;
    const durationInHoursAndMinutes = getDurationInHour(duration);

    const payload = {
      journey,
      date: pickupdate,
      time: pickuptime,
      pickup: pickupaddress,
      dropOff: dropaddress,
      distance,
      distanceInKmAndMiles,
      duration,
      durationInHoursAndMinutes,
      user: JSON.parse(sessionStorage.getItem('user')),
      storedData: JSON.parse(Cookies.get('searchdata')),
      storeSearchData: JSON.parse(sessionStorage.getItem('storesearchdata')),
      fleetList: JSON.parse(sessionStorage.getItem('fleetlist')),
      selectedFleet: JSON.parse(sessionStorage.getItem('selectedfleet')),
      passengerDetails: JSON.parse(sessionStorage.getItem('passengerDetails')),
      isCarSelected: sessionStorage.getItem('isCarSelected'),
      url: window.location.href,
      bookingStep,
      partial_id: partialBookingId,
    };

    try {
      const response = await api.post('/client-booking/partial', payload);
      if (response?.data?.partialId !== null && partialBookingId === null) {
        setPartialBookingId(response?.data?.partialId);
        sessionStorage.setItem('partial_booking_id', JSON.stringify(response?.data?.partialId));
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Clear the session storage key after 30 minute
    const timeoutId = setTimeout(() => {
      sessionStorage.removeItem('storesearchdata');
      sessionStorage.removeItem('passengerDetails');
      Cookies.remove('searchdata');
      sessionStorage.removeItem('fleetlist');
      setSessionExpires(true);
    }, 1800000);

    // Cancel the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [router]);

  useEffect(() => {
    getSessionData();
  }, [router]);

  /* eslint-disable react-hooks/exhaustive-deps */
  // useEffect(() => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   let tempBookingId = null;
  //   tempBookingId = searchParams.get('temp_booking_id');

  //   if (partialBookingId === null && (tempBookingId === null || tempBookingId === undefined)) sendPayloadToAPI(1);
  // }, [partialBookingId]);
  /* eslint-enable react-hooks/exhaustive-deps */

  async function checkPassengerMobileNumber(value, countryData) {
    if (value) {
      const newNumber = getMobileNumber(value, countryData.dialCode);
      if (isValidNumber(newNumber, countryData.countryCode.toUpperCase())) {
        setPassengerMobileError(false);
        clearErrors('mobileno');
        if (!showBooker) {
          setPassengerLoader(true);
          const response = await api.post('/auth/check', { mobile: newNumber });
          if (response.data.exists) {
            setError('mobilenoerror', {
              type: 'custom',
              message: 'This mobile number already has an existing account.',
            });
          } else {
            clearErrors('mobilenoerror');
          }
          setPassengerLoader(false);
        }
      } else {
        setPassengerMobileError(true);
        setError('mobileno', {
          type: 'custom',
          message: 'Phone number is not valid',
        });
      }
    }
  }

  async function checkBookerMobileNumber(value, countryData) {
    if (value) {
      const newNumber = getMobileNumber(value, countryData.dialCode);
      if (isValidNumber(newNumber, countryData.countryCode.toUpperCase())) {
        setBookerMobileError(false);
        clearErrors('bookermobileno');
        if (showBooker) {
          setPassengerLoader(true);
          const response = await api.post('/auth/check', { mobile: newNumber });
          if (response.data.exists) {
            setError('bookermobilenoerror', {
              type: 'custom',
              message: 'This mobile number already has an existing account.',
            });
          } else {
            clearErrors('bookermobilenoerror');
          }
          setPassengerLoader(false);
        }
      } else {
        setBookerMobileError(true);
        setError('bookermobileno', {
          type: 'custom',
          message: 'Phone number is not valid',
        });
      }
    }
  }

  async function checkBookerEmailError(e) {
    setPassengerLoader(true);
    const email = e.target.value;
    const response = await api.post('/auth/check', { email });
    if (response.data.exists) {
      setError('errorbookeremail', {
        type: 'custom',
        message: 'This email already has an existing account.',
      });
      setPassengerLoader(false);
    } else {
      clearErrors('errorbookeremail');
      setBookerEmailExists(false);
      setPassengerLoader(false);
    }
  }

  async function checkEmailexists(email) {
    if (!showBooker) {
      setPassengerLoader(true);
      const response = await api.post('/auth/check', { email });
      if (response.data.exists === 1) {
        setError('erroremail', {
          type: 'custom',
          message: 'This email already has an existing account.',
        });
        setBookerEmailExists(true);
        setPassengerLoader(false);
      } else {
        clearErrors('erroremail');
        setBookerEmailExists(false);
        setPassengerLoader(false);
      }
    }
  }

  const [showBtnLoading, setShowBtnLoading] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const showFlight = pickupairport || dropairport;

  function selectCar(fleet) {
    setCarSelected(!isCarSelected);
    setSelectedCarDetails(fleet);
    sessionStorage.setItem('selectedfleet', JSON.stringify(fleet));
    sessionStorage.setItem('isCarSelected', true);
    pageRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'end',
    });

    sendPayloadToAPI(2);
  }
  useEffect(() => {
    async function getToken() {
      const token = sessionStorage.getItem('token');
      if ((token && token !== 'null' && token !== 'undefined') || session) {
        setShowAuth(true);
      }
    }
    getToken();
  }, [session, setShowAuth]);

  const onPassengerSubmit = async (data) => {
    if (
      !passengerMobileError
      && !bookerMobileError
      && !bookerEmailExists
      && passengers.adult > 0
    ) {
      setPassengersDetails(data);
      const payload = {
        showBooker,
      };
      sessionStorage.removeItem('user');
      // sessionStorage.removeItem('passengerDetails');
      const user = {};
      if (showBooker) {
        payload.passenger_fname = data?.fname;
        payload.passenger_lname = data?.lname;
        payload.passenger_country_code = `+${data?.countrycode}`;
        payload.passenger_mobile_no = getMobileNumber(
          data?.mobileno,
          data?.countrycode,
        );
        payload.passenger_email = data?.email;
        payload.booker_fname = data?.bookerfname;
        payload.booker_lname = data?.bookerlname;
        payload.booker_country_code = `+${data?.bookercountrycode}`;
        payload.booker_mobile_no = getMobileNumber(
          data?.bookermobileno,
          data?.bookercountrycode,
        );
        payload.booker_email = data?.bookeremail;
        // Set user
        user.userfname = data?.bookerfname;
        user.userlname = data?.bookerlname;
        user.useremailid = data?.bookeremail;
        user.usercountrycode = `+${data?.bookercountrycode}`;
        user.usermobileno = getMobileNumber(
          data?.bookermobileno,
          data?.bookercountrycode,
        );
      } else {
        payload.passenger_fname = '';
        payload.passenger_lname = '';
        payload.passenger_country_code = '+44';
        payload.passenger_mobile_no = '';
        payload.passenger_email = '';
        payload.booker_fname = data?.fname;
        payload.booker_lname = data?.lname;
        payload.booker_country_code = `+${data?.countrycode}`;
        payload.booker_mobile_no = getMobileNumber(
          data?.mobileno,
          data?.countrycode,
        );
        payload.booker_email = data?.email;

        // Set user
        user.userfname = data?.fname;
        user.userlname = data?.lname;
        user.useremailid = data?.email;
        user.usercountrycode = `+${data?.countrycode}`;
        user.usermobileno = getMobileNumber(data?.mobileno, data?.countrycode);
      }
      console.log(isNewUser, session?.user);
      if (isNewUser || session?.user?.isNewUser) {
        const tempPayload = {
          useremailid: payload.booker_email,
          fname: payload.booker_fname,
          lname: payload.booker_lname,
          usermobileno: payload.booker_mobile_no,
          usercountrycode: payload.booker_country_code,
          authtype: 'BASIC',
          usertype: 'PRIVATE_CLIENT',
        };
        const response = await await api.put('/auth/temp-token', tempPayload);
        console.log(response);
        if (response?.data?.Authorization) {
          update({
            ...session,
            rolDriveToken: response?.data?.Authorization,
            isNewUser: false,
            mobile: payload.booker_mobile_no,
          });
          setShowLogin(true);
          setAuthType('BASIC');
          Cookies.set('authtype', 'BASIC');
          sessionStorage.setItem('token', response?.data?.Authorization);
          setShowAuth(true);
          router.refresh();
          setShowToken(true);
        }
      }

      const passengerData = {
        ...payload,
        ...passengers,
        boarddetails: data?.boarddetails,
        flightdetails: data?.flightdetails,
        drivernote: data?.drivernote,
      };
      sessionStorage.setItem('passengerDetails', JSON.stringify(passengerData));
      sessionStorage.setItem('user', JSON.stringify(user));
      setShowPayment(true);
      sendPayloadToAPI(3);
    } else {
      setShowPassengerError(true);
      formRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  const callBooking = (paymentData) => {
    setShowBtnLoading(true);
    const pickUpdateTime = `${pickupdate} ${pickuptime}`;
    let payload = {
      region_id: regionId,
      booking_date: new Date(),
      booking_type: bookingtype.toUpperCase(),
      pickup_location: pickupaddress,
      pickup_postcode: pickuppostalcode,
      pickup_location_id: pickuplocationid || null,
      drop_location_id: droplocationid || null,
      pickup_loc_coord: `POINT(${pickuplatlng.split(',')[1]} ${pickuplatlng.split(',')[0]
      })`,
      travel_date: pickUpdateTime.trim(),
      preferred_vehicle: selectedCarDetails.vehicle_cat_id,
      passenger_adult_cnt: Number(passengers.adult),
      passenger_child_cnt: Number(passengers.children),
      passenger_luggage_cnt: Number(passengers.luggage),
      tariff: Number(selectedCarDetails.tariff),
      final_tariff: Number(selectedCarDetails.tariff),
      invoice_amt_currency: 'gbp',
      flight_no: passengersDetails?.flightdetails,
      driver_notes: passengersDetails?.drivernote,
      board_name: passengersDetails?.boarddetails,
      round_trip: !!returndate,
      passenger_infant_cnt: Number(passengers.infant),
      tariff_conv_rate: Number(filterFleetList[0].conv_rate) || 0,
      user_tariff: Number(
        Math.round(selectedCarDetails.tariff * filterFleetList[0].conv_rate),
      ),
      duration: Number(duration),
      distance: Number(distance || 0),
      booker_password: passwordExists ? null : bookerPassword,
      booker_password_exists: passwordExists,
      auth_type: authType || null,
      user_type: 'PRIVATE_CLIENT',
      booking_for_others: showBooker,
      pickup_location_type: pickuplocationtype,
      car_parking_fee: Number(selectedCarDetails.car_parking_charge),
      // tax_pct: Number(selectedCarDetails.tax_amount),
      tax_pct: Number(selectedCarDetails.tax_pct),
      tax_amount: Number(selectedCarDetails.tax_amount),
      base_tariff: Number(selectedCarDetails.base_rate),
      admin_fee: 0,
      waiting_fee: 0,
      discount_pct: 0,
      surcharge: 0,
      discount_amt: 0,
      via: [],
    };

    if (!showToken) {
      payload.card_token = paymentData.token;
      payload.last4 = paymentData.last4;
      payload.brand = paymentData.brand;
    }

    // New tariff details for stripe payment

    // const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const currentUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';

    const distanceInNumber = parseFloat(distance || 0);
    const factor = 0.621371;
    const distanceInMiles = Math.round(distanceInNumber * factor);
    const tariffData = {
      tariffDetails: {
        from_location: pickuplocationid || null,
        region_id: regionId,
        to_location: droplocationid || null,
        adult_seat_count: Number(passengers.adult),
        luggage_count: Number(passengers.luggage),
        round_trip: !!returndate,
        user_currency: 'INR',
        distance: Number(distanceInMiles || 0),
        user_type: 'C',
        source_zone_id: pickupzone,
        destination_zone_id: dropzone,
        veh_cat_id: selectedCarDetails.vehicle_cat_id,
        way_location: [],
      },
      checkoutDetails: {
        success_url: currentUrl,
        cancel_url: currentUrl,
      },
    };
    if (bookingtype === 'hourly') {
      tariffData.tariffDetails.hours = Number(rideduration.split(' ')[0]);
    }
    payload = {
      ...payload,
      ...tariffData,
    };

    if (showBooker) {
      payload.passenger_fname = passengersDetails.fname;
      payload.passenger_lname = passengersDetails.lname;
      payload.passenger_country_code = `+${passengersDetails.countrycode}`;
      payload.passenger_mobile_no = getMobileNumber(
        passengersDetails.mobileno,
        passengersDetails.countrycode,
      );
      payload.passenger_email = passengersDetails.email;
      payload.booker_fname = passengersDetails.bookerfname;
      payload.booker_lname = passengersDetails.bookerlname;
      payload.booker_country_code = `+${passengersDetails.bookercountrycode}`;
      payload.booker_mobile_no = getMobileNumber(
        passengersDetails.bookermobileno,
        passengersDetails.bookercountrycode,
      );
      payload.booker_email = passengersDetails.bookeremail;
    } else {
      payload.passenger_fname = passengersDetails.fname;
      payload.passenger_lname = passengersDetails.lname;
      payload.passenger_country_code = `+${passengersDetails.countrycode}`;
      payload.passenger_mobile_no = getMobileNumber(
        passengersDetails.mobileno,
        passengersDetails.countrycode,
      );
      payload.passenger_email = passengersDetails.email;

      payload.booker_fname = passengersDetails.fname;
      payload.booker_lname = passengersDetails.lname;
      payload.booker_country_code = `+${passengersDetails.countrycode}`;
      payload.booker_mobile_no = getMobileNumber(
        passengersDetails.mobileno,
        passengersDetails.countrycode,
      );
      payload.booker_email = passengersDetails.email;
    }

    if (returndate && returntime) {
      const returnUpdateTime = `${returndate} ${returntime}`;
      // payload.round_trip = true;
      payload.round_trip_date = returnUpdateTime.trim();
    }
    if (dropaddress) {
      payload.drop_location = dropaddress;
      payload.drop_postcode = droppostalcode;
      payload.drop_loc_coord = `POINT(${droplatlng.split(',')[1]} ${droplatlng.split(',')[0]
      })`;
      payload.drop_location_type = droplocationtype;
    }

    function transformLocations(locations) {
      return locations.map((location) => ({
        address: location.address,
        latLng: location.latLng,
        via_location: location.address,
        via_postcode: location.postal_code,
        via_loc_coord: `POINT(${location.latLng.split(',').reverse().join(' ')})`,
        via_loc_type: location.locationtype,
        via_location_id: location.locationid,
        lat: location.latLng.split(',')[0],
        lng: location.latLng.split(',')[1],
        via_location_region_id: location.regionid,
      }));
    }

    if (bookingtype === 'hourly') {
      const viaLocatioObject = JSON.parse(sessionStorage.getItem('viaLocatioObject'));

      let transformedLocations = [];
      if (viaLocatioObject) { transformedLocations = transformLocations(viaLocatioObject); }

      payload.via = transformedLocations || [];

      payload.booking_duration = Number(rideduration.split(' ')[0]);
      const extraHour = Number(rideduration.split(' ')[0])
        - Number(selectedCarDetails.min_hour);
      const extraMile = extraHour * Number(selectedCarDetails.addl_miles_hourly);
      const totalMile = Number(selectedCarDetails.miles_included) + extraMile;
      payload.booking_mileage = totalMile;
      payload.job_hour = Number(rideduration.split(' ')[0]);
      payload.min_booking_hour = Number(selectedCarDetails.min_hour);
      payload.booking_hourly_rate = Number(selectedCarDetails.hrly_rate);
      payload.booking_miles_included = Number(
        selectedCarDetails.miles_included,
      );
      payload.addl_hour_rate = Number(selectedCarDetails.addl_hour_rate);
      payload.addl_hour_rate = Number(selectedCarDetails.addl_hour_rate);
      payload.addl_miles_hour = Number(selectedCarDetails.addl_miles_hourly);
      payload.extra_mileage_charge = Number(
        selectedCarDetails.extra_mile_charge,
      );
    }

    if (showBilling) {
      payload.billing_address_line_1 = paymentData.addressline1;
      payload.billing_address_line_2 = paymentData.addressline2;
      payload.billing_address_town = paymentData.town;
      payload.billing_address_post_code = paymentData.postcode;
      payload.billing_address_country = paymentData.country;
    }

    const confirmBooking = async () => {
      const response = await api.post('/client-booking', {
        ...payload,
      });
      if (response.data.checkoutUrl) {
        window.location.href = `${response.data.checkoutUrl}`;
      } else {
        toast.error(response.message || 'Booking Failed', {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
        setShowBtnLoading(false);
      }
    };
    confirmBooking().catch(console.error);
  };

  function goToConfromBooking() {
    sessionStorage.removeItem('storesearchdata');
    sessionStorage.removeItem('passengerDetails');
    router.refresh();
    setShowLogin(true);
    const user = JSON.parse(sessionStorage.getItem('user'));
    setUserName(`${user?.userfname}`);
    router.push('/booking-management');
  }

  function filterFleet(filter) {
    let sortFleet;
    if (filter === 'hightolow') {
      setSelectedFilter('hightolow');
      sortFleet = filterFleetList.sort(
        (a, b) => Number(b.tariff) - Number(a.tariff),
      );
    } else if (filter === 'lowtohigh') {
      setSelectedFilter('lowtohigh');
      sortFleet = filterFleetList.sort(
        (a, b) => Number(a.tariff) - Number(b.tariff),
      );
    }
    setFilterFleetList([...sortFleet]);
  }

  async function clearFilter() {
    setSelectedFilter('');
    setFilterFleetList([...fleetList]);
  }

  function goingBack() {
    if (!isCarSelected) {
      sessionStorage.removeItem('passengerDetails');
      router.back();
    }
    if (showPayment) {
      setShowPayment(false);
    }
    if (!showPayment && isCarSelected) {
      setCarSelected(false);
    }
  }

  /* Passenger picker */

  function decrement(target, isAdult = false) {
    if (isAdult) {
      if (passengers[target] > 1 && isAdult) {
        // eslint-disable-next-line operator-assignment
        passengers[target] = passengers[target] - 1;
        setPassengers((prev) => ({ ...prev, passengers }));
      }
    } else if (passengers[target] > 0) {
      // eslint-disable-next-line operator-assignment
      passengers[target] = passengers[target] - 1;
      setPassengers((prev) => ({ ...prev, passengers }));
    }
  }
  function increment(target) {
    // eslint-disable-next-line operator-assignment
    passengers[target] = passengers[target] + 1;
    setPassengers((prev) => ({ ...prev, passengers }));
  }

  function addPassengers() {
    if (passengers.adult > 0) {
      setShowPassengerError(false);
    }
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
  }

  /* Passenger picker */
  // Check if payment session ID exists or not
  // const tempBookingId = searchParams.get('temp_booking_id');

  // useEffect(() => {
  //   let hasSentEmail = false; // Flag to track if the email has been sent
  //   let timeoutId = null; // To hold the timeout ID for the 60-second timer

  //   const sendAnalyticsData = async () => {
  //     if (hasSentEmail) return; // Prevent multiple triggers

  //     const userInfo = JSON.parse(sessionStorage.getItem('user'));
  //     const { useremailid, usermobileno, usercountrycode } = userInfo;

  //     let journey = null;
  //     if (returndate && bookingtype === 'transfers') journey = 'Round Trip';
  //     if (!returndate && bookingtype !== 'hourly') journey = 'one-way journey';
  //     if (bookingtype === 'hourly') journey = 'Hourly trip;';

  //     const payloadData = {
  //       journey,
  //       date: pickupdate,
  //       time: pickuptime,
  //       pickup: pickupaddress,
  //       dropOff: dropaddress,
  //       distance,
  //       duration,
  //     };

  //     const queryParams = `?email=${useremailid || null}&phoneNo=${usermobileno || null}&countryCode=${usercountrycode || null}`;

  //     const response = await api.post(`/users/reminder${queryParams}`, payloadData);
  //     sessionStorage.removeItem('passengerDetails');
  //     console.log('reminder', response);

  //     hasSentEmail = true; // Mark email as sent
  //   };

  //   const resetTimer = () => {
  //     // Clear the previous timer
  //     if (timeoutId) clearTimeout(timeoutId);

  //     // Set a new timer for 60 seconds
  //     timeoutId = setTimeout(async () => {
  //       await sendAnalyticsData();
  //     }, 60000); // 60 seconds
  //   };

  //   // Set up event listeners for user activity
  //   const handleUserAction = () => {
  //     resetTimer(); // Reset the timer when user performs an action
  //   };

  //   // Function to handle beforeunload event
  //   const handleBeforeUnload = async () => {
  //     await sendAnalyticsData();
  //   };

  //   // Add event listeners for user actions
  //   window.addEventListener('mousemove', handleUserAction);
  //   window.addEventListener('keypress', handleUserAction);
  //   window.addEventListener('click', handleUserAction);
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   // Start the timer on component mount
  //   resetTimer();

  //   return async () => {
  //     // Clean up event listeners and timer when component unmounts
  //     window.removeEventListener('mousemove', handleUserAction);
  //     window.removeEventListener('keypress', handleUserAction);
  //     window.removeEventListener('click', handleUserAction);
  //     window.removeEventListener('beforeunload', handleBeforeUnload);

  //     if (timeoutId) clearTimeout(timeoutId); // Clear the timeout on unmount

  //     const token = sessionStorage.getItem('token');
  //     const carsExists = sessionStorage.getItem('selectedfleet');
  //     if (token && token !== 'null' && token !== 'undefined' && !bookingRef && carsExists) {
  //       await sendAnalyticsData();
  //     }
  //   };
  // }, [
  //   bookingRef,
  //   bookingtype,
  //   distance,
  //   dropaddress,
  //   duration,
  //   pickuptime,
  //   pickupdate,
  //   pickupaddress,
  //   returndate,
  // ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TempBookingComponent
          setBookingRef={setBookingRef}
          setShowAuth={setShowAuth}
          setShowModal={setShowModal}
          setShowBtnLoading={setShowBtnLoading}
          setShowPayment={setShowPayment}
          setShowPaymentDone={setShowPaymentDone}
        />
      </Suspense>
      <div className="relative" ref={pageRef}>
        <ToastContainer
          limit={1}
          position="top-right"
          hideProgressBar
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {showModal && (
          // eslint-disable-next-line react/jsx-no-bind
          <Modal>
            <div className="relative flex flex-col items-center justify-center py-10 modal-bg rounded-lg shadow">
              <div className="max-h-[60px] max-w-[60px]">
                <Pic
                  src="/images/icons/confirm.png"
                  className="object-contain"
                  alt="confirm_icon"
                />
              </div>
              <div>
                <div className="py-4 text-center">
                  <H2 className="font-bold text-3xl text-white">
                    Payment Successful!
                  </H2>
                  <P className="text-[#B2B2B2]">
                    Your booking has been confirmed.
                  </P>
                  <P className="text-[#B2B2B2]">
                    Your booking reference no is
                    {' '}
                    <span className="text-base font-normal text-white">
                      #
                      {bookingRef}
                    </span>
                  </P>
                </div>
              </div>
              <div className="py-4 text-center">
                <button
                  type="button"
                  className="btn btn-primary !py-[10px] !px-4 !text-white"
                  onClick={() => {
                    goToConfromBooking();
                  }}
                >
                  Go to Bookings
                </button>
              </div>
            </div>
          </Modal>
        )}
        {sessionExpires && (
          // eslint-disable-next-line react/jsx-no-bind
          <Modal>
            <div className="relative flex flex-col items-center justify-center py-10 modal-bg rounded-lg shadow">
              <div className="max-h-[60px] max-w-[60px]">
                <Pic
                  src="/images/icons/confirm.png"
                  className="object-contain"
                  alt="confirm_icon"
                />
              </div>
              <div>
                <div className="py-4 text-center">
                  <H2 className="font-bold text-3xl text-white ">
                    Your search result has expired.
                  </H2>
                  <P className="text-[#B2B2B2]">Please go back and continue.</P>
                </div>
              </div>
              <div className="py-4 text-center">
                <a
                  type="button"
                  className="btn btn-primary !text-white"
                  href="/"
                >
                  Back
                </a>
              </div>
            </div>
          </Modal>
        )}
        {searchData && (
          <Container
            className={`bg-[#223544] 
      ${showTransfer ? ' h-full overflow-hidden' : ''}
    `}
          >
            <div className="xl:container mx-auto py-12">
              <div
                className={`mx-auto lg:container flex items-center ${!isCarSelected && ' justify-between'
                }`}
              >
                <div
                  className="flex items-center text-primary text-sm font-bold cursor-pointer mb-2 sm:mb-0 2xl:basis-[35%] lg:basis-[387px]"
                  onClick={() => {
                    goingBack();
                  }}
                >
                  <img
                    src="/rolnew/global/icons/arrow-sm-left.svg"
                    alt="go back"
                  />
                </div>
                {!isCarSelected && (
                  <FleetFilter
                    filterFleet={filterFleet}
                    isActive={selectedFilter}
                    removeFilter={clearFilter}
                  />
                )}
                {isCarSelected && (
                  <div className="w-full ml-1 sm:ml-3">
                    <div className="flex items-center">
                      <div
                        className="relative flex flex-col items-center text-black cursor-pointer sm:flex-row"
                        onClick={() => {
                          setCarSelected(!isCarSelected);
                        }}
                      >
                        <div className="flex items-center justify-center sm:w-10 sm:h-10 w-8 h-8 text-xl font-extrabold transition duration-500 ease-in-out rounded-full bg-success bg-opacity-90 border border-[#fff] border-opacity-20">
                          <FiCheck className="font-black text-[#96fe96] sm:text-sm text-xs" />
                        </div>
                        <div className="px-1 lg:px-3 w-24 sm:w-auto">
                          <P className="font-semibold uppercase text-success sm:text-sm !text-xs pt-1 text-center">
                            SELECT VEHICLE
                          </P>
                        </div>
                      </div>
                      <div className="flex-auto sm:mr-3 mr-0 transition duration-500 ease-in-out border-t border-[#fff] border-opacity-20" />
                      <div
                        className="relative flex flex-col items-center cursor-pointer sm:flex-row text-primary"
                        onClick={() => {
                          setShowPayment(false);
                        }}
                      >
                        <div
                          className={`rounded-full transition duration-500 ease-in-out sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center font-semibold ${showPayment
                            ? 'bg-success bg-opacity-90 text-success text-xl'
                            : 'bg-[#223544] text-primary border border-[#fff] border-opacity-40'
                          }`}
                        >
                          {showPayment && (
                            <FiCheck className="text-[#96fe96] sm:text-sm text-xs" />
                          )}

                          {!showPayment && <P>2</P>}
                        </div>
                        <div className="sm:px-3 px-1 w-24 sm:w-auto text-center">
                          <P
                            className={`font-semibold uppercase sm:text-sm !text-xs text-center pt-1 ${showPayment ? 'text-success' : ' text-[#F7BC3A]'
                            }`}
                          >
                            Passenger Details
                          </P>
                        </div>
                      </div>
                      <div className="flex-auto sm:mr-3 transition duration-500 ease-in-out border-t border-[#fff] border-opacity-20" />
                      <div
                        className="relative flex flex-col items-center cursor-pointer sm:flex-row text-primary"
                        onClick={() => {
                          setShowPaymentDone(false);
                        }}
                      >
                        <div className={`rounded-full transition duration-500 ease-in-out sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center font-semibold ${showPaymentDone
                          ? 'bg-success bg-opacity-90 text-success text-xl'
                          : 'bg-[#223544] text-primary border border-[#fff] border-opacity-40'}`}
                        >
                          {showPaymentDone && (
                            <FiCheck className="text-[#96fe96] sm:text-sm text-xs" />
                          )}

                          {!showPaymentDone && <P>3</P>}
                        </div>
                        <div className="sm:px-3 px-1 w-24 sm:w-auto">
                          <P
                            className={`font-semibold uppercase sm:text-sm !text-xs text-center pt-1 ${showPaymentDone ? 'text-success' : ''
                            }`}
                          >
                            PAYMENT
                          </P>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-10 lg:flex-row">
                <div
                  className={`2xl:basis-[45%] lg:basis-[400px] lg:sticky fixed h-5/6  md:h-[85%] left-0 right-0 lg:top-24 lg:mt-0 lg:order-1 order-2 lg:z-auto z-50 transition-transform duration-150 ease-in-out delay-500 lg:bg-[#223544] bg-[#11202D] lg:px-0 px-4 lg:py-0 py-2 ${showTransfer
                    ? 'top-auto bottom-0 mt-0 overflow-y-auto bg-[#223544]'
                    : 'top-full -mt-12'
                  }`}
                >
                  <div className="relative text-left">
                    <div
                      onClick={() => {
                        setShowTransfer(!showTransfer);
                      }}
                      className="relative"
                    >
                      <div className="absolute z-[50] block px-2 py-2 border-t-2 rounded-full cursor-pointer lg:hidden -top-2 left-2/4 lg:bg-[#223544] bg-[#11202D]">
                        {!showTransfer && (
                          <FaAngleUp className="bg-[#11202D]" />
                        )}
                        {showTransfer && (
                          <FaAngleDown className="bg-[#11202D]" />
                        )}
                      </div>
                      <div className="pb-2 border-b border-gray-200 lg:text-center">
                        <H2 className="font-bold !text-2xl !text-[#CED5E5] !leading-1">
                          Your transfer
                        </H2>
                      </div>
                    </div>

                    <div className="mt-4 mb-2 border-b border-gray-200 !text-[#CED5E5]">
                      <div className="flex items-center mb-5">
                        <FaDotCircle className="ml-1 text-md" />
                        {returndate && bookingtype === 'transfers' && (
                          <H4 className="pl-3 font-semibold !text-[#CED5E5]">
                            Round Trip
                          </H4>
                        )}
                        {!returndate && bookingtype !== 'hourly' && (
                          <H4 className="pl-3 font-semibold !text-[#CED5E5]">
                            One-Way journey
                          </H4>
                        )}
                        {bookingtype === 'hourly' && (
                          <H4 className="pl-3 font-semibold !text-[#CED5E5]">
                            Hourly trip
                          </H4>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <div className="relative h-fit">
                          <div className="flex pb-4">
                            <div className="w-5 h-7 flex-none">
                              <Pic
                                src="/rolnew/global/icons/location-marker.svg"
                                alt="location"
                              />
                            </div>
                            <P className="pl-4 font-normal !text-[#CED5E5]">
                              {pickupaddress}
                            </P>
                          </div>

                          {viaLocationdata && (
                            // <div className="connecting-list">
                            <div>
                              {viaLocationdata.map((via, i) => (
                                <li
                                  // eslint-disable-next-line react/no-array-index-key
                                  key={`${via?.via_location}`}
                                  className={`text-left text-xs relative leading-tight ml-2 pb-3 ${viaLocationdata.length === 1 ? 'single-child' : ''}`}
                                  style={{ listStyleType: 'none' }}
                                >

                                  <div
                                    className="list-content tooltip-top custom-tooltip cursor-pointer relative overflow-visible"
                                    data-tip={`${via?.via_location}`}
                                    style={{ zIndex: 9999 }}
                                  >
                                    <div className="!flex items-start">
                                      <div className="relative !w-[17px] !h-[17px] bg-white border border-[#000] rounded-full -ml-2 z-[9] flex-none">
                                        <p className="absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 text-[10px] font-semibold text-[#000]">
                                          {i + 1}
                                        </p>
                                      </div>
                                      <P
                                        className="overflow-visible font-normal !text-[#CED5E5] tooltip tooltip-top custom-tooltip tooltip-info cursor-pointer text-left pl-8"
                                        data-tip={`${via?.via_location}`}
                                        style={{ zIndex: 9999 }}
                                      >
                                        {eclipseText(via?.via_location, 80)}
                                      </P>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </div>
                          )}

                          {dropaddress && (
                            <div className="border-r w-1 border-[#FDC65C] min-h-[10px] h-full absolute left-1.5 -bottom-0 top-3" />
                          )}
                        </div>

                        {dropaddress && (
                          <div className="flex pt-2">
                            <div className="w-5 h-7 flex-none">
                              <Pic
                                src="/rolnew/global/icons/location-marker.svg"
                                alt="location"
                              />
                            </div>
                            <P className="pl-4 font-normal !text-[#CED5E5]">
                              {dropaddress}
                            </P>
                          </div>
                        )}
                      </div>
                      {returndate && (
                        <div className="flex items-center mt-6 mb-2 gap-x-2">
                          <FaDotCircle className="text-md" />
                          <P className="font-semibold !text-[#CED5E5]">
                            Pickup Date
                          </P>
                        </div>
                      )}

                      <div className="flex items-center my-4 gap-x-4">
                        <div className="flex items-center gap-x-2">
                          <div className="w-5 h-5">
                            <Pic
                              src="/rolnew/global/icons/calendar.svg"
                              alt="calendar"
                            />
                          </div>
                          <P className="font-normal !text-[#CED5E5]">
                            {pickupdate?.replace('/', ' ')}
                          </P>
                        </div>

                        <div className="flex items-center gap-x-2">
                          <div className="w-5 h-5">
                            <Pic
                              src="/rolnew/global/icons/clock.svg"
                              alt="clock"
                            />
                          </div>
                          <P className="font-normal !text-[#CED5E5]">
                            {pickuptime}
                          </P>
                        </div>
                      </div>

                      {returndate && bookingtype === 'transfers' && (
                        <>
                          <div className="flex items-center mt-6 mb-3">
                            <FaDotCircle className="ml-1 text-md" />
                            <P className="pl-3 font-semibold !text-[#CED5E5]">
                              Return Date
                            </P>
                          </div>
                          <div className="flex items-center my-4 gap-x-4">
                            <div className="flex items-center gap-x-2">
                              <div className="w-5 h-5">
                                <Pic
                                  src="/rolnew/global/icons/calendar.svg"
                                  alt="calendar"
                                />
                              </div>
                              <P className="font-normal !text-[#CED5E5]">
                                {returndate?.replace('/', ' ')}
                              </P>
                            </div>
                            <div className="flex items-center gap-x-2">
                              <div className="w-5 h-5">
                                <Pic
                                  src="/rolnew/global/icons/clock.svg"
                                  alt="clock"
                                />
                              </div>
                              <P className="font-normal !text-[#CED5E5]">
                                {returntime}
                              </P>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="mt-4">
                      {passengersDetails && (
                        <>
                          <div className="flex items-center justify-start mb-4">
                            <div className="w-6 h-5">
                              <Pic
                                src="/rolnew/global/icons/users-white.svg"
                                alt="location"
                              />
                            </div>
                            <P className="font-normal capitalize pl-3 !text-[#CED5E5]">
                              {`${passengersDetails.fname} ${passengersDetails.lname}`}
                            </P>
                          </div>
                          <div className="flex items-center justify-start mb-4">
                            {/* <Pic src="/images/icons/email.svg" alt="location" /> */}
                            <MdOutlineEmail className="text-[24px]" />
                            <P className="font-normal pl-3 !text-[#CED5E5]">
                              {`${passengersDetails.email}`}
                            </P>
                          </div>

                          <div className="flex items-center justify-start mb-4">
                            <FiPhone className="text-[20px]" />
                            <P className="font-normal pl-3 !text-[#CED5E5]">
                              {`${passengersDetails.mobileno}`}
                            </P>
                          </div>
                        </>
                      )}
                      <div className="flex flex-nowrap gap-x-2">
                        {distance && (
                          <div className="flex items-center gap-x-1">
                            <div className="w-5 h-5">
                              <Pic
                                src="/rolnew/global/icons/path.svg"
                                alt="location"
                              />
                            </div>
                            <P className="font-normal !text-[#CED5E5]">
                              {distance}
                              {' '}
                              km /
                              {convertKmToMile(distance)}
                              {' '}
                              miles
                            </P>
                          </div>
                        )}
                        <div className="flex items-center gap-x-1">
                          <div className="w-4 h-4">
                            <Pic
                              src="/rolnew/global/icons/clock.svg"
                              alt="clock"
                            />
                          </div>
                          <P className="font-normal !text-[#CED5E5]">
                            {duration
                              ? getDurationInHour(duration)
                              : rideduration}
                          </P>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-left mt-3">
                    <div className="flex items-start gap-x-2">
                      <div className="w-5 h-5">
                        <Pic
                          src="/rolnew/global/icons/mdi-thunder.svg"
                          alt="clock"
                        />
                      </div>
                      <P className="pl-1 font-medium text-[#F7BC3A]">
                        Instant confirmation
                      </P>
                    </div>
                    <div className="flex items-start mt-4 gap-x-2">
                      <div className="w-5 h-5">
                        <Pic
                          src="/rolnew/global/icons/check-circle.svg"
                          alt="clock"
                        />
                      </div>
                      <P className="pl-1 font-medium text-[#F7BC3A]">
                        FREE Cancellation Upto 12 hours
                      </P>
                    </div>
                    <div className="flex items-start mt-4 gap-x-2">
                      <div className="w-5 h-5">
                        <Pic
                          src="/rolnew/global/icons/shield-check.svg"
                          alt="clock"
                        />
                      </div>
                      <P className="pl-1 font-medium text-[#F7BC3A]">
                        No hidden costs
                      </P>
                    </div>

                    <div className="flex items-start mt-4 w-full gap-x-2">
                      <div className="w-5 h-5">
                        <FiCheck className="text-xl" />
                      </div>
                      <P className="font-medium grow">All-inclusive pricing</P>
                    </div>

                    <div className="flex items-start mt-4 w-full gap-x-2">
                      <div className="w-5 h-5">
                        <FiCheck className="text-xl" />
                      </div>
                      <P className="font-medium grow">
                        Secure Payment by credit card, debit card
                      </P>
                    </div>
                    <div className="h-12 mx-auto mt-4 lg:w-full flex gap-x-2 items-start">
                      {/* <Pic src="/images/icons/payments.png" alt="location" /> */}
                      {allCards.map((item) => (
                        <img
                          key={item}
                          src={`/images/trip-details/cards/${item}.svg`}
                          alt={item}
                          className="w-12 h-10"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative order-1 w-full max-w-full lg:ml-5 lg:order-2 grow">
                  {showLoader && <Loader />}
                  {!isCarSelected
                    && filterFleetList
                    && filterFleetList.map((fleet) => (
                      // eslint-disable-next-line max-len, react/jsx-no-bind
                      <CarsCard
                        key={fleet.vehicle_cat_name}
                        showBookBtn
                        fleetDetails={fleet}
                        selectCar={selectCar}
                        isSelected={selectedCarDetails?.vehicle_cat_id}
                      />
                    ))}

                  {!fleetList && !showLoader && (
                    <div className="flex items-center justify-center h-4/6">
                      <H1 className="font-semibold leading-5 text-red-500 capitalize -mt-2/3">
                        Sorry!
                        {' '}
                        <br />
                        No fleet available
                      </H1>
                    </div>
                  )}

                  {isCarSelected && !showPayment && (
                    <div ref={carsRef}>
                      <CarsCard
                        showBookBtn={false}
                        fleetDetails={selectedCarDetails}
                        isActive
                      />
                    </div>
                  )}

                  {isCarSelected && showPayment && (
                    <div ref={carsRef}>
                      {/* <CarsCardWithUserDetails
                    showBookBtn={false}
                    fleetDetails={selectedCarDetails}
                    userDetails={passengersDetails}
                    showBooker={showBooker}
                    showFlight={showFlight}
                  /> */}
                      <CarsCard
                        showBookBtn={false}
                        fleetDetails={selectedCarDetails}
                        isActive
                      />
                    </div>
                  )}

                  {showAuth && isCarSelected && (
                    <div className="relative" ref={paymentsRef}>
                      <form
                        onSubmit={handleSubmit(onPassengerSubmit)}
                        className={`${showPayment && 'hidden'}`}
                        ref={formRef}
                      >
                        <PassengerDetails
                          details={passengersDetails}
                          setDetails={setPassengersDetails}
                          showFlight={showFlight}
                          setBooker={setShowBooker}
                          showBooker={showBooker}
                          register={register}
                          formState={formState}
                          setError={setError}
                          clearErrors={clearErrors}
                          userDetails={userDetails}
                          setValue={setValue}
                          setUserDetails={setUserDetails}
                          checkMobileNumber={checkPassengerMobileNumber}
                          mobileError={passengerMobileError}
                          checkBookerMobileError={checkBookerMobileNumber}
                          bookerMobileError={bookerMobileError}
                          checkBookerEmailError={checkBookerEmailError}
                          checkEmailexists={checkEmailexists}
                          passengerLoader={passengerLoader}
                          setPassenger={addPassengers}
                          passengers={passengers}
                          decrement={decrement}
                          increment={increment}
                          setShowAuth={setShowAuth}
                          showPassengerError={showPassengerError}
                          getMobileNumber={getMobileNumber}
                          setPassengers={setPassengers}
                          getValues={getValues}
                          fleetDetails={selectedCarDetails}
                        />
                      </form>
                      <div className={`${!showPayment && 'hidden'}`}>
                        {/* <PaymentDetails
                        showBilling={showBilling}
                        setShowBilling={setShowBilling}
                        callBooking={callBooking}
                        showLoading={showBtnLoading}
                        setShowToken={setShowToken}
                        showToken={showToken}
                      /> */}
                        <PayWithStripe
                          showLoading={showBtnLoading}
                          setShowBilling={setShowBilling}
                          setShowToken={setShowToken}
                          callBooking={callBooking}
                          showToken={showToken}
                        />
                      </div>
                    </div>
                  )}

                  {!showAuth && isCarSelected && (
                    <div
                      className="relative w-full py-8 px-2 text-left bg-[#384957] border-[#FFFFFF33] border-0.4 border-opacity-20 rounded-xl"
                      ref={loginRef}
                    >
                      <div className="max-w-[550px] mx-auto">
                        <EmailLogin
                          isEmailLogin={showEmailLogin}
                          handelClick={setshowEmailLogin}
                          _callbackUrl="/fleet-availability"
                        />

                        <Login
                          showOTP={showEmailLogin}
                          isLoggedIn={setShowAuth}
                          getBookerPassword={setBookerPassword}
                          passwordExists={setPasswordExists}
                          getAuthType={setAuthType}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        )}
      </div>
    </>
  );
}

export default FleetPage;
