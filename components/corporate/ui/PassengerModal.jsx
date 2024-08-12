import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { isValidNumber } from 'libphonenumber-js';
import { CgClose } from 'react-icons/cg';
import PhoneInput from 'react-phone-input-2';
import Button from 'components/ui/Button';
import useOnClickOutside from 'hooks/useOnClickOutside';
import P from 'components/typography/P';
import Input from 'components/ui/Input';
import CountriesAutocomplete from 'components/addressautocomplete/CountriesAutocomplete';
import api from 'components/utils/api';

export default function PassengerModal({
  isOpen,
  onRequestClose,
  onCreate,
  onUpdate,
  onDelete,
  passenger,
  setModal = () => {},
  deletePassenger,
}) {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();

  const [passengerData, setPassengerData] = useState({
    passengerFname: passenger?.passengerFname || '',
    passengerLname: passenger?.passengerLname || '',
    passengerMobile: passenger?.passengerMobile || '',
    passengerMobileCntrycd: passenger?.passengerMobileCntrycd || '',
    passengerAddress: passenger?.passengerAddress || '',
    passengerEmail: passenger?.passengerEmail || '',
    placeId: passenger?.placeId || '',
    coordinates: passenger?.coordinate || '',
    passengerAddressType: passenger?.passengerAddressType || '',
  });

  function getMobileNumber(phone, country) {
    if (phone) {
      const newPhone = phone.replace('+', '');
      const formattedCountry = country ? country.replace('+', '') : '';
      const formattedNumber = newPhone.replace(formattedCountry, '');
      return formattedNumber;
    }
    return '';
  }

  useEffect(() => {
    console.log(passenger.passengerMobile);
    setValue('passengerFname', passenger?.passengerFname || '');
    setValue('passengerLname', passenger?.passengerLname || '');
    // setValue('passengerMobile', passenger?.passengerMobile || '');
    setValue('passengerMobile', `${passenger.passengerMobile || ''}`);
    setValue(
      'passengerMobileCntrycd',
      `${passenger.passengerMobileCntrycd || ''}`,
    );
    setValue('passengerEmail', passenger?.passengerEmail || '');
    setValue('passengerAddressType', passenger?.passengerAddressType || '');
  }, [
    passenger?.passengerFname,
    passenger?.passengerLname,
    passenger?.passengerMobile,
    passenger.passengerMobileCntrycd,
    passenger?.passengerEmail,
    passenger?.passengerAddressType,
    setValue,
  ]);

  // Create a ref for detecting clicks outside the modal
  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => {
    // Close the modal when clicked outside
    setModal((prev) => ({ ...prev, enabled: false }));
  });

  // Set initial state when passenger prop changes

  useEffect(() => {
    setPassengerData((prevData) => ({
      ...prevData,
      passengerFname: passenger?.passengerFname || '',
      passengerLname: passenger?.passengerLname || '',
      passengerMobile: passenger?.passengerMobile || '',
      passengerEmail: passenger?.passengerEmail || '',
      placeId: passenger?.placeId || '',
      coordinates: passenger?.coordinates || null,
      passengerAddressType: passenger?.addrType || '',
    }));
    // Set the Home Address field specifically
    setPassengerData((prevData) => ({
      ...prevData,
      passengerAddress: passenger?.address || '',
    }));
    // Set the Latitude and Longitude fields if coordinates exist
    if (passenger?.coordinates) {
      setPassengerData((prevData) => ({
        ...prevData,
        coordinates: {
          lat: passenger.coordinates.lat || '',
          lng: passenger.coordinates.lng || '',
        },
      }));
    }
  }, [passenger]);

  const clearForm = () => {
    reset();
    setPassengerData({
      passengerFname: '',
      passengerLname: '',
      passengerMobile: '',
      passengerMobileCntrycd: '',
      passengerAddress: '',
      passengerEmail: '',
      placeId: '',
      coordinates: null,
      passengerAddressType: '',
    });
  };

  // Function to handle input changes and clear associated errors
  const handleInputChange = (e) => {
    const { name } = e.target;
    if (errors[name]) {
      clearErrors(name); // Clear the specific error when input changes
    }
  };

  // Function to handle form submission
  const handleFormSubmit = async (data) => {
    const countryCode = (data.passengerMobile && data.passengerMobileCntrycd) || '';
    const passengerPhoneNumber = getMobileNumber(data.passengerMobile, data.passengerMobileCntrycd) || '';
    const updatedPassenger = {
      ...passengerData,
      ...data,
      passengerMobileCntrycd: countryCode ? `+${Number(countryCode)}` : '',
      passengerMobile: passengerPhoneNumber,
      id: passenger.passengerId,
    };
    if (!data.passengerFname) {
      updatedPassenger.passengerFname = passengerData.passengerFname;
    }
    if (!data.passengerLname) {
      updatedPassenger.passengerLname = passengerData.passengerLname;
    }
    // if (!data.passengerMobile) {
    //   updatedPassenger.passengerMobile = getMobileNumber(passengerData.passengerMobile, countryCode);
    // }
    if (!data.passengerEmail) {
      updatedPassenger.passengerEmail = passengerData.passengerEmail;
    }
    if (!data.passengerAddress) {
      updatedPassenger.passengerAddress = passengerData.passengerAddress;
    }
    if (!data.passengerAddressType) {
      updatedPassenger.passengerAddressType = passengerData.passengerAddressType;
    }
    if (data.passengerEmail === '') {
      updatedPassenger.passengerEmail = '';
    }
    if (data.passengerLname === '') {
      updatedPassenger.passengerLname = '';
    }
    // if (!data.passengerMobile) {
    //   updatedPassenger.passengerMobile = '';
    // }

    if (
      !passengerData.coordinates
      && passengerData.coordinates?.lat
      && passengerData.coordinates?.lng
    ) {
      updatedPassenger.coordinates = `POINT(${passengerData.coordinates?.lng} ${passengerData.coordinates?.lat})`;
    } else {
      updatedPassenger.coordinates = 'POINT(0 0)';
    }
    if (passenger.passengerId) {
      onUpdate(updatedPassenger);
    } else {
      onCreate(updatedPassenger);
    }
  };

  // Function to handle passenger deletion
  const handleDelete = () => {
    onDelete(deletePassenger.passengerId);
    clearForm();
  };

  // If the modal is not open, return null (modal is not displayed)
  if (!isOpen) {
    return null;
  }

  async function checkMobileNumber(value, countryData) {
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
      setValue('passengerMobile', '');
      clearErrors('invalidMobile');
    }
  }

  // Render the modal for passenger deletion
  if (deletePassenger) {
    return (
      <div className="fixed left-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] transition-[filter] duration-[0.3s]">
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative h-[300px] w-[524px] rounded-lg bg-white p-6 shadow-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="ml-[425px] mt-[-5px] h-10 w-10 cursor-pointer rounded-full p-2 font-extrabold text-primary hover:bg-red-100"
              onClick={onRequestClose}
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
            <div className="mt-[-25px]">
              <center>
                <div className="mx-auto p-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="62"
                    viewBox="0 0 70 62"
                    fill="none"
                  >
                    <path
                      d="M68.7171 48.2224L42.8699 4.47504C41.1725 1.69743 38.2405 0 35 0C31.7595 0 28.8275 1.69743 27.1301 4.47504L1.28288 48.2224C-0.414544 51-0.414545 54.472 1.20573 57.2497C2.90316 60.1816 5.83508 61.879 9.07563 61.879H60.9244C64.1649 61.879 67.174 60.1816 68.7943 57.2497C70.4145 54.472 70.4145 51 68.7171 48.2224ZM65.708 55.4751C64.705 57.1725 62.9304 58.2527 61.0015 58.2527H8.99847C7.06957 58.2527 5.21783 57.2497 4.29196 55.4751C3.28894 53.7776 3.28894 51.6944 4.29196 50.0742L30.2935 6.24963C31.2965 4.5522 33.0711 3.62633 35 3.62633C36.9289 3.62633 38.7806 4.62935 39.7065 6.24963L65.708 49.997C66.6339 51.6944 66.6339 53.7776 65.708 55.4751Z"
                      fill="#A8A8A8"
                    />
                    <path
                      d="M35 18C33.9032 18 33 18.984 33 20.1789V37.8211C33 39.016 33.9032 40 35 40C36.0968 40 37 39.016 37 37.8211V20.1789C37 18.984 36.0968 18 35 18Z"
                      fill="#A8A8A8"
                    />
                    <path
                      d="M35 44C33.9032 44 33 45.0769 33 46.3846V47.6154C33 48.9231 33.9032 50 35 50C36.0968 50 37 48.9231 37 47.6154V46.3846C37 44.9231 36.0968 44 35 44Z"
                      fill="#A8A8A8"
                    />
                  </svg>
                </div>
              </center>
              <P className="text-center text-xl font-semibold leading-7 text-neutral-700">
                Do you want to delete the passenger?
              </P>
              <div className="mt-4 flex justify-center gap-4">
                <Button
                  type="button"
                  onClick={onRequestClose}
                  className="btn mr-2 !h-10 w-auto !rounded-[5px] border border-primary bg-primary px-5 text-xs font-semibold capitalize text-white hover:border-primary hover:text-primary"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={handleDelete}
                  className="btn mr-2 !h-10 w-auto !rounded-[5px] border border-orange-600 px-5 text-xs font-semibold capitalize !text-primary hover:!border-[#F6F6F6] hover:bg-primary hover:!text-white"
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const updateUserLocation = async (value) => {
    if (value?.regionid) {
      setPassengerData((prevData) => ({
        ...prevData,
        passengerAddress: value?.address || '',
        placeId: value?.placeid || '',
        coordinates:
          `POINT(${value?.latLng.split(',')[0]} ${
            value?.latLng.split(',')[1]
          })` || null,
        passengerAddressType: value?.locationtype || '',
      }));
    } else if (value?.placeid && !value?.regionid) {
      const response = await api.get(
        `/misc-address/details?place_id=${value?.placeid}`,
      );
      if (response.data) {
        setPassengerData((prevData) => ({
          ...prevData,
          passengerAddress: value?.address || '',
          placeId: value?.placeid || '',
          coordinates:
            `POINT(${response?.data?.lat} ${response?.data?.lng})` || null,
          passengerAddressType: response?.data?.locationtype || '',
        }));
      }
    }
  };
  const clearUserLocation = () => {
    setPassengerData((prevData) => ({
      ...prevData,
      passengerAddress: '',
      placeId: '',
      coordinates: '',
      passengerAddressType: '',
    }));
  };
  // Render the modal for passenger editing or creation
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] transition-[filter] duration-[0.3s]">
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="modal-box max-w-[900px] rounded-lg bg-white p-6 shadow-lg">
          <div className="flex flex-row items-center justify-between w-full flex-wrap">
            <h3 className="mb-5 ml-6 text-xl font-bold text-primary">
              {passenger.passengerId ? 'Edit Passenger' : 'Add New Passenger'}
            </h3>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="mt-[-5px] h-10 w-10 cursor-pointer rounded-full p-2 font-extrabold text-primary hover:bg-red-100"
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
          <div className="sm:px-6 px-2">
            <form
              className="w-full shrink-0 rounded-lg"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="col-span-2">
                  <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 rounded-md">
                    <div className="col-span-2 rounded-md">
                      {/* First Name input */}
                      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                        First Name
                        <span className="text-base font-medium text-red-600">
                          {' '}
                          *
                        </span>
                      </P>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        maxLength="20"
                        id="passengerFname"
                        name="passengerFname"
                        defaultValue={passengerData.passengerFname} // Corrected access
                        {...register('passengerFname', {
                          required: 'First Name is required',
                        })}
                        className="input input-bordered !text-gray-700 w-full pr-0 text-start text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                      />
                      {errors.passengerFname && (
                        <span className="text-red-500">
                          {errors.passengerFname.message}
                        </span>
                      )}
                    </div>
                    <div className="col-span-2 rounded-md text-sm">
                      {/* Last Name input */}
                      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                        Last Name
                        <span className="text-base font-medium text-red-600">
                          {' '}
                        </span>
                      </P>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        maxLength="20"
                        id="passengerLname"
                        name="passengerLname"
                        defaultValue={passengerData.passengerLname}
                        {...register('passengerLname', {
                          pattern: {
                            value: /^[A-Za-z0-9][A-Za-z0-9._%+-]*$/,
                            message:
                              'Last name should start with a letter or number.',
                          },
                        })}
                        className="input input-bordered !text-gray-700 w-full pr-0 text-start text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                      />
                      {errors.passengerLname && (
                        <span className="text-red-500">
                          {errors.passengerLname.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  {/* Mobile Number input */}
                  <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                    Mobile Number
                  </P>
                  <div className="relative">
                    <PhoneInput
                      enableSearch
                      autoFormat={false}
                      enableAreaCodes
                      inputProps={{
                        name: 'passengerMobile',
                        required: false,
                        autoFocus: false,
                        autoComplete: 'off',
                      }}
                      name="passengerMobile"
                      countryCodeEditable={false}
                      value={`${passenger.passengerMobileCntrycd}${passenger.passengerMobile}`}
                      country="gb"
                      countryCode="gb"
                      onChange={(value, country) => {
                        // set value in react-hook-form
                        setValue('passengerMobileCntrycd', country.dialCode);
                        setValue('passengerMobile', value);
                        clearErrors('passengerMobile');
                        clearErrors('invalidMobile');
                        checkMobileNumber(value, country);
                      }}
                      inputClass="input input-bordered focus:border-primary focus:outline-none !text-gray-700"
                    />
                    {errors.passengerMobile && (
                      <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                        {errors.passengerMobile.message}
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
                  {/* Email Address input */}
                  <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                    Email Address
                  </P>
                  <div className="relative">
                    <input
                      type="email"
                      maxLength="50"
                      id="passengerEmail"
                      name="passengerEmail"
                      defaultValue={passengerData.passengerEmail}
                      {...register('passengerEmail', {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      // onChange={(e) => {
                      //   handleInputChange(e);
                      //   setPassengerData({
                      //     ...passengerData,
                      //     passengerEmail: e.target.value, // Update the passengerFname in passengerData
                      //   });
                      // }}
                      placeholder="Enter email address"
                      className="input input-bordered !text-gray-700 w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                    />
                  </div>
                  {errors.passengerEmail && (
                    <span className="text-red-500">
                      {errors.passengerEmail.message}
                    </span>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="relative">
                    <div className="col-span-2">
                      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                        Home Address
                      </P>
                      <div className="relative">
                        <CountriesAutocomplete
                          autoCompleteComponent={Input}
                          autoCompleteComponentClassName="input input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem] !shadow-none !pl-3 !rounded-md !pr-8"
                          placeholder="Search & select new address"
                          setUserPlace={async (value) => {
                            updateUserLocation(value);
                          }}
                          defaultValue={passengerData?.passengerAddress || ''}
                          readOnly={false}
                          locationError={(_locationError) => console.log('locationError', _locationError)}
                          errorLabel={(val) => console.log('val', val)}
                          name="vialocation"
                          errors={() => {}}
                          setError={() => {}}
                          isViaLocation
                          passengrAddress
                        />
                        {passengerData?.passengerAddress && (
                          <P className="absolute text-black right-2 top-2/4 -translate-y-2/4 cursor-pointer">
                            <CgClose
                              onClick={() => {
                                clearUserLocation();
                              }}
                            />
                          </P>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 hidden">
                  {/* Coordinates input */}
                  <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                    Coordinates
                  </P>
                  <input
                    type="text"
                    placeholder="Latitude"
                    id="latitude"
                    name="latitude"
                    value={passengerData.coordinates?.lat || ''}
                    // defaultValue={passengerData.coordinates?.lat || ''} // Corrected access
                    onChange={(e) => {
                      handleInputChange(e);
                      setPassengerData({
                        ...passengerData,
                        coordinates: {
                          ...passengerData.coordinates,
                          lat: e.target.value,
                        },
                      });
                    }}
                    className="input input-bordered w-full pr-0 text-start text-sm font-medium focus:outline-none sm:text-[1rem]"
                  />
                  <input
                    type="text"
                    placeholder="Longitude"
                    id="longitude"
                    name="longitude"
                    value={passengerData.coordinates?.lng || ''}
                    // defaultValue={passengerData.coordinates?.lat || ''}
                    onChange={(e) => {
                      handleInputChange(e);
                      setPassengerData({
                        ...passengerData,
                        coordinates: {
                          ...passengerData.coordinates,
                          lng: e.target.value,
                        },
                      });
                    }}
                    className="input input-bordered w-full pr-0 text-start text-sm font-medium focus:outline-none sm:text-[1rem]"
                  />
                </div>
                <div className="col-span-2 hidden">
                  <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                    PlaceId
                  </P>
                  <input
                    type="text"
                    placeholder="Enter Your Place id"
                    maxLength="20"
                    id="placeId"
                    name="placeId"
                    value={passengerData.placeId} // Make sure this is set correctly
                    defaultValue={passengerData.placeId}
                    // onChange={(e) => {
                    //   handleInputChange(e);
                    //   setPassengerData({
                    //     ...passengerData,
                    //     placeId: e.target.value,
                    //   });
                    // }}
                    className="input input-bordered w-full pr-0 text-start text-sm font-medium focus:outline-none sm:text-[1rem]"
                  />
                </div>
                <div className="col-span-2 hidden">
                  <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                    Address Type
                  </P>
                  <input
                    type="text"
                    placeholder="Enter Your Address Type"
                    maxLength="20"
                    id="passengerAddressType"
                    name="passengerAddressType"
                    value={passengerData.passengerAddressType}
                    // defaultValue={passengerData.passengerAddressType} // Corrected access
                    onChange={(e) => {
                      handleInputChange(e);
                      setPassengerData({
                        ...passengerData,
                        passengerAddressType: e.target.value,
                      });
                    }}
                    className="input input-bordered w-full pr-0 text-start text-sm font-medium focus:outline-none sm:text-[1rem]"
                  />
                </div>
                <div className="col-span-2 flex justify-center py-6">
                  {/* Submit button */}
                  <Button
                    type="submit"
                    kind="primary"
                    className="inline-flex h-12 w-[200px] items-center justify-center gap-2.5 rounded-md bg-orange-600 px-7 py-3.5 hover:bg-[#EAEAEA] hover:!text-primary"
                  >
                    <span className="capitalize">
                      {passenger.passengerId ? 'Save' : 'Add Passenger'}
                    </span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
