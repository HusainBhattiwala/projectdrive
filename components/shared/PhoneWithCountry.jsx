/* eslint-disable max-len */
import PhoneInput from 'react-phone-input-2';

function PhoneWithCountry({
  userMobile,
  removeValidation = () => {},
  isDisabled = false,
  countrycode = '',
  mobileno = '',
  checkMobileNumber = () => {},
}) {
  return (
    <PhoneInput
      enableSearch
      disabled={isDisabled}
      countryCodeEditable={false}
      autoFormat={false}
      value={(countrycode && mobileno) && `${countrycode}${mobileno}`}
      country={!countrycode && 'gb'}
      onChange={(phone, country) => { userMobile(phone); removeValidation(false); checkMobileNumber(phone, country); }}
    />
  );
}

export default PhoneWithCountry;
