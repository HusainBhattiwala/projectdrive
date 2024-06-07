import PropTypes from 'prop-types';
import { Pic } from 'components/ui/Pic';

export default function PointerText({ bold, plain }) {
  return (
    <div className="my-2 !text-[14px]">
      <div className="!h-2 mb-[4px] !w-2 !object-contain mr-[5px] inline-block">
        <Pic
          src="/images/icons/fwar.png"
          alt="Pointer icon"
          className="object-fill"
        />
      </div>
      <div className="font-semibold inline-block">
        {bold}
        {' '}
        :
      </div>
      {' '}
      {plain}
    </div>
  );
}

PointerText.propTypes = {
  bold: PropTypes.string.isRequired,
  plain: PropTypes.string.isRequired,
};
