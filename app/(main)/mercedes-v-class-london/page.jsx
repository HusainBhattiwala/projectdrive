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

const metadata = metadataConfig.mercedesVClassLondon;

const banner = {
  title: 'Mercedes V Class Chauffeur In London',
  bannerImage: '/rolnew/global/landing/mercedes-v-class-london.jpg',
  isLandingPage: true,
};

const ServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Tailored Mercedes V Class Chauffeur in London Services For Your Every Need',
  desc: 'Indulge in an unparalleled Mercedes V Class chauffeur London experience with tailored services designed to meet your unique requirements. Whether you need seamless airport transfers, corporate travel, or special event transportation, our chauffeur services enhance your journey. Enjoy a meticulously crafted experience where every detail is perfected. Browse our services now and upgrade your transportation with our exclusive Mercedes V Class chauffeur in London service.',
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfers',
      cardDesc:
        'Our airport transfers are smooth and effortless. Whether you need to be picked up from the hotel and dropped off at the airport or vice versa, our friendly and professional chauffeurs ensure a comfortable and stress-free journey.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
        "With RolDrive, you'll make a lasting impression the moment you step out of our chauffeur driven vehicles. Let us help you make a statement and command the boardroom. Our corporate chauffeurs are dependable, efficient, and committed to exceeding your expectations.",
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding Transfers',
      cardDesc:
        "We understand the importance of making your special day flawless. That's why we offer a range of chauffeur driven vehicles, including luxury brands like Rolls Royce, Maybach, and Bentley. Our meticulously maintained vehicles add an extra touch of elegance to your celebration.",
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
        'Our experienced private jet chauffeur service ensures safe transport to and from the tarmac of your private jet or helicopter, driving you to your hotel or business meeting. Our fleet is equipped with complimentary packages to guarantee a comfortable and enjoyable experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
        'We provide transportation services for social, cultural, and sports events in and around the city. Whether attending a private party or a large scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and memorable experience.',
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
        "With our hourly and full day chauffeur service, you can choose from our extensive and diverse fleet of vehicles to ensure a comfortable and memorable journey. Experience RolDrive's luxurious, stress-free transportation solutions, with knowledgeable chauffeurs guiding you on your trips.",
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions For A Mercedes V Class Chauffeur In London ',
  data: [
    {
      id: 0,
      question:
        'What is the price of renting a Mercedes V Class hire with a driver in London?',
      ans: (
        <p>
          The price of renting a Mercedes V Class in London varies depending on the date, time, and special occasions. For an accurate and tailored quote for a Mercedes V Class hire with driver, please
          <a href="/contact-us" className="text-blue-500"> get in touch with RolDrive. </a>
        </p>
      ),
    },
    {
      id: 1,
      question: 'Where can I find a Mercedes V Class hire with a driver in London?',
      ans: 'Contact RolDrive for a Mercedes V Class hire with driver in London. Enjoy luxurious and comfortable transportation tailored to your needs, whether for airport transfers, corporate events, or special occasions. Experience top notch service with our professional chauffeurs ensuring a smooth and pleasant journey throughout the city.',
    },
    {
      id: 2,
      question: 'How many passengers can the Mercedes V Class accommodate?',
      ans: 'The Mercedes V Class hire with driver, offers luxurious seating for up to 8 passengers, ample luggage space, and advanced safety features. It combines comfort with versatility, ideal for corporate travel, airport transfers, and family outings, ensuring a smooth and stylish transportation experience.',
    },

    {
      id: 3,
      question: 'What other vehicles does RolDrive offer apart from the Mercedes V Class?',
      ans: (
        <p>
          Apart from Mercedes V Class hire with driver, RolDrive offers a range of vehicles including Mercedes S Class, E Class, Sprinters as well as luxury options like Rolls Royce and Bentley. Each vehicle ensures comfort and style, catering to various client needs for different occasions and preferences. Check our
          {' '}
          <a href="/fleet" className="text-blue-500">Fleet</a>
          {' '}
          section to know more.
        </p>
      ),
    },

    {
      id: 4,
      question: 'What are the features of the Mercedes V Class?',
      ans: 'The Mercedes V Class, available for hire with a driver, combines luxury and versatility. It features spacious seating for up to 8 passengers, premium comfort with leather upholstery, advanced safety technologies, and ample luggage capacity. Ideal for executive travel, airport transfers, and comfortable city tours with a group.',
    },
    {
      id: 5,
      question: 'Is the Mercedes V Class available for airport transfers in London?',
      ans: 'Yes, the Mercedes chauffeur van, specifically the Mercedes V Class, is available for airport transfers in London. Enjoy spacious and luxurious transportation with the Mercedes V Class, ensuring comfort and style for your journey to and from the airport.',
    },
    {
      id: 6,
      question: 'What are the safety features of the Mercedes V Class?',
      ans: 'The Mercedes V Class, known for its safety, includes features such as Collision Prevention Assist, Crosswind Assist, and Attention Assist. It also offers multiple airbags, electronic stability program, and advanced braking systems, ensuring a secure and smooth ride for passengers in the Mercedes chauffeur van.',
    },
    {
      id: 7,
      question: 'How does the Mercedes V Class compare to other luxury vans in London?',
      ans: 'The Mercedes V Class stands out among luxury vans in London with its unparalleled comfort, spaciousness, and sophisticated design. Renowned for its plush interiors and advanced features, it offers a superior travel experience, making it a preferred choice for discerning travellers seeking a Mercedes Benz chauffeur in London service.',
    },
    {
      id: 8,
      question: 'Is the chauffeur service included when booking a Mercedes V Class in London?',
      ans: 'Yes, when booking a Mercedes V Class in London, the chauffeur service is included. Enjoy the convenience and luxury of a Mercedes Benz chauffeur in London, ensuring a comfortable and stylish transportation experience tailored to your needs and preferences.',
    },
    {
      id: 9,
      question: 'Are there any discounts for long term rentals of the Mercedes V Class hire with a driver in London?',
      ans: (
        <p>
          For long term rentals of the Mercedes V Class chauffeur in London, we often offer attractive discounts tailored to extended bookings. Enjoy luxury and comfort throughout your extended stay or frequent travels with competitive rates and exceptional service from RolDrive. Contact us to explore our long term rental options and benefits.
        </p>
      ),
    },
  ],
};

