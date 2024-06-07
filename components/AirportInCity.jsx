import propTypes from 'prop-types';
import P from './typography/P';
import { Pic } from './ui/Pic';

export default function AirportInCity({ airportImg, airportAbout }) {
  return (
    <section className="bg-[#FFF5F5]">
      <div className="container p-10 mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">
          <div>
            <Pic src={airportImg} />
          </div>
          <div>
            <P className="!text-base font-[400]">{airportAbout}</P>
            <P className="!text-base font-[400] mt-6">
              RolDrive makes it super easy for clients to book their chauffeured ride:
            </P>
            <ul className="list-disc list-inside ml-4">
              <li>Choose your transfer type (Transfers/Hourly)</li>
              <li>Choose your Pickup location</li>
              <li>Choose your Drop off location</li>
              <li>Choose a Date and Time</li>
              <li>Choose the number of travellers</li>
              <li>Now simply search for rides!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

AirportInCity.propTypes = {
  airportImg: propTypes.string.isRequired,
  airportAbout: propTypes.string.isRequired,
};

// AirportInCity.defaultProps = {
//   airportImg: 'Pass value to airportImg prop',
//   airportAbout: 'Pass value to airportAbout prop',
// };
