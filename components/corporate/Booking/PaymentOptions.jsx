import React, { useEffect, useState } from 'react';
import P from 'components/typography/P';
import Dropdown from 'components/shared/Dropdown';
import CardDetails from './CardDetails';

const allCards = [
  'visa',
  'mastercard',
  'amex',
  'maestro',
  // 'applepay',
  // 'googlepay',
];

const cardOptionRenderer = (item) => (
  <div className="flex items-center justify-between gap-2 font-medium capitalize">
    <img
      src={`/images/trip-details/cards/${item.brand}.svg`}
      className="w-10 h-10"
      alt={item.brand}
    />
    ********
    {item?.last4}
  </div>
);
const paymentOptionRenderer = (item) => (
  <div className="flex items-center justify-between gap-2 font-medium capitalize w-full">
    {item?.label}
  </div>
);

function PaymentOptions({
  setCardDetails, submitCardDetails, setPaymentType, setSelectedCard, selectedCard, setCardType, cardType, paymentType, setSubmitCardDetails, getCardDetails, cardList, loaded,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleCardControlTypeChange = (value) => {
    setCardType(value);
  };
  const handleCardTypeChange = (event) => {
    setCardType(event.target.value);
  };

  const [foundCards, setFoundCards] = useState([]);

  const paymentOptins = [
    {
      label: 'Prepaid',
      value: 'card',
    },
    // {
    //   label: 'Credit',
    //   value: 'credit',
    // },
  ];

  useEffect(() => {
    setFoundCards(cardList);
    setIsLoaded(loaded);
  }, [cardList, loaded]);
  return (
    <>
      <div className="flex justify-between gap-x-4 border-b">
        <P className="text-base font-semibold uppercase text-black my-3">PAYMENT METHOD</P>
        <div className="ml-auto flex items-center gap-x-1">
          {allCards.map((item) => (
            <img
              key={item}
              src={`/images/trip-details/cards/${item}.svg`}
              alt={item}
              className="w-10 h-8"
            />
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 items-center my-3">
        <div className="col-span-1">
          <P className="text-[#797979] text-sm text-left">Payment Type</P>
        </div>
        <div className="col-span-2">
          <Dropdown
            optionRenderer={paymentOptionRenderer}
            options={paymentOptins || []}
            onChange={(item) => setPaymentType(item)}
            className="!w-full"
          >
            {paymentType?.label}
          </Dropdown>
        </div>
      </div>
      {
        paymentType?.value === 'card' && (
          <>
            {
            foundCards.length > 0 && (
            <div className="grid sm:grid-cols-3 grid-cols-1 items-center">
              <div className="col-span-1">
                <P className="text-[#797979] text-sm text-left">Select Type</P>
              </div>
              <div className="col-span-2">
                <div className="flex gap-x-1">
                  <div
                    className={`form-control cursor-pointer ${
                      cardType === 'token' ? 'active' : ''
                    }`}
                    onClick={() => handleCardControlTypeChange('token')}
                  >
                    <label className="label" htmlFor="cardtype">
                      <input
                        type="radio"
                        name="cardtype"
                        value="token"
                        className="radio radio-primary !w-[1.2rem] !h-[1.2rem]"
                        checked={cardType === 'token'}
                        onChange={handleCardTypeChange}
                      />
                      <span className="label-text  pl-1 cursor-pointer text-xs">
                        Use saved cards
                      </span>
                    </label>
                  </div>
                  <div
                    className={`form-control cursor-pointer pl-2 ${
                      cardType === 'new-card' ? 'active' : ''
                    }`}
                    onClick={() => handleCardControlTypeChange('new-card')}
                  >
                    <label className="label" htmlFor="cardtype">
                      <input
                        type="radio"
                        name="cardtype"
                        value="new-card"
                        className="radio radio-primary !w-[1.2rem] !h-[1.2rem]"
                        checked={cardType === 'new-card'}
                        onChange={handleCardTypeChange}
                      />
                      <span className="label-text  pl-1 cursor-pointer text-xs">
                        Add card details
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            )
          }
            {
              cardType === 'new-card'
                ? <CardDetails setCardDetails={setCardDetails} submitCardDetails={submitCardDetails} setPaymentType={setPaymentType} setSubmitCardDetails={setSubmitCardDetails} getCardDetails={getCardDetails} />
                : (
                  <div className="grid sm:grid-cols-3 grid-cols-1 items-center my-3">
                    <div className="col-span-1">
                      <P className="text-[#797979] text-sm text-left">Card Details</P>
                    </div>
                    {
                      isLoaded
                    && (
                    <div className="col-span-2">
                      <Dropdown
                        optionRenderer={cardOptionRenderer}
                        options={foundCards || []}
                        onChange={(item) => setSelectedCard(item)}
                        className="!w-full"
                      >
                        <div className="flex items-center gap-2 font-medium capitalize w-full">
                          <img
                            src={`/images/trip-details/cards/${selectedCard?.brand}.svg`}
                            className="w-10 h-10"
                            alt={selectedCard?.brand}
                          />
                          ********
                          {selectedCard?.last4}
                        </div>
                      </Dropdown>
                    </div>
                    )
                    }
                  </div>
                )
            }
          </>
        )
      }
    </>
  );
}

export default PaymentOptions;
