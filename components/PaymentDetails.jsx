/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaIdCard } from 'react-icons/fa';
import { HiOutlineUser } from 'react-icons/hi';
import { MdLock } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import P from './typography/P';
import Button from './ui/Button';
import Dropdown from './ui/Dropdown';
import api from './utils/api';

const allCards = [
  'visa',
  'mastercard',
  'maestro',
  'amex',
];

function PaymentDetails({
  showBilling,
  setShowBilling,
  callBooking,
  showLoading,
  setShowToken,
  showToken,
  showOption = true,
  showTwoLine = false,
}) {
  const [selectedCard, setSelectedCard] = useState('');

  // const paymentRef = useRef();
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [cardError, setCardError] = useState(null);
  const [cardValidationLoader, setCardValidationLoader] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    async function fetchCardDetails() {
      const token = sessionStorage.getItem('token');
      if (token && token !== 'null') {
        const response = await api.get('/card-details');
        if (response.data) {
          setCardDetails(response.data);
          setSelectedCard(`***********${response.data[0].last4}`);
          setValue('token', response.data[0].card_token);
          setValue('last4', response.data[0].last4);
          setValue('brand', response.data[0].brand);
          // setShowToken(true);
          // setcardState((prev) => ({
          //   ...prev,
          //   cardNumber: response.data[0].card_number,
          //   expiryDate: `${response.data[0]?.exp_month} / ${response.data[0]?.exp_year}`,
          // }));
        }
      }
      setIsLoaded(true);
      // paymentRef.current.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'nearest',
      //   top: 80,
      // });
    }
    fetchCardDetails();
  }, [setShowToken, setValue]);

  const onSubmit = async (data) => {
    if (!showToken) {
      callBooking();
      return;
    }
    // callBooking(data);
    const number = data.cardnumber.split(' ').join('');
    const month = data.expiry.split(' /')[0];
    const year = data.expiry.split(' /')[1];
    setCardValidationLoader(true);
    const response = await api.post('/card-details/verify', {
      number,
      exp_month: month.trim(),
      exp_year: year.trim(),
    });
    setCardValidationLoader(false);

    // console.log(response);
    if (response.data.status === 1) {
      setCardError(false);
      callBooking(data);
    } else {
      toast.error(response.message, {
        autoClose: 3000,
        theme: 'colored',
      });
      setCardError(true);
      // setShowLoading(false);
    }
  };

  function getSelectedCard(details) {
    console.log(details);
    setValue('token', details.card_token);
    setValue('last4', details.last4);
    setValue('brand', details.brand);
    setSelectedCard(`***********${details.last4}`);
  }

  const inputCharacterOnly = (event) => {
    const { value } = event.target;
    const sanitizedValue = value.replace(/[^A-Za-z\s]/gi, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = sanitizedValue;
  };
  function handleCardNumberChange(event) {
    const { value } = event.target;
    if (value.length === 23) {
      // expiryInputRef.current.focus();
      setFocus('expiry');
    }
    let input = event.target.value;
    input = input.replace(/\s+/g, '').replace(/[^0-9]/gi, ''); // remove spaces and non-numeric characters
    let formattedInput = '';
    for (let i = 0; i < input.length; i += 1) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += ' ';
      }
      formattedInput += input.charAt(i);
    }
    // eslint-disable-next-line no-param-reassign
    event.target.value = formattedInput;
  }

  function formatExpiryDate(event) {
    const { value } = event.target;
    if (value.length === 7) {
      setFocus('cvv');
    } else if (value.length === 0) {
      setFocus('cardnumber');
    }
    let formattedValue = value;

    // Remove any non-digit characters from the input value
    formattedValue = formattedValue.replace(/\D/g, '');

    // Add a space after the second digit
    if (formattedValue.length > 2) {
      formattedValue = `${formattedValue.slice(0, 2)} / ${formattedValue.slice(
        2,
      )}`;
    }
    // Extract the month and year from the formatted value
    const month = formattedValue.slice(0, 2);
    const year = formattedValue.slice(5);

    // Check if the month is valid (i.e., not greater than 12)
    if (month > 12) {
      formattedValue = `12 / ${year}`;
    }
    if (year < 23) {
      setError('yearerror', {
        type: 'custom',
        message: 'Year must not old years',
      });
    } else {
      clearErrors('yearerror');
    }

    if (year > 50) {
      setError('yearerror', {
        type: 'custom',
        message: 'Year must be less then 2050',
      });
    } else {
      clearErrors('yearerror');
    }

    // Update the state with the formatted value
    // eslint-disable-next-line no-param-reassign
    event.target.value = formattedValue;
  }

  const handleCvvInput = (event) => {
    const { value } = event.target;
    if (value.length === 0) {
      setFocus('expiry');
    }
    const formattedValue = value.slice(0, 4);
    event.target.value = formattedValue;
  };

  return (
    // <div className="px-4 py-6 text-left bg-white lg:px-8" ref={paymentRef}>
    <div className="px-4 py-6 text-left bg-white lg:px-8">
      {showOption && (
        <P className="font-bold text-gray-900 ">Payment Details</P>
      )}
      {isLoaded && (
        <form
          className="w-full py-4"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="new-password"
        >
          <div className="sm:flex justify-between mb-5">
            {showOption && (
              <div className="form-control justify-end">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                    checked={showToken}
                    onChange={() => {
                      setShowToken(true);
                    }}
                  />
                  <span className="label-text ml-2 text-black font-semibold">
                    Pay By New Credit / Debit Card
                  </span>
                </label>
                <div className="md:mx-auto md:w-8/12 sm:w-5/12 w-6/12 relative">
                  {/* <Pic
                    src="/images/icons/payments.png"
                    className="!object-contain"
                    alt="payments"
                  /> */}

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
            )}

            {cardDetails && showOption && (
              <div className="form-control flex-row mt-2 sm:mt-0">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                    checked={!showToken}
                    onChange={() => {
                      setShowToken(false);
                    }}
                  />
                  <span className="label-text ml-2 text-black font-semibold">
                    Use saved card
                  </span>
                </label>
              </div>
            )}
          </div>

          {!showToken && (
            <>
              <P className="font-semibold text-gray-900 mb-1 sm:text-right">
                Pick form saved card
              </P>
              <div className="flex sm:justify-end items-start mb-5">
                <div>
                  <Dropdown
                    label={selectedCard}
                    btnClass="border h-[2.8rem]"
                    dropDownClass="max-h-[200px] overflow-y-auto"
                  >
                    {cardDetails
                      && cardDetails.map((details) => (
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                        <li
                          key={details.card_token}
                          className="border-b"
                          onClick={() => {
                            getSelectedCard(details);
                          }}
                        >
                          <div className="hover:bg-gray-200 cursor-pointer flex justify-between flex-row">
                            <Image
                              src={`/images/trip-details/cards/${details?.brand}.svg`}
                              width={40}
                              height={30}
                              alt={details.brand}
                            />
                            <span>
                              *********
                              {details.last4}
                            </span>
                          </div>
                        </li>
                      ))}
                  </Dropdown>
                  {errors.token && (
                    <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                      {errors.token.message}
                    </P>
                  )}
                </div>
                {/* <div className="ml-2">
                  <input
                    {...register('cvv', {
                      required: 'CVV is required',
                      autoComplete: 'off',
                      minLength: {
                        value: 3,
                        message: 'Minimum cvv is 3 numbers',
                      },
                    })}
                    maxLength="4"
                    onInput={handleCvvInput}
                    type="number"
                    className="w-full input border-opacity-40 focus:border-primary focus:outline-none h-[2.8rem]"
                  />
                  {errors.cvv && (
                  <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                    {errors.cvv.message}
                  </P>
                  )}
                </div> */}
              </div>
            </>
          )}
          {showToken && (
            <div
              className={`grid grid-cols-1 gap-4 ${
                showTwoLine && 'md:grid-cols-2'
              } `}
            >
              <div className="col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center h-12 sm:pl-3 pl-1 font-extrabold text-gray-400 pointer-events-none sm:left-3 left-1 text-opacity-60">
                    <HiOutlineUser className="text-2xl " />
                  </div>
                  <input
                    {...register('cardholdername', {
                      required: 'Card holder name is required',
                    })}
                    type="text"
                    autoComplete="new-password"
                    onChange={inputCharacterOnly}
                    placeholder="Card holder name"
                    className="w-full input border-opacity-40 focus:border-primary focus:outline-none sm:pl-14 pl-8 text-sm sm:text-[1rem]"
                  />
                </div>
                {errors && errors.cardholdername && (
                  <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                    {errors.cardholdername.message}
                  </P>
                )}
              </div>

              <div className="col-span-2">
                <div
                  className={`grid sm:grid-cols-6 grid-cols-4 gap-4 rounded-md py-0 px-0 !h-auto sm:border border-[#787878] border-opacity-40 outline-none ${
                    cardError === true && 'border-red-500'
                  } ${showTwoLine && 'sm:!grid-cols-4 !rounded-md'}`}
                >
                  <div className="col-span-4">
                    <div
                      className={`relative sm:rounded-0 rounded-md ${
                        showTwoLine && 'sm:!rounded-md'
                      }`}
                    >
                      <div className="absolute inset-y-0 flex items-center h-12 sm:pl-3 pl-1 font-extrabold text-gray-400 pointer-events-none sm:left-3 left-1 text-opacity-60">
                        <FaIdCard
                          className={`sm:text-2xl text-xl ${
                            cardError === true && 'text-red-500'
                          } `}
                        />
                      </div>
                      <input
                        {...register('cardnumber', {
                          required: 'Card number is required',
                          minLength: {
                            value: 10,
                            message: 'Card is not valid',
                          },
                        })}
                        type="tel"
                        maxLength="23"
                        placeholder="Card number"
                        onChange={handleCardNumberChange}
                        className="w-full mo:border-opacity-40 input focus:outline-none sm:pl-14 pl-8 text-sm sm:text-[1rem]"
                        autoComplete="cc-number"
                      />
                    </div>
                    {errors.cardnumber && (
                      <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10 sm:hidden block">
                        {errors.cardnumber.message}
                      </P>
                    )}
                    {errors.cardnumber && showTwoLine && (
                      <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10 sm:block hidden">
                        {errors.cardnumber.message}
                      </P>
                    )}
                  </div>
                  <div
                    className={`col-span-2 rounded-md ${
                      showTwoLine
                        ? 'sm:col-span-2 pl-4'
                        : 'sm:col-span-1 sm:rounded-0'
                    }`}
                  >
                    <input
                      {...register('expiry', {
                        required: 'Expiry date is required',
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/,
                          message: 'Expiry date must be in the format MM / YY',
                        },
                      })}
                      type="text"
                      placeholder="MM / YY"
                      maxLength="7"
                      autoComplete="cc-exp"
                      onInput={formatExpiryDate}
                      className="w-full mo:border-opacity-40 input focus:outline-none pr-0 pl-2 sm:pl-2 text-sm sm:text-[1rem]"
                    />
                  </div>
                  <div
                    className={`col-span-2 rounded-md ${
                      showTwoLine
                        ? 'sm:col-span-2'
                        : 'sm:text-[1rem] sm:col-span-1 sm:rounded-0'
                    }`}
                  >
                    <input
                      {...register('cvv', {
                        required: 'Card cvv is required',
                        minLength: {
                          value: 3,
                          message: 'Minimum 3 numbers',
                        },
                      })}
                      maxLength="4"
                      onInput={handleCvvInput}
                      type="number"
                      placeholder="CVV"
                      className={`w-full text-start mo:border-opacity-40 input focus:outline-none pr-0 text-sm sm:text-[1rem] ${
                        showTwoLine ? 'sm:pl-10' : 'sm:pl-1'
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 text-xs font-semibold text-red-500">
                <div className="grid grid-cols-4">
                  <div
                    className={`${
                      showTwoLine ? 'hidden' : 'hidden sm:block col-span-2'
                    }`}
                  >
                    {errors.cardnumber && (
                      <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10 -mt-3">
                        {errors.cardnumber.message}
                      </P>
                    )}
                  </div>
                  <div
                    className={`${
                      showTwoLine
                        ? 'col-span-2'
                        : 'sm:text-right col-span-2 sm:col-span-1'
                    } -mt-2 font-[700] ml-1`}
                  >
                    {errors.expiry && (
                      <span className="error">{errors.expiry.message}</span>
                    )}
                    {errors.yearerror && (
                      <span className="error">{errors.yearerror.message}</span>
                    )}
                  </div>
                  <div
                    className={`${
                      showTwoLine
                        ? 'col-span-2'
                        : 'sm:text-right col-span-2 sm:col-span-1'
                    }  -mt-3 ml-2`}
                  >
                    {errors.cvv && (
                      <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                        {errors.cvv.message}
                      </P>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <input
                  {...register('costcenter')}
                  type="text"
                  placeholder="Cost Center/ Invoice Ref (if any)"
                  className="w-full input border-opacity-40 focus:border-primary focus:outline-none text-sm sm:text-[1rem]"
                />
                {errors && errors.costcenter && (
                  <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                    {errors.costcenter.message}
                  </P>
                )}
              </div>
              <div className="col-span-2">
                <label
                  className="flex items-center mt-4 md:mt-0 md:justify-end cursor-pointer"
                  htmlFor="address"
                >
                  <input
                    type="checkbox"
                    id="address"
                    checked={showBilling}
                    className="rounded-sm checkbox checkbox-primary checkbox-xs"
                    onChange={() => {
                      setShowBilling(!showBilling);
                    }}
                  />
                  <P className="ml-2 label-text">Add Billing Address</P>
                </label>
              </div>
              {showBilling && (
                <>
                  <div className="col-span-2">
                    <input
                      {...register('addressline1', {
                        required: 'This field is required',
                      })}
                      type="text"
                      placeholder="Address Line 1"
                      className="w-full input border-opacity-40 focus:border-primary focus:outline-none"
                    />
                    {errors && errors.addressline1 && (
                      <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                        {errors.addressline1.message}
                      </P>
                    )}
                  </div>

                  <div className="col-span-2">
                    <input
                      {...register('addressline2')}
                      type="text"
                      placeholder="Address Line 2"
                      className="w-full input border-opacity-40 focus:border-primary focus:outline-none"
                    />
                    {errors && errors.addressline2 && (
                      <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                        {errors.addressline2.message}
                      </P>
                    )}
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div>
                        <input
                          {...register('town', {
                            required: 'Town is required',
                          })}
                          type="text"
                          placeholder="Town"
                          className="w-full input border-opacity-40 focus:border-primary focus:outline-none"
                        />
                        {errors && errors.town && (
                          <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                            {errors.town.message}
                          </P>
                        )}
                      </div>
                      <div>
                        <input
                          {...register('postcode', {
                            required: 'Post code is required',
                          })}
                          type="text"
                          placeholder="Post Code"
                          className="w-full input border-opacity-40 focus:border-primary focus:outline-none"
                        />
                        {errors && errors.postcode && (
                          <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                            {errors.postcode.message}
                          </P>
                        )}
                      </div>
                      <div>
                        <input
                          {...register('country', {
                            required: 'Country is required',
                          })}
                          type="text"
                          placeholder="Country"
                          className="w-full input border-opacity-40 focus:border-primary focus:outline-none"
                        />
                        {errors && errors.country && (
                          <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                            {errors.country.message}
                          </P>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="flex justify-center py-6">
            <Button
              type="submit"
              isLoading={showLoading || cardValidationLoader}
              className="max-h-10 uppercase"
              kind="primary"
            >
              {!showLoading && !cardValidationLoader && (
                <>
                  <MdLock className="mr-2 text-lg" />
                  PAY NOW
                </>
              )}
              {(showLoading || cardValidationLoader) && <>Please Wait</>}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default PaymentDetails;
