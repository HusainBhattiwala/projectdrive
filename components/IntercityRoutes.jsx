import propTypes from 'prop-types';
import H2 from './typography/H2';
import P from './typography/P';

export default function Routes({ heading }) {
  const airportroutes = [
    {
      id: 1,
      from: 'London',
      to: 'Manchester',
      time: '1h 5m',
      dist: '208.5 mi',
    },
    {
      id: 2,
      from: 'London',
      to: 'Chester',
      time: '4h 5m',
      dist: '220.7 mi',
    },
    {
      id: 3,
      from: 'London',
      to: 'Aberdeen',
      time: '9h 24m',
      dist: '547.9 mi',
    },
    {
      id: 4,
      from: 'London',
      to: 'Reading',
      time: '1h 16m',
      dist: '42.1 mi',
    },
    {
      id: 5,
      from: 'London',
      to: 'Nottingham',
      time: '2h 50m',
      dist: '127.3 mi',
    },
    {
      id: 6,
      from: 'London',
      to: 'Bath',
      time: '2h 29m',
      dist: '114.9 mi',
    },
    {
      id: 7,
      from: 'London',
      to: 'Inverness',
      time: '9h 51m',
      dist: '570.6 mi',
    },

    {
      id: 8,
      from: 'London',
      to: 'York',
      time: '4h 14m',
      dist: '204.0 mi',
    },
    {
      id: 9,
      from: 'London',
      to: 'Leeds',
      time: '4h 9m',
      dist: '195.3 mi',
    },
    {
      id: 10,
      from: 'London',
      to: 'Newcastle-upon-..',
      time: '5h 19m',
      dist: '272.6 mi',
    },
    {
      id: 11,
      from: 'London',
      to: 'Edinburgh',
      time: '7h 33m',
      dist: '402.5 mi',
    },
    {
      id: 12,
      from: 'Manchester',
      to: 'Bristol',
      time: '3h 10m',
      dist: '167.9 mi',
    },
    {
      id: 13,
      from: 'London',
      to: 'Birmingham',
      time: '2h 33m',
      dist: '128.5 mi',
    },
    {
      id: 14,
      from: 'London',
      to: 'Glasgow',
      time: '7h 5m',
      dist: '414.5 mi',
    },

    {
      id: 15,
      from: 'London',
      to: 'Liverpool',
      time: '4h 14m',
      dist: '223.3 mi',
    },
    {
      id: 16,
      from: 'London',
      to: 'Bristol',
      time: '2h 21m',
      dist: '117.7 mi',
    },
    {
      id: 17,
      from: 'London',
      to: 'Oxford',
      time: '1h 35m',
      dist: '58.8 mi',
    },
    {
      id: 18,
      from: 'London',
      to: 'Cambridge',
      time: '1h 43m',
      dist: '61.3 mi',
    },
    {
      id: 19,
      from: 'London',
      to: 'Cardiff',
      time: '2h 57m',
      dist: '148.8 mi',
    },
    {
      id: 20,
      from: 'London',
      to: 'Brighton',
      time: '1h 55m',
      dist: '64.6 mi',
    },
  ];
  return (
    <section className="bg-[#F0F2F7]">
      <div className="container mx-auto !md:py-12 py-6 px-4 lg:px-8 xl:px-10 2xl:px-12">
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
