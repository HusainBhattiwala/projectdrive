/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */

'use client';

import { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { isValidNumber } from 'libphonenumber-js';
import { CgClose } from 'react-icons/cg';
import CountriesAutocomplete from 'components/addressautocomplete/CountriesAutocomplete';
import Dropdown from 'components/shared/Dropdown';
import P from 'components/typography/P';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import ModalV2 from 'components/ui/ModalV2';

import 'react-phone-input-2/lib/plain.css';

import { toast } from 'react-toastify';
import BookingSummary from './BookingSummary';
import LabeledInput from './LabeledInput';
import RiderDateTime from './RiderDateTime';
import Stepper from './Stepper';
import VehicleModalBody from './VehicleModalBody';

const rideCategories = ['Transfers', 'Hourly'];

const optionRenderer = (item) => (
  <P className="font-medium whitespace-nowrap !text-gray-700">{item}</P>
);
export default function FormFields({
  selectedVehicle,
  setSelectedVehicle,
  passengerName,
  setPassengerName,
  passengerLastName,
  setPassengerLastName,
  passengerMobile,
  setPassengerMobile,
  passengerEmail,
  setPassengerEmail,
  bookerName,
  bookerLastName,
  setBookerName,
  setBookerLastName,
  bookerMobile,
  setBookerMobile,
  bookerEmail,
  setBookerEmail,
  rideCategory,
  setRideCategory,
  bookingSummary,
  adultNo,
  setAdultNo,
  infantNo,
  setInfantNo,
  childNo,
  setChildNo,
  bagNo,
  setBagNo,
  passengerCountry,
  setPassengerCountry,
  // bookerCountry,
  setBookerCountry,
  userPickLocation,
  setUserPickLocation,
  userDropLocation,
  setUserDropLocation,
  flightNo,
  setFlightNo,
  riderDateTime,
  setRiderDateTime,
  driverNotes,
  setDriverNotes,
  nameOnBoard,
  setNameOnBoard,
  hoursOfTrip,
  setHoursOfTrip,
  availableVehicles,
  addedReturn,
  setAddedReturn,
  riderReturnDateTime,
  setRiderReturnDateTime,
  userCurrency,
  setFirstUpdate,
  duration,
  setisAllowedCancel,
  passengerMobileError,
  setPassengerMobileError,
  showBooker,
  setShowBooker,
  isFinished,
  vehicleRef,
  isSubmissionAllowed,
  showFlight,
  minDate,
  timeZone,
}) {
  const [minDatetime, setMinDatetime] = useState(null);
  const [minReturn, setMinReturn] = useState(null);
  const [isAllowedEdit, setIsAllowedEdit] = useState(true);
  const [highLightDropAddressRef, setHighLightDropAddressRef] = useState(false);
  const dropAddressRef = useRef(null);

  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleChange = (event) => {
    setDriverNotes(event.target.value);
    adjustTextareaHeight();
  };

  useEffect(() => {
    const newDate = minDate;
    const daytime = newDate.getHours() >= 12 ? 'pm' : 'am';
    const selectHour = newDate.getHours();

    setMinDatetime({
      minDate: newDate,
      minHour: selectHour < 10 ? `0${selectHour}` : selectHour,
      minMinute:
    Math.round(newDate.getMinutes() / 5) * 5 === 60
      ? '00'
      : Math.round(newDate.getMinutes() / 5) * 5,
      minDaytime: daytime,
    });
    const { selectedDate, hour, minute } = riderDateTime;
    const formatedDate = new Date(selectedDate);
    formatedDate.setHours(hour);
    formatedDate.setMinutes(minute);
    let regionCurrentTime = new Date().toLocaleString('en-US', { timeZone: timeZone || 'Europe/London' });
    regionCurrentTime = new Date(regionCurrentTime);
    const durationGap = Math.abs(formatedDate.getTime() - regionCurrentTime.getTime()) / 3600000;
    if (durationGap > 2 && (isFinished === 'BID' || isFinished === 'ACCEPT_BID')) {
      setIsAllowedEdit(true);
      setisAllowedCancel(true);
    } else {
      setIsAllowedEdit(false);
      setisAllowedCancel(false);
    }

    const time = `${riderDateTime.hour}:${riderDateTime.minute}`;

    let selectedDayTime = `${
      riderDateTime.selectedDate.getMonth() + 1
    }/${riderDateTime.selectedDate.getDate()}/${riderDateTime.selectedDate.getFullYear()} ${time}`;

    const compareDate = selectedDayTime;

    selectedDayTime = new Date(selectedDayTime);
    // selectedDayTime.setMinutes(selectedDayTime.getMinutes() + (duration / 60));
    selectedDayTime = new Date(selectedDayTime.getTime() + duration * 60000);
    const newReturnDate = selectedDayTime;
    const minReturnDate = {
      minDate: newReturnDate,
      minHour: newReturnDate.getHours(),
      minMinute:
    Math.round(newReturnDate.getMinutes() / 5) * 5 === 60
      ? '00'
      : Math.round(newReturnDate.getMinutes() / 5) * 5,
      // minDaytime: returnDaytime,
    };
    setMinReturn({ ...minReturnDate });
    if (!riderReturnDateTime || new Date(compareDate) > riderReturnDateTime?.selectedDate) {
      const selectedReturn = {
        hour: minReturnDate.minHour,
        minute: minReturnDate.minMinute,
        // daytime: minReturn.minDaytime,
        date: newReturnDate,
        selectedDate: newReturnDate,
        dateChanged: false,
      };
      setRiderReturnDateTime({ ...selectedReturn });
    }
    adjustTextareaHeight();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, riderDateTime, addedReturn, minDate]);

  const [vehicleModal, setVehicleModal] = useState();
  const [showPickupError, setShowPickupError] = useState(false);
  const [showDropError, setShowDropError] = useState(false);
  const [passengerEditable, setPassengerEditable] = useState(false);

  const vehicleModalBody = ({ selectedVehicle: _selectedVehicle }) => (
    <VehicleModalBody
      selectedVehicle={_selectedVehicle}
      setSelectedVehicle={setSelectedVehicle}
      availableVehicles={availableVehicles}
      userCurrency={userCurrency}
      setFirstUpdate={setFirstUpdate}
    />
  );
  function getMobileNumber(phone, country) {
    const newPhone = phone.replace('+', '');
    const formattedCountry = country.replace('+', '');
    const formattedNumber = newPhone.replace(formattedCountry, '');
    return formattedNumber;
  }

  async function checkMobileNumber(value, countryData) {
    if (value) {
      const newNumber = getMobileNumber(value, countryData.dialCode);
      if (isValidNumber(newNumber, countryData.countryCode.toUpperCase())) {
        setPassengerMobileError(false);
      } else {
        setPassengerMobileError(true);
      }
    }
  }

  function onRideTypeChange(item) {
    if (item === 'Transfers' && !userDropLocation) {
      setHighLightDropAddressRef(true);
      dropAddressRef?.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }

  useEffect(() => {
    if (userPickLocation?.regionid && userDropLocation?.regionid) {
      if (userPickLocation?.regionid !== userDropLocation.regionid) {
        toast.error('Pickup and drop location not in the same zone.', {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
        setUserDropLocation('');
      }
    }
  }, [setUserDropLocation, userDropLocation, userPickLocation]);

  return (
    <>
      <ModalV2
        {...vehicleModal}
        setModal={setVehicleModal}
        selectedVehicle={selectedVehicle}
      />
      <div className="p-5 mb-4 bg-white rounded-lg py-7">
        <BookingSummary bookingSummary={bookingSummary} />
      </div>
      <div className="relative mb-4 bg-white rounded-lg">
        {
          isAllowedEdit && (
            <div className="p-4">
              <button
                className={`btn btn-circle btn-ghost absolute right-2 top-1 ${passengerEditable && 'bg-slate-200'}`}
                type="button"
                onClick={() => setPassengerEditable((prev) => !prev)}
              >
                <img
                  src="/images/trip-details/edit.svg"
                  alt="edit"
                  className="w-4 h-4"
                />
              </button>
              <Button
                className={`btn-primary !text-primary btn-ghost capitalize font-bold btn-sm underline underline-offset-4 ${!isAllowedEdit && ' pointer-events-none'}`}
                onClick={() => { setShowBooker(!showBooker); }}
              >
                {showBooker ? '- Remove Booker' : '+ Add Booker'}
              </Button>

            </div>
          )
        }

        {
          showBooker
          && (
            <>
              <div className="border py-2 px-4 border-r-0 border-l-0 font-bold text-black">
                Booker Details
              </div>
              <div className="p-4">
                <LabeledInput
                  label="First Name"
                  value={bookerName}
                  className="!mt-5"
                  onChange={setBookerName}
                  disabled
                  noIcon
                  required
                />
                <LabeledInput
                  label="Last Name"
                  value={bookerLastName}
                  onChange={setBookerLastName}
                  disabled
                  noIcon
                  required
                />
                <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
                  <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
                    Mobile
                  </P>
                  <div className="w-full">
                    <PhoneInput
                      enableSearch
                      autoFormat={false}
                      enableAreaCodes
                      disabled
                      countryCodeEditable={false}
                      onChange={(_, country, event) => {
                        setBookerCountry(country);
                        setBookerMobile(event.target.value);
                      }}
                      value={bookerMobile}
                      country="gb"
                      className="v2-phone-input"
                    />
                  </div>
                </div>
                <LabeledInput
                  label="Email"
                  className="mo:!mb-0"
                  value={bookerEmail}
                  onChange={setBookerEmail}
                  noIcon
                  disabled
                  required
                />

              </div>

            </>
          )
        }
        <div className="border py-2 px-4 border-r-0 border-l-0 font-bold text-black">
          Passenger Details
        </div>
        <div className="p-4">
          <LabeledInput
            label="First Name"
            value={!showBooker ? bookerName : passengerName}
            onChange={setPassengerName}
            className="!mt-5"
            disabled={!passengerEditable || !showBooker}
            required
          />
          <LabeledInput
            label="Last Name"
            value={!showBooker ? bookerLastName : passengerLastName}
            onChange={setPassengerLastName}
            disabled={!passengerEditable || !showBooker}
            required
          />
          <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
            <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
              Mobile
            </P>
            <div className="w-full">
              <PhoneInput
                enableSearch
                autoFormat={false}
                enableAreaCodes
                disabled={!passengerEditable || !showBooker}
                countryCodeEditable={false}
                value={!showBooker ? bookerMobile : passengerMobile}
              // eslint-disable-next-line max-len
                country={passengerCountry}
                onChange={(_, country, event) => {
                  setPassengerCountry(country.dialCode);
                  setPassengerMobile(event.target.value);
                  checkMobileNumber(event.target.value, country);
                // setPassengerMobileError(false);
                }}
                onCountryChange={(e) => { console.log(e); }}
                className="v2-phone-input"
              />
              {
              passengerMobileError && (
                <P className="text-red-500 px-1 py-1 !text-xs font-bold">Mobile number is not valid</P>
              )
            }

              {/* <PhoneInput
              className="v2-phone-input"
              enableSearch
              // country={passengerCountry?.countryCode}
              disabled={!passengerEditable}
              countryCodeEditable={false}
              value={passengerMobile}
              autoFormat={false}
              onChange={(_, country, event) => {
                setPassengerCountry(country);
                setPassengerMobile(event.target.value);
              }}
            /> */}
            </div>
          </div>
          <LabeledInput
            label="Email"
            className="mo:!mb-0"
            value={!showBooker ? bookerEmail : passengerEmail}
            onChange={setPassengerEmail}
            disabled={!passengerEditable || !showBooker}
            required
          />
        </div>
      </div>
      <div className="p-4 mb-4 bg-white rounded-lg">
        <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
          <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
            Ride Category
          </P>
          <div className="flex-none max-w-max">
            <Dropdown
              optionRenderer={optionRenderer}
              options={rideCategories}
              onChange={(item) => { onRideTypeChange(item); setRideCategory(item.toLowerCase()); setFirstUpdate(() => false); }}
              disabled={!isAllowedEdit}
            >
              <span className="font-medium capitalize !text-gray-700">{rideCategory}</span>
            </Dropdown>
          </div>
        </div>
        <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
          <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
            Ride Date & Time
          </P>
          <div className="relative flex-none max-w-max">
            <RiderDateTime
              riderDateTime={riderDateTime}
              onChange={setRiderDateTime}
              minDatetime={minDatetime}
              disabled={!isAllowedEdit}
            />
          </div>
        </div>

        <div className={`flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row ${!isAllowedEdit && 'pointer-events-none'} `}>
          <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
            Pick-Up Point
          </P>
          <div className="relative w-full">
            <CountriesAutocomplete
              autoCompleteComponent={Input}
              autoCompleteComponentClassName="!rounded-lg !text-[14px] !pl-3 !pr-8"
              placeholder="Add your pick up address, airport, hotel, ..."
              setUserPlace={(valFn) => {
                setUserPickLocation(valFn);
                setFirstUpdate(() => false);
              }}
              defaultValue={userPickLocation?.address || ''}
              readOnly={false}
              locationError={(_locationError) => console.log('locationError', _locationError)}
              errorLabel={(val) => console.log('val', val)}
              name="pickuplocation"
              errors={showPickupError}
              setError={setShowPickupError}
              isEdit
            />
            {
              userPickLocation?.address && (
                <P className="absolute text-black right-2 top-2/4 -translate-y-2/4 cursor-pointer">
                  <CgClose onClick={() => {
                    setUserPickLocation((prev) => ({
                      ...prev,
                      address: '',
                    }));
                  }}
                  />
                </P>
              )
            }

          </div>
        </div>
        <div ref={dropAddressRef}>
          <div className={`flex flex-col gap-2 mo:mb-1 sm:my-3 sm:items-center sm:gap-5 sm:flex-row ${!isAllowedEdit && 'pointer-events-none'}`}>
            <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
              Drop-off Point
            </P>
            <div className=" relative w-full">
              <CountriesAutocomplete
                autoCompleteComponent={Input}
                autoCompleteComponentClassName={`!rounded-lg !text-[14px] !pl-3 !pr-8 ${highLightDropAddressRef && 'border border-primary'}`}
                placeholder="Add your drop address, airport, hotel, ..."
                setUserPlace={(valFn) => {
                  setUserDropLocation(valFn);
                  setFirstUpdate(() => false);
                }}
                defaultValue={userDropLocation?.address || ''}
                readOnly={false}
                locationError={(_locationError) => console.log('locationError', _locationError)}
                errorLabel={(val) => console.log('val', val)}
                name="droplocation"
                errors={showDropError}
                setError={setShowDropError}
                isEdit
              />
              {
              userDropLocation?.address && (
                <P className="absolute text-black right-2 top-2/4 -translate-y-2/4 cursor-pointer">
                  <CgClose onClick={() => {
                    setUserDropLocation((prev) => ({
                      ...prev,
                      address: '',
                      latLng: '',
                      postal_code: '',
                      locationid: '',
                      locationtype: '',
                    }));
                  }}
                  />
                </P>
              )
            }
            </div>
          </div>
        </div>

        {rideCategory?.toLowerCase() === 'hourly' && (
          <div className={`flex flex-col gap-2 mt-3 mb-4 sm:items-center sm:gap-5 sm:flex-row ${!isAllowedEdit && 'pointer-events-none'}`}>
            <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
              Duration
            </P>
            <Stepper
              className="w-1/2"
              label="Hours"
              count={hoursOfTrip || 4}
              onChange={(valFn) => {
                setHoursOfTrip(valFn);
                setFirstUpdate(() => false);
              }}
              disabled={!isAllowedEdit}
              min={4}
            />
          </div>
        )}

        {
          showFlight
        && (
        <LabeledInput
          label="Flight No."
          onChange={setFlightNo}
          value={flightNo}
          disabled={!isAllowedEdit}
        />
        )
        }
        {rideCategory?.toLowerCase() === 'transfers' && addedReturn && (
          <div className={`flex flex-col gap-2 mo:mb-1 mo:mt-4 sm:my-3 sm:items-center sm:gap-5 sm:flex-row ${!isAllowedEdit && 'pointer-events-none'}`}>
            <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
              Return Date & Time
            </P>
            <div className="relative flex-none max-w-max">
              <RiderDateTime
                riderDateTime={riderReturnDateTime}
                onChange={setRiderReturnDateTime}
                minDatetime={minReturn}
              />
            </div>
          </div>
        )}

        {rideCategory?.toLowerCase() === 'transfers' && isAllowedEdit && (
          <div className={`flex flex-col gap-2 mo:mb-6 sm:my-3 sm:mb-6 sm:items-center sm:gap-5 sm:flex-row ${!isAllowedEdit && 'pointer-events-none'}`}>
            <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800" />
            <Button
              className={`btn-primary !text-primary btn-ghost capitalize font-bold btn-sm underline underline-offset-4 ${!isAllowedEdit && ' pointer-events-none'}`}
              onClick={() => { setAddedReturn((prev) => !prev); setFirstUpdate(false); }}
              disabled={!isAllowedEdit}
            >
              {!addedReturn ? '+ Add Return' : '- Remove Return'}
            </Button>
          </div>
        )}

        <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:gap-5 sm:flex-row ">
          <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800 sm:mt-1">
            Additional Information
          </P>
          <div className={`${!isAllowedEdit && ' pointer-events-none'}`}>
            <div className="flex flex-col gap-1 mb-2 sm:flex-row sm:gap-6">
              <Stepper
                className="w-1/2"
                label="Adult"
                count={adultNo}
                onChange={(valFn) => {
                  setAdultNo(valFn);
                  setFirstUpdate(() => false);
                }}
                min={1}
                disabled={!isAllowedEdit}
              />
              <Stepper
                className="w-1/2"
                label="Infant"
                count={infantNo}
                onChange={setInfantNo}
                disabled={!isAllowedEdit}
              />
            </div>
            <div className="flex flex-col gap-1 mb-2 sm:flex-row sm:gap-6">
              <Stepper
                className="w-1/2"
                label="Child"
                count={childNo}
                onChange={setChildNo}
                disabled={!isAllowedEdit}
              />
              <Stepper
                className="w-1/2"
                label="Bag"
                count={bagNo}
                onChange={(valFn) => {
                  setBagNo(valFn);
                  setFirstUpdate(() => false);
                }}
                disabled={!isAllowedEdit}
              />
            </div>
          </div>
        </div>

        <div className="tooltip tooltip-primary" data-tip="Change vehicle" ref={vehicleRef}>
          <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
            <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800 text-left">
              Vehicle Class
            </P>
            <div className="relative w-full">
              <Input
                value={selectedVehicle?.vehicle_cat_name}
                className={`pr-8 cursor-pointer ${!isSubmissionAllowed && 'border border-primary'} `}
                onClick={() => {
                  setVehicleModal(() => ({
                    enabled: true,
                    header: 'Fleet Availability',
                    body: vehicleModalBody,
                    footer: (
                      <Button
                        className="btn-primary"
                        onClick={() => setVehicleModal((prev) => ({
                          ...prev,
                          enabled: false,
                        }))}
                      >
                        Confirm
                      </Button>
                    ),
                    selectedVehicle,
                  }));
                }}
                disabled={!isAllowedEdit}
              />
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="absolute flex-none w-5 h-5 -translate-y-1/2 text-primary top-1/2 right-2"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg">
        <div
          className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row"
        >
          <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
            Driver note
          </P>
          {/* <span
            className="textarea w-full shadow-inner focus:outline-none focus:border-primary px-3 bg-[#fafdfd] pr-8"
            role="textbox"
            contentEditable
            onInput={handleSpanInput}
            onKeyDown={handleKeyDown}
            ref={spanRef}
          /> */}
          <textarea
            onChange={handleChange}
            defaultValue={driverNotes}
            ref={textareaRef}
            placeholder="Add Driver Note (if any)"
            className="w-full input input-bordered focus:border-primary focus:outline-none overflow-y-hidden"
          />
        </div>

        {/* <LabeledInput
          label="Driver Notes"
          value={driverNotes}
          onChange={setDriverNotes}
          disabled={!isAllowedEdit}
        /> */}
        <LabeledInput
          label="Name Board Details"
          value={nameOnBoard}
          onChange={setNameOnBoard}
          className="mo:!mb-0"
          disabled={!isAllowedEdit}
        />
      </div>
    </>
  );
}
