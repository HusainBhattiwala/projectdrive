import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
// import { Pic } from '../ui/Pic';

function EmailLogin({ isEmailLogin, handelClick, _callbackUrl }) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('afterlogin');
  const getCallBack = () => {
    if (!callbackUrl || callbackUrl === '/') {
      return '/booking-management';
    }
    return callbackUrl;
  };
  return (
    <>
      <div className="flex flex-col items-center my-4 lg:flex-row gap-x-2 gap-y-4 lg:px-0">
        <button
          type="button"
          className="lg:max-w-[50%] w-full mx-auto cursor-pointer !rounded-md bg-white flex items-center justify-center gap-x-2 py-4 px-3"
          onClick={() => signIn('google', {
            callbackUrl: _callbackUrl || getCallBack(),
          })}
        >
          <div className="flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="23" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
          </div>
          <span className="text-[#3C3C3C] text-base not-italic font-medium leading-[22px] text-nowrap">Continue with Google</span>
        </button>

        {isEmailLogin && (
        <button
          type="button"
          className="lg:max-w-[50%] w-full mx-auto cursor-pointer !rounded-md bg-white flex items-center justify-center gap-x-2 py-4 px-3"
          onClick={() => {
            handelClick(!isEmailLogin);
          }}
        >
          <div className="flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none">
              <path d="M3.5 8.06445L11.3906 13.3249C12.0624 13.7727 12.9376 13.7727 13.6094 13.3249L21.5 8.06445M5.5 19.0645H19.5C20.6046 19.0645 21.5 18.169 21.5 17.0645V7.06445C21.5 5.95988 20.6046 5.06445 19.5 5.06445H5.5C4.39543 5.06445 3.5 5.95988 3.5 7.06445V17.0645C3.5 18.169 4.39543 19.0645 5.5 19.0645Z" stroke="#3C3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[#3C3C3C] text-base not-italic font-medium leading-[22px] text-nowrap">Continue with Email</span>
        </button>

        )}
        {!isEmailLogin && (
        <button
          type="button"
          className="lg:max-w-[50%] w-full mx-auto cursor-pointer !rounded-md bg-white flex items-center justify-center gap-x-2 py-4 px-3"
          onClick={() => {
            handelClick(!isEmailLogin);
          }}
        >
          <div className="flex-none">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 5.06445C3.5 3.95988 4.39543 3.06445 5.5 3.06445H8.77924C9.20967 3.06445 9.59181 3.33988 9.72792 3.74823L11.2257 8.24166C11.3831 8.71378 11.1694 9.22976 10.7243 9.45232L8.46701 10.581C9.56925 13.0257 11.5388 14.9952 13.9835 16.0974L15.1121 13.8402C15.3347 13.3951 15.8507 13.1813 16.3228 13.3387L20.8162 14.8365C21.2246 14.9726 21.5 15.3548 21.5 15.7852V19.0645C21.5 20.169 20.6046 21.0645 19.5 21.0645H18.5C10.2157 21.0645 3.5 14.3487 3.5 6.06445V5.06445Z" stroke="#3C3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </div>
          <span className="text-[#3C3C3C] text-base not-italic font-medium leading-[22px]">Continue with Phone</span>
        </button>
        )}
      </div>
      <div className="flex w-full justify-between mt-5 items-center pb-4">
        <div className="basis-[45%] bg-[#828282] h-[1px]" />
        <p className="basis-[10%] text-center">OR</p>
        <div className="basis-[45%] bg-[#828282] h-[1px]" />
      </div>
    </>
  );
}

export default EmailLogin;
