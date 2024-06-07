import React, { useCallback, useEffect, useState } from 'react';
import NewDropdown from 'components/ui/NewDropdown';
import P from 'components/typography/P';
import api from 'components/utils/api';

function RegionDropDown({ userCountry, setUserCountry }) {
  const [regionList, setRegionList] = useState([]);
  const changeCountry = (index) => {
    setUserCountry(regionList[index]);
  };

  const getRegion = useCallback(async () => {
    try {
      setRegionList([]);
      const response = await api.get('/regions/dropdown');
      if (response?.data?.length > 0) {
        const regions = [
          {
            region_short_name: 'All',
            region_id: '',
          },
          ...response.data,
        ];
        setRegionList(regions);
        return regions;
      }
    } catch (error) {
      console.error(error);
    }
    return [];
  }, []);

  useEffect(() => {
    getRegion();
  }, [getRegion]);

  return (
    <NewDropdown
      className="bg-white border border-solid border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none block w-auto pl-1 p-0.5"
      label={`${userCountry.region_short_name}`}
      imageSrc="/images/icons/location2.svg"
    >
      {regionList.map((country, index) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
                // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="flex flex-row justify-between py-2  items-center "
          onClick={() => { changeCountry(index); }}
        >
          <div className="py-2 px-2 flex items-start w-full">
            <P className="text-neutral-700 text-sm font-medium tracking-tight">{country.region_short_name}</P>
          </div>
        </li>
      ))}
    </NewDropdown>
  );
}

export default RegionDropDown;
