/* eslint-disable max-len */

'use client';

import { useRouter } from 'next/navigation';
import React, {
  useState, useRef, useContext, useEffect,
} from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { isValidNumber } from 'libphonenumber-js';
// import PhoneWithCountry from '../shared/PhoneWithCountry';
import PhoneInput from 'react-phone-input-2';
import { LoginContext } from 'context/LoginContext';
import P from '../typography/P';
import Alert from '../ui/Alert';
import Button from '../ui/Button';
import api from '../utils/api';
import 'react-phone-input-2/lib/style.css';

function getMobileNumber(phone, country) {
  const newPhone = phone.replace('+', '');
  const formattedCountry = country.replace('+', '');
  const formattedNumber = newPhone.replace(formattedCountry, '');
  return formattedNumber;
}

function OTP({
  isOtpVerified, loginPage, setAuthType = () => {}, accountType = 'personal',
  setShowOTP = () => {},
}) {
  const { setShowLogin, setUserName, setIsNewUser } = useContext(LoginContext);

  const router = useRouter();
  const {
    handleSubmit,
  } = useForm();

  const [otpError, setotpError] = useState(true);
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [showInputs, setShowInputs] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showMobileError, setShowMobileError] = useState(false);
  const [isValidMobileNumber, setIsValidMobileNumber] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [userMobile, setUserMobile] = useState('');
  const [userCountryCode, setUserCountryCode] = useState('');
  const [showOTPError, setShowOTPError] = useState(false);

  useEffect(() => {
    let intervalId;
    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, [seconds]);

  const startTimer = () => {
    setSeconds(60);
  };

  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleInputChange = (e, index) => {
    if (e.target.value.length > 1) {
      return;
    }

    const newInputs = [...inputs];
    newInputs[index] = e.target.value;
    setInputs(newInputs);
  };

  const handleKeyUp = (e, index) => {
    if (!/^\d*$/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    } else if (e.key === 'Backspace') {
      const nextIndex = index - 1;
      if (nextIndex >= 0 && !inputRefs.current[nextIndex].value) {
        inputRefs.current[nextIndex].current.focus();
        if (inputRefs.current[nextIndex].value) {
          inputRefs.current[nextIndex].value = '';
        }
      }
    } else {
      const nextIndex = index + 1;
      if (nextIndex < inputs.length) {
        inputRefs.current[nextIndex].current.focus();
      }
    }
  };
  const onSubmit = async () => {
    if (showInputs) {
      const status = inputs.every((i) => i !== '');
      setotpError(status);
      if (status) {
        setShowLoader(true);
        const userMobileNo = getMobileNumber(userMobile, userCountryCode);
        const phoneExists = await api.post('/auth/check', {
          mobile: userMobileNo,
        });
        console.log(phoneExists);

        let url = '';
        if (accountType === 'personal') {
          if (phoneExists.data.exists) {
            url = '/auth/verify-otp';
          } else {
            url = '/auth/verify-otp/temp';
            setIsNewUser(true);
          }
        } else {
          url = '/auth/corporate/verify-otp';
        }

        const mobileNo = getMobileNumber(userMobile, userCountryCode);
        const response = await api.post(url, {
          usercountrycode: `${userCountryCode}`,
          usermobileno: mobileNo,
          otp: `${inputs[0]}${inputs[1]}${inputs[2]}${inputs[3]}`,
          authtype: 'OTP',
          usertype: 'PRIVATE_CLIENT',
        });
        if (response.status !== 500) {
          if (response.data.Authorization) {
            if (loginPage) {
              toast.success(
                'Please wait while we redirect. Your login was successful.',
                {
                  autoClose: 3000,
                  theme: 'colored',
                },
              );
              toast.clearWaitingQueue();
            }
            const {
              // eslint-disable-next-line max-len
              user_fname: userfname, user_lname: userlname, useremailid, usermobileno, usercountrycode,
            } = response.data;
            sessionStorage.setItem('token', response.data.Authorization);
            sessionStorage.setItem('user', JSON.stringify({
              userfname,
              userlname,
              useremailid,
              usermobileno,
              usercountrycode,
            }));
            isOtpVerified(true);
            setShowLogin(true);
            setUserName(userfname);
            setAuthType('OTP');
            Cookies.set('authtype', 'OTP');
            router.refresh();
            if (loginPage) {
              if (accountType === 'personal') router.push('/booking-management'); else router.push('/corporate/booking-summary');
            }
          } else if (!response.data.Authorization && loginPage) {
            toast.error(
              'This phone number is not associated with any accounts.',
              {
                autoClose: 3000,
                theme: 'colored',
              },
            );
            toast.clearWaitingQueue();
          } else {
            sessionStorage.setItem('user', JSON.stringify({
              usercountrycode: `${userCountryCode}`,
              usermobileno: mobileNo,
            }));
            isOtpVerified(true);
            setAuthType('OTP');
            Cookies.set('authtype', 'OTP');
            router.refresh();
          }
        } else {
          // setShowError(true);
          toast.error(
            'OTP is not valid',
            {
              autoClose: 3000,
              theme: 'colored',
            },
          );
          toast.clearWaitingQueue();
        }
        setShowLoader(false);
      }
    } else if (userMobile) {
      const countryCode = userCountryCode;
      const mobileNo = getMobileNumber(userMobile, userCountryCode);
      setShowLoader(true);

      if (isValidMobileNumber) {
        setIsValidMobileNumber(true);
        setShowLoader(false);
      } else {
        setShowLoader(true);
        setIsValidMobileNumber(false);
        setUserMobile(userMobile);
        setUserCountryCode(`+${countryCode}`);
        const obj = {
          mobile: mobileNo,
        };
        if (accountType !== 'personal') {
          obj.usertype = 'corporate';
        }
        if (loginPage) {
          const phoneExists = await api.post('/auth/check', obj);
          if (!phoneExists.data.exists) {
            setShowLoader(false);
            toast.error(
              'Phone number does not exist. Please sign-up',
              {
                autoClose: 3000,
                theme: 'colored',
              },
            );
            toast.clearWaitingQueue();
            return;
          }
        }

        const response = await api.post('/auth/send-otp', {
          usercountrycode: `+${countryCode}`,
          usermobileno: mobileNo,
          authtype: 'BASIC',
          usertype: 'PRIVATE_CLIENT',
        });
        if (response.status !== 500) {
          startTimer();
          setShowLoader(false);
          setShowInputs(true);
          setShowOTP(true);
          setIsValidMobileNumber(false);
        } else {
          setShowLoader(false);
          setShowOTPError(true);
        }
      }
    } else {
      setIsValidMobileNumber(true);
    }
  };

  async function resendOTP() {
    startTimer();
    const countryCode = userCountryCode;
    const mobileNo = getMobileNumber(userMobile, userCountryCode);
    await api.post('/auth/send-otp', {
      usercountrycode: countryCode,
      usermobileno: mobileNo,
      authtype: 'BASIC',
      usertype: 'PRIVATE_CLIENT',
    });
  }

  function checkMobileNumber(value, countryData) {
    if (value) {
      const newNumber = getMobileNumber(value, countryData.dialCode);
      if (isValidNumber(newNumber, countryData.countryCode.toUpperCase())) {
        setIsValidMobileNumber(false);
      } else {
        setIsValidMobileNumber(true);
      }
    }
  }
  console.log(loginPage);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`text-left ${!loginPage && 'relative'}`}>
      {
        showInputs
      && (
      <button type="button" className={`absolute ${loginPage ? 'top-5' : 'top-1'} z-[1] text-white flex items-center font-semibold`} onClick={() => { setShowInputs(false); setUserMobile(''); setUserCountryCode(''); setShowOTP(false); }}>
        <img src="/rolnew/global/icons/arrow-white.svg" alt="arrow-white" />
        Back
      </button>
      )
      }
      <div className="relative sm:mb-10 mb-5">
        <ToastContainer
          limit={1}
          position="top-right"
          hideProgressBar
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {!showMobileError && (
          <Alert
            errorLabel="Phone number is not valid"
            setError={setShowMobileError}
            showError={showMobileError}
          />
        )}
        {
          !showInputs
        && (
        <div className="flex items-end gap-x-4">
          <div className="grow">
            <P className="mb-1 font-normal text-xs text-white">Mobile Number</P>
            <PhoneInput
              enableSearch
              autoFormat={false}
              enableAreaCodes
              inputProps={{
                name: 'mobileno',
                required: true,
                autoFocus: true,
                autoComplete: 'off',
              }}
              countryCodeEditable={false}
              country="gb"
              onChange={(_, country, event) => {
                setUserCountryCode(country.dialCode);
                setUserMobile(event.target.value);
                checkMobileNumber(event.target.value, country);
              }}
              onCountryChange={() => { setUserMobile(); }}
              inputClass="!bg-[#223544D9] !text-[#B2B2B2] !border-0.4 !border-[#828282] focus:outline-none"
            />
            {isValidMobileNumber && <P className=" text-red-500 !text-x"> Not a valid mobile number</P>}
            {
            showOTPError && <P className=" text-red-500 !text-x">OTP not send</P>
          }
          </div>

          <Button type="submit" kind="primary" isLoading={showLoader} className={`w-auto !text-white !text-opacity-100 !capitalize !text-xl ${showLoader && ''}`}>
            Get OTP
          </Button>
        </div>
        )
        }
        {
          showInputs
          && (
          <div className="relative">
            <div className="text-center my-8">
              <h1 className="text-[#CED5E5] text-center text-3xl not-italic font-bold">One-Time-Password</h1>
              <p className="text-[#B2B2B2] font-medium text-sm">Your OTP has been sent on your registered mobile number</p>
              <p className="text-white">
                {' '}
                [
                {userCountryCode}
                {' '}
                *** ***
                {userMobile.slice(-4)}
                ]
              </p>
            </div>
            <P className="mb-1 font-normal text-xs text-white">OTP</P>
            <div className="flex flex-col sm:flex-row mt-2 gap-y-2">
              <div>
                {inputs.map((input, index) => (
                  <input
                            // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    type="text"
                    value={input}
                    name={`otp${index}`}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyUp={(e) => handleKeyUp(e, index)}
                    ref={inputRefs.current[index]}
                    className={`w-12 h-12 text-lg bg-[#223544D9] bg-opacity-85 !text-[#B2B2B2] border !border-[#E1E1E140] text-center font-bold rounded-md overflow-ellipsis autofill:!bg-[#223544D9] focus:border-primary focus:outline-none rounded-xs mr-4 ${inputs[index] === '' && !otpError ? ' border-red-500 border-2' : ''}`}
                  />
                ))}
              </div>
            </div>
            <Button type="submit" kind="primary" isLoading={showLoader} className={`w-full mt-4 ${showLoader && ''}`}>
              Proceed
            </Button>

            <div className="text-white mt-8 text-center">
              {
                seconds > 0
                && (
                <P>
                  {seconds}
                  {' '}
                  Seconds remaining
                </P>
                )
              }
              {
                !seconds
                && (
                <div onClick={resendOTP}>
                  <P className="font-medium text-[#CED5E5] text-lg text-center">
                    Didn’t receive OTP?
                    <span className="cursor-pointer text-[#FDE8E1]">Resend</span>
                  </P>
                </div>
                )
              }
            </div>
          </div>
          )
        }
      </div>
    </form>
  );
}

export default OTP;
