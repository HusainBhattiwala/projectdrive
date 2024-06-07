/* eslint-disable max-len */
import Link from 'next/link';
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components//home/BookingBannerV3';

export function generateMetadata() {
  return metadata({
    title: 'Book Chauffeur Service for Roadshow Transfer | Rol Drive',
    description:
      "Secure Your Journey with Rol Drive's Premier Chauffeur Service for Roadshow Transfers. Book Now!",
    keywords: ['roadshow chauffeur service', 'roadshow transfers'],
    ogTitle: 'Book Your Roadshow Chauffeur Transfer with Rol Drive',
    ogDescription:
      "Experience roadshow with Rol Drive's chauffeur transfer service. Book now for a stylish and reliable journey.",
    twTitle: 'Book Your Roadshow Chauffeur Transfer with Rol Drive',
    twDescription:
      "Experience roadshow with Rol Drive's chauffeur transfer service. Book now for a stylish and reliable journey.",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Road Shows',
  url: 'https://www.roldrive.com/road-shows',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.roldrive.com/search?q=road-shows{search_term_string}',
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
        {/* <BookingBannerV3
        img="/images/banner/road-show-transfer.jpg"
        head1="Road Shows"
        head2=" "
        className="bg-bottom"
      /> */}
        <BookingBannerV3
          img="/images/banner/road-show-transfer.jpg"
          line1="Road Shows"
          line2=" "
          line3="Book your premium chauffeur ride today.Arrive in style, stress-free and rejuvenated."
        />
        {/* <BookingBannerV3 img="/images/banner/fireflyBanner.png" /> */}
        <FourFeatures />

        <section>
          <div className="container mx-auto !md:py-12 px-4 lg:px-8 xl:px-10 2xl:px-12">
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div>
                <img
                  src="/images/services/road-show-transfers.jpg"
                  alt="Event Transfer"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex items-center my-3 lg:pl-20">
                <div className="block text-center md:text-left">
                  <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px]">
                    What is a Roadshow Transfer Service?
                  </h2>
                  <p className="mt-3 text-justify">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    In today's fast-paced corporate world, a
                    <Link
                      className="text-primary hover:text-black"
                      href="/corporate-chauffeur-service-london"
                    >
                      {' '}
                      corporate chauffeur service London
                    </Link>
                    {' '}
                    has become an essential tool for companies and individuals
                    to showcase their products, services, talents and ideas to a
                    wider audience. The success of a financial roadshow or
                    business meeting often depends on the smooth execution of
                    its transportation logistics. RolDrive&apos;s event
                    transportation management services for roadshows are
                    designed to provide a reliable, comfortable, and
                    professional solution that caters to the unique needs of
                    each client.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div className="order-1 lg:order-2 xl:order-2 ">
                <img
                  src="/images/services/road-show/image1.png"
                  alt="Roadshow Transfer"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex items-center order-2 lg:pr-20 md:order-1 lg:order-1 xl:order-1">
                <div className="block my-3 text-center  md:text-left">
                  <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px] capitalize">
                    Why choose RolDrive’s Roadshow Chauffeur Service?
                  </h2>
                  <h3 className="mt-3 font-bold">
                    Experienced Drivers for Corporate Chauffeur Services
                  </h3>
                  <p className="mt-3 text-justify">
                    At the heart of RolDrive&apos;s
                    <Link
                      className="text-primary hover:text-black"
                      href="/executive-chauffeur-service-london"
                    >
                      {' '}
                      executive chauffeur service London
                      {' '}
                    </Link>
                    is a team of highly skilled and experienced roadshow
                    chauffeurs. These professionals are well-versed in the
                    intricacies of roadshow logistics, making them the ideal
                    choice for corporate chauffeur services.
                  </p>
                  <h3 className="mt-3 font-bold">
                    Customizable Services for a Seamless Roadshow Experience
                  </h3>
                  <p className="mt-3 text-justify">
                    Understanding that each roadshow is unique, RolDrive offers
                    flexible and customizable services to accommodate the
                    specific needs of each client. From adjusting the itinerary
                    to providing additional vehicles or coordinating with other
                    event suppliers, RolDrive&apos;s roadshow chauffeurs are
                    dedicated to ensuring a seamless roadshow experience.
                  </p>
                  <h3 className="mt-3 font-bold">Safety and Reliability</h3>
                  <p className="mt-3 text-justify">
                    RolDrive prioritizes the safety and well-being of its
                    clients. All vehicles in our fleet undergo regular
                    maintenance and are inspected to ensure they meet the
                    highest safety standards. Furthermore, RolDrive&apos;s
                    experienced chauffeurs undergo comprehensive background
                    checks and receive extensive training to guarantee a secure
                    and dependable service.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div>
                <img
                  src="/images/services/road-show/image2.png"
                  alt="Roadshow"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex items-center lg:pl-20">
                <div className="block my-3 text-center  md:text-left">
                  <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px] capitalize">
                    How Does It Work?
                  </h2>
                  <p className="mt-3 text-justify">
                    The booking process has been kept as simple as possible for
                    our clients so they can book their chauffeur without any
                    hassle. Once you reach the booking page, simply put in the
                    pick up location, the pick up time and the destination you
                    wish to get to along with the number of passengers and the
                    vehicle of your choice. That&apos;s it!
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
                  src="/images/services/road-show/image3.png"
                  alt="Roadshow Transfers Services"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex items-center order-1  lg:pr-20 md:order-1 lg:order-1 xl:order-1">
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
                  <h3 className="mt-3 font-bold">
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
