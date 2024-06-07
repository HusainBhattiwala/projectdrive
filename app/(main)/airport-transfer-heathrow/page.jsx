import ServiceList from 'components/ServiceList';
import H1 from 'components/typography/H1';
import P from 'components/typography/P';
import AirportInCity from 'components/AirportInCity';
// import Routes from 'components/Routes';
import HomeBannerTop from 'components/banners/HomeBannerTop';
import CarClasses from 'components/CarClasses';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';

export function generateMetadata() {
  return metadata({
    title: 'Pick Up Heathrow Airport Transfer Chauffeur Service | Rol Drive',
    description:
      "Arrive in style and comfort with Rol Drive's pick-up airport transfer chauffeur service in Heathrow. Experience seamless luxury from touchdown. Book now!",
    keywords: [
      'Heathrow airport chauffeur service',
      'Heathrow airport pick up',
      'Heathrow airport transfers',
    ],
    ogTitle: "Rol Drive's Pick-Up Heathrow Airport Transfer Chauffeur Service",
    ogDescription:
      "Seamless arrivals at Heathrow with Rol Drive's pick-up airport transfer chauffeur service. Experience convenience, comfort, and reliability. Book your ride now!",
    twTitle: "Rol Drive's Pick-Up Heathrow Airport Transfer Chauffeur Service",
    twDescription:
      "Seamless arrivals at Heathrow with Rol Drive's pick-up airport transfer chauffeur service. Experience convenience, comfort, and reliability. Book your ride now!",
  });
}

export default function Home() {
  return (
    <main>
      <BookingBannerV3
        img="/images/banner/airports/airport-transfer-heathrow.jpg"
        line1="Heathrow Airport"
        line2="TRANSFER "
        line3=""
      />
      <section>
        <div className="container p-6 mx-auto text-[#37394D]">
          <H1 className="text-6xl font-[500]  text-justify">
            Heathrow Airport
          </H1>
          <P className="!text-base font-[400] my-5  text-justify">
            Heathrow Airport, called London Airport until 1966 and now known as
            London Heathrow, is the main international airport serving London,
            England. It is the largest of the six international airports in the
            London airport system. The airport is owned and operated by Heathrow
            Airport Holdings.
          </P>

          <ServiceList />
        </div>
      </section>

      <AirportInCity
        airportImg="/images/airports/london/heathrow-airport.webp"
        airportAbout="Heathrow Airport is the main international airport serving London, England. A crucial transportation hub for tourists visiting London and the UK, with four terminals serving numerous destinations worldwide. One can also try the various services, including shops, restaurants, hotels, and transport connections to the city center."
      />
      <HomeBannerTop bannerImg="/images/banner/banner1.png" />

      {/* <Routes /> */}

      <CarClasses />
    </main>
  );
}
