import React from "react";
import Container from "rolnew/comp/Container";
import Image from "next/image";
import CountUp from "rolnew/util/CountUp";

function Counts() {
  return (
    <Container className='bg-[#11202D] sm:py-16 py-8'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        <div className='p-4 relative'>
          <h2 className='text-zinc-400 text-4xl font-bold'>
            <CountUp start={0} end={8000} duration={3} />+
          </h2>
          <p className='text-zinc-500 text-md font-normal'>
            Successful Bookings
          </p>
          <Image
            src='/rolnew/home/line.svg'
            className='absolute top-0 right-0 h-full'
            width={2}
            height={10}
            alt='line'
          />
        </div>

        <div className='p-4 relative'>
          <h2 className='text-zinc-400 text-4xl font-bold'>
            <CountUp start={0} end={200} duration={3} />+
          </h2>
          <p className='text-zinc-500 text-md font-normal'>
            Trained Chauffeurs
          </p>
          <Image
            src='/rolnew/home/line.svg'
            className='hidden md:block absolute top-0 right-0 h-full'
            width={2}
            height={10}
            alt='line'
          />
        </div>

        <div className='p-4 relative'>
          <h2 className='text-zinc-400 text-4xl font-bold'>
            <CountUp start={0} end={150} duration={3} />+
          </h2>
          <p className='text-zinc-500 text-md font-normal'>Business Partners</p>
          <Image
            src='/rolnew/home/line.svg'
            className='absolute top-0 right-0 h-full'
            width={2}
            height={10}
            alt='line'
          />
        </div>
        <div className='p-4'>
          <h2 className='text-zinc-400 text-4xl font-bold'>
            <CountUp start={0} end={500} duration={3} />+
          </h2>
          <p className='text-zinc-500 text-md font-normal'>Luxury Cars</p>
        </div>
      </div>
    </Container>
  );
}

export default Counts;
