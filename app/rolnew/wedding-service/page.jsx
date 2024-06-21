import ServicesBanner from 'rolnew/comp/ServicesBanner';
import TopPicks from 'rolnew/comp/TopPicks';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import OurPresence from 'rolnew/section/home/OurPresence';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import FAQ from 'rolnew/comp/FAQ';
import LuxuriousServiceSearch from 'rolnew/comp/LuxuriousServiceSearch';
import CarClass from 'rolnew/comp/CarClass';

export default function Page() {
  const bannerData = {
    mainTitle: 'Wedding Chauffeur Service',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage:
      '/rolnew/services/banners/Wedding Chauffeur Service in London.jpg',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
    {
      title: 'Lower Rates',
      desc: 'We offer competitive lower rates, providing cost-effective luxury travel solutions without compromising on quality.',
    },
    {
      title: 'Luxury Vehicles',
      desc: 'We offer an array of luxury vehicles to ensure a prestigious and comfortable travel experience tailored to your preferences and requirements',
    },
    {
      title: 'Flexibility',
      desc: 'We are renowned for our flexibility, accommodating a wide range of client needs and preferences. Whether you require sudden changes to your itinerary, different pickup times, or specific vehicle requests.',
    },
    {
      title: 'Pre-Scheduling',
      desc: 'Need multiple vehicles for various locations? We offer convenient pre-scheduling for our chauffeur services, allowing you to book your rides in advance thus ensuring organised transportation.',
    },
  ];

  const topPicksData = {
    title: 'Wedding Transfers',
    search: {
      dropdown1: 'Choose Your City',
      dropdown2: 'Enter Event Name',
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

  const trustedPartnersData = [
    {
      icon: '/rolnew/global/icons/shield-user-line.svg',
      title: 'Punctual',
      desc: 'RolDrive is renowned for its punctuality, ensuring guests arrive at their destinations on time, every time. Our commitment to timely service helps make your special day a grand and memorable one.',
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Professional Chauffeurs',
      desc: 'Dressed in a suit and tie, RolDrives chauffeurs look the part for any event, especially during a wedding when opening the door for the bride or groom.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Knowledgable Chauffeurs',
      desc: "RolDrive's chauffeurs are highly knowledgeable, trained in local geography and etiquette, ensuring passengers not only travel in comfort but also receive insightful, professional service during their journey.",
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'Safe & Discreet',
      desc: 'RolDrive prioritises safety and discretion, employing only expertly trained chauffeurs and utilising secure, well-maintained vehicles to ensure privacy and reliability for all passengers.',
    },
  ];

  return (
    <>
      <ServicesBanner {...bannerData} />
      <LuxuriousServiceSearch luxuriousServiceData={luxuriousServiceData} />
      <TopPicks topPicksData={topPicksData} />
      <TrustedPartners trustedPartnersData={trustedPartnersData} />
      <div style={{ backgroundColor: '#11202D', height: '100px' }} />
      <FAQ />
      <CarClass />
      <Contact />
      <OurPresence />
      <Locations />
      <DownloadOurApp />
    </>
  );
}
