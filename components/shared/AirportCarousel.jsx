import P from '../typography/P';
import { Pic } from '../ui/Pic';
import CarouselWrapper from '../ui/CarouselWrapper';

const airports = [
  {
    id: 1,
    airportImg: '/images/country/north_america.png',
    airportName: 'North America',
  },
  {
    id: 2,
    airportImg: '/images/country/mumbai.jpg',
    airportName: 'Mumbai',
  },
  {
    id: 3,
    airportImg: '/images/country/france.png',
    airportName: 'France',
  },
  {
    id: 4,
    airportImg: '/images/country/dubai.jpg',
    airportName: 'Dubai',
  }, {
    id: 5,
    airportImg: '/images/country/london.png',
    airportName: 'London',
  },
  {
    id: 6,
    airportImg: '/images/country/delhi.jpg',
    airportName: 'Delhi India',
  },
];
const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  756: { items: 4 },
  1024: { items: 5 },
  1400: { items: 6 },
};
function Ourairports() {
  const airportSlides = airports.map((airport) => (
    <div className="card w-11/12" key={airport.id}>
      <Pic
        src={airport.airportImg}
        alt={airport.airportName}
        className="object-fit rounded-md"
      />
      <div className="card-body items-center text-center xl:px-8 lg:px-4 px-2 py-2">
        <P className="text-black my-3 font-semibold capitalize">
          {airport.airportName}
        </P>
      </div>
    </div>
  ));
  return (
    <div className="mt-10">
      <CarouselWrapper slides={airportSlides} responsive={responsive} noDots />
    </div>
  );
}

export default Ourairports;
