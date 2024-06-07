'use client';

import Link from 'next/link';
import {
  FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp,
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import P from './typography/P';

export default function SocialShareIocns() {
  const siteurl = 'https://www.roldrive.com';
  const url = siteurl + usePathname();
  return (
    <div className="max-w-sm my-6">
      <P className="text-primary !text-xl font-semibold">Share this post on :</P>
      <div className="grid grid-cols-8 mt-2 -ml-1">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:bg-primary bg-black rounded-full p-2 mx-auto"
        >
          <FaFacebookF />
        </Link>
        <Link
          href={`https://wa.me/?text=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:bg-primary bg-black rounded-full p-2 mx-auto"
        >
          <FaWhatsapp />
        </Link>
        <Link
          href={`https://twitter.com/share?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:bg-primary bg-black rounded-full p-2 mx-auto"
        >
          <FaTwitter />
        </Link>
        <Link
          href={`https://www.linkedin.com/shareArticle?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:bg-primary bg-black rounded-full p-2 mx-auto"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href={`mailto:?subject=RolDrive&body=${url}`}
          className="text-white text-xl hover:bg-primary bg-black rounded-full p-2 mx-auto"
        >
          <HiMail />
        </Link>
      </div>
    </div>
  );
}
