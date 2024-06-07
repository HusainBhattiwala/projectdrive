'use client';

import { useEffect, useState } from 'react';

function Category({ categorys = [] }) {
  const [activeCat, setActiveTab] = useState(0);
  useEffect(() => {
    setActiveTab(0);
  }, []);
  return (
    <div className="sm:py-[44px] py-4">
      <div className="w-full flex flex-nowrap max-w-[800px] overflow-x-auto mx-auto sm:justify-center justify-start items-center scroll no-scroll">
        {
          categorys.map((category, i) => (
            <button type="button" className={`flex-none border-b-2 hover:bg-[#FFFFFF0D]  hover:border-primary ${i === activeCat ? 'border-primary bg-[#FFFFFF0D]' : 'border-[#B2B2B2] bg-transparent'} ${(i === 0 || i === categorys.length - 1) ? 'px-0' : 'px-3'} `} onClick={() => { setActiveTab(i); }} key={category.id}>
              <span className="text-base font-medium px-2 text-[#B2B2B2] leading-7">
                {category?.category}
              </span>
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default Category;
