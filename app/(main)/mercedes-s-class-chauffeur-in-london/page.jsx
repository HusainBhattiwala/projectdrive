/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Hire Mercedes S Class Chauffeur Service in London | Rol Drive',
    description:
      "Hire Rol Drive's Mercedes S Class chauffeur service in London. Elevate your journey with style, comfort, and impeccable service. Book now!",
    keywords: [
      'mercedes s class chauffeur London',
      's class mercedes chauffeur service',
      'mercedes s class hire london',
    ],
    ogTitle: 'Mercedes S Class Chauffeur Hire with Rol Drive in London',
    ogDescription:
      "Experience ultimate luxury and sophistication with Hire Rol Drive's Mercedes S Class chauffeur service in London. Elevate your journey, Book now!",
    twTitle: 'Mercedes S Class Chauffeur Hire with Rol Drive in London',
    twDescription:
      "Experience ultimate luxury and sophistication with Hire Rol Drive's Mercedes S Class chauffeur service in London. Elevate your journey, Book now!",
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
          img="/images/services/mercedes-s-class-chauffeur-in-london/banner.jpg"
          line1="Mercedes S Class Chauffeur London"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/mercedes-s-class-chauffeur-in-london/luxury-and-elegance-personified-through-the-mercedes-s-class.jpg',
              alt: 'Mercedes S Class Transfer',
              head: 'Luxury And Elegance Personified Through The Mercedes S Class Chauffeur London',
              paragraphs: [
                'When it comes to experiencing the epitome of luxury and sophistication in chauffeur services, the Mercedes Benz S Class stands head and shoulders above the rest. Choosing a Mercedes Benz S Class chauffeur in London is a decision that guarantees a truly indulgent and unforgettable travel experience. Choosing a Mercedes Benz S Class chauffeur in London is the ultimate choice for those who seek nothing but the best in luxury and elegance. With its unrivalled comfort, cutting-edge features, and professional chauffeurs, the Mercedes S Class guarantees an exceptional and memorable travel experience. Be it for airport transfers, business meetings or simple leisure trips.',
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/mercedes-s-class-chauffeur-in-london/why-choose-roldrive-mercedes-benz-s-class.jpg',
              alt: 'Mercedes S Class',
              head: "Why Choose RolDrive's Mercedes Benz S Class",
              paragraphs: [
                'The Mercedes S Class is renowned for its impeccable craftsmanship, cutting-edge technology, and unmatched comfort. It represents the pinnacle of automotive excellence, combining sleek aesthetics with refined performance. From the moment you step into the opulent cabin, you are enveloped in an ambience of elegance and refinement. A chauffeur driven Mercedes makes its mark here.',
                'One of the primary reasons to choose a Mercedes S Class chauffeur in London is the unparalleled level of comfort it provides. The plush leather seats, advanced climate control, and whisper-quiet cabin ensure a serene and relaxed journey. Every detail, from the ambient lighting to the exquisite finishes, has been meticulously designed to create an atmosphere of luxury and tranquillity.',
                'Furthermore, the Mercedes S Class is equipped with a host of state-of-the-art features that enhance both convenience and safety. The latest infotainment systems, advanced driver assistance features, and intuitive controls ensure a seamless and enjoyable ride. Whether you are traveling for business or pleasure, the Mercedes S Class keeps you connected, entertained, and protected throughout your journey.',
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/mercedes-s-class-chauffeur-in-london/best-facilities-offered-with-the-mercedes-benz-s-class.jpg',
              alt: 'Mercedes S Class Hire',
              head: 'Best Facilities Offered With The Mercedes Benz S Class',
              paragraphs: [
                "When searching for luxury car hire and elite chauffeur services, look no further than RolDrive's professional chauffeurs for a world class chauffeur service. We are your comprehensive solution for airport transportation chauffeur company in London, offering VIP treatment for one-way rides, round-trip transfers, and even hourly reservations. Our elite chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive elite chauffeur services, exceptional customer service is always our top priority. All of these at affordable prices.",
              ],
            },
          ]}
        />
        <ImageTextLeft
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
        />
        <div className="h-24" />
      </main>
    </>
  );
}
