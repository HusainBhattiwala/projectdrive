'use client';

import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from 'react-icons/md';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { UtilityContext } from 'context/UtilityContext';
import Button from 'components/ui/Button';
import P from 'components/typography/P';
import formatDateTime from 'components/utils/formatDateTime';

function GetStatusBtn(props) {
  const { type } = props;
  switch (type) {
    case 'BID':
      return (
        <Button className="!bg-[#D3FDDA] !text-[#1FAC39] !text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1 8.5C1 9.48491 1.19399 10.4602 1.5709 11.3701C1.94781 12.2801 2.50026 13.1069 3.1967 13.8033C3.89314 14.4997 4.71993 15.0522 5.62987 15.4291C6.53982 15.806 7.51509 16 8.5 16C9.48491 16 10.4602 15.806 11.3701 15.4291C12.2801 15.0522 13.1069 14.4997 13.8033 13.8033C14.4997 13.1069 15.0522 12.2801 15.4291 11.3701C15.806 10.4602 16 9.48491 16 8.5C16 7.51509 15.806 6.53982 15.4291 5.62987C15.0522 4.71993 14.4997 3.89314 13.8033 3.1967C13.1069 2.50026 12.2801 1.94781 11.3701 1.5709C10.4602 1.19399 9.48491 1 8.5 1C7.51509 1 6.53982 1.19399 5.62987 1.5709C4.71993 1.94781 3.89314 2.50026 3.1967 3.1967C2.50026 3.89314 1.94781 4.71993 1.5709 5.62987C1.19399 6.53982 1 7.51509 1 8.5Z" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8.49967L7.66667 10.1663L11 6.83301" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Confirmed
        </Button>
      );
    case 'ACCEPT_BID':
      return (
        <Button className="!bg-[#D3FDDA] !text-[12px] !text-[#1FAC39] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1 8.5C1 9.48491 1.19399 10.4602 1.5709 11.3701C1.94781 12.2801 2.50026 13.1069 3.1967 13.8033C3.89314 14.4997 4.71993 15.0522 5.62987 15.4291C6.53982 15.806 7.51509 16 8.5 16C9.48491 16 10.4602 15.806 11.3701 15.4291C12.2801 15.0522 13.1069 14.4997 13.8033 13.8033C14.4997 13.1069 15.0522 12.2801 15.4291 11.3701C15.806 10.4602 16 9.48491 16 8.5C16 7.51509 15.806 6.53982 15.4291 5.62987C15.0522 4.71993 14.4997 3.89314 13.8033 3.1967C13.1069 2.50026 12.2801 1.94781 11.3701 1.5709C10.4602 1.19399 9.48491 1 8.5 1C7.51509 1 6.53982 1.19399 5.62987 1.5709C4.71993 1.94781 3.89314 2.50026 3.1967 3.1967C2.50026 3.89314 1.94781 4.71993 1.5709 5.62987C1.19399 6.53982 1 7.51509 1 8.5Z" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8.49967L7.66667 10.1663L11 6.83301" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Confirmed
        </Button>
      );
    case 'SUPPLIER_ASSIGNED':
      return (
        <Button className="!bg-[#D3FDDA] !text-[#1FAC39] !text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1 8.5C1 9.48491 1.19399 10.4602 1.5709 11.3701C1.94781 12.2801 2.50026 13.1069 3.1967 13.8033C3.89314 14.4997 4.71993 15.0522 5.62987 15.4291C6.53982 15.806 7.51509 16 8.5 16C9.48491 16 10.4602 15.806 11.3701 15.4291C12.2801 15.0522 13.1069 14.4997 13.8033 13.8033C14.4997 13.1069 15.0522 12.2801 15.4291 11.3701C15.806 10.4602 16 9.48491 16 8.5C16 7.51509 15.806 6.53982 15.4291 5.62987C15.0522 4.71993 14.4997 3.89314 13.8033 3.1967C13.1069 2.50026 12.2801 1.94781 11.3701 1.5709C10.4602 1.19399 9.48491 1 8.5 1C7.51509 1 6.53982 1.19399 5.62987 1.5709C4.71993 1.94781 3.89314 2.50026 3.1967 3.1967C2.50026 3.89314 1.94781 4.71993 1.5709 5.62987C1.19399 6.53982 1 7.51509 1 8.5Z" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8.49967L7.66667 10.1663L11 6.83301" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Confirmed
        </Button>
      );
    case 'ACCEPT':
      return (
        <Button className="!bg-[#D3FDDA] !text-[#1FAC39] !text-[12px] !font-medium !border-0 !h-[2rem] !rounded-none !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1 8.5C1 9.48491 1.19399 10.4602 1.5709 11.3701C1.94781 12.2801 2.50026 13.1069 3.1967 13.8033C3.89314 14.4997 4.71993 15.0522 5.62987 15.4291C6.53982 15.806 7.51509 16 8.5 16C9.48491 16 10.4602 15.806 11.3701 15.4291C12.2801 15.0522 13.1069 14.4997 13.8033 13.8033C14.4997 13.1069 15.0522 12.2801 15.4291 11.3701C15.806 10.4602 16 9.48491 16 8.5C16 7.51509 15.806 6.53982 15.4291 5.62987C15.0522 4.71993 14.4997 3.89314 13.8033 3.1967C13.1069 2.50026 12.2801 1.94781 11.3701 1.5709C10.4602 1.19399 9.48491 1 8.5 1C7.51509 1 6.53982 1.19399 5.62987 1.5709C4.71993 1.94781 3.89314 2.50026 3.1967 3.1967C2.50026 3.89314 1.94781 4.71993 1.5709 5.62987C1.19399 6.53982 1 7.51509 1 8.5Z" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8.49967L7.66667 10.1663L11 6.83301" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Accepted
        </Button>
      );
    case 'ACCEPTED':
      return (
        <Button className="!bg-[#D3FDDA] !text-[#1FAC39] !text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1 8.5C1 9.48491 1.19399 10.4602 1.5709 11.3701C1.94781 12.2801 2.50026 13.1069 3.1967 13.8033C3.89314 14.4997 4.71993 15.0522 5.62987 15.4291C6.53982 15.806 7.51509 16 8.5 16C9.48491 16 10.4602 15.806 11.3701 15.4291C12.2801 15.0522 13.1069 14.4997 13.8033 13.8033C14.4997 13.1069 15.0522 12.2801 15.4291 11.3701C15.806 10.4602 16 9.48491 16 8.5C16 7.51509 15.806 6.53982 15.4291 5.62987C15.0522 4.71993 14.4997 3.89314 13.8033 3.1967C13.1069 2.50026 12.2801 1.94781 11.3701 1.5709C10.4602 1.19399 9.48491 1 8.5 1C7.51509 1 6.53982 1.19399 5.62987 1.5709C4.71993 1.94781 3.89314 2.50026 3.1967 3.1967C2.50026 3.89314 1.94781 4.71993 1.5709 5.62987C1.19399 6.53982 1 7.51509 1 8.5Z" stroke="#559EF5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8.49967L7.66667 10.1663L11 6.83301" stroke="#559EF5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Accepted
        </Button>
      );
    case 'DRIVER_ASSIGNED':
      return (
        <Button className="!bg-[#F9A000] !bg-opacity-20 !text-[#ffac11] !text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1 8.5C1 9.48491 1.19399 10.4602 1.5709 11.3701C1.94781 12.2801 2.50026 13.1069 3.1967 13.8033C3.89314 14.4997 4.71993 15.0522 5.62987 15.4291C6.53982 15.806 7.51509 16 8.5 16C9.48491 16 10.4602 15.806 11.3701 15.4291C12.2801 15.0522 13.1069 14.4997 13.8033 13.8033C14.4997 13.1069 15.0522 12.2801 15.4291 11.3701C15.806 10.4602 16 9.48491 16 8.5C16 7.51509 15.806 6.53982 15.4291 5.62987C15.0522 4.71993 14.4997 3.89314 13.8033 3.1967C13.1069 2.50026 12.2801 1.94781 11.3701 1.5709C10.4602 1.19399 9.48491 1 8.5 1C7.51509 1 6.53982 1.19399 5.62987 1.5709C4.71993 1.94781 3.89314 2.50026 3.1967 3.1967C2.50026 3.89314 1.94781 4.71993 1.5709 5.62987C1.19399 6.53982 1 7.51509 1 8.5Z" stroke="#F9A000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8.49967L7.66667 10.1663L11 6.83301" stroke="#F9A000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Allocated
        </Button>
      );
    case 'ON_ROUTE':
      return (
        <Button className="!bg-[#FF7E9D] !bg-opacity-20 !text-[#FF7E9D] !text-[12px] !border-0 !h-[2rem] font-semibold !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 13.4442C1 13.8568 1.16389 14.2524 1.45561 14.5442C1.74733 14.8359 2.143 14.9998 2.55556 14.9998C2.96811 14.9998 3.36378 14.8359 3.6555 14.5442C3.94722 14.2524 4.11111 13.8568 4.11111 13.4442C4.11111 13.0317 3.94722 12.636 3.6555 12.3443C3.36378 12.0526 2.96811 11.8887 2.55556 11.8887C2.143 11.8887 1.74733 12.0526 1.45561 12.3443C1.16389 12.636 1 13.0317 1 13.4442Z" stroke="#FF7E9D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.4442 4.11111C13.8568 4.11111 14.2524 3.94722 14.5442 3.6555C14.8359 3.36378 14.9998 2.96811 14.9998 2.55556C14.9998 2.143 14.8359 1.74733 14.5442 1.45561C14.2524 1.16389 13.8568 1 13.4442 1C13.0317 1 12.636 1.16389 12.3443 1.45561C12.0526 1.74733 11.8887 2.143 11.8887 2.55556C11.8887 2.96811 12.0526 3.36378 12.3443 3.6555C12.636 3.94722 13.0317 4.11111 13.4442 4.11111Z" stroke="#FF7E9D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.22233 13.4446H11.5001C12.2221 13.4446 12.9145 13.1577 13.425 12.6472C13.9355 12.1367 14.2223 11.4443 14.2223 10.7223C14.2223 10.0004 13.9355 9.30794 13.425 8.79743C12.9145 8.28691 12.2221 8.00011 11.5001 8.00011H5.27789C4.55591 8.00011 3.8635 7.7133 3.35298 7.20279C2.84247 6.69227 2.55566 5.99986 2.55566 5.27789C2.55566 4.55591 2.84247 3.8635 3.35298 3.35298C3.8635 2.84247 4.55591 2.55566 5.27789 2.55566H8.77789" stroke="#FF7E9D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          ENROUTE
        </Button>
      );
    case 'POB':
      return (
        <Button className="!bg-[#F3D4FF] !text-[#BB3CE8] !text-[12px] !font-semibold !border-0 !h-[2rem] !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
            <path d="M2.88867 11.3889C2.88867 11.8899 3.08768 12.3703 3.44191 12.7245C3.79615 13.0788 4.2766 13.2778 4.77756 13.2778C5.27853 13.2778 5.75897 13.0788 6.11321 12.7245C6.46744 12.3703 6.66645 11.8899 6.66645 11.3889C6.66645 10.8879 6.46744 10.4075 6.11321 10.0532C5.75897 9.69901 5.27853 9.5 4.77756 9.5C4.2766 9.5 3.79615 9.69901 3.44191 10.0532C3.08768 10.4075 2.88867 10.8879 2.88867 11.3889Z" stroke="#BB3CE8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.3335 11.3889C12.3335 11.8899 12.5325 12.3703 12.8867 12.7245C13.241 13.0788 13.7214 13.2778 14.2224 13.2778C14.7233 13.2778 15.2038 13.0788 15.558 12.7245C15.9123 12.3703 16.1113 11.8899 16.1113 11.3889C16.1113 10.8879 15.9123 10.4075 15.558 10.0532C15.2038 9.69901 14.7233 9.5 14.2224 9.5C13.7214 9.5 13.241 9.69901 12.8867 10.0532C12.5325 10.4075 12.3335 10.8879 12.3335 11.3889Z" stroke="#BB3CE8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.88889 11.3889H1V5.72222M1 5.72222L2.88889 1H11.3889L15.1667 5.72222M1 5.72222H15.1667M15.1667 5.72222H16.1111C16.6121 5.72222 17.0925 5.92123 17.4468 6.27547C17.801 6.6297 18 7.11015 18 7.61111V11.3889H16.1111M12.3333 11.3889H6.66667M9.5 5.72222V1" stroke="#BB3CE8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          POB
        </Button>
      );
    case 'ARRIVED':
      return (
        <Button className="!bg-[#D1E5FD] !text-[#559EF5] !text-[12px] !font-semibold !border-0 !h-[2rem] !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M9.05263 13.9737L6.36842 12.6316L1 15.3158V3.68421L6.36842 1L11.7368 3.68421L17.1053 1V7.71053" stroke="#559EF5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.36865 1V12.6316" stroke="#559EF5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.7368 3.68457V8.60562" stroke="#559EF5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.2133 15.4233C17.5888 15.048 17.8445 14.5697 17.9481 14.049C18.0518 13.5283 17.9987 12.9885 17.7955 12.498C17.5924 12.0075 17.2483 11.5882 16.8069 11.2932C16.3655 10.9983 15.8465 10.8408 15.3156 10.8408C14.7846 10.8408 14.2656 10.9983 13.8242 11.2932C13.3828 11.5882 13.0387 12.0075 12.8356 12.498C12.6325 12.9885 12.5793 13.5283 12.683 14.049C12.7866 14.5697 13.0423 15.048 13.4178 15.4233C13.7918 15.7982 14.4244 16.3583 15.3156 17.1046C16.2559 16.3082 16.8894 15.7481 17.2133 15.4233Z" stroke="#559EF5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.3159 13.5264V13.5353" stroke="#559EF5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          ARRIVED
        </Button>
      );
    case 'CANCELLED':
      return (
        <Button className="!bg-[#FFDEDE] !text-[#DA1A1A] !text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-2 uppercase w-full">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 6.25L8.5 8.5M8.5 8.5L6.25 10.75M8.5 8.5L10.75 10.75M8.5 8.5L6.25 6.25M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#DA1A1A" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          Cancelled
        </Button>
      );
    case 'FINISHED':
      return (
        <Button className="!bg-[#1FAC3926] !text-[#1FAC39] !text-[12px] !font-semibold !border-0 !h-[2rem] !py-0 !px-2 uppercase w-full">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1937_289)">
              <path d="M4.375 12.25H16.625L12.6875 8.3125L16.625 4.375H4.375V18.375" stroke="#1FAC39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1937_289">
                <rect width="21" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>

          FINISHED
        </Button>
      );
    case 'NO_SHOW':
      return (
        <Button className="!bg-[#d2d2d2] !text-[#757575] !text-[12px] !font-semibold !border-0 !h-[2rem] !py-0 !px-2 uppercase w-full">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 6.25L8.5 8.5M8.5 8.5L6.25 10.75M8.5 8.5L10.75 10.75M8.5 8.5L6.25 6.25M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#888888" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          NO SHOW
        </Button>
      );
    default:
      return (
        <Button className="!bg-[#006C35] !bg-opacity-30 !text-[#006C35]  !text-[12px] !font-medium !border-0 !h-[2rem] !rounded-xs !py-0 !px-2 uppercase w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1 8.5C1 9.48491 1.19399 10.4602 1.5709 11.3701C1.94781 12.2801 2.50026 13.1069 3.1967 13.8033C3.89314 14.4997 4.71993 15.0522 5.62987 15.4291C6.53982 15.806 7.51509 16 8.5 16C9.48491 16 10.4602 15.806 11.3701 15.4291C12.2801 15.0522 13.1069 14.4997 13.8033 13.8033C14.4997 13.1069 15.0522 12.2801 15.4291 11.3701C15.806 10.4602 16 9.48491 16 8.5C16 7.51509 15.806 6.53982 15.4291 5.62987C15.0522 4.71993 14.4997 3.89314 13.8033 3.1967C13.1069 2.50026 12.2801 1.94781 11.3701 1.5709C10.4602 1.19399 9.48491 1 8.5 1C7.51509 1 6.53982 1.19399 5.62987 1.5709C4.71993 1.94781 3.89314 2.50026 3.1967 3.1967C2.50026 3.89314 1.94781 4.71993 1.5709 5.62987C1.19399 6.53982 1 7.51509 1 8.5Z" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8.49967L7.66667 10.1663L11 6.83301" stroke="#1FAC39" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Completed
        </Button>
      );
  }
}

