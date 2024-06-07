'use client';

import React, { useState } from 'react';
import {
  FaAlignLeft, FaBusinessTime, FaTimes, FaUserEdit,
} from 'react-icons/fa';
import P from '../typography/P';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <aside className={`fixed top-0 left-0 z-20  h-screen pt-20 bg-white border-r border-gray-200 translate-x-0 transition ease-in-out delay-150 duration-300  ${showSidebar ? 'w-64' : 'w-16'}`}>
      {
      !showSidebar ? <FaAlignLeft className=" absolute -right-4 cursor-pointer" onMouseEnter={() => { setShowSidebar(!showSidebar); }} /> : <FaTimes className=" absolute -right-4 cursor-pointer" onClick={() => { setShowSidebar(!showSidebar); }} />
    }
      <div className={`h-full pb-4 overflow-y-auto bg-white !overflow-visible ${!showSidebar && 'px-3'}`}>
        <ul className="space-y-2 w-full">
          <li data-tip="Bookings Summary" className={`${!showSidebar && 'tooltip tooltip-right tooltip-primary'} z-50 w-full`}>
            <a href="/booking-management" className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100  cursor-pointer ${!showSidebar && 'justify-center'}`} onClick={() => { setShowSidebar(false); }}>
              <FaBusinessTime className="w-6 h-6 text-primary" />
              {
              showSidebar
              && <P className="ml-3">Bookings Summary</P>
            }
            </a>
          </li>
          <li data-tip="My Profile" className={`${!showSidebar && 'tooltip tooltip-right tooltip-primary'} z-50 w-full`}>
            <a href="/profile-management" className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ${!showSidebar && 'justify-center'}`} data-tip="Profile">
              <FaUserEdit className="w-6 h-6 text-primary" />
              {
              showSidebar
              && <P className="ml-3">My Profile</P>
            }
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
