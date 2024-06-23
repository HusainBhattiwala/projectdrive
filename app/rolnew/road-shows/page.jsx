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
import ServiceOfferings from 'rolnew/comp/ServiceOfferings';

export default function page() {
  const bannerData = {
    mainTitle: 'Roadshow Transfers',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/roadshow (1).jpg',
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
    desc: "RolDrive's roadshow transfers provide seamless transportation solutions tailored for corporate clients and professionals attending multi-stop events. This service guarantees punctuality and comfort, with luxury vehicles and experienced chauffeurs ensuring smooth transitions between various venues, critical for maintaining schedules and professional appearances during high-stakes roadshows.",
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

  const servicesData = {
    heading: {
      mainTitle: 'About Roadshow Transfers',
    },
    data: [
      {
        title: 'What are RolDrive’s roadshow transfer coverage zones?',
        desc: 'RolDrive provides its roadshow chauffeur service in the following locations. Our professional and discreet chauffeurs will take you to your locations in absolute comfort and style.',
      },
      {
        title:
          'RolDrive’s roadshow chauffeur service covers the following locations:',
        desc: 'Roadshow transfer from London, Roadshow transfer from Dubai, Roadshow transfer from Paris, Roadshow transfer from New York, Roadshow transfer from Tokyo',
      },
      {
        title: 'What is a roadshow chauffeur service?',
        desc: 'RolDrives roadshow chauffeur service caters to corporate clients needing precise, reliable transportation across multiple scheduled stops, typically for business meetings, presentations, or site visits. This service emphasises punctuality, consistency, and high-quality service, ensuring that these individuals can move efficiently and comfortably between venues without the stress of navigating or timing. Chauffeurs are experienced with complex itineraries and are trained to handle the dynamic nature of roadshows, adapting quickly to any schedule changes. RolDrives roadshow service offers a fleet of luxury vehicles, equipped to provide a mobile office environment, enabling productivity en route and maintaining a professional image throughout the journey. This service is ideal for clients who require flawless execution and a high degree of coordination. RolDrive even provides a dedicated event manager to oversee the process and ensure a smooth transition between venues.',
      },
      {
        title: 'Why hire a roadshow chauffeur service?',
        desc: 'Hiring a roadshow chauffeur service through RolDrive provides numerous advantages for businesses coordinating multi-stop events. RolDrive ensures precision in scheduling and routing, which is crucial for maintaining tight roadshow itineraries. Our experienced chauffeurs are professionally trained to handle the dynamics of corporate roadshows, offering a discreet and efficient service that aligns with corporate professionalism. RolDrives luxurious and diverse fleet can accommodate any group size or preference, enhancing the comfort and image of the travelling individuals. Furthermore, the reliability and high standards of service help to alleviate the stress of planning and executing complex itineraries, allowing business professionals to focus on their engagements rather than logistics. This seamless integration of transportation ensures that roadshows are conducted smoothly, bolstering the success of business operations.',
      },
      {
        title: 'What vehicles are offered for a roadshow chauffeur service?',
        desc: 'For roadshow chauffeur services, RolDrive offers a premium selection of vehicles tailored to meet the demands of corporate and executive travel. Our fleet includes luxury sedans such as the Mercedes Benz S Class, known for its comfort and sophistication, ideal for navigating city traffic and long distances. For larger groups or additional space, SUVs like the Range Rover provide luxury with more room. Executive MPVs such as the Mercedes V Class are available for groups needing a balance of comfort and functionality, perfect for teams moving together between venues. Each vehicle is chosen for its reliability, style, and ability to provide a conducive environment for productivity and relaxation on the move.',
      },
    ],
  };

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
      <ServiceOfferings servicesData={servicesData} />
    </>
  );
}
