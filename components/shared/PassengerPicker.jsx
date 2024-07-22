/* eslint-disable max-len */
import P from '../typography/P';

function PassengerPicker({
  setPassenger, passengers, decrement, increment, fleetDetails
}) {
  return (
    <div className="rounded-md w-full grid sm:grid-cols-2  grid-cols-1 gap-x-2 font-sans items-center justify-between gap-y-5">
      <div className="flex flex-row items-center md:justify-start justify-between">
        <div className="leading-none font-semibold !min-w-[170px]">
          <P className="!font-normal !text-base">
            Adult(s)
            {' '}
            <span className="text-xs font-normal text-[#CED5E5]">(12+ Years)</span>
          </P>
        </div>
        <div className="flex flex-row items-center justify-between sm:ml-[12px] ">
          <div onClick={() => decrement('adult', true)}>
            <button type="button" kind="primary" className="btn-primary !w-6 !h-6 rounded-md text-bold text-sm text-normal text-white flex items-center justify-center">  - </button>
          </div>
          <P className="text-bold w-[25px] text-center ">{passengers.adult}</P>
          <div onClick={() => {
              increment('adult');
              setPassenger();
          }}>
            <button type="button" kind="primary" className="btn-primary !w-6 !h-6 rounded-md text-bold text-sm text-normal text-white flex items-center justify-center" disabled={passengers.adult >= fleetDetails.adult_seat_count}>  + </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center md:justify-start justify-between">
        <div className="font-semibold leading-none !min-w-[170px]">
          <P className="!font-normal !text-base ">
            Luggage Bags
          </P>
        </div>
        <div className="flex flex-row items-center justify-between sm:ml-[12px] ">
          <div onClick={() => decrement('luggage')}>
            <button type="button" kind="primary" className="btn-primary !w-6 !h-6 rounded-md text-bold text-sm text-normal text-white flex items-center justify-center">  - </button>
          </div>
          <P className="text-bold w-[25px] text-center ">{passengers.luggage}</P>
          <div onClick={() => { increment('luggage'); setPassenger(); }}>
            <button type="button" kind="primary" className="btn-primary !w-6 !h-6 rounded-md text-bold text-sm text-normal text-white flex items-center justify-center" disabled={passengers.luggage >= fleetDetails.luggage_count}>
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center md:justify-start justify-between">
        <div className="font-semibold leading-none !min-w-[170px]">
          <P className="!font-normal !text-base ">
            Children
            {' '}
            <span className="text-xs font-normal text-[#CED5E5]">(2-12 Years)</span>
          </P>
        </div>
        <div className="flex flex-row items-center justify-between sm:ml-[12px] ">
          <div onClick={() => decrement('children')}>
            <button type="button" className="btn-primary !w-6 !h-6 rounded-md text-bold text-sm text-normal text-white flex items-center justify-center">  - </button>
          </div>
          <P className="text-bold w-[25px] text-center ">{passengers.children}</P>
          <div onClick={() => { increment('children'); setPassenger(); }}>
            <button type="button" kind="primary" className="btn-primary !w-6 !h-6 rounded-md text-bold text-sm text-normal text-white flex items-center justify-center" disabled={passengers.children >= fleetDetails.children_count}>  + </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center md:justify-start justify-between">
        <div className="leading-none font-semibold !min-w-[170px]">
          <P className="!font-normal !text-base">
            Infant
            {' '}
            <span className="text-xs font-normal text-[#CED5E5]">(0-2 Years)</span>
          </P>
        </div>
        <div className="flex flex-row items-center justify-between sm:ml-[12px] ">
          <div onClick={() => decrement('infant')}>
            <button type="button" className="btn-primary !w-6 !h-6 rounded-md text-bold text-sm text-normal text-white flex items-center justify-center">  - </button>
          </div>
          <P className="text-bold w-[25px] text-center ">{passengers.infant}</P>
          <div onClick={() => { increment('infant'); setPassenger(); }}>
            <button type="button" kind="primary" className="btn-primary !w-6 !h-6 rounded-md text-bold text-sm text-normal text-white flex items-center justify-center" disabled={passengers.infant >= fleetDetails.infant_count}>
              +
            </button>
          </div>
        </div>
      </div>
      {/* <div>
          <Button
            type="button"
            kind="primary"
            className={`btn btn-primary w-full text-white text-semibold py-1 px-4 mt-5 h-10 ${adult === 0 ? 'btn-disabled' : ''}`}
            onClick={setPassenger}
            disabled={adult === 0}
          >
            Confirm
          </Button>
        </div> */}
    </div>
  );
}

export default PassengerPicker;
