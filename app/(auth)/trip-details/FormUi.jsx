/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  useEffect, useRef, useState, Suspense,
} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import UseDebounce from 'components/addressautocomplete/UseDebounce';
import countries from 'components/shared/countries';
import Button from 'components/ui/Button';
import ModalV2 from 'components/ui/ModalV2';
import api from 'components/utils/api';
import useRetryUntilResolved from 'hooks/useRetryUntilResolved';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/shared/Loader';
import ModalV3 from 'components/ui/ModalV3';
import Activity from './Activity';
import CancelledModalBody from './CancelledModalBody';
import CardModalBody from './CardModalBody';
import DisplayFields from './DisplayFields';
import FareSummary from './FareSummary';
import FormFields from './FormFields';
import TabsUi from './TabsUi';
import CancelledConfirmModalBody from './CancelledConfirmModalBody';

function setMinute(minDate) {
  let num = minDate.getMinutes();
  if (num === 0) {
    return '00';
  }
  const remainder = minDate.getMinutes() % 5;
  // eslint-disable-next-line operator-assignment
  num = num + (5 - remainder);
  let min = num < 10 ? `0${num}` : num;
  if (min >= 55) {
    min = 55;
  }
  return min;
}

function getMobileNumber(phone, country) {
  const newPhone = phone.replace('+', '');
  const formattedCountry = country.replace('+', '');
  const formattedNumber = newPhone.replace(formattedCountry, '');
  return formattedNumber;
}

function addHours(getDate, hours) {
  getDate.setHours(getDate.getHours() + hours);
  return getDate;
}

