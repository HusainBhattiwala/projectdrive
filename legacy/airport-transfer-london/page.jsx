/* eslint-disable max-len */

import Image from 'next/image';
import Link from 'next/link';
import H1 from 'components/typography/H1';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
// import CityLandmarks from 'components/services/CityLandmarks';
// import CarouselV2 from 'components/ui/CarouselV2';
// import AirportCardSlide from 'components/services/AirportCardSlide';
import PlacePointer from 'components/ui/PlacePointer';
import { Pic } from 'components/ui/Pic';
import AirportCard from 'components/AirportCard';

export function generateMetadata() {
  return metadata({
    title: 'Book Luxury Airport Chauffeur Transfers in London | Rol Drive',
    description:
      "Experience opulence and comfort with Rol Drive's luxury airport chauffeur transfers in London. Your journey begins in style.",
    keywords: [
      'airport transfers London',
      'airport transfer chauffeur',
      'luxury airport transfers',
    ],
    ogTitle: 'Book Your London Airport Chauffeur Transfer with Rol Drive',
    ogDescription:
      "Experience opulence with Rol Drive's luxury airport chauffeur transfers in London. Arrive in style, comfort, and utmost sophistication.",
    twTitle: 'Book Your London Airport Chauffeur Transfer with Rol Drive',
    twDescription:
      "Experience opulence with Rol Drive's luxury airport chauffeur transfers in London. Arrive in style, comfort, and utmost sophistication.",
  });
}

