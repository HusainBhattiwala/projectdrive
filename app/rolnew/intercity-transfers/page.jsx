import ServicesBanner from 'rolnew/comp/ServicesBanner';
import TopPicks from 'rolnew/comp/TopPicks';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import OurPresence from 'rolnew/section/home/OurPresence';
import Services from 'rolnew/section/home/Services';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import FAQ from 'rolnew/comp/FAQ';

export default function page() {
  const bannerData = {
    mainTitle: 'Premium Chauffeur Service',
    mainDescription: 'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/intercity-transfers-banner.png',
    title: 'Do you want to customise your booking?',
    description: 'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  return (
    <>
      <ServicesBanner {...bannerData} />
      <TopPicks />
      <TrustedPartners />
      <div style={{ backgroundColor: '#11202D', height: '100px' }} />
      <Services />
      <FAQ />
      <Contact />
      <OurPresence />
      <Locations />
      <DownloadOurApp />
    </>
  );
}
