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
    mainTitle: 'Private Jet Chauffeur',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/intercity-transfers-banner.png',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
    {
      title: 'FBO Pickup',
      desc: 'We provide a Private Jet FBO Pickup service, ensuring a seamless and luxurious transition from your private jet to your next destination.',
    },
    {
      title: 'Free Meet & Greet',
      desc: 'Our free Meet & Greet service ensures a personalised welcome upon your arrival. A professional chauffeur greets you at the airport, assists with luggage, and guides you to your luxury vehicle.',
    },
    {
      title: 'Free Waiting Time',
      desc: 'We offer a service advantage with free waiting time, ensuring stress-free pickups especially when flights are delayed or travel plans change unexpectedly.',
    },
    {
      title: 'Private Jet Tracking System',
      desc: 'We offer comprehensive 24/7 flight tracking to ensure timely pickups and drop-offs, adjusting for any flight delays or changes.',
    },
  ];

  const topPicksData = {
    title: 'Event Transfers',
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
      desc: 'RolDrives chauffeur service is renowned for its safety and discretion, providing secure, private transportation with expertly trained chauffeurs committed to maintaining confidentiality and ensuring passenger safety on every journey.',
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Punctual',
      desc: 'RolDrives punctual chauffeur service guarantees timely arrivals with skilled drivers who adeptly navigate to ensure you reach your destinations on schedule, every time.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Professional Chauffeurs',
      desc: "RolDrive's professional chauffeur service offers reliable, punctual, and discreet transportation with highly trained chauffeurs, ensuring a luxurious and comfortable travel experience for every client.",
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'A Great Fleet',
      desc: 'RolDrives vast fleet includes a wide array of luxurious vehicles, from sleek sedans and spacious SUVs to elegant limousines, tailored to meet any travel need or preference.',
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
