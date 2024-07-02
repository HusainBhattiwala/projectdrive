import ServicesBanner from 'rolnew/comp/ServicesBanner';
import TopPicks from 'rolnew/comp/TopPicks';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import OurPresence from 'rolnew/section/home/OurPresence';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import LuxuriousServiceSearch from 'rolnew/comp/LuxuriousServiceSearch';
import CarClass from 'rolnew/comp/CarClass';
import ServiceOfferings from 'rolnew/comp/ServiceOfferings';
import ServicesFaq from 'rolnew/comp/ServicesFaq';
import { sightseeingData } from './sightseingData';

export default function Page() {
  return (
    <>
      <ServicesBanner {...sightseeingData.bannerData} />
      <LuxuriousServiceSearch luxuriousServiceData={sightseeingData.luxuriousServiceData} />
      <TopPicks topPicksData={sightseeingData.topPicksData} />
      <TrustedPartners trustedPartnersData={sightseeingData.trustedPartnersData} />
      <div style={{ backgroundColor: '#11202D', height: '100px' }} />
      <ServicesFaq faqData={sightseeingData.faqData} />
      <CarClass />
      <Contact />
      <OurPresence />
      <Locations />
      <DownloadOurApp />
      <ServiceOfferings servicesData={sightseeingData.servicesData} />
    </>
  );
}
