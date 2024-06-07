'use client';

/* eslint-disable max-len */
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import P from 'components/typography/P';
import H2 from 'components/typography/H2';

export default function HeroSec({
  heading1,
  heading2,
  line1,
  line2,
  line3,
  url,
  urlName,
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Set initial width
    handleResize();

    // Add event listener to update width on resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  function getImage() {
    if (width > 788) {
      return '/images/banner/businesswoman.png';
    }
    return '/images/banner/businesswoman-mobile.jpeg';
  }
  return (
    <section className="relative h-[95vh] sm:max-h-[643px] max-h-[610px] flex items-center sm:justify-start justify-center z-[1]">
      <Image fill src={getImage()} alt="RolDrive Customer" style={{ objectFit: 'cover' }} />
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 sm:bg-none bg-[#00000066] z-[2]" />
      <div className="2xl:container mx-auto px-4 md:px-6 lg:px-[60px] z-[3]">
        <div className="lg:w-5/12 md:w-8/12 sm:w-7/12 w-full flex flex-col sm:justify-start gap-y-[21px] lg:mr-60 md:mr-72 sm:mr-46 sm:mt-0 mt-[240px]">
          <H2 className="text-white uppercase font-[700] lg:!text-[1.575rem] !tracking-widest  lg:!leading-[45.47px] md:!text-3xl sm:!text-2xl !text-[16px] sm:text-left text-center">
            {heading1 || 'RolDrive! Your Trusted Travel Partner'}
            <br />
            {heading2}
          </H2>
          <P className="text-[#e7e7e7] font-[300] sm:!text-[14px] lg:pr-24 md:pr-28 font-robo leading-[20.08px] text-[12px] sm:text-left text-center">
            {line1
              || 'Keep your worries aside, as our services can be booked 24*7 online. Connect to your customer assistant team anytime and they will be more than happy to help you.Optimum luxury and safety for personal and corporate travel.Sophisticated vehicles and qualified drivers.'}
            <br />
            {line2}
            <br />
            {line3}
          </P>
          <div className="flex sm:justify-start justify-center">
            <Link
              className="lg:px-16 md:px-10 sm:py-4 py-3 px-4 font-normal uppercase text-base bg-primary text-white rounded-md hover:bg-white hover:text-primary max-w-max mt-4"
              href={url || '/contact-us'}
            >
              {urlName || "Let's Connect"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
