import Container from 'rolnew/comp/Container';
import Title from './Title';
import Fleets from './Fleets';
import Category from './Category';

const carCategoryList = [
  {
    id: 'carcat1',
    category: 'Business Class',
  },
  {
    id: 'carcat2',
    category: 'First Class',
  },
  {
    id: 'carcat3',
    category: 'Luxury Class',
  },
  {
    id: 'carcat4',
    category: 'Electric',
  },
  {
    id: 'carcat5',
    category: 'SUV',
  },
  {
    id: 'carcat6',
    category: 'MVP',
  },
  {
    id: 'carcat7',
    category: 'Sprinter',
  },
];

const slideData = [
  {
    pic: '/rolnew/home/car.png',
    caption: 'Audi A6',
    id: 0,
  },
  {
    pic: '/rolnew/home/car.png',
    caption: 'Mercedes Benz E class',
    id: 1,
  },
  {
    pic: '/rolnew/home/car.png',
    caption: 'BMW 5 series',
    id: 2,
  },
  {
    pic: '/rolnew/home/car.png',
    caption: 'Mercedes Benz E class',
    id: 3,
  },
  {
    pic: '/rolnew/home/car.png',
    caption: 'Audi A6',
    id: 5,
  },
  {
    pic: '/rolnew/home/car.png',
    caption: 'BMW 5 series',
    id: 6,
  },
  {
    pic: '/rolnew/home/car.png',
    caption: 'Mercedes Benz E class',
    id: 7,
  },
];

function OurFeet({ showBooking }) {
  return (
    <>
      <Container className="bg-[#11202D] sm:pt-[60px] py-8 text-center">
        <Title subTile="Our Fleet" mainTitle="Introducing Our Luxury Cars Handpicked For Your Comfort" />
        <Category categorys={carCategoryList} />
      </Container>
      <div className="bg-[#11202D] sm:pt-[10px] text-center xl:!px-[70px] lg:px-[45px] md:px-[22px] sm:px-[10px] px-4">
        <Fleets slideData={slideData} showBooking={showBooking} />
      </div>
    </>
  );
}

export default OurFeet;
