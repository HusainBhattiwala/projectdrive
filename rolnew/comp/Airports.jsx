'use client';

import { useRouter } from 'next/navigation';
import Container from 'rolnew/comp/Container';
import Pic from 'rolnew/util/Pic';
import Title from 'rolnew/section/home/Title';
import CountryList from 'rolnew/section/home/CountryList';
import Button from 'rolnew/ui/Button';
import Dropdown from 'rolnew/ui/Dropdown';
import { useContext, useState } from 'react';
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

const items = ['about', 'services'];

function Airports({ scrollRef, airportsData, show = false }) {
  const { openModal } = useContext(ModalContext);
  const router = useRouter();

  const [selectedCity, setSelectedCity] = useState(
    airportsData?.dropdownOneData[0]
  );
  const [selectedAirport, setSelectedAirport] = useState(null);

  const handleSearch = () => {
    if (selectedAirport && airportsData) {
      //   console.log(selectedCity);
      const formattedCity = selectedCity
        ? selectedCity?.toLowerCase()
        : airportsData?.dropdownOneData[0].toLowerCase();
      const formattedAirport = selectedAirport
        .replace(' Airport', '')
        .replace(/\s+/g, '')
        .toLowerCase();
      router.push(
        `/rolnew/airport-transfers/${formattedCity}/${formattedAirport}`
      );
    }
  };

  return (
    <>
      <div className='w-full h-[1px] mx-auto'>
        <Pic src='/rolnew/global/hr.svg' alt='hr' objectFit='cover' />
      </div>
      <Container className='bg-[#11202D] sm:py-16 py-8 text-center'>
        <Title
          subTitle='Airport Transfers'
          mainTitle={airportsData?.title}
          description={airportsData?.desc}
        />

        {show && (
          <div className='px-4 sm:px-24'>
            <div
              className='boxes p-[10px] bg-[#2F4456] mt-20 mb-10 w-full h-auto sm:h-20 flex flex-col sm:flex-row gap-1 justify-center items-center rounded-xl'
              ref={scrollRef}
            >
              <div className='box w-full sm:w-full p-2'>
                <Dropdown
                  label={
                    airportsData
                      ? airportsData?.search?.dropdown1
                      : 'Choose Your City'
                  }
                  className='rounded-xl'
                  items={
                    airportsData?.dropdownOneData
                      ? airportsData?.dropdownOneData
                      : items
                  }
                  full
                  initialSelection={airportsData?.dropdownOneData[0]}
                  onSelect={setSelectedCity}
                />
              </div>
              <div className='box w-full sm:w-full p-2'>
                <Dropdown
                  label={
                    airportsData
                      ? airportsData?.search?.dropdown2
                      : 'Choose Your Destination'
                  }
                  className='rounded-xl'
                  items={
                    airportsData?.dropdownTwoData
                      ? airportsData?.dropdownTwoData
                      : items
                  }
                  full
                  onSelect={setSelectedAirport}
                />
              </div>
              <div className='box w-full sm:w-[50%] p-2'>
                <Button className='w-full' white onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}

        <CountryList
          countryList={airportsData ? airportsData?.list : countryList}
        />

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

export default Airports;
