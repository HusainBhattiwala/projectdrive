'use client';

import { signIn } from 'next-auth/react';

import { Pic } from '../ui/Pic';

function SocialLogin({ loginPage }) {
  return (
    <div className="mt-5 w-full mx-auto">
      {/* <Pic
        src="/images/login/fblogin.png"
        alt="fblogin"
        className="max-w-[300px] w-full mx-auto mb-5 cursor-pointer"
        onClick={() => signIn('facebook')}
      /> */}
      {
        !loginPage
          ? (
            <>
              <Pic
                src="/images/login/googlelogin.svg"
                alt="googlelogin"
                className="max-w-[300px] w-full mx-auto mb-5 cursor-pointer !rounded-md"
                onClick={() => signIn('google')}
              />
              {/* <Pic
                src="/images/login/fblogin.png"
                alt="fblogin"
                className="max-w-[300px] w-full mx-auto mb-5 cursor-pointer"
                onClick={() => signIn('facebook')}
              /> */}
            </>

          )
          : (
            <div className="login-container flex justify-between gap-5">
              <Pic
                src="/images/login/googlelogin.svg"
                alt="googlelogin"
                className="w-full mx-auto mb-5 cursor-pointer !rounded-md"
                onClick={() => signIn('google')}
              />
              <Pic
                src="/images/login/emaillogin.svg"
                alt="fblogin"
                className="w-full mx-auto mb-5 cursor-pointer"
                onClick={() => signIn('phone')}
              />
            </div>
          )
      }
    </div>
  );
}

export default SocialLogin;
