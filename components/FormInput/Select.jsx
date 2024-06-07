/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import P from '../typography/P';

function Select({
  register,
  errors,
  options,
  name,
  validationSchema,
  className,
  onChange,
  defaultValue = '',
  label,
  labelClass,
  leadingIcon,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {errors && errors[name]?.type === 'required' && (
      <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs !font-[400] z-10">
        {errors[name]?.message}
      </P>
      )}
      {errors && errors[name]?.type === 'minLength' && (
      <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs !font-[400] z-10">
        {errors[name]?.message}
      </P>
      )}
      {
        isLoaded
        && (
          <div className="w-full relative">
            {
            label
            && <p className={`text-white text-sm mb-[2px] text-left ${labelClass}`}>{label}</p>
          }
            <div className="relative">
              {leadingIcon && (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, @next/next/no-img-element
              <img
                className="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2 cursor-pointer"
                src={leadingIcon}
                alt=""
              />
              )}
              <select
                {...register(name, validationSchema)}
                className={`${className} font-normal !text-sm ${
                  leadingIcon ? 'sm:px-10 px-0 pl-9 pr-4' : 'px-6'
                }`}
                onChange={onChange}
                defaultValue={defaultValue}
              >
                {options.map((value) => (
                  <option key={value.value} value={value.value} className="!font-normal !text-sm !text-[#B2B2B2] !py-4">
                    {value.option}
                  </option>
                ))}
              </select>
            </div>
          </div>

        )
      }

    </>
  );
}
export default Select;
