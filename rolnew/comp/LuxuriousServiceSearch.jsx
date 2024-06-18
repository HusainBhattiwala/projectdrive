'use client';

import Container from 'rolnew/comp/Container';
import Pic from 'rolnew/util/Pic';
import Title from 'rolnew/section/home/Title';
import Button from 'rolnew/ui/Button';
import Dropdown from 'rolnew/ui/Dropdown';
import BookModal from './BookModal';

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

function LuxuriousServiceSearch({ LuxuriousServiceData }) {
  return (
    <div className='pb-[100px] bg-[#223544] relative'>
      <Container className='bg-[#223544] sm:py-16 py-8 text-center'>
        <h2 className='sm:text-3xl text-2xl font-medium sm:leading-9 leading-tight text-[#CED5E5] capitalize'>
          Our Luxurious Services
        </h2>
        <div className='px-4 sm:px-24'>
          <div className='boxes p-[10px] bg-[#2F4456] mt-20 mb-10 w-full h-auto sm:h-20 flex flex-col sm:flex-row gap-1 justify-center items-center rounded-xl'>
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
                label='Choose Roadshow'
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
        <div className='grid gap-6 grid-cols-6 sm:grid-cols-12 max-w-[1236px] min-h-[168px] mx-auto'>
          {LuxuriousServiceData.map((item, index) => (
            <div
              className='flex flex-col items-center justify-center col-span-3'
              key={index}
            >
              <img
                src='/rolnew/global/icons/meet.svg'
                alt='meet'
                className='mb-1 w-10 h-14'
              />
              <h3 className='text-[#FFFFFF] mb-2 font-medium text-base sm:text-xl'>
                {item?.title}
              </h3>
              <p className='text-center text-sm font-normal text-[#E5EAFA]'>
                {item?.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <div className='sm:w-[74px] sm:h-[74px] w-12 h-12 absolute sm:-bottom-[36px] -bottom-6 left-2/4 -translate-x-2/4 z-10 bg-[#2F4456] flex items-center justify-center flex-col p-4 border border-[#FFFFFF] border-opacity-20 rounded-lg cursor-pointer'>
        <div className='animate-bounce'>
          <img
            alt='arrow-down'
            className='w-8 h-8'
            src='/rolnew/global/icons/arrow-down.svg'
          />
          <img
            alt='arrow-down'
            className='w-8 h-8 -mt-5'
            src='/rolnew/global/icons/arrow-down.svg'
          />
          <img
            alt='arrow-down'
            className='w-8 h-8 -mt-5'
            src='/rolnew/global/icons/arrow-down.svg'
          />
        </div>
      </div>
    </div>
  );
}

export default LuxuriousServiceSearch;
