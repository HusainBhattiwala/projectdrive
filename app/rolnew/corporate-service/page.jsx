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
    mainTitle: 'Corporate Chauffeur Service',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/Corporate Chauffeur Service.jpg',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
    {
      title: 'Business Solutions',
      desc: 'We offer comprehensive business solutions tailored to meet the transportation needs of companies and professionals. Our services are designed to provide reliable, efficient, and sophisticated travel options.',
    },
    {
      title: 'Multi-user Access',
      desc: 'Our multi-user access feature allows multiple individuals to manage bookings and travel arrangements efficiently through a single account.',
    },
    {
      title: 'Cost Centre BIlling',
      desc: 'Our cost centre billing simplifies the management of expenses for businesses by allowing direct billing to specific departments or project codes, facilitating accurate and efficient financial tracking.',
    },
    {
      title: 'Flight Tracking',
      desc: 'Our flight tracking service ensures timely pickups by monitoring your flights arrival time, adjusting the pickup schedule based on any delays or early arrivals to provide seamless transportation.',
    },
  ];

  const topPicksData = {
    title: 'Corporate Transfers',
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
      title: 'Knowledgable Chauffeurs',
      desc: 'RolDrives chauffeurs are highly knowledgeable, trained in local geography and skilled in navigating efficiently. They ensure a smooth, informed journey, enhancing the travel experience with their professionalism and expertise.',
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Professional Chauffeurs',
      desc: 'RolDrives professional chauffeurs are always impeccably dressed in a suit and tie, reflecting the high standards and professionalism expected in luxury transportation. Their attire ensures a polished appearance that complements the upscale experience of each journey.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Safe & Discreet',
      desc: "RolDrive's chauffeurs are known for their professionalism, ensuring safe and discreet service. They are rigorously trained in defensive driving and client confidentiality, providing peace of mind during every journey.",
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'A Great Fleet',
      desc: 'RolDrive boasts a vast fleet of luxury vehicles, ranging from sleek sedans and spacious SUVs to exclusive limousines and Sprinters, tailored to meet various travel needs and preferences for style and comfort.',
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
