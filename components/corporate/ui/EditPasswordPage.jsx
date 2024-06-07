'use client';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { LoginContext } from 'context/LoginContext';
import Button from 'components/ui/Button';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';
import api from 'components/utils/api';
import 'react-toastify/dist/ReactToastify.css';

export default function EditPasswordPage({ isOpen, onRequestClose }) {
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
        Cookies.remove('passengerDetails');
        setShowLogin(false);
        setUserName('');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
        toast.success('Password updated successfully', {
          autoClose: 3000,
          theme: 'colored',
          onClose: onRequestClose, // Close the modal when the toast is closed
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

  // If the modal is not open, return null (modal is not displayed)
  if (!isOpen) {
    return null;
  }

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
      <div className="fixed w-full h-full bg-[rgba(0,0,0,0.5)] flex z-[999] justify-center items-center left-0 top-0 transition-[filter] duration-[0.3s]">
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 modal-box max-w-[900px] sm:max-w-[900px]">
            <div className="flex flex-row w-full justify-between items-center">
              <h3 className="text-xl font-bold ml-6 text-primary mb-5">
                Change Password
              </h3>
              {/* Close button */}
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="p-2 mt-[-5px] ml-auto rounded-full cursor-pointer text-primary font-extrabold w-10 h-10 hover:bg-red-100"
                onClick={() => {
                  onRequestClose(); // Close the modal
                  reset(); // Reset the form
                }}
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
            </div>
            <div className="px-6">
              <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="w-full rounded-lg"
              >
                <div className="flex flex-col gap-5 lg:flex-row">
                  <div className="lg:w-1/2">
                    <div className="flex items-center">
                      <P className="text-neutral-500 text-[14px] !font-semibold capitalize">
                        Enter New Password
                      </P>
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
                      <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                        {errors.password?.message}
                      </P>
                    )}
                    {meter && (
                      <div className="flex flex-col sm:flex-row justify-between">
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
                            At least one uppercase.
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
                            At least one lowercase.
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
                            At least one special character.
                          </div>
                        </div>
                        <div className="sm:pt-3">
                          <div
                            className={`!text-xs font-semibold flex items-center ${
                              passwordTracker.number
                                ? 'text-success'
                                : 'text-red-500'
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
                            At least one number.
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
                            At least eight characters or more.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex items-center">
                      <P className="text-neutral-500 text-[14px] !font-semibold capitalize">
                        Re-enter New Password
                      </P>
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
                      <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                        {errors.rePassword?.message}
                      </P>
                    )}
                  </div>
                </div>
                <div className="flex lg:flex-row mt-10 justify-center items-center">
                  <Button
                    type="submit"
                    isLoading={showLoader}
                    className={`w-48 h-12 px-7 py-3.5 bg-orange-600 hover:bg-[#EAEAEA] hover:!text-primary rounded-md justify-center items-center gap-2.5 inline-flex ${
                      showLoader && ''
                    }`}
                  >
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
