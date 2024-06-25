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
import LuxuriousServiceSearch from 'rolnew/comp/LuxuriousServiceSearch';

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
    mainTitle: 'Best Airport Transfers',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence',
    backgroundImage: '/rolnew/services/airport-transfer-banner.png',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
    {
      title: 'Fixed Price',
      desc: 'Fixed price service, ensuring transparency and predictability in costs for your transportation needs. No hidden charges or surprises.',
    },
    {
      title: 'Free Meet & Greet',
      desc: 'We enhance your travel experience with our complimentary Meet & Greet service, ensuring a personal and welcoming touch upon your arrival.',
    },
    {
      title: '60 Mins Free Waiting Time',
      desc: 'Delayed flight? We offer a convenient service with 60 minutes of free waiting time, ensuring flexibility and peace of mind upon your arrival.',
    },
    {
      title: '24/7 Flight Tracking',
      desc: 'Our 24/7 flight tracking ensures your chauffeur is always on time, even if your flight isn\'t.',
    },
  ];

  const topPicksData = {
    title: 'Airport Transfers',
    desc: 'Our airport transfer services provide pre-arranged transportation from the airport directly to your chosen destination, whether it\'s your home, hotel, or office. We eliminate the stress of travel, ensuring you can relax and enjoy the journey. With 24/7 availability and real-time flight tracking, you can trust us to deliver timely and reliable service.',
    search: {
      dropdown1: 'Choose Your City',
      dropdown2: 'Choose Your Airport',
    },
    list: [
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
    ],
  };

  return (
    <>
      {/* <BannerTitle mainTitle="Premium Chauffeur Service" description="Your exclusive and dependable chauffeur service indulgence." /> */}
      <ServicesBanner {...bannerData} hideScrollDown={hideScrollDown} />

      <LuxuriousServiceSearch luxuriousServiceData={luxuriousServiceData} />

      <TopPicks topPicksData={topPicksData} scrollRef={scrollRef} />

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
