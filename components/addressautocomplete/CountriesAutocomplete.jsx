'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../utils/api';
import Autocomplete from './Autocomplete';
import UseDebounce from './UseDebounce';
import 'react-toastify/dist/ReactToastify.css';

function CountriesAutocomplete(props) {
  const {
    // eslint-disable-next-line max-len
    placeholder,
    userAddress,
    setUserPlace,
    setFocus,
    readOnly,
    errors,
    name,
    locationError,
    errorLabel,
    setError,
    clearSearchOnlyFromParent,
    defaultValue,
    autoCompleteComponent,
    autoCompleteComponentClassName,
    isViaLocation,
    passengrAddress = false,
    isFullScreen = false,
    setIsFullScreen,
  } = props;

  const [search, setSearch] = useState(defaultValue);
  const [items, setItems] = useState([]);
  const [clearSearch, setClearSearch] = useState(false);

  // query typed by user
  const debouncedSearch = UseDebounce(search, 300);

  // a list to hold all the countries
  function getLatLng(data) {
    if (data?.coordinate) {
      const d = data?.coordinate?.split(' ');
      const lng = d[0].replace('POINT(', '');
      const lnt = d[1].replace(')', '');
      return `${lnt},${lng}`;
    }
    return ',';
  }

  useEffect(() => {
    const fetchData = async () => {
      const getAddresses = await api.get(
        `/misc-address?address=${debouncedSearch.toLowerCase()}`,
      );
      // eslint-disable-next-line max-len, no-unused-expressions
      const newItems = await getAddresses.data
        .map((d) => (d.locationid
          ? {
            name: `${d.locationname}, ${d.locationaddress}`,
            latLng: getLatLng(d),
            types: d.locationtype,
            regionid: d.regionid,
            locationid: d.locationid,
            postal_code: d.postal_code,
            locationtype: d.locationtype,
            placeid: passengrAddress ? d.placeid : '',
            zoneId: d?.covzerage_zone_id.length > 0 ? d?.covzerage_zone_id : [d?.locationid],
          }
          : {
            // eslint-disable-next-line max-len
            name: d.description,
            placeid: d.place_id,
            types: d.types,
            regionid: null,
          }))
        .sort();
      setItems(newItems);
    };
    if (debouncedSearch) {
      fetchData();
    }
  }, [debouncedSearch, passengrAddress]);

  async function checkCoverage(item) {
    setClearSearch(false);
    if (item.placeid && !item.locationid) {
      const response = await api.get(
        `/misc-address/check-coverage?place_id=${item.placeid}`,
      );
      if (!response?.data?.regionid) {
        toast.error('We are not covering this zone', {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
        locationError(true);
        errorLabel('We are not covering this zone');
        setClearSearch(true);
        return;
      }
      const {
        postalCode,
        regionid,
        lat,
        lng,
        locationid,
        locationtype,
        coveragezoneid,
      } = response.data;
      if (!passengrAddress) {
        // if (!coveragezoneid) {
        //   toast.error('We are not covering this zone', {
        //     autoClose: 3000,
        //     theme: 'colored',
        //   });
        //   toast.clearWaitingQueue();
        //   setClearSearch(true);
        // } else if (coveragezoneid || postalCode) {
        const latLng = `${lat},${lng}`;
        if (isViaLocation) {
          const updatedValue = {
            address: item.name,
            latLng,
            regionid,
            postal_code: postalCode,
            locationid,
            locationtype,
            placeid: item.placeid,
            zoneId: coveragezoneid ? [coveragezoneid] : [],
          };
          setUserPlace(updatedValue);
        } else {
          setUserPlace((prev) => ({
            ...prev,
            latLng,
            regionid,
            postal_code: postalCode,
            locationid,
            locationtype,
            placeid: item.placeid,
            zoneId: coveragezoneid ? [coveragezoneid] : [],
          }));
        }
        // } else {
        //   locationError(true);
        //   errorLabel(response.message);
        //   setClearSearch(true);
        // }
      } else {
        const latLng = `${lat},${lng}`;
        const updatedValue = {
          address: item.name,
          latLng,
          regionid,
          postal_code: postalCode,
          locationid,
          locationtype,
          placeid: item.placeid,
        };
        setUserPlace(updatedValue);
      }
    }
  }

  // use the common auto complete component here.
  return (
    <Autocomplete
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}
      autoCompleteComponent={autoCompleteComponent}
      autoCompleteComponentClassName={autoCompleteComponentClassName}
      userAddress={userAddress}
      setUserPlace={setUserPlace}
      placeholder={placeholder}
      items={items}
      value={search}
      onChange={setSearch}
      setFocus={setFocus}
      readOnly={readOnly}
      errors={errors}
      name={name}
      // eslint-disable-next-line react/jsx-no-bind
      checkCoverage={checkCoverage}
      clear={clearSearch}
      setClear={setClearSearch}
      removeError={setError}
      defaultValue={defaultValue}
      isViaLocation={isViaLocation}
      clearSearchOnlyFromParent={clearSearchOnlyFromParent}
    />
  );
}

export default CountriesAutocomplete;
