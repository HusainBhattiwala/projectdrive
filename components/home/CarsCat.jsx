/* eslint-disable max-len */

'use client';

import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselV3 from '../ui/CarouselV3';
import SingleCarSlide from './SingleCarSlide';
import { Pic } from '../ui/Pic';
import P from '../typography/P';
import H2 from '../typography/H2';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 460, itemsToShow: 1 },
  {
    width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false,
  },
  { width: 850, itemsToShow: 5 },
  { width: 1150, itemsToShow: 6, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 7 },
  { width: 1750, itemsToShow: 9 },
];

export default function CarsCat() {
  const business = [
    {
      id: 1,
      name: 'Mercedes Benz E-Class',
      img: '/images/cars/business/mercedes-e.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
    {
      id: 2,
      name: 'BMW 5 Series',
      img: '/images/cars/business/bmw-5-series.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
    {
      id: 3,
      name: 'Audi A6',
      img: '/images/cars/business/audi-a6.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
  ];

  const first = [
    {
      id: 1,
      name: 'Mercedes Benz S-Class',
      img: '/images/cars/first/mercedes-benz-s-class.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
    {
      id: 2,
      name: 'BMW 7 series',
      img: '/images/cars/first/bmw-7-series.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
    {
      id: 3,
      name: 'Audi A8',
      img: '/images/cars/first/audi-a8.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
  ];

  const luxury = [
    {
      id: 1,
      name: 'Rolls Royce Phantom VIII',
      img: '/images/cars/luxury/rolls-royce-phantom-VIII.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },

    {
      id: 2,
      name: 'Rolls Royce Ghost',
      img: '/images/cars/luxury/rolls-royce-ghost.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
    {
      id: 3,
      name: 'Mercedes Maybach',
      img: '/images/cars/luxury/mercedes-maybach.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
    {
      id: 4,
      name: 'Bentley Mulsanne',
      img: '/images/cars/luxury/bentley-mulsanne.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
  ];
  const electric = [
    {
      id: 1,
      name: 'Tesla Model X',
      img: '/images/cars/electric/tesla-x.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
    {
      id: 2,
      name: 'Tesla Model S',
      img: '/images/cars/electric/tesla-s.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
    {
      id: 3,
      name: 'Tesla Model Y',
      img: '/images/cars/electric/tesla-y.png',
      passengers: '3 Passengers',
      bags: '1 Large 1 Medium',
    },
  ];

  const suv = [
    {
      id: 1,
      name: 'Range Rover Defender',
      img: '/images/cars/suv/range-rover-defender.png',
      passengers: '3 Passengers',
      bags: '2 Large 2 Medium',
    },
    {
      id: 2,
      name: 'Land Rover Discovery',
      img: '/images/cars/suv/land-rover-discovery.png',
      passengers: '3 Passengers',
      bags: '2 Large 2 Medium',
    },
    {
      id: 3,
      name: 'Range Rover Sport',
      img: '/images/cars/suv/range-rover-sport.png',
      passengers: '3 Passengers',
      bags: '2 Large 2 Medium',
    },
    {
      id: 4,
      name: 'Land Rover Range Rover',
      img: '/images/cars/suv/land-rover-range-rover.png',
      passengers: '3 Passengers',
      bags: '2 Large 2 Medium',
    },
  ];

  const mpv = [
    {
      id: 1,
      name: 'Mercedes V-Class',
      img: '/images/cars/mpv/mercedes-v-class.png',
      passengers: '7 Passengers',
      bags: '7 Large 7 Medium',
    },
    {
      id: 2,
      name: 'Mercedes Vito',
      img: '/images/cars/mpv/mercedes-vito.png',
      passengers: '8 Passengers',
      bags: '8 Large 8 Medium',
    },
  ];

  const sprinter = [
    {
      id: 1,
      name: 'Mercedes Sprinter',
      img: '/images/cars/sprinter/mercedes-sprinter-12.png',
      passengers: '12 Passengers',
      bags: '12 Large 12 Medium',
    },
    {
      id: 2,
      name: 'Mercedes Sprinter',
      img: '/images/cars/sprinter/mercedes-sprinter-16.png',
      passengers: '16 Passengers',
      bags: '16 Large 16 Medium',
    },
    {
      id: 3,
      name: 'Mercedes Sprinter',
      img: '/images/cars/sprinter/mercedes-sprinter-19.png',
      passengers: '19 Passengers',
      bags: '19 Large 19 Medium',
    },
  ];

  const brands = [
    {
      id: 1,
      img: '/images/cars/logos/audi.png',
    },
    {
      id: 2,
      img: '/images/cars/logos/bentley-mulsanne.png',
    },
    {
      id: 3,
      img: '/images/cars/logos/bmw.png',
    },
    {
      id: 4,
      img: '/images/cars/logos/mercedes.png',
    },
    {
      id: 5,
      img: '/images/cars/logos/landrover.png',
    },
    {
      id: 6,
      img: '/images/cars/logos/rolls-royce.png',
    },
    {
      id: 7,
      img: '/images/cars/logos/tesla.png',
    },
  ];
  const [carClass, setCarClass] = useState('business');

  return (
    <>
      <section className="bg-[#232323]">
        <div className="2xl:container px-4 md:px-6 lg:px-[60px] mx-auto py-10">
          <div data-aos="slide-right" data-aos-duration="1000" data-aos-delay="0">
            <H2 className="uppercase !text-2xl !leading-[24px] mb-[19px] font-[700] text-white">Absolute Comfort And Safety For Your Trip</H2>
          </div>
          <div data-aos="slide-right" data-aos-duration="1000" data-aos-delay="400">
            <P className="!text-[16px] !leading-[24px] text-white font-robo">Licensed vehicles, professional drivers</P>
          </div>

          <div className="h-12" />
          <div className="flex justify-between sm:flex-row flex-col">
            <div
              className="flex sm:basis-[26.16%] basis-[100%] flex-col flex-wrap text-white font-robo font-[600] text-[18px]"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <span
                type="button"
                className={`${carClass === 'business' ? 'bg-primary !text-[24px] rounded-md py-3' : 'bg-transparent py-5'} ${carClass !== 'first' && carClass !== 'business' && 'border-b !w-[95%]'} px-6 w-full cursor-pointer `}
                onClick={() => { setCarClass('business'); }}
              >
                Business
              </span>
              <span
                type="button"
                className={`${carClass === 'first' ? 'bg-primary rounded-md !text-[24px] py-3' : 'bg-transparent py-5'} ${carClass !== 'luxury' && carClass !== 'first' && 'border-b !w-[95%]'} px-6 w-full cursor-pointer `}
                onClick={() => { setCarClass('first'); }}
              >
                First
              </span>
              <span
                type="button"
                className={`${carClass === 'luxury' ? 'bg-primary !text-[24px] rounded-md py-3' : 'bg-transparent py-5'} ${carClass !== 'electric' && carClass !== 'luxury' && 'border-b !w-[95%]'} px-6  w-full cursor-pointer `}
                onClick={() => { setCarClass('luxury'); }}
              >
                Luxury
              </span>
              <span
                type="button"
                className={`${carClass === 'electric' ? 'bg-primary  rounded-md !text-[24px] py-3' : 'bg-transparent py-5'} ${carClass !== 'suv' && carClass !== 'electric' && 'border-b !w-[95%]'} px-6  w-full cursor-pointer`}
                onClick={() => { setCarClass('electric'); }}
              >
                Electric
              </span>
              <span
                type="button"
                className={`${carClass === 'suv' ? 'bg-primary  rounded-md !text-[24px] py-3' : 'bg-transparent py-5'}  ${carClass !== 'mpv' && carClass !== 'suv' && 'border-b !w-[95%]'} px-6  w-full cursor-pointer`}
                onClick={() => { setCarClass('suv'); }}
              >
                SUV
              </span>
              <span
                type="button"
                className={`${carClass === 'mpv' ? 'bg-primary  rounded-md !text-[24px] py-3' : 'bg-transparent py-5'} ${carClass !== 'sprinter' && carClass !== 'mpv' && 'border-b !w-[95%]'} px-6  w-full cursor-pointer`}
                onClick={() => { setCarClass('mpv'); }}
              >
                MPV
              </span>
              <span
                type="button"
                className={`${carClass === 'sprinter' ? 'bg-primary  rounded-md !text-[24px] py-3' : 'bg-transparent py-5'} px-6  w-full cursor-pointer`}
                onClick={() => { setCarClass('sprinter'); }}
              >
                Sprinter
              </span>
            </div>
            <div
              className="sm:basis-[70%] basis-[100%] justify-end items-end"
              data-aos="slide-top"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="my-auto">
                {carClass === 'business' && (
                <CarouselV3>
                  {business.map((cars) => (
                    <SingleCarSlide
                      key={cars.id}
                      name={cars.name}
                      img={cars.img}
                      passengers={cars.passengers}
                      bags={cars.bags}
                    />
                  ))}
                </CarouselV3>
                )}
                {carClass === 'first' && (
                <CarouselV3>
                  {first.map((cars) => (
                    <SingleCarSlide
                      key={cars.id}
                      name={cars.name}
                      img={cars.img}
                      passengers={cars.passengers}
                      bags={cars.bags}
                    />
                  ))}
                </CarouselV3>
                )}
                {carClass === 'luxury' && (
                <CarouselV3>
                  {luxury.map((cars) => (
                    <SingleCarSlide
                      key={cars.id}
                      name={cars.name}
                      img={cars.img}
                      passengers={cars.passengers}
                      bags={cars.bags}
                    />
                  ))}
                </CarouselV3>
                )}
                {carClass === 'suv' && (
                <CarouselV3>
                  {suv.map((cars) => (
                    <SingleCarSlide
                      key={cars.id}
                      name={cars.name}
                      img={cars.img}
                      passengers={cars.passengers}
                      bags={cars.bags}
                    />
                  ))}
                </CarouselV3>
                )}
                {carClass === 'mpv' && (
                <CarouselV3>
                  {mpv.map((cars) => (
                    <SingleCarSlide
                      key={cars.id}
                      name={cars.name}
                      img={cars.img}
                      passengers={cars.passengers}
                      bags={cars.bags}
                    />
                  ))}
                </CarouselV3>
                )}
                {carClass === 'sprinter' && (
                <CarouselV3>
                  {sprinter.map((cars) => (
                    <SingleCarSlide
                      key={cars.id}
                      name={cars.name}
                      img={cars.img}
                      passengers={cars.passengers}
                      bags={cars.bags}
                    />
                  ))}
                </CarouselV3>
                )}
                {carClass === 'electric' && (
                <CarouselV3>
                  {electric.map((cars) => (
                    <SingleCarSlide
                      key={cars.id}
                      name={cars.name}
                      img={cars.img}
                      passengers={cars.passengers}
                      bags={cars.bags}
                    />
                  ))}
                </CarouselV3>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="2xl:container px-4 md:px-6 lg:px-[20px] mx-auto py-2">
          <div className="w-full">
            <Carousel
              showArrows={false}
              pagination={false}
              breakPoints={breakPoints}
              enableAutoPlay
            >
              {brands.map((brand) => (
                <div key={brand.id}>
                  <Pic
                    src={brand.img}
                    className="!object-contain p-2 sm:max-h-28"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
