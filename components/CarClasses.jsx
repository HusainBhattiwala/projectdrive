'use client';

import { useState } from 'react';
import P from './typography/P';
import H2 from './typography/H2';
import OneCarCard from './shared/OneCarCard';

const business = [
  {
    id: 1,
    vname: 'Mercedes Benz E-Class',
    vimg: '/images/cars/mercedes-benz-e-class.png',
    passengers: '3 People',
  },
  {
    id: 2,
    vname: 'BMW 5 Series',
    vimg: '/images/cars/bmw-5-series.png',
    passengers: '3 People',
  },
  {
    id: 3,
    vname: 'Audi A6',
    vimg: '/images/cars/audi-a6-large.png',
    passengers: '3 People',
  },
];

const first = [
  {
    id: 1,
    vname: 'Mercedes Benz S-Class',
    vimg: '/images/cars/mercedes-benz-s-class.png',
    passengers: '3 People',
  },
  {
    id: 2,
    vname: 'BMW 7 series',
    vimg: '/images/cars/bmw_7_series.png',
    passengers: '3 People',
  },
  {
    id: 3,
    vname: 'Audi A8',
    vimg: '/images/cars/Audi8.png',
    passengers: '3 People',
  },
];

const luxury = [
  {
    id: 1,
    vname: 'Rolls Royce Phantom VIII',
    vimg: '/images/cars/luxury/Phantom.png',
    passengers: '3 People',
  },

  {
    id: 2,
    vname: 'Rolls Royce Ghost',
    vimg: '/images/cars/luxury/Ghost.png',
    passengers: '3 People',
  },
  {
    id: 3,
    vname: 'Mercedes Maybach',
    vimg: '/images/cars/Mercedes_Maybach.png',
    passengers: '3 People',
  },
  {
    id: 4,
    vname: 'Bentley Mulsanne',
    vimg: '/images/cars/BentleyMulsanne.png',
    passengers: '3 People',
  },
];
const electric = [
  {
    id: 1,
    vname: 'Tesla Model X',
    vimg: '/images/cars/electric/Model-X.png',
    passengers: '3 People',
  },
  {
    id: 2,
    vname: 'Tesla Model S',
    vimg: '/images/cars/Tesla-Model-S.png',
    passengers: '3 People',
  },
  {
    id: 3,
    vname: 'Tesla Model Y',
    vimg: '/images/cars/electric/Model-Y.png',
    passengers: '3 People',
  },
];

const suv = [
  {
    id: 1,
    vname: 'Range Rover Defender',
    vimg: '/images/cars/suv/Defender.png',
    passengers: '3 People',
  },
  {
    id: 2,
    vname: 'Land Rover Discovery',
    vimg: '/images/cars/suv/Discovery.png',
    passengers: '3 People',
  },
  {
    id: 3,
    vname: 'Range Rover Sport',
    vimg: '/images/cars/suv/Sport.png',
    passengers: '3 People',
  },
  {
    id: 4,
    vname: 'Land Rover Range Rover',
    vimg: '/images/cars/suv/Discovery-1.png',
    passengers: '3 People',
  },
];

const mpv = [
  {
    id: 1,
    vname: 'Mercedes V-Class',
    vimg: '/images/cars/mercedes_v_class.png',
    passengers: '6 People',
  },
  {
    id: 2,
    vname: 'Mercedes Vito',
    vimg: '/images/cars/mpv/mercedes_vito.png',
    passengers: '8 People',
  },
];

const sprinter = [
  {
    id: 1,
    vname: 'Mercedes Sprinter',
    vimg: '/images/cars/mercedes-sprinter.png',
    passengers: '12 People',
  },
  {
    id: 2,
    vname: 'Mercedes Sprinter',
    vimg: '/images/cars/MercedesSprinter16.png',
    passengers: '16 People',
  },
  {
    id: 3,
    vname: 'Mercedes Sprinter',
    vimg: '/images/cars/mercedes-sprinter-19.png',
    passengers: '19 People',
  },
];