function BookingCard({ item, sendMail, sendMailLoader }) {
  const [showViaId, setShowShowViaId] = useState('');

  const showVia = (bookingId) => {
    const showViaBookingId = showViaId === bookingId ? '' : bookingId;
    setShowShowViaId(showViaBookingId);
  };
  const {
    formatPrice, eclipseText, renderWithNewlines,
  } = useContext(UtilityContext);

  const getBackGround = (type) => {
    switch (type) {
      case 'BID':
        return 'bg-white hover:bg-white bg-opacity-5  hover:bg-opacity-10 border-[#DEDEDE]';
      case 'ON_ROUTE':
        return 'bg-[#FF7E9D] hover:bg-[#FF7E9D] bg-opacity-5  hover:bg-opacity-10 border-[#FF7E9D]';
      case 'ARRIVED':
        return 'bg-[#559EF5] hover:bg-[#559EF5] bg-opacity-5  hover:bg-opacity-10 border-[#559EF5]';
      case 'POB':
        return 'bg-[#BB3CE8] hover:bg-[#BB3CE8] bg-opacity-5  hover:bg-opacity-10 border-[#BB3CE8]';
      case 'FINISHED':
        return 'bg-[#006C35] hover:bg-[#006C35] bg-opacity-5  hover:bg-opacity-10 border-[#006C35]';
      case 'DRIVER_ASSIGNED':
        return 'bg-[#ffac11] hover:bg-[#ffac11] bg-opacity-5  hover:bg-opacity-10 border-[#ffac11]';
      case 'NO_SHOW':
        return '!bg-opacity-20 !border-[#757575] !shadow-[#757575] !bg-[#757575] hover:bg-[#757575] bg-opacity-5  hover:bg-opacity-10 border-[#757575]';
      case 'CANCELLED':
        return '!border-[#ED2939] !shadow-[#ED2939] !bg-[#FFFAFA] hover:bg-[#FFFAFA] !bg-opacity-95  hover:!bg-opacity-100 border-[#ED2939]';
      default:
        return 'bg-white border-[#DEDEDE]';
    }
  };

  return (
    <div className={`divide-x divide-gray-200 flex justify-items-center w-full py-5 mb-3 ${getBackGround(item?.ride_status)} mt-1 border-[0.60px] rounded-lg lg:flex-row flex-nowrap overflow-hidden text-gray-700`} key={item?.booking_id}>
      <div className="basis-[20%] flex flex-col items-center justify-center relative box-border text-center px-2">
        <div className="text-neutral-700 ! font-bold py-2 underline text-xs">
          <Link href={`/trip-details?booking-id=${item?.booking_id}&activity=1`}>
            #
            {item?.booking_ref_no}
          </Link>
        </div>
        <div className="text-center py-2 leading-none">
          <div className={`${item?.booking_type === 'TRANSFERS' ? '!bg-primary !text-primary !bg-opacity-20' : '!bg-[#DFE2F4] !text-[#232C68] !bg-opacity-60'} w-auto px-2 py-1 justify-center items-center gap-2.5`}>
            <P className="!text-xs font-semibold">{item?.booking_type}</P>
          </div>
        </div>
      </div>
      <div className="basis-[10%] flex justify-center items-center flex-col px-2">
        <P className="mb-0.5 text-center text-neutral-700 !text-xs font-normal leading-tight">{formatDateTime(item?.travel_date)}</P>
      </div>
      <div className="basis-[18%] flex justify-center items-center flex-col px-2">
        <div className="flex flex-col justify-between gap-2">
          <span className="text-zinc-800 text-xs font-medium leading-none">{item?.passenger_name}</span>
          <span className="text-zinc-800 text-xs font-medium leading-none">
            {item?.passenger_mobile}
          </span>
        </div>
        <div className="flex flex-wrap py-2 gap-y-1 w-full justify-center items-center">
          {
            item?.passenger_adult_cnt !== 0
            && (
            <div className="flex flex-row justify-center w-1/2 pr-1">
              <div className="relative w-3">
                <Image src="/images/global/User.svg" fill alt="User" />
              </div>
              <span className="-rotate-45 text-zinc-800 text-xs font-medium mt-1 px-1">+</span>
              <P className="text-zinc-800 text-xs font-medium leading-tight mt-1">{item?.passenger_adult_cnt}</P>
            </div>
            )
          }
          {
            item?.passenger_luggage_count !== 0
            && (

            <div className="flex flex-row justify-center w-1/2">
              <div className="relative w-3">
                <Image src="/images/global/luggage.svg" fill alt="luggage" />
              </div>
              <span className="-rotate-45 text-zinc-800 text-xs font-medium mt-1 px-1">+</span>
              <P className="text-zinc-800 text-xs font-medium leading-tight mt-1">{item?.passenger_luggage_count}</P>
            </div>
            )
          }
          {
            item?.passenger_child_cnt !== 0
            && (

            <div className="flex flex-row justify-center w-1/2 pr-1">
              <div className="relative w-3.5">
                <Image src="/images/global/child_primary.svg" fill alt="child_primary" />
              </div>
              <span className="-rotate-45 text-zinc-800 text-xs font-medium mt-1 px-1">+</span>
              <P className="text-zinc-800 text-xs font-medium leading-tight mt-1">{item?.passenger_child_cnt}</P>
            </div>
            )
          }
          {
            item?.passenger_infant_cnt !== 0
            && (

            <div className="flex flex-row justify-center w-1/2">
              <div className="relative w-4">
                <Image src="/images/global/infant_primary.svg" fill alt="infant_primary" />
              </div>
              <span className="-rotate-45 text-zinc-800 text-xs font-medium mt-1 px-1">+</span>
              <P className="text-zinc-800 text-xs font-medium leading-tight mt-1">{item?.passenger_infant_cnt}</P>
            </div>
            )
          }
        </div>
      </div>
      <div className="basis-[27%] flex justify-center items-center flex-col px-2">
        <ol className={`relative w-full ${item?.drop_location || item?.via_details ? 'connecting-list' : ''}`}>
          {/* Pick up Location */}
          <li className={`text-left text-xs ${item?.drop_location || item?.via_details ? 'pb-5' : 'pb-0'} relative leading-tight font-semibold ml-2 overflow-visible`}>
            <div className="list-content tooltip tooltip-right custom-tooltip cursor-pointer relative overflow-visible" data-tip={`${item?.pickup_location}`}>
              <div className="flex gap-x-2 items-start">
                <div className="relative w-4 h-4 -ml-2 z-[9] flex-none">
                  <Image src="/images/global/pickup.svg" fill alt="pickup" />
                </div>
                <P className="overflow-visible relative text-black text-left !text-xs">
                  {eclipseText(item?.pickup_location, 50)}
                </P>
              </div>
              {
                item?.passenger_flight_no
              && (
              <div className="flex items-center pt-2 gap-x-1 pl-5">
                <MdOutlineFlightLand className="h-6 w-6" />
                <P className="leading-[14px] w-full text-left !text-xs  text-neutral-700 font-semibold -mt-1">{item?.passenger_flight_no}</P>
              </div>
              )
              }
            </div>
            {item?.via_details && (
            <button type="button" className="!bg-[#000] text-white uppercase w-auto px-2 py-1 !text-xs font-normal ml-2.5 mt-3 flex items-center gap-x-3 rounded-sm max-w-[95px]" onClick={() => { showVia(item?.booking_id); }}>
              {item?.via_details.length}
              {' '}
              stops
              {item?.booking_id !== showViaId
                  && <FiChevronDown />}
              {item?.booking_id === showViaId
                  && <FiChevronUp />}
            </button>
            )}
          </li>
          {/* Pick up Location */}
          {/* Via Location */}
          {item?.via_details && (
          <div className="connecting-list">
            <div className={`${item?.booking_id === showViaId ? 'block' : 'hidden'}`}>
              {item?.via_details.map((via, i) => (
                <li
                    // eslint-disable-next-line react/no-array-index-key
                  key={`${item?.booking_id}-${via?.via_location}`}
                  className={`text-left text-xs relative leading-tight ml-2 pb-3 ${item?.via_details.length === 1 ? 'single-child' : ''}`}
                >
                  <div className="list-content tooltip tooltip-right custom-tooltip cursor-pointer relative overflow-visible" data-tip={`${via?.via_location}`}>
                    <div className="!flex items-start">
                      <div className="relative !w-[15px] !h-[15px] bg-white border border-[#000] rounded-full -ml-2 z-[9] mt-[3px] flex-none">
                        <p className="absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 text-[10px] font-semibold text-[#000]">
                          {i + 1}
                        </p>
                      </div>
                      <P className="overflow-visible text-black tooltip tooltip-right custom-tooltip tooltip-info cursor-pointer text-left pl-2" data-tip={`${via?.via_location}`}>
                        {eclipseText(via?.via_location, 50)}
                      </P>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </div>
          )}
          {/* Via Location */}
          {/* Drop Location */}
          {item?.drop_location && (
          <li className={`text-left text-xs relative leading-tight ml-2 drop-location ${item?.drop_location ? 'border-dotted z-1' : ''}`}>
            <div className="list-content tooltip tooltip-right custom-tooltip cursor-pointer relative overflow-visible" data-tip={`${item?.drop_location}`}>
              <div className="!flex !gap-x-2 items-start">
                <div className="relative w-5 h-5 -ml-2.5 z-[9] flex-none">
                  <Image src="/images/global/destination_icon.svg" fill alt="dropoff" />
                </div>
                <P className="overflow-visible text-black text-left !text-xs">
                  {eclipseText(item?.drop_location, 30)}
                </P>
              </div>
              {
                item?.drop_flight_no
                && (
                  <div className="flex items-center gap-x-1 pl-5 mt-2">
                    <MdOutlineFlightTakeoff className="h-6 w-6" />
                    <P className="leading-[14px] w-full text-left !text-xs  text-neutral-700 font-semibold -mt-1">{item?.drop_flight_no}</P>
                  </div>
                )
              }
            </div>
          </li>
          )}
          {/* Drop Location */}
        </ol>
        {
              item?.driver_notes
            && (
            <div className="relative w-full">
              <div className="collapse collapse-arrow !rounded-md">
                <input type="checkbox" className="min-h-[0px]" />
                <div className="collapse-title text-xs font-semibold text-[#3B3B3B] text-bold uppercase pt-5">
                  Driver Note
                </div>
                <div className="collapse-content -mt-5">
                  <P className="break-all">
                    {renderWithNewlines(item?.driver_notes)}
                  </P>
                </div>
              </div>
            </div>
            )
            }
      </div>
      <div className="basis-[20%] flex justify-center items-center flex-col px-2">
        <div className="w-full h-auto px-2 py-1 bg-blue-900 bg-opacity-20 justify-center items-center gap-2.5 mb-1 text-center">
          <P className="!text-xs font-semibold text-blue-950">{item?.preferred_vehicle}</P>
        </div>
        {
              item?.provided_vehicle
              && (
              <div className="w-full text-center">
                {
                  item?.vehicle_make
                  && <span className="text-neutral-500 text-xs font-normal leading-none">{item?.vehicle_make}</span>
                }
                {
                  item?.vehicle_model && <span className="text-neutral-700 text-xs leading-none pl-1">{item?.vehicle_model}</span>
                }
                {
                  item?.vehicle_registration_no && <P className="text-neutral-700 text-xs font-medium leading-none">{item?.vehicle_registration_no}</P>
                }
              </div>
              )
            }

        <div className="min-w-[8rem] min-h-[5rem] h-full relative mx-auto">
          <Image fill src={item?.preferred_vehicle_image || '/images/carimages/economy.png'} className="object-contain h-auto w-auto" alt={item?.preferred_vehicle} />
        </div>

        {/* <div className="w-32 h-20 mb-2 relative">
          <Image src={item?.preferred_vehicle_image || '/images/carimages/economy.png'} fill alt={item?.preferred_vehicle} />
        </div> */}
        {
              item?.driver_name
            && (
            <div className="w-full flex flex-col justify-between gap-1.5 text-center">
              <span className="text-neutral-700 text-xs font-semibold leading-none">{item?.driver_name}</span>
              <span className="text-orange-600 text-xs font-semibold underline leading-none">{item?.driver_mobile}</span>
            </div>
            )
            }
      </div>
      <div className="basis-[20%] flex justify-center items-center flex-col px-2">
        <P className="text-center text-zinc-600 text-xs font-semibold mb-1">{formatPrice(item?.tariff, item?.region_currency || 'GBP')}</P>
        <div className={`h-6 px-8 py-1 my-2 ${item?.payment_type === 'PAID' ? 'bg-emerald-100' : 'bg-[#FFDEDE]'} justify-center items-center gap-2.5 inline-flex`}>
          <P className={`text-center uppercase ${item?.payment_type === 'PAID' ? 'text-green-600' : 'text-[#DA1A1A]'} text-xs font-semibold`}>{item?.payment_type}</P>
        </div>
      </div>
      <div className="basis-[25%] flex justify-center items-center flex-col px-2">
        <div className="w-auto min-w-[80%]">
          <GetStatusBtn type={item?.ride_status} />
        </div>
        <div className="flex gap-[25px] flex-row my-2">
          <Link href={`/trip-details?booking-id=${item?.booking_id}`} className="w-[16.599px] h-[16.077px] relative">
            <Image src="/images/global/edit.svg" fill alt="edit" />
          </Link>
          <div className="w-[18px] h-[14.625px] relative">
            {
             sendMailLoader && sendMailLoader === item?.booking_id
               ? (
                 <div role="status">
                   <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                   </svg>
                   <span className="sr-only">Loading...</span>
                 </div>
               )
               : <Image src="/images/icons/email.svg" alt="email" className="cursor-pointer" fill onClick={() => { sendMail(item?.booking_id, item?.region_id); }} />
            }
          </div>
          <Link href={`/trip-details?booking-id=${item?.booking_id}&activity=1`} className="w-[20px] h-[16px] relative">
            <Image src="/images/global/view.svg" fill alt="view" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
