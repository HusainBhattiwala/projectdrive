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

const metadata = metadataConfig.longDistanceChauffeur;

const banner = {
  title: 'Long Distance Chauffeur Service in London',
  bannerImage: '/rolnew/global/landing/long-distance-chauffeur-hire-in-london.jpg',
  isLandingPage: true,
};

const ServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Tailored Long Distance Chauffeur Hire in London Services For Your Every Need',
  desc: "Planning an intercity or long distance journey? Discover our exceptional long distance chauffeur hire in London, offering comfort and reliability for your travels. Whether you're heading to another city or exploring the countryside, our experienced chauffeurs ensure a smooth ride, allowing you to relax and enjoy the journey. Experience luxury and peace of mind with our tailored services designed for your convenience.",
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfers',
      cardDesc:
        'Our airport transfers are seamless and stress-free. Whether you need pickup from the hotel to the airport or vice versa, our friendly and professional chauffeurs ensure your journey is comfortable and effortless.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
        "With RolDrive, you'll leave a lasting impression from the moment you step out of our chauffeur driven vehicles. Let us assist you in making a statement and leading the boardroom. Our corporate chauffeurs are reliable, efficient, and committed to surpassing your expectations.",
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding Transfers',
      cardDesc:
        "We recognise the significance of ensuring your special day is perfect. That's why we provide a selection of chauffeur driven vehicles, including luxury brands like Rolls Royce, Maybach, and Bentley. Our meticulously maintained vehicles enhance the elegance of your celebration.",
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
        'Our experienced private jet chauffeur service safely transports you to and from the tarmac of your private jet or helicopter, ensuring a smooth journey to your hotel or business meeting. Our fleet also offers complimentary amenities for a comfortable and enjoyable experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
        "We also offer transportation services for social, cultural, and sports events in and around the city. Whether it's a private party or a large scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and memorable experience for all.",
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
        'Experience comfort and memorable journeys with our hourly and full day chauffeur service, offering a diverse fleet of vehicles. RolDrive provides luxurious, stress-free transportation solutions, guided by knowledgeable chauffeurs who enhance your trips with their expertise.',
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions For A Long Distance Chauffeur Hire In London',
  data: [
    {
      id: 0,
      question:
        'How do I book a long distance chauffeur hire in London?',
      ans: (
        <p>
          To book RolDrive’s long distance chauffeur service in London, simply click our
          <a href="/login" className="text-blue-500"> Book Now </a>
          button or give us a call directly and we will provide you with a free tailored quote.
        </p>
      ),
    },
    {
      id: 1,
      question: 'What are the costs associated with long distance chauffeur hire in London?',
      ans: "For RolDrive's long distance chauffeur service in London, costs vary depending on the date and time. We suggest requesting a booking to receive transparent pricing inclusive of all costs. We ensure clarity and competitive rates for your journey, providing a seamless and reliable experience throughout.",
    },
    {
      id: 2,
      question: 'Which companies offer long distance chauffeur services in London?',
      ans: 'Among the many companies offering long distance chauffeur services, RolDrive stands out, ensuring luxurious and comfortable travel experiences. Whether for business or leisure, our professional chauffeurs provide tailored services to meet your travel needs, ensuring a smooth and enjoyable journey throughout.',
    },
    {
      id: 3,
      question: 'Can I book a long distance chauffeur hire for travel outside of London?',
      ans: "Yes, you can book RolDrive's long distance chauffeur service for travel outside of London. Whether for business or leisure, our service ensures comfort and convenience with experienced chauffeurs and a premium fleet. Arrange your journey easily by contacting us or visiting our website to make a reservation.",
    },
    {
      id: 4,
      question: 'What types of vehicles are available for long distance chauffeur hire in London?',
      ans: (
        <p>
          RolDrive’s long distance chauffeur service in London offers a range of vehicles, starting from the Mercedes Benz E Class to the spacious V Class and higher-end options. Visit the
          <a href="/fleet" className="text-blue-500"> fleet </a>
          section for detailed information on our diverse selection tailored for comfortable and luxurious travel experiences.
        </p>
      ),
    },
    {
      id: 5,
      question: 'How far in advance should I book a long distance chauffeur hire in London?',
      ans: "For RolDrive's long distance chauffeur service in London, it's advisable to book as soon as possible. This ensures the availability of your preferred vehicle, especially during peak times or special occasions, guaranteeing a seamless and comfortable journey tailored to your needs.",
    },
    {
      id: 6,
      question: 'Are there any additional charges for long distance travel with a chauffeur in London?',
      ans: "No, RolDrive's long distance chauffeur service in London includes transparent pricing that is inclusive of all taxes. There are no additional charges for long distance travel, ensuring straightforward and clear pricing for our clients' peace of mind.",
    },
    {
      id: 7,
      question: 'Can I customise the route and stops for a long distance chauffeur hire in London?',
      ans: "Absolutely, yes! With RolDrive's long distance chauffeur service in London, you can customise the route and stops to suit your preferences and needs. Enjoy the flexibility of planning your journey exactly as you desire, through RolDrive’s chauffeured services. ",
    },
    {
      id: 8,
      question: 'What amenities are provided in vehicles for long distance chauffeur hire in London? ',
      ans: (
        <p>RolDrive’s long distance car hire in London includes amenities tailored for comfort, such as plush leather seating, climate control, Wi-Fi connectivity, and complimentary refreshments. Ensuring a relaxing journey, our vehicles are equipped with state-of-the-art features to meet your needs during extended travel times.</p>
      ),
    },
    {
      id: 9,
      question: 'Are long distance chauffeur services in London available for overnight trips?',
      ans: "Yes, RolDrive's long distance chauffeur hire in London offers overnight trips for your convenience. Whether for business or leisure, our services ensure comfortable and safe travel throughout the night, accommodating your specific needs with our reliable and professional chauffeurs.",
    },
  ],
};

