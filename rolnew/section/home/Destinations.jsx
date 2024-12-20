import React from "react";
import Container from "rolnew/comp/Container";
import Pic from "rolnew/util/Pic";
import Title from "./Title";
import { Montserrat } from 'next/font/google';  // Updated import

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const cityPairs = [
  { from: "London", to: "Manchester" },
  { from: "London", to: "Nottingham" },
  { from: "London", to: "Aberdeen" },
  { from: "London", to: "Birmingham" },
  { from: "London", to: "Glasgow" },
  { from: "London", to: "Liverpool" },
  { from: "London", to: "Cambridge" },
  { from: "London", to: "Oxford" },
];

function Destinations({ destinationData }) {
  const data = destinationData?.data || cityPairs;
  const isFromTo = destinationData?.isFromTo || false;

  return (
    <Container className={`bg-[#223544] py-20 text-center $`}>
      <Title
        subTitle={destinationData?.subTitle || "Popular Trips"}
        mainTitle={
          destinationData?.title || "Explore Our Most Sought-After Destinations"
        }
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-11 justify-center items-center gap-5">
        {data.map((destination, index) => (
          <div key={index} className="col-span-1">
            <div className="px-6 py-4 bg-white bg-opacity-10 flex items-center justify-start gap-x-4 rounded-xl">
              <div className="bg-white bg-opacity-10 p-2.5 rounded-lg">
                <div className="w-5 h-4">
                  <Pic
                    src={
                      destinationData?.img
                        ? destinationData?.img
                        : "/rolnew/global/icons/heart.svg"
                    }
                    alt="heart"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-0.5 overflow-hidden">
                <p className="text-[#B2B2B2] font-normal w-full text-base text-left">
                  {destination.from}
                </p>

                {/* truncate */}
                {/* <p className='text-[#B2B2B2] font-normal text-base truncate'>
                  {destination.from}
                </p> */}
                {destination.to && (
                  <>
                    <div className="w-4 h-4">
                      <Pic
                        src="/rolnew/global/icons/small_arrow.svg"
                        alt="small_arrow"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-[#B2B2B2] font-normal text-base ml-2">
                      {destination.to}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Destinations;

// import React from 'react';
// import Container from 'rolnew/comp/Container';
// import Pic from 'rolnew/util/Pic';
// import Title from './Title';

// const cityPairs = [
//   { from: 'London', to: 'Manchester' },
//   { from: 'London', to: 'Nottingham' },
//   { from: 'London', to: 'Aberdeen' },
//   { from: 'London', to: 'Birmingham' },
//   { from: 'London', to: 'Glasgow' },
//   { from: 'London', to: 'Liverpool' },
//   { from: 'London', to: 'Cambridge' },
//   { from: 'London', to: 'Oxford' },
// ];

// function Destinations({ destinationData }) {
//   const data = destinationData?.data || cityPairs;
//   const isFromTo = destinationData?.isFromTo || false;

//   return (
//     <Container className='bg-[#223544] py-20 text-center'>
//       <Title
//         subTitle={destinationData?.subTitle || 'Popular trips'}
//         mainTitle={
//           destinationData?.title || 'Explore Our Most Sought-After Destinations'
//         }
//       />

//       <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 pt-11 justify-center items-center gap-5'>
//         {data.map((destination, index) => (
//           <div key={index} className='col-span-1'>
//             <div className='px-6 py-4 bg-white bg-opacity-10 flex items-center gap-x-3 rounded-xl'>
//               <div className='bg-white bg-opacity-10 p-2.5 rounded-lg'>
//                 <div className='w-5 h-4'>
//                   <Pic
//                     src='/rolnew/global/icons/heart.svg'
//                     alt='heart'
//                     objectFit='cover'
//                   />
//                 </div>
//               </div>
//               <div className='flex flex-col gap-x-1 items-start'>
//                 <p className='text-[#B2B2B2] font-normal text-base text-left'>
//                   {destination.from}
//                 </p>
//                 {destination.to && (
//                   <div className='flex items-center gap-x-1'>
//                     <div className='w-4 h-4 flex-shrink-0'>
//                       <Pic
//                         src='/rolnew/global/icons/small_arrow.svg'
//                         alt='small_arrow'
//                         objectFit='cover'
//                       />
//                     </div>
//                     <p className='text-[#B2B2B2] font-normal text-base'>
//                       {destination.to}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// }

// export default Destinations;
