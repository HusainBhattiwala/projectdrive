'use client';

import {
  useContext, useEffect, useRef, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { isValidNumber } from 'libphonenumber-js';
import PhoneInput from 'react-phone-input-2';
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from 'context/LoginContext';
import H4 from '../typography/H4';
import P from '../typography/P';
import Button from '../ui/Button';
import { Pic } from '../ui/Pic';
import api from '../utils/api';
import 'react-toastify/dist/ReactToastify.css';

function getMobileNumber(phone, country) {
  const newPhone = phone.replace('+', '');
  const formattedCountry = country.replace('+', '');
  const formattedNumber = newPhone.replace(formattedCountry, '');
  return formattedNumber;
}

const inputCharacterOnly = (event) => {
  const { value } = event.target;
  const sanitizedValue = value.replace(/[^A-Za-z\s]/gi, '');
  // eslint-disable-next-line no-param-reassign
  event.target.value = sanitizedValue;
};

function EditProfile({ cancelEdit, userDetails }) {
  const divRef = useRef(null);
  const [showLoader, setShowLoader] = useState(false);
  const { setUserName } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm();
  useEffect(() => {
    divRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setValue('mobileno', `${userDetails.user_country_code}${userDetails.user_mobile_no}`);
    setValue('countrycode', `${userDetails.user_country_code}`);
  }, [setValue, userDetails.user_country_code, userDetails.user_mobile_no]);
  const onSubmit = async (data) => {
    const countryCode = `+${Number(data.countrycode)}`;
    const mobile = getMobileNumber(data.mobileno, data.countrycode);
    setShowLoader(true);
    const payload = {
      fname: data.fname,
      lname: data.lname,
      usermobileno: mobile,
      usercountrycode: countryCode,
      address_line_1: data.address1,
      address_line_2: data.address2,
      city: data.city,
      city_state: data.state,
      zip_code: data.zip,
      telephone: data.telephone,
      authtype: 'BASIC',
      usertype: 'PRIVATE_CLIENT',
    };
    const response = await api.put('/auth/user', { ...payload });
    if (response.data && response.data.Authorization) {
      setUserName(response.data.user_fname);
      sessionStorage.setItem('token', response.data.Authorization);
      sessionStorage.setItem('user', JSON.stringify({
        userfname: response.data.user_fname,
        userlname: response.data.user_lname,
        useremailid: response.data.useremailid,
        usermobileno: response.data.usermobileno,
        usercountrycode: response.data.usercountrycode,
      }));
      toast.success(
        'Profile Updated successfully',
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    } else {
      toast.error(
        'Something went wrong',
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    }
    setShowLoader(false);
  };

  async function checkMobileNumber(value, countryData) {
    if (value) {
      const newNumber = getMobileNumber(value, countryData.dialCode);
      if (isValidNumber(newNumber, countryData.countryCode.toUpperCase()) && newNumber.length > 9) {
        clearErrors('invalidMobile');
      } else {
        setError('invalidMobile', { type: 'custom', message: 'Phone number is not valid' });
      }
    } else {
      setValue('mobileno', '');
    }
  }

  return (
    <>
      <ToastContainer
        limit={1}
        onClose={cancelEdit}
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
      <div
        className="xl:px-[82px] lg:px-12 px-6 xl:py-[80px] py-8 bg-white"
        ref={divRef}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-x-4 gap-y-8">
            <div className="col-span-4 sm:col-span-2">
              <div className="flex items-center">
                <div className="w-[16px]">
                  <Pic src="/images/icons/user.svg" alt="user" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  First Name *
                </H4>
              </div>
              <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  {...register('fname', { required: 'First name is required' })}
                  defaultValue={userDetails.user_fname}
                  placeholder="Your first name"
                  className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                  onChange={inputCharacterOnly}
                />
              </div>

              {errors && errors.fname && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.fname.message}
              </P>
              )}
            </div>

            <div className="col-span-4 sm:col-span-2">
              <div className="flex items-center">
                <div className="w-[16px]">
                  <Pic src="/images/icons/user.svg" alt="user" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  Last Name *
                </H4>
              </div>
              <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  {...register('lname', { required: 'Last name is required' })}
                  defaultValue={userDetails.user_lname}
                  placeholder="Your first name"
                  className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                  onChange={inputCharacterOnly}
                />
              </div>
              {errors && errors.lname && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.lname.message}
              </P>
              )}
            </div>
            <div className="col-span-4">
              <div className="flex items-end">
                <div className="w-[22px]">
                  <Pic src="/images/icons/home.svg" alt="home" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  Address Line 1
                </H4>
              </div>
              <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  {...register('address1')}
                  defaultValue={userDetails.address_line_1}
                  placeholder="Address Line 1"
                  className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                />
              </div>
            </div>

            <div className="col-span-4">
              <div className="flex items-end">
                <div className="w-[22px]">
                  <Pic src="/images/icons/home.svg" alt="home" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  Address Line 2
                </H4>
              </div>
              <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  {...register('address2')}
                  defaultValue={userDetails.address_line_2}
                  placeholder="Address Line 2"
                  className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                />
              </div>
            </div>
            <div className="col-span-4 lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
                <div className="col-span-2 sm:col-span-1 ">
                  <div className="flex items-center">
                    <div className="w-[14px]">
                      <Pic src="/images/icons/locationprimary.svg" alt="Primary location" />
                    </div>
                    <H4 className="pl-1 font-bold text-black text-[16px]">
                      City
                    </H4>
                  </div>
                  <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                    <input
                      type="text"
                      {...register('city')}
                      defaultValue={userDetails.city}
                      placeholder="User city"
                      className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                    />
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 ">
                  <div className="flex items-center">
                    <div className="w-[14px]">
                      <Pic src="/images/icons/locationprimary.svg" alt="Primary location" />
                    </div>
                    <H4 className="pl-1 font-bold text-black text-[16px]">
                      State
                    </H4>
                  </div>
                  <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                    <input
                      type="text"
                      {...register('state')}
                      defaultValue={userDetails.city_state}
                      placeholder="User state"
                      className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                    />
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 ">
                  <div className="flex items-center">
                    <div className="w-[14px]">
                      <Pic src="/images/icons/locationprimary.svg" alt="Primary location" />
                    </div>
                    <H4 className="pl-1 font-bold text-black text-[16px]">Zip</H4>
                  </div>
                  <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                    <input
                      type="text"
                      {...register('zip')}
                      defaultValue={userDetails.zip_code}
                      placeholder="User zip"
                      className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-2">
              <div className="flex items-center">
                <div className="w-[16px]">
                  <Pic src="/images/icons/email.svg" alt="email" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  Email Address *
                </H4>
              </div>
              <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                <input
                  type="email"
                  readOnly
                  {...register('email', { required: 'Email is required' })}
                  defaultValue={userDetails.user_email_id}
                  placeholder="Your email address"
                  className="block w-full px-4 py-2 text-gray-500 placeholder-gray-400 bg-gray-100 border appearance-none form-input focus:outline-none"
                />
              </div>
              {errors && errors.email && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.email.message}
              </P>
              )}
            </div>
            <div className="col-span-4 lg:col-span-2">
              <div className="flex items-center mb-2">
                <div className="w-[14px]">
                  <Pic src="/images/icons/mobile.svg" alt="mobile" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  Mobile *
                </H4>
              </div>
              <PhoneInput
                {...register('mobileno', {
                  required: 'Mobile number is required',
                })}
                enableSearch
                autoFormat={false}
                enableAreaCodes
                inputProps={{
                  name: 'mobileno',
                  required: true,
                  autoFocus: false,
                  autoComplete: 'off',
                }}
                countryCodeEditable={false}
                value={`${userDetails.user_country_code}${userDetails.user_mobile_no}`}
                country="gb"
                countryCode="gb"
                // onChange={(value, country) => {
                //   // set value in react-hook-form
                //   setValue('mobileno', value);
                //   checkMobileNumber(value, country);
                // }}
                onChange={(_, country, event) => {
                  setValue('countrycode', country.dialCode);
                  setValue('mobileno', event.target.value);
                  clearErrors('mobileno');
                  clearErrors('invalidMobile');
                  checkMobileNumber(event.target.value, country);
                }}
                inputClass="focus:border-primary focus:outline-none"
              />
              {errors.mobileno && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                {errors.mobileno.message}
              </P>
              )}
              {errors.invalidMobile && (
              <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                Invalid mobile number
              </P>
              )}
              {/* <PhoneWithCountry
      register={register}
      errors={errors}
      countryCode="countrycode"
      mobileNo="mobileno"
      value={userDetails.user_mobile_no}
      country={
        userDetails.user_country_code
        && userDetails.user_country_code.replace('+', '')
      }
      checkMobileNumber={() => {}}
    /> */}
            </div>
            <div className="col-span-4 lg:col-span-2">
              <div className="flex items-center">
                <div className="w-[20px]">
                  <Pic src="/images/icons/telephone.svg" alt="telephone" />
                </div>
                <H4 className="pl-1 font-bold text-black text-[16px]">
                  Telephone:
                </H4>
              </div>
              <div className="relative block mt-3 text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  {...register('telephone')}
                  defaultValue={userDetails.telephone}
                  placeholder="Your telephone number"
                  className="w-full input input-bordered focus:border-primary focus:outline-none text-black"
                />
              </div>
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
                  className={`btn-primary sm:ml-5 w-full mt-2 sm:mt-0 sm:w-auto ${showLoader && ''}`}
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

export default EditProfile;
