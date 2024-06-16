// "use client";

// import { useContext, useEffect, useState } from "react";
// import { ModalContext } from "context/ModalContext";

// import BookingEngine3 from "components/Booking/BookingEngine3";
// import { BookingProvider } from "context/BookingContext";

// function BookModal() {
//   const { closeModal, isOpen } = useContext(ModalContext);
//   const [focus, setFocus] = useState(false);
//   const [width, setWidth] = useState(1200);
//   const [height, setHeight] = useState(1000);

//   useEffect(() => {
//     function handleResize() {
//       setWidth(window.innerWidth);
//       setHeight(window.innerHeight);
//     }
//     window.addEventListener("resize", handleResize);
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div
//       className={`fixed top-0 right-0 left-0 z-30 flex justify-center items-center h-full overflow-hidden w-full bg-[#11202DB2] backdrop-blur-md ${
//         focus && "z-50"
//       } bg-opacity-50`}
//       onClick={() => closeModal()}
//     >
//       <div
//         className={`sm:w-[450px]  booking-background rounded-3xl z-100 ${
//           height > 600 ? "py-6 sm:px-6 px-4" : "py-4 sm:px-4 px-4"
//         }`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <BookingProvider>
//           <BookingEngine3 setFocus={setFocus} width={width} height={height} />
//         </BookingProvider>
//       </div>
//     </div>
//   );
// }

// export default BookModal;

"use client";

import { useContext, useEffect, useState } from "react";
import { ModalContext } from "context/ModalContext";

import BookingEngine3 from "components/Booking/BookingEngine3";
import { BookingProvider } from "context/BookingContext";

import "../../rolnew/section/home/css/booking.css";

function BookModal() {
  const { closeModal, isOpen } = useContext(ModalContext);
  const [focus, setFocus] = useState(false);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1000);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-30 flex justify-center items-center h-full overflow-hidden w-full bg-[#11202DB2] backdrop-blur-md ${
        focus && "z-50"
      } bg-opacity-50`}
      onClick={() => closeModal()}
    >
      <div
        className={`sm:w-[450px] booking-background rounded-3xl ${
          height > 600 ? "py-6 sm:px-6 px-4" : "py-4 sm:px-4 px-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <BookingProvider>
          <BookingEngine3 setFocus={setFocus} width={width} height={height} />
        </BookingProvider>
      </div>
    </div>
  );
}

export default BookModal;
