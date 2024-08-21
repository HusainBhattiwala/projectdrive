"use client";

import { useState, useContext } from "react";
import { isSidebarOpenAtom } from "rolnew/context/atoms";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "rolnew/ui/Button";
import NewDropdown from "components/ui/NewDropdown";
// import { Montserrat } from 'next/font/google';
import { LoginContext } from 'context/LoginContext';
import AuthWrap from "app/(auth)/AuthWrap";
import AppDownloadLinks from "./AppDownloadLinks";

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '800'] });

const navLinks = [
  {
    route: "#",
    label: "Services",
    subLinks: [
      { route: "/road-shows", label: "Roadshow Transfers" },
      { route: "/intercity-rides", label: "Intercity Transfers" },
      { route: "/event-transportation-services", label: "Event Transfers" },
      { route: "/wedding-chauffeur-service", label: "Wedding Transfers" },
      { route: "/corporate-chauffeur-service-london", label: "Corporate Transfers" },
      { route: "/sightseening-chauffeur-service", label: "Cities Sightseeing" },
      { route: "/private-jet-chauffeur-service", label: "Private Jet Chauffeur", },
    ],
  },
  {
    route: "/fleet",
    label: "Fleet",
  },

  {
    route: "#",
    label: "Cities",
    subLinks: [
      { route: "/chauffeur-service-in-london", label: "London" },
      { route: "/chauffeur-service-in-dubai", label: "Dubai" },
      { route: "/chauffeur-service-in-new-york", label: "New York" },
      { route: "/chauffeur-service-in-paris", label: "Paris" },
      { route: "/chauffeur-service-in-tokyo", label: "Tokyo" },
    ],
  },
  {
    route: "/airport-transfers",
    label: "Airport Transfers",
    subLinks: [
      {
        route: "/airport-transfers/airport-transfer-london",
        label: "London",
        subLinks: [
          {
            route: "/airport-transfers/airport-transfer-london/airport-transfer-heathrow",
            label: "Heathrow Airport",
          },
          {
            route: "/airport-transfers/airport-transfer-london/airport-transfer-gatwick",
            label: "Gatwick Airport",
          },
          {
            route: "/airport-transfers/airport-transfer-london/airport-transfer-london-city",
            label: "London City Airport",
          },
          {
            route: "/airport-transfers/airport-transfer-london/airport-transfer-london-southend",
            label: "London Southend Airport",
          },
          {
            route: "/airport-transfers/airport-transfer-london/airport-transfer-london-stansted",
            label: "London Stansted Airport",
          },
          { route: "/airport-transfers/airport-transfer-london/airport-transfer-luton", label: "Luton Airport" },
        ],
      },
      { route: "/airport-transfers/airport-transfer-dubai", label: "Dubai" },
      { route: "/airport-transfers/airport-transfer-new-york", label: "New York" },
      // { route: "/rolnew/airport-transfers/paris", label: "Paris Airport" },
      // { route: "/rolnew/airport-transfers/tokyo", label: "Tokyo Airport" },
    ],
  },
  // { route: '/rolnew/business-solution', label: 'Business Solutions' },
];

function NavbarContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState(null);
  const pathname = usePathname();
  const { userName, logout } = useContext(LoginContext); // Use context



  const handleMouseEnter = (index) => {
    setOpenDropdownIndex(index);
    setOpenSubDropdownIndex(null);
  };

  const handleMouseLeave = () => {
    setOpenDropdownIndex(null);
    setOpenSubDropdownIndex(null);
  };

  const handleSubMouseEnter = (subIndex) => {
    setOpenSubDropdownIndex(subIndex);
  };

  const handleSubMouseLeave = () => {
    setOpenSubDropdownIndex(null);
  };

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  const toggleSubDropdown = (index) => {
    if (openSubDropdownIndex === index) {
      setOpenSubDropdownIndex(null);
    } else {
      setOpenSubDropdownIndex(index);
    }
  };

  const closeAll = () => {
    setIsSidebarOpen(false);
    setOpenDropdownIndex(null);
    setOpenSubDropdownIndex(null);
  };

  return (
    <>
      <div className={`fixed top-0 h-[72px] w-full z-30 transition shadow-lg bg-[#223544] xl:pl-[130px] xl:pr-[82px] md:pl-[60px] md:pr-[40px] 2xl:px-0`}>
        <div className="w-full h-full">
          <div className="2xl:container 2xl:mx-auto 2xl:px-[130px] flex sm:justify-between gap-4 items-center h-full">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                type="button"
                className="lg:hidden h-8 w-8 text-white ml-5 sm:ml-0"
                aria-label="menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.3335 5H16.6668M3.3335 10H10.0002M3.3335 15H16.6668"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Link href="/" className="hidden flex-none sm:block items-center">
                <img
                  className="h-[50px] w-[155px]"
                  src="/rolnew/global/logo.svg"
                  alt="logo"
                />
              </Link>
              <Link href="/" className="flex-none sm:hidden items-center">
                <img
                  className="h-[50px] w-[90px]"
                  src="/rolnew/global/logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="items-center gap-4 hidden lg:flex h-full">
              {navLinks.map((item, index) => (
                <div
                  key={item.route}
                  className="relative h-full flex items-center justify-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.subLinks ? (
                    <>
                      <Link
                        href={item.route}
                        className={`text-white ${pathname === item.route ? "font-normal" : ""
                          } text-md font-medium px-2 whitespace-nowrap hover:bg-[rgba(255,255,255,0.2)] hover:rounded-md`}
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                      {openDropdownIndex === index && (
                        <ul className="absolute top-14 z-[10] left-4 mt-1 p-2 w-fit sub-menu before:backdrop-blur-2xl before:backdrop-hack">
                          {item.subLinks.map((subLink, subIndex) => (
                            <li
                              key={subLink.route}
                              className="relative"
                              onMouseEnter={() => handleSubMouseEnter(subIndex)}
                              onMouseLeave={handleSubMouseLeave}
                            >
                              {subLink.subLinks ? (
                                <div className="relative">
                                  <Link
                                    href={subLink.route}
                                    className="text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100"
                                    onClick={closeAll}
                                  >
                                    {subLink.label}
                                  </Link>
                                  {openSubDropdownIndex === subIndex && (
                                    <ul className="absolute left-full top-0 mt-3 z-50 p-2 w-fit sub-menu backdrop-blur-2xl">
                                      {subLink.subLinks.map((nestedSubLink) => (
                                        <li key={nestedSubLink.route}>
                                          <Link
                                            className="text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100"
                                            href={nestedSubLink.route}
                                            onClick={closeAll}
                                          >
                                            {nestedSubLink.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  className="text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100"
                                  href={subLink.route}
                                  onClick={closeAll}
                                >
                                  {subLink.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.route}
                      className={`text-white ${pathname === item.route ? "font-normal" : ""
                        } text-sm hover:bg-[rgb(255,255,255)]/20 hover:rounded-md underline-offset-2 font-medium px-2 whitespace-nowrap pop`}
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://wa.me/442045920966 "
                target="_blank"
                rel="noreferrer"
                aria-label="Open WhatsApp Chat"
              >
                <button className="flex gap-2 items-center pop" type="button">
                  <img
                    src="/rolnew/nav/whatsapp.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <p className="font-medium">24/7 Chauffeur Support</p>
                </button>
              </a>
              {!userName ? (
                <Link href="/login">
                  <Button className="w-[120px]" white>
                    Sign In
                  </Button>
                </Link>
              ) : (
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
                    className="p-0 mt-0 shadow menu menu-compact dropdown-content bg-base-100 w-52"
                  >
                    <li className="rounded-none !text-gray-700">
                      <Link
                        href="/booking-management"
                        className="justify-between !rounded-none !text-gray-700"
                      >
                        Bookings
                      </Link>
                    </li>
                    <li>
                      <Link href="/profile-management" className="rounded-none !text-gray-700">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="rounded-none text-left !bg-white !text-gray-700"
                        href="/login"
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="sm:hidden absolute flex flex-row right-5 gap-4">
              {!userName ? (
                <Link href="/login">
                  <Button className="w-[120px]" white>
                    Sign In
                  </Button>
                </Link>
              ) : (
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
                    className="p-0 mt-0 shadow menu menu-compact dropdown-content bg-base-100 w-52"
                  >
                    <li className="rounded-none !text-gray-700">
                      <Link
                        href="/booking-management"
                        className="justify-between !rounded-none !text-gray-700"
                      >
                        Bookings
                      </Link>
                    </li>
                    <li>
                      <Link href="/profile-management" className="rounded-none !text-gray-700">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="rounded-none text-left !bg-white !text-gray-700"
                        href="/login"
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="sync">
        {isSidebarOpen && (
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            exit={{
              x: "-100%",
            }}
            className={`fixed top-0 left-0 h-screen overflow-y-auto z-50 w-[20rem] bg-[#223544] py-8 shadow-md px-8 lg:hidden`}
          >
            <div className="relative bg-[#223544]">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-0 hover:scale-110 active:scale-90 transition-[scale]"
                type="button"
                aria-label="close"
              ></button>
              <Link href="/" className="flex items-center">
                <img
                  className="h-10 w-[170px]"
                  src="/rolnew/global/logo.svg"
                  alt="logo"
                />
              </Link>

              <hr className="w-full border-[0.5px] border-[#E1E1E1]/20 mt-8" />
            </div>

            <div className="flex flex-col gap-4 mt-5">
              {navLinks.map((item, index) => (
                <div key={item.route}>
                  <div
                    className={`${pathname === item.route ? "font-bold" : ""
                      } hover:bg-[rgb(255,255,255)]/20 hover:rounded-md px-3 py-2 text-[#E1E1E1] text-sm leading-5 cursor-pointer flex justify-between items-center`}
                  >
                    <Link href={item.route} className="block w-full h-full" onClick={() => setIsSidebarOpen(false)}>
                      {item.label}
                    </Link>
                    {item.subLinks && (
                      <img
                        alt='arrow-down'
                        className={`w-6 h-6 transition-transform cursor-pointer ${openDropdownIndex === index ? 'transform rotate-180' : ''}`}
                        src='/rolnew/global/icons/arrow-down.svg'
                        onClick={() => toggleDropdown(index)}
                      />
                    )}
                  </div>
                  {item?.subLinks && openDropdownIndex === index && (
                    <div className="ml-4 space-y-1 flex flex-col mt-2 p-2 rounded">
                      {item.subLinks.map((subLink, subIndex) => (
                        <div key={subLink.route}>
                          <div
                            className="flex justify-between text-[#E1E1E1] hover:text-[#223544] w-[176px] h-[36px] text-sm font-bold leading-5 text-left items-center p-2 rounded-md hover:bg-[rgb(229,234,250)]/100"
                          >
                            <Link href={subLink.route} className="block w-full h-full" onClick={() => setIsSidebarOpen(false)}>
                              {subLink.label}
                            </Link>
                            {subLink.subLinks && (
                              <img
                                alt='arrow-down'
                                className={`w-6 h-6 transition-transform cursor-pointer ${openSubDropdownIndex === subIndex ? 'transform rotate-180' : ''}`}
                                src='/rolnew/global/icons/arrow-down.svg'
                                onClick={() => toggleSubDropdown(subIndex)}
                              />
                            )}
                          </div>
                          {openSubDropdownIndex === subIndex && subLink.subLinks && (
                            <div className="ml-4 space-y-1 flex flex-col mt-2 p-2 rounded">
                              {subLink.subLinks.map((nestedSubLink) => (
                                <Link
                                  key={nestedSubLink.route}
                                  className="text-[#E1E1E1] hover:text-[#223544] w-[176px] h-[36px] text-sm font-bold leading-5 text-left items-center block p-2 rounded-md hover:bg-[rgb(229,234,250)]/100"
                                  href={nestedSubLink.route}
                                  onClick={() => setIsSidebarOpen(false)}
                                >
                                  {nestedSubLink.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <hr className="w-full border-[0.5px] border-[#E1E1E1]/20" />
            </div>

            <div className="flex flex-col flex-start gap-4 mt-4">
              <NewDropdown
                className="w-full border-[1px] rounded-lg border-[#828282] bg-[#223544] text-white"
                label="Eng"
              />

              <a
                href="https://wa.me/442045920966 "
                target="_blank"
                rel="noreferrer"
                aria-label="Open WhatsApp Chat"
              >
                <button
                  className="flex gap-2 items-center pop mt-2"
                  type="button"
                >
                  <img
                    src="/rolnew/nav/whatsapp.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <p className="font-medium mt-2">24/7 Chauffeur Support</p>
                </button>
              </a>

              {/* Call */}
              <a
                href="tel:+442045920966"
                target="_blank"
                rel="noreferrer"
                aria-label="Call"
              >
                <button
                  type="button"
                  aria-label="call"
                  className="pop flex flex-row justify-start mr-28 gap-2"
                >
                  <img
                    src="/rolnew/home/call.svg"
                    alt="call icon"
                    className="h-[20px] w-[210px]"
                  />
                </button>
              </a>

              {/* Email */}
              <a
                href="mailto:booking@roldrive.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <button
                  type="button"
                  aria-label="email"
                  className="pop flex flex-row justify-start mr-28 gap-2"
                >
                  <img
                    src="/rolnew/home/email.svg"
                    alt="email icon"
                    className="h-[20px] w-[210px]"
                  />
                </button>
              </a>

              <hr className="w-full border-[0.5px] border-[#E1E1E1]/20 mt-2" />
            </div>

            <div className="flex flex-col gap-3">
              {userName &&
                <div className="text-left font-medium text-base leading-6 mt-4">
                  <Link
                    className="text-[#E1E1E1] w-[176px] h-[36px] text-md font-boldtext-left items-center"
                    href="/login"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </div>
              }
              <div className="flex flex-col mt-4">
                <p className="text-[#E5EAFA] text-sm">Get the App Now</p>

                <AppDownloadLinks />

                {/* <Link
                  className="text-[#E1E1E1] w-[176px] h-[36px] text-md font-boldtext-left items-center"
                  href="https://apps.apple.com/us/app/roldrive/id6470998693"
                >
                  <img
                    src="/images/navbar/download.png"
                    className="w-[200px] h-[40px] mt-4"
                    alt="download"
                  />
                </Link> */}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar() {
  return (
    <AuthWrap sidebarVisible={false}>
      <NavbarContent />
    </AuthWrap>
  );
}

// export default function Navbar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);
//   const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
//   const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState(null);
//   const pathname = usePathname();

//   const handleMouseEnter = (index) => {
//     setOpenDropdownIndex(index);
//     setOpenSubDropdownIndex(null);
//   };

//   const handleMouseLeave = () => {
//     setOpenDropdownIndex(null);
//     setOpenSubDropdownIndex(null);
//   };

//   const handleSubMouseEnter = (subIndex) => {
//     setOpenSubDropdownIndex(subIndex);
//   };

//   const handleSubMouseLeave = () => {
//     setOpenSubDropdownIndex(null);
//   };

//   const toggleDropdown = (index) => {
//     if (openDropdownIndex === index) {
//       setOpenDropdownIndex(null);
//     } else {
//       setOpenDropdownIndex(index);
//     }
//   };

//   const toggleSubDropdown = (index) => {
//     if (openSubDropdownIndex === index) {
//       setOpenSubDropdownIndex(null);
//     } else {
//       setOpenSubDropdownIndex(index);
//     }
//   };

//   const closeAll = () => {
//     setIsSidebarOpen(false);
//     setOpenDropdownIndex(null);
//     setOpenSubDropdownIndex(null);
//   };

//   return (
//     <>
//       <div className={`fixed top-0 h-[72px] w-full z-30 transition shadow-lg bg-[#223544] xl:pl-[130px] xl:pr-[82px] md:pl-[60px] md:pr-[40px] 2xl:px-0 ${montserrat.className}`}>
//         <div className="w-full h-full">
//           <div className="2xl:container 2xl:mx-auto 2xl:px-[130px] flex sm:justify-between gap-4 items-center h-full">
//             <div className="flex gap-4 items-center">
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 type="button"
//                 className="lg:hidden h-8 w-8 text-white ml-5 sm:ml-0  "
//                 aria-label="menu"
//               >
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M3.3335 5H16.6668M3.3335 10H10.0002M3.3335 15H16.6668"
//                     stroke="white"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </svg>
//               </button>
//               <Link href="/" className="hidden flex-none sm:block items-center">
//                 <img
//                   className="h-[50px] w-[155px]"
//                   src="/rolnew/global/logo.svg"
//                   alt="logo"
//                 />
//               </Link>
//               <Link href="/" className="flex-none sm:hidden items-center">
//                 <img
//                   className="h-[50px] w-[90px]"
//                   src="/rolnew/global/logo.svg"
//                   alt="logo"
//                 />
//               </Link>
//             </div>
//             <div className="items-center gap-4 hidden lg:flex h-full">
//               {navLinks.map((item, index) => (
//                 <div
//                   key={item.route}
//                   className="relative h-full flex items-center justify-center"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {item.subLinks ? (
//                     <>
//                       <Link
//                         href={item.route}
//                         className={`text-white ${pathname === item.route ? "font-normal" : ""
//                           } text-sm font-medium px-2 whitespace-nowrap hover:bg-[rgba(255,255,255,0.2)] hover:rounded-md`}
//                         onClick={closeAll}
//                       >
//                         {item.label}
//                       </Link>
//                       {openDropdownIndex === index && (
//                         <ul className="absolute top-14 z-[10] left-4 mt-1 p-2 w-fit sub-menu before:backdrop-blur-2xl before:backdrop-hack">
//                           {item.subLinks.map((subLink, subIndex) => (
//                             <li
//                               key={subLink.route}
//                               className="relative"
//                               onMouseEnter={() => handleSubMouseEnter(subIndex)}
//                               onMouseLeave={handleSubMouseLeave}
//                             >
//                               {subLink.subLinks ? (
//                                 <div className="relative">
//                                   <Link
//                                     href={subLink.route}
//                                     className="text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100"
//                                     onClick={closeAll}
//                                   >
//                                     {subLink.label}
//                                   </Link>
//                                   {openSubDropdownIndex === subIndex && (
//                                     <ul className="absolute left-full top-0 mt-3 z-50 p-2 w-fit sub-menu backdrop-blur-2xl">
//                                       {subLink.subLinks.map((nestedSubLink) => (
//                                         <li key={nestedSubLink.route}>
//                                           <Link
//                                             className="text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100"
//                                             href={nestedSubLink.route}
//                                             onClick={closeAll}
//                                           >
//                                             {nestedSubLink.label}
//                                           </Link>
//                                         </li>
//                                       ))}
//                                     </ul>
//                                   )}
//                                 </div>
//                               ) : (
//                                 <Link
//                                   className="text-[#E1E1E1] hover:text-[#223544] w-[180px] px-3 py-3 text-sm font-bold leading-5 text-left flex items-center rounded-md hover:bg-[rgb(229,234,250)]/100"
//                                   href={subLink.route}
//                                   onClick={closeAll}
//                                 >
//                                   {subLink.label}
//                                 </Link>
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       href={item.route}
//                       className={`text-white ${pathname === item.route ? "font-normal" : ""
//                         } text-sm hover:bg-[rgb(255,255,255)]/20 hover:rounded-md underline-offset-2 font-medium px-2 whitespace-nowrap pop`}
//                       onClick={closeAll}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="hidden sm:flex items-center gap-4">
//               {/* <div className="flex gap-4 items-center pop mr-2" type="button">
//                 <img src="/images/navbar/icon.png" alt="" className="h-5 w-4" />
//               </div> */}

//               <a
//                 href="https://wa.me/442045920966 "
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Open WhatsApp Chat"
//               >
//                 <button className="flex gap-2 items-center pop" type="button">
//                   <img
//                     src="/rolnew/nav/whatsapp.svg"
//                     alt=""
//                     className="h-5 w-5"
//                   />
//                   <p className="font-medium">24/7 Chauffeur Support</p>
//                 </button>
//               </a>
//               {!userName &&
//                 <Link href="/login">
//                   <Button className="w-[120px]" white>
//                     Sign In
//                   </Button>
//                 </Link>
//               }
//             </div>
//             <div className="sm:hidden absolute flex flex-row right-5 gap-4">
//               {/* <div className="flex gap-4 items-center pop" type="button">
//                 <img src="/images/navbar/icon.png" alt="" className="h-5 w-4" />
//               </div> */}
//               {userName &&
//                 <Link href="/login">
//                   <Button className="w-[120px]" white>
//                     Sign In
//                   </Button>
//                 </Link>
//               }
//             </div>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence mode="sync">
//         {isSidebarOpen && (
//           <motion.div
//             initial={{
//               x: "-100%",
//             }}
//             animate={{
//               x: 0,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeOut",
//             }}
//             exit={{
//               x: "-100%",
//             }}
//             className={`fixed top-0 left-0 h-screen overflow-y-auto z-50 w-[20rem] bg-[#223544] py-8 shadow-md px-8 lg:hidden ${montserrat.className}`}
//           >
//             <div className="relative bg-[#223544]">
//               <button
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="absolute right-0 hover:scale-110 active:scale-90 transition-[scale]"
//                 type="button"
//                 aria-label="close"
//               ></button>
//               <Link href="/" className="flex items-center">
//                 <img
//                   className="h-10 w-[170px]"
//                   src="/rolnew/global/logo.svg"
//                   alt="logo"
//                 />
//               </Link>

//               <hr className="w-full border-[0.5px] border-[#E1E1E1]/20 mt-8" />
//             </div>

//             <div className="flex flex-col gap-4 mt-5">
//               {navLinks.map((item, index) => (
//                 <div key={item.route}>
//                   <div
//                     className={`${pathname === item.route ? "font-bold" : ""
//                       } hover:bg-[rgb(255,255,255)]/20 hover:rounded-md px-3 py-2 text-[#E1E1E1] text-sm leading-5 cursor-pointer flex justify-between items-center`}
//                   >
//                     <Link href={item.route} className="block w-full h-full" onClick={() => setIsSidebarOpen(false)}>
//                       {item.label}
//                     </Link>
//                     {item.subLinks && (
//                       <img
//                         alt='arrow-down'
//                         className={`w-6 h-6 transition-transform cursor-pointer ${openDropdownIndex === index ? 'transform rotate-180' : ''}`}
//                         src='/rolnew/global/icons/arrow-down.svg'
//                         onClick={() => toggleDropdown(index)}
//                       />
//                     )}
//                   </div>
//                   {item?.subLinks && openDropdownIndex === index && (
//                     <div className="ml-4 space-y-1 flex flex-col mt-2 p-2 rounded">
//                       {item.subLinks.map((subLink, subIndex) => (
//                         <div key={subLink.route}>
//                           <div
//                             className="flex justify-between text-[#E1E1E1] hover:text-[#223544] w-[176px] h-[36px] text-sm font-bold leading-5 text-left items-center p-2 rounded-md hover:bg-[rgb(229,234,250)]/100"
//                           >
//                             <Link href={subLink.route} className="block w-full h-full" onClick={() => setIsSidebarOpen(false)}>
//                               {subLink.label}
//                             </Link>
//                             {subLink.subLinks && (
//                               <img
//                                 alt='arrow-down'
//                                 className={`w-6 h-6 transition-transform cursor-pointer ${openSubDropdownIndex === subIndex ? 'transform rotate-180' : ''}`}
//                                 src='/rolnew/global/icons/arrow-down.svg'
//                                 onClick={() => toggleSubDropdown(subIndex)}
//                               />
//                             )}
//                           </div>
//                           {openSubDropdownIndex === subIndex && subLink.subLinks && (
//                             <div className="ml-4 space-y-1 flex flex-col mt-2 p-2 rounded">
//                               {subLink.subLinks.map((nestedSubLink) => (
//                                 <Link
//                                   key={nestedSubLink.route}
//                                   className="text-[#E1E1E1] hover:text-[#223544] w-[176px] h-[36px] text-sm font-bold leading-5 text-left items-center block p-2 rounded-md hover:bg-[rgb(229,234,250)]/100"
//                                   href={nestedSubLink.route}
//                                   onClick={() => setIsSidebarOpen(false)}
//                                 >
//                                   {nestedSubLink.label}
//                                 </Link>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <hr className="w-full border-[0.5px] border-[#E1E1E1]/20" />
//             </div>

//             <div className="flex flex-col flex-start gap-4 mt-4">
//               <NewDropdown
//                 className="w-full border-[1px] rounded-lg border-[#828282] bg-[#223544] text-white"
//                 label="Eng"
//               />

//               <a
//                 href="https://wa.me/442045920966 "
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Open WhatsApp Chat"
//               >
//                 <button
//                   className="flex gap-2 items-center pop mt-2"
//                   type="button"
//                 >
//                   <img
//                     src="/rolnew/nav/whatsapp.svg"
//                     alt=""
//                     className="h-5 w-5"
//                   />
//                   <p className="font-medium mt-2">24/7 Chauffeur Support</p>
//                 </button>
//               </a>

//               {/* Call */}
//               <a
//                 href="tel:+442045920966"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Call"
//               >
//                 <button
//                   type="button"
//                   aria-label="call"
//                   className="pop flex flex-row justify-start mr-28 gap-2"
//                 >
//                   <img
//                     src="/rolnew/home/call.svg"
//                     alt="call icon"
//                     className="h-[20px] w-[210px]"
//                   />
//                 </button>
//               </a>

//               {/* Email */}

//               <a
//                 href="mailto:booking@roldrive.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="Email"
//               >
//                 <button
//                   type="button"
//                   aria-label="email"
//                   className="pop flex flex-row justify-start mr-28 gap-2"
//                 >
//                   <img
//                     src="/rolnew/home/email.svg"
//                     alt="email icon"
//                     className="h-[20px] w-[210px]"
//                   />
//                 </button>
//               </a>

//               <hr className="w-full border-[0.5px] border-[#E1E1E1]/20 mt-2" />
//             </div>

//             <div className="flex flex-col gap-3">
//               <div className="text-left font-medium text-base leading-6 mt-4">
//                 <button
//                   type="button"
//                   className="pop text-[#E5EAFA] h-[16px] text-lg"
//                 >
//                   Log Out
//                 </button>
//               </div>
//               <div className="flex flex-col mt-4">
//                 <p className="text-[#E5EAFA] text-sm">Get the App Now</p>
//                 <img
//                   src="/images/navbar/download.png"
//                   className="w-[200px] h-[40px] mt-4"
//                   alt="download"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
