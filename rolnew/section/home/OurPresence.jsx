import React from 'react';
import Container from 'rolnew/comp/Container';
import Pic from 'rolnew/util/Pic';
import Title from './Title';
import CountryList from './CountryList';

const countryList = [
  {
    id: 'process1',
    image: '/rolnew/global/country/london.jpg',
    countryCode: 'GB',
    cityName: 'London',
  },
  {
    id: 'process2',
    image: '/rolnew/global/country/dubai.jpg',
    countryCode: 'AE',
    cityName: 'Dubai',
  },
  {
    id: 'process3',
    image: '/rolnew/global/country/new-york.jpg',
    countryCode: 'US',
    cityName: 'New York',
  },
  {
    id: 'process4',
    image: '/rolnew/global/country/paris.jpg',
    countryCode: 'FR',
    cityName: 'Paris',
  },
  {
    id: 'process5',
    image: '/rolnew/global/country/japan.jpg',
    countryCode: 'JP',
    cityName: 'Tokyo',
  },
];

function OurPresence() {
  return (
    <>
      <div className='w-full h-[1px] mx-auto'>
        <Pic src='/rolnew/global/hr.svg' alt='hr' objectFit='cover' />
      </div>
      <Container className='bg-[#223544] sm:pt-[110px] pb-6 py-8 text-center'>
        <Title subTitle='Our Presence' mainTitle='Locations we serve' />
        <CountryList countryList={countryList} />
      </Container>
    </>
  );
}

export default OurPresence;
