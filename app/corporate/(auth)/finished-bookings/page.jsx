/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script';
import { metadata } from 'components/utils/metadata';
import FinishedSummary from 'components/corporate/FinishedBookingManagement/FinishedSummary';
import AuthWrap from '../AuthWrap';

export function generateMetadata() {
  return metadata({
    title: 'Finished Bookings',
    description:
      'Contact us to book an airport transfers chauffeur London. We are your trusted ground transfer partners.',
  });
}

export default function Page() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"
      />
      <AuthWrap>
        <FinishedSummary />
      </AuthWrap>

    </>
  );
}
