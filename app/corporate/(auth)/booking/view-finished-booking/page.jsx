import AuthWrap from '../../AuthWrap';
import FullPage from './FullPage';

export const metadata = {
  title: 'View Finished Booking',
  description: 'View Finished booking',
};

function page() {
  return (
    <AuthWrap>
      <FullPage />
    </AuthWrap>
  );
}

export default page;
