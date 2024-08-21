import P from 'components/typography/P';

export default function BookingSummary({ bookingSummary }) {
  const dateTime = new Date(bookingSummary[1]);
  const date = dateTime.getDate();
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  return (
    <div className="flex flex-col justify-center gap-4 mx-auto text-center sm:flex-row sm:gap-8 lg:gap-16">
      <div className="w-full sm:w-1/3">
        <P className="mb-2 text-lg font-bold text-primary">Booking ID</P>
        <P className="!text-sm !text-gray-700">{bookingSummary[0]}</P>
      </div>
      <div className="w-full sm:w-1/3">
        <P className="mb-2 text-lg font-bold text-primary">
          Booking created on
        </P>
        <P className="!text-sm !text-gray-700">
          {date.toString().padStart(2, '0')}
          /
          {(month + 1).toString().padStart(2, '0')}
          /
          {year}
          {' , '}
          {hours}
          :
          {minutes}
        </P>
      </div>
      <div className="w-full sm:w-1/3">
        <P className="mb-2 text-lg font-bold text-primary">Region/City</P>
        <P className="!text-sm !text-gray-700">{bookingSummary[2]}</P>
      </div>
    </div>
  );
}
