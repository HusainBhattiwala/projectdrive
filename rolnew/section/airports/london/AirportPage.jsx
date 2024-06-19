'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Banner from 'rolnew/section/cities/Banner';
import OurFeet from 'rolnew/section/home/OurFeet';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import FAQ from 'rolnew/comp/FAQ';
import AirportBookingFlow from 'rolnew/comp/AirportBookingFlow';
import Services from 'rolnew/section/home/Services';

import { airportData } from './airportData';

const airports = [
  'heathrow',
  'gatwick',
  'londoncity',
  'londonsouthend',
  'londonstansted',
  'luton',
];

function AirportPage() {
  const [pageData, setPageData] = useState({});
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const urls = pathName.split('/');
    const url = urls[urls.length - 1];
    if (!airports.includes(url)) {
      router.push('/404');
    } else {
      console.log(airportData[url]);
      setPageData(airportData[url]);
    }
  }, [pathName, router]);
  return (
    <>
      <Banner pageData={pageData} />
      <AirportBookingFlow pageData={pageData} />
      <OurFeet showBooking />
      <Services />
      <Locations />
      <Contact />
      <FAQ />
      <DownloadOurApp />
    </>
  );
}

export default AirportPage;