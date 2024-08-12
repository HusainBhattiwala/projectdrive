/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */

'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { FaLongArrowAltUp, FaUserCircle } from 'react-icons/fa';
import Cookies from 'js-cookie';
import usePageTop from 'hooks/usePageTop';
import { LoginContext } from 'context/LoginContext';
// import CountryDropdown from '../CountryDropdown';
// import CurrencyDropdown from '../CurrencyDropdown';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';
import { Pic } from '../ui/Pic';

const navList = [
  {
    id: 1,
    name: 'Services',
    children: [
      {
        id: 11,
        name: 'Airport Transfers',
        url: '/airport-transfers',
      },
      {
        id: 12,
        name: 'Road Shows',
        url: '/road-shows',
      },
      {
        id: 13,
        name: 'Intercity Transfers',
        url: '/intercity-rides',
      },
    ],
  },
  {
    id: 2,
    name: 'Fleet',
    url: '/fleet',
  },
  // {
  //   id: 3,
  //   name: 'Business Solution',
  //   url: '/business-solution',
  // },
  {
    id: 4,
    name: 'Cities',
    children: [
      {
        id: 41,
        name: 'London',
        url: '/airport-transfer-london',
      },
      {
        id: 42,
        name: 'Paris',
        url: '/airport-transfer-paris',
      },
      {
        id: 43,
        name: 'New York',
        url: '/airport-transfer-new-york',
      },
      {
        id: 44,
        name: 'Dubai',
        url: '/airport-transfer-dubai',
      },
    ],
  },
];
function Header() {
  const router = useRouter();
  const [showToggledNav, setShowToggledNav] = useState(false);
  const [getName, setGetName] = useState('');
  const [width, setWidth] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const outSideClickRef = useRef();
  const { showLogin, setShowLogin, setUserName } = useContext(LoginContext);

  const { data: session } = useSession();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setLogoLoaded(true);
    }

    // Set initial width
    handleResize();

    // Add event listener to update width on resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    setGetName(user);
    router.refresh();
  }, [router, showLogin]);

  useEffect(() => {
    console.log(session);
    if (session?.user) {
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          userfname: session?.user.name.split(' ')[0],
          userlname: session?.user.name.split(' ')[1],
          useremailid: session?.user.email,
          usermobileno: session?.user.mobile,
          usercountrycode: session?.user.countryCode,
        }),
      );
      sessionStorage.setItem('token', session?.user.rolDriveToken);
      Cookies.set('authtype', 'GOOGLE');
      console.log('setting showLogin here1', !!session?.user.rolDriveToken);
      setShowLogin(!!session?.user.rolDriveToken);
      setUserName(session?.user.name.split(' ')[0]);
      // router.push('/booking-management');
    }
  }, [session, setShowLogin, setUserName]);

  const toogleHeader = () => {
    setShowToggledNav(!showToggledNav);
  };
  const logOut = () => {
    sessionStorage.clear();
    // router.refresh();
    console.log('setting showlOgin false');
    setShowLogin(false);
    Cookies.remove('searchdata');
    Cookies.remove('fleetlist');
    signOut({
      callbackUrl: '/login',
    });
    // router.push('/login');
  };
  const reachedTop = usePageTop();
  const pathName = usePathname();

  useOnClickOutside(outSideClickRef, () => setShowToggledNav(false));

  function getBackgound() {
    if (width > 786) {
      return 'bg-white';
    }
    return 'bg-black';
  }
  function getLogo() {
    if (width > 786) {
      return '/images/logo.png';
    }
    if (width < 786 && !showToggledNav && reachedTop) {
      return '/images/logo_white.png';
    }
    return '/images/logo_white.png';
  }
  function getHamburger() {
    if (width > 786) {
      return 'invert';
    }
    return 'invert-0';
  }
  function getHamburgerImage() {
    if (showToggledNav) {
      return '/images/icons/times.svg';
    }
    return '/images/icons/hamburger-menu.svg';
  }
  function goLoginFontColor() {
    if (width > 786) {
      return '!text-black  hover:!text-white';
    }
    return 'invert-0';
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const prevPage = sessionStorage.getItem('currentpage');
    // eslint-disable-next-line no-unused-vars
    const handleBeforeUnload = (event) => {
      if (pathName !== '/fleet-availability') {
        sessionStorage.removeItem('storesearchdata');
        sessionStorage.removeItem('passengerDetails');
        Cookies.remove('searchdata');
        sessionStorage.removeItem('fleetlist');
        sessionStorage.removeItem('currentpage');
      }
    };
    if (pathName !== prevPage && pathName !== '/fleet-availability') {
      handleBeforeUnload();
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathName]);
  return (
    <>
      <div
        className={`group fixed bottom-${
          showButton ? '4' : '0'
        } right-4 z-50 transition-all duration-300 ${
          showButton ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="px-2 py-2 mb-[90px]  transition-colors duration-300 bg-white rounded-full shadow-md cursor-pointer shadow-black hover:bg-primary hover:shadow-primary group-hover:text-white"
          onClick={handleScrollToTop}
        >
          <FaLongArrowAltUp className="transition-colors duration-300 text-primary group-hover:text-white" />
        </div>
      </div>
      <header
        className={`md:sticky fixed top-0 left-0 z-[999] w-full px-2 ${
          // eslint-disable-next-line no-nested-ternary
          (pathName === '/'
            || pathName === '/airport-transfers'
            || pathName === '/road-shows'
            || pathName === '/intercity-rides'
            || pathName === '/fleet'
            || pathName === '/airport-transfer-london'
            || pathName === '/airport-transfer-paris'
            || pathName === '/airport-transfer-dubai'
            || pathName === '/airport-transfer-new-delhi'
            || pathName === '/airport-transfer-new-york'
            || pathName === '/airport-transfer-mumbai'
            || pathName === '/faq'
            || pathName === '/full-day-chauffeur-hire'
            || pathName === '/hourly-chauffeur-service'
            || pathName === '/chauffeur-service-in-london'
            || pathName === '/event-chauffeur-service-in-london'
            || pathName === '/airport-transfer-luton'
            || pathName === '/airport-london-stansted'
            || pathName === '/airport-london-southend'
            || pathName === '/airport-transfer-london-city'
            || pathName === '/airport-transfer-gatwick'
            || pathName === '/airport-transfer-heathrow'
            || pathName === '/faqs'
            || pathName === '/corporate-chauffeur-service-london'
            || pathName === '/chauffeur-driven-car-hire-london'
            || pathName === '/mercedes-sprinter-hire-in-london'
            || pathName === '/mercedes-s-class-chauffeur-in-london'
            || pathName === '/mercedes-v-class-london'
            || pathName === '/luxury-chauffeur-service-mayfair'
            || pathName === '/luxury-taxi-service-london'
            || pathName === 'long-distance-chauffeur-service-in-london'
            || pathName === '/business-solution'
            || pathName === '/executive-chauffeur-service-london')
          && reachedTop
          && !showToggledNav
            ? 'bg-opacity-30 sm:bg-opacity-50 bg-black'
            : getBackgound()
        } md:shadow-md lg:px-6 xl:px-16 md:px-4`}
        ref={outSideClickRef}
      >
        <nav className="py-2">
          <div className="mx-auto lg:container container-fluid md:flex md:justify-center md:items-center">
            <div className="flex items-center justify-between md:justify-center sm:mr-auto">
              <Link href="/" className="w-32 h-12 pl-2 lg:w-36 md:h-12 sm:pl-0">
                <Pic
                  src={
                    // eslint-disable-next-line no-nested-ternary
                    (pathName === '/'
                      || pathName === '/airport-transfers'
                      || pathName === '/road-shows'
                      || pathName === '/intercity-rides'
                      || pathName === '/fleet'
                      || pathName === '/airport-transfer-paris'
                      || pathName === '/airport-transfer-london'
                      || pathName === '/airport-transfer-dubai'
                      || pathName === '/airport-transfer-new-delhi'
                      || pathName === '/airport-transfer-new-york'
                      || pathName === '/airport-transfer-mumbai'
                      || pathName === '/faq'
                      || pathName === '/full-day-chauffeur-hire'
                      || pathName === '/hourly-chauffeur-service'
                      || pathName === '/chauffeur-service-in-london'
                      || pathName === '/event-chauffeur-service-in-london'
                      || pathName === '/business-solution'
                      || pathName === '/airport-transfer-luton'
                      || pathName === '/airport-london-stansted'
                      || pathName === '/mercedes-v-class-london'
                      || pathName === '/luxury-chauffeur-service-mayfair'
                      || pathName === '/airport-london-southend'
                      || pathName === '/airport-transfer-london-city'
                      || pathName === '/airport-transfer-gatwick'
                      || pathName === '/airport-transfer-heathrow'
                      || pathName === '/faqs'
                      || pathName === '/corporate-chauffeur-service-london'
                      || pathName === '/chauffeur-driven-car-hire-london'
                      || pathName === '/mercedes-sprinter-hire-in-london'
                      || pathName === '/mercedes-s-class-chauffeur-in-london'
                      || pathName === '/luxury-taxi-service-london'
                      || pathName === '/long-distance-chauffeur-service-in-london'
                      || pathName === '/executive-chauffeur-service-london')
                    && reachedTop
                    && !showToggledNav
                    && width > 786
                    && logoLoaded
                      ? '/images/logo_white.png'
                      : (pathName === '/login'
                          || pathName === '/fleet-availability')
                        && width < 786
                        ? '/images/logo_white.png'
                        : getLogo()
                  }
                  alt="Roldrive logo"
                />
              </Link>

              <div className="flex md:mx-auto md:ml-[-20%]">
                <div className="md:hidden">
                  {!showLogin && width > 786 && logoLoaded && (
                    <Link href="/login">
                      <Button
                        type="button"
                        className={`${
                          (pathName === '/'
                            || pathName === '/airport-transfers'
                            || pathName === '/road-shows'
                            || pathName === '/intercity-rides'
                            || pathName === '/fleet'
                            || pathName === '/airport-transfer-london'
                            || pathName === '/airport-transfer-paris'
                            || pathName === '/airport-transfer-dubai'
                            || pathName === '/airport-transfer-new-delhi'
                            || pathName === '/airport-transfer-new-york'
                            || pathName === '/airport-transfer-mumbai'
                            || pathName === '/faq'
                            || pathName
                              === '/full-day-chauffeur-hire'
                            || pathName === '/hourly-chauffeur-service'
                            || pathName === '/chauffeur-service-in-london'
                            || pathName === '/event-chauffeur-service-in-london'
                            || pathName === '/business-solution'
                            || pathName === '/airport-transfer-luton'
                            || pathName === '/airport-london-stansted'
                            || pathName === '/mercedes-v-class-london'
                            || pathName === '/luxury-chauffeur-service-mayfair'
                            || pathName === '/airport-london-southend'
                            || pathName === '/airport-transfer-london-city'
                            || pathName === '/airport-transfer-gatwick'
                            || pathName === '/airport-transfer-heathrow'
                            || pathName === '/faqs'
                            || pathName
                              === '/corporate-chauffeur-service-london'
                            || pathName === '/chauffeur-driven-car-hire-london'
                            || pathName === '/mercedes-sprinter-hire-in-london'
                            || pathName
                              === '/mercedes-s-class-chauffeur-in-london'
                            || pathName === '/luxury-taxi-service-london'
                            || pathName === '/long-distance-chauffeur-service-in-london'
                            || pathName
                              === '/executive-chauffeur-service-london')
                          && reachedTop
                            ? '!text-white'
                            : '!text-black  hover:!text-primary'
                        } h-8 mt-2 bg-transparent hover:bg-transparent px-1 border-0 flex gap-1`}
                      >
                        <FaUserCircle className="w-4 h-4" />
                        <span className="!text-[14px] !font-[500]">Sign in</span>
                      </Button>
                    </Link>
                  )}
                  {showLogin && width > 768 && (
                    <div className="py-2 dropdown dropdown-end sm:mr-5">
                      <label tabIndex={0} className="cursor-pointer">
                        <div className="flex items-center text-[14px] text-black !font-[500] uppercase">
                          {getName && getName?.userfname && (
                            <div className="flex items-center justify-center w-[32px] h-[32px] font-medium text-white rounded-full bg-primary">
                              {getName?.userfname?.[0]}
                              {getName?.userlname?.[0]}
                            </div>
                          )}
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="w-40 mt-3 bg-white rounded-md shadow menu menu-compact dropdown-content"
                      >
                        <li className="hover:bg-primary hover:text-white">
                          <Link
                            href="/booking-management"
                            className="justify-between"
                          >
                            Bookingss
                          </Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white">
                          <Link href="/profile-management">My Account</Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white">
                          <button
                            type="button"
                            onClick={logOut}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex items-center md:hidden">
                  <div className="h-[28px] w-[28px]">
                    <a
                      target="_blank"
                      href="https://wa.me/442045920966"
                      rel="noreferrer"
                      aria-label="Open WhatsApp Chat"
                    >
                      <Pic src="/images/icons/whatsapp-icon.svg" />
                    </a>
                  </div>
                  {showLogin && (
                    <div className="py-2 ml-4 dropdown dropdown-hover dropdown-end sm:mr-5 sm:ml-0">
                      <label tabIndex={0} className="cursor-pointer">
                        <div className="flex items-center text-[14px] text-black !font-[500] uppercase">
                          {getName && getName?.userfname && (
                            <div className="flex items-center justify-center w-[32px] h-[32px] font-medium text-white rounded-full bg-primary">
                              {getName?.userfname?.[0]}
                              {getName?.userlname?.[0]}
                            </div>
                          )}
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-1 shadow bg-base-100 w-40 rounded-md !p-0 py-2"
                      >
                        <li className="rounded-none">
                          <Link
                            href="/booking-management"
                            className="justify-between"
                          >
                            Bookings
                          </Link>
                        </li>
                        <li className="rounded-none">
                          <Link href="/profile-management">My Account</Link>
                        </li>
                        <li className="rounded-none">
                          <button
                            type="button"
                            onClick={logOut}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Button
                  kind=""
                  onClick={toogleHeader}
                  type="button"
                  className={`w-10 border-0 !p-0 !m-0 btn-circle btn-outline md:hidden bg-transparent focus:bg-transparent hover:bg-transparent ${
                    (pathName === '/'
                      || pathName === '/airport-transfers'
                      || pathName === '/road-shows'
                      || pathName === '/intercity-rides'
                      || pathName === '/fleet'
                      || pathName === '/airport-transfer-london'
                      || pathName === '/airport-transfer-paris'
                      || pathName === '/airport-transfer-dubai'
                      || pathName === '/airport-transfer-new-delhi'
                      || pathName === '/airport-transfer-new-york'
                      || pathName === '/airport-transfer-mumbai'
                      || pathName === '/faq'
                      || pathName === '/full-day-chauffeur-hire'
                      || pathName === '/hourly-chauffeur-service'
                      || pathName === '/chauffeur-service-in-london'
                      || pathName === '/event-chauffeur-service-in-london'
                      || pathName === '/business-solution'
                      || pathName === '/airport-transfer-luton'
                      || pathName === '/airport-london-stansted'
                      || pathName === '/mercedes-v-class-london'
                      || pathName === '/luxury-chauffeur-service-mayfair'
                      || pathName === '/airport-london-southend'
                      || pathName === '/airport-transfer-london-city'
                      || pathName === '/airport-transfer-gatwick'
                      || pathName === '/airport-transfer-heathrow'
                      || pathName === '/faqs'
                      || pathName === '/corporate-chauffeur-service-london'
                      || pathName === '/chauffeur-driven-car-hire-london'
                      || pathName === '/mercedes-sprinter-hire-in-london'
                      || pathName === '/mercedes-s-class-chauffeur-in-london'
                      || pathName === '/luxury-taxi-service-london'
                      || pathName === '/long-distance-chauffeur-service-in-london'
                      || pathName === '/executive-chauffeur-service-london')
                    && reachedTop
                    && !showToggledNav
                      ? '!text-white'
                      : '!text-black'
                  } !text-[14px] !font-[500]`}
                >
                  <div className="h-[14px] w-[20px]">
                    <Pic
                      src={getHamburgerImage()}
                      className={`object-fill ${
                        reachedTop && !showToggledNav
                          ? 'invert-0'
                          : getHamburger()
                      } `}
                    />
                  </div>
                </Button>
              </div>
            </div>
            <div
              // eslint-disable-next-line no-nested-ternary
              className={` md:mt-0 md:flex md:justify-center md:items-center sm:pt-0 sm:pb-0 pt-5 pb-2 w-full relative ${
                showToggledNav ? 'flex flex-col' : 'hidden'
              }`}
            >
              <div className="md:flex items-center md:-ml-[15%]">
                {navList.map((navItem) => (!navItem.children ? (
                  <Link
                    key={navItem.id}
                    href={`${navItem.url}`}
                    className={` ${
                      pathName === '/booking-management' && 'hidden'
                    } ${pathName === '/profile-management' && 'hidden'} ${
                      (pathName === '/'
                          || pathName === '/airport-transfers'
                          || pathName === '/road-shows'
                          || pathName === '/intercity-rides'
                          || pathName === '/fleet'
                          || pathName === '/airport-transfer-london'
                          || pathName === '/airport-transfer-paris'
                          || pathName === '/airport-transfer-dubai'
                          || pathName === '/airport-transfer-new-delhi'
                          || pathName === '/airport-transfer-new-york'
                          || pathName === '/airport-transfer-mumbai'
                          || pathName === '/faq'
                          || pathName === '/full-day-chauffeur-hire'
                          || pathName === '/hourly-chauffeur-service'
                          || pathName === '/chauffeur-service-in-london'
                          || pathName === '/event-chauffeur-service-in-london'
                          || pathName === '/business-solution'
                          || pathName === '/airport-transfer-luton'
                          || pathName === '/airport-london-stansted'
                          || pathName === '/mercedes-v-class-london'
                          || pathName === '/luxury-chauffeur-service-mayfair'
                          || pathName === '/airport-london-southend'
                          || pathName === '/airport-transfer-london-city'
                          || pathName === '/airport-transfer-gatwick'
                          || pathName === '/airport-transfer-heathrow'
                          || pathName === '/faqs'
                          || pathName === '/corporate-chauffeur-service-london'
                          || pathName === '/chauffeur-driven-car-hire-london'
                          || pathName === '/mercedes-sprinter-hire-in-london'
                          || pathName
                            === '/mercedes-s-class-chauffeur-in-london'
                          || pathName === '/luxury-taxi-service-london'
                          || pathName === '/long-distance-chauffeur-service-in-london'
                          || pathName === '/executive-chauffeur-service-london')
                        && reachedTop
                        ? '!text-white md:!font-[500]'
                        : 'md:!text-black !text-white'
                    } lg:px-3 md:px-2 px-4  lg:mx-2`}
                  >
                    <button
                      type="button"
                      className="sm:!mb-0 mb-3 uppercase !text-[14px] !font-[500]"
                    >
                      {navItem.name}
                    </button>
                  </Link>
                ) : (
                  <Dropdown
                    isHeader
                    width={width}
                    btnClass={`${
                      (pathName === '/'
                          || pathName === '/airport-transfers'
                          || pathName === '/road-shows'
                          || pathName === '/intercity-rides'
                          || pathName === '/fleet'
                          || pathName === '/airport-transfer-london'
                          || pathName === '/airport-transfer-paris'
                          || pathName === '/airport-transfer-dubai'
                          || pathName === '/airport-transfer-new-delhi'
                          || pathName === '/airport-transfer-new-york'
                          || pathName === '/airport-transfer-mumbai'
                          || pathName === '/faq'
                          || pathName === '/full-day-chauffeur-hire'
                          || pathName === '/hourly-chauffeur-service'
                          || pathName === '/chauffeur-service-in-london'
                          || pathName === '/event-chauffeur-service-in-london'
                          || pathName === '/business-solution'
                          || pathName === '/airport-transfer-luton'
                          || pathName === '/airport-london-stansted'
                          || pathName === '/mercedes-v-class-london'
                          || pathName === '/luxury-chauffeur-service-mayfair'
                          || pathName === '/airport-london-southend'
                          || pathName === '/airport-transfer-london-city'
                          || pathName === '/airport-transfer-gatwick'
                          || pathName === '/airport-transfer-heathrow'
                          || pathName === '/faqs'
                          || pathName === '/corporate-chauffeur-service-london'
                          || pathName === '/chauffeur-driven-car-hire-london'
                          || pathName === '/mercedes-sprinter-hire-in-london'
                          || pathName
                            === '/mercedes-s-class-chauffeur-in-london'
                          || pathName === '/luxury-taxi-service-london'
                          || pathName === '/long-distance-chauffeur-service-in-london'
                          || pathName === '/executive-chauffeur-service-london')
                        && reachedTop
                        ? '!text-white md:!font-[500]'
                        : 'md:!text-black md:!font-[500] !text-white'
                    } !text-[14px] !py-0 sm:mb-0 mb-3`}
                    label={navItem.name}
                    className={` ${
                      pathName === '/booking-management' && 'hidden'
                    } ${
                      pathName === '/profile-management' && 'hidden'
                    } dropdown-hover`}
                    key={navItem.name}
                  >
                    {navItem.children.map((child, index) => (
                      <li key={child.id}>
                        <Link
                          href={`${child.url}`}
                          className={`${
                            navItem.children.length - 1 === index
                              ? 'border-b-0'
                              : 'border-b'
                          } rounded-none w-full h-full`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </Dropdown>
                )))}
              </div>
              <div className="flex items-center md:absolute md:right-0">
                <div
                  className={`h-[28px] w-[28px] md:block hidden cursor-pointer ${
                    showLogin ? 'mr-3' : 'mr-0'
                  }`}
                >
                  <a
                    href="https://wa.me/442045920966"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open WhatsApp Chat"
                  >
                    <Pic src="/images/icons/whatsapp-icon.svg" />
                  </a>
                </div>
                {!showLogin && (
                  <Link
                    href={`/login?afterlogin=${pathName}`}
                    className="lg:!text-[14px] md:!text-[11px] !font-[500]"
                  >
                    <Button
                      type="button"
                      className={`${
                        (pathName === '/'
                          || pathName === '/airport-transfers'
                          || pathName === '/road-shows'
                          || pathName === '/intercity-rides'
                          || pathName === '/fleet'
                          || pathName === '/airport-transfer-london'
                          || pathName === '/airport-transfer-paris'
                          || pathName === '/airport-transfer-dubai'
                          || pathName === '/airport-transfer-new-delhi'
                          || pathName === '/airport-transfer-new-york'
                          || pathName === '/airport-transfer-mumbai'
                          || pathName === '/faq'
                          || pathName === '/full-day-chauffeur-hire'
                          || pathName === '/hourly-chauffeur-service'
                          || pathName === '/chauffeur-service-in-london'
                          || pathName === '/event-chauffeur-service-in-london'
                          || pathName === '/business-solution'
                          || pathName === '/airport-transfer-luton'
                          || pathName === '/airport-london-stansted'
                          || pathName === '/mercedes-v-class-london'
                          || pathName === '/luxury-chauffeur-service-mayfair'
                          || pathName === '/airport-london-southend'
                          || pathName === '/airport-transfer-london-city'
                          || pathName === '/airport-transfer-gatwick'
                          || pathName === '/airport-transfer-heathrow'
                          || pathName === '/faqs'
                          || pathName === '/corporate-chauffeur-service-london'
                          || pathName === '/chauffeur-driven-car-hire-london'
                          || pathName === '/mercedes-sprinter-hire-in-london'
                          || pathName
                            === '/mercedes-s-class-chauffeur-in-london'
                          || pathName === '/luxury-taxi-service-london'
                          || pathName === 'long-distance-chauffeur-service-in-london'
                          || pathName === '/executive-chauffeur-service-london')
                        && reachedTop
                          ? '!text-white'
                          : goLoginFontColor()
                      } md:!text-[11px] lg:!text-[14px] h-8 bg-transparent hover:bg-primary lg:px-4 md:px-2 border-0 flex gap-1 sm:ml-1`}
                    >
                      <FaUserCircle />
                      Sign in
                    </Button>
                  </Link>
                )}
                {showLogin && (
                  <div className="hidden py-2 ml-4 dropdown dropdown-hover dropdown-end sm:mr-5 sm:ml-0 md:block">
                    <label tabIndex={0} className="cursor-pointer">
                      <div className="flex items-center text-[14px] text-black !font-[500] uppercase">
                        {getName && getName?.userfname && (
                          <div className="flex items-center justify-center w-[32px] h-[32px] font-medium text-white rounded-full bg-primary">
                            {getName?.userfname?.[0]}
                            {getName?.userlname?.[0]}
                          </div>
                        )}
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact dropdown-content mt-1 shadow bg-base-100 w-40 rounded-md !p-0 py-2"
                    >
                      <li className="rounded-none">
                        <Link
                          href="/booking-management"
                          className="justify-between hover:bg-gray-50 active:bg-gray-50"
                        >
                          Bookings
                        </Link>
                      </li>
                      <li className="rounded-none">
                        <Link
                          href="/profile-management"
                          className="hover:bg-gray-50 active:bg-gray-50"
                        >
                          My Account
                        </Link>
                      </li>
                      <li className="rounded-none">
                        <button
                          type="button"
                          onClick={logOut}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
