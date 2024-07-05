/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Hire Luxury Full Day Chauffeur Car | Rol Drive',
    description:
      "Experience luxury with Rol Drive's full-day chauffeur car hire service. Enjoy premium comfort and convenience on your journeys.",
    keywords: [
      'full day chauffeur hire',
      ' luxury car hire chauffeur',
    ],
    ogTitle:
      'Hire a Luxury Chauffeur Car for the Day with Rol Drive',
    ogDescription:
      "Experience unparalleled luxury with Rol Drive's full-day chauffeur service. Sit back, relax, and enjoy the ride in style.",
    twTitle:
      'Hire a Luxury Chauffeur Car for the Day with Rol Drive',
    twDescription:
      "Experience unparalleled luxury with Rol Drive's full-day chauffeur service. Sit back, relax, and enjoy the ride in style.",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Private Chauffeur Service in London',
  url: 'https://www.roldrive.com/private-chauffeur-service-in-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=private-chauffeur-service-in-london{search_term_string}',
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
          img="/images/banner/private-chauffeur-service-in-london.jpg"
          line1="FULL DAY CHAUFFEUR HIRE"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated."
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/private-chauffeur-service-in-london.jpg',
              alt: 'Private Chauffeur Services',
              head: 'Discreet And Private Full Day Chauffeur Hire',
              paragraphs: [
                "Choosing RolDrive for your full day chauffeur hire service in London ensures a journey marked by luxury, privacy, and unrivalled professionalism. With a focus on client comfort and safety, RolDrive's experienced chauffeurs deliver smooth, stress-free travel in a selection of premium vehicles, from the elegant Mercedes Benz S Class to the opulent Rolls Royce Phantom. This service isn't just about getting from point A to point B; it's about providing a tailored, luxurious travel experience, with chauffeurs who are not only adept at navigation but also knowledgeable about London, enhancing your journey with personalized attention. RolDrive's full day chauffeur hire service commits to the highest standards, offering a serene and dignified travel environment, allowing you to savour the luxury of a private full day chauffeur hire service, free from the inconveniences of driving and parking in the bustling city of London.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/private-chauffeur-service/image1.png',
              alt: 'Private Chauffeur Transfers',
              head: "Why Choose RolDrive's Full Day Chauffeur Hire",
              paragraphs: [
                "Choosing RolDrive's full day chauffeur hire services offers a multitude of benefits and ensures a truly exceptional transportation experience. Firstly, our chauffeurs are highly trained and professional, guaranteeing a safe and comfortable journey. They possess extensive knowledge of London's roads and traffic patterns, allowing for efficient and timely transfers. Secondly, our extensive fleet of luxury chauffeur service vehicles, includes prestigious brands like Mercedes-Benz, providing the ultimate in style and sophistication. Thirdly, with plush interiors, advanced amenities, and meticulous maintenance, our luxury chauffeur service vehicles ensure a luxurious and enjoyable ride.",
                "Additionally, our commitment to exceptional customer service ensures that your needs and preferences are met with utmost attention and care. From personalised assistance to flexible scheduling, we strive to exceed your expectations and create a tailored experience for your full day chauffeur hire requirements. Lastly, our 24/7 customer support team is always available to address any inquiries or concerns, providing VIP treatment with peace of mind throughout your journey. When you choose RolDrive's full day chauffeur hire service, you can expect the ultimate in professionalism, luxury, and convenience.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/private-chauffeur-service/image2.jpg',
              alt: 'Private Transfers',
              head: 'Best Facilities And Professional Service',
              paragraphs: [
                "When searching for full day chauffeur hire services, look no further than RolDrive's professional chauffeurs for a world class chauffeur service. We are your comprehensive solution for airport transportation chauffeur company in London, offering VIP treatment for one-way rides, round-trip transfers, and even hourly reservations. Our premium chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive’s full day chauffeur hire services, exceptional customer service is always our top priority. All of these at affordable prices.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/private-chauffeur-service/image3.png',
              alt: 'Private Chauffeur',
              head: 'Booking Procedure',
              paragraphs: [
                'RolDrive has kept the booking process simple. All one needs to do for the best full day chauffeur hire service is enter the booking details such as the name of the customer along with the date and location. Following this is choosing a vehicle that one desires to travel in. With these details filled in and once confirmed, the client is guided to the payment gateway to finish the booking process.',
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
