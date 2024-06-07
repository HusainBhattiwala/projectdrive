'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
// import { signIn, useSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import P from 'components/typography/P';
import Login from 'components/auth/Login';
// import Banner from 'components/auth/Banner';
import Registation from 'components/auth/Registation';
import H1 from 'components/typography/H1';
import EmailLogin from 'components/auth/ShowEmailLogin';
import BusinessRegistation from 'components/auth/BusinessRegistation';
import CorporateLogin from 'components/auth/CorporateLogin';
import CorporateLoginToggle from 'components/auth/CorporateLoginToggle';
// import { Pic } from 'components/ui/Pic';

function Page() {
  const pathName = usePathname();
  // eslint-disable-next-line no-unused-vars
  const { data: session } = useSession();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showLogin, setShowLogin] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [showEmailLogin, setshowEmailLogin] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isLoaded, setIsIsLoaded] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState('personal');
  const [selectedLoginAccountType, setSelectedLoginAccountType] = useState('personal');

  const carsRef = useRef();

  useEffect(() => {
    if (pathName === '/login') {
      setIsLoginPage(true);
      setIsIsLoaded(true);
    }
  }, [pathName]);

  useEffect(() => {
    carsRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }, [showEmailLogin]);

  let registrationComponent;

  if (selectedAccountType === 'personal') {
    registrationComponent = (
      <Registation isLogin={setShowLogin} loginPage={isLoginPage} />
    );
  } else if (selectedAccountType === 'business') {
    registrationComponent = (
      <BusinessRegistation isLogin={setShowLogin} loginPage={isLoginPage} />
    );
  } else {
    registrationComponent = (
      <Registation isLogin={setShowLogin} loginPage={isLoginPage} />
    );
  }

  let loginComponent;
  if (selectedLoginAccountType === 'personal') {
    loginComponent = (
      <>
        <Login
          isLogin={setShowLogin}
          showOTP={showEmailLogin}
          isLoggedIn={setShowAuth}
          loginPage={isLoginPage}
          getBookerPassword={() => {}}
          passwordExists={() => {}}
        />
        <EmailLogin
          isEmailLogin={showEmailLogin}
          handelClick={setshowEmailLogin}
        />
      </>
    );
  } else if (selectedLoginAccountType === 'business') {
    loginComponent = (
      <>
        <CorporateLogin
          isLogin={setShowLogin}
          showOTP={showEmailLogin}
          isLoggedIn={setShowAuth}
          loginPage={isLoginPage}
          getBookerPassword={() => { }}
          passwordExists={() => { }}
          accountType={selectedLoginAccountType}
        />
        <CorporateLoginToggle
          isEmailLogin={showEmailLogin}
          handelClick={setshowEmailLogin}
        />
      </>
    );
  } else {
    loginComponent = (
      <Login
        isLogin={setShowLogin}
        showOTP={showEmailLogin}
        isLoggedIn={setShowAuth}
        loginPage={isLoginPage}
        getBookerPassword={() => {}}
        passwordExists={() => {}}
      />
    );
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
      ref={carsRef}
    >
      {isLoaded && (
      <>
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4">
          <img className="w-full min-h-screen" src="/images/login/new-login-banner.png" alt="" />
        </div>

        <div className="col-span-1 px-4 py-4  sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-2">
          {showLogin && (
          <>
            <H1 className="text-center text-zinc-800 text-2xl font-normal font-['Helvetica Light']">Sign in</H1>
            <P className="mt-3 mb-6 text-center text-neutral-500 text-sm font-light font-['Segoe UI']">
              Sign in to access your booking details
            </P>
            <div className="py-2 flex flex-wrap justify-around mb-[38px]">
              <div className="h-6 flex flex-row-reverse gap-x-2 flex-wrap justify-evenly items-center">
                <div className="text-zinc-800 text-base font-medium">Personal</div>
                <input
                  className="box-border border-[1px] border-solid w-4 h-4 rounded-full bg-pink-500"
                  type="radio"
                  name="accountType"
                  value="personal"
                  checked={selectedLoginAccountType === 'personal'}
                  onChange={() => setSelectedLoginAccountType('personal')}
                />
              </div>
              <div className="h-6 flex flex-row-reverse gap-x-2 flex-wrap justify-evenly items-center">
                <div className="text-zinc-800 text-base font-medium">Business</div>
                <input
                  className="box-border border-[1px] border-solid w-4 h-4 rounded-full bg-pink-500"
                  type="radio"
                  name="accountType"
                  value="business"
                  checked={selectedLoginAccountType === 'business'}
                  onChange={() => setSelectedLoginAccountType('business')}
                />
              </div>
            </div>
          </>
          )}
          {!showLogin && (
          <>
            <H1 className="text-center text-zinc-800 text-2xl font-normal font-['Helvetica Light']">Sign Up</H1>
            <P className="mt-3 mb-6 text-center text-neutral-500 text-sm font-light font-['Segoe UI']">
              Sign in to access your booking details
            </P>
          </>
          )}
          {showLogin && !showAuth && (
          <>
            {loginComponent}
            <P className="mt-6 text-center text-black text-sm font-normal">
              Don’t have an account?
              {' '}
              <span
                className="cursor-pointer text-primary font-bold"
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                {' '}
                Sign Up
              </span>
            </P>
          </>
          )}
          {!showLogin && (
          <>
            <div className="py-2 flex flex-wrap justify-around mb-[38px]">
              <div className="gap-x-2 h-6 flex flex-row-reverse flex-wrap justify-evenly items-center">
                <div className="font-medium">Personal</div>
                <input
                  className="box-border border-[1px] border-solid w-4 h-4 rounded-full bg-pink-500"
                  type="radio"
                  name="accountType"
                  value="personal"
                  checked={selectedAccountType === 'personal'}
                  onChange={() => setSelectedAccountType('personal')}
                />
              </div>
              <div className="gap-x-2 h-6 flex flex-row-reverse flex-wrap justify-evenly items-center">
                <div className="font-medium">Business</div>
                <input
                  className="box-border border-[1px] border-solid w-4 h-4 rounded-full bg-pink-500"
                  type="radio"
                  name="accountType"
                  value="business"
                  checked={selectedAccountType === 'business'}
                  onChange={() => setSelectedAccountType('business')}
                />
              </div>
            </div>
            {registrationComponent}
            <P className="mt-6 text-center text-black text-sm font-normal">
              Already have an account?
              {' '}
              <span
                className="cursor-pointer text-primary font-bold"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                {' '}
                Sign in
              </span>
            </P>
          </>
          )}
        </div>
      </>
      )}
    </div>
  );
}

export default Page;