const offeringData = {
  heading: {
    mainTitle: 'About Mercedes V Class Chauffeur Service',
  },
  data: [
    {
      title: 'What are the key features and specifications of the Mercedes V Class with chauffeur in London?',
      desc: (
        <p className="text-[#B2B2B2]">RolDrive’s Mercedes V Class in London offers an exceptional blend of luxury, space, and performance, making it perfect for both corporate and leisure travel. Seating up to 7 passengers comfortably, this vehicle features a spacious, high-quality interior with premium leather seats, advanced climate control, and ample luggage space. The Mercedes V Class is equipped with a powerful 2.1-liter diesel engine, ensuring a smooth and efficient ride. Additional amenities include state-of-the-art entertainment systems, Wi-Fi, and charging ports. With its elegant design and top-notch features, RolDrive’s Mercedes V Class ensures a comfortable, stylish, and seamless travel experience in London.</p>
      ),
    },
    {
      title: 'What are the typical rental rates for a Mercedes V Class chauffeur in London?',
      desc: (
        <p className="text-[#B2B2B2]">
          The rental rates for RolDrive’s Mercedes V Class chauffeur in London vary based on the date, time of booking, and special occasions. Our pricing is competitive and tailored to meet your specific needs. For precise rates, please utilise our online booking engine or
          {' '}
          <a href="/contact-us" className="text-blue-500">contact us directly</a>
          {' '}
          for a free, customized quote. Whether it’s for corporate travel, special events, or airport transfers, RolDrive ensures a luxurious and comfortable experience with our Mercedes V Class, driven by professional and knowledgeable chauffeurs dedicated to providing exceptional service.
        </p>
      ),
    },
    {
      title: 'Are there any additional services included when booking a Mercedes V Class hire with a driver?',
      desc: (
        <p className="text-[#B2B2B2]">When you choose RolDrive’s Mercedes V Class hire with driver, you receive an array of additional services to enhance your journey. Our professional chauffeurs provide assistance with luggage, ensuring a hassle-free experience from start to finish. Enjoy a complimentary meet and greet service, making your arrival smooth and welcoming. Stay connected with free onboard WiFi and stay refreshed with bottled water. For your convenience, we also offer newspapers to keep you informed during your ride. With RolDrive, every detail is designed to ensure your comfort and satisfaction, making your travel experience truly exceptional. </p>
      ),
    },
    {
      title: 'What is the booking process for hiring a Mercedes V Class chauffeur in London, and how far in advance should reservations be made?',
      desc: (
        <p className="text-[#B2B2B2]">To book RolDrive’s Mercedes V Class chauffeur in London, visit our website or contact our customer service team. Select the Mercedes V Class option, provide your travel details, and confirm your reservation. For the best experience, make your reservations as early as possible, especially during festive occasions, to ensure your vehicle of choice is available. Our team will handle all the details, ensuring a seamless and luxurious transportation experience tailored to your needs. Enjoy comfort and reliability with RolDrive’s professional chauffeur services, perfect for any occasion. </p>
      ),
    },
    {
      title: 'What are the common uses for hiring a Mercedes V Class chauffeur in London?',
      desc: (
        <p className="text-[#B2B2B2]">Hiring RolDrive’s Mercedes V Class chauffeur in London is perfect for various occasions. It’s ideal for corporate travel, providing executives with a comfortable and professional ride to meetings and events. Families and groups can enjoy spacious and luxurious airport transfers, ensuring a stress-free start or end to their trips. The V Class is also popular for city tours, offering ample room and a refined experience while exploring London’s attractions. Additionally, it’s an excellent choice for special events like weddings or parties, ensuring guests travel in style. RolDrive’s Mercedes V Class chauffeur service guarantees a smooth, luxurious journey for any purpose.</p>
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
