'use client';

import { useState } from 'react';
import Button from 'rolnew/ui/Button';
import sendEmail from './SendMail';

function TextField({ label, state, setState }) {
  return (
    <div className="box w-full">
      <div className="relative">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor="floating_filled"
          className="absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto uppercase"
        >
          {label}
        </label>
        <input
          value={state}
          onChange={(ev) => setState(ev.target.value)}
          type="text"
          id="floating_filled"
          className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200  appearance-none  dark:border-gray-300 dark:focus:border-gray-200 focus:border-primary focus:outline-none focus:ring-0  peer"
          placeholder=""
        />
      </div>
    </div>
  );
}

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [msg, setMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const statesArr = [
    { state: name, setState: setName, label: 'Full Name' },
    { state: email, setState: setEmail, label: 'Email' },
    { state: phone, setState: setPhone, label: 'Phone' },
    { state: address, setState: setAddress, label: 'Address' },
    { state: msg, setState: setMsg, label: 'Message' },
  ];

  return (
    <>
      <div className="">
        <p className="text-2xl text-black font-semibold text-center sm:text-3xl mb-6 mt-4">
          Please fill out the form
        </p>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {[statesArr[0], statesArr[1], statesArr[2], statesArr[3]].map(
            (item) => (
              <div className="col-span-1" key={item.label}>
                <TextField
                  state={item.value}
                  setState={item.setState}
                  label={item.label}
                />
              </div>
            ),
          )}
        </div>

        <div className="mt-4">
          <TextField
            state={statesArr[4].state}
            setState={statesArr[4].setState}
            label={statesArr[4].label}
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button
          onClick={async () => {
            await sendEmail({
              name,
              email,
              phone,
              address,
              msg,
            });
            setIsSubmitted(true);
          }}
        >
          {!isSubmitted ? (
            <div className="flex items-center gap-1">
              <p>Submit</p>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <p>Submitted</p>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                />
              </svg>
            </div>
          )}
        </Button>
      </div>
    </>
  );
}
