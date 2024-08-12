import { useContext } from 'react';
import { UtilityContext } from 'context/UtilityContext';
import H1 from './typography/H1';
import H4 from './typography/H4';
import P from './typography/P';
import Button from './ui/Button';
import { Pic } from './ui/Pic';

function CarsCard({
  isActive,
  selectCar,
  showBookBtn,
  fleetDetails,
  isSelected = false,
}) {
  console.log(`fleetDetails = ${fleetDetails}`);
  console.log(`fleetDetails vehicle_imge_url = ${fleetDetails.vehicle_imge_url}`);

  const imageSrc = fleetDetails.vehicle_imge_url
    ? fleetDetails.vehicle_imge_url
    : '/images/cars/car5.png';

  console.log(`src value = ${imageSrc}`);

  const { formatPrice } = useContext(UtilityContext);
  return (
    <div
      className={` relative w-full rounded-md py-6 px-6 mb-8 cursor-pointer bg-[#384957] ${isActive || isSelected === fleetDetails.vehicle_cat_id
        ? 'border-primary border'
        : 'rounded-md'
      }`}
    >
      <div className="flex flex-col items-center sm:flex-row">
        <div className="mx-auto ml-auto w-full h-full max-w-[236px] car-img">
          <Pic
            src={`${fleetDetails.vehicle_imge_url ? fleetDetails.vehicle_imge_url : '/images/cars/car5.png'}`}
            className="object-contain"
          />
          {/* <img
            src={fleetDetails.vehicle_imge_url || '/images/cars/car5.png'}
            alt="Vehicle"
            className="object-contain"
            style={{
              zIndex: 100, visibility: 'visible', opacity: 1, position: 'relative', display: 'block',
            }} */}

        </div>
        <div className="relative w-full mb-auto mr-auto sm:pl-3 sm:text-left text-center grow sm:pt-2 pt-10">
          <H1 className="text-[#CED5E5] font-normal lg:!text-2xl">
            {fleetDetails.vehicle_cat_name}
          </H1>
          <P>{fleetDetails.vehicle_cat_desc}</P>

          <div className="flex justify-center sm:justify-start mt-2 gap-x-2">
            <div className="flex items-center">
              <div className="w-4 h-4">
                <Pic src="/rolnew/global/icons/users-white.svg" alt="users" />
              </div>
              <P className="pl-1 font-normal text-[#E5EAFA]">
                max.
                {' '}
                {fleetDetails.adult_seat_count}
              </P>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4">
                <Pic src="/rolnew/global/icons/luggage-white.svg" alt="luggage" />
              </div>
              <P className="pl-1 font-normal text-[#E5EAFA]">
                max.
                {' '}
                {fleetDetails.luggage_count}
              </P>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:absolute relative sm:right-[35px] sm:top-2/4 sm:-translate-y-2/4 sm:w-auto w-full sm:mt-0 mt-5">
        <div className="flex flex-col sm:items-start items-center">
          <H4 className="text-white font-medium !text-2xl">
            {formatPrice(fleetDetails?.tariff, fleetDetails?.currency_text)}
          </H4>
          {showBookBtn && (
            <Button
              kind="primary"
              className="w-full px-4 !py-2 mt-4 sm:w-auto"
              onClick={() => {
                selectCar(fleetDetails);
              }}
            >
              BOOK NOW
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarsCard;
