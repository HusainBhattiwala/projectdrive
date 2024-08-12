import React from 'react';
import Stepper from 'app/(auth)/trip-details/Stepper';
import P from 'components/typography/P';

function AdditionalInformation({
  adultNo, setAdultNo, infantNo, setInfantNo, childNo, setChildNo, bagNo, setBagNo, adultRef, showAdultError, setShowAdultError,
}) {
  return (
    <div className="grid sm:grid-cols-7 grid-cols-1 py-2 sm:px-4 px-2 items-center !text-gray-700">
      <div className="col-span-2">
        <P className="text-[#797979] !text-normal !text-sm pl-2 capitalize">
          Additional Information
        </P>
      </div>
      <div className="col-span-5">
        <div className="flex flex-col gap-2 mb-2 sm:flex-row sm:gap-4 relative" ref={adultRef}>
          {
            showAdultError && adultNo === 0 && (
            <P className="animate-bounce absolute -top-5 left-12 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
              Required
            </P>
            )
          }
          <Stepper
            className="w-1/2"
            label="Adult"
            count={adultNo}
            onChange={(e) => {
              setAdultNo(e);
              setShowAdultError(false);
            }}
            isRequired
          />
          <Stepper
            className="w-1/2"
            label="Bag"
            count={bagNo}
            onChange={setBagNo}
          />
        </div>
        <div className="flex flex-col gap-2 sm:mb-2 sm:flex-row sm:gap-4">
          <Stepper
            className="w-1/2"
            label="Child"
            count={childNo}
            onChange={setChildNo}
          />
          <Stepper
            className="w-1/2"
            label="Infant"
            count={infantNo}
            onChange={setInfantNo}
          />
        </div>
      </div>
    </div>
  );
}

export default AdditionalInformation;
