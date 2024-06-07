/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import Cookies from 'js-cookie';
// import { signOut, useSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { LoginContext } from 'context/LoginContext';
import api from 'components/utils/api';

function AuthWrap({ children }) {
  const { setShowLogin, setUserName } = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { data: session, status } = useSession();

  const verifyToken = useCallback(async () => {
    const response = await api.post('/auth/check-corporate-user', {});
    setLoading(false);
    if (response && !response?.isCorporateUser) {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      verifyToken();
    }
    if (status === 'loading') return;

    if (!token || token === 'null' || token === 'undefined') {
      if (session?.user) {
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            userfname: session?.user.name?.split(' ')?.[0],
            userlname: session?.user.name?.split(' ')?.[1],
            useremailid: session?.user.email,
            usermobileno: session?.user.mobile,
            usercountrycode: session?.user.countryCode,
          }),
        );
        sessionStorage.setItem('token', session?.user.rolDriveToken);
        Cookies.set('authtype', 'GOOGLE');
        setShowLogin(!!session?.user.rolDriveToken);
        setUserName({
          userfname: session?.user.name?.split(' ')?.[0],
          userlname: session?.user.name?.split(' ')?.[1],
        });
      } else {
        console.log('sending user back');
        router.push('/');
      }
    } else if (session?.user && token) {
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          userfname: session?.user.name?.split(' ')?.[0],
          userlname: session?.user.name?.split(' ')?.[1],
          useremailid: session?.user.email,
          usermobileno: session?.user.mobile,
          usercountrycode: session?.user.countryCode,
        }),
      );
      sessionStorage.setItem('token', session?.user.rolDriveToken);
      Cookies.set('authtype', 'GOOGLE');
      setShowLogin(!!session?.user.rolDriveToken);
      setUserName({
        userfname: session?.user.name?.split(' ')?.[0],
        userlname: session?.user.name?.split(' ')?.[1],
      });
    } else {
      const user = JSON.parse(sessionStorage.getItem('user'));
      setUserName({
        userfname: user.userfname,
        userlname: user.userlname,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, setShowLogin, setUserName, status]);

  // const logOut = () => {
  //   sessionStorage.clear();
  //   // router.refresh();
  //   setShowLogin(false);
  //   Cookies.remove('searchdata');
  //   Cookies.remove('fleetlist');
  //   signOut({
  //     callbackUrl: '/login',
  //   }); // router.push('/login');
  // };
  return (
    <div>
      {!loading ? children : null}
    </div>
  );
}

export default AuthWrap;
