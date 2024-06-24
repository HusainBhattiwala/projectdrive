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
    mainTitle: 'Corporate Chauffeur Service',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/Corporate.jpg',
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
    desc: 'Corporate transfers with us provide a professional and efficient solution for your business travel needs. Whether attending meetings, conferences, or airport transfers, we ensure a punctual and comfortable experience. Our fleet includes premium vehicles that cater to the specific needs and preferences of corporate clients, enhancing the professional image and productivity of each journey.',
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

  const servicesData = {
    heading: {
      mainTitle: 'About Corporate Chauffeur',
    },
    data: [
      {
        title: 'What are RolDrive’s corporate car hire coverage zones?',
        desc: 'RolDrive provides its corporate car hire services in and around the following locations. Our professional chauffeurs will transport clients to and from locations in absolute comfort, safety and style.',
      },
      {
        title:
          'RolDrive’s corporate chauffeur car hire covers the following locations:',
        desc: 'corporate chauffeur London, corporate chauffeur Dubai, corporate chauffeur Paris, corporate chauffeur New York, corporate chauffeur Japan',
      },
      {
        title: 'What is a corporate chauffeur hire?',
        desc: 'A corporate event chauffeur hire refers to a specialised service tailored for business use, providing companies with reliable, high-quality transportation for executives, clients, and employees. This service ensures punctuality and professionalism, utilising luxury vehicles that offer comfort and are equipped with modern amenities suitable for a corporate setting. A corporate chauffeur hire service is particularly useful for travel to meetings, airport transfers, corporate events, and roadshows. Employing a corporate chauffeur service enhances the corporate image and ensures that transportation is handled efficiently and safely, allowing business professionals to focus on their work without the stress of navigating traffic or managing travel logistics.',
      },
      {
        title: 'Are corporate chauffeurs reliable?',
        desc: 'Yes, corporate chauffeurs are highly reliable. For a corporate event chauffeur hire, these professionals undergo rigorous training in driving, customer service, and safety protocols to ensure they meet the high standards expected in corporate environments. Corporate chauffeurs are accustomed to handling sensitive business matters discreetly and efficiently, making them trustworthy partners for transporting executives and clients. Companies like RolDrive ensure their chauffeurs have a solid background in corporate services, providing peace of mind to businesses that their transportation needs are handled with utmost professionalism and punctuality. This reliability is crucial for maintaining a smooth operation of business schedules and enhancing the corporate travel experience.',
      },
      {
        title: 'What vehicles are offered for corporate transfers?',
        desc: 'For corporate event chauffeur hire, vehicles are selected to meet the specific needs of business environments, emphasising comfort, style, and functionality. The fleet typically includes luxury sedans such as the Mercedes Benz S Class, known for its comfort and sophisticated presence. For larger groups or higher-tier executives, SUVs like the Range Rover offer spacious interiors and a commanding road presence. Additionally, for group transfers or events, executive shuttles or coaches are available such as the Mercedes Benz V Class, providing efficient transportation for larger parties while maintaining high standards of luxury and convenience. Each vehicle is equipped with modern amenities to ensure a productive and relaxing environment for passengers.',
      },
      {
        title: 'How much does a corporate chauffeur transfer cost?',
        desc: 'The cost of a corporate chauffeur transfer can vary significantly based on several factors, including the type of vehicle selected, the duration of the hire, the distance to be travelled, and any specific requirements unique to the corporate event. For corporate event chauffeur hire, companies might also consider the level of service required, such as the provision of additional amenities or custom requests that can influence the overall price. Typically, services are tailored to meet the specific needs of the event or business, making it essential to consult directly with the service provider for a detailed quote. Companies like RolDrive often provide customised quotations based on the clients detailed requirements to ensure the service matches the expected standards and logistics of corporate needs. So its best to contact RolDrive directly to know how much your corporate transfer will cost.',
      },
    ],
  };

  const faqData = {
    title: 'Frequently Asked Questions About Corporate Chauffeur Service',
    data: [
      {
        id: 0,
        question:
          "What services are included in RolDrive's corporate chauffeur hire?",
        ans: 'RolDrive offers dedicated services like airport transfers, business meeting transport, company event shuttles, and daily commute programs tailored to corporate needs.',
      },
      {
        id: 1,
        question: 'How can I set up a corporate account with RolDrive?',
        ans: 'Businesses can set up a corporate account directly on RolDrive’s website or by contacting our customer service to gain access to streamlined booking and tailored services.',
      },
      {
        id: 2,
        question:
          'What types of vehicles are available for corporate chauffeur hire?',
        ans: 'RolDrives fleet for corporate clients includes luxury sedans, executive SUVs, and minivans, all equipped with amenities conducive to a professional environment.',
      },
      {
        id: 3,
        question:
          'Are RolDrives chauffeurs trained to handle corporate clients?',
        ans: 'Yes, chauffeurs are professionally trained to provide discreet and efficient service, understanding the nuances of corporate etiquette and client privacy.',
      },
      {
        id: 4,
        question: 'What are the payment options for corporate clients?',
        ans: 'RolDrive accepts various payment methods including corporate credit cards, bank transfers, and invoicing, offering flexible payment solutions for businesses.',
      },
      {
        id: 5,
        question: 'Can RolDrive accommodate corporate events of large scale?',
        ans: 'Yes, RolDrive has extensive experience in managing transportation for large corporate events and can coordinate multiple vehicles for group transfers.',
      },
      {
        id: 6,
        question:
          'Is there a minimum booking time for corporate chauffeur hire?',
        ans: 'No, there is no minimum booking time for corporate chauffeur hire bookings. ',
      },
      {
        id: 7,
        question: 'How does RolDrive ensure reliability and punctuality?',
        ans: 'RolDrive uses advanced scheduling technology and real-time monitoring to ensure chauffeurs arrive on time and routes are efficiently planned.',
      },
      {
        id: 8,
        question:
          'Can the corporate chauffeur hire be customised according to specific business needs?',
        ans: 'Absolutely, RolDrive prides itself on its ability to tailor services according to specific corporate requirements, including custom branding of vehicles for events.',
      },
      {
        id: 8,
        question:
          'What measures does RolDrive take for safety and compliance in corporate services?',
        ans: 'RolDrive adheres to strict safety protocols, regularly maintains its fleet, and ensures that all chauffeurs are vetted and trained in defensive driving and safety.',
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
