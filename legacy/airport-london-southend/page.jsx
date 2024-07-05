/* eslint-disable max-len */
import ServiceList from 'components/ServiceList';
import HomeBannerTop from 'components/banners/HomeBannerTop';
import AirportInCity from 'components/AirportInCity';
import H1 from 'components/typography/H1';
import P from 'components/typography/P';
import CarClasses from 'components/CarClasses';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';

export function generateMetadata() {
  return metadata({
    title: 'Book Your Airport Transfers in Southend | Rol Drive',
    description:
      "Experience impeccable service with Rol Drive's airport transfers in Southend. Seamless, stylish, and reliable journeys await. Book your ride now!",
    keywords: ['airport transfers southend', 'southend airport transfer'],
    ogTitle: 'Book Your Southend Airport Transfers with Rol Drive',
    ogDescription:
      "Experience seamless arrivals with Rol Drive's airport transfers in Southend. Book now for luxury, reliability, and comfort on your journey.",
    twTitle: 'Book Your Southend Airport Transfers with Rol Drive',
    twDescription:
      "Experience seamless arrivals with Rol Drive's airport transfers in Southend. Book now for luxury, reliability, and comfort on your journey.",
  });
}

export default function Home() {
  return (
    <main>
      <BookingBannerV3
        img="/images/banner/airports/airport-london-southend.jpg"
        line1="London Southend Airport"
        line2="TRANSFER "
        line3=""
      />
      <section>
        <div className="container p-6 mx-auto text-[#37394D]">
          <H1 className="text-6xl font-[500] text-center">
            London Southend Airport
          </H1>
          <P className="!text-base font-[400] my-5 text-center ">
            London Southend Airport is a small airport located in Essex, around
            40 miles east of London. It offers a range of transport options to
            the city centre, as well as shops, restaurants, and car rental
            services for tourists.
          </P>

          <ServiceList />
        </div>
      </section>

      <AirportInCity
        airportImg="/images/airports/london/London-Southend-Airport.webp"
        airportAbout="RolDrive provides a premium chauffeur service to and from London Southend Airport, offering comfort, convenience, and reliability. Our experienced and courteous chauffeurs guarantee a smooth and stress-free journey in luxury vehicles, with complimentary Wi-Fi, bottled water, and newspapers. We also provide flight tracking and meet and greet services to ensure timely pickups and drop-offs. With competitive pricing and flexible payment options, RolDrive is an excellent choice for travellers seeking a high-quality airport transfer service. Simply search for RolDrive or London Southend Airport to London."
      />

      <HomeBannerTop bannerImg="/images/banner/banner1.png" />
      {/* <Routes /> */}
      <CarClasses />
    </main>
  );
}
