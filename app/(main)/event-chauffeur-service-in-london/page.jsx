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

const metadata = metadataConfig.eventChauffeurLondon;

const banner = {
  title: 'Event Chauffeur Service In London',
  bannerImage: '/rolnew/global/landing/event-chauffeur-service-in-london.jpg',
  isLandingPage: true,
};

const ServicesData = {
  subTitle: 'Our Services',
  action: 'Book Now',
  mainTitle: 'Tailored Event Chauffeur Service In London For Your Every Need',
  desc: "Planning an event in London? Utilise our specialised event chauffeur service in London for comfort and reliability during your travels. Whether you're hosting a corporate function or a special celebration, our professional chauffeurs and dedicated event managers ensure seamless transportation for you and your guests. Experience peace of mind and luxurious travel tailored to enhance the success and enjoyment of your event.",
  cardData: [
    {
      img: '/rolnew/global/card/home/Airport Transfer Home.jpg',
      title: 'Airport Transfers',
      cardDesc:
        'Our airport transfers are seamless and hassle free. Whether you require pickup from the hotel to the airport or vice versa, our friendly and professional chauffeurs guarantee a comfortable and stress free journey for you.',
    },
    {
      img: '/rolnew/global/card/card-image2.jpg',
      title: 'Corporate Chauffeurs',
      cardDesc:
        "With RolDrive, you'll create a lasting impression from the moment you step out of our chauffeur driven vehicles. Let us assist you in making a statement and commanding the boardroom. Our corporate chauffeurs are dependable, efficient, and committed to surpassing your expectations.",
    },
    {
      img: '/rolnew/global/card/home/Wedding Transfer Home.jpg',
      title: 'Wedding Transfers',
      cardDesc:
        "We recognise the significance of ensuring your special day is flawless. That's why we provide a selection of chauffeur driven vehicles, featuring luxury brands like Rolls Royce, Maybach, and Bentley. Our meticulously maintained vehicles add an extra touch of elegance to your celebration.",
    },
    {
      img: '/rolnew/global/card/home/Private Jet Transfer Home.jpg',
      title: 'Private Jet Transfers',
      cardDesc:
        'Our experienced private jet chauffeur service ensures safe transportation to and from your private jet or helicopter, right from the tarmac, taking you seamlessly to your hotel or business meeting. Our fleet includes complimentary amenities for a comfortable and enjoyable travel experience.',
    },
    {
      img: '/rolnew/global/card/home/Event Transfer Home.jpg',
      title: 'Event Transfers',
      cardDesc:
        "We offer transportation services for social, cultural, and sports events in and around the city. Whether you're attending a private party or a large scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and memorable experience.",
    },
    {
      img: '/rolnew/global/card/home/Sightseeing Tours Home.jpg',
      title: 'Sightseeing Tours',
      cardDesc:
        "Experience luxurious and stress free transportation with RolDrive's hourly and full day chauffeur service, where you can choose from a wide range of vehicles to ensure your journey is comfortable and memorable. Our knowledgeable chauffeurs will guide you throughout your trips, providing an unparalleled travel experience.",
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions For Event Chauffeur Service In London',
  data: [
    {
      id: 0,
      question:
        'How much does an event chauffeur service cost in London?',
      ans: (
        <p>
          The cost of event chauffeur services in London varies depending on factors such as duration, vehicle type, and specific requirements. RolDrive offers competitive pricing tailored to your event needs, ensuring comfort and reliability with professional chauffeurs.
          <a href="/contact-us" className="text-blue-500"> Contact us </a>
          to discuss your event details and receive a personalised quote.
        </p>
      ),
    },
    {
      id: 1,
      question: 'What types of vehicles are available for event chauffeur services in London?',
      ans: "For event chauffeur services in London, we offer a selection of luxurious vehicles including the Mercedes S Class, Rolls Royce, and Bentley. These prestigious cars ensure elegance and comfort, perfect for weddings, corporate events, and special occasions where style and sophistication are paramount. Experience premium transportation with RolDrive's event chauffeur services.",
    },
    {
      id: 2,
      question: 'Where can I book a reliable event chauffeur service in London?',
      ans: 'You can book reliable event luxury travel services in London with RolDrive. We offer tailored solutions for events, ensuring comfort and reliability with our professional chauffeurs and diverse fleet of vehicles. Experience seamless transportation for your events, whether corporate functions or special occasions. Contact RolDrive for exceptional event chauffeur services in London.',
    },
    {
      id: 3,
      question: 'What are the benefits of hiring an event chauffeur service in London?',
      ans: 'Hiring event chauffeur services in London offers convenience and luxury, ensuring seamless transportation for guests. RolDrive even provides a dedicated event manager to streamline logistics, enhancing efficiency. With professional chauffeurs, you can focus on enjoying the event while ensuring punctuality and comfort throughout the occasion.',
    },
    {
      id: 4,
      question: 'Can I get a chauffeur service for weddings and special events in London?',
      ans: (
        <p>Yes, of course! RolDrive offers event chauffeur services in London, specialising in weddings and special events. Enjoy luxurious transportation with our professional chauffeurs and dedicated event managers, ensuring a seamless and elegant experience for you and your guests. Contact us to discuss your specific requirements and make your event memorable with our tailored services.</p>
      ),
    },
    {
      id: 5,
      question: 'What is included in a luxury event chauffeur service in London?',
      ans: "Luxury event chauffeur services in London include impeccably maintained luxury vehicles, professional and courteous chauffeurs, personalised itinerary planning, punctual arrival and departure, and extras like refreshments or Wi-Fi. Enjoy seamless transportation tailored to your event's needs, ensuring comfort, style, and reliability throughout your journey.",
    },
    {
      id: 6,
      question: 'Do event chauffeur services in London offer airport transfers?',
      ans: 'Yes, event chauffeur services in London such as RolDrive include airport transfers as part of their luxury event transportation packages. Whether for corporate events, weddings, or private gatherings, these services ensure punctual transportation to and from airports, enhancing convenience and comfort for all attendees.',
    },
    {
      id: 7,
      question: 'Are there luxury vehicle options available when booking an event chauffeur service in London?',
      ans: (
        <p>
          Yes, when booking our event chauffeur service in London for luxury event transportation, you can choose from prestigious vehicles such as the Rolls Royce Phantom, Bentley Mulsanne, and the Maybach. Enjoy top-tier comfort and style for your special occasions with RolDrive’s exclusive fleet of luxury vehicles. Visit our
          <a href="/fleet" className="text-blue-500"> Fleet </a>
          section to know more.
        </p>
      ),
    },
    {
      id: 8,
      question: 'Which companies offer the best event chauffeur services in London?',
      ans: (
        <p>For the best event chauffeur service in London, RolDrive stands out with its impeccable reputation for luxury and reliability. Offering a diverse fleet and experienced chauffeurs, RolDrive ensures seamless transportation for corporate events, weddings, and special occasions. Trust RolDrive for premium event chauffeur services, specially tailored to meet your needs with excellence.</p>
      ),
    },
    {
      id: 9,
      question: 'Are there any discounts for booking an event chauffeur service in London?',
      ans: (
        <p>
          Yes, we often offer discounts and special offers for booking our event chauffeur service in London, especially for extended rental periods. Enjoy competitive rates and exceptional service tailored to make your event transportation seamless and memorable with RolDrive. Contact us to learn more about our current offers and discounts.
        </p>
      ),
    },

  ],
};

const offeringData = {
  heading: {
    mainTitle: 'Event Chauffeur Service in London',
  },
  data: [
    {
      title: 'What types of events are typically catered to by RolDrive’s event chauffeur service in London?',
      desc: (
        <p className="text-[#B2B2B2]">RolDrive’s event chauffeur service in London caters to a variety of occasions, ensuring seamless and luxurious transportation. We handle corporate events, including conferences and business meetings, with professionalism and punctuality. For personal celebrations, our service is perfect for weddings, anniversaries, and parties, providing comfort and style. We also accommodate special events such as film premieres, galas, and VIP gatherings, offering a refined and stress-free experience. Whether you need transportation for intimate gatherings or large-scale events, RolDrive’s event chauffeur service ensures your guests travel in elegance and convenience. </p>
      ),
    },
    {
      title: 'What are the key benefits of hiring RolDrive’s event chauffeur service in London when compared to regular transportation options?',
      desc: (
        <p className="text-[#B2B2B2]">Hiring RolDrive’s event chauffeur service in London offers several key benefits over regular transportation options. Our service ensures a higher level of luxury and comfort with a fleet of premium vehicles tailored to your needs. Unlike standard taxis or rideshares, our professional chauffeurs provide personalised attention and a seamless experience, handling all logistics and ensuring timely arrivals. Additionally, RolDrive’s service includes features like real-time updates, dedicated support, and a focus on punctuality, enhancing your event experience. With our service, you and your guests enjoy stress-free, reliable transportation, making your event both elegant and memorable! </p>
      ),
    },
    {
      title: 'How far in advance should I book RolDrive’s event chauffeur service in London, especially for high-demand dates?',
      desc: (
        <p className="text-[#B2B2B2]">
          For high-demand dates, it is highly recommended to book RolDrive’s event chauffeur service in London as early as possible. Early booking ensures that we can secure the vehicle of your choice and accommodate your specific needs. By planning ahead, you also benefit from a wider selection of vehicles and more flexible scheduling options. Don’t wait until the last minute; advance reservations help guarantee that your event transportation is smooth, worry-free, and perfectly tailored to your requirements. Secure your booking early to ensure the best experience for your special occasion.
        </p>
      ),
    },
    {
      title: 'What additional services can RolDrive’s event chauffeur services provide?',
      desc: (
        <p className="text-[#B2B2B2]">When you book RolDrive’s event chauffeur services, we provide a range of additional amenities to ensure a seamless experience. Our services include a dedicated event manager who handles all travel logistics, ensuring that everything runs smoothly so you can focus on your event. We also offer customisable vehicle options, professional chauffeurs, and real-time updates for your guests’ transportation needs. From coordinating airport transfers to managing on-the-day schedules, RolDrive’s event chauffeur services ensure that every detail is meticulously managed, allowing your event to proceed with comfort and punctuality.</p>
      ),
    },
    {
      title: 'How is the pricing structured for RolDrive’s event chauffeur services?',
      desc: (
        <p className="text-[#B2B2B2]">
          RolDrive’s event chauffeur services are priced based on an hourly rate or fixed fees for direct transfers. For hourly bookings, the rate includes the chauffeur’s time and vehicle usage, offering flexibility to accommodate various event durations. Fixed transfer rates apply to specific routes or destinations, providing a clear, upfront cost. Additional charges may apply for extended hours or special requests. We offer transparent pricing with no hidden fees, ensuring you receive exceptional value and seamless service tailored to your event needs. Contact us for a free customised quote and to discuss your requirements in detail.
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
