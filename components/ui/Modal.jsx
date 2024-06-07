'use client';

function Modal({ children }) {
  return (
    <div id="defaultModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-modal h-full bg-[#11202DB2] bg-opacity-90 flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        { children }
      </div>
    </div>

  );
}

export default Modal;
