/* eslint-disable max-len */

import { useEffect, useRef, useState } from 'react';
import { MdLock } from 'react-icons/md';
import { FaInfoCircle } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import PhoneInput from 'react-phone-input-2';
import Button from './ui/Button';
import P from './typography/P';
import BookerDetails from './BookerDetails';
import PassengerPicker from './shared/PassengerPicker';

function PassengerDetails({
  details,
  showFlight,
  setBooker,
  showBooker,
  register,
  formState,
  userDetails,
  setValue,
  setUserDetails,
  checkMobileNumber,
  mobileError = false,
  checkBookerMobileError,
  bookerMobileError,
  checkBookerEmailError,
  checkEmailexists,
  passengerLoader,
  setPassenger,
  passengers,
  decrement,
  increment,
  showPassengerError,
  setShowAuth,
  setPassengers,
  getValues,
  setDetails,
  fleetDetails
}) {
  const { errors } = formState;

  const { data: session } = useSession();
  const passengerRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChange = (event) => {
    setValue('drivernote', event.target.value);
    adjustTextareaHeight();
  };

  useEffect(() => {
    const userExists = !!sessionStorage.getItem('passengerDetails');
    if (userExists) {
      const user = JSON.parse(sessionStorage.getItem('passengerDetails'));
      setShowAuth(true);
      setPassengers((prev) => ({
        ...prev,
        adult: user?.adult,
        children: user?.children,
        infant: user?.infant,
        luggage: user?.luggage,
      }));
      setBooker(user?.showBooker);
      setTimeout(() => {
        // Booker
        setValue('bookerfname', user?.booker_fname);
        setValue('bookerlname', user?.booker_lname);
        setValue('bookercountrycode', user?.booker_country_code);
        setValue('bookermobileno', user?.booker_mobile_no);
        setValue('bookeremail', user?.booker_email);

        // Passenger
        setValue('fname', user?.passenger_fname);
        setValue('lname', user?.passenger_lname);
        setValue('countrycode', user?.passenger_country_code);
        setValue('mobileno', user?.passenger_mobile_no);
        setValue('email', user?.passenger_email);
        setValue('boarddetails', user?.boarddetails);
        setValue('drivernote', user?.drivernote);
        setValue('flightdetails', user?.flightdetails);
      }, 200);
      setTimeout(() => {
        setDetails(getValues());
        adjustTextareaHeight();
      }, 300);
      const loggedInUserExists = !!sessionStorage.getItem('user');
      if (loggedInUserExists) {
        const loggedInuser = JSON.parse(sessionStorage.getItem('user'));
        setUserDetails(loggedInuser);
      }
    } else {
      const loggedInUserExists = !!sessionStorage.getItem('user');
      if (loggedInUserExists) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        setUserDetails(user);
      }
    }
    setIsLoaded(true);
  }, [
    getValues,
    setBooker,
    setDetails,
    setPassengers,
    setShowAuth,
    setUserDetails,
    setValue,
  ]);

  function getPhoneNumber() {
    const userExists = !!sessionStorage.getItem('passengerDetails');
    const user = JSON.parse(sessionStorage.getItem('passengerDetails'));
    if (!userExists) {
      if (!showBooker && userDetails?.usermobileno) {
        const mobile = `${userDetails?.usercountrycode}${userDetails?.usermobileno}`;
        setValue('mobileno', mobile);
        setValue('countrycode', userDetails?.usercountrycode.replace('+', ''));
        return mobile;
      }
    } else if (!showBooker) {
      const mobile = `${user?.booker_country_code}${user?.booker_mobile_no}`;
      // setValue('mobileno', mobile);
      // setValue('countrycode', user?.booker_country_code.replace('+', ''));
      return mobile;
    } else {
      const mobile = `${user?.passenger_country_code}${user?.passenger_mobile_no}`;
      // setValue('mobileno', mobile);
      // setValue('countrycode', user?.passenger_country_code.replace('+', ''));
      return mobile;
    }
    return '+44';
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    const sanitizedValue = value.replace(/[^\w\s]/gi, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = sanitizedValue;
  };

  const inputCharacterOnly = (event) => {
    const { value } = event.target;
    const sanitizedValue = value.replace(/[^A-Za-z\s]/gi, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = sanitizedValue;
  };

  useEffect(() => {
    const userExists = !!sessionStorage.getItem('passengerDetails');
    if (userExists) {
      const user = JSON.parse(sessionStorage.getItem('passengerDetails'));
      if (showBooker) {
        setTimeout(() => {
          setValue('bookerfname', user?.booker_fname);
          setValue('bookerlname', user?.booker_lname);
          setValue('bookercountrycode', user?.booker_country_code);
          setValue('bookermobileno', user?.booker_mobile_no);
          setValue('bookeremail', user?.booker_email);

          // Passenger
          setValue('fname', user?.passenger_fname);
          setValue('lname', user?.passenger_lname);
          setValue('countrycode', user?.passenger_country_code);
          setValue('mobileno', user?.passenger_mobile_no);
          setValue('email', user?.passenger_email);
          setValue('boarddetails', user?.boarddetails);
          setValue('drivernote', user?.drivernote);
          setValue('flightdetails', user?.flightdetails);
        }, 200);
      } else {
        setTimeout(() => {
          setValue('bookerfname', user?.booker_fname);
          setValue('bookerlname', user?.booker_lname);
          setValue('bookercountrycode', user?.booker_country_code);
          setValue('bookermobileno', user?.booker_mobile_no);
          setValue('bookeremail', user?.booker_email);

          setValue('fname', user?.booker_fname);
          setValue('lname', user?.booker_lname);
          setValue('countrycode', user?.booker_country_code);
          setValue('mobileno', user?.booker_mobile_no);
          setValue('email', user?.booker_email);
        }, 200);
      }
    }
  }, [setValue, showBooker]);

  const getDriverNote = () => {
    const userExists = !!sessionStorage.getItem('passengerDetails');
    if (userExists) {
      const user = JSON.parse(sessionStorage.getItem('passengerDetails'));
      setTimeout(() => {
        adjustTextareaHeight();
      }, 300);
      return user?.drivernote;
    }
    setTimeout(() => {
      adjustTextareaHeight();
    }, 300);
    return details?.drivernote;
  };

  return (
    <div
      className="px-4 py-8 text-left bg-[#384957] lg:px-6 border-[#FFFFFF33] border-0.4 border-opacity-20 rounded-xl"
      ref={passengerRef}
    >
      {isLoaded && (
        <div className="w-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {showBooker && (
              <BookerDetails
                register={register}
                formState={formState}
                userDetails={userDetails}
                showBooker={showBooker}
                setBooker={setBooker}
                setValue={setValue}
                checkBookerMobileError={checkBookerMobileError}
                bookerMobileError={bookerMobileError}
                checkBookerEmailError={checkBookerEmailError}
                handleInputChange={handleInputChange}
              />
            )}
            <div
              className={`${
                showBooker ? 'col-span-2' : 'col-span-2 sm:col-span-1'
              } mb-1`}
            >
              <P className="font-bold text-xl">Passenger Details</P>
            </div>
            {!showBooker && (
              <div
                className={` ${
                  showBooker ? 'col-span-2' : 'col-span-2 sm:col-span-1'
                } mb-1 text-right`}
              >
                <label
                  className="flex items-center cursor-pointer sm:justify-end"
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={showBooker}
                    className="rounded-sm checkbox checkbox-primary checkbox-xs"
                    onChange={() => {
                      setBooker(!showBooker);
                    }}
                  />
                  <P className="ml-2 label-text text-[#B2B2B2]">
                    Booking for someone else?
                  </P>
                </label>
              </div>
            )}

            <div className="col-span-2 md:md:col-span-1">
              <input
                {...register('fname', {
                  required: 'First name is required',
                  autoComplete: 'off',
                })}
                autoComplete="new-password"
                type="text"
                placeholder="First name"
                className="w-full input focus:outline-none bg-[#223544D9]  text-[#b2b2b2] border border-[#828282]"
                onChange={inputCharacterOnly}
                defaultValue={
                  !showBooker
                    ? session?.user.name.split(' ')[0] || userDetails?.userfname
                    : ''
                }
              />
              {errors.fname && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.fname.message}
                </P>
              )}
            </div>

            <div className="col-span-2 md:col-span-1">
              <input
                {...register('lname', {
                  required: 'Last name is required',
                  autoComplete: 'off',
                })}
                autoComplete="new-password"
                type="text"
                placeholder="Last name"
                className="w-full input focus:outline-none bg-[#223544D9] text-[#B2B2B2] border border-[#828282]"
                onChange={inputCharacterOnly}
                defaultValue={
                  !showBooker
                    ? session?.user.name.split(' ')[1] || userDetails?.userlname
                    : ''
                }
              />
              {errors.lname && (
                <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.lname.message}
                </P>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
              <PhoneInput
                {...register('mobileno', {
                  required: 'Mobile number is required',
                })}
                enableSearch
                autoFormat={false}
                enableAreaCodes
                inputProps={{
                  name: 'mobileno',
                  required: true,
                  autoFocus: true,
                  autoComplete: 'off',
                }}
                // disabled={!!userDetails?.usermobileno && !showBooker}
                countryCodeEditable={false}
                value={getPhoneNumber()}
                country="gb"
                onChange={(_, country, event) => {
                  setValue('countrycode', country.dialCode);
                  setValue('mobileno', event.target.value);
                  checkMobileNumber(event.target.value, country);
                }}
                onCountryChange={() => {
                  setValue('mobileno', '');
                }}
                inputClass="!bg-[#FFFFFF0A] !text-[#B2B2B2] !border-0.4 !border-[#828282] focus:outline-none"
              />
              {(errors.mobileno || mobileError) && (
                <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.mobileno
                    ? errors.mobileno.message
                    : 'Phone number is not valid'}
                </P>
              )}
              {errors.mobilenoerror && (
                <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.mobilenoerror.message}
                </P>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="relative">
                <div className="absolute inset-y-0 top-0 flex items-center h-12 pl-3 font-extrabold text-gray-400 pointer-events-none left-3 text-opacity-60">
                  <img src="/rolnew/global/icons/mail.svg" alt="mail" />
                </div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    autoComplete: 'off',
                  })}
                  autoComplete="new-password"
                  type="email"
                  placeholder="Email address"
                  className={`w-full pl-12 input bg-[#223544D9]  text-[#B2B2B2] border border-[#828282] focus:outline-none ${
                    userDetails?.useremailid
                    && !showBooker
                    && 'pointer-events-none'
                  }`}
                  readOnly={userDetails?.useremailid && !showBooker}
                  defaultValue={
                    !showBooker
                      ? session?.user.email || userDetails?.useremailid
                      : ''
                  }
                  onBlur={(e) => {
                    checkEmailexists(e.target.value);
                  }}
                />
                {errors.email && (
                  <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                    {errors.email.message}
                  </P>
                )}
                {errors.erroremail && (
                  <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                    {errors.erroremail.message}
                  </P>
                )}
              </div>
            </div>
            <div className="border-0.4 my-2 border-[#828282] col-span-2" />
            <div className="col-span-2" id="passengerpicker">
              <div className="grid grid-cols-2">
                <div className="col-span-1 mb-5">
                  <P className="font-bold text-xl">Additional Details:</P>
                </div>
                <div className="col-span-4">
                  <PassengerPicker
                    setPassenger={setPassenger}
                    increment={increment}
                    decrement={decrement}
                    passengers={passengers}
                    fleetDetails={fleetDetails}
                  />
                  {showPassengerError && (
                    <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                      Please select atleast 1 adult
                    </P>
                  )}
                </div>
              </div>
            </div>

            {showFlight && (
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center ">
                  <P className="!text-xs font-normal label">
                    Flight Details / Tail No
                  </P>
                  {' '}
                  <div
                    className="tooltip tooltip-primary cursor-pointer"
                    data-tip="Flight No. is for Commercial flights and Tail No. is for Private Jets"
                  >
                    <FaInfoCircle />
                  </div>
                </div>
                <input
                  {...register('flightdetails', {
                    pattern: {
                      value: /^[A-Za-z0-9\s]+$/,
                      message: 'Only alphabets and numbers are allowed',
                    },
                  })}
                  type="text"
                  placeholder="Flight number"
                  className="w-full input focus:outline-none bg-[#223544D9]  text-[#B2B2B2] border border-[#828282]"
                  onChange={handleInputChange}
                  defaultValue={details?.flightdetails}
                />
                {errors.flightdetails && (
                  <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                    {errors.flightdetails.message}
                  </P>
                )}
              </div>
            )}
            {showFlight && (
              <div className="col-span-2 md:col-span-1">
                <P className="!text-xs font-normal label">Name Board Details</P>
                <textarea
                  defaultValue={details?.boarddetails}
                  {...register('boarddetails')}
                  type="text"
                  placeholder="Add Board Details (if any)"
                  className="w-full input focus:outline-none bg-[#223544D9]  text-[#B2B2B2] border border-[#828282] pt-2"
                />
              </div>
            )}
            <div className="col-span-2">
              <P className="!text-xs font-normal label">Driver Note</P>
              <textarea
                onChange={handleChange}
                ref={textareaRef}
                defaultValue={getDriverNote()}
                placeholder="Add Driver Note (if any)"
                className="w-full input focus:outline-none bg-[#223544D9]  text-[#B2B2B2] border border-[#828282] overflow-y-hidden pt-2"
              />
            </div>
          </div>
          <div className="flex justify-center py-6">
            <Button
              type="submit"
              isLoading={passengerLoader}
              className="uppercase max-h-10"
              kind="primary"
            >
              <MdLock className="mr-2 text-lg" />
              GO TO PAYMENT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PassengerDetails;
