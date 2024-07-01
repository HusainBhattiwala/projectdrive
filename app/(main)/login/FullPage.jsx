'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
// import { signIn, useSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import P from 'components/typography/P';
import Login from 'components/auth/Login';
import Banner from 'components/auth/Banner';
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
  const [showOTP, setShowOTP] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showEmailLogin, setshowEmailLogin] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isLoaded, setIsIsLoaded] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState('personal');
  // const [selectedLoginAccountType, setSelectedLoginAccountType] = useState('personal');

  const loginRef = useRef();

  useEffect(() => {
    if (pathName === '/login') {
      setIsLoginPage(true);
      setIsIsLoaded(true);
    }
  }, [pathName]);

  useEffect(() => {
    loginRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }, [showEmailLogin]);

  useEffect(() => {
    setShowOTP(false);
  }, [showLogin]);

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
  if (selectedAccountType === 'personal') {
    loginComponent = (
      <>
        {!showOTP && (
          <EmailLogin
            isEmailLogin={showEmailLogin}
            handelClick={setshowEmailLogin}
          />
        )}
        <Login
          isLogin={setShowLogin}
          showOTP={showEmailLogin}
          isLoggedIn={setShowAuth}
          loginPage={isLoginPage}
          getBookerPassword={() => {}}
          passwordExists={() => {}}
          setShowOTP={setShowOTP}
        />
      </>
    );
  } else if (selectedAccountType === 'business') {
    loginComponent = (
      <>
        <CorporateLoginToggle
          isEmailLogin={showEmailLogin}
          handelClick={setshowEmailLogin}
        />
        <CorporateLogin
          isLogin={setShowLogin}
          showOTP={showEmailLogin}
          isLoggedIn={setShowAuth}
          loginPage={isLoginPage}
          getBookerPassword={() => {}}
          passwordExists={() => {}}
          accountType={selectedAccountType}
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
      className="grid grid-cols-1 md:grid-cols-9 relative bg-[#223544]"
      ref={loginRef}
    >
      {isLoaded && (
        <>
          <div className="col-span-5 w-full h-full">
            <Banner
              title="Premium Chauffeur Service"
              description="Your exclusive and dependable chauffeur service indulgence"
            />
          </div>
          <div className="md:col-span-4 col-span-5">
            <div className="sm:mb-[90px] sm:mt-[122px] my-8 md:max-w-[480px] 2xl:max-w-[600px] mx-auto lg:px-0 px-4">
              {showLogin && (
                <div className="flex flex-col sm:gap-y-8 gap-y-4">
                  <Link href="/" className="">
                    <img
                      className="h-10 w-40 flex justify-center mx-auto"
                      src="/rolnew/global/logo.svg"
                      alt="logo"
                    />
                  </Link>
                  {!showOTP && (
                    <H1 className="text-[#CED5E5] text-center text-3xl not-italic font-bold">
                      Sign in
                    </H1>
                  )}
                  {!showOTP && (
                    <div className="py-2 flex flex-wrap justify-center gap-6">
                      <div className="h-6 flex flex-row-reverse gap-x-2 flex-wrap justify-evenly items-center">
                        <div className="text-white text-base not-italic font-normal leading-6">
                          Personal
                        </div>
                        <input
                          className="box-border border-[1px] border-solid w-4 h-4 rounded-full bg-pink-500"
                          type="radio"
                          name="accountType"
                          value="personal"
                          checked={selectedAccountType === 'personal'}
                          onChange={() => setSelectedAccountType('personal')}
                        />
                      </div>
                      <div className="h-6 flex flex-row-reverse gap-x-2 flex-wrap justify-evenly items-center">
                        <div className="text-white text-base not-italic font-normal leading-6">
                          Business
                        </div>
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
                  )}
                </div>
              )}
              {!showLogin && (
                <>
                  <Link href="/" className="">
                    <img
                      className="h-10 w-40 flex justify-center mx-auto mb-[15px]"
                      src="/rolnew/global/logo.svg"
                      alt="logo"
                    />
                  </Link>
                  <H1 className="text-[#CED5E5] text-center text-3xl not-italic font-bold mb-[15px]">
                    Create An Account
                  </H1>
                  {/* <P className="mt-2 mb-8 text-center">
                  Sign up to create a new business account
                </P> */}
                </>
              )}
              {showLogin && !showAuth && (
                <>
                  {loginComponent}
                  <div className="mt-6">
                    <P className="w-full flex justify-center text-center">
                      <span className="text-zinc-400 text-sm font-normal font-['Helvetica Neue'] leading-tight">
                        By continuing, you agree to RolDrive Company’s
                        <br />
                        <span className="text-zinc-400 text-sm font-normal underline leading-tight">
                          <Link href="/terms-and-conditions">
                            Terms of Conditions
                          </Link>
                        </span>
                        <span className="text-zinc-400 text-sm font-normal leading-tight">
                          {' '}
                          and
                          {' '}
                        </span>
                        <span className="text-zinc-400 text-sm font-normal underline leading-tight">
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </span>
                      </span>
                    </P>
                  </div>
                  <P className="mt-6 text-center text-[#CED5E5] text-lg not-italic font-medium leading-6">
                    Don’t have an account?
                    {' '}
                    <span
                      className="cursor-pointer text-[#FDE8E1] text-md not-italic font-medium leading-6"
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
                  {!showOTP && (
                    <div className="py-2 flex flex-wrap justify-center gap-6 mb-[38px]">
                      <div className="gap-x-2 h-6 flex flex-row-reverse flex-wrap justify-evenly items-center">
                        <div className="text-white text-base not-italic font-normal leading-6">
                          Personal
                        </div>
                        <input
                          className="box-border border-[1px] border-solid w-4 h-4 rounded-full bg-red-500"
                          type="radio"
                          name="accountType"
                          value="personal"
                          checked={selectedAccountType === 'personal'}
                          onChange={() => setSelectedAccountType('personal')}
                        />
                      </div>
                      <div className="gap-x-2 h-6 flex flex-row-reverse flex-wrap justify-evenly items-center">
                        <div className="text-white text-base not-italic font-normal leading-6">
                          Business
                        </div>
                        <input
                          className="box-border border-[1px] border-solid w-4 h-4 rounded-full bg-red-500"
                          type="radio"
                          name="accountType"
                          value="business"
                          checked={selectedAccountType === 'business'}
                          onChange={() => setSelectedAccountType('business')}
                        />
                      </div>
                    </div>
                  )}
                  {registrationComponent}
                  <div className="mt-6">
                    <P className="w-full flex justify-center text-center">
                      <span className="text-zinc-400 text-sm font-normal font-['Helvetica Neue'] leading-none">
                        By continuing, you agree to RolDrive Company’s
                        <br />
                        <span className="text-zinc-400 text-sm font-normal underline leading-none">
                          <Link href="/terms-and-conditions">
                            Terms of Conditions
                          </Link>
                        </span>
                        <span className="text-zinc-400 text-sm font-normal leading-none">
                          {' '}
                          and
                          {' '}
                        </span>
                        <span className="text-zinc-400 text-sm font-normal underline leading-none">
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </span>
                      </span>
                    </P>
                  </div>
                  <P className="mt-6 text-center text-[#CED5E5] text-lg not-italic font-medium leading-6">
                    Already have an account?
                    {' '}
                    <span
                      className="cursor-pointer text-[#FDE8E1] text-md not-italic font-medium leading-6"
                      onClick={() => {
                        setShowLogin(true);
                        setShowOTP(true);
                      }}
                    >
                      {' '}
                      Sign in
                    </span>
                  </P>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
