/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Executive Car Hire and Chauffeur Service in London | Rol Drive',
    description:
      "Discover unrivaled elegance in London with Rol Drive's Executive Car Hire and Chauffeur Service. Elevate your journey with seamless luxury and sophistication.",
    keywords: ['executive chauffeur service London', 'executive car hire'],
    ogTitle: 'Executive Car Hire and Chauffeur Service London by Rol Drive',
    ogDescription:
      "Experience the epitome of sophistication with Rol Drive's Executive Car Hire and Chauffeur Service in London. Elevate your journey with style and precision.",
    twTitle: 'Executive Car Hire and Chauffeur Service London by Rol Drive',
    twDescription:
      "Experience the epitome of sophistication with Rol Drive's Executive Car Hire and Chauffeur Service in London. Elevate your journey with style and precision.",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Executive Chauffeur Service London',
  url: 'https://www.roldrive.com/executive-chauffeur-service-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=executive-chauffeur-service-london{search_term_string}',
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
          img="/images/banner/executive-chauffeur-service-london-banner.jpg"
          line1="Executive Chauffeur Service London"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/executive-chauffeur-service-london/image1.jpg',
              alt: 'Executive Chauffeur Transfers',
              head: 'Experience Unparalleled Luxury and Professionalism with Our Executive Chauffeur Service London',
              paragraphs: [
                'When it comes to executive chauffeur cars London, our Executive Chauffeur Service London sets the standard for luxury and professionalism. Our highly trained and experienced chauffeurs ensure a seamless and comfortable journey in our fleet of top-of-the-line vehicles. With an unwavering commitment to punctuality and attention to detail, we deliver an exceptional experience that exceeds expectations. Trust us to provide the utmost in style, comfort, and reliability for your executive transportation needs.',
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/executive-chauffeur-service-london/image2.jpg',
              alt: 'Executive Chauffeur Hire',
              head: "Why Choose RolDrive's Executive Chauffeur Service London?",
              paragraphs: [
                'When it comes to Executive car hire London, our Executive Chauffeur Service stands out as the epitome of luxury, professionalism, and unparalleled service. With meticulous attention to detail and an unwavering commitment to excellence, we offer an exceptional chauffeur service that caters to the unique needs of our esteemed clientele.',
                "We understand the demands and expectations of the executive world. Our team of highly skilled and experienced chauffeurs are handpicked for their professionalism, discretion, and extensive knowledge of London's roads. They are meticulously trained to provide a seamless and comfortable journey, ensuring that every aspect of your travel experience is taken care of.",
                'Our fleet of executive vehicles is carefully selected to offer the highest level of comfort, style, and safety for our executive chauffeur service UK. From luxurious sedans to spacious SUVs, our vehicles are equipped with the latest amenities to enhance your travel experience. Whether you need to attend a business meeting, corporate event, or airport transfer, our chauffeurs will ensure that you arrive in style and on time.',
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/executive-chauffeur-service-london/image3.jpg',
              alt: 'Executive Chauffeur Services',
              head: 'Best Facilities Offered Through Executive Chauffeur Service London',
              paragraphs: [
                "When searching for an executive chauffeur service London, look no further than RolDrive's professional chauffeurs for a world class chauffeur service. We are your comprehensive solution for airport transportation chauffeur company in London, offering VIP treatment for one-way rides, round-trip transfers, and even hourly reservations. Our premium chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive elite chauffeur services, exceptional customer service is always our top priority. All of these at affordable prices.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/executive-chauffeur-service-london/image4.jpg',
              alt: 'Executive Transfer London',
              head: 'Booking Procedure',
              paragraphs: [
                'RolDrive has kept the booking process simple. All one needs to do for the best chauffeur service is enter the booking details such as the name of the customer along with the date and location. Following this is choosing a vehicle that one desires to travel in. With these details filled in and once confirmed, the client is guided to the payment gateway to finish the booking process.',
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
