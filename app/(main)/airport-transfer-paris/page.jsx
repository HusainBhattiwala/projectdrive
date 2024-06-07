/* eslint-disable max-len */
import Image from 'next/image';
import H1 from 'components/typography/H1';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';
import PlacePointer from 'components/ui/PlacePointer';
import { metadata } from 'components/utils/metadata';
import AirportCard from 'components/AirportCard';
import BookingBannerV3 from 'components/home/BookingBannerV3';

export function generateMetadata() {
  return metadata({
    title: 'Airport Transfers for Disneyland in Paris, France | Rol Drive',
    description:
      'Make your journey to Disneyland Paris magical with our exceptional airport transfers. Seamless, enchanting arrivals for a memorable Disney experience.',
    keywords: [
      'paris airport transfers',
      'airport transfer paris',
      'airport transfers paris france',
      'disneyland paris airport transfers',
    ],
    ogTitle:
      'Premium Airport transfers for Disneyland Paris France | Rol Drive',
    ogDescription:
      'Book Disneyland in Paris with our premium airport transfers. Elevate your journey with seamless, luxurious arrivals.',
    twTitle:
      'Premium Airport transfers for Disneyland Paris France | Rol Drive',
    twDescription:
      'Book Disneyland in Paris with our premium airport transfers. Elevate your journey with seamless, luxurious arrivals.',
  });
}

