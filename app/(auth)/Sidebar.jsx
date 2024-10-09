'use client';

import Link from 'next/link';
import { FaBusinessTime, FaUserEdit } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Button from 'components/Button';

function Sidebar({
  setShowSidebar, showSidebar, isOpend, setisOpend,
}) {
  const pathName = usePathname();
  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 bg-[#223544] ${isOpend || showSidebar ? 'w-64' : 'w-16'
      }  h-screen transition-transform translate-x-0 z-50 hidden sm:block`}
      aria-label="Sidebar"
      onMouseEnter={() => {
        if (!isOpend) {
          setShowSidebar(true);
        }
      }}
      onMouseLeave={() => {
        if (!isOpend) {
          setShowSidebar(false);
        }
      }}
    >
      <div className="h-full overflow-y-auto !text-black !bg-[#223544]">
        <Button
          className="btn-ghost text-2xl mt-6 p-1 ml-3"
          onClick={() => {
            setisOpend(!isOpend);
          }}
        >
          <FiMenu className="relative" />
        </Button>
        <ul className="pt-12 space-y-2 font-medium pl-3 pr-3">
          <li>
            <Link
              href="/booking-management"
              className={`flex items-center p-2 rounded-lg  hover:bg-primary  ${pathName === '/booking-management'
                ? 'bg-primary !text-white'
                : 'text-white'
              }`}
            >
              <FaBusinessTime className="w-6 h-6 text-dark" />
              {(isOpend || showSidebar) && (
                <p className="ml-3 text-dark">Bookings</p>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/profile-management"
              className={`flex items-center p-2 rounded-lg hover:bg-primary ${pathName === '/profile-management'
                ? 'bg-primary !text-white'
                : 'text-white'
              }`}
            >
              <FaUserEdit className="w-6 h-6 text-dark" />
              {(isOpend || showSidebar) && (
                <span className="ml-3">My Account</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

// 'use client';

// import Link from 'next/link';
// import { FaBusinessTime, FaUserEdit } from 'react-icons/fa';
// import { FiMenu } from 'react-icons/fi';
// import { usePathname } from 'next/navigation';
// import Button from 'components/Button';

// function Sidebar({
//   setShowSidebar, showSidebar, isOpend, setisOpend,
// }) {
//   const pathName = usePathname();
//   return (
//     <aside
//       id="default-sidebar"
//       className={`fixed top-0 left-0 z-40 ${
//         isOpend || showSidebar ? 'w-64' : 'w-16'
//       }  h-screen transition-transform translate-x-0 z-50 hidden sm:block`}
//       aria-label="Sidebar"
//       onMouseEnter={() => {
//         if (!isOpend) {
//           setShowSidebar(true);
//         }
//       }}
//       onMouseLeave={() => {
//         if (!isOpend) {
//           setShowSidebar(false);
//         }
//       }}
//     >
//       <div className="h-full overflow-y-auto bg-[#314250]">
//         <Button
//           className=" btn-ghost !text-white text-2xl mt-6 p-1 ml-3"
//           onClick={() => {
//             setisOpend(!isOpend);
//           }}
//         >
//           <FiMenu className="relative" />
//         </Button>
//         <ul className="pt-12 space-y-2 font-medium pl-3 pr-3">
//           <li>
//             <Link
//               href="/booking-management"
//               className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-200 hover:text-gray-700`}
//             >
//               <FaBusinessTime className="w-6 h-" />
//               {(isOpend || showSidebar) && (
//                 <span className="ml-3 ">Bookings</span>
//               )}
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/profile-management"
//               className={`flex items-center p-2 text-white hover:bg-gray-200 hover:text-gray-900 rounded-lg`}
//             >
//               <FaUserEdit className="w-6 h-6" />
//               {(isOpend || showSidebar) && (
//                 <span className="ml-3 ">My Account</span>
//               )}
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;
