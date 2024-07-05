import LoginBtn from 'components/LoginBtn';
import UserInfo from 'components/UserInfo';

export default function Page() {
  return (
    <div className="max-w-6xl min-h-screen py-20 mx-auto">
      <div className="container px-4 mx-auto">
        <UserInfo />
        <LoginBtn />
      </div>
    </div>
  );
}
