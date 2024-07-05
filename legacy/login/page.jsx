import { metadata } from 'components/utils/metadata';
import FullPage from './FullPage';

export function generateMetadata() {
  return metadata({
    title: 'Book Your Trip for Your Next Event | RolDrive',
    description:
        'Book your trip for your next event through RolDrive and enjoy a seamless and elegant transfer that you will remember for days to come.',
    keywords: [
      'book your trip',
    ],
    url: 'https://www.roldrive.com/login',
    ogTitle: 'Book Your Trip for Your Next Event Transfer | RolDrive',
    ogImage: 'https://www.roldrive.com/_next/image?url=%2Fimages%2Flogin%2Floginbanner.jpg&w=1920&q=100',
    ogDescription:
        'Book your trip for your next event via RolDrive and enjoy a seamless and elegant transfer that will be remembered for days to come.',
    twTitle: 'Book Your Trip for Your Next Event Journey | RolDrive',
    twDescription:
        'Book your trip for your next event via RolDrive and enjoy a seamless and elegant transfer that you will remember for days to come.',
    siteId: 'https://twitter.com/Rol_Drive',
  });
}

export default function Page() {
  return (
    <FullPage />
  );
}
