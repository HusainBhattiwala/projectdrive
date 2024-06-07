/* eslint-disable max-len */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import H2 from 'components/typography/H2';
import H3 from 'components/typography/H3';
import P from 'components/typography/P';

export default function ServicesNew() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  return (
    <section>
      <div className="2xl:container px-4 md:px-6 lg:px-[60px] mx-auto my-28">
        <H2 className="!font-[700] !text-[24px] text-[#262626] uppercase mb-6">Our Services</H2>
        <div className="flex flex-wrap gap-8 justify-around">
          <div
            className="!max-h-[470px] max-w-[400px] lg:w-[30.5%] sm:w-[48%] w-[95%]"
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <Image
              src="/images/services/home/airport-transfer.jpg"
              height="450"
              width="450"
              className={`${hover1 && 'grayscale-0 !object-cover !h-[320px] rounded-2xl'} grayscale h-[450] rounded-2xl`}
            />
            <div className={`${!hover1 && '-top-[150px] relative !text-white p-6'} -top-[80px] p-3 text-black`}>
              <H3 className="font-robo font-[700] text-[16px]">Airport Transfers</H3>
              <P className={`${!hover1 && 'hidden'} block !text-[#8b8b8b] font-robo`}>RolDrive&#39;s airport transfers deliver punctual and luxurious chauffeur services to and from London&#39;s airports. Our professional chauffeurs and luxury vehicles guarantee a stress-free, comfortable travel experience for discerning passengers.</P>
            </div>
          </div>
          <div
            className="!h-[470px] max-w-[400px] lg:w-[30.5%] sm:w-[48%] w-[95%]"
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <Image
              src="/images/services/home/roadshow-transfer.jpg"
              height="450"
              width="450"
              className={`${hover2 && 'grayscale-0 !object-cover !h-[320px] rounded-2xl'} grayscale h-[450] rounded-2xl`}
            />
            <div className={`${!hover2 && '-top-[150px] relative !text-white p-6'} -top-[80px] p-3 text-black`}>
              <H3 className="font-robo font-[700] text-[16px]">Roadshow Transfers</H3>
              <P className={`${!hover2 && 'hidden'} block !text-[#8b8b8b] font-robo`}>RolDrive&#39;s roadshow transfer chauffeur services offer a seamless, luxurious experience for corporate clients. Our professional chauffeurs expertly navigate London&#39;s streets, ensuring timely arrivals and a smooth, stress-free journey for business events.</P>
            </div>
          </div>
          <div
            className="!h-[470px] max-w-[400px] lg:w-[30.5%] sm:w-[48%] w-[95%]"
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <Image
              src="/images/services/home/intercity-transfer.jpg"
              height="450"
              width="450"
              className={`${hover3 && 'grayscale-0 !object-cover !h-[320px] rounded-2xl'} grayscale h-[450] rounded-2xl`}
            />
            <div className={`${!hover3 && '-top-[150px] relative !text-white p-6'} -top-[80px] p-3 text-black`}>
              <H3 className="font-robo font-[700] text-[16px]">Intercity Transfers</H3>
              <P className={`${!hover3 && 'hidden'} block !text-[#8b8b8b] font-robo`}>RolDrive&#39;s intercity transfer chauffeur services provide a comfortable and efficient way to travel between cities. Our luxury vehicles and professional chauffeurs ensure a relaxing journey, making long-distance travel a breeze.</P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