export default function CarClasses({ head, para }) {
  const [carClass, setCarClass] = useState('business');
  return (
    <>
      <section>
        <div className="container p-6 mx-auto">
          <H2 className="text-black text-center font-bold lg:!text-[32px] md:!text-[28px] sm:!text-[24px] !text-[20px] mt-9 mb-2">{head || 'Absolute Comfort And Safety For Your Trip'}</H2>
          <P className="text-black text-center !text-base">{para || 'Licensed vehicles, professional drivers'}</P>
        </div>
      </section>
      <section>
        <div className="mx-auto text-black font-semibold flex justify-start pt-2 rounded-none w-fit max-w-[85%] overflow-auto gap-10 cars-cat relative mt-12 z-[1] ">
          <div className="absolute bottom-0 left-0 sm:w-full w-[190%] h-[2px] bg-gray-200 z-1" />
          <span className={` ${carClass === 'business' && 'text-primary border-b-2 border-b-primary'} hover:text-primary focus:text-primary cursor-pointer z-10 ml-auto`} onClick={() => { setCarClass('business'); }}>Business</span>
          <span
            className={` ${
              carClass === 'first' && 'text-primary border-b-2 border-b-primary'
            } hover:text-primary focus:text-primary cursor-pointer z-10`}
            onClick={() => {
              setCarClass('first');
            }}
          >
            First
          </span>
          <span
            className={` ${
              carClass === 'luxury' && 'text-primary border-b-2 border-b-primary'
            } hover:text-primary focus:text-primary cursor-pointer z-10`}
            onClick={() => {
              setCarClass('luxury');
            }}
          >
            Luxury
          </span>
          <span
            className={` ${
              carClass === 'electric'
            && 'text-primary border-b-2 border-b-primary'
            } hover:text-primary focus:text-primary cursor-pointer z-10`}
            onClick={() => {
              setCarClass('electric');
            }}
          >
            Electric
          </span>
          <span
            className={` ${
              carClass === 'suv' && 'text-primary border-b-2 border-b-primary'
            } hover:text-primary focus:text-primary cursor-pointer z-10`}
            onClick={() => {
              setCarClass('suv');
            }}
          >
            SUV
          </span>
          <span
            className={` ${
              carClass === 'mpv' && 'text-primary border-b-2 border-b-primary'
            } hover:text-primary focus:text-primary cursor-pointer z-10`}
            onClick={() => {
              setCarClass('mpv');
            }}
          >
            MPV
          </span>
          <span
            className={` ${
              carClass === 'sprinter'
            && 'text-primary border-b-2 border-b-primary'
            } hover:text-primary focus:text-primary cursor-pointer z-10 mr-auto`}
            onClick={() => {
              setCarClass('sprinter');
            }}
          >
            Sprinter
          </span>
        </div>

        <div className="container mx-auto p-6 mt-4">
          {carClass === 'business' && (
          <div className="px-10 sm:px-1 flex justify-center flex-wrap gap-6">
            {business.map((cars) => (
              <OneCarCard
                key={cars.id}
                vname={cars.vname}
                vimg={cars.vimg}
                passengers={cars.passengers}
              />
            ))}
          </div>
          )}

          {carClass === 'first' && (
          <div className="px-10 sm:px-1 flex justify-center flex-wrap gap-6">
            {first.map((cars) => (
              <OneCarCard
                key={cars.id}
                vname={cars.vname}
                vimg={cars.vimg}
                passengers={cars.passengers}
              />
            ))}
          </div>
          )}

          {carClass === 'luxury' && (
          <div className="px-10 sm:px-1 flex justify-center flex-wrap gap-6">
            {luxury.map((cars) => (
              <OneCarCard
                key={cars.id}
                vname={cars.vname}
                vimg={cars.vimg}
                passengers={cars.passengers}
              />
            ))}
          </div>
          )}

          {carClass === 'electric' && (
          <div className="px-10 sm:px-1 flex justify-center flex-wrap gap-6">
            {electric.map((cars) => (
              <OneCarCard
                key={cars.id}
                vname={cars.vname}
                vimg={cars.vimg}
                passengers={cars.passengers}
              />
            ))}
          </div>
          )}

          {carClass === 'suv' && (
          <div className="px-10 sm:px-1 flex justify-center flex-wrap gap-6">
            {suv.map((cars) => (
              <OneCarCard
                key={cars.id}
                vname={cars.vname}
                vimg={cars.vimg}
                passengers={cars.passengers}
              />
            ))}
          </div>
          )}

          {carClass === 'mpv' && (
          <div className="px-10 sm:px-1 flex justify-center flex-wrap gap-6">
            {mpv.map((cars) => (
              <OneCarCard
                key={cars.id}
                vname={cars.vname}
                vimg={cars.vimg}
                passengers={cars.passengers}
              />
            ))}
          </div>
          )}

          {carClass === 'sprinter' && (
          <div className="px-10 sm:px-1 flex justify-center flex-wrap gap-6">
            {sprinter.map((cars) => (
              <OneCarCard
                key={cars.id}
                vname={cars.vname}
                vimg={cars.vimg}
                passengers={cars.passengers}
              />
            ))}
          </div>
          )}
        </div>
      </section>
    </>
  );
}