const offeringData = {
  heading: {
    mainTitle: 'Hire a Driver For Long Distance',
  },
  data: [
    {
      title: 'What types of vehicles are available for RolDrive’s long distance chauffeur hire in London?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s long distance chauffeur hire in London offers a diverse fleet of vehicles to cater to your specific needs and preferences. Our selection includes luxury sedans such as the Mercedes E Class and S Class for a smooth, stylish ride. For larger groups or those desiring extra space, our Mercedes V Class and Sprinter vans provide comfort and ample room. We also offer high-end models like the Rolls Royce Phantom and Bentley Mulsanne for those seeking ultimate luxury and sophistication. Each vehicle is equipped with modern amenities to ensure a comfortable, enjoyable journey over long distances. Check out our
          <a href="/fleet" className="text-blue-500"> fleet </a>
          section to learn about all the vehicles RolDrive offers.
        </p>
      ),
    },
    {
      title: 'What services are typically included in a RolDrive long distance chauffeur hire in London?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s long distance chauffeur hire in London offers a comprehensive range of services to ensure a comfortable and enjoyable journey. Our knowledgeable chauffeurs can guide you through the outskirts of the city, taking you along your desired routes to enjoy the scenic views. The service includes door-to-door transportation, luggage assistance, complimentary refreshments, and Wi-Fi access. Listen to your favourite music as our chauffeurs provide a smooth and stress-free experience, ensuring punctuality and safety throughout your trip. Whether you’re travelling for business or leisure, RolDrive’s long distance chauffeur hire in London guarantees a luxurious and memorable travel experience.
        </p>
      ),
    },
    {
      title: 'Are there any additional charges for fuel, tolls, or parking when hiring a RolDrive chauffeur for long distance travel?',
      desc: (
        <p className="text-[#B2B2B2]">When hiring RolDrive’s long distance chauffeur hire in London, you can enjoy peace of mind knowing that our prices are transparent and all fees are included. There are no additional charges for fuel, tolls, or parking. We believe in providing a seamless and hassle-free experience, ensuring that all costs are covered upfront. This allows you to focus on your journey without worrying about unexpected expenses. Our comprehensive pricing structure ensures you receive exceptional service and comfort, making RolDrive the ideal choice for long-distance travel in and around London. </p>
      ),
    },
    {
      title: 'What are the advantages of hiring a RolDrive long distance chauffeur service in London when compared to self-driving?',
      desc: (
        <p className="text-[#B2B2B2]">
          Hiring RolDrive’s long distance chauffeur service in London offers numerous advantages over self-driving. Enjoy a stress-free journey without the hassle of navigation or traffic, allowing you to relax or focus on work. Our professional chauffeurs provide a comfortable and luxurious experience with their expertise and knowledge of the best routes. The premium fleet ensures reliability and style, while safety is prioritised with well-maintained vehicles and trained drivers. Additionally, you save time and energy, avoiding the fatigue associated with long drives. Choose RolDrive for an efficient, comfortable, and convenient long distance travel experience.
        </p>
      ),
    },
    {
      title: 'Can RolDrive’s long distance chauffeur hire in London accommodate special requests, such as multiple stops or specific routes?',
      desc: (
        <p className="text-[#B2B2B2]">
          Yes, RolDrive’s long distance chauffeur hire in London can accommodate special requests, including multiple stops and specific routes. We strive to tailor our services to meet your unique needs for a seamless travel experience. To ensure accurate pricing, please inform us about the specific routes you wish to take so we can calculate your fare accordingly. Our professional chauffeurs are dedicated to providing flexible and personalised service, ensuring your journey is comfortable and efficient. Whether for business or leisure, trust RolDrive to deliver an exceptional long distance chauffeur service in London, tailored to your preferences. Try our booking engine or
          <a href="/contact-us" className="text-blue-500"> contact us </a>
          for a free tailored quote that matches your requirements.
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
