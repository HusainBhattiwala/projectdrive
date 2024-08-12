'use client';

import { createContext, useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router'; // Import useRouter

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token && token !== 'undefined') {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
        setUserName(user.userfname);
      }
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, []);

  const logOut = () => {
    const router = useRouter(); // Initialize router
    
    sessionStorage.clear();
    setShowLogin(false);
    Cookies.remove('searchdata');
    Cookies.remove('fleetlist');
    signOut({
      callbackUrl: '/login',
    }).then(() => {
      router.push('/login');
    }).catch((error) => {
      console.error('SignOut failed: ', error);
      router.push('/login');
    });
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider value={{
      showLogin, setShowLogin, userName, setUserName, isNewUser, setIsNewUser, logOut
    }}
    >
      {children}
    </LoginContext.Provider>
  );
}
