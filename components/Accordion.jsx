'use client';

import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 bg-white py-3 px-4 rounded-md my-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-base font-medium text-[#2C2C2C]">{question}</h3>
        {isOpen ? (
          <IoIosArrowUp className="text-primary !w-10 !h-4" />
        ) : (
          <IoIosArrowDown className="text-gray-400 !w-10 !h-4" />
        )}
      </div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
}

export default Accordion;