const paris = [
  {
    id: 1,
    name: 'Charles de Gaulle Airport',
    img: '/images/airports/france/france.jpg',
    countryCode: 'FR',
    url: '/airport-transfer-paris/#',
  },
  {
    id: 2,
    name: 'Orly Airport',
    img: '/images/airports/france/paris-orly-airport.jpg',
    countryCode: 'FR',
    url: '/airport-transfer-paris/#',
  },
  {
    id: 3,
    name: 'Beauvais-Tillé Airport',
    img: '/images/airports/france/Beauvais.jpg',
    countryCode: 'FR',
    url: '/airport-transfer-paris/#',
  },
  {
    id: 4,
    name: 'Paris-Le Bourget Airport',
    img: '/images/airports/france/le_bourget.jpg',
    countryCode: 'FR',
    url: '/airport-transfer-paris/#',
  },
];

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Airport Transfer Paris',
  url: 'https://www.roldrive.com/airport-transfer-paris',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=airport-transfer-paris{search_term_string}',
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
          img="/images/banner/cities/airport-transfer-paris.jpg"
          line1="paris"
          line2=" "
          line3="Book your premium chauffeur ride today.
      Arrive in style, stress-free and rejuvenated."
        />
        <div className="container mx-auto">
          <H1 className="text-black !text-[32px] font-[700] mt-10 px-6">
            Paris Airport Transfer
          </H1>
          <P className="px-6 my-2 text-[#2C2C2C] text-justify">
            Paris is one of the most popular tourist destinations in the world,
            known for its iconic landmarks, rich culture, and romantic ambience.
            Paris offers an endless array of attractions to explore. However,
            navigating the city can be a challenge, especially for first-time
            visitors. That&#39;s where RolDrive&#39;s Paris city transfer
            services come in handy to handle all airport transportation Paris.
          </P>
          <P className="px-6 text-[#2C2C2C] text-justify">
            With RolDrive&#39;s Paris chauffeur service from airport, tourists
            can hire a private chauffeur service in Paris to navigate the city
            with ease and comfort. Our experienced drivers know the ins and outs
            of Paris, from the best routes to take to the top attractions to
            visit. Plus, our fleet of luxury vehicles ensures that you travel in
            style and comfort.
          </P>

          <H2 className="text-black lg:!text-[32px] md:!text-[28px] sm:!text-[24px] !text-[20px] text-center font-[700] mt-10 lg:mb-6 mb-2 px-6">
            Paris Landmarks
          </H2>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6">
              <div className="my-auto !min-h-[350px] w-full relative h-full">
                <Image
                  src="/images/city/paris/paris.jpg"
                  fill
                  className="object-cover rounded-md"
                  alt="Pont Alexandre III"
                />
              </div>
            </div>
            <div className="p-6 pt-3 text-[#2C2C2C]">
              <PlacePointer
                head="Eiffel Tower"
                para="One of the world's most recognizable landmarks, the Eiffel Tower
          is a must-visit attraction in Paris."
              />

              <PlacePointer
                head="Louvre Museum"
                para="The world-famous Louvre Museum is home to some of the most
          iconic artworks in history, including the Mona Lisa and the
          Venus de Milo."
              />

              <PlacePointer
                head="Notre-Dame Cathedral"
                para="The stunning Gothic cathedral of Notre-Dame is a masterpiece of
          medieval architecture and an enduring symbol of Paris."
              />

              <P className="mt-2 !text-base text-[#2C2C2C] text-justify">
                One of the top reasons to hire a chauffeur service in Paris is
                to save time and avoid the stress of navigating the city&apos;s
                busy streets. With a chauffeur, you don&apos;t have to worry
                about traffic, parking, or getting lost. Instead, you can sit
                back and relax while your driver takes care of everything.
              </P>
            </div>
          </div>
        </div>

        <section className="bg-[#FFF5F5] pb-10 pt-6">
          <div className="container px-6 mx-auto">
            <Pic
              className="w-full mx-auto mb-2 rounded-md"
              src="/images/city/paris/wide.jpg"
              alt="roldrive images"
              quality={90}
            />
            <PlacePointer
              head="Champs-Élysées"
              para="The Champs-Élysées is a long and wide boulevard in central Paris,
          known for its luxury shops, theaters, and restaurants."
            />

            <PlacePointer
              head="Arc de Triomphe"
              para="A monumental arch at the western end of the Champs-Élysées, the
          Arc de Triomphe honors those who fought and died for France in the
          French Revolutionary and Napoleonic Wars."
            />

            <PlacePointer
              head=" Montmartre"
              para="A hilltop neighbourhood in Paris, Montmartre is known for its
          vibrant nightlife, street artists, and stunning views of the city."
            />

            <div className="grid sm:grid-cols-3 gap-[20px] mt-6">
              <Pic
                className="rounded-[10px]"
                src="/images/city/paris/eft.jpg"
              />
              <Pic
                className="rounded-[10px]"
                src="/images/city/paris/mon-p.jpg"
              />
              <Pic
                className="rounded-[10px]"
                src="/images/city/paris/lvm.jpg"
              />
            </div>
            <P className="!text-base mt-3 text-[#2C2C2C] text-justify">
              For tourists, a chauffeur service in Paris offers the added
              benefit of local expertise. Our drivers are familiar with the
              city&apos;s top attractions, hidden gems, and best restaurants, so
              they can provide valuable recommendations and insider tips to
              enhance your visit.
            </P>
            <PlacePointer
              head="Palace of Versailles"
              para="Located just outside Paris, the Palace of Versailles was the
          principal royal residence of France from the reign of Louis XIV
          until the French Revolution"
            />

            <PlacePointer
              head="Musée d'Orsay"
              para="Housed in a former railway station, the Musée d'Orsay is home to
          an impressive collection of Impressionist and Post-Impressionist
          art."
            />

            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              Additionally, hiring a private chauffeur in Paris allows for a
              more flexible itinerary. With a driver at your disposal, you can
              change your plans on the fly, visit attractions off the beaten
              path, and explore the city at your own pace.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              Safety is also a top priority for RolDrive. Our drivers are
              experienced, professional, and fully licensed, ensuring that you
              travel in safety and comfort. Plus, our luxury vehicles are
              equipped with the latest safety features, providing peace of mind
              while on the road.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              In conclusion, hiring an hourly chauffeur service in Paris is a
              must for any tourist visiting the city. With RolDrive’s Paris
              transfers from airport to hotel, you can enjoy the convenience,
              comfort, and local expertise of a private chauffeur, allowing you
              to make the most of your visit to the City of Light. Whether
              you&apos;re in Paris for business or pleasure, our experienced
              drivers and luxury vehicles are at your disposal to provide the
              ultimate transportation experience. Simply search for
              &apos;RolDrive&apos; or &apos;Luxury car hire with chauffeur near
              me&apos;.
            </P>
          </div>
        </section>
        <section>
          <div className="container px-6 mx-auto my-7">
            <H2 className="text-center my-8 text-black !text-[32px] font-[700]">
              Airports in Paris
            </H2>
            <div className="flex justify-center flex-wrap gap-6">
              {paris.map((airport) => (
                <AirportCard
                  key={airport.id}
                  url="/airport-transfer-paris/#"
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
