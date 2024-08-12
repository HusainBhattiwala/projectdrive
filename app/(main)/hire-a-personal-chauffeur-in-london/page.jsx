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

const metadata = metadataConfig.personalChauffeurLondon;

const banner = {
  title: 'Hire A Personal Chauffeur In London',
  bannerImage: '/rolnew/global/landing/hire-a-personal-chauffeur-in-london.jpg',
  isLandingPage: true,
};

const ServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Tailored Hire A Personal Chauffeur Services For Your Every Need',
  desc: "Planning an outing in London? Hire a personal chauffeur with us and discover exceptional comfort and reliability for your travels. Whether you're attending a meeting or exploring the city, our experienced chauffeurs ensure a smooth, relaxing ride. Experience luxury and peace of mind with our tailored services designed for your convenience, making every journey in London a delightful experience. Enjoy the city with our professional chauffeur service.",
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfers',
      cardDesc:
        'Our airport transfers are seamless and hassle-free. Whether you need a pickup from the hotel to the airport or vice versa, our friendly and courteous professional chauffeurs will ensure your journey is comfortable and stress free.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
        "With RolDrive, you'll make a lasting impression the moment you step out of our chauffeur driven vehicles. Let us help you make a statement and command the boardroom. Our corporate chauffeurs are dependable, efficient, and dedicated to exceeding your expectations.",
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding Transfers',
      cardDesc:
        'We understand the importance of making your special day flawless. That’s why we offer a range of chauffeur driven vehicles, including luxury brands such as Rolls Royce, Maybach, and Bentley. Our meticulously maintained cars add an extra touch of elegance to your celebration.',
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
        'Our experienced private jet chauffeur service safely transports you to and from the tarmac of your private jet or helicopter, ensuring a seamless journey to your hotel or business meeting. Our fleet offers complimentary amenities for a comfortable and enjoyable travel experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
        "We offer transportation services for social, cultural, and sports events in and around the city. Whether you're attending a private party or a large scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and memorable experience for all.",
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
        "Choose from our diverse fleet with our hourly or full day chauffeur service to ensure your journey is both comfortable and memorable. Experience RolDrive's luxurious and stress free transportation solutions, guided by knowledgeable chauffeurs who enhance your travel experience.",
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions For Hire A Personal Chauffeur Service',
  data: [
    {
      id: 0,
      question:
        'What steps are involved if I hire a personal driver in London with a vehicle?',
      ans: (
        <p>
          To hire a personal driver in London, visit our website and complete the online booking form. Choose your preferred vehicle and service duration. Rest assured, our chauffeurs are thoroughly background-checked and vetted, ensuring a safe and reliable experience. Enjoy seamless, professional chauffeur services.
        </p>
      ),
    },
    {
      id: 1,
      question: 'Where can I find reputable agencies or companies offering personal chauffeur services in London?',
      ans: 'To hire a personal driver in London, look no further than RolDrive. As a reputable agency offering exceptional chauffeur services, RolDrive ensures comfort, reliability, and professionalism. Try our services to experience the difference in luxury transportation in London.',
    },
    {
      id: 2,
      question: 'What are the typical rates for hiring a personal chauffeur in London, and what factors affect pricing?',
      ans: 'When you hire a personal driver in London, rates vary based on the date, time, and special occasions. Booking in advance ensures vehicle availability and helps secure the best service for your needs. Contact us to receive a free tailored quote.',
    },
    {
      id: 3,
      question: 'How do I ensure that a personal chauffeur service in London meets my specific needs and preferences?',
      ans: 'To hire a personal driver in London according to your needs, inform us of your specific requirements and we will arrange a chauffeur and vehicle perfectly suited to your preferences, ensuring a tailored and satisfying experience.',
    },
    {
      id: 4,
      question: 'Are there different types of vehicles available for hire with personal chauffeur services in London?',
      ans: (
        <p>
          Yes, when you hire a personal chauffeur in London, you can choose from a range of vehicles including the Mercedes S Class, Mercedes V Class, Rolls Royce, and Bentley. Visit our
          {' '}
          <a href="/fleet" className="text-blue-500">Fleet</a>
          {' '}
          section to learn more about our luxurious options.
        </p>
      ),
    },
    {
      id: 5,
      question: 'What qualifications and credentials should I look for when hiring a personal chauffeur in London?',
      ans: 'Yes, RolDrive allows vehicle decoration so your vehicles can be customised to the theme of the wedding event.',
    },
    {
      id: 6,
      question: 'Do you offer transportation for large groups?',
      ans: "When you hire a private chauffeur in London, look for qualifications such as a valid driver's license, professional driving experience, knowledge of London’s streets, and impeccable references. Ensure they have a clean driving record, excellent customer service skills, and necessary certifications for luxury vehicle operation. Get in touch with RolDrive for the best chauffeurs and vehicles in town.",
    },
    {
      id: 7,
      question: 'How can I verify the reliability and trustworthiness of a personal chauffeur service in London?',
      ans: 'For a verified, reliable and trusted personal chauffeur service in London, hire a personal chauffeur through RolDrive. Our chauffeurs have clean records, exceptional driving skills, and undergo thorough background checks, ensuring you receive the best and safest service in town.',
    },
    {
      id: 8,
      question: 'What are the cancellation policies and terms typically associated with if I hire a personal driver in London with a vehicle?',
      ans: (
        <p>
          When you hire a personal chauffeur in London, you can cancel your service up to 12 hours before the booking time to receive a full refund. Cancellations made within 12 hours may incur charges or be non-refundable.
          {' '}
          <a href="/contact-us" className="text-blue-500">Contact RolDrive</a>
          {' '}
          for further details on our cancellation policies.
        </p>
      ),
    },
    {
      id: 9,
      question: 'Are there any additional services offered by personal chauffeur companies in London, such as airport transfers or city tours?',
      ans: 'Yes, personal chauffeur companies in London such as RolDrive offer a range of services including airport transfers, wedding transfers, corporate transfers, city tours, intercity transfers, and more. Hire a personal chauffeur to enjoy these services and ensure a comfortable and convenient travel experience tailored to your needs.',
    },
  ],
};

