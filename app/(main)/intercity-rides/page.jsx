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
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';
import { intercityData } from './intercityData';

const metadata = metadataConfig.intercityRides;

export default function Page() {
  return (
    <>
      <MetaTags metadata={metadata} />
      <ServicesBanner {...intercityData.bannerData} />
      <LuxuriousServiceSearch luxuriousServiceData={intercityData.luxuriousServiceData} />
      <TopPicks topPicksData={intercityData.topPicksData} />
      <TrustedPartners trustedPartnersData={intercityData.trustedPartnersData} />
      <div style={{ backgroundColor: '#11202D', height: '100px' }} />

      <ServicesFaq faqData={intercityData.faqData} />
      <CarClass />
      <Contact />
      <OurPresence />
      <Locations />
      <DownloadOurApp />
      <ServiceOfferings servicesData={intercityData.servicesData} />
    </>
  );
}
