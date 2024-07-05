/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Mercedes Sprinter 12 Seater Hire in London | Rol Drive',
    description:
      "Travel in style with Rol Drive's Mercedes Sprinter 12 seater hire in London. Experience luxury, comfort, and reliability. Book your group transportation now!",
    keywords: ['mercedes sprinter hire London', 'mercedes sprinter 12 seater'],
    ogTitle: 'Mercedes Sprinter 12 Seater Hire by Rol Drive in London',
    ogDescription:
      "Travel in style and comfort with Rol Drive's Mercedes Sprinter 12 Seater hire in London. Experience luxury group transportation with sophistication. Book now!",
    twTitle: 'Mercedes Sprinter 12 Seater Hire by Rol Drive in London',
    twDescription:
      "Travel in style and comfort with Rol Drive's Mercedes Sprinter 12 Seater hire in London. Experience luxury group transportation with sophistication. Book now!",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Mercedes Sprinter Hire In London',
  url: 'https://www.roldrive.com/mercedes-sprinter-hire-in-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=mercedes-sprinter-hire-in-london{search_term_string}',
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
          img="/images/services/mercedes-sprinter-hire-in-london/banner.jpg"
          line1="Mercedes Sprinter Hire London"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/mercedes-sprinter-hire-in-london/mercedes-sprinter-group-transport-in-london.jpg',
              alt: 'Mercedes Sprinter',
              head: 'Mercedes Sprinter Group Transport In London',
              paragraphs: [
                'When it comes to group travel or special events in London, choosing a Mercedes Benz Sprinter hire is a decision that guarantees an elevated and unforgettable experience. The Mercedes Sprinter is renowned for its exceptional comfort, versatility, and luxurious features, making it the perfect choice for discerning customers seeking the utmost in style and convenience when travelling in a group.',
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/mercedes-sprinter-hire-in-london/why-choose-roldrive-mercedes-sprinter-class.jpg',
              alt: ' Mercedes Sprinter Services',
              head: "Why Choose RolDrive's Mercedes Sprinter Class",
              paragraphs: [
                "One of the key reasons to choose a Mercedes Sprinter hire in London is the spaciousness it offers. With ample seating capacity, it can comfortably accommodate larger groups, ensuring everyone travels together and enjoys the journey as a cohesive unit. Whether it's a corporate event, wedding guests heading to their destination, a bridal party, a family outing, or a group of friends exploring the city, the Mercedes Sprinter provides the room and comfort necessary for a pleasant and enjoyable ride.",
                'Additionally, the Mercedes Sprinter is equipped with state-of-the-art amenities that enhance the overall travel experience. From plush seating and climate control to advanced entertainment systems and onboard Wi-Fi, passengers can stay connected, entertained, and relaxed throughout their journey. The sleek and modern design of the Mercedes Sprinter adds a touch of sophistication and style, making a statement wherever you go.',
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/mercedes-sprinter-hire-in-london/best-facilities-offered-with-the-mercedes-sprinter.jpg',
              alt: 'Mercedes Sprinter Hire London',
              head: 'Best Facilities Offered With The Mercedes Sprinter Class',
              paragraphs: [
                "When searching for luxury car hire and elite chauffeur services, look no further than RolDrive's professional chauffeurs for a world class chauffeur service. We are your comprehensive solution for airport transportation chauffeur company in London, offering VIP treatment for one-way rides, round-trip transfers, and even hourly reservations. Our elite chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive elite chauffeur services, exceptional customer service is always our top priority. All of these at affordable prices.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/mercedes-sprinter-hire-in-london/booking-procedure.jpg',
              head: 'Mercedes Sprinter Hire',
              paragraphs: [
                'RolDrive has kept the booking process simple. For London services, all one needs to do for the best chauffeur service is enter the booking details such as the name of the customer along with the date and location. Following this is choosing a vehicle that one desires to travel in. With these details filled in and once confirmed, the client is guided to the payment gateway to finish the booking process.',
                'A confirmation email is sent to the customer with all the necessary details regarding booking driver online.',
                'Now that your booking is complete, leave the rest to us! Your London chauffeur is on the way.',
              ],
            },
          ]}
        />
        <div className="h-24" />
      </main>
    </>
  );
}
