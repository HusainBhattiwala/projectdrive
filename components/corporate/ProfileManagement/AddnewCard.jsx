/* eslint-disable no-param-reassign */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaIdCard } from 'react-icons/fa';
import { HiOutlineUser } from 'react-icons/hi';
// import { useCreditCardValidator } from 'react-creditcard-validator';
import { ToastContainer, toast } from 'react-toastify';
import P from 'components/typography/P';
import api from 'components/utils/api';
import Button from 'components/ui/Button';
import 'react-toastify/dist/ReactToastify.css';

const inputCharacterOnly = (event) => {
  const { value } = event.target;
  const sanitizedValue = value.replace(/[^A-Za-z\s]/gi, '');
  // eslint-disable-next-line no-param-reassign
  event.target.value = sanitizedValue;
};

export default function AddnewCard({ email, handleClose, showToast = true }) {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    reset,
  } = useForm();
  // const [cardError, setCardError] = useState(null);
  const [cardValidationLoader, setCardValidationLoader] = useState(false);

  const onSubmit = async (data) => {
    const number = data.cardnumber.split(' ').join('');
    const month = data.expiry.split(' /')[0];
    const year = data.expiry.split(' /')[1];
    const { cvv } = data;
    setCardValidationLoader(true);
    const response = await api.post('/card-details/create', {
      cardHolderNmae: data.cardholdername,
      userEmailId: email,
      cardNumber: number,
      cardExpiryMonth: (month.trim()),
      cardExpiryYear: (year.trim()),
      cvc: cvv,
    });
    reset();
    setCardValidationLoader(false);
    if (response.data.status === 1) {
      if (!showToast) {
        handleClose();
      }
      toast.success(
        response.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    } else {
      toast.error(
        response.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    }
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
      formattedValue = `${formattedValue.slice(0, 2)} / ${formattedValue.slice(2)}`;
    }
    // Extract the month and year from the formatted value
    const month = formattedValue.slice(0, 2);
    const year = formattedValue.slice(5);

    // Check if the month is valid (i.e., not greater than 12)
    if (month > 12) {
      formattedValue = `12 / ${year}`;
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
    <div className="px-6">
      {
        showToast
      && (
      <ToastContainer
        onClose={handleClose}
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
      )
    }
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <div className="col-span-2">
            <P className=" !font-semibold text-black py-2">Name on card *</P>
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center h-12 sm:pl-3 pl-1 font-extrabold text-gray-400 pointer-events-none sm:left-3 left-1 text-opacity-60">
                <HiOutlineUser className="text-2xl " />
              </div>
              <input
                {...register('cardholdername', {
                  required: 'Card holder name is required',
                })}
                type="text"
                onChange={inputCharacterOnly}
                placeholder="Card holder name"
                className="w-full input input-bordered focus:border-primary focus:outline-none sm:pl-14 pl-8 text-sm sm:text-[1rem]"
              />
            </div>
            {errors && errors.cardholdername && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.cardholdername.message}
              </P>
            )}
          </div>

          <div className="col-span-2">
            <P className=" !font-semibold text-black py-2">Card Number *</P>
            <div
              className="grid grid-cols-4 gap-4 rounded-md"
            >
              <div className="col-span-4">
                <div className="relative border rounded-md">
                  <div className="absolute inset-y-0 flex items-center h-12 sm:pl-3 pl-1 font-extrabold text-gray-400 pointer-events-none sm:left-3 left-1 text-opacity-60">
                    <FaIdCard
                      className="sm:text-2xl text-xl"
                    />
                  </div>
                  <input
                    {...register('cardnumber', {
                      required: 'Card number is required',
                      pattern: {
                        message: 'Card number must be 16 digits in the format xxxx xxxx xxxx xxxx',
                      },
                    })}
                    type="tel"
                    maxLength="23"
                    placeholder="Card number"
                    onChange={handleCardNumberChange}
                    className="w-full input focus:outline-none sm:pl-14 pl-8 text-sm sm:text-[1rem]"
                  />

                  {errors.cardNumber && (
                  <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">{errors.cardNumber.message}</P>
                  )}
                </div>
              </div>
              <div className="col-span-2 rounded-md">
                <P className=" !font-semibold text-black py-2">Expiry Date *</P>

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
                  className="w-full border input-bordered input focus:outline-none pr-0 pl-5  text-sm"
                />
                {errors.expiry && (
                  <span className="error">{errors.expiry.message}</span>
                )}
              </div>
              <div className="col-span-2 rounded-md text-sm">
                <P className=" !font-semibold text-black py-2">CVV *</P>
                <input
                  {...register('cvv', {
                    required: 'Card cvv is required',
                  })}
                  maxLength="4"
                  onInput={handleCvvInput}
                  type="number"
                  className="w-full text-start input input-bordered focus:outline-none pr-0 text-sm sm:text-[1rem]"
                />
                {errors.cvv && (
                  <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">{errors.cvv.message}</P>
                )}
              </div>
            </div>
          </div>
          <div className=" col-span-2 flex justify-center py-6">
            <Button
              type="submit"
              isLoading={cardValidationLoader}
              className="h-10 uppercase btn-primary px-4"
            >
              {!cardValidationLoader && (
                <>
                  Save Card
                </>
              )}
              {(cardValidationLoader) && <>Please Wait</>}
            </Button>
          </div>
        </div>
      </form>

    </div>
  );
}
