import Banner from 'rolnew/section/cities/Banner';
import OurFeet from 'rolnew/section/home/OurFeet';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import AirportBookingFlow from 'rolnew/comp/AirportBookingFlow';
import Services from 'rolnew/section/home/Services';
import ServicesFaq from 'rolnew/comp/ServicesFaq';
import ServiceOfferings from 'rolnew/comp/ServiceOfferings';

const pageData = {
  banner: {
    title: 'Airport Transfers In London',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/airport-transfer-london.jpg',
  },
  aboutData: {
    img: '/rolnew/airports/about/About London.jpg',
    title: 'Airport Transfers In London',
    description:
      'Offering premium airport transfers London services, we ensure a seamless connection to and from all of London’s airports. With a fleet of luxury vehicles to take care of all your transportation needs, our professional chauffeur service provides reliable, comfortable and stylish transportation tailored to meet the needs of both business and leisure travellers. ',
  },
  howitworks: {
    title: 'Book Your Airport Transfers Chauffeur Experience In Three Simple Steps',
  },
  fleetData: {
    title: 'Introducing Our Airport Transfers Service Handpicked For Your Comfort in London',
  },
  servicesData: {
    subTitle: 'More About Airport Transfers London',
    action: 'Book Now',
    mainTitle: 'Tailored Airport Transfers Chauffeur Services For Your Every Need In London',
    desc: 'Indulge in an unparalleled chauffeur experience with our tailored services designed to meet your unique luxury airport transfers London requirements. Whether you need a seamless airport transfer for your corporate travel or special event transfer, our luxury chauffeur services are crafted to upgrade your journey. As among the best airport transfers from London UK service providers, embark on a journey where every detail is tailored to perfection.',
    cardData: [
      {
        img: '/rolnew/global/card/london_airports/Heathrow Airport.jpg',
        title: 'Heathrow Airport',
        cardDesc:
          'Heathrow Airport, called London Airport until 1966 and now known as London Heathrow, is the main international airport serving London, England. It is the largest of the six international airports in the London airport system. Being Britain’s busiest airport counting more than 19 million passengers in the year 2021.',
      },
      {
        img: '/rolnew/global/card/london_airports/Gatwick Airport.jpg',
        title: 'Gatwick Airport',
        cardDesc:
          'Gatwick Airport, also known as London Gatwick, is the capital of England, London’s secondary international airport. Gatwick was the second busiest airport by total passenger traffic in the UK, after Heathrow Airport, and was the 8th busiest in Europe by total passenger traffic in 2022.',
      },
      {
        img: '/rolnew/global/card/london_airports/London City Airport.jpg',
        title: 'London City Airport',
        cardDesc:
          'London City Airport is an international airport in London and is the closest airport to central London, located in the Royal Docks. London City Airport is known for its fast travel experience and efficient service. Arrivals and departures when compared can often be quicker than larger airports. ',
      },
      {
        img: '/rolnew/global/card/london_airports/London Southend Airport.jpg',
        title: 'London Southend Airport',
        cardDesc:
          "London Southend Airport is a minor international airport situated on the outskirts of Southend-on-Sea in Essex, England. Southend was London's third-busiest airport from the 1960s until the end of the 1970s, when it was overtaken in passenger numbers by London Stansted Airport.",
      },
      {
        img: '/rolnew/global/card/london_airports/London Stansted Airport.jpg',
        title: 'London Stansted Airport',
        cardDesc:
          "London Stansted Airport is the third international airport serving London, the capital of England and the United Kingdom. Stansted's runway is also used by private companies which are private ground handlers that can handle private flights, charter flights, and state visits.",
      },
      {
        img: '/rolnew/global/card/london_airports/Luton Airport.jpg',
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
        ans: 'RolDrive offers transfers to and from all major London airports, including Heathrow, Gatwick, Stansted, Luton, Southend and London City Airport.',
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
          'What is the cancellation policy for RolDrive’s executive airport transfers London?',
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
  offeringData: {
    heading: {
      mainTitle: 'About London Airport Transfer Service',
    },
    data: [
      {
        title: 'What is an airport transfer chauffeur London service?',
        desc: 'An airport transfer chauffeur London service provides private, pre-arranged transportation between an airport and the client’s destination, typically in and around London. This professional service is designed for convenience and efficiency, offering a seamless travel experience for the client. When you book an airport transfer chauffeur, you get a professional driver who meets you at the airport, assists with luggage, and drives you directly to your location in a comfortable, private vehicle. This eliminates the stress of navigating public transport or hailing taxis, making it ideal for business travellers, tourists, or those who would like to prefer a more luxurious and personalised mode of travel.',
      },
      // {
      //   title:
      //     'What types of vehicles are available for airport transfers with chauffeur service in London?',
      //   desc: (
      //     <p className="text-[#B2B2B2]">
      //       A RolDrive chauffeured airport transfer and hailing a cab represent
      //       two distinct experiences.
      //       <br />
      //       1. RolDrive offers reliable airport transfers
      //       with premium services, ensuring luxury, comfort, and
      //       professionalism. Clients enjoy pre-booked, punctual rides in
      //       high-end vehicles, with professional chauffeurs, tailored amenities
      //       like in-car Wi-Fi and water, and personalized meet-and-greet
      //       services.
      //       <br />
      //       2. In contrast, hailing a cab provides a more utilitarian travel
      //       option, with variable costs, standard vehicles, and no guarantee of
      //       service level or amenities or punctuality. While cabs are convenient
      //       for spontaneous travel, RolDrive specialises in a bespoke,
      //       stress-free journey, making it an ideal choice for those seeking
      //       reliable, high-quality, and comfortable airport transportation.
      //     </p>
      //   ),
      // },
      // {
      //   title: 'How to go about booking Best Airport Transfers?',
      //   desc: (
      //     <p className="text-[#B2B2B2]">
      //       Visit the Website or App: Access RolDrives platform either through
      //       our official website or by downloading our mobile app.
      //       <p className="text-[#B2B2B2] ml-4">
      //         1. Select Your Service: Choose the airport transfer service
      //         option, indicating whether you need a pick-up, drop-off, or both
      //         to and from the airport
      //         <br />
      //         2. Provide Details: Enter your travel details, including the date,
      //         time, flight information, and the number of passengers. This
      //         ensures that the service is tailored to your schedule and
      //         requirements.
      //         <br />
      //         3. Choose Your Vehicle: Select from RolDrives fleet of luxury
      //         vehicles based on your preference and the number of travellers to
      //         ensure a comfortable ride.
      //         <br />
      //         4. Confirm and Pay: Review your booking details, confirm the
      //         information, and proceed to payment. RolDrive offers transparent
      //         pricing, so youll know the cost upfront.
      //         <br />
      //         5. Receive Confirmation:
      //         After payment, youll receive a booking confirmation via email,
      //         including the details of your chauffeur and vehicle.
      //       </p>
      //     </p>
      //   ),
      // },
      {
        title: 'What types of vehicles are available for airport transfers with chauffeur service in London?',
        desc: "RolDrive's airport transfer chauffeur London service offers a diverse fleet of vehicles to cater to various preferences and needs. Clients can choose from luxury sedans such as the Mercedes Benz S Class for solo travellers or couples seeking comfort and style, spacious SUVs such as the Range Rover, ideal for families or small groups requiring more luggage space, and executive vans such as the Mercedes Benz V Class for larger groups or those with extra gear. Each vehicle is well-maintained and equipped with modern amenities to ensure a comfortable, stylish, and efficient journey to or from the airport, making RolDrive a versatile and reliable choice for airport transfer chauffeur services in London. To know more about the vehicles offered by RolDrive, we request you to visit our fleet page.",
      },
      {
        title: 'How far in advance should I book a chauffeur for airport transfers in London?',
        desc: "When booking an airport transfer chauffeur London service, it's advisable to arrange your service as far in advance as possible. Preferably the moment you have your flight tickets. This lead time ensures that your specific requirements, such as vehicle type or additional amenities like child seats, can be accommodated. Booking early also allows the chauffeur service to plan the best route and timing, considering London’s variable traffic conditions. For peak travel times or holiday seasons, consider booking in advance to guarantee availability. Early booking not only secures your preferred service but also offers peace of mind as you travel.",
      },
      {
        title: 'Are airport transfer chauffeur services in London available 24/7?',
        desc: "Yes, RolDrive's airport transfer chauffeur London services are available 24/7. This round-the-clock availability ensures that no matter what time your flight lands or departs, RolDrive can provide a seamless transfer experience. Whether you're arriving on a late-night flight or need an early morning drop-off at any of London's major airports, RolDrive's professional chauffeurs are ready to assist you. Their 24/7 service is designed to cater to the diverse schedules of international travellers, making it a reliable choice for anyone needing dependable airport transfer chauffeur services in London.",
      },
    ],
  },
};

function LondonAirportPage() {
  return (
    <>
      <Banner pageData={pageData} />
      <AirportBookingFlow pageData={pageData} />
      <OurFeet showBooking pageData={pageData} />
      <Services servicesData={pageData?.servicesData} />
      <Locations />
      <Contact />
      <ServicesFaq faqData={pageData?.faqData} />
      <ServiceOfferings servicesData={pageData?.offeringData} />
      <DownloadOurApp />
    </>
  );
}

export default LondonAirportPage;
