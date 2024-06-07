import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import P from './typography/P';
import { Pic } from './ui/Pic';

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
    currency: 'Dollar',
  },
  {
    id: 3,
    countryName: 'United Kingdom',
    code: 'UK',
    icon: 'GB',
    currency: 'Pound',
  },
];
function CountryDropdown({ className }) {
  const [userCountry, setUserCountry] = useState(countryList[0]);
  const changeCountry = (index) => {
    setUserCountry(countryList[index]);
  };
  return (
    <div className={`dropdown relative dropdown-end min-h-0 !h-auto ${className}`}>
      <label htmlFor="country" className="text-black rounded-md py-3 lg:px-2 cursor-pointer flex items-center text-[14px] my-auto" tabIndex={0}>
        <img src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${userCountry.icon}.svg`} className="object-cover w-4 h-4 rounded-full mr-1 text-[14px]" alt={userCountry.countryName} />
        {userCountry.code}
        <FaAngleDown className="ml-1  text-primary" />
      </label>
      <ul id="country" tabIndex={0} className="dropdown-content menu shadow bg-base-100 top-10">
        {countryList.map((country, index) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            key={country.id}
            className="flex flex-row justify-between py-0 border-b items-start"
            onClick={() => changeCountry(index)}
          >
            <div className="w-full py-2 flex items-center !text-xs">
              <div className="w-4">
                <Pic src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${country.icon}.svg`} alt={country.countryName} />
              </div>
              <P className="w-32 block !text-[11px] text-left">{country.countryName}</P>
            </div>
          </li>
        ))}

      </ul>
    </div>
    // <NewDropdown
    //   className={className}
    //   fullwidth={fullwidth}
    //   label={`${userCountry.code}`}
    //   imgUrl={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${userCountry.icon}.svg`}
    // >
    //   {countryList.map((country, index) => (
    //     // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    //     <li
    //       key={country.id}
    //       className="flex flex-row justify-between py-0 border-b items-center"
    //       onClick={() => changeCountry(index)}
    //     >
    //       <div className="w-full py-2 flex items-start">
    //         <div className="w-6">
    //           <Pic src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${country.icon}.svg`} className=" " alt={country.countryName} />
    //         </div>
    //         <P className="w-32 block">{country.countryName}</P>
    //       </div>
    //     </li>
    //   ))}
    // </NewDropdown>
  );
}

export default CountryDropdown;
