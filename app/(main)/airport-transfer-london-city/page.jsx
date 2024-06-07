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
    title: 'Book London City Airport Transfers | Rol Drive',
    description:
      "Seamless city arrivals begin with Rol Drive's London City Airport transfers. Experience comfort, reliability, and style. Book your journey with us now!",
    keywords: ['london city airport transfer', 'London City Airport Transfers'],
    ogTitle: "Rol Drive's London City Airport Transfers Await Your Booking",
    ogDescription:
      "Seamless journeys await with Rol Drive's London City Airport transfers. Experience luxury, reliability, and comfort. Book your ride now!",
    twTitle: "Rol Drive's London City Airport Transfers Await Your Booking",
    twDescription:
      "Seamless journeys await with Rol Drive's London City Airport transfers. Experience luxury, reliability, and comfort. Book your ride now!",
  });
}

export default function Home() {
  return (
    <main>
      <BookingBannerV3
        img="/images/banner/airports/airport-transfer-london-city.jpg"
        line1="London City Airport"
        line2="TRANSFER "
        line3=""
      />
      <section>
        <div className="container p-6 mx-auto text-[#37394D]">
          <H1 className="text-6xl font-[500] text-center">
            London City Airport
          </H1>
          <P className="!text-base font-[400] my-5  text-justify">
            London City Airport is a regional airport in London, England. The
            airport provides a convenient and hassle-free option for tourists
            visiting London, with quick transport connections to the city
            centre. It serves mainly business and short-haul flights, offering
            various facilities, including shops, restaurants, and car rental
            services.
          </P>

          <ServiceList />
        </div>
      </section>
      <AirportInCity
        airportImg="/images/airports/london/London-City-Airport.webp"
        airportAbout="RolDrive provides a premium chauffeur service to and from London City Airport, offering comfort, convenience, and reliability. Our experienced and courteous chauffeurs guarantee a smooth and stress-free journey in luxury vehicles, with complimentary Wi-Fi, bottled water, and newspapers. We also provide flight tracking and meet and greet services to ensure timely pickups and drop-offs. With competitive pricing and flexible payment options, RolDrive is an excellent choice for travellers seeking a high-quality airport transfer service. Simply search for RolDrive or pre book London City Airport transfer."
      />
      <HomeBannerTop bannerImg="/images/banner/banner1.png" />

      {/* <Routes /> */}
      <CarClasses />
    </main>
  );
}
