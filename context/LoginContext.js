'use client';

import { createContext, useEffect, useState } from 'react';

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

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider value={{
      showLogin, setShowLogin, userName, setUserName, isNewUser, setIsNewUser,
    }}
    >
      {children}
    </LoginContext.Provider>
  );
}
