import { useState } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import P from './typography/P';
import Dropdown from './ui/Dropdown';

const countryList = [
  {
    id: 1,
    countryName: 'India',
    code: 'IND',
    icon: 'IN',
    currency: 'INR',
  },
  {
    id: 2,
    countryName: 'United States',
    code: 'US',
    icon: 'US',
    currency: 'USD',
  },
  {
    id: 3,
    countryName: 'United Kingdom',
    code: 'UK',
    icon: 'GB',
    currency: 'GBP',
  },
];

function CountryDropdown({ className, fullwidth }) {
  const [userCountry, setUserCountry] = useState(countryList[0]);
  const changeCountry = (index) => {
    setUserCountry(countryList[index]);
  };
  return (
    <Dropdown
      className={className}
      fullwidth={fullwidth}
      label={`${getSymbolFromCurrency(userCountry.currency)}   ${userCountry.currency}`}
    >
      {countryList.map((country, index) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={country.id}
          className="flex flex-row justify-between py-0 border-b items-center "
          onClick={() => { changeCountry(index); }}
        >
          <div className=" py-2 px-2 flex items-start w-full">
            <div className="rounded-full w-6 border border-black">
              <P className="text-center text-black">{getSymbolFromCurrency(country.currency)}</P>
            </div>
            <P className="text-black">{country.currency}</P>
          </div>
        </li>
      ))}
    </Dropdown>
  );
}

export default CountryDropdown;
