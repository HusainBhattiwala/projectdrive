/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Book VIP Chauffeur Service in Mayfair,  London | Rol Drive',
    description:
            "Indulge in luxury with Rol Drive's VIP chauffeur service in Mayfair, London. Book now for an unparalleled travel experience.",
    keywords: [
      'vip mayfair chauffeur',
      'VIP Chauffeur Service London',
    ],
    ogTitle: 'Book VIP Chauffeur in Mayfair, London with Rol Drive',
    ogDescription:
            "Experience VIP treatment with Rol Drive's chauffeur service in Mayfair, London. Book now for unparalleled luxury and convenience.",
    twTitle: 'Book VIP Chauffeur in Mayfair, London with Rol Drive',
    twDescription:
            "Experience VIP treatment with Rol Drive's chauffeur service in Mayfair, London. Book now for unparalleled luxury and convenience.",
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
          img="/images/services/vip-chauffeur-service-mayfair/banner.jpg"
          line1="VIP Chauffeur Service"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/vip-chauffeur-service-mayfair/book-vip-mayfair-chauffeur-service.jpg',
              alt: 'Mercedes S Class Transfer',
              head: 'Book VIP Mayfair Chauffeur Service',
              paragraphs: [
                "RolDrive's VIP Mayfair Chauffeur offers an exceptional service tailored for those who demand the highest standards of luxury and convenience. Specialising in providing a premium travel experience, RolDrive caters to discerning clients with a fleet of premium vehicles and professional chauffeurs dedicated to delivering personalised, discreet, and efficient service. Whether for business, leisure, or special occasions, RolDrive ensures that every journey is seamless, comfortable, and stylish, creating the essence of VIP treatment in the heart of Mayfair, Central London. This service is not just about transportation; it's about creating an exclusive and memorable experience for every passenger.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/vip-chauffeur-service-mayfair/why-choose-roldrive-vip-mayfair-chauffeur-service-london.jpg',
              alt: 'Mercedes S Class',
              head: "Why Choose RolDrive's VIP Mayfair Chauffeur Service London",
              paragraphs: [
                "Clients should choose RolDriv's VIP Mayfair Chauffeur Service in London for its exemplary standard of luxury, professionalism, and personalized attention. This service is not just about getting from point A to point B; it's about the experience en route. RolDrive's VIP Mayfair - luxury chauffeur service in London for example are not only skilled in navigating the bustling streets of London but are also trained in customer service to ensure every journey is comfortable, confidential, and catered to individual needs. The fleet of luxury vehicles offers an array of choices, each equipped with plush amenities to enhance the travel experience. Whether for business, leisure, or special occasions, RolDrive ensures punctuality, discretion, and an elite level of service, making it the ideal choice for those who demand the best in luxury ground transportation in London.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/vip-chauffeur-service-mayfair/best-facilities-offered-with-roldrive-vip-mayfair-chauffeur-service.jpg',
              alt: 'Mercedes S Class Hire',
              head: "Best Facilities Offered With RolDrive's VIP Mayfair Chauffeur Service",
              paragraphs: [
                "RolDrive, the pinnacle of luxury car hire and premium chauffeur services in London, specialises in sophisticated airport transportation. Offering tailored services for both point-to-point transfers and flexible hourly bookings, RolDrive guarantees a VIP experience. Our professional chauffeurs excel in providing a seamless, opulent journey, ready to cater to any need, from luggage assistance to accommodating special requests like child seats. Enhanced by amenities such as onboard Wi-Fi and climate control, every journey with RolDrive's London VIP Mayfair chauffeur service ensures comfort and connectivity. Central to RolDrive's ethos is an unwavering commitment to superior customer service, transforming each trip into an unforgettable experience, all at competitive prices.",
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
