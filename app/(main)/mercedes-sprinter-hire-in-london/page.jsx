import ClientTestimonial from 'rolnew/section/home/ClientTestimonial';
import Contact from 'rolnew/comp/Contact';
import Locations from 'rolnew/section/home/Locations';
import Services from 'rolnew/section/home/Services';
import ServicesFaq from 'rolnew/comp/ServicesFaq';
import ServiceOfferings from 'rolnew/comp/ServiceOfferings';
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';
import BookModal from 'rolnew/comp/BookModal';
import BookingBanner from '../BookingBanner';

const metadata = metadataConfig.mercedesSprinterHireLondon;

const banner = {
  title: 'Mercedes Sprinter Hire In London',
  bannerImage: '/rolnew/global/landing/mercedes-sprinter-chauffeur-hire.jpg',
  isLandingPage: true,
};

const ServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Tailored Mercedes Sprinter Hire In London For Your Every Need',
  desc: 'Indulge in an unparalleled Mercedes Sprinter hire in London with tailored services designed to meet your unique needs. Whether for seamless airport transfers, corporate travel, or special events, our chauffeur services upgrade your journey. Experience perfection in every detail. Browse our services now and upgrade your transportation experience with our exclusive Mercedes Sprinter hire in London.',
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfers',
      cardDesc:
        'Our airport transfers are seamless and hassle free. Whether you require pick-up from the hotel to the airport or vice versa, our friendly and courteous chauffeurs ensure a comfortable and stress-free journey for you.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
        "With RolDrive, you'll create a lasting impression the moment you step out of our chauffeur driven vehicles. Let us assist you in making a statement and leading the boardroom. Our corporate chauffeurs are reliable, efficient, and committed to surpassing your expectations.",
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding Transfers',
      cardDesc:
        'We prioritise flawlessness on your special day, offering a selection of chauffeur driven vehicles including luxury brands like Rolls Royce, Maybach, and Bentley. Our meticulously maintained vehicles bring an added touch of elegance to your celebration.',
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
        'Our experienced private jet chauffeur service ensures safe transport to and from your private jet or helicopter right from the tarmac, delivering you seamlessly to your hotel or business meeting. Our fleet also offers complimentary packages for a comfortable and enjoyable travel experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
        "We offer transportation services for social, cultural, and sports events in and around the city. Whether it's a private party or a large-scale gathering, our event transfer cars are stylish, sophisticated, and ensure a safe and memorable experience for all attendees.",
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
        "Choose from our diverse fleet with our hourly and full day chauffeur service for a comfortable, memorable journey. Enjoy RolDrive's luxurious, stress-free transportation, guided by knowledgeable chauffeurs who enhance your trips with their expertise.",
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions For Mercedes Sprinter Hire In London',
  data: [
    {
      id: 0,
      question:
        'How can I book a Mercedes Sprinter 12 seater?',
      ans: (
        <p>
          To book a Mercedes Sprinter hire in London, navigate to the
          <a href="/login" className="text-blue-500"> Book Now </a>
          {' '}
          option on this page. Simply provide your details, select your preferred Mercedes Sprinter vehicle, and confirm your booking. Enjoy a seamless and convenient process for luxury transportation.
        </p>
      ),
    },
    {
      id: 1,
      question: 'What are the costs involved in booking a Mercedes Sprinter 12 seater?',
      ans: 'Booking a Mercedes Sprinter hire in London involves transparent pricing with no hidden costs. We recommend using our booking engine or contacting us directly for a free tailored quote, ensuring you receive an accurate and customised estimate for your specific needs.',
    },
    {
      id: 2,
      question: 'Can I book a Mercedes Sprinter chauffeur for a large group?',
      ans: "Yes, you can book RolDrive's Mercedes Sprinter hire in London for large groups. Our Sprinters offer seating for 12 to 19 people in absolute comfort. For more details, check our fleet section and choose the perfect vehicle for your group travel needs.",
    },

    {
      id: 3,
      question: 'Are there different types of Mercedes Sprinter models available for hire?',
      ans: (
        <p>
          Yes, RolDrive’s Mercedes Sprinter hire in London offers different Sprinter models to suit your needs. Check our
          <a href="/fleet" className="text-blue-500"> fleet </a>
          section to explore the various options available, ensuring you find the perfect vehicle for your journey, whether for business or leisure.
        </p>
      ),
    },

    {
      id: 4,
      question: 'What amenities are included in a Mercedes Sprinter car hire?',
      ans: "RolDrive's Mercedes Sprinter chauffeur in London vehicles includes premium amenities such as newspapers, water bottles, and free Wi-Fi. These features ensure a comfortable and enjoyable journey, allowing you to stay refreshed and connected while travelling in style and luxury.",
    },
    {
      id: 5,
      question: 'Can I book a Mercedes Sprinter chauffeur for a corporate event?',
      ans: "Yes, absolutely. You can book RolDrive's Mercedes Sprinter hire in London for your corporate event. Our spacious and luxurious Sprinter vans are perfect for transporting your team in comfort and style, ensuring a seamless and professional experience for all attendees.",
    },
    {
      id: 6,
      question: 'How far in advance do I need to book a Mercedes Sprinter hire in London?',
      ans: "To ensure availability, it is recommended to book RolDrive's Mercedes Sprinter car hire as early as possible. Early booking guarantees your preferred date and time, allowing us to provide the best service and accommodate your specific needs seamlessly.",
    },
    {
      id: 7,
      question: 'Are there any additional fees when booking a Mercedes Sprinter chauffeur hire?',
      ans: "RolDrive's Mercedes Sprinter car hire ensures no hidden costs, with all charges included in the quote. We offer transparent pricing, so you can budget accordingly and enjoy a stress-free experience, knowing exactly what you’re paying for your chauffeur service.",
    },
    {
      id: 8,
      question: 'Is a Mercedes Sprinter hire in London available for airport transfers?',
      ans: "RolDrive's Mercedes Sprinter car hire is available for convenient and luxurious airport transfers. Whether for group travel or transporting luggage, our Sprinter chauffeur service ensures comfort and reliability, making it ideal for seamless airport transportation tailored to your needs.",
    },
    {
      id: 9,
      question: 'What are the payment options for booking a Mercedes Sprinter van hire in London?',
      ans: "RolDrive's Mercedes Sprinter car hire offers convenient payment options, accepting all major credit and debit cards. This ensures flexibility and ease when booking your transportation service, accommodating various preferences for secure and hassle-free transactions.",
    },
  ],
};

