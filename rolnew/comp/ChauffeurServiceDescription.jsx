import React from "react";

function ChauffeurServiceDescription({ ChauffeurServiceDescription }) {
  console.log("services:", ChauffeurServiceDescription);
  return (
    <div className='bg-[#223544]'>
      <div className='pt-16 pb-11 px-6 lg:px-0'>
        {ChauffeurServiceDescription?.map((p, i) => (
          <div
            key={i}
            className='font-bold text-sm text-[#B2B2B2] max-w-[1112px] mx-auto mb-5'
          >
            <div className='text-[#B2B2B2]'>{p.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChauffeurServiceDescription;
