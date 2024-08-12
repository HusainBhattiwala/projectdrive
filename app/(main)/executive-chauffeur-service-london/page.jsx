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

const metadata = metadataConfig.executiveChauffeurLondon;

const banner = {
  title: 'Executive Chauffeur Service In London',
  bannerImage: '/rolnew/global/landing/executive-chauffeur-service-london.jpg',
  isLandingPage: true,
};

const ServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Tailored Executive Chauffeur Service In London For Your Every Need',
  desc: 'Indulge in an unparalleled executive chauffeur service in London with tailored services designed to meet your unique needs. Whether for seamless airport transfers, corporate travel, or special events, our chauffeur services upgrade your journey. Experience perfection in every detail. Browse our services now and upgrade your transportation experience with our exclusive Executive chauffeur service London.',
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfers',
      cardDesc:
        'Our airport transfers are seamless and effortless. Whether you need a pick up from your hotel or a drop off at the airport, our friendly and courteous professional chauffeurs will ensure your journey is comfortable and stress-free.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
        "WWith RolDrive, you'll make a lasting impression the moment you step out of our chauffeur driven vehicles. Let us help you make a statement and command the boardroom. Our corporate chauffeurs are reliable, efficient, and dedicated to exceeding your expectations.",
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding ',
      cardDesc:
        "We recognise the importance of making your special day flawless. That's why we offer a selection of chauffeur driven vehicles, including luxury brands like Rolls Royce, Maybach, and Bentley. Our meticulously maintained vehicles add an extra touch of elegance to your celebration.",
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
        'Our experienced private jet chauffeur service ensures safe transportation to and from the tarmac of your private jet or helicopter, driving you to your hotel or business meeting. Our fleet offers complimentary packages, guaranteeing a comfortable and enjoyable experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
        'We provide transportation services for social, cultural, and sports events in and around the city. Whether attending a private party or a large scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and exceptional experience.',
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
        'With our hourly and full day chauffeur service, choose from our extensive and diverse fleet of vehicles for a comfortable and memorable journey. Experience luxurious, stress free transportation with RolDrive, as our knowledgeable chauffeurs expertly guide you on your trips.',
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions For Executive Chauffeur Service In London',
  data: [
    {
      id: 0,
      question:
        'How do I book an executive chauffeur service in London?',
      ans: (
        <p>
          To book an executive chauffeur service in London, visit RolDrive’s
          <a href="/login" className="text-blue-500"> Book Now </a>
          option or contact our customer service team directly. Choose your preferred vehicle, provide trip details, and confirm your reservation. Enjoy a seamless booking experience with professional and reliable transportation tailored to your needs.
        </p>
      ),
    },
    {
      id: 1,
      question: 'What is the cost of booking an executive car hire service in London?',
      ans: "The cost of booking an executive chauffeur service in London varies based on the date and time, especially during special occasions. For an accurate quote, please use the 'Book Now' option or contact us directly for a free, tailored quote.",
    },
    {
      id: 2,
      question: 'Which companies offer the best executive car hire services in London?',
      ans: 'For the best executive chauffeur service in London, RolDrive stands out for its exceptional service, luxurious fleet, and professional drivers. Known for reliability and comfort, RolDrive ensures a premium travel experience tailored to your needs, making it a top choice for discerning clients.',
    },
    {
      id: 3,
      question: 'Are executive car hire services in London available 24/7?',
      ans: 'Yes, RolDrive’s executive chauffeur service in London is available 24/7, ensuring round-the-clock luxury and convenience. Whether you need transportation early in the morning or late at night, our professional chauffeurs are always ready to provide exceptional service tailored to your schedule.',
    },
    {
      id: 4,
      question: 'Can I book an executive chauffeur service in London for airport transfers?',
      ans: "Yes, you can book RolDrive's executive car hire with driver for airport transfers in London. Enjoy a seamless, luxurious experience with our professional chauffeurs, ensuring timely arrivals and departures. Experience convenience and comfort with our tailored airport transfer services.</p>",
    },
    {
      id: 5,
      question: 'What types of vehicles are available for executive chauffeur services in London?',
      ans: (
        <p>
          RolDrive’s executive car hire with driver offers a range of premium vehicles, including the Mercedes E Class, BMW 5 Series, and Audi A6. For a complete list of available vehicles, visit our
          <a href="/fleet" className="text-blue-500"> Fleet </a>
          section and choose the perfect car for your needs.
        </p>
      ),
    },
    {
      id: 6,
      question: 'How far in advance should I book an executive chauffeur service in London?',
      ans: "To secure your preferred vehicle, it's advisable to book a RolDrive executive car hire in London as early as possible. Early booking ensures availability and allows us to provide the best service tailored to your needs.",
    },
    {
      id: 7,
      question: 'Are executive car hire services in London suitable for corporate events?',
      ans: 'Executive chauffeur services in London are perfect for corporate events. With RolDrive’s executive car hire in London, you ensure punctuality, professionalism, and a seamless travel experience, making a great impression on clients and colleagues while providing luxurious and stress-free transportation.',
    },
    {
      id: 8,
      question: 'What is included with an executive chauffeur service in London?',
      ans: (
        <p>RolDrive’s executive car hire in London includes free water bottles, newspapers, and Wi-Fi among many other amenities. Enjoy luxurious, stress-free transportation with professional chauffeurs ensuring a comfortable and seamless journey tailored to your needs.</p>
      ),
    },
    {
      id: 9,
      question: 'Can I book an executive chauffeur service in London for a full day?',
      ans: 'Yes, you can book a RolDrive executive car hire in London for a full day, offering options from one-way transfers to round trips, hourly services, and extended bookings spanning multiple days to suit your specific needs. Try the ‘Book Now’ option to know moreYes, you can book a RolDrive executive car hire in London for a full day, offering options from one-way transfers to round trips, hourly services, and extended bookings spanning multiple days to suit your specific needs. Try the ‘Book Now’ option to know more',
    },
  ],
};

