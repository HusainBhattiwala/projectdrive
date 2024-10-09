"use client";

import React from "react";
import Link from "next/link";
import { Pic } from "components/ui/Pic";
import Container from "./Container";
//import { Montserrat } from 'next/font/google';  // Updated import
import SocialLinks from "./SocialLinks";

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

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
      <Container className={`bg-[#121212] sm:py-[73px] py-8 text-center z-[-1]`}>
        <div className="flex sm:flex-row flex-col lg:gap-x-[65px] sm:gap-x-[30px] gap-x-6 justify-between w-full md:px-8">
          <div className="flex flex-col gap-y-6 text-left sm:max-w-[274px] w-full sm:pb-0 pb-6">
            <Link href="/rolnew" className="pop">
              <img
                className="h-11 w-[136px]"
                src="/rolnew/global/logo.svg"
                alt="logo"
              />
            </Link>
            <p className="text-xs leading-5 font-normal text-opacity-65 text-left">
              RolDrive is a distinguished professional chauffeur services
              company, dedicated to transforming the way individuals travel,
              with its roots in London, UK. Established to cater to corporate
              and celebrity clientele, we offer seamless transportation to their
              desired destinations across the globe, ensuring absolute comfort,
              sophistication, and convenience.
            </p>
            <div className="flex flex-col gap-y-2">
              <a
                href="tel:+4402045920966"
                className="text-base leading-[26px] font-light text-opacity-65 text-left pop"
              >
                +44 (0) 204 592 0966
              </a>
              <a
                href="mailto:booking@roldrive.com"
                className="text-base leading-[26px] font-light text-opacity-65 text-left pop"
              >
                booking@roldrive.com
              </a>
            </div>
            <SocialLinks />
          </div>
          <div className="flex lg:gap-x-[65px] sm:gap-x-[30px] gap-x-6 sm:my-0 py-6 sm:border-none border-t border-[#FFFFFF] border-opacity-40">
            {/* <div className="flex flex-col gap-y-5 items-start text-left sm:w-auto w-5/12">
            <h4 className="text-left text-base font-normal whitespace-nowrap">
                <h2 className="text-2xl font-semibold">Fleet</h2>
              </h4>
              <Link href="/fleet" className="text-md pop">
                Business
              </Link>
              <Link href="/fleet" className="text-md pop">
                First
              </Link>
              <Link href="/fleet" className="text-md pop">
                Luxury
              </Link>
              <Link href="/fleet" className="text-md pop">
                Electric
              </Link>
              <Link href="/fleet" className="text-md pop">
                SUV
              </Link>
              <Link href="/fleet" className="text-md pop">
                MVP
              </Link>
              <Link href="/fleet" className="text-md pop">
                Sprinter
              </Link>
            </div> */}
            <div className="flex flex-col gap-y-5 items-center text-left">
              <h4 className="text-left text-base font-normal whitespace-nowrap">
                <h2 className="text-2xl font-semibold">Services</h2>
              </h4>
              <Link href="/road-shows"
                className="text-md pop">
                Roadshow Transfers
              </Link>
              <Link
                href="/intercity-rides"
                className="text-md pop"
              >
                Intercity Transfers
              </Link>
              <Link
                href="/event-transportation-services"
                className="text-md pop"
              >
                Event Transfers
              </Link>
              <Link
                href="/wedding-chauffeur-service"
                className="text-md pop"
              >
                Wedding Transfers
              </Link>
              <Link
                href="/corporate-chauffeur-service-london"
                className="text-md pop"
              >
                Corporate Transfers
              </Link>
              <Link
                href="/sightseening-chauffeur-service"
                className="text-md pop"
              >
                Cities Sightseeing
              </Link>
              <Link
                href="/private-jet-chauffeur-service"
                className="text-md pop"
              >
                Private Jet Transfers
              </Link>

              {/* <Link
                href="#"
                className="text-left text-base font-normal mt-2"
              >
                <h2 className="text-xl font-semibold">FAQ</h2>
              </Link> */}

            </div>

            <div className="flex flex-col gap-y-5 items-center text-left">
              <h4 className="text-left text-base font-normal whitespace-nowrap">
                <h2 className="text-2xl font-semibold">Airport Transfer</h2>
              </h4>
              <Link
                href="/airport-transfers/airport-transfer-london"
                className="text-md pop"
              >
                London
              </Link>
              <Link href="/airport-transfers/airport-transfer-dubai">
                Dubai
              </Link>
              <Link
                href="/airport-transfers/airport-transfer-new-york"
                className="text-md pop"
              >
                New York
              </Link>
            </div>
          </div>
          <div className="flex lg:gap-x-[65px] sm:gap-x-[30px] gap-x-6 sm:my-0 py-6 sm:border-none border-t border-[#FFFFFF] border-opacity-40">
            <div className="flex flex-col gap-y-5 items-center text-left sm:w-auto w-5/12">
              <h4 className="text-left text-base font-normal whitespace-nowrap">
                <h2 className="text-2xl font-semibold">Top Cities</h2>
              </h4>
              <Link href="/chauffeur-service-in-london" className="text-md pop">
                London
              </Link>
              <Link href="/chauffeur-service-in-dubai" className="text-md pop">
                Dubai
              </Link>
              <Link href="/chauffeur-service-in-new-york" className="text-md pop">
                New York
              </Link>
              <Link href="/chauffeur-service-in-paris" className="text-md pop">
                Paris
              </Link>
              <Link href="/chauffeur-service-in-tokyo" className="text-md pop">
                Tokyo
              </Link>
            </div>
            <div className="flex flex-col gap-y-5 items-center text-left">
              <h4 className="text-left text-base font-normal whitespace-nowrap">
                <h2 className="text-2xl font-semibold">Quick Links</h2>
              </h4>
              <Link
                href="/fleet"
                className="text-base pop"
              >
                Fleet
              </Link>
              <Link
                href="/all-services"
                className="text-base pop"
              >
                All Services
              </Link>
              <Link
                href="/about-us"
                className="text-base pop"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="text-base pop"
              >
                Contact Us
              </Link>
              <Link
                href="https://blog.roldrive.com/"
                className="text-left text-base font-normal"
              >
                <h2 className="text-xl font-semibold">Blogs</h2>
              </Link>
              {/* <Link
                href="#"
                className="text-base text-[#FDC65C] whitespace-nowrap pop"
                onClick={(e) => e.preventDefault()}
              >
                Become A Supplier
              </Link> */}
            </div>
          </div>
        </div>
        <div className="flex gap-x-6 flex-wrap sm:justify-start justify-between py-6 border-opacity-40 relative border-b border-[#FFFFFF]">
          <div className="flex gap-x-6 sm:w-auto w-full">
            <Link
              href="/privacy-policy"
              className="sm:text-base text-sm text-[#FFFFFF] text-opacity-60 font-light text-left sm:w-auto w-2/4 pop"
            >
              Privacy policy
            </Link>
            {/* <Link
              href="#"
              className="sm:text-base text-sm text-[#FFFFFF] text-opacity-60 font-light text-left pop"
            >
              GDPR policy
            </Link> */}
          </div>
          <Link
            href="/terms-and-conditions"
            className="sm:text-base text-sm text-[#FFFFFF] text-opacity-60 font-light pop"
          >
            Terms & Conditions
          </Link>
          <div className="absolute -right-4 top-0 z-[999999] bg-[#121212] rounded-full cursor-pointer sm:block hidden">
            <div className="bg-[#FFFFFF] bg-opacity-40 w-[136px] h-[136px] rounded-full flex items-center justify-center border border-[#FFFFFF] border-opacity-20">
              <div
                className="drop-shadow-[#000000] rounded-full bg-[#E5EAFA] bg-opacity-30 w-[98px] h-[98px] flex items-center justify-center border border-[#FFFFFF] pop"
                onClick={goTop}
              >
                <div
                  href="roldrive.com"
                  className="w-8 h-8 hover:animate-bounce"
                >
                  <Pic
                    alt="uparrow"
                    src="/rolnew/global/icons/uparrow.svg"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-left pt-6 text-[#FFFFFF] sm:text-opacity-70 text-opacity-40 sm:text-base text-xs font-light">
          Copyright ©2024 - RolDrive. All Rights Reserved.{" "}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
