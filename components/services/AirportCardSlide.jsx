'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Pic } from 'components/ui/Pic';
import P from 'components/typography/P';

export default function AirportCardSlide({
  url, airportName, image,
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={url}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="h-24 mx-1 sm:h-28 object-cover object-center overflow-hidden rounded-lg">
        <Pic src={image} className={`h-24  rounded-lg object-contain ${hover ? 'grayscale-0' : 'grayscale'}`} />
      </div>
      <P className="text-black !font-[600] md:!text-base !text-[12px] uppercase mt-4 mb-2 mx-2">
        {airportName}
      </P>
    </Link>

  );
}
