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


const airports = [
  "heathrow",
  "gatwick",
  "londoncity",
  "londonsouthend",
  "londonstansted",
  "luton",
];

function AirportPage() {
  const [pageData, setPageData] = useState({});
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const urls = pathName.split("/");
    const url = urls[urls.length - 1];
    if (!airports.includes(url)) {
      router.push("/404");
    } else {
      console.log(airportData[url]);
      setPageData(airportData[url]);
    }
    console.log(pageData);
  }, [pathName, router]);
  return (
    <>
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