const offeringData = {
  heading: {
    mainTitle: 'About Mercedes Sprinter Chauffeur Hire Service',
  },
  data: [
    {
      title: 'What are the primary advantages of hiring a Mercedes Sprinter hire in London?',
      desc: (
        <p className="text-[#B2B2B2]">The primary advantages of RolDrive’s Mercedes Sprinter hire in London include spacious and luxurious transportation ideal for group travel, corporate events, and special occasions. The Mercedes Sprinter offers ample seating for upto 19 passengers, ensuring comfort for all passengers while providing a smooth and enjoyable ride. Equipped with modern amenities such as climate control, advanced entertainment systems, and ample luggage space, it caters to all your travel needs. Additionally, RolDrive’s professional chauffeurs ensure punctuality, reliability, and a stress-free experience, allowing you to focus on your event or trip. Experience unmatched convenience and luxury with RolDrive’s Mercedes Sprinter hire in London.</p>
      ),
    },
    {
      title: 'How can clients book a Mercedes Sprinter hire in London, and what is the typical booking process?',
      desc: (
        <p className="text-[#B2B2B2]">
          Booking RolDrive’s Mercedes Sprinter hire in London is simple and convenient. Clients can use our online booking engine or
          <a href="/contact-us" className="text-blue-500"> contact us </a>
          directly to make a reservation. Additionally, downloading the RolDrive app offers an even easier booking experience. The typical booking process involves selecting the desired date and time, specifying any special requirements, and confirming the reservation. Our team will then arrange all the details to ensure a seamless and luxurious travel experience. Whether you need transportation for an event, corporate travel, or any other occasion, RolDrive’s Mercedes Sprinter hire in London provides comfort and reliability.
        </p>
      ),
    },
    {
      title: 'What is the cost of a RolDrive Mercedes Sprinter car hire with chauffeur, and what factors affect the pricing?',
      desc: (
        <p className="text-[#B2B2B2]">
          The cost of RolDrive’s Mercedes Sprinter car hire with chauffeur varies based on several factors, including the date and time of booking, the duration of hire, and special occasions. To get an accurate rate, use our booking engine or contact us directly for a free custom quote. We offer transparent pricing with no hidden charges, ensuring all-inclusive costs for your planning convenience. Enjoy luxury and comfort with RolDrive’s Mercedes Sprinter car hire, tailored to your specific needs and requirements.
        </p>
      ),
    },
    {
      title: 'How do RolDrive chauffeur services handle special requests or specific needs, such as accessibility features or extra luggage space for the Mercedes Sprinter car hire?',
      desc: (
        <p className="text-[#B2B2B2]">RolDrive’s Mercedes Sprinter car hires are designed to accommodate special requests and specific needs, ensuring a seamless travel experience. Whether you require accessibility features, extra luggage space, or any other specific accommodations, our team is dedicated to meeting your requirements. Simply inform us of your needs, and we will guide you in selecting the Mercedes Sprinter model that best suits your preferences. Our professional chauffeurs and well-equipped vehicles ensure a comfortable and hassle-free journey, tailored to your unique circumstances. With RolDrive, every detail is meticulously managed to provide the ultimate travel experience. </p>
      ),
    },
    {
      title: 'How do chauffeur services manage traffic and route planning to ensure timely arrivals and departures with a Mercedes Sprinter hire in London?',
      desc: (
        <p className="text-[#B2B2B2]">RolDrive chauffeur services manage traffic and route planning for timely arrivals and departures by utilising advanced GPS technology and real time traffic updates. With RolDrive’s Mercedes Sprinter hire in London, our experienced and knowledgeable chauffeurs analyze traffic patterns and select the most efficient routes to avoid delays. Additionally, they stay informed about road conditions, construction, and potential disruptions to adjust plans as needed. Regular communication with dispatch centres ensures flexibility and quick responses to any unforeseen circumstances. This meticulous planning and adaptability guarantee that clients experience a smooth, punctual journey, whether for airport transfers, corporate events, or city tours.</p>
      ),
    },
  ],
};

export default function page() {
  return (
    <>
      <MetaTags metadata={metadata} />
      <BookingBanner banner={banner} />
      <Services servicesData={ServicesData} />
      <Contact />
      <Locations />
      <ClientTestimonial />
      <ServicesFaq faqData={faqData} />
      <ServiceOfferings servicesData={offeringData} />
      <BookModal />
    </>
  );
}
