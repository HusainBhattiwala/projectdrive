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
    mainTitle: 'Event Transportation',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/Event Transfer Service.jpg',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
    {
      title: 'Transparent Pricing',
      desc: 'We offer transparent pricing for our services, ensuring no hidden fees and clear costs upfront for peace of mind.',
    },
    {
      title: 'Bespoke Services',
      desc: 'We offer bespoke services tailored to individual preferences and requirements, ensuring a personalised and luxurious travel experience.',
    },
    {
      title: 'Dedicated Event Manager',
      desc: 'We provide a dedicated Event Manager service, ensuring your events transportation needs are meticulously planned and executed with precision.',
    },
    {
      title: 'Pre-Scheduling',
      desc: 'Our pre-scheduling service allows clients to book their chauffeur-driven journeys in advance, ensuring timely and reliable transportation tailored to their schedules and locations.',
    },
  ];

  const topPicksData = {
    title: 'Events Transfers',
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
      desc: 'RolDrive is renowned for its punctuality, ensuring clients arrive at their destinations on time. Our commitment to schedule adherence is supported by precise planning and real-time traffic monitoring.',
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Safe & Discreet',
      desc: 'RolDrive prioritises safety and discretion, employing only expertly trained chauffeurs and using secure, well-maintained vehicles to ensure privacy and reliability for all passengers.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Professional Chauffeurs',
      desc: 'RolDrives professional chauffeurs always wear a suit and tie, ensuring a polished appearance for all occasions. This reflects our commitment to professionalism and high service standards.',
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'A Great Fleet',
      desc: 'RolDrives vast fleet features a diverse range of luxury vehicles, from elegant sedans and spacious SUVs to high-end limousines, all meticulously maintained to meet various travel preferences and needs.',
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
