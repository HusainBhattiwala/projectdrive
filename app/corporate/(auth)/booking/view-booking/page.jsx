import AuthWrap from '../../AuthWrap';
import ViewFullPage from './ViewFullPage';

export const metadata = {
  title: 'View Booking',
  description: 'View booking',
};

function page() {
  return (
    <AuthWrap>
      <ViewFullPage />
    </AuthWrap>
  );
}

export default page;