const offeringData = {
  heading: {
    mainTitle: 'Hire a Personal Chauffeur in London',
  },
  data: [
    {
      title: 'How does the pricing structure work for hiring a personal chauffeur in London?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s hire a personal chauffeur in London services offer a transparent and flexible pricing structure. The cost depends on whether you choose hourly rates or direct transfers and also varies based on the vehicle selected. Our all-inclusive pricing ensures you can budget accurately without hidden fees. To get an exact quote, you can use our online booking engine or
          {' '}
          <a href="/contact-us" className="text-blue-500">contact us</a>
          {' '}
          directly for a free tailored quote. Enjoy the convenience of knowing upfront costs for your luxurious, stress-free transportation experience with RolDrive.
        </p>
      ),
    },
    {
      title: 'Are there any additional services offered when I hire a personal chauffeur in London?',
      desc: (
        <p className="text-[#B2B2B2]">
          Yes, when you use RolDrive’s hire a personal chauffeur in London services, you benefit from a range of additional services designed to enhance your experience. Our chauffeurs offer free luggage assistance, ensuring your belongings are handled with care. With our meet and greet services, you receive a warm welcome and smooth transition to your vehicle. Additionally, our knowledgeable chauffeurs can act as your guide, offering local insights and recommendations if you’re new to the city. Whether it’s airport transfers, corporate travel, or sightseeing, RolDrive ensures a comprehensive and personalised transportation experience.
        </p>
      ),
    },
    {
      title: 'What are the benefits of hiring a personal chauffeur in London over traditional taxi or ride-sharing services?',
      desc: (
        <p className="text-[#B2B2B2]">
          Hiring a personal chauffeur in London offers numerous benefits over traditional taxi or ride-sharing services. With RolDrive’s hire a personal chauffeur in London services, you experience unparalleled luxury, comfort, and convenience. Our professional chauffeurs provide personalised service, ensuring punctuality and safety. You can choose from a diverse fleet of high-end vehicles, tailored to your specific needs that help you stand out from the crowd. Unlike taxis or ride-shares, our chauffeurs offer door-to-door service, assisting with luggage and providing local insights. Enjoy a stress-free, reliable, and sophisticated travel experience, perfect for business trips, special events, or leisurely exploration of London’s vibrant attractions.
        </p>
      ),
    },
    {
      title: 'How far in advance should one hire a personal chauffeur in London, especially during peak times or events?',
      desc: (
        <p className="text-[#B2B2B2]">
          To ensure availability and secure your vehicle of choice, it is recommended to book RolDrive’s hire a personal chauffeur in London services as far in advance as possible, particularly during peak times or major events. Advance booking allows us to better accommodate your specific needs and preferences, ensuring a smooth and worry-free experience. By planning ahead, you can enjoy the full benefits of our luxury chauffeur service, including a diverse fleet of vehicles and knowledgeable drivers, all designed to make your journey comfortable and memorable. Contact us early to guarantee your preferred arrangements.
        </p>
      ),
    },
    {
      title: 'By hiring a personal driver in London, how does the chauffeur ensure the safety and security of its passengers during their journey in London?',
      desc: (
        <p className="text-[#B2B2B2]">
          Through RolDrive’s hire a personal driver in London service, we ensure your safety and security throughout the journey. Our chauffeurs are meticulously trained and handpicked professionals with extensive knowledge of London’s roads and traffic patterns. They follow strict safety protocols, including defensive driving techniques and adherence to traffic regulations. Vehicles are regularly inspected and maintained to the highest standards. Additionally, our chauffeurs undergo thorough background checks and continuous training to ensure reliable and secure service. With RolDrive, you can relax and enjoy your journey, knowing your safety is our top priority.
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
