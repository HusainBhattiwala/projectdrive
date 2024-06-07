import FullPage from 'components/ProfileManagement/FullPage';
import AuthWrap from '../AuthWrap';

export const metadata = {
  title: 'Profile Management',
  description: 'Welcome to roldrive :)',
};
function Page() {
  return (
    <AuthWrap>
      <FullPage />
    </AuthWrap>
  );
}

export default Page;
