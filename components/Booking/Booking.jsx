import PropTypes from 'prop-types';
import { BackgroundImage } from '../ui/BackgroundImage';
import BookingEngine from './BookingEngine';

function Booking({ bgimg }) {
  return (
    <div className="md:pt-[115px] md:pb-24 xl:px-14 lg:px-10 px-4 pt-10 pb-8 bg-center w-full h-auto relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <BackgroundImage
          src={bgimg}
          alt="booking_bg"
          className="w-full h-auto object-cover brightness-[0.7]"
        />
      </div>
      <BookingEngine />
    </div>
  );
}

export default Booking;

Booking.propTypes = {
  bgimg: PropTypes.string,
};

Booking.defaultProps = {
  bgimg: '/images/booking/booking_bg.png',
};
