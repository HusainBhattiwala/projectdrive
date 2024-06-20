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
    mainTitle: 'City Sightseeing',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/intercity-transfers-banner.png',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
    {
      title: 'Competitive Rates',
      desc: 'We offer competitive rates for our chauffeur services, ensuring that you receive excellent value without compromising on quality or luxury.',
    },
    {
      title: 'Free Amenities',
      desc: 'We enhance your travel experience by offering free amenities such as WiFi and water bottles in our vehicles, ensuring a comfortable and connected journey.',
    },
    {
      title: 'Chauffeured Tours',
      desc: 'Our chauffeured tours offer an expertly guided, personalised travel experience, allowing you to explore attractions in luxury and comfort.',
    },
    {
      title: 'Tour Planning',
      desc: 'We provide comprehensive tour planning services, ensuring a tailored and enjoyable travel experience by customising itineraries to suit personal interests and preferences.',
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
      title: 'Knowledgable Chauffeurs',
      desc: 'RolDrives chauffeurs are highly knowledgeable, expertly trained in local geography and customer service, ensuring a smooth, informative, and safe journey for every passenger they serve.',
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Professional Chauffeurs',
      desc: 'RolDrives professional chauffeurs are impeccably dressed in formal attire, maintaining a polished appearance that complements their courteous and discreet demeanour.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Safe & Discreet',
      desc: "RolDrive's chauffeurs are renowned for their safety and discretion, meticulously trained to maintain the utmost professionalism and confidentiality, ensuring secure, private travel experiences for all passengers.",
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'A Great Fleet',
      desc: 'RolDrives vast fleet includes a wide array of luxury vehicles ranging from elegant sedans and spacious SUVs to top-of-the-line limousines, ensuring a perfect match for any preference or occasion.',
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
