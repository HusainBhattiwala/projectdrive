/* eslint-disable max-len */
import Image from 'next/image';
import { BookingProvider } from 'context/BookingContext';
import BookingEngine from './Booking/BookingEngine';
// import Link from 'next/link';
import P from './typography/P';
import H1 from './typography/H1';

export default function BookingBannerV3({
  img,
  className,
  head1,
  head2,
  line1,
  line2,
}) {
  return (
    <section
      className={`relative -top-20 bg-fixed -mb-20 bg-cover bg-no-repeat ${className}`}
    >
      <Image
        src={img || '/images/banner/driver-with-opened-car-door.png'}
        alt="driver-with-opened-car-door"
        className="object-cover"
        fill
      />
      <div className="pt-[130px] pb-4 md:pb-10 xl:px-14 lg:px-10 px-4 my-auto w-full !from-black !bg-gradient-to-t">
        <div className="md:px-6 px-2 mx-auto lg:container">
          <div className="relative text-white">
            <H1 className="uppercase xl:!text-[42px] lg:!text-[36px] md:!text-[28px] !text-[24px] xl:!leading-[50px] lg:!leading-[42px] md:!leading-[30px]  font-bold">
              {head1 || 'Premium Chauffeurs'}
            </H1>
            <H1 className="uppercase xl:!text-[42px] lg:!text-[36px] md:!text-[28px] !text-[24px] xl:!leading-[50px] lg:!leading-[42px] md:!leading-[30px]  font-bold">
              {head2 || 'at the Press of a button'}
            </H1>
            <P className="xl:!text-[24px] lg:!text-[22px] md:!text-[20px] !text-[18px] mt-4 mb-2">
              {line1 || 'Book your premium chauffeur ride today.'}
            </P>
            <P className="xl:!text-[24px] lg:!text-[22px] md:!text-[20px] !text-[18px]">
              {line2 || 'Arrive in style, stress-free and rejuvenated.'}
            </P>
          </div>
          <div className="py-4">
            <BookingProvider>
              <BookingEngine />
            </BookingProvider>
            {/* <Link href="/book-now" className="px-4 py-2 md:text-xl text-base bg-primary hover:bg-white text-white hover:text-primary rounded-md">Book Now</Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
