'use client';

import Button from 'rolnew/ui/Button';
import Input from 'rolnew/ui/Input';
import { useForm } from 'react-hook-form';
import P from 'components/typography/P';
import { useState } from 'react';

function BusinessForm() {
  const [showLoader, setShowLoader] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm();
  const onSubmit = async (data) => {
    console.log('data', data);
    setShowLoader(true);
    setShowLoader(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left relative flex flex-col gap-y-4 py-4 px-2">
      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 sm:gap-x-4 gap-x-2 items-center">
        <div className="w-full">
          <Input
            {...register('name', {
              required: { value: true, message: 'Name required' },
              autoComplete: 'off',
            })}
            onChange={(e) => {
              setValue('name', e.target.value, { shouldValidate: true });
              clearErrors('name');
            }}
            leadingIcon="/rolnew/global/icons/user.svg"
            label="name"
            placeholder="Enter name"
            readOnly={showLoader}
          />

          {errors && errors.name && (
            <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
              {errors.name.message}
            </P>
          )}
        </div>
        <div className="w-full">
          <Input
            {...register('companyname', {
              required: { value: true, message: 'Company name is required' },
              autoComplete: 'off',
            })}
            onChange={(e) => {
              setValue('companyname', e.target.value, { shouldValidate: true });
              clearErrors('companyname');
            }}
            leadingIcon="/rolnew/global/icons/office-building.svg"
            label="Company name"
            placeholder="Enter company name"
            readOnly={showLoader}
          />

          {errors && errors.companyname && (
          <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
            {errors.companyname.message}
          </P>
          )}
        </div>
      </div>
      <div className="w-full">
        <Input
          {...register('email', {
            required: { value: true, message: 'Company email is required' },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email format',
            },
            autoComplete: 'off',
          })}
          onChange={(e) => {
            setValue('email', e.target.value, { shouldValidate: true });
            clearErrors('email');
          }}
          leadingIcon="/rolnew/global/icons/mail.svg"
          label="Company Email"
          placeholder="Enter company email"
          type="email"
        />

        {errors && errors.email && (
        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.email.message}
        </P>
        )}
      </div>
      <div className="w-full">
        <Input
          {...register('country', {
            required: { value: true, message: 'Country required' },
            autoComplete: 'off',
          })}
          onChange={(e) => {
            setValue('country', e.target.value, { shouldValidate: true });
            clearErrors('country');
          }}
          leadingIcon="/rolnew/global/icons/mail.svg"
          label="Country"
          placeholder="Enter country"
          readOnly={showLoader}
        />

        {errors && errors.country && (
        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.country.message}
        </P>
        )}
      </div>
      <div className="flex sm:gap-x-4 gap-x-2 items-center">
        <div className="w-full">
          <Input
            {...register('city', {
              required: { value: true, message: 'Company city required' },
              autoComplete: 'off',
            })}
            onChange={(e) => {
              setValue('city', e.target.value, { shouldValidate: true });
              clearErrors('city');
            }}
            leadingIcon="/rolnew/global/icons/user.svg"
            label="City"
            placeholder="Enter city"
            readOnly={showLoader}
          />

          {errors && errors.city && (
            <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
              {errors.city.message}
            </P>
          )}
        </div>
        <div className="w-full">
          <Input
            {...register('zipcode', {
              required: { value: true, message: 'Company zipcode is required' },
              autoComplete: 'off',
            })}
            onChange={(e) => {
              setValue('zipcode', e.target.value, { shouldValidate: true });
              clearErrors('zipcode');
            }}
            leadingIcon="/rolnew/global/icons/office-building.svg"
            label="Zip Code"
            placeholder="Enter zip code"
            readOnly={showLoader}
          />

          {errors && errors.zipcode && (
          <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
            {errors.zipcode.message}
          </P>
          )}
        </div>
      </div>
      <div className="w-full">
        <Input
          {...register('address', {
            required: { value: true, message: 'Company address required' },
            autoComplete: 'off',
          })}
          onChange={(e) => {
            setValue('address', e.target.value, { shouldValidate: true });
            clearErrors('address');
          }}
          leadingIcon="/rolnew/global/icons/mail.svg"
          label="Address"
          placeholder="Enter address"
          readOnly={showLoader}
        />

        {errors && errors.address && (
        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors.address.message}
        </P>
        )}
      </div>
      <div className="relative block " />
      <Button
        submit
        isLoading={showLoader}
        className={`w-full ${showLoader && ''}`}
      >
        Sign up
      </Button>
    </form>
  );
}
export default BusinessForm;
