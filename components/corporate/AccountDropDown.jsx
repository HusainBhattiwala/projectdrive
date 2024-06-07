import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext, useRef, useState } from 'react';
import Link from 'next/link';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { LoginContext } from 'context/LoginContext';
import Button from 'components/ui/Button';

function Label({ user }) {
  return (
    <div className="flex items-center gap-2 p-1 rounded-full cursor-pointer bg-pry-100 hover:bg-pry-200">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img
        src={src}
        className="w-8 h-8 rounded-full pointer-events-none select-none"
        alt="profile pic"
      /> */}
      <div className="w-8 h-8 rounded-full bg-pry-600 text-lg text-bold relative">
        <p className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-white">
          {user?.[0] || user?.userfname?.[0]}
        </p>
      </div>
      <svg
        className="w-4 h-4 text-pry-700"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}

export default function AccountDropDown() {
  const { userName } = useContext(LoginContext);
  const [showUserDropDown, setShowUserDropDown] = useState(false);
  const wholeComp = useRef();
  const router = useRouter();
  // choose one convention. Here getting userName as the user's first name only ...Subhasish

  useOnClickOutside(wholeComp, () => setShowUserDropDown(false));

  if (!userName) {
    return (
      <Button
        className="my-1 text-white btn btn-sm btn-primary"
        onClick={() => router.push('/login')}
      >
        Sign in
      </Button>
    );
  }

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className="relative"
      ref={wholeComp}
      onClick={() => setShowUserDropDown((prev) => !prev)}
    >
      <Label classname="w-[200px]" user={userName} />
      {showUserDropDown && userName && <DropdownOption user={userName} />}
    </div>
  );
}

function DropdownOption({ user }) {
  const { setShowLogin } = useContext(LoginContext);

  const logOut = () => {
    sessionStorage.clear();
    // router.refresh();
    setShowLogin(false);
    Cookies.remove('searchdata');
    Cookies.remove('fleetlist');
    signOut({
      callbackUrl: '/login',
    });
    // router.push('/login');
  };

  return (
    <div className="absolute right-0 p-4 overflow-hidden shadow-lg dropdown-content menu bg-base-100 rounded-box w-72">
      <div className="flex items-center gap-3 w-full">
        {/* <img
          src={user}
          className="w-10 h-10 rounded-full"
          alt="profile pic"
        /> */}
        <div className="w-10 h-10 rounded-full bg-pry-600 text-white text-lg text-bold relative">
          <p className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
            {user?.[0] || user?.userfname?.[0]}
          </p>
        </div>
        <div className="">
          {typeof user === 'string' ? user : user?.userfname}
          <p className="max-w-max">{user?.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="p-2 ml-10">
          <p className="">
            <Link href="/corporate/corporate-profile">My Profile</Link>
          </p>
        </div>
      </div>
      <Button onClick={logOut} className="mt-6 text-white btn btn-sm btn-primary">
        Sign out
      </Button>
    </div>
  );
}
