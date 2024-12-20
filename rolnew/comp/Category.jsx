// "use client";

// import { useEffect, useState } from "react";

// function Category({ categorys = [], setCarData }) {
//   const [activeCat, setActiveTab] = useState(0);

//   const uniqueCategories = categorys?.filter(
//     (category, index, self) =>
//       index === self?.findIndex((c) => c?.vehCatName === category?.vehCatName)
//   );

//   useEffect(() => {
//     setActiveTab(0);
//     setCarData(categorys[0]);
//   }, []);

//   return (
//     <div className='sm:py-[15px] sm:mb-10 py-[30px]'>
//       <div className='sm:bg-[#223544] w-[933px] sm:border border-gray-700 sm:p-4 sm:rounded-2xl mx-auto sm:shadow-[1px_1px_9px_-2px_rgba(0,0,0,0.75)]'>
//         <div className='flex flex-nowrap gap-2 sm:gap-3 w-full overflow-x-auto sm:justify-between justify-between items-center scroll no-scroll'>
//           {uniqueCategories?.map((category, i) => (
//             <button
//               type='button'
//               className={`flex-none rounded-md px-6 py-1 group ${
//                 i === activeCat
//                   ? "bg-[#FFFFFF] text-pry-500 border border-pry-500"
//                   : "bg-slate-600/80 hover:text-pry-500 hover:bg-[#FFFFFF] hover:border-primary"
//               }`}
//               onClick={() => {
//                 setActiveTab(i);
//                 setCarData(category);
//               }}
//               key={category?.vehCatId}
//             >
//               <span
//                 className={`text-base font-medium leading-7 ${
//                   i === activeCat
//                     ? "text-pry-500"
//                     : "text-[#FFFFFF] group-hover:text-pry-500"
//                 }`}
//               >
//                 {category?.vehCatName}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;
"use client";

import { useEffect, useState } from "react";

function Category({ categorys = [], onCategoryChange }) {
  const [activeCat, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(0);
    onCategoryChange(categorys[0]);
  }, []);

  return (
    <div className="sm:py-[15px] sm:mb-10 py-[30px]">
      <div className="sm:bg-[#223544] max-w-[933px] sm:border border-gray-700 sm:p-4 sm:rounded-2xl mx-auto sm:shadow-[1px_1px_9px_-2px_rgba(0,0,0,0.75)]">
        <div className="flex flex-nowrap gap-2 sm:gap-3 w-full overflow-x-auto sm:justify-between justify-between items-center scroll no-scroll">
          {categorys.map((category, i) => (
            <button
              type="button"
              className={`flex-none rounded-md px-9 py-1 group ${
                i === activeCat
                  ? "bg-[#FFFFFF] text-pry-500 border border-pry-500"
                  : "bg-slate-600/80 hover:text-pry-500 hover:bg-[#FFFFFF] hover:border-primary"
              }`}
              onClick={() => {
                setActiveTab(i);
                onCategoryChange(category);
              }}
              key={i}
            >
              <span
                className={`text-base font-medium leading-7 ${
                  i === activeCat
                    ? "text-pry-500"
                    : "text-[#FFFFFF] group-hover:text-pry-500"
                }`}
              >
                {category.catName}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
