'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';

function Dropdown({ label, items, full }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(label);

  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button
        ref={ref}
        type='button'
        className={`${
          full && 'w-full'
        } flex justify-between border-[0.5px] border-solid border-[#7A7A7A] gap-2 items-center py-3 px-6 rounded-lg ${
          isOpen && 'shadow-inner'
        }`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p className='text-zinc-400 font-medium'>{selectedItem}</p>
        {!isOpen ? (
          <svg
            className='h-5 w-5 text-white'
            fill='none'
            strokeWidth={2.5}
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m19.5 8.25-7.5 7.5-7.5-7.5'
            />
          </svg>
        ) : (
          <svg
            className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-pry-700'}`}
            fill='none'
            strokeWidth={2.5}
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m4.5 15.75 7.5-7.5 7.5 7.5'
            />
          </svg>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`${
              full && 'w-full'
            } absolute top-10 z-40 bg-[#2F4456] rounded-[4px] max-h-[300px] overflow-y-scroll shadow-xl overflow-hidden text-pry-500 hover:cursor-pointer`}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className='p-3 hover:bg-[#293e51]'
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
