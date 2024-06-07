import React, { useEffect, useState } from 'react';
import CorporateEmailPassword from 'components/auth/CorporateEmailPassword';
import OTP from './OTP';

function CorporateLogin({
  showOTP = true, isLoggedIn, setUsedEmail, loginPage, getBookerPassword, passwordExists, getAuthType = () => {}, accountType,
}) {
  const [loginSuccess, setLoginSuccess] = useState(false);
  useEffect(() => {
    isLoggedIn(loginSuccess);
  }, [loginSuccess, isLoggedIn]);
  return (
    <div className="lg:px-0 px-6">
      {!showOTP && <OTP accountType={accountType} isOtpVerified={isLoggedIn} loginPage={loginPage} setAuthType={getAuthType} />}
      {showOTP && <CorporateEmailPassword loggedIn={setLoginSuccess} usedEmail={setUsedEmail} loginPage={loginPage} bookerPassword={getBookerPassword} passwordExistsStatus={passwordExists} setAuthType={getAuthType} />}
      <div className="divider mt-5 text-sm font-medium">Or</div>
    </div>
  );
}

export default CorporateLogin;
