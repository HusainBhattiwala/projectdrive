import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { isValidNumber } from 'libphonenumber-js';
import PhoneInput from 'react-phone-input-2';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Button from '../../ui/Button';
import P from '../../typography/P';
import 'react-toastify/dist/ReactToastify.css';

export default function EditProfilePage({
  isOpen,
  onUpdate,
  profile,
  onRequestClose,
  setModal = () => {},
}) {
  const divRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [showLoader, setShowLoader] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm();

  const [profileData, setProfileData] = useState({
    orgName: profile?.orgName || '',
    userFname: profile?.userFname || '',
    userLname: profile?.userLname || '',
    orgEmail: profile?.orgEmail || '',
    userPhone: profile?.userPhone,
    orgAddrLine1: profile?.orgAddrLine1 || '',
    billingAddressLine1: profile?.billingAddressLine1 || '',
    billingAddressLine2: profile?.billingAddressLine2 || '',
    orgAddrLine2: profile?.orgAddrLine2 || '',
    orgCity: profile?.orgCity || '',
    orgCountry: profile?.orgCountry || '',
    orgPostalCode: profile?.orgPostalCode || '',
    password: profile?.password || '',
    costCenter: profile?.costCenter || '',
    pocFname: profile?.pocFname || '',
    pocLname: profile?.pocLname || '',
    orgEmailId: profile?.orgEmailId || '',
    orgCountryCode: profile?.orgCountryCode || '',
    orgPhone: profile?.orgPhone || '',
    presentAddressSameAsPermanent: false,
  });

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

  useEffect(() => {
    setValue('orgName', profile?.orgName || '');
    setValue('pocFname', profile?.orgPocFname || '');
    setValue('pocLname', profile?.orgPocLname || '');
    setValue('orgEmailId', profile?.orgEmail || '');
    setValue('orgPhone', profile?.orgPhone || '');
    setValue('orgCountryCode', profile?.orgCountryCode || '');
    setValue('orgAddrLine1', profile?.orgAddressLine1 || '');
    setValue('orgAddrLine2', profile?.orgAddressLine2 || '');
    setValue('orgCity', profile?.orgCity || '');
    setValue('orgCountry', profile?.orgCountry || '');
    setValue('orgPostalCode', profile?.orgPostalCode || '');
    setValue('password', profile?.password || '');
    setValue('costCenter', profile?.costCenter || '');
    setValue('billingAddressLine1', profile?.billingAddressLine1 || '');
    setValue('billingAddressLine2', profile?.billingAddressLine2 || '');
    setValue('billingAddressTown', profile?.billingAddressTown || '');
    setValue('billingAddressPostCode', profile?.billingAddressPostCode || '');
    setValue('billingAddressCountry', profile?.billingAddressCountry || '');
    divRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }, [setValue, profile]);

  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => {
    setModal((prev) => ({ ...prev, enabled: false }));
  });

  useEffect(() => {
    setProfileData((prevData) => ({
      ...prevData,
      orgPhone: profile?.orgPhone || '',
      pocFname: profile?.orgPocFname || '',
      pocLname: profile?.orgPocLname || '',
      orgEmailId: profile?.orgEmail || '',
      orgCountryCode: profile?.orgCountryCode || '',
      orgCountry: profile?.orgCountry || '',
      orgPostalCode: profile?.orgPostalCode || '',
      orgCity: profile?.orgCity || '',
      orgAddrLine1: profile?.orgAddressLine1 || '',
      orgAddrLine2: profile?.orgAddressLine2 || '',
      costCenter: profile?.costCenter || '',
      billingAddressLine1: profile?.billingAddressLine1 || '',
      billingAddressLine2: profile?.billingAddressLine2 || '',
      billingAddressTown: profile?.billingAddressTown || '',
      billingAddressPostCode: profile?.billingAddressPostCode || '',
      billingAddressCountry: profile?.billingAddressCountry || '',
      password: profile?.password || '',
      orgName: profile?.orgName || '',
    }));
  }, [profile]);

  const handleFormSubmit = async (data) => {
    const payload = {
      pocFname: data?.pocFname || '',
      pocLname: data?.pocLname || '',
      orgEmailId: data?.orgEmailId || '',
      orgCountryCode: data?.orgCountryCode
        ? `+${Number(data?.orgCountryCode)}`
        : '',
      orgPhone: getMobileNumber(data?.orgPhone, data?.orgCountryCode) || '', // Update the name here
      orgAddrLine1: data?.orgAddrLine1 || '',
      orgAddrLine2: data?.orgAddrLine2 || '',
      costCenter: data?.costCenter || '',
      orgCountry: data?.orgCountry || '',
      orgPostalCode: data?.orgPostalCode || '',
      orgCity: data?.orgCity || '',
      orgName: data?.orgName || '',
      billingAddressLine1: data?.billingAddressLine1 || '',
      billingAddressLine2: data?.billingAddressLine2 || '',
      billingAddressTown: data?.billingAddressTown || '',
      billingAddressPostCode: data?.billingAddressPostCode || '',
      billingAddressCountry: data?.billingAddressCountry || '',
    };
    onUpdate(payload);
  };

  const handlePresentAddressCheck = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // Copy permanent address to present address
      setValue('billingAddressLine1', profileData.orgAddrLine1);
      setValue('billingAddressLine2', profileData.orgAddrLine2);
      setValue('billingAddressTown', profileData.orgCity);
      setValue('billingAddressPostCode', profileData.orgPostalCode);
      setValue('billingAddressCountry', profileData.orgCountry);
    } else {
      // Clear present address
      setValue('billingAddressLine1', '');
      setValue('billingAddressLine2', '');
      setValue('billingAddressTown', '');
      setValue('billingAddressPostCode', '');
      setValue('billingAddressCountry', '');
    }

    setProfileData((prevData) => ({
      ...prevData,
      presentAddressSameAsPermanent: isChecked,
    }));
  };

  const checkMobileNumber = (value, countryData) => {
    const newNumber = getMobileNumber(value, countryData.dialCode);
    if (newNumber) {
      if (
        isValidNumber(newNumber, countryData.countryCode.toUpperCase())
        && newNumber.length > 9
      ) {
        clearErrors('invalidMobile');
      } else {
        setError('invalidMobile', {
          type: 'custom',
          message: 'Phone number is not valid',
        });
      }
    } else {
      setValue('orgPhone', '');
      clearErrors('invalidMobile');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* <ToastContainer
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
      /> */}
      <div className="fixed w-full h-full bg-[rgba(0,0,0,0.5)] flex z-[999] justify-center items-center left-0 top-0 transition-[filter] duration-[0.3s]">
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 modal-box max-w-[900px] sm:max-w-[900px]">
            <div className="flex flex-row w-full justify-between items-center">
              <h3 className="text-xl font-bold ml-6 text-primary mb-5">
                Edit Profile Details
              </h3>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="p-2 mt-[-5px] ml-auto rounded-full cursor-pointer text-primary font-extrabold w-10 h-10 hover:bg-red-100"
                onClick={() => {
                  onRequestClose();
                  reset();
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
                onSubmit={handleSubmit(handleFormSubmit)}
                className="w-full rounded-lg"
              >
                <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                  <div className="col-span-2">
                    <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                      Company Name
                      <span className="text-base font-medium text-red-600">
                        {' '}
                        *
                      </span>
                    </P>
                    <div className="relative">
                      <input
                        type="text"
                        {...register('orgName')}
                        defaultValue={profileData.orgName}
                        className="input input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-4 gap-4 rounded-md">
                      <div className="col-span-2 rounded-md">
                        <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                          First Name
                        </P>
                        <input
                          type="text"
                          {...register('pocFname', {
                            required: 'First name is required',
                          })}
                          defaultValue={profileData.pocFname}
                          onChange={inputCharacterOnly}
                          placeholder="Enter your first name"
                          className="w-full text-start input input-bordered font-medium focus:outline-none pr-0 text-sm sm:text-[1rem]"
                        />
                        {errors.pocFname && (
                          <span className="text-red-500">
                            {errors.pocFname.message}
                          </span>
                        )}
                      </div>
                      <div className="col-span-2 rounded-md text-sm">
                        <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                          Last Name
                        </P>
                        <input
                          type="text"
                          {...register('pocLname', {
                            required: 'Last name is required',
                          })}
                          defaultValue={profileData.pocLname}
                          onChange={inputCharacterOnly}
                          placeholder="Enter your last name"
                          className="w-full text-start input input-bordered font-medium focus:outline-none pr-0 text-sm sm:text-[1rem]"
                        />
                        {errors.pocLname && (
                          <span className="text-red-500">
                            {errors.pocLname.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="col-span-2">
                      <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                        Mobile Number
                      </P>
                      <div className="relative">
                        <PhoneInput
                          {...register('orgPhone')}
                          enableSearch
                          autoFormat={false}
                          enableAreaCodes
                          inputProps={{
                            name: 'orgPhone',
                            required: false,
                            autoFocus: false,
                            autoComplete: 'off',
                          }}
                          name="orgPhone"
                          countryCodeEditable={false}
                          value={`${profileData.orgCountryCode}${profileData.orgPhone}`}
                          country="gb"
                          countryCode="gb"
                          onChange={(value, country) => {
                            setValue('orgCountryCode', country.dialCode);
                            setValue('orgPhone', value);
                            clearErrors('orgPhone');
                            clearErrors('invalidMobile');
                            checkMobileNumber(value, country);
                          }}
                          inputClass="input input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                        />
                        {errors.orgPhone && (
                          <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                            {errors.orgPhone.message}
                          </P>
                        )}
                        {errors.invalidMobile && (
                          <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                            Invalid mobile number
                          </P>
                        )}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                        Email ID
                        <span className="text-base font-medium text-red-600">
                          {' '}
                          *
                        </span>
                      </P>
                      <div className="relative">
                        <input
                          type="email"
                          {...register('orgEmailId', {
                            required: 'Email is required',
                          })}
                          defaultValue={profileData.orgEmailId}
                          placeholder="Your Email address"
                          className="input input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                        />
                      </div>
                      {errors.orgEmailId && (
                        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                          {errors.orgEmailId.message}
                        </P>
                      )}
                    </div>
                    <div className="col-span-2">
                      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                        Cost Center
                      </P>
                      <div className="relative">
                        <input
                          type="text"
                          {...register('costCenter')}
                          defaultValue={profileData.costCenter}
                          placeholder="Cost center"
                          className="input input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                        Company Address Line 1
                      </P>
                      <div className="relative">
                        <input
                          type="text"
                          {...register('orgAddrLine1')}
                          defaultValue={profileData.orgAddrLine1}
                          className="input input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                        Company Address Line 2
                      </P>
                      <div className="relative">
                        <input
                          type="text"
                          {...register('orgAddrLine2')}
                          defaultValue={profileData.orgAddrLine2}
                          className="input input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex justify-between gap-1 py-2">
                        <div className="boxes w-auto">
                          <div className="tracking-[-0.01em] mb-2 ml-1 font-medium">
                            <span className="text-[14px] text-neutral-500">
                              City
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="City"
                            {...register('orgCity')}
                            defaultValue={profileData.orgCity}
                            className="input input-bordered w-full bg-white text-sm font-medium focus:outline-none sm:text-[1rem]"
                          />
                          {errors.orgCity && (
                            <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                              {errors.orgCity.message}
                            </p>
                          )}
                        </div>
                        <div className="boxes w-auto">
                          <div className="tracking-[-0.01em] mb-2 ml-1 font-medium">
                            <span className="text-[14px] text-neutral-500">
                              Country
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="Country"
                            {...register('orgCountry')}
                            defaultValue={profileData.orgCountry}
                            className="input input-bordered w-full bg-white text-sm font-medium focus:outline-none sm:text-[1rem]"
                          />
                          {errors.orgCountry && (
                            <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                              {errors.orgCountry.message}
                            </p>
                          )}
                        </div>
                        <div className="boxes w-auto">
                          <div className="tracking-[-0.01em] mb-2 ml-1 font-medium">
                            <span className="text-[14px] text-neutral-500">
                              Zip Code
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="Zip Code"
                            {...register('orgPostalCode')}
                            defaultValue={profileData.orgPostalCode}
                            className="input input-bordered w-full bg-white text-sm font-medium focus:outline-none sm:text-[1rem]"
                          />
                          {errors.orgPostalCode && (
                            <p className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                              {errors.orgPostalCode.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 mt-4 mb-4 flex items-center">
                      <input
                        type="checkbox"
                        checked={profileData.presentAddressSameAsPermanent}
                        onChange={handlePresentAddressCheck}
                        className="mr-2"
                        style={{ transform: 'scale(1.5)' }}
                      />
                      <P className="text-neutral-700 text-base font-medium capitalize">
                        Billing Address same as company address
                      </P>
                    </div>
                    <div className="col-span-2">
                      <P className="py-2 text-sm font-medium capitalize text-neutral-500">
                        Billing Address Line 1
                      </P>
                      <div className="relative">
                        <input
                          type="text"
                          id="billingAddressLine1"
                          {...register('billingAddressLine1')}
                          defaultValue={profileData.billingAddressLine1}
                          className="input input-bordered w-full bg-white text-sm font-medium focus:outline-none sm:text-[1rem]"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <P className="py-2 text-sm font-medium capitalize text-neutral-500">
                        Billing Address Line 2
                      </P>
                      <div className="relative">
                        <input
                          type="text"
                          id="billingAddressLine2"
                          {...register('billingAddressLine2')}
                          defaultValue={profileData.billingAddressLine2}
                          className="input input-bordered w-full bg-white text-sm font-medium focus:outline-none sm:text-[1rem]"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex justify-between gap-1 py-2">
                        <div className="boxes w-auto">
                          <P className="tracking-[-0.01em] mb-2 ml-1 font-medium text-[14px] text-neutral-500">
                            City
                          </P>
                          <input
                            type="text"
                            id="billingAddressTown"
                            placeholder="City"
                            {...register('billingAddressTown')}
                            defaultValue={profileData.billingAddressTown}
                            className="input input-bordered w-full bg-white text-sm font-medium focus:outline-none sm:text-[1rem]"
                          />
                        </div>
                        <div className="boxes w-auto">
                          <P className="tracking-[-0.01em] mb-2 ml-1 font-medium text-[14px] text-neutral-500">
                            Country
                          </P>
                          <input
                            type="text"
                            id="billingAddressCountry"
                            placeholder="Country"
                            {...register('billingAddressCountry')}
                            defaultValue={profileData.billingAddressCountry}
                            className="input input-bordered w-full bg-white text-sm font-medium focus:outline-none sm:text-[1rem]"
                          />
                        </div>
                        <div className="boxes w-auto">
                          <P className="tracking-[-0.01em] mb-2 ml-1 font-medium text-[14px] text-neutral-500">
                            Zip Code
                          </P>
                          <input
                            type="text"
                            id="billingAddressPostCode"
                            placeholder="Zip Code"
                            {...register('billingAddressPostCode')}
                            defaultValue={profileData.billingAddressPostCode}
                            className="input input-bordered w-full bg-white text-sm font-medium focus:outline-none sm:text-[1rem]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-center py-6">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
