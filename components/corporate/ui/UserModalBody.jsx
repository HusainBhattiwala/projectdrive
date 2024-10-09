import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { isValidNumber } from 'libphonenumber-js';
import P from 'components/typography/P';
import Button from '../../ui/Button';

function InputJSX({
  placeholder,
  value,
  onChange,
  errors,
  setErrors,
  id,
  label,
}) {
  return (
    <div className="relative">
      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
        {label}
        <span className="text-base font-medium text-red-600"> *</span>
      </P>
      <input
        type="text"
        className="block w-full rounded-lg border border-solid border-[#c3c1c1] !bg-[#e7e8ead9] p-2.5 pl-4 text-sm h-12 text-gray-900"
        placeholder={placeholder}
        value={value}
        onChange={(ev) => {
          setErrors((prev) => ({ ...prev, [id]: false }));
          onChange(ev.target.value);
        }}
      />
      <span className="text-xs absolute -bottom-4 left-0 font-medium text-red-600">
        {errors[id]}
      </span>
    </div>
  );
}

const getDefaultUserType = (user) => {
  if (user?.usertype === 'CORPORATE_ADMIN') {
    return 'Admin';
  }
  return 'Personal Manager';
};

const isValidated = ({
  firstName,
  lastName,
  phone,
  email,
  phoneError,
  setErrors,
}) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (firstName && lastName && emailRegex.test(email) && !phoneError) {
    return true;
  }

  if (!firstName) {
    setErrors((prev) => ({ ...prev, firstName: 'Required' }));
  }
  if (!lastName) {
    setErrors((prev) => ({ ...prev, lastName: 'Required' }));
  }
  if (!phone) {
    setErrors((prev) => ({ ...prev, phone: 'Required' }));
  }
  if (phone.length < 10) {
    setErrors((prev) => ({ ...prev, phone: 'Required' }));
  }
  if (!email) {
    setErrors((prev) => ({ ...prev, email: 'Required' }));
  } else if (!emailRegex.test(email)) {
    setErrors((prev) => ({ ...prev, email: 'Correct email required' }));
  }
  return false;
};

