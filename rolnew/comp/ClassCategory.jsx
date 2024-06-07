'use client';

import { useEffect, useState } from 'react';

function ClassCategory({ categorys = [] }) {
  const [activeCat, setActiveTab] = useState(0);
  useEffect(() => {
    setActiveTab(0);
  }, []);
  return (
    <div className="sm:py-[20px]">
      <div className="w-full flex flex-nowrap max-w-[800px] overflow-x-auto mx-auto sm:justify-center justify-start items-center scroll no-scroll">
        {
          categorys.map((category, i) => (
            <button type="button" className={`flex-none hover:bg-[#FEF8F4]  hover:border-primary ${i === activeCat ? 'border-primary bg-[#eadede0d]' : 'border-[#f1e9e9] bg-transparent'} ${(i === 0 || i === categorys.length - 1) ? 'px-0' : 'px-3'} `} onClick={() => { setActiveTab(i); }} key={category.id}>
              <span className="text-base font-medium px-2 hover:text-[#EC5C29] leading-7">
                {category?.category}
              </span>
            </button>
            
          ))
        }
      </div>
    </div>
  );
}

export default ClassCategory;
