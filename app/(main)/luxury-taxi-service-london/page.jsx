/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Luxury Taxi Service in London | Rol Drive',
    description:
      "Rol Drive's luxury taxi service in London. Experience sophistication and comfort in every ride. Your stylish journey begins here. Book now!",
    keywords: ['luxury taxi service London', 'luxury taxi in London'],
    ogTitle: "Rol Drive's Exclusive Luxury Taxi Service in London",
    ogDescription:
      "Experience unparalleled sophistication on the streets of London with Rol Drive's luxury taxi service. Elevate your commute with style and comfort. Book now!",
    twTitle: "Rol Drive's Exclusive Luxury Taxi Service in London",
    twDescription:
      "Experience unparalleled sophistication on the streets of London with Rol Drive's luxury taxi service. Elevate your commute with style and comfort. Book now!",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Luxury Taxi Service London',
  url: 'https://www.roldrive.com/luxury-taxi-service-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=luxury-taxi-service-london{search_term_string}',
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
          img="/images/banner/luxury-taxi-service-london-banner.jpg"
          line1="Luxury Taxi Service London"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/luxury-taxi/image1.jpg',
              alt: 'Luxury Taxi',
              head: 'Luxury Taxi Service London: Unmatched Elegance and Comfort for Your Travels',
              paragraphs: [
                "Experience the pinnacle of luxury and convenience with our luxury taxi service London. Our fleet of high-end vehicles, driven by professional chauffeurs, offers a truly indulgent travel experience. Whether you're heading to a business meeting or exploring the city's vibrant attractions, our luxury taxis provide unparalleled elegance, comfort, and style. Sit back, relax, and enjoy the seamless journey as we take care of your transportation needs with utmost professionalism.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/luxury-taxi/image2.jpg',
              alt: 'Luxury Taxi Service',
              head: "Why Choose RolDrive's Luxury Taxi Service London?",
              paragraphs: [
                'Experience the epitome of opulence and sophistication with our Luxury Taxi in London. As a premier chauffeur service provider, we are dedicated to delivering an exceptional travel experience that exudes elegance and comfort. Our fleet of luxurious vehicles, including prestigious brands like Mercedes Benz, ensures that you arrive at your destination in style. Our highly trained and professional chauffeurs are committed to providing personalized service, catering to your specific needs and preferences. With impeccable attention to detail, they will navigate the bustling streets of London, ensuring a smooth and seamless journey for you.',
                "When you choose our Luxury Taxi Service, you can expect a host of benefits. Firstly, our fleet consists of top-of-the-line vehicles equipped with plush leather interiors, advanced entertainment systems, and climate control, creating an environment of sheer luxury and comfort. Whether you're traveling for business or pleasure, our luxury taxis offer a sanctuary where you can relax and unwind during your journey.",
                "Moreover, our chauffeurs are not just drivers; they are courteous professionals who prioritize your safety, privacy, and satisfaction. They possess extensive knowledge of London's roads, allowing them to efficiently navigate the city's intricate routes and avoid traffic congestion. Additionally, our chauffeurs are well-versed in providing a discreet and confidential service, ensuring that your personal and business matters remain confidential.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/luxury-taxi/image3.jpg',
              alt: 'Luxury Taxi Hire London',
              head: 'Best Facilities Offered Through Luxury Taxi Service London',
              paragraphs: [
                "When searching for a Luxury Taxi Service London, look no further than RolDrive's professional chauffeurs for a world class chauffeur service. We are your comprehensive solution for airport transportation Chauffeur Company in London, offering VIP treatment for one-way rides, round-trip transfers, and even hourly reservations. Our premium chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive elite chauffeur services, exceptional customer service is always our top priority. All of these at affordable prices.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/luxury-taxi/image4.jpg',
              alt: 'Luxury Taxi Hire',
              head: 'Booking Procedure',
              paragraphs: [
                'RolDrive has kept the booking process simple. For London services, all one needs to do for the best chauffeur service is enter the booking details such as the name of the customer along with the date and location. Following this is choosing a vehicle that one desires to travel in. With these details filled in and once confirmed, the client is guided to the payment gateway to finish the booking process.',
                'A confirmation email is sent to the customer with all the necessary details regarding booking driver online.',
                'Now that your booking is complete, leave the rest to us!',
              ],
            },
          ]}
        />
        <div className="h-24" />
      </main>
    </>
  );
}
