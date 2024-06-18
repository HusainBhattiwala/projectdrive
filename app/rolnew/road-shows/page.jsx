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
    backgroundImage: '/rolnew/services/road-shows-banner.jpg',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const LuxuriousServiceData = [
    {
      title: 'Transparent Pricing',
      desc: 'We offer transparent pricing for our services, ensuring there are no hidden fees.',
    },
    {
      title: 'Bespoke Services',
      desc: 'Our bespoke services are tailored to meet your specific needs, ensuring a personalised and exclusive experience.',
    },
    {
      title: 'Dedicated Event Manager',
      desc: 'We provide a dedicated Event Manager service to ensure your event transportation is flawless. This professional oversees all logistics related to your travel needs',
    },
    {
      title: 'Pre-Scheduling',
      desc: 'We offer a convenient pre-scheduling service, allowing you to arrange your transportation needs in advance for a seamless experience. This service is ideal for ensuring timely and reliable travel',
    },
  ];

  const topPicksData = {
    title: 'Roadshows',
    search: {
      dropdown1: 'Choose Your City',
      dropdown2: 'Choose Roadshows',
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
