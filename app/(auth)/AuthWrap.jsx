/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { LoginContext } from 'context/LoginContext';
import { Pic } from 'components/ui/Pic';
import usePageBottom from 'hooks/usePageBottom';
import BottomNav from 'components/BookingManagement/BottomNav';
import PortalModal from 'components/ui/PortalModal';
import GoogleMobileNumber from 'components/shared/GoogleMobileNumber';
import api from 'components/utils/api';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';

function AuthWrap({
  children,
  setShowNewBooking = () => {},
  showNewBooking = false,
}) {
  const { setShowLogin, userName, setUserName } = useContext(LoginContext);
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const { data: session, status, update } = useSession();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (status === 'loading') return;

    if (!token || token === 'null' || token === 'undefined') {
      console.log(session);
      if (session?.user?.email && session?.user?.mobile) {
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            userfname: session?.user?.name?.split(' ')?.[0],
            userlname: session?.user?.name?.split(' ')?.[1],
            useremailid: session?.user?.email,
            usermobileno: session?.user?.mobile,
            usercountrycode: session?.user?.countryCode,
          }),
        );
        sessionStorage.setItem('token', session?.user?.rolDriveToken);
        Cookies.set('authtype', 'GOOGLE');
        setShowLogin(!!session?.user?.rolDriveToken);
        setUserName({
          userfname: session?.user?.name?.split(' ')?.[0],
          userlname: session?.user?.name?.split(' ')?.[1],
        });
      } else if (session?.user?.email && !session?.user?.usermobileno) {
        setModalOpen(true);
      } else {
        router.push('');
      }
    } else {
      const user = JSON.parse(sessionStorage.getItem('user'));
      setUserName({
        userfname: user.userfname,
        userlname: user.userlname,
      });
    }
    // else if (session?.user?.email && token) {
    //   sessionStorage.setItem(
    //     'user',
    //     JSON.stringify({
    //       userfname: session?.user?.name?.split(' ')?.[0],
    //       userlname: session?.user?.name?.split(' ')?.[1],
    //       useremailid: session?.user?.email,
    //       usermobileno: session?.user?.mobile,
    //       usercountrycode: session?.user?.countryCode,
    //     }),
    //   );
    //   sessionStorage.setItem('token', session?.user?.rolDriveToken);
    //   Cookies.set('authtype', 'GOOGLE');
    //   setShowLogin(!!session?.user?.rolDriveToken);
    //   setUserName({
    //     userfname: session?.user?.name?.split(' ')?.[0],
    //     userlname: session?.user?.name?.split(' ')?.[1],
    //   });
    // } else {
    //   const user = JSON.parse(sessionStorage.getItem('user'));
    //   setUserName({
    //     userfname: user.userfname,
    //     userlname: user.userlname,
    //   });
    // }
    router.refresh();
  }, [router, session, setShowLogin, setUserName, status]);
  const [showSidebar, setShowSidebar] = useState(false);

  const [isOpend, setisOpend] = useState(false);

  const logOut = () => {
    sessionStorage.clear();
    setShowLogin(false);
    Cookies.remove('searchdata');
    Cookies.remove('fleetlist');
    signOut({
      callbackUrl: '/login',
    });
  };
  const reachedBottom = usePageBottom();
  const handleSubmit = async (phone, phoneCountry) => {
    const response = await api.post('/auth/check', { mobile: phone });
    if (response.data.exists) {
      toast.error('This phone number is already in use.', {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
    } else {
      update({ ...session, usermobileno: phone, usercountrycode: phoneCountry });
      setModalOpen(false);
    }
    router.refresh();
  };
  return (
    <>
      <PortalModal
        theme="dark"
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        showCloseIcon={false}
        title="Add User Mobile Number"
      >
        <GoogleMobileNumber
          handleSubmit={handleSubmit}
        />
      </PortalModal>
      <div className="relative">
        <div
          style={{ height: reachedBottom ? 0 : '4.5rem' }}
          className="duration-150 ease-out transition-[height] fixed bottom-0 z-40 md:hidden"
        >
          <BottomNav
            setShowNewBooking={setShowNewBooking}
            showNewBooking={showNewBooking}
          />
        </div>
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          isOpend={isOpend}
          setisOpend={setisOpend}
        />
        <div className={`${isOpend ? 'sm:ml-64' : 'sm:ml-16'}`}>
          <div className="sticky top-0 z-30 px-3 border navbar bg-base-100 sm:px-0">
            <div className="flex-1">
              <Link href="/" className="w-32 h-12 -mt-2 lg:w-36 md:h-12">
                <Pic src="/images/logo.png" alt="RolDrive logo" />
              </Link>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end sm:mr-5">
                <label tabIndex={0} className="cursor-pointer">
                  <div className="flex items-center text-[14px] text-black font-semibold uppercase">
                    {userName && (
                    <div className="flex items-center justify-center w-[32px] h-[32px] font-medium text-white rounded-full bg-primary">
                      {userName?.userfname?.[0]}
                      {userName?.userlname?.[0]}
                    </div>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="p-0 mt-3 shadow menu menu-compact dropdown-content bg-base-100 w-52"
                >
                  <li className="rounded-none">
                    <Link
                      href="/booking-management"
                      className="justify-between !rounded-none"
                    >
                      Bookings
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile-management" className="rounded-none">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="rounded-none"
                      onClick={() => {
                        logOut();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default AuthWrap;
