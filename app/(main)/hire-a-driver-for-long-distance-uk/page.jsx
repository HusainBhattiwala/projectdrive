/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Hire a Driver for Long Distance Travel in UK | Rol Drive',
    description:
      'RolDrive’s driver for long distance travel is the perfect solution for exciting road journeys as you enjoy the trip in the UK with our knowledgeable chauffeurs.',
    keywords: [
      'hire a driver for long distance UK',
      'driver for long distance travel',
    ],
    ogTitle: "Long-Distance Travel with Hire Rol Drive's Professional Drivers",
    ogDescription:
      'Embark on a comfortable and stylish long-distance journey in the UK with Rol Drive. Hire a skilled driver for a seamless travel experience. Book now!',
    twTitle: "Long-Distance Travel with Hire Rol Drive's Professional Drivers",
    twDescription:
      'Embark on a comfortable and stylish long-distance journey in the UK with Rol Drive. Hire a skilled driver for a seamless travel experience. Book now!',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Hire A Driver For Long Distance UK',
  url: 'https://www.roldrive.com/hire-a-driver-for-long-distance-uk',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=hire-a-driver-for-long-distance-uk{search_term_string}',
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
          img="/images/services/hire-a-driver-for-long-distance-uk/banner.jpg"
          line1="Hire A Driver For Long Distance In UK"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/hire-a-driver-for-long-distance-uk/unleash-true-luxury-through-a-full-day-chauffeur-hire-in-london.jpg',
              alt: 'Hire a Driver for Long Distance',
              head: 'Hire A Driver For Long Distance In UK',
              paragraphs: [
                "In our fast-paced modern world, time is invaluable, and efficiency is of the essence. While discovering the dynamic city of London, selecting a chauffeur hire service can take your experience to an elevated level. With a skilled chauffeur at your service all day, you can fully engage with the city's renowned attractions, cultural landmarks, and lesser-known treasures. Throughout your journey, relish unparalleled comfort and convenience within your chauffeur driven vehicle.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/hire-a-driver-for-long-distance-uk/why-choose-roldrive.jpg',
              alt: 'Hire a Driver for Long Distance UK',
              head: 'Why Choose A Driver For Long Distance?',
              paragraphs: [
                'Selecting a chauffeur service for long distance journeys offers a host of advantages that elevate the travel experience beyond traditional transportation options. The expertise of professional chauffeurs ensures a smooth and comfortable ride, allowing passengers to relax and focus on other activities or simply enjoy the scenery. Chauffeurs possess in-depth knowledge of routes and road conditions, enabling them to navigate efficiently and avoid potential delays.',
                'The luxury and comfort of chauffeur-driven vehicles provide a level of relaxation that traditional modes of travel cannot match. Passengers can enjoy spacious interiors, premium amenities, and a peaceful environment, making the journey a seamless extension of their personal space. Additionally, chauffeur services offer a high level of reliability and punctuality, ensuring that clients reach their destinations promptly without the stress of coordinating transportation.',
                'Long distance rides can be physically taxing, but chauffeur services address this concern by ensuring passengers arrive refreshed and rejuvenated. The absence of the need to drive allows travellers to rest, work, or engage in leisure activities during the journey. Moreover, the personalized attention of chauffeurs caters to individual preferences and needs, creating a bespoke travel experience.',
                'Ultimately, the decision to choose a chauffeur service for long-distance travel stems from the desire for convenience, comfort, and a stress-free journey. The combination of skilled drivers, luxurious vehicles, and attention to detail transforms ordinary travel into an extraordinary adventure.',
              ],
            },
          ]}
        />
        {/* <ImageTextRight sections={[ */}
        {/*  { */}
        {/*    img: '/images/services/hire-a-driver-for-long-distance-uk/best-facilities.jpg', */}
        {/*    head: 'Best Facilities Offered Through Full Day Chauffeur Hire Services', */}
        {/*    paragraphs: ['When searching for a full day chauffeur hire service, look no further than RolDrive\'s professional chauffeurs for a world class chauffeur service. We are your comprehensive solution for airport transportation Chauffeur Company in London, offering VIP treatment for one-way rides, round-trip transfers, and even hourly reservations. Our premium chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children\'s seat or extra luggage if you need it or something as simple as Wifi. At RolDrive premium chauffeur services, exceptional customer service is always our top priority. All of these at affordable prices.', */}
        {/*      'A confirmation email is sent to the customer with all the necessary details regarding booking driver online.', */}
        {/*      'Now that your booking is complete, leave the rest to us!'], */}
        {/*  }, */}
        {/* ]} */}
        {/* /> */}
        {/* <ImageTextLeft sections={[ */}
        {/*  { */}
        {/*    img: '/images/services/hire-a-driver-for-long-distance-uk/booking-procedure.jpg', */}
        {/*    head: 'Booking Procedure', */}
        {/*    paragraphs: ['RolDrive has kept the booking process simple. All one needs to do for the best chauffeur service is enter the booking details such as the name of the customer along with the date and location. Following this is choosing a vehicle that one desires to travel in. With these details filled in and once confirmed, the client is guided to the payment gateway to finish the booking process.', */}
        {/*      'A confirmation email is sent to the customer with all the necessary details regarding booking driver online.', */}
        {/*      'Now that your booking is complete, leave the rest to us!'], */}
        {/*  }, */}
        {/* ]} */}
        {/* /> */}
        <div className="h-24" />
      </main>
    </>
  );
}
