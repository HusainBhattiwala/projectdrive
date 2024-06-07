'use client';

import Button from 'rolnew/ui/Button';
import Input from 'rolnew/ui/Input';
import { useForm } from 'react-hook-form';
import P from 'components/typography/P';
import { useState } from 'react';

export default function BusinessForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm();
  const onSubmit = async (data) => {
    console.log('data', data);
  };
  const [showLoader, setShowLoader] = useState(false);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left relative flex flex-col gap-y-4">
      {JSON.stringify(errors)}
      <div className="flex sm:gap-x-4 gap-x-2 items-center">
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
      <div className="w-full ">
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
      <div className="relative block " />
      <div className="relative block " />
      <Button
        type="submit"
        kind="primary"
        isLoading={showLoader}
        className={`w-full mt-5 ${showLoader && ''}`}
      >
        Sign up
      </Button>
    </form>
  );
}
