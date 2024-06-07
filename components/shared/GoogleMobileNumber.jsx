import Button from 'components/ui/Button';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { isValidNumber } from 'libphonenumber-js';
import P from 'components/typography/P';
import 'react-phone-input-2/lib/style.css';

function getMobileNumber(_phone, country) {
  const newPhone = _phone.replace('+', '');
  const formattedCountry = country.replace('+', '');
  const formattedNumber = newPhone.replace(formattedCountry, '');
  return formattedNumber;
}
function GoogleMobileNumber({ handleSubmit }) {
  const [phone, setPhone] = useState('+44');
  const [phoneCountry, setPhoneCountry] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [errors, setErrors] = useState({});
  async function checkMobileNumber(value, countryData) {
    if (value && value !== 0) {
      const newNumber = getMobileNumber(value, countryData.dialCode);
      if (isValidNumber(newNumber, countryData.countryCode.toUpperCase())) {
        setErrors((prev) => ({ ...prev, phone: false }));
        setPhoneError(false);
      } else {
        setErrors((prev) => ({ ...prev, phone: 'Phone number is not valid' }));
        setPhoneError(true);
      }
    }
  }

  const isValidated = ({
    phone: _phone,
  }) => {
    if (!_phone) {
      setErrors((prev) => ({ ...prev, phone: 'Required' }));
      return true;
    }
    if (_phone.length < 10) {
      setErrors((prev) => ({ ...prev, phone: 'Required' }));
      return true;
    }
    return false;
  };
  return (
    <div className="px-2 sm:min-w-[600px] h-[320px] flex flex-col">
      <P className="pt-2 pb-3 text-sm !font-medium capitalize text-neutral-500">
        Mobile Number
        {' '}
        <span className="text-base font-medium text-red-600">*</span>
      </P>
      <PhoneInput
        enableSearch
        autoFormat={false}
        enableAreaCodes
        countryCodeEditable={false}
        onChange={(value, country) => {
          setPhone(value);
          setPhoneCountry(country?.dialCode);
          checkMobileNumber(value, country);
        }}
        value={`${phone}`}
        inputClass="w-full text-sm h-12 input !input-bordered focus:border-primary focus:outline-none !border-opacity-80 !border-[#c3c1c1] -mt-1"
      />
      {errors?.phone && (
      <P className="!text-red-500 !text-sm font-medium">
        {errors?.phone}
      </P>
      )}
      {!errors && phoneError && (
      <P className="!text-red-500 !text-sm font-medium">Required</P>
      )}
      <Button
        kind="primary"
        className="w-full mt-auto inline-flex h-12 items-center justify-center gap-2.5 rounded-md bg-orange-600 px-7 py-3.5 hover:bg-primary text-white text-[14px] font-semibold mb-2 uppercase"
        onClick={() => {
          if (isValidated({
            phone,
          })) {
            return;
          }
          handleSubmit(
            getMobileNumber(phone, phoneCountry),
            `+${Number(phoneCountry)}`,
          );
        }}
      >
        Add Phone Number
      </Button>
    </div>
  );
}

export default GoogleMobileNumber;
