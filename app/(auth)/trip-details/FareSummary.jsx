import { useContext } from 'react';
import { UtilityContext } from 'context/UtilityContext';
import P from 'components/typography/P';
import RideMapPath from './RideMapPath';

const features = [
  'Instant confirmation',
  'All-inclusive pricing',
  'Secure Payment by credit card, debit card',
];

const allCards = [
  'visa',
  'mastercard',
  'maestro',
  'amex',
  // 'applepay',
  // 'googlepay',
  // 'paypal',
];

export default function FareSummary({
  origin,
  destination,
  distance,
  setDistance,
  duration,
  setDuration,
  selectedVehicle,
  userCurrency,
  rideCategory,
}) {
  const { formatPrice } = useContext(UtilityContext);
  return (
    <div className="rounded-xl bg-custom-lightGray p-[14px]">
      <div className="max-w-full h-[23rem] mo:h-72">
        <RideMapPath
          origin={origin?.latLng}
          destination={destination?.latLng}
          setDistance={setDistance}
          setDuration={setDuration}
          rideCategory={rideCategory}
        />
      </div>

      <div className="max-w-[26rem] mx-auto mt-6">
        {
         Number(distance) > 0
          && (
          <>
            <div className="flex flex-col gap-2 min-w-max mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
              <P className="flex-none w-full sm:max-w-[12rem] font-bold text-gray-800">
                Travel Distance
              </P>
              <P className="text-gray-600">
                {distance ? Number(distance)?.toFixed(2) : 0}
                {' '}
                miles
              </P>
            </div>
            <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
              <P className="flex-none w-full sm:max-w-[12rem] font-bold text-gray-800">
                Estimated Travel Time
              </P>
              <P className="text-gray-600">
                {duration}
                {' '}
                mins
              </P>
            </div>
          </>
          )
        }
        <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
          <P className="flex-none w-full sm:max-w-[12rem] font-bold text-gray-800">
            Your Ride
          </P>
          <P className="text-gray-600">{selectedVehicle?.vehicle_cat_name}</P>
        </div>

        <div className="w-[18rem] mx-auto my-10 h-44">
          <img
            src={selectedVehicle?.vehicle_imge_url || '/images/trip-details/car.png'}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>

        <P className="w-full sm:max-w-[12rem] font-bold text-gray-800">
          Estimated Tariff
          {' '}
        </P>
        <div className="flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
          <P className="flex-none w-full sm:max-w-[12rem] text-gray-800">
            Price
          </P>
          <P className="text-gray-600">
            {
             selectedVehicle?.tariff && formatPrice(selectedVehicle.tariff, userCurrency || 'GBP')
            }
          </P>
        </div>
        {/* <div className="flex flex-col gap-2 mo:mb-4 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
          <P className="flex-none w-full sm:max-w-[12rem] text-gray-800">
            High Demand Rate
          </P>
          <P className="text-gray-600">50 GBP</P>
        </div> */}
        <hr className="border border-gray-300 mo:my-4" />
        <div className="flex flex-col gap-2 mo:mb-2 sm:my-3 sm:items-center sm:gap-5 sm:flex-row">
          <P className="flex-none w-full sm:max-w-[12rem] text-gray-800">
            Estimated Total
          </P>
          <P className="text-gray-600">
            { selectedVehicle?.tariff && formatPrice(selectedVehicle.tariff, userCurrency || 'GBP')}
          </P>
        </div>
      </div>

      <hr className="my-10 border border-gray-300" />

      <div className="max-w-md mx-auto">
        {features.map((item, index) => (
          <div className="flex gap-3 my-4 font-medium text-gray-600" key={item}>
            <img
              src={`/images/trip-details/${index === 1 ? 'zap' : 'tick'}.svg`}
              alt=""
              className="w-5 h-5"
            />
            <P className="text-gray-600">{item}</P>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 px-4 mx-auto my-12">
        {allCards.map((item) => (
          <img
            key={item}
            src={`/images/trip-details/cards/${item}.svg`}
            alt={item}
            className="w-12 h-10"
          />
        ))}
      </div>
    </div>
  );
}
