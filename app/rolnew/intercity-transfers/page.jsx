import ServicesBanner from 'rolnew/comp/ServicesBanner';
import TopPicks from 'rolnew/comp/TopPicks';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import OurPresence from 'rolnew/section/home/OurPresence';
import Services from 'rolnew/section/home/Services';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import FAQ from 'rolnew/comp/FAQ';
import LuxuriousServiceSearch from 'rolnew/comp/LuxuriousServiceSearch';
import CarClass from 'rolnew/comp/CarClass';

export default function page() {
  const bannerData = {
    mainTitle: 'Premium Chauffeur Service',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/intercity-transfers-banner.png',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const LuxuriousServiceData = [
    {
      title: 'Fixed Price',
      desc: 'Fixed price service, ensuring that clients know the cost of their chauffeur service upfront without any hidden fees or unexpected charges.',
    },
    {
      title: 'Comfort & Luxury',
      desc: 'Our commitment to comfort and luxury ensures that every journey is not just a ride but a premium experience, characterised by top-tier vehicles and exceptional customer service.',
    },
    {
      title: 'Safety First Priority',
      desc: 'We place safety among our highest priorities, ensuring every journey is secure with handpicked chauffeurs trained in defensive driving.',
    },
    {
      title: 'Global Reach',
      desc: 'We offer a global reach in chauffeur services, ensuring seamless transportation across various international locations.',
    },
  ];

  const topPicksData = {
    title: 'Intercity Transfers',
    search: {
      dropdown1: 'Choose Starting Location',
      dropdown2: 'Choose Destination',
    },
    list: [
      {
        id: 1,
        image: '/rolnew/global/country/london.jpg',
        cityName: '[Roadshow Name]',
        countryCode: 'GB',
        address: '[Address]',
      },
      {
        id: 2,
        image: '/rolnew/global/country/london.jpg',
        cityName: '[Roadshow Name]',
        countryCode: 'GB',
        address: '[Address]',
      },
      {
        id: 3,
        image: '/rolnew/global/country/london.jpg',
        cityName: '[Roadshow Name]',
        countryCode: 'GB',
        address: '[Address]',
      },
      {
        id: 4,
        image: '/rolnew/global/country/london.jpg',
        cityName: '[Roadshow Name]',
        countryCode: 'GB',
        address: '[Address]',
      },
      {
        id: 5,
        image: '/rolnew/global/country/london.jpg',
        cityName: '[Roadshow Name]',
        countryCode: 'GB',
        address: '[Address]',
      },
    ],
  };

  return (
    <>
      <ServicesBanner {...bannerData} />
      <LuxuriousServiceSearch LuxuriousServiceData={LuxuriousServiceData} />
      <TopPicks topPicksData={topPicksData} />
      <TrustedPartners />
      <div style={{ backgroundColor: '#11202D', height: '100px' }} />
      <Services />
      <FAQ />
      <CarClass />
      <Contact />
      <OurPresence />
      <Locations />
      <DownloadOurApp />
    </>
  );
}
