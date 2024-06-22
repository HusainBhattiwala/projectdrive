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
    mainTitle: 'Roadshow Transfers',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/Roadshow.jpg',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
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

  const trustedPartnersData = [
    {
      icon: '/rolnew/global/icons/shield-user-line.svg',
      title: 'Scenic Journeys',
      desc: "RolDrive's roadshow transfers enhance travel with scenic journeys, meticulously planning routes that showcase breathtaking landscapes and cityscapes, turning ordinary transfers into memorable experiences.",
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Safe & Discreet',
      desc: 'RolDrive ensures safe and discreet roadshow transfers with highly trained chauffeurs, secure vehicles, and strict confidentiality, ideal for individuals needing privacy and security.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Professional Chauffeurs',
      desc: "RolDrive's professional chauffeurs consistently wear a suit and tie, ensuring they present a polished and respectful appearance, aligning with the company's commitment to high standards of service and professionalism.",
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'A Great Fleet',
      desc: 'RolDrives vast fleet includes an impressive array of luxury vehicles, ranging from sleek sedans and spacious SUVs to elegant limousines, all meticulously maintained for comfort and style.',
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