export default function UserModalBody({ user, handleSubmit, availableRoles }) {
  const [roles, setRoles] = useState(user?.role_id || []);
  const [activeRoleCategory, setActiveRoleCategory] = useState(() => getDefaultUserType(user));
  const [firstName, setFirstName] = useState(user?.user_fname || '');
  const [lastName, setLastName] = useState(user?.user_lname || '');
  const [phone, setPhone] = useState(
    `${user?.usercountrycode || '+44'}${user?.usermobileno || ''}` || '',
  );
  const [phoneCountry, setPhoneCountry] = useState(user?.usercountrycode || '');
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState(user?.useremailid || '');
  const [errors, setErrors] = useState({});

  console.log('user', user);

  const textFields = [
    {
      onChange: setFirstName,
      value: firstName,
      placeholder: 'Enter first name',
      label: 'First Name',
      id: 'firstName',
    },
    {
      onChange: setLastName,
      value: lastName,
      placeholder: 'Enter last name',
      label: 'Last Name',
      id: 'lastName',
    },
    {
      onChange: setPhone,
      value: phone,
      placeholder: 'Enter phone',
      label: 'Mobile Number',
      id: 'phone',
    },
    {
      onChange: setEmail,
      value: email,
      placeholder: 'Enter email',
      label: 'Email Address',
      id: 'email',
    },
  ];

  function getMobileNumber(_phone, country) {
    const newPhone = _phone.replace('+', '');
    const formattedCountry = country.replace('+', '');
    const formattedNumber = newPhone.replace(formattedCountry, '');
    return formattedNumber;
  }

  async function checkMobileNumber(value, countryData) {
    if (value && value !== 0) {
      console.log(value, countryData);
      const newNumber = getMobileNumber(value, countryData.dialCode);
      console.log(
        isValidNumber(newNumber, countryData.countryCode.toUpperCase()),
      );
      if (isValidNumber(newNumber, countryData.countryCode.toUpperCase())) {
        setErrors((prev) => ({ ...prev, phone: false }));
        setPhoneError(false);
      } else {
        setErrors((prev) => ({ ...prev, phone: 'Phone number is not valid' }));
        setPhoneError(true);
      }
    }
  }

  return (
    <div className="px-2 sm:min-w-[600px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {textFields.map((item) => (
          <div className="col-span-1" key={item.label}>
            {item.id === 'phone' ? (
              <>
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
                  inputClass="input input-bordered focus:border-primary !bg-[#e7e8ead9] !text-black !font-bold"
                  // inputClass="w-full text-sm h-12 input !input-bordered focus:border-primary focus:outline-none !border-opacity-80 !border-[#c3c1c1] -mt-1"
                />
                {/* <PhoneInput
                  enableSearch
                  autoFormat={false}
                  enableAreaCodes
                  countryCodeEditable={false}
                  value={phone}
                  country="gb"
                  label={item.label}
                  // eslint-disable-next-line no-unused-vars
                  onChange={(_, country, e) => {
                    setPhone(e.target.value);
                    setPhoneCountry(country?.dialCode);
                    checkMobileNumber(e.target.value, country);
                  }}
                  inputClass="block w-full rounded-lg border border-solid border-neutral-200 bg-white p-2.5 pl-4 text-sm text-gray-900 focus:border-pry-500 focus:ring-pry-500"
                /> */}
                {errors?.phone && (
                  <P className="!text-red-500 !text-sm font-medium">
                    {errors?.phone}
                  </P>
                )}
                {!errors && phoneError && (
                  <P className="!text-red-500 !text-sm font-medium">Required</P>
                )}
              </>
            ) : (
              <InputJSX
                placeholder={item.placeholder}
                label={item.label}
                value={item.value}
                onChange={item.onChange}
                id={item.id}
                errors={errors}
                setErrors={setErrors}
              />
            )}
          </div>
        ))}
      </div>
      <div>
        <p className="mt-6 text-lg mb-2 text-neutral-500 text-[14px] !font-medium capitalize">
          Select Role
        </p>
        <div className="">
          {['Admin', 'Personal Manager'].map((roleCategoryItem) => (
            <div className="mb-6" key={roleCategoryItem}>
              <div className="">
                <div
                  className="flex gap-2 items-center cursor-pointer mb-2"
                  onClick={() => {
                    if (roleCategoryItem === activeRoleCategory) return;
                    setActiveRoleCategory(roleCategoryItem);
                    setRoles([]);
                  }}
                >
                  <div className="rounded-full relative ring-pry-500 ring-2 flex-none h-4 w-4">
                    {activeRoleCategory === roleCategoryItem && (
                      <div className="rounded-full h-3 w-3 bg-pry-500 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  <div className="flex items-center text-neutral-700 text-[15px] font-semibold">
                    {roleCategoryItem === 'Admin' && (
                      <img
                        src="/images/icons/admin.svg"
                        className="w-4 h-4 relative mr-2"
                        alt=""
                      />
                    )}
                    {roleCategoryItem === 'Personal Manager' && (
                      <svg
                        className="w-4 h-4 relative mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="18"
                        viewBox="0 0 15 18"
                        fill="none"
                      >
                        <path
                          d="M1 15.2464V14.356C1 10.9136 3.79058 8.12305 7.23293 8.12305"
                          stroke="#797979"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.23306 8.12335C9.20009 8.12335 10.7947 6.5287 10.7947 4.56168C10.7947 2.59462 9.20009 1 7.23306 1C5.266 1 3.67139 2.59462 3.67139 4.56168C3.67139 6.5287 5.266 8.12335 7.23306 8.12335Z"
                          stroke="#797979"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.971 13.5C11.971 14.2732 11.3124 14.9 10.5 14.9C9.68755 14.9 9.02893 14.2732 9.02893 13.5C9.02893 12.7268 9.68755 12.1 10.5 12.1C11.3124 12.1 11.971 12.7268 11.971 13.5Z"
                          stroke="#797979"
                        />
                      </svg>
                    )}
                    <h3>{roleCategoryItem}</h3>
                  </div>
                </div>
                {availableRoles
                  ?.filter(
                    (availableRoleItem) => availableRoleItem?.role_name === roleCategoryItem,
                  )
                  .map((item) => (
                    <EachPermissionEntry
                      key={item?.role_id}
                      label={item?.role_activity?.split('_').join(' ')}
                      roleCategoryItem={roleCategoryItem}
                      checked={
                        roles.includes(item?.role_id)
                        && activeRoleCategory === roleCategoryItem
                      }
                      onChange={(ev) => {
                        if (roleCategoryItem !== activeRoleCategory) {
                          setActiveRoleCategory(roleCategoryItem);
                          setRoles([]);
                        }
                        if (ev.target.checked) {
                          setRoles((prev) => [
                            ...new Set([...prev, item.role_id]),
                          ]);
                        } else {
                          setRoles((prev) => prev.filter(
                            (roleItem) => roleItem !== item.role_id,
                          ));
                        }
                      }}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 flex justify-center pt-7">
          <Button
            kind="primary"
            className="inline-flex h-12 w-[200px] items-center justify-center gap-2.5 rounded-md bg-orange-600 px-7 py-3.5 hover:bg-[#EAEAEA] hover:!text-primary capitalize text-white text-[14px] font-semibold mb-2"
            // eslint-disable-next-line react/jsx-props-no-multi-spaces
            onClick={() => {
              if (
                !isValidated({
                  firstName,
                  lastName,
                  phone,
                  email,
                  phoneError,
                  setErrors,
                })
              ) {
                return;
              }
              handleSubmit({
                roles,
                firstName,
                lastName,
                phone,
                email,
                activeRoleCategory,
                userId: user?.userid,
                phoneCountry,
              });
            }}
          >
            {user?.userid ? 'Save' : 'Add User'}
          </Button>
        </div>
      </div>
    </div>
  );
}

function EachPermissionEntry({
  checked,
  onChange,
  disabled,
  label,
  roleCategoryItem,
}) {
  return (
    <div className="pl-[20px] flex gap-4 items-center mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-5 w-5 flex-none cursor-pointer mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          id={label + roleCategoryItem}
        />
        <label
          htmlFor={label + roleCategoryItem}
          className="ml-2 cursor-pointer text-gray-700 text-xs font-medium mt-[5px]"
        >
          {label}
        </label>
      </div>
      <div className="flex-grow" />
      {checked ? (
        <div className="w-max px-2 bg-green-200 rounded">
          <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
            <span className="hidden md:block">Access Granted</span>
            <span className="md:hidden">Granted</span>
          </div>
        </div>
      ) : (
        <div className="w-max px-2 bg-red-700 bg-opacity-25 rounded">
          <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
            <span className="hidden md:block">Access Denied</span>
            <span className="md:hidden">Denied</span>
          </div>
        </div>
      )}
    </div>
  );
}
