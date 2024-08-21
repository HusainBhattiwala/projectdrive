import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import { useRouter } from 'next/navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isValidNumber } from 'libphonenumber-js';
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from 'context/LoginContext';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';
import Input from 'rolnew/ui/Input';
import api from '../utils/api';
import Button from '../ui/Button';
import OTP from './OTP';
// import SocialLogin from './SocialLogin';
import 'react-phone-input-2/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';

function getMobileNumber(phone, country) {
  const newPhone = phone.replace('+', '');
  const formattedCountry = country.replace('+', '');
  const formattedNumber = newPhone.replace(formattedCountry, '');
  return formattedNumber;
}

function BusinessRegistation({ loginPage }) {
  const router = useRouter();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    getValues,
    clearErrors,
    setValue,
  } = useForm();
  // eslint-disable-next-line no-console
  console.log(loginPage);

  // Password
  const [showPassword, setShowPassord] = useState(false);
  const [showRePassword, setShowRePassord] = useState(false);
  const [meter, setMeter] = useState(false);
  const [password, setPassword] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCountryCode, setUserCountryCode] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const { setShowLogin, setUserName } = useContext(LoginContext);
  const [isValidMobileNumber, setIsValidMobileNumber] = useState(false);

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

  const [otpVerified, setOtpVerified] = useState(true);

  const onSubmit = async (data) => {
    if (
      passwordTracker.eightCharsOrGreater
      && passwordTracker.lowercase
      && passwordTracker.number
      && passwordTracker.specialChar
      && passwordTracker.uppercase
      && userPhone
      && !isValidMobileNumber
    ) {
      // setShowLoader(true);
      const countryCode = userCountryCode;
      const mobileNo = getMobileNumber(userPhone, userCountryCode);
      const payload = {
        userEmailId: data?.userEmailId,
        userFname: data?.userFname,
        userLname: data?.userLname,
        orgName: data?.orgName,
        orgAddrLine1: data?.orgAddrLine1,
        orgAddrLine2: data?.orgAddrLine2,
        orgCity: data?.orgCity,
        orgCountry: data?.orgCountry,
        orgPostalCode: data?.orgPostalCode,
        userPhone: mobileNo,
        userCountryCode: `+${countryCode}`,
        authtype: 'BASIC',
        usertype: 'CORPORATE_MASTER',
        password: data.password,
      };
      const response = await api.post('/auth/corporate/signup', payload);
      if (response.data.Authorization) {
        toast.success('Signed up successfully', {
          // Show a success toast
          autoClose: 3000,
          theme: 'colored',
        });
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            userfname: response.data.user_fname,
            userlname: response.data.user_lname,
            useremailid: response.data.useremailid,
            usermobileno: response.data.usermobileno,
            usercountrycode: response.data.usercountrycode,
            usertype: response.data.usertype,
          }),
        );
        sessionStorage.setItem('token', response.data.Authorization);
        setShowLogin(true);
        setUserName(response.data.user_fname);
        router.refresh();
        router.push('/corporate/booking-summary');
        setShowLoader(false);
        reset(); // This will clear all form fields
      } else {
        toast.error(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
        setShowLoader(false);
      }
    }
  };

  function checkMobileNumber(value, countryData) {
    if (value) {
      const newNumber = getMobileNumber(value, countryData.dialCode);
      if (isValidNumber(newNumber, countryData.countryCode.toUpperCase())) {
        setIsValidMobileNumber(false);
        onSubmit();
      } else {
        setIsValidMobileNumber(true);
      }
    }
  }

  return (
    <>
      <ToastContainer
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
      {!otpVerified ? (
        <OTP isOtpVerified={setOtpVerified} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-left relative px-5 flex flex-col gap-y-4"
        >
          <div className="flex sm:gap-x-4 gap-x-2 items-center">
            <div className=" w-full">
              <Input
                {...register('userFname', {
                  required: {
                    value: true,
                    message: 'Your first name required',
                  },
                  autoComplete: 'off',
                })}
                onChange={(e) => {
                  setValue('userFname', e.target.value, {
                    shouldValidate: true,
                  });
                  clearErrors('userFname');
                }}
                // leadingIcon="/rolnew/global/icons/mail.svg"
                label="First Name"
                placeholder="Enter first name"
                readOnly={showLoader}
              />

              {errors && errors.userFname && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.userFname.message}
                </P>
              )}
            </div>
            <div className=" w-full">
              <Input
                {...register('userLname', {
                  required: { value: true, message: 'Your last name required' },
                  autoComplete: 'off',
                })}
                onChange={(e) => {
                  setValue('userLname', e.target.value, {
                    shouldValidate: true,
                  });
                  clearErrors('userLname');
                }}
                // leadingIcon="/rolnew/global/icons/mail.svg"
                label="Last Name"
                placeholder="Enter last name"
                readOnly={showLoader}
              />

              {errors && errors.userLname && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.userLname.message}
                </P>
              )}
            </div>
          </div>
          {/* <div className="boxers  gap-5 justify-between flex lg:flex-row flex-col">
            <div className="box w-full">
              <div className="tracking-[-0.01em] mb-2 ml-1 font-medium">
                <span className="text-[14px]">First name</span>
                <span className="text-red-500"> *</span>
              </div>
              <input
                placeholder="Enter your first name"
                {...register('userFname', {
                  required: 'Your first name is required.',
                })}
                className="w-full input text-sm font-medium bg-white bg-opacity-10 rounded-lg border border-neutral-200 border-opacity-25 focus:outline-none"
              />
              {errors && errors.userFname && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.userFname.message}
              </P>
              )}
            </div>
            <div className="box w-full">
              <div className="tracking-[-0.01em] mb-2 ml-1 font-medium">
                <span className="text-[14px]">Last name</span>
                <span className="text-red-500"> *</span>
              </div>
              <input
                placeholder="Enter your last name"
                {...register('userLname', {
                  required: 'Your last name is required.',
                })}
                className="w-full input text-sm font-medium bg-white bg-opacity-10 rounded-lg border border-neutral-200 border-opacity-25 focus:outline-none"
              />
              {errors && errors.userLname && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.userLname.message}
              </P>
              )}
            </div>
          </div> */}

          <div className="">
            {/* <div className="tracking-[-0.01em] mb-2 ml-1 font-medium">
              <span className="text-[14px]">Company Name</span>
              <span className="text-red-500"> *</span>
            </div>
            <input
              placeholder="Enter your company Name"
              {...register('orgName', {
                required: 'Organization name is required',
              })}
              className="w-full input text-sm font-medium bg-white bg-opacity-10 rounded-lg border border-neutral-200 border-opacity-25 focus:outline-none"
            /> */}
            <Input
              {...register('orgName', {
                required: { value: true, message: 'Company Name is required' },
                autoComplete: 'off',
              })}
              onChange={(e) => {
                setValue('orgName', e.target.value, { shouldValidate: true });
                clearErrors('orgName');
              }}
              // leadingIcon="/rolnew/global/icons/mail.svg"
              label="Company Name"
              placeholder="Enter company name"
              readOnly={showLoader}
            />
            {errors && errors.orgName && (
              <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.orgName.message}
              </p>
            )}
          </div>

          <div className="boxers  flex gap-5 justify-between lg:flex-row flex-col">
            <div className="box w-full">
              {/* <input
                placeholder="Enter your official email"
                {...register('userEmailId', {
                  required: 'Email address is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                })}
                className="w-full input text-sm font-medium bg-white bg-opacity-10 rounded-lg border border-neutral-200 border-opacity-25 focus:outline-none"
              /> */}
              <Input
                {...register('userEmailId', {
                  required: { value: true, message: 'Email is required' },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email format',
                  },
                  autoComplete: 'off',
                })}
                onChange={(e) => {
                  setValue('userEmailId', e.target.value, {
                    shouldValidate: true,
                  });
                  clearErrors('userEmailId');
                }}
                leadingIcon="/rolnew/global/icons/mail.svg"
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              {errors && errors.userEmailId && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.userEmailId.message}
                </P>
              )}
            </div>
            <div className="box w-full">
              <p className="text-sm text-white mb-1">Mobile Number</p>
              <PhoneInput
                {...register('companymobileno', {
                  required: 'Mobile number is required',
                })}
                enableSearch
                country="gb"
                autoFormat={false}
                countryCodeEditable={false}
                onChange={(_, country, event) => {
                  setUserCountryCode(country.dialCode);
                  setUserPhone(event.target.value);
                  checkMobileNumber(event.target.value, country);
                  setValue('companymobileno', event.target.value);
                  clearErrors('companymobileno');
                }}
                onCountryChange={() => {
                  setUserPhone();
                }}
                inputClass="!bg-[#223544] !text-[#B2B2B2] w-full text-sm rounded-lg h-12 input  !input-bordered focus:border-primary focus:outline-none !border-opacity-80 !border-[#c3c1c1] "
                inputStyle={{
                  borderRadius: '0.5rem',
                  borderStyle: 'solid',
                  borderColor: 'rgba(225,225,225,0.25)',
                }}
              />
              {errors.companymobileno && (
                <p className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.companymobileno.message}
                </p>
              )}
              {isValidMobileNumber && (
                <p className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  Phone number is not valid
                </p>
              )}
            </div>
          </div>

          <div className="">
            <Input
              {...register('orgAddrLine1', {
                required: {
                  value: true,
                  message: 'Billing address is required',
                },
                autoComplete: 'off',
              })}
              onChange={(e) => {
                setValue('orgAddrLine1', e.target.value, {
                  shouldValidate: true,
                });
                clearErrors('orgAddrLine1');
              }}
              // leadingIcon="/rolnew/global/icons/mail.svg"
              label="Billing Address Line 1"
              placeholder="Enter billing address line 1"
              readOnly={showLoader}
            />
            {errors && errors.orgAddrLine1 && (
              <p className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.orgAddrLine1.message}
              </p>
            )}
          </div>

          <Input
            {...register('orgAddrLine2', {
              autoComplete: 'off',
            })}
            onChange={(e) => {
              setValue('orgAddrLine2', e.target.value, {
                shouldValidate: true,
              });
              clearErrors('orgAddrLine2');
            }}
            // leadingIcon="/rolnew/global/icons/mail.svg"
            label="Billing Address Line 2"
            placeholder="Enter billing address line 2"
            readOnly={showLoader}
          />
          {errors && errors.orgAddrLine2 && (
            <p className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
              {errors.orgAddrLine2.message}
            </p>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-2 w-full">
            <div className="col-span-1">
              <Input
                {...register('orgCity', {
                  autoComplete: 'off',
                })}
                onChange={(e) => {
                  setValue('orgCity', e.target.value, { shouldValidate: true });
                  clearErrors('orgCity');
                }}
                // leadingIcon="/rolnew/global/icons/mail.svg"
                label="City"
                placeholder="Enter city"
                readOnly={showLoader}
              />
              {errors && errors.orgCity && (
                <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.orgCity.message}
                </p>
              )}
            </div>
            <div className="col-span-1">
              <Input
                {...register('orgPostalCode', {
                  autoComplete: 'off',
                })}
                onChange={(e) => {
                  setValue('orgPostalCode', e.target.value, {
                    shouldValidate: true,
                  });
                  clearErrors('orgPostalCode');
                }}
                // leadingIcon="/rolnew/global/icons/mail.svg"
                label="Postal Code"
                placeholder="Enter postal code"
                readOnly={showLoader}
              />
              {errors && errors.orgPostalCode && (
                <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.orgPostalCode.message}
                </p>
              )}
            </div>
            <div className="col-span-1">
              <Input
                {...register('orgCountry', {
                  autoComplete: 'off',
                })}
                onChange={(e) => {
                  setValue('orgCountry', e.target.value, {
                    shouldValidate: true,
                  });
                  clearErrors('orgCountry');
                }}
                // leadingIcon="/rolnew/global/icons/mail.svg"
                label="Country"
                placeholder="Enter Country"
                readOnly={showLoader}
              />
              {errors && errors.orgCountry && (
                <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.orgCountry.message}
                </p>
              )}
            </div>
          </div>

          <div className="password-container flex sm:flex-row flex-col justify-evenly gap-3">
            <div className="w-full">
              <div className="relative">
                <Input
                  {...register('password', {
                    required: { value: true, message: 'Password is required' },
                    autoComplete: 'off',
                  })}
                  onFocus={() => setMeter(true)}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setValue('password', e.target.value);
                    clearErrors('password');
                  }}
                  type={showPassword ? 'text' : 'password'}
                  leadingIcon="/rolnew/global/icons/lock-open.svg"
                  label="Password"
                  placeholder="Enter password"
                />
                {!showPassword && (
                  <FaEyeSlash
                    className="absolute w-4 h-4 transform top-10 cursor-pointer text-[#B2B2B2] right-2"
                    onClick={() => {
                      setShowPassord(true);
                    }}
                  />
                )}
                {showPassword && (
                  <FaEye
                    className="absolute w-4 h-4 transform top-10 cursor-pointer text-[#B2B2B2] right-2"
                    onClick={() => {
                      setShowPassord(false);
                    }}
                  />
                )}
              </div>
              {errors && errors.password && !meter && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.password.message}
                </P>
              )}
            </div>

            <div className="w-full">
              <div className="relative">
                <Input
                  {...register('rePassword', {
                    required: 'Confirm password is required',
                    validate: (value) => value === getValues().password
                      || 'Passwords do not match',
                  })}
                  onChange={(e) => {
                    setValue('rePassword', e.target.value);
                    clearErrors('rePassword');
                  }}
                  type={showRePassword ? 'text' : 'password'}
                  leadingIcon="/rolnew/global/icons/lock-open.svg"
                  label="Confirm Password"
                  placeholder="Enter confirm password"
                />
                {!showRePassword && (
                  <FaEyeSlash
                    className="absolute w-4 h-4 transform top-10 cursor-pointer text-[#B2B2B2] right-2"
                    onClick={() => {
                      setShowRePassord(true);
                    }}
                  />
                )}
                {showRePassword && (
                  <FaEye
                    className="absolute w-4 h-4 transform top-10 cursor-pointer text-[#B2B2B2] right-2"
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
          </div>

          {meter && (
            <div className="flex sm:flex-row flex-col mb-2 w-full justify-start gap-x-3 mt-1">
              <div className="">
                <div
                  className={`!text-xs font-semibold flex items-center ${
                    passwordTracker.uppercase ? 'text-success' : 'text-red-500'
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
                  Atleast one-uppercase.
                </div>
                <div
                  className={`!text-xs font-semibold flex items-center ${
                    passwordTracker.lowercase ? 'text-success' : 'text-red-500'
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
                  Atleast one-lowercase.
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
              <div className="">
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
          <Button
            type="submit"
            kind="primary"
            isLoading={showLoader}
            className={`w-full  h-[50px] bg-orange-600 rounded-md border mt-5 ${
              showLoader && ''
            }`}
          >
            Sign up
          </Button>
        </form>
      )}
    </>
  );
}

export default BusinessRegistation;
