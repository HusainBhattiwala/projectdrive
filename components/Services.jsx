/* eslint-disable max-len */
import Link from 'next/link';
import H2 from './typography/H2';
import H3 from './typography/H3';
import P from './typography/P';
import { Pic } from './ui/Pic';

export default function Services() {
  return (
    <section>
      <div className="container mx-auto py-24">
        <H2 className="uppercase text-[24px] font-[700] mb-[50px] text-black">Our Services</H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-robo">
          <div className="shadow-md rounded-sm">
            <div className="">
              <Pic
                src="/images/services/airport-transfer.jpg"
                className="rounded-t-sm"
              />
            </div>
            <div className="py-4 px-[22px]">
              <H3 className="!text-[16px] !leading-[24px] font-[700] mb-2 text-black">Airport Transfers </H3>
              <P className="mb-6">RolDrive&#39;s airport transfers deliver punctual and luxurious chauffeur services to and from London&#39;s airports. Our professional chauffeurs and luxury vehicles guarantee a stress-free, comfortable travel experience for discerning passengers.</P>
              <div className="mb-3">
                <Link
                  href="https://www.roldrive.com/airport-transfers"
                  className="bg-primary text-white py-2 px-4 rounded-[3px] hover:bg-black"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-sm">
            <div className="">
              <Pic
                src="/images/services/roadshows-transfer.jpg"
                className="rounded-t-sm"
              />
            </div>
            <div className="py-4 px-[22px]">
              <H3 className="!text-[16px] !leading-[24px] font-[700] mb-2 text-black">Roadshow Transfers</H3>
              <P className="mb-6">RolDrive&#39;s roadshow transfer chauffeur services offer a seamless, luxurious experience for corporate clients. Our professional chauffeurs expertly navigate London&#39;s streets, ensuring timely arrivals and a smooth, stress-free journey for business events.</P>
              <div className="mb-3">
                <Link
                  href="https://www.roldrive.com/road-shows"
                  className="bg-primary text-white py-2 px-4 rounded-[3px] hover:bg-black"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-sm">
            <div className="">
              <Pic
                src="/images/services/intercity-transfer.jpg"
                className="rounded-t-sm"
              />
            </div>
            <div className="py-4 px-[22px]">
              <H3 className="!text-[16px] !leading-[24px] font-[700] mb-2 text-black">Intercity Transfers</H3>
              <P className="mb-6">RolDrive&#39;s intercity transfer chauffeur services provide a comfortable and efficient way to travel between cities. Our luxury vehicles and professional chauffeurs ensure a relaxing journey, making long-distance travel a breeze.</P>
              <div className="mb-3">
                <Link
                  href="https://www.roldrive.com/intercity-rides"
                  className="bg-primary text-white py-2 px-4 rounded-[3px] hover:bg-black"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
