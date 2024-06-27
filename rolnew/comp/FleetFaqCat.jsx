'use client';

import { useEffect, useState } from 'react';

function FleetFaqCat({ categorys = [], setFaqCat }) {
  const [activeCat, setActiveTab] = useState(0);

  useEffect(() => {
    if (categorys.length > 0) {
      setActiveTab(0);
      setFaqCat(categorys[0]?.faqCat);
    }
  }, [categorys, setFaqCat]);

  const handleCategoryClick = (index) => {
    setActiveTab(index);
    setFaqCat(categorys[index]?.faqCat);
  };

  return (
    <div className='sm:py-[44px] py-4'>
      <div className='w-full flex flex-nowrap max-w-[800px] overflow-x-auto mx-auto sm:justify-center justify-start items-center scroll no-scroll'>
        {categorys?.map((category, i) => (
          <button
            key={i}
            type='button'
            className={`flex-none border-b-2 hover:bg-[#FFFFFF0D] delay-75 duration-500 ${
              i === activeCat
                ? 'border-primary bg-[#FFFFFF0D]'
                : 'border-[#B2B2B2] bg-transparent'
            } ${i === 0 || i === categorys.length - 1 ? 'px-0' : 'px-3'} `}
            onClick={() => handleCategoryClick(i)}
          >
            <span className='text-base font-medium px-2 text-[#B2B2B2] leading-7'>
              {category?.faqCat}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FleetFaqCat;
