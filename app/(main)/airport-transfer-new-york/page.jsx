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
    title: 'Book Your Luxury Airport Transfers in New York | Rol Drive',
    description:
      'Seamless journeys begin with Rol Drive. Book your luxury airport transfers in New York for a stylish, comfortable, and stress-free travel experience.',
    keywords: [
      'luxury airport transfer New York',
      'airport transfer New York',
      'airport transfer in New York',
      'New York airport transfers',
    ],
    ogTitle:
      'Exclusive Ride with Rol Drive Luxury Airport Transfers in New York',
    ogDescription:
      "Embark on an exclusive journey with Rol Drive's luxury airport transfers in New York. Book your premium ride now.",
    twTitle:
      'Exclusive Ride with Rol Drive Luxury Airport Transfers in New York',
    twDescription:
      "Embark on an exclusive journey with Rol Drive's luxury airport transfers in New York. Book your premium ride now.",
  });
}

const usa = [
  {
    id: 1,
    name: 'Buffalo Niagara International Airport',
    img: '/images/airports/usa/Buffalo.jpg',
    countryCode: 'US',
    url: '/airport-transfer-new-york/#',
  },
  {
    id: 2,
    name: 'LaGuardia airport',
    img: '/images/airports/usa/LaGuardia.jpg',
    countryCode: 'US',
    url: '/airport-transfer-new-york/#',
  },
  {
    id: 3,
    name: 'John F. Kennedy International Airport',
    img: '/images/airports/usa/jfk.jpg',
    countryCode: 'US',
    url: '/airport-transfer-new-york/#',
  },
  {
    id: 4,
    name: 'Newark Liberty International Airport',
    img: '/images/airports/usa/Newark.jpg',
    countryCode: 'US',
    url: '/airport-transfer-new-york/#',
  },
];

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Airport Transfer New York',
  url: 'https://www.roldrive.com/airport-transfer-new-york',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=airport-transfer-new-york{search_term_string}',
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
          img="/images/banner/cities/airport-transfer-new-york.jpg"
          line1="New York"
          line2=" "
          line3="Book your premium chauffeur ride today.
    Arrive in style, stress-free and rejuvenated."
        />
        <div className="container mx-auto">
          <H1 className="text-black !text-[32px] font-[700] mt-10 px-6">
            New York Airport Transfer
          </H1>
          <P className="px-6 my-2 text-[#2C2C2C] text-justify">
            New York City is one of the most iconic destinations in the world,
            known for its towering skyscrapers, historic landmarks, and vibrant
            cultural scene. Every year, millions of tourists flock to the city
            to explore its many attractions, from the Statue of Liberty to Times
            Square. But with so much to see and do, it can be overwhelming for
            visitors to navigate the city on their own. That&#39;s where
            RolDrive&#39;s airport transfers New York services come in,
            providing a safe, reliable, and luxurious way to explore the city.
          </P>
          <P className="px-6 text-[#2C2C2C] text-justify">
            One of the biggest advantages of using RolDrive&#39;s chauffeur
            services is the convenience it offers. When you&#39;re in a new
            city, getting around can be a daunting task. Public transportation
            can be confusing and crowded, and taxis can be unreliable and
            expensive. With a private transfer New York chauffeur, you&#39;ll
            have a dedicated driver who knows the city inside and out, taking
            you wherever you need to go in comfort and style.
          </P>

          <H2 className="text-black lg:!text-[32px] md:!text-[28px] sm:!text-[24px] !text-[20px] text-center font-[700] mt-10 lg:mb-6 mb-2 px-6 ">
            New York Landmarks
          </H2>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="p-6">
              <div className="my-auto !min-h-[350px] w-full relative h-full">
                <Image
                  src="/images/city/new-york/nyc.jpg"
                  fill
                  className="object-cover rounded-md"
                  alt="Statue of Liberty"
                />
              </div>
            </div>
            <div className="p-6 pt-3 text-[#2C2C2C]">
              <PlacePointer
                head="The Statue of Liberty"
                para="A symbol of freedom and opportunity, the Statue of Liberty is a must-see for anyone visiting New York City. Visitors can take a ferry to Liberty Island to get up close to this iconic statue and learn about its history."
              />

              <PlacePointer
                head="Times Square"
                para="Known as &#34;the Crossroads of the World,&#34; Times Square is a bustling commercial and entertainment hub in the heart of Manhattan. Visitors can take in the bright lights and billboards, catch a Broadway show, or grab a bite to eat at one of the many restaurants in the area."
              />

              <PlacePointer
                head="The Empire State Building"
                para="One of the most famous skyscrapers in the world, the Empire State Building offers stunning views of the city from its observation decks on the 86th and 102nd floors."
              />
            </div>
          </div>
        </div>

        <section className="bg-[#FFF5F5] pb-10 pt-6">
          <div className="container mx-auto px-6">
            <Pic
              className="mb-2 rounded-md mx-auto w-full"
              src="/images/city/new-york/nyc-b.jpg"
              alt="new york airport"
              quality={90}
            />
            <P className="!text-[16px] my-3 text-[#2C2C2C] text-justify">
              Another advantage of using RolDrive chauffeur services is the
              personalized attention you&#39;ll receive. Your chauffeur will be
              there to assist you with whatever you need, whether it&#39;s
              recommendations for restaurants or help with your luggage.
              They&#39;ll also be familiar with the city&#39;s traffic patterns,
              so you can avoid the frustration of getting stuck in rush hour
              traffic or navigating confusing detours. And with their knowledge
              of the city&#39;s best routes and shortcuts, you&#39;ll be able to
              maximize your time and see as much of the city as possible.
            </P>
            <P className="mt-2 !text-base text-[#2C2C2C] text-justify">
              Not only does RolDrive save you time and hassle, but it also
              ensures that you won&#39;t miss out on any of the city&#39;s
              must-see sights. Your chauffeur will take you to each and every
              one of your desired locations efficiently and safely. And with
              RolDrive&#39;s fleet of luxury vehicles, you&#39;ll travel in
              comfort and style, whether you&#39;re in a sleek sedan or a
              spacious SUV.
            </P>
            <PlacePointer
              head="The Metropolitan Museum of Art"
              para="One of the largest and most comprehensive art museums in the world, the Met features more than two million works of art from around the globe, ranging from ancient artifacts to contemporary masterpieces."
            />

            <PlacePointer
              head="Central Park"
              para="A vast green oasis in the middle of Manhattan, Central Park offers visitors a chance to escape the hustle and bustle of the city and enjoy nature. With lakes, gardens, playgrounds, and more, there&#39;s something for everyone in this expansive park."
            />

            <div className="grid sm:grid-cols-3 gap-[20px] mt-6">
              <Pic
                className="rounded-[10px]"
                src="/images/city/new-york/mon-1.jpg"
              />
              <Pic
                className="rounded-[10px]"
                src="/images/city/new-york/mon-2.jpg"
              />
              <Pic
                className="rounded-[10px]"
                src="/images/city/new-york/mon-3.jpg"
              />
            </div>
            <P className="!text-base mt-3 text-[#2C2C2C] text-justify">
              Perhaps the biggest advantage of using RolDrive chauffeur services
              is the safety it provides. New York City can be a hectic and
              chaotic place, especially for visitors who aren&#39;t used to the
              fast pace of life in the city. With a private chauffeur,
              you&#39;ll have the peace of mind of knowing that you&#39;re in
              good hands. Your chauffeur will be a trained and experienced
              professional, with a deep understanding of safe driving practices
              and defensive driving techniques. And with RolDrive&#39;s
              commitment to safety and excellence, you can be confident that
              you&#39;re in the best possible hands.
            </P>
            <PlacePointer
              head="The 9/11 Memorial and Museum"
              para="A solemn and moving tribute to the victims of the September 11th terrorist attacks, the 9/11 Memorial and Museum features artifacts, exhibits, and personal stories that commemorate the lives lost that day."
            />

            <PlacePointer
              head="The High Line"
              para=" A unique public park built on an elevated rail line above the streets of Manhattan, the High Line offers visitors stunning views of the city, as well as art installations, gardens, and other features."
            />

            <PlacePointer
              head="The Brooklyn Bridge"
              para="A marvel of engineering and design, the Brooklyn Bridge is a historic landmark that offers stunning views of the city skyline and the East River. Visitors can walk or bike across the bridge, or take a guided tour to learn about its history and construction."
            />

            <PlacePointer
              head="The Museum of Modern Art"
              para="One of the world&#39;s premier art museums, MoMA features a vast collection of modern and contemporary art, including works by Picasso, Van Gogh, Warhol, and many other artists. With rotating exhibitions and special events, there&#39;s always something new to see at MoMA."
            />

            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              If you&#39;re a foodie, New York City is a culinary paradise. From
              classic New York-style pizza to gourmet fusion cuisine, the city
              has something to offer for every palate. And with the city&#39;s
              diverse cultural mix, you can sample everything from Korean
              barbecue to Ethiopian injera.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              Finally, if you&#39;re a culture vulture, New York City is home to
              some of the world&#39;s most vibrant and exciting arts and
              entertainment scenes. Whether you&#39;re interested in Broadway
              shows, live music, or avant-garde theatre, you&#39;ll find it all
              in New York City. And with iconic venues like Carnegie Hall,
              Lincoln Center, and the Metropolitan Opera, you&#39;ll have the
              chance to experience some of the world&#39;s greatest performers
              in unforgettable settings.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              No matter what your interests are, visiting New York City is an
              unforgettable experience. And with RolDrive chauffeur services,
              you can make the most of your trip, with safe, reliable, and
              luxurious transportation that will take you wherever you want to
              go in style. Whether you&#39;re in town for business or pleasure,
              RolDrive&#39;s commitment to excellence and customer service
              ensures that your trip will be unforgettable. Simply search for
              &#39;RolDrive&#39; or &#39;airport transfer New York city&#39;.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              One of the things that set RolDrive apart from other chauffeur
              services is its dedication to sustainability. We are committed to
              reducing our environmental impact through a range of initiatives,
              from using hybrid and electric vehicles to minimizing carbon
              footprint through careful route planning. As travellers become
              more aware of their impact on the environment, choosing a
              sustainable transportation option like RolDrive is a smart and
              responsible choice.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              In conclusion, if you&#39;re planning a trip to New York City,
              using RolDrive&#39;s hourly chauffeur service is a must. With
              their commitment to excellence, safety, and sustainability,
              you&#39;ll be able to explore the city in comfort and style, with
              personalized attention and expert guidance from your chauffeur.
              And with so much to see and do in New York City, from iconic
              landmarks to vibrant cultural scenes, you&#39;ll have the trip of
              a lifetime that you&#39;ll never forget. Simply search for
              &#39;RolDrive&#39; or &#39;luxury airport transfer near me&#39; to
              find a trusted ground partner!
            </P>
          </div>
        </section>
        <section>
          <div className="container px-6 mx-auto my-7">
            <H2 className="text-center my-8 text-black !text-[32px] font-[700]">
              Airports in New York
            </H2>
            <div className="flex justify-center flex-wrap gap-6">
              {usa.map((airport) => (
                <AirportCard
                  key={airport.id}
                  url="/airport-transfer-new-york/#"
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
