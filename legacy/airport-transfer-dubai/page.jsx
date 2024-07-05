/* eslint-disable max-len */
// import AirportCarousel from 'components/shared/AirportCarousel';
// import Booking from 'components/Booking/Booking';
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
    title: 'Chauffeur Service from Dubai Airport Transfers | Rol Drive',
    description:
      'Seamless elegance from runway to destination. Experience top-tier chauffeur service with Rol Drive for luxurious Dubai Airport Transfers. Book now!',
    keywords: [
      'dubai airport transfers',
      'airport transfer dubai',
      'airport transfers from dubai airport',
    ],
    ogTitle:
      "Rol Drive's Exclusive Chauffeur Service for Dubai Airport Transfers",
    ogDescription:
      "Experience luxury and seamless transfers with Rol Drive's chauffeur service for Dubai airport. Elevate your journey, book now!",
    twTitle:
      "Rol Drive's Exclusive Chauffeur Service for Dubai Airport Transfers",
    twDescription:
      "Experience luxury and seamless transfers with Rol Drive's chauffeur service for Dubai airport. Elevate your journey, book now!",
  });
}

const dubai = [
  {
    id: 1,
    name: 'Dubai International Airport',
    img: '/images/airports/dubai/DXB.jpg',
    countryCode: 'AE',
    url: '/airport-transfer-dubai/#',
  },
  {
    id: 2,
    name: 'Al Maktoum International Airport',
    img: '/images/airports/dubai/DWC.jpg',
    countryCode: 'AE',
    url: '/airport-transfer-dubai/#',
  },
];

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Airport Transfer Dubai',
  url: 'https://www.roldrive.com/airport-transfer-dubai',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=airport-transfer-dubai{search_term_string}',
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
          img="/images/banner/cities/airport-transfer-dubai.jpg"
          line1="Dubai"
          line2=" "
          line3="Book your premium chauffeur ride today.
  Arrive in style, stress-free and rejuvenated."
        />
        <div className="container mx-auto">
          <H1 className="text-black !text-[32px] font-[700] mt-10 px-6">
            Dubai Airport Transfer
          </H1>
          <P className="px-6 my-2 text-[#2C2C2C] text-justify">
            Dubai, the jewel of the United Arab Emirates (UAE), is a unique
            destination that offers a blend of ancient traditions and modern
            wonders. From its towering skyscrapers to its luxurious hotels and
            resorts, there&#39;s no shortage of attractions to see and
            experience in Dubai. And when it comes to getting around the city in
            style, nothing beats the chauffeur service provided by
            RolDrive&#39;s luxury airport pick up Dubai. Can you imagine
            yourself being chauffeured by a Bentley airport transfer Dubai
            service as you experience the city cocooned within the comfort of
            your luxury sedan?
          </P>
          <P className="px-6 text-[#2C2C2C] text-justify">
            Dubai is a city that is constantly evolving, and there&#39;s always
            something new to discover. From its world-famous shopping malls to
            its picturesque beaches and magnificent desert landscapes, Dubai has
            it all. Whether you&#39;re a first-time visitor or a seasoned
            traveller, there&#39;s something for everyone in this vibrant city.
            Book airport transfer Dubai service today.
          </P>

          <H2 className="text-black lg:!text-[32px] md:!text-[28px] sm:!text-[24px] !text-[20px] text-center font-[700] mt-10 lg:mb-6 mb-2 px-6">
            Dubai Landmarks
          </H2>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="p-6">
              <div className="my-auto !min-h-[350px] w-full relative h-full">
                <Image
                  src="/images/city/dubai/dubai-1.jpg"
                  fill
                  className="object-cover rounded-md"
                  alt="Burj Al Arab Hotel"
                />
              </div>
            </div>
            <div className="p-6 pt-3 text-[#2C2C2C]">
              <PlacePointer
                head="Burj Khalifa"
                para="One of the tallest buildings in the world. Standing at a height of 828 meters, the Burj Khalifa is a marvel of modern architecture and engineering. With its observation decks offering breathtaking views of the city, it&#39;s no wonder that it&#39;s a must-visit attraction for anyone travelling to Dubai."
              />

              <PlacePointer
                head="Dubai Mall"
                para="One of the largest shopping malls in the world. With over 1,200 stores, a giant aquarium, an indoor theme park, and an ice rink, the Dubai Mall is a shopper&#39;s paradise. And if you&#39;re looking for a break from shopping, you can always head to the mall&#39;s outdoor area, where you can enjoy the stunning views of the Burj Khalifa and the Dubai Fountain."
              />

              <PlacePointer
                head="Dubai Museum"
                para="For those looking for a taste of Dubai&#39;s culture and history. Housed in the oldest building in Dubai, the museum offers a fascinating glimpse into the city&#39;s past, from its humble beginnings as a fishing village to its rise as a global hub for business and tourism."
              />
            </div>
          </div>
        </div>

        <section className="bg-[#FFF5F5] pb-10 pt-6">
          <div className="container px-6 mx-auto">
            <Pic
              quality={90}
              className="w-full mx-auto mb-2 rounded-md"
              src="/images/city/dubai/dubai-banner.jpg"
              alt="roldrive images"
            />
            <P className="mt-2 !text-base text-[#2C2C2C] text-justify">
              In Dubai&#39;s heat especially during June, July and August,
              it&#39;s always a good idea to consider a private car with driver
              in Dubai. By hiring a chauffeur service, tourists can sit back and
              relax in an air-conditioned vehicle while their experienced driver
              navigates through the busy city streets, making their way to each
              attraction without the added stress of finding a parking spot or
              figuring out public transportation.
            </P>
            <div className="grid sm:grid-cols-3 gap-[20px] mt-6">
              <Pic
                className="rounded-[10px]"
                src="/images/city/dubai/dubai-d.jpg"
              />
              <Pic
                className="rounded-[10px]"
                src="/images/city/dubai/dubai-m.jpg"
              />
              <Pic
                className="rounded-[10px]"
                src="/images/city/dubai/burj-khalifa.jpg"
              />
            </div>

            <PlacePointer
              head="Dubai desert"
              para="No visit to Dubai is complete without a trip to the desert. With its towering sand dunes and endless expanse of golden sand, it is a sight to behold. And with a private car service Dubai provided by RolDrive, you can explore the desert in style and comfort. From exhilarating dune bashing to camel rides and desert safaris, there&#39;s no shortage of activities to enjoy in the Dubai desert."
            />

            <PlacePointer
              head="Burj Al Arab to the opulent Atlantis and the Palm"
              para="When it comes to accommodation, Dubai has no shortage of luxurious hotels and resorts either. Dubai&#39;s hotels are renowned for their world-class amenities and impeccable service. And with RolDrive&#39;s luxury airport transfer Dubai service, you can arrive at your hotel in luxury."
            />
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              One of the best things about Dubai is its cuisine. From
              traditional Arabic dishes to international cuisine, Dubai&#39;s
              restaurants offer a diverse range of flavours and culinary
              experiences. And with RolDrive&#39;s hourly chauffeur service, you
              can easily explore the city&#39;s food scene without worrying
              about navigation or parking. Whether you&#39;re looking for a
              romantic dinner for two or a family-friendly restaurant, your
              personal driver can take you to the best restaurants in the city.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              With its year-round sunshine, vibrant culture, and world-class
              attractions, Dubai is a destination that should be on every
              traveller&#39;s bucket list. And with RolDrive&#39;s Luxury car
              hire with chauffeur near me service, you can experience all that
              this amazing city has to offer in style and luxury. Whether
              you&#39;re a business traveller or a tourist, a chauffeur service
              can make your trip to Dubai an unforgettable experience.
            </P>
            <P className="mt-2 text-[#2C2C2C] !text-base text-justify">
              In conclusion, Dubai is a city that has something for everyone,
              from its towering skyscrapers to its stunning desert landscapes.
              And with a chauffeur service provided by RolDrive, you can explore
              this amazing city in style and comfort. So why not book a
              chauffeur service for your next trip to Dubai and experience all
              that this incredible city has to offer!
            </P>
          </div>
        </section>
        <section>
          <div className="container px-6 mx-auto my-7">
            <H2 className="text-center my-8 text-black !text-[32px] font-[700]">
              Airports in Dubai
            </H2>
            <div className="flex justify-center flex-wrap gap-6">
              {dubai.map((airport) => (
                <AirportCard
                  key={airport.id}
                  url="/airport-transfer-dubai/#"
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
