/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdLock } from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';
import P from './typography/P';
import Button from './ui/Button';
import Dropdown from './ui/Dropdown';
import api from './utils/api';

const allCards = [
  'visa',
  'mastercard',
  'maestro',
  'amex',
];

function PayWithStripe({
  callBooking,
  showLoading,
  setShowToken,
  showToken,
  // payWithStripe,
  showOption = true,
}) {
  const [selectedCard, setSelectedCard] = useState('');

  // const paymentRef = useRef();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [isLoaded, setIsLoaded] = useState(false);

  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    async function fetchCardDetails() {
      const token = sessionStorage.getItem('token');
      if (token && token !== 'null') {
        const response = await api.get('/card-details');
        if (response.data) {
          setCardDetails(response.data);
          setSelectedCard(`***********${response.data[0].last4}`);
          setValue('token', response.data[0].card_token);
          setValue('last4', response.data[0].last4);
          setValue('brand', response.data[0].brand);
        }
      }
      setIsLoaded(true);
    }
    fetchCardDetails();
  }, [setShowToken, setValue]);

  const onSubmit = async (data) => {
    callBooking(data);
  };

  function getSelectedCard(details) {
    setValue('token', details.card_token);
    setValue('last4', details.last4);
    setValue('brand', details.brand);
    setSelectedCard(`***********${details.last4}`);
  }

  return (
    <div className="px-4 py-8 text-left bg-[#384957] lg:px-6 border-[#FFFFFF33] border-0.4 border-opacity-20 rounded-xl">
      {isLoaded && (
        <form
          className="w-full py-4"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="new-password"
        >
          <div className="sm:flex justify-between mb-5">
            {showOption && (
              <div className="form-control justify-end">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                    checked={showToken}
                    onChange={() => {
                      setShowToken(true);
                    }}
                  />
                  <span className="label-text ml-2 font-bold text-xl text-white">
                    Pay By New Credit / Debit Card
                  </span>
                </label>
                <div className="md:mx-auto md:w-8/12 sm:w-5/12 w-6/12 relative flex gap-x-2 items-start">
                  {/* <Pic
                    src="/images/icons/payments.png"
                    className="!object-contain"
                    alt="payments"
                  /> */}
                  {allCards.map((item) => (
                    <img
                      key={item}
                      src={`/images/trip-details/cards/${item}.svg`}
                      alt={item}
                      className="w-12 h-12"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* {cardDetails && showOption && (
              <div className="form-control flex-row mt-2 sm:mt-0">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                    checked={!showToken}
                    onChange={() => {
                      setShowToken(false);
                    }}
                  />
                  <span className="label-text ml-2 text-black font-semibold">
                    Use saved card
                  </span>
                </label>
              </div>
            )} */}
          </div>

          {!showToken && (
            <>
              <P className="font-semibold text-gray-900 mb-1 sm:text-right">
                Pick form saved card
              </P>
              <div className="flex sm:justify-end items-start mb-5">
                <div>
                  <Dropdown
                    label={selectedCard}
                    btnClass="border h-[2.8rem]"
                    dropDownClass="max-h-[200px] overflow-y-auto"
                  >
                    {cardDetails
                      && cardDetails.map((details) => (
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                        <li
                          key={details.card_token}
                          className="border-b"
                          onClick={() => {
                            getSelectedCard(details);
                          }}
                        >
                          <div className="hover:bg-gray-200 cursor-pointer flex justify-between flex-row">
                            <Image
                              src={`/images/trip-details/cards/${details?.brand}.svg`}
                              width={40}
                              height={30}
                              alt={details.brand}
                            />
                            <span>
                              *********
                              {details.last4}
                            </span>
                          </div>
                        </li>
                      ))}
                  </Dropdown>
                  {errors.token && (
                    <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
                      {errors.token.message}
                    </P>
                  )}
                </div>
              </div>
            </>
          )}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              isLoading={showLoading}
              className="max-h-10 uppercase px-10"
              kind="primary"
            >
              {!showLoading && (
                <>
                  <MdLock className="text-lg" />
                  PAY NOW
                </>
              )}
              {(showLoading) && <>Please Wait</>}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default PayWithStripe;
