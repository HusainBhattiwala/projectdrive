'use client';

import { useState } from 'react';
import Button from 'rolnew/ui/Button';
import Input from 'rolnew/ui/Input';

const labels = ['transfer', 'hourly'].map((item) => ({
  id: item,
  label: (
    <div className="flex gap-2 items-center max-w-max mx-auto">
      <img src={`/rolnew/home/${item}.svg`} alt="" className="h-5 w-5" />
      <p className="capitalize">{item}</p>
    </div>
  ),
}));

export default function BookingForm() {
  const [chosenTab, setChosenTab] = useState('transfer');

  return (
    <div className="flex gap-6 flex-col justify-center w-full sm:w-[26rem]">
      {/* <Tab labels={labels} chosenTab={chosenTab} setChosenTab={setChosenTab} /> */}
      <div className="flex gap-2 sm:gap-4 items-center justify-between">
        {labels.map((item) => (
          <button
            type="button"
            className={`rounded-full px-4 sm:px-8 py-2 sm:py-3 border border-white/40 pop w-1/2 font-medium ${
              chosenTab !== item.id && 'opacity-40'
            }`}
            id={item.id}
            onClick={() => setChosenTab(item.id)}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>

      <Input
        inputIcon="/rolnew/home/inputIcon.svg"
        leadingIcon="/rolnew/home/gps.svg"
        label="Pick Up"
        placeholder="Enter pick up location"
      />
      <Input
        inputIcon="/rolnew/home/inputIcon.svg"
        leadingIcon="/rolnew/home/gps.svg"
        label="Drop Off"
        placeholder="Enter drop off location"
      />
      <button type="button" className="pop max-w-max">
        <div className="flex gap-2 items-center">
          <svg
            className="h-5 w-5 text-[#FDC65C]"
            fill="none"
            strokeWidth={2}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="font-medium text-[#FDC65C]">Add Stop</p>
        </div>
      </button>

      <div className="h-[1px] w-full bg-[#B2B2B2]/60" />

      <button type="button" className="pop max-w-max">
        <div className="flex gap-2 items-center">
          <svg
            className="h-5 w-5 text-[#FDC65C]"
            fill="none"
            strokeWidth={2}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="font-medium text-[#FDC65C]">Add Return Journey</p>
        </div>
      </button>

      <Button cta>Search Ride</Button>
    </div>
  );
}
