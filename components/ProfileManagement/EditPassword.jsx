'use client';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { LoginContext } from 'context/LoginContext';
import Button from '../ui/Button';
import H4 from '../typography/H4';
import P from '../typography/P';
import { Pic } from '../ui/Pic';
import api from '../utils/api';
import 'react-toastify/dist/ReactToastify.css';

function EditPassword({ cancelEdit }) {
  const [showLoader, setShowLoader] = useState(false);
  const [showPassword, setShowPassord] = useState(false);
  const [showRePassword, setShowRePassord] = useState(false);
  const { setShowLogin, setUserName } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const router = useRouter();

  // Password checker

  const [meter, setMeter] = useState(false);
  const [password, setPassword] = useState('');

  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
  const eightCharsOrMore = /.{8,}/g; // eight characters or more

  const passwordTracker = {
    uppercase: password.match(atLeastOneUppercase),
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumeric),
    specialChar: password.match(atLeastOneSpecialChar),
    eightCharsOrGreater: password.match(eightCharsOrMore),
  };

  const onSubmit = async (data) => {
    // eslint-disable-next-line max-len
    if (
      passwordTracker.eightCharsOrGreater
      && passwordTracker.lowercase
      && passwordTracker.number
      && passwordTracker.specialChar
      && passwordTracker.uppercase
    ) {
      setShowLoader(true);
      const response = await api.put('/users/password', {
        password: data.password,
      });
      if (response.data.status === 1) {
        sessionStorage.clear();
        Cookies.remove('searchdata');
        Cookies.remove('storesearchdata');
        setShowLogin(false);
        setUserName('');
        router.refresh();
        toast.success('Password updated successfully', {
          autoClose: 3000,
          theme: 'colored',
        });
      }
      setShowLoader(false);
      setPassword('');
      reset();
    }
  };

  const handleClose = () => {
    router.push('/');
  };

  return (
    <>
      <ToastContainer
        onClose={handleClose}
        limit={1}
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="xl:px-[82px] lg:px-12 px-6 xl:py-[80px] py-8 bg-white rounded-3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 ">
            <div className="col-span-4 sm:col-span-2">
              <div className="flex items-center">
                <div className="w-[13px]">
                  <Pic src="/images/icons/lock.svg" alt="lock" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  Enter your new password *
                </H4>
              </div>
              <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  placeholder="Enter password"
                  onFocus={() => setMeter(true)}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                />
                {!showPassword && (
                  <FaEyeSlash
                    className="absolute w-4 h-4 transform -translate-y-1/2 cursor-pointer text-primary top-1/2 right-1"
                    onClick={() => {
                      setShowPassord(true);
                    }}
                  />
                )}
                {showPassword && (
                  <FaEye
                    className="absolute w-4 h-4 transform -translate-y-1/2 cursor-pointer text-primary top-1/2 right-1"
                    onClick={() => {
                      setShowPassord(false);
                    }}
                  />
                )}
              </div>
              {errors && errors.password && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.password?.message}
                </P>
              )}

              {meter && (
                <div className="flex sm:flex-row flex-col justify-between">
                  <div className="mt-3">
                    <div
                      className={`!text-xs font-semibold flex items-center ${
                        passwordTracker.uppercase
                          ? 'text-success'
                          : 'text-red-500'
                      }`}
                    >
                      {passwordTracker.uppercase ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic
                            src="/images/icons/green-tick.png"
                            className="object-contain"
                            alt="green-tick"
                          />
                        </div>
                      ) : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )}
                      Atleast one-uppercase
                    </div>
                    <div
                      className={`!text-xs font-semibold flex items-center ${
                        passwordTracker.lowercase
                          ? 'text-success'
                          : 'text-red-500'
                      }`}
                    >
                      {passwordTracker.lowercase ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic
                            src="/images/icons/green-tick.png"
                            className="object-contain"
                            alt="green-tick"
                          />
                        </div>
                      ) : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )}
                      Atleast one-lowercase
                    </div>
                    <div
                      className={`!text-xs font-semibold flex items-center ${
                        passwordTracker.specialChar
                          ? 'text-success'
                          : 'text-red-500'
                      }`}
                    >
                      {passwordTracker.specialChar ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic
                            src="/images/icons/green-tick.png"
                            className="object-contain"
                            alt="green-tick"
                          />
                        </div>
                      ) : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )}
                      Atleast one special character.
                    </div>
                  </div>
                  <div className="sm:pt-3">
                    <div
                      className={`!text-xs font-semibold flex items-center ${
                        passwordTracker.number ? 'text-success' : 'text-red-500'
                      }`}
                    >
                      {passwordTracker.number ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic
                            src="/images/icons/green-tick.png"
                            className="object-contain"
                            alt="green-tick"
                          />
                        </div>
                      ) : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )}
                      Atleast one number.
                    </div>
                    <div
                      className={`!text-xs font-semibold flex items-center ${
                        passwordTracker.eightCharsOrGreater
                          ? 'text-success'
                          : 'text-red-500'
                      }`}
                    >
                      {passwordTracker.eightCharsOrGreater ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic
                            src="/images/icons/green-tick.png"
                            className="object-contain"
                            alt="green-tick"
                          />
                        </div>
                      ) : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )}
                      Atleast eight characters or more.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 mt-5 lg:grid-cols-4 md:grid-cols-1">
            <div className="col-span-4 sm:col-span-2">
              <div className="flex items-center">
                <div className="w-[13px]">
                  <Pic src="/images/icons/lock.svg" alt="lock" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  Confirm your new password *
                </H4>
              </div>
              <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                <input
                  type={showRePassword ? 'text' : 'password'}
                  {...register('rePassword', {
                    required: 'Confirm password is required',
                    validate: (value) => value === getValues().password
                      || 'Passwords do not match',
                  })}
                  placeholder="Confirm password"
                  className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                />
                {!showRePassword && (
                  <FaEyeSlash
                    className="absolute w-4 h-4 transform -translate-y-1/2 cursor-pointer text-primary top-1/2 right-1"
                    onClick={() => {
                      setShowRePassord(true);
                    }}
                  />
                )}
                {showRePassword && (
                  <FaEye
                    className="absolute w-4 h-4 transform -translate-y-1/2 cursor-pointer text-primary top-1/2 right-1"
                    onClick={() => {
                      setShowRePassord(false);
                    }}
                  />
                )}
              </div>
              {errors && errors.rePassword && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.rePassword?.message}
                </P>
              )}
            </div>
            <div className="col-span-4 mt-10 md:mt-20">
              <div className="justify-end sm:flex">
                <Button
                  type="button"
                  className="w-full py-3 !text-black !btn-outline sm:w-auto"
                  onClick={cancelEdit}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={showLoader}
                  className={`btn-primary py-3 sm:ml-5 w-full mt-2 sm:mt-0 sm:w-auto ${
                    showLoader && ''
                  }`}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditPassword;
