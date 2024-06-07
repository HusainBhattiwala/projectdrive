import { useSession } from 'next-auth/react';
import PhoneInput from 'react-phone-input-2';
import P from './typography/P';

export default function BookerDetails({
  // eslint-disable-next-line max-len
  register, formState, userDetails, showBooker, setBooker, setValue, checkBookerMobileError, bookerMobileError, checkBookerEmailError,
}) {
  const { data: session } = useSession();
  const { errors } = formState;
  function getPhoneNumber() {
    const userExists = !!sessionStorage.getItem('passengerDetails');
    const user = JSON.parse(sessionStorage.getItem('passengerDetails'));
    if (!userExists) {
      if (showBooker && userDetails?.usermobileno) {
        const mobile = `${userDetails?.usercountrycode}${userDetails?.usermobileno}`;
        setValue('bookermobileno', mobile);
        setValue('bookercountrycode', userDetails?.usercountrycode.replace('+', ''));
        return mobile;
      }
    } else if (showBooker) {
      const mobile = `${user?.booker_country_code}${user?.booker_mobile_no}`;
      setValue('bookermobileno', mobile);
      setValue('bookercountrycode', user?.booker_country_code.replace('+', ''));
      return mobile;
    } else {
      const mobile = `${user?.passenger_country_code}${user?.passenger_mobile_no}`;
      setValue('bookermobileno', mobile);
      setValue('bookercountrycode', user?.passenger_country_code.replace('+', ''));
      return mobile;
    }
    return '+44';
  }
  const inputCharacterOnly = (event) => {
    const { value } = event.target;
    const sanitizedValue = value.replace(/[^A-Za-z\s]/gi, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = sanitizedValue;
  };
  return (
    <>
      <div className={`${!showBooker ? 'col-span-2' : 'col-span-2 sm:col-span-1'}`}>
        <P className="font-bold text-xl">Booker Details</P>
      </div>
      {
        showBooker && (
        <div className={` ${!showBooker ? 'col-span-2' : 'col-span-2 sm:col-span-1'}  text-right`}>
          <label
            className="flex items-center cursor-pointer sm:justify-end"
            htmlFor="checkbox"
          >
            <input
              type="checkbox"
              id="checkbox"
              checked={showBooker}
              className="rounded-sm checkbox checkbox-primary checkbox-xs"
              onChange={() => {
                setBooker(!showBooker);
              }}
            />
            <P className="ml-2 label-text text-[#B2B2B2]">Booking for someone else?</P>
          </label>
        </div>
        )
      }
      <div className="relative col-span-2 md:md:col-span-1">
        <input
          {...register('bookerfname', { required: 'Booker First Name is required', autoComplete: 'off' })}
          type="text"
          placeholder="Booker First Name"
          className="w-full input focus:outline-none bg-[#223544D9]  text-[#B2B2B2] border !border-[#828282]"
          onChange={inputCharacterOnly}
          defaultValue={showBooker ? (session?.user.name.split(' ')[0] || userDetails?.userfname) : ''}
          autoComplete="new-password"
        />
        {errors && errors.bookerfname && (
        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.bookerfname.message}
        </P>
        )}
      </div>
      <div className="relative col-span-2 md:md:col-span-1">
        <input
          {...register('bookerlname', { required: 'Booker Last Name is required', autoComplete: 'off' })}
          type="text"
          placeholder="Booker Last Name"
          className="w-full input focus:outline-none bg-[#223544D9]  text-[#B2B2B2] border !border-[#828282]"
          defaultValue={showBooker ? (session?.user.name.split(' ')[1] || userDetails?.userlname) : ''}
          onChange={inputCharacterOnly}
          autoComplete="new-password"
        />
        {errors && errors.bookerlname && (
        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.bookerlname.message}
        </P>
        )}
      </div>
      <div className="relative col-span-2 md:md:col-span-1">
        <PhoneInput
          {...register('bookermobileno', { required: 'Mobile number is required' })}
          enableSearch
          autoFormat={false}
          inputProps={{
            name: 'bookermobileno',
            required: true,
            autoFocus: true,
            autoComplete: 'off',
          }}
          inputClass="!bg-[#223544D9] ! !text-[#B2B2B2] !border-0.4 !border-[#828282] focus:outline-none"
          disabled={!!userDetails?.usermobileno && showBooker}
          countryCodeEditable={false}
          value={getPhoneNumber()}
          country="gb"
          onChange={(_, country, event) => {
            setValue('bookercountrycode', country.dialCode);
            setValue('bookermobileno', event.target.value);
            checkBookerMobileError(event.target.value, country);
          }}
          onCountryChange={() => { setValue('mobileno', ''); }}
        />
        {(errors.bookermobileno || bookerMobileError) && (
        <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.bookermobileno ? errors.bookermobileno.message : 'Phone number is not valid'}
        </P>
        )}
        {(errors.bookermobilenoerror) && (
        <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.bookermobilenoerror.message}
        </P>
        )}
        {/* {errors.bookermobileno && (
        <P className="text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.bookermobileno.message}
        </P>
        )} */}
      </div>
      <div className="relative col-span-2 md:md:col-span-1">
        <input
          {...register('bookeremail', { required: 'Booker Email is required', autoComplete: 'off' })}
          type="text"
          placeholder="Booker Email"
          className={`w-full input focus:outline-none bg-[#223544D9]  text-[#B2B2B2] border !border-[#828282] ${(!!userDetails?.useremailid || !!session?.user.email) && 'pointer-events-none'}`}
          readOnly={!!userDetails?.useremailid || !!session?.user.email}
          defaultValue={showBooker ? (session?.user.email || userDetails?.useremailid) : ''}
          autoComplete="new-password"
          onBlur={(e) => {
            checkBookerEmailError(e);
          }}
        />
        {errors && errors.bookeremail && (
        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.bookeremail.message}
        </P>
        )}
        {errors.errorbookeremail && (
        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.errorbookeremail.message}
        </P>
        )}
      </div>
    </>
  );
}
