/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  useContext, useEffect, useRef, useState,
} from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { UtilityContext } from 'context/UtilityContext';
import Button from 'components/ui/Button';

import AccountDropDown from './AccountDropDown';
import Notification from './Notification';

export function Nav({ showSideBar, setShowSideBar }) {
  const {
    showNewBooking, setShowNewBooking, pageName, setShowViewBooking, showViewBooking,
  } = useContext(UtilityContext);

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window?.pageYOffset || document.documentElement.scrollTop;
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
  const pathName = usePathname();
  const pathNameLastPart = pathName.split('/').pop()?.replace('-', ' ');
  const location = useRouter();
  useEffect(() => {
    // Function to update window width
    function handleResize() {
      if (window.innerWidth < 1180) {
        setShowSideBar(true);
      } else {
        setShowSideBar(false);
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial window
    if (window.innerWidth < 1180) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowSideBar]);

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
      <nav
        className={`fixed top-0 z-40 w-full py-3 ease-in-out duration-300 bg-[#FEF8F4] ${
          showSideBar ? 'pl-20' : 'pl-60'
        }`}
      >
        <div className="flex items-center justify-between gap-4 pl-1 pr-4">
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={() => { if (showNewBooking) setShowNewBooking(false); else if (showViewBooking) setShowViewBooking(false); else location.back(); }}
          >
            <div className="w-5 h-4">
              <img src="/images/icons/go-back-primary.svg" alt="go back" />
            </div>
            <h6 className="text-[#343434] md:text-[30px] sm:text-[22px] text-[18px] font-semibold leading-6 capitalize">
              {
                // eslint-disable-next-line no-nested-ternary
                showNewBooking || showViewBooking ? showNewBooking ? 'Add New Booking' : 'View Booking' : pageName || pathNameLastPart
              }
            </h6>
          </div>

          <div className="flex items-center justify-end w-40 gap-2 sm:gap-4">
            <Notification />
            <AccountDropDown />
          </div>
        </div>
      </nav>
      <SideMenu className="text-gray-700" setShowSideBar={setShowSideBar} showSideBar={showSideBar} showNewBooking={showNewBooking} setShowNewBooking={setShowNewBooking} showViewBooking={showViewBooking} setShowViewBooking={setShowViewBooking} />
    </>
  );
}

const sideBarMenu = [
  {
    icon: '/images/corporate/sidebar/summary.svg',
    activeIcon: '/images/corporate/sidebar/summary_active.svg',
    label: 'Dashboard',
    link: '/corporate/booking-summary',
  },
  {
    icon: '/images/corporate/sidebar/finished_booking.svg',
    activeIcon: '/images/corporate/sidebar/finished_booking_active.svg',
    label: 'Finished Booking',
    link: '/corporate/finished-bookings',
  },
  {
    icon: '/images/corporate/sidebar/invoices.svg',
    activeIcon: '/images/corporate/sidebar/invoices_active.svg',
    label: 'Invoices',
    link: '/corporate/invoices',
  },
  {
    icon: '/images/corporate/sidebar/passengers.svg',
    activeIcon: '/images/corporate/sidebar/passengers_active.svg',
    label: 'Passenger List',
    link: '/corporate/passengers',
  },
  {
    icon: '/images/corporate/sidebar/users.svg',
    activeIcon: '/images/corporate/sidebar/users_active.svg',
    label: 'User List',
    link: '/corporate/users',
  },
];

function SideMenu({
  showSideBar, setShowSideBar, showNewBooking, setShowNewBooking, showViewBooking, setShowViewBooking,
}) {
  const [filteredSideBarMenu, setFilteredSideBarMenu] = useState(sideBarMenu);
  const wholeComp = useRef();
  const pathName = usePathname();

  useEffect(() => {
    const roles = sessionStorage.getItem('roles');
    let usertype = sessionStorage.getItem('user');
    const userRoles = roles ? JSON.parse(roles) : [];
    usertype = JSON.parse(usertype)?.usertype;
    const checkInclude = (role) => userRoles?.includes(role);

    if (usertype !== 'CORPORATE_MASTER') {
      const menus = sideBarMenu.filter((item) => {
        // Always include "Dashboard" and "Finished Booking"
        if (item.label === 'Dashboard' || item.label === 'Finished Booking') {
          return true;
        }

        // Include "User List" only if the role is present
        if (item.label === 'User List' && checkInclude('User Management')) {
          return true;
        }

        // Include "Passenger List" only if the role is present
        if (item.label === 'Passenger List' && checkInclude('Passenger Management')) {
          return true;
        }
        if (item.label === 'Invoices' && checkInclude('Invoices')) {
          return true;
        }

        // Exclude other items
        return false;
      });
      setFilteredSideBarMenu(menus);
    }
  }, []);

  return (
    <ul
      ref={wholeComp}
      className={`menu z-40 flex-none rounded-none bg-white fixed left-0 h-screen overflow-y-auto flex flex-col flex-nowrap border-r border-custom-border ease-in-out duration-300 !overflow-visible ${
        showSideBar ? 'w-16' : 'sm:w-56'
      }`}
    >
      <Button
        className={`btn-ghost !btn-circle absolute ${
          showSideBar ? 'right-1' : 'right-0'
        } top-0 !text-black`}
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </Button>
      <div className="flex items-center justify-center mt-8">
        <Link href="/corporate/booking-summary">
          <img
            src={
              !showSideBar
                ? '/images/logo.png'
                : '/images/corporate/sidebar/logo-short.svg'
            }
            className={`${
              !showSideBar
                ? 'w-[10rem] h-[3.5rem]'
                : 'w-[1.5rem] h-[1.75rem] mt-5 -mb-6'
            } transition-all`}
            alt="roldrive-logo"
          />
        </Link>
      </div>
      <div className="mt-12 text-primary" />
      {filteredSideBarMenu.map((menuItem) => (
        <li className="mb-2 tooltip custom-tooltip tooltip-right overflow-visible" key={menuItem.label} data-tip={`${menuItem?.label}`}>
          <Link
            href={menuItem.link}
            className={`${showSideBar && 'px-3 py-2'} !rounded-lg focus:!bg-pry-100 ${
              pathName === menuItem.link && 'bg-pry-100'
            }`}
            onClick={() => { if (showNewBooking) setShowNewBooking(false); if (showViewBooking) setShowViewBooking(false); }}
          >
            <img
              src={pathName === menuItem.link ? menuItem.activeIcon : menuItem.icon}
              alt=""
              className={`flex-none ${
                showSideBar ? 'w-6 h-6' : 'w-5 h-5'
              }`}
            />
            {!showSideBar && (
              <p
                className={`font-medium ml-1 ${
                  pathName === menuItem.link ? 'text-primary' : '!text-gray-700'
                }`}
              >
                {menuItem.label}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
