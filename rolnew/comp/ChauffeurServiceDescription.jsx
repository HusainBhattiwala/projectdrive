import React from "react";

function ChauffeurServiceDescription({ ChauffeurServiceDescription }) {
  console.log("services:", ChauffeurServiceDescription);
  return (
    <div className='bg-[#223544]'>
      <div className='sm:pt-16 sm:pb-11 px-[10px] lg:px-0 py-[24px]'>
        {ChauffeurServiceDescription?.map((p, i) => (
          <div
            key={i}
            className='font-normal sm:font-medium text-[15px] leading-[14px] sm:leading-0 sm:text-sm text-[#B2B2B2] max-w-[1212px] mx-auto sm:mb-5'
          >
            <div className='text-[#B2B2B2] text-[16px] w-[100%]'>{p.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChauffeurServiceDescription;
