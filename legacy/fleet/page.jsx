import FleetFullPage from 'components/FleetFullPage';
import { metadata } from 'components/utils/metadata';

export function generateMetadata() {
  return metadata({
    title: 'Book Luxury Mercedes Benz Chauffeur in London | Rol Drive',
    description:
      'Book a Mercedes Benz chauffeur in London with RolDrive or choose a ride of your choice from our fleet of luxury vehicles that you desire to travel in.',
    keywords: [
      'mercedes chauffeur London',
      'mercedes benz chauffeur in London',
    ],
    ogTitle: 'Explore London with Rol Drive Mercedes Benz Chauffeur',
    ogDescription:
      "Discover London's Majesty in Style: Embark on a Luxurious Journey with Rol Drive's Mercedes Benz Chauffeur Services.",
    twTitle: 'Explore London with Rol Drive Mercedes Benz Chauffeur',
    twDescription:
      "Discover London's Majesty in Style: Embark on a Luxurious Journey with Rol Drive's Mercedes Benz Chauffeur Services.",
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Fleet',
  url: 'https://www.roldrive.com/fleet',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.roldrive.com/search?q=fleet{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FleetFullPage />
    </>
  );
}
