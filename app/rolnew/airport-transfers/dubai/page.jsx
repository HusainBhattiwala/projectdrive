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
    title: 'Dubai Airport Transfers',
    subTitle: 'Arrive in style, stress free and rejuvenated',
    bannerImage: '/rolnew/airports/airport-transfer-dubai.jpg',
  },
  aboutData: {
    title: 'Dubai Airport Transfers',
    description:
      'Offering premium airport transfer Dubai services, we ensure a seamless connection to and from all of Dubais airports. With a fleet of luxury vehicles to take care of all your transportation needs, our professional chauffeur service provides reliable, comfortable and stylish transportation tailored to meet the needs of both business and leisure travellers. ',
  },
  servicesData: {
    subTitle: 'More About Dubai Airport Transfers',
    action: 'Book Now',
    mainTitle: 'Tailored Chauffeur Services For Your Every Need',
    desc: 'Indulge in an unparalleled chauffeur experience with our tailored services designed to meet your unique luxury airport transfer requirements. Whether you need a seamless airport transfer for your corporate travel or special event transfer, our chauffeur services are crafted to upgrade your journey. As among the best airport transfer Dubai service providers, embark on a journey where every detail is tailored to perfection.',
    cardData: [
      {
        img: '/rolnew/global/card/card-image1.jpg',
        title: 'Dubai International Airport',
        cardDesc:
          'Dubai International Airport is the primary and major international airport serving Dubai, United Arab Emirates. Also the worlds busiest airport by international passenger traffic, it is the second-busiest airport in the world by passenger traffic.',
      },
      {
        img: '/rolnew/global/card/card-image3.jpg',
        title: 'Al Maktoum International Airport',
        cardDesc:
          'Al Maktoum International Airport also known as Dubai World Central, is an international airport in Jebel Ali, Dubai, United Arab Emirates. Opened in 2010, it is the main part of Dubai South, a planned residential, commercial and logistics complex.',
      },
    ],
  },
};

function DubaiAirportPage() {
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

export default DubaiAirportPage;
