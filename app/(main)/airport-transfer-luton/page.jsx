/* eslint-disable max-len */
import ServiceList from 'components/ServiceList';
import HomeBannerTop from 'components/banners/HomeBannerTop';
// import Routes from 'components/Routes';
import AirportInCity from 'components/AirportInCity';
import H1 from 'components/typography/H1';
import P from 'components/typography/P';
import CarClasses from 'components/CarClasses';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';

export function generateMetadata() {
  return metadata({
    title: 'Luton Airport Transfer in London | Rol Drive',
    description:
      "Effortless arrivals with Rol Drive's Luton Airport Transfer in London. Experience comfort, reliability, and luxury. Book your journey with us now!",
    keywords: ['London Luton airport transfer', 'Luton airport transfer'],
    ogTitle: "Rol Drive's Exclusive Airport Transfer Service in London",
    ogDescription:
      "Arrive in style with Rol Drive's Luton Airport transfer service in London. Experience luxury and comfort on your journey. Book your ride now!",
    twTitle: "Rol Drive's Exclusive Airport Transfer Service in London",
    twDescription:
      "Arrive in style with Rol Drive's Luton Airport transfer service in London. Experience luxury and comfort on your journey. Book your ride now!",
  });
}
export default function Home() {
  return (
    <main>
      <BookingBannerV3
        img="/images/banner/airports/airport-transfer-luton.jpg"
        line1="Luton Airport"
        line2="TRANSFER "
        line3=""
      />
      <section>
        <div className="container p-6 mx-auto text-[#37394D]">
          <H1 className="text-6xl font-[500] text-center">Luton Airport</H1>
          <P className="!text-base font-[400] my-5 text-center text-justify">
            Luton Airport is a popular airport for low-cost airlines, located
            about 35 miles north of London. It offers various transport options,
            including bus and train services, to the city centre. The airport
            also has shops, restaurants, and car rental services for tourists.
          </P>

          <ServiceList />
        </div>
      </section>

      <AirportInCity
        airportImg="/images/airports/london/Luton-Airport.webp"
        airportAbout="RolDrive provides a premium chauffeur service to and from Luton Airport, offering comfort, convenience, and reliability. Our experienced and courteous chauffeurs guarantee a smooth and stress-free journey in luxury vehicles, with complimentary Wi-Fi, bottled water, and newspapers. We also provide flight tracking and meet and greet services to ensure timely pickups and drop-offs. With competitive pricing and flexible payment options, RolDrive is an excellent choice for travellers seeking a high-quality airport transfer service. Simply search for RolDrive or London Luton Airport transfer."
      />
      <HomeBannerTop bannerImg="/images/banner/banner1.png" />
      {/* <Routes /> */}
      <CarClasses />
    </main>
  );
}
