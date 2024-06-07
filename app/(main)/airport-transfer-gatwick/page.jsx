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
    title: 'Pick Up Gatwick Airport Transfers Chauffeur Service | Rol Drive',
    description:
      'Book RolDrive’s Gatwick Airport chauffeur service to get you to or from the airport in luxury and convenience. Our airport transfers at Gatwick make your journeys seamless.',
    keywords: [
      'airport transfers Gatwick',
      'Gatwick airport pick up',
      'Gatwick airport chauffeur service',
    ],
    ogTitle: "Rol Drive's Pick-Up Gatwick Airport Transfers Chauffeur Service",
    ogDescription:
      "Experience seamless arrivals with Rol Drive's chauffeur service for pick-up Gatwick Airport transfers. Elevate your journey with luxury and comfort.",
    twTitle: "Rol Drive's Pick-Up Gatwick Airport Transfers Chauffeur Service",
    twDescription:
      "Experience seamless arrivals with Rol Drive's chauffeur service for pick-up Gatwick Airport transfers. Elevate your journey with luxury and comfort.",
  });
}

export default function Home() {
  return (
    <main>
      <BookingBannerV3
        img="/images/banner/airports/airport-transfer-gatwick.jpg"
        line1="GATWICK AIRPORT"
        line2="TRANSFER "
        line3=""
      />

      <section>
        <div className="container p-6 mx-auto text-[#37394D]">
          <H1 className="text-6xl font-[500] text-center">Gatwick Airport</H1>
          <P className="!text-base font-[400] my-5 text-justify">
            Gatwick Airport is the UK&#39;s second-busiest airport, located in
            West Sussex, around 30 miles south of London. It serves both short
            and long-haul flights and offers a range of facilities, including
            shops, restaurants, and hotels, for tourists travelling to and from
            London.
          </P>

          <ServiceList />
        </div>
      </section>

      <AirportInCity
        airportImg="/images/airports/london/Gatwick-Airport.webp"
        airportAbout="RolDrive provides a premium chauffeur service to and from Gatwick Airport, offering comfort, convenience, and reliability. Our experienced and courteous chauffeurs guarantee a smooth and stress-free journey in luxury vehicles, with complimentary Wi-Fi, bottled water, and newspapers. We also provide flight tracking and meet and greet services to ensure timely pickups and drop-offs. With competitive pricing and flexible payment options, RolDrive is an excellent choice for travellers seeking a high-quality airport transfer service. Simply search for RolDrive or Gatwick Airport transfer to London."
      />
      <HomeBannerTop bannerImg="/images/banner/banner1.png" />

      {/* <Routes /> */}
      <CarClasses />
    </main>
  );
}
