"use client"
import { useForm } from 'react-hook-form';
import Button from '../ui/Button'; // Make sure this path is correct
import Input from 'rolnew/ui/Input'; // Make sure this path is correct

export default function SupplierForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState
  } = useForm();

  const onSubmit = data => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6 flex-col justify-center w-full sm:w-[20rem] md:w-[26rem]">
      <div className="flex flex-row gap-2">
        <Input
          {...register("firstName", { required: 'First Name is required' })}
          label="First Name"
          placeholder="Enter First Name"
          error={errors.firstName && errors.firstName.message}
        />
        <Input
          {...register("lastName", { required: 'Last Name is required' })}
          label="Last Name"
          placeholder="Enter Last Name"
          error={errors.lastName && errors.lastName.message}
        />
      </div>

      <Input
        {...register("email", {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email address"
          }
        })}
        leadingIcon="/rolnew/home/gps.svg"
        label="Email"
        placeholder="Enter email address"
        error={errors.email && errors.email.message}
      />

      <Input
        {...register("companyName", { required: 'Company Name is required' })}
        leadingIcon="/rolnew/home/gps.svg"
        label="Company Name"
        placeholder="Enter Company Name"
        error={errors.companyName && errors.companyName.message}
      />

      <div className="flex flex-row gap-2">
        <Input
          {...register("city", { required: 'City is required' })}
          label="City"
          placeholder="Enter City"
          error={errors.city && errors.city.message}
        />
        <Input
          {...register("zipCode", {
            required: 'Zip Code is required',
            pattern: {
              value: /^\d+$/,
              message: "Invalid Zip Code"
            }
          })}
          label="Zip Code"
          placeholder="Enter Zip Code"
          error={errors.zipCode && errors.zipCode.message}
        />
      </div>

      <Input
        {...register("countryName", { required: 'Country Name is required' })}
        leadingIcon="/rolnew/home/gps.svg"
        label="Country Name"
        placeholder="Enter Country Name"
        error={errors.countryName && errors.countryName.message}
      />

      {/* Make sure to set type="submit" to ensure form submission */}
      <Button type="submit" cta isLoading={formState.isSubmitting}>
        Search Ride
      </Button>
    </form>
  );
}
