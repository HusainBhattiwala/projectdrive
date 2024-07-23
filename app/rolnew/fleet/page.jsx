'use client';

import TrustedPartners from 'rolnew/comp/TrustedPartners';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import OurPresence from 'rolnew/section/home/OurPresence';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import CarClass from 'rolnew/comp/CarClass';
import FleetBanner from 'rolnew/comp/FleetBanner';
import { useEffect, useRef, useState } from 'react';
import ServicesFaq from 'rolnew/comp/ServicesFaq';
import { fleetData } from './fleetData';

export default function Page() {
  const [hideArrow, setHideArrow] = useState(false);

  const carClassRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (carClassRef.current) {
        carClassRef.current.scrollIntoView({ behavior: 'smooth' });
        setHideArrow(true);
      }
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <BannerTitle mainTitle="Premium Chauffeur Service" description="Your exclusive and dependable chauffeur service indulgence." /> */}
      <FleetBanner {...fleetData.bannerData} hideArrow={hideArrow} />
      <div ref={carClassRef}>
        <CarClass hideArrow={hideArrow} />
      </div>
      <TrustedPartners trustedPartnersData={fleetData.trustedPartnersData} />
      <OurPresence />
      <Locations />
      <ServicesFaq faqData={fleetData.faqData} />
      <Contact />
      <DownloadOurApp />
    </>
  );
}
