/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useState } from 'react';
import AirportCard from './AirportCard';
import H2 from './typography/H2';
import { BackgroundImage } from './ui/BackgroundImage';
// import { BackgroundImage } from './ui/BackgroundImage';
import NewDropdown from './ui/NewDropdown';
import P from './typography/P';

export default function AirportsAround() {
  const london = [
    {
      id: 1,
      name: 'Heathrow Airport',
      img: '/images/airports/london/heathrow-airport.webp',
      url: '/airport-transfer-heathrow',
      countryCode: 'GB',
    },
    {
      id: 2,
      name: 'Gatwick Airport',
      img: '/images/airports/london/Gatwick-Airport.webp',
      url: '/airport-transfer-gatwick',
      countryCode: 'GB',
    },
    {
      id: 3,
      name: 'London City Airport',
      img: '/images/airports/london/London-City-Airport.webp',
      url: '/airport-transfer-london-city',
      countryCode: 'GB',
    },
    {
      id: 4,
      name: 'London Southend Airport',
      img: '/images/airports/london/London-Southend-Airport.webp',
      url: '/airport-london-southend',
      countryCode: 'GB',
    },
    {
      id: 5,
      name: 'London Stansted Airport',
      img: '/images/airports/london/London-Stansted-Airport.webp',
      url: '/airport-london-stansted',
      countryCode: 'GB',
    },
    {
      id: 6,
      name: 'Luton Airport',
      img: '/images/airports/london/Luton-Airport.webp',
      url: '/airport-transfer-luton',
      countryCode: 'GB',
    },
  ];

  const paris = [
    {
      id: 1,
      name: 'Charles de Gaulle Airport',
      img: '/images/airports/france/france.jpg',
      countryCode: 'FR',
    },
    {
      id: 2,
      name: 'Orly Airport',
      img: '/images/airports/france/paris-orly-airport.jpg',
      countryCode: 'FR',
    },
    {
      id: 3,
      name: 'Beauvais-Tillé Airport',
      img: '/images/airports/france/Beauvais.jpg',
      countryCode: 'FR',
    },
    {
      id: 4,
      name: 'Le Bourget Airport',
      img: '/images/airports/france/le_bourget.jpg',
      countryCode: 'FR',
    },
  ];

  // const delhi = [
  //   {
  //     id: 1,
  //     name: 'Indira Gandhi International Airport',
  //     img: '/images/airports/india/Indira.jpg',
  //     countryCode: 'IN',
  //   },
  //   {
  //     id: 2,
  //     name: 'Safdarjung Airport',
  //     img: '/images/airports/india/Safdarjung.jpg',
  //     countryCode: 'IN',
  //   },
  // ];

  // const mumbai = [
  //   {
  //     id: 3,
  //     name: 'Chhatrapati Shivaji Maharaj International Airport',
  //     img: '/images/airports/india/Chhatrapati.jpg',
  //     countryCode: 'IN',
  //   },
  //   {
  //     id: 4,
  //     name: 'Juhu Aerodrome',
  //     img: '/images/airports/india/JuhuAerodrome.jpg',
  //     countryCode: 'IN',
  //   },
  // ];
  const dubai = [
    {
      id: 1,
      name: 'Dubai International Airport',
      img: '/images/airports/dubai/DXB.jpg',
      countryCode: 'AE',
    },
    {
      id: 2,
      name: 'Al Maktoum International Airport',
      img: '/images/airports/dubai/DWC.jpg',
      countryCode: 'AE',
    },
  ];

  const usa = [
    {
      id: 1,
      name: 'Buffalo Niagara International Airport',
      img: '/images/airports/usa/Buffalo.jpg',
      countryCode: 'US',
    },
    {
      id: 2,
      name: 'LaGuardia airport',
      img: '/images/airports/usa/LaGuardia.jpg',
      countryCode: 'US',
    },
    {
      id: 3,
      name: 'John F. Kennedy International Airport',
      img: '/images/airports/usa/jfk.jpg',
      countryCode: 'US',
    },
    {
      id: 4,
      name: 'Newark Liberty International Airport',
      img: '/images/airports/usa/Newark.jpg',
      countryCode: 'US',
    },
  ];

  const Country = [
    { name: 'Select your City', code: 'all' },
    { name: 'London, UK', country: 'london', code: 'UK' },
    { name: 'Dubai, UAE', country: 'dubai', code: 'UK' },
    { name: 'Paris, France - Comming Soon', country: 'paris', code: 'FR' },
    { name: 'New York, US - Comming Soon', country: 'usa', code: 'US' },
  ];

  const all = london.concat(paris, usa, dubai);

  const [selectedCity, setselectedCity] = useState({
    name: 'Select your City',
    code: 'all',
  });

  return (
    <section className="bg-[#F8F5F0]">
      <div className="container px-3 py-14 mx-auto">
        <H2 className="text-center text-black !text-[24px] font-bold uppercase">
          Top Airports Around Your Location
        </H2>
        <div className="md:p-10 p-4 ">
          <div className="bg-center w-full relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
              <BackgroundImage
                src="/images/banner/airport-selector-bg.png"
                alt="booking_bg"
                className="w-full h-auto object-cover brightness-[0.75] rounded-md grayscale"
              />
            </div>
            <div className="py-[44px] px-[15px] sm:px-[50px]">
              <div className="p-6 pb-5 bg-white rounded flex flex-col justify-around  md:flex-row relative z-20">
                <label
                  htmlFor="dropdown"
                  className="lg:mr-10 md:mr-4 mr-0 text-center md:text-left mt-[2px]"
                >
                  We are showing you the airports we are available in:
                </label>
                <NewDropdown
                  className="bg-white border border-solid border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none block w-auto pl-1 p-0.5"
                  label={selectedCity?.name}
                >
                  {Country.map((st) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <li
                      key={st.code}
                      value={selectedCity}
                      className="flex flex-row justify-between py-2 items-center"
                      onClick={() => {
                        setselectedCity(st);
                      }}
                    >
                      <div className="py-2 px-2 flex items-start w-full">
                        <P className="text-neutral-700 text-sm font-medium tracking-tight">
                          {st.name}
                        </P>
                      </div>
                    </li>
                  ))}
                </NewDropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mx-auto gap-5 px-6">
          {selectedCity?.country === 'all'
            && all.map((airport) => (
              <AirportCard
                key={airport.name}
                url={airport.url || '/airport-transfers/#'}
                airportName={airport.name}
                image={airport.img}
                countryCode={airport.countryCode}
              />
            ))}

          {/* { selectedCity === 'delhi' && (
            delhi.map((airport) => (
              <AirportCard
                key={airport.name}
                url={airport.url || '/airport-transfers/#'}
                airportName={airport.name}
                image={airport.img}
                countryCode={airport.countryCode}
              />
            ))
          )} */}

          {selectedCity?.country === 'dubai'
            && dubai.map((airport) => (
              <AirportCard
                key={airport.name}
                url={airport.url || '/airport-transfers/#'}
                airportName={airport.name}
                image={airport.img}
                countryCode={airport.countryCode}
              />
            ))}

          {/* { selectedCity === 'mumbai' && (
            mumbai.map((airport) => (
              <AirportCard
                key={airport.name}
                url={airport.url || '/airport-transfers/#'}
                airportName={airport.name}
                image={airport.img}
                countryCode={airport.countryCode}
              />
            ))
          )} */}

          {selectedCity?.country === 'paris'
            && paris.map((airport) => (
              <AirportCard
                key={airport.name}
                url={airport.url || '/airport-transfers/#'}
                airportName={airport.name}
                image={airport.img}
                countryCode={airport.countryCode}
              />
            ))}

          {selectedCity?.country === 'london'
            && london.map((airport) => (
              <AirportCard
                key={airport.name}
                url={airport.url || '/airport-transfers/#'}
                airportName={airport.name}
                image={airport.img}
                countryCode={airport.countryCode}
              />
            ))}

          {selectedCity?.country === 'usa'
            && usa.map((airport) => (
              <AirportCard
                key={airport.name}
                url={airport.url || '/airport-transfers/#'}
                airportName={airport.name}
                image={airport.img}
                countryCode={airport.countryCode}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
