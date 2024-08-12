/* eslint-disable max-len */
import { useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  FaCheck, FaCircle, FaEye, FaEyeSlash,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { LoginContext } from 'context/LoginContext';
import Button from 'components/ui/Button';
import Input from 'rolnew/ui/Input';
import P from '../typography/P';
import api from '../utils/api';
import { Pic } from '../ui/Pic';
import 'react-toastify/dist/ReactToastify.css';

function EmailPassword({
  loggedIn, loginPage = false, bookerPassword, passwordExistsStatus, setAuthType = () => {},
}) {
  const { setShowLogin, setUserName, setIsNewUser } = useContext(LoginContext);

  const [meter, setMeter] = useState(false);
  const [password, setPassword] = useState('');
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
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const [loginLabel, setLoginLabel] = useState('Sign in');
  const [passwordLabel, setPasswordLabel] = useState('Enter password');
  const [emailExists, setEmailExists] = useState(true);
  const [showGreentick, setShowGreentick] = useState(false);
  const [passwordExists, setPasswordExists] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  async function checkEmail(value) {
    // setEmailExists(null);
    // eslint-disable-next-line no-useless-escape
    const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = value;
    if (email.length > 0 && email.match(emailRegx)) {
      setShowLoader(true);
      const response = await api.post('/auth/check', { email });
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
    }
  }

  const onSubmit = async (data) => {
    await checkEmail(data.email);
    let response;
    if (data.email && password) {
      if (emailExists && passwordExists && password) {
        response = await api.post('/auth/email-login', {
          useremailid: data.email, password,
        });
        if (response.status !== 500 && response.data.Authorization) {
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
          loggedIn(true);
          setShowLogin(true);
          setUserName(userfname);
          passwordExistsStatus(true);
          setAuthType('BASIC');
          Cookies.set('authtype', 'BASIC');
          if (loginPage) {
            router.refresh();
            router.push('/booking-management');
          }
        } else {
          toast.error(
            response.message,
            {
              autoClose: 3000,
              theme: 'colored',
            },
          );
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
            email: data.email, password,
          });
          if (response.status !== 500 && response.data.Authorization) {
            const {
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
          setIsNewUser(true);
          const tempUser = await api.post('/auth/email-signup/temp', {
            useremailid: data.email,
            password,
            authtype: 'BASIC',
            usertype: 'PRIVATE_CLIENT',
          });
          bookerPassword(password);
          if (tempUser?.data?.Authorization) {
            loggedIn(true);
            setShowLogin(true);
            passwordExistsStatus(true);
            setAuthType('BASIC');
            Cookies.set('authtype', 'BASIC');
            sessionStorage.setItem('token', tempUser.data.Authorization);
          }
          sessionStorage.setItem('user', JSON.stringify({
            useremailid: data.email,
          }));
          loggedIn(true);
          passwordExistsStatus(false);
          setAuthType('BASIC');
          Cookies.set('authtype', 'BASIC');
          router.refresh();
        }
      }
    }
  };

  const formMethods = useForm();

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
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="text-left relative flex flex-col gap-y-4 w-auto">
          <div className=" relative w-full">
            {/* <input placeholder="Enter your email" {...register('email', { required: true, autoComplete: 'off' })} autoComplete="new-password" className="w-full input  focus:border-primary text-[#B2B2B2] text-sm font-medium bg-white bg-opacity-10 rounded-lg border border-neutral-200 border-opacity-25 focus:outline-none" onBlur={(e) => { checkEmail(e.target.value); }} /> */}
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
            {
            showLoader
            && (
            <div
              className="absolute inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current text-[#B2B2B2] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] right-3 top-10"
              role="status"
            >
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >
                Loading...
              </span>
            </div>
            )
          }
            {
            showGreentick && !loginPage && <FaCheck className="text-green-500 absolute top-1/3 right-2" />
          }
            {errors.email && <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">{errors?.email?.message}</P>}
          </div>
          <div className="relative">
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
            {/* <input
              onFocus={() => setMeter(true)}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder={passwordLabel}
              value={password}
              name="password"
              autoComplete="new-password"
              className="w-full input focus:border-primary text-[#B2B2B2] text-sm font-medium bg-white bg-opacity-10 rounded-lg border border-neutral-200 border-opacity-25 focus:outline-none"
            /> */}
            {/* <div className="py-2 relative z-0">
            <input
              id="floating_standard"
              onFocus={() => setMeter(true)}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
                // placeholder={passwordLabel}
              value={password}
              name="password"
              autoComplete="new-password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
            /> */}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            {/* <label
              htmlFor="floating_standard"
              className="absolute text-neutral-400 text-base font-normal font-['Segoe UI'] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-neutral-500 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Enter
              password
            </label>
          </div> */}
            {!showPassword && (
            <FaEyeSlash
              className="absolute w-4 h-4 transform cursor-pointer text-[#B2B2B2] top-10 right-2"
              onClick={() => {
                setShowPassord(true);
              }}
            />
            )}
            {showPassword && (
            <FaEye
              className="absolute w-4 h-4 transform -translate-y-1/2 cursor-pointer text-[#B2B2B2] top-1/2 right-1"
              onClick={() => {
                setShowPassord(false);
              }}
            />
            )}
            {errors.password && <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">{errors?.password?.message}</P>}
          </div>
          {/* {
            showPasswordError && (
            <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">Password required</P>
            )
        } */}
          {meter && !passwordExists && (
          <div className="flex sm:flex-row flex-col justify-between">
            <div className="mt-3">
              <div
                className={`!text-xs font-semibold flex items-center ${passwordTracker.uppercase ? 'text-success' : 'text-red-500'}`}
              >
                {
                    passwordTracker.uppercase
                      ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic src="/images/icons/green-tick.png" className="object-contain" alt="green-tick" />
                        </div>
                      )
                      : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )

                  }
                Atleast one-uppercase
              </div>
              <div
                className={`!text-xs font-semibold flex items-center ${passwordTracker.lowercase ? 'text-success' : 'text-red-500'}`}
              >
                {
                    passwordTracker.lowercase
                      ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic src="/images/icons/green-tick.png" className="object-contain" alt="green-tick" />
                        </div>
                      )
                      : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )
                  }
                Atleast one-lowercase
              </div>
              <div
                className={`!text-xs font-semibold flex items-center ${passwordTracker.specialChar ? 'text-success' : 'text-red-500'}`}
              >
                {
                    passwordTracker.specialChar
                      ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic src="/images/icons/green-tick.png" className="object-contain" alt="green-tick" />
                        </div>
                      )
                      : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )
                  }
                Atleast one special character.
              </div>
            </div>
            <div className="sm:pt-3">
              <div
                className={`!text-xs font-semibold flex items-center ${passwordTracker.number ? 'text-success' : 'text-red-500'}`}
              >
                {
                    passwordTracker.number
                      ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic src="/images/icons/green-tick.png" className="object-contain" alt="green-tick" />
                        </div>
                      )
                      : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )
                  }
                Atleast one number.
              </div>
              <div
                className={`!text-xs font-semibold flex items-center ${passwordTracker.eightCharsOrGreater ? 'text-success' : 'text-red-500'}`}
              >
                {
                    passwordTracker.eightCharsOrGreater
                      ? (
                        <div className="w-3 h-3 mr-1">
                          <Pic src="/images/icons/green-tick.png" className="object-contain" alt="green-tick" />
                        </div>
                      )
                      : (
                        <div className="w-3 h-3 mr-1">
                          <FaCircle className="text-[9px]" />
                        </div>
                      )
                  }
                Atleast eight characters or more.
              </div>
            </div>

          </div>
          )}
          <Button
            type="submit"
            kind="primary"
            isLoading={showLoader}
            className={`w-full mt-5 capitalize ${showLoader && ''} ${(!passwordTracker.uppercase || !passwordTracker.lowercase || !passwordTracker.specialChar || !passwordTracker.number || !passwordTracker.eightCharsOrGreater) && !passwordExists && ''}`}
          >
            {loginLabel}
          </Button>
        </form>
      </FormProvider>
    </>
  );
}

export default EmailPassword;
