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
    mainTitle: 'Wedding Chauffeur Service',
    mainDescription:
      'Your exclusive and dependable chauffeur service indulgence.',
    backgroundImage: '/rolnew/services/banners/wedding T.jpg',
    title: 'Do you want to customise your booking?',
    description:
      'We offer customised bookings for any location, from bulk or intercity trips to monthly packages.',
  };

  const luxuriousServiceData = [
    {
      title: 'Lower Rates',
      desc: 'We offer competitive lower rates, providing cost-effective luxury travel solutions without compromising on quality.',
    },
    {
      title: 'Luxury Vehicles',
      desc: 'We offer an array of luxury vehicles to ensure a prestigious and comfortable travel experience tailored to your preferences and requirements',
    },
    {
      title: 'Flexibility',
      desc: 'We are renowned for our flexibility, accommodating a wide range of client needs and preferences. Whether you require sudden changes to your itinerary, different pickup times, or specific vehicle requests.',
    },
    {
      title: 'Pre-Scheduling',
      desc: 'Need multiple vehicles for various locations? We offer convenient pre-scheduling for our chauffeur services, allowing you to book your rides in advance thus ensuring organised transportation.',
    },
  ];

  const topPicksData = {
    title: 'Wedding Transfers',
    search: {
      dropdown1: 'Choose Your City',
      dropdown2: 'Enter Event Name',
    },
    desc: 'Our wedding transfer services provide elegant and reliable transportation for the big day, ensuring that couples and their guests arrive in style and comfort. These services include luxury vehicles suited for the special day, along with professional chauffeurs who ensure timely coordination and arrival at the ceremony, reception, or any other designated venues. This service allows everyone to enjoy the celebration without worrying about the logistics of travel.',
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
      desc: 'RolDrive is renowned for its punctuality, ensuring guests arrive at their destinations on time, every time. Our commitment to timely service helps make your special day a grand and memorable one.',
    },
    {
      icon: '/rolnew/global/icons/steering-wheel.svg',
      title: 'Professional Chauffeurs',
      desc: 'Dressed in a suit and tie, RolDrives chauffeurs look the part for any event, especially during a wedding when opening the door for the bride or groom.',
    },
    {
      icon: '/rolnew/global/icons/service-line.svg',
      title: 'Knowledgable Chauffeurs',
      desc: "RolDrive's chauffeurs are highly knowledgeable, trained in local geography and etiquette, ensuring passengers not only travel in comfort but also receive insightful, professional service during their journey.",
    },
    {
      icon: '/rolnew/global/icons/car-line.svg',
      title: 'Safe & Discreet',
      desc: 'RolDrive prioritises safety and discretion, employing only expertly trained chauffeurs and utilising secure, well-maintained vehicles to ensure privacy and reliability for all passengers.',
    },
  ];

  const servicesData = {
    heading: {
      mainTitle: 'About Wedding Chauffeur',
    },
    data: [
      {
        title: 'What are RolDrive’s wedding car hire coverage zones?',
        desc: 'RolDrive provides its wedding chauffeur services in and around the following locations. Our professional chauffeurs will transport you and your guests to and from the wedding venue in absolute comfort, safety and style.',
      },
      {
        title: 'RolDrive’s wedding car hire covers the following locations:',
        desc: 'wedding car hire in London, wedding car hire in Dubai, wedding car hire in Paris, wedding car hire in New York , wedding car hire in Tokyo',
      },
      {
        title: 'What is a wedding transfer?',
        desc: 'A wedding transfer refers to the transportation service provided for the bride, groom, and other wedding party members from one location to another on the wedding day. This service is crucial for ensuring that all key participants arrive at the ceremony, photo sessions, and reception on time and in style. Utilising a luxury vehicle like a Rolls Royce wedding car for these transfers adds a touch of elegance and sophistication to the event. The Rolls Royce, known for its classic design and plush interiors, provides a stunning backdrop for wedding photos and offers the bride and groom comfort and luxury as they travel between venues on their special day.',
      },
      {
        title: 'Why hire a wedding chauffeur service?',
        desc: 'Hiring a wedding chauffeur service, such as a Rolls Royce wedding car, offers numerous benefits that ensure a seamless and memorable wedding day. One critical necessity is punctuality; a professional chauffeur ensures the bride, groom, and wedding party arrive on time to various venues, alleviating stress and maintaining the day’s schedule. Additionally, considering that the bride and groom often wear elaborate and heavy attire, having a chauffeur assists with navigating in and out of the vehicle comfortably and elegantly. Furthermore, a wedding chauffeur helps manage the day’s logistics, from coordinating travel between locations to handling unexpected delays, ensuring everything proceeds smoothly. Opting for a luxurious Rolls Royce as the wedding car adds a touch of elegance and makes a spectacular statement on your special day.',
      },
      {
        title: 'Can I explore landmarks when on a wedding transfer?',
        desc: 'Absolutely, you can explore landmarks during a wedding transfer with your luxury wedding cars. The luxury vehicle not only adds a touch of elegance and style to your special day but also provides a comfortable and memorable way to visit iconic spots for photo opportunities. Whether you want to stop at historical buildings, picturesque parks, or scenic viewpoints, the luxury wedding cars offer a splendid backdrop for your wedding photos. Just discuss your itinerary with the chauffeur service beforehand to ensure that your route includes all the desired landmarks and that enough time is allocated for each stop. This personalised touch can make your wedding day even more special and unforgettable.',
      },
      {
        title: 'What types of vehicles are recommended for a wedding transfer?',
        desc: 'For wedding transfers, selecting the right vehicle can add a touch of elegance and make a memorable impact. Luxury sedans and vintage cars are popular choices, with the Rolls Royce wedding car being one of the most sought-after options. A Rolls Royce offers timeless elegance, opulent comfort, and a classic aesthetic that can complement any wedding theme. Its spacious interior ensures a comfortable ride, and its distinguished presence guarantees stunning photos. For larger wedding parties, limousines or luxury SUVs may be appropriate as they offer more space and can accommodate more guests. Each vehicle type, from classic to contemporary luxury, provides a different style and comfort level to suit various personal preferences and wedding themes.',
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
