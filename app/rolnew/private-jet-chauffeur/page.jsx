import ServicesBanner from 'rolnew/comp/ServicesBanner';
import TopPicks from 'rolnew/comp/TopPicks';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import OurPresence from 'rolnew/section/home/OurPresence';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import LuxuriousServiceSearch from 'rolnew/comp/LuxuriousServiceSearch';
import CarClass from 'rolnew/comp/CarClass';
import ServiceOfferings from 'rolnew/comp/ServiceOfferings';
import ServicesFaq from 'rolnew/comp/ServicesFaq';

export default function Page() {
  const bannerData = {
    mainTitle: 'Private Jet Chauffeur',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/private-jet-chauffeur.jpg',
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
    title: 'Private Jet Chauffeur',
    search: {
      dropdown1: 'Choose Your City',
      dropdown2: 'Enter Event Name',
    },
    desc: 'Our private jet chauffeur Service offers seamless, luxurious ground transportation tailored for discerning travellers using private aviation. This exclusive service ensures timely arrivals and departures, with elegant vehicles and professional chauffeurs enhancing the comfort and sophistication of your travel experience to and from private airfields.',
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
  const servicesData = {
    heading: {
      mainTitle: 'About Private Jet Chauffeur',
    },
    data: [
      {
        title: 'What are RolDrive’s private jet chauffeur coverage zones?',
        desc: 'RolDrive provides its private jet chauffeur service in the following locations. Our professional and discreet chauffeurs will take you to and from the tarmac in absolute comfort and style.',
      },
      {
        title:
          'RolDrive’s private jet chauffeur service covers the following locations:',
        desc: 'Private jet transfer London, Private jet transfer Dubai, Private jet transfer Paris, Private jet transfer New York, Private jet transfer Tokyo',
      },
      {
        title: 'What is a private jet chauffeur service?',
        desc: 'A private jet chauffeur service is a specialised transportation option designed for travellers using private aviation. This service offers seamless private jet transfers, ensuring a smooth connection between the airport and the passengers final destination. Tailored for comfort and convenience, it includes luxury vehicles ready at the tarmac upon arrival and professional chauffeurs who are trained to handle discreet and efficient travel needs. The service is customisable, accommodating specific requests such as preferred routes or on-board amenities. This premium service is ideal for those seeking privacy, speed, and high levels of service in their ground transportation, matching the exclusivity of private jet travel.',
      },
      {
        title: 'Why hire a private jet chauffeur service?',
        desc: 'Hiring a private jet chauffeur service enhances the seamless luxury and efficiency of private air travel. This specialised service ensures that your ground transportation is as personalised and comfortable as your flight. With a private jet transfer, you avoid the hassles of navigating through public airports or waiting for taxis. Instead, you are greeted by a professional chauffeur who manages all logistics from doorstep to runway, providing privacy, security, and comfort. This level of service is particularly beneficial for those with tight schedules or those seeking an exclusive, stress-free travel experience, making transitions between appointments or destinations smooth and effortless.',
      },
      {
        title: 'What vehicles are offered for a private jet chauffeur service?',
        desc: 'For private jet transfer services, the vehicle options are curated to meet the highest standards of luxury and comfort. Clients can choose from a range of top-tier vehicles such as Rolls Royce, Bentley, and Mercedes Benz S Class, which are popular for their elegance and superior comfort features. These vehicles are equipped with plush interiors, climate control, and privacy features like tinted windows, making them perfect for high-profile travellers seeking discretion. Additionally, for groups, luxury SUVs like the Range Rover are available, offering spacious seating without compromising on sophistication or performance. And for even larger groups, clients can always choose the Mercedes Benz V Class. Each vehicle in the fleet is maintained meticulously to ensure safety, reliability, and a first-class experience during every journey.',
      },
    ],
  };

  const faqData = {
    title: 'Frequently Asked Questions About Private Jet Chauffeur Service',
    data: [
      {
        id: 0,
        question: "What is RolDrive's private jet chauffeur service?",
        ans: "RolDrive's private jet chauffeur service, such as a private jet at Heathrow Airport, provides personalised transportation to and from airports, offering seamless connections between your flight and ground destinations.",
      },
      {
        id: 1,
        question:
          'How can I book a private jet chauffeur service with RolDrive?',
        ans: "You can book the private jet chauffeur service directly through RolDrive's website or contact our customer service for assistance and personalised arrangements.",
      },
      {
        id: 2,
        question:
          'What types of vehicles are available for the private jet chauffeur service?',
        ans: 'RolDrive offers a variety of luxury vehicles for private jet services, including sedans, SUVs, and limousines, all equipped to meet the high standards of comfort and elegance expected by private jet travellers.',
      },
      {
        id: 3,
        question: 'Are RolDrive’s chauffeurs trained for private jet services?',
        ans: 'Yes, chauffeurs dedicated to the private jet chauffeur service are specially trained to meet the unique needs of private aviation clients, focusing on discretion, punctuality, and professionalism.',
      },
      {
        id: 4,
        question:
          'Can I request specific amenities for my private jet chauffeur ride?',
        ans: 'Absolutely, RolDrive accommodates special requests such as specific beverages, newspapers, and onboard entertainment to enhance your travel experience.',
      },
      {
        id: 5,
        question:
          'Is there a minimum notice period required for booking a private jet chauffeur service?',
        ans: 'While RolDrive can often accommodate last-minute requests, it is advisable to book well in advance to guarantee the availability of specific vehicles and any customised amenities.',
      },
      {
        id: 6,
        question:
          'How does RolDrive ensure timely service for private jet clients?',
        ans: 'RolDrive uses advanced tracking and communication tools to monitor flight schedules and traffic conditions, ensuring chauffeurs are always on time for your arrival or departure.',
      },
      {
        id: 7,
        question:
          'What safety measures does RolDrive implement for its private jet chauffeur service?',
        ans: 'The safety of passengers is paramount; RolDrive’s vehicles are meticulously maintained, and chauffeurs are vetted and trained in defensive driving techniques.',
      },
      {
        id: 8,
        question:
          'Can RolDrive handle group transportation for private jet clients?',
        ans: 'Yes, RolDrive can arrange transportation for groups of any size, providing multiple vehicles if necessary to accommodate larger parties.',
      },
      {
        id: 9,
        question:
          'Is the private jet chauffeur service available internationally?',
        ans: 'RolDrive’s private jet chauffeur service is primarily available in major cities around the world where private jet facilities are located, facilitating global travel needs.',
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
      <ServicesFaq faqData={faqData} />
      <CarClass />
      <Contact />
      <OurPresence />
      <Locations />
      <DownloadOurApp />
      <ServiceOfferings servicesData={servicesData} />
    </>
  );
}
