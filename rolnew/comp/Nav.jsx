// 'use client';

// import { isSidebarOpenAtom } from 'rolnew/context/atoms';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useAtom } from 'jotai';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Button from 'rolnew/ui/Button';

// const navLinks = [
//   { route: '/rolnew/intercity-transfers', label: 'Services' },
//   { route: '/fleet', label: 'Fleet' },
//   { route: '/rolnew/businessSolution', label: 'Business Solutions' },
//   { route: '/rolnew/cities', label: 'Cities' },
//   { route: '/rolnew/airport-transfers', label: 'Airport Transfers' },
// ];

// export default function Nav() {
//   const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

//   const pathname = usePathname();

//   return (
//     <>
//       <div className="fixed top-0 h-[4.5rem] w-full z-40 transition shadow-lg bg-[#223544]">
//         <div className="max-w-[90rem] mx-auto h-full">
//           <div className="container mx-auto flex sm:justify-between gap-4 items-center h-full px-6">
//             <div className="flex gap-4 items-center">
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 type="button"
//                 className="lg:hidden h-8 w-8 text-white"
//                 aria-label="menu"
//               >
//                 <svg
//                   className="w-full h-full flex-none"
//                   fill="none"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                   />
//                 </svg>
//               </button>
//               <Link href="/" className="flex gap-2 items-center">
//                 <img
//                   className="h-10 w-40"
//                   src="/rolnew/global/logo.svg"
//                   alt="logo"
//                 />
//               </Link>
//             </div>

//             <div className="items-center gap-4 hidden lg:flex">
//               {navLinks.map((item) => (
//                 <Link
//                   key={item.route}
//                   className={`text-white ${
//                     pathname === item.route && 'font-bold'
//                   } text-lg hover:underline underline-offset-2 font-medium`}
//                   href={item.route}
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>

//             <div className="hidden sm:flex items-center gap-4">
//               <button className="flex gap-2 items-center pop" type="button">
//                 <img
//                   src="/rolnew/nav/whatsapp.svg"
//                   alt=""
//                   className="h-5 w-5"
//                 />
//                 <p className="font-medium">Contact Us</p>
//               </button>
//               <Button white>Sign In</Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence mode="sync">
//         {isSidebarOpen && (
//           <motion.div
//             initial={{
//               x: '-100%',
//             }}
//             animate={{
//               x: 0,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: 'easeOut',
//               // type: 'spring',
//             }}
//             exit={{
//               x: '-100%',
//             }}
//             className="fixed top-0 left-0 h-screen overflow-y-auto z-50 w-[16rem] translucent py-8 shadow-md px-8 lg:hidden"
//           >
//             <div className="relative">
//               <button
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="absolute right-0 hover:scale-110 active:scale-90 transition-[scale]"
//                 type="button"
//                 aria-label="close"
//               >
//                 <svg
//                   fill="none"
//                   className="text-red-500 h-8 w-8"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18 18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex flex-col gap-4 mt-10">
//               {navLinks.map((item) => (
//                 <Link
//                   key={item.route}
//                   className={`${
//                     pathname === item.route && 'font-bold'
//                   } text-lg hover:underline underline-offset-2 font-medium`}
//                   href={item.route}
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
