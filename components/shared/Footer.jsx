'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  FaFacebookF,
  // FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Pic } from '../ui/Pic';
import H3 from '../typography/H3';
import P from '../typography/P';

function Footer() {
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);

  const handleTwitterMouseEnter = () => {
    setIsTwitterHovered(true);
  };

  const handleTwitterMouseLeave = () => {
    setIsTwitterHovered(false);
  };
  return (
    <footer className="py-2 xl:px-20 lg:px-10 px-6 bg-black text-white relative z-30 mt-auto pb-6">
      <div className="lg:container mx-auto">
        <div className="grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-0 mt-10 mx-auto md:gap-6">
          <div className="col-span-1">
            <div className="mt-1 ">
              <div className="lg:w-36 w-32 md:h-12 h-12 md:mx-0 mx-auto mb-2 -mt-4">
                <Link href="/" className="pop">
                  <Pic src="/images/logo_white.png" alt="RolDrive logo" />
                </Link>
              </div>
              <ul className="mt-5">
                <li className="flex items-center mb-1">
                  <Link
                    className="flex flex-wrap hover:text-primary pop"
                    href="tel:+4402045920966"
                  >
                    <div className="w-4 h-4 my-auto mr-1">
                      <Pic
                        src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/GB.svg`}
                        alt="GB"
                      />
                    </div>
                    <P className="mb-1 ml-1">+44 (0) 204 592 0966</P>
                  </Link>
                </li>
              </ul>
              <ul className="mb-2">
                <li className="flex items-center mb-1">
                  <Link
                    className="flex flex-wrap"
                    href="mailto:booking@roldrive.com"
                  >
                    <MdEmail className="w-5 h-5 my-auto mr-1" />
                    <P className="ml-1 hover:text-primary !text-[15px]">
                      booking@roldrive.com
                    </P>
                  </Link>
                </li>
              </ul>
              <div className="flex gap-4 text-xl my-2 mt-3">
                <a
                  aria-label="facebook"
                  href="https://www.facebook.com/RolDrive"
                  className="hover:text-primary"
                >
                  <FaFacebookF />
                </a>

                {/* <FaTwitter /> */}
                <a
                  aria-label="twitter"
                  href="https://twitter.com/Rol_Drive"
                  className="hover:text-primary"
                  onMouseEnter={handleTwitterMouseEnter}
                  onMouseLeave={handleTwitterMouseLeave}
                >
                  <img
                    className="h-[1rem] w-[1rem] mt-0.5"
                    src={isTwitterHovered ? '/images/global/twitter.svg' : '/images/global/twitter-white.svg'}
                    alt="twitter_logo"
                  />
                </a>

                <a
                  aria-label="instagram"
                  href="https://www.instagram.com/rol_drive/"
                  className="hover:text-primary"
                >
                  <FaInstagram />
                </a>

                <a
                  aria-label="pinterest"
                  href="https://www.pinterest.com/roldrive/"
                  className="hover:text-primary"
                >
                  <FaPinterestP />
                </a>

                <a
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/rol-drive-7a259b264/"
                  className="hover:text-primary"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-5 lg:mx-auto lg:mt-0">
            <H3 className="font-bold uppercase">Fleet</H3>

            <ul className="mt-5">
              <li className="flex items-center mb-2">
                <a href="/fleet/business" className="font-light hover:text-primary">
                  Business
                </a>
              </li>
              <li className="flex items-center mb-2">
                <a href="/fleet/first" className="font-light hover:text-primary">
                  First
                </a>
              </li>
              <li className="flex items-center mb-2">
                <a href="/fleet/luxury" className="font-light hover:text-primary">
                  Luxury
                </a>
              </li>
              <li className="flex items-center mb-2">
                <a href="/fleet/electric" className="font-light hover:text-primary">
                  Electric
                </a>
              </li>
              <li className="flex items-center mb-2">
                <Link href="/fleet/suv" className="font-light hover:text-primary">
                  SUV
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <a href="/fleet/mpv" className="font-light hover:text-primary">
                  MPV
                </a>
              </li>
              <li className="flex items-center mb-2">
                <a href="/fleet/sprinter" className="font-light hover:text-primary">
                  Sprinter
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 mt-5 lg:mx-auto lg:mt-0">
            <H3 className="font-bold uppercase">Services</H3>

            <ul className="mt-5">
              <li className="flex items-center mb-2">
                <Link href="/airport-transfers">
                  <P className="font-light hover:text-primary">
                    {' '}
                    Airport Transfers
                  </P>
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <Link href="/road-shows">
                  <P className="font-light hover:text-primary">Road Shows</P>
                </Link>
              </li>
              <li className="flex items-center mb-1">
                <Link href="/intercity-rides">
                  <P className="font-light hover:text-primary">
                    Intercity Transfers
                  </P>
                </Link>
              </li>
            </ul>
            <ul className="mt-6">
              <li>
                <Link href="/faqs">
                  <H3 className="font-bold uppercase hover:text-primary">
                    FAQ
                  </H3>
                </Link>
              </li>
              <li>
                <Link href="https://blog.roldrive.com/">
                  <H3 className="mt-3 font-bold uppercase hover:text-primary">
                    Blogs
                  </H3>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 mt-5 lg:mx-auto lg:mt-0">
            <H3 className="font-bold uppercase">Top Cities</H3>
            <ul className="mt-5">
              <li className="flex items-center mb-2">
                <Link href="/airport-transfer-london">
                  <P className="font-light hover:text-primary">London</P>
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <Link href="/airport-transfer-paris">
                  <P className="font-light hover:text-primary">Paris</P>
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <Link href="/airport-transfer-new-york">
                  <P className="font-light hover:text-primary">New York</P>
                </Link>
              </li>

              <li className="flex items-center mb-2">
                <Link href="/airport-transfer-dubai">
                  <P className="font-light hover:text-primary">Dubai</P>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 mt-5 lg:mx-auto lg:mt-0">
            <H3 className="font-bold uppercase">LEGALS</H3>
            <ul className="mt-5">
              <li className="flex items-center mb-2">
                {/* <Link href="/"> */}
                <Link href="/terms-and-conditions" className="font-light hover:text-primary">
                  Terms & Conditions
                </Link>
                {/* </Link> */}
              </li>
              <li className="flex items-center mb-2">
                {/* <Link href="/"> */}
                <Link href="/privacy-policy" className="font-light hover:text-primary">Privacy Policy </Link>
                {/* </Link> */}
              </li>
              <li className="flex items-center mb-1">
                {/* <Link href="/"> */}
                <Link className="font-light hover:text-primary" href="/gdpr-policy">GDPR Policy</Link>
                {/* </Link> */}
              </li>
            </ul>
            <ul className="mt-10">
              <li className="flex items-center mb-1">
                <Link href="/contact-us">
                  <P className="text-primary uppercase hover:text-white font-[600]">
                    Contact Us
                  </P>
                </Link>
              </li>
              <li className="flex items-center mb-1">
                <Link href="/become-a-supplier">
                  <P className="text-primary uppercase hover:text-white font-[600]">
                    Become a Supplier
                  </P>
                </Link>
              </li>

              {/* <li className="flex items-center mb-1">
                <Link href="/">
                  <P className="uppercase text-primary">Chat with Us</P>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="w-full text-right mt-8">
          <P className="text-white sm:text-left text-center md:text-right my-2">
            Copyright ©2024 - RolDrive. All Rights Reserved.
          </P>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
