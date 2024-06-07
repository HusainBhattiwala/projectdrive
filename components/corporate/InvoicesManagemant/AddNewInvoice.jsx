/* eslint-disable no-param-reassign */

import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../utils/api';
import Button from '../../ui/Button';
import 'react-toastify/dist/ReactToastify.css';

const inputCharacterOnly = (event) => {
  const { value } = event.target;
  const sanitizedValue = value.replace(/[^A-Za-z\s]/gi, '');
  // eslint-disable-next-line no-param-reassign
  event.target.value = sanitizedValue;
};

export default function AddNewInvoice({ email, handleClose }) {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    setFocus,
    formState: { errors },
  } = useForm();
  // const [cardError, setCardError] = useState(null);
  const [cardValidationLoader, setCardValidationLoader] = useState(false);

  const onSubmit = async (data) => {
    const number = data.cardnumber.split(' ').join('');
    const month = data.expiry.split(' /')[0];
    const year = data.expiry.split(' /')[1];
    const { cvv } = data;
    setCardValidationLoader(true);
    const response = await api.post('card-details/create', {
      cardHolderNmae: data.cardholdername,
      userEmailId: email,
      cardNumber: number,
      cardExpiryMonth: month.trim(),
      cardExpiryYear: year.trim(),
      cvc: cvv,
    });
    setCardValidationLoader(false);
    if (response.data.status === 1) {
      toast.success(response.message, {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
    } else {
      toast.error(response.message, {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
    }
  };

  return (
    <div className="px-6">
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
      <form
        className="w-full shrink-0 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <div className="col-span-2">
            {/* <p className=" py-2 text-neutral-500 text-[14px] !font-medium capitalize">Card Number *</p> */}
            <div className="grid grid-cols-4 gap-4 rounded-md">
              <div className="col-span-2 rounded-md">
                <p className=" py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                  First Name*
                </p>
                <input
                  {...register('expiry', {
                    required: 'First Name is required',
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/,
                      message: 'Expiry date must be in the format MM / YY',
                    },
                  })}
                  type="text"
                  placeholder="Enter your first name"
                  maxLength="20"
                  // autoComplete="cc-exp"
                  // onInput={formatExpiryDate}
                  className="w-full text-start input input-bordered focus:outline-none pr-0 text-sm sm:text-[1rem]"
                />
                {errors.expiry && (
                  <span className="error">{errors.expiry.message}</span>
                )}
              </div>
              <div className="col-span-2 rounded-md text-sm">
                <p className=" py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                  Last Name*
                </p>
                <input
                  {...register('cvv', {
                    required: 'Last Name is required',
                  })}
                  maxLength="20"
                  placeholder="Enter your last name"
                  // onInput={handleCvvInput}
                  type="text"
                  className="w-full text-start input input-bordered focus:outline-none pr-0 text-sm sm:text-[1rem]"
                />
                {errors.expiry && (
                  <span className="error">{errors.expiry.message}</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <p className=" py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              Email Address *
            </p>
            <div className="relative">
              <input
                {...register('cardholdername', {
                  required: 'Card holder name is required',
                })}
                type="text"
                onChange={inputCharacterOnly}
                placeholder="Enter Email Address"
                className="w-full input input-bordered focus:border-primary focus:outline-none sm:pl-14 pl-8 text-sm sm:text-[1rem]"
              />
            </div>
            {errors && errors.cardholdername && (
              <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.cardholdername.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <p className=" py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              Mobile Number *
            </p>
            <div className="relative">
              <input
                {...register('cardholdername', {
                  required: 'Card holder name is required',
                })}
                type="tel"
                // onChange={inputCharacterOnly}
                placeholder="Enter Mobile Number"
                className="w-full input input-bordered focus:border-primary focus:outline-none sm:pl-14 pl-8 text-sm sm:text-[1rem]"
              />
            </div>
          </div>
          <div className="col-span-2">
            <p className=" py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              Name on card *
            </p>
            <div className="relative">
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
              <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.cardholdername.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <p className=" py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              Address *
            </p>
            <div className="relative">
              <input
                {...register('cardholdername', {
                  required: 'Card holder name is required',
                })}
                type="text"
                onChange={inputCharacterOnly}
                placeholder="Enter Address"
                className="w-full input input-bordered focus:border-primary focus:outline-none sm:pl-14 pl-8 text-sm sm:text-[1rem]"
              />
            </div>
            {errors && errors.cardholdername && (
              <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.cardholdername.message}
              </p>
            )}
          </div>
          <div className="col-span-1 rounded-md">
            <p className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              City*
            </p>
            <input
              {...register('expiry', {
                required: 'First Name is required',
                pattern: {
                  value: /^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/,
                  message: 'Expiry date must be in the format MM / YY',
                },
              })}
              type="text"
              placeholder="Enter your first name"
              maxLength="20"
              className="w-full text-start input input-bordered focus:outline-none pr-0 text-sm sm:text-[1rem]"
            />
            {errors.expiry && (
              <span className="error">{errors.expiry.message}</span>
            )}
          </div>
          <div className="col-span-1 rounded-md">
            <p className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              Country/State
            </p>
            <input
              {...register('middleName')}
              type="text"
              placeholder="Enter Your Middle Name"
              maxLength="20"
              className="w-full text-start input input-bordered focus:outline-none pr-0 text-sm sm:text-[1rem]"
            />
          </div>
          <div className="col-span-1 rounded-md">
            <p className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              Zip
            </p>
            <input
              {...register('cvv', {
                required: 'Card cvv is required',
              })}
              maxLength="20"
              placeholder="Enter your last name"
              type="text"
              className="w-full text-start input input-bordered focus:outline-none pr-0 text-sm sm:text-[1rem]"
            />
            {errors.cvv && (
              <p className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.cvv.message}
              </p>
            )}
          </div>
          <div className="col-span-1 rounded-md">
            <p className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              Cost Center*
            </p>
            <select
              {...register('costCenter', {
                required: 'Cost Center is required',
              })}
              className="w-full text-start input input-bordered focus:outline-none pr-0 text-sm sm:text-[1rem]"
            >
              <option value="">Select Cost Center</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            {errors.costCenter && (
              <p className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.costCenter.message}
              </p>
            )}
          </div>
          <div className="col-span-2 flex justify-center py-6">
            <Button
              type="submit"
              isLoading={cardValidationLoader}
              className="w-48 h-12 px-7 py-3.5 bg-orange-600 hover:bg-[#EAEAEA] hover:!text-primary rounded-md justify-center items-center gap-2.5 inline-flex"
            >
              Add Invoice
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
