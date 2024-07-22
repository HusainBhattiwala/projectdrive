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
    title: 'Airport Transfers London',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/airport-transfer-london.jpg',
  },
  aboutData: {
    img: '/rolnew/airports/about/About London.jpg',
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
          'London Southend Airport is a minor international airport situated on the outskirts of Southend-on-Sea in Essex, England. Southend was Londons third-busiest airport from the 1960s until the end of the 1970s, when it was overtaken in passenger numbers by London Stansted Airport.',
      },
      {
        img: '/rolnew/global/card/london_airports/London Stansted Airport.jpg',
        title: 'London Stansted Airport',
        cardDesc:
          'London Stansted Airport is the third international airport serving London, the capital of England and the United Kingdom. Stansteds runway is also used by private companies which are private ground handlers that can handle private flights, charter flights, and state visits. ',
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

  
  offeringData : {
    heading: {
      mainTitle: 'About London Airport Transfer Service',
    },
    data: [
      {
        title: 'What is an airport transfer chauffeur London service?',
        desc: "RolDrive’s private Airport Transfer focuses on luxury, efficiency, and comfort, offering a premium travel solution for those arriving at or departing from the airport. Specialising in seamless airport journeys, RolDrive caters to individuals who prioritise punctuality, safety, and a touch of sophistication in their travel experience. With a fleet of high-end vehicles, passengers can enjoy a relaxing and stylish ride, complemented by professional chauffeurs who are knowledgeable about the best routes to ensure timely arrivals or departures. Amenities like flight tracking, Meet and Greet services, luggage assistance, complimentary water, Wi-Fi, and child seats upon request are standard, enhancing the journey's comfort and convenience. Whether for business or pleasure, RolDrive's Airport Transfer Service is designed to provide a hassle-free, comfortable, and luxurious start or end to your travel, reflecting the highest standards of hospitality and efficiency in ground transportation.",
      },
      {
        title:
          'Difference between a chauffeured airport transfer and hailing a cab to the airport.',
        desc: (
          <p className="text-[#B2B2B2]">
            A RolDrive chauffeured airport transfer and hailing a cab represent
            two distinct experiences.
            <br />
            1. RolDrive offers reliable airport transfers
            with premium services, ensuring luxury, comfort, and
            professionalism. Clients enjoy pre-booked, punctual rides in
            high-end vehicles, with professional chauffeurs, tailored amenities
            like in-car Wi-Fi and water, and personalized meet-and-greet
            services.
            <br />
            2. In contrast, hailing a cab provides a more utilitarian travel
            option, with variable costs, standard vehicles, and no guarantee of
            service level or amenities or punctuality. While cabs are convenient
            for spontaneous travel, RolDrive specialises in a bespoke,
            stress-free journey, making it an ideal choice for those seeking
            reliable, high-quality, and comfortable airport transportation.
          </p>
        ),
      },
      {
        title: 'How to go about booking Best Airport Transfers?',
        desc: (
          <p className="text-[#B2B2B2]">
            Visit the Website or App: Access RolDrives platform either through
            our official website or by downloading our mobile app.
            <p className="text-[#B2B2B2] ml-4">
              1. Select Your Service: Choose the airport transfer service
              option, indicating whether you need a pick-up, drop-off, or both
              to and from the airport
              <br />
              2. Provide Details: Enter your travel details, including the date,
              time, flight information, and the number of passengers. This
              ensures that the service is tailored to your schedule and
              requirements.
              <br />
              3. Choose Your Vehicle: Select from RolDrives fleet of luxury
              vehicles based on your preference and the number of travellers to
              ensure a comfortable ride.
              <br />
              4. Confirm and Pay: Review your booking details, confirm the
              information, and proceed to payment. RolDrive offers transparent
              pricing, so youll know the cost upfront.
              <br />
              5. Receive Confirmation:
              After payment, youll receive a booking confirmation via email,
              including the details of your chauffeur and vehicle.
            </p>
          </p>
        ),
      },
      {
        title: 'Will RolDrive provide a Hotel to Airport Transfer?',
        desc: "Yes, RolDrive certainly provides hotel to airport transfer services. This convenient service is designed for travellers who need reliable and comfortable transportation from their hotel to the airport. With RolDrive, you can expect a luxury experience, including a professional chauffeur who will meet you at your hotel, assist with your luggage, and ensure you arrive at the airport in plenty of time for your flight. This service is part of RolDrive's commitment to offering comprehensive chauffeur services, catering to the needs of both business and leisure travellers. With our fleet of premium vehicles to choose from, you can enjoy a stress-free journey to the airport, knowing that every aspect of your transfer is handled with the utmost professionalism and attention to detail.\n2. We also provide transfer from Airport to Hotel.",
      },
      {
        title: 'How to know if RolDrive provides airport transfers near me?',
        desc: "To determine if RolDrive provides airport transfers in your area, you should download our app or visit our website. Through these platforms, you can easily access detailed information about the geographic coverage of RolDrive's services. By entering your specific location or airport destination in the app or on the website, you can quickly ascertain whether RolDrive's luxury airport transfer services are available to you. These tools are designed to be user-friendly, offering clear and concise information about service areas, availability, and how to book a transfer. This way, you can effortlessly check if RolDrive caters to your airport transfer needs, ensuring a seamless and luxurious travel experience tailored to your location.",
      },
      {
        title: 'How to know if RolDrive provides affordable Airport Transfers?',
        desc: "To find out if RolDrive's airport transfers are affordable for you, simply enter your details into our online booking engine. This can be accessed either through the RolDrive website or our dedicated mobile app. Once you input your pickup and drop-off locations, date, and time, the booking system will provide you with a comprehensive quote. This quote includes all charges, ensuring there are no hidden fees, and allows you to see the full cost of your transfer upfront. By reviewing this all-inclusive price, you can make an informed decision on whether RolDrive's service fits your budget. This transparent pricing model is part of RolDrive's commitment to customer satisfaction, making it easy for you to assess the affordability of our luxury airport transfer services.",
      },
    ],
  }
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
      <ServiceOfferings servicesData={pageData?.offeringData} />
      <DownloadOurApp />
    </>
  );
}

export default LondonAirportPage;
