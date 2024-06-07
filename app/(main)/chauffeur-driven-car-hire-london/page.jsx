/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Hire a Personal Chauffeur Driven Car in London | Rol Drive',
    description:
      'Hire a luxury personal chauffeur driven car with Rol Drive in London for a seamless, stylish, and stress-free journey. Book your elegance now!',
    keywords: ['hire a personal chauffeur', 'chauffeur driven car hire London'],
    ogTitle: 'Personal Chauffeur Driven Car Hire with Rol Drive in London',
    ogDescription:
      "Elevate your London experience with Rol Drive's personal chauffeur-driven car hire. Seamlessly blend luxury and convenience for a stylish journey.",
    twTitle: 'RolDrive | Chauffeur driven car hire in London',
    twDescription:
      "Elevate your London experience with Rol Drive's personal chauffeur-driven car hire. Seamlessly blend luxury and convenience for a stylish journey.",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Chauffeur Driven Car Hire London',
  url: 'https://www.roldrive.com/chauffeur-driven-car-hire-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=chauffeur-driven-car-hire-london{search_term_string}',
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
          line1="Professional Chauffeur Services"
          line2=" "
          line3="Book your premium chauffeur ride today.Arrive in style, stress-free and rejuvenated."
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/chauffeur-driven-service-london/image1.jpg',
              alt: 'Chauffeur Driven Service',
              head: 'Luxury and Convenience with Chauffeur Driven Car Hire London Services',
              paragraphs: [
                "Discover the ultimate blend of luxury, comfort, and convenience with our chauffeur driven car hire London services. Whether you're visiting for business or pleasure, our professional chauffeurs and an exquisite fleet of vehicles ensure a memorable and stress-free journey. From airport transfers to city tours, trust us to provide a seamless experience, allowing you to relax and enjoy the sights while we take care of the driving. Indulge in the sophistication of chauffeur driven car hire London services and elevate your travel experience in London.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/chauffeur-driven-service-london/image2.jpg',
              alt: 'Chauffeur Driven Car',
              head: "Why Choose RolDrive's Chauffeur Driven Car Hire London Services?",
              paragraphs: [
                "Experience the epitome of luxury and convenience with RolDrive's Chauffeur Car Hire London service. Our commitment to excellence ensures that every aspect of your journey is meticulously taken care of, allowing you to relax and enjoy the ride. From airport transfers to business meetings and special events, our professional chauffeurs provide a seamless and personalized experience tailored to your needs.",
                'When you choose RolDrive, you can expect a fleet of meticulously maintained, high-end vehicles that exude elegance and style as Chauffeur Service UK. Whether you prefer the timeless sophistication of a Mercedes Benz or the sleekness of a BMW, our diverse fleet offers a range of options to suit your preferences. Each vehicle is equipped with the latest technology and amenities, ensuring a comfortable and luxurious travel experience.',
                "Our chauffeurs are more than just drivers; they are experienced professionals who understand the importance of providing exceptional service. With their extensive knowledge of London's roads and attractions, they will navigate the city with precision, taking the most efficient routes to ensure you reach your destination on time. Our chauffeurs are not only skilled drivers but also courteous and attentive professionals who prioritize your safety and comfort.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/chauffeur-driven-service-london/image3.jpg',
              alt: 'Chauffeur Driven Service in London',
              head: 'Best Facilities Offered Through Chauffeur Driven Car Hire London',
              paragraphs: [
                "When searching for a Chauffeur Driven Car Hire London, look no further than RolDrive's professional chauffeurs for a world class chauffeur service. We are your comprehensive solution for airport transportation chauffeur company in London, offering VIP treatment for one-way rides, round-trip transfers, and even hourly reservations. Our premium chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive elite chauffeur services, exceptional customer service is always our top priority. All of these at affordable prices.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/chauffeur-driven-service-london/image4.jpg',
              alt: 'Chauffeur Driven London',
              head: 'Booking Procedure',
              paragraphs: [
                'RolDrive has kept the booking process simple. All one needs to do for the best chauffeur service is enter the booking details such as the name of the customer along with the date and location. Following this is choosing a vehicle that one desires to travel in. With these details filled in and once confirmed, the client is guided to the payment gateway to finish the booking process.',
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