const offeringData = {
  heading: {
    mainTitle: 'Executive Chauffeur Service in London',
  },
  data: [
    {
      title: 'What differentiates an executive chauffeur service in London from other types of chauffeur services?',
      desc: (
        <p className="text-[#B2B2B2]">RolDrive’s executive chauffeur service in London stands out due to its emphasis on professionalism, luxury, and personalised service. Unlike standard chauffeur services, our executive service caters specifically to business professionals and high-profile clients, offering a fleet of premium vehicles equipped with the latest amenities for comfort and productivity. Our chauffeurs are impeccably trained, ensuring punctuality, discretion, and a thorough understanding of London’s routes and traffic patterns. Additionally, RolDrive provides bespoke travel solutions tailored to individual needs, such as real-time itinerary adjustments and specialised services for corporate events, meetings, and VIP transfers, making each journey seamless and stress free.</p>
      ),
    },
    {
      title: 'How can clients schedule or book a RolDrive executive chauffeur service in London, and what is the standard procedure?',
      desc: (
        <p className="text-[#B2B2B2]">
          Clients can easily schedule or book RolDrive’s executive chauffeur service in London through our user-friendly booking engine on our website. Simply select your desired vehicle, date, and time, and provide the necessary details to confirm your booking. Alternatively, you can
          <a href="/contact-us" className="text-blue-500"> contact us </a>
          directly for a free quote tailored to your specific needs. For added convenience, download the RolDrive app, which allows for seamless booking and management of your transportation services. Our team is dedicated to ensuring a smooth and luxurious travel experience, from the moment you book until you reach your destination.
        </p>
      ),
    },
    {
      title: 'What types of luxury vehicles are available for executive chauffeur services in London by RolDrive?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s executive chauffeur service in London offers a wide range of luxury vehicles for your executive transfers. Clients can choose from top models including the Mercedes Benz E Class, BMW 5 Series, Audi A6, Mercedes Benz S Class, BMW 7 Series, and Audi A8. For those seeking extra luxury, we also offer Rolls Royce and Bentley options. To see the full list of available vehicles, check our
          <a href="/fleet" className="text-blue-500"> fleet online. </a>
          With RolDrive, you can enjoy unparalleled comfort and style for all your executive travel needs.
        </p>
      ),
    },
    {
      title: 'What is the typical pricing structure for RolDrive’s executive chauffeur services in London, and what factors influence the cost?',
      desc: (
        <p className="text-[#B2B2B2]">
          The pricing structure for RolDrive’s executive chauffeur service in London varies based on several factors, including the type of vehicle chosen, the duration of the service, and the specific requirements of your journey. Additional considerations such as peak travel times, special events, and customised itineraries may also influence the cost. To obtain accurate pricing, please use our online booking engine or contact us directly for a free custom quote. We provide transparent pricing to help you budget accordingly and ensure you receive the best value for our premium chauffeur services.
        </p>
      ),
    },
    {
      title: 'Are there options to tailor the executive car hire experience, such as specific amenities, vehicle configurations, or business needs?',
      desc: (
        <p className="text-[#B2B2B2]">
          Yes, RolDrive’s executive car hire offers a range of customisable options to tailor your experience. Choose from various vehicle configurations to meet your specific needs, whether you require extra space for business meetings or additional amenities for comfort. We can provide amenities such as Wi-Fi, refreshments, and specialised seating arrangements to suit your preferences. Our executive cars are equipped to accommodate your business needs, ensuring a seamless and professional journey. Contact us to discuss your requirements and make arrangements that align with your expectations, enhancing your overall travel experience with RolDrive’s executive car hire.
        </p>
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
