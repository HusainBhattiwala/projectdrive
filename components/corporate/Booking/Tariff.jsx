import Image from 'next/image';
import React, {
  useCallback,
  useContext, useEffect, useRef, useState,
} from 'react';
import api from 'components/utils/api';
import Loader from 'components/shared/Loader';
import { UtilityContext } from 'context/UtilityContext';
import useOnClickOutside from 'hooks/useOnClickOutside';
import P from 'components/typography/P';

function Tariff({
  pickUpLocation, dropLocation, viaLocations, setDistance, setDuration, pickUpVehicle, setPickUpVehicle, setDestination, setWayLocations, bookingHours, bookingType, returnJourney, label, userCurrency, isShowOpenTariff = true, initialTariff, vehicleError, vehicleRef,
}) {
  const { formatPrice } = useContext(UtilityContext);
  const [tariffList, setTariffList] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [showTariff, setShowTariff] = useState(isShowOpenTariff);
  const [showLoader, setShowLoader] = useState(true);
  const convertKmToMile = (distanceKM) => {
    const factor = 0.621371;
    return Math.round(distanceKM * factor);
  };
  const getDurationInHour = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}hr ${remainingMinutes}min`;
  };
  useEffect(() => {
    setTariffList(initialTariff);
    setShowLoader(false);
  }, [initialTariff]);

  const outSideClickRef = useRef();

  useOnClickOutside(outSideClickRef, () => {
    if (pickUpVehicle) {
      setShowTariff(false);
    }
  });

  const getDistance = async (fromPlacePoint, toPlacePoint, wayPlacePoints) => {
    const payload = {
      from_place_point: fromPlacePoint || '',
      to_place_point: toPlacePoint || '',
      way_place_point: wayPlacePoints || [],
    };
    const disTance = await api.post('/misc-address/admin/get-distance', payload);
    return disTance;
  };

  const getTariff = useCallback(async (fromLocationId, toLocationId, wayPlacePointsLocationsId, distanceInMiles) => {
    setShowLoader(true);
    const payload = {
      to_location: toLocationId,
      from_location: fromLocationId,
      way_location: wayPlacePointsLocationsId,
      adult_seat_count: 0,
      luggage_count: 0,
      round_trip: false,
      user_currency: '£',
      distance: distanceInMiles || 0,
      region_id: pickUpLocation?.regionid,
      user_type: 'C',
    };
    if (bookingType === 'HOURLY') {
      payload.hours = bookingHours;
    }
    const getTarrifList = await api.post('/tariff', payload);
    setShowLoader(false);
    if (getTarrifList?.data.length > 0) {
      setFirstLoad(false);
      setTariffList(getTarrifList?.data);

      if (pickUpVehicle && !firstLoad) {
        const selectedVehicle = getTarrifList?.data.filter((vehilce) => vehilce.vehicle_cat_id === pickUpVehicle?.vehicle_cat_id);
        if (selectedVehicle.length > 0) {
          setPickUpVehicle(selectedVehicle[0]);
        } else {
          setPickUpVehicle(null);
          setShowTariff(true);
        }
      }
    } else {
      setTariffList([]);
      setPickUpVehicle(null);
      setShowTariff(true);
    }
  }, [bookingHours, bookingType, firstLoad, pickUpLocation?.regionid, pickUpVehicle, setPickUpVehicle]);

  useEffect(() => {
    const wayLocations = viaLocations.filter((location) => location?.address);
    let fromPlacePoint;
    let toPlacePoint;
    let wayPlacePoints = [];
    let fromLocationId;
    let toLocationId;
    let wayPlacePointsLocationsId = [];
    if (pickUpLocation) {
      fromPlacePoint = pickUpLocation?.latLng;
      fromLocationId = pickUpLocation?.locationid;
    }

    if (wayLocations.length === 1 && !dropLocation) {
      toPlacePoint = wayLocations[0]?.latLng;
      setDestination(toPlacePoint);
      toLocationId = wayLocations[0]?.locationid;
    } else if (wayLocations.length > 1 && !dropLocation) {
      toPlacePoint = wayLocations[wayLocations.length - 1]?.latLng;
      setDestination(toPlacePoint);
      toLocationId = wayLocations[wayLocations.length - 1]?.locationid;
      wayLocations.pop();
      wayPlacePoints = wayLocations.map((location) => ({
        lat: location?.latLng?.split(',')[0],
        lng: location?.latLng?.split(',')[1],
      }));
      wayPlacePointsLocationsId = wayLocations.map((location) => (
        location?.locationid
      ));
      const wayPlacePointsLatLng = wayLocations.map((location) => ({
        latLng: location?.latLng,
      }));
      setWayLocations(wayPlacePointsLatLng);
    } else {
      toPlacePoint = dropLocation?.latLng;
      toLocationId = dropLocation?.locationid;
      wayPlacePoints = wayLocations.map((location) => ({
        lat: location?.latLng?.split(',')[0],
        lng: location?.latLng?.split(',')[1],
      }));
      wayPlacePointsLocationsId = wayLocations.map((location) => (
        location?.locationid
      ));
      setDestination(toPlacePoint);
      const wayPlacePointsLatLng = wayLocations.map((location) => ({
        latLng: location?.latLng,
      }));
      setWayLocations(wayPlacePointsLatLng);
    }

    if (fromPlacePoint && toPlacePoint) {
      getDistance(fromPlacePoint, toPlacePoint, wayPlacePoints).then(async (res) => {
        const distanceKM = res?.data?.distance.split(' ')[0];
        const distanceInNumber = parseFloat(distanceKM.replace(/,/g, ''));
        const factor = 0.621371;
        const distanceInMiles = Math.round(distanceInNumber * factor);
        setDistance({
          inKm: Math.round(parseFloat(res?.data?.distance)),
          inMiles: distanceInMiles,
        });
        setDuration({
          formattedHour: getDurationInHour(res?.data?.duration),
          // eslint-disable-next-line no-unsafe-optional-chaining
          inMinute: (res?.data?.duration),
        });
        await getTariff(fromLocationId, toLocationId, wayPlacePointsLocationsId, distanceInMiles);
      });
    } else if (fromPlacePoint) {
      getTariff(fromLocationId, toLocationId, wayPlacePointsLocationsId, 0);
      setDuration({
        formattedHour: getDurationInHour(0),
        // eslint-disable-next-line no-unsafe-optional-chaining
        inMinute: (0),
      });
      setDistance({
        inKm: Math.round(parseFloat(0)),
        inMiles: convertKmToMile(Math.round(parseFloat(0))),
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickUpLocation, dropLocation, viaLocations, bookingHours, bookingType]);

  return (
    <div className="relative !text-gray-700" ref={vehicleRef}>
      {
        !pickUpVehicle && vehicleError && tariffList.length > 0 && (
          <P className="animate-bounce absolute -top-5 right-0 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
            Required
          </P>
        )
      }
      {
      returnJourney && (
        <div className="bg-[#232C68] text-white text-xs font-semibold py-2 w-full text-left sm:px-4 px-2 uppercase rounded-t-sm -mb-[1px] z-[2]">{label}</div>
      )
    }
      <div className="max-h-[370px] overflow-y-auto relative z-[1]" ref={outSideClickRef}>
        {
          tariffList.length === 0 && (

            <div className="bg-white w-full py-2 sm:px-4 px-2 rounded-md border border-gray-300 mb-3 cursor-pointer flex justify-center items-center min-h-[80px] flex-col">
              <div className="relative w-12 h-12">
                <Image src="/images/icons/no-car.png" alt="no-car" fill />
              </div>
              <P className="!text-lg !text-black">No vehilce to show</P>
            </div>
          )
        }
        {showLoader && <Loader className="w-8 h-8" />}
        {showTariff && tariffList && tariffList.map((tariffData) => (
          <div className="bg-white w-full grid grid-cols-9 py-2 sm:px-4 px-2 rounded-md border border-gray-300 mb-3 cursor-pointer min-h-[100px]" key={tariffData?.vehicle_cat_id} onClick={() => { setPickUpVehicle(tariffData); setShowTariff(false); }}>
            <div className="sm:col-span-3 col-span-4 relative flex flex-col justify-start pr-2">
              <div className="w-full h-full relative mx-auto">
                <Image fill src={tariffData?.vehicle_imge_url || 'https://rdbucket1.s3.eu-west-2.amazonaws.com/rd-vehicle-category-list/first-S-Class.png'} className="object-contain h-auto w-auto" alt={tariffData?.vehicle_cat_name} />
              </div>
              <div className="border-r w-1 absolute h-[95%] right-0 top-0" />
            </div>
            <div className="sm:col-span-4 col-span-5 pl-2 flex flex-col">
              <p className="text-primary uppercase font-semibold text-sm ">
                {tariffData?.vehicle_cat_name}
                {' '}
                Class
              </p>
              <p className="text-[#3B3B3B] text-xs">
                {tariffData?.vehicle_cat_desc}
                .
              </p>
              <div className="mt-auto mb-3 !text-gray-700">
                <div className="flex items-center gap-x-2">
                  <div className="w-[14px] h-[13px] relative">
                    <Image src="/images/icons/uers_primary.svg" fill className="object-fit h-auto w-auto" alt="uers" />
                  </div>
                  <p className="text-xs !text-gray-700">
                    max.
                    {' '}
                    {tariffData?.adult_seat_count}
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-1">
                  <div className="w-[12px] h-[16px] relative">
                    <Image src="/images/icons/luggage.svg" fill className="object-fit h-auto w-auto" alt="luggage" />
                  </div>
                  <p className="text-xs pl-[2px] !text-gray-700">
                    max.
                    {' '}
                    {tariffData?.luggage_count}
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 col-span-9 flex flex-col text-right">
              {!firstLoad && (
              <p className="text-sm font-bold tracking-tighter text-black">
                {formatPrice(tariffData?.tariff, userCurrency || 'GBP')}
              </p>
              )}
            </div>
          </div>
        ))}

        {!showTariff && pickUpVehicle && (
        <div className={`bg-primary bg-opacity-5 w-full grid grid-cols-9 py-2 sm:px-4 px-2 border border-primary mb-3 cursor-pointer min-h-[100px] ${returnJourney ? 'rounded-b-md border-t-0' : 'rounded-md'}`}>
          <div className="sm:col-span-3 col-span-4 relative flex flex-col justify-start pr-2">
            <div className="w-full h-full relative mx-auto">
              <Image fill src={pickUpVehicle?.vehicle_imge_url || '/images/carimages/economy.png'} className="object-contain h-auto w-auto" alt={pickUpVehicle?.vehicle_cat_name} />
            </div>
            <div className="border-r border-gray-300 w-1 absolute h-[95%] right-0 top-0" />
          </div>
          <div className="sm:col-span-4 col-span-5 pl-2 flex flex-col">
            <p className="text-primary uppercase font-semibold text-sm">
              {pickUpVehicle?.vehicle_cat_name}
              {' '}
              Class
            </p>
            <p className="text-[#3B3B3B] text-xs">
              {pickUpVehicle?.vehicle_cat_desc}
              .
            </p>
            <div className="mt-auto mb-3">
              <div className="flex items-center gap-x-2">
                <div className="w-[14px] h-[13px] relative">
                  <Image src="/images/icons/uers_primary.svg" fill className="object-fit h-auto w-auto" alt="uers" />
                </div>
                <p className="text-xs !text-gray-700">
                  max.
                  {' '}
                  {pickUpVehicle?.adult_seat_count}
                </p>
              </div>
              <div className="flex items-center gap-x-2 mt-1">
                <div className="w-[12px] h-[16px] relative">
                  <Image src="/images/icons/luggage.svg" fill className="object-fit h-auto w-auto" alt="luggage" />
                </div>
                <p className="text-xs pl-[2px] !text-gray-700">
                  max.
                  {' '}
                  {pickUpVehicle?.luggage_count}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 col-span-9 flex flex-col text-right relative">
            {!firstLoad && (
              <p className="text-sm font-bold tracking-tighter text-black sm:text-right text-left">
                {formatPrice(pickUpVehicle?.tariff, userCurrency || 'GBP')}
              </p>

            )}
            <button
              type="button"
              className="text-primary text-xs font-bold whitespace-pre absolute -right-1 sm:bottom-3 bottom-0"
              onClick={() => { setShowTariff(true); }}
            >
              Change vehicle
              {' '}
              {'>'}
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Tariff;
