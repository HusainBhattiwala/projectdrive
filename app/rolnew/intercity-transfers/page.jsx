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
    mainTitle: 'Intercity Chauffeur Service',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/Intercity Transfer.jpg',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
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

  const trustedPartnersData = [
    {
      icon: '/rolnew/global/icons/shield-user-line.svg',
      title: 'Scenic Journeys',
      desc: "RolDrive's scenic journeys offer travelers a unique opportunity to explore breathtaking landscapes with unparalleled comfort and style, making every trip memorable and enjoyable.",
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Safe & Discreet',
      desc: 'RolDrive ensures safe and discreet journeys, offering privacy and security for all passengers. Our professional chauffeurs are trained in defensive driving and confidentiality, ideal for high-profile clients seeking undisturbed travel.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Professional Chauffeurs',
      desc: "RolDrive's professional chauffeurs are expertly trained, courteous, and dedicated to providing safe, timely, and discreet service, ensuring every journey is comfortable and stress-free. ",
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'A Great Fleet',
      desc: 'RolDrive boasts a diverse and extensive fleet, offering a variety of luxury vehicles to meet any preference or occasion, ensuring every journey is comfortable and stylish.',
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
