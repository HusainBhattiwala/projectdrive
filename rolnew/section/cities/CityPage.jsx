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
import { cityData } from "./cityData";
import BookModal from "rolnew/comp/BookModal";
import ServiceOfferings from "rolnew/comp/ServiceOfferings";
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';

const cities = [
  { "name": "london", "value": "chauffeur-service-in-london", "meta": "londonChauffeur" },
  { "name": "dubai", "value": "chauffeur-service-in-dubai", "meta": "dubaiChauffeur" },
  { "name": "newyork", "value": "chauffeur-service-in-new-york", "meta": "newYorkChauffeur" },
  { "name": "paris", "value": "chauffeur-service-in-paris", "meta": "parisChauffeur" },
  { "name": "tokyo", "value": "chauffeur-service-in-tokyo", "meta": "tokyoChauffeur" },
];

function CityPage() {
  const [pageData, setPageData] = useState(null);
  const [metaContent, setMetaContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const urls = pathName.split("/");
    const url = urls[urls.length - 1];
    const city = cities.find(city => city.value === url);

    if (!city) {
      router.push("/404");
    } else {
      const fetchedData = cityData[city.name];
      setPageData(fetchedData);
      setMetaContent(fetchedData?.metaContent || {});
      setIsLoading(false);
    }
  }, [pathName, router]);

  useEffect(() => {
    console.log("Meta content loaded:", metaContent);
    setMetaContent(metaContent)
  }, [metaContent]);

  if (isLoading || !pageData) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <>
      {metaContent && Object.keys(metaContent).length > 0 && (
        <MetaTags metadata={metaContent} />
      )}
      <Banner pageData={pageData} />
      <div className="bg-[#11202D] py-12">
        <TrustedPartners
          img={pageData?.trustedPartnersData?.img}
          trustedPartnersData={pageData?.trustedPartnersData?.data}
          showTitle={false}
        />
      </div>
      <OurFeet showBooking pageData={pageData} />
      <Landmark pageData={pageData} />
      <Locations showPadding />
      <Contact />
      <Destinations destinationData={pageData?.destinationData?.restaurants} />
      <DownloadOurApp />
      <Destinations destinationData={pageData?.destinationData?.hotel} />
      <ServicesFaq faqData={pageData?.faqData} />
      <ServiceOfferings servicesData={pageData?.offeringData} />
      <BookModal />
    </>
  );
}

export default CityPage;

// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import Banner from "rolnew/section/cities/Banner";
// import TrustedPartners from "rolnew/comp/TrustedPartners";
// import OurFeet from "rolnew/section/home/OurFeet";
// import Locations from "rolnew/comp/Locations";
// import Contact from "rolnew/comp/Contact";
// import Destinations from "rolnew/section/home/Destinations";
// import DownloadOurApp from "rolnew/section/home/DownloadOurApp";
// import ServicesFaq from "rolnew/comp/ServicesFaq";
// import Landmark from "rolnew/section/cities/LandMark";
// // import ChauffeurServiceDescription from 'rolnew/comp/ChauffeurServiceDescription';
// //import Airports from 'rolnew/comp/Airports';
// import { cityData } from "./cityData";
// import BookModal from "rolnew/comp/BookModal";
// import ServiceOfferings from "rolnew/comp/ServiceOfferings";
// import metadataConfig from 'rolnew/meta/metadataConfig';
// import MetaTags from 'rolnew/meta/MetaTags';

// const cities = [
//   { "name": "london", "value": "chauffeur-service-in-london", "meta": "londonChauffeur" },
//   { "name": "dubai", "value": "chauffeur-service-in-dubai", "meta": "dubaiChauffeur" },
//   { "name": "newyork", "value": "chauffeur-service-in-new-york", "meta": "newYorkChauffeur" },
//   { "name": "paris", "value": "chauffeur-service-in-paris", "meta": "parisChauffeur" },
//   { "name": "tokyo", "value": "chauffeur-service-in-tokyo", "meta": "tokyoChauffeur" },
// ];

// function CityPage() {
//   const [pageData, setPageData] = useState({});
//   // const [metaContent, setMetaContent] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const pathName = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const urls = pathName.split("/");
//     const url = urls[urls.length - 1];
//     const city = cities.find(city => city.value === url);

//     if (!city) {
//       router.push("/404");
//     } else {

//       console.log(cityData[url]);
//       setPageData(cityData[city.name]);
//       setIsLoading(false);
//       // setMetaContent(metadataConfig[city.meta] || {});
//     }
//   }, [pathName, router]);
//   console.log("Metadata content update == " + pageData.metaContent);

//   if (isLoading || !pageData) {
//     return <div>Loading...</div>; // Show a loading indicator while fetching data
//   }

//   return (
//     <>
//       {/* <MetaTags metadata={pageData?.metaContent} /> */}
//       {/* {Object.keys(pageDatametaContent).length > 0 && <MetaTags metadata={pageData?.metaContent} />} */}
//       {pageData?.metaContent && <MetaTags metadata={pageData.metaContent} />}
//       <Banner pageData={pageData} />
//       <div className="bg-[#11202D] py-12">
//         <TrustedPartners
//           img={pageData?.trustedPartnersData?.img}
//           trustedPartnersData={pageData?.trustedPartnersData?.data}
//           showTitle={false}
//         />
//       </div>
//       <OurFeet showBooking pageData={pageData} />
//       <Landmark pageData={pageData} />
//       {/* <Airports airportsData={pageData?.airportsData} show={pageData?.airportsData?.show}/> */}
//       <Locations showPadding />
//       <Contact />
//       <Destinations destinationData={pageData?.destinationData?.restaurants} />
//       <DownloadOurApp />
//       <Destinations destinationData={pageData?.destinationData?.hotel} />
//       <ServicesFaq faqData={pageData?.faqData} />
//       {/* <ChauffeurServiceDescription
//         ChauffeurServiceDescription={pageData.ChauffeurServiceDescription}
//       /> */}
//       <ServiceOfferings servicesData={pageData?.offeringData} />
//       <BookModal />
//     </>
//   );
// }

// export default CityPage;
