/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Luxury Car and Chauffeur Service Hire in London | Rol Drive',
    description:
      "Indulge in opulence with Rol Drive's luxury car and chauffeur service hire in London. Elevate your experience, navigate the city in style. Book your ride today!",
    keywords: [
      'chauffeur service London',
      'car service London',
      'chauffeur hire London',
      'London chauffeur service',
      'luxury chauffeur service',
    ],
    ogTitle: 'Premium Car and Chauffeur Service Hire in London | Rol Drive',
    ogDescription:
      "Discover the epitome of luxury with Rol Drive's premium car and chauffeur service hire in London. Experience excellence on every journey.",
    twTitle: 'Premium Car and Chauffeur Service Hire in London | Rol Drive',
    twDescription:
      "Discover the epitome of luxury with Rol Drive's premium car and chauffeur service hire in London. Experience excellence on every journey.",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Chauffeur Service in London',
  url: 'https://www.roldrive.com/chauffeur-service-in-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=chauffeur-service-in-london{search_term_string}',
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
          img="/images/banner/chauffeur-service-in-london.jpg"
          line1="Chauffeur Service London"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated."
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/chauffeur-service-in-london.jpg',
              alt: 'Chauffeur Service in London',
              head: 'Classy And Elegant, Chauffeur Service In London As Your Ride Around Town',
              paragraphs: [
                "RolDrive's full day chauffeur hire in London ensures a comfortable and stress-free journey. With our fleet of luxurious vehicles and highly professional chauffeurs, we offer a premium service that caters to all your transportation needs. Whether you need an airport transfer, event chauffeur service, or private car hire, our team of experts will ensure you arrive at your destination on time and in style. Our service is discreet, meaning that we prioritize your privacy and security. With RolDrive, you can relax and enjoy your journey while we take care of the rest.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/mercedes-sprinter-hire-in-london/why-choose-roldrive-mercedes-sprinter-class.jpg',
              alt: 'Mercedes Sprinter Services',
              head: "Why Choose RolDrive's Chauffeur Service In London",
              paragraphs: [
                'When it comes to professional chauffeur services in London, RolDrive stands out as a premier choice. Our chauffeur service in London offers a seamless and luxurious travel experience, tailored to meet your needs and exceed your expectations. With a team of professional chauffeurs trained to ensure a safe, comfortable, and reliable journey through the bustling streets of London, our fleet of prestigious vehicles, including the Mercedes Benz Maybach and the Rolls Royce Phantom, showcases elegance, sophistication, and modern amenities to enhance your travel experience. Whether you need airport transfers, event transportation, or city tours, our chauffeur service in London offers the utmost professionalism, punctuality, and attention to detail.',
                "We prioritize your satisfaction and strive to make every ride a memorable one. With RolDrive's personal chauffeur service in London, you can indulge in the luxury of stress-free travel, allowing you to focus on your business, leisure, or special occasion. Trust us to provide you with exceptional service that reflects the true essence of luxury transportation in the heart of London. We are a world class chauffeur service provider. Excellent service is what we deliver be it for business meetings, financial roadshows or special events. Our professional driver will get you there on time every time. This is luxury chauffeur services.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/chauffeur-service-london/image2.png',
              alt: 'Chauffeur Services',
              head: 'Best Facilities With Chauffeur Car Hire In London',
              paragraphs: [
                "When searching for premium professional chauffeurs, look no further than RolDrive. We are the best chauffeur service in London with a comprehensive solution for airport transportation, offering one-way rides, round-trip transfers, and even hourly reservations. Our luxury cars and chauffeur services go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. All of these at affordable prices. At RolDrive premium chauffeur services, exceptional customer service is always our top priority. This is what we count as a professional service. This is what we call a VIP treatment - The ultimate chauffeur experience.",
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
