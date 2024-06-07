/* eslint-disable max-len */
// import Booking from 'components/Booking/Booking';
// import { BookingProvider } from 'context/BookingContext';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import FourFeatures from 'components/shared/FourFeatures';
// import BannerBottom from 'components/BannerBottom';
import { metadata } from 'components/utils/metadata';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';
// import BannerTemp from 'components/BannerTemp';

export function generateMetadata() {
  return metadata({
    title: 'Book Your Event Chauffeur Services in London | Rol Drive',
    description:
      "Make your event memorable with Rol Drive's premier chauffeur services in London. Experience elegance, reliability, and sophistication. Book now!",
    keywords: ['event chauffeur service in London', 'event chauffeur services'],
    ogTitle: 'Event Chauffeur Services in London | Rol Drive',
    ogDescription:
      "Elevate your event experience with Rol Drive's premier chauffeur services in London. Seamlessly blending luxury and reliability.",
    twTitle: 'Event Chauffeur Services in London | Rol Drive',
    twDescription:
      "Elevate your event experience with Rol Drive's premier chauffeur services in London. Seamlessly blending luxury and reliability.",
  });
}

const jsonLd = {
  '@type': 'WebSite',
  name: 'Event Chauffeur Service in London',
  url: 'https://www.roldrive.com/event-chauffeur-service-in-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=event-chauffeur-service-in-london{search_term_string}',
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
        {/* <BookingProvider>
        <Booking bgimg="/images/others/road-show-roldrive.jpg" alt="Road Show RolDrive" />
      </BookingProvider> */}
        {/* <BannerTemp bgimg="/images/others/road-show-roldrive.jpg" />
      <BannerBottom /> */}
        {/* <BookingBannerV3 img="/images/banner/event-chauffeur-service-in-london.jpg" /> */}
        <BookingBannerV3
          img="/images/banner/event-chauffeur-service-in-london.png"
          line1="Event Chauffeur Service In London"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/road-show-transfers.jpg',
              alt: 'Event Transfer',
              head: 'Dazzling Vehicles With Our Event Chauffeur Service In London',
              paragraphs: [
                'RolDrive offers an Event Chauffeur Service in London for a wide range of events, from corporate conferences to weddings and other special occasions. Our professional and reliable drivers will ensure that you arrive at your event on time, in comfort and style. Whether you require a single vehicle or a fleet of cars, we can cater to your needs with our luxury fleet of vehicles which includes Mercedes Benz to Rolls Royce. Our drivers are experienced in navigating the city and can provide recommendations on the best routes to avoid traffic and arrive at your destination promptly. With our Event Chauffeur Service in London, you can sit back, relax and enjoy your event knowing that you are in safe hands.',
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/event-chauffeur-service/image2.jpg',
              alt: 'Event Services',
              head: "Why Choose RolDrive's Event Chauffeur Service In London?",
              paragraphs: [
                "When it comes to event transportation in London, RolDrive's luxury event chauffeur services are the perfect choice. Our dedicated team of professional event chauffeurs understand the importance of punctuality, reliability, and attention to detail for any event. Whether it's a corporate gathering, a wedding, or a social gala, our event chauffeur service ensures a seamless and stylish transportation experience. We have a fleet of luxurious vehicles, including Mercedes-Benz models, that exude elegance and sophistication. Our London chauffeur service is experienced in navigating the busy streets of London, ensuring that you and your guests arrive at your event in style and on time. With RolDrive's event chauffeur service in London, you can relax and enjoy the journey in our luxury cars, knowing that you are in the hands of professionals who are committed to delivering exceptional service. From the moment you step into our meticulously maintained vehicles, you will experience the epitome of luxury and comfort. Trust us to make your event transportation a memorable and hassle-free experience.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/event-chauffeur-service/image2.jpg',
              alt: 'Event Services',
              head: 'Best Facilities With Event Chauffeur Services',
              paragraphs: [
                "When searching for premium chauffeur services for special events, look no further than RolDrive. We are your comprehensive solution for airport transportation, offering one-way rides, round-trip transfers, and even hourly reservations. Our premium chauffeur driven cars and drivers go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive premium chauffeur services, exceptional customer service is always our top priority. This is what we call a VIP treatment and a stress free journey. We are redefining the event chauffeur industry.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/event-chauffeur-service/image4.jpg',
              alt: ' Event Chauffeur Service',
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
