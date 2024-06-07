'use client';

import { SessionProvider } from 'next-auth/react';
// import { useEffect, useState } from 'react';
// import Button from 'components/ui/Button';
import useReloadOnNewBuild from 'hooks/useReloadOnNewBuild';
// import Link from 'next/link';

export default function Providers({ children }) {
  useReloadOnNewBuild();
  // const [hasCookieConsent, setHasCookieConsent] = useState();

  // useEffect(() => {
  //   try {
  //     setHasCookieConsent(localStorage.getItem('cookieConsent'));
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // }, []);

  return (
    <SessionProvider>
      {/* {hasCookieConsent === null && (
        <CookieModal
          onAccept={() => {
            localStorage.setItem('cookieConsent', true);
            setHasCookieConsent(true);
          }}
          onReject={() => {
            localStorage.setItem('cookieConsent', false);
            setHasCookieConsent(false);
          }}
        />
      )} */}
      {children}
    </SessionProvider>
  );
}

// function CookieModal({ onAccept, onReject }) {
//   return (
//     <div className="fixed px-6 py-4 bg-white rounded-lg bottom-4 md:bottom-12 left-[0rem] mo:mx-2 sm:left-[10rem] z-[999] max-w-sm md:max-w-md shadow-2xl border-stone-50 border">
//       <h4 className="mb-1 text-lg font-bold">We value your privacy</h4>
//       <p className="text-sm text-[#5C5C5C]">
//         Cookies are used to improve your browsing experience, serve personalised
//         ads or content, and analyse traffic. By clicking &quot;Accept All&quot;,
//         you agree to our
//         {' '}
//         <Link
//           className="text-primary underline"
//           target="_blank"
//           href="/cookie-policy"
//         >
//           use of cookies.
//         </Link>
//       </p>
//       <div className="flex gap-4 mt-5">
//         <Button
//           className="btn-outline w-1/2 border-[#C5C5C5] max-w-full !text-[#494949] hover:!text-white rounded-md flex-shrink"
//           onClick={onReject}
//         >
//           Reject all
//         </Button>
//         <Button
//           className="flex-shrink w-1/2 max-w-full rounded-md btn-primary"
//           onClick={onAccept}
//         >
//           Accept all
//         </Button>
//       </div>
//     </div>
//   );
// }
