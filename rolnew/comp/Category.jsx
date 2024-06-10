"use client";

import { useEffect, useState } from "react";

function Category({ categorys = [] }) {
  const [activeCat, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(0);
  }, []);

  return (
    <div className='sm:py-[44px]'>
      <div className='flex flex-nowrap gap-2 sm:gap-2 sm:bg-[#223544] md:gap-2 sm:max-w-[70%] md:w-[933px] sm:border border-gray-700 p-4 rounded-2xl overflow-x-auto mx-auto sm:justify-between justify-between items-center scroll no-scroll sm:shadow-[1px_1px_9px_-2px_rgba(0,0,0,0.75)]'>
        {categorys.map((category, i) => (
          <button
            type='button'
            className={`flex-none border border-transparent rounded-md px-6 py-1 group ${
              i === activeCat
                ? "bg-[#FFFFFF] text-pry-500 border-primary"
                : "bg-slate-600/80 hover:text-pry-500 hover:bg-[#FFFFFF] hover:border-primary"
            }`}
            onClick={() => {
              setActiveTab(i);
            }}
            key={category.id}
          >
            <span
              className={`text-base font-medium leading-7 ${
                i === activeCat
                  ? "text-pry-500"
                  : "text-[#FFFFFF] group-hover:text-pry-500"
              }`}
            >
              {category?.category}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;
