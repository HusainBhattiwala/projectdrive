const { useContext } = require('react');
const { UtilityContext } = require('context/UtilityContext');
const { default: P } = require('components/typography/P');

export default function RideRef({ tripDetails }) {
  const { getDate, getTime } = useContext(UtilityContext);
  return (
    <div className="bg-white my-2 flex sm:flex-row flex-col justify-between sm:px-4 px-2 py-2 rounded-md text-black">
      <P className="text-primary font-semibold">
        {tripDetails?.booker_fname}
        {' '}
        {tripDetails?.booker_lname}
      </P>
      <div className="sm:ml-auto flex">
        <P className="font-semibold border-r px-2">
          #
          {tripDetails?.booking_ref}
        </P>
        <P className="font-semibold border-r px-2">
          {getDate(tripDetails?.travel_date)}
          ,
          {' '}
          {getTime(tripDetails?.travel_date)}
        </P>
        <P className="font-semibold pl-2">
          {tripDetails?.region_name}
        </P>
      </div>
    </div>
  );
}
