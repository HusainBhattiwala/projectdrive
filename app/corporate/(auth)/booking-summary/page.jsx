import { metadata } from 'components/utils/metadata';
import SummaryPage from 'components/corporate/BookingManagement/SummaryPage';
import AuthWrap from '../AuthWrap';

export function generateMetadata() {
  return metadata({
    title: 'Booking Summary | Dashboard',
    description:
        'Contact us to book an airport transfers chauffeur London. We are your trusted ground transfer partners.',
  });
}

export default function Index() {
  return (
    <AuthWrap>
      <SummaryPage />
    </AuthWrap>
  );
}
