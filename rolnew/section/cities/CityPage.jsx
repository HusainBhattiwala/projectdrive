"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Banner from "rolnew/section/cities/Banner";
import TrustedPartners from "rolnew/comp/TrustedPartners";
import OurFeet from "rolnew/section/home/OurFeet";
import Locations from "rolnew/comp/Locations";
import Contact from "rolnew/comp/Contact";
import Destinations from "rolnew/section/home/Destinations";
import DownloadOurApp from "rolnew/section/home/DownloadOurApp";
import ServicesFaq from "rolnew/comp/ServicesFaq";
import Landmark from "rolnew/section/cities/LandMark";
// import ChauffeurServiceDescription from 'rolnew/comp/ChauffeurServiceDescription';
//import Airports from 'rolnew/comp/Airports';
import { cityData } from "./cityData";
import BookModal from "rolnew/comp/BookModal";
import ServiceOfferings from "rolnew/comp/ServiceOfferings";

// const cities = ["chauffeur-service-in-london", "chauffeur-service-in-dubai", "chauffeur-service-in-new-york", "chauffeur-service-in-paris", "chauffeur-service-in-tokyo"];

const cities = [
  {"name" : "london", "value" : "chauffeur-service-in-london"},
  {"name" : "dubai", "value" : "chauffeur-service-in-dubai"},
  {"name" : "newyork", "value" : "chauffeur-service-in-new-york"},
  {"name" : "paris", "value" : "chauffeur-service-in-paris"},
  {"name" : "tokyo", "value" : "chauffeur-service-in-tokyo"},
];

function CityPage() {
  const [pageData, setPageData] = useState({});
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const urls = pathName.split("/");
    const url = urls[urls.length - 1];
    const city = cities.find(city => city.value === url);

    if (!city) {
      router.push("/404");
    } else {

      console.log(cityData[url]);
      setPageData(cityData[city.name]);
    }
  }, [pathName, router]);
  return (
    <>
      <Banner pageData={pageData} />
      <div className="bg-[#11202D] py-12">
        <TrustedPartners
          img={pageData?.trustedPartnersData?.img}
          trustedPartnersData={pageData?.trustedPartnersData?.data}
          showTitle={false}
        />
      </div>
      <OurFeet showBooking />
      <Landmark pageData={pageData} />
      {/* <Airports airportsData={pageData?.airportsData} show={pageData?.airportsData?.show}/> */}
      <Locations showPadding />
      <Contact />
      <Destinations destinationData={pageData?.destinationData?.restaurants} />
      <DownloadOurApp />
      <Destinations destinationData={pageData?.destinationData?.hotel} />
      <ServicesFaq faqData={pageData?.faqData} />
      {/* <ChauffeurServiceDescription
        ChauffeurServiceDescription={pageData.ChauffeurServiceDescription}
      /> */}
      <ServiceOfferings servicesData={pageData?.offeringData} />
      <BookModal />
    </>
  );
}

export default CityPage;
