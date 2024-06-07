import { useEffect, useState } from 'react';
import EmailPassword from './EmailPassword';
import OTP from './OTP';

function Login({
  showOTP = true,
  isLoggedIn,
  setUsedEmail,
  loginPage,
  getBookerPassword,
  passwordExists,
  setShowOTP,
  getAuthType = () => {},
}) {
  const [loginSuccess, setLoginSuccess] = useState(false);
  useEffect(() => {
    isLoggedIn(loginSuccess);
  }, [loginSuccess, isLoggedIn]);
  return (
    <div className="xl:px-0 sm:px-4">
      {showOTP && (
        <OTP
          isOtpVerified={isLoggedIn}
          loginPage={loginPage}
          setAuthType={getAuthType}
          setShowOTP={setShowOTP}
        />
      )}
      {!showOTP && (
        <EmailPassword
          loggedIn={setLoginSuccess}
          usedEmail={setUsedEmail}
          loginPage={loginPage}
          bookerPassword={getBookerPassword}
          passwordExistsStatus={passwordExists}
          setAuthType={getAuthType}
        />
      )}
    </div>
  );
}

export default Login;