const london = [
  {
    id: 1,
    name: 'Heathrow Airport',
    img: '/images/airports/london/heathrow-airport.webp',
    url: '/airport-transfer-heathrow',
    countryCode: 'GB',
  },
  {
    id: 2,
    name: 'Gatwick Airport',
    img: '/images/airports/london/Gatwick-Airport.webp',
    url: '/airport-transfer-gatwick',
    countryCode: 'GB',
  },
  {
    id: 3,
    name: 'London City Airport',
    img: '/images/airports/london/London-City-Airport.webp',
    url: '/airport-transfer-london-city',
    countryCode: 'GB',
  },
  {
    id: 4,
    name: 'London Southend Airport',
    img: '/images/airports/london/London-Southend-Airport.webp',
    url: '/airport-london-southend',
    countryCode: 'GB',
  },
  {
    id: 5,
    name: 'London Stansted Airport',
    img: '/images/airports/london/London-Stansted-Airport.webp',
    url: '/airport-london-stansted',
    countryCode: 'GB',
  },
  {
    id: 6,
    name: 'Luton Airport',
    img: '/images/airports/london/Luton-Airport.webp',
    url: '/airport-transfer-luton',
    countryCode: 'GB',
  },
];

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Airport Transfer London',
  url: 'https://www.roldrive.com/airport-transfer-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=airport-transfer-london{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <BookingBannerV3
          img="/images/banner/cities/airport-transfer-london.jpg"
          line1="LONDON"
          line2=" "
          line3="Book your premium chauffeur ride today.
        Arrive in style, stress-free and rejuvenated.
        "
        />
        <div className="xl:container mx-auto px-4 lg:px-6 text-center sm:text-left">
          <H1 className="text-black !text-[20px] md:!text-[1.5rem] leading-[4.5rem] uppercase font-[700] mt-10">
            London Airport Transfer
          </H1>
          <P className="my-2 text-[#2C2C2C] text-justify">
            When it comes to executive airport transfers London; comfort and
            convenience are the two things that everyone desires. This is
            especially true when it comes to ground airport transfers, where
            people want to get to their destination as smoothly as possible. And
            if you&#39;re looking for the best in chauffeur service London, look
            no further than RolDrive.
          </P>
          <P className="my-2 text-[#2C2C2C] text-justify">
            As the heart of the United Kingdom, London is a city that demands
            the very best in transportation services, especially Heathrow
            chauffeur service. At RolDrive, we understand that our clients
            require exceptional service when it comes to chauffeur car hire in
            London. From airport transfers to corporate events and sightseeing
            tours, our team of experienced drivers are dedicated to providing an
            unparalleled service to our clients.
          </P>
          <P className="my-2 text-[#2C2C2C] text-justify">
            Here at RolDrive, we offer our airport transfer services for all of
            London&#39;s major airports such as Heathrow Airport, Gatwick
            Airport, Stansted Airport, London City Airport, Luton Airport and
            London Southend Airport. All London airports ground transfer
            services include a meet and greet service from our chauffeurs. Our
            chauffeurs will then offer to help you with your luggage and then
            guide you to your vehicle of choice and open the door for you before
            taking you to your destination.
          </P>
          <P className="my-2 text-[#2C2C2C] text-justify">
            Another noteworthy feature is that our chauffeurs will wait an extra
            hour at the airport as free waiting time just in case your flight is
            delayed. We will monitor your flight status through our online
            booking system and will ensure your chauffeur is there waiting for
            you when you land. These are added advantages of having a private
            hire vehicle at your disposal with a professionally trained
            chauffeur. Trust RolDrive with your airport transfer service.
          </P>

          <H2 className="text-black lg:!text-[32px] md:!text-[28px] sm:!text-[24px] !text-[20px] text-center font-[700] mt-10 lg:mb-6 mb-2">
            London Landmarks
          </H2>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="py-6">
              <div className="my-auto !min-h-[350px] w-full relative h-full">
                <Image
                  src="/images/city/london/Sightseeing.jpg"
                  fill
                  className="object-cover rounded-md"
                  alt="The Houses of Parliament"
                />
              </div>
            </div>
            <div className="p-6 pt-3 text-[#2C2C2C]">
              <PlacePointer
                head="Buckingham Palace"
                para="The London residence and administrative headquarters of the monarch of the United Kingdom. It has 775 rooms, including the famous balcony."
              />

              <PlacePointer
                head="The Houses of Parliament"
                para="Also known as the Palace of Westminster, is the home of the UK's legislative body and iconic landmark on the River Thames."
              />

              <PlacePointer
                head="Tower of London"
                para=" A historic castle located in central London, known for its dark past, crown jewels, and royal menagerie."
              />

              <P className="mt-2 !text-base text-[#2C2C2C] text-justify">
                However, these attractions can be busy and difficult to
                navigate, especially during peak tourist season. By hiring a
                chauffeur service such as a
                <Link
                  className="text-primary hover:text-black"
                  href="/mercedes-sprinter-hire-in-london"
                >
                  {' '}
                  Mercedes Sprinter hire in London
                </Link>
                , tourists can sit back and relax while their experienced driver
                navigates through the busy city streets, making their way to
                each attraction without the added stress of finding a parking
                spot or figuring out public transportation.
              </P>
            </div>
          </div>
        </div>

        <section className="bg-[#FFF5F5] pb-10 pt-6">
          <div className="container px-6 mx-auto">
            <Pic
              className="w-full mx-auto mb-2 rounded-md"
              src="/images/city/london/London.webp"
              quality={90}
              alt="london"
            />
            <P className="!text-[16px] my-3 text-[#2C2C2C] text-justify">
              In addition to the popular tourist attractions, London is also
              home to many hidden gems that may not be as well known to
              visitors. RolDrive&#39;s chauffeur service such as a
              {' '}
              <Link
                className="text-primary hover:text-black"
                href="/mercedes-s-class-chauffeur-in-london"
              >
                Mercedes S Class Chauffeur in London
                {' '}
              </Link>
              {' '}
              can provide tourists with a customized tour of the city, including
              some of these lesser-known attractions. For example:
            </P>

            <PlacePointer
              head="The neighbourhoods of Notting Hill"
              para=" A vibrant and affluent neighbourhood in West London, known for its
          colourful houses, Portobello Road Market, and annual carnival."
            />
            <PlacePointer
              head="Greenwich"
              para="Where you can enjoy the stunning views from the Royal Observatory
          and take a walk in Greenwich Park."
            />

            <div className="grid sm:grid-cols-3 gap-[20px] mt-6">
              <Pic
                className="rounded-[10px]"
                src="/images/city/london/Harrods.jpg"
              />
              <Pic
                className="rounded-[10px]"
                src="/images/city/london/Selfridges.jpg"
              />
              <Pic
                className="rounded-[10px]"
                src="/images/city/london/FortnumMason.jpg"
              />
            </div>
            <P className="!text-base mt-3 text-[#2C2C2C] text-justify">
              One of the great things about London is its diverse food scene.
              From classic British dishes to international cuisine, there is
              something to suit every taste bud. However, navigating the
              city&apos;s restaurants and cafes can be difficult for visitors.
              By hiring a chauffeur service UK, tourists can be taken directly
              to the best restaurants in the city, allowing them to sample a
              variety of cuisines without worrying about transportation.
            </P>
            <P className="!text-base mt-3 text-[#2C2C2C] text-justify">
              Another benefit of using a RolDrive chauffeur service in London is
              the opportunity to shop without the hassle of carrying around bags
              or figuring out public transportation. London is known for its
              high-end shopping, with famous stores such as:
            </P>
            <PlacePointer
              head="Harrods"
              para="A luxury department store in Knightsbridge, London, known for its
            opulent interior, high-end fashion, and exquisite food hall."
            />

            <PlacePointer
              head="Selfridges"
              para="A high-end department store in Oxford Street, London, known for
            its luxury fashion, cosmetics, and iconic window displays."
            />
            <PlacePointer
              head=" Fortnum & Mason"
              para="A luxury department store in Piccadilly, London, known for its
            exquisite food hall, fine teas, and hampers."
            />
            <P className="mt-2 text-[#2C2C2C] !text-base">
              By hiring a chauffeur service, tourists can easily visit these
              stores and enjoy a shopping experience without the added stress of
              carrying around their purchases.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              Of course, no trip to London would be complete without
              experiencing its nightlife. From its numerous bars and pubs to its
              world-famous clubs, there is no shortage of entertainment in
              London after dark. However, no one wants to wait for a taxi after
              a few drinks down, especially those who are unfamiliar with the
              area. By hiring a chauffeur service, tourists can easily navigate
              the city&apos;s nightlife, with the added benefit of a safe and
              reliable ride back to their hotel or residence.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              In addition to the convenience and comfort of using a chauffeur
              service in London, there are also practical benefits. London is a
              large city, and public transportation can be time-consuming and
              confusing for visitors trying to get to meetings. By hiring a
              chauffeur service, one can save time and avoid the hassle of
              figuring out complicated transportation systems.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              Furthermore, London is known for its traffic congestion. With over
              eight million people going about their busy schedules, by
              searching for ‘Luxury car hire with chauffeur near me’ and making
              use of RolDrive’s chauffeur service, visitors can avoid the stress
              of driving in busy traffic and instead sit back and relax in the
              comfort of a luxury vehicle. Additionally, RolDrive&apos;s
              chauffeurs are experienced in navigating the city&apos;s traffic
              patterns and finding the most efficient routes to ensure that
              tourists arrive at their destination on time.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              Our hourly chauffeur service and private chauffeur service in
              London offer a unique blend of luxury, reliability, and
              affordability. We take pride in delivering a personalized
              experience for our clients, ensuring that every detail of their
              journey is tailored to their needs. Our fleet of vehicles includes
              a range of high-end models such as Mercedes-Benz, BMW, Audi,
              Tesla, Range Rover, Rolls Royce and Bentley and more. All our cars
              are maintained to the highest standards, ensuring a smooth and
              comfortable ride for our clients.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              In conclusion, London is a city with endless possibilities for
              tourists and visitors, and using a chauffeur service like RolDrive
              can make the experience even more enjoyable. From exploring the
              city&apos;s famous landmarks to discovering its hidden gems,
              shopping, and experiencing the nightlife, a chauffeur service can
              provide a comfortable and stress-free way to explore the city.
              With the added benefits of time-saving, avoiding traffic
              congestion, and convenience, hiring a chauffeur service in London
              is a must for any tourist looking for a wonderful experience.
              Simply type ‘RolDrive’ or search ‘chauffeur service near me’.
            </P>
          </div>
        </section>
        {/* <section>
        <div className="xl:container mx-auto px-4 lg:px-[60px] my-20">
          <H2 className="my-8 text-black text-center md:text-left !text-[20px] md:!text-[1.5rem] !font-[700] uppercase hidden md:block">
            Our Airport Chauffeur Service
          </H2>
          <div className="md:hidden">
            <H2 className="mt-8 text-black text-center !text-[20px] !font-[700] uppercase">
              Our Airport
            </H2>
            <H2 className="mb-8 text-black text-center !text-[20px] !font-[700] uppercase">
              Chauffeur Service
            </H2>
          </div>
          <div className="hidden md:block">
            <CarouselV2>
              {london.map((airport) => (
                <AirportCardSlide
                  key={airport.id}
                  url={airport.url}
                  airportName={airport.name}
                  image={airport.img}
                />
              ))}
            </CarouselV2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 md:hidden">
            {london.map((airport) => (
              <AirportCardSlide
                key={airport.id}
                url={airport.url}
                airportName={airport.name}
                image={airport.img}
              />
            ))}
          </div>
        </div>
      </section>

      <CityLandmarks /> */}
        <section>
          <div className="container px-6 mx-auto my-7">
            <H2 className="text-center my-8 text-black !text-[32px] font-[700]">
              Airports in London
            </H2>
            <div className="flex justify-center flex-wrap gap-6">
              {london.map((airport) => (
                <AirportCard
                  key={airport.id}
                  url={airport.url}
                  airportName={airport.name}
                  image={airport.img}
                  countryCode={airport.countryCode}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
