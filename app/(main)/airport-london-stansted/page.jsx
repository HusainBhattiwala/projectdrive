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
    title: 'Hire London Stansted Airport Stn Transfer | Rol Drive',
    description:
      "Effortless arrivals with Rol Drive's London Stansted Airport transfer Stn. Elevate your journey with luxury, reliability, and style. Book your ride now!",
    keywords: ['London stansted airport', 'London stansted airport stn'],
    ogTitle: 'Hire London Stansted Airport Stn Transfer with Rol Drive',
    ogDescription:
      "Experience effortless arrivals with Rol Drive's London Stansted Airport transfer service. Elevate your journey with luxury and comfort. Book now!",
    twTitle: 'Hire London Stansted Airport Stn Transfer with Rol Drive',
    twDescription:
      "Experience effortless arrivals with Rol Drive's London Stansted Airport transfer service. Elevate your journey with luxury and comfort. Book now!",
  });
}
export default function Home() {
  return (
    <main>
      <BookingBannerV3
        img="/images/banner/airports/airport-london-stansted.jpg"
        line1="London Stansted Airport"
        line2="TRANSFER "
        line3=""
      />
      <section>
        <div className="container p-6 mx-auto text-[#37394D]">
          <H1 className="text-6xl font-[500] text-center">
            London Stansted Airport
          </H1>
          <P className="!text-base font-[400] my-5 text-center">
            London Stansted Airport is a tertiary international airport serving
            London, England. London Stansted Airport is a hub for low-cost
            airlines, located around 40 miles north-east of London. It offers
            various transport options to the city centre, as well as shops,
            restaurants, and car rental services for tourists.
          </P>

          <ServiceList />
        </div>
      </section>

      <AirportInCity
        airportImg="/images/airports/london/London-Stansted-Airport.webp"
        airportAbout=" RolDrive provides a premium chauffeur service to and from London Stansted Airport, offering comfort, convenience, and reliability. Our experienced and courteous chauffeurs guarantee a smooth and stress-free journey in luxury vehicles, with complimentary Wi-Fi, bottled water, and newspapers. We also provide flight tracking and meet and greet services to ensure timely pickups and drop-offs. With competitive pricing and flexible payment options, RolDrive is an excellent choice for travellers seeking a high-quality airport transfer service. Simply search for RolDrive or Stansted Airport transport to London."
      />

      <HomeBannerTop bannerImg="/images/banner/banner1.png" />

      {/* <Routes /> */}

      <CarClasses />
    </main>
  );
}
