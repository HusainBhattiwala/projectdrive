function FleetBanner() {
  return (
    <div className='h-[750px] sm:h-[700px] bg-[#223544] relative sm:flex sm:justify-center p-4'>
      <div className='absolute top-28 flex flex-col sm:items-center gap-16 sm:gap-32'>
        <h1 className='font-bold leading-3 text-3xl text-slate-200'>
          Our Luxurious Fleet
        </h1>
        <div className='flex flex-col sm:flex-row mx-auto max-w-[1056px] gap-6 h-[270px]'>
          <div className='flex flex-row sm:flex-col sm:p-[18px]'>
            {/* add svg */}
            <div className='flex flex-col sm:text-center gap-5'>
              <p className='font-medium text-xl sm:text-center'>
                Elevate Your Business Image
              </p>
              <p className='font-normal text-sm text-[#B2B2B2]'>
                For success in business, a commanding presence is vital. Making
                an impact starts with your appearance. Arrive at meetings
                impeccably groomed to leave a lasting impression.
              </p>
            </div>
          </div>
          <div className='flex flex-col sm:p-[18px]'>
            {/* add svg */}
            <div className='flex flex-col sm:text-center gap-5 '>
              <p className='font-medium text-xl sm:text-center'>
                Comfort, Luxury, and Safety in Transportation
              </p>
              <p className='font-normal text-sm text-[#B2B2B2]'>
                The convenience of having the driver navigate traffic allows for
                a stress-free journey, allowing you to focus on the meeting at
                hand. Hiring a business-class chauffeur service can also be
                cost-effective for companies needing regular transportation for
                employees or clients.
              </p>
            </div>
          </div>
          <div className='flex flex-col sm:p-[18px]'>
            {/* add svg */}
            <div className='flex flex-col sm:text-center gap-5 '>
              <p className='font-medium text-xl sm:text-center'>
                Efficiency and Cost-Effectiveness
              </p>
              <p className='font-normal text-sm text-[#B2B2B2]'>
                The convenience of having the driver navigate traffic allows for
                a stress-free journey, allowing you to focus on the meeting at
                hand. Hiring a business-class chauffeur service can also be
                cost-effective for companies needing regular transportation for
                employees or clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FleetBanner;
