'use client';

import Container from 'rolnew/comp/Container';
import Pic from 'rolnew/util/Pic';
import Title from 'rolnew/section/home/Title';
import CountryList from 'rolnew/section/home/CountryList';
import Button from 'rolnew/ui/Button';
import Dropdown from 'rolnew/ui/Dropdown';
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

function TopPicks({ scrollRef, airportList }) {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      <div className='w-full h-[1px] mx-auto'>
        <Pic src='/rolnew/global/hr.svg' alt='hr' objectFit='cover' />
      </div>
      <Container className='bg-[#11202D] sm:py-16 py-8 text-center'>
        <Title subTile='Top Pics' mainTitle='Airport Transfers' />
        <div className='px-4 sm:px-24'>
          <div
            className='boxes p-[10px] bg-[#2F4456] mt-20 mb-10 w-full h-auto sm:h-20 flex flex-col sm:flex-row gap-1 justify-center items-center rounded-xl'
            ref={scrollRef}
          >
            <div className='box w-full sm:w-full p-2'>
              <Dropdown
                label='Choose Your City'
                className='rounded-xl'
                items={items}
                full
              />
            </div>
            <div className='box w-full sm:w-full p-2'>
              <Dropdown
                label='Choose Your Airport'
                className='rounded-xl'
                items={items}
                full
              />
            </div>
            <div className='box w-full sm:w-[50%] p-2'>
              <Button className='w-full' white>
                Search
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="grid gap-4 sm:grid-cols-12">
          <div className="flex flex-col items-center justify-center sm:col-span-3">
            <img src="/rolnew/global/icons/meet.svg" alt="meet" className="mb-1 w-10 h-14" />
            <h3 className="text-white mb-1">Fixed Price</h3>
            <p className="text-center text-[12px] text-white">Forget about extra costs or hidden fees as our prices are all-inclusive and include tariffs, tips, and other charges.</p>
          </div>
          <div className="flex  flex-col items-center justify-center  sm:col-span-3">
            <img src="/rolnew/global/icons/meet.svg" alt="meet" className="mb-1 w-10 h-14" />
            <h3 className="text-white mb-1">Free Meet & Greet</h3>
            <p className="text-center text-[12px] text-white">We make airport transfers a pleasure as our chauffeurs greet you with a paging board ready to help with your luggage.</p>
          </div>
          <div className="flex  flex-col items-center justify-center  sm:col-span-3">
            <img src="/rolnew/global/icons/meet.svg" alt="meet" className="mb-1 w-10 h-14" />
            <h3 className="text-white mb-1">60 Mins Free Waiting Time</h3>
            <p className="text-center text-[12px] text-white">Delayed flight? Worry not. Our chauffeurs will wait to pick you up from the airport with a free waiting time of 1 hour.</p>
          </div>
          <div className="flex  flex-col items-center justify-center  sm:col-span-3">
            <img src="/rolnew/global/icons/meet.svg" alt="meet" className="mb-1 w-10 h-14" />
            <h3 className="text-white mb-1">Arrival Name Board</h3>
            <p className="text-center text-[12px] text-white">As you get into our vehicles, you are provided with free amenities such as water bottles and Wifi to keep you refreshed and ready.</p>
          </div>
        </div> */}

        <CountryList countryList={airportList ? airportList : countryList} />

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

export default TopPicks;
