// import Pic from 'rolnew/util/Pic';

// function TrustedPartners({
//   img = '/rolnew/global/trust.jpg',
//   showTitle = true,
//   trustedPartnersData
// }) {
//   return (
//     <div className='bg-[#11202D] sm:px-9 px-4'>
//       <div className='bg-[#081017] xl:px-[97px] lg:px-10 md:px-6 sm:px-4 px-2 sm:py-[60px] py-4 sm:border-b sm:border-t border-[#828282] border-opacity-30'>
//         <div className='flex sm:gap-x-8 gap-x-4 2xl:container mx-auto'>
//           <div className='w-full max-w-[400px] hidden md:block'>
//             <div className='w-full min-h-[496px] h-full relative'>
//               <Pic
//                 alt='trust'
//                 className='rounded-xl'
//                 src={img}
//                 objectFit='cover'
//               />
//             </div>
//           </div>
//           <div className='w-full'>
//             {showTitle && (
//               <div className='sm:mb-16 mb-4'>
//                 <h4 className='sm:text-lg text-base font-normal leading-7 text-[#B2B2B2] font-robo'>
//                   Who We Are
//                 </h4>
//                 <div className='flex flex-col'>
//                   <h2 className='sm:text-3xl text-2xl font-medium sm:leading-9 leading-tight text-[#B2B2B2]'>
//                     RolDrive - Your trusted travel partner
//                   </h2>
//                   <p className='text-[#B2B2B2] leading-5 font-medium text-xs'>
//                     Embark on a journey of luxury and convenience with our
//                     global chauffeured car hire service.
//                   </p>
//                 </div>
//               </div>
//             )}
//             <div className='grid grid-cols-2 sm:gap-y-6 gap-y-4 lg:gap-x-12 md:gap-x-6 gap-x-4'>
//              {trustedPartnersData ? (
//               {trustedPartnersData?.map((item, index) => (
//                 <div className='col-span-1'>
//                 <div className='w-6 h-6 relative'>
//                   <Pic
//                     alt='trust'
//                     className='rounded-xl'
//                     src={item?.icon}
//                     objectFit='cover'
//                   />
//                 </div>
//                 <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
//                   <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
//                    {item?.title}
//                   </h4>
//                   <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
//                    {item?.desc}
//                   </p>
//                 </div>
//               </div>
//               ))}
//              ) : (
//              <div className='col-span-1'>
//                 <div className='w-6 h-6 relative'>
//                   <Pic
//                     alt='trust'
//                     className='rounded-xl'
//                     src='/rolnew/global/icons/shield-user-line.svg'
//                     objectFit='cover'
//                   />
//                 </div>
//                 <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
//                   <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
//                     {showTitle
//                       ? 'Safe & Discreet'
//                       : 'Exceptional Chauffeur Service'}
//                   </h4>
//                   <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
//                     {showTitle
//                       ? 'RolDrive&apos;s chauffeurs are renowned for their safety and discretion, rigorously trained to maintain the highest standards of secure and private travel, ensuring clients&apos; journeys are not only comfortable but also confidential.'
//                       : "RolDrive offers top-notch chauffeur services in London, ensuring comfort and convenience for executive airport transfers. Whether it's Heathrow or any other major airport, our experienced drivers guarantee a sm"}
//                   </p>
//                 </div>
//               </div>

//               <div className='col-span-1'>
//                 <div className='w-6 h-6 relative'>
//                   <Pic
//                     alt='trust'
//                     className='rounded-xl'
//                     src='/rolnew/global/icons/steering-wheel.svg'
//                     objectFit='cover'
//                   />
//                 </div>
//                 <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
//                   <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
//                     Comprehensive Airport Coverage
//                   </h4>
//                   <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
//                     Our services extend to all major London airports including
//                     Heathrow, Gatwick, Stansted, London City, Luton, and London
//                     Southend. With RolDrive, you can expect reliable ground
//                     transfer services coupled with a personalized meet and greet
//                     upon arrival.
//                   </p>
//                 </div>
//               </div>

//               <div className='col-span-1'>
//                 <div className='w-6 h-6 relative'>
//                   <Pic
//                     alt='trust'
//                     className='rounded-xl'
//                     src='/rolnew/global/icons/service-line.svg'
//                     objectFit='cover'
//                   />
//                 </div>
//                 <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
//                   <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
//                     Flexible and Reliable
//                   </h4>
//                   <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
//                     We understand the uncertainties of travel, which is why
//                     RolDrive provides an additional hour of free waiting time
//                     for delayed flights. Our online booking system allows us to
//                     monitor your flight status, ensuring your chauffeur is
//                     promptly available upon landing.
//                   </p>
//                 </div>
//               </div>

//               <div className='col-span-1'>
//                 <div className='w-6 h-6 relative'>
//                   <Pic
//                     alt='trust'
//                     className='rounded-xl'
//                     src='/rolnew/global/icons/car-line.svg'
//                     objectFit='cover'
//                   />
//                 </div>
//                 <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
//                   <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
//                     Professionalism and Trust
//                   </h4>
//                   <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
//                     With RolDrive, you're entrusting your airport transfer
//                     service to a team of professionally trained chauffeurs
//                     dedicated to delivering unparalleled service. Whether it's
//                     airport transfers, corporate events, or sightseeing tours,
//                     rely on RolDrive for a seamless travel experience in London.
//                   </p>
//                 </div>
//               </div>)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TrustedPartners;

