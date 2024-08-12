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

const metadata = metadataConfig.hourlyChauffeur;

const banner = {
  title: 'Hourly Chauffeur Service',
  bannerImage: '/rolnew/global/landing/hourly-chauffeur-service.jpg',
  isLandingPage: true,
};

const ServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Tailored Hourly Chauffeur Services For Your Every Need',
  desc: 'Indulge in an unparalleled experience with our hourly chauffeur services, tailored to meet your unique requirements. Whether you need seamless airport transfers, corporate travel, or special event transportation, our services elevate your journey. With every detail perfected, browse our offerings now to enhance your transportation experience with our exclusive hourly chauffeur services.',
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfers',
      cardDesc:
        'Our airport transfers are smooth and effortless. Whether you need a ride from the hotel to the airport or vice versa, our friendly and courteous professional chauffeurs ensure a comfortable and stress-free journey.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
        'With RolDrive, you’ll make a lasting impression from the moment you step out of our chauffeur-driven vehicles. Let us help you make a statement and command the boardroom. Our corporate chauffeurs are dependable, efficient, and dedicated to exceeding your expectations.',
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding Transfers',
      cardDesc:
        'We understand the importance of making your special day flawless, which is why we offer a range of chauffeur-driven vehicles, including luxury brands like Rolls Royce, Maybach, and Bentley. Our meticulously maintained vehicles add an extra touch of elegance to your celebration.',
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
        'Our experienced private jet chauffeur service ensures safe transportation to and from the tarmac of your private jet or helicopter, driving you to your hotel or business meeting. Our fleet includes complimentary packages to guarantee a comfortable and enjoyable experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
        'We provide transportation services for social, cultural, and sports events in and around the city. Whether attending a private party or a large-scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and exceptional experience.',
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
        'With our hourly and full-day chauffeur service, choose from our extensive and diverse fleet to ensure a comfortable and memorable journey. Experience luxurious and stress-free transportation with RolDrive, as our knowledgeable chauffeurs guide you throughout your trips.',
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions For Hourly Chauffeur Services Hire',
  data: [
    {
      id: 0,
      question:
        'How do I book an hourly chauffeur service in London?',
      ans: (
        <p>
          To book RolDrive’s hourly car rental with driver services, simply visit our website and click on the
          <a href="/login" className="text-blue-500"> Book Now </a>
          option or drop us a mail and we’ll promptly contact you. Book a chauffeur service through us to experience luxurious travel.
        </p>
      ),
    },
    {
      id: 1,
      question: 'What is the cost of booking an hourly chauffeur service in London?',
      ans: "The cost of booking RolDrive's hourly chauffeur services varies depending on the date, time, and special occasions. For an accurate price, please get in touch with us for a free tailored quote.",
    },
    {
      id: 2,
      question: 'What are the benefits of booking an hourly chauffeur service?',
      ans: "Booking RolDrive's hourly car rental with driver services offers numerous benefits. Enjoy flexibility with customisable travel schedules, ensuring you have transportation whenever needed. Our professional chauffeurs provide reliable, punctual service, allowing you to relax and focus on your activities. Additionally, choose from a diverse fleet of luxury vehicles for a comfortable and stylish journey.",
    },
    {
      id: 3,
      question: 'How far in advance should I book an hourly chauffeur service?',
      ans: "For RolDrive's hourly car rental services, it's advisable to book as early as possible, especially during special occasions, to secure your preferred vehicle. This ensures availability and allows for adequate preparation to meet your specific needs seamlessly.",
    },
    {
      id: 4,
      question: 'Can I book an hourly chauffeur service for multiple stops?',
      ans: (
        <p>Yes, you can book RolDrive’s hourly chauffeur services for multiple stops. Whether you have several destinations to visit or need flexibility in your itinerary, our chauffeur service allows you to customise your journey with convenience and comfort throughout.</p>
      ),
    },

    {
      id: 5,
      question: 'What types of vehicles are available for hourly chauffeur services?',
      ans: (
        <p>
          For RolDrive’s hourly chauffeur services, a variety of vehicles are available to suit your needs. Visit our
          <a href="/fleet" className="text-blue-500"> Fleet </a>
          section to explore all the options, ensuring you find the perfect vehicle for your comfort and style preferences during your journey.
        </p>
      ),
    },

    {
      id: 6,
      question: 'Are hourly chauffeur services available 24/7?',
      ans: "RolDrive's 24 hour car rental service in London is available any time of the day or night, ensuring flexibility and convenience for your transportation needs. Whether for early morning airport transfers or late-night events, our professional chauffeurs are ready to provide reliable service around the clock.",
    },
    {
      id: 7,
      question: 'Are there any additional fees for booking an hourly chauffeur service?',
      ans: "With RolDrive's hourly chauffeur service in London, there are no additional fees. Our pricing is transparent, inclusive of all charges, ensuring a straightforward booking experience without any hidden costs.",
    },
    {
      id: 8,
      question: 'What is the minimum booking time for RolDrives’ hourly chauffeur services?',
      ans: (
        <p>RolDrive’s hourly chauffeur services require a minimum booking time of 4 hours. Another option that RolDrive provides for those requiring vehicles for shorter durations is direct transfers.</p>
      ),
    },
    {
      id: 9,
      question: 'How do RolDrive’s hourly chauffeur services in London ensure safety and hygiene?',
      ans: "RolDrive's hourly chauffeur services prioritise safety and hygiene through rigorous protocols. Vehicles undergo regular sanitisation before and after every use. Additionally, RolDrive ensures compliance with local health guidelines to provide a secure and hygienic environment for every journey.",
    },
  ],
};

