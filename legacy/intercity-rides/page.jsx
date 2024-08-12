import Link from 'next/link';
import FourFeatures from 'components/shared/FourFeatures';
import IntercityRoutes from 'components/IntercityRoutes';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';

export function generateMetadata() {
  return metadata({
    title: 'Intercity Chauffeur Service for Exciting Transfers | Rol Drive',
    description:
      'Travel with RolDrive’s intercity chauffeur service in luxury as we transfer you from one city to another. Safety and comfort being our top priority.',
    keywords: ['Intercity Chauffeur Service'],
    ogTitle: 'City-to-City Travel: Book Rol Drive Intercity Chauffeur Service',
    ogDescription:
      'Embark on a journey of comfort and style with Rol Drive Intercity Chauffeur Service. Seamless travel awaits!',
    twTitle: 'City-to-City Travel: Book Rol Drive Intercity Chauffeur Service',
    twDescription:
      'Embark on a journey of comfort and style with Rol Drive Intercity Chauffeur Service. Seamless travel awaits!',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Intercity Rides',
  url: 'https://www.roldrive.com/intercity-rides',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=intercity-rides{search_term_string}',
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
          img="/images/banner/intercity-transfer-2.jpg"
          line1="Intercity Transfers"
          line2=" "
          line3="Book your premium chauffeur ride today. Arrive in style, stress-free and rejuvenated.

"
        />
        <FourFeatures />
        <IntercityRoutes heading="Top Cities Around Your Location" />
        <section>
          <div className="container mx-auto !md:py-12 px-4 lg:px-8 xl:px-10 2xl:px-12">
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div>
                <img
                  src="/images/services/exciting-intercity-road-transfers.jpg"
                  alt="Intercity Road Transfer"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex items-center my-3 lg:pl-20">
                <div className="block text-center md:text-left">
                  <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px] capitalize">
                    What is an Intercity Road Transfer Service?
                  </h2>
                  <p className="mt-3 text-justify">
                    Nothing beats a road trip! When you have the time, our
                    executive intercity chauffeur service rides are preferable
                    to flying. Travel in groups or alone as you relax while you
                    {' '}
                    <Link
                      className="text-primary hover:text-black"
                      href="/long-distance-chauffeur-service-in-london"
                    >
                      hire a driver for long distance travel in the UK
                    </Link>
                    {' '}
                    to take you to your destination. Choosing RolDrive&apos;s
                    {' '}
                    <Link
                      className="text-primary hover:text-black"
                      href="/chauffeur-driven-car-hire-london"
                    >
                      chauffeur driven car hire London
                    </Link>
                    {' '}
                    for your journey not only elevates your experience but also
                    adds a touch of luxury, convenience, and safety to your
                    trip.
                  </p>
                  <p className="mt-3 text-justify">
                    Not only is the intercity
                    <Link
                      className="text-primary hover:text-black"
                      href="/luxury-taxi-service-london"
                    >
                      {' '}
                      luxury taxi service London
                    </Link>
                    {' '}
                    more environmentally friendly, but it can also be more
                    cost-effective. When you factor in the expenses of air
                    travel, such as airport parking, baggage fees, and
                    transportation costs to and from the airport, intercity
                    rides can be a budget-friendly alternative. With RolDrive,
                    you can expect competitive prices and transparent billing,
                    ensuring you get the best value for your money with no
                    hidden costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div className="order-1 lg:order-2 xl:order-2 ">
                <img
                  src="/images/services/intercity-ride/image1.jpg"
                  alt="Intercity Ride"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex items-center order-2 lg:pr-20 md:order-1 lg:order-1 xl:order-1">
                <div className="block my-3 text-center  md:text-left">
                  <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px] capitalize">
                    Why choose RolDrive’s Intercity Road Transfer Service?
                  </h2>
                  <p className="mt-3 text-justify">
                    A long distance journey ride offers scenic views and the
                    opportunity to explore local areas along the way, making it
                    a more enjoyable and authentic travel experience. As you
                    travel through picturesque landscapes, your knowledgeable
                    intercity rides chauffeur can guide you to hidden gems,
                    local eateries, and must-visit attractions. This tailored
                    experience creates lasting memories and enhances your
                    appreciation for the journey.
                  </p>
                  <p className="mt-3 text-justify">
                    With so many benefits, it&apos;s worth considering an
                    executive chauffeur service for your next intercity trip.
                    Travel at your own pace, the preferred way! At RolDrive, our
                    extensive fleet of luxury vehicle classes ensures that you
                    have the perfect car for your journey. From sleek sedans to
                    spacious SUVs, we offer a range of options that cater to
                    your needs and preferences for a private transfer.
                  </p>
                  <p className="mt-3 text-justify">
                    Moreover, our professional long distance travel chauffeurs
                    are expertly trained, background-checked, and experienced in
                    providing the highest level of service. They prioritize your
                    comfort and safety, allowing you to relax and enjoy your
                    trip without worrying about navigating unfamiliar roads or
                    finding parking.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div>
                <img
                  src="/images/services/intercity-ride/image2.jpg"
                  alt=" Intercity Ride"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex items-center lg:pl-20">
                <div className="block my-3 text-center  md:text-left">
                  <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px]">
                    How Does It Work?
                  </h2>
                  <p className="mt-3 text-justify">
                    The stress free solution booking process has been kept as
                    simple as possible for our clients so they can book their
                    chauffeur without any hassle. Once you reach the booking
                    page, simply put in the pick up location, the pick up time
                    and the destination you wish to get to along with the number
                    of passengers and the vehicle of your choice. That&apos;s
                    it!
                  </p>
                  <p className="mt-3 text-justify">
                    Now that the booking is complete, a mail will be sent to you
                    confirming the booking process. Expect the chauffeur to
                    reach you at the mentioned pick up time; and to offer great
                    service, our chauffeurs will promptly inform you of their
                    arrival once they reach.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div className="order-1 lg:order-2 xl:order-2 ">
                <img
                  src="/images/services/intercity-ride/image3.png"
                  alt="Intercity Ride Transfers"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex items-center order-1 lg:pr-20 md:order-1 lg:order-1 xl:order-1">
                <div className="block my-3 text-center  md:text-left">
                  <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px] capitalize">
                    What does RolDrive&apos;s Fleet Consist Of?
                  </h2>
                  <p className="mt-3 text-justify">
                    One of the key aspects that set RolDrive apart from other
                    chauffeur services is our impressive and diverse fleet of
                    luxury vehicles. Meticulously chosen to provide clients with
                    the utmost comfort and style, RolDrive&apos;s fleet ensures
                    that every journey is a lavish and unforgettable experience.
                  </p>
                  <h3 className="mt-3 font-bold text-justify">
                    Naming a few of the vehicles RolDrive offers:
                  </h3>
                  <p className="mt-3 text-justify">
                    Mercedes-Benz S-Class: The epitome of luxury, this iconic
                    model offers unparalleled comfort and elegance, making it
                    the ideal choice for discerning clients. Packed with
                    features such as advanced driver assistance systems and a
                    high-end infotainment system. The S-Class is considered a
                    flagship model for the Mercedes-Benz brand.
                  </p>
                  <p className="mt-3 text-justify">
                    BMW 7 Series: This executive sedan combines performance,
                    style, and advanced technology, providing a smooth and
                    enjoyable ride. Regarded as one of the best luxury vehicles
                    in the first-class market.
                  </p>
                  <p className="mt-3 text-justify">
                    Audi A8: Known for its innovative design and engineering,
                    Audi vehicles offer a perfect blend of sophistication and
                    performance. The Audi A8 is considered the brand&apos;s
                    flagship model. A car perfect for first-class requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-24" />
      </main>
    </>
  );
}
