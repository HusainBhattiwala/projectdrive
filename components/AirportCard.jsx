'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import P from './typography/P';
import { Pic } from './ui/Pic';

export default function AirportCard({
  url, airportName, image, countryCode,
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={url}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="h-20 w-36 sm:w-52 sm:h-28 object-cover object-center overflow-hidden rounded-lg">
        <Pic src={image} className={`h-24 rounded-lg object-contain ${hover ? 'grayscale-0' : 'grayscale'}`} />
      </div>
      <P className="text-center text-black font-[500] mt-4 mb-2 w-36 sm:w-52">
        <img
          alt={airportName}
          className="inline w-4 mr-2"
          src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/${countryCode}.svg`}
        />
        {airportName}
      </P>
    </Link>

  );
}
