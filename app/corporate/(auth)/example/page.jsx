import FullPage from './FullPage';
import AuthWrap from '../AuthWrap';

export const metadata = {
  title: 'example',
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