import Pic from 'rolnew/util/Pic';

function TrustedPartners({
  img = '/rolnew/global/trust.jpg',
  showTitle = true,
  trustedPartnersData,
}) {
  return (
    <div className='bg-[#11202D] sm:px-9 px-4'>
      <div className='bg-[#081017] xl:px-[97px] lg:px-10 md:px-6 sm:px-4 px-2 sm:py-[60px] py-4 sm:border-b sm:border-t border-[#828282] border-opacity-30'>
        <div className='flex sm:gap-x-8 gap-x-4 2xl:container mx-auto'>
          <div className='w-full max-w-[400px] hidden md:block'>
            <div className='w-full min-h-[496px] h-full relative'>
              <Pic
                alt='trust'
                className='rounded-xl'
                src={img}
                objectFit='cover'
              />
            </div>
          </div>
          <div className='w-full'>
            {showTitle && (
              <div className='sm:mb-16 mb-4'>
                <h4 className='sm:text-lg text-base font-normal leading-7 text-[#B2B2B2] font-robo'>
                  Who We Are
                </h4>
                <div className='flex flex-col'>
                  <h2 className='sm:text-3xl text-2xl font-medium sm:leading-9 leading-tight text-[#B2B2B2]'>
                    RolDrive - Your trusted travel partner
                  </h2>
                  <p className='text-[#B2B2B2] leading-5 font-medium text-xs'>
                    Embark on a journey of luxury and convenience with our
                    global chauffeured car hire service.
                  </p>
                </div>
              </div>
            )}
            <div className='grid grid-cols-2 sm:gap-y-6 gap-y-4 lg:gap-x-12 md:gap-x-6 gap-x-4'>
              {trustedPartnersData ? (
                trustedPartnersData.map((item, index) => (
                  <div className='col-span-1' key={index}>
                    <div className='w-6 h-6 relative'>
                      <Pic
                        alt='trust'
                        className='rounded-xl'
                        src={item?.icon}
                        objectFit='cover'
                      />
                    </div>
                    <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
                      <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
                        {item?.title}
                      </h4>
                      <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
                        {item?.desc}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className='col-span-1'>
                    <div className='w-6 h-6 relative'>
                      <Pic
                        alt='trust'
                        className='rounded-xl'
                        src='/rolnew/global/icons/shield-user-line.svg'
                        objectFit='cover'
                      />
                    </div>
                    <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
                      <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
                        {showTitle
                          ? 'Safe & Discreet'
                          : 'Exceptional Chauffeur Service'}
                      </h4>
                      <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
                        {showTitle
                          ? "RolDrive's chauffeurs are renowned for their safety and discretion, rigorously trained to maintain the highest standards of secure and private travel, ensuring clients' journeys are not only comfortable but also confidential."
                          : "RolDrive offers top-notch chauffeur services in London, ensuring comfort and convenience for executive airport transfers. Whether it's Heathrow or any other major airport, our experienced drivers guarantee a smooth journey."}
                      </p>
                    </div>
                  </div>

                  <div className='col-span-1'>
                    <div className='w-6 h-6 relative'>
                      <Pic
                        alt='trust'
                        className='rounded-xl'
                        src='/rolnew/global/icons/steering-wheel.svg'
                        objectFit='cover'
                      />
                    </div>
                    <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
                      <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
                        Comprehensive Airport Coverage
                      </h4>
                      <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
                        Our services extend to all major London airports
                        including Heathrow, Gatwick, Stansted, London City,
                        Luton, and London Southend. With RolDrive, you can
                        expect reliable ground transfer services coupled with a
                        personalized meet and greet upon arrival.
                      </p>
                    </div>
                  </div>

                  <div className='col-span-1'>
                    <div className='w-6 h-6 relative'>
                      <Pic
                        alt='trust'
                        className='rounded-xl'
                        src='/rolnew/global/icons/service-line.svg'
                        objectFit='cover'
                      />
                    </div>
                    <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
                      <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
                        Flexible and Reliable
                      </h4>
                      <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
                        We understand the uncertainties of travel, which is why
                        RolDrive provides an additional hour of free waiting
                        time for delayed flights. Our online booking system
                        allows us to monitor your flight status, ensuring your
                        chauffeur is promptly available upon landing.
                      </p>
                    </div>
                  </div>

                  <div className='col-span-1'>
                    <div className='w-6 h-6 relative'>
                      <Pic
                        alt='trust'
                        className='rounded-xl'
                        src='/rolnew/global/icons/car-line.svg'
                        objectFit='cover'
                      />
                    </div>
                    <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
                      <h4 className='sm:text-xl text-sm font-medium text-[#B2B2B2]'>
                        Professionalism and Trust
                      </h4>
                      <p className='sm:text-sm sm:leading-5 text-[10px] leading-[14px] text-[#B2B2B2]'>
                        With RolDrive, you're entrusting your airport transfer
                        service to a team of professionally trained chauffeurs
                        dedicated to delivering unparalleled service. Whether
                        it's airport transfers, corporate events, or sightseeing
                        tours, rely on RolDrive for a seamless travel experience
                        in London.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedPartners;