const offeringData = {
  heading: {
    mainTitle: 'Hire a Personal Chauffeur in London',
  },
  data: [
    {
      title: 'What types of vehicles are available for hourly chauffeur services?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s hourly chauffeur services offer a diverse fleet of vehicles to cater to your specific needs and preferences. Our selection includes luxury sedans like the Mercedes E Class and S Class for a stylish and comfortable ride, spacious SUVs such as the Range Rover for added room and versatility, and premium vans like the Mercedes V Class for group travel or extra luggage capacity. Each vehicle is meticulously maintained to ensure the highest standards of safety and comfort. Whether you need transportation for business meetings, city tours, or special events, RolDrive provides the perfect vehicle to enhance your travel experience. Check our
          <a href="/fleet" className="text-blue-500"> fleet </a>
          for a comprehensive list of vehicles on offer.
        </p>
      ),
    },
    {
      title: 'Are there any additional charges for services like parking, tolls, or waiting time in an hourly chauffeur service?',
      desc: (
        <p className="text-[#B2B2B2]">
          With RolDrive’s hourly chauffeur services, there are no additional charges for parking, tolls, or waiting time once the fare is fixed. You pay only what you have been quoted, ensuring transparent pricing with no hidden fees. This allows you to budget accordingly. Additional charges apply only if you need to extend the booking duration beyond the agreed time. Our goal is to provide a hassle-free and straightforward service, ensuring you enjoy a comfortable and stress-free journey without any unexpected costs.
        </p>
      ),
    },
    {
      title: 'Can I extend the duration of my RolDrive hourly chauffeur service in London if needed?',
      desc: (
        <p className="text-[#B2B2B2]">
          Yes, you can extend the duration of RolDrive’s hourly chauffeur service in London if needed. If you require additional time beyond the initially agreed hours, our services can be extended based on availability. Please be aware that additional charges will apply on an hourly basis for the extended period. To arrange an extension or for further details,
          <a href="/contact-us" className="text-blue-500"> contact us </a>
          or your RolDrive account manager in advance to ensure seamless and uninterrupted service. We aim to accommodate your needs and provide a flexible, comfortable experience throughout your journey.
        </p>
      ),
    },
    {
      title: 'What are the typical uses or occasions for hiring a RolDrive hourly chauffeur service in London?',
      desc: (
        <p className="text-[#B2B2B2]">RolDrive’s hourly chauffeur service in London is ideal for various occasions. It’s especially useful for newcomers exploring the city, ensuring you enjoy your visit without the hassle of driving. Whether you’re preparing for business meetings, attending events, or heading out for a party where you might indulge in a drink or two, our service provides the convenience and luxury you need. Enjoy a stress-free journey with our experienced chauffeurs, allowing you to focus on your activities while we handle the transportation details. </p>
      ),
    },
    {
      title: 'What is the cancellation policy for RolDrive’s hourly chauffeur services?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s hourly chauffeur services offer a flexible cancellation policy to accommodate your needs. If you cancel up to 12 hours before your scheduled booking time, you will receive a full refund. For cancellations made within 12 hours of the booking time, a fee may apply. We recommend contacting us directly to discuss any changes or to learn more about our specific cancellation terms. Our team is here to assist you and ensure a smooth experience with RolDrive’s hourly chauffeur services.
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
