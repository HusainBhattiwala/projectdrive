'use client';

import { useState } from 'react';
import Pic from 'rolnew/util/Pic';

function Collaspe({ list }) {
  const [slectedId, setSelectedId] = useState(0);

  return (
    <div className='flex flex-col gap-y-6 sm:my-0 my-4 pt-6'>
      {list?.map((faq, index) => (
        <div
          className={`rounded-xl text-left sm:p-6 p-4 ${
            slectedId === index
              ? 'bg-[#E5EAFA] bg-opacity-10'
              : 'border border-[#1E222C]'
          }`}
          key={faq.id}
        >
          <div
            className='cursor-pointer flex justify-between items-center'
            onClick={() => {
              setSelectedId(slectedId !== index ? index : '');
            }}
          >
            <h3 className='text-[#B2B2B2] sm:text-xl text-base'>
              {faq.question}
            </h3>
            <div className='w-6 h-6 ml-2'>
              <Pic
                className={`${
                  slectedId === index ? 'rotate-[270deg]' : 'rotate-90'
                }`}
                src='/rolnew/global/icons/small_arrow.svg'
                alt='small_arrow'
                objectFit='cover'
              />
            </div>
          </div>
          <div
            className={`${
              slectedId === index ? 'h-auto block sm:pt-6 pt-4' : 'h-0 hidden'
            } transition-all delay-150`}
          >
            <p className='text-md font-normal text-[#B2B2B2]'>{faq.ans}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collaspe;
