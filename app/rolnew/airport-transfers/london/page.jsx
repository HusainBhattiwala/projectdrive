import Banner from 'rolnew/section/cities/Banner';
import OurFeet from 'rolnew/section/home/OurFeet';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import FAQ from 'rolnew/comp/FAQ';
import AirportBookingFlow from 'rolnew/comp/AirportBookingFlow';
import Services from 'rolnew/section/home/Services';

const pageData = {
  banner: {
    title: 'Airport Transfers London',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/london/heathrow-banner.jpg',
  },
  aboutData: {
    title: 'Airport Transfers London',
    description:
      'Offering premium airport transfers London services, we ensure a seamless connection to and from all of Londons airports. With a fleet of luxury vehicles to take care of all your transportation needs, our professional chauffeur service provides reliable, comfortable and stylish transportation tailored to meet the needs of both business and leisure travellers.',
  },
  servicesData: {
    subTitle: 'More About Airport Transfers London',
    action: 'Book Now',
    mainTitle: 'Tailored Chauffeur Services For Your Every Need',
    desc: 'Indulge in an unparalleled chauffeur experience with our tailored services designed to meet your unique luxury airport transfer requirements. Whether you need a seamless airport transfer for your corporate travel or special event transfer, our luxury chauffeur services are crafted to upgrade your journey. As among the best airport transfers London service providers, embark on a journey where every detail is tailored to perfection.',
    cardData: [
      {
        img: '/rolnew/global/card/card-image1.jpg',
        title: 'Heathrow Airport',
        cardDesc:
          'Heathrow Airport, called London Airport until 1966 and now known as London Heathrow, is the main international airport serving London, England. It is the largest of the six international airports in the London airport system. Being Britain’s busiest airport counting more than 19 million passengers in the year 2021.',
      },
      {
        img: '/rolnew/global/card/card-image3.jpg',
        title: 'Gatwick Airport',
        cardDesc:
          'Gatwick Airport, also known as London Gatwick, is the capital of England, London’s secondary international airport. Gatwick was the second busiest airport by total passenger traffic in the UK, after Heathrow Airport, and was the 8th busiest in Europe by total passenger traffic in 2022.',
      },
      {
        img: '/rolnew/global/card/card-image4.jpg',
        title: 'London City Airport',
        cardDesc:
          'London City Airport is an international airport in London and is the closest airport to central London, located in the Royal Docks. London City Airport is known for its fast travel experience and efficient service. Arrivals and departures when compared can often be quicker than larger airports. ',
      },
      {
        img: '/rolnew/global/card/card-image5.jpg',
        title: 'London Southend Airport',
        cardDesc:
          'London Southend Airport is a minor international airport situated on the outskirts of Southend-on-Sea in Essex, England. Southend was Londons third-busiest airport from the 1960s until the end of the 1970s, when it was overtaken in passenger numbers by London Stansted Airport.',
      },
      {
        img: '/rolnew/global/card/card-image6.jpg',
        title: 'London Stansted Airport',
        cardDesc:
          'London Stansted Airport is the third international airport serving London, the capital of England and the United Kingdom. Stansteds runway is also used by private companies which are private ground handlers that can handle private flights, charter flights, and state visits. ',
      },
      {
        img: '/rolnew/global/card/card-image6.jpg',
        title: 'Luton Airport',
        cardDesc:
          'Luton Airport is an international airport located in Luton, Bedfordshire, England. The airport is known for being a hub for budget airlines, its efficient layout, and its restaurants.',
      },
    ],
  },
};

function LondonAirportPage() {
  return (
    <>
      <Banner pageData={pageData} />
      <AirportBookingFlow pageData={pageData} />
      <OurFeet showBooking />
      <Services servicesData={pageData?.servicesData} />
      <Locations />
      <Contact />
      <FAQ />
      <DownloadOurApp />
    </>
  );
}

export default LondonAirportPage;
