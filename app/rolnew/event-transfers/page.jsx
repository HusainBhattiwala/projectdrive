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

export default function page() {
  const bannerData = {
    mainTitle: 'Event Transportation',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/intercity-transfers-banner.png',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const LuxuriousServiceData = [
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
      title: 'Safe & Discreet',
      desc: 'RolDrive ensures safe and discreet journeys, prioritising client privacy and security. Our experienced chauffeurs maintain professionalism, offering serene, secure travel tailored to your specific needs.',
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Professional Chauffeurs',
      desc: 'RolDrives professional chauffeurs are expertly trained, courteous, and dedicated to providing exceptional service. They cater to all your travel needs with utmost discretion and professionalism.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Trust & Reliability ',
      desc: 'RolDrive is renowned for its trust and reliability, ensuring every journey is secure and comfortable. We consistently provide timely, professional service, making us a trusted choice.',
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'A Great Fleet',
      desc: 'RolDrives fleet boasts a wide array of luxurious and well-maintained vehicles, offering everything from sleek sedans to spacious SUVs.',
    },
  ];

  return (
    <>
      <ServicesBanner {...bannerData} />
      <LuxuriousServiceSearch LuxuriousServiceData={LuxuriousServiceData} />
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
