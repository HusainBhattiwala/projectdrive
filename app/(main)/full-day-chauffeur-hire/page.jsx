import ClientTestimonial from 'rolnew/section/home/ClientTestimonial';
import Contact from 'rolnew/comp/Contact';
import Locations from 'rolnew/section/home/Locations';
import Services from 'rolnew/section/home/Services';
import ServicesFaq from 'rolnew/comp/ServicesFaq';
import ServiceOfferings from 'rolnew/comp/ServiceOfferings';
import BookingBanner from '../BookingBanner';

export const metadata = {
  title: 'Roldrive',
  description: 'Welcome to roldrive :)',
};

const ServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Tailored Full Day Chauffeur Hire Services For Your Every Need',
  desc: "Indulge in an unparalleled full day chauffeur hire experience with our tailored services designed to meet your unique requirements. Whether you're in need of seamless airport transfers, corporate travel, or special events, our one day car hire London services are crafted to upgrade your journey. Embark on a journey where every detail is tailored to perfection. Browse our services now and up your transportation experience with our exclusive full day chauffeur hire services.",
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfers',
      cardDesc:
                'Our airport transfers are smooth and effortless. Whether you need to be picked up from the hotel and dropped off at the airport or vice versa, our friendly and courteous professional chauffeurs will ensure your journey is comfortable and stress free.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
                'With RolDrive, you’ll make a lasting impression from the moment you step out of our chauffeur driven vehicles. Let us help you make a statement and command the boardroom. Our corporate chauffeurs are dependable, efficient, and dedicated to exceeding your expectations.',
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding Transfers',
      cardDesc:
                'We understand the importance of making your special day flawless, which is why we offer a range of chauffeur driven vehicles to choose from, including luxury brands such as Rolls Royce, Maybach and Bentley. Our meticulously maintained vehicles add an extra touch of elegance to your celebration.',
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
                'Our experienced private jet chauffeur service will safely transport you to and from the tarmac of your private jet or helicopter driving you to your hotel or business meeting. Our fleet is equipped with complementary packages to ensure a comfortable and enjoyable experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
                'We provide transportation services for social, cultural and sports events in and around the city. Whether you’re attending a private party or a large scale gathering, our event transfer cars and stylish, sophisticated and comfortable, ensuring a safe and special experience.',
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
                'With our hourly and full day chauffeur service, you can select from our extensive and diverse fleet of vehicles to ensure that your journey is comfortable and memorable. Experience the luxurious and stress free transportation solutions of RolDrive as our knowledgeable chauffeurs act as your guide on your trips.',
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions For A Full Day Chauffeur Hire',
  data: [
    {
      id: 0,
      question: 'What are the benefits of hiring a chauffeur for the day?',
      ans: 'Hiring a full day car hire with driver through RolDrive offers comfort, flexibility, and above all, convenience. Enjoy personalised itineraries, stress-free navigation, and timely arrivals at your destinations. With full day chauffeur hire, you can relax and focus on your activities while a professional handles the driving and parking logistics. This service is especially helpful for those new to the city.',
    },
    {
      id: 1,
      question: 'How much does a chauffeur for the day hire cost?',
      ans: 'The cost of a full day chauffeur hire varies depending on the date and time, particularly during special occasions. For precise rates and availability, it\'s best to contact RolDrive directly to receive a free tailored quote based on your specific needs and schedule.',
    },
    {
      id: 2,
      question: 'What services are included in a full day chauffeur hire?',
      ans: 'A chauffeur for the day includes a professional driver, luxury vehicle, door-to-door service, and flexible itinerary management. Enjoy seamless transportation to multiple destinations, personalised service, and stress-free travel, ensuring comfort and convenience throughout the entire day. Perfect for business trips, sightseeing, or special occasions.',
    },
    {
      id: 3,
      question: 'Are there any discounts available for full day chauffeur hire?',
      ans: 'Yes, discounts are generally available for daily car hire in London with RolDrive. Enjoy reduced rates for extended bookings, ensuring a luxurious and cost-effective travel experience throughout your day.',
    },
    {
      id: 4,
      question: 'What types of vehicles are available for full day chauffeur hire?',
      ans: (
        <p>
          For full day chauffeur hire, RolDrive offers a range of vehicles including luxury sedans, SUVs, and spacious vans to suit your needs. Visit RolDrive’s
          <a href="/fleet" className="text-blue-500">fleet</a>
          {' '}
          section for the complete list of vehicles available, ensuring comfort and style for your journey.
        </p>
      ),
    },
    {
      id: 5,
      question: 'How do I book a full day chauffeur hire service?',
      ans: (
        <p>
          To book a chauffeur for the day service, visit the
          <a href="/" className="text-blue-500">Book Now</a>
          {' '}
          section on our website or drop your email ID. We’ll promptly get in touch to arrange your booking. Enjoy a seamless and luxurious travel experience with us!
        </p>
      ),
    },
    {
      id: 6,
      question: 'What are the cancellation policies for full day chauffeur hire?',
      ans: 'For full day chauffeur hire, cancellations made at least 12 hours before the booking time will receive a full refund. For further details, please contact RolDrive directly.',
    },
    {
      id: 7,
      question: 'Is a chauffeur for the day hire available in my city?',
      ans: 'To know if RolDrive’s full day chauffeur hire is available in your city, please try the \'Book Now\' option to check availability or visit the \'Cities\' tab for more information. Enjoy a seamless and luxurious travel experience with our professional chauffeurs.',
    },
    {
      id: 8,
      question: 'Are there any hidden fees when I book a full day chauffeur hire?',
      ans: 'When you book a RolDrive chauffeur for the day, there are no hidden fees. All tolls and other charges are included in the quoted price, ensuring a transparent and hassle-free payment experience. Enjoy your journey with complete peace of mind.',
    },
    {
      id: 9,
      question: 'What payment methods are accepted when booking a full day chauffeur hire?',
      ans: 'When booking a full day chauffeur hire, RolDrive accepts all major credit and debit cards as payment methods. This ensures convenience and flexibility for clients arranging their transportation needs throughout the day in a hassle-free manner.',
    },
  ],
};

