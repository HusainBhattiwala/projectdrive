import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import CountriesAutocomplete from 'components/addressautocomplete/CountriesAutocomplete';
import Input from 'components/ui/Input';
import P from 'components/typography/P';
import Dropdown from 'components/shared/Dropdown';
import api from 'components/utils/api';

const hourOptionRenderer = (item) => (
  <div className="flex items-center justify-between gap-2 font-medium capitalize w-full">
    {item?.label}
  </div>
);

function addHours(getDate, hours) {
  getDate.setHours(getDate.getHours() + hours);
  return getDate;
}

function LocationComponent({
  pickUpLocation,
  setPickLocation,
  dropLocation,
  setDropLocation,
  viaLocations,
  setViaLocations,
  showPickupError,
  setShowPickupError,
  pickUpFlight,
  setPickUpFlight,
  setDropUpFlight,
  dropFlight,
  bookingType,
  hourDuration,
  setHourDuration,
  setUserCurrency,
  pickUpLocationRef,
  showDropError,
  setShowDropError,
  dropOffLocationRef,
  viaLocationsError,
  setViaLocationsError,
  viaLocationRefs,
  setNewDate,
}) {
  const [clearViaLocationPosition, setClearViaLocationPosition] = useState(null);

  // set hours list
  const hourList = Array.from({ length: 21 }, (_, index) => ({
    value: index + 4,
    label: `${index + 4} Hours`,
  }));

  const setErrorForViaLocation = (index, error) => {
    const updatedErrors = [...viaLocationsError];
    updatedErrors[index] = error;
    setViaLocationsError(updatedErrors);
  };

  const updateUserViaLocations = (newValueFn, index) => {
    if (newValueFn?.regionid) {
      const updatedArray = [...viaLocations];
      updatedArray[index] = newValueFn;

      const pickLatLng = pickUpLocation?.latLng;
      const dropLatLng = dropLocation?.latLng;

      // Check if the newValueFn is the same as both pickLatLng and dropLatLng
      const isSameAsPickLatLng = pickLatLng === newValueFn?.latLng;
      const isSameAsDropLatLng = dropLatLng === newValueFn?.latLng;

      // Check if the newValueFn is the same as any other via location
      const isSameAsOtherViaLocations = updatedArray.some(
        (location, i) => i !== index && location?.latLng === newValueFn?.latLng,
      );

      if (
        !isSameAsPickLatLng
        && !isSameAsDropLatLng
        && !isSameAsOtherViaLocations
      ) {
        // Only update the state if it's different
        if (pickUpLocation?.regionid !== newValueFn?.regionid) {
          toast.error('Pickup and via location not in the same region', {
            autoClose: 3000,
            theme: 'colored',
          });
          toast.clearWaitingQueue();
          updatedArray[index] = null;
          setClearViaLocationPosition(index);
          setViaLocations(updatedArray);
        } else {
          setViaLocations(updatedArray);
        }
      } else {
        toast.error('Add a differnt via location', {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
        // eslint-disable-next-line no-use-before-define
        clearViaLocation(index);
      }
    }
  };

  const handleCreateNewViaPoint = (index) => {
    if (pickUpLocation && viaLocations.length === 0) {
      const updatedLocations = [...viaLocations];
      updatedLocations.splice(index, 0, null);
      setViaLocations(updatedLocations);
      const locationRef = React.createRef();
      const updatedRefs = [...viaLocationRefs.current];
      updatedRefs.splice(index, 0, locationRef);
      // eslint-disable-next-line no-param-reassign
      viaLocationRefs.current = updatedRefs;
    } else if (pickUpLocation && viaLocations.length > 0) {
      const noNullVialocation = viaLocations.some(
        (location) => location === null,
      );
      if (!noNullVialocation) {
        const updatedLocations = [...viaLocations];
        updatedLocations.splice(index, 0, null);
        setViaLocations(updatedLocations);
        const locationRef = React.createRef();
        const updatedRefs = [...viaLocationRefs.current];
        updatedRefs.splice(index, 0, locationRef);
        // eslint-disable-next-line no-param-reassign
        viaLocationRefs.current = updatedRefs;
      } else {
        toast.error(`Please add via point ${viaLocations.length}`, {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
      }
    } else {
      toast.error('Please pickup location first', {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
    }
  };

  const clearViaLocation = (index) => {
    console.log(index);
    const updatedLocations = [...viaLocations];
    updatedLocations.splice(index, 1, null);
    console.log(updatedLocations);
    setViaLocations(updatedLocations);

    const updatedErrors = [...viaLocationsError];
    updatedErrors[index] = true;
    setViaLocationsError(updatedErrors);
    setClearViaLocationPosition(index);
  };
  const deleteViaLocation = (index) => {
    const updatedLocations = [...viaLocations];
    updatedLocations.splice(index, 1);
    setViaLocations(updatedLocations);
  };

  // Validating Locations
  useEffect(() => {
    const getUserCurrency = async (regionid) => {
      const response = await api.get(`/regions?region_id=${regionid}`);
      if (response?.data?.region_currency_text) {
        setUserCurrency(response?.data?.region_currency_text);
        let date = new Date().toLocaleString('en-US', { timeZone: response?.data?.region_time_zone || 'Europe/London' });
        date = new Date(date);
        const newDate = addHours(date, 2);
        setNewDate(newDate);
      }
    };
    if (pickUpLocation?.regionid) {
      getUserCurrency(pickUpLocation?.regionid);
    }
    if (dropLocation?.regionid) {
      if (!pickUpLocation) {
        if (!dropLocation) {
          toast.error('Please select pick up location first.', {
            autoClose: 3000,
            theme: 'colored',
          });
          setDropLocation(null);
          toast.clearWaitingQueue();
        }
      } else if (pickUpLocation?.latLng === dropLocation?.latLng) {
        toast.error("Pickup and drop location can't be same.", {
          autoClose: 3000,
          theme: 'colored',
        });
        setDropLocation(null);
        toast.clearWaitingQueue();
      } else if (pickUpLocation?.regionid !== dropLocation?.regionid) {
        toast.error('Pickup and drop location not in the same zone.', {
          autoClose: 3000,
          theme: 'colored',
        });
        setDropLocation(null);
        toast.clearWaitingQueue();
      } else if (viaLocations) {
        const isSameAsOtherViaLocations = viaLocations.some(
          (location) => location?.latLng === dropLocation?.latLng,
        );
        if (isSameAsOtherViaLocations) {
          toast.error("Via and drop location can't be same.", {
            autoClose: 3000,
            theme: 'colored',
          });
          setDropLocation(null);
          toast.clearWaitingQueue();
        }
      }
    }

    if (viaLocations && pickUpLocation) {
      const viaNotInSameRegion = viaLocations
        .map((location, index) => {
          if (
            location?.regionid
            && location?.regionid !== pickUpLocation?.regionid
          ) {
            return index;
          }
          return undefined; // Return undefined for elements in the same region
        })
        .filter((index) => index !== undefined);

      if (viaNotInSameRegion.length > 0) {
        clearViaLocation(viaNotInSameRegion[0]);
        toast.error('Via location not in the same zone.', {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dropLocation,
    pickUpLocation,
    setDropLocation,
    setUserCurrency,
    viaLocations,
  ]);

  return (
    <>
      <div className="grid sm:grid-cols-7 grid-cols-1 items-center py-2  px-2">
        <div className="col-span-2">
          <P className="text-[#797979] !text-normal !text-sm">
            Pickup Point
            {' '}
            <span className="text-red-500">*</span>
          </P>
        </div>
        <div className="col-span-5">
          <div className="relative" ref={pickUpLocationRef}>
            <CountriesAutocomplete
              autoCompleteComponent={Input}
              autoCompleteComponentClassName={`!rounded-lg !text-[14px] !pl-3 !pr-8 ${
                showPickupError ? 'border-red-500' : ''
              }`}
              placeholder="Search for pick up address"
              setUserPlace={async (valFn) => {
                setPickLocation(valFn);
              }}
              defaultValue={pickUpLocation?.address || ''}
              readOnly={false}
              locationError={(_locationError) => console.log('locationError', _locationError)}
              errorLabel={(val) => console.log('val', val)}
              name="pickuplocation"
              errors={showPickupError}
              setError={setShowPickupError}
            />
            {pickUpLocation?.address && (
              <P className="absolute text-black right-2 top-2/4 -translate-y-2/4 cursor-pointer">
                <CgClose
                  onClick={() => {
                    setPickLocation(null);
                  }}
                />
              </P>
            )}
          </div>
        </div>
      </div>

      {pickUpLocation && pickUpLocation?.locationtype === 'airport' && (
        <div className="grid sm:grid-cols-7 grid-cols-1 py-2  px-2">
          <div className="col-span-2" />
          <div className="grid col-span-5">
            <div className="relative ">
              <div className="absolute top-2/4 -translate-y-2/4 z-[1] left-2">
                <Image
                  src="/images/icons/drop-off-flight_primary.svg"
                  width="19"
                  height="16"
                  className="top-2"
                  alt="drop-off-flight_primary"
                />
              </div>
              <Input
                onChange={(e) => {
                  setPickUpFlight(e.target.value);
                }}
                value={pickUpFlight}
                placeholder="Enter flight no."
                className="!pl-8 w-full"
              />
            </div>
          </div>
        </div>
      )}
      <div className="grid sm:grid-cols-7 grid-cols-1  px-2">
        <div className="col-span-7 py-2 flex items-end justify-end">
          <button
            type="button"
            className="text-primary text-sm flex items-center gap-x-2 font-semibold"
            onClick={() => {
              handleCreateNewViaPoint(viaLocations.length);
            }}
          >
            <img src="/images/icons/plus_primary.svg" alt="plus_primary" />
            Add via point
          </button>
        </div>
      </div>
      {/* Pickup Location */}
      {/* Hourly duration */}
      {bookingType === 'HOURLY' && (
        <div className="grid sm:grid-cols-7 grid-cols-1 items-center  px-2">
          <div className="col-span-2">
            <P className="text-[#797979] !text-normal !text-sm">
              Choose duration
              {' '}
              <span className="text-red-500">*</span>
            </P>
          </div>
          <div className="col-span-5">
            <Dropdown
              optionRenderer={hourOptionRenderer}
              options={hourList || []}
              onChange={(item) => setHourDuration(item)}
              className="!w-full"
            >
              {hourDuration?.label}
            </Dropdown>
          </div>
        </div>
      )}
      {/* Hourly duration */}
      {/* Via Locations */}
      {viaLocations.map((location, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div
          className="grid sm:grid-cols-7 grid-cols-1 items-center py-2  px-2"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          ref={viaLocationRefs.current[index]}
        >
          <div className="col-span-2">
            <P className="text-[#797979] !text-normal !text-sm">
              Via Point
              {' '}
              {index + 1}
              {' '}
              <span className="text-red-500">*</span>
            </P>
          </div>
          <div className="col-span-5 relative">
            <div className="relative">
              <CountriesAutocomplete
                autoCompleteComponent={Input}
                autoCompleteComponentClassName={`!rounded-lg !text-[14px] !pl-3 !pr-8 ${
                  viaLocationsError[index] ? 'border-red-500' : ''
                }`}
                placeholder={`Search for via address ${index + 1}`}
                setUserPlace={(valueFn) => {
                  const updatedArray = [...viaLocations];
                  updatedArray[index] = valueFn;
                  setClearViaLocationPosition(null);
                  setViaLocations(updatedArray);
                  updateUserViaLocations(valueFn, index);
                }}
                defaultValue={location?.address || ''}
                readOnly={false}
                locationError={(_locationError) => console.log('locationError', _locationError)}
                errorLabel={(val) => console.log('val', val)}
                name="vialocation"
                clearSearchOnlyFromParent={clearViaLocationPosition === index}
                errors={viaLocationsError[index]}
                setError={(error) => setErrorForViaLocation(index, error)}
                isViaLocation
              />
              {location?.address && (
                <P className="absolute text-black right-2 top-2/4 -translate-y-2/4 cursor-pointer">
                  <CgClose
                    onClick={() => {
                      clearViaLocation(index);
                    }}
                  />
                </P>
              )}
            </div>
            <MdDelete
              className="text-primary cursor-pointer absolute -right-5 top-2/4 -translate-y-2/4"
              onClick={() => deleteViaLocation(index)}
            />
          </div>
        </div>
      ))}
      {/* Drop Location */}
      <div className="grid sm:grid-cols-7 grid-cols-1 items-center py-2  px-2">
        <div className="col-span-2">
          <P className="text-[#797979] !text-normal !text-sm">
            Drop-off Point
            {' '}
            {
              bookingType !== 'HOURLY'
              && (
                <span className="text-red-500">*</span>
              )
            }
          </P>
        </div>
        <div className="col-span-5">
          <div className="relative" ref={dropOffLocationRef}>
            <CountriesAutocomplete
              autoCompleteComponent={Input}
              autoCompleteComponentClassName={`!rounded-lg !text-[14px] !pl-3 !pr-8 ${
                showDropError ? 'border-red-500' : ''
              }`}
              placeholder="Search for drop off address"
              setUserPlace={(valFn) => {
                setDropLocation(valFn);
              }}
              defaultValue={dropLocation?.address || ''}
              readOnly={false}
              locationError={(_locationError) => console.log('locationError', _locationError)}
              errorLabel={(val) => console.log('val', val)}
              name="droplocation"
              errors={showDropError}
              setError={setShowDropError}
              isViaLocation={false}
            />
            {dropLocation?.address && (
              <P className="absolute text-black right-2 top-2/4 -translate-y-2/4 cursor-pointer">
                <CgClose
                  onClick={() => {
                    setDropLocation(null);
                  }}
                />
              </P>
            )}
          </div>
        </div>
      </div>

      {dropLocation && dropLocation?.locationtype === 'airport' && (
        <div className="grid sm:grid-cols-7 grid-cols-1 py-2  px-2">
          <div className="col-span-2" />
          <div className="grid col-span-5">
            <div className="relative ">
              <div className="absolute top-2/4 -translate-y-2/4 z-[1] left-2">
                <Image
                  src="/images/icons/drop-off-flight_primary.svg"
                  width="19"
                  height="16"
                  className="top-2"
                  alt="drop-off-flight_primary"
                />
              </div>
              <Input
                onChange={(e) => {
                  setDropUpFlight(e.target.value);
                }}
                value={dropFlight}
                placeholder="Enter flight no."
                className="!pl-8 w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LocationComponent;
