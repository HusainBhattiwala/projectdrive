import Banner from 'rolnew/section/cities/Banner';
import OurFeet from 'rolnew/section/home/OurFeet';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import AirportBookingFlow from 'rolnew/comp/AirportBookingFlow';
import Services from 'rolnew/section/home/Services';
import ServicesFaq from 'rolnew/comp/ServicesFaq';

const pageData = {
  banner: {
    title: 'Airport Transfers London',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/airport-transfer-london.jpg',
  },
  aboutData: {
    title: 'Airport Transfers London',
    description:
      'Offering premium airport transfers London services, we ensure a seamless connection to and from all of Londons airports. With a fleet of luxury vehicles to take care of all your transportation needs, our professional chauffeur service provides reliable, comfortable and stylish transportation tailored to meet the needs of both business and leisure travellers.',
  },
  servicesData: {
    subTitle: 'More About Airport Transfers London',
    action: 'Book Now',
    mainTitle: 'Tailored Chauffeur Services For Your Every Need',
    desc: 'Indulge in an unparalleled chauffeur experience with our tailored services designed to meet your unique luxury airport transfer requirements. Whether you need a seamless airport transfer for your corporate travel or special event transfer, our luxury chauffeur services are crafted to upgrade your journey. As among the best airport transfers London service providers, embark on a journey where every detail is tailored to perfection.',
    cardData: [
      {
        img: '/rolnew/global/card/card-image1.jpg',
        title: 'Heathrow Airport',
        cardDesc:
          'Heathrow Airport, called London Airport until 1966 and now known as London Heathrow, is the main international airport serving London, England. It is the largest of the six international airports in the London airport system. Being Britain’s busiest airport counting more than 19 million passengers in the year 2021.',
      },
      {
        img: '/rolnew/global/card/card-image3.jpg',
        title: 'Gatwick Airport',
        cardDesc:
          'Gatwick Airport, also known as London Gatwick, is the capital of England, London’s secondary international airport. Gatwick was the second busiest airport by total passenger traffic in the UK, after Heathrow Airport, and was the 8th busiest in Europe by total passenger traffic in 2022.',
      },
      {
        img: '/rolnew/global/card/card-image4.jpg',
        title: 'London City Airport',
        cardDesc:
          'London City Airport is an international airport in London and is the closest airport to central London, located in the Royal Docks. London City Airport is known for its fast travel experience and efficient service. Arrivals and departures when compared can often be quicker than larger airports. ',
      },
      {
        img: '/rolnew/global/card/card-image5.jpg',
        title: 'London Southend Airport',
        cardDesc:
          'London Southend Airport is a minor international airport situated on the outskirts of Southend-on-Sea in Essex, England. Southend was Londons third-busiest airport from the 1960s until the end of the 1970s, when it was overtaken in passenger numbers by London Stansted Airport.',
      },
      {
        img: '/rolnew/global/card/card-image6.jpg',
        title: 'London Stansted Airport',
        cardDesc:
          'London Stansted Airport is the third international airport serving London, the capital of England and the United Kingdom. Stansteds runway is also used by private companies which are private ground handlers that can handle private flights, charter flights, and state visits. ',
      },
      {
        img: '/rolnew/global/card/card-image6.jpg',
        title: 'Luton Airport',
        cardDesc:
          'Luton Airport is an international airport located in Luton, Bedfordshire, England. The airport is known for being a hub for budget airlines, its efficient layout, and its restaurants.',
      },
    ],
  },
  faqData: {
    title: 'Frequently Asked Questions About Airport Transfers London:',
    data: [
      {
        id: 0,
        question: 'What airport transfers in London does RolDrive service?',
        ans: 'RolDrive offers transfers to and from all major London airports, including Heathrow, Gatwick, Stansted, Luton, Southend, and London City Airport.',
      },
      {
        id: 1,
        question: 'How can I book a RolDrive airport transfer?',
        ans: 'RolDrive’s airport transfer chauffeur bookings can be made through RolDrive’s website, mobile app, or by calling our customer service number.',
      },
      {
        id: 2,
        question:
          'What vehicle options are available from RolDrive’s airport transfer chauffeur services?',
        ans: 'RolDrive has a diverse fleet including luxury sedans, SUVs, and vans to accommodate different group sizes and luggage needs.',
      },
      {
        id: 3,
        question: 'Do RolDrive chauffeurs help with luggage?',
        ans: 'Yes, RolDrive chauffeurs assist passengers with their luggage for a hassle-free experience.',
      },
      {
        id: 4,
        question: 'Can I request a child seat with my RolDrive transfer?',
        ans: 'Child seats are available upon request during the booking process to ensure safety for younger passengers.',
      },
      {
        id: 5,
        question:
          'What is the cancellation policy for RolDrive airport transfers?',
        ans: 'Cancellations can be made up to 12 hours before the scheduled pickup without incurring charges.',
      },
      {
        id: 6,
        question: 'How does RolDrive handle flight delays?',
        ans: 'RolDrive monitors flights and adjusts pickup times accordingly, providing flexibility and ensuring the chauffeur is there when you arrive.',
      },
      {
        id: 7,
        question: 'Are RolDrive’s chauffeurs experienced?',
        ans: 'All chauffeurs are professionally trained, licensed, and have extensive local knowledge, ensuring a safe and efficient journey.',
      },
      {
        id: 8,
        question: 'Does RolDrive offer meet-and-greet services at the airport?',
        ans: 'Yes, chauffeurs can meet passengers at arrivals with a name sign for ease of contact and peace of mind. All free of charge.',
      },
      {
        id: 9,
        question: 'What measures has RolDrive implemented for COVID-19?',
        ans: 'RolDrive follows strict hygiene protocols, including vehicle sanitization to ensure passenger safety.',
      },
    ],
  },
};

function LondonAirportPage() {
  return (
    <>
      <Banner pageData={pageData} />
      <AirportBookingFlow pageData={pageData} />
      <OurFeet showBooking />
      <Services servicesData={pageData?.servicesData} />
      <Locations />
      <Contact />
      <ServicesFaq faqData={pageData?.faqData} />
      <DownloadOurApp />
    </>
  );
}

export default LondonAirportPage;
