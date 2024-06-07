import propTypes from 'prop-types';
import H2 from './typography/H2';
import P from './typography/P';

export default function Routes({ heading }) {
  const airportroutes = [
    {
      id: 1,
      from: 'Heathrow',
      to: 'City Airport',
      time: '2h 15min',
      dist: '103 miles',
    },
    {
      id: 2,
      from: 'Heathrow',
      to: 'City Airport',
      time: '2h 15min',
      dist: '103 miles',
    },
    {
      id: 3,
      from: 'Heathrow',
      to: 'City Airport',
      time: '2h 15min',
      dist: '103 miles',
    },
    {
      id: 4,
      from: 'Heathrow',
      to: 'City Airport',
      time: '2h 15min',
      dist: '103 miles',
    },
    {
      id: 5,
      from: 'Heathrow',
      to: 'City Airport',
      time: '2h 15min',
      dist: '103 miles',
    },
    {
      id: 6,
      from: 'Heathrow',
      to: 'City Airport',
      time: '2h 15min',
      dist: '103 miles',
    },
    {
      id: 7,
      from: 'Heathrow',
      to: 'City Airport',
      time: '2h 15min',
      dist: '103 miles',
    },

    {
      id: 8,
      from: 'Heathrow',
      to: 'City Airport',
      time: '2h 15min',
      dist: '103 miles',
    },
  ];
  return (
    <section className="bg-[#F0F2F7]">
      <div className="container mx-auto !md:py-12 px-4 lg:px-8 xl:px-10 2xl:px-12 py-6">
        <H2 className="text-center !text-[32px] font-[700] text-black my-3">
          {heading}
        </H2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 my-10">
          {airportroutes.map((routes) => (
            <div className="rounded-md bg-white p-4" key={routes.id}>
              <div className="flex justify-between">
                <P className="!text-[15px] font-[700] text-black">
                  {routes.from}
                </P>
                <P className="text-primary font-bold">&#8644;</P>
                <P className="!text-[15px] font-[700] text-black">{routes.to}</P>
              </div>
              <div className="flex justify-evenly mt-2">
                <P className="!text-[14px] font-[400]">{routes.time}</P>
                <P className="!text-[14px] font-[400]">{routes.dist}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Routes.propTypes = {
  heading: propTypes.string,
};

Routes.defaultProps = {
  heading: 'Top Routes',
};
