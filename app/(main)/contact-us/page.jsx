/* eslint-disable max-len */
import Link from 'next/link';
import H1 from 'components/typography/H1';
import H3 from 'components/typography/H3';
import H4 from 'components/typography/H4';
import P from 'components/typography/P';
import { metadata } from 'components/utils/metadata';
import ServingCountries from 'components/home/ServingCountries';

export function generateMetadata() {
  return metadata({
    title: 'Book a Luxury Black Car To Call +44 (0) 207 112 8101 | Rol Drive',
    description:
      "RolDrive's luxury black car service. Dial +44 (0) 207 112 8101 for an opulent ride tailored to your elegance. Book now",
    keywords: ['contact us', 'black car', 'luxury car'],
    ogTitle: 'Call +44 (0) 207 112 8101 to Book a Luxury Black Car | RolDrive',
    ogDescription:
      'Experience elegance at your fingertips. Dial +44 (0) 207 112 8101 to book a luxury black car with RolDrive. Your opulent journey begins with a call.',
    twTitle: 'Call +44 (0) 207 112 8101 to Book a Luxury Black Car | RolDrive',
    twDescription:
      'Experience elegance at your fingertips. Dial +44 (0) 207 112 8101 to book a luxury black car with RolDrive. Your opulent journey begins with a call.',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Contact Us',
  url: 'https://www.roldrive.com/contact-us',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.roldrive.com/search?q=contact-us{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <div className="container p-6 mx-auto lg:mt-10 md:mt-6">
          <H1 className="text-primary font-[700] !text-[32px] mb-6">
            Contact Us
          </H1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="py-4 md:pr-4 md:py-0">
              <form className="my-1">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full mb-6 input input-bordered focus:border-primary focus:outline-none"
                />
                <input
                  type="phone"
                  placeholder="Contact Number"
                  className="w-full mb-6 input input-bordered focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full mb-6 input input-bordered focus:border-primary focus:outline-none"
                />
                <textarea
                  type="textarea"
                  placeholder="Your Message"
                  className="w-full mb-6 h-28 input input-bordered focus:border-primary focus:outline-none"
                />
                <input
                  type="submit"
                  value="SUBMIT"
                  className="block w-full p-3 font-semibold text-white rounded-md bg-primary hover:bg-black"
                />
              </form>
              {/* <div className="my-16">
              <P className="font-semibold !text-xl text-black">
                Would you like to join our newsletter?
              </P>
              <form action="">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-3/4 input input-bordered focus:border-primary focus:outline-none"
                />
                <input
                  type="submit"
                  value="✓"
                  className="px-6 py-3 mt-8 ml-5 text-white rounded-md bg-primary hover:bg-black"
                />
              </form>
            </div> */}
            </div>
            <div className="lg:px-6 md:pl-4">
              <H3 className="mb-5 text-black text-[#383C3E] font-semibold">
                Offices
              </H3>
              <div>
                <H4 className=" my-1 text-[16px] text-[#383C3E] font-semibold">
                  Address
                </H4>
                <P>134 Buckingham Palace Rd London SW1W 9SA, UK</P>
              </div>
              <div className="my-6">
                <H4 className=" my-1 text-[16px] text-[#383C3E] font-semibold">
                  Telephone number
                </H4>
                <P>Give us call at</P>
                <Link href="tel:+4402071128101" className="text-[14px]">
                  +44 (0) 207 112 8101
                </Link>
              </div>
              <div>
                <H4 className="text-[16px] text-[#383C3E] font-semibold mb-1">
                  Enquiries
                </H4>
                <P>Email Us</P>
                <Link
                  href="mailto:booking@roldrive.com"
                  className="text-[14px]"
                >
                  booking@roldrive.com
                </Link>
              </div>
              {/* <div className="mt-7">
              <H4 className="my-1 text-[16px] text-[#383C3E] font-semibold">
                Call
              </H4>
              <P className="mt-2">
                <img
                  alt="GB"
                  className="inline w-6 -mt-1"
                  src={`${process.env.NEXT_PUBLIC_COUNTRY_FLAG_URL}/GB.svg`}
                />
                {' '}
                <Link href="tel:+4402071128101" className="text-[14px]">
                  +44 (0) 207 112 8101
                </Link>
              </P>
            </div> */}
            </div>
          </div>
        </div>
        <div className="py-12">
          <ServingCountries />
        </div>
      </main>
    </>
  );
}
