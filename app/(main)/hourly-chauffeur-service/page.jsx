/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Book Your Hourly Chauffeur Service with Comfort | Rol Drive',
    description:
      'Elevate your day with our hourly chauffeur service. Enjoy flexibility, comfort, and convenience on your terms. Your journey, your schedule. Book now!',
    keywords: ['hourly chauffeur service'],
    ogTitle: 'Book Premium Hourly Chauffeur Service | Rol Drive',
    ogDescription:
      "Experience luxury at your pace. Book Rol Drive's premium hourly chauffeur service for a tailored, comfortable, and stylish journey.",
    twTitle: 'Book Premium Hourly Chauffeur Service | Rol Drive',
    twDescription:
      "Experience luxury at your pace. Book Rol Drive's premium hourly chauffeur service for a tailored, comfortable, and stylish journey.",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Hourly Chauffeur Service',
  url: 'https://www.roldrive.com/hourly-chauffeur-service',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=hourly-chauffeur-service{search_term_string}',
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
          img="/images/banner/hourly-chauffeur-service.jpg"
          line1="Hourly Chauffeur Service"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated."
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/hourly-chauffeur-service.jpg',
              alt: 'Hourly Chauffeur Transfers',
              head: 'Book An Hourly Chauffeur Service And Further Customize Your Requirements',
              paragraphs: [
                "Hiring RolDrive on an hourly basis provides you with the flexibility to tailor your transportation needs according to your schedule. Whether you need to attend multiple meetings or want to explore the city's attractions, our professional private chauffeur service can cater to all your transportation requirements. We offer a large fleet of vehicles to choose from, and our experienced chauffeurs will ensure that you have a comfortable and hassle-free journey. So, if you are looking for a reliable and professional hourly chauffeur service in London, RolDrive is here to help you with your transportation needs. Contact us today to learn more about our hourly chauffeur driven service.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/hourly-chauffeur-service/image1.png',
              alt: 'Hourly Transfers',
              head: "Why Choose RolDrive's Hourly Chauffeur Services?",
              paragraphs: [
                "When it comes to choosing a personal chauffeur driven service, RolDrive's hourly bookings and hourly hire chauffeur services offer a host of advantages that make them the ideal choice for various occasions. With our hourly hire luxury chauffeur service, you have the flexibility and freedom to customize your transportation according to your specific needs. Whether you have multiple business meetings throughout the day, wish to explore the city at your own pace, or require a dedicated chauffeur for a special event, our hourly luxury chauffeur driven car service ensures you have a professional driver at your disposal for the duration you need. Our experienced chauffeurs are well-versed in navigating London's roads and are committed to providing a smooth and efficient journey. With a fleet of luxurious vehicles, including top-of-the-line models on hourly booking, you can travel in style and comfort. Additionally, our hourly chauffeur driven services offer peace of mind, as you have a dedicated driver who is familiar with your preferences and requirements. With RolDrive's hourly rate chauffeur services, you as tourists or corporate clients can enjoy the convenience, flexibility, and personalized attention that sets us apart from the rest.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/hourly-chauffeur-service/image2.png',
              alt: 'Hourly Chauffeur Service',
              head: 'Best Facilities and Luxury Car Hire',
              paragraphs: [
                "When searching for premium hourly rate chauffeur services, look no further than RolDrive. With our bespoke service, we are your comprehensive luxury chauffeur service solution for airport transportation, offering one-way rides, round-trip transfers, and hourly reservations. Our premium chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to your final destination. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive premium chauffeur services, exceptional customer service is always our top priority. All of these at very affordable prices.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/hourly-chauffeur-service/image3.png',
              alt: 'Hourly Chauffeur',
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
