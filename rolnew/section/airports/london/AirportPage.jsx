"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Banner from "rolnew/section/cities/Banner";
import OurFeet from "rolnew/section/home/OurFeet";
import Locations from "rolnew/comp/Locations";
import Contact from "rolnew/comp/Contact";
import DownloadOurApp from "rolnew/section/home/DownloadOurApp";
import AirportBookingFlow from "rolnew/comp/AirportBookingFlow";
import Services from "rolnew/section/home/Services";
import ServicesFaq from "rolnew/comp/ServicesFaq";
import ServiceOfferings from "rolnew/comp/ServiceOfferings";
import { airportData } from "./airportData";
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';

const airports = [
  { "name": "heathrow", "value": "airport-transfer-heathrow", "meta": "heathrowTransfer" },
  { "name": "gatwick", "value": "airport-transfer-gatwick", "meta": "gatwickTransfer" },
  { "name": "londoncity", "value": "airport-transfer-london-city", "meta": "londonCityTransfer" },
  { "name": "londonsouthend", "value": "airport-transfer-london-southend", "meta": "southendTransfer" },
  { "name": "londonstansted", "value": "airport-transfer-london-stansted", "meta": "stanstedTransfer" },
  { "name": "luton", "value": "airport-transfer-luton", "meta": "lutonTransfer" },
];

function AirportPage() {
  const [pageData, setPageData] = useState({});
  const [metaContent, setMetaContent] = useState({});
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const urls = pathName.split("/");
    const url = urls[urls.length - 1];
    const airport = airports.find(airport => airport.value === url);

    if (!airport) {
      router.push("/404");
    } else {
      console.log(airportData[url]);
      setPageData(airportData[airport.name]);
      setMetaContent(metadataConfig[airport.meta]);
    }
    console.log(pageData);
  }, [pathName, router]);
  return (
    <>
      <MetaTags metadata={metaContent} />
      <Banner pageData={pageData} />
      <AirportBookingFlow pageData={pageData} />
      <OurFeet showBooking pageData={pageData} />
      <Services servicesData={pageData?.servicesData} />
      <Locations />
      <Contact />
      <ServicesFaq faqData={pageData?.faqData} />
      <ServiceOfferings servicesData={pageData?.offeringData} />
      <DownloadOurApp />
    </>
  );
}

export default AirportPage;
