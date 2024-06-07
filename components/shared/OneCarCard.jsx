import PropTypes from 'prop-types';
import H3 from 'components/typography/H3';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';

export default function OneCarCard({ vimg, vname, passengers }) {
  return (
    <div className="h-auto p-2 flex flex-col justify-end !w-72">
      {/* lg:!h-60 !min-h-56 */}
      <Pic src={vimg} alt="car" />
      <div className="text-center my-4">
        <H3 className="text-black font-semibold">{vname}</H3>
        <P>
          Upto
          {' '}
          {passengers}
        </P>
      </div>
    </div>

  );
}
OneCarCard.propTypes = {
  vname: PropTypes.string.isRequired,
  vimg: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
};
