/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable operator-assignment */
/* eslint-disable no-lone-blocks */

"use client";

import { createContext, useState, useEffect } from "react";
import api from "components/utils/api";

const BookingContext = createContext();

const options = [
  {
    id: 1,
    text: "transfers",
  },
  {
    id: 2,
    text: "hourly",
  },
];
const hourList = [
  {
    value: null,
    option: "Select hour",
  },
];
for (let i = 4; i <= 24; i++) {
  hourList.push({ value: `${i} Hours`, option: `${i} Hours` });
}
function addHours(getDate, hours) {
  getDate.setHours(getDate.getHours() + hours);
  return getDate;
}
export function BookingProvider({ children }) {
  const [bookingType, setBookingType] = useState(options[0].text);
  const [bookingDuration, setBookingDuration] = useState(hourList);
  const [rideDuration, setRideDuration] = useState(null);
  const [date, setNewDate] = useState(addHours(new Date(), 2));

  // Date picker
  const [minDatetime, setMinDatetime] = useState();
  const [minReturnDatetime, setMinReturnDatetime] = useState({});

  function setMinute(minDate) {
    let num = minDate.getMinutes();
    const remainder = minDate.getMinutes() % 5;
    num = num + (5 - remainder);
    let min = num < 10 ? `0${num}` : num;
    if (min >= 55) {
      min = 55;
    }
    return min;
  }

  const [selectedDateTime, setselectedDateTime] = useState({});
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
          ? "00"
          : Math.round(newDate.getMinutes() / 5) * 5,
    });
    setselectedDateTime({
      hour: selectHour,
      minute: setMinute(newDate),
      date: newDate,
      selectedDate: null,
      dateChanged: false,
    });
  }, [date]);
  const [selectedReturnDateTime, setSelectedReturnDateTime] = useState({});

  // passenger picker
  const [passengers, setPassengers] = useState({
    adult: 0,
    children: 0,
    infant: 0,
    luggage: 0,
    passengerChanged: false,
  });

  const [userPickupLocation, setUserPickupLocation] = useState(null);
  const [userDropLocation, setUserDropLocation] = useState(null);
  const [distanceBetween, setDistanceBetween] = useState(null);

  function decrement(target, isAdult = false) {
    if (isAdult) {
      if (passengers[target] > 0 && isAdult) {
        passengers[target] = passengers[target] - 1;
        setPassengers((prev) => ({ ...prev, passengers }));
      }
    } else if (passengers[target] > 0) {
      passengers[target] = passengers[target] - 1;
      setPassengers((prev) => ({ ...prev, passengers }));
    }
  }
  function increment(target) {
    // eslint-disable-next-line operator-assignment
    passengers[target] = passengers[target] + 1;
    setPassengers((prev) => ({ ...prev, passengers }));
  }

  useEffect(() => {
    const getData = async () => {
      const data = sessionStorage.getItem("storesearchdata");
      if (data) {
        const getSearchData = await JSON.parse(
          sessionStorage.getItem("storesearchdata")
        );
        setBookingType(getSearchData.bookingtype);
        setUserPickupLocation({
          address: getSearchData.pickupaddress,
          isAirport: getSearchData.pickupairport,
          latLng: getSearchData.pickuplatlng,
          locationid: getSearchData.pickuplocationid,
          postal_code: getSearchData.pickuppostalcode,
          regionid: getSearchData.regionId,
          locationtype: getSearchData.pickuplocationtype,
          zoneId: getSearchData.pickupzone,
        });
        setUserDropLocation({
          address: getSearchData.dropaddress,
          isAirport: getSearchData.dropairport,
          latLng: getSearchData.droplatlng,
          locationid: getSearchData.droplocationid,
          postal_code: getSearchData.droppostalcode,
          regionid: getSearchData.regionId,
          locationtype: getSearchData.droplocationtype,
          zoneId: getSearchData.dropzone,
        });

        setPassengers({
          adult: getSearchData.adult,
          children: getSearchData.children,
          infant: getSearchData.infant,
          luggage: getSearchData.luggage,
          passengerChanged: true,
        });
        const selectedHour = getSearchData.pickuptime.split(" ")[0];
        setselectedDateTime({
          hour: selectedHour.split(":")[0],
          minute: selectedHour.split(":")[1],
          date: new Date(getSearchData.pickupdate),
          selectedDate: new Date(getSearchData.pickupdate),
          dateChanged: true,
          timeChanged: true,
        });

        if (getSearchData.returntime) {
          const selectedReturnHour = getSearchData.returntime.split(" ")[0];
          setSelectedReturnDateTime({
            hour: selectedReturnHour.split(":")[0],
            minute: selectedReturnHour.split(":")[1],
            date: new Date(getSearchData.returndate),
            selectedDate: new Date(getSearchData.returndate),
            dateChanged: true,
            timeChanged: true,
          });
        }

        if (getSearchData.rideduration) {
          setRideDuration(getSearchData.rideduration);
        }
      }
    };
    getData();
  }, []);

  async function getDistance() {
    if (userDropLocation !== null && userPickupLocation !== null) {
      const distance = await api.get(
        `/misc-address/get-distance?from_place_point=${userPickupLocation.latLng}&to_place_point=${userDropLocation.latLng}`
      );
      setDistanceBetween(distance.data);
      return distance.data;
    }
    return null;
  }

  /** ****** User Data ****** */
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  async function getUserData() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROOT_API}/userSelectedAddress/1`
    );
    const getData = await response.json();
    setData(getData);
    setLoading(false);
  }

  return (
    <BookingContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        // Date picker
        selectedDateTime,
        setselectedDateTime,
        selectedReturnDateTime,
        setSelectedReturnDateTime,
        minDatetime,
        setMinDatetime,
        minReturnDatetime,
        setMinReturnDatetime,
        // Passengers
        passengers,
        setPassengers,
        decrement,
        increment,
        // autocomplete
        userPickupLocation,
        setUserPickupLocation,
        userDropLocation,
        setUserDropLocation,
        getUserData,
        loading,
        data,
        // Static data
        options,

        // Booking type
        bookingType,
        setBookingType,
        bookingDuration,
        setBookingDuration,
        rideDuration,
        setRideDuration,

        // getDistance
        getDistance,
        distanceBetween,
        setDistanceBetween,

        // minutes
        setMinute,
        setNewDate,
        addHours,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export default BookingContext;