function FormUiWithoutSuspense() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('booking-id');
  const tempBookingId = searchParams.get('temp_booking_id');
  const cancelId = searchParams.get('cancel-id');
  const active = searchParams.get('activity');
  const router = useRouter();
  const cancelledModalBody = () => <CancelledModalBody />;
  const cancelledConfirmModalBody = () => <CancelledConfirmModalBody />;

  const [activeTab, setActiveTab] = useState(active || 0);
  const [showSuccessMsg, setshowSuccessMsg] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [prevTarrif, setPrevTarrif] = useState(0);
  const [isAllowedEdit, setisAllowedCancel] = useState(true);
  const [isFetching, setIsFetching] = useState(null);

  const [passengerName, setPassengerName] = useState(null);
  const [passengerLastName, setPassengerLastName] = useState(null);
  const [passengerMobile, setPassengerMobile] = useState(null);
  const [passengerEmail, setPassengerEmail] = useState(null);
  const [passengerCountry, setPassengerCountry] = useState('');
  const [bookerName, setBookerName] = useState(null);
  const [bookerLastName, setBookerLastName] = useState(null);
  const [bookerMobile, setBookerMobile] = useState(null);
  const [bookerEmail, setBookerEmail] = useState(null);
  const [bookerCountry, setBookerCountry] = useState(countries[0]);
  const [showBooker, setShowBooker] = useState(false);
  const [rideCategory, setRideCategory] = useState(null);
  const [bookingSummary, setBookingSummary] = useState([]);
  const [adultNo, setAdultNo] = useState(0);
  const [infantNo, setInfantNo] = useState(0);
  const [childNo, setChildNo] = useState(0);
  const [bagNo, setBagNo] = useState(0);
  const [hoursOfTrip, setHoursOfTrip] = useState(4);
  const [userPickLocation, setUserPickLocation] = useState('');
  const [userDropLocation, setUserDropLocation] = useState('');
  const [flightNo, setFlightNo] = useState('');
  const [date, setNewDate] = useState(addHours(new Date(), 2));
  const [timeZone, setTimeZone] = useState('Europe/London');

  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [riderDateTime, setRiderDateTime] = useState(false);
  const [cardModal, setCardModal] = useState();
  const [selectedCard, setSelectedCard] = useState(null);
  const [userCurrency, setUserCurrency] = useState(null);

  const [driverNotes, setDriverNotes] = useState('');
  const [nameOnBoard, setNameOnBoard] = useState('');
  const [availableVehicles, setAvailableVehicles] = useState(null);
  const [addedReturn, setAddedReturn] = useState(false);

  const [riderReturnDateTime, setRiderReturnDateTime] = useState(null);
  const [isSubmissionAllowed, setIsSubmissionAllowed] = useState(true);

  const debouncedAdultNo = UseDebounce(adultNo, 300);
  const debouncedBagNo = UseDebounce(bagNo, 300);
  // const debouncedHoursOfTrip = UseDebounce(hoursOfTrip, 300);
  const [allTripDetails, setAllTripDetails] = useState(null);
  const [bookingActivity, setBookingActivity] = useState(null);

  const [tariffFetching, setTariffFetching] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [cancelledModal, setCancelledModal] = useState();
  const [cancelleConfirmdModal, setCancelleConfirmdModal] = useState();

  const [firstUpdate, setFirstUpdate] = useState(true);
  const [passengerMobileError, setPassengerMobileError] = useState(false);
  const [userTripDetails, setUserTripDetails] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [showNewCard, setShowNewCard] = useState(false);
  const [showFlight, setShowFlight] = useState(false);
  const [showNewRef, setShowNewRef] = useState('');
  const [adminFee, setAdminFee] = useState('');
  const [waitingFee, setWaitingFee] = useState('');
  const [surCharge, setSurcharge] = useState('');
  const [carParkingFee, setCarParkingFee] = useState('');
  const [discountPct, setDiscountPct] = useState('');
  const [discountAmt, setDiscountAmt] = useState('');
  const [baseTariff, setBaseTariff] = useState('');

  const vehicleRef = useRef(null);

  const isTokenResolved = useRetryUntilResolved(() => {
    if (typeof window === 'undefined') return;
    const token = sessionStorage.getItem('token');
    // eslint-disable-next-line consistent-return
    return token;
  });

  useEffect(() => {
    if (tempBookingId) {
      // eslint-disable-next-line no-use-before-define
      confirmBooking(tempBookingId);
    }
  }, [tempBookingId]);

  async function confirmCancelBooking() {
    const response = await api.put(`/booking/cancel/${bookingId}`, {});
    if (response.data.status === 1) {
      setIsCancelled(true);
      setCancelledModal(() => ({
        enabled: true,
        header: '',
        body: cancelledModalBody,
        noOutSideClose: true,
        footer: (
          <Button
            className="btn-primary"
            onClick={async () => {
              await router.push('/booking-management');
            }}
          >
            OK
          </Button>
        ),
      }));
      setIsFetching(() => false);
    }
  }

  async function cancelRide() {
    setCancelleConfirmdModal(() => ({
      enabled: true,
      header: '',
      body: cancelledConfirmModalBody,
      noOutSideClose: true,
      footer: (
        <div className="flex justify-between w-full ">
          <Button
            className="btn-primary btn-outline"
            onClick={async () => {
              setCancelleConfirmdModal((prev) => ({
                ...prev,
                enabled: false,
              }));
            }}
          >
            No
          </Button>

          <Button
            className="btn-primary"
            onClick={async () => {
              setCancelleConfirmdModal((prev) => ({
                ...prev,
                enabled: false,
              }));
              confirmCancelBooking();
            }}
          >
            Yes
          </Button>
        </div>
      ),
    }));
    return false;
  }

  useEffect(() => {
    if (!showBooker) {
      setPassengerName(`${userTripDetails?.booker_fname}`);
      setPassengerLastName(userTripDetails?.booker_lname);
      setPassengerEmail(userTripDetails?.booker_email_id);
      setPassengerCountry(userTripDetails?.booker_country_code);
      setPassengerMobile(
        `${userTripDetails?.booker_country_code}${userTripDetails?.booker_mobile_no}`,
      );
    } else {
      setPassengerName(`${userTripDetails?.passenger_fname}`);
      setPassengerLastName(userTripDetails?.passenger_lname);
      setPassengerEmail(userTripDetails?.passenger_email);
      setPassengerCountry(userTripDetails?.passenger_mobile_country_code);
      setPassengerMobile(
        `${userTripDetails?.passenger_mobile_country_code}${userTripDetails?.passenger_mobile}`,
      );
    }
  }, [showBooker, userTripDetails, activeTab]);

  useEffect(() => {
    if (!bookingId) return;
    if (!isTokenResolved) return;
    const fetchTripDetails = async () => {
      setIsFetching(() => true);
      const url = cancelId ? `/client-booking/temp?booking_id=${bookingId}` : `/booking/${bookingId}`;
      const tripDetailsResponse = await api.get(url);
      const activity = await api.get(
        `/booking/activity?booking_id=${bookingId}`,
      );
      const tripDetails = tripDetailsResponse?.data;
      setUserCurrency(tripDetails?.invoice_currency || 'GBP');
      setShowFlight(
        tripDetails.pickup_location_type === 'airport'
          || tripDetails.drop_location_type === 'airport',
      );
      setBookingActivity(activity?.data);
      setUserTripDetails(tripDetails);
      setIsFinished(tripDetails?.ride_status);
      setAdminFee(tripDetails?.client_admin_fees);
      setWaitingFee(tripDetails?.client_waiting_charge);
      setCarParkingFee(tripDetails?.client_car_park_charge);
      setDiscountPct(tripDetails?.client_discount_pct);
      setDiscountAmt(tripDetails?.client_discount_amt);
      setSurcharge(tripDetails?.client_surcharge);
      setBaseTariff(tripDetails?.client_base_tariff);
      setShowBooker(tripDetails.booking_for_others);
      setPassengerName(
        `${tripDetails?.passenger_fname} ${tripDetails?.passenger_lname}`,
      );
      setPassengerMobile(
        `${tripDetails?.passenger_mobile_country_code}${tripDetails?.passenger_mobile}`,
      );
      setPassengerCountry(tripDetails?.passenger_mobile_country_code);
      setPassengerEmail(tripDetails?.passenger_email);
      setBookerName(`${tripDetails?.booker_fname}`);
      setBookerLastName(`${tripDetails?.booker_lname}`);
      setBookerCountry(tripDetails?.booker_country_code);
      setBookerMobile(
        `${tripDetails?.booker_country_code}${tripDetails?.booker_mobile_no}`,
      );
      setBookerEmail(tripDetails?.booker_email_id);
      setRideCategory(tripDetails?.booking_type?.toLowerCase());
      setBookingSummary([
        tripDetails?.booking_ref,
        tripDetails?.booking_date,
        tripDetails?.region_name,
      ]);
      setAdultNo(tripDetails?.passenger_adult_cnt);
      setChildNo(tripDetails?.passenger_child_cnt);
      setInfantNo(tripDetails?.passenger_infant_cnt);
      setBagNo(tripDetails?.passenger_luggage_count || 0);
      const latLonPickUp = tripDetails?.pickup_loc_coord
        ?.split('POINT')[1]
        .split(' ');
      const latLonDropOff = tripDetails?.drop_loc_coord
        ?.split('POINT')[1]
        .split(' ');
      setUserPickLocation({
        address: tripDetails?.pickup_location,
        latLng: `${Number(
          latLonPickUp[1].slice(0, latLonPickUp[1].length - 1),
        )}, ${Number(latLonPickUp[0].slice(1))}`,
        postal_code: tripDetails?.pickup_postcode,
        locationid: tripDetails?.pickup_location_id,
        locationtype: tripDetails?.pickup_location_type,
        regionid: tripDetails?.region_id,
        // eslint-disable-next-line no-nested-ternary
        zoneId: tripDetails?.pickup_coverage_zone?.length > 0 ? tripDetails?.pickup_coverage_zone : tripDetails?.pickup_location_id ? [tripDetails?.pickup_location_id] : [],
      });
      if (latLonDropOff) {
        setUserDropLocation({
          address: tripDetails?.drop_location,
          latLng: `${Number(
            latLonDropOff[1].slice(0, latLonDropOff[1].length - 1),
          )}, ${Number(latLonDropOff[0].slice(1))}`,
          postal_code: tripDetails?.drop_postcode,
          locationid: tripDetails?.drop_location_id,
          locationtype: tripDetails?.drop_location_type,
          regionid: tripDetails?.region_id,
          // eslint-disable-next-line no-nested-ternary
          zoneId: tripDetails?.drop_coverage_zone?.length > 0 ? tripDetails?.drop_coverage_zone : tripDetails?.drop_location_id ? [tripDetails?.drop_location_id] : [],
        });
      }
      const factor = 0.621371;
      setDistance(Number(Number(tripDetails?.distance) * factor));
      setDuration(tripDetails?.duration);
      setHoursOfTrip(tripDetails?.booking_duration || 4);
      setFlightNo(tripDetails?.passenger_flight_no || '');

      const travelDate = new Date(tripDetails?.travel_date);

      setRiderDateTime({
        selectedDate: travelDate,
        hour: travelDate.getHours(),
        minute: setMinute(travelDate),
        daytime: travelDate.getHours() > 12 ? 'am' : 'pm',
      });
      setAddedReturn(!!tripDetails?.round_trip_date);
      if (tripDetails?.round_trip_date) {
        const returnDate = new Date(tripDetails?.round_trip_date);
        setRiderReturnDateTime({
          selectedDate: returnDate,
          hour: returnDate.getHours(),
          minute: setMinute(returnDate),
        });
      }

      setPrevTarrif(tripDetails?.tariff);
      if (tripDetails?.booking_type === 'HOURLY') {
        setSelectedVehicle({
          conv_rate: tripDetails?.tariff_conv_rate,
          tariff: tripDetails?.tariff,
          user_tariff: tripDetails?.tariff_in_user_currency,
          vehicle_cat_desc: tripDetails?.preferred_veh_cat_desc,
          vehicle_cat_id: tripDetails?.preferred_veh_id,
          vehicle_cat_name: tripDetails?.preferred_veh_cat_name,
          vehicle_imge_url: tripDetails?.prefereed_vehicle_img_url,
          addl_miles_hour: tripDetails?.client_addl_miles_hour,
          tax_pct: tripDetails?.client_tax_pct,
          job_hour: tripDetails?.client_job_hour,
          min_booking_hour: tripDetails?.client_min_booking_hour,
          booking_hourly_rate: tripDetails?.client_booking_hourly_rate,
          booking_miles_included: tripDetails?.client_booking_miles_included,
          addl_hour_rate: tripDetails?.client_addl_hour_rate,
          extra_mileage_charge: tripDetails?.client_extra_mileage_charge,
        });
      } else {
        setSelectedVehicle({
          conv_rate: tripDetails?.tariff_conv_rate,
          tariff: tripDetails?.tariff,
          user_tariff: tripDetails?.tariff_in_user_currency,
          vehicle_cat_desc: tripDetails?.preferred_veh_cat_desc,
          vehicle_cat_id: tripDetails?.preferred_veh_id,
          vehicle_cat_name: tripDetails?.preferred_veh_cat_name,
          vehicle_imge_url: tripDetails?.prefereed_vehicle_img_url,
          tax_pct: tripDetails?.client_tax_pct,
        });
      }
      setDriverNotes(tripDetails?.driver_notes || '');
      setNameOnBoard(tripDetails?.passenger_board_name || '');
      setAllTripDetails(tripDetails);

      setIsFetching(() => false);
    };

    fetchTripDetails();
  }, [bookingId, isTokenResolved, router, tempBookingId]);

  useEffect(() => {
    const checkTariff = async () => {
      const hourlyPayload = {
        from_location: userPickLocation?.locationid || null,
        to_location: userDropLocation?.locationid || null,
        hours: hoursOfTrip,
        distance: distance ? Math.round(Number(distance)) : 0,
        adult_seat_count: debouncedAdultNo,
        luggage_count: debouncedBagNo || 0,
        user_currency: userCurrency || 'GBP',
        destination_zone_id: userDropLocation?.zoneId,
        source_zone_id: userPickLocation?.zoneId,
        way_location: [],
        user_type: 'C',
        region_id: userPickLocation?.regionid,
      };
      const transfersPayload = {
        from_location: userPickLocation?.locationid || null,
        to_location: userDropLocation?.locationid || null,
        adult_seat_count: debouncedAdultNo,
        luggage_count: debouncedBagNo || 0,
        user_currency: userCurrency || 'GBP',
        distance: Math.round(Number(distance)),
        round_trip: addedReturn,
        destination_zone_id: userDropLocation?.zoneId,
        source_zone_id: userPickLocation?.zoneId,
        way_location: [],
        user_type: 'C',
        region_id: userPickLocation?.regionid,
      };

      setTariffFetching(() => true);
      const tariffResponse = await api.post(
        '/tariff',
        rideCategory === 'hourly' ? hourlyPayload : transfersPayload,
      );
      setTariffFetching(() => false);
      setAvailableVehicles(tariffResponse?.data);
      if (selectedVehicle) {
        const tariff = tariffResponse?.data.filter(
          (item) => item?.vehicle_cat_id === selectedVehicle.vehicle_cat_id,
        );
        if (tariff.length === 0) {
          toast.error('Previous vehicle not available.', {
            autoClose: 3000,
            theme: 'colored',
          });
          toast.clearWaitingQueue();
          setSelectedVehicle(null);
        }

        if (tariff.length > 0 && firstUpdate) {
          setAdminFee(tariff[0]?.admin_fee || 0);
          setWaitingFee(tariff[0]?.waiting_fee || 0);
          setCarParkingFee(tariff[0]?.car_parking_charge || 0);
          setDiscountPct(tariff[0]?.discount_pct || 0);
          setDiscountAmt(tariff[0]?.discount_amt || 0);
          setSurcharge(tariff[0]?.surcharge || 0);
          setBaseTariff(tariff[0]?.base_rate);
          if (rideCategory === 'hourly') {
            setSelectedVehicle((prev) => ({
              min_booking_hour: tariff[0]?.min_hour,
              booking_hourly_rate: tariff[0]?.hrly_rate,
              booking_miles_included: tariff[0]?.miles_included,
              addl_hour_rate: tariff[0]?.addl_hour_rate,
              addl_miles_hour: tariff[0]?.addl_miles_hourly,
              extra_mileage_charge: tariff[0]?.extra_mile_charge,
              // tariff: tariff[0]?.tariff,
              ...prev,
            }));
          } else {
            setSelectedVehicle((prev) => ({
              ...prev,
            }));
          }
        } else {
          setAdminFee(tariff[0]?.admin_fee || 0);
          setWaitingFee(tariff[0]?.waiting_fee || 0);
          setCarParkingFee(tariff[0]?.car_parking_charge || 0);
          setDiscountPct(tariff[0]?.discount_pct || 0);
          setDiscountAmt(tariff[0]?.discount_amt || 0);
          setSurcharge(tariff[0]?.surcharge || 0);
          setBaseTariff(tariff[0]?.base_rate);
          if (rideCategory === 'hourly') {
            setSelectedVehicle((prev) => ({
              min_booking_hour: tariff[0]?.min_hour,
              booking_hourly_rate: tariff[0]?.hrly_rate,
              booking_miles_included: tariff[0]?.miles_included,
              addl_hour_rate: tariff[0]?.addl_hour_rate,
              addl_miles_hour: tariff[0]?.addl_miles_hourly,
              extra_mileage_charge: tariff[0]?.extra_mile_charge,
              tariff: tariff[0]?.tariff,
              ...prev,
            }));
          } else {
            setSelectedVehicle((prev) => ({
              ...prev,
              tariff: tariff[0]?.tariff,
            }));
          }
        }

        if (selectedVehicle?.vehicle_cat_id && firstUpdate === false) {
          const isIncludingSelected = tariffResponse?.data.filter(
            (item) => item?.vehicle_cat_id === selectedVehicle.vehicle_cat_id,
          );
          if (isIncludingSelected.length === 0) {
            setIsSubmissionAllowed(false);
            vehicleRef?.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'start',
            });
          } else {
            setSelectedVehicle(isIncludingSelected[0]);
            setBaseTariff(isIncludingSelected[0]?.base_rate);
            setAdminFee(isIncludingSelected[0]?.admin_fee || 0);
            setWaitingFee(isIncludingSelected[0]?.waiting_fee || 0);
            setCarParkingFee(isIncludingSelected[0]?.car_parking_charge || 0);
            setDiscountPct(isIncludingSelected[0]?.discount_pct || 0);
            setDiscountAmt(isIncludingSelected[0]?.discount_amt || 0);
            setSurcharge(isIncludingSelected[0]?.surcharge || 0);
            if (rideCategory === 'hourly') {
              setSelectedVehicle((prev) => ({
                min_booking_hour: isIncludingSelected[0]?.min_hour,
                booking_hourly_rate: isIncludingSelected[0]?.hrly_rate,
                booking_miles_included: isIncludingSelected[0]?.miles_included,
                addl_hour_rate: isIncludingSelected[0]?.addl_hour_rate,
                addl_miles_hour: isIncludingSelected[0]?.addl_miles_hourly,
                extra_mileage_charge: isIncludingSelected[0]?.extra_mile_charge,
                tariff: isIncludingSelected[0]?.tariff,
                ...prev,
              }));
            } else {
              setBaseTariff(isIncludingSelected[0]?.base_rate);
              setSelectedVehicle((prev) => ({
                ...prev,
                tariff: isIncludingSelected[0]?.tariff,
              }));
            }
            setIsSubmissionAllowed(true);
          }
        }
      }
    };
    if (isFetching === false) {
      checkTariff();
    }
  }, [
    isFetching,
    hoursOfTrip,
    distance,
    firstUpdate,
    rideCategory,
    selectedVehicle?.vehicle_cat_id,
    userCurrency,
    userDropLocation?.locationid,
    userPickLocation?.locationid,
    addedReturn,
  ]);

  const onUpdateRide = async () => {
    const monthName = new Date(
      Date.UTC(2000, riderDateTime.selectedDate.getMonth(), 1),
    ).toLocaleString('default', { month: 'short' });

    const returnMonthName = new Date(
      Date.UTC(2000, riderReturnDateTime.selectedDate.getMonth(), 1),
    ).toLocaleString('default', { month: 'short' });

    const formatTravelDate = `${riderDateTime.selectedDate.getDate()} ${monthName} ${riderDateTime.selectedDate.getFullYear()} ${
      riderDateTime.hour
    }:${riderDateTime.minute}`;

    const formatReturnDate = `${riderReturnDateTime.selectedDate.getDate()} ${returnMonthName} ${riderReturnDateTime.selectedDate.getFullYear()} ${
      riderReturnDateTime.hour
    }:${riderReturnDateTime.minute}`;

    const payload = {
      region_id: allTripDetails?.region_id,
      booker_fname: bookerName,
      booker_lname: bookerLastName,
      booker_mobile_no: getMobileNumber(bookerMobile, bookerCountry),
      booker_country_code: `+${Number(bookerCountry)}`,
      booker_email: bookerEmail,
      booking_for_others: showBooker,
      admin_fee: Number(adminFee),
      waiting_fee: Number(waitingFee),
      discount_pct: Number(discountPct),
      surcharge: Number(surCharge),
      car_parking_fee: Number(carParkingFee),
      tax_pct: Number(selectedVehicle.tax_pct),
      discount_amt: Number(discountAmt),
      base_tariff: Number(baseTariff),
      base_rate: Number(baseTariff),
      pickup_postcode: userPickLocation?.postal_code,
      pickup_location_id: userPickLocation?.locationid || null,
      drop_location_id: userDropLocation?.locationid || null,
      pickup_location_type: userPickLocation?.locationtype,
      drop_postcode: userDropLocation?.postal_code || null,
      booking_type: rideCategory?.toUpperCase(),
      booking_date: allTripDetails?.booking_date,
      pickup_location: userPickLocation?.address,
      drop_location: userDropLocation?.address || null,
      drop_location_type: userDropLocation?.locationtype || null,
      pickup_loc_coord: `POINT(${userPickLocation?.latLng
        .split(',')
        .reverse()
        .join(' ')})`,
      drop_loc_coord: userDropLocation?.latLng
        ? `POINT(${userDropLocation?.latLng.split(',').reverse().join(' ')})`
        : null,
      travel_date: formatTravelDate,
      booking_duration:
        rideCategory === 'hourly'
          ? hoursOfTrip || 4
          : allTripDetails?.booking_duration || 0,
      job_hour:
        rideCategory === 'hourly'
          ? hoursOfTrip || 4
          : allTripDetails?.booking_duration || 0,
      preferred_vehicle: selectedVehicle?.vehicle_cat_id,
      passenger_fname: passengerName,
      passenger_lname: passengerLastName,
      passenger_mobile_no: getMobileNumber(passengerMobile, passengerCountry),
      passenger_country_code: `+${Number(passengerCountry)}`,
      passenger_email: passengerEmail,
      passenger_adult_cnt: adultNo,
      passenger_infant_cnt: infantNo,
      passenger_child_cnt: childNo,
      passenger_luggage_cnt: bagNo,
      ride_status: isFinished,
      ...(addedReturn && {
        round_trip_date: formatReturnDate,
      }),
      tariff: Number(selectedVehicle?.tariff),
      final_tariff: Number(selectedVehicle?.tariff),
      tariff_conv_rate: Number(selectedVehicle?.conv_rate),
      user_tariff: Number(selectedVehicle?.user_tariff),
      invoice_amt_currency: userCurrency,
      billing_address_line_1: allTripDetails?.billing_address_line_1,
      billing_address_line_2: allTripDetails?.billing_address_line_2,
      billing_address_town: allTripDetails?.billing_address_town,
      billing_address_post_code: allTripDetails?.billing_address_postcode,
      billing_address_country: allTripDetails?.billing_address_country,
      flight_no: flightNo,
      driver_notes: driverNotes,
      board_name: nameOnBoard,
      distance: distance ? Number(distance) * 1.60934 : null,
      duration: duration ? Number(duration) : null,
    };

    const hourlyPayload = {
      from_location: userPickLocation?.locationid || null,
      to_location: userDropLocation?.locationid || null,
      hours: hoursOfTrip,
      distance: distance ? Math.round(Number(distance)) : 0,
      adult_seat_count: debouncedAdultNo,
      luggage_count: debouncedBagNo || 0,
      user_currency: userCurrency || 'GBP',
      destination_zone_id: userDropLocation?.zoneId,
      source_zone_id: userPickLocation?.zoneId,
      way_location: [],
      user_type: 'C',
      region_id: userPickLocation?.regionid,
      veh_cat_id: selectedVehicle?.vehicle_cat_id,
    };
    const transfersPayload = {
      from_location: userPickLocation?.locationid || null,
      to_location: userDropLocation?.locationid || null,
      adult_seat_count: debouncedAdultNo,
      luggage_count: debouncedBagNo || 0,
      user_currency: userCurrency || 'GBP',
      distance: Math.round(Number(distance)),
      round_trip: addedReturn,
      destination_zone_id: userDropLocation?.zoneId,
      source_zone_id: userPickLocation?.zoneId,
      way_location: [],
      user_type: 'C',
      region_id: userPickLocation?.regionid,
      veh_cat_id: selectedVehicle?.vehicle_cat_id,
    };

    payload.tariffDetails = rideCategory === 'hourly' ? hourlyPayload : transfersPayload;
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    payload.checkoutDetails = {
      success_url: currentUrl,
      cancel_url: `${currentUrl}&cancel-id=${Date.now()}${bookingId}`,
    };
    if (rideCategory === 'hourly') {
      payload.min_booking_hour = Number(selectedVehicle?.min_booking_hour);
      payload.booking_hourly_rate = Number(
        selectedVehicle?.booking_hourly_rate,
      );
      payload.booking_miles_included = Number(
        selectedVehicle?.booking_miles_included,
      );
      payload.addl_hour_rate = Number(selectedVehicle?.addl_hour_rate);
      payload.addl_miles_hour = Number(selectedVehicle?.addl_miles_hour);
      payload.extra_mileage_charge = Number(
        selectedVehicle?.extra_mileage_charge,
      );
    }
    // return;
    setTariffFetching(() => true);
    const response = await api.post(`/client-booking/${bookingId}`, payload);
    if (response?.data?.checkoutUrl) {
      window.location.href = `${response.data.checkoutUrl}`;
    } else if (response?.data?.tempBookingId) {
      // eslint-disable-next-line no-use-before-define
      confirmBooking(response?.data?.tempBookingId);
    }
  };

  const confirmBooking = async (tempResponseBookingId) => {
    const conformationResponse = await api.put(`/client-booking/${bookingId}/${tempResponseBookingId}`, {});
    if (conformationResponse?.data?.status === 1) {
      // if ((Number(prevTarrif) !== Number(selectedVehicle?.tariff))) {
      //   setShowNewRef(conformationResponse?.data?.booking_ref);
      //   return true;
      // }
      setshowSuccessMsg(() => true);
      setShowNewRef(conformationResponse?.data?.booking_ref);
      // eslint-disable-next-line no-use-before-define
      onShowCardModal();
    } else {
      toast.error(conformationResponse?.message, {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
    }
    setTariffFetching(() => false);
    return false;
  };

  const isValidated = () => {
    if (
      !bookerName
      || !bookerMobile
      || !passengerName
      || !passengerLastName
      || !bookerLastName
      || !bookerName
      || !passengerEmail
      || !passengerMobile
      || !userPickLocation?.address
      || (!userDropLocation?.address && rideCategory === 'transfers')
    ) {
      toast.error('Please fil out all the fields and try again', {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
      return false;
    } if (userPickLocation?.zoneId?.length === 0 && userDropLocation?.zoneId?.length === 0) {
      toast.error('Any of the address must be inside the coverage zone.', {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
      return false;
    }
    return true;
  };

  useEffect(() => {
    setShowFlight(userPickLocation?.isAirport || userDropLocation?.isAirport);
  }, [
    setUserPickLocation,
    setUserDropLocation,
    userPickLocation,
    userDropLocation,
  ]);

  const cardModalBody = ({
    selectedCard: _selectedCard,
    selectedVehicle: _selectedVehicle,
    userCurrency: _userCurrency,
    showNewCard: _showNewCard,
    showNewRef: _showNewRef,
    showSuccessMsg: _showSuccess,
  }) => (
    <CardModalBody
      selectedCard={_selectedCard}
      selectedVehicle={_selectedVehicle}
      setSelectedCard={setSelectedCard}
      userCurrency={_userCurrency}
      onConfirm={onUpdateRide}
      allTripDetails={allTripDetails}
      tariff={prevTarrif}
      showNewCard={_showNewCard}
      setShowNewCard={setShowNewCard}
      showNewRef={_showNewRef}
      showSuccessMsg={_showSuccess}
    />
  );

  const onShowCardModal = () => {
    if (isSubmissionAllowed) {
      setCardModal(() => ({
        enabled: true,
        body: cardModalBody,
      }));
    } else {
      vehicleRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
      toast.error('Please select a vehicle', {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
    }
  };

  const onUpdateVehicel = (fleet) => {
    setSelectedVehicle(() => fleet);

    setAdminFee(selectedVehicle.admin_fee || 0);
    setWaitingFee(selectedVehicle.waiting_fee || 0);
    setCarParkingFee(selectedVehicle?.car_parking_charge || 0);
    setDiscountPct(selectedVehicle?.discount_pct || 0);
    setDiscountAmt(selectedVehicle?.discount_amt || 0);
    setSurcharge(selectedVehicle?.surcharge || 0);
    setBaseTariff(selectedVehicle?.base_rate || 0);
  };

  useEffect(() => {
    const getUserCurrency = async (regionid) => {
      const response = await api.get(`/regions?region_id=${regionid}`);
      if (response?.data?.region_currency_text) {
        setUserCurrency(response?.data?.region_currency_text);
        let regionDate = new Date().toLocaleString('en-US', {
          timeZone: response?.data?.region_time_zone || 'Europe/London',
        });
        regionDate = new Date(regionDate);
        const newDate = addHours(regionDate, 2);
        setTimeZone(response?.data?.region_time_zone);
        setNewDate(newDate);
      }
    };
    if (allTripDetails?.region_id) {
      getUserCurrency(allTripDetails?.region_id);
    }
  }, [allTripDetails]);

  return (
    <>
      <ModalV2
        {...cardModal}
        setModal={setCardModal}
        selectedCard={selectedCard}
        selectedVehicle={selectedVehicle}
        userCurrency={userCurrency}
        showNewCard={showNewCard}
        showNewRef={showNewRef}
        noOutSideClose
        showSuccessMsg={showSuccessMsg}
        setshowSuccessMsg={setshowSuccessMsg}
      />
      <ModalV2 {...cancelledModal} setModal={setCancelledModal} />
      <ModalV3 {...cancelleConfirmdModal} setModal={setCancelleConfirmdModal} />
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
      {isFetching && (
        <div className="fixed text-xl -translate-x-1/2 -translate-y-1/2 text-bold left-1/2 top-1/2">
          loading please wait...
        </div>
      )}
      {tariffFetching && (
        <div className="fixed top-0 z-50 w-screen h-screen bg-gray-100 bg-opacity-10">
          <div className="relative w-full h-full text-xl -translate-x-1/2 -translate-y-1/2 text-bold left-1/2 top-1/2">
            <Loader />
          </div>
        </div>
      )}

      {isFetching === false && !isCancelled && (
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-7/12">
            <div className="p-[14px] bg-custom-lightGray rounded-xl">
              <TabsUi activeTab={activeTab} onChange={setActiveTab} />
              <div className="">
                {activeTab === 0 ? (
                  <FormFields
                    bookingSummary={bookingSummary}
                    selectedVehicle={selectedVehicle}
                    setSelectedVehicle={(fleet) => {
                      onUpdateVehicel(fleet);
                    }}
                    passengerName={passengerName}
                    passengerLastName={passengerLastName}
                    setPassengerName={setPassengerName}
                    setPassengerLastName={setPassengerLastName}
                    passengerMobile={passengerMobile}
                    setPassengerMobile={setPassengerMobile}
                    passengerEmail={passengerEmail}
                    setPassengerEmail={setPassengerEmail}
                    bookerName={bookerName}
                    bookerLastName={bookerLastName}
                    setBookerName={setBookerName}
                    setBookerLastName={setBookerLastName}
                    bookerMobile={bookerMobile}
                    setBookerMobile={setBookerMobile}
                    bookerEmail={bookerEmail}
                    setBookerEmail={setBookerEmail}
                    rideCategory={rideCategory}
                    setRideCategory={setRideCategory}
                    adultNo={adultNo}
                    setAdultNo={setAdultNo}
                    infantNo={infantNo}
                    setInfantNo={setInfantNo}
                    childNo={childNo}
                    setChildNo={setChildNo}
                    bagNo={bagNo}
                    setBagNo={setBagNo}
                    passengerCountry={passengerCountry}
                    setPassengerCountry={setPassengerCountry}
                    bookerCountry={bookerCountry}
                    setBookerCountry={setBookerCountry}
                    userPickLocation={userPickLocation}
                    setUserPickLocation={setUserPickLocation}
                    userDropLocation={userDropLocation}
                    setUserDropLocation={setUserDropLocation}
                    flightNo={flightNo}
                    setFlightNo={setFlightNo}
                    riderDateTime={riderDateTime}
                    setRiderDateTime={setRiderDateTime}
                    driverNotes={driverNotes}
                    setDriverNotes={setDriverNotes}
                    nameOnBoard={nameOnBoard}
                    setNameOnBoard={setNameOnBoard}
                    hoursOfTrip={hoursOfTrip}
                    setHoursOfTrip={setHoursOfTrip}
                    availableVehicles={availableVehicles}
                    addedReturn={addedReturn}
                    setAddedReturn={setAddedReturn}
                    riderReturnDateTime={riderReturnDateTime}
                    setRiderReturnDateTime={setRiderReturnDateTime}
                    userCurrency={userCurrency}
                    setFirstUpdate={setFirstUpdate}
                    duration={duration}
                    setisAllowedCancel={setisAllowedCancel}
                    passengerMobileError={passengerMobileError}
                    setPassengerMobileError={setPassengerMobileError}
                    showBooker={showBooker}
                    setShowBooker={setShowBooker}
                    isFinished={isFinished}
                    vehicleRef={vehicleRef}
                    isSubmissionAllowed={isSubmissionAllowed}
                    showFlight={showFlight}
                    minDate={date}
                    timeZone={timeZone}
                  />
                ) : (
                  <DisplayFields
                    bookingSummary={bookingSummary}
                    origin={userPickLocation}
                    destination={userDropLocation}
                    distance={distance}
                    setDistance={setDistance}
                    duration={duration}
                    setDuration={setDuration}
                    userCurrency={userCurrency}
                    rideCategory={rideCategory}
                    riderDateTime={riderDateTime}
                    flightNo={flightNo}
                    userPickLocation={userPickLocation}
                    userDropLocation={userDropLocation}
                    selectedVehicle={selectedVehicle}
                    adultNo={adultNo}
                    infantNo={infantNo}
                    childNo={childNo}
                    bagNo={childNo}
                    passengerName={passengerName}
                    passengerLastName={passengerLastName}
                    passengerMobile={passengerMobile}
                    passengerEmail={passengerEmail}
                    driverNotes={driverNotes}
                    nameOnBoard={nameOnBoard}
                  />
                )}
              </div>
              {/* <Button
              className="mt-6 btn-primary btn-outline"
              onClick={() => router.push('/booking-management')}
            >
              Go Back
            </Button> */}
            </div>
            {/* <div className="w-full lg:w-5/12">
              {activeTab === 0 ? (
                <FareSummary
                  origin={userPickLocation}
                  destination={userDropLocation}
                  distance={distance}
                  setDistance={setDistance}
                  duration={duration}
                  setDuration={setDuration}
                  userCurrency={userCurrency}
                  selectedVehicle={selectedVehicle}
                  rideCategory={rideCategory}
                />
              ) : (
                <Activity />
              )}
              {activeTab === 0 && (
                <div className="flex justify-end gap-4 mt-6">
                  <Button className="btn-primary btn-outline">
                    Cancel Ride
                  </Button>
                  <Button
                    className="btn-primary"
                    onClick={() => {
                      if (isValidated()) {
                        onShowCardModal();
                      }
                    }}
                  >
                    Update Ride
                  </Button>
                </div>
              )}
            </div> */}
          </div>
          <div className="w-full lg:w-5/12">
            {activeTab === 0 ? (
              <FareSummary
                origin={userPickLocation}
                destination={userDropLocation}
                distance={distance}
                setDistance={setDistance}
                duration={duration}
                setDuration={setDuration}
                userCurrency={userCurrency}
                selectedVehicle={selectedVehicle}
                rideCategory={rideCategory}
                addedReturn={addedReturn}
              />
            ) : (
              <Activity activity={bookingActivity} />
            )}
            {activeTab === 0 && isAllowedEdit && (
              <div className="flex justify-end gap-4 mt-[-16px] rounded-xl bg-custom-lightGray p-[14px] pb-10">
                <Button
                  className="btn-primary btn-outline"
                  disabled={!isAllowedEdit}
                  onClick={cancelRide}
                >
                  Cancel Ride
                </Button>
                <Button
                  className="btn-primary"
                  onClick={() => {
                    if (isValidated()) {
                      // eslint-disable-next-line no-unused-expressions
                      Number(prevTarrif) !== Number(selectedVehicle?.tariff)
                        ? onShowCardModal()
                        : onUpdateRide();
                    }
                  }}
                  disabled={!isAllowedEdit}
                >
                  Update Ride
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function FormUi() {
  return (
    <Suspense>
      <FormUiWithoutSuspense />
    </Suspense>
  );
}
