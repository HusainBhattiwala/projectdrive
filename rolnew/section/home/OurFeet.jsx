'use client';

import { useEffect, useState, useContext } from 'react';
import Container from 'rolnew/comp/Container';
import { fleetData } from 'static/fleetData';
import Title from './Title';
import Fleets from './Fleets';
import CarCategory from './CarCategory';
import { FleetContext } from 'context/FleetContext';

// const carCategoryList = [
//   {
//     id: 'carcat1',
//     category: 'Business Class',
//   },
//   {
//     id: 'carcat2',
//     category: 'First Class',
//   },
//   {
//     id: 'carcat3',
//     category: 'Luxury Class',
//   },
//   {
//     id: 'carcat4',
//     category: 'Electric',
//   },
//   {
//     id: 'carcat5',
//     category: 'SUV',
//   },
//   {
//     id: 'carcat6',
//     category: 'MVP',
//   },
//   {
//     id: 'carcat7',
//     category: 'Sprinter',
//   },
// ];

// const slideData = [
//   {
//     pic: '/rolnew/home/car.png',
//     caption: 'Audi A6',
//     id: 0,
//   },
//   {
//     pic: '/rolnew/home/car.png',
//     caption: 'Mercedes Benz E class',
//     id: 1,
//   },
//   {
//     pic: '/rolnew/home/car.png',
//     caption: 'BMW 5 series',
//     id: 2,
//   },
//   {
//     pic: '/rolnew/home/car.png',
//     caption: 'Mercedes Benz E class',
//     id: 3,
//   },
//   {
//     pic: '/rolnew/home/car.png',
//     caption: 'Audi A6',
//     id: 5,
//   },
//   {
//     pic: '/rolnew/home/car.png',
//     caption: 'BMW 5 series',
//     id: 6,
//   },
//   {
//     pic: '/rolnew/home/car.png',
//     caption: 'Mercedes Benz E class',
//     id: 7,
//   },
// ];

function OurFeet({ showBooking }) {
  const { carDetails, setCarDetails, carCatData, setCarCatData } =
    useContext(FleetContext);

  useEffect(() => {
    setCarCatData(fleetData[0].options);
    setCarDetails(fleetData[0].options[0]);
  }, []);

  const handleCategoryChange = (category) => {
    setCarCatData(category.options);
    setCarDetails(category.options[0]);
  };

  return (
    <>
      <Container className='bg-[#11202D] sm:pt-[60px] py-8 text-center'>
        <Title
          subTile='Our Fleet'
          mainTitle='Introducing Our Best Chauffeur Service with Luxury Cars Handpicked For Your Comfort'
        />
        <CarCategory
          categorys={fleetData}
          onCategoryChange={handleCategoryChange}
        />
      </Container>
      <div className='bg-[#11202D] sm:pt-[10px] text-center xl:!px-[70px] lg:px-[45px] md:px-[22px] sm:px-[10px] px-4'>
        <Fleets slideData={carCatData} showBooking={showBooking} />
      </div>
    </>
  );
}

export default OurFeet;
