'use client';

import Link from 'next/link';
import { useState } from 'react';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';

export default function ServingCountries() {
  const country = [
    {
      id: 1,
      city: 'London',
      country: 'UK',
      img: '/images/country/london.jpg',
      countryCode: 'GB',
      pageURL: '/airport-transfer-london',
    },
    {
      id: 2,
      city: 'Paris',
      country: 'France',
      img: '/images/country/france.png',
      countryCode: 'FR',
      pageURL: '/airport-transfer-paris',
    },
    {
      id: 3,
      city: 'New York',
      country: 'USA',
      img: '/images/country/north_america.png',
      countryCode: 'US',
      pageURL: '/airport-transfer-new-york',
    },
    {
      id: 4,
      city: 'Dubai',
      country: 'UAE',
      img: '/images/country/dubai.jpg',
      countryCode: 'AE',
      pageURL: '/airport-transfer-dubai',
    },
  ];
  const [hover, setHover] = useState(0);
  return (
    <div className="2xl:container px-4 md:px-6 lg:px-[60px] mx-auto pb-16">
      <H2 className="uppercase text-black !text-[24px] !font-[700] text-center">Currently serving all across the globe</H2>
      {/* <P className="font-robo text-[#6B6B6B] mt-3 !text-base">Travellers from California are loving these places</P> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:px-20 gap-5 mt-6">
        {country.map((data) => (
          <Link
            href={data.pageURL}
            key={data.id}
            onMouseEnter={() => setHover(data.id)}
            onMouseLeave={() => setHover(0)}
          >

            <Pic
              src={data.img}
              className={`${data.id === hover && 'grayscale-0'} grayscale`}
            />
            <div className="flex mt-3">
              <div className="w-5 h-5 mt-[5px] mr-2 !grayscale-0">
                <Pic
                  src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${data.countryCode}.svg`}
                  alt="india"
                />
              </div>
              <P className="font-robo !text-base font-[700] text-[#262626]">
                {data.city}
                ,
                {' '}
                {data.country}
              </P>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
