import React, { useContext } from 'react';
import { UtilityContext } from 'context/UtilityContext';
import P from 'components/typography/P';
import BookingSummary from './BookingSummary';
import RideMapPath from './RideMapPath';

export default function DisplayFields({
  bookingSummary,
  origin,
  destination,
  distance,
  setDistance,
  duration,
  setDuration,
  userCurrency,
  rideCategory,
  riderDateTime,
  flightNo,
  userPickLocation,
  userDropLocation,
  selectedVehicle,
  adultNo,
  infantNo,
  childNo,
  bagNo,
  passengerName,
  passengerLastName,
  passengerMobile,
  passengerEmail,
  driverNotes,
  nameOnBoard,
}) {
  const { formatPrice } = useContext(UtilityContext);
  const time = `${riderDateTime.hour}:${riderDateTime.minute} ${riderDateTime.daytime}`;

  const selectedDayWithTime = riderDateTime
    ? `${
      riderDateTime.selectedDate.getMonth() + 1
    }/${riderDateTime.selectedDate.getDate()}/${riderDateTime.selectedDate.getFullYear()} ${time}`
    : 'Not Set';

  const renderWithNewlines = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <div className="">
      <div className="p-5 mb-4 bg-white rounded-lg py-7">
        <BookingSummary bookingSummary={bookingSummary} />
      </div>
      <div className="h-[29rem] mo:h-80">
        <RideMapPath
          origin={origin?.latLng}
          destination={destination?.latLng}
          setDistance={setDistance}
          setDuration={setDuration}
          rideCategory={rideCategory}
        />
      </div>
      <div className="p-5 my-4 mb-4 bg-white rounded-lg py-7">
        <div className="flex justify-center gap-3 mx-auto text-center sm:gap-8 lg:gap-16">
          <div className="flex flex-col justify-between gap-2">
            <P className="text-lg font-bold text-gray-700">Travel Distance</P>
            <P className="text-gray-600">
              {distance && Number(distance)?.toFixed(2)}
              {' '}
              miles
            </P>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <P className="text-lg font-bold text-gray-700">Travel Time</P>
            <P className="text-gray-600">
              {duration}
              {' '}
              mins
            </P>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <P className="text-lg font-bold text-gray-700">Estimated Tariff</P>
            <P className="text-gray-600">
              {selectedVehicle.tariff && formatPrice(selectedVehicle.tariff, userCurrency || 'GBP')}
            </P>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg">
        <div className="flex gap-4">
          <div className="w-1/2">
            <LabeledText
              label="Ride Category"
              text={rideCategory}
              className="capitalize"
            />
            <LabeledText
              label="Pick-Up Point"
              text={userPickLocation?.address}
            />
            <LabeledText
              label="Drop-Off Point"
              text={userDropLocation?.address}
            />
            <LabeledText
              className="mo:!mb-0"
              label="Additional Information"
              text={(
                <>
                  {adultNo ? (
                    <P>
                      Adults:
                      {' '}
                      {adultNo}
                    </P>
                  ) : (
                    <P />
                  )}
                  {bagNo ? (
                    <P>
                      Bags:
                      {' '}
                      {bagNo}
                    </P>
                  ) : (
                    <P />
                  )}
                  {childNo ? (
                    <P>
                      Childs:
                      {' '}
                      {childNo}
                    </P>
                  ) : (
                    <P />
                  )}
                  {infantNo ? (
                    <P>
                      Infants:
                      {infantNo}
                    </P>
                  ) : (
                    <P />
                  )}
                </>
              )}
            />
          </div>
          <div className="w-1/2">
            <LabeledText label="Ride Date & Time" text={selectedDayWithTime} />
            <LabeledText label="Flight No." text={flightNo} />
            <LabeledText
              label="Vehicle Class"
              text={selectedVehicle?.vehicle_cat_desc}
              className="mo:!mb-0"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="w-1/2 p-4 bg-white rounded-lg mo:w-full">
          <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
            Passenger Details
          </P>
          <LabeledText label="Name" text={`${passengerName} ${passengerLastName}`} />
          <LabeledText
            label="Mobile"
            text={passengerMobile}
            breakAll
          />
          <LabeledText
            label="Email"
            text={passengerEmail}
            className="mo:!mb-0"
            breakAll
          />
          <LabeledText
            label="Name Board Details"
            text={nameOnBoard}
            className="mo:!mb-0"
          />
        </div>
        <div className="w-1/2 p-4 bg-white rounded-lg mo:w-full">
          <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800 mb-2">
            Driver Notes
          </P>
          <P className="text-gray-600 break-words">{renderWithNewlines(driverNotes)}</P>
        </div>
      </div>
    </div>
  );
}

function LabeledText({
  label, className, text, breakAll,
}) {
  return (
    <div
      className={`flex flex-col gap-2 mo:mb-5 sm:my-3 sm:gap-5 sm:flex-row ${className}`}
    >
      <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">{label}</P>
      <P className={`text-gray-600 ${breakAll ? 'break-all' : 'break-words'}`}>
        {text}
      </P>
    </div>
  );
}
