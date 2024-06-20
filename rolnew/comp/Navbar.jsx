'use client';

import { useState } from 'react';
import { isSidebarOpenAtom } from 'rolnew/context/atoms';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from 'rolnew/ui/Button';
import NewDropdown from 'components/ui/NewDropdown';

const navLinks = [
  {
    route: '/rolnew/all-services',
    label: 'Services',
    subLinks: [
      { route: '/rolnew/road-shows', label: 'Road shows' },
      { route: '/rolnew/intercity-transfers', label: 'Intercity Transfers' },
      {
        route: '/rolnew/event-transfers',
        label: 'Event Services',
      },
      {
        route: '/rolnew/wedding-service',
        label: 'Wedding Services',
      },
      {
        route: '/rolnew/corporate-service',
        label: 'Corporate Services',
      },
      { route: '/rolnew/cities-sightseeing', label: 'Cities Sightseeing' },
      {
        route: '/rolnew/private-jet-chauffeur',
        label: 'Private Jet Chauffeur',
      },
    ],
  },
  {
    route: '/rolnew/fleet',
    label: 'Fleet',
  },
  { route: '/rolnew/business-solution', label: 'Business Solutions' },
  {
    route: '/rolnew/cities',
    label: 'Cities',
    subLinks: [
      { route: '/rolnew/cities/dubai', label: 'Dubai' },
      { route: '/rolnew/cities/london', label: 'London' },
      { route: '/rolnew/cities/newyork', label: 'New-York' },
      { route: '/rolnew/cities/paris', label: 'Paris' },
      { route: '/rolnew/cities/tokyo', label: 'Tokyo' },
    ],
  },
  {
    route: '/rolnew/airport-transfers',
    label: 'Airport Transfers',
    subLinks: [
      {
        route: '/rolnew/airport-transfers/london',
        label: 'Airport Transfer London',
        subLinks: [
          {
            route: '/rolnew/airport-transfers/london/heathrow',
            label: 'Heathrow',
          },
          {
            route: '/rolnew/airport-transfers/london/gatwick',
            label: 'Gatwick',
          },
          {
            route: '/rolnew/airport-transfers/london/londoncity',
            label: 'London-City',
          },
          {
            route: '/rolnew/airport-transfers/london/londonsouthend',
            label: 'London-Southend',
          },
          {
            route: '/rolnew/airport-transfers/london/londonstansted',
            label: 'London-Stansted',
          },
          { route: '/rolnew/airport-transfers/london/luton', label: 'Luton' },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const pathname = usePathname();

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  return (
    <>
      <div className='fixed top-0 h-[72px] w-full z-30 transition shadow-lg bg-[#223544] xl:pl-[130px] xl:pr-[82px] md:pl-[60px] md:pr-[40px] 2xl:px-0'>
        <div className='w-full h-full'>
          <div className='2xl:container 2xl:mx-auto 2xl:px-[130px] flex sm:justify-between gap-4 items-center h-full'>
            <div className='flex gap-4 items-center'>
              <button
                onClick={() => setIsSidebarOpen(true)}
                type='button'
                className='lg:hidden h-8 w-8 text-white'
                aria-label='menu'
              >
                <svg
                  className='w-full h-full flex-none'
                  fill='none'
                  strokeWidth={2}
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </button>
              <Link
                href='/rolnew'
                className='hidden flex-none sm:block items-center'
              >
                <img
                  className='h-[50px] w-[155px]'
                  src='/rolnew/global/logo.svg'
                  alt='logo'
                />
              </Link>
              <Link href='/rolnew' className='flex-none sm:hidden items-center'>
                <img
                  className='h-[50px] w-[90px]'
                  src='/rolnew/global/logo.svg'
                  alt='logo'
                />
              </Link>
            </div>
            <div className='items-center gap-4 hidden lg:flex h-full'>
              {navLinks.map((item, index) => (
                <div
                  key={item.route}
                  className={`relative h-full flex items-center justify-center ${
                    item.subLinks &&
                    'dropdown dropdown-bottom dropdown-right md:dropdown-hover'
                  } pop`}
                >
                  {item.subLinks ? (
                    <>
                      <Link
                        href={item.route}
                        tabIndex={index}
                        className={`text-white ${
                          pathname === item.route ? 'font-normal' : ''
                        } text-sm hover:bg-[rgb(255,255,255)]/20 hover:rounded-md underline-offset-2 font-medium px-2 whitespace-nowrap`}
                      >
                        {item.label}
                      </Link>
                      <ul
                        tabIndex={index}
                        className='dropdown-content z-[1] p-2 w-fit sub-menu hidden group-hover:block'
                      >
                        {item.subLinks.map((subLink) => (
                          <li
                            key={subLink.route}
                            className='relative group hover:bg-gray-700'
                          >
                            {subLink.subLinks ? (
                              <div className='relative'>
                                <Link
                                  href={subLink.route}
                                  className='text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100'
                                >
                                  {subLink.label}
                                </Link>
                                <ul className='absolute left-full mt-5 top-0 hidden group-hover:block z-[1] p-2 w-fit sub-menu'>
                                  {subLink.subLinks.map((nestedSubLink) => (
                                    <li key={nestedSubLink.route}>
                                      <Link
                                        className='text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100'
                                        href={nestedSubLink.route}
                                      >
                                        {nestedSubLink.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <Link
                                className='text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100'
                                href={subLink.route}
                              >
                                {subLink.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.route}
                      className={`text-white ${
                        pathname === item.route ? 'font-normal' : ''
                      } text-sm hover:bg-[rgb(255,255,255)]/20 hover:rounded-md underline-offset-2 font-medium px-2 whitespace-nowrap pop`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className='hidden sm:flex items-center gap-4'>
              <div className='flex gap-4 items-center pop mr-2' type='button'>
                <img src='/images/navbar/icon.png' alt='' className='h-5 w-4' />
              </div>
              <button className='flex gap-2 items-center pop' type='button'>
                <img
                  src='/rolnew/nav/whatsapp.svg'
                  alt=''
                  className='h-5 w-5'
                />
                <p className='font-medium'>Contact Us</p>
              </button>
              <Link href='/login'>
                <Button className='w-[120px]' white>
                  Sign In
                </Button>
              </Link>
            </div>
            <div className='sm:hidden absolute flex flex-row right-5 gap-4'>
              <div className='flex gap-4 items-center pop' type='button'>
                <img src='/images/navbar/icon.png' alt='' className='h-5 w-4' />
              </div>
              <Link href='/login'>
                <Button className='w-[120px]' white>
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode='sync'>
        {isSidebarOpen && (
          <motion.div
            initial={{
              x: '-100%',
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            exit={{
              x: '-100%',
            }}
            className='fixed top-0 left-0 h-screen overflow-y-auto z-50 w-[16rem] bg-[#223544] py-8 shadow-md px-8 lg:hidden'
          >
            <div className='relative bg-[#223544]'>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className='absolute right-0 hover:scale-110 active:scale-90 transition-[scale]'
                type='button'
                aria-label='close'
              ></button>
              <Link href='/' className='flex items-center'>
                <img
                  className='h-10 w-[170px]'
                  src='/rolnew/global/logo.svg'
                  alt='logo'
                />
              </Link>
            </div>
            <div className='flex flex-col gap-4 mt-10'>
              {navLinks.map((item, index) => (
                <div key={item.route}>
                  <div
                    className={`${
                      pathname === item.route ? 'font-bold' : ''
                    } hover:bg-[rgb(255,255,255)]/20 hover:rounded-md px-3 py-2 text-[#E1E1E1] text-sm leading-5 cursor-pointer`}
                    role='button'
                    onClick={
                      item.subLinks
                        ? () => toggleDropdown(index)
                        : () => setIsSidebarOpen(false)
                    }
                  >
                    <Link href={item.route} className='block w-full h-full'>
                      {item.label}
                    </Link>
                  </div>
                  {item.subLinks && openDropdownIndex === index && (
                    <div className='ml-4 space-y-1 flex flex-col mt-2 p-2 rounded'>
                      {item.subLinks.map((subLink) => (
                        <Link
                          key={subLink.route}
                          className='text-[#E1E1E1] hover:text-[#223544] w-[176px] h-[36px] text-sm font-bold leading-5 text-left items-center block p-2 rounded-md hover:bg-[rgb(229,234,250)]/100'
                          href={subLink.route}
                          onClick={() => {
                            setIsSidebarOpen(false);
                            setOpenDropdownIndex(null);
                          }}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <hr className='w-[192px] border-[0.5px]' />
            </div>

            <div className='flex flex-col flex-start gap-4 mt-4'>
              <NewDropdown
                className='w-full border-[1px] rounded-lg border-[#828282] bg-[#223544] text-white'
                label='Eng'
              />
              <button
                className='flex gap-2 items-center pop mt-2'
                type='button'
              >
                <img
                  src='/rolnew/nav/whatsapp.svg'
                  alt=''
                  className='h-5 w-5'
                />
                <p className='font-medium'>Contact Us</p>
              </button>

              {['call', 'email'].map((item) => (
                <button
                  key={item}
                  type='button'
                  aria-label={item}
                  className='pop flex flex-row justify-start mr-12 gap-2'
                >
                  <img
                    src={`/rolnew/home/${item}.svg`}
                    alt=''
                    className='h-[20px] w-[210px]'
                  />
                </button>
              ))}
              <hr className='w-[192px] border-[0.3px]' />
            </div>

            <div className='flex flex-col gap-3'>
              <div className='text-left font-medium text-base leading-6 mt-4'>
                <button
                  type='button'
                  className='pop text-[#E5EAFA] h-[16px] text-lg'
                >
                  Log Out
                </button>
              </div>
              <div className='flex flex-col mt-4'>
                <p className='text-[#E5EAFA] text-sm'>Get the App Now</p>
                <img
                  src='/images/navbar/download.png'
                  className='w-[200px] h-[40px] mt-4'
                  alt='download'
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
