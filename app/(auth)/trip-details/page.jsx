import Link from 'next/link';
import Breadcrumbs from 'components/ui/Breadcrumbs';
import FormUi from './FormUi';
import PageName from './PageName';

export const metadata = {
  title: 'Trip Details',
  description: 'Welcome to roldrive :)',
};

export default function TripDetails() {
  // export default function TripDetails({ searchParams }) {
  // console.log('searchParams from server', searchParams);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <Breadcrumbs>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="flex-none">
              <Link href="/booking-management">
                <span className="px-1">/</span>
                Upcoming Bookings
              </Link>
            </li>
            <li className="flex-none">
              <Link href="/trip-details">
                <span className="px-1 text-right">/</span>
                Your Trip Details
              </Link>
            </li>
          </Breadcrumbs>
          <PageName />
        </div>

        <FormUi />
      </div>
    </div>
  );
}
