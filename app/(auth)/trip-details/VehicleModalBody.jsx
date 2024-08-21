import { useContext } from 'react';
import P from 'components/typography/P';
import { UtilityContext } from 'context/UtilityContext';
import Image from 'next/image';

export default function VehicleModalBody({
  selectedVehicle,
  setSelectedVehicle,
  availableVehicles,
  userCurrency,
  setFirstUpdate,
}) {
  const { formatPrice } = useContext(UtilityContext);
  return (
    <div className="">
      {availableVehicles.length === 0 && (
        <P className="text-center text-gray-700 !text-lg">
          No matching vehicles found
        </P>
      )}
      {availableVehicles?.map((item) => (
        <div
          key={item?.vehicle_cat_id}
          className={`grid grid-cols-5 gap-6 px-2 py-3 my-2 rounded-lg cursor-pointer hover:bg-slate-100 w-full  ${
            selectedVehicle?.vehicle_cat_id === item?.vehicle_cat_id
            && 'ring-primary ring-1 bg-slate-50'
          }`}
          onClick={() => {
            setSelectedVehicle(item);
            setFirstUpdate(() => false);
          }}
        >
          <div className="mx-auto relative col-span-2 sm:w-[12rem] w-[10rem] h-full">
            <Image
              src={item?.vehicle_imge_url || '/images/trip-details/car.png'}
              alt=""
              fill
              className="object-contain w-9 h-9"
            />
          </div>
          <div className="border-l col-span-3 px-3">
            <P className="!text-lg font-bold text-gray-700">
              {item?.vehicle_cat_name}
            </P>
            <P className="mt-1 text-gray-700">{item?.vehicle_cat_desc}</P>
            <div className="flex flex-col gap-4 mt-5 sm:flex-row sm:justify-between">
              <div className="px-4">
                <div className="flex items-baseline gap-2">
                  <img src="/images/trip-details/people.svg" alt="persons" />
                  <P className="text-sm text-gray-700">
                    max.
                    {' '}
                    {item?.adult_seat_count}
                  </P>
                </div>
                <div className="flex items-baseline gap-2">
                  <img src="/images/trip-details/luggage.svg" alt="persons" />
                  <P className="text-sm text-gray-700">
                    max.
                    {' '}
                    {item?.luggage_count}
                  </P>
                </div>
              </div>

              <div className="">
                <P className="!text-lg font-bold text-right text-gray-700">
                  {formatPrice(item.tariff, userCurrency || 'GBP')}
                </P>
                {/* <P className="!text-sm !text-gray-700 text-right">
                  (
                  {Number(item?.tariff).toFixed(2)}
                  {' '}
                  {userCurrency}
                  )
                </P> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
