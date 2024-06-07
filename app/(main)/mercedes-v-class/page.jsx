/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Hire Mercedes V Class Chauffeur with Driver in London | Rol Drive',
    description:
            "Experience luxury travel in London with Rol Drive's Mercedes V Class chauffeur service. Professional drivers ensure a comfortable journey.",
    keywords: [
      'mercedes v class chauffeur London,',
      'mercedes v class hire with driver',
    ],
    ogTitle: 'Luxury Travel: Mercedes V Class Chauffeur Hire in London with Rol Drive',
    ogDescription:
            'Rol Drive offers Mercedes V Class chauffeur hire with professional drivers in London, ensuring a luxurious and comfortable travel experience.',
    twTitle: 'Luxury Travel: Mercedes V Class Chauffeur Hire in London with Rol Drive',
    twDescription:
            'Rol Drive offers Mercedes V Class chauffeur hire with professional drivers in London, ensuring a luxurious and comfortable travel experience.',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Mercedes S Class Chauffeur In London',
  url: 'https://www.roldrive.com/mercedes-s-class-chauffeur-in-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
            'https://www.roldrive.com/search?q=mercedes-s-class-chauffeur-in-london{search_term_string}',
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
          img="/images/services/mercedes-v-class/banner.jpg"
          line1="Mercedes V Class chauffeur in London"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/mercedes-v-class/mercedes-v-class-hire-with-driver.jpg',
              alt: 'Mercedes S Class Transfer',
              head: 'Mercedes V Class Hire With Driver',
              paragraphs: [
                'The Mercedes Benz V Class hire stands as the best example of on-road sophistication. Designed for luxury and versatility, accommodating between 12 and 19 passengers depending on the variant, this vehicle merges advanced technology with premium amenities, offering unmatched travel comfort. Its spacious interior, elegant design, and exceptional performance make it ideal for both business and leisure, catering to group transportation needs with unparalleled elegance and efficiency, solidifying its status as a top choice for discerning travellers seeking style and functionality.',
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/mercedes-v-class/why-choose-roldrive-mercedes-benz-v-class.jpg',
              alt: 'Mercedes S Class',
              head: "Why Choose RolDrive's Mercedes Benz V Class",
              paragraphs: [
                "Choosing the Mercedes Benz V Class van from RolDrive for your road transfers upgrades your luxury and comfort. This vehicle is built to provide ample space, essential for group travel, particularly on extended journeys, offering the legroom necessary for a pleasant ride. It's not just the spaciousness that sets the V Class apart; it's also equipped with top-tier amenities such as plush seating, climate control, sophisticated entertainment systems, and Wi-Fi connectivity, ensuring a journey that's both relaxing and engaging. Beyond the practicalities, travelling in a Mercedes Benz V Class is a statement of elegance and prestige. Whether for corporate events, weddings, family outings, or city explorations with friends, the V Class delivers an unmatched travel experience, combining luxury, convenience, and style, making every trip memorable and comfortable.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/mercedes-v-class/best-facilities-offered-with-the-mercedes-benz-v-class.jpg',
              alt: 'Mercedes S Class Hire',
              head: 'Best Facilities Offered With The Mercedes Benz V Class',
              paragraphs: [
                "For luxury car hire and elite chauffeur services, RolDrive is your premier choice, offering world-class chauffeur services. Specialising in airport transportation, RolDrive provides VIP treatment for one-way rides, round-trip transfers, and hourly reservations. Our professional chauffeurs are committed to delivering a seamless and luxurious travel experience, assisting with luggage, guiding you to desired locations, and accommodating special requests such as children's seats. With the added convenience of onboard Wi-Fi, every journey with the Mercedes V Class luxury promises to be comfortable and connected. At the heart of RolDrive's chauffeur services lies an unwavering dedication to exceptional customer service, ensuring every trip is not just a journey, but a memorable experience, all at competitive prices.",
              ],
            },
          ]}
        />
        {/* <ImageTextLeft
          sections={[
            {
              img: '/images/services/mercedes-s-class-chauffeur-in-london/booking-procedure.jpg',
              alt: 'Mercedes S Class Services',
              head: 'Booking Procedure',
              paragraphs: [
                'RolDrive has kept the booking process simple. For London services, all one needs to do for the best chauffeur service is enter the booking details such as the name of the customer along with the date and location. Following this is choosing a vehicle that one desires to travel in. With these details filled in and once confirmed, the client is guided to the payment gateway to finish the booking process.',
                'A confirmation email is sent to the customer with all the necessary details regarding booking driver online.',
                'Now that your booking is complete, leave the rest to us! Your London chauffeur is on the way.',
              ],
            },
          ]}
        /> */}
        <div className="h-24" />
      </main>
    </>
  );
}
