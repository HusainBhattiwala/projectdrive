import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import P from 'components/typography/P';
import api from 'components/utils/api';
import Loader from 'components/shared/Loader';

function CardDetails({
  setCardDetails, submitCardDetails, setSubmitCardDetails, getCardDetails,
}) {
  const formRef = useRef();

  const [showLoader, setShowLoader] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    setSubmitCardDetails(false);
    const number = data.cardnumber.split(' ').join('');
    const month = data.expiry.split(' /')[0];
    const year = data.expiry.split(' /')[1];
    const { cvv } = data;
    const cardData = {
      number, month, year, cvv, name: data?.cardholdername,
    };
    setShowLoader(true);
    const response = await api.post('/card-details/verify', {
      number,
      exp_month: month.trim(),
      exp_year: year.trim(),
    });
    if (response.data.status === 1) {
      setCardDetails((prev) => ({
        ...prev,
        number,
        month,
        year,
        cvv,
        name: data?.cardholdername,
      }));
      getCardDetails(cardData);
      setShowLoader(false);
    } else {
      toast.error(
        response.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
      setShowLoader(false);
      setCardDetails();
      getCardDetails();
    }
  };

  useEffect(() => {
    if (submitCardDetails) {
      formRef?.current?.click();
      setSubmitCardDetails(false);
    }
  }, [setSubmitCardDetails, submitCardDetails]);

  const inputCharacterOnly = (event) => {
    const { value } = event.target;
    const sanitizedValue = value.replace(/[^A-Za-z\s]/gi, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = sanitizedValue;
    clearErrors('cardholdername');
  };

  function handleCardNumberChange(event) {
    const { value } = event.target;
    if (value.length === 23) {
      setFocus('expiry');
    }
    let input = event.target.value;
    input = input.replace(/\s+/g, '').replace(/[^0-9]/gi, ''); // remove spaces and non-numeric characters
    let formattedInput = '';
    for (let i = 0; i < input.length; i += 1) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += ' ';
      }
      formattedInput += input.charAt(i);
    }
    // eslint-disable-next-line no-param-reassign
    event.target.value = formattedInput;
    clearErrors('cardnumber');
  }

  function formatExpiryDate(event) {
    // Get the current year as a four-digit number (e.g., 2023)
    const currentYear = new Date().getFullYear();

    // Extract the last two digits from the current year
    const lastTwoDigits = currentYear % 100;

    // Convert it to a string and pad it with leading zeros if necessary
    const currentYearTwoDigits = lastTwoDigits < 10 ? `0${lastTwoDigits}` : `${lastTwoDigits}`;

    const { value } = event.target;
    let formattedValue = value;

    // Remove any non-digit characters from the input value
    formattedValue = formattedValue.replace(/\D/g, '');

    // Add a space after the second digit
    if (formattedValue.length > 2) {
      formattedValue = `${formattedValue.slice(0, 2)} / ${formattedValue.slice(2)}`;
    }
    // If the user types a valid month (e.g., "02"), automatically add a forward slash
    if (formattedValue.length === 2 && formattedValue.charAt(1) !== '/') {
      formattedValue = `${formattedValue.slice(0, 2)} / ${formattedValue.slice(2)}`;
    }
    // Extract the month and year from the formatted value
    const month = formattedValue.slice(0, 2);
    const year = Number(formattedValue.slice(5));
    // Check if the month is valid (i.e., not greater than 12)
    if (month > 12) {
      formattedValue = '12 / ';
    }
    if (year && year < Number(currentYearTwoDigits)) {
      setError('yearerror', {
        type: 'custom',
        message: `The year must be greater than ${currentYearTwoDigits}.`,
      });
      return;
    } if (year && year > (Number(currentYearTwoDigits) + 15)) {
      setError('yearerror', {
        type: 'custom',
        message: `Year must be less then ${Number(currentYearTwoDigits) + 15}`,
      });
      return;
    }
    clearErrors('yearerror');

    if (value.length === 7) {
      setFocus('cvv');
    } else if (value.length === 0) {
      setFocus('cardnumber');
    }
    // eslint-disable-next-line no-param-reassign
    event.target.value = formattedValue;
  }

  const handleCvvInput = (event) => {
    const { value } = event.target;
    if (value.length === 0) {
      setFocus('expiry');
    }
    const formattedValue = value.slice(0, 4);
    // eslint-disable-next-line no-param-reassign
    event.target.value = formattedValue;
  };

  const checkEvent = (e) => {
    const { value } = e.target;
    const formattedValue = value;
    if (formattedValue.length === 5 && e.code === 'Backspace') {
      const month = formattedValue.slice(0, 2);
      e.target.value = `${month}`;
    }
  };

  return (
    <div className="relative">
      <form className="w-full relative" onSubmit={handleSubmit(onFormSubmit)}>
        {showLoader && <Loader className="!w-10 !h-10" />}
        <div className="grid sm:grid-cols-3 grid-cols-1 items-center my-3">
          <div className="col-span-1">
            <P className="text-[#797979] text-sm text-left">Card</P>
          </div>
          <div className="col-span-2">
            <input
              {...register('cardholdername', {
                required: 'Card holder name is required',
              })}
              type="text"
              onChange={inputCharacterOnly}
              placeholder="Card holder name"
              className="w-full input input-bordered focus:border-primary focus:outline-none text-sm"
            />
            {errors.cardholdername && (
            <P className=" text-red-500 px-1 py-1 !text-xs  z-10">
              {errors.cardholdername.message}
            </P>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 items-center my-3">
          <div className="col-span-1">
            <P className="text-[#797979] text-sm text-left">Card number</P>
          </div>
          <div className="col-span-2">
            <input
              {...register('cardnumber', {
                required: 'Card number is required',
                pattern: {
                  message: 'Card number must be 16 digits in the format xxxx xxxx xxxx xxxx',
                },
                minLength: {
                  value: 10,
                  message: 'Card is not valid',
                },
              })}
              type="tel"
              maxLength="23"
              placeholder="Card number"
              onChange={handleCardNumberChange}
              className="w-full input input-bordered focus:border-primary focus:outline-none text-sm"
            />

            {errors.cardnumber && (
            <P className=" text-red-500 px-1 py-1 !text-xs z-10">{errors.cardnumber.message}</P>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 items-center my-3">
          <div className="col-span-1">
            <P className="text-[#797979] text-sm text-left">Expiry Date</P>
          </div>
          <div className="col-span-2 flex justify-between items-center gap-x-4">
            <div className="max-w-[80px]">
              <input
                {...register('expiry', {
                  required: 'Expiry date is required',
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/,
                    message: 'Expiry date must be in the format MM / YY',
                  },
                })}
                type="text"
                placeholder="MM / YY"
                maxLength="7"
                autoComplete="cc-exp"
                onInput={formatExpiryDate}
                onKeyDown={checkEvent}
                className="w-full !px-1 input input-bordered focus:border-primary focus:outline-none text-sm"
              />

            </div>

            <P className="text-[#797979] text-sm text-center">CVV</P>
            <div className="max-w-[80px]">
              <input
                {...register('cvv', {
                  required: 'Card cvv is required',
                })}
                maxLength="4"
                onInput={handleCvvInput}
                type="number"
                placeholder="XXX"
                className="w-full !px-1 text-start input input-bordered focus:outline-none text-sm"
              />

            </div>
          </div>
          <div className="col-span-1" />
          <div className="col-span-2 flex justify-between items-center gap-x-4">
            <div>
              {errors.expiry && (
              <P className="text-red-500 px-1 py-1 !text-xs z-10">{errors.expiry.message}</P>
              )}

              {errors.yearerror && (
              <P className="text-red-500 px-1 py-1 !text-xs z-10">{errors.yearerror.message}</P>
              )}

            </div>

            {errors.cvv && (
            <P className="text-red-500 px-1 py-1 !text-xs z-10 flex-none ml-auto">{errors.cvv.message}</P>
            )}
          </div>
          <button
            type="submit"
            className="max-h-10 uppercase btn-primary py-3 px-4 w-0 h-0 hidden"
            ref={formRef}
          >
            Save Card
          </button>
        </div>
      </form>
    </div>

  );
}

export default CardDetails;
