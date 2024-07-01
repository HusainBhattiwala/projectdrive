import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import { useRouter } from 'next/navigation';
import { isValidNumber } from 'libphonenumber-js';
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from 'context/LoginContext';
import api from 'components/utils/api';
import Input from 'rolnew/ui/Input';
import { Pic } from 'components/ui/Pic';
import Button from '../ui/Button';
import P from '../typography/P';
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

function Registation() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    clearErrors,
  } = useForm();

  // Password
  const [showPassword, setShowPassord] = useState(false);
  const [showRePassword, setShowRePassord] = useState(false);
  const [meter, setMeter] = useState(false);
  const [password, setPassword] = useState('');
  const [userMobile, setUserMobile] = useState('');
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
      && userMobile
      && !isValidMobileNumber
    ) {
      setShowLoader(true);
      const countryCode = userCountryCode;
      const mobileNo = getMobileNumber(userMobile, userCountryCode);
      const payload = {
        useremailid: data?.email,
        fname: data?.fname,
        lname: data?.lname,
        usermobileno: mobileNo,
        usercountrycode: `+${countryCode}`,
        authtype: 'BASIC',
        usertype: 'PRIVATE_CLIENT',
        password: data.password,
      };
      const response = await api.post('/auth/email-signup', payload);
      if (response.data.Authorization) {
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            userfname: response.data.user_fname,
            userlname: response.data.user_lname,
            useremailid: response.data.useremailid,
            usermobileno: response.data.usermobileno,
            usercountrycode: response.data.usercountrycode,
          }),
        );
        sessionStorage.setItem('token', response.data.Authorization);
        setShowLogin(true);
        setUserName(response.data.user_fname);
        router.refresh();
        router.push('/booking-management');
        setShowLoader(false);
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
          className="text-left relative flex flex-col gap-y-4"
        >
          <div className="flex sm:gap-x-4 gap-x-2 items-center">
            <div className="w-full">
              <Input
                {...register('fname', {
                  required: { value: true, message: 'Your first e required' },
                  autoComplete: 'off',
                })}
                onChange={(e) => {
                  setValue('fname', e.target.value, { shouldValidate: true });
                  clearErrors('fname');
                }}
                // leadingIcon="/rolnew/global/icons/mail.svg"
                label="First Name"
                placeholder="Enter first name"
                readOnly={showLoader}
              />

              {errors && errors.fname && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.fname.message}
                </P>
              )}
            </div>
            <div className="w-full">
              <Input
                {...register('lname', {
                  required: { value: true, message: 'Your last name required' },
                  autoComplete: 'off',
                })}
                onChange={(e) => {
                  setValue('lname', e.target.value, { shouldValidate: true });
                  clearErrors('lname');
                }}
                // leadingIcon="/rolnew/global/icons/mail.svg"
                label="Last Name"
                placeholder="Enter last name"
                readOnly={showLoader}
              />

              {errors && errors.lname && (
                <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                  {errors.lname.message}
                </P>
              )}
            </div>
          </div>
          <div className="w-full ">
            <Input
              {...register('email', {
                required: { value: true, message: 'Email is required' },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email format',
                },
                autoComplete: 'off',
              })}
              onChange={(e) => {
                setValue('email', e.target.value, { shouldValidate: true });
                clearErrors('email');
              }}
              leadingIcon="/rolnew/global/icons/mail.svg"
              label="Email"
              placeholder="Enter your email"
              type="email"
            />

            {errors && errors.email && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.email.message}
              </P>
            )}
          </div>
          <div className="relative block ">
            {/* <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              placeholder="Enter password"
              onFocus={() => setMeter(true)}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full input text-[#B2B2B2] text-sm font-medium bg-white bg-opacity-10 rounded-lg border border-neutral-200 border-opacity-25 focus:outline-none"
            /> */}
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

          {meter && (
            <div className="flex sm:flex-row flex-col justify-between">
              <div className="mt-3">
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

          <div className="relative block ">
            {/* <input
              type={showRePassword ? 'text' : 'password'}
              {...register('rePassword', {
                required: 'Confirm password is required',
                validate: (value) => value === getValues().password || 'Passwords do not match',
              })}
              placeholder="Confirm password"
              className="w-full input text-[#B2B2B2] text-sm font-medium bg-white bg-opacity-10 rounded-lg border border-neutral-200 border-opacity-25 focus:outline-none"
            /> */}
            <Input
              {...register('rePassword', {
                required: 'Confirm password is required',
                validate: (value) => value === getValues().password || 'Passwords do not match',
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
          <div>
            <p className="text-white text-sm mb-[2px] text-left}">
              Mobile Number
            </p>
            <PhoneInput
              {...register('companymobileno', {
                required: 'Mobile number is required',
              })}
              enableSearch
              country="gb"
              autoFormat={false}
              countryCodeEditable={false}
              // value={userMobile}
              // onChange={(phone, country) => { setUserMobile(phone); checkMobileNumber(phone, country); }}
              onChange={(_, country, event) => {
                setUserCountryCode(country.dialCode);
                setUserMobile(event.target.value);
                checkMobileNumber(event.target.value, country);
                setValue('companymobileno', event.target.value);
                clearErrors('companymobileno');
              }}
              onCountryChange={() => {
                setUserMobile();
              }}
              inputClass="!bg-[#FFFFFF0A] !text-[#B2B2B2] !border-0.4 !border-[#828282] focus:outline-none"
            />
            {errors.companymobileno && (
              <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.companymobileno.message}
              </P>
            )}
            {isValidMobileNumber && (
              <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
                Phone number is not valid
              </P>
            )}
          </div>
          <Button
            type="submit"
            kind="primary"
            isLoading={showLoader}
            className={`w-full mt-5 ${showLoader && ''}`}
          >
            Sign up
          </Button>
        </form>
      )}
    </>
  );
}

export default Registation;
