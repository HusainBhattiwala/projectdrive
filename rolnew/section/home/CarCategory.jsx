"use client";

import { useEffect, useState } from "react";

function CarCategory({ categorys = [], onSelectCategory }) {
  const [activeCat, setActiveTab] = useState(0);

  const carCategories = categorys?.filter(
    (category, index, self) =>
      index === self?.findIndex((c) => c?.vehCatId === category?.vehCatId)
  );

  useEffect(() => {
    setActiveTab(0);
    onSelectCategory(categorys[0]?.vehCatId);
  }, []);
  console.log(activeCat);

  return (
    <div className='sm:py-[44px] py-4'>
      <div className='w-full flex flex-nowrap max-w-[800px] overflow-x-auto mx-auto sm:justify-center justify-start items-center scroll no-scroll'>
        {carCategories?.map((category, i) => (
          <button
            key={category?.vehCatId}
            type='button'
            className={`flex-none border-b-2 hover:bg-[#FFFFFF0D] delay-75 duration-500 ${
              i === activeCat
                ? "border-primary bg-[#FFFFFF0D]"
                : "border-[#B2B2B2] bg-transparent"
            } ${i === 0 || i === category?.length - 1 ? "px-0" : "px-3"} `}
            onClick={() => {
              setActiveTab(i);
              onSelectCategory(category?.vehCatId);
            }}
          >
            <span className='text-base font-medium px-2 text-[#B2B2B2] leading-7'>
              {category?.vehCatName}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CarCategory;
