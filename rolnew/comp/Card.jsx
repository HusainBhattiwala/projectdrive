import React from 'react';
import Pic from 'rolnew/util/Pic';

function Card({ title, description, img, titleNoWrap, action }) {
  return (
    <div className='card w-full rounded-lg h-full group cursor-pointer transition ease-in-out delay-150'>
      <figure className='w-full sm:h-40 h-[70px] relative'>
        <div className='bg-[#11202D] bg-opacity-15 absolute w-full h-full z-10 group-hover:bg-transparent' />
        <Pic
          src={`${img || '/rolnew/global/card/card-image1.jpg'}`}
          alt='card-image1'
          objectFit='cover'
        />
      </figure>
      <div className='card-body gap-y-1 bg-[#161d25] sm:py-1 sm:px-7 px-3 py-2 rounded-b-lg'>
        <h2
          className={`card-title text-sm sm:text-xl font-medium text-[#BBBCC0] text-left sm:mt-4 mt-0 ${
            titleNoWrap && 'sm:whitespace-nowrap'
          }`}
        >
          {title}
        </h2>
        <p className='text-[#B2B2B2] text-sm font-normal leading-snug text-left'>
          {description}
        </p>
        <div className='card-actions flex gap-x-2 items-center cursor-pointer mt-1 sm:mb-6 mb-1 pop'>
          <button type='button' className='font-normal text-sm text-[#FDC65C]'>
            {action ? action : ' Learn More'}
          </button>
          <div className='w-4 h-4'>
            <Pic
              className='sm:grid-cols-2'
              src='/rolnew/global/right-arrow.svg'
              alt='card-image1'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
