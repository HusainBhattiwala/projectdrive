import React from 'react';
import FullPage from './FullPage';
import AuthWrap from '../../AuthWrap';

export const metadata = {
  title: 'Booking',
  description: 'Add booking',
};

function page() {
  return (
    <AuthWrap>
      <FullPage />
    </AuthWrap>
  );
}

export default page;
