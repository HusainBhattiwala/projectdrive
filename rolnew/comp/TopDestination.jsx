'use client';

import Container from 'rolnew/comp/Container';
import Pic from 'rolnew/util/Pic';
import Title from 'rolnew/section/home/Title';
import CountryList from 'rolnew/section/home/CountryList';
import Button from 'rolnew/ui/Button';
import { useContext } from 'react';
import { ModalContext } from 'context/ModalContext';
import BookModal from './BookModal';

const countryList = [
  {
    id: 1,
    image: '/rolnew/global/country/london.jpg',
    countryCode: 'GB',
    cityName: 'London',
  },
  {
    id: 2,
    image: '/rolnew/global/country/london.jpg',
    countryCode: 'GB',
    cityName: 'Paris',
  },
  {
    id: 3,
    image: '/rolnew/global/country/london.jpg',
    countryCode: 'GB',
    cityName: 'Dubai',
  },
  {
    id: 4,
    image: '/rolnew/global/country/london.jpg',
    countryCode: 'GB',
    cityName: 'New York',
  },
  {
    id: 5,
    image: '/rolnew/global/country/london.jpg',
    countryCode: 'GB',
    cityName: 'Tokyo',
  },
];

const items = [
  <a key='1' href='/about'>
    About
  </a>,
  <a key='2' href='/services'>
    Services
  </a>,
  <a key='3' href='/contact'>
    Contact
  </a>,
];

function TopDestination({ data, bg }) {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      <div className='w-full mx-auto'>
        <Pic src='/rolnew/global/hr.svg' alt='hr' objectFit='cover' />
      </div>
      <Container className={`${bg} sm:py-16 py-8 text-center`}>
        <Title subTitle='Top Destinations' mainTitle={data?.title} />
        <CountryList countryList={data?.list} bg={bg} />

        <Button
          className='mt-14 w-full sm:w-[30%]'
          cta
          onClick={() => openModal()}
        >
          Book Now
        </Button>
      </Container>
      <BookModal />
    </>
  );
}

export default TopDestination;
