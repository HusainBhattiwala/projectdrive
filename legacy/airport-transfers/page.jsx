import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
import AirportsAround from 'components/AirportsAround';
import FourFeatures from 'components/shared/FourFeatures';
import ImageText from 'components/shared/ImageText';

export function generateMetadata() {
  return metadata({
    title: 'Book Your Best Airport Transfers | Rol Drive',
    description:
      'Seamless journeys start with Rol Drive. Reserve your finest airport transfers for a smooth, reliable, and comfortable travel experience. Book now!',
    keywords: [
      'airport transfer',
      'airport transfers',
      'best airport transfers',
    ],
    url: 'https://www.roldrive.com/airport-transfers',
    ogTitle: 'Book Premier Airport Transfers - Rol Drive',
    ogDescription:
      "Elevate your travel with Rol Drive's premier airport transfers. Experience luxury, punctuality, and comfort. Book now for a seamless journey!",
    twTitle: 'Book Premier Airport Transfers - Rol Drive',
    twDescription:
      "Elevate your travel with Rol Drive's premier airport transfers. Experience luxury, punctuality, and comfort. Book now for a seamless journey!",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Airport Transfers',
  url: 'https://www.roldrive.com/airport-transfers',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      ' https://www.roldrive.com/search?q=airport-transfer{search_term_string}',
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
          img="/images/banner/airport-transfer.jpg"
          line1="Airport Transfers"
          line2=" "
          line3="Book your premium chauffeur ride today. Arrive in style, stress-free and rejuvenated."
        />
        <FourFeatures />
        <AirportsAround />
        <ImageText
          img1="/images/services/your-best-airport-transfer-partner.jpg"
          img1Alt="Best Airport Transfer"
          head1="What is an Airport Transfer Service?"
          s1p1="At RolDrive, our foremost objective is to provide an exceptional airport transfer service that consistently prioritises our customers' convenience, safety, and satisfaction. An airport transfer service is a transfer type where our chauffeur service picks you up from your desired location and drops you off at the airport or vice versa."
          subHead11="How Does RolDrive Help Me With An Airport Transfer?"
          s1p2="We understand that travelling can be exhausting, and navigating through congested city streets during peak hours can often be a daunting and tiresome task. The added stress of waiting for airport taxis or trying to arrange last-minute transportation can make reaching your flight or getting to your destination after a long journey even more challenging. With this in mind, we have developed a comprehensive and bespoke service to alleviate these concerns and cater to the unique needs of our esteemed clientele in the form of reliable airport transfers."
          img2="/images/services/airport-transfers/image1.png"
          img2Alt="Airport Transfer"
          head2="Stress-free And Relaxing Airport Transfers"
          s2p1="To ensure a seamless and stress-free travel experience, we offer prompt airport transfer car hire services for all major airports. Our trained and professional chauffeurs will provide a meet and greet service, wait for you at the airport for your private transfers, assist with your luggage, and escort you to your luxury vehicle. They will then transport you to your desired destination with the utmost care and expertise be it the office entrance, home or hotel door."
          s2p2="We take immense pride in our selection of luxurious, top-tier chauffeur-driven airport shuttle vehicles available for booking an airport transfer. Our door to door service fleet includes the latest models of executive sedans, limousines, and high-end 4x4s, all impeccably maintained to guarantee a comfortable and sophisticated journey. Each airport shuttle vehicle is equipped with state-of-the-art amenities, such as plush leather seating, climate control, Wi-Fi connectivity, and refreshments, to ensure your complete satisfaction."
          // s2p3="Our skilled drivers are not only familiar with the local area for their shuttle transfers, but they also possess extensive knowledge of alternative routes and traffic patterns. This expertise allows them to bypass congestion and ensure your timely arrival at your destination, regardless of traffic conditions. Moreover, our esteemed airport transfer chauffeurs will cater to any specific requirements or requests you may have during the journey, such as preferred routes, destinations, rest stops, or assistance with luggage. They will also manage parking arrangements, so you can focus on your business or personal needs without any additional concerns."
          img3="/images/services/airport-transfers/image2.png"
          img3Alt="Airport Transfers"
          head3="How Does It Work?"
          s3p1="The booking process has been kept as simple as possible for our clients so they can book their chauffeur without any hassle. Once you reach the booking page, simply put in the pick up location, the pick up time and the destination you wish to get to along with the number of passengers and the vehicle of your choice. That's it!"
          s3p2="Now that the booking is complete, a mail will be sent to you confirming the booking process. Expect the chauffeur to reach you at the mentioned pick up time; and to offer great service, our chauffeurs will promptly inform you of their arrival once they reach."
          img4="/images/services/airport-transfers/image3.png"
          img4Alt="Airport Transfers Services"
          head4="What Does RolDrive's Fleet Consist Of?"
          s4p1="One of the key aspects that set RolDrive apart from other chauffeur services is our impressive and diverse fleet of luxury vehicles. Meticulously chosen to provide clients with the utmost comfort and style, RolDrive's fleet ensures that every journey is a lavish and unforgettable experience."
          subHead41="Naming a few of the vehicles RolDrive offers:"
          s4p2="Mercedes-Benz S-Class: The epitome of luxury, this iconic model offers unparalleled comfort and elegance, making it the ideal choice for discerning clients. Packed with features such as advanced driver assistance systems and a high-end infotainment system. The S-Class is considered a flagship model for the Mercedes-Benz brand."
          s4p3="BMW 7 Series: This executive sedan combines performance, style, and advanced technology, providing a smooth and enjoyable ride. Regarded as one of the best luxury vehicles in the first-class market."
          s4p4="Audi A8: Known for its innovative design and engineering, Audi vehicles offer a perfect blend of sophistication and performance. The Audi A8 is considered the brand's flagship model. A car perfect for first-class requirements."
        />
      </main>
    </>
  );
}
