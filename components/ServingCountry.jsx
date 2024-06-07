'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useEffect } from 'react';
import H2 from './typography/H2';
import H4 from './typography/H4';
import { Pic } from './ui/Pic';

const countryList = [
  {
    id: 1,
    countryName: 'London',
    countryImg: '/images/country/london.png',
    icon: 'GB',
    pageURL: '/airport-transfer-london',
  },
  {
    id: 2,
    countryName: 'Paris',
    countryImg: '/images/country/france.png',
    icon: 'FR',
    pageURL: '/airport-transfer-paris',
  },
  {
    id: 3,
    countryName: 'New York',
    countryImg: '/images/country/north_america.png',
    icon: 'US',
    pageURL: '/airport-transfer-new-york',
  },
  {
    id: 4,
    countryName: 'Dubai',
    countryImg: '/images/country/dubai.jpg',
    icon: 'AE',
    pageURL: '/airport-transfer-dubai',
  },
  {
    id: 5,
    countryName: 'Mumbai',
    countryImg: '/images/country/mumbai.jpg',
    icon: 'IN',
    pageURL: '/airport-transfer-mumbai',
  },
  {
    id: 6,
    countryName: 'Delhi',
    countryImg: '/images/country/delhi.jpg',
    icon: 'IN',
    pageURL: '/airport-transfer-new-delhi',
  },
];
function ServingCountry() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full px-6 py-8 bg-white xl:px-20 lg:px-10 xl:py-10">
      <div className="container mx-auto text-center" data-aos="fade-left">
        <H2 className="mb-10 font-bold text-black capitalize lg:!text-[32px] md:!text-[28px] sm:!text-[24px] !text-[20px]">
          Currently serving all across the globe
        </H2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-4">
          {countryList.map((country) => (
            <Link key={country.id} href={country.pageURL}>
              <div className="w-full card">
                <Pic
                  src={country.countryImg}
                  alt={country.countryName}
                  className="rounded-md"
                />
                <div className="items-center px-0 pt-1 text-center card-body">
                  <div className="flex flex-row items-start mt-2">
                    <div className="w-5 h-5">
                      <Pic
                        src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${country.icon}.svg`}
                        alt={country.countryName}
                      />
                    </div>

                    <H4 className="pl-1 font-semibold leading-none text-left text-black">
                      {country.countryName}
                    </H4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServingCountry;
