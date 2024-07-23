import Banner from 'rolnew/section/cities/Banner';
import OurFeet from 'rolnew/section/home/OurFeet';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import AirportBookingFlow from 'rolnew/comp/AirportBookingFlow';
import Services from 'rolnew/section/home/Services';
import ServicesFaq from 'rolnew/comp/ServicesFaq';

const pageData = {
  banner: {
    title: 'Airport Transfer New York',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/airport-transfer-newyork.jpg',
  },
  aboutData: {
    title: 'Airport Transfer New York',
    description:
      'Offering premium airport transfer New York services, we ensure a seamless connection to and from all of New York’s airports. With a fleet of luxury vehicles to take care of all your transportation needs, our professional chauffeur service provides reliable, comfortable and stylish transportation tailored to meet the needs of both business and leisure travellers. ',
  },
  servicesData: {
    subTitle: 'More About Airport Transfer New York',
    action: 'Book Now',
    mainTitle: 'Tailored Chauffeur Services For Your Every Need',
    desc: 'Indulge in an unparalleled chauffeur experience with our tailored services designed to meet your unique luxury airport transfer requirements. Whether you need a seamless airport transfer for your corporate travel or special event transfer, our chauffeur services are crafted to upgrade your journey. As among the best airport transfer New York service providers, embark on a journey where every detail is tailored to perfection.',
    cardData: [
      {
        img: '/rolnew/global/card/card-image1.jpg',
        title: 'John F. Kennedy International Airport',
        cardDesc:
          'John F. Kennedy International Airport is a major international airport serving New York City and the New York metropolitan area, in the United States of America. The airport is the busiest of the seven airports in the New York airport system, the 6th-busiest airport in the United States.',
      },
      {
        img: '/rolnew/global/card/card-image4.jpg',
        title: 'Newark Liberty International Airport',
        cardDesc:
          'Newark Liberty International Airport is an international airport straddling the boundary between the cities of Newark in Essex County and Elizabeth in Union County, New Jersey, in the United States of America.',
      },
      {
        img: '/rolnew/global/card/card-image5.jpg',
        title: 'LaGuardia Airport',
        cardDesc:
          'LaGuardia Airport is a civil airport in East Elmhurst, Queens, New York City. The facility was established in 1929 and began operating as a public airport in 1939. It is named after former New York City mayor Fiorello La Guardia.',
      },
      {
        img: '/rolnew/global/card/card-image6.jpg',
        title: 'Buffalo Niagara International Airport',
        cardDesc:
          'Buffalo Niagara International Airport is in Cheektowaga, New York, United States of America. The airport serves Buffalo, New York and Niagara Falls, New York United States, and the southern Golden Horseshoe region of Ontario, Canada. It is the third-busiest airport in the state of New York and the busiest inside of the Buffalo-Niagara Falls metropolitan area.',
      },
    ],
  },
  faqData: {
    title: 'Frequently Asked Questions About Airport Transfer New York:',
    data: [
      {
        id: 0,
        question:
          'What airports does RolDrive’s New York airport transfer service?',
        ans: 'RolDrive offers transfers to JFK, LaGuardia, Newark, and Buffalo Niagara airports, covering all major entry points into New York City.',
      },
      {
        id: 1,
        question: 'How can I book a transfer with RolDrive in New York?',
        ans: "Bookings can be made through RolDrive's website, mobile app, or by calling our customer service number directly.",
      },
      {
        id: 2,
        question:
          'What vehicle options does RolDrive offer for airport transfers in New York?',
        ans: 'The RolDrive fleet includes luxury sedans, SUVs, and vans, catering to all individual preferences and group sizes.',
      },
      {
        id: 3,
        question:
          'Are RolDrive’s chauffeurs familiar with New York City traffic and routes?',
        ans: "Yes, all chauffeurs are highly experienced with New York City's traffic patterns and optimal routes.",
      },
      {
        id: 4,
        question: 'Can I request a child car seat?',
        ans: 'Child car seats are available upon request at the time of booking, ensuring safety for younger passengers.',
      },
      {
        id: 5,
        question:
          "What is RolDrive's cancellation policy for New York airport transfers?",
        ans: 'Transfers can be cancelled up to 12 hours in advance without incurring any charges.',
      },
      {
        id: 6,
        question: 'How does RolDrive handle flight delays?',
        ans: 'RolDrive tracks your flight status to adjust pickup times accordingly, accommodating delays at no extra charge.',
      },
      {
        id: 7,
        question:
          'Does RolDrive provide meet-and-greet services at New York airports?',
        ans: 'Yes, chauffeurs can meet passengers at baggage claim or customs exits, holding a sign for easy identification.',
      },
      {
        id: 8,
        question:
          'What are the rates for RolDrive’s airport transfer services in New York?',
        ans: 'Rates vary based on the distance, vehicle type, and specific services requested. Pricing details are available on the website. Feel free to contact us for a customized quote.',
      },
      {
        id: 9,
        question:
          'How does RolDrive ensure customer safety during transfers, especially post-COVID-19?',
        ans: 'RolDrive follows rigorous health protocols, including vehicle sanitization, ensuring passenger safety throughout the transfer.',
      },
    ],
  },
};

function NewyorkAirportPage() {
  return (
    <>
      <Banner pageData={pageData} />
      <AirportBookingFlow pageData={pageData} />
      <OurFeet showBooking />
      <Services servicesData={pageData?.servicesData} />
      <Locations />
      <Contact />
      <ServicesFaq faqData={pageData?.faqData} />
      <DownloadOurApp />
    </>
  );
}

export default NewyorkAirportPage;
