/* eslint-disable max-len */
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaCheck, FaCircle, FaEye, FaEyeSlash,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { LoginContext } from 'context/LoginContext';
import Input from 'rolnew/ui/Input';
import P from '../typography/P';
import Button from '../ui/Button';
import api from '../utils/api';
import { Pic } from '../ui/Pic';
import 'react-toastify/dist/ReactToastify.css';

function CorporateEmailPassword({
  loggedIn,
  loginPage,
  bookerPassword,
  passwordExistsStatus,
  setAuthType = () => {},
}) {
  const { setShowLogin, setUserName } = useContext(LoginContext);

  const [meter, setMeter] = useState(false);
  const [password, setPassword] = useState('');
  const [showValidEmailError, setShowValidEmailError] = useState(false);
  const [showPassword, setShowPassord] = useState(false);

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

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm();

  const router = useRouter();

  const [loginLabel, setLoginLabel] = useState('Sign in');
  const [passwordLabel, setPasswordLabel] = useState('Enter password');
  const [emailExists, setEmailExists] = useState(true);
  const [showGreentick, setShowGreentick] = useState(false);
  const [passwordExists, setPasswordExists] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  async function checkEmail(value) {
    // setEmailExists(null);
    // eslint-disable-next-line no-useless-escape
    const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = value;
    if (email.length > 0 && email.match(emailRegx)) {
      setShowValidEmailError(false);
      setShowLoader(true);
      const response = await api.post('/auth/check', {
        email,
        usertype: 'corporate',
      });
      if (response.data.exists !== 1 && !loginPage) {
        setLoginLabel('Sign up');
        setPasswordLabel('Create password');
        setEmailExists(false);
        setPasswordExists(false);
      } else if (response.data.has_password === 0 && !loginPage) {
        setLoginLabel('Sign up with password');
        setPasswordLabel('Create password');
        setEmailExists(true);
        setPasswordExists(false);
        setShowGreentick(true);
      } else {
        setLoginLabel('Sign in');
        setPasswordLabel('Enter password');
        setEmailExists(true);
        setPasswordExists(true);
        setShowGreentick(true);
      }
      setShowLoader(false);
    } else {
      setShowValidEmailError(true);
    }
  }

  const onSubmit = async (data) => {
    await checkEmail(data.email);
    let response;
    if (data.email && password) {
      if (emailExists && passwordExists && password) {
        response = await api.post('/auth/corporate/email-login', {
          useremailid: data.email,
          password,
        });
        if (response.status !== 500 && response.data.Authorization) {
          const {
            user_fname: userfname,
            user_lname: userlname,
            useremailid,
            usermobileno,
            usercountrycode,
            usertype,
          } = response.data;
          sessionStorage.setItem('token', response.data.Authorization);
          sessionStorage.setItem(
            'roles',
            JSON.stringify(response.data.user_role),
          );
          sessionStorage.setItem(
            'user',
            JSON.stringify({
              userfname,
              userlname,
              useremailid,
              usermobileno,
              usercountrycode,
              usertype,
            }),
          );
          loggedIn(true);
          setShowLogin(true);
          setUserName(userfname);
          passwordExistsStatus(true);
          setAuthType('BASIC');
          Cookies.set('authtype', 'BASIC');
          if (loginPage) {
            router.refresh();
            router.push('/corporate/booking-summary');
          }
        } else {
          toast.error(response.message, {
            autoClose: 3000,
            theme: 'colored',
          });
        }
      } else if (
        passwordTracker.eightCharsOrGreater
          && passwordTracker.lowercase
          && passwordTracker.number
          && passwordTracker.specialChar
          && passwordTracker.uppercase
      ) {
        if (emailExists) {
          response = await api.post('/auth/password', {
            email: data.email,
            password,
          });
          if (response.status !== 500 && response.data.Authorization) {
            const {
              user_fname: userfname,
              user_lname: userlname,
              useremailid,
              usermobileno,
              usercountrycode,
            } = response.data;
            sessionStorage.setItem('token', response.data.Authorization);
            sessionStorage.setItem(
              'user',
              JSON.stringify({
                userfname,
                userlname,
                useremailid,
                usermobileno,
                usercountrycode,
              }),
            );
            loggedIn(true);
            setShowLogin(true);
            setUserName(userfname);
            passwordExistsStatus(true);
            setAuthType('BASIC');
            Cookies.set('authtype', 'BASIC');
            if (loginPage) {
              router.refresh();
              router.push('/corporate/booking-summary');
            }
          }
        } else {
          bookerPassword(password);
          sessionStorage.setItem(
            'user',
            JSON.stringify({
              useremailid: data.email,
            }),
          );
          loggedIn(true);
          passwordExistsStatus(false);
          setAuthType('BASIC');
          Cookies.set('authtype', 'BASIC');
          router.refresh();
        }
      }
    } else {
      setShowPasswordError(true);
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="text-left relative">
        <div className=" relative w-full">

          <Input
            {...register('email', {
              required: { value: true, message: 'Email is required' },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email format',
              },
              autoComplete: 'off',
            })}
            onBlur={(e) => {
              checkEmail(e.target.value);
            }}
            onChange={(e) => {
              setValue('email', e.target.value, { shouldValidate: true });
              clearErrors('email');
            }}
            leadingIcon="/rolnew/global/icons/mail.svg"
            label="Email"
            placeholder="Enter your email"
            type="email"
            readOnly={showLoader}
          />

          {/* <input
            placeholder="Enter email"
            {...register('email', { required: true, autoComplete: 'off' })}
            autoComplete="new-password"
            className="w-full input input-bordered focus:border-primary focus:outline-none"
            onBlur={(e) => {
              checkEmail(e.target.value);
            }}
          /> */}
          {showLoader && (
            <div
              className="absolute inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current text-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] right-3 top-5"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
          {showGreentick && !loginPage && (
            <FaCheck className="text-green-500 absolute top-1/3 right-2" />
          )}
          {errors.email && (
            <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
              {errors?.email?.message}
            </P>
          )}
          {showValidEmailError && (
            <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
              Not a valid email
            </P>
          )}
        </div>
        <div className="relative mt-5">
          {/* <input
            onFocus={() => setMeter(true)}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder={passwordLabel}
            value={password}
            name="password"
            autoComplete="new-password"
            className="w-full input input-bordered focus:border-primary focus:outline-none"
          /> */}

          <Input
            {...register('password', {
              required: { value: true, message: 'Password is required' },
              autoComplete: 'off',
            })}
            onFocus={() => setMeter(true)}
            onChange={(e) => { setPassword(e.target.value); setValue('password', e.target.value); clearErrors('password'); }}
            type={showPassword ? 'text' : 'password'}
            leadingIcon="/rolnew/global/icons/lock-open.svg"
            label="Password"
            placeholder={passwordLabel}
          />
          {errors.password && <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">{errors?.password?.message}</P>}

          {!showPassword && (
            <FaEyeSlash
              className="absolute w-4 h-4 transform top-10 cursor-pointer right-2 text-[#B2B2B2]"
              onClick={() => {
                setShowPassord(true);
              }}
            />
          )}
          {showPassword && (
            <FaEye
              className="absolute w-4 h-4 transform top-10 cursor-pointer right-2 text-[#B2B2B2]"
              onClick={() => {
                setShowPassord(false);
              }}
            />
          )}
        </div>
        {showPasswordError && (
          <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
            Password required
          </P>
        )}
        {meter && !passwordExists && (
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
                  passwordTracker.specialChar ? 'text-success' : 'text-red-500'
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
        <Button
          type="submit"
          kind="primary"
          isLoading={showLoader}
          className={`w-full mt-5 ${showLoader && ''} ${
            (!passwordTracker.uppercase
                      || !passwordTracker.lowercase
                      || !passwordTracker.specialChar
                      || !passwordTracker.number
                      || !passwordTracker.eightCharsOrGreater)
                  && !passwordExists
                  && ''
          }`}
        >
          {loginLabel}
        </Button>
        <div className="cursor-pointer my-3 w-full text-center">
          <p
            className="text-primary font-semibold underline tooltip tooltip-primary !text-[14px]"
            data-tip="You can always login with an OTP, then go to your profile and change your password."
          >
            Forgot password?
          </p>
        </div>
      </form>
    </>
  );
}

export default CorporateEmailPassword;