const offeringData = {
  heading: {
    mainTitle: 'About Full Day Chauffeur Hire',
  },
  data: [
    {
      title: 'How can clients book a RolDrive full day chauffeur hire, and what is the booking process?',
      desc: (
        <p className="text-[#B2B2B2]">
          Clients can book a RolDrive full day chauffeur hire by using our online booking engine, which allows you to select your vehicle and customise your itinerary. For a personalised experience,
          {' '}
          <a href="/contact-us" className="text-blue-500">contact us</a>
          {' '}
          directly to receive a free tailored quote. For added convenience, download our app to manage bookings and access real-time updates. Our team is dedicated to ensuring a seamless booking process and providing exceptional service for your full day chauffeur needs.
        </p>
      ),
    },
    {
      title: 'What is the cost of a RolDrive full day chauffeur hire, and what factors can affect the pricing?',
      desc: (
        <p className="text-[#B2B2B2]">
          The cost of a RolDrive full day chauffeur hire varies based on several factors. These include the type of vehicle chosen, the duration of the hire, the date and time of the booking, and any special requirements or events. Additional factors such as peak season rates, extra services, and mileage can also influence the pricing. To get a precise quote tailored to your needs, it’s best to contact RolDrive directly with your specific details and preferences. Our team will provide a transparent customised pricing plan to ensure your transportation experience meets your expectations.
        </p>
      ),
    },
    {
      title: 'Are there options for customising a RolDrive chauffeur for the day, such as selecting specific vehicles or adding special amenities?',
      desc: (
        <p className="text-[#B2B2B2]">
          Yes, RolDrive offers customisation options for your chauffeur service for the day. You can select from our extensive
          {' '}
          <a href="/" className="text-blue-500">fleet of vehicles</a>
          {' '}
          to match your preferences, including luxury cars, SUVs, and more. Additionally, we provide various special amenities to enhance your experience, such as personalised refreshments, in-car entertainment, and specific vehicle features. Whether you need a chauffeur for a special event, business meeting, or personal travel, RolDrive ensures that every detail is tailored to your needs. Contact us to discuss your requirements and customise your RolDrive chauffeur for the day to ensure a perfect and memorable journey.
        </p>
      ),
    },
    {
      title: 'How does RolDrive’s chauffeur for the day services handle requests for multiple stops or changes in itinerary during the day?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s chauffeur for the day services expertly handle requests for multiple stops or changes in itinerary. Our chauffeurs are highly adaptable and dedicated to ensuring your day runs smoothly. If you need to adjust your plans or add stops, simply inform your chauffeur or our customer service team. We accommodate these changes with ease, providing a flexible and personalised experience. Whether you’re attending meetings, exploring the city, or managing a busy schedule, RolDrive’s chauffeur for the day is committed to delivering seamless transportation tailored to your evolving needs.
        </p>
      ),
    },
    {
      title: 'How do RolDrive’s chauffeur services manage any potential delays or traffic issues to ensure timely arrivals and departures during a full day chauffeur hire?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s full day chauffeur hire ensures timely arrivals and departures by proactively managing potential delays and traffic issues. Our experienced chauffeurs use real-time traffic monitoring and GPS systems to navigate efficiently, avoiding congested routes. They plan routes with knowledge and ample time buffers to accommodate unforeseen delays. Additionally, RolDrive’s customer support is available to assist with any adjustments needed, ensuring a smooth and punctual travel experience. Our commitment to reliability and flexibility means you can trust us to handle the complexities of city travel, so you can focus on enjoying your day.
        </p>
      ),
    },
  ],
};

export default function page() {
  return (
    <>
      <BookingBanner />
      <Services servicesData={ServicesData} />
      <Contact />
      <Locations />
      <ClientTestimonial />
      <ServicesFaq faqData={faqData} />
      <ServiceOfferings servicesData={offeringData} />
    </>
  );
}
