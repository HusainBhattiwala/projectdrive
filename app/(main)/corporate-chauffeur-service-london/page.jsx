/* eslint-disable max-len */
import FourFeatures from 'components/shared/FourFeatures';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import ImageTextRight from 'components/shared/ImageTextRight';
import ImageTextLeft from 'components/shared/ImageTextLeft';

export function generateMetadata() {
  return metadata({
    title: 'Hire Luxury Corporate Chauffeur Service in London | Rol Drive',
    description:
      'RolDrive’s Luxury corporate chauffeur service hire in London ensures you reach your destination looking immaculate and on time.',
    keywords: [
      'corporate chauffeur service London',
      'corporate chauffeur hire',
    ],
    ogTitle: 'Book Corporate chauffeur service hire in London | Rol Drive',
    ogDescription:
      "Premium Rol Drive's corporate chauffeur service in London. Elevate your business travel. Book your ride now!",
    twTitle: 'Book Corporate chauffeur service hire in London | Rol Drive',
    twDescription:
      "Premium Rol Drive's corporate chauffeur service in London. Elevate your business travel. Book your ride now!",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Corporate Chauffeur Service London',
  url: 'https://www.roldrive.com/corporate-chauffeur-service-london',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=corporate-chauffeur-service-london{search_term_string}',
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
          img="/images/banner/corporate-chauffeur-service-london-banner.jpg"
          line1="Corporate Chauffeur Service London"
          line2=" "
          line3="Book your premium chauffeur ride today.
       Arrive in style, stress-free and rejuvenated.
       "
        />
        <FourFeatures />

        <ImageTextRight
          sections={[
            {
              img: '/images/services/corporate-chauffeur-service-london/image1.jpg',
              alt: 'Corporate Travel',
              head: 'Elevate Your Travel Experience with Our Corporate Chauffeur Service London',
              paragraphs: [
                'Experience the pinnacle of luxury as a corporate traveller with our exclusive chauffeur service in London. Our professional chauffeurs are meticulously trained to provide a seamless and prestigious transportation solution for your business needs. Arrive at meetings, conferences, and events in style and comfort, while our fleet of premium vehicles showcases sophistication and elegance. Trust us to enhance your corporate travel experience with our exceptional chauffeur service in the vibrant city of London.',
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/corporate-chauffeur-service-london/image2.jpg',
              alt: 'Corporate Transfer in London',
              head: "Why Choose RolDrive's Corporate Chauffeur Service London?",
              paragraphs: [
                "When it comes to corporate car hire London, RolDrive's Corporate Chauffeur Service stands out as the ultimate choice. With meticulous attention to detail and a commitment to excellence, we ensure that every aspect of your corporate transportation needs is taken care of. Our team of highly professional and experienced chauffeurs is dedicated to providing a seamless and luxurious experience for our clients. From the moment you step into one of our pristine vehicles, you are greeted with the utmost professionalism and courtesy.",
                "What sets our corporate car service UK apart is our unwavering commitment to punctuality. We understand the importance of time in the corporate world, and our chauffeurs are trained to navigate London's busy streets and traffic to ensure you arrive at your destination on time, every time. Our fleet of luxury vehicles, including prestigious brands such as Mercedes-Benz, offers a comfortable and stylish environment for you to relax and prepare for your meetings or events.",
                "We recognize that corporate clients have unique requirements, which is why we offer a range of customizable services to cater to your specific needs. Whether it's airport transfers, business meetings, corporate events, or roadshows, our corporate chauffeurs are well-versed in providing a seamless experience tailored to your schedule and preferences. We understand the importance of confidentiality and professionalism in the corporate world, and our chauffeurs are trained to uphold the highest standards of discretion and integrity.",
              ],
            },
          ]}
        />
        <ImageTextRight
          sections={[
            {
              img: '/images/services/corporate-chauffeur-service-london/image3.jpg',
              alt: 'Corporate Chauffeur Service in London',
              head: 'Best Facilities Offered Through Corporate Chauffeur Service London',
              paragraphs: [
                "When searching for a Corporate Chauffeur Service London, look no further than RolDrive's professional chauffeurs for a world class chauffeur service. We are your comprehensive solution for airport transportation chauffeur company in London, offering VIP treatment for one-way rides, round-trip transfers, and even hourly reservations. Our premium chauffeurs go above and beyond to ensure a seamless and comfortable journey, from assisting with luggage to happily guiding you to any specific locations you may need to reach. We even have room for a children's seat or extra luggage if you need it or something as simple as Wifi. At RolDrive elite chauffeur services, exceptional customer service is always our top priority. All of these at affordable prices.",
              ],
            },
          ]}
        />
        <ImageTextLeft
          sections={[
            {
              img: '/images/services/corporate-chauffeur-service-london/image4.jpg',
              alt: 'Corporate Transfers',
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
