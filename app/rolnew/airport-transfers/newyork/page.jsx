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
    title: 'Airport Transfer New York',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/london/heathrow-banner.jpg',
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
      <FAQ />
      <DownloadOurApp />
    </>
  );
}

export default NewyorkAirportPage;
