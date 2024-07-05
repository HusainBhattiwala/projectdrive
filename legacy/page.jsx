/* eslint-disable max-len */
import Testimonial from 'components/Testimonial';
import { metadata } from 'components/utils/metadata';
import BookingBannerV3 from 'components/home/BookingBannerV3';
// import BookingProcess from 'components/home/BookingProcess';
// import Services from 'components/Services';
// import CarsCat from 'components/home/CarsCat';
import ServingCountries from 'components/home/ServingCountries';
import HeroSec from 'components/home/HeroSec';
import AboutUs from 'components/home/AboutUs';
import BookRide from 'components/BookRide';
import CarClasses from 'components/CarClasses';
import ServiceCarouselV2 from 'components/ServiceCarouselV2';

export function generateMetadata() {
  return metadata({
    title: 'Rol Drive | Premium Chauffeur Services with Driver',
    description:
      "Experience luxury travel with RolDrive's premium chauffeur services. Professional drivers ensure a comfortable and stylish journey every time.",
    keywords: [
      'chauffeur service',
      'chauffeur services near me',
      'chauffeur driver',
    ],
    url: 'https://www.roldrive.com/',
    ogTitle: 'RolDrive: Luxury Chauffeur Services with Driver',
    ogDescription:
      "Experience luxury on wheels with Rol Drive's Luxury Chauffeur Services. Professional drivers, sleek vehicles, and a journey tailored to your comfort.",
    twTitle: 'RolDrive: Luxury Chauffeur Services with Driver',
    twDescription:
      "Experience luxury on wheels with Rol Drive's Luxury Chauffeur Services. Professional drivers, sleek vehicles, and a journey tailored to your comfort.",
  });
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rol Drive',
  url: 'https://www.roldrive.com/',
  logo: 'https://www.roldrive.com/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 (0) 204 592 0966',
    contactType: 'customer service',
    contactOption: 'TollFree',
    areaServed: 'GB',
    availableLanguage: 'en',
  },
  sameAs: [
    'https://www.facebook.com/RolDrive',
    'https://twitter.com/Rol_Drive',
    'https://www.instagram.com/rol_drive/',
    'https://www.linkedin.com/in/rol-drive-7a259b264/',
    'https://www.pinterest.com/roldrive/',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookingBannerV3 img="/images/banner/fireflyBanner.png" />
      <div className="sm:mt-20 mt-0">
        <BookRide />
        {/* <BookingProcess /> */}
        <CarClasses />
        {/* <Services /> */}
        <ServiceCarouselV2 />
        {/* <ServicesNew /> */}
        <div className="mt-20">
          <ServingCountries />
        </div>
        <AboutUs />
        <HeroSec />
        <Testimonial />
      </div>
    </>
  );
}
