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
    mainTitle: 'Event Transportation',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/event.jpg',
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
    desc: 'Our event transportation services offer reliable and stylish solutions for any occasion, ensuring guests arrive in comfort and on time. Catering to both corporate events and private gatherings, our fleet includes luxury vehicles that promise an impressive arrival and a smooth ride, enhancing any event experience. We provide our event transportation services on a global scale which includes our event chauffeur service in London',
    list: [
      {
        id: 1,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'London To Bicester Village',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 2,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'Wimbledon',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 3,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'Goodwood Event',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 4,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'Twickenham Stadium',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 5,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'London Fashion Week',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 6,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'Cheltenham Festival',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 7,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'Royal Windsor Horse Show',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 8,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'Wembley Stadium',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 9,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'Royal Sscot Full Day',
        countryCode: 'GB',
        address: 'London',
      },
      {
        id: 9,
        image: '/rolnew/global/country/london.jpg',
        cityName: 'Farnborough Airshow',
        countryCode: 'GB',
        address: 'London',
      },
    ],

    dropdownOneData: ['london'],
    dropdownTwoData: [
      'London To Bicester Village Car Hire',
      'Wimbledon Chauffeur Service',
      'Goodwood Event Chauffeur Service',
      'Twickenham Stadium Car Hire',
      ' London Fashion Week',
      'Cheltenham Festival Chauffeur Service',
      'Royal Windsor Horse Show Car Hire',
      'Wembley Stadium Chauffeur Services',
      'Royal Sscot Full Day Chauffeur Service',
      'Farnborough Airshow Chauffeur Service',
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

  const servicesData = {
    heading: {
      mainTitle: 'About Event Transportation',
    },
    data: [
      {
        title: 'What are RolDrive’s event transportation coverage zones?',
        desc: 'RolDrive provides its event transportation service in the following locations. Our professional and discreet chauffeurs will take you to your event in absolute comfort and style.',
      },
      {
        title:
          'RolDrive’s event transportation chauffeur service covers the following locations:',
        desc: 'Event transportation services London, Event transportation services Dubai, Event transportation services Paris, Event transportation services New York, Event transportation services Tokyo',
      },
      {
        title: 'What is an event transportation service?',
        desc: 'RolDrives event transportation service provides high-end, reliable ground transportation solutions tailored for various events such as weddings, corporate gatherings, galas, and conferences. This service ensures that all participants arrive at their destinations comfortably and punctually, reflecting a professional and organised image. RolDrives fleet includes a wide range of luxury vehicles to suit different group sizes and preferences, each driven by professional chauffeurs who are trained to handle the logistics of event transportation smoothly. By offering flexible scheduling, a dedicated event manager, route optimisation, and attentive customer service, RolDrive ensures that your event transportation is seamless, enhancing the overall experience of your event attendees.',
      },
      {
        title: 'Why hire an event transportation service?',
        desc: 'Hiring an event transportation service from RolDrive offers numerous benefits that enhance the experience of any special occasion. RolDrive guarantees punctuality, reliability, and exceptional service, ensuring that all guests arrive at the event comfortably and on time. Our fleet of luxury vehicles adds an elegant touch to your event, making a memorable impression on attendees. Furthermore, RolDrive provides professional chauffeurs who are experienced in navigating through traffic and handling all logistics, allowing organisers and guests to focus solely on the event without worrying about transportation details. Opting for RolDrive ensures a smooth, stress-free experience from start to finish, contributing to the success of your event.',
      },
      {
        title: 'What vehicles are offered for an event transportation service?',
        desc: 'RolDrive offers a diverse range of vehicles for its event transport hire services to cater to various preferences and needs. Our fleet includes luxury sedans like the Mercedes Benz S Class for executives or small groups seeking elegance and comfort. For larger groups, SUVs such as the Range Rover provide ample space and luxury. For weddings or special celebrations, limousines are available, adding a touch of glamour and sophistication. Additionally, for events requiring transportation of larger groups, RolDrive provides luxury minibuses and coaches such as the Mercedes Benz V Class that ensure comfort while maintaining a high standard of class and efficiency, making them suitable for corporate events, large family gatherings, or group tours. Each vehicle type is selected to offer reliability, style, and comfort to enhance the experience of event attendees.',
      },
    ],
  };

  const faqData = {
    title: 'Frequently Asked Questions About Event Transportation Service',
    data: [
      {
        id: 0,
        question:
          'What types of events does RolDrive provide transportation for?',
        ans: 'Event transportation services cover a wide range, including corporate events, weddings, conferences, galas, and sporting events.',
      },
      {
        id: 1,
        question: 'How far in advance should I book event transportation?',
        ans: 'Its recommended to book as soon as you have your event details finalised, typically several months in advance, to ensure availability and better rates.',
      },
      {
        id: 2,
        question: 'Can I view the vehicles before booking?',
        ans: 'Yes, most event transportation providers including RolDrive offer a pre-booking vehicle inspection upon request to ensure the selected vehicles meet your expectations.',
      },
      {
        id: 3,
        question: 'Are the drivers trained for event transportation?',
        ans: 'Yes, RolDrive drivers are specially trained in customer service and safety to handle the specific requirements of event transportation, ensuring professionalism and reliability.',
      },
      {
        id: 4,
        question: 'What happens if we need to extend our event time?',
        ans: 'RolDrives services are flexible with schedule changes; however, its best to discuss potential overages with your RolDrive dedicated event manager in advance as additional charges may apply.',
      },
      {
        id: 5,
        question: 'Can the vehicles be decorated for events like weddings?',
        ans: 'Yes, RolDrive allows vehicle decoration so your vehicles can be customised to the theme of the wedding event.',
      },
      {
        id: 6,
        question: 'Do you offer transportation for large groups?',
        ans: 'Yes, RolDrive’s event transportation can accommodate large groups with vehicles such as buses, coaches, or multiple cars depending on the size of the group. Please visit our fleet section to learn more about our fleet.',
      },
      {
        id: 7,
        question: 'Is there a minimum rental time for event transportation?',
        ans: 'Typically, there is a minimum booking requirement, often starting from a few hours, which can vary based on the event type.',
      },
      {
        id: 8,
        question: 'How are rates for event transportation calculated?',
        ans: 'Rates can be hourly, flat-rate based on the event, or customised depending on the number of vehicles, distance, and duration of the service.',
      },
      {
        id: 9,
        question: 'What is your cancellation policy?',
        ans: 'Its important to understand the terms during booking, especially for events that might be subject to change. Please ensure to ask RolDrive about our cancellation policy for event transportation beforehand.',
      },
    ],
  };

  return (
    <>
      <ServicesBanner {...bannerData} />
      <LuxuriousServiceSearch luxuriousServiceData={luxuriousServiceData} />
      <TopPicks topPicksData={topPicksData} show />
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
