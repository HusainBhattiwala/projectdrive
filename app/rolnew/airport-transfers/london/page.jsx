'use client';

import ServicesBanner from 'rolnew/comp/ServicesBanner';
import TopPicks from 'rolnew/comp/TopPicks';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import OurPresence from 'rolnew/section/home/OurPresence';
import Services from 'rolnew/comp/Services';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import FAQ from 'rolnew/comp/FAQ';
import MegaContent from 'rolnew/comp/MegaContent';
import CarClass from 'rolnew/comp/CarClass';
import BookModal from 'rolnew/comp/BookModal';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
  const [hideScrollDown, setHideScrollDown] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        setHideScrollDown(true);
      }
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const bannerData = {
    mainTitle: 'Airport Transfers London',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence',
    backgroundImage: '/rolnew/services/airport-transfer-banner.png',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const airportList = [
    {
      id: 1,
      image: '/rolnew/global/country/london.jpg',
      countryCode: 'GB',
      cityName: 'Heathrow Airport',
    },
    {
      id: 2,
      image: '/rolnew/global/country/london.jpg',
      countryCode: 'GB',
      cityName: 'Gatwick Airport',
    },
    {
      id: 3,
      image: '/rolnew/global/country/london.jpg',
      countryCode: 'GB',
      cityName: 'London City Airport',
    },
    {
      id: 4,
      image: '/rolnew/global/country/london.jpg',
      countryCode: 'GB',
      cityName: 'London Southend Airport',
    },
    {
      id: 5,
      image: '/rolnew/global/country/london.jpg',
      countryCode: 'GB',
      cityName: 'London Stansted Airport',
    },
    {
      id: 6,
      image: '/rolnew/global/country/london.jpg',
      countryCode: 'GB',
      cityName: 'Luton Airport',
    },
  ];

  return (
    <>
      {/* <BannerTitle mainTitle="Premium Chauffeur Service" description="Your exclusive and dependable chauffeur service indulgence." /> */}
      <ServicesBanner {...bannerData} hideScrollDown={hideScrollDown} />

      <TopPicks airportList={airportList} scrollRef={scrollRef} />

      <TrustedPartners />
      <div style={{ backgroundColor: '#11202D', height: '100px' }} />
      <Services />
      <FAQ />
      <CarClass />
      <Contact />
      <OurPresence />
      <Locations />
      <MegaContent />
      <DownloadOurApp />
      <BookModal />
    </>
  );
}
