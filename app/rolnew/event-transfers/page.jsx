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
