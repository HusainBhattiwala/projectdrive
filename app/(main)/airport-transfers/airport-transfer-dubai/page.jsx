import Banner from 'rolnew/section/cities/Banner';
import OurFeet from 'rolnew/section/home/OurFeet';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import AirportBookingFlow from 'rolnew/comp/AirportBookingFlow';
import Services from 'rolnew/section/home/Services';
import ServicesFaq from 'rolnew/comp/ServicesFaq';
import ServiceOfferings from 'rolnew/comp/ServiceOfferings';
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';

const metadata = metadataConfig.airportTransferDubai;

const pageData = {
  banner: {
    title: 'Dubai Airport Transfers',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/airport-transfer-dubai.jpg',
  },
  aboutData: {
    img: '/rolnew/airports/about/About Dubai.jpg',
    title: 'Dubai Airport Transfers',
    description:
      'Offering premium airport transfer Dubai services, we ensure a seamless connection to and from all of Dubai’s airports. With a fleet of luxury vehicles to take care of all your transportation needs, our professional chauffeur service provides reliable, comfortable and stylish transportation tailored to meet the needs of both business and leisure travellers.',
  },
  howitworks: {
    title: 'Book Your Dubai Airport Transfers Chauffeur Experience In Three Simple Steps',
  },
  fleetData: {
    title: 'Introducing Our Airport Transfer Dubai Service Handpicked For Your Comfort',
  },
  servicesData: {
    subTitle: 'More About Dubai Airport Transfers',
    action: 'Book Now',
    mainTitle: 'Tailored Airport Transfers From Dubai Airport For Your Every Need',
    desc: 'Indulge in an unparalleled chauffeur experience with our tailored services designed to meet your unique luxury airport transfer requirements. Whether you need a seamless airport transfer for your corporate travel or special event transfer, our chauffeur services are crafted to upgrade your journey. As among the best airport transfer Dubai service providers, embark on a journey where every detail is tailored to perfection.',
    cardData: [
      {
        img: '/rolnew/global/card/dubai_airports/Dubai International Airport.jpg',
        title: 'Dubai International Airport',
        cardDesc:
          "Dubai International Airport is the primary and major international airport serving Dubai, United Arab Emirates. Also the world's busiest airport by international passenger traffic, it is the second-busiest airport in the world by passenger traffic.",
      },
      {
        img: '/rolnew/global/card/dubai_airports/Al Maktoum International Airport.jpg',
        title: 'Al Maktoum International Airport',
        cardDesc:
          'Al Maktoum International Airport also known as Dubai World Central, is an international airport in Jebel Ali, Dubai, United Arab Emirates. Opened in 2010, it is the main part of Dubai South, a planned residential, commercial and logistics complex.',
      },
    ],
  },
  faqData: {
    title: 'Frequently Asked Questions About Dubai Airport Transfers:',
    data: [
      {
        id: 0,
        question: 'What services does RolDrive offer for Dubai Airport transfers?',
        ans: 'RolDrive provides luxury chauffeur services including meet-and-greet at the airport, luggage assistance, and direct transportation to your destination in Dubai.',
      },
      {
        id: 1,
        question: 'How can I make a Dubai Airport transfer booking?',
        ans: "Bookings can be made through RolDrive's website, our mobile app, or by calling our customer service number directly.",
      },
      {
        id: 2,
        question:
          'What types of vehicles does RolDrive offer for Dubai Airport transfers in luxury?',
        ans: 'RolDrive’s fleet includes luxury sedans, executive SUVs, and minivans to accommodate individual preferences and group sizes. Check out our fleet section to know more. We also serve VIP guests with Dubai Airport transfer Rolls Royce services.',
      },
      {
        id: 3,
        question: 'Are RolDrive chauffeurs knowledgeable about local routes in Dubai?',
        ans: 'Yes, RolDrive chauffeurs are highly experienced with local traffic and routes, ensuring the fastest and safest journey.',
      },
      {
        id: 4,
        question: 'Can I book a round-trip transfer with RolDrive?',
        ans: 'Yes, you can book both one-way and round-trip transfers between Dubai Airport and your local destination.',
      },
      {
        id: 5,
        question:
          "What is RolDrive's cancellation policy for Dubai Airport transfers?",
        ans: 'Cancellations are free up to 12 hours before the scheduled pickup time.',
      },
      {
        id: 6,
        question: 'How does RolDrive handle flight delays for Dubai Airport pickups?',
        ans: 'RolDrive tracks all flights and adjusts pickup times accordingly, ensuring your chauffeur is ready when you arrive. In case you are unable to communicate a fight delay with your chauffeur, we will wait for you for one hour free of charge.',
      },
      {
        id: 7,
        question: 'Does RolDrive provide child safety seats for transfers?',
        ans: 'Child safety seats can be requested during the booking process to comply with safety regulations and ensure the comfort of young passengers..',
      },
      {
        id: 8,
        question: 'Is there a loyalty program for frequent users of RolDrive in Dubai?',
        ans: 'Contact RolDrive directly for more information on loyalty programs. ',
      },
      {
        id: 9,
        question: 'What measures does RolDrive take to ensure hygiene and safety in their vehicles?',
        ans: 'Vehicles are sanitised thoroughly before and after each journey, and chauffeurs follow strict hygiene protocols to ensure passenger safety.',
      },
    ],
  },
  offeringData: {
    heading: {
      mainTitle: 'About Dubai Airport Transfer Service',
    },
    data: [
      {
        title: 'What are airport transfers from Dubai Airport?',
        desc: "RolDrive’s Dubai Airport transfers to hotel involves transportation services that facilitate passengers' travel between the airport and their final destinations in the city in complete comfort and style. These services offer a fleet that range from executive sedans, limousines, SUVs to minibuses. Companies such as RolDrive specialising in airport transfers from Dubai Airport offer meet-and-greet services, where drivers wait for passengers at arrival zones with signage, ensuring a smooth and stress-free start to their visit in Dubai. This service is particularly valuable in a bustling hub like Dubai, providing a direct, comfortable, and efficient connection to homes, hotels, business centres, or tourist attractions. We also do Dubai Airport transfers to Abu Dhabi and Dubai Airport transfers to Ras Al Khaimah to name a few.",
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
        title: 'How far in advance should I book my airport transfer in Dubai?',
        desc: 'It is advisable to book your airport transfers from Dubai Airport the moment you have your flight tickets in hand. This lead time allows RolDrive to guarantee the availability of a vehicle that best suits your needs and preferences. Early booking is particularly crucial during peak travel seasons or if you require specific amenities, such as accessibility features. Booking ahead not only ensures a smoother experience but also helps avoid last-minute stress and potential unavailability, especially in a bustling metropolis like Dubai where demand for reliable transportation can be high.',
      },
      {
        title: 'What is the average cost of a RolDrive airport transfer from Dubai International Airport to the city centre?',
        desc: "The average cost of a RolDrive airport transfer service from Dubai International Airport to the city centre varies based on several factors. The type of vehicle selected significantly influences the price, with options ranging from standard sedans to luxury cars and SUVs. Additionally, the cost can fluctuate depending on the time of the year, with peak tourist seasons typically seeing higher rates due to increased demand. It's important to consider these variables when booking an airport transfer in Dubai to ensure you choose an option that best fits your budget and needs. Give us a call for a more customised quote!",
      },
      {
        title: 'Are there airport transfer services in Dubai that cater to large groups or families?',
        desc: "Yes, there are airport transfer services in Dubai that cater to large groups or families. RolDrive is one such service, which offers the Mercedes Benz V Class for example specifically for this purpose. This luxury vehicle is ideal for airport transfers in Dubai, providing ample space and comfort for larger parties. Whether you're travelling with family or a group of colleagues, the Mercedes Benz V Class ensures that everyone can travel together in style and comfort, making it a perfect choice for those needing a spacious and elegant solution for their airport transfer needs in Dubai. Be it a to or from Dubai Airport transfer service.",
      },
    ],
  },
};

function DubaiAirportPage() {
  return (
    <>
      <MetaTags metadata={metadata} />
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

export default DubaiAirportPage;
