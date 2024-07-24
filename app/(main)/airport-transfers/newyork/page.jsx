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
    title: 'Airport Transfer New York',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/airport-transfer-newyork.jpg',
  },
  aboutData: {
    img: '/rolnew/airports/about/About Newyork.jpg',
    title: 'Airport Transfer New York',
    description:
      'Offering premium airport transfer New York services, we ensure a seamless connection to and from all of New York’s airports. With a fleet of luxury vehicles to take care of all your transportation needs, our professional chauffeur service provides reliable, comfortable and stylish transportation tailored to meet the needs of both business and leisure travellers. ',
  },
  howitworks: {
    title: 'Book Your Luxury Airport Transfer New York Chauffeur Experience In Three Simple Steps',
  },
  fleetData: {
    title: 'Introducing Our Airport Transfer In New York Service Handpicked For Your Comfort',
  },
  servicesData: {
    subTitle: 'More About Airport Transfer New York',
    action: 'Book Now',
    mainTitle: 'Tailored New York Airport Transfers For Your Every Need',
    desc: 'Indulge in an unparalleled chauffeur experience with our tailored services designed to meet your unique luxury airport transfer requirements. Whether you need a seamless airport transfer for your corporate travel or special event transfer, our chauffeur services are crafted to upgrade your journey. As among the best airport transfer New York service providers, embark on a journey where every detail is tailored to perfection.',
    cardData: [
      {
        img: '/rolnew/global/card/newyork_airports/John F. Kennedy International Airport.jpg',
        title: 'John F. Kennedy International Airport',
        cardDesc:
          'John F. Kennedy International Airport is a major international airport serving New York City and the New York metropolitan area, in the United States of America. The airport is the busiest of the seven airports in the New York airport system, the 6th-busiest airport in the United States.',
      },
      {
        img: '/rolnew/global/card/newyork_airports/Newark Liberty International Airport.jpg',
        title: 'Newark Liberty International Airport',
        cardDesc:
          'Newark Liberty International Airport is an international airport straddling the boundary between the cities of Newark in Essex County and Elizabeth in Union County, New Jersey, in the United States of America.',
      },
      {
        img: '/rolnew/global/card/newyork_airports/LaGuardia Airport.jpg',
        title: 'LaGuardia Airport',
        cardDesc:
          'LaGuardia Airport is a civil airport in East Elmhurst, Queens, New York City. The facility was established in 1929 and began operating as a public airport in 1939. It is named after former New York City mayor Fiorello La Guardia.',
      },
      {
        img: '/rolnew/global/card/newyork_airports/Buffalo Niagara International Airport.jpg',
        title: 'Buffalo Niagara International Airport',
        cardDesc:
          'Buffalo Niagara International Airport is in Cheektowaga, New York, United States of America. The airport serves Buffalo, New York and Niagara Falls, New York United States, and the southern Golden Horseshoe region of Ontario, Canada. It is the third-busiest airport in the state of New York and the busiest inside of the Buffalo-Niagara Falls metropolitan area.',
      },
    ],
  },
  faqData: {
    title: 'Frequently Asked Questions About Airport Transfer New York:',
    data: [
      {
        id: 0,
        question:
          'What airports does RolDrive’s New York airport transfer service?',
        ans: 'RolDrive offers transfers to JFK, LaGuardia, Newark and Buffalo Niagara airports, covering all major entry points into New York City.',
      },
      {
        id: 1,
        question: 'How can I book an airport transfer in New York city?',
        ans: "With regards to an airport pick up in New York, bookings can be made through RolDrive's website, mobile app, or by calling our customer service number directly.",
      },
      {
        id: 2,
        question:
          'What vehicle options does RolDrive offer for airport transfers in New York?',
        ans: 'The RolDrive fleet includes luxury sedans, SUVs, and vans, catering to all individual preferences and group sizes. Check our fleet section to know more. We also provide limo airport transfer in New York.',
      },
      {
        id: 3,
        question:
          'Are RolDrive’s chauffeurs familiar with New York City traffic and routes?',
        ans: "Yes, all chauffeurs are highly experienced with New York City's traffic patterns and optimal routes.",
      },
      {
        id: 4,
        question: 'Can I request a child car seat?',
        ans: 'Child car seats are available upon request at the time of booking, ensuring safety for younger passengers.',
      },
      {
        id: 5,
        question:
          "What is RolDrive's cancellation policy for New York airport transfers?",
        ans: 'Transfers can be cancelled up to 12 hours in advance without incurring any charges.',
      },
      {
        id: 6,
        question: 'How does RolDrive handle flight delays?',
        ans: 'RolDrive tracks your flight status to adjust pickup times accordingly, accommodating delays at no extra charge.',
      },
      {
        id: 7,
        question:
          'Does RolDrive provide meet-and-greet services at New York airports?',
        ans: 'Yes, chauffeurs can meet passengers at baggage claim or customs exits, holding a sign for easy identification.',
      },
      {
        id: 8,
        question:
          'What are the rates for RolDrive’s airport transfer services in New York?',
        ans: 'Rates vary based on the distance, vehicle type, and specific services requested. Pricing details are available on the website. Feel free to contact us for a free customised quote regarding airport transfers in New York city.',
      },
      {
        id: 9,
        question:
          'How does RolDrive ensure customer safety during transfers, especially post-COVID-19?',
        ans: 'RolDrive follows rigorous health protocols, including vehicle sanitization ensuring passenger safety throughout the transfer.',
      },
    ],
  },
  offeringData: {
    heading: {
      mainTitle: 'About New York Airport Transfer Service',
    },
    data: [
      {
        title: 'Are there any app-based options for airport transfer in New York City?',
        desc: "RolDrive's chauffeur service offers a premium app-based option for luxury airport transfers in New York City. With a seamless booking experience through our dedicated mobile app, RolDrive caters to those seeking comfort and style. Our fleet of high-end vehicles ensures that every transfer is not just a ride but a luxury experience. Whether you're travelling from JFK, LaGuardia, or Newark, RolDrive provides punctual, reliable service with professional chauffeurs knowledgeable in navigating the bustling city efficiently. Ideal for business travellers, families, or individuals who value privacy and convenience, RolDrive upgrades your arrival or departure with unmatched luxury.",
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
        title: 'How far in advance should I book an airport transfer in New York?',
        desc: "For a stress-free experience with a luxury airport transfer in New York, it's advisable to book your service with RolDrive as far in advance as possible. Preferably as soon as you have your tickets in hand. This lead time ensures that RolDrive can accommodate your specific needs and preferences, such as vehicle type or additional amenities. RolDrive's luxury chauffeur service is renowned for its reliability, comfort, and elegance, offering a high-end travel experience tailored to both business and leisure travellers. Our professional chauffeurs are knowledgeable about the best routes across New York, ensuring timely arrivals at JFK, LaGuardia, or Newark airports, making every trip seamless and sophisticated.",
      },
      {
        title: 'How can I arrange an airport transfer for a group of travellers in New York City?',
        desc: 'For a luxury airport transfer in New York tailored for larger groups, consider RolDrive’s chauffeur service featuring the Mercedes Benz V Class. This spacious and sophisticated vehicle is perfect for accommodating groups comfortably, ensuring everyone travels together in style. To arrange a transfer, simply visit RolDrive’s website or use our mobile app to book the Mercedes Benz V Class. Specify your group’s size, luggage requirements, and any special accommodations you might need. RolDrive’s professional chauffeurs, experienced in navigating New York City’s bustling streets, will ensure a smooth, luxurious journey to or from the airport',
      },
      {
        title: 'What are the most reliable airport transfer services in New York City?',
        desc: "RolDrive's chauffeur service stands out as a premier choice for luxury airport transfer in New York. Renowned for reliability, we cater to JFK, LaGuardia, Newark and Buffalo Niagara airports with a fleet of high-end vehicles designed for comfort and style. Each chauffeur is expertly trained to navigate the bustling streets of New York efficiently, ensuring timely arrivals and departures. With a focus on customer satisfaction, RolDrive offers personalized meet-and-greet services, flight tracking to accommodate delays, and flexible booking options. Whether for business or leisure, RolDrive enhances your travel experience, epitomising luxury airport transfer in New York.",
      },
    ],
  },
};

function NewyorkAirportPage() {
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

export default NewyorkAirportPage;
