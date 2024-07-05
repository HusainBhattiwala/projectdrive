import SupplierBanner from 'rolnew/comp/SupplierBanner';
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
      <SupplierBanner {...bannerData} />

      <div className="md:hidden" style={{ backgroundColor: '#223544', height: '100px' }} />
      <OurPresence />
      <Locations />

      <FAQ />
      <Services />
      <Contact />

      <DownloadOurApp />
    </>
  );
}
