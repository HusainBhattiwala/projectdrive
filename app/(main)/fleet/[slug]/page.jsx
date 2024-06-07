import FleetFullPage from 'components/FleetFullPage';
import { metadata } from 'components/utils/metadata';
import { notFound } from 'next/navigation';

export function generateMetadata() {
  return metadata({
    title: 'Mercedes Benz Chauffeur in London – RolDrive',
    description:
      'Book a Mercedes Benz chauffeur in London or choose a vehicle of your choice from our fleet of premium vehicles that you desire to travel in.',
    keywords: [
      'mercedes chauffeur London',
      'mercedes benz chauffeur in London',
    ],
    url: 'https://www.roldrive.com/fleet',
    ogTitle: 'Looking To Book A Particular Vehicle For The Day In London?',
    ogDescription:
      'Follow us at RolDrive to know more news about Chauffeur Service.',
    ogImage: 'https://www.roldrive.com/images/cars/BMW5.png',
    twTitle: 'Looking To Book A Mercedes Benz Chauffeur In London?',
    twDescription:
      'RolDrive – your one-stop portal for booking a mercedes chauffeur London of your choice from our fleet of cars.',
    siteId: 'https://twitter.com/Rol_Drive',
  });
}

const allowedVehicles = [
  'mpv',
  'electric',
  'luxury',
  'first',
  'sprinter',
  'business',
  'suv',
];

export default function page({ params }) {
  if (allowedVehicles.includes(params.slug)) {
    return <FleetFullPage param={params.slug} />;
  }
  notFound();
  return <div />;
}
