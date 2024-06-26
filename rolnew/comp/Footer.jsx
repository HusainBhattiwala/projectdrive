"use client";

import React from "react";
import Link from "next/link";
import { Pic } from "components/ui/Pic";
import Container from "./Container";

function Footer() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <Container className='bg-[#121212] sm:py-[73px] py-8 text-center'>
        <div className='flex sm:flex-row flex-col lg:gap-x-[85px] sm:gap-x-[30px] gap-x-6 justify-between w-full mx-auto md:px-8'>
          <div className='flex flex-col gap-y-6 text-left sm:max-w-[274px] w-full sm:pb-0 pb-6'>
            <Link href='/rolnew' className='pop'>
              <img
                className='h-11 w-[136px]'
                src='/rolnew/global/logo.svg'
                alt='logo'
              />
            </Link>
            <p className='text-xs leading-5 font-normal text-opacity-65 text-left'>
            RolDrive's chauffeur services offer luxury, reliability, and comfort for all your travel needs at competitive rates. With a fleet of high-end vehicles and professional drivers, we ensure timely and stress-free journeys. From airport transfers to business travel and everything in between, we are your trusted travel partner, committed to delivering exceptional service with a premium experience.
            </p>
            <div className='flex flex-col gap-y-2'>
              <a
                href='tel:+4402071128101'
                className='text-base leading-[26px] font-light text-opacity-65 text-left pop'
              >
                +44 (0) 207 112 8101
              </a>
              <a
                href='mailto:booking@roldrive.com'
                className='text-base leading-[26px] font-light text-opacity-65 text-left pop'
              >
                booking@roldrive.com
              </a>
            </div>
            <div className='flex gap-x-4'>
              <a href='roldrive.com' className='w-6 h-6 pop'>
                <Pic
                  alt='location'
                  className='mx-auto pop'
                  src='/rolnew/global/icons/facebook.svg'
                  objectFit='cover'
                />
              </a>
              <a href='roldrive.com' className='w-6 h-6 pop'>
                <Pic
                  alt='location'
                  className='mx-auto pop'
                  src='/rolnew/global/icons/twitterx.svg'
                  objectFit='cover'
                />
              </a>
              <a href='roldrive.com' className='w-6 h-6 pop'>
                <Pic
                  alt='location'
                  className='mx-auto pop'
                  src='/rolnew/global/icons/instagram.svg'
                  objectFit='cover'
                />
              </a>
              <a href='roldrive.com' className='w-6 h-6 pop'>
                <Pic
                  alt='location'
                  className='mx-auto pop'
                  src='/rolnew/global/icons/pinterest.svg'
                  objectFit='cover'
                />
              </a>
              <a href='roldrive.com' className='w-6 h-6 pop'>
                <Pic
                  alt='location'
                  className='mx-auto pop'
                  src='/rolnew/global/icons/linkedin.svg'
                  objectFit='cover'
                />
              </a>
            </div>
          </div>
          <div className='flex lg:gap-x-[85px] sm:gap-x-[30px] gap-x-6 sm:my-0 py-6 sm:border-none border-t border-[#FFFFFF] border-opacity-40'>
            <div className='flex flex-col gap-y-5 items-start text-left sm:w-auto w-5/12'>
              <Link
                href='/rolenew/fleet'
                className='text-left text-base font-normal'
              >
                Fleet
              </Link>
              <Link href='#' className='text-base font-light pop'>
                Business
              </Link>
              <Link href='#' className='text-base font-light pop'>
                First
              </Link>
              <Link href='#' className='text-base font-light pop'>
                Luxury
              </Link>
              <Link href='#' className='text-base font-light pop'>
                Electric
              </Link>
              <Link href='#' className='text-base font-light pop'>
                SUV
              </Link>
              <Link href='#' className='text-base font-light pop'>
                MVP
              </Link>
              <Link href='#' className='text-base font-light pop'>
                Sprinter
              </Link>
            </div>
            <div className='flex flex-col gap-y-5 items-start text-left'>
              <Link
                href='/rolnew/all-services'
                className='text-left text-base font-normal'
              >
                Services
              </Link>
              <Link
                href='/rolnew/airport-transfers'
                className='text-base font-light pop'
              >
                Airport Transfers
              </Link>
              <Link
                href='/rolnew/road-shows'
                className='text-base font-light pop'
              >
                Road Shows
              </Link>
              <Link
                href='/rolnew/intercity-transfers'
                className='text-base font-light pop'
              >
                Intercity Transfers
              </Link>
              <Link
                href='/rolnew/event-transfers'
                className='text-base font-light pop'
              >
                Event Transfers
              </Link>
              <Link
                href='/rolnew/all-services'
                className='text-base font-light pop'
              >
                All Services
              </Link>
            </div>
          </div>
          <div className='flex lg:gap-x-[85px] sm:gap-x-[30px] gap-x-6 sm:my-0 py-6 sm:border-none border-t border-[#FFFFFF] border-opacity-40'>
            <div className='flex flex-col gap-y-5 items-start text-left sm:w-auto w-5/12'>
              <h4 className='text-left text-base font-normal whitespace-nowrap'>
                Top Cities
              </h4>
              <Link
                href='/rolnew/cities/london'
                className='text-base font-light pop'
              >
                London
              </Link>
              <Link
                href='/rolnew/cities/paris'
                className='text-base font-light pop'
              >
                Paris
              </Link>
              <Link
                href='/rolnew/cities/newyork'
                className='text-base font-light pop'
              >
                New York
              </Link>
              <Link
                href='/rolnew/cities/dubai'
                className='text-base font-light pop'
              >
                Dubai
              </Link>
              <Link
                href='/rolnew/cities/tokyo'
                className='text-base font-light pop'
              >
                Tokyo
              </Link>
            </div>
            <div className='flex flex-col gap-y-5 items-start text-left'>
              <Link href='#' className='text-base pop'>
                FAQ
              </Link>
              <Link href='#' className='text-base pop'>
                Blogs
              </Link>
              <Link href='#' className='text-base pop'>
                About Us
              </Link>
              <Link
                href='#'
                className='text-base text-[#FDC65C] whitespace-nowrap pop'
              >
                Become A Supplier
              </Link>
            </div>
          </div>
        </div>
        <div className='flex gap-x-6 flex-wrap sm:justify-start justify-between py-6 border-opacity-40 relative border-b border-[#FFFFFF]'>
          <div className='flex gap-x-6 sm:w-auto w-full'>
            <Link
              href='#'
              className='sm:text-base text-sm text-[#FFFFFF] text-opacity-60 font-light text-left sm:w-auto w-2/4 pop'
            >
              Privacy policy
            </Link>
            <Link
              href='#'
              className='sm:text-base text-sm text-[#FFFFFF] text-opacity-60 font-light text-left pop'
            >
              GDPR policy
            </Link>
          </div>
          <Link
            href='#'
            className='sm:text-base text-sm text-[#FFFFFF] text-opacity-60 font-light pop'
          >
            Terms & Conditions
          </Link>
          <div className='absolute -right-4 top-0 z-[999999] bg-[#121212] rounded-full cursor-pointer sm:block hidden'>
            <div className='bg-[#FFFFFF] bg-opacity-40 w-[136px] h-[136px] rounded-full flex items-center justify-center border border-[#FFFFFF] border-opacity-20'>
              <div
                className='drop-shadow-[#000000] rounded-full bg-[#E5EAFA] bg-opacity-30 w-[98px] h-[98px] flex items-center justify-center border border-[#FFFFFF] pop'
                onClick={goTop}
              >
                <div
                  href='roldrive.com'
                  className='w-8 h-8 hover:animate-bounce'
                >
                  <Pic
                    alt='uparrow'
                    src='/rolnew/global/icons/uparrow.svg'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='text-left pt-6 text-[#FFFFFF] sm:text-opacity-70 text-opacity-40 sm:text-base text-xs font-light'>
          Copyright ©2024 - RolDrive. All Rights Reserved.{" "}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
