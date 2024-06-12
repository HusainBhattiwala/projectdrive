"use client";

import api from "components/utils/api";
import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "rolnew/ui/Button";
import Input from "rolnew/ui/Input";
import Pic from "rolnew/util/Pic";

function ContactDetails() {
  const [width, setWidth] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Function to update window width
    function handleResize() {
      setWidth(window.innerWidth);
    }
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await api.post("/contactus", formData);
      console.log(res);
      if (res?.message?.data?.status === 1) {
        setFormData({
          name: "",
          email: "",
        });
      }
      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error("Error occurred while sending form data:", error);
    }
  };
  return width > 560 ? (
    <div className='grid grid-cols-2 lg:gap-x-28 gap-x-20 mt-11 justify-start'>
      <div className='col-span-1 flex flex-col gap-y-10'>
        <div className='flex flex-col gap-y-4'>
          <a
            href='tel:+4402071128101'
            className='flex sm:gap-x-4 gap-x-1 items-center sm:text-base text-sm sm:font-light font-medium text-[#FDC65C]'
          >
            <FiPhone className='sm:text-xl text-base' />
            +44 (0) 207 112 8101
          </a>
          <a
            href='mailto:booking@roldrive.com'
            className='flex sm:gap-x-4 gap-x-1 items-center sm:text-base text-sm sm:font-light font-medium text-[#FDC65C]'
          >
            <MdOutlineMailOutline className='sm:text-xl text-base' />
            booking@roldrive.com
          </a>
        </div>
        <div className='flex flex-col gap-y-2 items-start'>
          <h4 className='text-2xl text-[#B2B2B2]'>Connect with us</h4>
          <div className='flex gap-x-4'>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/facebook.svg'
                objectFit='cover'
              />
            </a>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/twitterx.svg'
                objectFit='cover'
              />
            </a>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/instagram.svg'
                objectFit='cover'
              />
            </a>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/pinterest.svg'
                objectFit='cover'
              />
            </a>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/linkedin.svg'
                objectFit='cover'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='col-span-1'>
        <div className='flex flex-col gap-y-3'>
          <Input
            name='name'
            label='Name'
            placeholder='Enter first name'
            labelClass='!text-xs !text-[#B2B2B2]'
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name='email'
            label='Email'
            placeholder='Enter email address'
            labelClass='!text-xs !text-[#B2B2B2]'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex mt-6'>
          <Button
            onClick={handleSubmit}
            type='button'
            className='bg-[#F97040] w-auto rounded-lg py-[18px] px-[56.25px]'
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className='grid grid-cols-1 justify-start mt-6'>
      <div className='col-span-1'>
        <div className='flex flex-col gap-y-3'>
          <Input
            name='Name'
            label='name'
            placeholder='Enter first name'
            labelClass='!text-xs !text-[#B2B2B2]'
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name='Email'
            label='email'
            placeholder='Enter email address'
            labelClass='!text-xs !text-[#B2B2B2]'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex mt-6'>
          <Button
            onClick={handleSubmit}
            submit
            className='bg-[#EC5C29] w-full rounded-lg py-[16px]'
          >
            Submit
          </Button>
        </div>
      </div>
      <div className='col-span-1'>
        <div className='flex justify-between my-6'>
          <a
            href='tel:+4402071128101'
            className='flex sm:gap-x-4 gap-x-1 items-center sm:text-base text-sm sm:font-light font-medium text-[#FDC65C]'
          >
            <FiPhone className='sm:text-xl text-base' />
            +44 (0) 207 112 8101
          </a>
          <a
            href='mailto:booking@roldrive.com'
            className='flex sm:gap-x-4 gap-x-1 items-center sm:text-base text-sm sm:font-light font-medium text-[#FDC65C]'
          >
            <MdOutlineMailOutline className='sm:text-xl text-base' />
            booking@roldrive.com
          </a>
        </div>

        <div className='flex flex-col gap-y-2 justify-center items-center'>
          <h4 className='text-base text-[#B2B2B2]'>Connect with us</h4>
          <div className='flex gap-x-4'>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/facebook.svg'
                objectFit='cover'
              />
            </a>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/twitterx.svg'
                objectFit='cover'
              />
            </a>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/instagram.svg'
                objectFit='cover'
              />
            </a>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/pinterest.svg'
                objectFit='cover'
              />
            </a>
            <a href='roldrive.com' className='w-6 h-6'>
              <Pic
                alt='location'
                className='mx-auto'
                src='/rolnew/global/icons/linkedin.svg'
                objectFit='cover'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
