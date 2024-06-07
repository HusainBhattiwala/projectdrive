'use client';

import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Nav } from 'components/corporate/Nav';
import 'react-toastify/dist/ReactToastify.css';

function LayOutWrap({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="min-h-[100vh] bg-[#FEF8F4]">
        <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div>{showSideBar}</div>
        <div
          className={`pt-24 pr-4 sm:pr-8 ease-in-out duration-300 overflow-x-auto 2xl:container mx-auto ${
            showSideBar ? 'pl-20 sm:pl-24' : 'pl-[16rem]'
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default LayOutWrap;
